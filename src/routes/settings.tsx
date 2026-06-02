import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — Fortiv" }] }),
  component: () => (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader breadcrumbs={[{ label: "Home", to: "/" }, { label: "Settings" }]} title="Workspace settings" subtitle="Users, roles, integrations and compliance vault." />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[
          { t: "Users & Roles", d: "Manage 18 users across 6 roles." },
          { t: "Integrations",  d: "SAP B1, Tally, WhatsApp Business, NIC e-Way, LinkedIn." },
          { t: "Workflow Builder", d: "Customise approval routes and SLAs." },
          { t: "Notification Templates", d: "EN · HI · GU templates for WhatsApp, SMS, Email." },
          { t: "Compliance Vault", d: "ISO 9001 · IATF 16949 · BIS · GST documents." },
          { t: "Audit Log",     d: "Full immutable activity history." },
        ].map((c) => (
          <div key={c.t} className="rounded-2xl border bg-card p-5">
            <div className="text-[15px] font-semibold">{c.t}</div>
            <p className="text-[12.5px] text-muted-foreground mt-1">{c.d}</p>
            <button className="mt-4 h-8 px-3 rounded-lg border text-[12px] font-medium hover:bg-muted">Open</button>
          </div>
        ))}
      </div>
    </div>
  ),
});
