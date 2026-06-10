import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { DataCard } from "@/components/DataCard";

export const Route = createFileRoute("/approvals")({
  head: () => ({ meta: [{ title: "Approvals — Fortiv" }] }),
  component: () => (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Approvals" }]}
        title="Approvals queue"
        subtitle="Items waiting for human sign-off."
      />
      <DataCard
        title="Pending"
        columns={["Item", "Module", "Requested by", "Value", "Status"]}
        rows={[
          ["PO-24-2104", "M2 Procurement", "AI agent", "₹6,72,000", "Awaiting approval"],
          ["CAPA-7702", "M8 Complaints", "Sunita Patel", "—", "Review"],
          ["Schedule JOB-4824 → Line 4", "M1 Production", "AI agent", "60 min", "Pending"],
          ["Credit limit increase", "M4 Dealers", "Suresh Nair", "₹4 L", "Pending"],
        ]}
      />
    </div>
  ),
});
