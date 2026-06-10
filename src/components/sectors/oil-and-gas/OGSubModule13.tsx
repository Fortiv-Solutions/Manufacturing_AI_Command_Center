import { useState } from "react";
import {
  Search,
  Calendar,
  FileText,
  CheckCircle2,
  Download,
  ExternalLink,
  ChevronRight,
  History,
  GitCompare,
  Info,
  Loader2,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface HistoryItem {
  id: string;
  form: string;
  block: string;
  period: string;
  version: string;
  status: "Approved" | "Revised" | "Pending";
  submittedBy: string;
  approvedDate: string;
  revisionNote?: string;
  sourceDocs: string[];
  timeline: {
    ver: string;
    event: string;
    timestamp: string;
    actor: string;
    details?: string;
  }[];
}

export function OGSubModule13() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilingId, setSelectedFilingId] = useState("FILING-2024-0134");
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileProgress, setCompileProgress] = useState(0);
  const [compileStep, setCompileStep] = useState("");
  const [showCompare, setShowCompare] = useState(false);

  const [filings, setFilings] = useState<HistoryItem[]>([
    {
      id: "FILING-2025-0112",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Mar 2025",
      version: "v1.0",
      status: "Approved",
      submittedBy: "Rajesh Kumar",
      approvedDate: "04 Apr 2025",
      sourceDocs: ["Mar_2025_Production_Summary_XYZ07.pdf", "Mar_2025_DDR_XYZ07.xlsx"],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "03 Apr 2025 10:12 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "Review sign-off",
          timestamp: "03 Apr 2025 16:30 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "04 Apr 2025 09:12 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "DGH Approval",
          timestamp: "04 Apr 2025 15:45 IST",
          actor: "DGH Portal",
        },
      ],
    },
    {
      id: "FILING-2025-0061",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Feb 2025",
      version: "v1.0",
      status: "Approved",
      submittedBy: "Anand Sharma",
      approvedDate: "06 Mar 2025",
      sourceDocs: ["Feb_2025_Production_Summary_XYZ07.pdf", "Feb_2025_DDR_XYZ07.xlsx"],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "05 Mar 2025 11:22 IST",
          actor: "Arjun Mehta",
        },
        {
          ver: "v1.0",
          event: "Review sign-off",
          timestamp: "05 Mar 2025 15:10 IST",
          actor: "Anand Sharma",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "06 Mar 2025 09:40 IST",
          actor: "Arjun Mehta",
        },
        {
          ver: "v1.0",
          event: "DGH Approval",
          timestamp: "06 Mar 2025 14:20 IST",
          actor: "DGH Portal",
        },
      ],
    },
    {
      id: "FILING-2025-0014",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Jan 2025",
      version: "v1.0",
      status: "Approved",
      submittedBy: "Rajesh Kumar",
      approvedDate: "05 Feb 2025",
      sourceDocs: ["Jan_2025_Production_Summary_XYZ07.pdf", "Jan_2025_DDR_XYZ07.xlsx"],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "04 Feb 2025 09:05 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "Review sign-off",
          timestamp: "04 Feb 2025 14:12 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "05 Feb 2025 08:30 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "DGH Approval",
          timestamp: "05 Feb 2025 11:15 IST",
          actor: "DGH Portal",
        },
      ],
    },
    {
      id: "FILING-2024-0409",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Dec 2024",
      version: "v1.0",
      status: "Approved",
      submittedBy: "Rajesh Kumar",
      approvedDate: "07 Jan 2025",
      sourceDocs: ["Dec_2024_Production_Summary_XYZ07.pdf"],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "06 Jan 2025 10:44 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "Review sign-off",
          timestamp: "06 Jan 2025 15:50 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "07 Jan 2025 09:00 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "DGH Approval",
          timestamp: "07 Jan 2025 16:30 IST",
          actor: "DGH Portal",
        },
      ],
    },
    {
      id: "FILING-2024-0361",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Nov 2024",
      version: "v1.0",
      status: "Approved",
      submittedBy: "Priya Menon",
      approvedDate: "06 Dec 2024",
      sourceDocs: ["Nov_2024_Production_Summary_XYZ07.pdf"],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "05 Dec 2024 14:10 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "06 Dec 2024 09:20 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "DGH Approval",
          timestamp: "06 Dec 2024 12:14 IST",
          actor: "DGH Portal",
        },
      ],
    },
    {
      id: "FILING-2024-0134",
      form: "W-10 Well Return",
      block: "XYZ-07",
      period: "Jun 2024",
      version: "v1.1",
      status: "Revised",
      submittedBy: "Priya Menon",
      approvedDate: "24 Jun 2024",
      revisionNote:
        "Original filing v1.0 (submitted 04 Jun 2024) contained an error in Field 7C (average wellhead pressure, Well No. 3). Value corrected from 280 psi to 310 psi per the June DDR review conducted by Priya Menon on 18 Jun 2024.",
      sourceDocs: [
        "June_2024_Production_Summary_XYZ07.pdf",
        "June_2024_Daily_Drilling_Reports_XYZ07_v2.xlsx",
      ],
      timeline: [
        {
          ver: "v1.0",
          event: "Draft created",
          timestamp: "03 Jun 2024 14:22 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.0",
          event: "Field edit",
          timestamp: "03 Jun 2024 16:45 IST",
          actor: "Rajesh Kumar",
          details: "7 fields updated",
        },
        {
          ver: "v1.0",
          event: "Review sign-off",
          timestamp: "04 Jun 2024 08:17 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.0",
          event: "Submitted",
          timestamp: "04 Jun 2024 09:03 IST",
          actor: "Rajesh Kumar",
        },
        {
          ver: "v1.1",
          event: "Revision opened",
          timestamp: "18 Jun 2024 11:30 IST",
          actor: "Priya Menon",
          details: "Field 7C corrected",
        },
        {
          ver: "v1.1",
          event: "Review sign-off",
          timestamp: "18 Jun 2024 14:10 IST",
          actor: "Anand Sharma",
        },
        {
          ver: "v1.1",
          event: "Resubmitted",
          timestamp: "18 Jun 2024 15:02 IST",
          actor: "Priya Menon",
        },
        {
          ver: "v1.1",
          event: "DGH Approval",
          timestamp: "24 Jun 2024 10:12 IST",
          actor: "DGH Portal",
          details: "Approved with note",
        },
      ],
    },
  ]);

  const activeFiling = filings.find((f) => f.id === selectedFilingId) || filings[0];

  const handleGenerateAuditPack = () => {
    setIsCompiling(true);
    setCompileProgress(0);

    const steps = [
      { progress: 20, text: "Compiling form structure..." },
      { progress: 50, text: "Verifying digital checksum signatures..." },
      { progress: 75, text: "Packaging source documents & logs..." },
      { progress: 90, text: "Finalizing index archive & metadata map..." },
      { progress: 100, text: "Audit pack compiled successfully!" },
    ];

    steps.forEach((step, idx) => {
      setTimeout(
        () => {
          setCompileProgress(step.progress);
          setCompileStep(step.text);
          if (step.progress === 100) {
            setTimeout(() => {
              setIsCompiling(false);
              toast.success("Audit Pack generated! Size: 34 MB. Downloading ZIP archive.");
            }, 800);
          }
        },
        (idx + 1) * 700,
      );
    });
  };

  const getStatusBadge = (status: HistoryItem["status"]) => {
    switch (status) {
      case "Approved":
        return (
          <Badge className="bg-[#E3F4F2] border-[#0F7B6C]/20 text-[#0F7B6C] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-[#E3F4F2]">
            Approved
          </Badge>
        );
      case "Revised":
        return (
          <Badge className="bg-[#FDF3E3] border-[#C8922A]/20 text-[#C8922A] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-[#FDF3E3]">
            Revised
          </Badge>
        );
      case "Pending":
        return (
          <Badge className="bg-blue-50 border-blue-100 text-[#1A6B8A] text-[10.5px] font-medium px-2 py-0.5 rounded-full hover:bg-blue-50">
            Pending
          </Badge>
        );
    }
  };

  // Filter filings based on query
  const filteredFilings = filings.filter(
    (f) =>
      f.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.period.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.submittedBy.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#8892A0]" />
          <input
            type="text"
            placeholder="Search by Filing ID, Period, or Submitted By..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-9 pl-9 pr-4 rounded-lg border border-[#D1D9E3] text-xs focus:outline-none focus:ring-1 focus:ring-[#C8922A] text-[#0D1B2A] placeholder-[#8892A0]"
          />
        </div>

        {/* Global Action */}
        <Button
          onClick={handleGenerateAuditPack}
          disabled={isCompiling}
          className="w-full md:w-auto bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all shrink-0"
        >
          {isCompiling ? (
            <>
              <Loader2 className="h-4.5 w-4.5 animate-spin mr-1" />
              <span>Generating Audit Pack ({compileProgress}%)</span>
            </>
          ) : (
            <>
              <Download className="h-4.5 w-4.5 mr-1" />
              <span>Generate Year-End Audit Pack</span>
            </>
          )}
        </Button>
      </div>

      {isCompiling && (
        <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-5 shadow-sm space-y-2 animate-in fade-in duration-200">
          <div className="flex items-center justify-between text-xs font-semibold text-[#1A6B8A]">
            <span>{compileStep}</span>
            <span className="font-mono text-[#0D1B2A]">{compileProgress}%</span>
          </div>
          <Progress
            value={compileProgress}
            className="h-1.5 bg-[#D1D9E3]/50 [&>[data-state=complete]]:bg-[#1A6B8A]"
          />
        </div>
      )}

      {/* Main Area: List + Side Detail Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Filing List */}
        <div className="lg:col-span-7 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-[#F5F6FA]/50">
            <h3 className="text-[13px] font-bold text-[#0D1B2A] uppercase tracking-wider font-mono">
              Filing Log History
            </h3>
          </div>

          <div className="overflow-x-auto min-h-[350px]">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#D1D9E3] bg-[#F5F6FA] text-[#8892A0] uppercase font-semibold text-[10px] tracking-wider">
                  <th className="p-3 pl-4">Filing ID</th>
                  <th className="p-3">Period</th>
                  <th className="p-3">Ver</th>
                  <th className="p-3">Submitted By</th>
                  <th className="p-3">Authority Status</th>
                  <th className="p-3 pr-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E3]/50">
                {filteredFilings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-12 text-center text-[#8892A0]">
                      No audit logs matched query.
                    </td>
                  </tr>
                ) : (
                  filteredFilings.map((f) => (
                    <tr
                      key={f.id}
                      onClick={() => setSelectedFilingId(f.id)}
                      className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedFilingId === f.id ? "bg-slate-50 border-l-2 border-l-[#C8922A]" : ""}`}
                    >
                      <td className="p-3 pl-4 font-mono font-semibold text-[#0D1B2A]">{f.id}</td>
                      <td className="p-3 font-semibold text-[#1A6B8A]">{f.period}</td>
                      <td className="p-3 font-mono text-[#8892A0]">{f.version}</td>
                      <td className="p-3 text-[#0D1B2A]">{f.submittedBy}</td>
                      <td className="p-3">{getStatusBadge(f.status)}</td>
                      <td className="p-3 pr-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-7 w-7 p-0 rounded-full text-[#8892A0] hover:text-[#0D1B2A] hover:bg-slate-100"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column: Filing Detail View */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col h-full">
            {/* Detail Header */}
            <div className="p-4 border-b border-[#D1D9E3] bg-[#0D1B2A] text-white flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono font-bold">
                  {activeFiling.id}
                </span>
                <h3 className="text-[13px] font-bold">{activeFiling.form} Overview</h3>
              </div>
              <Badge className="bg-[#1A6B8A] text-white text-[10px] border-none">
                Block {activeFiling.block}
              </Badge>
            </div>

            {/* Content Scroll */}
            <div className="p-5 space-y-4 text-xs overflow-y-auto max-h-[385px] flex-1">
              {/* Revision note */}
              {activeFiling.revisionNote && (
                <div className="bg-[#FDF3E3] rounded-xl p-3 border border-[#C8922A]/20 flex items-start gap-2.5">
                  <Info className="h-4 w-4 text-[#C8922A] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#C8922A] uppercase tracking-wider font-mono">
                      Revision Note
                    </span>
                    <p className="text-[#0D1B2A] leading-relaxed text-[11px]">
                      {activeFiling.revisionNote}
                    </p>
                  </div>
                </div>
              )}

              {/* Version History Log Timeline */}
              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono flex items-center gap-1">
                  <History className="h-3.5 w-3.5" /> Version History Log
                </label>

                <div className="relative border-l border-slate-200 ml-2.5 pl-4 space-y-4 py-1">
                  {activeFiling.timeline.map((item, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline dot */}
                      <span className="absolute -left-[20.5px] top-1.5 h-2.5 w-2.5 rounded-full border bg-white border-slate-300" />

                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[#1A6B8A] bg-blue-50 px-1 rounded text-[9.5px] border border-blue-100 font-bold shrink-0">
                            {item.ver}
                          </span>
                          <span className="font-semibold text-[#0D1B2A] text-[11px]">
                            {item.event}
                          </span>
                        </div>
                        <p className="text-[10.5px] text-[#8892A0] font-mono">
                          {item.timestamp} • By {item.actor}
                        </p>
                        {item.details && (
                          <p className="text-[10.5px] text-[#0D1B2A] bg-slate-50 border border-slate-100 p-1.5 rounded-md mt-1 italic leading-relaxed">
                            {item.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source Documents List */}
              <div className="space-y-2 pt-2">
                <label className="text-[10px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
                  Source Audit Documents
                </label>
                <div className="space-y-1.5">
                  {activeFiling.sourceDocs.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-[#D1D9E3] hover:bg-slate-50 cursor-pointer transition-colors"
                      onClick={() => toast.success(`Reviewing file: ${doc}`)}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <FileText className="h-4.5 w-4.5 text-[#1A6B8A] shrink-0" />
                        <span className="text-[#0D1B2A] font-medium truncate">{doc}</span>
                      </div>
                      <ExternalLink className="h-3 w-3 text-[#8892A0] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                className="h-8 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-[11px] font-semibold"
                onClick={() => {
                  setShowCompare(true);
                  toast.info("Side-by-side version comparison loaded in workspace draft.");
                }}
              >
                <GitCompare className="h-3.5 w-3.5 mr-1" /> Compare Versions
              </Button>
              <Button
                onClick={handleGenerateAuditPack}
                disabled={isCompiling}
                size="sm"
                className="h-8 bg-[#C8922A] hover:bg-[#b78222] text-white text-[11px] font-bold"
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Audit Pack
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Drawer Overlay mock modal */}
      {showCompare && (
        <div className="fixed inset-0 z-50 bg-[#0D1B2A]/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-[#D1D9E3] shadow-2xl max-w-2xl w-full p-5 space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <h3 className="font-bold text-[#0D1B2A] text-[14px]">
                Filing Difference Check (v1.0 vs v1.1)
              </h3>
              <Badge className="bg-[#C8922A] text-white text-[10px] border-none font-bold">
                Revised State
              </Badge>
            </div>

            <div className="space-y-3 font-sans text-xs">
              <div className="grid grid-cols-2 gap-4 text-center border-b pb-2 text-[10.5px] uppercase font-semibold text-[#8892A0] tracking-wider">
                <div>Version 1.0 (Draft)</div>
                <div>Version 1.1 (Resubmitted)</div>
              </div>

              <div className="space-y-2 max-h-[220px] overflow-y-auto font-mono">
                <div className="grid grid-cols-2 gap-4 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                  <div className="text-[#C0392B]">- Field 7C (Avg Wellhead Press): 280 psi</div>
                  <div className="text-[#0F7B6C]">+ Field 7C (Avg Wellhead Press): 310 psi</div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-2 border border-slate-100 rounded-lg opacity-60">
                  <div>Field 3A (Crude Prod): 48,340 bbl</div>
                  <div>Field 3A (Crude Prod): 48,340 bbl</div>
                </div>
                <div className="grid grid-cols-2 gap-4 p-2 border border-slate-100 rounded-lg opacity-60">
                  <div>Field 9C (Active Wells): 14</div>
                  <div>Field 9C (Active Wells): 14</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t">
              <Button
                onClick={() => setShowCompare(false)}
                className="bg-[#0D1B2A] hover:bg-slate-800 text-white font-semibold text-xs h-8 rounded-lg"
              >
                Close Comparison
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
