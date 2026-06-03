import { useState } from "react";
import { 
  Upload, FileText, CheckCircle2, Loader2, AlertCircle, 
  HelpCircle, ExternalLink, Download, Check, RefreshCw 
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface IngestItem {
  name: string;
  size: string;
  pages: number;
  status: "Extracted" | "Processing" | "Needs Review" | "Complete";
  type: string;
}

interface ExtractedField {
  category: string;
  key: string;
  value: string;
  confidence: number;
  source: string;
  flagged?: boolean;
  errorMsg?: string;
  resolved?: boolean;
}

export function OGSubModule21() {
  const [selectedDoc, setSelectedDoc] = useState("KG-DWN-98_3_Block_Lease_Agreement.pdf");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Document list
  const [documents, setDocuments] = useState<IngestItem[]>([
    { name: "KG-DWN-98_3_Block_Lease_Agreement.pdf", size: "4.8 MB", pages: 48, status: "Needs Review", type: "PDF" },
    { name: "CB-ONN-2010_1_Surface_Rights_2010.pdf", size: "2.1 MB", pages: 24, status: "Extracted", type: "PDF" },
    { name: "RJ-ONN-2015_1_Seismic_Contract.pdf", size: "1.4 MB", pages: 12, status: "Processing", type: "PDF" }
  ]);

  // Extracted fields for the selected document (KG-DWN-98/3)
  const [fields, setFields] = useState<ExtractedField[]>([
    { category: "Parties", key: "Lessor Name", value: "Government of India, MoPNG", confidence: 100, source: "Page 1, Preamble" },
    { category: "Parties", key: "Lessee Name", value: "Fortiv Energy India Ltd.", confidence: 100, source: "Page 1, Preamble" },
    { category: "Block Details", key: "Block ID", value: "KG-DWN-98/3", confidence: 100, source: "Page 1, Clause 1.1" },
    { category: "Block Details", key: "Location", value: "Krishna Godavari Basin, Offshore Deepwater", confidence: 99, source: "Page 2, Schedule A" },
    { category: "Block Details", key: "Acreage", value: "3,288 sq km", confidence: 97, source: "Page 3, Table 1" },
    { category: "Term & Phases", key: "Effective Date", value: "15 March 1998", confidence: 100, source: "Page 1, Clause 2.1" },
    { category: "Term & Phases", key: "Phase 1 duration", value: "3 years", confidence: 99, source: "Page 5, Clause 3.2" },
    { category: "Term & Phases", key: "Phase 2 duration", value: "2 years", confidence: 98, source: "Page 5, Clause 3.3" },
    { category: "Term & Phases", key: "Development Period", value: "25 years on commercial discovery", confidence: 96, source: "Page 6, Clause 4.2" },
    { category: "Financial", key: "Royalty (Crude)", value: "10% — deepwater rate", confidence: 99, source: "Page 11, Clause 7.1" },
    { category: "Financial", key: "Royalty (Gas)", value: "10% — deepwater rate", confidence: 99, source: "Page 11, Clause 7.1" },
    { category: "Financial", key: "Cost Recovery Cap", value: "90%", confidence: 97, source: "Page 18, Clause 8.4" },
    { category: "Financial", key: "Surface Rental", value: "", confidence: 61, source: "Page 12, Clause 7.5", flagged: true, errorMsg: "Figure illegible in scanned document" },
    { category: "Work Programme", key: "Phase 1 Well Commitment", value: "2 wells minimum", confidence: 98, source: "Page 9, Clause 5.3" },
    { category: "Work Programme", key: "Seismic Commitment", value: "500 sq km 3D seismic", confidence: 96, source: "Page 9, Clause 5.2" },
    { category: "Assignment", key: "Assignment Rights", value: "Prior GOI approval required", confidence: 99, source: "Page 31, Clause 14.1" },
    { category: "Dispute Resolution", key: "Governing Law", value: "", confidence: 68, source: "Page 37, Clause 19.1", flagged: true, errorMsg: "Clause text partially obscured by stamp" },
    { category: "Dispute Resolution", key: "Arbitration Seat", value: "", confidence: 72, source: "Page 38, Clause 19.2", flagged: true, errorMsg: "Arbitration seat requires verification" }
  ]);

  // Input states for resolving flagged fields
  const [resolutions, setResolutions] = useState<Record<string, string>>({
    "Surface Rental": "",
    "Governing Law": "",
    "Arbitration Seat": ""
  });

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const newDoc: IngestItem = {
        name: file.name,
        size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 30) + 10,
        status: "Processing",
        type: "PDF"
      };

      setDocuments(prev => [newDoc, ...prev]);
      setIsUploading(true);
      setUploadProgress(0);

      toast.info(`Uploading lease document ${file.name}...`);

      const interval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsUploading(false);
            setDocuments(prevList => 
              prevList.map(d => d.name === file.name ? { ...d, status: "Needs Review" } : d)
            );
            toast.success(`${file.name} uploaded. OCR completed with 3 flagged fields.`);
            return 100;
          }
          return prev + 25;
        });
      }, 500);
    }
  };

  const handleResolveField = (fieldName: string) => {
    const enteredValue = resolutions[fieldName];
    if (!enteredValue) {
      toast.error(`Please enter a valid resolution value for ${fieldName}.`);
      return;
    }

    setFields(prev => 
      prev.map(f => f.key === fieldName ? {
        ...f,
        value: enteredValue,
        flagged: false,
        confidence: 100,
        source: "Manually verified by Compliance Legal Auditor"
      } : f)
    );

    toast.success(`${fieldName} successfully verified and saved.`);
  };

  const getConfidenceStyle = (score: number) => {
    if (score >= 95) return "text-[#0F7B6C] bg-[#E3F4F2] border-[#0F7B6C]/20";
    if (score >= 85) return "text-[#1A6B8A] bg-blue-50 border-blue-200";
    if (score >= 70) return "text-[#C8922A] bg-[#FDF3E3] border-[#C8922A]/20";
    return "text-[#C0392B] bg-[#FDECEA] border-[#C0392B]/20";
  };

  const totalFields = fields.length;
  const needReview = fields.filter(f => f.flagged).length;
  const countFilled = fields.filter(f => f.value !== "").length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left Column - Ingestion Queue (35%) */}
      <div className="lg:col-span-4 space-y-6 flex flex-col">
        {/* Upload Zone Card */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-[14px] font-bold text-[#0D1B2A]">Ingestion Portal</h3>
            <p className="text-[11px] text-[#8892A0]">Drop scanned lease agreements, PSCs, or RSC contracts.</p>
          </div>

          <div className="border border-dashed border-[#D1D9E3] bg-[#F5F6FA] hover:bg-slate-50 transition-colors rounded-xl p-5 text-center cursor-pointer relative">
            <input 
              type="file" 
              accept=".pdf,.tiff,.jpeg,.jpg,.doc,.docx"
              onChange={handleFileUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Upload className="h-6 w-6 text-[#1A6B8A] mx-auto mb-2" />
            <p className="text-[11.5px] font-semibold text-[#0D1B2A]">Upload scanned PDF agreements</p>
            <p className="text-[9.5px] text-[#8892A0] mt-0.5">Supports high-sensitivity legacy OCR</p>
          </div>

          {isUploading && (
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[10.5px] text-[#1A6B8A] font-medium">
                <span>Ingesting file...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-1 bg-[#F5F6FA]" />
            </div>
          )}
        </div>

        {/* Document Ingestion Queue */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm flex-1 flex flex-col space-y-3">
          <div className="flex items-center justify-between border-b pb-2 mb-1">
            <h4 className="text-[12.5px] font-bold text-[#0D1B2A] uppercase tracking-wider font-mono">Lease Documents</h4>
            <span className="text-[10px] font-mono text-[#8892A0]">{documents.length} Files</span>
          </div>

          <div className="space-y-2.5 overflow-y-auto max-h-[350px] flex-1">
            {documents.map((doc, idx) => (
              <div 
                key={idx}
                onClick={() => {
                  if (doc.status !== "Processing") {
                    setSelectedDoc(doc.name);
                  }
                }}
                className={`p-3 rounded-xl border transition-all cursor-pointer flex flex-col gap-2 ${
                  selectedDoc === doc.name 
                    ? "bg-slate-50 border-[#C8922A] shadow-xs" 
                    : "bg-white border-[#D1D9E3] hover:bg-[#F5F6FA]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <FileText className="h-4.5 w-4.5 text-[#1A6B8A] shrink-0" />
                    <span className="text-[12px] font-medium text-[#0D1B2A] truncate" title={doc.name}>
                      {doc.name}
                    </span>
                  </div>
                  
                  {doc.status === "Needs Review" && (
                    <Badge className="bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 text-[9px] font-bold px-2 py-0.25 rounded-full shrink-0">
                      Needs Review
                    </Badge>
                  )}
                  {doc.status === "Extracted" && (
                    <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 text-[9px] font-bold px-2 py-0.25 rounded-full shrink-0">
                      Extracted
                    </Badge>
                  )}
                  {doc.status === "Processing" && (
                    <Badge className="bg-amber-50 text-[#C8922A] border-[#C8922A]/20 text-[9px] font-bold px-2 py-0.25 rounded-full shrink-0">
                      <Loader2 className="h-2.5 w-2.5 animate-spin mr-1 inline" /> OCR Ingest
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between text-[10px] text-[#8892A0] font-mono border-t pt-1.5 border-dashed">
                  <span>{doc.size}</span>
                  <span>{doc.pages > 0 ? `${doc.pages} pages` : "Sheets"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Extracted Term Viewer (65%) */}
      <div className="lg:col-span-8 flex flex-col">
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm flex flex-col h-full overflow-hidden">
          {/* Header */}
          <div className="p-5 border-b border-[#D1D9E3] bg-white space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="text-[14px] font-bold text-[#0D1B2A]">{selectedDoc}</h3>
                <p className="text-[11.5px] text-[#8892A0]">
                  Category: <span className="font-semibold text-[#1A6B8A]">Production Sharing Contract</span> • Status: <span className="font-semibold text-[#1A6B8A]">Needs Review</span>
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                {needReview > 0 ? (
                  <Badge className="bg-[#FDECEA] border-[#C0392B]/20 text-[#C0392B] text-[11px] font-medium px-2.5 py-0.5 rounded-full animate-pulse">
                    <AlertCircle className="h-3.5 w-3.5 mr-1" /> {needReview} anomalies to review
                  </Badge>
                ) : (
                  <Badge className="bg-[#E3F4F2] border-[#0F7B6C]/20 text-[#0F7B6C] text-[11px] font-medium px-2.5 py-0.5 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> 100% Verified
                  </Badge>
                )}
              </div>
            </div>

            {/* Confidence Banner */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-medium">
                <span className="text-[#8892A0]">OCR Extraction Coverage</span>
                <span className="font-mono text-[#0D1B2A] font-bold">
                  {countFilled}/{totalFields} fields complete ({Math.round((countFilled/totalFields)*100)}%)
                </span>
              </div>
              <Progress 
                value={(countFilled / totalFields) * 100} 
                className="h-1.5 bg-[#F5F6FA] [&>[data-state=complete]]:bg-[#0F7B6C]" 
              />
            </div>
          </div>

          {/* Extracted Fields Grid */}
          <div className="p-5 overflow-y-auto max-h-[440px] bg-[#F5F6FA] flex-1">
            <TooltipProvider delayDuration={150}>
              <div className="space-y-4 font-sans text-xs">
                {/* Group fields by Category */}
                {Array.from(new Set(fields.map(f => f.category))).map(cat => (
                  <div key={cat} className="space-y-2">
                    <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider border-b pb-1 font-mono">{cat}</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {fields.filter(f => f.category === cat).map((field, idx) => (
                        <div 
                          key={idx}
                          className={`p-3 rounded-xl border bg-white flex flex-col justify-between gap-2 transition-all hover:shadow-xs ${
                            field.flagged 
                              ? "border-[#C0392B]/30 bg-[#FDECEA]/20" 
                              : "border-[#D1D9E3] hover:border-[#0F7B6C]/30"
                          }`}
                        >
                          <div className="flex items-start justify-between gap-1.5">
                            <span className="font-semibold text-[#0D1B2A] text-[11.5px]">{field.key}</span>
                            
                            {!field.flagged ? (
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Badge className={`border text-[9px] font-mono font-medium px-1.5 py-0 rounded-sm hover:opacity-90 ${getConfidenceStyle(field.confidence)}`}>
                                    {field.confidence}%
                                  </Badge>
                                </TooltipTrigger>
                                <TooltipContent className="bg-[#0D1B2A] border-none text-white text-[10px] p-2.5 rounded-lg shadow-lg">
                                  <div className="space-y-1">
                                    <p className="font-bold text-[#C8922A]">AI OCR Mapping Source</p>
                                    <p className="text-slate-300 font-mono">{field.source}</p>
                                  </div>
                                </TooltipContent>
                              </Tooltip>
                            ) : (
                              <Badge className="bg-[#FDECEA] border-[#C0392B]/20 text-[#C0392B] text-[9.5px] font-bold px-1.5 py-0 rounded-sm">
                                Review
                              </Badge>
                            )}
                          </div>

                          <div className="min-w-0">
                            {field.flagged ? (
                              <div className="space-y-2">
                                <p className="text-[10px] font-medium text-[#C0392B] flex items-center gap-1 font-mono">
                                  <AlertCircle className="h-3 w-3 shrink-0" /> {field.errorMsg}
                                </p>
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="text"
                                    placeholder="Verify and enter value..."
                                    value={resolutions[field.key] || ""}
                                    onChange={(e) => {
                                      const val = e.target.value;
                                      setResolutions(prev => ({ ...prev, [field.key]: val }));
                                    }}
                                    className="h-8 flex-1 rounded-md border border-[#C0392B]/50 bg-white px-2.5 text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C0392B]"
                                  />
                                  <Button 
                                    onClick={() => handleResolveField(field.key)}
                                    size="sm"
                                    className="h-8 bg-[#0F7B6C] hover:bg-[#0c6256] text-white px-2.5 rounded-md"
                                  >
                                    <Check className="h-4 w-4" />
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex items-center justify-between gap-2 bg-[#F5F6FA] p-2 rounded-lg border">
                                <span className="font-mono font-semibold text-[#0D1B2A] text-[11px] truncate">
                                  {field.value}
                                </span>
                                <span className="text-[9.5px] text-[#1A6B8A] font-mono font-medium flex items-center shrink-0 ml-1">
                                  {field.source.split(",")[0]}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TooltipProvider>
          </div>

          {/* Action Footer */}
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-[10px] font-mono text-[#8892A0]">
              * Commits structural terms to the global obligation calendar
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                disabled={needReview > 0}
                className="flex-1 sm:flex-none border-[#D1D9E3] text-[#0D1B2A] font-semibold text-xs h-9 rounded-lg hover:bg-slate-50"
                onClick={() => toast.success("Drafting re-review ticket for the Land Dept...")}
              >
                <RefreshCw className="h-3.5 w-3.5 mr-1" /> Flag for Re-review
              </Button>
              <Button 
                disabled={needReview > 0}
                onClick={() => {
                  toast.success("Structural lease terms saved! Obligation calendar and anomaly registers updated.");
                }}
                className="flex-1 sm:flex-none bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs h-9 rounded-lg shadow-sm flex items-center justify-center gap-1 transition-all"
              >
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" /> Add to Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
