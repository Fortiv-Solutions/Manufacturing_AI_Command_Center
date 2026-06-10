import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

let lastConsoleError: any = null;

// Intercept console.error calls during SSR rendering to capture errors swallowed by h3
const originalConsoleError = console.error;
console.error = (...args: any[]) => {
  if (args[0] instanceof Error) {
    lastConsoleError = args[0];
  } else if (args[0] && typeof args[0] === "object") {
    lastConsoleError = args[0];
  } else if (typeof args[0] === "string" && !args[0].includes("Module level directives")) {
    lastConsoleError = new Error(args.join(" "));
  }
  originalConsoleError.apply(console, args);
};

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  const err =
    lastConsoleError ?? consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`);
  return new Response(renderErrorPage(err), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    lastConsoleError = null; // Reset for each new request
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);

      // If the response is a 500, check if we captured an error in console.error
      if (response.status >= 500 && lastConsoleError) {
        return new Response(renderErrorPage(lastConsoleError), {
          status: 500,
          headers: { "content-type": "text/html; charset=utf-8" },
        });
      }

      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(error), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
