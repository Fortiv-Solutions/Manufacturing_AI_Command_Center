import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports — Fortiv" }] }),
  component: () => (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Reports" }]}
        title="Reports library"
        subtitle="All auto-generated reports — operational, compliance and management."
      />
      <DataCard
        title="Recent reports"
        columns={["Report", "Period", "Type", "Generated", "Status"]}
        rows={[
          ["Weekly Plan vs Actual", "W36 FY25", "Management", "02/06/2026", "Filed"],
          ["ISO 9001 MRM Pack", "May 2026", "Compliance", "31/05/2026", "Filed"],
          ["Vendor Performance", "May 2026", "Operational", "01/06/2026", "Filed"],
          ["Dispatch MIS", "May 2026", "Operational", "01/06/2026", "Filed"],
          ["GST E-invoice Recon", "May 2026", "Compliance", "31/05/2026", "Filed"],
        ]}
      />
    </div>
  ),
});
