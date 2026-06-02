import { createFileRoute, Link } from "@tanstack/react-router";
import { KpiCard } from "@/components/KpiCard";
import { MainChart, SparkLine } from "@/components/MiniChart";
import { DataCard } from "@/components/DataCard";
import { PageHeader } from "@/components/PageHeader";
import { modules } from "@/data/modules";
import { ArrowRight, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard — Fortiv Manufacturing AI" },
      { name: "description", content: "Executive command dashboard for Fortiv ManufactureSmart Pvt. Ltd." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader
        breadcrumbs={[{ label: "Home" }, { label: "Dashboard" }]}
        title="Good morning, Vikram"
        subtitle="Fortiv ManufactureSmart Pvt. Ltd. — GIDC Vatva, Ahmedabad · Shift: Morning · FY 2024-25"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard label="Revenue MTD"    value="₹4.2 Cr" delta="+11%" tone="success" sparkline={<SparkLine />} />
        <KpiCard label="Plant OEE"      value="78%"     delta="+2%"  tone="success" sparkline={<SparkLine />} />
        <KpiCard label="On-time dispatch" value="94%"   delta="+2%"  tone="info"    sparkline={<SparkLine />} />
        <KpiCard label="Open red flags"   value="03"    delta="-2"   tone="warning" sparkline={<SparkLine />} />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 mt-4">
        <div className="xl:col-span-2 rounded-2xl bg-card border p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-[15px] font-semibold tracking-tight">Production vs Target</div>
              <div className="text-[11.5px] text-muted-foreground mt-0.5">Plan adherence 94% · Last 12 months</div>
            </div>
            <div className="flex items-center gap-3 text-[11.5px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Actual</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-warning" /> Target</span>
            </div>
          </div>
          <div className="h-[300px]"><MainChart type="bar" /></div>
        </div>

        <div className="rounded-2xl bg-card border p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-[15px] font-semibold tracking-tight">AI agent activity</div>
            <Link to="/m/$moduleId" params={{ moduleId: "m6-dashboards" }} className="text-[12px] text-primary font-medium hover:underline">See all</Link>
          </div>
          <div className="space-y-3.5">
            {[
              { who: "Schedule Generator", what: "Resolved bottleneck on Line 3", time: "2m ago", tone: "success" as const, icon: CheckCircle2 },
              { who: "Vendor Follow-Up",  what: "WhatsApp sent to 6 vendors",     time: "8m ago", tone: "info" as const,    icon: Clock },
              { who: "NCR Agent",         what: "New critical NCR — Lot 4395",    time: "14m ago", tone: "warning" as const, icon: AlertTriangle },
              { who: "Payment Reminder",  what: "168 dealers promised to pay",    time: "32m ago", tone: "success" as const, icon: CheckCircle2 },
              { who: "Lead Scoring",      what: "12 new SQLs handed to sales",    time: "48m ago", tone: "info" as const,    icon: Clock },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3 pb-3.5 border-b last:border-0 last:pb-0">
                <div className={`h-8 w-8 grid place-items-center rounded-full shrink-0 ${a.tone === "success" ? "bg-primary/10 text-primary" : a.tone === "warning" ? "bg-warning/15 text-warning-foreground" : "bg-info/10 text-info"}`}>
                  <a.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-medium leading-tight">{a.who}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">{a.what}</div>
                </div>
                <div className="text-[11px] text-muted-foreground whitespace-nowrap">{a.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h2 className="text-[18px] font-semibold tracking-tight">9 Modules · 63 Sub-modules</h2>
            <p className="text-[12.5px] text-muted-foreground mt-0.5">Open any module to see its sub-modules and live AI agents.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => (
            <Link
              key={m.id}
              to="/m/$moduleId"
              params={{ moduleId: m.id }}
              className="group rounded-2xl bg-card border p-5 hover:border-primary/40 hover:shadow-[0_2px_12px_rgba(16,24,40,0.05)] transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <m.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10.5px] font-mono text-muted-foreground">{m.code}</span>
                    <span className="text-[10.5px] text-muted-foreground">·</span>
                    <span className="text-[10.5px] text-muted-foreground">{m.subModules.length} sub-modules</span>
                  </div>
                  <div className="text-[15px] font-semibold tracking-tight mt-0.5">{m.title}</div>
                  <p className="text-[12.5px] text-muted-foreground leading-relaxed mt-2 line-clamp-2">{m.purpose}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <DataCard
          title="Today's dispatch readiness"
          columns={["LR #", "Customer", "City", "Truck", "Status"]}
          rows={[
            ["LR-8821","Tata AutoComp","Pune","GJ-01-AB-1024","Loading"],
            ["LR-8822","Maruti Ancillaries","Delhi","GJ-05-CD-2245","Ready"],
            ["LR-8823","Bajaj Auto","Aurangabad","MH-12-EF-8810","Booked"],
            ["LR-8824","Ashok Leyland","Chennai","TN-09-GH-1102","On track"],
          ]}
        />
        <DataCard
          title="Today's alerts"
          columns={["Time","Module","Alert","Severity","Status"]}
          rows={[
            ["09:42","M1 Production","Bottleneck on Line 3","High","In progress"],
            ["09:18","M3 Quality","NCR critical — Lot 4395","Critical","Hold"],
            ["08:55","M2 Procurement","Jain Polymers delayed 2d","Med","Acked"],
            ["08:30","M4 Dealers","Yash Agencies 78d overdue","High","Escalated"],
          ]}
        />
      </section>
    </div>
  );
}
