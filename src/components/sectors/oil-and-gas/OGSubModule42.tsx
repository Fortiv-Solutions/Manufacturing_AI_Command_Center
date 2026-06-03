import { useState } from "react";
import { 
  FileText, Sparkles, Loader2, AlertCircle, AlertTriangle, CheckCircle2, 
  Download, FileCode, Check
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ReportSection {
  title: string;
  content: string;
  status: "complete" | "flagged" | "missing";
  reason?: string;
}

export function OGSubModule42() {
  const [reportType, setReportType] = useState("End-of-Well Summary");
  const [subject, setSubject] = useState("Well B-14, Block CB-ONN-2010/1");
  const [template, setTemplate] = useState("Standard EoW Template v2.3");
  const [isGenerating, setIsGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [isGenerated, setIsGenerated] = useState(true);
  const [activeSectionIdx, setActiveSectionIdx] = useState(0);

  // Raw inputs checklist
  const [sourceDocs, setSourceDocs] = useState([
    { name: "Daily_Drilling_Reports_B14_Days_1_14.zip", size: "14.2 MB", active: true },
    { name: "Well_B14_Completion_Schematic_Final.pdf", size: "2.1 MB", active: true },
    { name: "Mud_Log_Summary_Interval_3.pdf", size: "4.5 MB", active: true },
    { name: "HSE_Incidents_B14_Logs.xlsx", size: "840 KB", active: false }
  ]);

  // Report Sections state
  const [sections, setSections] = useState<ReportSection[]>([
    {
      title: "Executive Summary",
      content: "Well B-14 was drilled to a total depth of 3,847m MD (3,312m TVD) in 14 days, achieving a 96% on-bottom efficiency. A total of 3 NPT events were recorded, accounting for 8.4 hours of lost time, primarily due to stuck pipe at 2,940m in the Cambay Shale section. Final well cost was Rs. 8.47 crore, 6.2% under the approved AFE of Rs. 9.03 crore.",
      status: "complete"
    },
    {
      title: "Drilling Performance Summary",
      content: "Phase 1 — 26\" Surface Section (0–248m):\nDrilled in 1.5 days | Zero NPT | ROP avg: 42 m/hr\nBHA: PDC bit + motor + MWD | Mud: Spud gel, 1.05 SG\n\nPhase 2 — 17.5\" Intermediate Section (248–1,420m):\nDrilled in 4.2 days | NPT: 1.8 hours (trip for bit wear) | ROP avg: 28 m/hr\nBHA: Tri-cone bit + stabiliser + MWD/LWD | Mud: KCl polymer, 1.22 SG\n\nPhase 3 — 12.25\" Production Section (1,420–3,847m):\nDrilled in 8.3 days | NPT: 6.6 hours (stuck pipe at 2,940m — 5.2hr; pump failure at 3,400m — 1.4hr) | ROP avg: 19 m/hr\nBHA: PDC bit + RSS + MWD/LWD + neutron density | Mud: OBM, 1.58 SG",
      status: "complete"
    },
    {
      title: "NPT & Trouble Event Analysis",
      content: "Total NPT: 8.4 hours (3.5% of total well time)\n\n1. Stuck pipe — 2,940m Cambay Shale: 5.2 hours\nProbable cause: High ECD during connections — mud weight at lower end of window.\n2. Pump failure (HH pump #2): 1.4 hours\n3. BOP function test: 1.8 hours",
      status: "complete"
    },
    {
      title: "Lessons Learned & Geological Hazards",
      content: "[FLAGGED FOR REVIEW] Stuck pipe event at Cambay Shale: Mud density was kept at 1.45 SG which matched shear thresholds, but continuous swabbing during connections indicates geomechanical stress. Mud logs must be verified against geomechanical core summaries to determine safe weight ranges.",
      status: "flagged",
      reason: "Conflicting data in mud log vs DDR drilling summary on swabbing intensity."
    },
    {
      title: "Cost Variance vs Budget AFE",
      content: "",
      status: "missing",
      reason: "AFE budget spreadsheets not included in source documents."
    }
  ]);

  const handleToggleDoc = (idx: number) => {
    const updated = [...sourceDocs];
    updated[idx].active = !updated[idx].active;
    setSourceDocs(updated);
  };

  const triggerGeneration = () => {
    setIsGenerating(true);
    setGenProgress(0);
    setIsGenerated(false);

    const steps = [15, 45, 75, 100];
    steps.forEach((prog, i) => {
      setTimeout(() => {
        setGenProgress(prog);
        if (prog === 100) {
          setIsGenerating(false);
          setIsGenerated(true);
          toast.success("Draft report compiled by AI document engine.");
        }
      }, (i + 1) * 800);
    });
  };

  const handleEditContent = (text: string) => {
    const updated = [...sections];
    updated[activeSectionIdx].content = text;
    // If text is entered, resolve missing/flagged states
    if (updated[activeSectionIdx].status !== "complete") {
      updated[activeSectionIdx].status = "complete";
      toast.success("Section updated & verified.");
    }
    setSections(updated);
  };

  const totalComplete = sections.filter(s => s.status === "complete").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Input Panel (35%) */}
      <div className="lg:col-span-5 space-y-6">
        
        {/* Report Config Card */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#C8922A]" />
            <h3 className="text-[14.5px] font-bold text-[#0D1B2A]">Report Generator</h3>
          </div>

          <div className="space-y-3 text-xs">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Report Type</label>
              <select 
                value={reportType} 
                onChange={(e) => setReportType(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none"
              >
                <option value="End-of-Well Summary">End-of-Well Summary</option>
                <option value="Monthly Production Report">Monthly Production Report</option>
                <option value="NPT & Trouble Analysis">NPT & Trouble Analysis</option>
                <option value="Shift Handover Note">Shift Handover Note</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Subject / Well Asset</label>
              <input 
                type="text" 
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A]" 
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Target Template</label>
              <select 
                value={template} 
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none"
              >
                <option value="Standard EoW Template v2.3">Standard EoW Template v2.3</option>
                <option value="Regulatory Format Template">Regulatory Format Template</option>
              </select>
            </div>
          </div>

          <Button 
            onClick={triggerGeneration}
            disabled={isGenerating}
            className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white font-semibold text-xs h-10 rounded-lg"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-1" />
                <span>Compiling ({genProgress}%)</span>
              </>
            ) : (
              <>
                <FileCode className="h-4 w-4 mr-1.5" />
                <span>Generate Draft Report</span>
              </>
            )}
          </Button>
        </div>

        {/* Source Documents Checklist */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h4 className="text-[13px] font-bold text-[#0D1B2A]">Select Ingested Inputs</h4>
            <span className="text-[10.5px] font-mono text-[#8892A0]">{sourceDocs.filter(d => d.active).length} active</span>
          </div>

          <div className="space-y-2">
            {sourceDocs.map((doc, idx) => (
              <div 
                key={idx}
                onClick={() => handleToggleDoc(idx)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  doc.active 
                    ? "bg-[#E3F4F2]/30 border-[#0F7B6C]/20 hover:bg-[#E3F4F2]/50" 
                    : "bg-white border-[#D1D9E3] hover:bg-slate-50"
                }`}
              >
                <div className="space-y-0.5 max-w-[80%]">
                  <p className="text-xs font-semibold text-[#0D1B2A] truncate" title={doc.name}>{doc.name}</p>
                  <p className="text-[10px] font-mono text-[#8892A0]">{doc.size}</p>
                </div>
                <div className={`h-4.5 w-4.5 rounded border flex items-center justify-center ${
                  doc.active ? "bg-[#0F7B6C] border-[#0F7B6C] text-white" : "border-slate-300 bg-white"
                }`}>
                  {doc.active && <Check className="h-3 w-3" />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Right Draft Panel (65%) */}
      <div className="lg:col-span-7 flex flex-col">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col h-full overflow-hidden">
          
          <div className="p-4 border-b border-[#D1D9E3] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white">
            <div>
              <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">AI Draft Worksheet</h3>
              <p className="text-[11.5px] font-bold text-[#0D1B2A] mt-0.5">{reportType} — {subject}</p>
            </div>
            
            {isGenerated && (
              <div className="flex items-center gap-1.5 shrink-0">
                <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 text-[10.5px] font-semibold">
                  {totalComplete}/{sections.length} Sections Approved
                </Badge>
              </div>
            )}
          </div>

          {/* Section Selector Grid */}
          {isGenerated && (
            <div className="bg-slate-50 border-b border-[#D1D9E3] p-3 flex flex-wrap gap-2">
              {sections.map((sec, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSectionIdx(idx)}
                  className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    activeSectionIdx === idx 
                      ? "bg-[#0D1B2A] text-white border-[#0D1B2A]" 
                      : "bg-white text-slate-600 border-[#D1D9E3] hover:bg-slate-100"
                  }`}
                >
                  <span>{sec.title}</span>
                  {sec.status === "complete" ? (
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#0F7B6C]" />
                  ) : sec.status === "flagged" ? (
                    <AlertTriangle className="h-3.5 w-3.5 text-[#C8922A]" />
                  ) : (
                    <AlertCircle className="h-3.5 w-3.5 text-[#C0392B]" />
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Editor Workspace */}
          <div className="p-5 bg-[#F5F6FA] flex-1 overflow-y-auto max-h-[350px]">
            {isGenerating ? (
              <div className="py-24 text-center space-y-3">
                <Loader2 className="h-10 w-10 text-[#C8922A] animate-spin mx-auto" />
                <p className="text-xs text-[#8892A0]">Applying corporate templates...</p>
              </div>
            ) : isGenerated ? (
              <div className="space-y-4">
                
                {/* Warning message if flagged or missing */}
                {sections[activeSectionIdx].status !== "complete" && (
                  <div className="p-3 bg-amber-50 border border-[#C8922A]/20 rounded-xl flex gap-2 text-xs text-[#C8922A]">
                    <AlertTriangle className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Attention Required</p>
                      <p className="text-[10.5px] mt-0.5">{sections[activeSectionIdx].reason}</p>
                    </div>
                  </div>
                )}

                <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm space-y-3">
                  <h4 className="text-xs font-bold text-[#0D1B2A] uppercase tracking-wider text-[#1A6B8A]">
                    {sections[activeSectionIdx].title} Content
                  </h4>
                  
                  <textarea
                    value={sections[activeSectionIdx].content}
                    onChange={(e) => handleEditContent(e.target.value)}
                    rows={8}
                    placeholder="Enter section content here..."
                    className="w-full rounded-lg border border-slate-200 p-3 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] font-mono leading-relaxed"
                  />
                </div>

              </div>
            ) : (
              <div className="py-24 text-center space-y-3">
                <FileText className="h-12 w-12 text-[#D1D9E3] mx-auto" />
                <p className="text-xs font-semibold text-[#0D1B2A]">Document Workspace Empty</p>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10.5px] font-mono text-[#8892A0]">
              * Draft is saved in corporate cloud workspace
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button 
                variant="outline" 
                disabled={!isGenerated || isGenerating}
                className="flex-1 sm:flex-none h-9 text-xs"
                onClick={() => toast.success("Draft exported to Word file.")}
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Export Word
              </Button>
              <Button 
                disabled={!isGenerated || isGenerating}
                onClick={() => {
                  toast.loading("Publishing finalized report to block repository...");
                  setTimeout(() => {
                    toast.dismiss();
                    toast.success(`Published! ${reportType} saved to active register.`);
                  }, 1200);
                }}
                className="flex-1 sm:flex-none bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg"
              >
                <Check className="h-3.5 w-3.5 mr-1" /> Publish Report
              </Button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
