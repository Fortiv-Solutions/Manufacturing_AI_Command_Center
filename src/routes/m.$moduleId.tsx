import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { getModule } from "@/data/modules";

export const Route = createFileRoute("/m/$moduleId")({
  loader: ({ params }) => {
    const m = getModule(params.moduleId);
    if (!m) throw notFound();
    return m;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Module"} — Fortiv` },
      { name: "description", content: loaderData?.purpose ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">Module not found</h2>
      <Link to="/" className="text-primary text-sm mt-2 inline-block">Back to dashboard</Link>
    </div>
  ),
  component: ModuleLanding,
});

function ModuleLanding() {
  const m = Route.useLoaderData();
  return (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader
        breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
        title={m.title}
        subtitle={m.purpose}
      />

      <div className="rounded-2xl border bg-gradient-to-br from-primary/5 via-card to-card p-5 mb-6 flex items-start gap-4">
        <div className="h-11 w-11 rounded-xl bg-primary text-primary-foreground grid place-items-center shrink-0">
          <Sparkles className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="text-[11px] uppercase tracking-wider font-semibold text-primary">Demo wow moment</div>
          <p className="text-[13.5px] text-foreground/90 mt-1 leading-relaxed">{m.wow}</p>
        </div>
        <button className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-lg bg-foreground text-background text-[12.5px] font-medium hover:opacity-90 shrink-0">
          <Sparkles className="h-3.5 w-3.5" /> Run agent
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {m.subModules.map((s) => (
          <Link
            key={s.id}
            to="/m/$moduleId/$subId"
            params={{ moduleId: m.id, subId: s.id }}
            className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_2px_12px_rgba(16,24,40,0.05)] transition-all flex flex-col"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10.5px] font-mono text-muted-foreground bg-muted/60 px-1.5 py-0.5 rounded">{s.code}</span>
              <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live
              </span>
            </div>
            <div className="text-[15.5px] font-semibold tracking-tight mt-3">{s.title}</div>
            <p className="text-[12.5px] text-muted-foreground leading-relaxed mt-2 line-clamp-3 flex-1">{s.blurb}</p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                {s.kpis.slice(0, 2).map((k) => (
                  <span key={k.label}>
                    <span className="font-semibold text-foreground tabular">{k.value}</span>
                    <span className="ml-1">{k.label.toLowerCase()}</span>
                  </span>
                ))}
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
