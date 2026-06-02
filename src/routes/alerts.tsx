import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Alerts — Fortiv" }] }),
  component: () => (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader breadcrumbs={[{ label: "Home", to: "/" }, { label: "Alerts" }]} title="Alerts inbox" subtitle="All AI-generated alerts across modules." />
      <DataCard
        title="Today"
        columns={["Time","Module","Alert","Severity","Status"]}
        rows={[
          ["09:42","M1 Production","Bottleneck on Line 3","High","In progress"],
          ["09:18","M3 Quality","NCR critical — Lot 4395","Critical","Hold"],
          ["08:55","M2 Procurement","Jain Polymers delayed 2d","Med","Acked"],
          ["08:30","M4 Dealers","Yash Agencies 78d overdue","High","Escalated"],
          ["08:12","M5 Sales→Dispatch","Hold on SO-7823","High","Hold"],
          ["07:58","M8 Complaints","New major from Kapoor Industries","Major","RCA"],
        ]}
      />
    </div>
  ),
});
