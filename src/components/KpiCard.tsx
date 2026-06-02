import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "success" | "warning" | "danger" | "info";

const toneClasses: Record<Tone, string> = {
  success: "bg-primary/10 text-primary",
  warning: "bg-warning/15 text-warning-foreground border border-warning/30",
  danger: "bg-destructive/10 text-destructive",
  info: "bg-info/10 text-info",
};

const toneArrow: Record<Tone, boolean> = {
  success: true, warning: true, info: true, danger: false,
};

export function KpiCard({
  label, value, delta, tone = "success", sparkline,
}: {
  label: string; value: string; delta?: string; tone?: Tone;
  sparkline?: React.ReactNode;
}) {
  const Arrow = toneArrow[tone] ? ArrowUpRight : ArrowDownRight;
  return (
    <div className="rounded-2xl bg-card border p-5 flex flex-col gap-3 hover:shadow-[0_2px_10px_rgba(16,24,40,0.04)] transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground">
          <span>{label}</span>
          <Info className="h-3 w-3 opacity-60" />
        </div>
        {delta && (
          <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold", toneClasses[tone])}>
            <Arrow className="h-3 w-3" />
            {delta}
          </span>
        )}
      </div>
      <div className="flex items-end gap-3">
        <div className="text-[30px] font-semibold tabular leading-none tracking-tight">{value}</div>
      </div>
      {sparkline && <div className="h-10 -mx-1">{sparkline}</div>}
    </div>
  );
}
