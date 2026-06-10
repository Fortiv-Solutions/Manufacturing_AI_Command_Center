import { useState } from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Send,
  Download,
  Edit2,
  Check,
  RefreshCw,
  Layers,
  Users,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────── */
interface Recipient {
  name: string;
  role: string;
  status: "Sent" | "Opened" | "Pending";
  time?: string;
}

interface ReportDraft {
  id: string;
  type: string;
  period: string;
  compiledAt: string;
  duration: string;
  status: "Scheduled" | "Compiling" | "Draft Ready" | "Distributed" | "Overdue";
  recipientsCount: number;
  recipients: Recipient[];
  metrics: {
    production: string;
    prodTarget: string;
    gas: string;
    opexTotal: string;
    opexBudget: string;
    opexPerBbl: string;
    opexPerBblBudget: string;
    capex: string;
    capexPlan: string;
    hse: string;
    compliance: string;
    workforce: string;
  };
  summary: string;
}

/* ── Mock Data ─────────────────────────────────────── */
const INITIAL_REPORTS: ReportDraft[] = [
  {
    id: "RPT-2025-M10-MONTHLY",
    type: "Monthly Management Report",
    period: "October 2025",
    compiledAt: "01 Nov 2025 05:58 IST",
    duration: "4m 12s",
    status: "Draft Ready",
    recipientsCount: 24,
    recipients: [
      { name: "Anand Sharma", role: "VP Operations", status: "Opened", time: "01 Nov 09:14 IST" },
      {
        name: "Ravi Patel",
        role: "Finance Controller",
        status: "Opened",
        time: "01 Nov 09:14 IST",
      },
      { name: "Priya Menon", role: "HSE Manager", status: "Opened", time: "01 Nov 09:14 IST" },
    ],
    metrics: {
      production: "1,28,340 bbl",
      prodTarget: "1,34,750 bbl",
      gas: "18.4 MMSCFD",
      opexTotal: "Rs. 5.25 Cr",
      opexBudget: "Rs. 5.09 Cr",
      opexPerBbl: "Rs. 4,127",
      opexPerBblBudget: "Rs. 3,980",
      capex: "Rs. 2.14 Cr",
      capexPlan: "Rs. 2.40 Cr",
      hse: "0 LTI | 4 Near Misses",
      compliance: "100% On-time | 0 Gaps",
      workforce: "94.4% Qualified | 3 Blocked",
    },
    summary: `October 2025 production of 1,28,340 bbl came in 4.76% below target (6,410 bbl shortfall), attributable primarily to two events: the unplanned shut-in of Well C-07 following an ESP trip on 28 Oct (estimated 3,200 bbl impact) and planned maintenance downtime at Pad A over 18–20 Oct (estimated 1,840 bbl impact).

OPEX overrun of Rs. 16 lakh (3.69% above budget) was driven by unplanned pump repair costs at Pad B (Rs. 9 lakh) and increased H2S scavenger chemical volumes at Wells C-07 and C-11 (Rs. 7 lakh). These are assessed as one-off events; no structural cost trend is indicated. CAPEX was Rs. 26 lakh below plan, reflecting a 3-week delay to the B-15 well spud, which has been rescheduled to 14 Nov 2025.`,
  },
  {
    id: "RPT-2025-D1847",
    type: "Daily Operations Report",
    period: "04 Nov 2025",
    compiledAt: "04 Nov 2025 06:00 IST",
    duration: "2m 47s",
    status: "Distributed",
    recipientsCount: 24,
    recipients: [],
    metrics: {
      production: "4,120 bbl",
      prodTarget: "4,350 bbl",
      gas: "18.4 MMSCFD",
      opexTotal: "Rs. 16.8 L",
      opexBudget: "Rs. 16.4 L",
      opexPerBbl: "Rs. 4,077",
      opexPerBblBudget: "Rs. 3,980",
      capex: "Rs. 6.8 L",
      capexPlan: "Rs. 7.5 L",
      hse: "0 LTI | 0 Near Misses",
      compliance: "100% On-time",
      workforce: "94.4% Qualified",
    },
    summary: "Production stable at 4,120 bbl. General maintenance routines completed on Pad A.",
  },
  {
    id: "RPT-2025-W44",
    type: "Weekly Production Summary",
    period: "Week of 28 Oct - 03 Nov",
    compiledAt: "03 Nov 2025 07:00 IST",
    duration: "3m 15s",
    status: "Distributed",
    recipientsCount: 8,
    recipients: [],
    metrics: {
      production: "28,840 bbl",
      prodTarget: "30,450 bbl",
      gas: "18.2 MMSCFD",
      opexTotal: "Rs. 1.18 Cr",
      opexBudget: "Rs. 1.15 Cr",
      opexPerBbl: "Rs. 4,091",
      opexPerBblBudget: "Rs. 3,980",
      capex: "Rs. 48.5 L",
      capexPlan: "Rs. 56.0 L",
      hse: "0 LTI | 2 Near Misses",
      compliance: "100%",
      workforce: "94.4%",
    },
    summary: "Weekly metrics show a minor variance due to the Well C-07 shut-in. Repair completed.",
  },
  {
    id: "RPT-2025-Q2",
    type: "Board Quarterly Report (Q2)",
    period: "Q2 FY 2025-26",
    compiledAt: "Pending Trigger",
    duration: "—",
    status: "Scheduled",
    recipientsCount: 8,
    recipients: [],
    metrics: {
      production: "3.94 Lakh bbl",
      prodTarget: "4.04 Lakh bbl",
      gas: "18.3 MMSCFD",
      opexTotal: "Rs. 16.2 Cr",
      opexBudget: "Rs. 15.9 Cr",
      opexPerBbl: "Rs. 4,111",
      opexPerBblBudget: "Rs. 3,980",
      capex: "Rs. 6.84 Cr",
      capexPlan: "Rs. 7.20 Cr",
      hse: "0 LTI | 11 Near Misses",
      compliance: "100%",
      workforce: "94.4%",
    },
    summary: "Quarterly draft to compile automatically on 15 Nov.",
  },
];

export function OGSubModule71() {
  const [reports, setReports] = useState<ReportDraft[]>(INITIAL_REPORTS);
  const [selectedReport, setSelectedReport] = useState<ReportDraft>(INITIAL_REPORTS[0]);
  const [editableSummary, setEditableSummary] = useState(INITIAL_REPORTS[0].summary);
  const [isEditing, setIsEditing] = useState(false);
  const [compilingId, setCompilingId] = useState<string | null>(null);

  const handleSelectReport = (r: ReportDraft) => {
    setSelectedReport(r);
    setEditableSummary(r.summary);
    setIsEditing(false);
  };

  const handleApproveSend = () => {
    toast.loading("Encrypting PDF and broadcasting to distribution list...");

    setTimeout(() => {
      // update state
      const updatedReports = reports.map((r) => {
        if (r.id === selectedReport.id) {
          return {
            ...r,
            status: "Distributed" as const,
            summary: editableSummary,
            recipients: [
              {
                name: "Anand Sharma",
                role: "VP Operations",
                status: "Sent" as const,
                time: "Just Now",
              },
              {
                name: "Ravi Patel",
                role: "Finance Controller",
                status: "Sent" as const,
                time: "Just Now",
              },
              {
                name: "Priya Menon",
                role: "HSE Manager",
                status: "Sent" as const,
                time: "Just Now",
              },
              ...r.recipients.filter(
                (x) =>
                  x.name !== "Anand Sharma" && x.name !== "Ravi Patel" && x.name !== "Priya Menon",
              ),
            ],
          };
        }
        return r;
      });

      setReports(updatedReports);
      setSelectedReport(updatedReports[0]);
      toast.dismiss();
      toast.success("Monthly Management Report approved and distributed successfully!");
    }, 2000);
  };

  const handleCompileNow = (rId: string) => {
    setCompilingId(rId);
    toast.loading("Querying SAP registers and compiling PDF draft...");

    setTimeout(() => {
      setCompilingId(null);
      const updatedReports = reports.map((r) => {
        if (r.id === rId) {
          return { ...r, status: "Draft Ready" as const, compiledAt: "Just Now" };
        }
        return r;
      });
      setReports(updatedReports);
      setSelectedReport(updatedReports.find((x) => x.id === rId) || selectedReport);
      toast.dismiss();
      toast.success("Draft report generation complete.");
    }, 2000);
  };

  const statusBadge = (s: ReportDraft["status"]) => {
    const maps = {
      Scheduled: "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20",
      Compiling: "bg-amber-50 text-[#C8922A] border-[#C8922A]/20 animate-pulse",
      "Draft Ready": "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border font-bold",
      Distributed: "bg-slate-100 text-slate-500 border-slate-200",
      Overdue: "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 animate-bounce",
    }[s];

    return (
      <Badge className={`${maps} border text-[9px] font-bold font-mono`}>{s.toUpperCase()}</Badge>
    );
  };

  return (
    <div className="space-y-6">
      {/* ── Top Stats Bar ────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            label: "Gross Production (MTD)",
            value: "1,28,340 / 1,34,750 bbl",
            sub: "-4.76% vs Target",
            color: "#1A6B8A",
            bg: "bg-blue-50",
          },
          {
            label: "OPEX Lifting Cost",
            value: "Rs. 4,127 / bbl",
            sub: "+3.69% vs Budget",
            color: "#C8922A",
            bg: "bg-[#F5F0E8]",
          },
          {
            label: "HSE Status YTD",
            value: "0 LTI · 4 Near Miss",
            sub: "Safety checks 100% compliant",
            color: "#0F7B6C",
            bg: "bg-[#E3F4F2]",
          },
          {
            label: "Regulatory Filings",
            value: "100% On-time",
            sub: "0 open compliance gaps",
            color: "#0F7B6C",
            bg: "bg-[#E3F4F2]",
          },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex items-center gap-3"
          >
            <div
              className={`${kpi.bg} h-10 w-10 rounded-xl flex items-center justify-center shrink-0`}
            >
              {kpi.color === "#0F7B6C" ? (
                <ShieldCheck className="h-5.5 w-5.5 text-[#0F7B6C]" />
              ) : kpi.color === "#C8922A" ? (
                <TrendingUp className="h-5.5 w-5.5 text-[#C8922A]" />
              ) : (
                <Layers className="h-5.5 w-5.5 text-[#1A6B8A]" />
              )}
            </div>
            <div>
              <p className="text-[10.5px] text-[#8892A0] font-semibold">{kpi.label}</p>
              <p className="text-sm font-bold font-mono text-[#0D1B2A]">{kpi.value}</p>
              <p className="text-[9.5px] text-[#8892A0]">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main Area: Split Report Panel ────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Report Compiler Schedule (35%) */}
        <div className="lg:col-span-4 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">
              Reports Schedule
            </h3>
            <Button
              size="sm"
              variant="outline"
              onClick={() => toast("Template settings drawer opened.")}
              className="h-7 border-[#D1D9E3] text-[#0D1B2A] text-[10.5px] font-bold"
            >
              Recipients
            </Button>
          </div>

          <div className="p-3 divide-y divide-slate-100 flex-1">
            {reports.map((r) => {
              const isSelected = selectedReport.id === r.id;
              const isCompiling = compilingId === r.id;

              return (
                <div
                  key={r.id}
                  onClick={() => !isCompiling && handleSelectReport(r)}
                  className={`p-3.5 rounded-xl cursor-pointer transition-all border ${
                    isSelected
                      ? "bg-blue-50/60 border-blue-200"
                      : "hover:bg-slate-50 border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-[#0D1B2A] leading-tight">{r.type}</span>
                    {statusBadge(r.status)}
                  </div>
                  <p className="text-[10px] text-[#8892A0] font-mono mb-2">{r.period}</p>
                  <div className="flex items-center justify-between text-[9.5px] text-[#8892A0]">
                    <span>
                      Next Due:{" "}
                      <strong className="text-[#0D1B2A]">
                        {r.period.includes("Oct")
                          ? "01 Dec"
                          : r.type.includes("Board")
                            ? "15 Nov"
                            : "Tomorrow"}
                      </strong>
                    </span>
                    {r.status === "Scheduled" ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCompileNow(r.id);
                        }}
                        className="text-[#C8922A] font-bold hover:underline"
                      >
                        Compile Now
                      </button>
                    ) : (
                      <span>{r.recipientsCount} Recipients</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Report Review and Distribution (65%) */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          {/* Detail Header */}
          <div className="p-5 border-b border-[#D1D9E3] bg-slate-50/50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-sm font-bold text-[#0D1B2A]">{selectedReport.type}</h3>
              <p className="text-xs text-[#8892A0] font-mono">
                Period: {selectedReport.period} | ID: {selectedReport.id}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {statusBadge(selectedReport.status)}
              <Button
                size="sm"
                variant="outline"
                onClick={() => toast.success("Draft PDF successfully downloaded for preview.")}
                className="h-8 border-[#D1D9E3] text-[#0D1B2A] text-xs font-bold"
              >
                <Download className="h-4.5 w-4.5 mr-1" />
                Draft
              </Button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-6">
            {/* Metrics Breakdown Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                {
                  label: "Production",
                  val: selectedReport.metrics.production,
                  sub: `Target: ${selectedReport.metrics.prodTarget}`,
                },
                {
                  label: "Lifting Cost",
                  val: selectedReport.metrics.opexPerBbl,
                  sub: `Budget: ${selectedReport.metrics.opexPerBblBudget}`,
                },
                {
                  label: "CAPEX Spent",
                  val: selectedReport.metrics.capex,
                  sub: `Plan: ${selectedReport.metrics.capexPlan}`,
                },
                {
                  label: "Safety Status",
                  val: selectedReport.metrics.hse,
                  sub: "Verified HSE log",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="p-3 border border-[#D1D9E3] rounded-xl bg-slate-50/20 text-xs"
                >
                  <p className="text-[10px] text-[#8892A0] font-semibold">{m.label}</p>
                  <p className="font-bold text-[#0D1B2A] font-mono pt-1 text-sm">{m.val}</p>
                  <p className="text-[9.5px] text-[#8892A0] pt-0.5">{m.sub}</p>
                </div>
              ))}
            </div>

            {/* AI Narrative Commentary Block */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                  AI-Generated Executive Summary
                </h4>
                {selectedReport.status === "Draft Ready" && (
                  <button
                    onClick={() => setIsEditing(!isEditing)}
                    className="text-[#1A6B8A] hover:text-[#0D1B2A] text-[11px] font-semibold flex items-center gap-1"
                  >
                    {isEditing ? (
                      <>
                        <Check className="h-3.5 w-3.5" /> Finish Editing
                      </>
                    ) : (
                      <>
                        <Edit2 className="h-3.5 w-3.5" /> Edit Commentary
                      </>
                    )}
                  </button>
                )}
              </div>
              <div className="p-4 border border-[#D1D9E3] rounded-xl bg-slate-50/10 text-xs leading-relaxed text-[#0D1B2A] space-y-3">
                {isEditing ? (
                  <textarea
                    rows={6}
                    value={editableSummary}
                    onChange={(e) => setEditableSummary(e.target.value)}
                    className="w-full p-2 border border-[#D1D9E3] rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A6B8A] text-xs font-sans"
                  />
                ) : (
                  <p className="whitespace-pre-line">{editableSummary}</p>
                )}
              </div>
            </div>

            {/* Recipients & Distribution log */}
            {selectedReport.recipients.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                  Distribution Log
                </h4>
                <div className="border border-[#D1D9E3] rounded-xl divide-y divide-slate-100 bg-white">
                  {selectedReport.recipients.map((rep) => (
                    <div key={rep.name} className="p-3 flex items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-[#0D1B2A]">{rep.name}</span>
                        <span className="text-[10px] text-[#8892A0] ml-2">({rep.role})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          className={
                            rep.status === "Opened"
                              ? "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-bold"
                              : "bg-blue-50 text-[#1A6B8A] border-blue-200 border text-[9px] font-bold"
                          }
                        >
                          {rep.status}
                        </Badge>
                        {rep.time && (
                          <span className="font-mono text-[9px] text-[#8892A0]">{rep.time}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer controls */}
          <div className="p-4 border-t border-[#D1D9E3] bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
            <span className="text-[10px] text-[#8892A0] font-mono">
              Compiled at: {selectedReport.compiledAt}
            </span>
            {selectedReport.status === "Draft Ready" ? (
              <Button
                onClick={handleApproveSend}
                className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-lg px-4"
              >
                <Send className="h-4 w-4 mr-1.5" />
                Approve & Distribute Report
              </Button>
            ) : (
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#0F7B6C]" />
                <span className="text-[11px] font-bold text-[#0F7B6C]">
                  Distributed to {selectedReport.recipientsCount} managers
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
