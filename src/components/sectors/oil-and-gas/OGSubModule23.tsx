import { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Database,
  FileText,
  ChevronRight,
  HelpCircle,
  User,
  Calendar,
  Check,
  Download,
  Grid,
  ArrowLeft,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AnomalyItem {
  id: string;
  block: string;
  clauseNum: string;
  category: string;
  summary: string;
  severity: "High" | "Medium" | "Low";
  status: "Pending" | "In Review" | "Resolved";
  extractedText: string;
  standardText: string;
  impactAnalysis: string;
  portfolioDistribution: { block: string; value: string; standard: boolean }[];
  owner: string;
  dueDate: string;
}

export function OGSubModule23() {
  const [selectedAnomalyId, setSelectedAnomalyId] = useState("CL-KG98-8.4");
  const [showMatrix, setShowMatrix] = useState(false);

  // Anomalies list
  const [anomalies, setAnomalies] = useState<AnomalyItem[]>([
    {
      id: "CL-KG98-8.4",
      block: "KG-DWN-98/3",
      clauseNum: "Clause 8.4",
      category: "Cost Recovery Cap",
      summary: "Cost Recovery Cap set at 90% of gross revenue (vs 100% standard)",
      severity: "High",
      status: "Pending",
      extractedText:
        '"The Contractor shall be entitled to recover from Cost Petroleum an amount not exceeding ninety percent (90%) of the total Petroleum produced and saved in any Calendar Year, in respect of costs incurred in accordance with the Accounting Procedure set out in Exhibit C."',
      standardText:
        '"The Contractor shall be entitled to recover one hundred percent (100%) of total Petroleum produced and saved in any Calendar Year in respect of allowable costs..."',
      impactAnalysis:
        "The cost recovery cap of 90% is 10 percentage points below the standard NELP template. At projected Phase 3 production of approximately 12,000–18,000 bbl/day, this deviation results in a material unrecoverable cost exposure estimated at Rs. 4.2–6.8 Cr annually at current prices.",
      portfolioDistribution: [
        { block: "KG-DWN-98/3", value: "90% (Anomalous)", standard: false },
        { block: "CB-ONN-2010/1", value: "100% (Standard)", standard: true },
        { block: "RJ-ONN-2015/1", value: "100% (Standard)", standard: true },
      ],
      owner: "Ravi Patel",
      dueDate: "30 Oct 2025",
    },
    {
      id: "CL-KG98-19.2",
      block: "KG-DWN-98/3",
      clauseNum: "Clause 19.2",
      category: "Dispute Resolution",
      summary: "Arbitration Seat is Singapore (vs Indian domestic arbitration standard)",
      severity: "High",
      status: "In Review",
      extractedText:
        '"Any dispute arising out of this contract shall be referred to arbitration under UNCITRAL rules, with the seat of arbitration being Singapore, and proceedings conducted in English."',
      standardText:
        '"All disputes shall be referred to arbitration in accordance with the Indian Arbitration and Conciliation Act 1996, with the seat of arbitration being New Delhi, India."',
      impactAnalysis:
        "Foreign arbitration seat creates jurisdictional complexity. All disputes governed by Singapore Arbitration Act; higher litigation costs; Indian courts have limited supervisory jurisdiction.",
      portfolioDistribution: [
        { block: "KG-DWN-98/3", value: "Singapore Seat (Anomalous)", standard: false },
        { block: "CB-ONN-2010/1", value: "New Delhi Seat (Standard)", standard: true },
        { block: "RJ-ONN-2015/1", value: "New Delhi Seat (Standard)", standard: true },
      ],
      owner: "Priya Menon",
      dueDate: "30 Oct 2025",
    },
    {
      id: "CL-CB10-22.1",
      block: "CB-ONN-2010/1",
      clauseNum: "Clause 22.1",
      category: "Force Majeure",
      summary: "Force Majeure excludes licensing authority / government inaction",
      severity: "Medium",
      status: "Pending",
      extractedText:
        '"Force Majeure shall include acts of God, war, blockades, but specifically excludes any delays or failures in performance arising from regulatory inaction, licensing delays, or governmental permits."',
      standardText:
        '"Force Majeure includes war, strike, acts of God, as well as any delays caused by government action, regulatory inaction, or delay in issuing required permits..."',
      impactAnalysis:
        "Operator bears the commercial risk of delays caused by licensing authority inaction. Crucial exposure in phase extension applications.",
      portfolioDistribution: [
        { block: "KG-DWN-98/3", value: "Standard FM (Standard)", standard: true },
        { block: "CB-ONN-2010/1", value: "Excludes Gov Action (Anomalous)", standard: false },
        { block: "RJ-ONN-2015/1", value: "Standard FM (Standard)", standard: true },
      ],
      owner: "Sushant Verma",
      dueDate: "15 Nov 2025",
    },
    {
      id: "CL-RJ15-14.3",
      block: "RJ-ONN-2015/1",
      clauseNum: "Clause 14.3",
      category: "Assignment Rights",
      summary: "MoPNG holds pre-emption rights on farm-in transactions",
      severity: "Medium",
      status: "Pending",
      extractedText:
        '"The Operator shall not assign or transfer any share of interest without prior approval. Furthermore, the Government holds the first right of pre-emption on any farm-in transaction proposed by third parties."',
      standardText:
        '"The Contractor may assign interest with prior consent of the Government, which shall not be unreasonably withheld, without any pre-emption rights held by the Government."',
      impactAnalysis:
        "Limits farm-down options and increases commercial transaction complexity. Prior notification is required before farm-in discussions.",
      portfolioDistribution: [
        { block: "KG-DWN-98/3", value: "Prior Consent (Standard)", standard: true },
        { block: "CB-ONN-2010/1", value: "Prior Consent (Standard)", standard: true },
        { block: "RJ-ONN-2015/1", value: "Gov Pre-emption (Anomalous)", standard: false },
      ],
      owner: "Priya Menon",
      dueDate: "20 Nov 2025",
    },
    {
      id: "CL-CB10-11.2",
      block: "CB-ONN-2010/1",
      clauseNum: "Clause 11.2",
      category: "Termination Notice",
      summary: "Termination notice period reduced to 60 days (vs standard 90 days)",
      severity: "Low",
      status: "Resolved",
      extractedText:
        '"Either party may terminate this agreement upon default of obligations by providing sixty (60) days written notice of termination to the other party."',
      standardText:
        '"The Government may terminate this contract upon default by providing ninety (90) days written notice, allowing the Contractor to cure defaults during this period."',
      impactAnalysis:
        "Reduces the operator's cure-period window by 30 days. Action logged; no immediate action required.",
      portfolioDistribution: [
        { block: "KG-DWN-98/3", value: "90 days (Standard)", standard: true },
        { block: "CB-ONN-2010/1", value: "60 days (Anomalous)", standard: false },
        { block: "RJ-ONN-2015/1", value: "90 days (Standard)", standard: true },
      ],
      owner: "Arjun Mehta",
      dueDate: "10 Dec 2025",
    },
  ]);

  const activeAnomaly = anomalies.find((a) => a.id === selectedAnomalyId) || anomalies[0];

  const handleMarkReviewed = () => {
    setAnomalies((prev) =>
      prev.map((a) => (a.id === activeAnomaly.id ? { ...a, status: "Resolved" } : a)),
    );
    toast.success(`Anomaly ${activeAnomaly.id} marked as Reviewed & Resolved.`);
  };

  const getSeverityBadge = (sev: AnomalyItem["severity"]) => {
    switch (sev) {
      case "High":
        return (
          <Badge className="bg-[#FDECEA] border-[#C0392B]/20 text-[#C0392B] text-[10.5px] font-bold px-2 py-0.5 rounded-full hover:bg-[#FDECEA] animate-pulse">
            High
          </Badge>
        );
      case "Medium":
        return (
          <Badge className="bg-[#FDF3E3] border-[#C8922A]/20 text-[#C8922A] text-[10.5px] font-bold px-2 py-0.5 rounded-full hover:bg-[#FDF3E3]">
            Medium
          </Badge>
        );
      case "Low":
        return (
          <Badge className="bg-blue-50 border-blue-100 text-[#1A6B8A] text-[10.5px] font-bold px-2 py-0.5 rounded-full hover:bg-blue-50">
            Low
          </Badge>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Top KPI bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Clauses Analysed
          </span>
          <div className="text-xl font-bold font-mono text-[#0D1B2A] mt-1">142</div>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Anomalies Open
          </span>
          <div className="text-xl font-bold font-mono text-[#C0392B] mt-1">
            4 <span className="text-[10px] text-[#8892A0] font-normal">/ 5 total</span>
          </div>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Conflicts Detected
          </span>
          <div className="text-xl font-bold font-mono text-[#0F7B6C] mt-1">0</div>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col justify-between">
          <span className="text-[11px] font-semibold text-[#8892A0] uppercase tracking-wider font-mono">
            Legal Actions Pending
          </span>
          <div className="text-xl font-bold font-mono text-[#C8922A] mt-1">3</div>
        </div>
      </div>

      {!showMatrix ? (
        /* Main Layout: Left Anomaly list (60%), Right Detail panel (40%) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Anomaly List Table */}
          <div className="lg:col-span-7 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 border-b border-[#D1D9E3] bg-white">
              <h3 className="text-[13px] font-bold text-[#0D1B2A] uppercase tracking-wider font-mono">
                Flagged Lease Anomalies
              </h3>
            </div>

            <div className="overflow-x-auto min-h-[350px]">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-[#D1D9E3] bg-[#F5F6FA] text-[#8892A0] uppercase font-semibold text-[10px] tracking-wider">
                    <th className="p-3 pl-4">Severity</th>
                    <th className="p-3">Block / Clause</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Owner</th>
                    <th className="p-3 pr-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D1D9E3]/50">
                  {anomalies.map((anom) => (
                    <tr
                      key={anom.id}
                      onClick={() => setSelectedAnomalyId(anom.id)}
                      className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedAnomalyId === anom.id ? "bg-slate-50 border-l-2 border-l-[#C8922A]" : ""}`}
                    >
                      <td className="p-3 pl-4">{getSeverityBadge(anom.severity)}</td>
                      <td className="p-3">
                        <div className="font-semibold text-[#0D1B2A]">{anom.block}</div>
                        <div className="text-[10px] text-[#8892A0] font-mono mt-0.5">
                          {anom.clauseNum} ({anom.id})
                        </div>
                      </td>
                      <td className="p-3 text-[#1A6B8A] font-semibold">{anom.category}</td>
                      <td className="p-3 flex items-center gap-1.5 mt-1 text-[#8892A0]">
                        <User className="h-3 w-3 text-[#1A6B8A]" />
                        <span className="font-medium text-[#0D1B2A]">{anom.owner}</span>
                      </td>
                      <td className="p-3 pr-4 text-right">
                        <span
                          className={`inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase ${
                            anom.status === "Resolved"
                              ? "bg-[#E3F4F2] text-[#0F7B6C]"
                              : anom.status === "In Review"
                                ? "bg-blue-50 text-[#1A6B8A]"
                                : "bg-[#FDF3E3] text-[#C8922A]"
                          }`}
                        >
                          {anom.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Action bar */}
            <div className="p-4 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center justify-between gap-3">
              <span className="text-[10px] text-[#8892A0] font-mono">
                * Automatic comparison against standard NELP / OALP model contracts
              </span>
              <div className="flex items-center gap-2">
                <Button
                  onClick={() => setShowMatrix(true)}
                  className="bg-white border-[#D1D9E3] hover:bg-slate-50 text-[#0D1B2A] font-bold text-xs h-9 rounded-lg shadow-sm flex items-center justify-center gap-1 transition-all border"
                >
                  <Grid className="h-4 w-4 mr-1 text-[#1A6B8A]" />
                  <span>View Comparison Matrix</span>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#D1D9E3] text-[#0D1B2A] font-semibold text-xs h-9 rounded-lg hover:bg-slate-50"
                  onClick={() => toast.success("Lease Anomaly Audit PDF exported successfully.")}
                >
                  <Download className="h-3.5 w-3.5 mr-1" /> Export Report
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column: Detail Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div
                className={`p-4 border-b border-[#D1D9E3] text-white flex items-center justify-between ${
                  activeAnomaly.severity === "High"
                    ? "bg-[#C0392B]"
                    : activeAnomaly.severity === "Medium"
                      ? "bg-[#C8922A]"
                      : "bg-[#1A6B8A]"
                }`}
              >
                <div className="space-y-0.5">
                  <span className="text-[9px] uppercase tracking-widest text-white/80 font-mono font-bold">
                    {activeAnomaly.id}
                  </span>
                  <h4 className="text-[12.5px] font-bold truncate max-w-[190px]">
                    {activeAnomaly.category}
                  </h4>
                </div>
                <Badge className="bg-white/20 border-none text-white text-[10px]">
                  {activeAnomaly.severity}
                </Badge>
              </div>

              {/* Scroll Content */}
              <div className="p-4 space-y-4 text-xs overflow-y-auto max-h-[385px] flex-1">
                <div className="space-y-1">
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    Deviation Summary
                  </span>
                  <p className="font-semibold text-[#0D1B2A]">{activeAnomaly.summary}</p>
                </div>

                {/* Extracted vs Standard */}
                <div className="grid grid-cols-1 gap-2.5 bg-[#F5F6FA] p-3 rounded-xl border">
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-[#C0392B] font-bold uppercase font-mono">
                      Extracted Contract Text ({activeAnomaly.clauseNum})
                    </span>
                    <p className="text-[#0D1B2A] leading-relaxed italic text-[11px]">
                      {activeAnomaly.extractedText}
                    </p>
                  </div>
                  <div className="space-y-0.5 border-t pt-2 border-dashed">
                    <span className="text-[9px] text-[#0F7B6C] font-bold uppercase font-mono">
                      Standard Model Template
                    </span>
                    <p className="text-[#0D1B2A] leading-relaxed italic text-[11px]">
                      {activeAnomaly.standardText}
                    </p>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    AI Deviation Impact Analysis
                  </span>
                  <p className="text-[#0D1B2A] leading-relaxed font-semibold bg-red-50/30 p-2.5 rounded-lg border border-red-500/10">
                    {activeAnomaly.impactAnalysis}
                  </p>
                </div>

                {/* Portfolio Context */}
                <div className="space-y-2">
                  <span className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                    Portfolio Context Distribution
                  </span>
                  <div className="space-y-1.5">
                    {activeAnomaly.portfolioDistribution.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg border"
                      >
                        <span className="font-bold text-[#0D1B2A]">{item.block}</span>
                        <span
                          className={`font-mono text-[10.5px] px-2 py-0.5 rounded-md font-semibold ${
                            item.standard
                              ? "text-[#0F7B6C] bg-[#E3F4F2]/50"
                              : "text-[#C0392B] bg-[#FDECEA]"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Assign action */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="space-y-1.5">
                    <label className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                      Assign Legal Owner
                    </label>
                    <select
                      value={activeAnomaly.owner}
                      onChange={(e) => {
                        const newOwner = e.target.value;
                        setAnomalies((prev) =>
                          prev.map((a) =>
                            a.id === activeAnomaly.id
                              ? { ...a, owner: newOwner, status: "In Review" }
                              : a,
                          ),
                        );
                        toast.info(`Anomaly assigned to: ${newOwner}`);
                      }}
                      className="w-full h-8 rounded-md border border-[#D1D9E3] bg-white px-2 text-[11.5px] font-medium focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
                    >
                      <option value="Ravi Patel">Ravi Patel</option>
                      <option value="Priya Menon">Priya Menon</option>
                      <option value="Sushant Verma">Sushant Verma</option>
                      <option value="Arjun Mehta">Arjun Mehta</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9.5px] text-[#8892A0] uppercase font-bold font-mono">
                      Due Date
                    </label>
                    <div className="w-full h-8 rounded-md border border-[#D1D9E3] bg-[#F5F6FA] px-2 text-[11.5px] flex items-center text-[#0D1B2A] font-mono">
                      {activeAnomaly.dueDate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-3 border-t border-[#D1D9E3] bg-[#F5F6FA]/50 flex items-center justify-end gap-2 shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-[11px]"
                  onClick={() =>
                    toast.success("Added to structured corporate legal risk register.")
                  }
                >
                  Add to Legal Queue
                </Button>
                <Button
                  disabled={activeAnomaly.status === "Resolved"}
                  onClick={handleMarkReviewed}
                  size="sm"
                  className="h-8 bg-[#0F7B6C] hover:bg-[#0c6256] text-white text-[11px] font-bold"
                >
                  Mark Reviewed
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Matrix Spreadsheet View */
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col space-y-4 p-5 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <Button
                onClick={() => setShowMatrix(false)}
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 rounded-full hover:bg-slate-100"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <h3 className="text-[14px] font-bold text-[#0D1B2A]">
                  Portfolio Clause Comparison Matrix
                </h3>
                <p className="text-[11px] text-[#8892A0]">
                  Spreadsheet mapping categories as rows and active leases as columns.
                </p>
              </div>
            </div>

            <Button
              onClick={() => toast.success("Spreadsheet matrix exported as XLSX successfully.")}
              className="bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-8 rounded-lg"
            >
              Export Matrix (.xlsx)
            </Button>
          </div>

          <div className="overflow-x-auto border rounded-xl">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b bg-[#F5F6FA] text-[#8892A0] uppercase font-semibold text-[10px] tracking-wider">
                  <th className="p-3 pl-4 border-r">Clause Category</th>
                  <th className="p-3 border-r">Portfolio Standard</th>
                  <th className="p-3 border-r bg-red-50/30">KG-DWN-98/3 (Deepwater)</th>
                  <th className="p-3 border-r">CB-ONN-2010/1 (Cambay)</th>
                  <th className="p-3 pr-4">RJ-ONN-2015/1 (Rajasthan)</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 pl-4 border-r font-sans font-bold text-[#0D1B2A]">
                    Cost Recovery Cap
                  </td>
                  <td className="p-3 border-r">100% recovery</td>
                  <td className="p-3 border-r bg-red-100 text-[#C0392B] font-extrabold">
                    90% (Anomalous)
                  </td>
                  <td className="p-3 border-r">100% (Standard)</td>
                  <td className="p-3 pr-4">100% (Standard)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 pl-4 border-r font-sans font-bold text-[#0D1B2A]">
                    Dispute Seat
                  </td>
                  <td className="p-3 border-r">New Delhi (India)</td>
                  <td className="p-3 border-r bg-red-100 text-[#C0392B] font-extrabold">
                    Singapore (Anomalous)
                  </td>
                  <td className="p-3 border-r">New Delhi (Standard)</td>
                  <td className="p-3 pr-4">New Delhi (Standard)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 pl-4 border-r font-sans font-bold text-[#0D1B2A]">
                    Force Majeure
                  </td>
                  <td className="p-3 border-r">Includes Gov Action</td>
                  <td className="p-3 border-r">Standard FM</td>
                  <td className="p-3 border-r bg-amber-100 text-[#C8922A] font-extrabold">
                    Excludes Gov (Anomalous)
                  </td>
                  <td className="p-3 pr-4">Standard FM</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 pl-4 border-r font-sans font-bold text-[#0D1B2A]">
                    Assignment Pre-emption
                  </td>
                  <td className="p-3 border-r">No pre-emption right</td>
                  <td className="p-3 border-r">No pre-emption</td>
                  <td className="p-3 border-r">No pre-emption</td>
                  <td className="p-3 pr-4 bg-amber-100 text-[#C8922A] font-extrabold">
                    Gov Pre-emption (Anomalous)
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 pl-4 border-r font-sans font-bold text-[#0D1B2A]">
                    Termination Notice
                  </td>
                  <td className="p-3 border-r">90 days</td>
                  <td className="p-3 border-r text-slate-400">90 days</td>
                  <td className="p-3 border-r bg-blue-50 text-[#1A6B8A] font-bold">
                    60 days (Anomalous)
                  </td>
                  <td className="p-3 pr-4 text-slate-400">90 days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
