import { useState } from "react";
import { 
  FileText, ShieldAlert, CheckCircle2, AlertTriangle, AlertCircle, 
  HelpCircle, RefreshCw, Plus, Send, Download, Layers, ShieldCheck, ChevronRight
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VersionHistory {
  version: string;
  date: string;
  author: string;
  notes: string;
}

interface FlaggedClause {
  clause: string;
  description: string;
  change: string;
}

interface Sop {
  id: string;
  title: string;
  category: string;
  version: string;
  effectiveDate: string;
  reviewDueDate: string;
  regulatoryRefs: string;
  currencyStatus: "Current" | "Due Review" | "Flagged";
  ackRate: number;
  history: VersionHistory[];
  flags: FlaggedClause[];
  pendingUsers: string[];
}

export function OGSubModule34() {
  const [selectedSopId, setSelectedSopId] = useState("SOP-HSE-014");
  const [isScanning, setIsScanning] = useState(false);
  const [sops, setSops] = useState<Sop[]>([
    {
      id: "SOP-HSE-014",
      title: "Scaffold Erection and Inspection Procedure",
      category: "Height Work",
      version: "v3.1",
      effectiveDate: "01 Jan 2024",
      reviewDueDate: "01 Jan 2026",
      regulatoryRefs: "OISD-STD-171 Rev.2 (2023)",
      currencyStatus: "Flagged",
      ackRate: 87,
      history: [
        { version: "v3.1", date: "01 Jan 2024", author: "Priya Menon", notes: "Updated load capacity tables" },
        { version: "v3.0", date: "14 Mar 2022", author: "Anand Sharma", notes: "Periodic review updates" }
      ],
      flags: [
        { clause: "Clause 5.3", description: "Old load capacity limit used", change: "Updated with safety factor load specs per 2023 revision" },
        { clause: "Clause 9.4", description: "Green/Yellow scaffold tag coloring rule mismatch", change: "Tag color definitions updated to match standard scheme" }
      ],
      pendingUsers: ["Arjun Mehta (Assistant Drilling Engineer)", "Kiran Patel (Lead Helper)"]
    },
    {
      id: "SOP-HSE-027",
      title: "Fire Fighting and Emergency Response Plan",
      category: "Emergency",
      version: "v3.0",
      effectiveDate: "14 Mar 2022",
      reviewDueDate: "14 Mar 2024",
      regulatoryRefs: "PESO Circular 12/2022",
      currencyStatus: "Due Review",
      ackRate: 92,
      history: [
        { version: "v3.0", date: "14 Mar 2022", author: "Anand Sharma", notes: "Fire drill calendar adjusted" }
      ],
      flags: [],
      pendingUsers: ["Deepak Arora (Field Operator)"]
    },
    {
      id: "SOP-HSE-039",
      title: "H2S Emergency Response and Evacuation",
      category: "Gas Safety",
      version: "v2.1",
      effectiveDate: "09 Nov 2019",
      reviewDueDate: "09 Nov 2026",
      regulatoryRefs: "OISD-GS-RP-04 Rev.1 (2025)",
      currencyStatus: "Current",
      ackRate: 100,
      history: [
        { version: "v2.1", date: "09 Nov 2019", author: "Priya Menon", notes: "Standardized evacuation route guidelines" }
      ],
      flags: [],
      pendingUsers: []
    }
  ]);

  const activeSop = sops.find(s => s.id === selectedSopId) || sops[0];

  const handleRunScan = () => {
    setIsScanning(true);
    toast.loading("Ingesting OISD and PESO regulatory databases for updates...");
    setTimeout(() => {
      setIsScanning(false);
      toast.dismiss();
      toast.success("Regulatory scan complete! 64 SOPs checked. 3 flags remaining.");
    }, 1500);
  };

  const handleSendReminder = () => {
    toast.loading("Sending automated WhatsApp/Email reminders to pending personnel...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Acknowledgment reminders dispatched successfully.");
    }, 1000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Current": return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
      case "Due Review": return "bg-amber-50 text-[#C8922A] border-[#C8922A]/20";
      default: return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 animate-pulse";
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">Total SOPs Indexed</p>
          <p className="text-xl font-bold font-mono text-[#0D1B2A] mt-1">64</p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">Current / Active</p>
          <p className="text-xl font-bold font-mono text-[#0F7B6C] mt-1">51</p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">Review Overdue</p>
          <p className="text-xl font-bold font-mono text-[#C8922A] mt-1">10</p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm border-l-4 border-l-[#C0392B]">
          <p className="text-[10px] font-bold text-[#C0392B] uppercase tracking-wider">Superseded Regulations</p>
          <p className="text-xl font-bold font-mono text-[#C0392B] mt-1">3</p>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left SOP Table (65%) */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] flex items-center justify-between">
            <h3 className="text-[13.5px] font-bold text-[#0D1B2A]">Safety SOP Knowledgebase</h3>
            <div className="flex items-center gap-2">
              <Button onClick={handleRunScan} disabled={isScanning} variant="outline" size="sm" className="h-8 text-xs">
                <RefreshCw className={`h-3.5 w-3.5 mr-1 ${isScanning ? "animate-spin" : ""}`} /> 
                {isScanning ? "Scanning..." : "Run Regulatory Check"}
              </Button>
              <Button onClick={() => toast.success("Compiling SOP report...")} variant="outline" size="sm" className="h-8 text-xs">
                <Download className="h-3.5 w-3.5 mr-1" /> Library Report
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-[#D1D9E3] text-[#1A6B8A] font-semibold">
                  <th className="p-3">SOP ID</th>
                  <th className="p-3">Procedure Title</th>
                  <th className="p-3">Category</th>
                  <th className="p-3">References</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Read Rate</th>
                  <th className="p-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E3]/50">
                {sops.map(sop => (
                  <tr 
                    key={sop.id} 
                    onClick={() => setSelectedSopId(sop.id)}
                    className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedSopId === sop.id ? "bg-slate-50" : ""}`}
                  >
                    <td className="p-3 font-mono font-bold text-[#0D1B2A]">{sop.id}</td>
                    <td className="p-3 font-semibold text-[#0D1B2A]">{sop.title}</td>
                    <td className="p-3 text-[#8892A0]">{sop.category}</td>
                    <td className="p-3 font-mono text-[11px] text-[#1A6B8A]">{sop.regulatoryRefs}</td>
                    <td className="p-3">
                      <Badge className={`${getStatusColor(sop.currencyStatus)} border text-[10px] font-semibold px-2 py-0.5 rounded-full`}>
                        {sop.currencyStatus}
                      </Badge>
                    </td>
                    <td className="p-3 font-mono font-semibold text-right text-[#0D1B2A]">{sop.ackRate}%</td>
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        onClick={() => setSelectedSopId(sop.id)}
                        className="h-7 px-2 hover:bg-slate-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Detail Panel (35%) */}
        <div className="lg:col-span-4 rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-5">
          <div className="border-b pb-3">
            <h4 className="text-[13.5px] font-bold text-[#0D1B2A] font-mono">{activeSop.id}</h4>
            <p className="text-[11px] text-[#8892A0] mt-0.5">Regulatory alignment details and user reading receipts</p>
          </div>

          {/* If Flagged / Superseded details */}
          {activeSop.currencyStatus === "Flagged" && activeSop.flags.length > 0 && (
            <div className="p-3.5 bg-[#FDECEA] border border-[#C0392B]/20 rounded-xl space-y-2.5">
              <div className="flex items-center gap-2 text-[#C0392B]">
                <ShieldAlert className="h-4.5 w-4.5" />
                <span className="font-bold text-xs">Superseded Regulatory Clauses</span>
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                {activeSop.flags.map((flag, idx) => (
                  <div key={idx} className="border-b border-[#C0392B]/10 pb-2 last:border-none last:pb-0">
                    <p className="font-bold font-mono text-[#C0392B]">{flag.clause}</p>
                    <p className="text-[11px] text-slate-600 mt-0.5">Deviation: {flag.description}</p>
                    <p className="text-[10.5px] font-semibold text-[#0F7B6C] mt-0.5">Fix: {flag.change}</p>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => {
                  toast.loading("AI drafting revision patches using latest OISD guidelines...");
                  setTimeout(() => {
                    toast.dismiss();
                    toast.success("AI draft updates compiled! Sent to editor panel.");
                  }, 1500);
                }} 
                className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white text-xs h-8 font-semibold mt-1"
              >
                AI Draft Update
              </Button>
            </div>
          )}

          {/* Version History Log */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-1.5 text-[#1A6B8A] font-bold text-[11px] uppercase tracking-wider">
              <Layers className="h-4 w-4" />
              <span>Version History Log</span>
            </div>
            <div className="space-y-2">
              {activeSop.history.map((hist, idx) => (
                <div key={idx} className="p-2.5 rounded-lg border text-xs bg-slate-50 flex justify-between items-center">
                  <div>
                    <span className="font-bold text-[#0D1B2A]">{hist.version}</span>
                    <p className="text-[10px] text-[#8892A0] mt-0.5">{hist.notes}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-500">{hist.date}</span>
                    <p className="text-[10px] text-[#1A6B8A] font-semibold">{hist.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Read Acknowledgment Tracker */}
          <div className="space-y-3 pt-3 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[#1A6B8A] font-bold text-[11px] uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Pending Acknowledgment ({activeSop.pendingUsers.length})</span>
              </div>
              {activeSop.pendingUsers.length > 0 && (
                <Button onClick={handleSendReminder} variant="link" className="h-auto p-0 text-[11px] text-[#C8922A] font-bold">
                  Remind All
                </Button>
              )}
            </div>

            {activeSop.pendingUsers.length > 0 ? (
              <div className="space-y-1.5">
                {activeSop.pendingUsers.map((user, idx) => (
                  <div key={idx} className="text-xs font-semibold text-[#0D1B2A] bg-slate-50 p-2 rounded border border-slate-100 flex items-center justify-between">
                    <span>{user}</span>
                    <Badge className="bg-amber-50 text-[#C8922A] border-amber-100 text-[9.5px]">Pending</Badge>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-1.5 text-[#0F7B6C] bg-[#E3F4F2] px-3 py-2 rounded-lg border border-[#0F7B6C]/20 text-xs font-medium">
                <CheckCircle2 className="h-4 w-4" /> All required crew have signed acknowledgment
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
