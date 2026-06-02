import { cn } from "@/lib/utils";

export function StatusPill({ value }: { value: string | number }) {
  const v = String(value).toLowerCase();
  let cls = "bg-muted text-foreground/80";
  if (/(pass|healthy|matched|on track|closed|approved|confirmed|sent|released|met|resolved|delivered|live|ok|active|cleared|strong|ahead|good)/.test(v))
    cls = "bg-primary/10 text-primary";
  else if (/(pending|review|watch|near|loading|booked|in progress|in rca|capa|acked|engaged|soon|effectiveness|scheduled|hold|delay|delayed|late|behind|warning|short|excess|due|cold|escalated|promised|transferred|ai re-slot)/.test(v))
    cls = "bg-warning/15 text-warning-foreground border border-warning/30";
  else if (/(blocked|critical|risk|fail|overdue|stockout|danger|reopen|crack)/.test(v))
    cls = "bg-destructive/10 text-destructive";
  else if (/(info|sync|tracking|loaded|filed|drafted|sent to vendor|awaiting|new)/.test(v))
    cls = "bg-info/10 text-info";
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-[11.5px] font-medium whitespace-nowrap", cls)}>
      {value}
    </span>
  );
}
