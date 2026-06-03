import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { modules } from "@/data/modules";
import { ArrowRight, Database, Activity, TrendingUp, FileSpreadsheet, Users } from "lucide-react";

export const Route = createFileRoute("/")(({
  head: () => ({
    meta: [
      { title: "Management Dashboards — Fortiv Manufacturing AI" },
      { name: "description", content: "AI-powered management command dashboards for Fortiv ManufactureSmart Pvt. Ltd." },
    ],
  }),
  component: DashboardsHome,
}));

const SUBMODULE_ICONS: Record<string, any> = {
  "6-2": Activity,
  "6-3": Database,
  "6-4": TrendingUp,
  "6-5": FileSpreadsheet,
  "6-6": Users,
};

function DashboardsHome() {
  const m6 = modules.find((m) => m.id === "m6-dashboards")!;

  return (
    <div className="max-w-[1480px] mx-auto space-y-6 animate-in fade-in duration-300">
      <PageHeader
        breadcrumbs={[{ label: "Dashboards" }]}
        title={m6.title}
        subtitle="Real-time operational intelligence pulling from ERP, CRM, and production systems — giving leadership live visibility into output, orders, inventory, cost variances, and financial performance."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {m6.subModules.map((s: any) => {
          const IconComponent = SUBMODULE_ICONS[s.id] || Database;
          return (
            <Link
              key={s.id}
              to="/m/$moduleId/$subId"
              params={{ moduleId: m6.id, subId: s.id }}
              className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[220px] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
              </div>

              <div className="space-y-2 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-mono font-bold text-muted-foreground bg-muted/75 px-2 py-0.5 rounded">
                    {s.code}
                  </span>
                  <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                  </span>
                </div>
                <div className="text-[15px] font-bold tracking-tight group-hover:text-primary transition-colors">
                  {s.title}
                </div>
                <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-2">
                  {s.blurb}
                </p>
              </div>

              <div className="border-t pt-3 mt-3 flex items-center justify-between relative z-10">
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-muted-foreground">
                  {s.kpis.slice(0, 2).map((k: any) => (
                    <span key={k.label} className="whitespace-nowrap">
                      <span className="font-semibold text-foreground font-mono">{k.value}</span>
                      <span className="ml-1 text-[10.5px]">{k.label.toLowerCase()}</span>
                    </span>
                  ))}
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
