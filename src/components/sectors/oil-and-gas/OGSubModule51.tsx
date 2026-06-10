import { useState } from "react";
import {
  Plus,
  Filter,
  Clock,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  User,
  ArrowRightCircle,
  XCircle,
  Timer,
  Shield,
  CircleDot,
  FileText,
  Hourglass,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type WorkflowType = "AFE" | "MOC" | "HSE Exception" | "Contractor Auth" | "Budget Exception";
type ColumnKey = "initiated" | "in_review" | "pending_approval" | "approved_closed";

interface ApprovalStep {
  step: number;
  name: string;
  approver: string;
  role: string;
  authorityLimit?: string;
  timestamp?: string;
  status: "complete" | "pending" | "awaiting";
  comment?: string;
  elapsedMin?: number;
  escalationThresholdMin?: number;
}

interface Workflow {
  id: string;
  type: WorkflowType;
  subject: string;
  initiator: string;
  value?: string;
  currentApprover?: string;
  currentStep?: string;
  timeElapsed?: string;
  elapsedMin?: number;
  escalationThresholdMin?: number;
  completedDate?: string;
  column: ColumnKey;
  approvalChain: ApprovalStep[];
}

/* ------------------------------------------------------------------ */
/*  Mock Data                                                          */
/* ------------------------------------------------------------------ */

const WORKFLOWS: Workflow[] = [
  {
    id: "WF-2025-0847",
    type: "AFE",
    subject: "Well B-09 Workover — ESP replacement and tubing pull",
    initiator: "Rajesh Kumar",
    value: "Rs. 1,14,000",
    currentApprover: "Ravi Patel",
    currentStep: "Step 4 of 5",
    timeElapsed: "68 min",
    elapsedMin: 68,
    escalationThresholdMin: 120,
    column: "pending_approval",
    approvalChain: [
      {
        step: 1,
        name: "Well Engineer Initiation",
        approver: "Rajesh Kumar",
        role: "Well Engineer",
        timestamp: "09:02 IST",
        status: "complete",
        comment: "Workover request initiated for ESP replacement.",
      },
      {
        step: 2,
        name: "HSE Review",
        approver: "Priya Menon",
        role: "HSE Manager",
        timestamp: "09:07 IST",
        status: "complete",
        comment: "HSE method statement reviewed. Acid job JSA required before mobilisation.",
      },
      {
        step: 3,
        name: "Operations Manager",
        approver: "Anand Sharma",
        role: "VP Operations",
        authorityLimit: "Rs. 5 Cr",
        timestamp: "09:23 IST",
        status: "complete",
        comment: "Workover programme reviewed — approved.",
      },
      {
        step: 4,
        name: "Finance Controller",
        approver: "Ravi Patel",
        role: "Finance Controller",
        authorityLimit: "Rs. 20 Cr",
        status: "pending",
        elapsedMin: 68,
        escalationThresholdMin: 120,
      },
      {
        step: 5,
        name: "VP Operations Final Auth",
        approver: "Anand Sharma",
        role: "VP Operations",
        status: "awaiting",
      },
    ],
  },
  {
    id: "WF-2025-0843",
    type: "MOC",
    subject: "Revised acid job procedure for Well Pad B",
    initiator: "Priya Menon",
    completedDate: "26 Oct 2025",
    column: "approved_closed",
    approvalChain: [
      {
        step: 1,
        name: "MOC Initiation",
        approver: "Priya Menon",
        role: "HSE Manager",
        timestamp: "08:40 IST",
        status: "complete",
        comment: "Procedure revision request submitted.",
      },
      {
        step: 2,
        name: "Technical Review",
        approver: "Rajesh Kumar",
        role: "Well Engineer",
        timestamp: "09:15 IST",
        status: "complete",
        comment: "Technical feasibility confirmed.",
      },
      {
        step: 3,
        name: "Operations Approval",
        approver: "Anand Sharma",
        role: "VP Operations",
        timestamp: "10:02 IST",
        status: "complete",
        comment: "Approved — implement with updated SOP.",
      },
    ],
  },
  {
    id: "WF-2025-0839",
    type: "HSE Exception",
    subject: "Confined space entry without gas testing (emergency)",
    initiator: "Sushant Verma",
    column: "approved_closed",
    completedDate: "25 Oct 2025",
    approvalChain: [
      {
        step: 1,
        name: "Emergency Request",
        approver: "Sushant Verma",
        role: "Field Supervisor",
        timestamp: "14:12 IST",
        status: "complete",
        comment: "Emergency confined space entry requested — gas testing equipment unavailable.",
      },
      {
        step: 2,
        name: "HSE Exception Review",
        approver: "Priya Menon",
        role: "HSE Manager",
        timestamp: "14:18 IST",
        status: "complete",
        comment: "Emergency exception granted with buddy system mandatory.",
      },
      {
        step: 3,
        name: "Site Manager Auth",
        approver: "Anand Sharma",
        role: "VP Operations",
        timestamp: "14:25 IST",
        status: "complete",
        comment: "Authorised under emergency protocol EP-04.",
      },
    ],
  },
  {
    id: "WF-2025-0831",
    type: "Contractor Auth",
    subject: "Rig crew extension for B-14 (14 days)",
    initiator: "Sushant Verma",
    value: "Rs. 84,00,000",
    completedDate: "23 Oct 2025",
    column: "approved_closed",
    approvalChain: [
      {
        step: 1,
        name: "Extension Request",
        approver: "Sushant Verma",
        role: "Field Supervisor",
        timestamp: "07:30 IST",
        status: "complete",
        comment: "14-day extension for rig crew due to drilling delays.",
      },
      {
        step: 2,
        name: "Contracts Review",
        approver: "Arjun Mehta",
        role: "Contracts Manager",
        timestamp: "09:45 IST",
        status: "complete",
        comment: "Contract terms verified — rate card applicable.",
      },
      {
        step: 3,
        name: "Finance Approval",
        approver: "Ravi Patel",
        role: "Finance Controller",
        authorityLimit: "Rs. 20 Cr",
        timestamp: "11:10 IST",
        status: "complete",
        comment: "Budget allocation confirmed under CAPEX line.",
      },
      {
        step: 4,
        name: "VP Operations",
        approver: "Anand Sharma",
        role: "VP Operations",
        authorityLimit: "Rs. 5 Cr",
        timestamp: "12:35 IST",
        status: "complete",
        comment: "Approved.",
      },
    ],
  },
  {
    id: "WF-2025-0829",
    type: "Budget Exception",
    subject: "Additional chemical spend Rs. 38,000 over budget line",
    initiator: "Arjun Mehta",
    value: "Rs. 38,000",
    currentApprover: "Priya Menon",
    currentStep: "Step 2 of 3",
    timeElapsed: "42 min",
    elapsedMin: 42,
    escalationThresholdMin: 90,
    column: "in_review",
    approvalChain: [
      {
        step: 1,
        name: "Budget Exception Request",
        approver: "Arjun Mehta",
        role: "Contracts Manager",
        timestamp: "10:15 IST",
        status: "complete",
        comment: "Chemical spend exceeds budget line by Rs. 38,000.",
      },
      {
        step: 2,
        name: "HSE & Ops Review",
        approver: "Priya Menon",
        role: "HSE Manager",
        status: "pending",
        elapsedMin: 42,
        escalationThresholdMin: 90,
      },
      {
        step: 3,
        name: "Finance Sign-off",
        approver: "Ravi Patel",
        role: "Finance Controller",
        status: "awaiting",
      },
    ],
  },
];

const COLUMNS: { key: ColumnKey; label: string }[] = [
  { key: "initiated", label: "Initiated" },
  { key: "in_review", label: "In Review" },
  { key: "pending_approval", label: "Pending Approval" },
  { key: "approved_closed", label: "Approved / Closed" },
];

const TYPE_FILTER_OPTIONS: WorkflowType[] = [
  "AFE",
  "MOC",
  "HSE Exception",
  "Contractor Auth",
  "Budget Exception",
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getTypeBadgeStyle(type: WorkflowType): string {
  switch (type) {
    case "AFE":
      return "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20";
    case "MOC":
      return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
    case "HSE Exception":
      return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20";
    case "Contractor Auth":
      return "bg-[#F5F0E8] text-[#C8922A] border-[#C8922A]/20";
    case "Budget Exception":
      return "bg-purple-50 text-purple-700 border-purple-200";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
}

function getEscalationColor(elapsedMin: number, thresholdMin: number): string {
  const pct = elapsedMin / thresholdMin;
  if (pct > 0.8) return "text-[#C0392B]";
  if (pct >= 0.5) return "text-[#C8922A]";
  return "text-[#8892A0]";
}

function getColumnCount(workflows: Workflow[], key: ColumnKey): number {
  return workflows.filter((w) => w.column === key).length;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function OGSubModule51() {
  const [workflows, setWorkflows] = useState<Workflow[]>(WORKFLOWS);
  const [selectedId, setSelectedId] = useState<string>("WF-2025-0847");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const selectedWorkflow = workflows.find((w) => w.id === selectedId) || null;

  const filteredWorkflows = workflows.filter((w) => {
    if (typeFilter !== "All" && w.type !== typeFilter) return false;
    if (statusFilter !== "All") {
      const statusMap: Record<string, ColumnKey[]> = {
        Active: ["initiated", "in_review", "pending_approval"],
        Closed: ["approved_closed"],
      };
      if (statusMap[statusFilter] && !statusMap[statusFilter].includes(w.column)) return false;
    }
    return true;
  });

  const handleApprove = () => {
    if (!selectedWorkflow) return;
    const chain = selectedWorkflow.approvalChain;
    const pendingIdx = chain.findIndex((s) => s.status === "pending");
    if (pendingIdx === -1) {
      toast.info("No pending step to approve.");
      return;
    }

    setWorkflows((prev) =>
      prev.map((wf) => {
        if (wf.id !== selectedWorkflow.id) return wf;
        const newChain = [...wf.approvalChain];
        newChain[pendingIdx] = {
          ...newChain[pendingIdx],
          status: "complete",
          timestamp:
            new Date().toLocaleTimeString("en-IN", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
              timeZone: "Asia/Kolkata",
            }) + " IST",
          comment: "Approved via workflow system.",
          elapsedMin: undefined,
          escalationThresholdMin: undefined,
        };

        // advance next awaiting to pending
        if (pendingIdx + 1 < newChain.length && newChain[pendingIdx + 1].status === "awaiting") {
          newChain[pendingIdx + 1] = {
            ...newChain[pendingIdx + 1],
            status: "pending",
            elapsedMin: 0,
            escalationThresholdMin: 120,
          };
        }

        const allDone = newChain.every((s) => s.status === "complete");
        const hasNewPending = newChain.some((s) => s.status === "pending");
        let newColumn: ColumnKey = wf.column;
        if (allDone) newColumn = "approved_closed";
        else if (hasNewPending) {
          const newPendingStep = newChain.find((s) => s.status === "pending")!;
          newColumn = "pending_approval";
          return {
            ...wf,
            approvalChain: newChain,
            column: newColumn,
            currentApprover: newPendingStep.approver,
            currentStep: `Step ${newPendingStep.step} of ${newChain.length}`,
            timeElapsed: "0 min",
            elapsedMin: 0,
            escalationThresholdMin: 120,
            completedDate: undefined,
          };
        }

        return {
          ...wf,
          approvalChain: newChain,
          column: newColumn,
          currentApprover: undefined,
          currentStep: undefined,
          timeElapsed: undefined,
          elapsedMin: undefined,
          escalationThresholdMin: undefined,
          completedDate: allDone
            ? new Date().toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
            : wf.completedDate,
        };
      }),
    );

    const stepName = chain[pendingIdx].name;
    toast.success(`Step "${stepName}" approved for ${selectedWorkflow.id}`);
  };

  const handleReject = () => {
    if (!selectedWorkflow) return;
    toast.error(`Workflow ${selectedWorkflow.id} rejected. Initiator notified.`);
  };

  return (
    <div className="space-y-4">
      {/* ── Top Bar ────────────────────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Type filter */}
          <div className="relative">
            <Filter className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8892A0]" />
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="h-9 pl-8 pr-3 rounded-xl border border-[#D1D9E3] bg-white text-xs font-semibold text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] appearance-none cursor-pointer"
            >
              <option value="All">All Types</option>
              {TYPE_FILTER_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          {/* Status filter */}
          <div className="relative">
            <CircleDot className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8892A0]" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-9 pl-8 pr-3 rounded-xl border border-[#D1D9E3] bg-white text-xs font-semibold text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] appearance-none cursor-pointer"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        <Button
          onClick={() => toast.info("Workflow initiation form opened")}
          className="bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-xl shadow-sm"
        >
          <Plus className="h-4 w-4 mr-1.5" />
          New Workflow
        </Button>
      </div>

      {/* ── Main Layout ──────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-20 gap-5">
        {/* LEFT PANEL — Kanban Board (55%) */}
        <div className="xl:col-span-11 overflow-x-auto">
          <div className="grid grid-cols-4 gap-3 min-w-[680px]">
            {COLUMNS.map((col) => {
              const colWorkflows = filteredWorkflows.filter((w) => w.column === col.key);
              return (
                <div key={col.key} className="flex flex-col">
                  {/* Column Header */}
                  <div className="flex items-center justify-between mb-3 px-2">
                    <h3 className="text-[11px] font-bold text-[#0D1B2A] uppercase tracking-wide">
                      {col.label}
                    </h3>
                    <span className="flex items-center justify-center h-5 w-5 rounded-full bg-[#0D1B2A] text-white text-[10px] font-bold font-mono">
                      {getColumnCount(filteredWorkflows, col.key)}
                    </span>
                  </div>

                  {/* Column body */}
                  <div className="flex-1 bg-[#F5F6FA] rounded-xl p-2 space-y-2 min-h-[280px]">
                    {colWorkflows.length === 0 && (
                      <div className="flex items-center justify-center h-24 text-[10px] text-[#8892A0]">
                        No workflows
                      </div>
                    )}
                    {colWorkflows.map((wf) => (
                      <button
                        key={wf.id}
                        onClick={() => setSelectedId(wf.id)}
                        className={`w-full text-left p-3 rounded-xl border transition-all ${
                          selectedId === wf.id
                            ? "border-[#C8922A] bg-amber-50/70 shadow-md ring-1 ring-[#C8922A]/30"
                            : "border-[#D1D9E3] bg-white hover:shadow-sm hover:border-[#1A6B8A]/30"
                        }`}
                      >
                        {/* Type badge */}
                        <div className="flex items-center justify-between mb-1.5">
                          <Badge
                            className={`${getTypeBadgeStyle(wf.type)} border text-[9px] font-bold`}
                          >
                            {wf.type}
                          </Badge>
                          <span className="text-[9px] font-mono text-[#8892A0]">{wf.id}</span>
                        </div>

                        {/* Subject */}
                        <p className="text-[11px] font-bold text-[#0D1B2A] leading-snug line-clamp-2 mb-2">
                          {wf.subject}
                        </p>

                        {/* Initiator */}
                        <div className="flex items-center gap-1 text-[10px] text-[#8892A0] mb-1">
                          <User className="h-3 w-3" />
                          <span>{wf.initiator}</span>
                        </div>

                        {/* Value */}
                        {wf.value && (
                          <div className="flex items-center gap-1 text-[10px] mb-1">
                            <span className="font-mono font-bold text-[#0D1B2A]">{wf.value}</span>
                          </div>
                        )}

                        {/* Current approver & step */}
                        {wf.currentApprover && (
                          <div className="flex items-center gap-1 text-[10px] text-[#1A6B8A] mt-1">
                            <ArrowRightCircle className="h-3 w-3" />
                            <span className="font-semibold truncate">{wf.currentApprover}</span>
                            {wf.currentStep && (
                              <span className="text-[#8892A0] font-mono ml-auto text-[9px] shrink-0">
                                {wf.currentStep}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Time elapsed & escalation */}
                        {wf.elapsedMin != null && wf.escalationThresholdMin != null && (
                          <div
                            className={`flex items-center gap-1 mt-1.5 text-[10px] font-semibold font-mono ${getEscalationColor(wf.elapsedMin, wf.escalationThresholdMin)}`}
                          >
                            <Timer className="h-3 w-3" />
                            <span>{wf.timeElapsed} elapsed</span>
                            {wf.elapsedMin / wf.escalationThresholdMin > 0.5 && (
                              <AlertTriangle className="h-3 w-3 ml-auto" />
                            )}
                          </div>
                        )}

                        {/* Completed date */}
                        {wf.completedDate && (
                          <div className="flex items-center gap-1 mt-1.5 text-[10px] text-[#0F7B6C] font-semibold">
                            <CheckCircle2 className="h-3 w-3" />
                            <span>{wf.completedDate}</span>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL — Detail Drawer (45%) */}
        <div className="xl:col-span-9 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden">
          {!selectedWorkflow ? (
            <div className="flex-1 flex flex-col items-center justify-center py-24 text-[#8892A0] space-y-3">
              <FileText className="h-10 w-10 text-[#D1D9E3]" />
              <p className="text-sm font-semibold">Select a workflow to view details</p>
            </div>
          ) : (
            <>
              {/* Drawer Header */}
              <div className="p-5 border-b border-[#D1D9E3] bg-slate-50/50">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        className={`${getTypeBadgeStyle(selectedWorkflow.type)} border text-[9.5px] font-bold`}
                      >
                        {selectedWorkflow.type}
                      </Badge>
                      <span className="text-[10px] font-mono text-[#8892A0]">
                        {selectedWorkflow.id}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-[#0D1B2A] leading-snug">
                      {selectedWorkflow.subject}
                    </h3>
                    <div className="flex items-center gap-3 text-[10.5px] text-[#8892A0] flex-wrap">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <strong className="text-[#1A6B8A]">{selectedWorkflow.initiator}</strong>
                      </span>
                      {selectedWorkflow.value && (
                        <span className="font-mono font-bold text-[#0D1B2A]">
                          {selectedWorkflow.value}
                        </span>
                      )}
                      {selectedWorkflow.currentStep && (
                        <span className="font-mono text-[#C8922A] font-semibold">
                          {selectedWorkflow.currentStep}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Status indicator */}
                  <div className="shrink-0">
                    {selectedWorkflow.column === "approved_closed" ? (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3F4F2] text-[#0F7B6C]">
                        <CheckCircle2 className="h-4 w-4" />
                        <span className="text-[10px] font-bold">Approved</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 text-[#C8922A]">
                        <Hourglass className="h-4 w-4" />
                        <span className="text-[10px] font-bold">In Progress</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Approval Chain Timeline */}
              <div className="flex-1 p-5 overflow-y-auto">
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-4">
                  Approval Chain Timeline
                </h4>

                <div className="relative space-y-0">
                  {selectedWorkflow.approvalChain.map((step, idx) => {
                    const isLast = idx === selectedWorkflow.approvalChain.length - 1;

                    return (
                      <div key={step.step} className="relative flex gap-3">
                        {/* Vertical line + dot */}
                        <div className="flex flex-col items-center">
                          {/* Dot */}
                          <div
                            className={`flex items-center justify-center h-8 w-8 rounded-full shrink-0 ${
                              step.status === "complete"
                                ? "bg-[#0F7B6C] text-white"
                                : step.status === "pending"
                                  ? "bg-amber-100 text-[#C8922A] ring-2 ring-[#C8922A]/30"
                                  : "bg-slate-100 text-[#8892A0]"
                            }`}
                          >
                            {step.status === "complete" ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : step.status === "pending" ? (
                              <Clock className="h-4 w-4" />
                            ) : (
                              <CircleDot className="h-4 w-4" />
                            )}
                          </div>
                          {/* Connector line */}
                          {!isLast && (
                            <div
                              className={`w-0.5 flex-1 min-h-[16px] ${
                                step.status === "complete" ? "bg-[#0F7B6C]/30" : "bg-[#D1D9E3]"
                              }`}
                            />
                          )}
                        </div>

                        {/* Step Content */}
                        <div className={`flex-1 pb-5 ${isLast ? "pb-0" : ""}`}>
                          <div
                            className={`rounded-xl border p-3.5 ${
                              step.status === "complete"
                                ? "border-[#0F7B6C]/20 bg-[#E3F4F2]/30"
                                : step.status === "pending"
                                  ? "border-[#C8922A]/30 bg-amber-50/50 shadow-sm"
                                  : "border-[#D1D9E3] bg-slate-50/50"
                            }`}
                          >
                            {/* Step header */}
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[9px] font-bold font-mono px-1.5 py-0.5 rounded ${
                                    step.status === "complete"
                                      ? "bg-[#0F7B6C]/10 text-[#0F7B6C]"
                                      : step.status === "pending"
                                        ? "bg-[#C8922A]/10 text-[#C8922A]"
                                        : "bg-slate-100 text-[#8892A0]"
                                  }`}
                                >
                                  STEP {step.step}
                                </span>
                                <span className="text-xs font-bold text-[#0D1B2A]">
                                  {step.name}
                                </span>
                              </div>
                              {/* Status label */}
                              {step.status === "complete" && step.timestamp && (
                                <span className="flex items-center gap-1 text-[10px] font-mono text-[#0F7B6C] font-semibold">
                                  <CheckCircle2 className="h-3 w-3" />
                                  {step.timestamp}
                                </span>
                              )}
                              {step.status === "pending" && (
                                <span
                                  className={`flex items-center gap-1 text-[10px] font-mono font-bold ${
                                    step.elapsedMin != null && step.escalationThresholdMin != null
                                      ? getEscalationColor(
                                          step.elapsedMin,
                                          step.escalationThresholdMin,
                                        )
                                      : "text-[#C8922A]"
                                  }`}
                                >
                                  <Clock className="h-3 w-3" />
                                  PENDING {step.elapsedMin} min
                                </span>
                              )}
                              {step.status === "awaiting" && (
                                <span className="text-[10px] font-mono text-[#8892A0] font-semibold">
                                  AWAITING
                                </span>
                              )}
                            </div>

                            {/* Approver info */}
                            <div className="flex items-center gap-2 text-[10.5px] text-[#8892A0] flex-wrap">
                              <span className="flex items-center gap-1">
                                <Shield className="h-3 w-3 text-[#1A6B8A]" />
                                <strong className="text-[#0D1B2A]">{step.approver}</strong>
                                <span className="text-[#8892A0]">({step.role})</span>
                              </span>
                              {step.authorityLimit && (
                                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 border border-[#D1D9E3]">
                                  Limit: {step.authorityLimit}
                                </span>
                              )}
                            </div>

                            {/* Auto-escalation threshold */}
                            {step.status === "pending" && step.escalationThresholdMin && (
                              <div className="mt-2 flex items-center gap-2">
                                <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${
                                      (step.elapsedMin || 0) / step.escalationThresholdMin > 0.8
                                        ? "bg-[#C0392B]"
                                        : (step.elapsedMin || 0) / step.escalationThresholdMin >=
                                            0.5
                                          ? "bg-[#C8922A]"
                                          : "bg-[#0F7B6C]"
                                    }`}
                                    style={{
                                      width: `${Math.min(((step.elapsedMin || 0) / step.escalationThresholdMin) * 100, 100)}%`,
                                    }}
                                  />
                                </div>
                                <span className="text-[9px] font-mono text-[#8892A0] shrink-0">
                                  Auto-escalation: {step.escalationThresholdMin} min
                                </span>
                              </div>
                            )}

                            {/* Comment */}
                            {step.comment && (
                              <div className="mt-2 text-[10.5px] text-[#0D1B2A] leading-relaxed border-l-2 border-[#1A6B8A]/30 pl-2.5 italic">
                                "{step.comment}"
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer — Action Buttons */}
              {selectedWorkflow.column !== "approved_closed" && (
                <div className="p-4 border-t border-[#D1D9E3] bg-white flex items-center justify-end gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReject}
                    className="h-9 border-[#C0392B] text-[#C0392B] hover:bg-[#FDECEA] font-bold text-xs rounded-xl"
                  >
                    <XCircle className="h-4 w-4 mr-1.5" />
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleApprove}
                    className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs rounded-xl shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1.5" />
                    Approve
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
