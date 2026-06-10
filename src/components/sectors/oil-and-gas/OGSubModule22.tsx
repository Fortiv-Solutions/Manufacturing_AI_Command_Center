import { useState } from "react";
import {
  Calendar,
  List,
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Download,
  Settings,
  User,
  FileText,
  Upload,
  Check,
  Bell,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Obligation {
  id: string;
  type: string;
  block: string;
  docRef: string;
  clauseRef: string;
  description: string;
  value: string;
  dueDate: string;
  status: "Overdue" | "Upcoming" | "Completed";
  daysRemaining: number;
  owner: string;
  consequence: string;
  weekOffset: number; // 1 to 12 for the 3-month timeline
  rowIdx: number; // Row index for blocks
  alerts: {
    label: string;
    sent: boolean;
    date: string;
  }[];
  evidenceUploaded: boolean;
}

export function OGSubModule22() {
  const [viewMode, setViewMode] = useState<"timeline" | "list">("timeline");
  const [selectedOblId, setSelectedOblId] = useState("OBL-2025-0041");
  const [evidenceFile, setEvidenceFile] = useState<string | null>(null);

  // Blocks list for timeline rows
  const blocks = [
    { id: "CB-ONN-2010/1", name: "Cambay Onshore" },
    { id: "KG-DWN-98/3", name: "KG Deepwater" },
    { id: "RJ-ONN-2015/1", name: "Rajasthan Onshore" },
  ];

  // Obligations state
  const [obligations, setObligations] = useState<Obligation[]>([
    {
      id: "OBL-2025-0041",
      type: "Surface Rental Payment",
      block: "CB-ONN-2010/1",
      docRef: "CB-ONN-2010_1_Surface_Rights_2010.pdf",
      clauseRef: "Clause 6.2, Page 14",
      description: "Annual surface rental payment — Rs. 18,40,000 to MoPNG",
      value: "Rs. 18.4 Lakhs",
      dueDate: "01 Oct 2025",
      status: "Overdue",
      daysRemaining: -14,
      owner: "Land Department",
      consequence: "Notice of Default from MoPNG; potential block forfeiture",
      weekOffset: 1, // early October
      rowIdx: 0,
      alerts: [
        { label: "90-day alert", sent: true, date: "02 Jul 2025" },
        { label: "30-day alert", sent: true, date: "01 Sep 2025" },
        { label: "7-day alert", sent: true, date: "24 Sep 2025" },
        { label: "Escalation", sent: true, date: "08 Oct 2025" },
      ],
      evidenceUploaded: false,
    },
    {
      id: "OBL-2025-0043",
      type: "Phase 2 Well Spud Commitment",
      block: "KG-DWN-98/3",
      docRef: "KG-DWN-98_3_Block_Lease_Agreement.pdf",
      clauseRef: "Clause 5.3, Page 9",
      description: "Spud minimum committed deepwater exploration well under Phase 2 schedule",
      value: "Commitment Well",
      dueDate: "15 Nov 2025",
      status: "Upcoming",
      daysRemaining: 31,
      owner: "Drilling Department",
      consequence: "Non-compliance penalty; reduction of development term",
      weekOffset: 7, // mid November
      rowIdx: 1,
      alerts: [
        { label: "90-day alert", sent: true, date: "17 Aug 2025" },
        { label: "30-day alert", sent: false, date: "Pending 16 Oct" },
        { label: "7-day alert", sent: false, date: "Pending 08 Nov" },
        { label: "Escalation", sent: false, date: "Pending" },
      ],
      evidenceUploaded: false,
    },
    {
      id: "OBL-2025-0044",
      type: "Seismic Data Submission (DGH)",
      block: "RJ-ONN-2015/1",
      docRef: "RJ-ONN-2015_1_Seismic_Contract.pdf",
      clauseRef: "Clause 8.1, Page 22",
      description: "Compile and submit 3D seismic raw field data packages to DGH node",
      value: "Data Package",
      dueDate: "20 Nov 2025",
      status: "Upcoming",
      daysRemaining: 36,
      owner: "Geoscience Department",
      consequence: "Daily delay penalty charges indexable under PSC terms",
      weekOffset: 8, // late November
      rowIdx: 2,
      alerts: [
        { label: "90-day alert", sent: true, date: "22 Aug 2025" },
        { label: "30-day alert", sent: false, date: "Pending 21 Oct" },
        { label: "7-day alert", sent: false, date: "Pending 13 Nov" },
        { label: "Escalation", sent: false, date: "Pending" },
      ],
      evidenceUploaded: false,
    },
    {
      id: "OBL-2025-0045",
      type: "Annual Progress Report (MoPNG)",
      block: "CB-ONN-2010/1",
      docRef: "CB-ONN-2010_1_PSC_Main.pdf",
      clauseRef: "Clause 12.3, Page 28",
      description: "Submit audited annual physical progress report for Cambay block operations",
      value: "Audited Report",
      dueDate: "30 Nov 2025",
      status: "Upcoming",
      daysRemaining: 46,
      owner: "Regulatory Affairs",
      consequence: "Statutory warning; negative compliance rating index update",
      weekOffset: 9, // late November
      rowIdx: 0,
      alerts: [
        { label: "90-day alert", sent: true, date: "02 Sep 2025" },
        { label: "30-day alert", sent: false, date: "Pending 31 Oct" },
        { label: "7-day alert", sent: false, date: "Pending 23 Nov" },
        { label: "Escalation", sent: false, date: "Pending" },
      ],
      evidenceUploaded: false,
    },
    {
      id: "OBL-2025-0046",
      type: "Phase 3 Relinquishment Schedule",
      block: "KG-DWN-98/3",
      docRef: "KG-DWN-98_3_Block_Lease_Agreement.pdf",
      clauseRef: "Clause 4.5, Page 8",
      description: "Surrender 25% of initial contract area excluding commercial discovery zones",
      value: "Relinquishment Area",
      dueDate: "14 Dec 2025",
      status: "Upcoming",
      daysRemaining: 60,
      owner: "Land Department",
      consequence: "Disputed area grid; automatic relicensing by MoPNG",
      weekOffset: 11, // mid December
      rowIdx: 1,
      alerts: [
        { label: "90-day alert", sent: false, date: "Pending 15 Sep" },
        { label: "30-day alert", sent: false, date: "Pending 14 Nov" },
        { label: "7-day alert", sent: false, date: "Pending 07 Dec" },
        { label: "Escalation", sent: false, date: "Pending" },
      ],
      evidenceUploaded: false,
    },
  ]);

  const activeObl = obligations.find((o) => o.id === selectedOblId) || obligations[0];

  const handleUploadEvidence = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const name = e.target.files[0].name;
      setEvidenceFile(name);
      setObligations((prev) =>
        prev.map((o) => (o.id === activeObl.id ? { ...o, evidenceUploaded: true } : o)),
      );
      toast.success(`Evidence document "${name}" uploaded successfully.`);
    }
  };

  const handleMarkComplete = () => {
    if (activeObl.status === "Overdue" && !activeObl.evidenceUploaded) {
      toast.error("Please upload payment evidence before completing an Overdue obligation.");
      return;
    }

    setObligations((prev) =>
      prev.map((o) =>
        o.id === activeObl.id
          ? {
              ...o,
              status: "Completed",
              daysRemaining: 0,
            }
          : o,
      ),
    );
    toast.success(`Obligation ${activeObl.id} marked as Completed.`);
  };

  // Stats Counters
  const countTotal = 47;
  const countOverdue = obligations.filter((o) => o.status === "Overdue").length;
  const countUpcoming30 = obligations.filter(
    (o) => o.status === "Upcoming" && o.daysRemaining <= 30,
  ).length;
  const countUpcoming90 = obligations.filter(
    (o) => o.status === "Upcoming" && o.daysRemaining > 30,
  ).length;
  const countCompleted = 38 + obligations.filter((o) => o.status === "Completed").length;

  return (
    <div className="space-y-6">
      {/* Top Stats Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <span className="text-[10.5px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Active Commitments
          </span>
          <div className="text-xl font-bold font-mono text-[#0D1B2A] mt-1">{countTotal}</div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm relative overflow-hidden">
          <span className="text-[10.5px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Overdue
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            <span
              className={`text-xl font-bold font-mono ${countOverdue > 0 ? "text-[#C0392B] animate-pulse" : "text-[#0F7B6C]"}`}
            >
              {countOverdue}
            </span>
            {countOverdue > 0 && (
              <span className="h-2 w-2 rounded-full bg-[#C0392B] animate-ping" />
            )}
          </div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <span className="text-[10.5px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Due &le; 30 Days
          </span>
          <div className="text-xl font-bold font-mono text-[#C8922A] mt-1">{countUpcoming30}</div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <span className="text-[10.5px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Due 31-90 Days
          </span>
          <div className="text-xl font-bold font-mono text-[#1A6B8A] mt-1">{countUpcoming90}</div>
        </div>

        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm col-span-2 lg:col-span-1">
          <span className="text-[10.5px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Completed YTD
          </span>
          <div className="text-xl font-bold font-mono text-[#0F7B6C] mt-1">
            {countCompleted} <span className="text-[11px] text-[#8892A0]">/ 47</span>
          </div>
        </div>
      </div>

      {/* Main Content Layout: Left Timeline (65%), Right Detail (35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Timeline / List View */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden">
          {/* Timeline View Header */}
          <div className="p-4 border-b border-[#D1D9E3] bg-white flex items-center justify-between">
            <h3 className="text-[13px] font-bold text-[#0D1B2A] uppercase tracking-wider font-mono">
              Obligation Portfolio Schedule
            </h3>

            <div className="flex rounded-lg bg-[#F5F6FA] p-1">
              <button
                onClick={() => setViewMode("timeline")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "timeline" ? "bg-white text-[#0D1B2A] shadow-xs" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
                title="Timeline view"
              >
                <Calendar className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-1.5 rounded-md transition-all ${viewMode === "list" ? "bg-white text-[#0D1B2A] shadow-xs" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
                title="List view"
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Body Area */}
          <div className="p-5 flex-1 min-h-[350px]">
            {viewMode === "timeline" ? (
              /* Timeline View */
              <div className="space-y-6">
                {/* Timeline Axis Labels */}
                <div className="grid grid-cols-12 text-center text-[10px] font-semibold text-[#8892A0] uppercase font-mono border-b pb-2">
                  <div className="col-span-3 text-left">Production Block</div>
                  <div className="col-span-3">October 2025</div>
                  <div className="col-span-3">November 2025</div>
                  <div className="col-span-3">December 2025</div>
                </div>

                {/* Rows per block */}
                <div className="space-y-6 relative py-2">
                  {/* Grid background lines */}
                  <div className="absolute inset-y-0 left-[25%] right-0 grid grid-cols-3 pointer-events-none border-l border-r border-[#D1D9E3]/40">
                    <div className="border-r border-[#D1D9E3]/40" />
                    <div className="border-r border-[#D1D9E3]/40" />
                  </div>

                  {blocks.map((block, rowIdx) => (
                    <div
                      key={block.id}
                      className="grid grid-cols-12 items-center relative min-h-[50px]"
                    >
                      {/* Block Name */}
                      <div className="col-span-3 pr-2">
                        <span className="font-bold text-[#0D1B2A] text-xs leading-tight">
                          {block.name}
                        </span>
                        <p className="text-[9.5px] font-mono text-[#8892A0] mt-0.5">{block.id}</p>
                      </div>

                      {/* Dots plotting lane */}
                      <div className="col-span-9 h-6 relative bg-slate-50/50 rounded-lg border border-[#D1D9E3]/20">
                        {obligations
                          .filter((o) => o.block === block.id)
                          .map((o) => {
                            // Calculate horizontal offset
                            const leftPct = `${(o.weekOffset - 1) * 8.3 + 4}%`;
                            return (
                              <button
                                key={o.id}
                                onClick={() => setSelectedOblId(o.id)}
                                className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-4.5 w-4.5 rounded-full border shadow-sm transition-all focus:outline-none focus:scale-125 ${
                                  selectedOblId === o.id
                                    ? "ring-2 ring-offset-2 ring-[#C8922A] scale-110"
                                    : "hover:scale-110"
                                } ${
                                  o.status === "Completed"
                                    ? "bg-slate-300 border-slate-400"
                                    : o.status === "Overdue"
                                      ? "bg-[#C0392B] border-[#C0392B]/50 animate-pulse"
                                      : "bg-[#C8922A] border-[#C8922A]/50"
                                }`}
                                style={{ left: leftPct }}
                                title={`${o.type} - Due: ${o.dueDate}`}
                              />
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Timeline legend */}
                <div className="flex items-center gap-4 text-[10.5px] font-medium border-t pt-4 text-[#8892A0]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#C0392B]" /> Overdue
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-[#C8922A]" /> Upcoming
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-slate-300" /> Completed
                  </div>
                </div>
              </div>
            ) : (
              /* List View Table */
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#D1D9E3] bg-[#F5F6FA] text-[#8892A0] uppercase font-semibold text-[9.5px] tracking-wider">
                      <th className="p-3 pl-4">Obligation ID</th>
                      <th className="p-3">Type</th>
                      <th className="p-3">Block</th>
                      <th className="p-3">Due Date</th>
                      <th className="p-3 font-right text-right pr-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#D1D9E3]/50">
                    {obligations.map((o) => (
                      <tr
                        key={o.id}
                        onClick={() => setSelectedOblId(o.id)}
                        className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedOblId === o.id ? "bg-slate-50 border-l-2 border-l-[#C8922A]" : ""}`}
                      >
                        <td className="p-3 pl-4 font-mono font-semibold text-[#0D1B2A]">{o.id}</td>
                        <td className="p-3 font-semibold text-[#0D1B2A]">{o.type}</td>
                        <td className="p-3 text-[#1A6B8A] font-medium">{o.block}</td>
                        <td className="p-3 font-mono text-[#8892A0]">{o.dueDate}</td>
                        <td className="p-3 pr-4 text-right">
                          <span
                            className={`inline-block px-2 py-0.5 rounded-full text-[9.5px] font-bold uppercase ${
                              o.status === "Completed"
                                ? "bg-[#E3F4F2] text-[#0F7B6C]"
                                : o.status === "Overdue"
                                  ? "bg-[#FDECEA] text-[#C0392B] animate-pulse"
                                  : "bg-[#FDF3E3] text-[#C8922A]"
                            }`}
                          >
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Action Footer */}
          <div className="p-4 border-t border-[#D1D9E3] bg-[#F5F6FA]/30 flex items-center justify-between gap-3">
            <span className="text-[10px] text-[#8892A0] font-mono">
              * Dynamic tracking based on PSC and Mineral Lease terms
            </span>
            <Button
              variant="outline"
              className="border-[#D1D9E3] text-[#0D1B2A] font-semibold text-xs h-9 rounded-lg hover:bg-slate-50"
              onClick={() => {
                toast.success("Downloading Lease Obligation Summary Report (PDF)...");
              }}
            >
              <Download className="h-3.5 w-3.5 mr-1" /> Export Portfolio Summary
            </Button>
          </div>
        </div>

        {/* Right Column: Obligation Detail Card */}
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col h-full">
            {/* Detail Card Header */}
            <div
              className={`p-4 border-b border-[#D1D9E3] text-white flex items-center justify-between ${
                activeObl.status === "Overdue"
                  ? "bg-[#C0392B]"
                  : activeObl.status === "Completed"
                    ? "bg-[#0F7B6C]"
                    : "bg-[#C8922A]"
              }`}
            >
              <div className="space-y-0.5">
                <span className="text-[9px] uppercase tracking-widest text-white/80 font-mono font-bold">
                  {activeObl.id}
                </span>
                <h4 className="text-[12.5px] font-bold truncate max-w-[190px]">{activeObl.type}</h4>
              </div>
              <Badge className="bg-white/20 border-none text-white text-[10px]">
                {activeObl.status}
              </Badge>
            </div>

            {/* Content area */}
            <div className="p-4 space-y-4 text-xs overflow-y-auto max-h-[385px] flex-1">
              <div className="grid grid-cols-2 gap-3 pb-2 border-b">
                <div>
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    Filing Block
                  </span>
                  <p className="font-semibold text-[#0D1B2A] mt-0.5">{activeObl.block}</p>
                </div>
                <div>
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    Financial Value
                  </span>
                  <p className="font-semibold text-[#0D1B2A] mt-0.5 font-mono">{activeObl.value}</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                  Source Reference
                </span>
                <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F6FA] border">
                  <span
                    className="font-medium text-[#1A6B8A] truncate max-w-[170px]"
                    title={activeObl.docRef}
                  >
                    {activeObl.docRef}
                  </span>
                  <span className="font-mono text-[#8892A0] font-bold shrink-0">
                    {activeObl.clauseRef.split(",")[0]}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                  Obligation Details
                </span>
                <p className="text-[#0D1B2A] leading-relaxed">{activeObl.description}</p>
              </div>

              {/* Compliance Consequence warning box */}
              {activeObl.status !== "Completed" && (
                <div className="rounded-xl border border-red-500/20 bg-red-50/50 p-3 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-[#C0392B] shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-[#C0392B] uppercase tracking-wider font-mono">
                      Regulatory Consequence
                    </span>
                    <p className="text-[#0D1B2A] leading-relaxed text-[10.5px]">
                      {activeObl.consequence}
                    </p>
                  </div>
                </div>
              )}

              {/* Alert history timeline */}
              <div className="space-y-2 pt-1">
                <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono flex items-center gap-1">
                  <Bell className="h-3.5 w-3.5 text-[#1A6B8A]" /> Alert History Trail
                </span>

                <div className="grid grid-cols-2 gap-2">
                  {activeObl.alerts.map((al, idx) => (
                    <div
                      key={idx}
                      className={`p-2 rounded-lg border flex items-center justify-between gap-1.5 ${
                        al.sent
                          ? "bg-[#E3F4F2]/50 border-[#0F7B6C]/20 text-[#0F7B6C]"
                          : "bg-slate-50 border-slate-200 text-slate-400"
                      }`}
                    >
                      <span className="font-medium truncate text-[10px]">{al.label}</span>
                      <span className="font-mono text-[9px] shrink-0 font-bold">
                        {al.date.split(" ")[0]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Evidence Upload Slot */}
              {activeObl.status !== "Completed" && (
                <div className="space-y-1.5 pt-1">
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    Completion Proof
                  </span>
                  {activeObl.evidenceUploaded ? (
                    <div className="p-2.5 rounded-lg border border-[#0F7B6C]/20 bg-[#E3F4F2]/30 flex items-center justify-between text-[#0F7B6C]">
                      <span className="font-medium truncate font-mono text-[10px]">
                        ✓ Evidence PDF Attached
                      </span>
                      <Check className="h-3.5 w-3.5 shrink-0" />
                    </div>
                  ) : (
                    <div className="border border-dashed border-[#D1D9E3] hover:border-[#C0392B] bg-[#F5F6FA] hover:bg-red-50/10 transition-colors p-4 rounded-xl text-center cursor-pointer relative">
                      <input
                        type="file"
                        accept=".pdf,.xlsx,.png,.jpg"
                        onChange={handleUploadEvidence}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="h-4.5 w-4.5 text-[#C8922A] mx-auto mb-1.5" />
                      <p className="text-[10px] font-semibold text-[#0D1B2A]">
                        Upload receipt / submission PDF
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions Bar */}
            <div className="p-3 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center justify-end gap-2 shrink-0">
              {activeObl.status === "Overdue" && (
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#C0392B]/20 text-[#C0392B] bg-[#FDECEA] hover:bg-[#FDECEA]/80 text-[11px]"
                  onClick={() => {
                    toast.info(
                      "Escalation email & WhatsApp notice dispatched to Anand Sharma (VP Operations).",
                    );
                  }}
                >
                  Notify Operations
                </Button>
              )}
              <Button
                disabled={activeObl.status === "Completed"}
                onClick={handleMarkComplete}
                size="sm"
                className="h-8 bg-[#0F7B6C] hover:bg-[#0c6256] text-white text-[11px] font-bold"
              >
                Mark Complete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
