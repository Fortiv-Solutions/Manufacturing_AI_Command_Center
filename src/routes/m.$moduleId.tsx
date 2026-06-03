import { createFileRoute, Link, notFound, Outlet, useRouterState } from "@tanstack/react-router";
import { 
  ArrowRight, Sparkles, Database, Cpu, AlertTriangle, Users, 
  ClipboardList, TrendingUp, FileSpreadsheet, CheckCircle2, 
  AlertCircle, Clock, Check, Send, ShieldAlert, Zap,
  Activity, ArrowUpRight, ArrowDownRight, MessageSquare,
  ShoppingCart, Truck, LayoutDashboard, PhoneCall
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { getModule } from "@/data/modules";
import { toast } from "sonner";


export const Route = createFileRoute("/m/$moduleId")({
  loader: ({ params }) => {
    const m = getModule(params.moduleId);
    if (!m) throw notFound();
    const { icon, ...serializableM } = m;
    return serializableM;
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

const SUBMODULE_ICONS: Record<string, any> = {
  "1-1": Database,
  "1-2": Cpu,
  "1-3": AlertTriangle,
  "1-4": Users,
  "1-5": ClipboardList,
  "1-6": TrendingUp,
  "1-7": FileSpreadsheet,
  "2-1": ClipboardList,
  "2-3": CheckCircle2,
  "2-4": FileSpreadsheet,
  "2-5": Users,
  "2-6": TrendingUp,
  "3-1": ClipboardList,
  "3-2": AlertTriangle,
  "3-3": Database,
  "3-4": FileSpreadsheet,
  "3-5": Activity,
  "3-6": Clock,
  "3-7": MessageSquare,
  "4-1": MessageSquare,
  "4-2": ShoppingCart,
  "4-3": Truck,
  "4-4": TrendingUp,
  "4-6": Users,

  "6-2": Activity,
  "6-3": Database,
  "6-4": TrendingUp,
  "6-5": FileSpreadsheet,
  "6-6": Users,
  "7-1": Clock,
  "7-2": ShieldAlert,
  "7-4": Users,
  "8-1": MessageSquare,
  "8-2": Cpu,
  "8-3": Send,
  "8-4": ShieldAlert,
  "8-5": Activity,
  "8-6": TrendingUp,
  "9-1": Activity,
  "9-2": Database,
  "9-3": PhoneCall,
};

function ModuleLanding() {
  const m = Route.useLoaderData();
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isExact = pathname === `/m/${m.id}` || pathname === `/m/${m.id}/`;

  if (!isExact) {
    return <Outlet />;
  }

  const isM1 = m.id === "m1-production";

  if (isM1) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="Conflict-free, real-time production scheduling and cross-system orchestration."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM2 = m.id === "m2-procurement";

  if (isM2) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="Automate the entire procure-to-pay cycle — from PO creation to GRN matching to invoice reconciliation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM3 = m.id === "m3-quality";

  if (isM3) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="Real-time QC Digitisation, NCR Tracking, Control Charts, and Compliance Workflows."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM4 = m.id === "m4-dealers";

  if (isM4) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="AI-driven dealer workflows: WhatsApp order intake, dispatch logistics tracking, secondary sales data, payment collections, and digital KYC onboarding."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM6 = m.id === "m6-dashboards";

  if (isM6) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="Real-time operational intelligence pulling from ERP, CRM, and production systems — giving leadership live visibility into output, orders, inventory, cost variances, and financial performance."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM7 = m.id === "m7-voice";

  if (isM7) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="Proactive, 24/7 AI-driven customer and dealer helplines in English, Hindi, and Gujarati — automating order statuses, complaint intake, payment follow-ups, and customer satisfaction surveys."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  const isM8 = m.id === "m8-complaints";

  if (isM8) {
    return (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
          title={m.title}
          subtitle="AI-powered complaint lifecycle management — from omnichannel intake and NLP classification to SLA-tracked CAPA resolution and proactive customer communication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {m.subModules.map((s: any) => {
            const IconComponent = SUBMODULE_ICONS[s.id] || Database;
            return (
              <Link
                key={s.id}
                to="/m/$moduleId/$subId"
                params={{ moduleId: m.id, subId: s.id }}
                className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_4px_16px_rgba(16,24,40,0.06)] transition-all flex flex-col justify-between h-[210px] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="h-28 w-28 -mr-6 -mt-6" />
                </div>

                <div className="space-y-2 relative z-10">
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Live Agent
                    </span>
                  </div>
                  <div className="text-[14.5px] font-bold tracking-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </div>
                  <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-2">
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

  // Fallback layout: Generic scalable grid interface for other modules (M3 - M9)
  return (
    <div className="max-w-[1480px] mx-auto space-y-6">
      <PageHeader
        breadcrumbs={[{ label: "Home", to: "/" }, { label: m.short }]}
        title={m.title}
        subtitle={m.purpose}
      />


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {m.subModules.map((s: any) => (
          <Link
            key={s.id}
            to="/m/$moduleId/$subId"
            params={{ moduleId: m.id, subId: s.id }}
            className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_3px_12px_rgba(16,24,40,0.04)] transition-all flex flex-col justify-between min-h-[175px]"
          >
            <div>
              <div className="flex items-center justify-end">
                <span className="flex items-center gap-1 text-[10.5px] text-primary font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Active
                </span>
              </div>
              <div className="text-[15px] font-semibold tracking-tight mt-3 group-hover:text-primary transition-colors">{s.title}</div>
              <p className="text-[12.5px] text-muted-foreground leading-relaxed mt-2 line-clamp-2">{s.blurb}</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                {s.kpis.slice(0, 2).map((k: any) => (
                  <span key={k.label} className="whitespace-nowrap">
                    <span className="font-semibold text-foreground font-mono">{k.value}</span>
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

