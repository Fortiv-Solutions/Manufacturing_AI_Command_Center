import { useState } from "react";
import {
  Users, CheckCircle2, Clock, Play, FileText, Send, CheckCircle,
  GraduationCap, Award, Compass, AlertCircle
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

/* ── Types ─────────────────────────────────────────── */
interface Milestone {
  id: string;
  name: string;
  dueDate: string;
  status: "complete" | "pending" | "paused";
  owner: string;
  completedDate?: string;
  notes?: string;
  actionText?: string;
}

interface OnboardingPlan {
  id: string;
  workerName: string;
  role: string;
  startDate: string;
  targetReadiness: string;
  buddy: string;
  supervisor: string;
  tasksComplete: number;
  totalTasks: number;
  status: "On Track" | "At Risk" | "Complete";
  milestones: {
    week1: Milestone[];
    week2: Milestone[];
    weeks3_4Count: number;
  };
}

/* ── Mock Data ─────────────────────────────────────── */
const ONBOARDINGS: OnboardingPlan[] = [
  {
    id: "ONB-2025-0047",
    workerName: "Arjun Mehta",
    role: "Assistant Drilling Engineer",
    startDate: "04 Nov 2025",
    targetReadiness: "04 Dec 2025",
    buddy: "Sushant Verma",
    supervisor: "Anand Sharma",
    tasksComplete: 2,
    totalTasks: 28,
    status: "At Risk",
    milestones: {
      week1: [
        { id: "M1", name: "Site security induction & ID badge", dueDate: "04 Nov 2025", status: "complete", owner: "Anand Sharma", completedDate: "04 Nov 2025" },
        { id: "M2", name: "Emergency mustering drill & assembly points", dueDate: "04 Nov 2025", status: "complete", owner: "Priya Menon", completedDate: "04 Nov 2025" },
        { id: "M3", name: "OISD-STD-154 awareness training", dueDate: "06 Nov 2025", status: "pending", owner: "Priya Menon", actionText: "Book now - 1 slot available" },
        { id: "M4", name: "Driller's cabin familiarisation", dueDate: "07 Nov 2025", status: "paused", owner: "Sushant Verma" },
        { id: "M5", name: "H2S monitor calibration training", dueDate: "08 Nov 2025", status: "paused", owner: "Safety Team", actionText: "Book now" },
        { id: "M6", name: "PTW system orientation (read access)", dueDate: "08 Nov 2025", status: "paused", owner: "IT Team", notes: "IT access request raised" }
      ],
      week2: [
        { id: "M7", name: "Shadow well test (with Rajesh Kumar)", dueDate: "10 Nov 2025", status: "paused", owner: "Rajesh Kumar", notes: "Scheduled 10 Nov 08:00" },
        { id: "M8", name: "Attend daily drilling review × 5", dueDate: "14 Nov 2025", status: "paused", owner: "Anand Sharma", notes: "Ongoing" },
        { id: "M9", name: "MOC procedure training (online)", dueDate: "13 Nov 2025", status: "paused", owner: "HR Team", actionText: "Assign module" },
        { id: "M10", name: "ERP (SAP) system orientation", dueDate: "12 Nov 2025", status: "paused", owner: "IT Team", notes: "IT ticket: #SAP-0891" }
      ],
      weeks3_4Count: 18
    }
  },
  {
    id: "ONB-2025-0048",
    workerName: "Kavita Reddy",
    role: "Environment Analyst",
    startDate: "28 Oct 2025",
    targetReadiness: "28 Nov 2025",
    buddy: "Priya Menon",
    supervisor: "Anand Sharma",
    tasksComplete: 14,
    totalTasks: 24,
    status: "On Track",
    milestones: {
      week1: [
        { id: "K1", name: "Site security induction & ID badge", dueDate: "28 Oct 2025", status: "complete", owner: "Anand Sharma", completedDate: "28 Oct 2025" },
        { id: "K2", name: "Emergency mustering drill", dueDate: "28 Oct 2025", status: "complete", owner: "Priya Menon", completedDate: "28 Oct 2025" }
      ],
      week2: [
        { id: "K3", name: "Environmental Regulations Handout", dueDate: "04 Nov 2025", status: "complete", owner: "Priya Menon", completedDate: "04 Nov 2025" }
      ],
      weeks3_4Count: 21
    }
  }
];

export function OGSubModule62() {
  const [selectedPlan, setSelectedPlan] = useState<OnboardingPlan>(ONBOARDINGS[0]);
  const [checklist, setChecklist] = useState<Record<string, Milestone["status"]>>(() => {
    const states: Record<string, Milestone["status"]> = {};
    ONBOARDINGS.forEach(p => {
      [...p.milestones.week1, ...p.milestones.week2].forEach(m => {
        states[`${p.id}-${m.id}`] = m.status;
      });
    });
    return states;
  });

  const getStatus = (planId: string, mId: string, def: Milestone["status"]) => {
    return checklist[`${planId}-${mId}`] ?? def;
  };

  const handleToggle = (planId: string, mId: string) => {
    const key = `${planId}-${mId}`;
    const curr = checklist[key] || "paused";
    const next: Milestone["status"] = curr === "complete" ? "paused" : "complete";
    setChecklist(prev => ({ ...prev, [key]: next }));
    
    // adjust complete tasks count for display
    if (next === "complete") {
      toast.success("Milestone marked as complete.");
    } else {
      toast("Milestone reverted to pending.");
    }
  };

  const handleGeneratePack = (plan: OnboardingPlan) => {
    toast.loading(`Compiling induction materials, maps, and safety standards for ${plan.workerName}...`);
    setTimeout(() => {
      toast.dismiss();
      toast.success(`Induction Pack PDF generated! 34 pages dispatched to ${plan.workerName} via email.`);
    }, 2000);
  };

  const handleSendReminder = (plan: OnboardingPlan) => {
    toast.success(`Buddy notification sent to ${plan.buddy} to check in on ${plan.workerName}'s milestones.`);
  };

  const handleMarkReady = (plan: OnboardingPlan) => {
    toast.success(`${plan.workerName} signed off by ${plan.supervisor} for independent operational clearance!`);
  };

  return (
    <div className="space-y-6">

      {/* ── Top Summary Bar ──────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          { label: "Active Onboardings", value: "2", icon: Users, color: "#1A6B8A", bg: "bg-blue-50" },
          { label: "Avg Completion Rate", value: "61%", icon: Compass, color: "#1A6B8A", bg: "bg-blue-50" },
          { label: "On Track", value: "1", icon: CheckCircle2, color: "#0F7B6C", bg: "bg-[#E3F4F2]" },
          { label: "At Risk", value: "1", icon: AlertCircle, color: "#C8922A", bg: "bg-amber-50", pulse: true },
          { label: "Completed This Month", value: "3", icon: Award, color: "#0F7B6C", bg: "bg-[#E3F4F2]" }
        ].map(kpi => (
          <div key={kpi.label} className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex items-center gap-3">
            <div className={`${kpi.bg} h-9 w-9 rounded-xl flex items-center justify-center shrink-0`}>
              <kpi.icon className="h-5 w-5" style={{ color: kpi.color }} />
            </div>
            <div>
              <p className="text-[10px] text-[#8892A0] font-semibold">{kpi.label}</p>
              <p className="text-lg font-bold font-mono text-[#0D1B2A]">{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Main Area: Split List & Details ──────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left Side: Onboarding Plans List (35%) */}
        <div className="lg:col-span-4 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50">
            <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">Active Onboarding Plans</h3>
          </div>
          <div className="p-3 divide-y divide-slate-100 flex-1">
            {ONBOARDINGS.map(plan => {
              const isSelected = selectedPlan.id === plan.id;
              const isAtRisk = plan.status === "At Risk";

              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan)}
                  className={`p-3 rounded-xl cursor-pointer transition-all ${
                    isSelected ? "bg-blue-50/60 border border-blue-200" : "hover:bg-slate-50 border border-transparent"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-[#0D1B2A] text-xs">{plan.workerName}</span>
                    <Badge className={
                      isAtRisk
                        ? "bg-amber-50 text-amber-700 border-amber-200 border text-[9px] font-bold animate-pulse"
                        : "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-bold"
                    }>
                      {plan.status}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-[#8892A0] font-semibold">{plan.role}</p>
                  <div className="flex items-center justify-between mt-3 text-[10px]">
                    <span className="text-[#8892A0] font-mono">ID: {plan.id}</span>
                    <span className="text-[#0D1B2A] font-bold font-mono">
                      {plan.tasksComplete}/{plan.totalTasks} tasks ({((plan.tasksComplete / plan.totalTasks) * 100).toFixed(0)}%)
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Onboarding Plan Detail Checklist (65%) */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          {/* Detail Header */}
          <div className="p-5 border-b border-[#D1D9E3] bg-slate-50/50 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-sm font-bold text-[#0D1B2A]">{selectedPlan.workerName}</h3>
                <p className="text-xs text-[#8892A0] font-semibold">{selectedPlan.role} — {selectedPlan.id}</p>
              </div>
              <Badge className={
                selectedPlan.status === "At Risk"
                  ? "bg-amber-50 text-amber-700 border-amber-200 border text-[9.5px] font-bold self-start sm:self-center"
                  : "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9.5px] font-bold self-start sm:self-center"
              }>
                {selectedPlan.status}
              </Badge>
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#8892A0]">Milestone Completion Progress</span>
                <span className="font-mono font-bold text-[#0D1B2A]">
                  {selectedPlan.tasksComplete} of {selectedPlan.totalTasks} ({((selectedPlan.tasksComplete / selectedPlan.totalTasks) * 100).toFixed(1)}%)
                </span>
              </div>
              <Progress
                value={(selectedPlan.tasksComplete / selectedPlan.totalTasks) * 100}
                className={`h-2.5 rounded-full ${
                  selectedPlan.status === "At Risk" ? "[&>div]:bg-[#C8922A]" : "[&>div]:bg-[#0F7B6C]"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px] text-[#8892A0] pt-1">
              <div>
                <p>Start Date</p>
                <p className="font-bold text-[#0D1B2A] font-mono">{selectedPlan.startDate}</p>
              </div>
              <div>
                <p>Target Clearance</p>
                <p className="font-bold text-[#0D1B2A] font-mono">{selectedPlan.targetReadiness}</p>
              </div>
              <div>
                <p>Week 1 Buddy</p>
                <p className="font-bold text-[#0D1B2A]">{selectedPlan.buddy}</p>
              </div>
              <div>
                <p>Line Supervisor</p>
                <p className="font-bold text-[#0D1B2A]">{selectedPlan.supervisor}</p>
              </div>
            </div>
          </div>

          {/* Checklist Sections */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6">

            {/* Week 1 */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider border-b pb-1">
                Week 1 (Days 1–5) — General Site Orientation
              </h4>
              <div className="space-y-1.5">
                {selectedPlan.milestones.week1.map(m => {
                  const status = getStatus(selectedPlan.id, m.id, m.status);

                  return (
                    <div
                      key={m.id}
                      onClick={() => handleToggle(selectedPlan.id, m.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all hover:bg-slate-50 ${
                        status === "complete"
                          ? "bg-[#E3F4F2]/30 border-[#0F7B6C]/10"
                          : m.status === "pending"
                          ? "border-amber-200 bg-amber-50/10"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {status === "complete" ? (
                          <CheckCircle2 className="h-4 w-4 text-[#0F7B6C]" />
                        ) : m.status === "pending" ? (
                          <Clock className="h-4 w-4 text-[#C8922A] animate-pulse" />
                        ) : (
                          <Play className="h-4 w-4 text-[#8892A0]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-semibold ${status === "complete" ? "line-through text-[#8892A0]" : "text-[#0D1B2A]"}`}>
                            {m.name}
                          </p>
                          <span className="text-[10px] font-mono text-[#8892A0]">{m.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#8892A0]">
                          <span>Owner: <strong>{m.owner}</strong></span>
                          {m.notes && <span>• <em>{m.notes}</em></span>}
                          {m.actionText && (
                            <span className="text-[#C8922A] font-bold hover:underline shrink-0">
                              [{m.actionText}]
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Week 2 */}
            <div className="space-y-2.5">
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider border-b pb-1">
                Week 2 (Days 6–10) — Operational & Safety Training
              </h4>
              <div className="space-y-1.5">
                {selectedPlan.milestones.week2.map(m => {
                  const status = getStatus(selectedPlan.id, m.id, m.status);

                  return (
                    <div
                      key={m.id}
                      onClick={() => handleToggle(selectedPlan.id, m.id)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all hover:bg-slate-50 ${
                        status === "complete"
                          ? "bg-[#E3F4F2]/30 border-[#0F7B6C]/10"
                          : "border-slate-200"
                      }`}
                    >
                      <div className="shrink-0 mt-0.5">
                        {status === "complete" ? (
                          <CheckCircle2 className="h-4 w-4 text-[#0F7B6C]" />
                        ) : (
                          <Play className="h-4 w-4 text-[#8892A0]" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0 text-xs">
                        <div className="flex items-center justify-between gap-2">
                          <p className={`font-semibold ${status === "complete" ? "line-through text-[#8892A0]" : "text-[#0D1B2A]"}`}>
                            {m.name}
                          </p>
                          <span className="text-[10px] font-mono text-[#8892A0]">{m.dueDate}</span>
                        </div>
                        <div className="flex items-center gap-3 mt-1.5 text-[10px] text-[#8892A0]">
                          <span>Owner: <strong>{m.owner}</strong></span>
                          {m.notes && <span>• <em>{m.notes}</em></span>}
                          {m.actionText && (
                            <span className="text-[#C8922A] font-bold hover:underline shrink-0">
                              [{m.actionText}]
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weeks 3-4 Placeholder */}
            <div className="p-3 border border-dashed rounded-xl flex items-center justify-between bg-slate-50/20 text-xs text-[#8892A0]">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="h-4 w-4 text-[#1A6B8A]" />
                Weeks 3 & 4 Competency & Technical Sign-Offs
              </span>
              <span>{selectedPlan.milestones.weeks3_4Count} tasks pending</span>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-[#D1D9E3] bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                onClick={() => handleGeneratePack(selectedPlan)}
                className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-lg"
              >
                <FileText className="h-4 w-4 mr-1.5" />
                Generate Induction Pack
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleSendReminder(selectedPlan)}
                className="h-9 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-xs font-bold rounded-lg"
              >
                <Send className="h-4 w-4 mr-1.5" />
                Remind Buddy
              </Button>
            </div>
            <Button
              size="sm"
              onClick={() => handleMarkReady(selectedPlan)}
              className="h-9 bg-[#0F7B6C] hover:bg-[#0a6559] text-white text-xs font-bold rounded-lg"
            >
              <CheckCircle className="h-4 w-4 mr-1.5" />
              Sign Off Readiness
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
}
