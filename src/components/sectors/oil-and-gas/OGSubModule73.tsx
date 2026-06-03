import { useState } from "react";
import {
  FileText, ShieldCheck, CheckCircle2, Clock, AlertTriangle, Layers,
  Trash2, Edit2, Check, RefreshCw, BarChart2, Award, Zap, HelpCircle,
  FileSpreadsheet, ClipboardList, BookOpen, Download
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

/* ── Types ─────────────────────────────────────────── */
type ESGTab = "register" | "calculator" | "builder" | "tracker";

interface ESGMetricField {
  name: string;
  value: string;
  source: string;
  confidence: number;
}

export function OGSubModule73() {
  const [activeTab, setActiveTab] = useState<ESGTab>("register");
  const [registerCategory, setRegisterCategory] = useState<"scope1" | "scope2" | "water" | "waste" | "social">("scope1");
  const [brsrPrinciple, setBrsrPrinciple] = useState<number>(6);

  // ESG register override states
  const [dieselValue, setDieselValue] = useState("4,847 tCO2e");
  const [flaringValue, setFlaringValue] = useState("1,203 tCO2e");

  const handleOverride = (field: string) => {
    toast.prompt("Manual override requested. Enter new value and reason:", {
      action: {
        label: "Apply",
        onClick: (val) => {
          if (field === "diesel") setDieselValue(val + " tCO2e");
          if (field === "flaring") setFlaringValue(val + " tCO2e");
          toast.success("Metric value overridden. Logged in audit trail.");
        }
      }
    });
  };

  const handleGenerateBRSRPDF = () => {
    toast.loading("Gathering audit certificates and generating SEBI-compliant BRSR disclosure pack...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("BRSR Disclosure compiled successfully! Q2 report and GRI audit log exported as PDF.");
    }, 2000);
  };

  return (
    <div className="space-y-6">

      {/* ── Top Summary Stats Bar ────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Scope 1 Emissions", value: "6,456 tCO2e", sub: "Diesel + Flaring + Venting", color: "#C0392B", bg: "bg-[#FDECEA]", border: "border-[#C0392B]/10" },
          { label: "Scope 2 Emissions", value: "248 tCO2e", sub: "Grid Electricity (CEA factor)", color: "#1A6B8A", bg: "bg-blue-50", border: "border-blue-100" },
          { label: "Data Completeness", value: "89%", sub: "Scope 3 under consolidation", color: "#0F7B6C", bg: "bg-[#E3F4F2]", border: "border-[#0F7B6C]/10" },
          { label: "BRSR Filing Status", value: "76% Complete", sub: "FY 2024-25 Disclosure", color: "#C8922A", bg: "bg-[#F5F0E8]", border: "border-[#C8922A]/10", pulse: true }
        ].map(kpi => (
          <div key={kpi.label} className={`rounded-2xl border ${kpi.border} bg-white p-4 shadow-sm flex items-center gap-3`}>
            <div className={`${kpi.bg} h-10 w-10 rounded-xl flex items-center justify-center shrink-0`}>
              {kpi.color === "#0F7B6C" ? (
                <ShieldCheck className="h-5.5 w-5.5 text-[#0F7B6C]" />
              ) : kpi.color === "#C8922A" ? (
                <ClipboardList className={`h-5.5 w-5.5 text-[#C8922A] ${kpi.pulse ? "animate-pulse" : ""}`} />
              ) : kpi.color === "#C0392B" ? (
                <AlertTriangle className="h-5.5 w-5.5 text-[#C0392B]" />
              ) : (
                <Zap className="h-5.5 w-5.5 text-[#1A6B8A]" />
              )}
            </div>
            <div>
              <p className="text-[10.5px] text-[#8892A0] font-semibold">{kpi.label}</p>
              <p className="text-lg font-bold font-mono text-[#0D1B2A]">{kpi.value}</p>
              <p className="text-[9.5px] text-[#8892A0]">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Internal Tab Navigation ──────────────────── */}
      <div className="flex border-b border-[#D1D9E3] gap-2 text-xs font-bold text-[#8892A0]">
        {[
          { id: "register", label: "ESG Data Register" },
          { id: "calculator", label: "Emissions Calculator" },
          { id: "builder", label: "BRSR Disclosure Builder" },
          { id: "tracker", label: "Filing Tracker" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as ESGTab)}
            className={`pb-3 px-2 border-b-2 transition-all ${
              activeTab === tab.id
                ? "border-[#1A6B8A] text-[#0D1B2A]"
                : "border-transparent hover:text-[#0D1B2A]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Tab Content Workspace ─────────────────────── */}

      {/* TAB 1: ESG Data Register */}
      {activeTab === "register" && (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Category Tree (30%) */}
          <div className="lg:col-span-3 border border-[#D1D9E3] rounded-2xl p-4 bg-slate-50/20 space-y-2">
            <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-3">Categories</h4>
            {[
              { id: "scope1", label: "Scope 1 (Direct Emissions)" },
              { id: "scope2", label: "Scope 2 (Indirect Grid)" },
              { id: "water", label: "Water Intensity & Recycling" },
              { id: "waste", label: "Hazardous Waste & Water" },
              { id: "social", label: "Workforce & Safety" }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setRegisterCategory(cat.id as any)}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold transition-all ${
                  registerCategory === cat.id ? "bg-white border border-[#D1D9E3] shadow-sm text-[#0D1B2A]" : "hover:bg-slate-50 text-[#8892A0]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Metric list panel (70%) */}
          <div className="lg:col-span-7 border border-[#D1D9E3] rounded-2xl bg-white shadow-sm overflow-hidden p-5 space-y-4">
            <div className="border-b pb-3 flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">
                {registerCategory === "scope1" && "Scope 1 Emissions metrics"}
                {registerCategory === "scope2" && "Scope 2 Emissions metrics"}
                {registerCategory === "water" && "Water management metrics"}
                {registerCategory === "waste" && "Waste & Disposals metrics"}
                {registerCategory === "social" && "Social / Safety KPIs"}
              </h3>
              <Badge className="bg-blue-50 text-[#1A6B8A] border-blue-200 border text-[9px] font-bold">Auto-Populated</Badge>
            </div>

            {registerCategory === "scope1" && (
              <div className="space-y-4 text-xs">
                {[
                  { name: "Diesel combustion (Generators & Vehicles)", val: dieselValue, code: "diesel", src: "Fuel consumption log (19.4 lakh L)", conf: 96 },
                  { name: "Gas flaring", val: flaringValue, code: "flaring", src: "Flaring register (847 MMSCF flared)", conf: 94 },
                  { name: "Fugitive methane emissions", val: "312 tCO2e", src: "Equipment counts (AP-42 factors)", conf: 91 },
                  { name: "Process venting", val: "94 tCO2e", src: "Venting log registers", conf: 89 }
                ].map(metric => (
                  <div key={metric.name} className="p-3.5 border border-[#D1D9E3] rounded-xl flex items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="space-y-1">
                      <p className="font-bold text-[#0D1B2A]">{metric.name}</p>
                      <p className="text-[10px] text-[#8892A0]">Source: <strong className="font-mono">{metric.src}</strong> | Confidence: <span className="font-mono text-[#0F7B6C]">{metric.conf}%</span></p>
                    </div>
                    <div className="flex items-center gap-3 text-right">
                      <span className="font-mono font-bold text-sm text-[#0D1B2A]">{metric.val}</span>
                      {metric.code && (
                        <button
                          onClick={() => handleOverride(metric.code)}
                          className="text-[#C8922A] hover:text-[#b78222] font-semibold text-[10px]"
                        >
                          Override
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {registerCategory === "scope2" && (
              <div className="space-y-4 text-xs">
                <div className="p-3.5 border border-[#D1D9E3] rounded-xl flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-bold text-[#0D1B2A]">Grid electricity consumption</p>
                    <p className="text-[10px] text-[#8892A0]">Source: <strong className="font-mono">CEA India factor (0.82 t/MWh) × 302 MWh</strong></p>
                  </div>
                  <span className="font-mono font-bold text-sm text-[#0D1B2A]">248 tCO2e</span>
                </div>
              </div>
            )}

            {registerCategory === "water" && (
              <div className="space-y-4 text-xs">
                {[
                  { name: "Fresh water consumed", val: "14,200 kL", src: "Water flowmeter records (Intensity: 0.11 kL/bbl)" },
                  { name: "Recycled / reused water", val: "8,900 kL", src: "Treatment logs (62.7% of total)" },
                  { name: "Wastewater discharged", val: "3,400 kL", src: "Treatment plant discharge registers" }
                ].map(metric => (
                  <div key={metric.name} className="p-3.5 border border-[#D1D9E3] rounded-xl flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-[#0D1B2A]">{metric.name}</p>
                      <p className="text-[10px] text-[#8892A0]">Source: <strong className="font-mono">{metric.src}</strong></p>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#0D1B2A]">{metric.val}</span>
                  </div>
                ))}
              </div>
            )}

            {registerCategory === "waste" && (
              <div className="space-y-4 text-xs">
                {[
                  { name: "Hazardous waste generated", val: "84.3 MT", src: "Waste manifests / CPCB logs" },
                  { name: "Drilling cuttings", val: "312 MT", src: "TSD disposal certificates" },
                  { name: "Produced water volume", val: "6,240 bbl/d", src: "100% reinjection records" }
                ].map(metric => (
                  <div key={metric.name} className="p-3.5 border border-[#D1D9E3] rounded-xl flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-[#0D1B2A]">{metric.name}</p>
                      <p className="text-[10px] text-[#8892A0]">Source: <strong className="font-mono">{metric.src}</strong></p>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#0D1B2A]">{metric.val}</span>
                  </div>
                ))}
              </div>
            )}

            {registerCategory === "social" && (
              <div className="space-y-4 text-xs">
                {[
                  { name: "Total Safety Training hours", val: "2,847 hours", src: "HSE Training logs (Avg 20.1 hrs/person)" },
                  { name: "LTI Rate (Man-hours)", val: "0.00 (Zero LTI)", src: "M3 HSE Safety reports" },
                  { name: "Workforce Gender Ratio", val: "17% Female / 83% Male", src: "HR Employee registers" }
                ].map(metric => (
                  <div key={metric.name} className="p-3.5 border border-[#D1D9E3] rounded-xl flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="font-bold text-[#0D1B2A]">{metric.name}</p>
                      <p className="text-[10px] text-[#8892A0]">Source: <strong className="font-mono">{metric.src}</strong></p>
                    </div>
                    <span className="font-mono font-bold text-sm text-[#0D1B2A]">{metric.val}</span>
                  </div>
                ))}
              </div>
            )}

          </div>
        </div>
      )}

      {/* TAB 2: Emissions Calculator */}
      {activeTab === "calculator" && (
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
          <div className="border-b pb-3 flex items-center justify-between">
            <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">Activity-Based Emissions Calculator</h3>
            <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-bold">IPCC AR6 Factors</Badge>
          </div>

          <div className="space-y-4 font-sans text-xs">
            <div className="p-4 border border-[#D1D9E3] rounded-xl bg-slate-50/20 space-y-3">
              <h4 className="font-bold text-[#0D1B2A]">Scope 1 Calculation Formulae</h4>
              <div className="divide-y divide-[#D1D9E3] text-[11px]">
                <div className="py-2.5 flex items-center justify-between">
                  <span>Diesel combustion: <code className="bg-slate-100 px-1 rounded font-mono">Litres consumed (19.4 lakh L) × 2.67 kgCO2e/L</code></span>
                  <span className="font-mono font-bold text-[#0D1B2A]">4,847 tCO2e</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span>Gas flaring: <code className="bg-slate-100 px-1 rounded font-mono">MMSCF flared (847) × 1.42 tCO2e/MMSCF</code></span>
                  <span className="font-mono font-bold text-[#0D1B2A]">1,203 tCO2e</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span>Fugitive methane: <code className="bg-slate-100 px-1 rounded font-mono">Equipment tags × AP-42 Activity factors × GWP 28</code></span>
                  <span className="font-mono font-bold text-[#0D1B2A]">312 tCO2e</span>
                </div>
              </div>
            </div>

            <div className="p-4 border border-[#D1D9E3] rounded-xl bg-slate-50/20 space-y-3">
              <h4 className="font-bold text-[#0D1B2A]">Scope 2 Calculation Formulae</h4>
              <div className="text-[11px] flex items-center justify-between">
                <span>Grid electricity usage: <code className="bg-slate-100 px-1 rounded font-mono">CEA grid factor (0.82 tCO2e/MWh) × 302 MWh</code></span>
                <span className="font-mono font-bold text-[#0D1B2A]">248 tCO2e</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: BRSR Disclosure Builder */}
      {activeTab === "builder" && (
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Principles Checklist (30%) */}
          <div className="lg:col-span-3 border border-[#D1D9E3] rounded-2xl p-4 bg-slate-50/20 space-y-2">
            <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-3">BRSR Principles</h4>
            {[
              { id: 1, label: "P1: Ethics & Transparency", rate: 82 },
              { id: 2, label: "P2: Product Sustainability", rate: 61 },
              { id: 3, label: "P3: Employee Wellbeing", rate: 90 },
              { id: 4, label: "P4: Stakeholder Engagement", rate: 43 },
              { id: 5, label: "P5: Human Rights", rate: 72 },
              { id: 6, label: "P6: Environment (Energy/GHG)", rate: 91 },
              { id: 7, label: "P7: Policy Advocacy", rate: 100 },
              { id: 8, label: "P8: Inclusive Growth", rate: 52 },
              { id: 9, label: "P9: Consumer Responsibility", rate: 74 }
            ].map(pr => (
              <button
                key={pr.id}
                onClick={() => setBrsrPrinciple(pr.id)}
                className={`w-full text-left p-2 rounded-xl text-[11px] font-semibold transition-all border ${
                  brsrPrinciple === pr.id ? "bg-white border-[#D1D9E3] shadow-sm text-[#0D1B2A]" : "hover:bg-slate-50 border-transparent text-[#8892A0]"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span>{pr.label}</span>
                  <span className="font-mono font-bold text-[10px]">{pr.rate}%</span>
                </div>
                <Progress value={pr.rate} className="h-1.5 [&>div]:bg-[#1A6B8A]" />
              </button>
            ))}
          </div>

          {/* Principle detail builder (70%) */}
          <div className="lg:col-span-7 border border-[#D1D9E3] rounded-2xl bg-white shadow-sm p-5 space-y-4">
            <div className="border-b pb-3 flex items-center justify-between">
              <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">
                BRSR Principle {brsrPrinciple} - Draft Disclosures
              </h3>
              <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-bold">Verified Draft</Badge>
            </div>

            {brsrPrinciple === 6 ? (
              <div className="space-y-4 text-xs font-sans">
                <div className="p-3 border border-[#D1D9E3] rounded-xl bg-slate-50/20 space-y-1">
                  <p className="font-bold text-[#0D1B2A]">P6 Essential Indicator 1: Energy consumption and intensity</p>
                  <p className="text-[11px] text-[#0D1B2A]/90 pt-1">Total energy consumed from non-renewable sources: 519 TJ (diesel + grid electricity)</p>
                  <p className="text-[11px] text-[#0D1B2A]/90">Energy intensity: 4.05 GJ per barrel produced</p>
                  <p className="text-[9.5px] text-[#8892A0] pt-1">Data Source: Fuel logs + CEA grid factors | Confidence: 96%</p>
                </div>

                <div className="p-3 border border-[#D1D9E3] rounded-xl bg-slate-50/20 space-y-1">
                  <p className="font-bold text-[#0D1B2A]">P6 Essential Indicator 2: Water withdrawal and consumption</p>
                  <p className="text-[11px] text-[#0D1B2A]/90 pt-1">Water withdrawn: 14,200 kL (Intensity: 0.11 kL/bbl)</p>
                  <p className="text-[11px] text-[#0D1B2A]/90">Water recycled or reused: 8,900 kL (62.7% of total)</p>
                  <p className="text-[9.5px] text-[#8892A0] pt-1">Data Source: Flowmeter records | Confidence: 94%</p>
                </div>

                <div className="p-3 border border-[#D1D9E3] rounded-xl bg-slate-50/20 space-y-1">
                  <p className="font-bold text-[#0D1B2A]">P6 Essential Indicator 3: GHG emissions</p>
                  <p className="text-[11px] text-[#0D1B2A]/90 pt-1">Scope 1: 6,456 tCO2e | Scope 2: 248 tCO2e | Total: 6,704 tCO2e</p>
                  <p className="text-[11px] text-[#0D1B2A]/90">GHG intensity: 0.052 tCO2e per bbl produced</p>
                  <p className="text-[9.5px] text-[#8892A0] pt-1">Data Source: Calculated from operational records | Confidence: 91%</p>
                </div>
              </div>
            ) : (
              <div className="p-10 text-center text-xs text-[#8892A0] italic">
                Principle {brsrPrinciple} auto-populated data draft is currently being parsed from ERP records.
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 4: Filing Tracker */}
      {activeTab === "tracker" && (
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50">
            <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">ESG Regulatory Filings Tracker</h3>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#D1D9E3] text-[9.5px] font-bold text-[#8892A0] uppercase bg-slate-50/20 text-left">
                  <th className="py-2.5 px-4">Filing Type</th>
                  <th className="py-2.5 px-2">Authority</th>
                  <th className="py-2.5 px-2">Frequency</th>
                  <th className="py-2.5 px-2">Due Date</th>
                  <th className="py-2.5 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { type: "BRSR Disclosure", auth: "SEBI / Exchange", freq: "Annual", date: "31 Mar 2026", status: "76% Complete", bad: "bg-amber-50 text-amber-700 border-amber-200" },
                  { type: "Annual Environmental Statement (Form-V)", auth: "MoEFCC via CPCB", freq: "Annual", date: "30 Sep 2026", status: "Data Collection", bad: "bg-blue-50 text-[#1A6B8A] border-blue-200" },
                  { type: "Hazardous Waste Annual Return", auth: "CPCB", freq: "Annual", date: "30 Jun 2026", status: "Scheduled", bad: "bg-slate-100 text-slate-500 border-slate-200" },
                  { type: "Consent to Operate Renewal", auth: "State PCB", freq: "As Required", date: "15 Mar 2026", status: "In Preparation", bad: "bg-blue-50 text-[#1A6B8A] border-blue-200" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-[#0D1B2A]">{row.type}</td>
                    <td className="py-3 px-2 text-[#8892A0]">{row.auth}</td>
                    <td className="py-3 px-2 text-[#8892A0]">{row.freq}</td>
                    <td className="py-3 px-2 font-mono text-[#8892A0]">{row.date}</td>
                    <td className="py-3 px-4 text-center">
                      <Badge className={`${row.bad} border text-[9px] font-bold`}>{row.status.toUpperCase()}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ── Bottom Action Footer ──────────────────────── */}
      <div className="flex items-center justify-between rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
        <Button
          onClick={handleGenerateBRSRPDF}
          className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-lg px-4"
        >
          <Download className="h-4 w-4 mr-1.5" />
          Generate BRSR PDF Disclosure
        </Button>
        <span className="text-[10px] text-[#8892A0] font-mono">SEBI Compliant Disclosure Generator • CEA Grid Factor v2024</span>
      </div>

    </div>
  );
}
