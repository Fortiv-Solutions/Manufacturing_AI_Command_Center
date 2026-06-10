import { useState } from "react";
import {
  Upload,
  FileText,
  CheckCircle2,
  Loader2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  Download,
  Send,
  Check,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface DocumentItem {
  name: string;
  size: string;
  pages: number;
  status: "Ready" | "Processing" | "Failed";
  type: string;
}

interface FormField {
  id: string;
  label: string;
  value: string;
  source: string;
  confidence: number; // percentage
  status: "success" | "warning" | "danger" | "info";
  flagged?: boolean;
  errorMsg?: string;
}

export function OGSubModule11() {
  const [selectedForm, setSelectedForm] = useState("PNGRB Monthly Production Report");
  const [selectedPeriod, setSelectedPeriod] = useState("Oct 2025");
  const [isPopulating, setIsPopulating] = useState(false);
  const [populateProgress, setPopulateProgress] = useState(0);
  const [populateStep, setPopulateStep] = useState("");
  const [isPopulated, setIsPopulated] = useState(true);

  // Document list state
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      name: "Oct_2025_Production_Summary_XYZ07.pdf",
      size: "3.2 MB",
      pages: 12,
      status: "Ready",
      type: "PDF",
    },
    {
      name: "Oct_2025_DDR_Consolidated_XYZ07.xlsx",
      size: "1.8 MB",
      pages: 0,
      status: "Ready",
      type: "Excel",
    },
    {
      name: "Oct_2025_Well_Test_Report_W3.pdf",
      size: "840 KB",
      pages: 4,
      status: "Processing",
      type: "PDF",
    },
  ]);

  // Form Fields state
  const [formFields, setFormFields] = useState<FormField[]>([
    {
      id: "Field 1A",
      label: "Operator Name",
      value: "Fortiv Energy India Ltd.",
      source: "Page 1, Header Block, Confidence: 100%",
      confidence: 100,
      status: "success",
    },
    {
      id: "Field 1B",
      label: "Reporting Block ID",
      value: "Block XYZ-07",
      source: "Page 1, Header Block, Confidence: 100%",
      confidence: 100,
      status: "success",
    },
    {
      id: "Field 3A",
      label: "Crude Oil Production (bbl)",
      value: "48,340",
      source: "Page 2, Para 3, Confidence: 99%",
      confidence: 99,
      status: "success",
    },
    {
      id: "Field 7B",
      label: "Gas Flared (MMSCFD)",
      value: "2.1",
      source: "Page 4, Table 1, Confidence: 98%",
      confidence: 98,
      status: "success",
    },
    {
      id: "Field 9C",
      label: "Active Producer Wells Count",
      value: "14",
      source: "Page 1, Summary Section, Confidence: 100%",
      confidence: 100,
      status: "success",
    },
    {
      id: "Field 10D",
      label: "Shut-in Wells Count",
      value: "2",
      source: "Page 1, Summary Section, Confidence: 100%",
      confidence: 100,
      status: "success",
    },
    {
      id: "Field 11E",
      label: "Water Injected Volume (bbl)",
      value: "18,200",
      source: "Page 3, Section 4, Confidence: 97%",
      confidence: 97,
      status: "success",
    },
    {
      id: "Field 12A",
      label: "Avg Water Injection Pressure (psi)",
      value: "2,400",
      source: "Page 3, Section 4, Confidence: 95%",
      confidence: 95,
      status: "success",
    },
    {
      id: "Field 12F",
      label: "Water Disposal Volume (bbl)",
      value: "",
      source: "",
      confidence: 0,
      status: "danger",
      flagged: true,
      errorMsg: "Water disposal volume missing from source document",
    },
  ]);

  const [field12FInput, setField12FInput] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newDoc: DocumentItem = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 10) + 1,
        status: "Processing",
        type: file.name.split(".").pop()?.toUpperCase() || "PDF",
      };

      setDocuments((prev) => [newDoc, ...prev]);

      toast.info(`Uploading ${file.name}...`);

      // Simulate processing
      setTimeout(() => {
        setDocuments((prev) =>
          prev.map((d) => (d.name === file.name ? { ...d, status: "Ready" } : d)),
        );
        toast.success(`${file.name} uploaded and parsed by AI Document Intelligence.`);
      }, 3000);
    }
  };

  const startAutoPopulation = () => {
    setIsPopulating(true);
    setPopulateProgress(0);
    setIsPopulated(false);

    const steps = [
      { progress: 15, text: "Connecting to document parser API..." },
      { progress: 40, text: "Reading documents & executing OCR engine..." },
      { progress: 65, text: "Applying NLP entity recognition models..." },
      { progress: 85, text: "Converting units and mapping fields to template..." },
      { progress: 100, text: "Auto-population complete! Submitting for review." },
    ];

    steps.forEach((step, idx) => {
      setTimeout(
        () => {
          setPopulateProgress(step.progress);
          setPopulateStep(step.text);

          if (step.progress === 100) {
            setTimeout(() => {
              setIsPopulating(false);
              setIsPopulated(true);
              toast.success("Regulatory Form populated successfully. 1 field flagged for review.");
            }, 800);
          }
        },
        (idx + 1) * 1000,
      );
    });
  };

  const handleResolveFlag = () => {
    if (!field12FInput) {
      toast.error("Please enter a value for the water disposal volume.");
      return;
    }

    setFormFields((prev) =>
      prev.map((f) =>
        f.id === "Field 12F"
          ? {
              ...f,
              value: field12FInput,
              flagged: false,
              status: "success",
              confidence: 100,
              source: "Manually entered by compliance reviewer",
            }
          : f,
      ),
    );
    toast.success("Field 12F updated. Form is now 100% complete and ready for submission.");
  };

  const getConfidenceColor = (score: number) => {
    if (score >= 95) return "text-[#0F7B6C] bg-[#E3F4F2] border-[#0F7B6C]/20";
    if (score >= 85) return "text-[#1A6B8A] bg-blue-50 border-blue-200";
    if (score >= 70) return "text-[#C8922A] bg-[#FDF3E3] border-[#C8922A]/20";
    return "text-[#C0392B] bg-[#FDECEA] border-[#C0392B]/20";
  };

  const getConfidenceText = (score: number) => {
    if (score >= 95) return "High";
    if (score >= 85) return "Good";
    if (score >= 70) return "Review Recommended";
    return "Low Confidence";
  };

  const countFilled = formFields.filter((f) => f.value !== "").length;
  const needReview = formFields.filter((f) => f.flagged).length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Control bar + documents (40%) */}
      <div className="lg:col-span-5 space-y-6 flex flex-col">
        {/* Control Bar Card */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[15px] font-semibold text-[#0D1B2A]">
              Form & Period Configuration
            </h3>
            <p className="text-[11.5px] text-[#8892A0]">
              Select the target regulatory report to auto-populate.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-[#1A6B8A] uppercase tracking-wider">
                Regulatory Form
              </label>
              <select
                value={selectedForm}
                onChange={(e) => setSelectedForm(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              >
                <option value="PNGRB Monthly Production Report">PNGRB Monthly Template</option>
                <option value="DGH W-10 Monthly Well Data Return">DGH W-10 Return</option>
                <option value="OISD-STD-189 Safety Return">OISD-STD-189 Return</option>
                <option value="MoEFCC Form-V Environmental Statement">MoEFCC Form-V</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-semibold text-[#1A6B8A] uppercase tracking-wider">
                Filing Period
              </label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              >
                <option value="Oct 2025">Oct 2025</option>
                <option value="Nov 2025">Nov 2025</option>
                <option value="Dec 2025">Dec 2025</option>
              </select>
            </div>
          </div>

          <Button
            onClick={startAutoPopulation}
            disabled={isPopulating}
            className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white font-medium text-xs h-10 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all mt-2"
          >
            {isPopulating ? (
              <>
                <Loader2 className="h-4.5 w-4.5 animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <FileText className="h-4.5 w-4.5" />
                <span>Auto-populate from documents</span>
              </>
            )}
          </Button>
        </div>

        {/* Upload Zone & Documents List */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm flex-1 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-[14px] font-bold text-[#0D1B2A]">Source Documents</h3>
            <span className="text-[11px] font-mono text-[#8892A0]">{documents.length} Files</span>
          </div>

          {/* Drag & Drop Area */}
          <div className="border border-dashed border-[#D1D9E3] bg-[#F5F6FA] hover:bg-slate-50 transition-colors rounded-xl p-6 text-center cursor-pointer relative">
            <input
              type="file"
              accept=".pdf,.xlsx,.xls,.doc,.docx"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="h-6 w-6 text-[#1A6B8A] mx-auto mb-2" />
            <p className="text-[12px] font-semibold text-[#0D1B2A]">
              Drag & drop operational reports here
            </p>
            <p className="text-[10px] text-[#8892A0] mt-1">Supports PDF, Word, Excel up to 10MB</p>
          </div>

          {/* Ingested Documents List */}
          <div className="space-y-2.5 overflow-y-auto max-h-[280px] flex-1">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl border border-[#D1D9E3] bg-white hover:bg-[#F5F6FA] transition-colors"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-blue-50 text-[#1A6B8A]">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[12px] font-medium text-[#0D1B2A] truncate" title={doc.name}>
                      {doc.name}
                    </p>
                    <p className="text-[10px] text-[#8892A0] font-mono mt-0.5">
                      {doc.size} {doc.pages > 0 && `• ${doc.pages} pages`}
                    </p>
                  </div>
                </div>

                {doc.status === "Ready" && (
                  <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 text-[10px] font-medium px-2 py-0.5 rounded-full hover:bg-[#E3F4F2]">
                    <CheckCircle2 className="h-3 w-3 mr-1 shrink-0" /> Ready
                  </Badge>
                )}
                {doc.status === "Processing" && (
                  <Badge className="bg-amber-50 text-[#C8922A] border-[#C8922A]/20 text-[10px] font-medium px-2 py-0.5 rounded-full hover:bg-amber-50">
                    <Loader2 className="h-3 w-3 mr-1 animate-spin shrink-0" /> Processing
                  </Badge>
                )}
                {doc.status === "Failed" && (
                  <Badge className="bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 text-[10px] font-medium px-2 py-0.5 rounded-full hover:bg-[#FDECEA]">
                    <AlertCircle className="h-3 w-3 mr-1 shrink-0" /> Failed
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Active Form View (60%) */}
      <div className="lg:col-span-7 flex flex-col">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col h-full overflow-hidden">
          {/* Form Header */}
          <div className="p-5 border-b border-[#D1D9E3] bg-white space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
              <div>
                <h3 className="text-[15px] font-bold text-[#0D1B2A] tracking-tight">
                  {selectedForm}
                </h3>
                <p className="text-[11.5px] text-[#8892A0]">
                  Authority: <span className="font-semibold text-[#1A6B8A]">PNGRB</span> • Period:{" "}
                  <span className="font-semibold text-[#1A6B8A]">{selectedPeriod}</span>
                </p>
              </div>

              {isPopulated && (
                <div className="flex items-center gap-1.5 shrink-0">
                  {needReview > 0 ? (
                    <Badge className="bg-[#FDECEA] border-[#C0392B]/20 text-[#C0392B] text-[11px] font-medium px-2.5 py-0.5 rounded-full animate-pulse">
                      <AlertCircle className="h-3.5 w-3.5 mr-1" /> 1 field needs review
                    </Badge>
                  ) : (
                    <Badge className="bg-[#E3F4F2] border-[#0F7B6C]/20 text-[#0F7B6C] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Approved & Clean
                    </Badge>
                  )}
                </div>
              )}
            </div>

            {/* Progress Bar */}
            {isPopulating ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] font-medium text-[#8892A0]">
                  <span>{populateStep}</span>
                  <span className="font-mono text-[#0D1B2A]">{populateProgress}%</span>
                </div>
                <Progress value={populateProgress} className="h-1.5 bg-[#F5F6FA]" />
              </div>
            ) : isPopulated ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11.5px] font-medium">
                  <span className="text-[#8892A0]">Form population status</span>
                  <span className="font-mono text-[#0D1B2A] font-semibold">
                    {countFilled}/{formFields.length} fields populated (
                    {Math.round((countFilled / formFields.length) * 100)}%)
                  </span>
                </div>
                <Progress
                  value={(countFilled / formFields.length) * 100}
                  className={`h-1.5 bg-[#F5F6FA] [&>[data-state=complete]]:bg-[#0F7B6C]`}
                />
              </div>
            ) : null}
          </div>

          {/* Active Prefilled Form Template Scroll Area */}
          <div className="p-5 overflow-y-auto max-h-[460px] bg-[#F5F6FA] flex-1">
            <TooltipProvider delayDuration={150}>
              <div className="rounded-xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4 font-sans text-xs">
                <div className="text-center border-b pb-4 mb-4 space-y-1">
                  <p className="font-bold uppercase tracking-wider text-[10.5px] text-[#8892A0]">
                    Government of India
                  </p>
                  <p className="font-bold text-[13px] text-[#0D1B2A]">
                    Petroleum and Natural Gas Regulatory Board
                  </p>
                  <p className="text-[10px] text-[#8892A0] italic">
                    Form I: Monthly Field Production and Operational Return
                  </p>
                </div>

                {!isPopulated && !isPopulating ? (
                  <div className="py-20 text-center space-y-3">
                    <FileText className="h-12 w-12 text-[#D1D9E3] mx-auto" />
                    <div>
                      <p className="text-[13px] font-semibold text-[#0D1B2A]">
                        Form template not populated
                      </p>
                      <p className="text-[11px] text-[#8892A0] mt-1">
                        Upload operational summaries and click "Auto-populate from documents".
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    {formFields.map((field) => (
                      <div
                        key={field.id}
                        className={`flex flex-col md:flex-row md:items-center justify-between p-3 rounded-xl border transition-all ${
                          field.flagged
                            ? "bg-[#FDECEA] border-[#C0392B]/30 hover:border-[#C0392B]"
                            : "bg-[#E3F4F2]/30 border-[#D1D9E3] hover:border-[#0F7B6C]/40"
                        }`}
                      >
                        <div className="space-y-0.5 md:max-w-[45%]">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono font-bold text-[#1A6B8A] bg-blue-50 px-1.5 py-0.5 rounded text-[10px] border border-blue-100">
                              {field.id}
                            </span>
                            <span className="font-semibold text-[#0D1B2A] text-[11.5px]">
                              {field.label}
                            </span>
                          </div>

                          {field.flagged && (
                            <p className="text-[10px] font-medium text-[#C0392B] flex items-center gap-1 mt-1 font-mono">
                              <AlertCircle className="h-3 w-3 shrink-0" /> {field.errorMsg}
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-3 mt-2.5 md:mt-0 min-w-0">
                          {field.flagged ? (
                            <div className="flex items-center gap-2 w-full">
                              <input
                                type="text"
                                placeholder="Enter value manually..."
                                value={field12FInput}
                                onChange={(e) => setField12FInput(e.target.value)}
                                className="h-8 w-44 rounded-md border border-[#C0392B] bg-white px-2 text-xs font-mono text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
                              />
                              <Button
                                onClick={handleResolveFlag}
                                size="sm"
                                className="h-8 bg-[#0F7B6C] hover:bg-[#0c6256] text-white px-2.5 rounded-md"
                              >
                                <Check className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <div className="h-8 min-w-[120px] max-w-[200px] border border-[#0F7B6C]/20 bg-[#E3F4F2]/50 hover:bg-[#E3F4F2] cursor-help px-3 rounded-lg flex items-center justify-between transition-colors">
                                  <span className="font-mono font-bold text-[#0D1B2A] text-[12px] truncate">
                                    {field.value}
                                  </span>
                                  <HelpCircle className="h-3 w-3 text-[#0F7B6C] shrink-0 ml-1.5" />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                className="bg-[#0D1B2A] border-none text-white max-w-[280px] p-3 rounded-lg shadow-lg"
                              >
                                <div className="space-y-1 text-[11px] font-sans">
                                  <p className="font-bold text-[#C8922A]">AI Source Mapping Info</p>
                                  <p className="leading-relaxed text-slate-300">{field.source}</p>
                                  <div className="flex items-center gap-1.5 mt-2 border-t border-slate-700 pt-1.5">
                                    <span className="text-[10px] text-slate-400 font-mono">
                                      Confidence Level:
                                    </span>
                                    <span
                                      className={`text-[10px] font-mono px-1 rounded-sm ${getConfidenceColor(field.confidence)}`}
                                    >
                                      {field.confidence}% ({getConfidenceText(field.confidence)})
                                    </span>
                                  </div>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          )}

                          {!field.flagged && (
                            <div className="hidden sm:flex items-center justify-center p-1.5 rounded-full bg-[#E3F4F2] text-[#0F7B6C] shrink-0 border border-[#0F7B6C]/10">
                              <Check className="h-3.5 w-3.5" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </TooltipProvider>
          </div>

          {/* Form Footer Action Bar */}
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10.5px] font-mono text-[#8892A0]">
              * Submission requires digital signature auth
            </span>
            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              <Button
                variant="outline"
                disabled={!isPopulated || isPopulating}
                className="flex-1 sm:flex-none border-[#D1D9E3] text-[#0D1B2A] font-semibold text-xs h-9 rounded-lg hover:bg-slate-50 transition-colors"
                onClick={() => toast.success("Draft exported as PDF successfully.")}
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Export PDF
              </Button>
              <Button
                disabled={!isPopulated || isPopulating || needReview > 0}
                onClick={() => {
                  toast.loading("Submitting filing to DGH/PNGRB regulator portal...");
                  setTimeout(() => {
                    toast.dismiss();
                    toast.success(
                      "Filing successfully transmitted to PNGRB portal! Portal Transaction ID: TXN-PNGRB-2025-0982.",
                    );
                  }, 1500);
                }}
                className="flex-1 sm:flex-none bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg shadow-sm flex items-center justify-center gap-1 transition-all"
              >
                <Send className="h-3.5 w-3.5 mr-1" /> Push to Portal
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
