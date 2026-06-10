import { 
  ArrowUpRight, 
  ArrowDownRight, 
  Info, 
  Users, 
  DollarSign, 
  Percent, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Activity,
  AlertCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "info";

const toneArrow: Record<Tone, boolean> = {
  success: true, 
  warning: true, 
  info: true, 
  danger: false,
};

const toneStyles = {
  success: {
    iconClass: "text-violet-600 dark:text-violet-400",
    bgClass: "bg-violet-500/10 dark:bg-violet-500/15",
    borderClass: "border-violet-500/15 dark:border-violet-500/25",
    hoverBorder: "hover:border-violet-500/40 dark:hover:border-violet-500/50",
    glowClass: "bg-violet-500",
    deltaClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20"
  },
  warning: {
    iconClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-500/10 dark:bg-amber-500/15",
    borderClass: "border-amber-500/15 dark:border-amber-500/25",
    hoverBorder: "hover:border-amber-500/40 dark:hover:border-amber-500/50",
    glowClass: "bg-amber-500",
    deltaClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
  },
  danger: {
    iconClass: "text-rose-600 dark:text-rose-400",
    bgClass: "bg-rose-500/10 dark:bg-rose-500/15",
    borderClass: "border-rose-500/15 dark:border-rose-500/25",
    hoverBorder: "hover:border-rose-500/40 dark:hover:border-rose-500/50",
    glowClass: "bg-rose-500",
    deltaClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20"
  },
  info: {
    iconClass: "text-cyan-600 dark:text-cyan-400",
    bgClass: "bg-cyan-500/10 dark:bg-cyan-500/15",
    borderClass: "border-cyan-500/15 dark:border-cyan-500/25",
    hoverBorder: "hover:border-cyan-500/40 dark:hover:border-cyan-500/50",
    glowClass: "bg-cyan-500",
    deltaClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20"
  }
};

function getKpiIcon(label: string, tone: Tone) {
  const cleanLabel = label.toLowerCase();
  
  if (
    cleanLabel.includes("rev") || 
    cleanLabel.includes("cogs") || 
    cleanLabel.includes("margin") || 
    cleanLabel.includes("ebitda") || 
    cleanLabel.includes("balance") || 
    cleanLabel.includes("receivable") || 
    cleanLabel.includes("cost") || 
    cleanLabel.includes("financial") || 
    cleanLabel.includes("invoice") || 
    cleanLabel.includes("rupee") || 
    cleanLabel.includes("payment") || 
    cleanLabel.includes("due") || 
    cleanLabel.includes("ot vs budget") || 
    cleanLabel.includes("billing") ||
    cleanLabel.includes("price") ||
    cleanLabel.includes("spend")
  ) {
    return DollarSign;
  }
  if (
    cleanLabel.includes("attendance") || 
    cleanLabel.includes("staff") || 
    cleanLabel.includes("present") || 
    cleanLabel.includes("absent") || 
    cleanLabel.includes("substitute") || 
    cleanLabel.includes("employee") || 
    cleanLabel.includes("worker") || 
    cleanLabel.includes("headcount") || 
    cleanLabel.includes("people") || 
    cleanLabel.includes("labor") || 
    cleanLabel.includes("attrition") ||
    cleanLabel.includes("roster")
  ) {
    return Users;
  }
  if (
    cleanLabel.includes("rate") || 
    cleanLabel.includes("percent") || 
    cleanLabel.includes("%") || 
    cleanLabel.includes("efficiency") || 
    cleanLabel.includes("variance") || 
    cleanLabel.includes("yield") ||
    cleanLabel.includes("productivity") ||
    cleanLabel.includes("ratio") ||
    cleanLabel.includes("score")
  ) {
    return Percent;
  }
  if (
    cleanLabel.includes("time") || 
    cleanLabel.includes("clock") || 
    cleanLabel.includes("duration") || 
    cleanLabel.includes("hours") || 
    cleanLabel.includes("days") || 
    cleanLabel.includes("min") || 
    cleanLabel.includes("sec") || 
    cleanLabel.includes("speed") || 
    cleanLabel.includes("latency") ||
    cleanLabel.includes("age") ||
    cleanLabel.includes("schedule")
  ) {
    return Clock;
  }
  if (
    cleanLabel.includes("shortfall") || 
    cleanLabel.includes("escalated") || 
    cleanLabel.includes("critical") || 
    cleanLabel.includes("gap") || 
    cleanLabel.includes("danger") || 
    cleanLabel.includes("warning") || 
    cleanLabel.includes("audit") || 
    cleanLabel.includes("overdue") || 
    cleanLabel.includes("alert") ||
    cleanLabel.includes("incident") ||
    cleanLabel.includes("risk")
  ) {
    return ShieldAlert;
  }
  if (
    cleanLabel.includes("success") || 
    cleanLabel.includes("resolved") || 
    cleanLabel.includes("completed") || 
    cleanLabel.includes("done") || 
    cleanLabel.includes("present") || 
    cleanLabel.includes("ready") ||
    cleanLabel.includes("passed") ||
    cleanLabel.includes("ok")
  ) {
    return CheckCircle2;
  }
  
  if (tone === "danger") return ShieldAlert;
  if (tone === "warning") return AlertCircle;
  if (tone === "info") return Info;
  return Activity;
}

export function KpiCard({
  label, value, delta, tone = "success", sparkline,
}: {
  label: string; value: string; delta?: string; tone?: Tone;
  sparkline?: React.ReactNode;
}) {
  const Arrow = toneArrow[tone] ? ArrowUpRight : ArrowDownRight;
  const IconComponent = getKpiIcon(label, tone);
  const styles = toneStyles[tone];

  return (
    <div className={cn(
      "group relative rounded-2xl p-5 flex flex-col justify-between overflow-hidden transition-all duration-300",
      "bg-card/50 backdrop-blur-xl border shadow-sm",
      styles.borderClass,
      styles.hoverBorder,
      "hover:-translate-y-1 hover:shadow-premium"
    )}>
      {/* Dynamic Background Glow */}
      <div className={cn(
        "absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-[0.06] dark:opacity-[0.1] blur-2xl pointer-events-none transition-all duration-500 group-hover:scale-125",
        styles.glowClass
      )} />

      {/* Large Background Icon Utilising Section */}
      <IconComponent 
        size={96} 
        className={cn(
          "absolute -right-4 -bottom-4 opacity-[0.05] dark:opacity-[0.08] pointer-events-none transition-all duration-500 ease-out",
          "group-hover:scale-110 group-hover:rotate-6 group-hover:opacity-[0.09] dark:group-hover:opacity-[0.13]",
          styles.iconClass
        )} 
      />

      <div className="relative z-10 flex flex-col gap-3.5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5">
            {/* Small Vibrant Icon Container */}
            <div className={cn(
              "w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 transition-transform duration-300 group-hover:scale-105",
              styles.bgClass,
              styles.borderClass
            )}>
              <IconComponent className={cn("w-4 h-4", styles.iconClass)} />
            </div>
            
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 font-sans">
              {label}
            </span>
          </div>

          {delta && (
            <span className={cn(
              "inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-tight border shadow-sm/5 transition-transform duration-300 group-hover:scale-105", 
              styles.deltaClass
            )}>
              <Arrow className="h-2.5 w-2.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              {delta}
            </span>
          )}
        </div>

        <div className="flex items-end gap-3 mt-1 relative z-10">
          <div className="text-[26px] font-bold font-display tracking-tight leading-none text-foreground font-mono/5">
            {value}
          </div>
        </div>
      </div>

      {sparkline && (
        <div className="h-8 -mx-1 mt-3.5 relative z-10 border-t border-border/10 pt-2 shrink-0">
          {sparkline}
        </div>
      )}
    </div>
  );
}

