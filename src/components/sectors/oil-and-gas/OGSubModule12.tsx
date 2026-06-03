import { useState } from "react";
import { 
  AlertCircle, AlertTriangle, Info, CheckCircle2, Play, 
  Download, Settings, User, FileSpreadsheet, Check, Loader2 
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

interface GapItem {
  id: string;
  severity: "Critical" | "Advisory" | "Informational";
  clause: string;
  source: string;
  description: string;
  action: string;
  owner: string;
  filingId: string;
  clauseText: string;
  evidence: string[];
  resolved: boolean;
}

export function OGSubModule12() {
  const [activeTab, setActiveTab] = useState<"all" | "open" | "resolved">("open");
  const [selectedGapId, setSelectedGapId] = useState("GAP-001");
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  // Compliance score trend data
  const trendData = [
    { name: "Filing 1", score: 92 },
    { name: "Filing 2", score: 90 },
    { name: "Filing 3", score: 94 },
    { name: "Filing 4", score: 85 },
    { name: "Filing 5", score: 86 },
    { name: "Filing 6", score: 87 }
  ];

  // Gaps state
  const [gaps, setGaps] = useState<GapItem[]>([
    {
      id: "GAP-001",
      severity: "Critical",
      clause: "PNGRB Circular 2024-08",
      source: "Section 6, Emission Data",
      description: "Methane intensity reporting is now mandatory from Q3 2025. Affected field: Section 6, Emission Data — field currently blank.",
      action: "Add methane intensity calculation before resubmission",
      owner: "Priya Menon",
      filingId: "FILING-2025-1042",
      clauseText: 'PNGRB Circular 2024-08, Para 3.1(c): "All operators shall include aggregate methane intensity (tCH4 per ktoe of production) as a mandatory disclosure in the Monthly Production Report from the quarter ended 30 September 2025 onward."',
      evidence: ["Methane intensity calculation worksheet", "Supporting operational data (flaring logs, leak surveys)"],
      resolved: false
    },
    {
      id: "GAP-002",
      severity: "Advisory",
      clause: "OISD-GS-RP-04",
      source: "Section 9B, Emergency Contacts",
      description: "Emergency response contact template format updated Q3 2025. Affected section: Section 9B — current format does not match updated template.",
      action: "Update contact entries to new format at next filing",
      owner: "Rajesh Kumar",
      filingId: "FILING-2025-1042",
      clauseText: 'OISD-GS-RP-04, Section 9.2: "Standard emergency response sheets must specify regional mobile phone grids in 10-digit primary format (+91 prefix) and verify control room status annually."',
      evidence: ["Updated emergency sheet PDF", "Control room audit receipt"],
      resolved: false
    },
    {
      id: "GAP-003",
      severity: "Advisory",
      clause: "DGH Well Integrity Guideline",
      source: "Section 4D, Well Certifications",
      description: "Well integrity certification period reduced from 24 to 18 months per DGH circular. Affected field: Section 4D — two well certs shown as valid at 24-month interval.",
      action: "Review well certification schedule against new 18-month requirement",
      owner: "Sushant Verma",
      filingId: "FILING-2025-1038",
      clauseText: 'DGH Guidelines 2024, Ch. 2.1: "Well integrity diagnostic charts (WIC) must be updated and signed by a certified geomechanist every 18 months for onshore active producers."',
      evidence: ["Well No. 3 integrity certificate", "Well No. 14 diagnostic log"],
      resolved: false
    },
    {
      id: "GAP-004",
      severity: "Informational",
      clause: "Voluntary ESG Supplementary",
      source: "Section 12, ESG Schedule",
      description: "New voluntary ESG supplementary schedule available for Q4 2025 submissions.",
      action: "No action required — option to include in next filing cycle",
      owner: "Arjun Mehta",
      filingId: "FILING-2025-1042",
      clauseText: 'MoPNG circular 2025/11: "Upstream operators are encouraged to disclose water recycle ratios and carbon offset credits voluntarily on a quarterly cycle."',
      evidence: [],
      resolved: false
    }
  ]);

  const activeGap = gaps.find(g => g.id === selectedGapId) || gaps[0];
  const [evidenceChecked, setEvidenceChecked] = useState<Record<string, boolean>>({});

  const handleResolveGap = (gapId: string) => {
    // Verify evidence is checked if the gap is critical
    if (activeGap.severity === "Critical") {
      const allChecked = activeGap.evidence.every(ev => evidenceChecked[`${gapId}-${ev}`]);
      if (!allChecked) {
        toast.error("Please complete all evidence checklist items before resolving a Critical gap.");
        return;
      }
    }

    setGaps(prev => prev.map(g => g.id === gapId ? { ...g, resolved: true } : g));
    toast.success(`Gap ${gapId} marked as Resolved.`);
  };

  const handleRunScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    toast.loading("Running comprehensive compliance check against latest DGH, PNGRB, and OISD knowledge bases...");

    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          toast.dismiss();
          toast.success("Compliance scan complete! 6 files scanned. No new gaps identified.");
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  const getSeverityBadge = (sev: GapItem["severity"]) => {
    switch (sev) {
      case "Critical":
        return (
          <Badge className="bg-[#FDECEA] border-[#C0392B]/20 text-[#C0392B] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-[#FDECEA] animate-pulse">
            Critical
          </Badge>
        );
      case "Advisory":
        return (
          <Badge className="bg-[#FDF3E3] border-[#C8922A]/20 text-[#C8922A] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-[#FDF3E3]">
            Advisory
          </Badge>
        );
      case "Informational":
        return (
          <Badge className="bg-blue-50 border-blue-100 text-[#1A6B8A] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-blue-50">
            Informational
          </Badge>
        );
    }
  };

  // Filter logic
  const filteredGaps = gaps.filter(g => {
    if (activeTab === "open") return !g.resolved;
    if (activeTab === "resolved") return g.resolved;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Top Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider">Filings Scanned</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-[#0D1B2A]">47</span>
            <span className="text-[10px] text-[#0F7B6C] font-semibold">100% Core Coverage</span>
          </div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider">Fully Compliant</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-[#0F7B6C]">41</span>
            <span className="text-[10px] text-[#8892A0] font-semibold">Submissions clean</span>
          </div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider">Open Gaps</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold font-mono text-[#C8922A]">3</span>
            <span className="text-[10px] text-[#C0392B] font-semibold">1 Critical</span>
          </div>
        </div>

        {/* Compliance Score with Sparkline */}
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex items-center justify-between">
          <div className="flex flex-col justify-between h-full">
            <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider">Compliance Score</span>
            <span className="text-2xl font-bold font-mono text-[#C0392B] mt-1">87%</span>
          </div>
          <div className="w-20 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
                <defs>
                  <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#C0392B" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#C0392B" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area type="monotone" dataKey="score" stroke="#C0392B" strokeWidth={1.5} fillOpacity={1} fill="url(#scoreColor)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Main Content: Left Table (60%), Right Detail Panel (40%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Table */}
        <div className="lg:col-span-7 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden">
          {/* Header & Tabs */}
          <div className="p-4 border-b border-[#D1D9E3] bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2">
              <h3 className="text-[14px] font-bold text-[#0D1B2A]">Filing Gaps Scan Report</h3>
              {isScanning && (
                <span className="flex items-center gap-1 text-[10.5px] font-mono text-[#C8922A]">
                  <Loader2 className="h-3 w-3 animate-spin" /> Scanning ({scanProgress}%)
                </span>
              )}
            </div>
            
            <div className="flex rounded-lg bg-[#F5F6FA] p-1 self-start sm:self-auto">
              <button 
                onClick={() => setActiveTab("open")}
                className={`px-3 py-1 rounded-md text-[11.5px] font-medium transition-colors ${activeTab === "open" ? "bg-white text-[#0D1B2A] shadow-sm" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
              >
                Open Gaps
              </button>
              <button 
                onClick={() => setActiveTab("resolved")}
                className={`px-3 py-1 rounded-md text-[11.5px] font-medium transition-colors ${activeTab === "resolved" ? "bg-white text-[#0D1B2A] shadow-sm" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
              >
                Resolved
              </button>
              <button 
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1 rounded-md text-[11.5px] font-medium transition-colors ${activeTab === "all" ? "bg-white text-[#0D1B2A] shadow-sm" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
              >
                All
              </button>
            </div>
          </div>

          {/* Table Area */}
          <div className="overflow-x-auto min-h-[350px]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#D1D9E3] bg-[#F5F6FA] text-[#8892A0] uppercase font-semibold text-[10px] tracking-wider">
                  <th className="p-3 pl-4">Severity</th>
                  <th className="p-3">Reference / Clause</th>
                  <th className="p-3">Filing ID</th>
                  <th className="p-3">Assigned To</th>
                  <th className="p-3 pr-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E3]/50">
                {filteredGaps.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-12 text-center text-[#8892A0]">
                      <CheckCircle2 className="h-8 w-8 text-[#0F7B6C] mx-auto mb-2" />
                      <p className="font-semibold text-[#0D1B2A] text-[13px]">No compliance gaps found</p>
                      <p className="text-[11px] mt-0.5">All files adhere to active regulatory models.</p>
                    </td>
                  </tr>
                ) : (
                  filteredGaps.map((gap) => (
                    <tr 
                      key={gap.id}
                      onClick={() => setSelectedGapId(gap.id)}
                      className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedGapId === gap.id ? "bg-slate-50 border-l-2 border-l-[#C8922A]" : ""}`}
                    >
                      <td className="p-3 pl-4">{getSeverityBadge(gap.severity)}</td>
                      <td className="p-3">
                        <div className="font-semibold text-[#0D1B2A]">{gap.clause}</div>
                        <div className="text-[10px] text-[#8892A0] mt-0.5 font-mono">{gap.source}</div>
                      </td>
                      <td className="p-3 font-mono text-[11px] text-[#8892A0]">{gap.filingId}</td>
                      <td className="p-3 flex items-center gap-1.5 mt-1">
                        <User className="h-3 w-3 text-[#1A6B8A]" />
                        <span className="font-medium text-[#0D1B2A]">{gap.owner}</span>
                      </td>
                      <td className="p-3 pr-4 text-right">
                        {gap.resolved ? (
                          <span className="inline-flex items-center text-[#0F7B6C] font-semibold gap-1 text-[11px]">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Closed
                          </span>
                        ) : (
                          <span className="text-amber-600 font-semibold text-[11px] uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Action Bar */}
          <div className="p-4 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center justify-between gap-3">
            <span className="text-[10.5px] text-[#8892A0] font-mono">
              * Scan covers circulars updated as of: 01 Jun 2026
            </span>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className="border-[#D1D9E3] text-[#0D1B2A] font-semibold text-xs h-9 rounded-lg hover:bg-slate-50"
                onClick={() => toast.success("Compliance Gap Report exported successfully.")}
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Export Gap PDF
              </Button>
              <Button 
                onClick={handleRunScan}
                disabled={isScanning}
                className="bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
              >
                {isScanning ? (
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                ) : (
                  <Play className="h-3.5 w-3.5" />
                )}
                <span>Run Compliance Scan</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Detail Panel */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col h-full">
            {/* Header */}
            <div className={`p-4 border-b border-[#D1D9E3] text-white flex items-center justify-between ${
              activeGap.severity === "Critical" ? "bg-[#C0392B]" : activeGap.severity === "Advisory" ? "bg-[#C8922A]" : "bg-[#1A6B8A]"
            }`}>
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-widest text-white/80 font-mono font-bold">{activeGap.id}</span>
                <h3 className="text-[13px] font-bold">GAP DETAILS — {activeGap.clause}</h3>
              </div>
              <Badge className="bg-white/20 border-none text-white text-[10px]">
                {activeGap.severity}
              </Badge>
            </div>

            {/* Content Scroll Area */}
            <div className="p-5 space-y-4 text-xs overflow-y-auto max-h-[385px] flex-1">
              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Affected Scope</label>
                <p className="font-semibold text-[#0D1B2A]">{activeGap.source} ({activeGap.filingId})</p>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Description</label>
                <p className="text-[#0D1B2A] leading-relaxed">{activeGap.description}</p>
              </div>

              {/* Regulatory Clause text */}
              <div className="bg-[#F5F6FA] rounded-xl p-3 border border-[#D1D9E3] space-y-1">
                <span className="text-[9.5px] font-bold text-[#1A6B8A] uppercase tracking-wider font-mono">Regulatory Clause Text</span>
                <p className="text-[#0D1B2A] leading-relaxed italic text-[11px]">
                  {activeGap.clauseText}
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Recommended Action</label>
                <p className="text-[#0D1B2A] font-semibold leading-relaxed">{activeGap.action}</p>
              </div>

              {/* Action assignee dropdown */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Assigned Owner</label>
                  <select 
                    value={activeGap.owner}
                    onChange={(e) => {
                      const newOwner = e.target.value;
                      setGaps(prev => prev.map(g => g.id === activeGap.id ? { ...g, owner: newOwner } : g));
                      toast.info(`Gap owner updated to: ${newOwner}`);
                    }}
                    className="w-full h-8 rounded-md border border-[#D1D9E3] bg-white px-2 text-[11.5px] font-medium focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
                  >
                    <option value="Priya Menon">Priya Menon</option>
                    <option value="Rajesh Kumar">Rajesh Kumar</option>
                    <option value="Sushant Verma">Sushant Verma</option>
                    <option value="Arjun Mehta">Arjun Mehta</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Due Date</label>
                  <div className="w-full h-8 rounded-md border border-[#D1D9E3] bg-[#F5F6FA] px-2 text-[11.5px] flex items-center text-[#0D1B2A] font-mono">
                    17 Jun 2026
                  </div>
                </div>
              </div>

              {/* Evidence Checklist */}
              {activeGap.evidence.length > 0 && (
                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">Evidence Checklist</label>
                  <div className="space-y-1.5">
                    {activeGap.evidence.map((item, idx) => {
                      const key = `${activeGap.id}-${item}`;
                      const isChecked = !!evidenceChecked[key];
                      return (
                        <div 
                          key={idx}
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => setEvidenceChecked(prev => ({ ...prev, [key]: !isChecked }))}
                        >
                          <div className={`h-4.5 w-4.5 border rounded-sm flex items-center justify-center shrink-0 transition-all ${
                            isChecked ? "bg-[#0F7B6C] border-[#0F7B6C] text-white" : "border-[#D1D9E3] bg-white"
                          }`}>
                            {isChecked && <Check className="h-3 w-3" />}
                          </div>
                          <span className="text-[#0D1B2A] leading-tight select-none">{item}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Buttons */}
            <div className="p-4 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center gap-2.5 justify-end">
              <Button 
                variant="outline" 
                size="sm"
                className="h-8 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-[11px] font-semibold"
                onClick={() => toast.success("Evidence document template uploaded successfully.")}
              >
                Upload Evidence
              </Button>
              <Button 
                disabled={activeGap.resolved}
                onClick={() => handleResolveGap(activeGap.id)}
                size="sm"
                className="h-8 bg-[#0F7B6C] hover:bg-[#0c6256] text-white text-[11px] font-bold"
              >
                Mark Resolved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
