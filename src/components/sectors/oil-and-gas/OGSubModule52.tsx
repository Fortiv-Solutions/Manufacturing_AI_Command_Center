import { useState } from "react";
import {
  FileText,
  Clock,
  Users,
  AlertTriangle,
  Play,
  Download,
  Send,
  Settings,
  Calendar,
  ChevronRight,
  Loader2,
  CheckCircle2,
  Zap,
  Shield,
  Wrench,
  ClipboardList,
  Drill,
  Timer,
  ArrowDown,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ─── Types ─── */
interface ConfiguredReport {
  id: string;
  name: string;
  schedule: string;
  status: "On Schedule" | "Delayed" | "Failed";
  nextRun: string;
  lastCompiled: string;
  compilationTime: string;
  recipientCount: number;
}

interface Exception {
  title: string;
  timestamp: string;
  cause: string;
  impact: string;
  owner: string;
}

interface ReportSection {
  label: string;
  icon: React.ReactNode;
  rows: { key: string; value: string }[];
}

interface OpenAction {
  id: string;
  action: string;
  owner: string;
  due: string;
}

/* ─── Mock Data ─── */
const CONFIGURED_REPORTS: ConfiguredReport[] = [
  {
    id: "RPT-2025-1847",
    name: "Daily Operations Report",
    schedule: "06:00 IST daily",
    status: "On Schedule",
    nextRun: "29 Oct 2025 06:00 IST",
    lastCompiled: "28 Oct 2025 06:00 IST",
    compilationTime: "2m 47s",
    recipientCount: 24,
  },
  {
    id: "RPT-2025-1848",
    name: "Night Shift Summary",
    schedule: "06:30 IST daily",
    status: "On Schedule",
    nextRun: "29 Oct 2025 06:30 IST",
    lastCompiled: "28 Oct 2025 06:30 IST",
    compilationTime: "1m 12s",
    recipientCount: 3,
  },
  {
    id: "RPT-2025-1849",
    name: "Weekly Operations Summary",
    schedule: "Mon 07:00 IST",
    status: "On Schedule",
    nextRun: "03 Nov 2025 07:00 IST",
    lastCompiled: "27 Oct 2025 07:00 IST",
    compilationTime: "4m 33s",
    recipientCount: 8,
  },
  {
    id: "RPT-2025-1850",
    name: "Well Status Report",
    schedule: "08:00 IST daily",
    status: "On Schedule",
    nextRun: "29 Oct 2025 08:00 IST",
    lastCompiled: "28 Oct 2025 08:00 IST",
    compilationTime: "2m 08s",
    recipientCount: 6,
  },
  {
    id: "RPT-2025-1851",
    name: "Production Flash",
    schedule: "07:00 IST daily",
    status: "On Schedule",
    nextRun: "29 Oct 2025 07:00 IST",
    lastCompiled: "28 Oct 2025 07:00 IST",
    compilationTime: "0m 42s",
    recipientCount: 4,
  },
];

const EXCEPTIONS: Exception[] = [
  {
    title: "Well C-07 shut-in at 02:14 IST",
    timestamp: "02:14 IST",
    cause: "ESP trip (motor overload fault)",
    impact: "-3,200 bbl",
    owner: "Rajesh Kumar",
  },
  {
    title: "Pad A compressor downtime 00:30–03:15 IST",
    timestamp: "00:30–03:15 IST",
    cause: "G-Compressor #2 bearing failure",
    impact: "-540 bbl",
    owner: "Sushant Verma",
  },
];

const REPORT_SECTIONS: ReportSection[] = [
  {
    label: "Production Summary",
    icon: <Zap className="h-3.5 w-3.5" />,
    rows: [
      { key: "Gross Oil", value: "41,280 bbl" },
      { key: "Target", value: "43,500 bbl" },
      { key: "Variance", value: "-5.1%" },
      { key: "Gas", value: "18.4 MMSCFD" },
      { key: "Water Produced", value: "6,240 bbl" },
      { key: "Water Injection", value: "19,100 bbl" },
      { key: "Active Wells", value: "14 producers / 2 shut-in / 1 workover" },
    ],
  },
  {
    label: "Safety & Permit Status",
    icon: <Shield className="h-3.5 w-3.5" />,
    rows: [
      { key: "LTI", value: "0" },
      { key: "Recordable Incidents", value: "0" },
      { key: "Near Misses", value: "0" },
      { key: "Active Permits", value: "4" },
      { key: "PTW Closed", value: "3" },
    ],
  },
  {
    label: "Maintenance Status",
    icon: <Wrench className="h-3.5 w-3.5" />,
    rows: [
      { key: "PMs Completed", value: "3" },
      { key: "Breakdowns", value: "1" },
      { key: "PMs Overdue", value: "0" },
      { key: "Work Orders Open", value: "7" },
    ],
  },
  {
    label: "Open Actions",
    icon: <ClipboardList className="h-3.5 w-3.5" />,
    rows: [
      { key: "Total Open", value: "14" },
      { key: "Due Today", value: "3" },
      { key: "Overdue", value: "0" },
    ],
  },
  {
    label: "Drilling",
    icon: <Drill className="h-3.5 w-3.5" />,
    rows: [
      { key: "Well B-15", value: "Pre-spud preparation" },
      { key: "Well B-14", value: "Post-drill documentation" },
    ],
  },
];

const OPEN_ACTIONS: OpenAction[] = [
  {
    id: "ACT-0091",
    action: "Complete ESP trip RCA for Well C-07",
    owner: "Rajesh Kumar",
    due: "28 Oct 2025",
  },
  {
    id: "ACT-0092",
    action: "Submit weekly safety walk-through report (Pad B)",
    owner: "P. Menon",
    due: "28 Oct 2025",
  },
  {
    id: "ACT-0093",
    action: "Commission replacement bearing — G-Compressor #2",
    owner: "Sushant Verma",
    due: "28 Oct 2025",
  },
];

const COMPILATION_STEPS = [
  "Pulling production data from SCADA...",
  "Reading maintenance & work order logs...",
  "Checking HSE permits & safety records...",
  "Aggregating drilling progress updates...",
  "Compiling report & formatting sections...",
  "Distributing to 24 recipients...",
];

/* ─── Helpers ─── */
const statusColor = (s: ConfiguredReport["status"]) => {
  if (s === "On Schedule") return "bg-emerald-50 text-emerald-700 border-emerald-200";
  if (s === "Delayed") return "bg-amber-50 text-amber-700 border-amber-200";
  return "bg-red-50 text-[#C0392B] border-red-200";
};

const statusDot = (s: ConfiguredReport["status"]) => {
  if (s === "On Schedule") return "bg-emerald-500";
  if (s === "Delayed") return "bg-amber-500";
  return "bg-[#C0392B]";
};

/* ─── Component ─── */
export function OGSubModule52() {
  const [selectedReport, setSelectedReport] = useState<ConfiguredReport>(CONFIGURED_REPORTS[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [genStep, setGenStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState("2025-10-28");

  const handleGenerateNow = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setGenStep(0);

    const runStep = (i: number) => {
      if (i < COMPILATION_STEPS.length) {
        setGenStep(i);
        toast.loading(COMPILATION_STEPS[i], { id: "gen-progress" });
        setTimeout(() => runStep(i + 1), 700);
      } else {
        toast.dismiss("gen-progress");
        toast.success(
          `${selectedReport.name} compiled and distributed to ${selectedReport.recipientCount} recipients.`,
        );
        setIsGenerating(false);
        setGenStep(0);
      }
    };
    runStep(0);
  };

  const handleDownload = () => {
    toast.success(`Downloading ${selectedReport.name} — 28 Oct 2025.pdf`);
  };

  const handleEditDistribution = () => {
    toast.info(
      `Opening distribution list for ${selectedReport.name} — ${selectedReport.recipientCount} recipients configured.`,
    );
  };

  const handleResend = () => {
    toast.success(
      `Resending ${selectedReport.name} to ${selectedReport.recipientCount} recipients.`,
    );
  };

  return (
    <div className="space-y-4">
      {/* ─── Top Bar ─── */}
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-[#0D1B2A] flex items-center justify-center">
            <FileText className="h-4.5 w-4.5 text-[#C8922A]" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-[#0D1B2A]">
              Daily Operational Reporting Automation
            </h2>
            <p className="text-[10.5px] text-[#8892A0]">
              Automated compilation, distribution & exception flagging
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Report Type Selector */}
          <select
            value={selectedReport.id}
            onChange={(e) => {
              const r = CONFIGURED_REPORTS.find((r) => r.id === e.target.value);
              if (r) setSelectedReport(r);
            }}
            className="h-9 rounded-lg border border-[#D1D9E3] bg-white px-3 text-xs font-semibold text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
          >
            {CONFIGURED_REPORTS.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name}
              </option>
            ))}
          </select>

          {/* Date Selector */}
          <div className="relative">
            <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8892A0] pointer-events-none" />
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="h-9 pl-8 pr-3 rounded-lg border border-[#D1D9E3] bg-white text-xs font-mono text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
            />
          </div>

          {/* Generate Now CTA */}
          <Button
            onClick={handleGenerateNow}
            disabled={isGenerating}
            className="h-9 bg-[#C8922A] hover:bg-[#b78222] text-white font-bold text-xs px-5 rounded-lg shadow-sm"
          >
            {isGenerating ? (
              <>
                <Loader2 className="h-3.5 w-3.5 animate-spin mr-1.5" />
                Generating...
              </>
            ) : (
              <>
                <Play className="h-3.5 w-3.5 mr-1.5" />
                Generate Now
              </>
            )}
          </Button>
        </div>
      </div>

      {/* ─── Main Two-Panel Layout ─── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* ═══ LEFT PANEL: Report Schedule (30%) ═══ */}
        <div className="lg:col-span-4 space-y-2">
          <div className="flex items-center justify-between px-1 mb-1">
            <p className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
              Report Schedule
            </p>
            <span className="text-[10px] text-[#8892A0] font-mono">
              {CONFIGURED_REPORTS.length} configured
            </span>
          </div>

          {CONFIGURED_REPORTS.map((report) => (
            <button
              key={report.id}
              onClick={() => setSelectedReport(report)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                selectedReport.id === report.id
                  ? "border-[#C8922A] bg-amber-50/60 shadow-sm ring-1 ring-[#C8922A]/20"
                  : "border-[#D1D9E3] bg-white hover:bg-slate-50 hover:border-slate-300"
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-[#0D1B2A] truncate">{report.name}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock className="h-3 w-3 text-[#8892A0] shrink-0" />
                    <span className="text-[10.5px] text-[#8892A0] font-mono">
                      {report.schedule}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <Badge
                    className={`${statusColor(report.status)} border text-[9px] font-bold px-1.5 py-0`}
                  >
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${statusDot(report.status)} mr-1`}
                    />
                    {report.status}
                  </Badge>
                  <ChevronRight className="h-3.5 w-3.5 text-[#D1D9E3]" />
                </div>
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-3 mt-2.5 pt-2 border-t border-dashed border-[#D1D9E3]">
                <span className="flex items-center gap-1 text-[10px] text-[#8892A0]">
                  <Users className="h-3 w-3" />
                  <span className="font-mono font-semibold text-[#0D1B2A]">
                    {report.recipientCount}
                  </span>
                </span>
                <span className="flex items-center gap-1 text-[10px] text-[#8892A0]">
                  <Timer className="h-3 w-3" />
                  <span className="font-mono font-semibold text-[#0D1B2A]">
                    {report.compilationTime}
                  </span>
                </span>
                <span className="text-[10px] text-[#8892A0] ml-auto truncate">
                  Next:{" "}
                  <span className="font-mono text-[#0D1B2A]">
                    {report.nextRun.split(" ").slice(0, 3).join(" ")}
                  </span>
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ═══ RIGHT PANEL: Report Viewer (70%) ═══ */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          {/* ── Generation Progress Overlay ── */}
          {isGenerating && (
            <div className="p-4 border-b border-[#D1D9E3] bg-gradient-to-r from-amber-50 to-white">
              <div className="flex items-center gap-2 mb-3">
                <Loader2 className="h-4 w-4 animate-spin text-[#C8922A]" />
                <span className="text-xs font-bold text-[#0D1B2A]">
                  Compiling {selectedReport.name}...
                </span>
              </div>
              <div className="space-y-1.5">
                {COMPILATION_STEPS.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    {i < genStep ? (
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    ) : i === genStep ? (
                      <Loader2 className="h-3.5 w-3.5 animate-spin text-[#C8922A] shrink-0" />
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full border border-[#D1D9E3] shrink-0" />
                    )}
                    <span
                      className={`text-[10.5px] ${i <= genStep ? "text-[#0D1B2A] font-semibold" : "text-[#8892A0]"}`}
                    >
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Report Metadata Bar ── */}
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-[#0D1B2A]">{selectedReport.name}</h3>
              <span className="text-[10px] font-mono text-[#8892A0]">{selectedReport.id}</span>
            </div>
            <div className="flex items-center flex-wrap gap-x-5 gap-y-2">
              <div className="flex items-center gap-1.5 text-[10.5px] text-[#8892A0]">
                <Calendar className="h-3 w-3" />
                Generated:{" "}
                <span className="font-mono font-semibold text-[#0D1B2A]">
                  28 Oct 2025 06:00 IST
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] text-[#8892A0]">
                <Timer className="h-3 w-3" />
                Compilation:{" "}
                <span className="font-mono font-semibold text-[#0D1B2A]">
                  {selectedReport.compilationTime}
                </span>
                <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-bold ml-1">
                  <ArrowDown className="h-2.5 w-2.5 mr-0.5" />
                  vs manual avg 1h 32m
                </Badge>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] text-[#8892A0]">
                <Users className="h-3 w-3" />
                Recipients:{" "}
                <span className="font-mono font-semibold text-[#0D1B2A]">
                  {selectedReport.recipientCount}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[10.5px] text-[#8892A0]">
                <AlertTriangle className="h-3 w-3 text-[#C0392B]" />
                Exceptions: <span className="font-mono font-semibold text-[#C0392B]">2</span>
              </div>
            </div>
          </div>

          {/* ── Scrollable Report Body ── */}
          <div
            className="flex-1 p-5 overflow-y-auto space-y-5"
            style={{ maxHeight: "calc(100vh - 320px)" }}
          >
            {/* Exception Callout Cards */}
            <div className="space-y-2.5">
              <p className="text-[10px] font-bold text-[#C0392B] uppercase tracking-wider flex items-center gap-1.5">
                <AlertTriangle className="h-3 w-3" />
                Exceptions Flagged
              </p>
              {EXCEPTIONS.map((exc, i) => (
                <div key={i} className="rounded-xl border border-[#C0392B]/20 bg-[#FDECEA] p-3.5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[#C0392B]">{exc.title}</p>
                      <p className="text-[10.5px] text-[#0D1B2A] mt-1 leading-relaxed">
                        <span className="font-semibold">Cause:</span> {exc.cause}
                      </p>
                    </div>
                    <div className="shrink-0 text-right space-y-1">
                      <Badge className="bg-[#C0392B]/10 text-[#C0392B] border-[#C0392B]/20 border text-[9px] font-bold font-mono">
                        Impact: {exc.impact}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-2 pt-2 border-t border-[#C0392B]/10 text-[10px] text-[#C0392B]/80">
                    <span>
                      Owner: <strong className="text-[#C0392B]">{exc.owner}</strong>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Report Sections */}
            {REPORT_SECTIONS.map((section) => (
              <div
                key={section.label}
                className="rounded-xl border border-[#D1D9E3] bg-white overflow-hidden"
              >
                {/* Section Header */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-50/80 border-b border-[#D1D9E3]">
                  <span className="text-[#1A6B8A]">{section.icon}</span>
                  <p className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                    {section.label}
                  </p>
                </div>
                {/* Section Body */}
                <div className="border-l-4 border-[#1A6B8A]">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#D1D9E3]/40">
                    {section.rows.map((row) => (
                      <div key={row.key} className="bg-white px-4 py-2.5">
                        <p className="text-[10px] text-[#8892A0] mb-0.5">{row.key}</p>
                        <p
                          className={`text-xs font-bold font-mono ${
                            row.value.startsWith("-") ? "text-[#C0392B]" : "text-[#0D1B2A]"
                          }`}
                        >
                          {row.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Open Actions Sub-table (only for Open Actions section) */}
                {section.label === "Open Actions" && (
                  <div className="border-t border-[#D1D9E3]">
                    <div className="px-4 py-2 bg-slate-50/40">
                      <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">
                        Due Today
                      </p>
                    </div>
                    <div className="divide-y divide-[#D1D9E3]">
                      {OPEN_ACTIONS.map((action) => (
                        <div key={action.id} className="flex items-center gap-3 px-4 py-2.5">
                          <span className="text-[10px] font-mono font-semibold text-[#1A6B8A]">
                            {action.id}
                          </span>
                          <span className="text-[10.5px] text-[#0D1B2A] flex-1">
                            {action.action}
                          </span>
                          <span className="text-[10px] text-[#8892A0] shrink-0">
                            {action.owner}
                          </span>
                          <span className="text-[10px] font-mono text-[#8892A0] shrink-0">
                            {action.due}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* ── Bottom Actions Bar ── */}
          <div className="p-4 border-t border-[#D1D9E3] bg-white flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={handleDownload}
                className="h-8 text-xs font-bold border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50"
              >
                <Download className="h-3.5 w-3.5 mr-1.5" />
                Download Report
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={handleEditDistribution}
                className="h-8 text-xs font-bold border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50"
              >
                <Settings className="h-3.5 w-3.5 mr-1.5" />
                Edit Distribution
              </Button>
            </div>
            <Button
              size="sm"
              onClick={handleResend}
              className="h-8 bg-[#1A6B8A] hover:bg-[#155a75] text-white text-xs font-bold"
            >
              <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
              Resend
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
