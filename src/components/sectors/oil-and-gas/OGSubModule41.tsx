import { useState } from "react";
import {
  Search,
  FileText,
  CheckCircle2,
  Loader2,
  AlertCircle,
  HelpCircle,
  Download,
  BookOpen,
  ExternalLink,
  Bookmark,
  Clock,
  Cpu,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface QueryItem {
  id: string;
  query: string;
  answer: string;
  confidence: number;
  docsCount: number;
  time: string;
  sources: Array<{ doc: string; page: number; section: string; highlight: string }>;
}

export function OGSubModule41() {
  const [queryInput, setQueryInput] = useState(
    "What cement blend was used in the Well B-07 surface casing?",
  );
  const [scope, setScope] = useState("All Documents");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedCitationIndex, setSelectedCitationIndex] = useState<number>(0);

  const mockQueries: Record<string, QueryItem> = {
    "What cement blend was used in the Well B-07 surface casing?": {
      id: "QRY-2025-001",
      query: "What cement blend was used in the Well B-07 surface casing?",
      answer:
        "Class G cement with 35% fly ash and 3% CaCl2 accelerator was used for the surface casing cement job on Well B-07. The slurry design was optimized for quick early strength development to isolate shallow fresh-water aquifers, and the plug bumped successfully with 2,400 psi return pressure.",
      confidence: 97,
      docsCount: 1,
      time: "4.2 seconds",
      sources: [
        {
          doc: "Well B-07 Completion Report",
          page: 22,
          section: "Section 4.3 - Casing and Cementing",
          highlight:
            "The surface casing string was set at 248m and cemented using Class G cement with 35% fly ash blend and 3% CaCl2 accelerator. Compressive strength reached 1,200 psi in 8 hours.",
        },
      ],
    },
    "Which wells in this portfolio had casing failures and what were the causes?": {
      id: "QRY-2025-002",
      query: "Which wells in this portfolio had casing failures and what were the causes?",
      answer:
        "Three wells have recorded casing integrity issues:\n\n1. Well B-07 (2019): Corrosion at 2,140m — attributed to H2S partial pressure exceeding design threshold in production casing.\n2. Well C-11 (2021): Mechanical damage at 1,870m during workover — casing deformed by overweight workover string run without centraliser.\n3. Well D-03 (2023): Cement failure at shoe — gas migration in annulus detected 14 days post-cement.",
      confidence: 94,
      docsCount: 23,
      time: "9.1 seconds",
      sources: [
        {
          doc: "Well B-07 Workover Report 2019",
          page: 8,
          section: "Casing Leak Inspection",
          highlight:
            "Corrosion logging run on 12-Jun-2019 indicated a localized wall loss of 42% at depth 2,140m. Analysis suggests elevated H2S concentration (approx. 5,000 ppm) caused sulfide stress cracking in the 9-5/8 casing.",
        },
        {
          doc: "Well C-11 Workover Report 2021",
          page: 4,
          section: "Workover Incidents",
          highlight:
            "While pulling the production packer, excessive drag (140 klbs) was encountered. Mechanical deformation was confirmed at 1,870m. Casing deformed due to absence of centralization during high-tension tubing pull.",
        },
        {
          doc: "Well D-03 Post-Drill Review 2023",
          page: 12,
          section: "Annulus Pressure Logs",
          highlight:
            "Gas migration was observed at the casing head annulus B-section on Day 14. Gas chromatography confirmed gas originates from the Hazad sandstone, indicating failure of cement seal at shoe.",
        },
      ],
    },
    "What is the maximum allowable H2S concentration in Rajasthan Block gas?": {
      id: "QRY-2025-003",
      query: "What is the maximum allowable H2S concentration in Rajasthan Block gas?",
      answer:
        "The Block RJ-ONN-2015/1 PSC sets a maximum H2S concentration of 5,000 ppm in produced gas at the wellhead (Clause 11.4(b)). The OISD-STD-116 worksite safety limit is 20 ppm; the contractor PPE specification requires breathing apparatus (SCBA) at concentrations above 10 ppm.",
      confidence: 99,
      docsCount: 4,
      time: "6.8 seconds",
      sources: [
        {
          doc: "Block RJ-ONN-2015/1 PSC",
          page: 44,
          section: "Clause 11.4 - Product Quality Standards",
          highlight:
            "Contractor shall deliver gas containing no more than 5,000 ppm of Hydrogen Sulfide (H2S) to ensure pipeline transport metallurgy specifications.",
        },
        {
          doc: "OISD-STD-116",
          page: 6,
          section: "Workplace Exposure Thresholds",
          highlight:
            "Maximum permissible workplace exposure limit for Hydrogen Sulfide gas in active operations area shall not exceed 20 ppm for an 8-hour shift.",
        },
      ],
    },
  };

  const [activeQueryData, setActiveQueryData] = useState<QueryItem>(mockQueries[queryInput]);

  const handleSearch = () => {
    if (!queryInput.trim()) {
      toast.error("Please enter a technical search query.");
      return;
    }

    setIsSearching(true);
    setSelectedCitationIndex(0);
    toast.loading("Querying RAG vectors across block archives...");

    setTimeout(() => {
      setIsSearching(false);
      toast.dismiss();

      const found = mockQueries[queryInput];
      if (found) {
        setActiveQueryData(found);
        toast.success("AI search complete.");
      } else {
        // Fallback generic query
        const customAnswer: QueryItem = {
          id: `QRY-2025-${Math.floor(Math.random() * 900) + 100}`,
          query: queryInput,
          answer: `Based on a semantic search of the document archive, references were located regarding your query "${queryInput}". However, specific numerical figures are not fully verified. Daily Drilling Logs suggest normal operation parameters during the specified intervals.`,
          confidence: 72,
          docsCount: 12,
          time: "5.4 seconds",
          sources: [
            {
              doc: "General Operations Archive",
              page: 1,
              section: "Section 1 - Field Summary",
              highlight: `Semantic search match for: "${queryInput}". Standard operating thresholds apply.`,
            },
          ],
        };
        setActiveQueryData(customAnswer);
        toast.warning("Low confidence response generated.");
      }
    }, 1500);
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 95) return "border-[#0F7B6C] bg-white";
    if (score >= 85) return "border-[#1A6B8A] bg-white";
    if (score >= 70) return "border-[#C8922A] bg-white";
    return "border-[#C0392B] bg-white";
  };

  const getConfidenceBadgeColor = (score: number) => {
    if (score >= 95) return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
    if (score >= 85) return "bg-blue-50 text-[#1A6B8A] border-blue-100";
    if (score >= 70) return "bg-amber-50 text-[#C8922A] border-amber-100";
    return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 animate-pulse";
  };

  return (
    <div className="space-y-6">
      {/* Search Input Bar */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-2.5 h-4.5 w-4.5 text-[#8892A0]" />
          <input
            type="text"
            value={queryInput}
            onChange={(e) => setQueryInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Ask any technical geomechanical or operational question..."
            className="w-full h-10 rounded-lg border border-[#D1D9E3] bg-white pl-10 pr-3.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] font-medium"
          />
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <select
            value={scope}
            onChange={(e) => setScope(e.target.value)}
            className="h-10 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none"
          >
            <option value="All Documents">All Documents</option>
            <option value="Well Reports">Well Reports</option>
            <option value="Daily Drilling Reports">Daily Drilling Reports</option>
            <option value="Regulatory Filings">Regulatory Filings</option>
          </select>

          <Button
            onClick={handleSearch}
            disabled={isSearching}
            className="h-10 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-semibold px-5 rounded-lg shadow-sm"
          >
            {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </Button>
        </div>
      </div>

      {/* Main RAG Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Answer Panel (60%) */}
        <div
          className={`lg:col-span-7 rounded-2xl border-2 p-5 shadow-sm space-y-4 transition-all flex flex-col ${getConfidenceColor(activeQueryData.confidence)}`}
        >
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="h-4.5 w-4.5 text-[#1A6B8A]" />
              <h3 className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider">
                AI Synthesised Response
              </h3>
            </div>

            <Badge
              className={`${getConfidenceBadgeColor(activeQueryData.confidence)} border font-semibold text-[10px] px-2 py-0.5 rounded-full`}
            >
              Confidence: {activeQueryData.confidence}%
            </Badge>
          </div>

          {isSearching ? (
            <div className="py-24 text-center space-y-4">
              <Loader2 className="h-8 w-8 text-[#C8922A] animate-spin mx-auto" />
              <p className="text-xs text-[#8892A0]">
                Scanning vector nodes & compiling references...
              </p>
            </div>
          ) : (
            <div className="space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3.5">
                <p className="text-xs text-[#0D1B2A] leading-relaxed whitespace-pre-line font-medium">
                  {activeQueryData.answer}
                </p>

                {/* Citation Chips */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider block">
                    Source Citations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeQueryData.sources.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedCitationIndex(idx)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-mono transition-colors ${
                          selectedCitationIndex === idx
                            ? "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/30 font-bold"
                            : "bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <BookOpen className="h-3 w-3" />
                        <span>
                          [{idx + 1}] {src.doc} (p. {src.page})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* RAG metadata summary footer */}
              <div className="flex items-center justify-between pt-4 border-t text-[11px] text-[#8892A0] font-mono">
                <span>
                  Searched {activeQueryData.docsCount} documents in {activeQueryData.time}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-[#C8922A] hover:text-[#b78222] font-semibold text-[10.5px]"
                    onClick={() => toast.success("Saved to operational knowledge base.")}
                  >
                    <Bookmark className="h-3.5 w-3.5 mr-1" /> Save Response
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Source Document Viewer (40%) */}
        <div className="lg:col-span-5 rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="border-b pb-3 flex items-center justify-between">
            <h4 className="text-[12.5px] font-bold text-[#0D1B2A] uppercase tracking-wider flex items-center gap-1.5">
              <FileText className="h-4.5 w-4.5 text-[#1A6B8A]" />
              <span>Source Preview</span>
            </h4>
            <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-mono text-[10px]">
              Page {activeQueryData.sources[selectedCitationIndex]?.page || 1}
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="text-[9.5px] font-bold text-[#1A6B8A] uppercase tracking-wider block">
                Document Reference
              </span>
              <p className="text-[11.5px] font-bold text-[#0D1B2A]">
                {activeQueryData.sources[selectedCitationIndex]?.doc}
              </p>
              <p className="text-[10px] font-semibold text-[#8892A0]">
                {activeQueryData.sources[selectedCitationIndex]?.section}
              </p>
            </div>

            <div className="p-4 bg-amber-50/50 border border-[#C8922A]/20 rounded-xl relative">
              <span className="absolute right-3.5 top-3 text-[9px] font-bold text-[#C8922A] uppercase font-mono bg-white px-1.5 py-0.5 rounded border border-[#C8922A]/10">
                Cited Section
              </span>
              <p className="text-xs text-slate-800 leading-relaxed italic pr-12 pt-2.5">
                "...{activeQueryData.sources[selectedCitationIndex]?.highlight}..."
              </p>
            </div>

            <Button
              onClick={() => toast.info("Opening full PDF source...")}
              variant="outline"
              className="w-full text-xs font-semibold h-9 flex items-center justify-center gap-1"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Open Source Document PDF
            </Button>
          </div>
        </div>
      </div>

      {/* Query History */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-3">
        <h4 className="text-[12px] font-bold text-[#0D1B2A] uppercase tracking-wider text-[#1A6B8A] flex items-center gap-1.5">
          <Clock className="h-4 w-4" /> Recent Queries
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.keys(mockQueries).map((q, idx) => (
            <button
              key={idx}
              onClick={() => {
                setQueryInput(q);
                setActiveQueryData(mockQueries[q]);
                setSelectedCitationIndex(0);
                toast.info("Loaded previous query.");
              }}
              className="text-left p-3 rounded-xl border border-slate-100 hover:border-[#C8922A]/30 hover:bg-slate-50 transition-all space-y-1.5"
            >
              <p className="text-xs font-semibold text-[#0D1B2A] line-clamp-2 leading-relaxed">
                "{q}"
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#8892A0]">
                <span>{mockQueries[q].time}</span>
                <span className="font-semibold text-[#0F7B6C]">
                  {mockQueries[q].confidence}% confidence
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
