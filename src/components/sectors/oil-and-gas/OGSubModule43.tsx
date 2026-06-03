import { useState } from "react";
import {
  MessageSquare, Sparkles, Loader2, CheckCircle2, AlertCircle,
  Clock, Users, Send, Download, ChevronRight, Check, User
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ActionItem {
  id: string;
  description: string;
  owner: string;
  due: string;
  priority: "HIGH" | "MED" | "LOW";
  status: "Open" | "In Progress" | "Complete" | "Overdue";
  carried?: boolean;
}

interface Decision {
  id: number;
  text: string;
  decidedBy: string;
}

const SAMPLE_TRANSCRIPT = `Meeting: Weekly Production Review | 28 Oct 2025 | Duration: 52 minutes
Participants: Anand Sharma, Priya Menon, Rajesh Kumar, Ravi Patel, Sushant Verma

Anand Sharma: Production at Well Pad A recovered to 94% of target after the Well C-07 ESP workover completed on 26 October.

Rajesh Kumar: Gross oil for the week ending 27 October was 41,280 bbl against a target of 43,500 bbl. The shortfall is due to planned maintenance downtime at Pad A compressor.

Anand Sharma: Water injection shortfall remains unresolved pending delivery of the replacement pump impeller for the Pad B injection pump. I have approved the PO — impeller expected by 07 November.

Ravi Patel: Q3 OPEX closeout — Rs. 4.8 crore versus budget of Rs. 4.6 crore, that is plus 4.3%. I am signing off on this.

Sushant Verma: B-15 spud date confirmed for 05 November. I need to mobilise the rig crew by 02 November.

Priya Menon: I need to update the emergency contact list for Well Pad B — will do by 31 October.`;

export function OGSubModule43() {
  const [transcript, setTranscript] = useState(SAMPLE_TRANSCRIPT);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(true);
  const [activeTab, setActiveTab] = useState<"Summary" | "Actions" | "Decisions">("Actions");

  const [summary] = useState([
    "Production at Well Pad A recovered to 94% of target following the completion of the Well C-07 ESP workover on 26 October. Gross oil for the week ending 27 October was 41,280 bbl, against a target of 43,500 bbl, with the remaining shortfall attributable to planned maintenance downtime at Pad A compressor station.",
    "Water injection shortfall remains unresolved pending delivery of the replacement pump impeller for the Pad B injection pump. Current injection rate is 12,400 bbl/day against a target of 18,200 bbl/day. Anand Sharma confirmed that a purchase order has been approved and the impeller is expected on site by 07 November.",
    "Q3 financial closeout was approved, with OPEX confirmed at Rs. 4.8 crore against a budget of Rs. 4.6 crore (+4.3%). Three actions from last week's meeting were carried forward, all with revised due dates agreed by owners."
  ]);

  const [decisions] = useState<Decision[]>([
    { id: 1, text: "Q3 OPEX closeout approved at Rs. 4.8 crore — signed off by Ravi Patel", decidedBy: "Ravi Patel" },
    { id: 2, text: "Well C-07 workover declared complete and well returned to production", decidedBy: "Anand Sharma" },
    { id: 3, text: "Pad B injection pump repair prioritised — target restoration by 10 Nov 2025", decidedBy: "Anand Sharma" },
    { id: 4, text: "B-15 spud date confirmed: 05 Nov 2025 — Sushant Verma to mobilise rig crew", decidedBy: "Sushant Verma" }
  ]);

  const [actions, setActions] = useState<ActionItem[]>([
    { id: "ACT-2025-1284", description: "Order replacement pump impeller — Part No. MP-4027 for Pad B injection pump", owner: "Anand Sharma", due: "04 Nov 2025", priority: "HIGH", status: "Open" },
    { id: "ACT-2025-1285", description: "Update emergency contact list for Well Pad B site personnel", owner: "Priya Menon", due: "31 Oct 2025", priority: "HIGH", status: "Open" },
    { id: "ACT-2025-1286", description: "Circulate Q4 OPEX budget template to all cost centre owners", owner: "Ravi Patel", due: "05 Nov 2025", priority: "MED", status: "Open" },
    { id: "ACT-2025-1287", description: "Confirm B-15 spud date and mobilise full rig crew from Jodhpur yard", owner: "Sushant Verma", due: "02 Nov 2025", priority: "HIGH", status: "Open" },
    { id: "ACT-2025-1288", description: "Submit Q3 production data to DGH — W-10 monthly return filing", owner: "Rajesh Kumar", due: "07 Nov 2025", priority: "HIGH", status: "Open" },
    { id: "ACT-2025-1261", description: "Scaffold inspection at Well Pad B — pending since last week", owner: "Sushant Verma", due: "24 Oct 2025", priority: "HIGH", status: "Overdue", carried: true },
    { id: "ACT-2025-1268", description: "Chemical inventory audit — Pad C storage yards", owner: "Priya Menon", due: "25 Oct 2025", priority: "MED", status: "Overdue", carried: true }
  ]);

  const handleProcess = () => {
    if (!transcript.trim()) {
      toast.error("Paste a meeting transcript first.");
      return;
    }
    setIsProcessing(true);
    setIsProcessed(false);
    toast.loading("Parsing transcript: identifying decisions & extracting action owners...");
    setTimeout(() => {
      setIsProcessing(false);
      setIsProcessed(true);
      setActiveTab("Actions");
      toast.dismiss();
      toast.success("Meeting summarised — 6 actions extracted, 4 decisions recorded.");
    }, 2000);
  };

  const markComplete = (id: string) => {
    setActions(prev =>
      prev.map(a => a.id === id ? { ...a, status: "Complete" as const } : a)
    );
    toast.success(`Action ${id} marked complete.`);
  };

  const getPriorityColor = (p: string) => {
    if (p === "HIGH") return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20";
    if (p === "MED") return "bg-amber-50 text-[#C8922A] border-amber-100";
    return "bg-slate-100 text-slate-600";
  };

  const getStatusColor = (s: string) => {
    if (s === "Complete") return "bg-[#E3F4F2] text-[#0F7B6C]";
    if (s === "Overdue") return "bg-[#FDECEA] text-[#C0392B] animate-pulse";
    if (s === "In Progress") return "bg-blue-50 text-[#1A6B8A]";
    return "bg-slate-100 text-slate-600";
  };

  const openCount = actions.filter(a => a.status === "Open" || a.status === "In Progress").length;
  const overdueCount = actions.filter(a => a.status === "Overdue").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

      {/* Left Transcript Input (40%) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-[#1A6B8A]" />
            <h3 className="text-[14.5px] font-bold text-[#0D1B2A]">Transcript Input</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Meeting Type</label>
              <select className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs">
                <option>Weekly Production Review</option>
                <option>Daily Production Review</option>
                <option>Monthly Management Review</option>
                <option>Incident Review</option>
                <option>Well Planning / Pre-Spud</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Date</label>
              <input type="text" defaultValue="28 Oct 2025" className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-[#F5F6FA] px-2.5 text-xs font-mono" readOnly />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Meeting Transcript</label>
              <span className="text-[10px] font-mono text-[#8892A0]">{transcript.split(" ").length} words</span>
            </div>
            <textarea
              value={transcript}
              onChange={e => setTranscript(e.target.value)}
              rows={10}
              placeholder="Paste your meeting transcript or voice-to-text output here..."
              className="w-full rounded-lg border border-[#D1D9E3] bg-white p-3 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] resize-none leading-relaxed font-mono"
            />
          </div>

          <Button
            onClick={handleProcess}
            disabled={isProcessing}
            className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white font-semibold text-xs h-10 rounded-lg"
          >
            {isProcessing ? (
              <><Loader2 className="h-4 w-4 animate-spin mr-1.5" />Processing Transcript...</>
            ) : (
              <><Sparkles className="h-4 w-4 mr-1.5" />Process Meeting</>
            )}
          </Button>
        </div>

        {/* Stats strip */}
        {isProcessed && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-[#D1D9E3] bg-white p-3 shadow-sm text-center">
              <p className="text-[9.5px] font-bold text-[#8892A0] uppercase">Actions</p>
              <p className="text-lg font-bold font-mono text-[#0D1B2A] mt-0.5">{actions.length}</p>
            </div>
            <div className="rounded-xl border border-[#D1D9E3] bg-white p-3 shadow-sm text-center">
              <p className="text-[9.5px] font-bold text-[#C0392B] uppercase">Overdue</p>
              <p className="text-lg font-bold font-mono text-[#C0392B] mt-0.5">{overdueCount}</p>
            </div>
            <div className="rounded-xl border border-[#D1D9E3] bg-white p-3 shadow-sm text-center">
              <p className="text-[9.5px] font-bold text-[#8892A0] uppercase">Decisions</p>
              <p className="text-lg font-bold font-mono text-[#0D1B2A] mt-0.5">{decisions.length}</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Output Panel (60%) */}
      <div className="lg:col-span-7 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden">

        {/* Tab Bar */}
        <div className="border-b border-[#D1D9E3] px-5 pt-4 flex items-center gap-1 bg-white">
          {(["Summary", "Actions", "Decisions"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-bold rounded-t-lg border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-[#C8922A] text-[#C8922A] bg-amber-50/50"
                  : "border-transparent text-[#8892A0] hover:text-[#0D1B2A]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 p-5 overflow-y-auto max-h-[450px]">
          {!isProcessed && !isProcessing ? (
            <div className="py-24 text-center space-y-3">
              <MessageSquare className="h-10 w-10 text-[#D1D9E3] mx-auto" />
              <p className="text-xs font-semibold text-[#0D1B2A]">Awaiting transcript input</p>
            </div>
          ) : isProcessing ? (
            <div className="py-24 text-center space-y-4">
              <Loader2 className="h-8 w-8 text-[#C8922A] animate-spin mx-auto" />
              <p className="text-xs text-[#8892A0]">Extracting decisions and assigning action owners...</p>
            </div>
          ) : activeTab === "Summary" ? (
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Executive Summary — MTG-2025-0847</h4>
              {summary.map((para, idx) => (
                <p key={idx} className="text-xs text-[#0D1B2A] leading-relaxed border-l-2 border-[#D1D9E3] pl-3">{para}</p>
              ))}
            </div>
          ) : activeTab === "Decisions" ? (
            <div className="space-y-3">
              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Decisions Logged ({decisions.length})</h4>
              {decisions.map((d) => (
                <div key={d.id} className="flex items-start gap-3 p-3 rounded-xl border bg-slate-50 text-xs">
                  <CheckCircle2 className="h-4 w-4 text-[#0F7B6C] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#0D1B2A]">{d.text}</p>
                    <p className="text-[#8892A0] text-[10px] mt-0.5">Decided by: <strong className="text-[#1A6B8A]">{d.decidedBy}</strong></p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {/* Carried Forward warning */}
              {overdueCount > 0 && (
                <div className="p-3 bg-[#FDECEA] border border-[#C0392B]/20 rounded-xl flex gap-2 text-xs text-[#C0392B] mb-4">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <p className="font-semibold">{overdueCount} actions carried forward from previous meeting and overdue — auto-escalated.</p>
                </div>
              )}

              <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Extracted Actions ({actions.length})</h4>
              <div className="space-y-2">
                {actions.map(a => (
                  <div key={a.id} className={`p-3 rounded-xl border text-xs transition-all ${a.carried ? "border-[#C0392B]/30 bg-rose-50/30" : "border-[#D1D9E3] bg-white hover:bg-slate-50"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-2">
                          {a.carried && <Badge className="bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 text-[9px] font-bold shrink-0">CARRIED FWD</Badge>}
                          <span className="font-bold text-[#0D1B2A] line-clamp-2">{a.description}</span>
                        </div>
                        <div className="flex items-center gap-3 text-[10.5px] text-[#8892A0]">
                          <span className="flex items-center gap-1"><User className="h-3 w-3" /><strong className="text-[#1A6B8A]">{a.owner}</strong></span>
                          <span className="flex items-center gap-1"><Clock className="h-3 w-3" /><span className="font-mono">{a.due}</span></span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        <Badge className={`${getPriorityColor(a.priority)} border text-[9.5px] font-bold`}>{a.priority}</Badge>
                        <Badge className={`${getStatusColor(a.status)} text-[9.5px] font-semibold border-0`}>{a.status}</Badge>
                        {(a.status === "Open" || a.status === "In Progress") && (
                          <button onClick={() => markComplete(a.id)} className="text-[9.5px] text-[#0F7B6C] font-bold hover:underline flex items-center gap-0.5">
                            <Check className="h-3 w-3" /> Done
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {isProcessed && (
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex items-center justify-between gap-3">
            <span className="text-[10.5px] font-mono text-[#8892A0]">MTG-2025-0847 · 28 Oct 2025 · 52 min</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="h-8 text-xs" onClick={() => toast.success("Minutes exported as PDF.")}>
                <Download className="h-3.5 w-3.5 mr-1" /> Export Minutes
              </Button>
              <Button size="sm" className="h-8 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold"
                onClick={() => {
                  toast.loading("Dispatching WhatsApp/Email reminders to all action owners...");
                  setTimeout(() => { toast.dismiss(); toast.success("Reminders sent to 5 action owners."); }, 1000);
                }}>
                <Send className="h-3.5 w-3.5 mr-1" /> Approve & Send Reminders
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
