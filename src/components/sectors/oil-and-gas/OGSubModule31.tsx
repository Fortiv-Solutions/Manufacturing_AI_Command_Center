import { useState } from "react";
import { 
  Sparkles, FileText, CheckCircle2, Loader2, AlertCircle, 
  HelpCircle, Download, Check, RefreshCw, Plus, Trash2, Edit3
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface JsaStep {
  stepNo: number;
  activity: string;
  hazard: string;
  likelihood: number;
  severity: number;
  controls: string;
  reference: string;
  emergency: string;
}

export function OGSubModule31() {
  const [workDescription, setWorkDescription] = useState(
    "Acid job on Well No. 7, Well Pad B — matrix stimulation using 15% HCl. Duration: 6 hours. Personnel: 4. Location: onshore, Rajasthan"
  );
  const [workType, setWorkType] = useState("Chemical / Acid Work");
  const [location, setLocation] = useState("Well Pad B - Compressor Area");
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [isGenerated, setIsGenerated] = useState(true);
  
  // Edit state
  const [editingStepIndex, setEditingStepIndex] = useState<number | null>(null);
  const [editFields, setEditFields] = useState<JsaStep | null>(null);

  // Mock initial generated JSA
  const [jsaSteps, setJsaSteps] = useState<JsaStep[]>([
    {
      stepNo: 1,
      activity: "Site preparation and equipment staging",
      hazard: "Pressurised acid equipment — potential leak or spray",
      likelihood: 4,
      severity: 4,
      controls: "Full face shield + chemical-resistant gloves + apron mandatory. Cordon off 10m radius. Wind sock checked — upwind positioning only.",
      reference: "OISD-STD-105 Clause 7.2",
      emergency: "Eye wash station within 10m; SCBA on standby"
    },
    {
      stepNo: 2,
      activity: "Acid mixing and quality check",
      hazard: "Exothermic reaction — heat and fumes",
      likelihood: 3,
      severity: 3,
      controls: "Mixing only in ventilated area. SCBA on standby. Eye wash <10m. Temperature monitoring — abort if >45°C during mixing.",
      reference: "OISD-STD-189",
      emergency: "Emergency shower activation, call medical dispatch"
    },
    {
      stepNo: 3,
      activity: "Wellhead connection and pressure test",
      hazard: "High-pressure fluid — potential wellhead leak on connection",
      likelihood: 4,
      severity: 3,
      controls: "Pressure test to 1.5× MAWP before acid injection. All personnel behind blast shield during pressure test. PTW Hot Work endorsement required for all open-flame equipment nearby.",
      reference: "PESO Circular 2021-07",
      emergency: "Activate ESD (Emergency Shutdown), isolate wellhead"
    }
  ]);

  const [editLog, setEditLog] = useState<Array<{ field: string; time: string; user: string }>>([
    { field: "Initial Generation", time: "28 Oct 2025, 09:40", user: "Fortiv AI Engine" }
  ]);

  const genStepsTexts = [
    "Analyzing work activity context & chemicals...",
    "Identifying job steps and failure modes...",
    "Computing risk matrix (Likelihood × Severity)...",
    "Mapping applicable OISD & PESO standards...",
    "Drafting safety controls & emergency actions...",
    "Compiling final JSA document..."
  ];

  const handleGenerate = () => {
    if (!workDescription.trim()) {
      toast.error("Please enter a work description first.");
      return;
    }
    
    setIsGenerating(true);
    setGenStep(0);
    setIsGenerated(false);
    
    // Simulate generation stages
    const interval = setInterval(() => {
      setGenStep(prev => {
        if (prev >= genStepsTexts.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsGenerating(false);
            setIsGenerated(true);
            setEditLog([
              { field: "Regenerated Draft", time: new Date().toLocaleTimeString(), user: "Fortiv AI Engine" }
            ]);
            toast.success("AI JSA generated successfully!");
          }, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 600);
  };

  const getRiskScore = (l: number, s: number) => l * s;

  const getRiskLevel = (score: number) => {
    if (score >= 12) return { label: "CRITICAL", color: "bg-[#C0392B] text-white animate-pulse", border: "border-[#C0392B]" };
    if (score >= 8) return { label: "HIGH", color: "bg-[#C8922A] text-white", border: "border-[#C8922A]" };
    if (score >= 4) return { label: "MEDIUM", color: "bg-[#1A6B8A] text-white", border: "border-[#1A6B8A]" };
    return { label: "LOW", color: "bg-[#0F7B6C] text-white", border: "border-[#0F7B6C]" };
  };

  const startEdit = (index: number) => {
    setEditingStepIndex(index);
    setEditFields({ ...jsaSteps[index] });
  };

  const saveEdit = (index: number) => {
    if (!editFields) return;
    const updated = [...jsaSteps];
    updated[index] = editFields;
    setJsaSteps(updated);
    
    setEditLog(prev => [
      { field: `Edited Step ${index + 1}`, time: new Date().toLocaleTimeString(), user: "Rajesh Kumar (Site Supervisor)" },
      ...prev
    ]);
    
    setEditingStepIndex(null);
    setEditFields(null);
    toast.success(`Step ${index + 1} updated successfully.`);
  };

  const addStep = () => {
    const nextNo = jsaSteps.length + 1;
    const newStep: JsaStep = {
      stepNo: nextNo,
      activity: "New Task Step",
      hazard: "Unidentified Hazard",
      likelihood: 2,
      severity: 2,
      controls: "Standard operating procedures & PPE safety gear",
      reference: "OISD Guidelines",
      emergency: "Contact safety team"
    };
    setJsaSteps([...jsaSteps, newStep]);
    setEditLog(prev => [
      { field: `Added Step ${nextNo}`, time: new Date().toLocaleTimeString(), user: "Rajesh Kumar (Site Supervisor)" },
      ...prev
    ]);
    toast.success("New JSA step appended.");
  };

  const removeStep = (idx: number) => {
    const filtered = jsaSteps.filter((_, i) => i !== idx).map((step, i) => ({ ...step, stepNo: i + 1 }));
    setJsaSteps(filtered);
    setEditLog(prev => [
      { field: `Deleted Step ${idx + 1}`, time: new Date().toLocaleTimeString(), user: "Rajesh Kumar (Site Supervisor)" },
      ...prev
    ]);
    toast.success(`Step ${idx + 1} deleted.`);
  };

  const maxRiskScore = Math.max(...jsaSteps.map(s => getRiskScore(s.likelihood, s.severity)));
  const globalRisk = getRiskLevel(maxRiskScore);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Input Configuration Panel (40%) */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#C8922A]" />
            <h3 className="text-[15px] font-bold text-[#0D1B2A]">AI JSA Planner</h3>
          </div>
          
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Work Category</label>
              <select 
                value={workType} 
                onChange={(e) => setWorkType(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              >
                <option value="Hot Work">Hot Work (welding, cutting)</option>
                <option value="Confined Space Entry">Confined Space Entry</option>
                <option value="Chemical / Acid Work">Chemical / Acid Work</option>
                <option value="Height Work / Scaffolding">Height Work / Scaffolding</option>
                <option value="Electrical Isolation">Electrical Isolation</option>
                <option value="Excavation / Civil Work">Excavation / Civil Work</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Location / Node</label>
              <select 
                value={location} 
                onChange={(e) => setLocation(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              >
                <option value="Well Pad B - Compressor Area">Well Pad B - Compressor Area</option>
                <option value="Well Pad C - Drilling Platform">Well Pad C - Drilling Platform</option>
                <option value="Substation A">Substation A</option>
                <option value="Rajasthan Block RJ-ONN-2015/1">Rajasthan Block RJ-ONN-2015/1</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Work Description Narrative</label>
              <textarea 
                value={workDescription}
                onChange={(e) => setWorkDescription(e.target.value)}
                rows={4}
                placeholder="Describe the activity, personnel involved, and duration..."
                className="w-full rounded-lg border border-[#D1D9E3] bg-white p-3 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A] resize-none leading-relaxed"
              />
            </div>
          </div>

          <Button 
            onClick={handleGenerate}
            disabled={isGenerating}
            className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white font-semibold text-xs h-10 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Generating Draft...</span>
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                <span>Generate Safety JSA</span>
              </>
            )}
          </Button>
        </div>

        {/* Change / Audit Log */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-3">
          <h4 className="text-[12px] font-bold text-[#0D1B2A] uppercase tracking-wider text-[#1A6B8A]">JSA Modification Audit Trail</h4>
          <div className="space-y-2">
            {editLog.map((log, idx) => (
              <div key={idx} className="flex items-start justify-between text-[11px] border-b pb-2 last:border-none last:pb-0">
                <span className="font-medium text-[#0D1B2A]">{log.field}</span>
                <div className="text-right">
                  <p className="text-[#8892A0] font-mono">{log.time}</p>
                  <p className="text-[#1A6B8A] font-semibold text-[10px]">{log.user}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right JSA Form View (80%) */}
      <div className="lg:col-span-7">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col overflow-hidden h-full">
          
          {/* Header */}
          <div className="p-5 border-b border-[#D1D9E3] bg-white flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-50 text-[#1A6B8A] border-blue-100 font-mono text-[10.5px]">M3.1 JSA</Badge>
                <h3 className="text-[15px] font-bold text-[#0D1B2A]">Job Safety Analysis Document</h3>
              </div>
              <p className="text-[11px] text-[#8892A0] mt-1">
                Linked Activity: <span className="font-semibold text-[#0D1B2A]">{workType}</span> at <span className="font-semibold text-[#0D1B2A]">{location}</span>
              </p>
            </div>
            
            {isGenerated && (
              <Badge className={`${globalRisk.color} font-bold text-[11px] px-2.5 py-0.5 rounded-full border`}>
                Risk Level: {globalRisk.label}
              </Badge>
            )}
          </div>

          {/* Document Content */}
          <div className="p-5 bg-[#F5F6FA] flex-1 overflow-y-auto max-h-[500px]">
            {isGenerating ? (
              <div className="py-24 text-center space-y-4">
                <Loader2 className="h-10 w-10 text-[#C8922A] animate-spin mx-auto" />
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-[#0D1B2A]">{genStepsTexts[genStep]}</p>
                  <p className="text-[10px] text-[#8892A0]">Fortiv Safety AI Engine processing...</p>
                </div>
              </div>
            ) : isGenerated ? (
              <div className="space-y-4">
                {jsaSteps.map((step, idx) => (
                  <div key={idx} className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm space-y-3 relative group">
                    
                    {/* Step Title & Actions */}
                    <div className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center gap-2">
                        <span className="h-5 w-5 rounded-full bg-[#1A6B8A] text-white flex items-center justify-center font-mono text-[11px] font-bold">
                          {step.stepNo}
                        </span>
                        <h4 className="text-xs font-bold text-[#0D1B2A]">{step.activity}</h4>
                      </div>
                      
                      {editingStepIndex !== idx ? (
                        <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => startEdit(idx)} className="p-1 rounded hover:bg-slate-100 text-[#1A6B8A]" title="Edit Step">
                            <Edit3 className="h-3.5 w-3.5" />
                          </button>
                          <button onClick={() => removeStep(idx)} className="p-1 rounded hover:bg-slate-100 text-[#C0392B]" title="Remove Step">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : null}
                    </div>

                    {/* Step Content Details */}
                    {editingStepIndex === idx && editFields ? (
                      <div className="space-y-3 pt-1 text-xs">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-[#8892A0]">Activity</label>
                            <input 
                              type="text" 
                              value={editFields.activity} 
                              onChange={(e) => setEditFields({ ...editFields, activity: e.target.value })}
                              className="w-full h-8 border rounded px-2"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-[#8892A0]">Reg Reference</label>
                            <input 
                              type="text" 
                              value={editFields.reference} 
                              onChange={(e) => setEditFields({ ...editFields, reference: e.target.value })}
                              className="w-full h-8 border rounded px-2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-[#8892A0]">Likelihood (1-4)</label>
                            <input 
                              type="number" 
                              min={1} 
                              max={4}
                              value={editFields.likelihood} 
                              onChange={(e) => setEditFields({ ...editFields, likelihood: parseInt(e.target.value) || 1 })}
                              className="w-full h-8 border rounded px-2 font-mono"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-bold text-[#8892A0]">Severity (1-4)</label>
                            <input 
                              type="number" 
                              min={1} 
                              max={4}
                              value={editFields.severity} 
                              onChange={(e) => setEditFields({ ...editFields, severity: parseInt(e.target.value) || 1 })}
                              className="w-full h-8 border rounded px-2 font-mono"
                            />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-[#8892A0]">Identified Hazard</label>
                          <input 
                            type="text" 
                            value={editFields.hazard} 
                            onChange={(e) => setEditFields({ ...editFields, hazard: e.target.value })}
                            className="w-full h-8 border rounded px-2"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-[#8892A0]">Controls Required</label>
                          <textarea 
                            value={editFields.controls} 
                            onChange={(e) => setEditFields({ ...editFields, controls: e.target.value })}
                            rows={2}
                            className="w-full border rounded p-2 resize-none"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[10px] font-bold text-[#8892A0]">Emergency Action</label>
                          <input 
                            type="text" 
                            value={editFields.emergency} 
                            onChange={(e) => setEditFields({ ...editFields, emergency: e.target.value })}
                            className="w-full h-8 border rounded px-2"
                          />
                        </div>

                        <div className="flex justify-end gap-2 pt-1.5 border-t">
                          <Button onClick={() => setEditingStepIndex(null)} variant="outline" size="sm" className="h-7 text-[11px]">Cancel</Button>
                          <Button onClick={() => saveEdit(idx)} size="sm" className="h-7 bg-[#0F7B6C] text-white text-[11px]">Save Step</Button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-2 text-xs">
                        <div className="flex items-start justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider block">Identified Hazard</span>
                            <p className="text-[#0D1B2A] font-semibold">{step.hazard}</p>
                          </div>
                          
                          <div className="text-right shrink-0">
                            <span className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider block">Risk Rating</span>
                            <div className="flex items-center gap-1.5 mt-0.5 justify-end">
                              <span className="font-mono font-bold text-[11.5px]">{step.likelihood} × {step.severity} =</span>
                              <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${getRiskLevel(getRiskScore(step.likelihood, step.severity)).color}`}>
                                {getRiskScore(step.likelihood, step.severity)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-1 bg-[#F5F6FA] p-2.5 rounded-lg border border-[#D1D9E3]/50">
                          <span className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider block">Required Controls</span>
                          <p className="text-[#0D1B2A] leading-relaxed">{step.controls}</p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t text-[11px]">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8892A0]">Emergency:</span>
                            <span className="font-semibold text-[#C0392B]">{step.emergency}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#8892A0]">Standard:</span>
                            <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100 font-mono text-[9.5px]">
                              {step.reference}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <Button onClick={addStep} variant="outline" className="w-full border-dashed border-[#D1D9E3] hover:border-[#1A6B8A] text-xs h-9 flex items-center justify-center gap-1.5">
                  <Plus className="h-4 w-4" /> Add Custom Job Step
                </Button>
              </div>
            ) : (
              <div className="py-24 text-center space-y-3">
                <FileText className="h-12 w-12 text-[#D1D9E3] mx-auto" />
                <div>
                  <p className="text-xs font-semibold text-[#0D1B2A]">No JSA generated</p>
                  <p className="text-[10px] text-[#8892A0]">Configure work parameters and click "Generate Safety JSA".</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Bar */}
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10.5px] font-mono text-[#8892A0] text-center sm:text-left">
              * Approved JSAs auto-link to corresponding PTW workflow gates
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button 
                variant="outline" 
                disabled={!isGenerated || isGenerating}
                className="flex-1 sm:flex-none h-9 text-xs font-semibold"
                onClick={() => toast.success("JSA exported to PDF format successfully.")}
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Export PDF
              </Button>
              <Button 
                disabled={!isGenerated || isGenerating}
                onClick={() => {
                  toast.loading("Linking JSA to PTW approval ledger...");
                  setTimeout(() => {
                    toast.dismiss();
                    toast.success("JSA approved and successfully locked to Permit PTW-2025-1151.");
                  }, 1200);
                }}
                className="flex-1 sm:flex-none bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg"
              >
                <Check className="h-3.5 w-3.5 mr-1" /> Approve & Link Permit
              </Button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
