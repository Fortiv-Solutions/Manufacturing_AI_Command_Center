import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Database, Users, Building2, Truck, Factory, Layers } from "lucide-react";

const cards = [
  { title: "Items & SKUs", count: "1,240", icon: Layers },
  { title: "Bill of Materials", count: "412", icon: Database },
  { title: "Vendors", count: "58", icon: Building2 },
  { title: "Customers", count: "124", icon: Users },
  { title: "Dealers", count: "218", icon: Truck },
  { title: "Plants & Lines", count: "1 / 4", icon: Factory },
];

export const Route = createFileRoute("/masters")({
  head: () => ({ meta: [{ title: "Masters — Fortiv" }] }),
  component: () => (
    <div className="max-w-[1480px] mx-auto">
      <PageHeader
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Masters" }]}
        title="Master data"
        subtitle="Items, BOMs, vendors, customers, dealers and plant structure."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((c) => (
          <Link
            key={c.title}
            to="/"
            className="rounded-2xl border bg-card p-5 hover:border-primary/40 transition"
          >
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
              <c.icon className="h-5 w-5" />
            </div>
            <div className="text-[15px] font-semibold mt-3">{c.title}</div>
            <div className="text-[24px] font-semibold tabular mt-1">{c.count}</div>
            <div className="text-[11.5px] text-muted-foreground">Total records</div>
          </Link>
        ))}
      </div>
    </div>
  ),
});
