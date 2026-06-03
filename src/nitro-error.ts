import { renderErrorPage } from "./lib/error-page";

export default (error: unknown, event: any) => {
  // Log the raw error to server stderr/stdout logs
  console.error("Nitro Captured Error:", error);

  // Generate a detailed error page containing the stack trace
  const html = renderErrorPage(error);

  return new Response(html, {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
};
