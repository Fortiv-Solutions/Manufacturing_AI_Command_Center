import { createFileRoute, Link, notFound, Outlet, useRouterState } from "@tanstack/react-router";
import { 
  ArrowRight, Sparkles, Database, Cpu, AlertTriangle, Users, 
  ClipboardList, TrendingUp, FileSpreadsheet, CheckCircle2, 
  AlertCircle, Clock, Check, Send, ShieldAlert, Zap,
  Activity, ArrowUpRight, ArrowDownRight, MessageSquare,
  ShoppingCart, Truck, LayoutDashboard, PhoneCall
} from "lucide-react";
import { getModule } from "@/data/modules";

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

const MODULE_SUBTITLES: Record<string, string> = {
  "m1-production": "Conflict-free, real-time production scheduling and cross-system orchestration.",
  "m2-procurement": "Automate the entire procure-to-pay cycle — from PO creation to GRN matching to invoice reconciliation.",
  "m3-quality": "Real-time QC Digitisation, NCR Tracking, Control Charts, and Compliance Workflows.",
  "m4-dealers": "AI-driven dealer workflows: WhatsApp order intake, dispatch logistics tracking, secondary sales data, payment collections, and digital KYC onboarding.",
  "m6-dashboards": "Real-time operational intelligence pulling from ERP, CRM, and production systems — giving leadership live visibility into output, orders, inventory, cost variances, and financial performance.",
  "m7-voice": "Proactive, 24/7 AI-driven customer and dealer helplines in English, Hindi, and Gujarati — automating order statuses, complaint intake, payment follow-ups, and customer satisfaction surveys.",
  "m8-complaints": "AI-powered complaint lifecycle management — from omnichannel intake and NLP classification to SLA-tracked CAPA resolution and proactive customer communication.",
};

function getCategoryTag(moduleId: string) {
  switch (moduleId) {
    case "m1-production":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-indigo-600 dark:text-indigo-400 bg-indigo-500/5 px-2 py-0.5 rounded-full border border-indigo-500/10">
          Orchestrator
        </span>
      );
    case "m2-procurement":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-teal-600 dark:text-teal-400 bg-teal-500/5 px-2 py-0.5 rounded-full border border-teal-500/10">
          Procurement
        </span>
      );
    case "m3-quality":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 px-2 py-0.5 rounded-full border border-emerald-500/10">
          QC & Compliance
        </span>
      );
    case "m4-dealers":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-amber-600 dark:text-amber-400 bg-amber-500/5 px-2 py-0.5 rounded-full border border-amber-500/10">
          Logistics
        </span>
      );
    case "m6-dashboards":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-cyan-600 dark:text-cyan-400 bg-cyan-500/5 px-2 py-0.5 rounded-full border border-cyan-500/10">
          BI Analytics
        </span>
      );
    case "m7-voice":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-violet-600 dark:text-violet-400 bg-violet-500/5 px-2 py-0.5 rounded-full border border-violet-500/10">
          Voice AI
        </span>
      );
    case "m8-complaints":
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-rose-600 dark:text-rose-400 bg-rose-500/5 px-2 py-0.5 rounded-full border border-rose-500/10">
          SLA Tracker
        </span>
      );
    default:
      return (
        <span className="text-[9px] font-extrabold uppercase tracking-[0.06em] text-zinc-500 dark:text-zinc-400 bg-zinc-500/5 px-2 py-0.5 rounded-full border border-zinc-500/10">
          System Agent
        </span>
      );
  }
}

function getKpiTagStyle(label: string, tone?: string) {
  const lowerLabel = label.toLowerCase();
  
  if (
    lowerLabel.includes("reject") || 
    lowerLabel.includes("scrap") || 
    lowerLabel.includes("anomaly") || 
    lowerLabel.includes("risk") || 
    lowerLabel.includes("dispute") || 
    lowerLabel.includes("critical") || 
    lowerLabel.includes("absent") ||
    lowerLabel.includes("shortage") ||
    tone === "danger"
  ) {
    return {
      bg: "bg-red-500/8 dark:bg-red-500/10",
      text: "text-red-600 dark:text-red-400",
      border: "border-red-500/20 dark:border-red-500/15"
    };
  }
  
  if (
    lowerLabel.includes("downtime") || 
    lowerLabel.includes("warning") || 
    lowerLabel.includes("slow-moving") || 
    lowerLabel.includes("at-risk") || 
    lowerLabel.includes("hold") ||
    tone === "warning"
  ) {
    return {
      bg: "bg-amber-500/8 dark:bg-amber-500/10",
      text: "text-amber-600 dark:text-amber-400",
      border: "border-amber-500/20 dark:border-amber-500/15"
    };
  }
  
  if (
    lowerLabel.includes("output") ||
    lowerLabel.includes("pass") ||
    lowerLabel.includes("health") ||
    lowerLabel.includes("sync") ||
    lowerLabel.includes("present") ||
    lowerLabel.includes("adherence") ||
    lowerLabel.includes("success") ||
    tone === "success"
  ) {
    return {
      bg: "bg-indigo-500/8 dark:bg-indigo-500/10",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-500/20 dark:border-indigo-500/15"
    };
  }
  
  if (
    lowerLabel.includes("active") || 
    lowerLabel.includes("total") || 
    lowerLabel.includes("tat") || 
    lowerLabel.includes("cycle") || 
    lowerLabel.includes("lead") || 
    lowerLabel.includes("spend") || 
    lowerLabel.includes("headcount") || 
    lowerLabel.includes("jobs") || 
    lowerLabel.includes("volume") || 
    lowerLabel.includes("pipeline") || 
    lowerLabel.includes("stock") ||
    tone === "info"
  ) {
    return {
      bg: "bg-blue-500/8 dark:bg-blue-500/10",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-500/20 dark:border-blue-500/15"
    };
  }
  
  return {
    bg: "bg-cyan-500/8 dark:bg-cyan-500/10",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-500/20 dark:border-cyan-500/15"
  };
}

function ModuleLanding() {
  const m = Route.useLoaderData();
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isExact = pathname === `/m/${m.id}` || pathname === `/m/${m.id}/`;

  if (!isExact) {
    return <Outlet />;
  }

  const subtitle = MODULE_SUBTITLES[m.id] || m.purpose;

  return (
    <div className="max-w-[1480px] mx-auto space-y-5 animate-in fade-in duration-300">
      {/* Premium Compact Hero Section */}
      <div className="relative overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-card via-card/95 to-muted/20 p-5 md:py-4.5 md:px-6 shadow-sm">
        {/* Ambient background glow */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-[70px]" />
        <div className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-info/5 blur-[50px]" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <h1 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-foreground leading-none">
              {m.title}
            </h1>
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          {/* Visual telemetry card */}
          <div className="shrink-0 flex items-center gap-3 bg-background/55 backdrop-blur-md rounded-xl border border-border/40 p-3 min-w-[210px] shadow-sm">
            <div className="h-9 w-9 rounded-lg bg-primary/15 text-primary grid place-items-center shrink-0">
              <Activity className="h-4.5 w-4.5 animate-pulse" />
            </div>
            <div className="leading-tight">
              <div className="text-[9px] uppercase font-bold tracking-wider text-muted-foreground">Module Telemetry</div>
              <div className="text-[12.5px] font-bold text-foreground mt-0.5">All agents active</div>
              <div className="text-[10.5px] text-primary/95 font-semibold mt-0.5">Sync status: healthy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Submodules Grid with Wider Cards & Colorful Tags */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {m.subModules.map((s: any) => {
          const IconComponent = SUBMODULE_ICONS[s.id] || Database;
          
          // Limit to exactly 2 KPI tags and ensure they render in different colors
          const kpisToRender = s.kpis.slice(0, 2);
          const kpiStyles = kpisToRender.map((k: any) => getKpiTagStyle(k.label, k.tone));
          
          if (kpiStyles.length === 2 && kpiStyles[0].text === kpiStyles[1].text) {
            if (kpiStyles[0].text.includes("indigo")) {
              kpiStyles[1] = {
                bg: "bg-blue-500/8 dark:bg-blue-500/10",
                text: "text-blue-600 dark:text-blue-400",
                border: "border-blue-500/20 dark:border-blue-500/15"
              };
            } else {
              kpiStyles[1] = {
                bg: "bg-indigo-500/8 dark:bg-indigo-500/10",
                text: "text-indigo-600 dark:text-indigo-400",
                border: "border-indigo-500/20 dark:border-indigo-500/15"
              };
            }
          }

          return (
            <Link
              key={s.id}
              to="/m/$moduleId/$subId"
              params={{ moduleId: m.id, subId: s.id }}
              className="group submodule-card p-5 flex flex-col justify-between min-h-[175px] relative overflow-hidden"
            >
              {/* Top border hover glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="space-y-3.5 relative z-10">
                {/* Header with Icon and Category Tag */}
                <div className="flex items-center justify-between">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary grid place-items-center transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  {getCategoryTag(m.id)}
                </div>

                <div className="space-y-1">
                  <h3 className="text-[14.5px] font-extrabold font-display tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground leading-relaxed line-clamp-2">
                    {s.blurb}
                  </p>
                </div>
              </div>

              {/* Footer with Semantic Colored Tags for KPIs (strictly on one row) and transition arrow */}
              <div className="border-t border-border/40 pt-3.5 mt-3.5 flex items-center justify-between gap-3 relative z-10 w-full overflow-hidden">
                <div className="flex flex-row flex-nowrap items-center gap-1.5 overflow-hidden flex-1 select-none">
                  {kpisToRender.map((k: any, idx: number) => {
                    const tagStyle = kpiStyles[idx];
                    return (
                      <span
                        key={k.label}
                        className={`px-2 py-0.5 rounded-full text-[9.5px] font-bold border flex items-center gap-1 shrink-0 transition-all duration-300 ${tagStyle.bg} ${tagStyle.text} ${tagStyle.border}`}
                      >
                        <span className="opacity-80">{k.label}:</span>
                        <span className="font-mono font-extrabold">{k.value}</span>
                      </span>
                    );
                  })}
                </div>
                <div className="h-7 w-7 rounded-full bg-muted/40 border border-border/30 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary/20 transition-all duration-300 shrink-0">
                  <ArrowRight className="h-3 w-3 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
