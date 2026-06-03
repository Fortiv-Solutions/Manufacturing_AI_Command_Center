import { useState } from "react";
import {
  ShoppingCart, Truck, AlertTriangle, Clock, Package,
  FileText, ChevronRight, CheckCircle2, XCircle, User,
  Download, Plus, Layers, X, ArrowRight, CircleDot
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────── */
interface ApprovalStep {
  name: string;
  role: string;
  date: string;
  comment?: string;
}

interface PurchaseOrder {
  id: string;
  trigger: "Min Stock Alert" | "Work Order" | "Manual Req";
  vendor: string;
  vendorPreferred: boolean;
  item: string;
  itemDesc: string;
  qty: string;
  unitPrice: number;
  totalValue: number;
  status: "Approved";
  delivery: "In Transit" | "Delivered" | "OVERDUE";
  eta: string;
  etaRaw: string;
  orderDate: string;
  vendorOTD: number;
  overdueDays?: number;
  vendorResponse?: string;
  lastPriceComparison?: string;
  receivedDate?: string;
  approvalChain: ApprovalStep[];
}

/* ── Mock Data ─────────────────────────────────────── */
const POS: PurchaseOrder[] = [
  {
    id: "PO-2025-3847",
    trigger: "Min Stock Alert",
    vendor: "Nat Petrosols",
    vendorPreferred: true,
    item: "Mud Pump Liner MP-4027 ×4",
    itemDesc: "Mud Pump Liner — Model MP-4027, Chrome-Bore, 6\" Stroke",
    qty: "4 Nos",
    unitPrice: 47200,
    totalValue: 188800,
    status: "Approved",
    delivery: "In Transit",
    eta: "07 Nov 2025",
    etaRaw: "2025-11-07",
    orderDate: "22 Oct 2025",
    vendorOTD: 94,
    lastPriceComparison: "Rs. 49,000/unit (Bharat Oilfield — 4% higher)",
    approvalChain: [
      { name: "R. Kumar", role: "Site Engineer", date: "22 Oct 2025", comment: "Stock below reorder level" },
      { name: "S. Verma", role: "Procurement Head", date: "23 Oct 2025" },
      { name: "A. Sharma", role: "Field Manager", date: "23 Oct 2025", comment: "Approved — critical for rig ops" },
    ],
  },
  {
    id: "PO-2025-3841",
    trigger: "Work Order",
    vendor: "ChemTreat India",
    vendorPreferred: true,
    item: "Scale Inhibitor SI-200 ×200L",
    itemDesc: "Scale Inhibitor SI-200, Phosphonate-Based, 200L Drum",
    qty: "200 L",
    unitPrice: 480,
    totalValue: 96000,
    status: "Approved",
    delivery: "Delivered",
    eta: "26 Oct 2025",
    etaRaw: "2025-10-26",
    orderDate: "18 Oct 2025",
    vendorOTD: 91,
    receivedDate: "26 Oct 2025",
    lastPriceComparison: "Rs. 510/L (Nalco India — 6% higher)",
    approvalChain: [
      { name: "P. Menon", role: "Chemical Engineer", date: "18 Oct 2025", comment: "WO-2025-1182 reference" },
      { name: "S. Verma", role: "Procurement Head", date: "18 Oct 2025" },
    ],
  },
  {
    id: "PO-2025-3836",
    trigger: "Manual Req",
    vendor: "Grundfos India",
    vendorPreferred: false,
    item: "ESP Motor 75HP ×1",
    itemDesc: "Electric Submersible Pump Motor, 75HP, 3-Phase, 3450 RPM",
    qty: "1 No",
    unitPrice: 420000,
    totalValue: 420000,
    status: "Approved",
    delivery: "In Transit",
    eta: "02 Nov 2025",
    etaRaw: "2025-11-02",
    orderDate: "15 Oct 2025",
    vendorOTD: 88,
    lastPriceComparison: "Rs. 4,45,000 (Baker Hughes India — 6% higher)",
    approvalChain: [
      { name: "A. Sharma", role: "Field Manager", date: "15 Oct 2025", comment: "Well C-12 ESP replacement" },
      { name: "S. Verma", role: "Procurement Head", date: "16 Oct 2025" },
      { name: "V. Reddy", role: "Finance Controller", date: "16 Oct 2025", comment: "Budget OK — Q3 capex" },
    ],
  },
  {
    id: "PO-2025-3829",
    trigger: "Manual Req",
    vendor: "Tenaris India",
    vendorPreferred: true,
    item: "3.5\" Production Tubing ×200m",
    itemDesc: "3.5\" EUE J55 Production Tubing, Seamless, API 5CT",
    qty: "200 m",
    unitPrice: 1420,
    totalValue: 284000,
    status: "Approved",
    delivery: "In Transit",
    eta: "01 Nov 2025",
    etaRaw: "2025-11-01",
    orderDate: "12 Oct 2025",
    vendorOTD: 96,
    lastPriceComparison: "Rs. 1,510/m (ISMT Ltd — 6% higher)",
    approvalChain: [
      { name: "R. Kumar", role: "Site Engineer", date: "12 Oct 2025" },
      { name: "S. Verma", role: "Procurement Head", date: "13 Oct 2025" },
      { name: "A. Sharma", role: "Field Manager", date: "13 Oct 2025", comment: "Approved for Well B-15 completion" },
    ],
  },
  {
    id: "PO-2025-3821",
    trigger: "Work Order",
    vendor: "MI Swaco India",
    vendorPreferred: true,
    item: "Mud Weight Barite ×5MT",
    itemDesc: "Barite (Barium Sulphate), API 13A Grade, 5 Metric Tonnes",
    qty: "5 MT",
    unitPrice: 22500,
    totalValue: 112500,
    status: "Approved",
    delivery: "OVERDUE",
    eta: "25 Oct 2025",
    etaRaw: "2025-10-25",
    orderDate: "10 Oct 2025",
    vendorOTD: 82,
    overdueDays: 3,
    vendorResponse: "Logistics delay — new ETA 30 Oct",
    lastPriceComparison: "Rs. 23,800/MT (Halliburton India — 6% higher)",
    approvalChain: [
      { name: "P. Menon", role: "Chemical Engineer", date: "10 Oct 2025", comment: "WO-2025-1170 reference" },
      { name: "S. Verma", role: "Procurement Head", date: "11 Oct 2025" },
    ],
  },
];

/* ── Helpers ────────────────────────────────────────── */
const fmtINR = (v: number) => {
  if (v >= 100000) {
    const lakhs = v / 100000;
    return `Rs. ${lakhs.toFixed(2).replace(/\.?0+$/, "")} L`;
  }
  return `Rs. ${v.toLocaleString("en-IN")}`;
};

const fmtINRFull = (v: number) => `Rs. ${v.toLocaleString("en-IN")}`;

const otdColor = (otd: number) => {
  if (otd >= 90) return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
  if (otd >= 80) return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20";
};

const deliveryBadge = (d: PurchaseOrder["delivery"]) => {
  if (d === "In Transit") return "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20";
  if (d === "Delivered") return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
  return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20";
};

const triggerBadge = (t: PurchaseOrder["trigger"]) => {
  if (t === "Min Stock Alert") return "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20";
  if (t === "Work Order") return "bg-[#F5F0E8] text-[#C8922A] border-[#C8922A]/20";
  return "bg-slate-100 text-slate-600 border-slate-200";
};

/* ── Component ─────────────────────────────────────── */
export function OGSubModule53() {
  const [selectedPO, setSelectedPO] = useState<PurchaseOrder>(POS[0]);
  const [showBanner, setShowBanner] = useState(true);
  const [deliveryStatuses, setDeliveryStatuses] = useState<Record<string, PurchaseOrder["delivery"]>>(
    Object.fromEntries(POS.map(po => [po.id, po.delivery]))
  );

  const getDelivery = (po: PurchaseOrder) => deliveryStatuses[po.id] ?? po.delivery;

  const handleConsolidate = () => {
    setShowBanner(false);
    toast.success("POs consolidated — freight saving Rs. 8,400");
  };

  const handleDismissBanner = () => {
    setShowBanner(false);
    toast("Consolidation suggestion dismissed.");
  };

  const handleGoodsReceipt = (po: PurchaseOrder) => {
    setDeliveryStatuses(prev => ({ ...prev, [po.id]: "Delivered" }));
    toast.success(`Goods receipt confirmed for ${po.id} — status updated to Delivered.`);
  };

  const handleNewRequisition = () => {
    toast("New requisition form opened — fill in item details and submit for approval.");
  };

  const handleExport = () => {
    toast.success("PO summary exported as PDF — 5 purchase orders included.");
  };

  /* ── Delivery Timeline Bar ──────────────────────── */
  const DeliveryTimeline = ({ po }: { po: PurchaseOrder }) => {
    const delivery = getDelivery(po);
    const isOverdue = delivery === "OVERDUE";
    const isDelivered = delivery === "Delivered";

    // Simple progress calc for visual
    const totalDays = 16; // rough span
    let progressDays = isDelivered ? totalDays : isOverdue ? totalDays : Math.round(totalDays * 0.65);
    const pct = Math.min(100, (progressDays / totalDays) * 100);

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] text-[#8892A0]">
          <span className="font-mono">{po.orderDate}</span>
          <span className="font-mono">{po.eta}</span>
        </div>
        <div className="relative h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all ${
              isOverdue
                ? "bg-gradient-to-r from-[#C0392B]/70 to-[#C0392B]"
                : isDelivered
                ? "bg-gradient-to-r from-[#1A6B8A] to-[#0F7B6C]"
                : "bg-gradient-to-r from-[#1A6B8A] to-[#0F7B6C]/80"
            }`}
            style={{ width: `${pct}%` }}
          />
          {!isDelivered && !isOverdue && (
            <div
              className="absolute top-1/2 -translate-y-1/2 h-4 w-1.5 bg-[#0D1B2A] rounded-sm shadow"
              style={{ left: `${pct}%`, transform: `translate(-50%, -50%)` }}
              title="Today"
            />
          )}
        </div>
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-[#8892A0]">Order Placed</span>
          {!isDelivered && !isOverdue && (
            <span className="text-[#1A6B8A] font-bold flex items-center gap-0.5">
              <CircleDot className="h-3 w-3" /> Today
            </span>
          )}
          <span className={`font-bold ${isOverdue ? "text-[#C0392B]" : isDelivered ? "text-[#0F7B6C]" : "text-[#8892A0]"}`}>
            {isDelivered ? "Delivered ✓" : isOverdue ? `Overdue (${po.overdueDays}d)` : "ETA"}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-5">

      {/* ── Top Stats Bar ────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "POs Raised MTD", value: "34", icon: ShoppingCart, color: "#1A6B8A", bg: "bg-blue-50" },
          { label: "Pending Approval", value: "4", icon: Clock, color: "#C8922A", bg: "bg-[#F5F0E8]" },
          { label: "In Transit", value: "11", icon: Truck, color: "#1A6B8A", bg: "bg-blue-50" },
          { label: "Overdue Deliveries", value: "1", icon: AlertTriangle, color: "#C0392B", bg: "bg-[#FDECEA]", pulse: true },
        ].map(kpi => (
          <div key={kpi.label} className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex items-center gap-3">
            <div className={`${kpi.bg} h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${kpi.pulse ? "animate-pulse" : ""}`}>
              <kpi.icon className="h-5 w-5" style={{ color: kpi.color }} />
            </div>
            <div>
              <p className="text-[10.5px] text-[#8892A0] font-semibold">{kpi.label}</p>
              <p className="text-xl font-bold font-mono" style={{ color: kpi.color }}>{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Consolidation Suggestion Banner ──────────── */}
      {showBanner && (
        <div className="rounded-2xl border border-[#C8922A]/30 bg-gradient-to-r from-amber-50 to-[#F5F0E8] p-4 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="bg-[#C8922A]/10 h-9 w-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
              <Layers className="h-5 w-5 text-[#C8922A]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-xs font-bold text-[#0D1B2A] mb-0.5">
                    Consolidation Opportunity Detected
                  </p>
                  <p className="text-[11px] text-[#0D1B2A]/80 leading-relaxed">
                    3 requisitions for drilling chemicals from <strong>ChemTreat India</strong> in 48 hours
                  </p>
                </div>
                <button onClick={handleDismissBanner} className="text-[#8892A0] hover:text-[#0D1B2A] shrink-0 p-0.5">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[11px]">
                <span className="text-[#0D1B2A]">
                  Combined value: <strong className="font-mono">Rs. 2,28,000</strong>
                </span>
                <span className="text-[#0F7B6C] font-semibold">
                  Est. freight saving: <strong className="font-mono">Rs. 8,400</strong>
                </span>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <Button
                  size="sm"
                  onClick={handleConsolidate}
                  className="h-8 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-lg"
                >
                  Consolidate into Single PO
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleDismissBanner}
                  className="h-8 border-[#C8922A]/40 text-[#C8922A] hover:bg-amber-50 text-xs font-bold rounded-lg"
                >
                  Keep Separate
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Main Area: Table + Detail Panel ──────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

        {/* PO Tracker Table (left 60%) */}
        <div className="lg:col-span-3 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-[#1A6B8A]" />
              <h3 className="text-sm font-bold text-[#0D1B2A]">Purchase Order Tracker</h3>
              <Badge className="bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20 border text-[9px] font-bold">
                {POS.length} POs
              </Badge>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#D1D9E3] text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">
                  <th className="text-left py-2.5 px-4">PO Number</th>
                  <th className="text-left py-2.5 px-2">Trigger</th>
                  <th className="text-left py-2.5 px-2">Vendor</th>
                  <th className="text-left py-2.5 px-2">Item</th>
                  <th className="text-right py-2.5 px-2">Value</th>
                  <th className="text-center py-2.5 px-2">Status</th>
                  <th className="text-left py-2.5 px-2">ETA</th>
                  <th className="text-center py-2.5 px-3">OTD</th>
                </tr>
              </thead>
              <tbody>
                {POS.map(po => {
                  const delivery = getDelivery(po);
                  const isOverdue = delivery === "OVERDUE";
                  const isSelected = selectedPO.id === po.id;

                  return (
                    <tr
                      key={po.id}
                      onClick={() => setSelectedPO(po)}
                      className={`border-b border-[#D1D9E3] cursor-pointer transition-colors ${
                        isOverdue
                          ? isSelected
                            ? "bg-red-100/70"
                            : "bg-red-50/50 hover:bg-red-100/50"
                          : isSelected
                          ? "bg-blue-50/60"
                          : "hover:bg-slate-50"
                      }`}
                    >
                      <td className="py-2.5 px-4">
                        <span className="font-mono font-bold text-[#0D1B2A]">{po.id}</span>
                      </td>
                      <td className="py-2.5 px-2">
                        <Badge className={`${triggerBadge(po.trigger)} border text-[9px] font-bold whitespace-nowrap`}>
                          {po.trigger}
                        </Badge>
                      </td>
                      <td className="py-2.5 px-2">
                        <span className="text-[#0D1B2A] font-semibold whitespace-nowrap">{po.vendor}</span>
                      </td>
                      <td className="py-2.5 px-2">
                        <span className="text-[#0D1B2A] whitespace-nowrap">{po.item}</span>
                      </td>
                      <td className="py-2.5 px-2 text-right">
                        <span className="font-mono font-bold text-[#0D1B2A] whitespace-nowrap">{fmtINRFull(po.totalValue)}</span>
                      </td>
                      <td className="py-2.5 px-2 text-center">
                        <Badge className={`${deliveryBadge(delivery)} border text-[9px] font-bold ${isOverdue ? "animate-pulse" : ""}`}>
                          {delivery === "OVERDUE" ? `OVERDUE (${po.overdueDays}d)` : delivery}
                        </Badge>
                      </td>
                      <td className="py-2.5 px-2">
                        <span className={`font-mono text-[11px] whitespace-nowrap ${isOverdue ? "text-[#C0392B] font-bold" : "text-[#8892A0]"}`}>
                          {delivery === "Delivered"
                            ? `Rcvd ${po.receivedDate ?? po.eta}`
                            : isOverdue
                            ? `Was ${po.eta}`
                            : po.eta}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <Badge className={`${otdColor(po.vendorOTD)} border text-[9px] font-bold font-mono`}>
                          {po.vendorOTD}%
                        </Badge>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detail Panel (right 40%) */}
        <div className="lg:col-span-2 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          {/* Detail Header */}
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-sm font-bold text-[#0D1B2A]">{selectedPO.id}</span>
              <Badge className={`${deliveryBadge(getDelivery(selectedPO))} border text-[9.5px] font-bold ${getDelivery(selectedPO) === "OVERDUE" ? "animate-pulse" : ""}`}>
                {getDelivery(selectedPO) === "OVERDUE" ? `OVERDUE (${selectedPO.overdueDays}d)` : getDelivery(selectedPO)}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className={`${triggerBadge(selectedPO.trigger)} border text-[9px] font-bold`}>
                {selectedPO.trigger}
              </Badge>
              <span className="text-[10px] text-[#0F7B6C] font-bold">Approved ✓</span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-5">

            {/* Overdue Alert */}
            {getDelivery(selectedPO) === "OVERDUE" && (
              <div className="rounded-xl border border-[#C0392B]/30 bg-[#FDECEA] p-3 flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-[#C0392B] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[11px] font-bold text-[#C0392B]">Overdue by {selectedPO.overdueDays} days</p>
                  {selectedPO.vendorResponse && (
                    <p className="text-[10.5px] text-[#C0392B]/80 mt-0.5">
                      Vendor response: <em>"{selectedPO.vendorResponse}"</em>
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Item Details */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">Item Details</h4>
              <div className="rounded-xl border border-[#D1D9E3] bg-slate-50/30 p-3 space-y-1.5">
                <p className="text-xs font-semibold text-[#0D1B2A]">{selectedPO.itemDesc}</p>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div>
                    <p className="text-[9.5px] text-[#8892A0]">Quantity</p>
                    <p className="text-xs font-bold font-mono text-[#0D1B2A]">{selectedPO.qty}</p>
                  </div>
                  <div>
                    <p className="text-[9.5px] text-[#8892A0]">Unit Price</p>
                    <p className="text-xs font-bold font-mono text-[#0D1B2A]">{fmtINRFull(selectedPO.unitPrice)}</p>
                  </div>
                  <div>
                    <p className="text-[9.5px] text-[#8892A0]">Total Value</p>
                    <p className="text-xs font-bold font-mono text-[#0D1B2A]">{fmtINRFull(selectedPO.totalValue)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Vendor Info */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">Vendor Information</h4>
              <div className="rounded-xl border border-[#D1D9E3] bg-slate-50/30 p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#0D1B2A]">{selectedPO.vendor}</span>
                    {selectedPO.vendorPreferred && (
                      <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[8px] font-bold">
                        Preferred
                      </Badge>
                    )}
                  </div>
                  <Badge className={`${otdColor(selectedPO.vendorOTD)} border text-[9px] font-bold font-mono`}>
                    OTD {selectedPO.vendorOTD}%
                  </Badge>
                </div>
                {selectedPO.lastPriceComparison && (
                  <p className="text-[10.5px] text-[#8892A0]">
                    Last comparison: <span className="font-mono">{selectedPO.lastPriceComparison}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Approval Chain */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">Approval Chain</h4>
              <div className="space-y-0">
                {selectedPO.approvalChain.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 relative">
                    {/* Vertical line */}
                    {idx < selectedPO.approvalChain.length - 1 && (
                      <div className="absolute left-[9px] top-5 bottom-0 w-px bg-[#D1D9E3]" />
                    )}
                    <div className="h-[18px] w-[18px] rounded-full bg-[#E3F4F2] flex items-center justify-center shrink-0 mt-0.5 z-10">
                      <CheckCircle2 className="h-3 w-3 text-[#0F7B6C]" />
                    </div>
                    <div className="pb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#0D1B2A]">{step.name}</span>
                        <span className="text-[9.5px] text-[#8892A0]">{step.role}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#8892A0]">{step.date}</span>
                      {step.comment && (
                        <p className="text-[10.5px] text-[#0D1B2A]/70 mt-0.5 italic">"{step.comment}"</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Timeline */}
            <div>
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">Delivery Timeline</h4>
              <div className="rounded-xl border border-[#D1D9E3] bg-slate-50/30 p-3">
                <DeliveryTimeline po={selectedPO} />
              </div>
            </div>

            {/* Goods Receipt Button (for delivered / in-transit POs) */}
            {getDelivery(selectedPO) === "In Transit" && (
              <Button
                onClick={() => handleGoodsReceipt(selectedPO)}
                className="w-full h-9 bg-[#0F7B6C] hover:bg-[#0a6559] text-white text-xs font-bold rounded-lg"
              >
                <Package className="h-4 w-4 mr-1.5" />
                Confirm Goods Receipt
              </Button>
            )}
            {getDelivery(selectedPO) === "Delivered" && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#E3F4F2] border border-[#0F7B6C]/20">
                <CheckCircle2 className="h-4 w-4 text-[#0F7B6C]" />
                <span className="text-[11px] font-bold text-[#0F7B6C]">
                  Goods received on {selectedPO.receivedDate ?? selectedPO.eta}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────── */}
      <div className="flex items-center justify-between rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <Button
            onClick={handleNewRequisition}
            className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-lg"
          >
            <Plus className="h-4 w-4 mr-1.5" />
            New Requisition
          </Button>
          <Button
            variant="outline"
            onClick={handleExport}
            className="h-9 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-xs font-bold rounded-lg"
          >
            <Download className="h-4 w-4 mr-1.5" />
            Export PO Summary
          </Button>
        </div>
        <p className="text-[10px] text-[#8892A0]">
          Total PO value MTD: <strong className="font-mono text-[#0D1B2A]">Rs. 14,82,300</strong>
        </p>
      </div>
    </div>
  );
}
