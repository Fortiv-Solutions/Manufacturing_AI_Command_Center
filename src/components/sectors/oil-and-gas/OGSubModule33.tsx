import { useState } from "react";
import { 
  ShieldAlert, Sparkles, Send, FileText, AlertTriangle, 
  Plus, Check, ChevronRight, CheckCircle2, User, MapPin, Calendar, Clock
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CorrectiveAction {
  id: number;
  description: string;
  priority: "HIGH" | "MED" | "LOW";
  owner: string;
  due: string;
  status: "Open" | "Completed";
}

export function OGSubModule33() {
  const [incidentType, setIncidentType] = useState("Near Miss");
  const [severity, setSeverity] = useState("Minor");
  const [narrative, setNarrative] = useState(
    "Worker slipped while descending from a 3-metre elevated platform at Well 12. He was carrying a tool bag and grabbed the handrail but fell anyway. No injury — near miss. Platform surface was wet from earlier rain."
  );
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisFramework, setAnalysisFramework] = useState<"5-Why" | "Bowtie" | "Fault Tree">("5-Why");
  
  // AI analysis output state
  const [immediateCause, setImmediateCause] = useState("Wet surface on elevated platform access ladder");
  const [whys, setWhys] = useState([
    { label: "Why 1 (Direct Source)", text: "No anti-slip matting or grating on platform surface" },
    { label: "Why 2 (Equipment Setup)", text: "Platform specification did not include anti-slip requirement" },
    { label: "Why 3 (Planning Gap)", text: "Existing JSA for elevated work did not flag wet-surface risk" },
    { label: "Why 4 (Process Detail)", text: "JSA template for height work lacks weather condition check" },
    { label: "Why 5 (Systemic Root)", text: "Pre-task inspection checklist does not include surface hazard assessment for elevated work in wet conditions" }
  ]);
  
  const [contributingFactors, setContributingFactors] = useState([
    "Worker carrying tool bag — hands not free for full handrail grip",
    "Tool bag hoist/holder not installed at platform access point (per SWP-HSE-07)",
    "No signage warning of wet surface risk after rainfall"
  ]);

  const [correctiveActions, setCorrectiveActions] = useState<CorrectiveAction[]>([
    { id: 1, description: "Install non-slip grating on all elevated platforms", priority: "HIGH", owner: "Sushant Verma", due: "04 Nov 2025", status: "Open" },
    { id: 2, description: "Add 'wet surface hazard check' to JSA template for outdoor elevated work", priority: "HIGH", owner: "Priya Menon", due: "31 Oct 2025", status: "Open" },
    { id: 3, description: "Install tool bag holder/hoist at all elevated platform access points", priority: "MED", owner: "Ramesh Nair", due: "14 Nov 2025", status: "Open" }
  ]);

  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    toast.loading("AI analysis engine running: Parsing narrative & building root cause chain...");
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.dismiss();
      toast.success("AI Incident Analysis complete. Root causes and corrective actions mapped.");
    }, 1500);
  };

  const handleNotification = () => {
    toast.loading("Generating DGMS Form-B notification payload...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Regulatory notification compiled & queued! Transmitted to DGMS Portal.");
    }, 1200);
  };

  // Determine if official DGMS/OISD notification is required based on severity/type
  const requiresRegulatoryNotification = severity === "Serious" || severity === "Fatal" || incidentType === "LTI" || incidentType === "Fatality";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Input Form (50%) */}
      <div className="lg:col-span-6 rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-[#C0392B]" />
            <h3 className="text-[14px] font-bold text-[#0D1B2A]">Incident Capture Form</h3>
          </div>
          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-mono text-[10.5px]">INC-2025-0089</Badge>
        </div>

        <div className="grid grid-cols-2 gap-3.5">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Event Type</label>
            <select 
              value={incidentType} 
              onChange={(e) => setIncidentType(e.target.value)}
              className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
            >
              <option value="Near Miss">Near Miss (No Injury)</option>
              <option value="First Aid">First Aid Injury</option>
              <option value="Medical Treatment">Medical Treatment</option>
              <option value="LTI">Lost Time Injury (LTI)</option>
              <option value="Dangerous Occurrence">Dangerous Occurrence</option>
              <option value="Fatality">Fatality</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Severity Classification</label>
            <select 
              value={severity} 
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
            >
              <option value="Minor">Minor (First Aid / Near Miss)</option>
              <option value="Moderate">Moderate (Medical Treatment)</option>
              <option value="Serious">Serious (LTI / Major Asset Damage)</option>
              <option value="Fatal">Fatal / Critical Occurrence</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider flex items-center gap-1">
              <Calendar className="h-3 w-3" /> Date
            </label>
            <input type="text" defaultValue="28 Oct 2025" className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-[#F5F6FA] px-2 text-xs font-mono" readOnly />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider flex items-center gap-1">
              <Clock className="h-3 w-3" /> Time
            </label>
            <input type="text" defaultValue="11:14 IST" className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-[#F5F6FA] px-2 text-xs font-mono" readOnly />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Location
            </label>
            <input type="text" defaultValue="Well No. 12" className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-[#F5F6FA] px-2 text-xs font-semibold" readOnly />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Incident Narrative / Description</label>
          <textarea 
            value={narrative}
            onChange={(e) => setNarrative(e.target.value)}
            rows={5}
            className="w-full rounded-lg border border-[#D1D9E3] bg-white p-3 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] resize-none leading-relaxed"
          />
        </div>

        <Button 
          onClick={handleRunAnalysis}
          disabled={isAnalyzing}
          className="w-full bg-[#0D1B2A] hover:bg-slate-800 text-white font-semibold text-xs h-10 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
        >
          <Sparkles className="h-4 w-4 text-[#C8922A]" />
          <span>Run AI Root Cause Assistant</span>
        </Button>
      </div>

      {/* Right AI Analysis Panel (50%) */}
      <div className="lg:col-span-6 space-y-6">
        
        {/* Root Cause Framework Drawer */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-[#C8922A]" />
              <h3 className="text-[14px] font-bold text-[#0D1B2A]">AI Root Cause Analysis</h3>
            </div>
            
            <div className="flex items-center bg-[#F5F6FA] border rounded-lg p-0.5">
              {(["5-Why", "Bowtie", "Fault Tree"] as const).map(frame => (
                <button
                  key={frame}
                  onClick={() => setAnalysisFramework(frame)}
                  className={`text-[10px] font-bold px-2 py-1 rounded-md transition-all ${
                    analysisFramework === frame ? "bg-white text-[#0D1B2A] shadow-xs" : "text-[#8892A0] hover:text-[#0D1B2A]"
                  }`}
                >
                  {frame}
                </button>
              ))}
            </div>
          </div>

          {isAnalyzing ? (
            <div className="py-16 text-center space-y-3">
              <div className="h-7 w-7 border-2 border-[#C8922A] border-t-transparent animate-spin rounded-full mx-auto" />
              <p className="text-xs text-[#8892A0]">Re-running framework calculations...</p>
            </div>
          ) : (
            <div className="space-y-4 text-xs">
              
              {/* 5-Why Display */}
              {analysisFramework === "5-Why" ? (
                <div className="space-y-2.5">
                  <div className="p-2.5 rounded-lg border bg-rose-50/50 border-rose-100">
                    <p className="text-[10px] font-bold text-[#C0392B] uppercase">Immediate Cause</p>
                    <p className="font-semibold text-[#0D1B2A] mt-0.5">{immediateCause}</p>
                  </div>
                  
                  <div className="space-y-2 pl-3 border-l-2 border-slate-100">
                    {whys.map((why, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <p className="text-[9.5px] font-bold text-[#1A6B8A] uppercase">{why.label}</p>
                        <p className="text-[#0D1B2A] font-medium">{why.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl border border-dashed text-center text-[#8892A0]">
                  {analysisFramework} diagram view model generated in audit package.
                </div>
              )}

              {/* Contributing Factors */}
              <div className="space-y-2 pt-3 border-t">
                <span className="text-[10.5px] font-bold text-[#8892A0] uppercase tracking-wider block">Additional Contributing Factors</span>
                <ul className="list-disc list-inside space-y-1 text-[#0D1B2A] font-medium pl-1">
                  {contributingFactors.map((factor, idx) => (
                    <li key={idx} className="leading-relaxed">{factor}</li>
                  ))}
                </ul>
              </div>

              {/* Corrective Actions */}
              <div className="space-y-2.5 pt-3 border-t">
                <span className="text-[10.5px] font-bold text-[#8892A0] uppercase tracking-wider block">AI Recommended Corrective Actions</span>
                <div className="space-y-2">
                  {correctiveActions.map((action) => (
                    <div key={action.id} className="p-2.5 rounded-lg border bg-slate-50 flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="font-semibold text-[#0D1B2A]">{action.description}</p>
                        <div className="flex items-center gap-2 text-[10px] text-[#8892A0]">
                          <span>Owner: <strong className="text-[#1A6B8A]">{action.owner}</strong></span>
                          <span>•</span>
                          <span>Due: <strong className="font-mono">{action.due}</strong></span>
                        </div>
                      </div>
                      <Badge className="bg-red-50 text-red-700 border-red-100 text-[9.5px] font-mono shrink-0">
                        {action.priority}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3 border-t justify-end">
                {requiresRegulatoryNotification ? (
                  <Button 
                    onClick={handleNotification}
                    className="bg-[#C0392B] hover:bg-[#a93024] text-white font-bold h-9 text-xs"
                  >
                    Notify Regulator (DGMS Form-B)
                  </Button>
                ) : (
                  <div className="flex items-center gap-1.5 text-[#0F7B6C] bg-[#E3F4F2] px-3 py-1.5 rounded-lg border border-[#0F7B6C]/20 text-[11px] font-medium mr-auto">
                    <CheckCircle2 className="h-4.5 w-4.5" /> Below Regulatory Notification Limit
                  </div>
                )}
                
                <Button 
                  onClick={() => toast.success("Draft incident document saved.")} 
                  variant="outline"
                  className="h-9 text-xs"
                >
                  <FileText className="h-3.5 w-3.5 mr-1" /> Export Report
                </Button>
              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
