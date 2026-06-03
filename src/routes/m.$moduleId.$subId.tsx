import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { 
  ChevronLeft, Sparkles, Filter, Plus, RefreshCw, Send, Check, 
  Loader2, AlertTriangle, CheckCircle, Database, Cpu, Users, 
  ClipboardList, TrendingUp, FileText, ArrowRight, Play, 
  ShieldAlert, Mail, MessageSquare, Phone, PhoneCall, Download, HelpCircle,
  FileCode, Layers, Radio, ShieldCheck, Zap, ArrowUpRight, ArrowDownRight,
  TrendingDown, CheckCircle2, AlertCircle, Clock, Activity, ShoppingCart,
  FileSpreadsheet, LayoutDashboard, Warehouse, Briefcase, GraduationCap, DollarSign, Target, IndianRupee
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { KpiCard } from "@/components/KpiCard";
import { SparkLine, MainChart } from "@/components/MiniChart";
import { DataCard } from "@/components/DataCard";
import { getModule, getSubModule } from "@/data/modules";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, PieChart, Pie, Cell, LineChart, Line, Legend, ReferenceLine, AreaChart, Area, ComposedChart } from "recharts";
import { OGSubModule11 } from "@/components/sectors/oil-and-gas/OGSubModule11";
import { OGSubModule12 } from "@/components/sectors/oil-and-gas/OGSubModule12";
import { OGSubModule13 } from "@/components/sectors/oil-and-gas/OGSubModule13";
import { OGSubModule21 } from "@/components/sectors/oil-and-gas/OGSubModule21";
import { OGSubModule22 } from "@/components/sectors/oil-and-gas/OGSubModule22";
import { OGSubModule23 } from "@/components/sectors/oil-and-gas/OGSubModule23";
import { OGSubModule31 } from "@/components/sectors/oil-and-gas/OGSubModule31";
import { OGSubModule32 } from "@/components/sectors/oil-and-gas/OGSubModule32";
import { OGSubModule33 } from "@/components/sectors/oil-and-gas/OGSubModule33";
import { OGSubModule34 } from "@/components/sectors/oil-and-gas/OGSubModule34";
import { OGSubModule41 } from "@/components/sectors/oil-and-gas/OGSubModule41";
import { OGSubModule42 } from "@/components/sectors/oil-and-gas/OGSubModule42";
import { OGSubModule43 } from "@/components/sectors/oil-and-gas/OGSubModule43";
import { OGSubModule44 } from "@/components/sectors/oil-and-gas/OGSubModule44";
import { OGSubModule51 } from "@/components/sectors/oil-and-gas/OGSubModule51";
import { OGSubModule52 } from "@/components/sectors/oil-and-gas/OGSubModule52";
import { OGSubModule53 } from "@/components/sectors/oil-and-gas/OGSubModule53";
import { OGSubModule61 } from "@/components/sectors/oil-and-gas/OGSubModule61";
import { OGSubModule62 } from "@/components/sectors/oil-and-gas/OGSubModule62";
import { OGSubModule63 } from "@/components/sectors/oil-and-gas/OGSubModule63";
import { OGSubModule71 } from "@/components/sectors/oil-and-gas/OGSubModule71";
import { OGSubModule72 } from "@/components/sectors/oil-and-gas/OGSubModule72";
import { OGSubModule73 } from "@/components/sectors/oil-and-gas/OGSubModule73";

export const Route = createFileRoute("/m/$moduleId/$subId")({
  loader: ({ params }) => {
    const m = getModule(params.moduleId);
    const s = getSubModule(params.moduleId, params.subId);
    if (!m || !s) throw notFound();
    const { icon, ...serializableM } = m;
    return { m: serializableM, s };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.s.title ?? "Sub-module"} — Fortiv` },
      { name: "description", content: loaderData?.s.blurb ?? "" },
    ],
  }),
  notFoundComponent: () => (
    <div className="text-center py-20">
      <h2 className="text-xl font-semibold">Not found</h2>
      <Link to="/" className="text-primary text-sm mt-2 inline-block">Back to dashboard</Link>
    </div>
  ),
  component: SubModuleDetail,
});

function SubModuleDetail() {
  const { m, s } = Route.useLoaderData();

  const isM1 = m.id === "m1-production";
  const isM2 = m.id === "m2-procurement";
  const isM3 = m.id === "m3-quality";
  const isM4 = m.id === "m4-dealers";

  const isM6 = m.id === "m6-dashboards";
  const isM7 = m.id === "m7-voice";
  const isM8 = m.id === "m8-complaints";
  const isM9 = m.id === "m9-followups";

  // ----------------------------------------------------
  // SUBMODULE 1.1 STATE (ERP/MES Data Sync Agent)
  // ----------------------------------------------------
  const [syncStatus11, setSyncStatus11] = useState<"idle" | "syncing" | "done">("idle");
  const [syncTimeCounter, setSyncTimeCounter] = useState(47);
  const [syncedRecords, setSyncedRecords] = useState<string[]>([
    "[15:58:12] Ingested sales order SO-2024-4827 from SAP B1 (Ashok Leyland, 400 units MS-212)",
    "[15:58:02] Synced ZKTeco biometric logs — 286 morning shift clock-ins registered",
    "[15:57:45] Pulled BOM component tree for newly added item MS-218 (stamped panel)",
    "[15:57:12] Updated on-hand inventory levels from SAP stock tables: RM-CRCA-1.2 at 3,400 kg",
    "[15:56:50] Checked shop floor sensor endpoints: Line 3 CNC feedrate stable at 94.1%",
    "[15:56:10] Ingested sales order SO-2024-4826 from SAP B1 (Bajaj Auto, 900 units PC-118)"
  ]);
  const [anomalies11, setAnomalies11] = useState([
    { id: 1, title: "BOM missing for Item Code MS-218", severity: "HIGH", system: "SAP B1 ERP", resolved: false, cta: "Create BOM" },
    { id: 2, title: "CRCA Sheet 1.2mm stock: 0 kg — required by 3 jobs", severity: "CRITICAL", system: "SAP B1 ERP", resolved: false, cta: "Raise PO" },
    { id: 3, title: "Line 4 Night Shift — no workforce assigned", severity: "HIGH", system: "HRMS / eSSL", resolved: false, cta: "Assign Workers" },
    { id: 4, title: "WIP Job JC-4799: no linked job card found", severity: "MEDIUM", system: "Custom MES", resolved: false, cta: "Investigate" },
    { id: 5, title: "No sync from SAP B1 ERP for 52 minutes", severity: "HIGH", system: "SAP B1 ERP", resolved: false, cta: "Check Connection" }
  ]);

  // Tick the sync timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSyncTimeCounter((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerSync11 = () => {
    setSyncStatus11("syncing");
    toast.loading("Establishing API tunnels to SAP B1 Service Layer and ZKTeco biometric SQL node...");
    setTimeout(() => {
      setSyncStatus11("done");
      setSyncTimeCounter(0);
      setSyncedRecords((prev) => [
        `[${new Date().toLocaleTimeString()}] Force Manual Sync fired: Synced 142 orders, 412 BOMs, 58 vendors, and 320 employee rosters.`,
        ...prev
      ]);
      toast.dismiss();
      toast.success("ERP/MES sync completed successfully! Unified data layer updated.");
    }, 1800);
  };

  const resolveAnomaly11 = (id: number, cta: string) => {
    setAnomalies11((prev) =>
      prev.map((a) => (a.id === id ? { ...a, resolved: true } : a))
    );
    toast.success(`Action triggered: "${cta}" processed successfully.`);
  };

  // ----------------------------------------------------
  // SUBMODULE 1.2 STATE (AI Production Schedule Generator)
  // ----------------------------------------------------
  const [priorityRule, setPriorityRule] = useState<"Strategic" | "EDD" | "FIFO" | "Setup">("Strategic");
  const [scheduleWeek, setScheduleWeek] = useState("Week of 22–26 Jan 2025");
  const [schedulingStatus, setSchedulingStatus] = useState<"idle" | "optimizing" | "complete">("idle");
  const [conflictResolved, setConflictResolved] = useState(false);
  const [jobsList12, setJobsList12] = useState([
    { id: "JC-4821", item: "MS-204", customer: "Kapoor Industries", line: "Line 3 — Stamping", days: "Mon–Wed", qty: 1000, priority: 88, status: "On Schedule", color: "danger" },
    { id: "JC-4822", item: "MS-208", customer: "Tata AutoComp Systems", line: "Line 1 — CNC Complex", days: "Mon–Thu", qty: 2500, priority: 92, status: "⚠️ Capacity Collision", color: "danger" },
    { id: "JC-4823", item: "PC-112", customer: "Maruti Ancillaries", line: "Line 2 — Assembly", days: "Mon–Tue", qty: 800, priority: 71, status: "On Schedule", color: "warning" },
    { id: "JC-4824", item: "SP-044", customer: "Reliance Consumer", line: "Line 4 — Welding", days: "Tue–Wed", qty: 1200, priority: 65, status: "On Schedule", color: "warning" },
    { id: "JC-4825", item: "MS-204", customer: "L&T Construction", line: "Line 3 — Stamping", days: "Thu–Fri", qty: 600, priority: 55, status: "On Schedule", color: "success" },
    { id: "JC-4826", item: "PC-118", customer: "Bajaj Auto", line: "Line 2 — Assembly", days: "Wed–Thu", qty: 900, priority: 79, status: "On Schedule", color: "warning" },
    { id: "JC-4827", item: "MS-212", customer: "Ashok Leyland", line: "Line 1 — CNC Complex", days: "Friday", qty: 400, priority: 88, status: "⚠️ Overload Stoppage Risk", color: "danger" }
  ]);

  const runScheduler = () => {
    setSchedulingStatus("optimizing");
    toast.loading("AI scheduling engine is mapping order profiles, machine buffers, and inventory queues...");
    setTimeout(() => {
      setSchedulingStatus("complete");
      setConflictResolved(true);
      setJobsList12((prev) =>
        prev.map((job) => {
          if (job.id === "JC-4827") {
            return {
              ...job,
              line: "Line 4 — Welding",
              days: "Thursday PM Shift",
              status: "✓ Rescheduled & Balanced",
              color: "success"
            };
          }
          if (job.id === "JC-4822") {
            return { ...job, status: "✓ Load Safe", color: "success" };
          }
          return job;
        })
      );
      toast.dismiss();
      toast.success("Weekly Production Schedule optimized! Load conflicts successfully resolved.");
    }, 2000);
  };

  const handleRuleChange = (rule: typeof priorityRule) => {
    setPriorityRule(rule);
    toast.info(`Scheduling algorithm logic re-weighted: ${rule}`);
  };

  // ----------------------------------------------------
  // SUBMODULE 1.3 STATE (Capacity Bottleneck Detector)
  // ----------------------------------------------------
  const [selectedCenter, setSelectedCenter] = useState("CNC Line 1");
  const [overtimeApplied, setOvertimeApplied] = useState(false);
  const [rescheduleApplied, setRescheduleApplied] = useState(false);
  const [centersData, setCentersData] = useState([
    { name: "CNC Line 1", type: "CNC Complex", mon: 91, tue: 94, wed: 96, thu: 94, fri: 98, avg: 94.6, status: "Overloaded", trend: "up", ordersAtRisk: ["JC-4819", "JC-4823"], forwardLoad: "102% (Wk 3)" },
    { name: "Assembly Line 2", type: "Assembly Rig", mon: 78, tue: 80, wed: 75, thu: 82, fri: 78, avg: 78.6, status: "High Load", trend: "stable", ordersAtRisk: ["JC-4826"], forwardLoad: "80% (Wk 3)" },
    { name: "Stamping Line 3", type: "Heavy Press Yard", mon: 61, tue: 65, wed: 58, thu: 63, fri: 60, avg: 61.4, status: "Normal", trend: "stable", ordersAtRisk: [], forwardLoad: "65% (Wk 3)" },
    { name: "Welding Line 4", type: "Welding Rig", mon: 86, tue: 88, wed: 85, thu: 90, fri: 87, avg: 87.2, status: "High Load", trend: "up", ordersAtRisk: ["JC-4824"], forwardLoad: "92% (Wk 3)" },
    { name: "Painting Line 5", type: "Finishing Pod", mon: 72, tue: 68, wed: 74, thu: 70, fri: 73, avg: 71.4, status: "Normal", trend: "stable", ordersAtRisk: [], forwardLoad: "75% (Wk 3)" },
    { name: "Dispatch Packing", type: "Packing Facility", mon: 55, tue: 60, wed: 52, thu: 58, fri: 54, avg: 55.8, status: "Normal", trend: "stable", ordersAtRisk: [], forwardLoad: "60% (Wk 3)" },
    { name: "Heat Treatment", type: "Auxiliary Oven", mon: 42, tue: 45, wed: 40, thu: 43, fri: 41, avg: 42.2, status: "Underloaded", trend: "stable", ordersAtRisk: [], forwardLoad: "45% (Wk 3)" },
    { name: "QC Inspection", type: "Quality Lab", mon: 88, tue: 91, wed: 87, thu: 93, fri: 90, avg: 89.8, status: "Near Capacity", trend: "stable", ordersAtRisk: ["JC-4828"], forwardLoad: "95% (Wk 3)" }
  ]);

  const applyOvertime = () => {
    setOvertimeApplied(true);
    setCentersData((prev) =>
      prev.map((c) =>
        c.name === "CNC Line 1"
          ? { ...c, avg: 84.6, status: "Normal", mon: 81, tue: 84, wed: 86, thu: 84, fri: 88 }
          : c
      )
    );
    toast.success("Overtime schedule approved (+4 hrs). CNC Line 1 capacity increased and balanced.");
  };

  const applyReschedule = () => {
    setRescheduleApplied(true);
    setCentersData((prev) =>
      prev.map((c) => {
        if (c.name === "CNC Line 1") {
          return { ...c, avg: 88.2, status: "High Load", mon: 85, tue: 88, wed: 90, thu: 88, fri: 90 };
        }
        if (c.name === "Welding Line 4") {
          return { ...c, avg: 91.2, status: "High Load", mon: 90, tue: 92, wed: 89, thu: 93, fri: 92 };
        }
        return c;
      })
    );
    toast.success("Order split approved. 400 units of JC-4819 successfully shifted to Line 4.");
  };

  // ----------------------------------------------------
  // SUBMODULE 1.4 STATE (Shift Gap & Attendance Intelligence)
  // ----------------------------------------------------
  const [headcountPresent, setHeadcountPresent] = useState(286);
  const [headcountGap, setHeadcountGap] = useState(13);
  const [rosterGaps, setRosterGaps] = useState([
    { line: "CNC Line 1", req: 8, pres: 6, gap: 2, status: "Critical", absents: "Ramesh Kumar (Grade A Operator), Vijay Sharma (Helper)", solved: false },
    { line: "Assembly Line 2", req: 12, pres: 11, gap: 1, status: "Minor Gap", absents: "Priya Mehta (Operator)", solved: false },
    { line: "Stamping Line 3", req: 6, pres: 6, gap: 0, status: "Fully Staffed", absents: "None", solved: true },
    { line: "Welding Line 4", req: 10, pres: 8, gap: 2, status: "Understaffed", absents: "Arun Patel, Deepak Joshi", solved: false },
    { line: "Painting Line 5", req: 5, pres: 5, gap: 0, status: "Fully Staffed", absents: "None", solved: true },
    { line: "QC Inspection", req: 4, pres: 3, gap: 1, status: "Minor Gap", absents: "Suresh Nair (Quality Auditor)", solved: false }
  ]);
  const [replacementsLog, setReplacementsLog] = useState([
    { id: 1, absent: "Ramesh Kumar", role: "Grade A CNC Operator", options: ["Kiran Shah (Grade A, Packing)", "Dinesh Patel (Grade B, Line 3)"], status: "unresolved" },
    { id: 2, absent: "Vijay Sharma", role: "Assembly Support", options: ["Ajay Trivedi (Line 2 spare capacity)"], status: "unresolved" }
  ]);

  const confirmReallocation = (logId: number, subName: string) => {
    setReplacementsLog((prev) =>
      prev.map((item) => (item.id === logId ? { ...item, status: `Reallocated: ${subName}` } : item))
    );
    toast.success(`Roster reallocation approved: ${subName} covering for absent operator.`);
    
    // Update shift metrics
    setHeadcountPresent((prev) => prev + 1);
    setHeadcountGap((prev) => prev - 1);
    
    setRosterGaps((prev) =>
      prev.map((g) => {
        if (g.line === "CNC Line 1") {
          const updatedGap = g.gap - 1;
          return {
            ...g,
            gap: updatedGap,
            pres: g.pres + 1,
            status: updatedGap === 0 ? "Fully Staffed" : updatedGap === 1 ? "Minor Gap" : "Critical"
          };
        }
        return g;
      })
    );
  };

  // ----------------------------------------------------
  // SUBMODULE 1.5 STATE (Material Requirement Planning Agent)
  // ----------------------------------------------------
  const [selectedMaterialCode, setSelectedMaterialCode] = useState("RM-CRCA-1.2");
  const [mrpData, setMrpData] = useState([
    { code: "RM-CRCA-1.2", desc: "CRCA Sheet 1.2mm", unit: "KG", stock: 3400, required: 6200, shortfall: 2800, status: "Critical", vendor: "Mehta Steel Works", rate: 68, leadTime: 5 },
    { code: "RM-ZINC-001", desc: "Zinc Coating Powder", unit: "KG", stock: 180, required: 420, shortfall: 240, status: "Critical", vendor: "Shah Chemicals", rate: 340, leadTime: 3 },
    { code: "RM-MSR-20", desc: "MS Round Bar 20mm", unit: "KG", stock: 0, required: 800, shortfall: 800, status: "Stock Out", vendor: "Gujarat Bearings Ltd.", rate: 55, leadTime: 4 },
    { code: "RM-MIG-001", desc: "MIG Welding Wire", unit: "Spools", stock: 45, required: 80, shortfall: 35, status: "Reorder Due", vendor: "Krishna Fasteners", rate: 480, leadTime: 6 },
    { code: "RM-PRIMER-RED", desc: "Primer Coat Red", unit: "Litres", stock: 120, required: 200, shortfall: 80, status: "Reorder Due", vendor: "Bharat Lubricants", rate: 180, leadTime: 2 },
    { code: "RM-CRCA-1.5", desc: "CRCA Sheet 1.5mm", unit: "KG", stock: 5200, required: 380, shortfall: 0, status: "Surplus", vendor: "Mehta Steel Works", rate: 72, leadTime: 5 },
    { code: "RM-ALU-2.0", desc: "Aluminium Sheet 2mm", unit: "KG", stock: 1800, required: 1400, shortfall: 0, status: "Normal", vendor: "Arvind Metals", rate: 220, leadTime: 4 },
    { code: "RM-HEX-M10", desc: "Hex Bolt M10", unit: "Pcs", stock: 8400, required: 12000, shortfall: 3600, status: "Reorder Due", vendor: "Patel Packaging", rate: 4.20, leadTime: 2 },
    { code: "RM-SPRING-STEEL", desc: "Spring Steel Strip", unit: "KG", stock: 900, required: 600, shortfall: 0, status: "Normal", vendor: "Mehta Steel Works", rate: 85, leadTime: 5 }
  ]);

  const selectedMaterial = mrpData.find((m) => m.code === selectedMaterialCode) || mrpData[0];

  const handleRaisePO = (code: string) => {
    setMrpData((prev) =>
      prev.map((item) =>
        item.code === code
          ? { ...item, status: "Normal", stock: item.stock + item.shortfall + 1000, shortfall: 0 }
          : item
      )
    );
    toast.success(`Purchase Requisition successfully pushed to SAP B1. Draft PO routed to ${selectedMaterial.vendor}.`);
  };

  const handleRaiseAllUrgent = () => {
    setMrpData((prev) =>
      prev.map((item) =>
        item.status === "Critical" || item.status === "Stock Out"
          ? { ...item, status: "Normal", stock: item.stock + item.shortfall + 1000, shortfall: 0 }
          : item
      )
    );
    toast.success("Bulk action complete: All urgent materials purchase requisitions successfully compiled and routed to SAP B1.");
  };

  // ----------------------------------------------------
  // SUBMODULE 1.6 STATE (Production vs Target Tracker)
  // ----------------------------------------------------
  const [ scoreboardData, setScoreboardData ] = useState([
    { line: "CNC Line 1", status: "Running", thisHr: 340, targetHr: 450, totalShift: 1420, totalTarget: 1800, oee: 64, color: "danger" },
    { line: "Assembly Line 2", status: "Running", thisHr: 510, targetHr: 480, totalShift: 2080, totalTarget: 1920, oee: 89, color: "success" },
    { line: "Stamping Line 3", status: "Changeover", thisHr: 0, targetHr: 380, totalShift: 980, totalTarget: 1520, oee: 71, color: "warning" },
    { line: "Welding Line 4", status: "Running", thisHr: 218, targetHr: 240, totalShift: 892, totalTarget: 960, oee: 81, color: "success" },
    { line: "Painting Line 5", status: "Running", thisHr: 145, targetHr: 150, totalShift: 588, totalTarget: 600, oee: 85, color: "success" },
    { line: "Dispatch Packing", status: "Running", thisHr: 280, targetHr: 300, totalShift: 1140, totalTarget: 1200, oee: 88, color: "success" }
  ]);
  const [trackerVariance, setTrackerVariance] = useState(-8.4);
  const [totalProducedToday, setTotalProducedToday] = useState(7000);

  // Tick the scoreboard actual values every 5 seconds to simulate live counters
  useEffect(() => {
    if (s.id === "1-6") {
      const interval = setInterval(() => {
        setScoreboardData((prev) =>
          prev.map((item) => {
            if (item.status === "Running") {
              const increment = Math.floor(Math.random() * 3) + 1;
              return {
                ...item,
                thisHr: item.thisHr + increment,
                totalShift: item.totalShift + increment
              };
            }
            return item;
          })
        );
        const dailyIncrement = Math.floor(Math.random() * 10) + 5;
        setTotalProducedToday((prev) => prev + dailyIncrement);
        setTrackerVariance((prev) => parseFloat((prev + 0.1).toFixed(1)));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [s.id]);

  // ----------------------------------------------------
  // SUBMODULE 1.7 STATE (Weekly Report Automation)
  // ----------------------------------------------------
  const [expandedReportPage, setExpandedReportPage] = useState<number | null>(null);
  const [reportGenStatus, setReportGenStatus] = useState<"idle" | "generating" | "complete">("idle");
  const [reportRecipients, setReportRecipients] = useState([
    { name: "Vikram Joshi", role: "Managing Director", active: true },
    { name: "Mahesh Kapoor", role: "Production Head", active: true },
    { name: "Deepak Trivedi", role: "Planning Manager", active: true }
  ]);

  const handleGenReport17 = () => {
    setReportGenStatus("generating");
    toast.loading("AI compiler is loading database structures, weekly charts, and shift OEE datasets...");
    setTimeout(() => {
      setReportGenStatus("complete");
      toast.dismiss();
      toast.success("Executive PDF planning report generated and queued for WhatsApp/Email distribution.");
    }, 2000);
  };

  const handleToggleRecipient = (idx: number) => {
    setReportRecipients((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, active: !r.active } : r))
    );
    toast.info("Report distribution list updated.");
  };

  // ----------------------------------------------------
  // SUBMODULE 2.1 STATE (Automated PO Generator)
  // ----------------------------------------------------
  const [pendingPRs21, setPendingPRs21] = useState([
    { id: "PR-2024-1047", material: "CRCA Sheet 1.2mm", qty: 3000, unit: "kg", requiredBy: "25 Jan", triggeredBy: "M1.5 MRP Agent", value: 204000, priority: "URGENT" },
    { id: "PR-2024-1048", material: "Zinc Coating Powder", qty: 500, unit: "kg", requiredBy: "27 Jan", triggeredBy: "M1.5 MRP Agent", value: 170000, priority: "URGENT" },
    { id: "PR-2024-1049", material: "MIG Welding Wire", qty: 40, unit: "spools", requiredBy: "30 Jan", triggeredBy: "Manual", value: 19200, priority: "Normal" },
    { id: "PR-2024-1050", material: "Hex Bolt M10", qty: 5000, unit: "pcs", requiredBy: "1 Feb", triggeredBy: "M1.5 MRP Agent", value: 21000, priority: "Normal" },
    { id: "PR-2024-1051", material: "Cutting Oil (Industrial)", qty: 200, unit: "litres", requiredBy: "3 Feb", triggeredBy: "Manual", value: 18400, priority: "Low" },
    { id: "PR-2024-1052", material: "Safety PPE Kits", qty: 20, unit: "sets", requiredBy: "5 Feb", triggeredBy: "Manual", value: 14000, priority: "Low" }
  ]);
  const [selectedPRId21, setSelectedPRId21] = useState("PR-2024-1047");
  const [poGenStatus21, setPoGenStatus21] = useState<"idle" | "generating" | "complete">("idle");
  const [poSteps21, setPoSteps21] = useState<string[]>([]);
  const [approvedPOs21, setApprovedPOs21] = useState([
    { poNumber: "PO-2024-1147", vendor: "Mehta Steel Works", value: 240720, status: "Sent to Vendor", confirmed: true, date: "22 Jan 2025, 10:14 AM" }
  ]);

  const activePR21 = pendingPRs21.find(p => p.id === selectedPRId21) || pendingPRs21[0];

  const triggerPO21 = () => {
    setPoGenStatus21("generating");
    setPoSteps21([]);
    toast.loading("Analyzing vendor master rates and lead times...");
    
    const steps = [
      "STEP 1 — Requisition Selected: " + activePR21.id + " (" + activePR21.material + ", " + activePR21.qty + " " + activePR21.unit + ")",
      "STEP 2 — Vendor Auto-Selected: Mehta Steel Works (preferred vendor, rate ₹68/kg)",
      "STEP 3 — PO Fields Populated: HSN 7209, GST 18%, delivery date " + activePR21.requiredBy,
      "STEP 4 — Approval Check: ₹" + (activePR21.value * 1.18).toLocaleString("en-IN") + " → requires Purchase Manager approval",
      "STEP 5 — Approval WhatsApp Sent: \"Approve PO #2024-1147 for Mehta Steel Works?\"",
      "STEP 6 — Approval Received (1 min 47 sec): Purchase Manager tapped \"Approve\"",
      "STEP 7 — PO Issued: Email PDF + WhatsApp to Suresh Mehta, Mehta Steel Works",
      "STEP 8 — ERP Updated: PO #2024-1147 logged — status: Sent to Vendor"
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setPoSteps21(prev => [...prev, step]);
        if (idx === steps.length - 1) {
          setPoGenStatus21("complete");
          setApprovedPOs21(prev => [
            {
              poNumber: `PO-2024-${Math.floor(Math.random() * 900) + 1100}`,
              vendor: activePR21.material.includes("Steel") ? "Mehta Steel Works" : activePR21.material.includes("Zinc") ? "Shah Chemicals" : "Arvind Metals",
              value: Math.floor(activePR21.value * 1.18),
              status: "Sent to Vendor",
              confirmed: true,
              date: new Date().toLocaleString()
            },
            ...prev
          ]);
          setPendingPRs21(prev => prev.filter(p => p.id !== activePR21.id));
          toast.dismiss();
          toast.success("Purchase Order auto-generated and dispatched successfully!");
        }
      }, (idx + 1) * 600);
    });
  };

  // ----------------------------------------------------
  // SUBMODULE 2.2 STATE (Vendor Follow-Up Automation)
  // ----------------------------------------------------
  const [openPOs22, setOpenPOs22] = useState([
    { id: "PO-24-2104", vendor: "Mehta Steel Works", material: "CRCA Sheet 1.5mm", date: "12/06/2026", days: 0, otd: 94, status: "On track", lastMsg: "Will deliver on time", escalated: false, transporter: "VRL Logistics", transitStatus: "In-Transit", risk: "Low", missingDocs: [], avgDelay: 0.3, channels: ["whatsapp", "email"], lastContact: "Today 09:12" },
    { id: "PO-24-2098", vendor: "Jain Polymers", material: "Primer Coat Red", date: "08/06/2026", days: -2, otd: 78, status: "Delayed 2d", lastMsg: "Delayed due to logistics", escalated: false, transporter: "Safexpress", transitStatus: "Delayed", risk: "Medium", missingDocs: ["Material Test Certificate"], avgDelay: 2.1, channels: ["whatsapp"], lastContact: "Today 10:40" },
    { id: "PO-24-2091", vendor: "Shah Chemicals", material: "Zinc Coating Powder", date: "04/06/2026", days: 3, otd: 84, status: "Dispatched", lastMsg: "Dispatched — LR: SC441", escalated: false, transporter: "Safexpress", transitStatus: "In-Transit", risk: "Low", missingDocs: ["e-Way Bill"], avgDelay: 1.5, channels: ["whatsapp", "email"], lastContact: "Yest. 16:20" },
    { id: "PO-24-2102", vendor: "Patel Packaging", material: "Hex Bolt M10", date: "10/06/2026", days: 1, otd: 88, status: "On track", lastMsg: "Acknowledge — will dispatch soon", escalated: false, transporter: "TCI Freight", transitStatus: "Pending Dispatch", risk: "Low", missingDocs: ["Tax Invoice"], avgDelay: 1.2, channels: ["email"], lastContact: "Today 08:55" },
    { id: "PO-24-2108", vendor: "Gujarat Bearings", material: "MS Round Bar 20mm", date: "14/06/2026", days: 5, otd: 71, status: "On track", lastMsg: "ETA confirmed", escalated: false, transporter: "VRL Logistics", transitStatus: "In-Transit", risk: "Low", missingDocs: [], avgDelay: 4.5, channels: ["whatsapp", "email"], lastContact: "Today 11:30" },
    { id: "PO-24-2110", vendor: "Arvind Metals", material: "Aluminium Sheet 2mm", date: "06/06/2026", days: -4, otd: 91, status: "Delayed 4d", lastMsg: "Waiting for raw material arrival", escalated: false, transporter: "Gati Cargo", transitStatus: "Delayed", risk: "High", missingDocs: [], avgDelay: 0.8, channels: ["whatsapp"], lastContact: "Today 09:45" },
    { id: "PO-24-2112", vendor: "Krishna Fasteners", material: "MIG Welding Wire", date: "09/06/2026", days: 2, otd: 82, status: "Dispatched", lastMsg: "Dispatched yesterday", escalated: false, transporter: "Gati Cargo", transitStatus: "In-Transit", risk: "Low", missingDocs: [], avgDelay: 1.9, channels: ["whatsapp"], lastContact: "Yest. 14:10" },
    { id: "PO-24-2115", vendor: "Bharat Lubricants", material: "Hydraulic Oil", date: "15/06/2026", days: 6, otd: 85, status: "Acknowledged", lastMsg: "PO received, confirming schedule", escalated: false, transporter: "TCI Freight", transitStatus: "Pending Dispatch", risk: "Low", missingDocs: [], avgDelay: 1.1, channels: ["whatsapp", "email"], lastContact: "Today 08:20" }
  ]);
  const [selectedPOId22, setSelectedPOId22] = useState("PO-24-2104");

  const activePO22 = openPOs22.find(p => p.id === selectedPOId22) || openPOs22[0];

  const handleEscalate22 = (poId: string) => {
    setOpenPOs22(prev => prev.map(p => p.id === poId ? { ...p, escalated: true, status: "Escalated" } : p));
    toast.success(`Escalation triggered for ${poId}! Notice sent to Purchase Manager.`);
  };

  const handleLogResponse22 = (poId: string, responseText: string) => {
    setOpenPOs22(prev => prev.map(p => p.id === poId ? { ...p, lastMsg: responseText } : p));
    toast.success(`Response manually logged for PO ${poId}.`);
  };

  // ----------------------------------------------------
  // SUBMODULE 2.3 STATE (GRN Matching Agent)
  // ----------------------------------------------------
  const [scanStatus23, setScanStatus23] = useState<"idle" | "uploading" | "extracting" | "complete">("idle");
  const [grnItems23, setGrnItems23] = useState([
    { id: 1, desc: "CRCA Sheet 1.2mm", poQty: 3000, received: 2840, codeMatch: true, rateMatch: true, status: "⚠️ Short -160 kg" },
    { id: 2, desc: "CRCA Sheet 1.5mm", poQty: 1500, received: 1500, codeMatch: true, rateMatch: true, status: "✅ Full Match" },
    { id: 3, desc: "MS Round Bar 20mm", poQty: 800, received: 800, codeMatch: true, rateMatch: true, status: "✅ Full Match" },
    { id: 4, desc: "Aluminium Sheet 2mm", poQty: 600, received: 600, codeMatch: true, rateMatch: true, status: "✅ Full Match" },
    { id: 5, desc: "Spring Steel Strip", poQty: 400, received: 400, codeMatch: true, rateMatch: true, status: "✅ Full Match" },
    { id: 6, desc: "Hex Bolt M10", poQty: 5000, received: 5000, codeMatch: true, rateMatch: true, status: "✅ Full Match" },
    { id: 7, desc: "CRCA Sheet 1.0mm", poQty: 200, received: 200, codeMatch: false, rateMatch: true, status: "🔴 Code Mismatch" },
    { id: 8, desc: "Packing Straps", poQty: 100, received: 100, codeMatch: true, rateMatch: true, status: "✅ Full Match" }
  ]);
  const [grnMatchesApproved23, setGrnMatchesApproved23] = useState(false);
  const [grnHeldLine23, setGrnHeldLine23] = useState(false);

  const runChallanScan23 = () => {
    setScanStatus23("uploading");
    toast.loading("Uploading scanned Challan DC-MS-2024-887...");
    setTimeout(() => {
      setScanStatus23("extracting");
      toast.loading("AI extracts line items (OCR Engine: 94% confidence)...");
      setTimeout(() => {
        setScanStatus23("complete");
        toast.dismiss();
        toast.success("AI extracted 8 line items. Linked to PO-2024-1147.");
      }, 1200);
    }, 1000);
  };

  // ----------------------------------------------------
  // SUBMODULE 2.4 STATE (Invoice Reconciliation & Approval)
  // ----------------------------------------------------
  const [selectedInvoiceId24, setSelectedInvoiceId24] = useState("JINV-2024-4821");
  const [invoices24, setInvoices24] = useState([
    { id: "JINV-2024-4821", vendor: "Jain Polymers", value: 35046, status: "Disputed", match: "Price deviation +10%", due: "24 Feb", po: "PO-2024-1151", grn: "GRN-2024-447", item: "Primer Coat Red", qty: 150, rate: 198, poRate: 180 },
    { id: "MSW-INV-447", vendor: "Mehta Steel Works", value: 193120, status: "Approved", match: "Full match", due: "23 Feb", po: "PO-2024-1147", grn: "GRN-2024-441", item: "CRCA Sheet 1.2mm", qty: 2840, rate: 68, poRate: 68 },
    { id: "GBL-2024-821", vendor: "Gujarat Bearings", value: 44000, status: "Pending", match: "Item code query", due: "21 Feb", po: "PO-2024-1148", grn: "GRN-2024-442", item: "MS Round Bar 20mm", qty: 800, rate: 55, poRate: 55 },
    { id: "SC-INV-2024-441", vendor: "Shah Chemicals", value: 170000, status: "Approved", match: "Full match", due: "26 Feb", po: "PO-2024-1152", grn: "GRN-2024-443", item: "Zinc Coating Powder", qty: 500, rate: 340, poRate: 340 },
    { id: "PP-INV-2024-212", vendor: "Patel Packaging", value: 21000, status: "Approved", match: "Full match", due: "28 Feb", po: "PO-2024-1155", grn: "GRN-2024-444", item: "Hex Bolt M10", qty: 5000, rate: 4.2, poRate: 4.2 }
  ]);

  const activeInvoice24 = invoices24.find(i => i.id === selectedInvoiceId24) || invoices24[0];

  const handleApproveInvoice24 = (id: string, usePoRate = false) => {
    setInvoices24(prev => prev.map(inv => inv.id === id ? { ...inv, status: "Approved", match: usePoRate ? "Approved at PO Rate" : "Full match" } : inv));
    toast.success(usePoRate ? `Invoice approved at approved PO rate (₹${activeInvoice24.poRate}). Disputed amount cleared.` : "Invoice approved for booking.");
  };

  const handleDisputeInvoice24 = (id: string) => {
    setInvoices24(prev => prev.map(inv => inv.id === id ? { ...inv, status: "Disputed" } : inv));
    toast.warning("Invoice marked as Disputed. Query routed to supplier.");
  };

  // ----------------------------------------------------
  // SUBMODULE 2.5 STATE (Vendor Performance Scorecard)
  // ----------------------------------------------------
  const [selectedVendorId25, setSelectedVendorId25] = useState("VND-012");
  const [vendors25, setVendors25] = useState([
    { id: "VND-001", name: "Mehta Steel Works", category: "Steel RM", score: 91, tier: "Star", otd: "94%", quality: "98%", pricing: "97%", resp: "94%", trend: "+3", pos: 6, spend: "12.4L", delay: "1.5d", rejected: "2.1%" },
    { id: "VND-002", name: "Shah Chemicals", category: "Chemicals", score: 88, tier: "Preferred", otd: "90%", quality: "95%", pricing: "91%", resp: "88%", trend: "0", pos: 4, spend: "6.8L", delay: "2d", rejected: "1.5%" },
    { id: "VND-003", name: "Patel Packaging", category: "Packaging", score: 86, tier: "Preferred", otd: "88%", quality: "97%", pricing: "89%", resp: "85%", trend: "+2", pos: 5, spend: "4.2L", delay: "1.2d", rejected: "1.1%" },
    { id: "VND-004", name: "Bharat Lubricants", category: "Consumables", score: 84, tier: "Preferred", otd: "87%", quality: "94%", pricing: "88%", resp: "82%", trend: "-1", pos: 3, spend: "3.8L", delay: "2.5d", rejected: "3.2%" },
    { id: "VND-008", name: "Gujarat Bearings", category: "Steel RM", score: 72, tier: "Acceptable", otd: "75%", quality: "86%", pricing: "78%", resp: "71%", trend: "-6", pos: 4, spend: "3.8L", delay: "4.5d", rejected: "5.4%" },
    { id: "VND-012", name: "Vikram Steel", category: "Steel RM", score: 47, tier: "At Risk", otd: "51%", quality: "72%", pricing: "58%", resp: "54%", trend: "-12", pos: 11, spend: "14.6L", delay: "6.5d", rejected: "8.4%" }
  ]);
  const [vendorActions25, setVendorActions25] = useState<Record<string, string>>({});

  const activeVendor25 = vendors25.find(v => v.id === selectedVendorId25) || vendors25[vendors25.length - 1];

  const handleVendorAction25 = (vendorId: string, action: string) => {
    setVendorActions25(prev => ({ ...prev, [vendorId]: action }));
    toast.success(`Action "${action}" triggered for vendor.`);
  };

  // ----------------------------------------------------
  // SUBMODULE 2.6 STATE (Spend & Budget Analytics)
  // ----------------------------------------------------
  const [spendData26, setSpendData26] = useState([
    { cat: "Raw Materials — Steel", budget: 36.0, spent: 38.4, status: "Over Budget" },
    { cat: "Raw Materials — Non-Ferrous", budget: 8.0, spent: 7.2, status: "Under Budget" },
    { cat: "Consumables", budget: 4.0, spent: 3.8, status: "On Track" },
    { cat: "Packaging Materials", budget: 3.0, spent: 2.9, status: "On Track" },
    { cat: "Maintenance Spares", budget: 2.5, spent: 3.1, status: "Over Budget" },
    { cat: "Safety & PPE", budget: 0.8, spent: 0.7, status: "Under Budget" }
  ]);
  const [selectedMaterialName26, setSelectedMaterialName26] = useState("Primer Coat Red");
  const [materials26, setMaterials26] = useState([
    { name: "CRCA Sheet 1.2mm", std: 65, actual: 68, variance: "+4.6%", trend: "Rising 3 months" },
    { name: "MS Round Bar 20mm", std: 53, actual: 55, variance: "+3.8%", trend: "Stable" },
    { name: "Zinc Coating Powder", std: 330, actual: 340, variance: "+3.0%", trend: "Rising 2 months" },
    { name: "Aluminium Sheet 2mm", std: 218, actual: 220, variance: "+0.9%", trend: "Stable" },
    { name: "Primer Coat Red", std: 180, actual: 198, variance: "+10.0%", trend: "Spike — query raised" }
  ]);
  const [cfoReportStatus26, setCfoReportStatus26] = useState<"idle" | "generating" | "done">("idle");

  const activeMaterial26 = materials26.find(m => m.name === selectedMaterialName26) || materials26[4];

  const handleCFOReport26 = () => {
    setCfoReportStatus26("generating");
    toast.loading("AI compiler compiling spend ledger databases...");
    setTimeout(() => {
      setCfoReportStatus26("done");
      toast.dismiss();
      toast.success("CFO MIS PDF report generated and pushed to Anita Kapoor (CFO) via WhatsApp.");
    }, 1500);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.1 STATE (Inspection Data Capture)
  // ----------------------------------------------------
  const [inspections31, setInspections31] = useState([
    { id: "INS-2024-8841", batch: "B-4821", product: "MS-204", stage: "Final", line: "CNC Line 1", qty: 1000, sampleSize: 80, defects: 7, result: "REJECT", defectType: "Surface — Scratches", date: "24 Jan 2025", time: "14:22", inspector: "Suresh Nair" },
    { id: "INS-2024-8842", batch: "B-4820", product: "MS-208", stage: "Final", line: "CNC Line 1", qty: 800, sampleSize: 80, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "13:10", inspector: "Suresh Nair" },
    { id: "INS-2024-8843", batch: "B-4815", product: "PC-112", stage: "Final", line: "Assembly 2", qty: 500, sampleSize: 50, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "11:15", inspector: "Suresh Nair" },
    { id: "INS-2024-8844", batch: "RM-2024-441", product: "CRCA 1.2mm", stage: "Incoming", line: "Stores", qty: 3000, sampleSize: 32, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "10:30", inspector: "Suresh Nair" },
    { id: "INS-2024-8845", batch: "B-4822", product: "SP-044", stage: "In-Process", line: "Stamping 3", qty: 200, sampleSize: 20, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "09:40", inspector: "Suresh Nair" },
    { id: "INS-2024-8846", batch: "B-4818", product: "MS-212", stage: "Final", line: "CNC Line 1", qty: 400, sampleSize: 50, defects: 3, result: "HOLD", defectType: "Dimensional — Borderline", date: "24 Jan 2025", time: "09:10", inspector: "Suresh Nair" },
    { id: "INS-2024-8847", batch: "B-4819", product: "PC-118", stage: "Final", line: "Assembly 2", qty: 900, sampleSize: 80, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "08:50", inspector: "Suresh Nair" },
    { id: "INS-2024-8848", batch: "B-4816", product: "MS-204", stage: "Pre-Dispatch", line: "Dispatch", qty: 800, sampleSize: 80, defects: 0, result: "PASS", defectType: "None", date: "24 Jan 2025", time: "08:15", inspector: "Suresh Nair" }
  ]);
  const [selectedInsId31, setSelectedInsId31] = useState("INS-2024-8841");
  const [newInsBatch31, setNewInsBatch31] = useState("B-4825");
  const [newInsProduct31, setNewInsProduct31] = useState("MS-204");
  const [newInsWall31, setNewInsWall31] = useState("3.24"); // Max 3.20
  const [newInsSurface31, setNewInsSurface31] = useState("4.1"); // Max 3.2
  const [newInsDefects31, setNewInsDefects31] = useState("7");

  const handleRaiseManualNcr31 = (ins: any) => {
    toast.success(`NCR successfully raised for batch ${ins.batch} - ${ins.product}`);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.2 STATE (NCR Management Agent)
  // ----------------------------------------------------
  const [ncrList32, setNcrList32] = useState([
    { id: "NCR-2024-441", date: "22 Jan 2025", product: "MS-204", batch: "B-4821", defect: "Surface Finish (scratches) + Wall Thickness above USL (3.24mm vs 3.20mm)", type: "Surface Finish", severity: "Major", age: 2, owner: "Vijay Sharma", status: "In Progress", details: "Worn fixture pad on CNC-01 causing micro-vibration", containment: "Full lot segregated in Hold Area B" },
    { id: "NCR-2024-438", date: "19 Jan 2025", product: "MS-208", batch: "B-4809", defect: "Hole position deviation on stamped bracket (+0.45mm)", type: "Dimensional", severity: "Major", age: 5, owner: "Arun Patel", status: "Root Cause Pending", details: "Awaiting tooling wear verification reports", containment: "Segregated at welding cell" },
    { id: "NCR-2024-435", date: "16 Jan 2025", product: "PC-112", batch: "B-4801", defect: "Burr on casting flange edge exceeding Ra 12.5", type: "Surface Finish", severity: "Minor", age: 8, owner: "Priya Mehta", status: "Corrective Action Done", details: "Deburring cutter replaced on station 4", containment: "Manual deburring completed" },
    { id: "NCR-2024-431", date: "12 Jan 2025", product: "SP-044", batch: "B-4795", defect: "Surface scratches on stamped body panel", type: "Surface Finish", severity: "Major", age: 12, owner: "Vijay Sharma", status: "Overdue", details: "Fixture alignment check outstanding", containment: "Held in rework cell" },
    { id: "NCR-2024-428", date: "10 Jan 2025", product: "MS-212", batch: "B-4788", defect: "Profile profile deviation on outer chamfer", type: "Dimensional", severity: "Major", age: 14, owner: "Arun Patel", status: "Overdue", details: "CNC offset check pending", containment: "100% inspection ordered" },
    { id: "NCR-2024-422", date: "06 Jan 2025", product: "PC-118", batch: "B-4780", defect: "Missing material test certificate from steel supplier", type: "Documentation", severity: "Minor", age: 18, owner: "Suresh Nair", status: "Awaiting Sign-off", details: "Supplier has emailed cert; awaiting upload check", containment: "Batch tagged in warehouse" },
    { id: "NCR-2024-419", date: "03 Jan 2025", product: "MS-204", batch: "B-4774", defect: "Orange peel texture on powder coated cover", type: "Surface Finish", severity: "Minor", age: 21, owner: "Deepak Joshi", status: "Corrective Action Done", details: "Oven temperature profile calibrated", containment: "Rework completed" }
  ]);
  const [selectedNcrId32, setSelectedNcrId32] = useState("NCR-2024-441");

  const handleCloseNcr32 = (id: string) => {
    setNcrList32(prev => prev.map(n => n.id === id ? { ...n, status: "Closed", age: 0 } : n));
    toast.success(`NCR ${id} closed successfully.`);
  };

  const handleEscalateNcr32 = (id: string) => {
    toast.error(`NCR ${id} escalated to QA Head Sunita Patel & MD Vikram Joshi via WhatsApp.`);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.3 STATE (Batch Record & Traceability Engine)
  // ----------------------------------------------------
  const [batchQuery33, setBatchQuery33] = useState("B-4821");
  const [traceType33, setTraceType33] = useState<"Backward" | "Forward" | "Cross-batch">("Backward");
  const [traceStatus33, setTraceStatus33] = useState<"idle" | "tracing" | "complete">("idle");
  const [traceExpandedNode33, setTraceExpandedNode33] = useState<string | null>("B-4821");

  const runTraceQuery33 = () => {
    setTraceStatus33("tracing");
    toast.loading(`Executing ${traceType33} trace query for: "${batchQuery33}"...`);
    setTimeout(() => {
      setTraceStatus33("complete");
      setTraceExpandedNode33(batchQuery33);
      toast.dismiss();
      toast.success(`Trace mapping completed in 6 seconds!`);
    }, 1500);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.4 STATE (Auto-Generated Compliance Reports)
  // ----------------------------------------------------
  const [reports34, setReports34] = useState([
    { id: "RPT-2024-ISO-JAN", name: "ISO 9001 Management Review", period: "Jan 2025", date: "31 Jan 23:58", pages: 12, status: "Approved & Issued", recipients: "MD, QA Head, HODs" },
    { id: "RPT-2024-NCR-JAN", name: "NCR Monthly Summary", period: "Jan 2025", date: "31 Jan 23:59", pages: 5, status: "Issued", recipients: "QA Head, Prod Head" },
    { id: "RPT-2024-CAPA-W3", name: "CAPA Status Report", period: "W3 Jan 2025", date: "19 Jan 08:00", pages: 4, status: "Issued", recipients: "QA Head, HODs" },
    { id: "RPT-2024-CAL-JAN", name: "Calibration Compliance Report", period: "Jan 2025", date: "1 Feb 08:00", pages: 3, status: "Issued", recipients: "QA Head" },
    { id: "RPT-2024-COMP-JAN", name: "Customer Complaint Summary", period: "Jan 2025", date: "1 Feb 08:05", pages: 5, status: "Draft — Pending Review", recipients: "QA Head" },
    { id: "RPT-2024-PPAP-204", name: "PPAP — MS-204 (Tata AutoComp)", period: "On-demand", date: "19 Jan 14:22", pages: 18, status: "Issued", recipients: "Customer QA" }
  ]);
  const [selectedReportId34, setSelectedReportId34] = useState("RPT-2024-ISO-JAN");
  const [reportGenStatus34, setReportGenStatus34] = useState<"idle" | "generating" | "complete">("idle");

  const triggerReportGen34 = () => {
    setReportGenStatus34("generating");
    toast.loading("AI compiler compiling QMS records database...");
    setTimeout(() => {
      setReportGenStatus34("complete");
      const newId = `RPT-2024-GEN-${Math.floor(Math.random() * 9000) + 1000}`;
      setReports34(prev => [
        { id: newId, name: "ISO 9001 Management Review Draft", period: "Feb 2025", date: new Date().toLocaleString(), pages: 12, status: "Draft — Pending Review", recipients: "QA Head" },
        ...prev
      ]);
      setSelectedReportId34(newId);
      toast.dismiss();
      toast.success("Compliance PDF report compiled successfully!");
    }, 1800);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.5 STATE (SPC Monitor)
  // ----------------------------------------------------
  const [selectedCtq35, setSelectedCtq35] = useState("Wall Thickness");
  const [spcSubgroups35, setSpcSubgroups35] = useState<any[]>([
    { subgroup: 1, mean: 3.02, range: 0.10, ooc: false },
    { subgroup: 2, mean: 3.01, range: 0.08, ooc: false },
    { subgroup: 3, mean: 2.99, range: 0.12, ooc: false },
    { subgroup: 4, mean: 3.03, range: 0.09, ooc: false },
    { subgroup: 5, mean: 3.00, range: 0.11, ooc: false },
    { subgroup: 6, mean: 2.98, range: 0.13, ooc: false },
    { subgroup: 7, mean: 3.04, range: 0.08, ooc: false },
    { subgroup: 8, mean: 3.02, range: 0.10, ooc: false },
    { subgroup: 9, mean: 3.01, range: 0.11, ooc: false },
    { subgroup: 10, mean: 2.99, range: 0.09, ooc: false },
    { subgroup: 11, mean: 3.00, range: 0.07, ooc: false },
    { subgroup: 12, mean: 3.03, range: 0.14, ooc: false },
    { subgroup: 13, mean: 3.01, range: 0.12, ooc: false },
    { subgroup: 14, mean: 3.05, range: 0.10, ooc: false },
    { subgroup: 15, mean: 3.02, range: 0.09, ooc: false },
    { subgroup: 16, mean: 2.98, range: 0.11, ooc: false },
    { subgroup: 17, mean: 2.99, range: 0.08, ooc: false },
    { subgroup: 18, mean: 3.01, range: 0.13, ooc: false },
    { subgroup: 19, mean: 3.04, range: 0.10, ooc: false },
    { subgroup: 20, mean: 3.00, range: 0.09, ooc: false },
    { subgroup: 21, mean: 3.08, range: 0.16, ooc: false },
    { subgroup: 22, mean: 3.12, range: 0.18, ooc: false },
    { subgroup: 23, mean: 3.148, range: 0.20, ooc: true, rule: "Rule 5: 2 of 3 beyond +2σ" },
    { subgroup: 24, mean: 3.162, range: 0.20, ooc: true, rule: "Rule 1: Point beyond UCL" },
    { subgroup: 25, mean: 3.168, range: 0.22, ooc: true, rule: "Rule 1: Point beyond UCL" }
  ]);
  const [newReading35, setNewReading35] = useState("3.17");

  const handleAddSpcReading35 = () => {
    const val = parseFloat(newReading35);
    if (isNaN(val)) return;
    
    const ucl = 3.148;
    const lcl = 2.852;
    const isOoc = val > ucl || val < lcl;
    
    setSpcSubgroups35(prev => [
      ...prev,
      {
        subgroup: prev.length + 1,
        mean: val,
        range: 0.10,
        ooc: isOoc,
        rule: isOoc ? "Rule 1: Point beyond LCL/UCL" : undefined
      }
    ]);
    
    if (isOoc) {
      toast.error(`SPC Out of Control! Point ${val} exceeds Control Limits.`);
    } else {
      toast.success("SPC measurement reading added in control.");
    }
  };

  // ----------------------------------------------------
  // SUBMODULE 3.6 STATE (Calibration Management Agent)
  // ----------------------------------------------------
  const [instruments36, setInstruments36] = useState([
    { id: "VN-201", name: "Vernier Calliper 0–300mm", location: "CNC Line 1", due: "15 Mar 2025", days: 52, status: "Compliant", cert: "CAL-2024-201", hold: false, custodian: "Ramesh Kumar" },
    { id: "VN-204", name: "Micrometer 0–25mm", location: "CNC Line 1", due: "28 Jan 2025", days: -4, status: "Overdue", cert: "CAL-2024-VN204-001", hold: true, custodian: "Ramesh Kumar" },
    { id: "VN-207", name: "Height Gauge 0-600mm", location: "QC Lab", due: "14 Feb 2025", days: 23, status: "Due Soon", cert: "CAL-2024-207", hold: false, custodian: "Suresh Nair" },
    { id: "VN-210", name: "Go/No-Go Gauge M12", location: "Assembly 2", due: "8 Feb 2025", days: 17, status: "Due Soon", cert: "CAL-2024-210", hold: false, custodian: "Priya Mehta" },
    { id: "VN-214", name: "Surface Roughness Tester", location: "CNC Line 1", due: "20 Jan 2025", days: -8, status: "Overdue", cert: "CAL-2024-214", hold: true, custodian: "Deepak Joshi" },
    { id: "VN-218", name: "Bore Gauge 12–18mm", location: "CNC Line 1", due: "22 Jan 2025", days: 0, status: "Overdue", cert: "CAL-2024-218", hold: true, custodian: "Ramesh Kumar" },
    { id: "VN-221", name: "Vernier Calliper 0–150mm", location: "Welding 4", due: "5 Apr 2025", days: 73, status: "Compliant", cert: "CAL-2024-221", hold: false, custodian: "Arun Patel" },
    { id: "VN-225", name: "Precision Balance 0–500g", location: "QC Lab", due: "1 Mar 2025", days: 38, status: "Compliant", cert: "CAL-2024-225", hold: false, custodian: "Suresh Nair" }
  ]);
  const [selectedInstId36, setSelectedInstId36] = useState("VN-204");

  const handleToggleHold36 = (id: string) => {
    setInstruments36(prev => prev.map(inst => inst.id === id ? { ...inst, hold: !inst.hold } : inst));
    toast.info("Instrument QA Hold status updated.");
  };

  const handleScheduleCalib36 = (id: string) => {
    setInstruments36(prev => prev.map(inst => inst.id === id ? { ...inst, status: "Compliant", days: 180, hold: false, due: "Next recalibrated standard date" } : inst));
    toast.success(`Calibration booked for instrument ${id} with Metrology Lab, Ahmedabad.`);
  };

  // ----------------------------------------------------
  // SUBMODULE 3.7 STATE (Customer Complaint Quality Linkage)
  // ----------------------------------------------------
  const [complaints37, setComplaints37] = useState([
    { id: "CMP-2024-441", customer: "Kapoor Industries", product: "MS-204", defect: "Surface scratches observed on ~200 of 1,000 units received", qty: 200, batch: "B-4821", status: "D1–D4 Done", "8dStatus": "D1-D4 Pre-populated", ncr: "NCR-2024-441", date: "27 Jan 2025" },
    { id: "CMP-2024-438", customer: "Tata AutoComp", product: "MS-208", defect: "Hole position offset makes assembly brackets stiff to screw", qty: 50, batch: "B-4809", status: "D1–D2 Done", "8dStatus": "D1-D2 Pre-populated", ncr: "NCR-2024-438", date: "24 Jan 2025" },
    { id: "CMP-2024-435", customer: "Maruti Ancillaries", product: "PC-112", defect: "Flange thickness deviation of 0.4mm causes loose casting fit", qty: 30, batch: "B-4797", status: "Draft", "8dStatus": "Draft Started", ncr: "None", date: "21 Jan 2025" }
  ]);
  const [selectedCompId37, setSelectedCompId37] = useState("CMP-2024-441");
  const [d5ToD8Answers37, setD5ToD8Answers37] = useState<Record<string, { d5: string; d6: string; d7: string; d8: string }>>({
    "CMP-2024-441": { d5: "Use secondary supplier fixture template plates", d6: "Fitted micro-switches to check template alignment", d7: "Updated standard QMS program reference file doc to PRG-MS204-V3.2", d8: "QA Team + CNC Operations recognized in weekly shift reviews" }
  });

  const activeComp37 = complaints37.find(c => c.id === selectedCompId37) || complaints37[0];

  const handleSave8DAnswers37 = (id: string, answers: { d5: string; d6: string; d7: string; d8: string }) => {
    setD5ToD8Answers37(prev => ({ ...prev, [id]: answers }));
    setComplaints37(prev => prev.map(c => c.id === id ? { ...c, status: "Complete", "8dStatus": "8D Complete & Signed Off" } : c));
    toast.success("8D Report updated. Document locked and filed.");
  };

  // ----------------------------------------------------
  // SUBMODULE 3.1 HANDLERS
  // ----------------------------------------------------
  const activeIns31 = inspections31.find(ins => ins.id === selectedInsId31) || inspections31[0];

  const handleAddInspection31 = () => {
    const isOut = parseFloat(newInsWall31) > 3.20 || parseFloat(newInsSurface31) > 3.2;
    const result = isOut ? "REJECT" : "PASS";
    const newIns = {
      id: `INS-2024-${Math.floor(Math.random() * 9000) + 8850}`,
      batch: newInsBatch31,
      product: newInsProduct31,
      stage: "Final" as const,
      line: "CNC Line 1" as const,
      qty: 1000,
      sampleSize: 80,
      defects: isOut ? parseInt(newInsDefects31) : 0,
      result,
      defectType: isOut ? "Surface — Scratches & Wall Deviation" : "None",
      date: new Date().toLocaleDateString("en-IN"),
      time: new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      inspector: "Suresh Nair"
    };

    setInspections31(prev => [newIns, ...prev]);
    setSelectedInsId31(newIns.id);
    
    if (isOut) {
      // Auto trigger NCR
      const newNcr = {
        id: `NCR-2024-${Math.floor(Math.random() * 90) + 442}`,
        date: new Date().toLocaleDateString("en-IN"),
        product: newInsProduct31,
        batch: newInsBatch31,
        defect: `Final IQC Check: Wall thickness ${newInsWall31}mm and Surface roughness Ra ${newInsSurface31} exceeds spec limit.`,
        type: "Surface Finish",
        severity: "Major",
        age: 0,
        owner: "Vijay Sharma",
        status: "In Progress",
        details: "Auto NCR raised from shop floor inspection failure.",
        containment: "Lot segregated at CNC Line 1 hold bin."
      };
      setNcrList32(prev => [newNcr, ...prev]);
      toast.error(`Inspection FAILED. Auto-generated NCR ${newNcr.id} for batch ${newInsBatch31}.`);
    } else {
      toast.success("Inspection PASSED. Roster cleared.");
    }
  };

  // ====================================================
  // SUBMODULE 4.1 STATE (Dealer WhatsApp AI Agent)
  // ====================================================
  const [selectedDealer41, setSelectedDealer41] = useState("Patel Agencies, Rajkot");
  const [typing41, setTyping41] = useState(false);
  const [messages41, setMessages41] = useState<Record<string, { sender: "dealer" | "ai"; time: string; text: string; responseTime?: string }[]>>({
    "Patel Agencies, Rajkot": [
      { sender: "dealer", time: "9:47 PM", text: "Kem cho, mara order #ORD-2024-1041 no status shu che? (Hi, what is the status of my order #ORD-2024-1041?)" },
      { sender: "ai", time: "9:47 PM", text: "Namaste Patel Agencies! 🙏\n\nYour order #ORD-2024-1041 details:\n• Items: MS-204 × 500 units, SP-044 × 200 units\n• Status: ✅ QC Cleared — Dispatch Scheduled\n• Dispatch Date: Tomorrow, 23rd Jan (Morning)\n• Transporter: Saurashtra Transport\n• Estimated Delivery: 24th or 25th Jan\n\nYou will receive the LR number on WhatsApp once the truck is loaded tomorrow morning.\n\nIs there anything else I can help you with?", responseTime: "11s" },
      { sender: "dealer", time: "9:48 PM", text: "Ok thanks. Also do you have MS-208 in stock? Need 300 units." },
      { sender: "ai", time: "9:48 PM", text: "MS-208 Stock Update:\n• Available now: 840 units ✅\n• Your trade price: ₹1,240/unit\n• For 300 units: ₹3,72,000 + GST\n\nShall I book this order? Reply CONFIRM and I will create it right away.", responseTime: "8s" }
    ],
    "Sharma Distributors, Vadodara": [
      { sender: "dealer", time: "9:30 PM", text: "Do you have PC-118 in stock?" },
      { sender: "ai", time: "9:31 PM", text: "PC-118 Stock Update:\n• Available now: 520 units ✅\n• Your rate: ₹1,100/unit.\n\nWould you like to place an order?", responseTime: "8s" }
    ],
    "Jain Traders, Surat": [
      { sender: "dealer", time: "8:53 PM", text: "Please share LR number for yesterday's load." },
      { sender: "ai", time: "8:55 PM", text: "Sure Jain Traders! LR No: TM24-88685 via Surat Fast Lines. Estimated delivery tomorrow.", responseTime: "14s" }
    ]
  });
  const [chatInput41, setChatInput41] = useState("");
  const [queryLog41, setQueryLog41] = useState([
    { time: "9:47 PM", dealer: "Patel Agencies, Rajkot", type: "Order Status", timeTaken: "11s", status: "Resolved" },
    { time: "9:31 PM", dealer: "Sharma Distributors, Vadodara", type: "Stock Inquiry", timeTaken: "8s", status: "Resolved" },
    { time: "8:55 PM", dealer: "Jain Traders, Surat", type: "Dispatch LR Number", timeTaken: "14s", status: "Resolved" },
    { time: "7:20 PM", dealer: "Kumar Enterprises, Ahmedabad", type: "Credit Limit Query", timeTaken: "9s", status: "Resolved" },
    { time: "6:44 PM", dealer: "Mehta Brothers, Rajkot", type: "Return Request", timeTaken: "—", status: "Escalated to Sales" },
    { time: "4:10 PM", dealer: "Desai & Co., Surat", type: "Price Inquiry", timeTaken: "7s", status: "Resolved" }
  ]);

  const handleSendMessage41 = () => {
    if (!chatInput41.trim()) return;
    const txt = chatInput41;
    const dealerName = selectedDealer41;
    const userMsg = { sender: "dealer" as const, time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), text: txt };
    
    setMessages41(prev => ({
      ...prev,
      [dealerName]: [...(prev[dealerName] || []), userMsg]
    }));
    setChatInput41("");
    setTyping41(true);

    setTimeout(() => {
      setTyping41(false);
      let replyText = "Understood. Let me check our SAP B1 stock ledgers and get back to you.";
      let intent = "General Inquiry";
      
      if (txt.toLowerCase().includes("confirm")) {
        replyText = "✅ Order Confirmed!\nOrder #ORD-2024-1048 created.\n• MS-208 × 300 units — ₹3,72,000 + GST\n• Tentative dispatch: 25th Jan (subject to schedule)\n\nYour sales contact Suresh Nair has been notified.\nThank you! 🙏";
        intent = "New Order";
        setOrders42(prev => [
          { id: "ORD-2024-1048", dealer: "Patel Agencies, Rajkot", channel: "WhatsApp", items: "MS-208 × 300", value: "₹3.72L", status: "ERP Created", progress: "created" },
          ...prev
        ]);
      } else if (txt.toLowerCase().includes("stock") || txt.toLowerCase().includes("available")) {
        replyText = "Stock Status:\n• MS-204: 1,200 units available ✅\n• SP-044: 450 units available ✅\n• PC-112: 120 units available (due to assembly backlog) ⚠️";
        intent = "Stock Inquiry";
      }

      const aiMsg = { sender: "ai" as const, time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), text: replyText, responseTime: "9s" };
      setMessages41(prev => ({
        ...prev,
        [dealerName]: [...(prev[dealerName] || []), aiMsg]
      }));

      setQueryLog41(prev => [
        { time: new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }), dealer: dealerName, type: intent, timeTaken: "9s", status: "Resolved" },
        ...prev
      ]);
      toast.success("AI WhatsApp Response Dispatched!");
    }, 1500);
  };

  // ====================================================
  // SUBMODULE 4.2 STATE (Order Intake Automation)
  // ====================================================
  const [orders42, setOrders42] = useState([
    { id: "ORD-2024-1047", dealer: "Shah Merchants, Surat", channel: "Email", items: "PC-112 × 150, MS-204 × 500", value: "₹5.14L", status: "ERP Created", progress: "created" },
    { id: "ORD-2024-1046", dealer: "Parikh Agencies, Ahmedabad", channel: "WhatsApp", items: "SP-044 × 400", value: "₹2.88L", status: "ERP Created", progress: "created" },
    { id: "ORD-2024-1045", dealer: "Trivedi Trading, Rajkot", channel: "Portal", items: "MS-212 × 200, PC-118 × 100", value: "₹3.96L", status: "ERP Created", progress: "created" },
    { id: "ORD-2024-1044", dealer: "Kumar Enterprises, Ahmedabad", channel: "WhatsApp", items: "MS-204 × 800", value: "₹4.64L", status: "Credit Hold — Sales Review", progress: "validated" },
    { id: "ORD-2024-1043", dealer: "Desai & Co., Surat", channel: "WhatsApp", items: "MS-208 × 250", value: "₹3.10L", status: "ERP Created", progress: "created" }
  ]);
  const [selectedOrderId42, setSelectedOrderId42] = useState("ORD-2024-1044");
  const [parsingStep42, setParsingStep42] = useState<"idle" | "parsing" | "complete">("idle");

  const activeOrder42 = orders42.find(o => o.id === selectedOrderId42) || orders42[0];

  const handleSimulateParse42 = () => {
    setParsingStep42("parsing");
    toast.loading("AI parsing new incoming order request from Patel Agencies WhatsApp...");
    setTimeout(() => {
      setParsingStep42("complete");
      toast.dismiss();
      toast.success("Order validated! Standard slab pricing B and credit limit limits passed successfully.");
    }, 1800);
  };

  const handleApproveOrder42 = (id: string) => {
    setOrders42(prev => prev.map(o => o.id === id ? { ...o, status: "ERP Created", progress: "created" } : o));
    toast.success(`Order ${id} approved & logged into SAP B1 ERP successfully.`);
  };

  const handleRejectOrder42 = (id: string) => {
    setOrders42(prev => prev.map(o => o.id === id ? { ...o, status: "Rejected", progress: "idle" } : o));
    toast.error(`Order ${id} rejected and credit hold warning notified to accounts.`);
  };

  // ====================================================
  // SUBMODULE 4.3 STATE (Dispatch & Logistics Updates)
  // ====================================================
  const [shipments43, setShipments43] = useState([
    { id: "ORD-2024-1036", dealer: "Sharma Dist., Vadodara", dispatchDate: "21 Jan", lr: "TM24-88710", transporter: "Vadodara Transport", status: "In Transit", delay: 0 },
    { id: "ORD-2024-1035", dealer: "Shah Merchants, Surat", dispatchDate: "21 Jan", lr: "TM24-88715", transporter: "Saurashtra Transport", status: "In Transit", delay: 0 },
    { id: "ORD-2024-1034", dealer: "Trivedi Trading, Rajkot", dispatchDate: "21 Jan", lr: "TM24-88718", transporter: "Rajkot Carriers", status: "In Transit", delay: 0 },
    { id: "ORD-2024-1033", dealer: "Kumar Ent., Ahmedabad", dispatchDate: "19 Jan", lr: "TM24-88690", transporter: "Gujarat Express", status: "Delayed", delay: 2 },
    { id: "ORD-2024-1032", dealer: "Jain Traders, Surat", dispatchDate: "19 Jan", lr: "TM24-88685", transporter: "Surat Fast Lines", status: "Delayed", delay: 1 },
    { id: "ORD-2024-1041", dealer: "Patel Agencies, Rajkot", dispatchDate: "23 Jan (sched.)", lr: "—", transporter: "Saurashtra Transport", status: "Scheduled", delay: 0 }
  ]);
  const [selectedShipId43, setSelectedShipId43] = useState("ORD-2024-1033");
  const [notificationsSent43, setNotificationsSent43] = useState([
    { time: "Today 8:12 AM", dealer: "Patel Agencies", type: "Scheduled Alert", status: "Read" },
    { time: "Yesterday 4:30 PM", dealer: "Shah Merchants", type: "Dispatch Track Link", status: "Delivered" },
    { time: "Yesterday 11:20 AM", dealer: "Kumar Enterprises", type: "Delay Apology Alert", status: "Read" }
  ]);

  const activeShipment43 = shipments43.find(s => s.id === selectedShipId43) || shipments43[0];

  const handleSendManualUpdate43 = (shipmentId: string) => {
    toast.success(`WhatsApp tracking update pushed to dealer for Shipment ${shipmentId} manually.`);
    setNotificationsSent43(prev => [
      { time: "Just Now", dealer: activeShipment43.dealer.split(",")[0], type: "Manual Track Log", status: "Sent" },
      ...prev
    ]);
  };

  const handleTriggerDelayAlert43 = (shipmentId: string) => {
    setShipments43(prev => prev.map(s => s.id === shipmentId ? { ...s, status: "Delayed", delay: s.delay + 1 } : s));
    toast.error(`Delay notification sent via WhatsApp to ${activeShipment43.dealer}.`);
  };

  // ====================================================
  // SUBMODULE 4.4 STATE (Secondary Sales Tracking)
  // ====================================================
  const [sellThroughData44, setSellThroughData44] = useState([
    { dealer: "Patel Agencies, Rajkot", product: "MS-208", stock: 180, sold: 210, primary: 500, status: "Fast Mover" },
    { dealer: "Sharma Distributors, Vadodara", product: "PC-118", stock: 518, sold: 82, primary: 600, status: "Stagnant" },
    { dealer: "Jain Traders, Surat", product: "SP-044", stock: 560, sold: 240, primary: 800, status: "High Stock" },
    { dealer: "Shah Merchants, Surat", product: "MS-204", stock: 120, sold: 410, primary: 600, status: "Fast Mover" },
    { dealer: "Kumar Enterprises, Ahmedabad", product: "MS-212", stock: 90, sold: 85, primary: 200, status: "Normal" }
  ]);
  const [selectedAlertIndex44, setSelectedAlertIndex44] = useState(1);

  const handleAddressStagnation44 = (dealer: string, action: string) => {
    toast.success(`Action "${action}" applied for ${dealer} stagnation mitigation.`);
    setSellThroughData44(prev => prev.map(item => item.dealer === dealer ? { ...item, status: "Under Review" } : item));
  };

  // ====================================================
  // SUBMODULE 4.5 STATE (Payment Follow-Up Automation)
  // ====================================================
  const [receivables45, setReceivables45] = useState([
    { dealer: "Sharma Dist., Vadodara", inv: "INV-2024-4421", amount: 284000, due: "22 Jan 2025", days: 0, stage: "Due Today", status: "Reminder Sent", creditLimit: 3000000, creditUtilized: 1850000, region: "West", ptpCompliance: 88, gstNo: "24AAACS1234A1ZA" },
    { dealer: "Kumar Ent., Ahmedabad", inv: "INV-2024-4398", amount: 412000, due: "15 Jan 2025", days: 7, stage: "T+7 Sent", status: "Awaiting Reply", creditLimit: 5000000, creditUtilized: 4260000, region: "West", ptpCompliance: 92, gstNo: "24BBBBD5678B1ZB" },
    { dealer: "Jain Traders, Surat", inv: "INV-2024-4389", amount: 196000, due: "07 Jan 2025", days: 15, stage: "T+15 Sent", status: "Escalated to RSM", creditLimit: 2000000, creditUtilized: 1480000, region: "West", ptpCompliance: 65, gstNo: "24CCCCE9012C1ZC" },
    { dealer: "Raval Dist., Vadodara", inv: "INV-2024-4371", amount: 348000, due: "29 Dec 2024", days: 24, stage: "T+15 Sent", status: "Committed: 28 Jan", creditLimit: 4000000, creditUtilized: 2920000, region: "West", ptpCompliance: 78, gstNo: "24DDDDF3456D1ZD" },
    { dealer: "Modi Sales, Ahmedabad", inv: "INV-2024-4344", amount: 224000, due: "22 Dec 2024", days: 31, stage: "Credit Hold", status: "Sales Head Notified", creditLimit: 2500000, creditUtilized: 2450000, region: "West", ptpCompliance: 42, gstNo: "24EEEEG7890E1ZE" },
    { dealer: "Nair Agencies, Chennai", inv: "INV-2024-4450", amount: 312000, due: "10 Jan 2025", days: 12, stage: "T+7 Sent", status: "Awaiting Reply", creditLimit: 3500000, creditUtilized: 1640000, region: "South", ptpCompliance: 84, gstNo: "33FFFFF1234A2ZB" },
    { dealer: "Mehta & Sons, Mumbai", inv: "INV-2024-4462", amount: 580000, due: "05 Dec 2024", days: 48, stage: "Credit Hold", status: "Sales Head Notified", creditLimit: 6000000, creditUtilized: 5820000, region: "West", ptpCompliance: 58, gstNo: "27GGGGG5678B2ZC" },
    { dealer: "Aggarwal Dist., Delhi", inv: "INV-2024-4475", amount: 245000, due: "18 Jan 2025", days: 4, stage: "Reminder Sent", status: "Awaiting Reply", creditLimit: 4000000, creditUtilized: 1250000, region: "North", ptpCompliance: 90, gstNo: "07HHHHH9012C2ZD" },
    { dealer: "Kolkata Sales, Howrah", inv: "INV-2024-4488", amount: 185000, due: "20 Jan 2025", days: 2, stage: "Reminder Sent", status: "Awaiting Reply", creditLimit: 2500000, creditUtilized: 1020000, region: "East", ptpCompliance: 72, gstNo: "19IIIII3456D2ZE" }
  ]);
  const [selectedRecId45, setSelectedRecId45] = useState("INV-2024-4398");

  const activeReceivable45 = receivables45.find(r => r.inv === selectedRecId45) || receivables45[0];

  const handleSendReminder45 = (invNum: string) => {
    toast.success(`WhatsApp reminder re-dispatched for invoice ${invNum} successfully.`);
    setReceivables45(prev => prev.map(r => r.inv === invNum ? { ...r, status: "Urgent Reminder Sent", stage: "Nudged Manually" } : r));
  };

  const handleRegisterCommitment45 = (invNum: string, date: string) => {
    setReceivables45(prev => prev.map(r => r.inv === invNum ? { ...r, status: `Committed: ${date}` } : r));
    toast.success(`Registered payment commitment date of ${date} for invoice ${invNum}.`);
  };

  // ====================================================
  // SUBMODULE 4.6 STATE (Dealer Onboarding Workflow)
  // ====================================================
  const [applicants46, setApplicants46] = useState([
    { name: "Suresh Metals", city: "Surat", stage: "applied", date: "22 Jan", kyc: "pending" },
    { name: "Parikh Enterprises", city: "Vadodara", stage: "credit", date: "20 Jan", kyc: "passed" },
    { name: "Gupta Trading", city: "Rajkot", stage: "kyc", date: "21 Jan", kyc: "warning" },
    { name: "Kumar Distributors", city: "Ahmedabad", stage: "esign", date: "18 Jan", kyc: "passed" },
    { name: "Trivedi Co.", city: "Surat", stage: "complete", date: "16 Jan", kyc: "passed" }
  ]);
  const [selectedAppId46, setSelectedAppId46] = useState("Parikh Enterprises");

  const activeApp46 = applicants46.find(a => a.name === selectedAppId46) || applicants46[1];

  const handleMoveKanban46 = (name: string, nextStage: string) => {
    setApplicants46(prev => prev.map(a => a.name === name ? { ...a, stage: nextStage } : a));
    toast.info(`Applicant ${name} moved to stage: ${nextStage.toUpperCase()}.`);
  };

  const handleApproveCredit46 = (name: string, limit: number) => {
    toast.success(`Credit limit approved at ₹${limit}L for ${name}! Onboarding routed to digital agreement e-sign.`);
    setApplicants46(prev => prev.map(a => a.name === name ? { ...a, stage: "esign" } : a));
  };



  // ====================================================
  // MODULE 6 STATE (AI-POWERED MANAGEMENT DASHBOARDS)
  // ====================================================

  // SUBMODULE 6.2 STATE: Production Intelligence
  const [m62LineGridData, setM62LineGridData] = useState([
    { id: "line1", name: "CNC Line 1", status: "Below Target", oee: 64, actual: 1420, target: 1800, variance: -20.0, note: "Tooling issues — coolant low" },
    { id: "line2", name: "Assembly Line 2", status: "Ahead", oee: 89, actual: 2080, target: 1920, variance: 8.3, note: "Optimized shift layout" },
    { id: "line3", name: "Stamping Line 3", status: "Changeover", oee: 71, actual: 980, target: 1520, variance: -35.5, note: "Changeover in progress — ETA 25 min" },
    { id: "line4", name: "Welding Line 4", status: "On Track", oee: 81, actual: 892, target: 960, variance: -7.1, note: "Steady operations" },
    { id: "line5", name: "Painting Line 5", status: "On Track", oee: 85, actual: 588, target: 600, variance: -2.0, note: "Normal throughput" },
    { id: "line6", name: "Dispatch Packing", status: "On Track", oee: 76, actual: 280, target: 280, variance: 0, note: "Pace matching dispatches" }
  ]);

  // Tick up live counters for Submodule 6.2
  useEffect(() => {
    if (!isM6) return;
    const interval = setInterval(() => {
      // Increment random line actual units
      setM62LineGridData(prev => prev.map(line => {
        if (line.status === "Running" || line.status === "Ahead" || line.status === "On Track" || line.status === "Below Target") {
          const increment = Math.random() > 0.85 ? 1 : 0;
          return {
            ...line,
            actual: line.actual + increment,
            variance: Number((((line.actual + increment - line.target) / line.target) * 100).toFixed(1))
          };
        }
        return line;
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, [isM6]);

  // SUBMODULE 6.2 STATE: Production Intelligence
  const [m62SelectedLine, setM62SelectedLine] = useState("CNC Line 1");
  const [m62HandoverStatus, setM62HandoverStatus] = useState<"unacknowledged" | "acknowledged">("unacknowledged");
  const [m62OeeComponents, setM62OeeComponents] = useState<Record<string, { avail: number; perf: number; qual: number; composite: number; availTarget: number; perfTarget: number; qualTarget: number; notes: string[]; ticket: { id: string; desc: string; status: string; openTime: string; eta: string } | null }>>({
    "CNC Line 1": { avail: 87, perf: 76, qual: 97, composite: 64, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Availability loss: 38 min unplanned downtime (07:12–07:50 AM)", "Performance loss: Coolant pressure low — ticket #MT-441 open"], ticket: { id: "MT-441", desc: "Coolant system — Assigned to Maintenance Team", status: "In Progress", openTime: "07:52 AM", eta: "11:00 AM" } },
    "Assembly Line 2": { avail: 95, perf: 95, qual: 99, composite: 89, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Highly synchronized conveyor pace", "Zero active downtime events during current shift"], ticket: null },
    "Stamping Line 3": { avail: 78, perf: 92, qual: 99, composite: 71, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Planned changeover completed at 08:30 AM"], ticket: null },
    "Welding Line 4": { avail: 89, perf: 92, qual: 99, composite: 81, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Slight electrode wear slowing weld rate by 3%"], ticket: null },
    "Painting Line 5": { avail: 92, perf: 93, qual: 99, composite: 85, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Optimal dryer temperature maintained"], ticket: null },
    "Dispatch Packing": { avail: 90, perf: 85, qual: 100, composite: 76, availTarget: 93, perfTarget: 95, qualTarget: 99, notes: ["Packing queue stable"], ticket: null },
  });
  const [m62DowntimePareto] = useState([
    { name: "Tooling Changes", hours: 11.4, pct: 34, cumulative: 34 },
    { name: "Breakdowns", hours: 8.7, pct: 26, cumulative: 60 },
    { name: "Material Shortage", hours: 5.2, pct: 16, cumulative: 76 },
    { name: "Changeovers", hours: 4.1, pct: 12, cumulative: 88 },
    { name: "Absences", hours: 2.6, pct: 8, cumulative: 96 },
    { name: "Other", hours: 1.3, pct: 4, cumulative: 100 }
  ]);

  const handleSendAlertToProdHead = () => {
    toast.info("Production status escalation sent to Production Head (Mahesh Kapoor) via SMS and App alert.");
  };

  const handleAcknowledgeHandover = () => {
    setM62HandoverStatus("acknowledged");
    toast.success("Shift handover report accepted and acknowledged! Morning shift performance archived.");
  };

  // SUBMODULE 6.3 STATE: Inventory & Warehouse
  const [m63CategoryFilter, setM63CategoryFilter] = useState("All");
  const [m63SearchQuery, setM63SearchQuery] = useState("");
  const [m63SlowMovingOnly, setM63SlowMovingOnly] = useState(false);
  const [m63Items, setM63Items] = useState([
    { id: 1, code: "RM-CRCA-1.2", name: "CRCA Sheet 1.2mm", category: "Raw Material", stock: 3400, unit: "kg", required: 6200, status: "Critical", daysCover: 13, value: 231200, actionTaken: false, slowMoving: false },
    { id: 2, code: "RM-ZNC-COAT", name: "Zinc Coating Powder", category: "Raw Material", stock: 180, unit: "kg", required: 420, status: "Critical", daysCover: 6, value: 61200, actionTaken: false, slowMoving: false },
    { id: 3, code: "RM-MS-BAR20", name: "MS Round Bar 20mm", category: "Raw Material", stock: 0, unit: "kg", required: 800, status: "Stock Out", daysCover: 0, value: 0, actionTaken: false, slowMoving: false },
    { id: 4, code: "RM-MIG-WIRE", name: "MIG Welding Wire", category: "Raw Material", stock: 45, unit: "spools", required: 80, status: "Reorder Due", daysCover: 11, value: 21600, actionTaken: false, slowMoving: false },
    { id: 5, code: "RM-PRIME-RD", name: "Primer Coat Red", category: "Raw Material", stock: 120, unit: "litres", required: 200, status: "Reorder Due", daysCover: 14, value: 21600, actionTaken: false, slowMoving: false },
    { id: 6, code: "RM-CRCA-1.5", name: "CRCA Sheet 1.5mm", category: "Raw Material", stock: 5200, unit: "kg", required: 3800, status: "Surplus", daysCover: 47, value: 374400, actionTaken: false, slowMoving: false },
    { id: 7, code: "RM-ALUM-2.0", name: "Aluminium Sheet 2mm", category: "Raw Material", stock: 1800, unit: "kg", required: 1400, status: "Normal", daysCover: 32, value: 396000, actionTaken: false, slowMoving: false },
    { id: 8, code: "RM-HEX-M10", name: "Hex Bolt M10", category: "Raw Material", stock: 8400, unit: "pcs", required: 12000, status: "Reorder Due", daysCover: 18, value: 35280, actionTaken: false, slowMoving: false },
    { id: 9, code: "RM-CUT-OIL", name: "Cutting Oil", category: "Raw Material", stock: 200, unit: "litres", required: 320, status: "Reorder Due", daysCover: 19, value: 22000, actionTaken: false, slowMoving: false },
    { id: 10, code: "RM-SPR-STL", name: "Spring Steel Strip", category: "Raw Material", stock: 900, unit: "kg", required: 600, status: "Normal", daysCover: 38, value: 117000, actionTaken: false, slowMoving: false },
    { id: 11, code: "RM-PNT-RAL", name: "Paint — RAL 7016", category: "Raw Material", stock: 40, unit: "litres", required: 15, status: "Surplus", daysCover: 58, value: 12000, actionTaken: false, slowMoving: true },
    { id: 12, code: "RM-SAF-PPE", name: "Safety PPE Kits", category: "Raw Material", stock: 180, unit: "sets", required: 200, status: "Reorder Due", daysCover: 24, value: 54000, actionTaken: false, slowMoving: true },
    { id: 13, code: "RM-COP-TUB", name: "Copper Tubes 12mm", category: "Raw Material", stock: 640, unit: "metres", required: 500, status: "Normal", daysCover: 35, value: 192000, actionTaken: false, slowMoving: false },
    { id: 14, code: "RM-SS-FSTN", name: "SS Fasteners M8 Grade A4", category: "Raw Material", stock: 12400, unit: "pcs", required: 10000, status: "Normal", daysCover: 42, value: 86800, actionTaken: false, slowMoving: false },
    { id: 15, code: "RM-EPX-RSN", name: "Epoxy Resin (Araldite)", category: "Raw Material", stock: 18, unit: "litres", required: 60, status: "Critical", daysCover: 5, value: 14400, actionTaken: false, slowMoving: false },
    { id: 16, code: "RM-RUB-GSK", name: "Rubber Gaskets Φ50mm", category: "Raw Material", stock: 3200, unit: "pcs", required: 2800, status: "Normal", daysCover: 30, value: 48000, actionTaken: false, slowMoving: true }
  ]);
  const [wipStages] = useState([
    { stage: "Raw Material Issued", units: 2400, value: 384000, age: "0.4 days" },
    { stage: "CNC / Machining", units: 1100, value: 286000, age: "1.2 days" },
    { stage: "Assembly", units: 1800, value: 594000, age: "0.8 days" },
    { stage: "Welding", units: 620, value: 217000, age: "0.6 days" },
    { stage: "Surface Treatment", units: 840, value: 336000, age: "1.1 days" },
    { stage: "QC Inspection", units: 1200, value: 516000, age: "0.5 days" }
  ]);
  const [fgPosition] = useState([
    { code: "MS-204", stock: 2200, committed: 1000, free: 1200, status: "Available" },
    { code: "MS-208", stock: 800, committed: 2500, free: -1700, status: "Shortfall" },
    { code: "PC-112", stock: 1400, committed: 800, free: 600, status: "Available" },
    { code: "SP-044", stock: 3100, committed: 1950, free: 1150, status: "Available" },
    { code: "PC-118", stock: 200, committed: 900, free: -700, status: "Shortfall — In Prod" }
  ]);

  const handleRaisePO63 = (itemId: number, code: string) => {
    setM63Items(prev => prev.map(item => item.id === itemId ? { ...item, actionTaken: true, status: "Normal" } : item));
    toast.success(`Purchase Order request raised in ERP for ${code}! Draft PO routed to Procurement Desk.`);
  };

  const handleRaiseAllUrgent63 = () => {
    setM63Items(prev => prev.map(item => (item.status === "Critical" || item.status === "Stock Out") ? { ...item, actionTaken: true, status: "Normal" } : item));
    toast.success("Emergency POs triggered for all 3 critical & stock out items! High-priority notifications dispatched to vendors.");
  };

  // SUBMODULE 6.4 STATE: Sales & Revenue
  const [m64ActiveTab, setM64ActiveTab] = useState<"overview" | "pipeline" | "mix">("overview");
  const [m64Opportunities, setM64Opportunities] = useState([
    { id: 1, name: "Large CNC batch — Q4", customer: "Tata AutoComp Systems", value: 180, stage: "Negotiation", prob: 85 },
    { id: 2, name: "Stamped panel contract", customer: "Bajaj Auto Components", value: 120, stage: "Proposal sent", prob: 70 },
    { id: 3, name: "Infrastructure hardware", customer: "Adani Infrastructure", value: 95, stage: "Qualified", prob: 60 },
    { id: 4, name: "FMCG packaging parts", customer: "Amul Packaging", value: 72, stage: "Demo done", prob: 80 },
    { id: 5, name: "New casting contract", customer: "Godrej Precision", value: 65, stage: "RFQ stage", prob: 50 }
  ]);
  const [newOppName, setNewOppName] = useState("");
  const [newOppCustomer, setNewOppCustomer] = useState("");
  const [newOppValue, setNewOppValue] = useState("");
  const [newOppProb, setNewOppProb] = useState("50");
  const [newOppStage, setNewOppStage] = useState("Qualified");

  const handleCreateOpportunity64 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOppName || !newOppCustomer || !newOppValue) {
      toast.error("Please fill in all opportunity fields.");
      return;
    }
    const val = Number(newOppValue);
    const prob = Number(newOppProb);
    const newOpp = {
      id: Date.now(),
      name: newOppName,
      customer: newOppCustomer,
      value: val,
      stage: newOppStage,
      prob: prob
    };
    setM64Opportunities(prev => [newOpp, ...prev]);
    setNewOppName("");
    setNewOppCustomer("");
    setNewOppValue("");
    toast.success(`Successfully added new sales opportunity: ${newOppName} (₹${val}L)`);
  };

  // SUBMODULE 6.5 STATE: Cost Variance & Finance
  const [m65CostHeads, setM65CostHeads] = useState([
    { head: "Raw Materials", budget: 220, actual: 233, variance: 13, pct: 5.9, status: "Over" },
    { head: "Direct Labour", budget: 29, actual: 31, variance: 2, pct: 6.9, status: "Over" },
    { head: "Utilities (Power)", budget: 18, actual: 19, variance: 1, pct: 5.6, status: "Watch" },
    { head: "Maintenance", budget: 12, actual: 11, variance: -1, pct: -8.3, status: "Under" },
    { head: "Consumables / Tooling", budget: 8, actual: 9, variance: 1, pct: 12.5, status: "Over" },
    { head: "Overheads (Admin)", budget: 22, actual: 21, variance: -1, pct: -4.5, status: "Under" },
    { head: "Freight Outward", budget: 9, actual: 8, variance: -1, pct: -11.1, status: "Under" },
    { head: "Scrap & Rework", budget: 4, actual: 3.8, variance: -0.2, pct: -5.0, status: "Under" }
  ]);
  const [m65MaterialVariances, setM65MaterialVariances] = useState([
    { id: 1, material: "CRCA Sheet 1.2mm", standard: 68, actual: 72, variance: 5.9, impact: 6.8, reviewStarted: false },
    { id: 2, material: "CRCA Sheet 1.5mm", standard: 72, actual: 74, variance: 2.8, impact: 2.4, reviewStarted: false },
    { id: 3, material: "MS Round Bar 20mm", standard: 55, actual: 53, variance: -3.6, impact: -1.2, reviewStarted: false },
    { id: 4, material: "Zinc Coating Powder", standard: 340, actual: 360, variance: 5.9, impact: 2.4, reviewStarted: false },
    { id: 5, material: "Aluminium Sheet 2mm", standard: 220, actual: 228, variance: 3.6, impact: 3.6, reviewStarted: false }
  ]);
  const [m65EbitdaWaterfall] = useState([
    { name: "Revenue", value: 380, color: "#1D9E75" },
    { name: "Raw Materials", value: -233, color: "#D85A30" },
    { name: "Direct Labour", value: -31, color: "#D85A30" },
    { name: "Overheads", value: -40, color: "#D85A30" },
    { name: "Utilities", value: -19, color: "#D85A30" },
    { name: "Maintenance", value: -11, color: "#D85A30" },
    { name: "EBITDA MTD", value: 46, color: "#2E86AB" }
  ]);

  const handleReviewRate65 = (id: number, material: string) => {
    setM65MaterialVariances(prev => prev.map(v => v.id === id ? { ...v, reviewStarted: true } : v));
    toast.success(`Purchase contract rate negotiation case opened for ${material}! Sent RFQ revision request to Mehta Steel Works.`);
  };

  const handleSendToCFO65 = () => {
    toast.success("Adverse cost variance summary and EBITDA shortfall analysis dispatched to CFO's (Ananya Patel) WhatsApp successfully!");
  };

  // SUBMODULE 6.6 STATE: People & Productivity
  const [m66AttendanceHeatmap] = useState([
    { dept: "CNC Operations", present: 38, total: 42, pct: 90.5, status: "2 critical absent" },
    { dept: "Assembly", present: 55, total: 58, pct: 94.8, status: "Adequate" },
    { dept: "Stamping", present: 24, total: 24, pct: 100, status: "Full" },
    { dept: "Welding", present: 30, total: 36, pct: 83.3, status: "Understaffed" },
    { dept: "Painting", present: 17, total: 18, pct: 94.4, status: "Adequate" },
    { dept: "QC Inspection", present: 13, total: 14, pct: 92.9, status: "Adequate" },
    { dept: "Maintenance", present: 21, total: 22, pct: 95.5, status: "Adequate" },
    { dept: "Stores & Dispatch", present: 26, total: 28, pct: 92.9, status: "Adequate" },
    { dept: "Admin & Support", present: 39, total: 40, pct: 97.5, status: "Full" },
    { dept: "Contract Workers", present: 28, total: 38, pct: 73.7, status: "High absence" }
  ]);
  const [m66OtUsage] = useState([
    { dept: "CNC Ops", budget: 80, used: 106, cost: 106000, status: "Over budget" },
    { dept: "Welding", budget: 60, used: 71, cost: 71000, status: "Over budget" },
    { dept: "Assembly", budget: 70, used: 68, cost: 68000, status: "On track" },
    { dept: "Stamping", budget: 40, used: 38, cost: 38000, status: "On track" },
    { dept: "Painting", budget: 30, used: 32, cost: 32000, status: "Watch" },
    { dept: "Maintenance", budget: 40, used: 42, cost: 42000, status: "Watch" },
    { dept: "QC Team", budget: 20, used: 27, cost: 27000, status: "Over budget" }
  ]);
  const [m66Operators, setM66Operators] = useState([
    { id: 1, rank: "🥇 1", name: "Priya Mehta", dept: "Assembly", shift: "Morning", output: 2840, target: 2400, pct: 118.3, tag: "Top Performer", flagged: false },
    { id: 2, rank: "🥈 2", name: "Arun Patel", dept: "Welding", shift: "Morning", output: 1120, target: 960, pct: 116.7, tag: "Top Performer", flagged: false },
    { id: 3, rank: "🥉 3", name: "Dinesh Patel", dept: "CNC", shift: "Afternoon", output: 890, target: 800, pct: 111.3, tag: "Top Performer", flagged: false },
    { id: 4, rank: "4", name: "Vijay Sharma", dept: "Assembly", shift: "Morning", output: 2280, target: 2400, pct: 95.0, tag: "On Track", flagged: false },
    { id: 5, rank: "5", name: "Kiran Shah", dept: "CNC", shift: "Afternoon", output: 760, target: 800, pct: 95.0, tag: "On Track", flagged: false },
    { id: 6, rank: "Last", name: "Ramesh Kumar", dept: "CNC", shift: "Morning", output: 560, target: 800, pct: 70.0, tag: "Machine Issues MT-441", flagged: false },
    { id: 7, rank: "-2", name: "Deepak Joshi", dept: "Welding", shift: "Night", output: 680, target: 960, pct: 70.8, tag: "Skill Gap", flagged: false }
  ]);
  const [m66OperatorSearch, setM66OperatorSearch] = useState("");
  const [m66Training] = useState([
    { type: "Safety Induction (Annual)", due: 4, overdue: 4, earliest: "15 Jan 2025", status: "Critical" },
    { type: "CNC Machine Safety Cert", due: 2, overdue: 1, earliest: "28 Jan 2025", status: "Urgent" },
    { type: "Welding Safety & PPE", due: 3, overdue: 3, earliest: "10 Jan 2025", status: "Overdue" },
    { type: "Quality SOP Requalification", due: 2, overdue: 0, earliest: "31 Jan 2025", status: "Due this Month" }
  ]);

  const handleFlagOperator66 = (id: number, name: string) => {
    setM66Operators(prev => prev.map(op => op.id === id ? { ...op, flagged: true } : op));
    toast.success(`Operator ${name} flagged for skill gap review. HR auto-alerted for scheduling training requalification.`);
  };

  const handleScheduleTraining66 = (trainingType: string) => {
    toast.success(`Refresher training batches scheduled for: "${trainingType}" immediately! Participants notified.`);
  };

  // ====================================================
  // MODULE 7 STATE (CUSTOMER & DEALER VOICE AGENTS)
  // ====================================================

  // SUBMODULE 7.1 STATE: Inbound Order Status Voice Agent
  const [m71LiveCallTimeCounter, setM71LiveCallTimeCounter] = useState(0);
  const [m71ActiveCall, setM71ActiveCall] = useState<{
    caller: string;
    account: string;
    lang: string;
    query: string;
    transcript: string[];
    erpPushed: boolean;
  } | null>(null);
  const [m71QueryActive, setM71QueryActive] = useState(false);
  const [m71QueryResults] = useState({
    order: "#SO-2024-4821",
    qty: "1,000 units MS-204",
    status: "Dispatched — 26 January",
    lr: "TM24-88744",
    carrier: "Saurashtra Transport",
    eta: "28 January (Delivered)"
  });
  const [m71CallHistory, setM71CallHistory] = useState([
    { id: 1, caller: "+91 98251 XXXXX", account: "Kapoor Industries", lang: "Hindi", query: "Order Status", duration: "1:42", resolution: "Resolved", time: "9:47 AM" },
    { id: 2, caller: "+91 94262 XXXXX", account: "Patel Agencies, Rajkot", lang: "Gujarati", query: "Dispatch ETA", duration: "2:08", resolution: "Resolved", time: "10:03 AM" },
    { id: 3, caller: "+91 99099 XXXXX", account: "Maruti Ancillaries", lang: "Hindi", query: "Credit Limit", duration: "3:21", resolution: "Escalated", time: "10:18 AM" },
    { id: 4, caller: "+91 98795 XXXXX", account: "Reliance Consumer", lang: "English", query: "Order Status", duration: "1:15", resolution: "Resolved", time: "10:34 AM" },
    { id: 5, caller: "+91 90163 XXXXX", account: "Shah Traders, Surat", lang: "Gujarati", query: "Partial Delivery", duration: "2:44", resolution: "Resolved", time: "11:02 AM" },
    { id: 6, caller: "+91 98330 XXXXX", account: "L&T Construction", lang: "English", query: "Pricing Query", duration: "1:58", resolution: "Resolved", time: "11:19 AM" },
    { id: 7, caller: "+91 97126 XXXXX", account: "Mehta Brothers, Vadodara", lang: "Gujarati", query: "Order Status", duration: "1:33", resolution: "Resolved", time: "11:45 AM" },
    { id: 8, caller: "+91 99009 XXXXX", account: "Bajaj Auto Components", lang: "Hindi", query: "Dispatch Status", duration: "2:02", resolution: "Resolved", time: "12:07 PM" }
  ]);

  const activeCallIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleSimulateCall71 = () => {
    if (m71ActiveCall) {
      toast.error("An active call simulation is already in progress.");
      return;
    }
    
    setM71LiveCallTimeCounter(0);
    setM71QueryActive(false);
    
    const newCall = {
      caller: "+91 98251 XXXXX",
      account: "Kapoor Industries",
      lang: "Hindi",
      query: "Order Status",
      transcript: ["Connecting call...", "AI Assistant: Namaste, aap Fortiv ManufactureSmart ke AI assistant se baat kar rahe hain. Kripya apna company name ya registered mobile number batayein."],
      erpPushed: false
    };
    
    setM71ActiveCall(newCall);
    toast.info("Simulating incoming call on helpline...");

    let counter = 0;
    if (activeCallIntervalRef.current) clearInterval(activeCallIntervalRef.current);
    
    activeCallIntervalRef.current = setInterval(() => {
      counter += 5;
      setM71LiveCallTimeCounter(counter);

      if (counter === 5) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "Caller: Mera naam Rajesh Kapoor hai, Kapoor Industries se. Mera order #4821 ka kya status hai?"]
        } : null);
      } else if (counter === 10) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "AI Assistant: Dhanyawad Rajesh ji. Kapoor Industries ka account verified. Main order details search kar raha hoon..."]
        } : null);
        setM71QueryActive(true); // Trigger ERP fetch visual pulse
      } else if (counter === 15) {
        setM71QueryActive(false);
        setM71ActiveCall(prev => prev ? {
          ...prev,
          erpPushed: true,
          transcript: [
            ...prev.transcript, 
            "AI Assistant: Live data fetched successfully. Aapka order #SO-2024-4821, 1,000 units MS-204, 26 January ko dispatch ho gaya hai. Saurashtra Transport ke LR TM24-88744 ke saath."
          ]
        } : null);
      } else if (counter === 20) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "Caller: Bohot ache. expected delivery kab tak hai?"]
        } : null);
      } else if (counter === 25) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "AI Assistant: expected delivery aaj shaam ya kal subha hai. Kya aapko WhatsApp par summary aur tracking link chahiye?"]
        } : null);
      } else if (counter === 30) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "Caller: Haan, zaroor bhej dijiye. Thank you."]
        } : null);
      } else if (counter === 35) {
        setM71ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "AI Assistant: WhatsApp summary sent. Thank you for calling Fortiv. Have a nice day!"]
        } : null);
      } else if (counter >= 40) {
        if (activeCallIntervalRef.current) clearInterval(activeCallIntervalRef.current);
        setM71ActiveCall(null);
        // Add to call history
        setM71CallHistory(prev => [
          {
            id: Date.now(),
            caller: "+91 98251 XXXXX",
            account: "Kapoor Industries",
            lang: "Hindi",
            query: "Order Status",
            duration: "0:40",
            resolution: "Resolved",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          },
          ...prev
        ]);
        toast.success("Call ended successfully. Summary notification dispatched to customer via WhatsApp.");
      }
    }, 4000);
  };

  // SUBMODULE 7.2 STATE: Complaint Logging Voice Agent
  const [m72LiveCallTimeCounter, setM72LiveCallTimeCounter] = useState(0);
  const [m72ActiveCall, setM72ActiveCall] = useState<{
    caller: string;
    account: string;
    lang: string;
    sentiment: "Calm" | "Concerned" | "Upset" | "Escalation Risk";
    transcript: string[];
    fields: {
      complaint_id: string;
      defect_type: string;
      qty: string;
      ref: string;
      severity: string;
    };
  } | null>(null);

  const [m72ComplaintHistory, setM72ComplaintHistory] = useState([
    { id: 1, complaintId: "CMP-2024-441", account: "Kapoor Industries", defect: "Surface Finish", severity: "Major", qty: "200 units", lang: "Hindi", status: "Routed to QA" },
    { id: 2, complaintId: "CMP-2024-442", account: "Tata AutoComp", defect: "Dimensional Variation", severity: "Critical", qty: "1,200 units", lang: "English", status: "Escalated to QA Head" },
    { id: 3, complaintId: "CMP-2024-443", account: "Bajaj Auto Components", defect: "Packaging Damage", severity: "Minor", qty: "30 units", lang: "Hindi", status: "Routed to Dispatch" },
    { id: 4, complaintId: "CMP-2024-444", account: "Shah Traders, Surat", defect: "Wrong Item", severity: "Major", qty: "400 units", lang: "Gujarati", status: "Routed to Sales Admin" },
    { id: 5, complaintId: "CMP-2024-445", account: "Maruti Ancillaries", defect: "Late Delivery", severity: "Minor", qty: "—", lang: "Hindi", status: "Routed to Dispatch" }
  ]);

  const activeComplaintIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleSimulateComplaintCall72 = () => {
    if (m72ActiveCall) {
      toast.error("An active call simulation is already in progress.");
      return;
    }
    
    setM72LiveCallTimeCounter(0);
    
    const newCall = {
      caller: "+91 98251 XXXXX",
      account: "Kapoor Industries",
      lang: "Hindi",
      sentiment: "Concerned" as const,
      transcript: ["Connecting call...", "AI Assistant: Namaste, Fortiv ManufactureSmart Quality Desk. Main aapki kya sahayata kar sakta hoon?"],
      fields: {
        complaint_id: "CMP-2024-450",
        defect_type: "Pending...",
        qty: "Pending...",
        ref: "Pending...",
        severity: "Pending..."
      }
    };
    
    setM72ActiveCall(newCall);
    toast.info("Simulating incoming customer quality complaint call...");

    let counter = 0;
    if (activeComplaintIntervalRef.current) clearInterval(activeComplaintIntervalRef.current);
    
    activeComplaintIntervalRef.current = setInterval(() => {
      counter += 5;
      setM72LiveCallTimeCounter(counter);

      if (counter === 5) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          sentiment: "Upset" as const,
          transcript: [...prev.transcript, "Caller: Mujhe bohot badi problem aayi hai. Aaj jo batch deliver hua hai MS-204 components ka, usme rust marks hain! Poore pieces khraab lag rahe hain."]
        } : null);
      } else if (counter === 10) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          sentiment: "Concerned" as const,
          transcript: [
            ...prev.transcript, 
            "AI Assistant (Empathy Script): Main samajh sakta hoon, Rajesh ji. Yeh sunkar hume bohot khed hai. Main abhi aapki complaint register kar raha hoon aur direct QA team ko alert karunga. Kya aap mujhe affected quantity bata sakte hain?"
          ]
        } : null);
      } else if (counter === 15) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          fields: {
            ...prev.fields,
            defect_type: "Surface Finish (Rust)",
            qty: "200 units",
          },
          transcript: [...prev.transcript, "Caller: Ha, approx 200 units affected hain out of 1,000." ]
        } : null);
      } else if (counter === 20) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          fields: {
            ...prev.fields,
            ref: "SO-2024-4821",
            severity: "Major"
          },
          transcript: [...prev.transcript, "AI Assistant: Samjha, 200 units surface rust. Order reference number kya hai? Aur product batch number?", "Caller: Invoice number hai INV-4421, order number SO-2024-4821."]
        } : null);
      } else if (counter === 25) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          sentiment: "Calm" as const,
          transcript: [
            ...prev.transcript, 
            "AI Assistant: Dhanyawad. Complaint successfully registered under Ticket reference CMP-2024-450. Major severity categorised. Humari QA head Sunita Patel ko automatic route kar diya hai. SLA time limits ke mutabik hum aapse 8 ghante ke andar direct contact karenge."
          ]
        } : null);
      } else if (counter === 30) {
        setM72ActiveCall(prev => prev ? {
          ...prev,
          transcript: [...prev.transcript, "Caller: Theek hai, main update ka wait karta hoon. defect ki photo WhatsApp bhej du?", "AI Assistant: Ji haan Rajesh ji, is registered chat par ek photo bhej dijiye. Thank you for cooperation."]
        } : null);
      } else if (counter >= 35) {
        if (activeComplaintIntervalRef.current) clearInterval(activeComplaintIntervalRef.current);
        setM72ActiveCall(null);
        // Add to complaint log
        setM72ComplaintHistory(prev => [
          {
            id: Date.now(),
            complaintId: "CMP-2024-450",
            account: "Kapoor Industries",
            defect: "Surface Finish",
            severity: "Major",
            qty: "200 units",
            lang: "Hindi",
            status: "Routed to QA"
          },
          ...prev
        ]);
        toast.success("M8 Complaint ticket CMP-2024-450 registered! Routed to QA Team Sunita Patel (SLA: 8 hrs).");
      }
    }, 4500);
  };

  // SUBMODULE 7.3 STATE: Payment Reminder Outbound Voice Agent
  const [selectedAccountId73, setSelectedAccountId73] = useState<number>(1);
  const [isPlaying73, setIsPlaying73] = useState(false);
  const [playbackSpeed73, setPlaybackSpeed73] = useState(1.0);
  const [m73CampaignRunning, setM73CampaignRunning] = useState(false);
  const [m73OverdueAccounts, setM73OverdueAccounts] = useState([
    {
      id: 1,
      account: "Patel Agencies, Rajkot",
      contact: "Rajesh Patel",
      phone: "+91 98250 44210",
      invoice: "INV-4421",
      amount: 284000,
      dueDate: "25 Jan",
      daysOverdue: 8,
      status: "2nd Reminder",
      commitment: "31 Jan 2025",
      lang: "Gujarati",
      isWrongNumber: false,
      csat: 4.5,
      sentiment: "Positive",
      transcript: [
        { speaker: "Agent", text: "નમસ્તે પટેલ એજન્સીસ, હું ફોર્ટીવ ઓટોમેટેડ વોઇસ આસિસ્ટન્ટ બોલું છું. આપનું ઇન્વોઇસ INV-4421 નું ₹2.84 લાખનું ચુકવણું 8 દિવસથી બાકી છે. ક્યારે કરી આપશો?" },
        { speaker: "Customer", text: "હા, જય શ્રી કૃષ્ણ. એ પેમેન્ટ મેં ચેકથી કાઢી દીધું છે, ૩૧ જાન્યુઆરી સુધીમાં તમારા ખાતામાં જમા થઇ જશે." },
        { speaker: "Agent", text: "ધન્યવાદ. હું ૩૧ જાન્યુઆરી ૨૦૨૫ ની તારીખ નોંધી લઉં છું. પ્રણામ." }
      ]
    },
    {
      id: 2,
      account: "Sharma Distributors, Vadodara",
      contact: "Ramesh Sharma",
      phone: "+91 96112 43980",
      invoice: "INV-4398",
      amount: 192000,
      dueDate: "20 Jan",
      daysOverdue: 13,
      status: "⚠️ Call Pending",
      commitment: "Pending",
      lang: "Hindi",
      isWrongNumber: false,
      csat: 3.5,
      sentiment: "Neutral",
      transcript: [
        { speaker: "Agent", text: "नमस्ते शर्मा डिस्ट्रीब्यूटर्स। आपका बिल INV-4398 ₹1.92 लाख के लिए 13 दिनों से लंबित है। क्या आप भुगतान की स्थिति बता सकते हैं?" },
        { speaker: "Customer", text: "भैया, हमारा माल कुछ रास्ते में अटका था, कल ही मिला है। हम तीन-चार दिन में ऑनलाइन ट्रांसफर कर देंगे।" },
        { speaker: "Agent", text: "क्या हम 5 फ़रवरी तक भुगतान की उम्मीद कर सकते हैं?" },
        { speaker: "Customer", text: "हाँ, 5 फ़रवरी तक पक्का हो जाएगा।" }
      ]
    },
    {
      id: 3,
      account: "Mehta Agencies, Ahmedabad",
      contact: "Vijay Mehta",
      phone: "+91 99099 44120",
      invoice: "INV-4412",
      amount: 450000,
      dueDate: "22 Jan",
      daysOverdue: 11,
      status: "Commitment",
      commitment: "30 Jan 2025",
      lang: "Hindi",
      isWrongNumber: false,
      csat: 4.8,
      sentiment: "Positive",
      transcript: [
        { speaker: "Agent", text: "नमस्ते मेहता एजेंसीज। आपका बिल INV-4412 ₹4.50 लाख के लिए 11 दिनों से लंबित है।" },
        { speaker: "Customer", text: "जी, पेमेंट कल ही अकाउंट्स विभाग ने अप्रूव किया है, 30 जनवरी को आपके खाते में एनईएफटी हो जाएगा।" },
        { speaker: "Agent", text: "बहुत धन्यवाद, 30 जनवरी की तारीख दर्ज कर ली गई है।" }
      ]
    },
    {
      id: 4,
      account: "Gujarat Traders, Surat",
      contact: "Deepak Shah",
      phone: "+91 98795 43890",
      invoice: "INV-4389",
      amount: 318000,
      dueDate: "18 Jan",
      daysOverdue: 15,
      status: "⚠️ Dispute Raised",
      commitment: "Escalated to Sales",
      lang: "Gujarati",
      isWrongNumber: false,
      csat: 2.1,
      sentiment: "Frustrated",
      transcript: [
        { speaker: "Agent", text: "નમસ્તે ગુજરાત ટ્રેડર્સ, આપનું ઇન્વોઇસ INV-4389 ₹3.18 લાખનું બાકી છે." },
        { speaker: "Customer", text: "અરે યાર, કેટલી વાર ફોન કરશો? અમારા કેટલાય માલના નંગ ખરાબ નીકળ્યા છે, સેલ્સ ટીમને કમ્પ્લેઇન કરી છે પણ કોઈ સાંભળતું નથી! પહેલા એ સોલ્વ કરો પછી પેમેન્ટ થશે!" },
        { speaker: "Agent", text: "દિલગીર છીએ. હું આ પેમેન્ટ રોકીને તમારી ક્વોલિટી કમ્પ્લેઇન સેલ્સ હેડને મોકલી આપું છું." }
      ]
    },
    {
      id: 5,
      account: "Kapoor Industries",
      contact: "Rajesh Kapoor",
      phone: "+91 98244 43670",
      invoice: "INV-4367",
      amount: 78000,
      dueDate: "15 Jan",
      daysOverdue: 18,
      status: "Commitment",
      commitment: "29 Jan 2025",
      lang: "English",
      isWrongNumber: false,
      csat: 4.0,
      sentiment: "Positive",
      transcript: [
        { speaker: "Agent", text: "Hello Kapoor Industries, this is Fortiv Collections. Invoice INV-4367 for ₹78,000 is 18 days overdue." },
        { speaker: "Customer", text: "Ah yes, we had some accounting system issues. We are processing it today. Expect it by 29th Jan." },
        { speaker: "Agent", text: "Thank you, recorded for 29th Jan. Reminders paused." }
      ]
    },
    {
      id: 6,
      account: "Joshi & Sons, Rajkot",
      contact: "Anil Joshi",
      phone: "+91 94262 44010",
      invoice: "INV-4401",
      amount: 140000,
      dueDate: "21 Jan",
      daysOverdue: 12,
      status: "1st Reminder",
      commitment: "Pending",
      lang: "Gujarati",
      isWrongNumber: false,
      csat: 3.8,
      sentiment: "Neutral",
      transcript: [
        { speaker: "Agent", text: "નમસ્તે જોશી એન્ડ સન્સ, આપનું ઇન્વોઇસ INV-4401 બાકી છે. ક્યારે પેમેન્ટ કરશો?" },
        { speaker: "Customer", text: "આવતા મંગળવારે અમારા એકાઉન્ટન્ટ આવશે એટલે એનઈએફટી કરાવી દઈશ." },
        { speaker: "Agent", text: "સારું, મંગળવાર સુધી રાહ જોઈશું." }
      ]
    },
    {
      id: 7,
      account: "Patel Hardware, Anand",
      contact: "Suresh Patel",
      phone: "+91 99044 43550",
      invoice: "INV-4355",
      amount: 92000,
      dueDate: "12 Jan",
      daysOverdue: 21,
      status: "🔴 3rd Reminder",
      commitment: "Escalated to CFO",
      lang: "Gujarati",
      isWrongNumber: false,
      csat: 1.8,
      sentiment: "Frustrated",
      transcript: [
        { speaker: "Agent", text: "નમસ્તે પટેલ હાર્ડવેર, ૨૧ દિવસથી ચૂકવણું બાકી છે." },
        { speaker: "Customer", text: "ફોન મૂકો ભાઈ, અત્યારે બજાર મંદીમાં છે. ટાઈમ મળશે ત્યારે આપી દઈશું, વારંવાર ફોન ના કરો." },
        { speaker: "Agent", text: "ચૂકવણું મોડું હોવાથી ફાઇલ સીએફઓ ડેસ્ક પર મોકલવામાં આવી રહી છે." }
      ]
    },
    {
      id: 8,
      account: "R.K. Engineering, Ahmedabad",
      contact: "Rakesh Kumar",
      phone: "+91 97241 44410",
      invoice: "INV-4441",
      amount: 224000,
      dueDate: "27 Jan",
      daysOverdue: 6,
      status: "1st Reminder",
      commitment: "Pending",
      lang: "Hindi",
      isWrongNumber: false,
      csat: 3.7,
      sentiment: "Neutral",
      transcript: [
        { speaker: "Agent", text: "नमस्ते आर.के. इंजीनियरिंग। आपका बिल INV-4441 का पेमेंट अभी पेंडिंग है।" },
        { speaker: "Customer", text: "हाँ, हम कल ही चेक भेजने वाले हैं। कोरियर रिसीप्ट व्हाट्सऐप पर भेज देंगे।" },
        { speaker: "Agent", text: "धन्यवाद, चेक प्राप्त होते ही रसीद जनरेट हो जाएगी।" }
      ]
    },
    {
      id: 9,
      account: "Trivedi Traders, Surat",
      contact: "Manish Trivedi",
      phone: "+91 98980 43760",
      invoice: "INV-4376",
      amount: 168000,
      dueDate: "17 Jan",
      daysOverdue: 16,
      status: "Commitment",
      commitment: "2 Feb 2025",
      lang: "Gujarati",
      isWrongNumber: false,
      csat: 4.2,
      sentiment: "Positive",
      transcript: [
        { speaker: "Agent", text: "નમસ્તે ત્રિવેદી ટ્રેડર્સ, ₹1.68 લાખનું પેમેન્ટ બાકી છે." },
        { speaker: "Customer", text: "હા, મનીષ ત્રિવેદી બોલું છું. ૨ જી ફેબ્રુઆરીએ અમારો એક મોટો પેમેન્ટ આવવાનો છે, એમાંથી ડાયરેક્ટ ટ્રાન્સફર કરી દઈશ." },
        { speaker: "Agent", text: "ધન્યવાદ, ૨ જી ફેબ્રુઆરી નોંધી લઉં છું." }
      ]
    },
    {
      id: 10,
      account: "Nair Industries, Ahmedabad",
      contact: "Suresh Nair",
      phone: "+91 95441 44440",
      invoice: "INV-4444",
      amount: 88000,
      dueDate: "28 Jan",
      daysOverdue: 5,
      status: "⚠️ Call Pending",
      commitment: "Pending",
      lang: "English",
      isWrongNumber: false,
      csat: 3.9,
      sentiment: "Neutral",
      transcript: [
        { speaker: "Agent", text: "Hello Nair Industries, checking status for invoice INV-4444." },
        { speaker: "Customer", text: "Our account manager is out of station today. He will process it tomorrow morning." },
        { speaker: "Agent", text: "Alright, we will check back tomorrow. Thank you." }
      ]
    }
  ]);

  const activeAccount73 = m73OverdueAccounts.find(a => a.id === selectedAccountId73) || m73OverdueAccounts[0];

  const handleToggleWrongNumber73 = (id: number) => {
    setM73OverdueAccounts(prev => prev.map(acc => {
      if (acc.id === id) {
        const nextVal = !acc.isWrongNumber;
        toast.info(nextVal ? `Flagged contact for ${acc.account} as Wrong Number` : `Restored contact for ${acc.account}`);
        return {
          ...acc,
          isWrongNumber: nextVal,
          status: nextVal ? "Wrong Number" : "⚠️ Call Pending",
          commitment: nextVal ? "Invalid Contact" : "Pending"
        };
      }
      return acc;
    }));
  };

  const handleSecureCommitment73 = (id: number, promisedDate: string) => {
    setM73OverdueAccounts(prev => prev.map(acc => acc.id === id ? { ...acc, commitment: promisedDate, status: "Commitment" } : acc));
    toast.success(`PTP (Promise to pay) updated to ${promisedDate} for this invoice! Reminders paused.`);
  };

  const handleEscalate73 = (id: number, name: string) => {
    setM73OverdueAccounts(prev => prev.map(acc => acc.id === id ? { ...acc, status: "Escalated to Credit Manager", commitment: "Escalated" } : acc));
    toast.warning(`Overdue account for ${name} escalated to credit and collections desk. Direct intervention triggered.`);
  };

  const handleRunReminderCampaign73 = () => {
    setM73CampaignRunning(true);
    toast.loading("Triggering automated outbound collection voice campaign via telephony trunk line...");
    
    setTimeout(() => {
      setM73CampaignRunning(false);
      setM73OverdueAccounts(prev => prev.map(acc => {
        if (acc.status === "⚠️ Call Pending") {
          const rand = Math.random() > 0.4;
          return {
            ...acc,
            status: rand ? "Commitment" : "⚠️ No Response",
            commitment: rand ? "05 Feb 2025" : "Voicemail Left"
          };
        }
        return acc;
      }));
      toast.dismiss();
      toast.success("Outbound reminder voice campaign executed successfully! Secured 2 new payment commitments (₹2.8L).");
    }, 2800);
  };

  // SUBMODULE 7.4 STATE: Dealer Feedback & NPS Surveys
  const [m74SurveyTriggering, setM74SurveyTriggering] = useState(false);
  const [m74Dealers, setM74Dealers] = useState([
    { id: 1, name: "Patel Agencies", city: "Rajkot", score: 8.4, category: "Promoter", trend: "up", date: "22 Jan", feedback: "Zero complaints, very happy." },
    { id: 2, name: "Mehta Brothers", city: "Vadodara", score: 7.1, category: "Passive", trend: "stable", date: "24 Jan", feedback: "Standard delivery could be slightly faster." },
    { id: 3, name: "Sharma Distributors", city: "Vadodara", score: 5.2, category: "Detractor", trend: "down", date: "21 Jan", feedback: "Packaging quality is poor, rust on corners.", alerted: false },
    { id: 4, name: "Shah Traders", city: "Surat", score: 9.0, category: "Promoter", trend: "up", date: "25 Jan", feedback: "Excellent support and quick dispatches." },
    { id: 5, name: "Joshi & Sons", city: "Rajkot", score: 7.8, category: "Passive", trend: "stable", date: "18 Jan", feedback: "Need invoices immediately on dispatch." },
    { id: 6, name: "Trivedi Traders", city: "Surat", score: 8.2, category: "Promoter", trend: "stable", date: "20 Jan", feedback: "Consistent product quality." },
    { id: 7, name: "R.K. Engineering", city: "Ahmedabad", score: 6.0, category: "Detractor", trend: "down", date: "15 Jan", feedback: "Dimensional variations in stamped panels.", alerted: false },
    { id: 8, name: "Kapoor Supplies", city: "Ahmedabad", score: 8.7, category: "Promoter", trend: "up", date: "22 Jan", feedback: "Solid account manager coordination." },
    { id: 9, name: "Nair Industries", city: "Ahmedabad", score: 7.5, category: "Passive", trend: "stable", date: "23 Jan", feedback: "Need automatic tracking links." }
  ]);
  const [m74Themes] = useState([
    { name: "Delivery Speed", count: 14, share: 28 },
    { name: "Invoice Timing", count: 9, share: 18 },
    { name: "Packaging Quality", count: 7, share: 14 },
    { name: "Product Consistency", count: 6, share: 12 },
    { name: "WhatsApp Updates", count: 5, share: 10 },
    { name: "Credit Terms", count: 4, share: 8 }
  ]);

  const handleEscalateDetractor74 = (id: number, name: string) => {
    setM74Dealers(prev => prev.map(d => d.id === id ? { ...d, alerted: true } : d));
    toast.success(`NPS detractor alert generated! Customer relationship ticket pushed to Regional Sales Manager Vadodara/Ahmedabad.`);
  };

  const handleTriggerSurveyCampaign74 = () => {
    setM74SurveyTriggering(true);
    toast.loading("Initiating monthly CSAT/NPS automated feedback calling queue...");
    
    setTimeout(() => {
      setM74SurveyTriggering(false);
      toast.dismiss();
      toast.success("Survey feedback calling completed for active dealer base! Collected 3 new NPS records.");
    }, 2000);
  };

  // ============================================================
  // MODULE 8: CUSTOMER COMPLAINT & AFTER-SALES MANAGEMENT
  // ============================================================

  // SUBMODULE 8.1 STATE: Omnichannel Complaint Intake
  const [m81Complaints, setM81Complaints] = useState([
    { id: 1, time: "14:37", channel: "WhatsApp", icon: "💬", customer: "Kapoor Industries", desc: "Rust spots on 40 pieces", status: "Acknowledged", severity: "Major" },
    { id: 2, time: "13:22", channel: "Email", icon: "📧", customer: "Tata AutoComp", desc: "Short delivery — 200 units missing from SO-4822", status: "Routed to Dispatch", severity: "Major" },
    { id: 3, time: "11:48", channel: "Phone", icon: "📞", customer: "Maruti Ancillaries", desc: "Wrong invoice number — GST mismatch", status: "Under Resolution", severity: "Minor" },
    { id: 4, time: "10:15", channel: "Portal", icon: "🌐", customer: "Bajaj Auto", desc: "Dimensional issue — shaft diameter out of spec", status: "CAPA Raised", severity: "Critical" },
    { id: 5, time: "09:03", channel: "Field App", icon: "📱", customer: "Reliance Consumer", desc: "Packaging torn — 3 cartons damaged in transit", status: "Resolved", severity: "Minor" },
    { id: 6, time: "08:44", channel: "WhatsApp", icon: "💬", customer: "L&T Construction", desc: "Late delivery — 4 days overdue", status: "Escalated", severity: "Major" },
    { id: 7, time: "07:31", channel: "Email", icon: "📧", customer: "Godrej Precision", desc: "Material test certificate missing from delivery", status: "Acknowledged", severity: "Minor" }
  ]);
  const [m81ChannelStats] = useState([
    { channel: "WhatsApp", today: 3, week: 14, avgResponse: "4 min" },
    { channel: "Email", today: 1, week: 6, avgResponse: "22 min" },
    { channel: "Phone (M7)", today: 2, week: 8, avgResponse: "2 min" },
    { channel: "Dealer Portal", today: 0, week: 3, avgResponse: "8 min" },
    { channel: "Field Sales App", today: 1, week: 4, avgResponse: "15 min" }
  ]);
  const handleCreateManualTicket81 = () => {
    const newTicket = {
      id: Date.now(), time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      channel: "Manual", icon: "✏️", customer: "Walk-In Complaint", desc: "Manually logged quality concern — awaiting details",
      status: "Pending Classification", severity: "Information"
    };
    setM81Complaints(prev => [newTicket, ...prev]);
    toast.success("Manual complaint ticket created! Pending AI classification in Sub-module 8.2.");
  };

  // SUBMODULE 8.2 STATE: AI Complaint Classification & Routing
  const [m82ClassificationLog, setM82ClassificationLog] = useState([
    { id: 1, complaintId: "CMP-2024-441", customer: "Kapoor Industries", classification: "Quality — Surface Finish", severity: "Major", confidence: 94, routedTo: "QA Team — Sunita Patel", time: "6 sec", overridden: false },
    { id: 2, complaintId: "CMP-2024-440", customer: "Tata AutoComp", classification: "Delivery — Short Shipment", severity: "Major", confidence: 98, routedTo: "Dispatch Manager — Kavita Sharma", time: "4 sec", overridden: false },
    { id: 3, complaintId: "CMP-2024-439", customer: "Maruti Ancillaries", classification: "Documentation — GST Error", severity: "Minor", confidence: 91, routedTo: "Finance — Anita Kapoor", time: "7 sec", overridden: false },
    { id: 4, complaintId: "CMP-2024-438", customer: "Bajaj Auto", classification: "Quality — Dimensional", severity: "Critical", confidence: 89, routedTo: "QA Team — Sunita Patel", time: "8 sec", overridden: false },
    { id: 5, complaintId: "CMP-2024-437", customer: "Reliance Consumer", classification: "Packaging — Damaged", severity: "Minor", confidence: 96, routedTo: "Dispatch / Stores — Kavita Sharma", time: "5 sec", overridden: false },
    { id: 6, complaintId: "CMP-2024-436", customer: "L&T Construction", classification: "Delivery — Late", severity: "Major", confidence: 87, routedTo: "Production + Dispatch — Deepak Trivedi", time: "9 sec", overridden: false },
    { id: 7, complaintId: "CMP-2024-435", customer: "Godrej Precision", classification: "Documentation — Missing Certificate", severity: "Minor", confidence: 93, routedTo: "QA Team — Sunita Patel", time: "6 sec", overridden: false }
  ]);
  const [m82Classifying, setM82Classifying] = useState(false);
  const handleClassifyComplaint82 = () => {
    setM82Classifying(true);
    toast.loading("AI NLP engine reading complaint text and classifying against defect taxonomy...");
    setTimeout(() => {
      setM82Classifying(false);
      toast.dismiss();
      const newEntry = {
        id: Date.now(), complaintId: `CMP-2024-${450 + Math.floor(Math.random() * 10)}`, customer: "Demo Account",
        classification: "Quality — Surface Finish", severity: "Major", confidence: 92,
        routedTo: "QA Team — Sunita Patel", time: "6 sec", overridden: false
      };
      setM82ClassificationLog(prev => [newEntry, ...prev]);
      toast.success("AI classification complete in 6 seconds! Complaint routed to QA Team, SLA clock started.");
    }, 2500);
  };
  const handleOverrideClassification82 = (id: number) => {
    setM82ClassificationLog(prev => prev.map(c => c.id === id ? { ...c, overridden: true, classification: "Quality — Dimensional (Override)", confidence: 100 } : c));
    toast.info("Classification manually overridden. Feedback logged for AI model retraining.");
  };

  // SUBMODULE 8.3 STATE: Customer Complaint Acknowledgement Agent
  const [m83AckLog] = useState([
    { id: 1, complaintId: "CMP-2024-441", customer: "Kapoor Industries", severity: "Major", sentAt: "14:42:15", channel: "WhatsApp + Email", timeToSend: "4 min 53 sec", delivered: true, read: true },
    { id: 2, complaintId: "CMP-2024-440", customer: "Tata AutoComp", severity: "Major", sentAt: "13:26:44", channel: "WhatsApp + Email", timeToSend: "4 min 22 sec", delivered: true, read: true },
    { id: 3, complaintId: "CMP-2024-439", customer: "Maruti Ancillaries", severity: "Minor", sentAt: "11:52:18", channel: "WhatsApp", timeToSend: "4 min 30 sec", delivered: true, read: false },
    { id: 4, complaintId: "CMP-2024-438", customer: "Bajaj Auto", severity: "Critical", sentAt: "10:18:55", channel: "WhatsApp + Email + Call", timeToSend: "3 min 55 sec", delivered: true, read: true },
    { id: 5, complaintId: "CMP-2024-437", customer: "Reliance Consumer", severity: "Minor", sentAt: "09:07:11", channel: "WhatsApp", timeToSend: "4 min 08 sec", delivered: true, read: true },
    { id: 6, complaintId: "CMP-2024-436", customer: "L&T Construction", severity: "Major", sentAt: "08:48:22", channel: "WhatsApp + Email", timeToSend: "4 min 18 sec", delivered: true, read: true },
    { id: 7, complaintId: "CMP-2024-435", customer: "Godrej Precision", severity: "Minor", sentAt: "07:35:44", channel: "Email", timeToSend: "4 min 13 sec", delivered: true, read: false }
  ]);
  const [m83SendingManual, setM83SendingManual] = useState(false);
  const handleManualAck83 = () => {
    setM83SendingManual(true);
    toast.loading("Sending manual acknowledgement via WhatsApp Business API...");
    setTimeout(() => {
      setM83SendingManual(false);
      toast.dismiss();
      toast.success("Manual acknowledgement sent successfully! Read receipt confirmed.");
    }, 1800);
  };

  // SUBMODULE 8.4 STATE: CAPA Tracking
  const [m84Capas, setM84Capas] = useState([
    { id: 1, capaId: "CAPA-2024-441", complaintId: "CMP-2024-441", customer: "Kapoor Industries", defect: "Surface Finish", severity: "Major", status: "Root Cause Investigation", daysOpen: 0, due: "05 Feb", assignee: "Sunita Patel", progress: 35 },
    { id: 2, capaId: "CAPA-2024-438", complaintId: "CMP-2024-438", customer: "Bajaj Auto", defect: "Dimensional", severity: "Critical", status: "Containment Done", daysOpen: 1, due: "28 Jan", assignee: "Sunita Patel", progress: 50 },
    { id: 3, capaId: "CAPA-2024-430", complaintId: "CMP-2024-430", customer: "Tata AutoComp", defect: "Material Property", severity: "Major", status: "Actions Assigned", daysOpen: 8, due: "10 Feb", assignee: "Vijay Sharma", progress: 62 },
    { id: 4, capaId: "CAPA-2024-421", complaintId: "CMP-2024-421", customer: "Maruti Ancillaries", defect: "Surface Finish", severity: "Major", status: "Effectiveness Check", daysOpen: 18, due: "24 Jan", assignee: "Sunita Patel", progress: 88 },
    { id: 5, capaId: "CAPA-2024-412", complaintId: "CMP-2024-412", customer: "L&T Construction", defect: "Late Delivery", severity: "Major", status: "Actions Completed", daysOpen: 22, due: "01 Feb", assignee: "Deepak Trivedi", progress: 75 }
  ]);
  const handleAdvanceCapa84 = (id: number) => {
    const statusFlow = ["Root Cause Investigation", "Containment Done", "Actions Assigned", "Actions Completed", "Effectiveness Check", "CAPA Closed"];
    setM84Capas(prev => prev.map(c => {
      if (c.id === id) {
        const idx = statusFlow.indexOf(c.status);
        const next = idx < statusFlow.length - 1 ? statusFlow[idx + 1] : c.status;
        return { ...c, status: next, progress: Math.min(c.progress + 15, 100) };
      }
      return c;
    }));
    toast.success("CAPA stage advanced! Updated notifications dispatched to QA team and stakeholders.");
  };
  const handleEscalateCapa84 = (id: number, capaId: string) => {
    toast.warning(`CAPA ${capaId} escalated to QA Head + Production Head. WhatsApp alert dispatched with full CAPA summary.`);
  };
  const handleNotifyMD84 = () => {
    toast.success("Systemic quality risk alert sent to MD Vikram Joshi via WhatsApp + Email. Review meeting auto-scheduled.");
  };

  // SUBMODULE 8.5 STATE: Customer Resolution Communication Agent
  const [m85Timeline] = useState([
    { id: 1, time: "22 Jan 14:37", event: "Complaint Received", type: "intake", status: "WhatsApp", detail: "Surface defect reported on 40 pieces of MS-204" },
    { id: 2, time: "22 Jan 14:42", event: "Acknowledged", type: "ack", status: "Delivered + Read", detail: "Reference CMP-2024-441 shared, QA Team assigned" },
    { id: 3, time: "22 Jan 15:10", event: "Investigation Started", type: "update", status: "Delivered + Read", detail: "QA Team began batch B-4821 analysis" },
    { id: 4, time: "23 Jan 09:15", event: "Root Cause Identified", type: "rootcause", status: "Delivered + Read", detail: "Zinc coating insufficiency — supplier lot RM-CRCA-1.2" },
    { id: 5, time: "23 Jan 10:30", event: "Replacement Dispatched", type: "action", status: "Delivered + Read", detail: "Batch B-4831 dispatched — LR TM24-88755" },
    { id: 6, time: "24 Jan 14:20", event: "Resolution Confirmed", type: "resolution", status: "Pending", detail: "Credit note ₹44,000 + replacement 40 units" },
    { id: 7, time: "26 Jan", event: "NPS Survey", type: "nps", status: "Scheduled", detail: "Post-resolution CSAT/NPS call scheduled" }
  ]);
  const [m85NpsScores, setM85NpsScores] = useState([
    { id: 1, ref: "CMP-2024-435", customer: "Godrej Precision", date: "19 Jan", score: 9, category: "Promoter", followUp: "None needed" },
    { id: 2, ref: "CMP-2024-430", customer: "Tata AutoComp", date: "18 Jan", score: 7, category: "Passive", followUp: "Sales follow-up" },
    { id: 3, ref: "CMP-2024-421", customer: "Maruti Ancillaries", date: "16 Jan", score: 4, category: "Detractor", followUp: "Flagged to Sales Manager", flagged: false },
    { id: 4, ref: "CMP-2024-415", customer: "Reliance Consumer", date: "14 Jan", score: 8, category: "Promoter", followUp: "None needed" },
    { id: 5, ref: "CMP-2024-408", customer: "Bajaj Auto", date: "11 Jan", score: 6, category: "Passive", followUp: "Sales follow-up" },
    { id: 6, ref: "CMP-2024-402", customer: "Ashok Leyland", date: "08 Jan", score: 3, category: "Detractor", followUp: "Escalated", flagged: false },
    { id: 7, ref: "CMP-2024-395", customer: "Kapoor Industries", date: "05 Jan", score: 9, category: "Promoter", followUp: "None needed" }
  ]);
  const [m85SendingUpdate, setM85SendingUpdate] = useState(false);
  const handleSendUpdate85 = () => {
    setM85SendingUpdate(true);
    toast.loading("Composing and dispatching resolution update via WhatsApp Business API...");
    setTimeout(() => {
      setM85SendingUpdate(false);
      toast.dismiss();
      toast.success("Resolution update sent to Kapoor Industries! WhatsApp delivered + read confirmed.");
    }, 2000);
  };
  const handleFlagDetractor85 = (id: number, customer: string) => {
    setM85NpsScores(prev => prev.map(n => n.id === id ? { ...n, flagged: true, followUp: "🔴 Alerted RSM" } : n));
    toast.warning(`Detractor alert for ${customer} sent to Regional Sales Manager! Urgent follow-up ticket created.`);
  };

  // SUBMODULE 8.6 STATE: Complaint Analytics & Quality Intelligence
  const [m86TrendData] = useState([
    { month: "Feb", complaints: 14, avg: null },
    { month: "Mar", complaints: 18, avg: null },
    { month: "Apr", complaints: 12, avg: 14.7 },
    { month: "May", complaints: 16, avg: 15.3 },
    { month: "Jun", complaints: 22, avg: 16.7 },
    { month: "Jul", complaints: 19, avg: 19.0 },
    { month: "Aug", complaints: 24, avg: 21.7 },
    { month: "Sep", complaints: 21, avg: 21.3 },
    { month: "Oct", complaints: 18, avg: 21.0 },
    { month: "Nov", complaints: 25, avg: 21.3 },
    { month: "Dec", complaints: 22, avg: 21.7 },
    { month: "Jan", complaints: 28, avg: 25.0 }
  ]);
  const [m86ParetoData] = useState([
    { type: "Surface Defect", count: 8, cumPct: 28.6 },
    { type: "Short Shipment", count: 5, cumPct: 46.4 },
    { type: "Dimensional", count: 4, cumPct: 60.7 },
    { type: "Late Delivery", count: 3, cumPct: 71.4 },
    { type: "Documentation", count: 3, cumPct: 82.1 },
    { type: "Packaging", count: 2, cumPct: 89.3 },
    { type: "Service", count: 1, cumPct: 92.9 }
  ]);
  const [m86CostBreakdown] = useState([
    { category: "Replacement + Re-dispatch", amount: 190000 },
    { category: "Credit Notes Issued", amount: 120000 },
    { category: "Rework / Sorting", amount: 40000 },
    { category: "Investigation Hours", amount: 30000 }
  ]);
  const [m86CustomerHeatmap] = useState([
    { customer: "Kapoor Industries", complaints: 4, open: 1, avgResolution: 28, rating: "Attention" },
    { customer: "Tata AutoComp", complaints: 5, open: 1, avgResolution: 34, rating: "Attention" },
    { customer: "Maruti Ancillaries", complaints: 3, open: 0, avgResolution: 22, rating: "Good" },
    { customer: "Bajaj Auto", complaints: 2, open: 1, avgResolution: 18, rating: "Good" },
    { customer: "L&T Construction", complaints: 4, open: 2, avgResolution: 51, rating: "Poor" },
    { customer: "Reliance Consumer", complaints: 2, open: 0, avgResolution: 14, rating: "Good" },
    { customer: "Godrej Precision", complaints: 1, open: 0, avgResolution: 19, rating: "Good" }
  ]);
  const [m86ReportGenerating, setM86ReportGenerating] = useState(false);
  const handleGenerateReport86 = () => {
    setM86ReportGenerating(true);
    toast.loading("Compiling Monthly Complaint Management Report for MD and QA leadership...");
    setTimeout(() => {
      setM86ReportGenerating(false);
      toast.dismiss();
      toast.success("January 2025 Complaint Report generated! PDF dispatched to MD Vikram Joshi, QA Head Sunita Patel via WhatsApp + Email.");
    }, 2500);
  };

  return (

    m.id === "og-regulatory" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "1-1" && <OGSubModule11 />}
          {s.id === "1-2" && <OGSubModule12 />}
          {s.id === "1-3" && <OGSubModule13 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-land-lease" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "2-1" && <OGSubModule21 />}
          {s.id === "2-2" && <OGSubModule22 />}
          {s.id === "2-3" && <OGSubModule23 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-hse" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "3-1" && <OGSubModule31 />}
          {s.id === "3-2" && <OGSubModule32 />}
          {s.id === "3-3" && <OGSubModule33 />}
          {s.id === "3-4" && <OGSubModule34 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-technical-doc" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "4-1" && <OGSubModule41 />}
          {s.id === "4-2" && <OGSubModule42 />}
          {s.id === "4-3" && <OGSubModule43 />}
          {s.id === "4-4" && <OGSubModule44 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-workflow" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "5-1" && <OGSubModule51 />}
          {s.id === "5-2" && <OGSubModule52 />}
          {s.id === "5-3" && <OGSubModule53 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-workforce" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "6-1" && <OGSubModule61 />}
          {s.id === "6-2" && <OGSubModule62 />}
          {s.id === "6-3" && <OGSubModule63 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : m.id === "og-reporting" ? (
      <div className="max-w-[1480px] mx-auto space-y-6">
        <PageHeader
          breadcrumbs={[
            { label: "Home", to: "/" },
            { label: m.short, to: `/m/${m.id}` },
            { label: s.title },
          ]}
          title={s.title}
          subtitle={s.blurb}
        />

        {/* Sub-module Custom Renders */}
        <div>
          {s.id === "7-1" && <OGSubModule71 />}
          {s.id === "7-2" && <OGSubModule72 />}
          {s.id === "7-3" && <OGSubModule73 />}
        </div>

        {/* Footer navigation back links */}
        <div className="mt-8 pt-4 border-t">
          <Link
            to="/m/$moduleId"
            params={{ moduleId: m.id }}
            className="inline-flex items-center gap-1.5 text-[12.5px] text-[#8892A0] hover:text-[#0D1B2A] transition-colors font-semibold"
          >
            <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
          </Link>
        </div>
      </div>
    ) : (

    <div className="max-w-[1480px] mx-auto space-y-6">
      <PageHeader
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: m.short, to: `/m/${m.id}` },
          { label: s.title },
        ]}
        title={s.title}
        subtitle={s.blurb}
      />

      {/* Main Content Area */}
      {isM1 ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* PAGE 2 — Sub-Module 1.1: ERP/MES Data Sync Agent */}
          {/* ========================================================================= */}
          {s.id === "1-1" && (
            <div className="space-y-6">
              
              {/* Sync Health Banner */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="h-4 w-4 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">Sync Health: ✓ Healthy & Online</div>
                    <div className="text-[12px] text-muted-foreground font-mono">
                      Last sync: {syncTimeCounter} seconds ago • Ingested: 142 orders • 7 materials below reorder
                    </div>
                  </div>
                </div>

                <button
                  onClick={triggerSync11}
                  disabled={syncStatus11 === "syncing"}
                  className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 text-[12.5px] shadow-sm shrink-0"
                >
                  {syncStatus11 === "syncing" ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" /> Syncing...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-3.5 w-3.5" /> Force Manual Sync
                    </>
                  )}
                </button>
              </div>

              {/* Ingestion logs & anomalies */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Centre Left: Data Pull Ingestion Log */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Vatva Ingestion Protocol Log</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Real-time synced databases and transaction nodes</p>
                  </div>

                  <div className="space-y-3 flex-1 overflow-y-auto max-h-[360px] pr-1.5 font-mono text-[11.5px] leading-relaxed">
                    {syncedRecords.map((log, idx) => (
                      <div key={idx} className="p-3 rounded-lg border bg-muted/40 text-foreground flex items-start gap-2.5">
                        <span className="text-primary shrink-0 font-bold">●</span>
                        <div>{log}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centre Right: Anomaly detection panel */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Active Anomalies Detected</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Pending validation and sync corrections</p>
                  </div>

                  <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                    {anomalies11.map((a) => (
                      <div
                        key={a.id}
                        className={`p-3.5 rounded-xl border flex flex-col justify-between gap-3 transition-opacity ${
                          a.resolved ? "opacity-40 border-muted bg-muted/20" : "bg-card"
                        }`}
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono ${
                                a.severity === "CRITICAL"
                                  ? "bg-red-500/10 text-red-500 border border-red-500/25 animate-pulse"
                                  : a.severity === "HIGH"
                                  ? "bg-red-500/10 text-red-500 border border-red-500/25"
                                  : "bg-amber-500/10 text-amber-500 border border-amber-500/25"
                              }`}
                            >
                              {a.severity}
                            </span>
                            <span className="text-[11px] text-muted-foreground font-mono">{a.system}</span>
                          </div>
                          <div className="text-[12.5px] font-semibold text-foreground leading-snug">{a.title}</div>
                        </div>

                        {!a.resolved ? (
                          <button
                            onClick={() => resolveAnomaly11(a.id, a.cta)}
                            className="w-full h-8 rounded-lg bg-primary hover:opacity-90 text-primary-foreground text-[11.5px] font-semibold tracking-tight shadow-sm"
                          >
                            {a.cta}
                          </button>
                        ) : (
                          <div className="text-[11.5px] text-emerald-600 font-semibold flex items-center gap-1">
                            <CheckCircle2 className="h-3.5 w-3.5" /> Resolved & Synced
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom: Connection status for integrated systems */}
              <div className="space-y-3">
                <h4 className="text-[14px] font-bold">Unified Integrations Grid</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { name: "SAP B1 ERP Service Layer", status: "Connected", sync: "15m intervals", latency: "1.1s", ok: true },
                    { name: "eSSL Biometric SQL Node", status: "Connected", sync: "Hourly polls", latency: "0.8s", ok: true },
                    { name: "ERPNext Shop Floor MES", status: "Connected", sync: "Real-time socket", latency: "0.2s", ok: true },
                    { name: "Inventory Database Tunnel", status: "Connected", sync: "15m intervals", latency: "1.2s", ok: true }
                  ].map((sys, idx) => (
                    <div key={idx} className="p-4 rounded-xl border bg-card flex items-start justify-between gap-3 shadow-sm">
                      <div className="space-y-1">
                        <div className="font-bold text-[13px] text-foreground leading-tight">{sys.name}</div>
                        <div className="text-[11px] text-muted-foreground font-mono">Poll: {sys.sync}</div>
                        <div className="text-[11.5px] text-[#1D9E75] font-semibold font-mono mt-2">Latency: {sys.latency}</div>
                      </div>
                      <span className="h-2.5 w-2.5 rounded-full bg-[#1D9E75] animate-pulse shrink-0 mt-0.5" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 3 — Sub-Module 1.2: AI Production Schedule Generator */}
          {/* ========================================================================= */}
          {s.id === "1-2" && (
            <div className="space-y-6">
              
              {/* Top Selector Control Bar */}
              <div className="rounded-2xl border p-5 bg-card flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-4">
                  
                  {/* Logic Strategy */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Scheduling Sequence logic</label>
                    <div className="inline-flex gap-1 p-1 rounded-xl bg-muted/60 border">
                      {[
                        { id: "Strategic", label: "Strategic Weight" },
                        { id: "EDD", label: "Earliest Due (EDD)" },
                        { id: "FIFO", label: "FIFO Index" },
                        { id: "Setup", label: "Setup Min" }
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => handleRuleChange(opt.id as any)}
                          className={`px-3 py-1.5 text-[11.5px] font-semibold rounded-lg transition-colors ${
                            priorityRule === opt.id ? "bg-background text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Week Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Target Week Slot</label>
                    <select
                      value={scheduleWeek}
                      onChange={(e) => setScheduleWeek(e.target.value)}
                      className="h-10 px-3 rounded-xl border bg-background text-[13px] font-medium focus:outline-none focus:border-primary"
                    >
                      <option>Week of 22–26 Jan 2025</option>
                      <option>Week of 29 Jan–2 Feb 2025</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={runScheduler}
                  disabled={schedulingStatus === "optimizing"}
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px] shadow-md shadow-primary/20 shrink-0 self-stretch sm:self-auto"
                >
                  {schedulingStatus === "optimizing" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Resolving Constraints (90s)...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" /> Generate Optimised Schedule
                    </>
                  )}
                </button>
              </div>

              {/* Gantt Chart Matrix */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Left Area (70%): Interactive Gantt Matrix */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Interactive 5-Day Gantt Matrix View</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">6 lines × 5 days shifts layout</p>
                  </div>

                  <div className="border rounded-xl p-4 bg-muted/20 space-y-3.5 text-[12.5px] overflow-x-auto min-w-[640px]">
                    
                    {/* Headers */}
                    <div className="grid grid-cols-6 border-b pb-2 font-bold text-muted-foreground uppercase tracking-wider text-[11px]">
                      <span>Production Line</span>
                      <span className="text-center">Mon (Shifts)</span>
                      <span className="text-center">Tue (Shifts)</span>
                      <span className="text-center">Wed (Shifts)</span>
                      <span className="text-center">Thu (Shifts)</span>
                      <span className="text-center">Fri (Shifts)</span>
                    </div>

                    {/* CNC Line 1 */}
                    <div className="grid grid-cols-6 items-center py-1">
                      <span className="font-semibold text-foreground">CNC Line 1</span>
                      <div className="col-span-3 px-2 py-2 rounded-lg bg-red-500/10 text-[#D85A30] border border-red-500/20 text-center font-mono text-[11px] font-bold">
                        JC-4822 (Tata AutoComp Systems, 2.5k units)
                      </div>
                      <div className={`col-span-1 ml-1 px-2 py-2 rounded-lg text-center font-mono text-[11px] font-bold transition-all ${
                        conflictResolved 
                          ? "bg-muted/40 text-muted-foreground border border-muted/50 italic line-through" 
                          : "bg-red-500/20 text-red-600 border border-red-500/30 animate-pulse"
                      }`}>
                        JC-4827
                      </div>
                      <div className="col-span-1 text-center text-muted-foreground italic text-[11px] font-mono">Idle</div>
                    </div>

                    {/* Assembly Line 2 */}
                    <div className="grid grid-cols-6 items-center py-1">
                      <span className="font-semibold text-foreground">Assembly Line 2</span>
                      <div className="col-span-2 px-2 py-2 rounded-lg bg-amber-500/10 text-[#E8A838] border border-amber-500/20 text-center font-mono text-[11px] font-bold">
                        JC-4823 (800u)
                      </div>
                      <div className="col-span-2 ml-1 px-2 py-2 rounded-lg bg-amber-500/10 text-[#E8A838] border border-amber-500/20 text-center font-mono text-[11px] font-bold">
                        JC-4826 (900u)
                      </div>
                      <div className="col-span-1 text-center text-muted-foreground italic text-[11px] font-mono">Idle</div>
                    </div>

                    {/* Stamping Line 3 */}
                    <div className="grid grid-cols-6 items-center py-1">
                      <span className="font-semibold text-foreground">Stamping Line 3</span>
                      <div className="col-span-3 px-2 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 text-center font-mono text-[11px] font-bold">
                        JC-4821 (Kapoor, 1k units)
                      </div>
                      <div className="col-span-2 ml-1 px-2 py-2 rounded-lg bg-emerald-500/10 text-[#1D9E75] border border-emerald-500/20 text-center font-mono text-[11px] font-bold">
                        JC-4825 (600u)
                      </div>
                    </div>

                    {/* Welding Line 4 */}
                    <div className="grid grid-cols-6 items-center py-1">
                      <span className="font-semibold text-foreground">Welding Line 4</span>
                      <div className="col-span-1 text-center text-muted-foreground italic text-[11px] font-mono">Idle</div>
                      <div className="col-span-2 px-2 py-2 rounded-lg bg-amber-500/10 text-[#E8A838] border border-amber-500/20 text-center font-mono text-[11px] font-bold">
                        JC-4824 (1.2k units)
                      </div>
                      {conflictResolved ? (
                        <div className="col-span-2 ml-1 px-2 py-2 rounded-lg bg-emerald-500/20 text-emerald-600 border border-emerald-500/30 text-center font-mono text-[11px] font-bold animate-fade-in">
                          ✓ JC-4827 Rerouted (Ashok Leyland)
                        </div>
                      ) : (
                        <div className="col-span-2 text-center text-muted-foreground italic text-[11px] font-mono">Available Space</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Panel (30%): Conflict mitigation detail */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="text-[14.5px] font-bold tracking-tight flex items-center gap-1.5 text-danger">
                      <ShieldAlert className="h-4 w-4" /> AI Conflict mitigation log
                    </h4>
                    {!conflictResolved && <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />}
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl border bg-red-500/5 border-red-500/20 text-[12px] space-y-2">
                      <div className="font-bold text-[#D85A30]">CNC LINE 1 — OVERLOAD DETECTED</div>
                      <p className="text-muted-foreground leading-snug">
                        Job **JC-4822 (Tata AutoComp)** and **JC-4827 (Ashok Leyland)** overlap Friday morning shift on Line 1. Overload forecast: **118%**.
                      </p>
                    </div>

                    {!conflictResolved ? (
                      <div className="space-y-3.5">
                        <div className="text-[12.5px] space-y-1">
                          <span className="font-bold text-foreground">AI RECOMMENDATION:</span>
                          <p className="text-muted-foreground leading-snug">
                            → Move **JC-4827** (Ashok Leyland MS-212) to **Line 4 (Welding Rig)** on **Thursday PM shift**.
                          </p>
                          <p className="text-[#1D9E75] font-semibold text-[11.5px] mt-1">• Materials available ✓ • Welders certified ✓</p>
                        </div>

                        <button
                          onClick={runScheduler}
                          className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 text-[13px] shadow-sm"
                        >
                          <Check className="h-4 w-4" /> Accept Rerouting
                        </button>
                      </div>
                    ) : (
                      <div className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 text-[12.5px] space-y-1.5">
                        <div className="font-bold flex items-center gap-1">
                          <CheckCircle className="h-4 w-4" /> Conflict Resolved Successfully
                        </div>
                        <p className="text-muted-foreground text-[11.5px] leading-snug">
                          Ashok Leyland order shifted to Line 4. CNC Line 1 load reduced to 82%, completely eliminating late delivery risk to Tata Systems.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Master schedule table */}
              <div className="rounded-2xl bg-card border p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-[14.5px] font-bold tracking-tight">Active Schedule Job Cards</h4>
                  <div className="flex items-center gap-2">
                    <button onClick={() => toast.success("Exporting schedule to SAP ERP...")} className="h-8 px-3 rounded-lg border text-[12px] font-medium hover:bg-muted">Push to ERP</button>
                    <button onClick={() => toast.success("Downloading schedule PDF...")} className="h-8 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-medium hover:opacity-90">Export PDF</button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                        <th className="p-2.5">Job ID</th>
                        <th className="p-2.5">Customer Name</th>
                        <th className="p-2.5">Component Sku</th>
                        <th className="p-2.5">Line Assigned</th>
                        <th className="p-2.5">Run Volume</th>
                        <th className="p-2.5">Days</th>
                        <th className="p-2.5 text-right">Material Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {jobsList12.map((j) => (
                        <tr key={j.id} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                          <td className="p-2.5 font-mono font-semibold text-[11.5px] text-[#2E86AB]">{j.id}</td>
                          <td className="p-2.5 font-medium">{j.customer}</td>
                          <td className="p-2.5 font-mono text-[11.5px]">{j.item}</td>
                          <td className="p-2.5 text-muted-foreground">{j.line}</td>
                          <td className="p-2.5 font-mono">{j.qty.toLocaleString()} units</td>
                          <td className="p-2.5 text-muted-foreground">{j.days}</td>
                          <td className="p-2.5 text-right">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                              j.color === "success" 
                                ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                : j.color === "warning"
                                ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                : "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                            }`}>
                              {j.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 4 — Sub-Module 1.3: Capacity Bottleneck Detector */}
          {/* ========================================================================= */}
          {s.id === "1-3" && (
            <div className="space-y-6">
              
              {/* Top Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Work Centres</div>
                  <div className="text-[20px] font-bold mt-1">8 Centers</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-red-500/20">
                  <div className="text-[11px] font-bold text-red-500 uppercase tracking-wider">Overloaded Centers</div>
                  <div className="text-[20px] font-bold text-[#D85A30] mt-1">{overtimeApplied ? "1 Center" : "2 Centers"}</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Near Capacity</div>
                  <div className="text-[20px] font-bold text-[#E8A838] mt-1">1 Center</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Operational Safe</div>
                  <div className="text-[20px] font-bold text-[#1D9E75] mt-1">{overtimeApplied ? "5 Centers" : "4 Centers"}</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Underloaded</div>
                  <div className="text-[20px] font-bold text-slate-500 mt-1">1 Center</div>
                </div>
              </div>

              {/* Heatmap Grid & Details */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Heatmap Grid (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Capacity Heatmap Grid</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Click any row to inspect bottleneck detail projections</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Work Center</th>
                          <th className="p-2.5 text-center">Mon</th>
                          <th className="p-2.5 text-center">Tue</th>
                          <th className="p-2.5 text-center">Wed</th>
                          <th className="p-2.5 text-center">Thu</th>
                          <th className="p-2.5 text-center">Fri</th>
                          <th className="p-2.5 text-center">Avg Load</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {centersData.map((c) => (
                          <tr
                            key={c.name}
                            onClick={() => setSelectedCenter(c.name)}
                            className={`border-b last:border-0 hover:bg-accent/20 cursor-pointer transition-colors ${
                              selectedCenter === c.name ? "bg-accent/40 font-semibold" : ""
                            }`}
                          >
                            <td className="p-2.5 flex items-center justify-between">
                              <span className="font-semibold text-foreground">{c.name}</span>
                              <span className="text-[10px] text-muted-foreground italic hidden sm:inline">{c.type}</span>
                            </td>
                            {[c.mon, c.tue, c.wed, c.thu, c.fri].map((pct, idx) => (
                              <td key={idx} className="p-2.5 text-center">
                                <span
                                  className={`inline-block w-9 py-1 rounded text-[11px] font-mono font-bold text-center ${
                                    pct >= 95 
                                      ? "bg-red-500/10 text-red-600 border border-red-500/25 animate-pulse" 
                                      : pct >= 85 
                                      ? "bg-amber-500/10 text-amber-600 border border-amber-500/25" 
                                      : pct < 50 
                                      ? "bg-slate-500/10 text-slate-500" 
                                      : "bg-emerald-500/10 text-emerald-600"
                                  }`}
                                >
                                  {pct}%
                                </span>
                              </td>
                            ))}
                            <td className="p-2.5 text-center font-mono font-bold text-foreground">{c.avg}%</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                c.status === "Overloaded"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20"
                                  : c.status === "Near Capacity" || c.status === "High Load"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : c.status === "Underloaded"
                                  ? "bg-slate-500/10 text-slate-600 border-slate-500/20"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>
                                {c.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Panel (40%): Bottleneck Detail */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="text-[14.5px] font-bold tracking-tight">Work Center Load calculations</h4>
                    <span className="text-[11px] text-muted-foreground font-mono">Center: {selectedCenter}</span>
                  </div>

                  {(() => {
                    const center = centersData.find((c) => c.name === selectedCenter) || centersData[0];
                    return (
                      <div className="space-y-4">
                        <div className="space-y-2 text-[12.5px]">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Work Center Name:</span>
                            <span className="font-semibold text-foreground">{center.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Equipment Sub-Type:</span>
                            <span className="font-semibold text-foreground">{center.type}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Projected Average Load:</span>
                            <span className="font-mono font-bold text-foreground">{center.avg}%</span>
                          </div>
                          {center.ordersAtRisk.length > 0 && (
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Orders At Risk:</span>
                              <span className="font-mono text-red-500 font-bold">{center.ordersAtRisk.join(", ")}</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Forward Load 2-Wk Forecast:</span>
                            <span className="font-semibold text-foreground">{center.forwardLoad}</span>
                          </div>
                        </div>

                        {center.name === "CNC Line 1" ? (
                          <div className="space-y-3 pt-3 border-t">
                            <div className="text-[12.5px] font-bold text-foreground flex items-center gap-1.5 text-amber-500">
                              <Sparkles className="h-4 w-4" /> AI Bottleneck Recommendations:
                            </div>

                            <div className="space-y-2">
                              {/* Rec 1 */}
                              <div className="p-3 rounded-lg border bg-accent/30 text-[11.5px] space-y-2">
                                <div><strong>Option 1: Overtime Thursday–Friday (+4 hrs)</strong></div>
                                <p className="text-muted-foreground leading-snug">Estimates overtime payout at ₹12,400. Increases week capacity by 20 hrs.</p>
                                <button
                                  disabled={overtimeApplied}
                                  onClick={applyOvertime}
                                  className="h-7 px-3 rounded bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 text-[11px]"
                                >
                                  {overtimeApplied ? "✓ Overtime Approved" : "Approve Overtime Payout"}
                                </button>
                              </div>

                              {/* Rec 2 */}
                              <div className="p-3 rounded-lg border bg-accent/30 text-[11.5px] space-y-2">
                                <div><strong>Option 2: Reschedule & Split Order</strong></div>
                                <p className="text-muted-foreground leading-snug">Split JC-4819 (Kapoor Industries) — move 400 volume units to backup Line 4.</p>
                                <button
                                  disabled={rescheduleApplied}
                                  onClick={applyReschedule}
                                  className="h-7 px-3 rounded border font-semibold hover:bg-muted disabled:opacity-50 text-[11px]"
                                >
                                  {rescheduleApplied ? "✓ Split Approved" : "Approve Order Split"}
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 rounded-xl border bg-emerald-500/5 border-emerald-500/20 text-emerald-600 text-[12.5px] font-medium flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" /> Work center load is within safe operating margins. No bottleneck alerts.
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Forward warn timeline */}
              <div className="rounded-2xl border bg-card text-foreground p-5 space-y-3 font-mono text-[12px] shadow-sm">
                <div className="text-primary font-bold uppercase tracking-wider">🗓 Forward capacity warning matrix</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 border-t pt-3 gap-4">
                  <div>
                    <span className="text-muted-foreground">Week 1 (22 Jan):</span>
                    <div className="font-bold text-emerald-500 mt-1">SAFE (81.4% Avg)</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Week 2 (29 Jan):</span>
                    <div className="font-bold text-emerald-500 mt-1">SAFE (83.2% Avg)</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Week 3 (05 Feb):</span>
                    <div className="font-bold text-red-500 mt-1">⚠️ OVERLOAD RISK (94.2% Load)</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Week 4 (12 Feb):</span>
                    <div className="font-bold text-emerald-500 mt-1">SAFE (80.1% Avg)</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 5 — Sub-Module 1.4: Shift Gap & Attendance Intelligence */}
          {/* ========================================================================= */}
          {s.id === "1-4" && (
            <div className="space-y-6">
              
              {/* Stats row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <KpiCard label="Morning Expected" value="320 Staff" delta="All lines" tone="info" sparkline={<SparkLine />} />
                <KpiCard label="Biometric Present" value={`${headcountPresent} Present`} delta=" eSSL active" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Shortfall Gap" value={`${headcountGap} Absent`} delta="3 Critical roles" tone={headcountGap > 11 ? "danger" : "warning"} sparkline={<SparkLine />} />
                <KpiCard label="Suggested Substitutes" value="6 Backfills Ready" delta="Rosters match" tone="success" sparkline={<SparkLine />} />
              </div>

              {/* Roster gaps & substitution */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Roster Coverage Table (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Shift Coverage Dashboard</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Expected vs actual present biometric logs (6:45 AM View)</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Production Line</th>
                          <th className="p-2.5 text-center">Required</th>
                          <th className="p-2.5 text-center">Present</th>
                          <th className="p-2.5 text-center">Gap</th>
                          <th className="p-2.5">Absent Roles</th>
                          <th className="p-2.5 text-right">Coverage Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rosterGaps.map((r, idx) => (
                          <tr key={idx} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                            <td className="p-2.5 font-bold text-foreground">{r.line}</td>
                            <td className="p-2.5 text-center font-mono">{r.req}</td>
                            <td className="p-2.5 text-center font-mono text-[#1D9E75]">{r.pres}</td>
                            <td className="p-2.5 text-center font-mono text-red-500 font-bold">{r.gap}</td>
                            <td className="p-2.5 text-muted-foreground text-[11.5px]">{r.absents}</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                                r.status === "Critical" || r.status === "Understaffed"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20"
                                  : r.status === "Minor Gap"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>
                                {r.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Panel: Reallocation Substitutes (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Biometric Gap Substitutions</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Cross-trained operators present this shift</p>
                  </div>

                  <div className="space-y-4 max-h-[360px] overflow-y-auto pr-1">
                    {replacementsLog.map((rep) => (
                      <div key={rep.id} className="p-4 rounded-xl border bg-muted/20 space-y-3 text-[12.5px]">
                        <div>
                          <div className="text-[11px] uppercase tracking-wider font-bold text-red-500 font-mono">Absent Critical Role</div>
                          <div className="font-bold text-foreground mt-0.5">{rep.absent} — {rep.role}</div>
                        </div>

                        {rep.status === "unresolved" ? (
                          <div className="space-y-2">
                            <div className="text-[11px] text-muted-foreground uppercase font-bold">Suggested Substitutes:</div>
                            {rep.options.map((opt, i) => (
                              <button
                                key={i}
                                onClick={() => confirmReallocation(rep.id, opt)}
                                className="w-full flex items-center justify-between h-9 px-3 rounded-lg border bg-background hover:bg-muted text-[11.5px] font-medium transition-colors text-left"
                              >
                                <span>{opt}</span>
                                <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                              </button>
                            ))}
                          </div>
                        ) : (
                          <div className="p-2 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[12px] font-bold flex items-center gap-1.5">
                            <Check className="h-4 w-4" /> {rep.status}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom WhatsApp Simulator */}
              <div className="rounded-2xl border bg-card p-5 max-w-2xl mx-auto space-y-3 shadow-md">
                <div className="flex items-center gap-2 border-b pb-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 text-white grid place-items-center"><MessageSquare className="h-4 w-4" /></div>
                  <div>
                    <div className="text-[13px] font-bold text-foreground">WhatsApp Business API Simulator</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Recipient: Mahesh Kapoor (Production Head)</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-[12.5px] space-y-2 max-w-[400px] leading-relaxed relative">
                  <div className="absolute right-2 top-2 text-[10px] text-slate-400 font-mono">05:47 AM</div>
                  <div className="font-bold text-[#1D9E75]">📍 CNC Line 1 — Morning Shift Alert</div>
                  <p>2 operators absent. Gap detected before shift start.</p>
                  <div className="bg-white/60 p-2.5 rounded-lg border border-slate-300/40 text-[12px]">
                    <strong>Suggested substitutes:</strong><br />
                    1. Ramesh Kumar → Dinesh Patel (Grade B, available)<br />
                    2. Vijay Sharma → Ajay Trivedi (available Line 2)
                  </div>
                  <p className="text-[11.5px] text-slate-500 italic">Reply YES to confirm swap or click button below.</p>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    onClick={() => {
                      confirmReallocation(1, "Dinesh Patel");
                      confirmReallocation(2, "Ajay Trivedi");
                    }}
                    className="h-9 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[12px] font-bold shadow-sm"
                  >
                    Approve Swap on WhatsApp
                  </button>
                  <button onClick={() => toast.info("WhatsApp call routed to supervisor...")} className="h-9 px-4 rounded-lg border text-[12px] font-medium hover:bg-muted">Call Supervisor</button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 6 — Sub-Module 1.5: Material Requirement Planning (MRP) Agent */}
          {/* ========================================================================= */}
          {s.id === "1-5" && (
            <div className="space-y-6">
              
              {/* Top stats */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Materials Tracked</div>
                  <div className="text-[20px] font-bold mt-1">15 SKUs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider">Normal Status</div>
                  <div className="text-[20px] font-bold text-[#1D9E75] mt-1">4 SKUs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-[#E8A838] uppercase tracking-wider">Reorder Due</div>
                  <div className="text-[20px] font-bold text-[#E8A838] mt-1">8 SKUs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-[#D85A30] uppercase tracking-wider">Critical</div>
                  <div className="text-[20px] font-bold text-[#D85A30] mt-1">2 SKUs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-red-500 uppercase tracking-wider">Stock Out</div>
                  <div className="text-[20px] font-bold text-red-500 mt-1">1 SKU</div>
                </div>
              </div>

              {/* MRP Grid Table */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Table (70%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[14.5px] font-bold tracking-tight">Weekly Material Requirement Planning Grid</h4>
                      <p className="text-[12px] text-muted-foreground mt-0.5">Click any row to review auto-generated Purchase Requisition</p>
                    </div>

                    <button
                      onClick={handleRaiseAllUrgent}
                      className="inline-flex items-center justify-center gap-1.5 h-8 px-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-[12px] font-bold shadow-sm"
                    >
                      <Zap className="h-3.5 w-3.5" /> Raise All Urgent POs
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Material SKU</th>
                          <th className="p-2.5">Description</th>
                          <th className="p-2.5 text-center">On-Hand</th>
                          <th className="p-2.5 text-center">Required</th>
                          <th className="p-2.5 text-center">Shortfall</th>
                          <th className="p-2.5">Vendor</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mrpData.map((m) => (
                          <tr
                            key={m.code}
                            onClick={() => setSelectedMaterialCode(m.code)}
                            className={`border-b last:border-0 hover:bg-accent/20 cursor-pointer transition-colors ${
                              selectedMaterialCode === m.code ? "bg-accent/40 font-semibold" : ""
                            }`}
                          >
                            <td className="p-2.5 font-mono text-[11.5px] text-[#2E86AB]">{m.code}</td>
                            <td className="p-2.5 font-medium">{m.desc}</td>
                            <td className="p-2.5 text-center font-mono">{m.stock.toLocaleString()} {m.unit}</td>
                            <td className="p-2.5 text-center font-mono">{m.required.toLocaleString()} {m.unit}</td>
                            <td className="p-2.5 text-center font-mono text-red-500 font-bold">
                              {m.shortfall > 0 ? `${m.shortfall.toLocaleString()} ${m.unit}` : "—"}
                            </td>
                            <td className="p-2.5 text-muted-foreground text-[12px]">{m.vendor}</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                                m.status === "Critical" || m.status === "Stock Out"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20"
                                  : m.status === "Reorder Due"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : m.status === "Surplus"
                                  ? "bg-slate-500/10 text-slate-500 border-slate-500/20"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>
                                {m.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Panel: Purchase Requisition Preview (30%) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="text-[14.5px] font-bold tracking-tight">Auto-Generated PR Preview</h4>
                    <span className="text-[11px] text-muted-foreground font-mono">SAP B1 Service layer</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SKU Code:</span>
                        <span className="font-mono font-bold text-[#2E86AB]">{selectedMaterial.code}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Material Name:</span>
                        <span className="font-semibold text-foreground">{selectedMaterial.desc}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Preferred Vendor:</span>
                        <span className="font-semibold text-foreground">{selectedMaterial.vendor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shortfall Quantity:</span>
                        <span className="font-mono font-bold text-red-500">
                          {selectedMaterial.shortfall > 0 ? `${selectedMaterial.shortfall.toLocaleString()} ${selectedMaterial.unit}` : "No Shortfall"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Purchase Rate (Standard):</span>
                        <span className="font-mono font-bold text-foreground">₹{selectedMaterial.rate}/{selectedMaterial.unit}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Estimated Order Value:</span>
                        <span className="font-mono font-bold text-primary">
                          ₹{(selectedMaterial.shortfall * selectedMaterial.rate).toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Lead Time (Vendor):</span>
                        <span className="font-semibold text-foreground">{selectedMaterial.leadTime} Days</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t">
                      <div className="p-3 rounded-lg border bg-muted/40 text-foreground font-mono text-[11.5px] leading-relaxed">
                        <span className="text-muted-foreground block font-bold">// SAP Service Layer Payload</span>
                        {"{"}
                        <br />
                        &nbsp;&nbsp;"Requisition": {"{"}
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;"ItemCode": <span className="text-primary">"{selectedMaterial.code}"</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;"Volume": <span className="text-blue-500">{selectedMaterial.shortfall || 1000}</span>,
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;"PreferredVendor": <span className="text-primary">"{selectedMaterial.vendor}"</span>
                        <br />
                        &nbsp;&nbsp;{"}"}
                        <br />
                        {"}"}
                      </div>
                    </div>

                    <button
                      onClick={() => handleRaisePO(selectedMaterial.code)}
                      className={`w-full flex items-center justify-center gap-2 h-10 rounded-xl font-semibold text-[13px] shadow-sm ${
                        selectedMaterial.status === "Critical" || selectedMaterial.status === "Stock Out"
                          ? "bg-red-600 hover:bg-red-700 text-white animate-pulse"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      <Send className="h-4 w-4" /> Raise Purchase Requisition
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 7 — Sub-Module 1.6: Production vs Target Tracker */}
          {/* ========================================================================= */}
          {s.id === "1-6" && (
            <div className="space-y-6">
              
              {/* Live Ticker Bar */}
              <div className="rounded-2xl border p-4 bg-muted/40 text-foreground flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[12.5px] shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                  <div><strong>Live Roster Tracking:</strong> Morning Shift • Hour 4 (9:00 AM – 10:00 AM)</div>
                </div>
                <div>
                  Today Total: <span className="text-primary font-bold">{totalProducedToday} units</span> • 
                  Variance: <span className={trackerVariance < 0 ? "text-red-500 font-bold" : "text-emerald-500 font-bold"}>
                    {trackerVariance}%
                  </span>
                </div>
              </div>

              {/* Scoreboard and gauges */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Scoreboard Table (70%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="text-[14.5px] font-bold tracking-tight">Shop Floor Scoreboard</h4>
                    <span className="text-[11px] text-muted-foreground">Refreshes automatically every 5s</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Line</th>
                          <th className="p-2.5 text-center">Status</th>
                          <th className="p-2.5 text-center">This Hour</th>
                          <th className="p-2.5 text-center">Hour Target</th>
                          <th className="p-2.5 text-center">Shift Total</th>
                          <th className="p-2.5 text-center">Shift Target</th>
                          <th className="p-2.5 text-right font-semibold">OEE %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scoreboardData.map((row) => (
                          <tr key={row.line} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                            <td className="p-2.5 font-bold text-foreground">{row.line}</td>
                            <td className="p-2.5 text-center">
                              <span className={`inline-flex items-center gap-1.5 text-[11px] font-semibold ${
                                row.status === "Running"
                                  ? "text-emerald-600"
                                  : row.status === "Changeover"
                                  ? "text-amber-500"
                                  : "text-slate-400"
                              }`}>
                                <span className={`h-1.5 w-1.5 rounded-full ${
                                  row.status === "Running"
                                    ? "bg-emerald-500 animate-pulse"
                                    : row.status === "Changeover"
                                    ? "bg-amber-500"
                                    : "bg-slate-400"
                                }`} />
                                {row.status}
                              </span>
                            </td>
                            <td className="p-2.5 text-center font-mono">{row.thisHr}</td>
                            <td className="p-2.5 text-center font-mono text-muted-foreground">{row.targetHr}</td>
                            <td className="p-2.5 text-center font-mono font-semibold">{row.totalShift.toLocaleString()}</td>
                            <td className="p-2.5 text-center font-mono text-muted-foreground">{row.totalTarget.toLocaleString()}</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[11.5px] font-mono font-bold border ${
                                row.oee >= 85
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : row.oee >= 70
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              }`}>
                                {row.oee}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Panel: Dial OEE Gauges (30%) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex items-center justify-between border-b pb-2">
                    <h4 className="text-[14.5px] font-bold tracking-tight">OEE Composite Gauges</h4>
                    <span className="text-[11.5px] text-[#1D9E75] font-bold">Plant OEE: 79%</span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Availability OEE (Uptime)", val: 87, color: "var(--primary)" },
                      { label: "Performance OEE (Speed)", val: 76, color: "var(--warning)" },
                      { label: "Quality OEE (Good Rate)", val: 97, color: "var(--emerald)" }
                    ].map((g, idx) => (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-[12px] font-medium">
                          <span>{g.label}</span>
                          <span className="font-mono font-bold">{g.val}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${g.val}%`,
                              backgroundColor: g.val >= 85 ? "#1D9E75" : g.val >= 70 ? "#2E86AB" : "#E8A838"
                            }}
                          />
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t text-[12px] space-y-2">
                      <div className="font-bold text-foreground">Line 3 Changeover Alert Log</div>
                      <div className="p-3 rounded-lg border bg-amber-500/5 border-amber-500/20 leading-relaxed text-muted-foreground text-[11.5px]">
                        <strong>Downtime Event INC-9941:</strong> Planned stamping changeover on Line 3 overran by 32m due to locking bolt re-torque issues. 
                        Supervisor marked root cause as: <span className="font-semibold text-foreground font-mono">Tooling Delay</span>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 8 — Sub-Module 1.7: Weekly Planning Report Automation */}
          {/* ========================================================================= */}
          {s.id === "1-7" && (
            <div className="space-y-6">
              
              {/* Top Banner */}
              <div className="rounded-2xl border p-4 bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <div className="text-[13px] font-bold">Report Schedule Status</div>
                  <div className="text-[12.5px] text-muted-foreground font-mono mt-0.5">
                    Next compile: Monday 27 Jan at 8:00 AM • Last sent: Monday 20 Jan
                  </div>
                </div>

                <div className="flex gap-2 shrink-0">
                  <button onClick={handleGenReport17} disabled={reportGenStatus === "generating"} className="inline-flex items-center justify-center gap-1.5 h-9 px-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 text-[12.5px] shadow-sm">
                    {reportGenStatus === "generating" ? "Compiling..." : "Generate Preview Now"}
                  </button>
                  <button onClick={() => toast.success("Test Weekly Report dispatched via WhatsApp/Email.")} className="h-9 px-4 rounded-lg border text-[12px] font-medium hover:bg-muted">Send Test</button>
                </div>
              </div>

              {/* Thumbnails grid & Recipient panel */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* PDF Thumbnails Grid (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Branded PDF Report Layout Preview</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Click any report page thumbnail to review document content parameters</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                      { page: 1, title: "Executive Briefing", content: "Overall plant performance metrics compilation, downtime totals, and composite OEE indexes summary." },
                      { page: 2, title: "OEE Scoreboard", content: "Line-by-line shift adherence percentages, quality audits, availability rates, and speed analysis tables." },
                      { page: 3, title: "Gantt Schedule", content: "Full week calendar layout of production slots, priority client account allocations, and idle buffers." },
                      { page: 4, title: "Material Shortfalls", content: "Raw material inventory checks, reorder quantities, PO dispatch lists, and critical stock warnings." }
                    ].map((p) => (
                      <div
                        key={p.page}
                        onClick={() => setExpandedReportPage(p.page)}
                        className="rounded-xl border p-4.5 bg-muted/20 hover:border-primary/40 cursor-pointer transition-all space-y-3 flex flex-col justify-between min-h-[160px]"
                      >
                        <div className="space-y-1">
                          <div className="text-[10px] font-mono text-primary font-bold">PAGE {p.page}</div>
                          <div className="font-bold text-[13px] text-foreground tracking-tight leading-snug">{p.title}</div>
                        </div>
                        <p className="text-[11.5px] text-muted-foreground leading-relaxed line-clamp-3">{p.content}</p>
                      </div>
                    ))}
                  </div>

                  {expandedReportPage !== null && (
                    <div className="p-4 rounded-xl border bg-accent/30 text-[12.5px] space-y-2 animate-fade-in">
                      <div className="flex items-center justify-between border-b pb-2">
                        <strong className="text-primary">Expanded Preview — Page {expandedReportPage}</strong>
                        <button onClick={() => setExpandedReportPage(null)} className="text-muted-foreground hover:text-foreground text-[11px] font-bold">Close Preview</button>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        This section represents a detailed audit matrix dynamically populated from the MES database. The compiled document complies with ISO 9001 reporting standards and is automatically formatted in Rupee currency (Lakhs/Crores) using unified DD/MM/YYYY dates.
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Panel: Recipient list (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Stakeholder Distribution List</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Toggle delivery channels for the Monday briefing</p>
                  </div>

                  <div className="space-y-3">
                    {reportRecipients.map((rec, i) => (
                      <div key={i} className="p-3 rounded-lg border bg-muted/20 flex items-center justify-between gap-3 text-[12.5px]">
                        <div>
                          <div className="font-bold text-foreground">{rec.name}</div>
                          <div className="text-[11px] text-muted-foreground mt-0.5">{rec.role}</div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[11px] text-muted-foreground font-mono">Channels: Email, WA</span>
                          <input
                            type="checkbox"
                            checked={rec.active}
                            onChange={() => handleToggleRecipient(i)}
                            className="h-4.5 w-4.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery History Archive */}
                  <div className="pt-4 border-t space-y-2.5 text-[12px]">
                    <div className="font-bold">Historical PDFs Vault</div>
                    <div className="space-y-1.5">
                      {[
                        { week: "W36 FY25", actual: "41,200u", variance: "-8.4%", date: "20/01/2025" },
                        { week: "W35 FY25", actual: "44,800u", variance: "+2.3%", date: "13/01/2025" }
                      ].map((h, i) => (
                        <div key={i} className="p-2.5 rounded border bg-accent/20 flex items-center justify-between text-[11.5px] font-mono">
                          <div>
                            <span className="font-bold text-foreground">{h.week} Planning Report</span>
                            <div className="text-muted-foreground text-[10.5px] mt-0.5">Variance: {h.variance} • Date: {h.date}</div>
                          </div>
                          <button onClick={() => toast.success("Downloading PDF...")} className="h-7 w-7 rounded bg-background border flex items-center justify-center hover:bg-muted shrink-0 text-muted-foreground hover:text-foreground">
                            <Download className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      ) : (isM2 || (isM9 && s.id === "9-1")) ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* PAGE 2 — Sub-Module 2.1: Automated Purchase Order Generator */}
          {/* ========================================================================= */}
          {s.id === "2-1" && (
            <div className="space-y-6">
              {/* Requisition Queue */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-[15px] font-bold tracking-tight">Active Requisition Queue</h4>
                    <p className="text-[12.5px] text-muted-foreground">Pending requisitions from ERP & AI MRP triggers</p>
                  </div>
                  <span className="text-[12px] font-semibold bg-primary/10 text-primary px-3 py-1 rounded-xl font-mono">
                    {pendingPRs21.length} PRs Pending
                  </span>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                  {pendingPRs21.map((pr) => (
                    <div
                      key={pr.id}
                      onClick={() => {
                        if (poGenStatus21 !== "generating") {
                          setSelectedPRId21(pr.id);
                        }
                      }}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between h-[130px] ${
                        selectedPRId21 === pr.id 
                          ? "border-primary bg-primary/5 shadow-sm font-semibold" 
                          : "bg-card hover:border-primary/20"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[11px] font-mono font-bold bg-muted px-2 py-0.5 rounded text-muted-foreground">{pr.id}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded font-mono ${
                          pr.priority === "URGENT" ? "bg-destructive/10 text-destructive border border-destructive/25" : "bg-muted text-muted-foreground"
                        }`}>{pr.priority}</span>
                      </div>
                      <div className="text-[13px] font-bold text-foreground line-clamp-1 mt-1">{pr.material}</div>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t text-[11px] text-muted-foreground font-mono">
                        <span>{pr.qty.toLocaleString()} {pr.unit}</span>
                        <span className="text-foreground">₹{pr.value.toLocaleString("en-IN")}</span>
                      </div>
                    </div>
                  ))}
                  {pendingPRs21.length === 0 && (
                    <div className="col-span-full py-6 text-center text-muted-foreground text-[13px] italic bg-muted/20 border rounded-2xl">
                      ✓ Requisition queue empty. All POs generated.
                    </div>
                  )}
                </div>
              </div>

              {/* Main generator panels */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Generation control panel */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">AI Purchase Order Generation Panel</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Automated vendor selection and pricing card lookup</p>
                  </div>

                  {pendingPRs21.length > 0 ? (
                    <div className="space-y-4 flex-1">
                      <div className="grid grid-cols-2 gap-4 text-[12.5px] bg-muted/20 p-4 rounded-xl border">
                        <div>
                          <span className="text-muted-foreground">Item Description:</span>
                          <div className="font-bold text-foreground mt-0.5">{activePR21.material}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Quantity & Unit:</span>
                          <div className="font-mono font-bold mt-0.5">{activePR21.qty.toLocaleString()} {activePR21.unit}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Trigger Source:</span>
                          <div className="font-semibold text-foreground mt-0.5">{activePR21.triggeredBy}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Est. Value (Exc. GST):</span>
                          <div className="font-mono font-bold text-primary mt-0.5">₹{activePR21.value.toLocaleString("en-IN")}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Vendor Selection Strategy</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {["Preferred Vendor", "Lowest Rate", "Fastest Lead Time", "Rotation Policy"].map((strat) => (
                            <div key={strat} className="p-2.5 rounded-lg border text-center text-[11.5px] font-semibold bg-muted/40 border-primary/20 text-primary">
                              {strat === "Preferred Vendor" ? "★ " : ""}{strat}
                            </div>
                          ))}
                        </div>
                        <p className="text-[11.5px] text-muted-foreground italic">
                          Selected Vendor: **Mehta Steel Works** ( Ahmedabad GIDC ) - Approved Rate: ₹68.00/kg - Lead Time: 5 days
                        </p>
                      </div>

                      {poGenStatus21 === "generating" && (
                        <div className="p-3.5 rounded-xl border bg-muted/50 font-mono text-[11px] space-y-1.5 max-h-[160px] overflow-y-auto">
                          {poSteps21.map((step, idx) => (
                            <div key={idx} className="text-foreground flex items-center gap-2">
                              <span className="text-primary">▶</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center py-10 text-muted-foreground text-[13px]">
                      <CheckCircle2 className="h-10 w-10 text-emerald-500 mb-2" />
                      <span>All pending purchase orders compiled and dispatched.</span>
                    </div>
                  )}

                  {pendingPRs21.length > 0 && (
                    <button
                      onClick={triggerPO21}
                      disabled={poGenStatus21 === "generating"}
                      className="w-full flex items-center justify-center gap-2 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px] shadow-sm mt-2"
                    >
                      {poGenStatus21 === "generating" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Compiling PR to PO (ERP Sync)...
                        </>
                      ) : (
                        <>
                          <Zap className="h-4 w-4" /> Generate and Dispatch PO
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* PO preview document */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="border-b pb-2 flex justify-between items-center">
                    <h4 className="text-[14.5px] font-bold tracking-tight">PO Live Document Preview</h4>
                    <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">PO-2024-1147</span>
                  </div>

                  <div className="border rounded-xl p-4 bg-muted/10 space-y-4 text-[12px] leading-normal font-sans">
                    <div className="flex justify-between border-b pb-2">
                      <div>
                        <div className="font-bold text-foreground">Fortiv ManufactureSmart Pvt. Ltd.</div>
                        <div className="text-muted-foreground text-[11px]">Vatva GIDC, Ahmedabad</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-primary uppercase text-[12px]">Purchase Order</div>
                        <div className="text-[10px] text-muted-foreground mt-0.5">Date: 22 Jan 2025</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-[11px] border-b pb-3">
                      <div>
                        <span className="text-muted-foreground font-semibold uppercase text-[10px]">Vendor:</span>
                        <div className="font-bold text-foreground">Mehta Steel Works</div>
                        <div className="text-muted-foreground"> Ahmedabad, Gujarat</div>
                        <div className="text-muted-foreground font-mono">GSTIN: 24AABCM1234A1Z5</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground font-semibold uppercase text-[10px]">Delivery to:</span>
                        <div className="font-bold text-foreground">Vatva Plant Hub</div>
                        <div className="text-muted-foreground">Ahmedabad - 382445</div>
                        <div className="text-muted-foreground font-mono font-semibold text-primary mt-1">Payment: Net 30 Days</div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="grid grid-cols-12 font-bold text-muted-foreground text-[10px] uppercase border-b pb-1.5">
                        <span className="col-span-6">Description</span>
                        <span className="col-span-2 text-center">Qty</span>
                        <span className="col-span-2 text-right">Rate</span>
                        <span className="col-span-2 text-right">Total</span>
                      </div>
                      <div className="grid grid-cols-12 py-1 items-center font-semibold text-foreground text-[11.5px]">
                        <span className="col-span-6">{activePR21?.material ?? "CRCA Sheet 1.2mm"}</span>
                        <span className="col-span-2 text-center font-mono">{activePR21?.qty?.toLocaleString() ?? "3,000"} kg</span>
                        <span className="col-span-2 text-right font-mono">₹68.00</span>
                        <span className="col-span-2 text-right font-mono">₹{(activePR21?.value ?? 204000).toLocaleString("en-IN")}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t text-right text-[11px] space-y-1 font-mono">
                      <div className="text-muted-foreground">Basic Amount: ₹{(activePR21?.value ?? 204000).toLocaleString("en-IN")}</div>
                      <div className="text-muted-foreground">GST (18%): ₹{Math.round((activePR21?.value ?? 204000) * 0.18).toLocaleString("en-IN")}</div>
                      <div className="font-bold text-[12.5px] text-foreground border-t pt-1 mt-1">
                        Total PO: ₹{Math.round((activePR21?.value ?? 204000) * 1.18).toLocaleString("en-IN")}
                      </div>
                    </div>
                  </div>

                  {poGenStatus21 === "complete" && (
                    <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 text-[12px] space-y-2 animate-fade-in">
                      <div className="font-bold flex items-center gap-1.5">
                        <Check className="h-4 w-4" /> PO Dispatched to Vendor (WhatsApp Business)
                      </div>
                      <div className="bg-background/80 p-2.5 rounded-lg border text-[11.5px] leading-relaxed italic text-foreground/80 font-mono">
                        📋 PO Number: PO-2024-1147. Suresh Mehta notified. Deliver by 25 Jan 2025. Net 30 days. ✓✓
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Approved PO register */}
              <div className="rounded-2xl bg-card border p-5">
                <h4 className="text-[14.5px] font-bold tracking-tight mb-3">Issued Purchase Orders Register</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-[12.5px]">
                    <thead>
                      <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                        <th className="p-2.5">PO Number</th>
                        <th className="p-2.5">Vendor Name</th>
                        <th className="p-2.5 text-right">PO Total Value</th>
                        <th className="p-2.5">Issued At</th>
                        <th className="p-2.5 text-right font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {approvedPOs21.map((p) => (
                        <tr key={p.poNumber} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                          <td className="p-2.5 font-mono font-bold text-primary">{p.poNumber}</td>
                          <td className="p-2.5 font-medium">{p.vendor}</td>
                          <td className="p-2.5 text-right font-mono font-semibold">₹{p.value.toLocaleString("en-IN")}</td>
                          <td className="p-2.5 text-muted-foreground font-mono text-[11.5px]">{p.date}</td>
                          <td className="p-2.5 text-right">
                            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold border bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                              {p.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 3 — Sub-Module 9.1: Vendor Follow-Up Automation */}
          {/* ========================================================================= */}
          {s.id === "9-1" && (
            <div className="space-y-6">
              {/* Stats Summary Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-sans">Pending POs</div>
                  <div className="text-[20px] font-bold mt-1 font-mono">47 POs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider font-sans">Auto-follow-ups</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-1 font-mono">312</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider font-sans">Response Rate</div>
                  <div className="text-[20px] font-bold text-amber-500 mt-1 font-mono">82%</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-destructive/20 animate-pulse">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider font-sans">Late Deliveries</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">4</div>
                </div>
              </div>

              {/* Main table & action panel */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* PO Follow-Up List (2/3 width) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Vendor Follow-Up Automation — Active Records</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Automated WhatsApp + email follow-ups for ETA, dispatch and docs</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5 font-sans">Vendor</th>
                          <th className="p-2.5 font-sans">PO #</th>
                          <th className="p-2.5 font-sans text-center">Promised</th>
                          <th className="p-2.5 font-sans text-center">Status</th>
                          <th className="p-2.5 text-right font-sans">Last contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        {openPOs22.map((p) => (
                          <tr
                            key={p.id}
                            onClick={() => setSelectedPOId22(p.id)}
                            className={`border-b last:border-0 hover:bg-accent/20 cursor-pointer transition-colors ${
                              selectedPOId22 === p.id ? "bg-accent/40 font-semibold" : ""
                            }`}
                          >
                            <td className="p-2.5 font-medium">{p.vendor}</td>
                            <td className="p-2.5 font-mono font-bold text-primary">{p.id}</td>
                            <td className="p-2.5 text-center font-mono text-[11.5px]">{p.date}</td>
                            <td className="p-2.5 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                p.status.includes("Delayed")
                                  ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                                  : p.status === "Acknowledged"
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                  : p.status === "Dispatched"
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>
                                {p.status}
                              </span>
                            </td>
                            <td className="p-2.5 text-right font-medium text-muted-foreground">{p.lastContact}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Follow-up detailing (1/3 width) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="border-b pb-2 flex justify-between items-center">
                    <h4 className="text-[14.5px] font-bold tracking-tight">Follow-Up Action Panel</h4>
                    <span className="text-[11.5px] font-mono text-primary font-bold">{activePO22.id}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2 text-[12.5px]">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vendor Name:</span>
                        <span className="font-semibold text-foreground">{activePO22.vendor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">OTD Track Record:</span>
                        <span className="font-mono font-bold text-foreground">{activePO22.otd}% (12 Months)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Historical Dispatch Variance:</span>
                        <span className="font-mono font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 text-[11px]">
                          avg. {activePO22.avgDelay} days delay
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transit Status:</span>
                        <span className="font-semibold text-foreground">{activePO22.transitStatus}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Transporter Link:</span>
                        <span className="font-semibold text-foreground">{activePO22.transporter || "Not Dispatched"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Risk Level:</span>
                        <span className={`font-bold ${activePO22.risk === "High" ? "text-destructive" : activePO22.risk === "Medium" ? "text-amber-500" : "text-emerald-500"}`}>{activePO22.risk}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Response:</span>
                        <span className="italic text-foreground">"{activePO22.lastMsg}"</span>
                      </div>
                    </div>

                    {/* Actionable Channels Toggle */}
                    <div className="pt-3 border-t space-y-2">
                      <div className="text-[11px] font-bold uppercase text-muted-foreground flex justify-between items-center">
                        <span>Reminders Channels</span>
                        <span className="text-[9px] text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.25 rounded border border-emerald-500/20">Active</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            const updated = activePO22.channels.includes("whatsapp")
                              ? activePO22.channels.filter(c => c !== "whatsapp")
                              : [...activePO22.channels, "whatsapp"];
                            setOpenPOs22(prev => prev.map(p => p.id === activePO22.id ? { ...p, channels: updated } : p));
                            toast.success(`WhatsApp reminder channel ${updated.includes("whatsapp") ? "ENABLED" : "DISABLED"} for ${activePO22.vendor}.`);
                          }}
                          className={`flex-1 h-8 rounded-lg border font-semibold text-[11px] transition-all flex items-center justify-center gap-1 ${
                            activePO22.channels.includes("whatsapp")
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/30"
                              : "bg-muted text-muted-foreground border-transparent"
                          }`}
                        >
                          <MessageSquare className="h-3.5 w-3.5" /> WhatsApp
                        </button>
                        <button
                          onClick={() => {
                            const updated = activePO22.channels.includes("email")
                              ? activePO22.channels.filter(c => c !== "email")
                              : [...activePO22.channels, "email"];
                            setOpenPOs22(prev => prev.map(p => p.id === activePO22.id ? { ...p, channels: updated } : p));
                            toast.success(`Email reminder channel ${updated.includes("email") ? "ENABLED" : "DISABLED"} for ${activePO22.vendor}.`);
                          }}
                          className={`flex-1 h-8 rounded-lg border font-semibold text-[11px] transition-all flex items-center justify-center gap-1 ${
                            activePO22.channels.includes("email")
                              ? "bg-blue-500/10 text-blue-600 border-blue-500/30"
                              : "bg-muted text-muted-foreground border-transparent"
                          }`}
                        >
                          <Mail className="h-3.5 w-3.5" /> Email
                        </button>
                      </div>
                    </div>

                    {/* Tracked Documents Checklist */}
                    <div className="pt-3 border-t space-y-2">
                      <div className="text-[11px] font-bold uppercase text-muted-foreground">Tracked Documents Checklist</div>
                      <div className="space-y-1.5 text-[12px]">
                        {[
                          { key: "Material Test Certificate", label: "Material Test Certificate" },
                          { key: "e-Way Bill", label: "e-Way Bill" },
                          { key: "Tax Invoice", label: "Tax Invoice" }
                        ].map(doc => {
                          const isMissing = activePO22.missingDocs.includes(doc.key);
                          return (
                            <div key={doc.key} className="flex items-center justify-between p-2 rounded-lg bg-muted/20 border">
                              <span className="flex items-center gap-2">
                                <span className={`h-2 w-2 rounded-full ${isMissing ? "bg-red-500 animate-pulse" : "bg-emerald-500"}`} />
                                <span className={isMissing ? "text-muted-foreground line-through" : "text-foreground font-medium"}>{doc.label}</span>
                              </span>
                              <button
                                onClick={() => {
                                  const updatedDocs = isMissing
                                    ? activePO22.missingDocs.filter(d => d !== doc.key)
                                    : [...activePO22.missingDocs, doc.key];
                                  setOpenPOs22(prev => prev.map(p => p.id === activePO22.id ? { ...p, missingDocs: updatedDocs } : p));
                                  toast.success(`${doc.label} marked as ${isMissing ? "Collected" : "Missing"} for ${activePO22.vendor}.`);
                                }}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold border transition-all ${
                                  isMissing
                                    ? "bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20"
                                    : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 hover:bg-emerald-500/20"
                                }`}
                              >
                                {isMissing ? "Pending Collection" : "Collected ✓"}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-3 border-t space-y-2">
                      <div className="text-[11px] font-bold uppercase text-muted-foreground">Escalation Rules & Actions</div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            toast.success(`Consolidated WhatsApp nudge dispatched to ${activePO22.vendor}.`);
                          }}
                          className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 text-[12px]"
                        >
                          Send WhatsApp Nudge
                        </button>
                        <button
                          onClick={() => handleEscalate22(activePO22.id)}
                          disabled={activePO22.escalated}
                          className="h-9 px-3 rounded-lg border font-semibold hover:bg-muted disabled:opacity-50 text-[12px] text-destructive border-destructive/20"
                        >
                          Escalate
                        </button>
                      </div>
                    </div>

                    <div className="pt-3 border-t space-y-2">
                      <div className="text-[11px] font-bold uppercase text-muted-foreground">Manual Response Logging</div>
                      <textarea
                        placeholder="Log verbal delivery commitment... (e.g. Will dispatch on 24th)"
                        className="w-full min-h-[60px] p-2.5 rounded-lg border bg-background text-[12px] focus:outline-none focus:border-primary"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.currentTarget.value) {
                            handleLogResponse22(activePO22.id, e.currentTarget.value);
                            e.currentTarget.value = "";
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section: Timeline & WhatsApp Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
                
                {/* AI Reminders Sequence Timeline */}
                <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">AI Reminders Sequence Timeline</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Execution track for {activePO22.vendor} ({activePO22.id})</p>
                  </div>

                  <div className="relative flex justify-between items-start mt-6 font-sans">
                    {/* Connecting Bar */}
                    <div className="absolute top-[18px] left-[5%] right-[5%] h-1 bg-muted rounded">
                      <div 
                        className="h-full bg-primary transition-all duration-500 rounded"
                        style={{ width: `${((((activePO22.status === "Overdue" || activePO22.status === "Escalated") ? 4 : activePO22.status === "Due Soon" ? 3 : 1) - 1) / 3) * 100}%` }}
                      />
                    </div>

                    {[
                      { label: "T-5 Days", title: "WhatsApp Nudge", desc: "Initial ETA request", stage: 1 },
                      { label: "T-2 Days", title: "Automated Email", desc: "Formal reminders", stage: 2 },
                      { label: "T-Day", title: "Portal Alert", desc: "Supplier alert", stage: 3 },
                      { label: "T+2 Days", title: "Buyer Escalation", desc: "Procurement alarm", stage: 4 }
                    ].map((step) => {
                      const activeStage = (activePO22.status === "Overdue" || activePO22.status === "Escalated") ? 4 : activePO22.status === "Due Soon" ? 3 : 1;
                      const isCompleted = activeStage >= step.stage;
                      return (
                        <div key={step.stage} className="relative z-10 flex flex-col items-center text-center w-[22%] space-y-2">
                          <div className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-[12px] border-2 transition-all duration-300 ${
                            isCompleted 
                              ? "bg-primary text-primary-foreground border-primary" 
                              : "bg-card text-muted-foreground border-muted"
                          }`}>
                            {isCompleted ? "✓" : step.stage}
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-foreground leading-snug">{step.title}</div>
                            <div className="text-[10px] font-bold text-primary font-mono mt-0.5">{step.label}</div>
                            <div className="text-[9.5px] text-muted-foreground hidden sm:block leading-tight mt-1">{step.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 bg-muted/30 border rounded-xl text-[11px] text-muted-foreground leading-normal mt-4 font-mono">
                    <span className="font-bold text-foreground">💡 Current Execution Status:</span>{" "}
                    {((activePO22.status === "Overdue" || activePO22.status === "Escalated") ? 4 : activePO22.status === "Due Soon" ? 3 : 1) === 4 ? "Escalation protocol triggered. Regional buyer has been alerted to expedite procurement." :
                     ((activePO22.status === "Overdue" || activePO22.status === "Escalated") ? 4 : activePO22.status === "Due Soon" ? 3 : 1) === 3 ? "T-Day reached. Critical alert posted to supplier dashboard; awaiting Challan upload." :
                     "Pre-delivery automated cycle. WhatsApp Business API reminding vendor daily."}
                  </div>
                </div>

                {/* Bottom WhatsApp Simulator */}
                <div className="rounded-2xl border bg-card p-5 space-y-3 shadow-sm">
                  <div className="flex items-center gap-2 border-b pb-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-500 text-white grid place-items-center"><MessageSquare className="h-4 w-4" /></div>
                    <div>
                      <div className="text-[13px] font-bold text-foreground">Follow-up Message Template Preview</div>
                      <div className="text-[10px] text-muted-foreground font-mono">Channel: WhatsApp Business API</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border text-slate-800 dark:text-slate-200 text-[12.5px] space-y-2 max-w-[400px] leading-relaxed relative font-sans">
                    <div className="font-bold text-[#1D9E75]">📦 Delivery Reminder | Fortiv ManufactureSmart</div>
                    <p>Dear **{activePO22.vendor}**,</p>
                    <p>Our PO **{activePO22.id}** for **{activePO22.material}** is expected by **{activePO22.date}**.</p>
                    <p className="text-[11.5px] text-muted-foreground italic border-t pt-1.5 mt-2">
                      Please reply with confirmation and LR dispatch details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 4 — Sub-Module 2.3: GRN Matching Agent */}
          {/* ========================================================================= */}
          {s.id === "2-3" && (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">GRNs Received Today</div>
                  <div className="text-[20px] font-bold mt-1">4 Receipts</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Auto-Approved</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-1">{grnMatchesApproved23 ? "3" : "2"} Receipts</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Discrepancy Flagged</div>
                  <div className="text-[20px] font-bold text-[#D85A30] mt-1">{grnHeldLine23 ? "0" : "1"} Issues</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Pending Inspection</div>
                  <div className="text-[20px] font-bold text-slate-500 mt-1">1 Lot</div>
                </div>
              </div>

              {/* Main areas */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Challan upload OCR Panel (40%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Delivery Challan Scanner</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Scan paper challan to extract metadata</p>
                  </div>

                  <div className="border border-dashed rounded-xl p-6 flex flex-col items-center justify-center space-y-3 bg-muted/10">
                    <FileCode className="h-10 w-10 text-primary animate-pulse" />
                    <div className="text-[12px] text-center text-muted-foreground leading-relaxed">
                      Drag & Drop Challan PDF / scanned image or click to simulate upload
                    </div>
                    
                    <button
                      onClick={runChallanScan23}
                      disabled={scanStatus23 !== "idle"}
                      className="h-8 px-4 rounded bg-primary text-primary-foreground text-[12px] font-semibold hover:opacity-90"
                    >
                      {scanStatus23 === "idle" && "Simulate Scanned Challan"}
                      {scanStatus23 === "uploading" && "Uploading Challan..."}
                      {scanStatus23 === "extracting" && "Running AI OCR extraction..."}
                      {scanStatus23 === "complete" && "Scan Completed (94% Conf.)"}
                    </button>
                  </div>

                  {scanStatus23 === "complete" && (
                    <div className="p-3.5 rounded-xl border bg-muted/40 font-mono text-[11px] leading-relaxed text-muted-foreground space-y-1 animate-fade-in">
                      <div>📄 Document: DC-MS-2024-887</div>
                      <div>🏢 Vendor: Mehta Steel Works</div>
                      <div>🗓 Extracted Date: 24 Jan 2025</div>
                      <div className="text-primary font-bold">✓ Linked to PO-2024-1147</div>
                    </div>
                  )}
                </div>

                {/* 3-way matches (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">AI 3-Way Match Verification</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Real-time discrepancy check against PO lines</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Item Description</th>
                          <th className="p-2.5 text-center">PO Qty</th>
                          <th className="p-2.5 text-center">Received Qty</th>
                          <th className="p-2.5 text-center">Code Match</th>
                          <th className="p-2.5 text-center">Rate Match</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grnItems23.map((item) => (
                          <tr key={item.id} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                            <td className="p-2.5 font-semibold text-foreground">{item.desc}</td>
                            <td className="p-2.5 text-center font-mono">{item.poQty.toLocaleString()}</td>
                            <td className="p-2.5 text-center font-mono">{item.received.toLocaleString()}</td>
                            <td className="p-2.5 text-center">{item.codeMatch ? "✅" : "❌"}</td>
                            <td className="p-2.5 text-center">{item.rateMatch ? "✅" : "❌"}</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                item.status.includes("Full Match")
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : item.status.includes("Short")
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                              }`}>
                                {item.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {scanStatus23 === "complete" && !grnMatchesApproved23 && (
                    <div className="p-4 rounded-xl border border-destructive/20 bg-destructive/5 text-foreground text-[12.5px] space-y-3 animate-fade-in">
                      <div className="font-bold text-destructive flex items-center gap-1">
                        <ShieldAlert className="h-4 w-4" /> Discrepancies Found
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-muted-foreground text-[11.5px]">
                        <li>⚠️ **CRCA Sheet 1.2mm** - 2,840 kg received vs 3,000 kg ordered (160 kg short)</li>
                        <li>🔴 **CRCA Sheet 1.0mm** - Code Mismatch (Challan: RM-CRCA-1.00-HR vs PO: RM-CRCA-1.0)</li>
                      </ul>
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={() => {
                            setGrnMatchesApproved23(true);
                            toast.success("Partial GRN accepted. Balance 160 kg left open on PO.");
                          }}
                          className="h-8 px-3 rounded bg-primary text-primary-foreground text-[12px] font-semibold hover:opacity-90"
                        >
                          Accept Partial GRN
                        </button>
                        <button
                          onClick={() => {
                            setGrnHeldLine23(true);
                            setGrnItems23(prev => prev.map(item => item.id === 7 ? { ...item, status: "✅ Mapped & Resolved" } : item));
                            toast.success("Resolved code mismatch. Material accepted.");
                          }}
                          className="h-8 px-3 rounded border text-[12px] font-semibold hover:bg-muted"
                        >
                          Resolve Code Mismatch
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 5 — Sub-Module 2.4: Invoice Reconciliation & Approval Workflow */}
          {/* ========================================================================= */}
          {s.id === "2-4" && (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Invoices MTD</div>
                  <div className="text-[20px] font-bold mt-1">18 Invoices</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Auto-Approved</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-1">11 Invoices</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Pending Review</div>
                  <div className="text-[20px] font-bold text-amber-500 mt-1">5 Invoices</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-destructive/20 animate-pulse">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Disputed Holding</div>
                  <div className="text-[20px] font-bold text-destructive mt-1">2 Invoices</div>
                </div>
              </div>

              {/* Main panels */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Inbox table (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Invoice Processing Inbox</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Scanned bills waiting for 3-way match</p>
                  </div>

                  <div className="space-y-3">
                    {invoices24.map((inv) => (
                      <div
                        key={inv.id}
                        onClick={() => setSelectedInvoiceId24(inv.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          selectedInvoiceId24 === inv.id
                            ? "border-primary bg-primary/5 font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span className="font-mono font-bold text-foreground">{inv.id}</span>
                          <span>Due: {inv.due}</span>
                        </div>
                        <div className="text-[13px] font-bold mt-1 text-foreground">{inv.vendor}</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t text-[11.5px] font-mono text-muted-foreground">
                          <span>₹{inv.value.toLocaleString("en-IN")}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            inv.status === "Approved"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : inv.status === "Disputed"
                              ? "bg-red-500/10 text-red-600 border-red-500/20"
                              : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}>{inv.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3-way match preview panel (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Three-Way Match Verification details</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">PO vs GRN vs Vendor Invoice values</p>
                  </div>

                  <div className="border rounded-xl p-4 bg-muted/15 space-y-4 text-[12px]">
                    <div className="grid grid-cols-4 border-b pb-2 font-bold text-muted-foreground uppercase tracking-wider text-[11px]">
                      <span>Parameter</span>
                      <span className="text-center font-mono">PO Ref ({activeInvoice24.po})</span>
                      <span className="text-center font-mono">GRN Ref ({activeInvoice24.grn})</span>
                      <span className="text-right">Invoice</span>
                    </div>

                    <div className="grid grid-cols-4 py-1">
                      <span className="text-muted-foreground">Item Description</span>
                      <span className="text-center font-medium">{activeInvoice24.item}</span>
                      <span className="text-center font-medium">{activeInvoice24.item}</span>
                      <span className="text-right font-medium">{activeInvoice24.item}</span>
                    </div>

                    <div className="grid grid-cols-4 py-1 border-t">
                      <span className="text-muted-foreground">Quantity</span>
                      <span className="text-center font-mono">{activeInvoice24.qty} units</span>
                      <span className="text-center font-mono">{activeInvoice24.qty} units ✓</span>
                      <span className="text-right font-mono">{activeInvoice24.qty} units</span>
                    </div>

                    <div className="grid grid-cols-4 py-1 border-t">
                      <span className="text-muted-foreground">Unit Rate</span>
                      <span className="text-center font-mono">₹{activeInvoice24.poRate}</span>
                      <span className="text-center font-mono">—</span>
                      <span className={`text-right font-mono font-bold ${activeInvoice24.rate > activeInvoice24.poRate ? "text-destructive" : "text-foreground"}`}>
                        ₹{activeInvoice24.rate}
                      </span>
                    </div>

                    <div className="grid grid-cols-4 py-1.5 border-t font-bold text-[12.5px]">
                      <span className="text-foreground">Total (inc. GST)</span>
                      <span className="text-center font-mono text-muted-foreground">₹{activeInvoice24.value.toLocaleString("en-IN")}</span>
                      <span className="text-center font-mono text-muted-foreground">—</span>
                      <span className="text-right font-mono text-primary">₹{activeInvoice24.value.toLocaleString("en-IN")}</span>
                    </div>
                  </div>

                  {activeInvoice24.status === "Disputed" && (
                    <div className="p-3.5 rounded-xl border border-red-500/25 bg-red-500/5 text-destructive text-[12px] space-y-1 animate-fade-in leading-relaxed">
                      <div className="font-bold flex items-center gap-1.5">
                        <ShieldAlert className="h-4 w-4" /> Price Deviation Exception Flagged
                      </div>
                      <p className="text-muted-foreground mt-1">
                        Invoice rate **₹{activeInvoice24.rate}** exceeds standard PO rate **₹{activeInvoice24.poRate}** by **+10.0%**. Overcharge: **₹2,700**.
                      </p>
                    </div>
                  )}

                  <div className="flex gap-2.5 pt-3 border-t">
                    <button
                      onClick={() => handleApproveInvoice24(activeInvoice24.id)}
                      disabled={activeInvoice24.status === "Approved"}
                      className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px]"
                    >
                      Approve Invoice
                    </button>
                    {activeInvoice24.status === "Disputed" && (
                      <button
                        onClick={() => handleApproveInvoice24(activeInvoice24.id, true)}
                        className="flex-1 h-10 rounded-xl border font-bold hover:bg-muted text-[13px] text-emerald-600 border-emerald-500/20 bg-emerald-500/5"
                      >
                        Approve at PO Rate (₹31,860)
                      </button>
                    )}
                    <button
                      onClick={() => handleDisputeInvoice24(activeInvoice24.id)}
                      disabled={activeInvoice24.status === "Disputed"}
                      className="h-10 px-4 rounded-xl border font-bold hover:bg-muted disabled:opacity-50 text-[13px]"
                    >
                      Raise Dispute
                    </button>
                  </div>
                </div>
              </div>

              {/* AP Ageing Buckets */}
              <div className="space-y-3">
                <h4 className="text-[14px] font-bold">AP Ageing Compliance Monitor</h4>
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                  {[
                    { label: "Current (0–7 days)", val: "₹8.4L", ok: true },
                    { label: "Due Soon (8–15 days)", val: "₹14.2L", ok: true },
                    { label: "Near Due (16–30 days)", val: "₹6.8L", ok: true },
                    { label: "Overdue (31–45 days)", val: "₹2.1L", warning: true },
                    { label: "Critically Overdue (>45 days)", val: "₹0.6L", critical: true }
                  ].map((buck, idx) => (
                    <div key={idx} className="p-4 rounded-xl border bg-card flex items-start justify-between gap-3 shadow-sm">
                      <div className="space-y-1">
                        <div className="font-bold text-[12.5px] text-foreground leading-tight">{buck.label}</div>
                        <div className="text-[18px] font-mono font-bold mt-2 text-foreground">{buck.val}</div>
                      </div>
                      <span className={`h-2.5 w-2.5 rounded-full shrink-0 mt-0.5 ${
                        buck.critical ? "bg-red-500 animate-ping" : buck.warning ? "bg-amber-500" : "bg-emerald-500"
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 6 — Sub-Module 2.5: Vendor Performance Scorecard */}
          {/* ========================================================================= */}
          {s.id === "2-5" && (
            <div className="space-y-6">
              {/* Leaderboard and breakdowns */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Leaderboard ranked list */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Vendor Performance Leaderboard</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Coordinated score card aggregates delivery and quality metrics</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Rank</th>
                          <th className="p-2.5">Vendor Name</th>
                          <th className="p-2.5 text-center">Score</th>
                          <th className="p-2.5 text-center">Tier</th>
                          <th className="p-2.5 text-right">Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vendors25.map((v, idx) => (
                          <tr
                            key={v.id}
                            onClick={() => setSelectedVendorId25(v.id)}
                            className={`border-b last:border-0 hover:bg-accent/20 cursor-pointer transition-colors ${
                              selectedVendorId25 === v.id ? "bg-accent/40 font-semibold" : ""
                            }`}
                          >
                            <td className="p-2.5 font-mono text-[12px] text-muted-foreground">#0{idx + 1}</td>
                            <td className="p-2.5 font-medium">{v.name}</td>
                            <td className="p-2.5 text-center font-mono font-bold text-foreground">{v.score}</td>
                            <td className="p-2.5 text-center">
                              <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold border ${
                                v.tier === "Star"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : v.tier === "Preferred"
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                  : v.tier === "Acceptable"
                                  ? "bg-yellow-500/10 text-yellow-600 border-yellow-500/20"
                                  : "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                              }`}>
                                {v.tier}
                              </span>
                            </td>
                            <td className="p-2.5 text-right font-mono font-semibold text-foreground">{v.trend}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Score drill-downs */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="border-b pb-2 flex justify-between items-center">
                    <h4 className="text-[14.5px] font-bold tracking-tight">Scorecard Details: {activeVendor25.name}</h4>
                    <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{activeVendor25.id}</span>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-[12.5px] bg-muted/20 p-4 rounded-xl border">
                      <div>
                        <span className="text-muted-foreground">Material Category:</span>
                        <div className="font-bold text-foreground mt-0.5">{activeVendor25.category}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Monthly PO Value:</span>
                        <div className="font-mono font-bold text-foreground mt-0.5">₹{activeVendor25.spend}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">GRN Rejection Rate:</span>
                        <div className="font-mono font-bold text-foreground mt-0.5">{activeVendor25.rejected}</div>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Avg. Delivery Delay:</span>
                        <div className="font-mono font-bold text-foreground mt-0.5">{activeVendor25.delay}</div>
                      </div>
                    </div>

                    <div className="space-y-3.5">
                      {[
                        { label: "Delivery (OTD)", val: parseInt(activeVendor25.otd) },
                        { label: "Quality Score", val: activeVendor25.score + 3 },
                        { label: "Pricing Compliance", val: activeVendor25.score - 5 },
                        { label: "Responsiveness", val: activeVendor25.score }
                      ].map((g, idx) => (
                        <div key={idx} className="space-y-1.5">
                          <div className="flex justify-between text-[12px] font-semibold text-foreground">
                            <span>{g.label}</span>
                            <span className="font-mono font-bold">{g.val}/100</span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${g.val}%`,
                                backgroundColor: g.val >= 85 ? "#1D9E75" : g.val >= 70 ? "#2E86AB" : "#D85A30"
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {activeVendor25.score < 60 && (
                      <div className="p-3.5 rounded-xl border border-red-500/25 bg-red-500/5 text-destructive text-[12px] space-y-2 animate-fade-in">
                        <div className="font-bold flex items-center gap-1.5">
                          <ShieldAlert className="h-4 w-4 animate-bounce" /> Performance Intervention Alert
                        </div>
                        <p className="text-muted-foreground leading-normal text-[11.5px]">
                          This vendor is graded **AT RISK** due to chronic delivery delays and quality rejections. Action is recommended to secure component pipelines.
                        </p>
                        <div className="flex gap-2 pt-1.5">
                          <button
                            onClick={() => handleVendorAction25(activeVendor25.id, "notice_sent")}
                            disabled={vendorActions25[activeVendor25.id] === "notice_sent"}
                            className="h-7 px-3 rounded bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 text-[11px]"
                          >
                            Issue Improvement Notice
                          </button>
                          <button
                            onClick={() => handleVendorAction25(activeVendor25.id, "volume_reduced")}
                            disabled={vendorActions25[activeVendor25.id] === "volume_reduced"}
                            className="h-7 px-3 rounded border font-semibold hover:bg-muted disabled:opacity-50 text-[11px]"
                          >
                            Reallocate 40% Volume
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 7 — Sub-Module 2.6: Purchase Budget & Spend Analytics */}
          {/* ========================================================================= */}
          {s.id === "2-6" && (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">MTD Total Spend</div>
                  <div className="text-[20px] font-bold mt-1">₹56.1L</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Budget Utilisation</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-1">94.6%</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Over-Budget Categories</div>
                  <div className="text-[20px] font-bold text-amber-500 mt-1 font-mono">2 Categories</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-destructive/20">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Price Variance</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">+₹1.8L</div>
                </div>
              </div>

              {/* Main grids */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Spend vs budget table */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight font-serif">Spend vs Budget Ledger</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Month-to-date category budgets tracking</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Category</th>
                          <th className="p-2.5 text-right">Monthly Budget</th>
                          <th className="p-2.5 text-right">MTD Spend</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {spendData26.map((row) => (
                          <tr key={row.cat} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                            <td className="p-2.5 font-semibold text-foreground">{row.cat}</td>
                            <td className="p-2.5 text-right font-mono">₹{row.budget.toFixed(1)}L</td>
                            <td className="p-2.5 text-right font-mono font-bold text-foreground">₹{row.spent.toFixed(1)}L</td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                                row.status === "Over Budget"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>
                                {row.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Price variance heatmap table */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Price Variance Heatmap</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Actual purchase rates vs standard budget costs</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Material</th>
                          <th className="p-2.5 text-center">Std Cost</th>
                          <th className="p-2.5 text-center">Avg Price</th>
                          <th className="p-2.5 text-center">Variance</th>
                          <th className="p-2.5 text-right font-semibold">Trend</th>
                        </tr>
                      </thead>
                      <tbody>
                        {materials26.map((m) => (
                          <tr key={m.name} className="border-b last:border-0 hover:bg-accent/20 transition-colors">
                            <td className="p-2.5 font-bold text-foreground">{m.name}</td>
                            <td className="p-2.5 text-center font-mono">₹{m.std}</td>
                            <td className="p-2.5 text-center font-mono">₹{m.actual}</td>
                            <td className={`p-2.5 text-center font-mono font-bold ${
                              m.variance.includes("+") ? "text-destructive" : "text-emerald-500"
                            }`}>{m.variance}</td>
                            <td className="p-2.5 text-right text-muted-foreground text-[11.5px] font-mono">{m.trend}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Bottom MIS summary and trigger */}
              <div className="rounded-2xl border bg-card p-5 max-w-2xl mx-auto space-y-4 shadow-sm">
                <div className="flex justify-between items-center border-b pb-2">
                  <h4 className="text-[14px] font-bold">CFO Monthly MIS Report Auto-Compiler</h4>
                  <button
                    onClick={handleCFOReport26}
                    disabled={cfoReportStatus26 === "generating"}
                    className="h-8 px-4 rounded bg-primary text-primary-foreground text-[12.5px] font-semibold hover:opacity-90 disabled:opacity-50"
                  >
                    {cfoReportStatus26 === "generating" ? "Compiling PDF..." : "Generate CFO Report"}
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-muted/30 font-mono text-[11.5px] leading-relaxed text-foreground space-y-2 border">
                  <div>📊 **PURCHASE MIS REPORT | January 2025**</div>
                  <div>• Total spend: ₹56.1L vs Budget ₹59.3L (94.6% utilisation)</div>
                  <div>• Over-budget: RM Steel (+₹2.4L), Spares (+₹0.6L)</div>
                  <div>• MSME Payments: 8 of 8 payments made within 45 days compliance checks ✓</div>
                </div>
              </div>
            </div>
          )}

        </div>
      ) : isM3 ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* PAGE 2 — Sub-Module 3.1: Inspection Data Capture & Digitisation */}
          {/* ========================================================================= */}
          {s.id === "3-1" && (
            <div className="space-y-6">
              
              {/* Inspection submission form & metrics */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Mobile Checks Form (40%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-primary">Mobile Shop Floor Form</span>
                    <h4 className="text-[14.5px] font-bold tracking-tight mt-0.5">Simulate Digital QC Check</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Scan QR on job card or enter readings manually</p>
                  </div>

                  <div className="space-y-3.5 bg-muted/20 p-4 rounded-xl border text-[12.5px]">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase">Batch Code</label>
                        <input 
                          type="text" 
                          value={newInsBatch31} 
                          onChange={(e) => setNewInsBatch31(e.target.value)}
                          className="w-full h-8 px-2 border rounded bg-background text-[12px] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase">Product SKU</label>
                        <input 
                          type="text" 
                          value={newInsProduct31} 
                          onChange={(e) => setNewInsProduct31(e.target.value)}
                          className="w-full h-8 px-2 border rounded bg-background text-[12px] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase block mb-1">Wall Thickness (Nominal: 3.00mm, USL: 3.20, LSL: 2.80)</label>
                      <input 
                        type="text" 
                        value={newInsWall31} 
                        onChange={(e) => setNewInsWall31(e.target.value)}
                        className="w-full h-8 px-2 border rounded bg-background font-mono text-[12px] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase block mb-1">Surface Finish (Nominal: Ra 1.6, Limit: Ra 3.2)</label>
                      <input 
                        type="text" 
                        value={newInsSurface31} 
                        onChange={(e) => setNewInsSurface31(e.target.value)}
                        className="w-full h-8 px-2 border rounded bg-background font-mono text-[12px] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-muted-foreground">Sample Size:</span>
                        <div className="font-bold text-foreground mt-0.5">80 units (AQL 1.0)</div>
                      </div>
                      <div>
                        <label className="text-[10.5px] font-bold text-muted-foreground uppercase">Defects Found</label>
                        <input 
                          type="number" 
                          value={newInsDefects31} 
                          onChange={(e) => setNewInsDefects31(e.target.value)}
                          className="w-full h-8 px-2 border rounded bg-background font-mono text-[12px] focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleAddInspection31}
                    className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[13px] shadow-sm mt-2"
                  >
                    Submit Inspection Record
                  </button>
                </div>

                {/* Live Inspection Feed (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Vatva Quality Inspection Feed</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Chronological record of completed quality checks</p>
                  </div>

                  <div className="space-y-2.5 overflow-y-auto max-h-[380px] pr-1.5 mt-4">
                    {inspections31.map((ins) => (
                      <div
                        key={ins.id}
                        onClick={() => setSelectedInsId31(ins.id)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          selectedInsId31 === ins.id
                            ? "border-primary bg-primary/5 shadow-sm font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                            ins.result === "PASS" ? "bg-emerald-500" : ins.result === "REJECT" ? "bg-red-500" : "bg-amber-500"
                          }`} />
                          <div className="space-y-0.5">
                            <div className="text-[13px] font-bold text-foreground">{ins.id} — Batch {ins.batch}</div>
                            <div className="text-[11px] text-muted-foreground font-mono">
                              SKU: {ins.product} • Stage: {ins.stage} • Line: {ins.line}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[11.5px] font-mono text-muted-foreground">{ins.time}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono border ${
                            ins.result === "PASS"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : ins.result === "REJECT"
                              ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                              : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}>{ins.result}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inspection Details expanded panel */}
              <div className="rounded-2xl bg-card border p-5 space-y-4">
                <div className="border-b pb-2 flex justify-between items-center">
                  <h4 className="text-[14.5px] font-bold tracking-tight">Inspection Analysis: {activeIns31.id}</h4>
                  <span className="text-[11.5px] font-mono text-muted-foreground">Inspector: {activeIns31.inspector}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3.5 text-[12.5px]">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Affected Batch & SKU:</span>
                      <span className="font-semibold text-foreground">{activeIns31.batch} ({activeIns31.product})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Inspection Sample Decision:</span>
                      <span className="font-mono font-bold text-foreground">{activeIns31.defects} defects of {activeIns31.sampleSize} units</span>
                    </div>
                    {activeIns31.result === "REJECT" && (
                      <div className="p-3.5 rounded-xl border border-red-500/25 bg-red-500/5 text-destructive space-y-1 leading-relaxed">
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertTriangle className="h-4 w-4 animate-pulse" /> Out-of-Spec Rejection Details
                        </div>
                        <p className="text-muted-foreground mt-1 text-[11.5px]">
                          Defect Type: **{activeIns31.defectType}**. AQL threshold exceeded. Quality hold applied to 1,000 units in batch.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col justify-end gap-2.5">
                    {activeIns31.result === "REJECT" && (
                      <button
                        onClick={() => handleRaiseManualNcr31(activeIns31)}
                        className="h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[13px] shadow-sm"
                      >
                        Raise Internal Quality NCR
                      </button>
                    )}
                    <button
                      onClick={() => toast.error("Report forwarded to Sunita Patel (QA Head).")}
                      className="h-10 rounded-xl border font-bold hover:bg-muted text-[13px]"
                    >
                      Escalate Inspection Log
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 3 — Sub-Module 3.2: NCR Management Agent */}
          {/* ========================================================================= */}
          {s.id === "3-2" && (
            <div className="space-y-6">
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Open NCRs</div>
                  <div className="text-[20px] font-bold mt-1 font-mono">{ncrList32.filter(n => n.status !== "Closed").length} NCRs</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-red-500/20">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Critical</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">1 Active</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Major Defect</div>
                  <div className="text-[20px] font-bold text-amber-500 mt-1 font-mono">4 Active</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Minor Defect</div>
                  <div className="text-[20px] font-bold mt-1 font-mono">7 Active</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-red-500/20 animate-pulse">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">CAPA Overdue</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">3 Overdue</div>
                </div>
              </div>

              {/* Inbox and Details split */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Inbox Table (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Active NCR Inbox</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Select non-conformance ticket to route CAPA</p>
                  </div>

                  <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                    {ncrList32.map((ncr) => (
                      <div
                        key={ncr.id}
                        onClick={() => setSelectedNcrId32(ncr.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          selectedNcrId32 === ncr.id
                            ? "border-primary bg-primary/5 font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span className="font-mono font-bold text-foreground">{ncr.id}</span>
                          <span>Age: {ncr.age} days</span>
                        </div>
                        <div className="text-[13px] font-bold mt-1 text-foreground">Batch {ncr.batch} ({ncr.product})</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t text-[11px] font-mono text-muted-foreground">
                          <span>{ncr.type}</span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                            ncr.status === "Closed"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : ncr.status === "Overdue"
                              ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                              : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}>{ncr.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details and timeline (60%) */}
                {(() => {
                  const activeNcr = ncrList32.find(n => n.id === selectedNcrId32) || ncrList32[0];
                  return (
                    <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="text-[14.5px] font-bold tracking-tight">NCR Analysis: {activeNcr.id}</h4>
                          <span className="text-[11px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">{activeNcr.severity} Severity</span>
                        </div>
                        <p className="text-[12px] text-muted-foreground mt-0.5 font-mono">Owner: {activeNcr.owner} • Raised: {activeNcr.date}</p>
                      </div>

                      <div className="border rounded-xl p-4 bg-muted/15 space-y-4 text-[12.5px]">
                        <div>
                          <span className="text-muted-foreground">Defect Description:</span>
                          <div className="font-semibold text-foreground mt-0.5">{activeNcr.defect}</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2 border-t text-[12px]">
                          <div>
                            <span className="text-muted-foreground">Containment Method:</span>
                            <div className="font-medium text-foreground mt-0.5">{activeNcr.containment}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Root Cause Details:</span>
                            <div className="font-medium text-foreground mt-0.5">{activeNcr.details}</div>
                          </div>
                        </div>
                      </div>

                      {selectedNcrId32 === "NCR-2024-441" && (
                        <div className="p-3.5 rounded-xl border border-amber-500/25 bg-amber-500/5 text-foreground text-[12px] space-y-1 animate-fade-in leading-relaxed">
                          <div className="font-bold text-amber-600 flex items-center gap-1.5">
                            <AlertTriangle className="h-4 w-4" /> Systemic Quality Risk Flagged
                          </div>
                          <p className="text-muted-foreground text-[11.5px] mt-1">
                            **3 surface scratch NCRs** detected on CNC Line 1 in the last 90 days. Tooling wear re-checks ordered.
                          </p>
                        </div>
                      )}

                      <div className="flex gap-2.5 pt-3 border-t">
                        <button
                          onClick={() => handleCloseNcr32(activeNcr.id)}
                          disabled={activeNcr.status === "Closed"}
                          className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px]"
                        >
                          Close Quality Ticket
                        </button>
                        <button
                          onClick={() => handleEscalateNcr32(activeNcr.id)}
                          className="h-10 px-4 rounded-xl border font-bold hover:bg-muted text-[13px] text-destructive border-destructive/20"
                        >
                          Escalate Ticket
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Recharts Defect Pareto */}
              <div className="rounded-2xl bg-card border p-5">
                <h4 className="text-[14px] font-bold mb-3">Defect Category Pareto (Jan 2025)</h4>
                <div className="h-[200px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { name: "Surface Finish", count: 5 },
                      { name: "Dimensional", count: 3 },
                      { name: "Incoming Vendor", count: 2 },
                      { name: "Functional", count: 1 },
                      { name: "Documentation", count: 1 }
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" fontSize={11} stroke="#888888" />
                      <YAxis fontSize={11} stroke="#888888" />
                      <Tooltip />
                      <Bar dataKey="count" fill="#2E86AB" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 4 — Sub-Module 3.3: Batch Record & Traceability Engine */}
          {/* ========================================================================= */}
          {s.id === "3-3" && (
            <div className="space-y-6">
              
              {/* Query search bar */}
              <div className="rounded-2xl border p-5 bg-card flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm">
                <div className="flex flex-1 flex-wrap items-center gap-4 w-full">
                  <div className="flex-1 min-w-[200px] space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Traceability Query Target</label>
                    <input 
                      type="text" 
                      value={batchQuery33} 
                      onChange={(e) => setBatchQuery33(e.target.value)}
                      placeholder="Enter batch number (B-4821) or RM lot..."
                      className="w-full h-10 px-3 rounded-xl border bg-background text-[13px] font-medium focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Trace Direction Type</label>
                    <select
                      value={traceType33}
                      onChange={(e: any) => setTraceType33(e.target.value)}
                      className="h-10 px-3 rounded-xl border bg-background text-[13px] font-medium focus:outline-none"
                    >
                      <option value="Backward">Backward Trace (Inputs)</option>
                      <option value="Forward">Forward Trace (Customers)</option>
                      <option value="Cross-batch">Cross-Batch Contamination</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={runTraceQuery33}
                  disabled={traceStatus33 === "tracing"}
                  className="w-full lg:w-auto h-10 px-5 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px] shrink-0"
                >
                  {traceStatus33 === "tracing" ? "Tracing Nodes (6s)..." : "Run Trace Query"}
                </button>
              </div>

              {/* Dynamic traceability tree layout */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Visual Node Links map (70%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Interactive Genealogy Tree Structure</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Genealogical mappings for {batchQuery33}</p>
                  </div>

                  {traceStatus33 === "tracing" ? (
                    <div className="h-[300px] flex flex-col items-center justify-center space-y-3">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <span className="text-[12px] text-muted-foreground">Mapping multi-tier Bill of Material tables...</span>
                    </div>
                  ) : traceStatus33 === "complete" ? (
                    <div className="border rounded-xl p-4 bg-muted/10 font-mono text-[12px] space-y-4">
                      
                      {/* Root node */}
                      <div className="p-3.5 rounded-xl border border-primary/20 bg-primary/5 text-center font-bold text-foreground">
                        🎯 Root Node: Batch {batchQuery33} (MS-204 Components, 1,000 units)
                      </div>

                      {/* Child level indicators */}
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="p-3 rounded-lg border bg-card space-y-1">
                          <div className="text-[10px] uppercase font-bold text-muted-foreground">Raw Materials Inputs</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">RM-2024-441 (Steel)</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">RM-2024-388 (Zinc)</div>
                        </div>

                        <div className="p-3 rounded-lg border bg-card space-y-1">
                          <div className="text-[10px] uppercase font-bold text-muted-foreground">Process Operations</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">CNC-01 Machine</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">Operator: Ramesh Kumar</div>
                        </div>

                        <div className="p-3 rounded-lg border bg-card space-y-1">
                          <div className="text-[10px] uppercase font-bold text-muted-foreground">Dispatch Details</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">DC-2025-0441</div>
                          <div className="text-[11.5px] font-semibold text-foreground line-clamp-1">Customer: Kapoor Ind.</div>
                        </div>
                      </div>

                      {/* Connective verification badge */}
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[11px] font-semibold text-center">
                        ✓ Forward & Backward Trace completed. Full compliance audit trial logged.
                      </div>
                    </div>
                  ) : (
                    <div className="h-[300px] flex flex-col items-center justify-center text-muted-foreground text-[13px] border border-dashed rounded-xl bg-muted/10">
                      <Database className="h-8 w-8 mb-2 text-primary" />
                      <span>Enter query and click run to mapping audit trials.</span>
                    </div>
                  )}
                </div>

                {/* Sidebar details (30%) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <h4 className="text-[14.5px] font-bold tracking-tight">Trace Node Details</h4>
                  
                  {traceExpandedNode33 ? (
                    <div className="space-y-4 text-[12.5px]">
                      <div className="grid grid-cols-2 gap-3.5 bg-muted/20 p-3.5 rounded-xl border">
                        <div>
                          <span className="text-muted-foreground">Product description:</span>
                          <div className="font-semibold text-foreground mt-0.5">MS Sheet Component 204</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">QC Release date:</span>
                          <div className="font-semibold text-foreground mt-0.5">24 Jan 2025</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Primary Custodian:</span>
                          <div className="font-semibold text-foreground mt-0.5">Ramesh Kumar</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Active NCR:</span>
                          <div className="font-bold text-amber-500 mt-0.5">NCR-2024-441</div>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <button
                          onClick={() => {
                            toast.success(`Trace reports exported in PDF deck for auditors.`);
                          }}
                          className="w-full h-9 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 text-[12px]"
                        >
                          Export Recall Audit Report
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-muted-foreground text-[12px] italic">No node selected.</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 5 — Sub-Module 3.4: Auto-Generated Compliance Reports */}
          {/* ========================================================================= */}
          {s.id === "3-4" && (
            <div className="space-y-6">
              
              {/* Template list and details split */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Reports archive template index */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Template Library</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Select standards scheme report</p>
                  </div>

                  <div className="space-y-2.5">
                    {reports34.map((rep) => (
                      <div
                        key={rep.id}
                        onClick={() => setSelectedReportId34(rep.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          selectedReportId34 === rep.id
                            ? "border-primary bg-primary/5 font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span className="font-mono font-bold text-foreground">{rep.id}</span>
                          <span>{rep.pages} pages</span>
                        </div>
                        <div className="text-[13px] font-bold mt-1 text-foreground">{rep.name}</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t text-[11px] font-mono text-muted-foreground">
                          <span>Period: {rep.period}</span>
                          <span className="text-foreground font-semibold">{rep.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF rendering and controls preview */}
                {(() => {
                  const activeReport = reports34.find(r => r.id === selectedReportId34) || reports34[0];
                  return (
                    <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-center">
                          <h4 className="text-[14.5px] font-bold tracking-tight">{activeReport.name}</h4>
                          <span className="text-[11.5px] font-mono text-muted-foreground bg-muted px-2 py-0.5 rounded">Revision: Rev 01</span>
                        </div>
                        <p className="text-[12px] text-muted-foreground mt-0.5">Auto-compiled at: {activeReport.date}</p>
                      </div>

                      {/* PDF layout preview */}
                      <div className="border rounded-xl p-4 bg-muted/20 text-[12.5px] font-mono leading-relaxed space-y-3.5">
                        <div className="text-center font-bold border-b pb-2 uppercase text-[13px]">
                          ISO 9001:2015 Management Review Report — {activeReport.period}
                        </div>
                        
                        <div className="space-y-1.5 text-[11.5px]">
                          <div>• **Inspection Pass Rate**: 94.2% (Line-wise average)</div>
                          <div>• **Internal NCRs Raised**: {ncrList32.length} active tickets</div>
                          <div>• **Calibration Compliance**: 87.5% instruments compliant</div>
                          <div>• **Top Systemic Risk**: Surface scratches pattern CNC Line 1</div>
                          <div>• **Recipients**: {activeReport.recipients}</div>
                        </div>

                        <div className="border-t pt-2 text-[10px] text-center text-muted-foreground italic">
                          Generated and approved under compliance requirements of Gujarat Factories Act.
                        </div>
                      </div>

                      <div className="flex gap-2.5 pt-3 border-t">
                        <button
                          onClick={triggerReportGen34}
                          disabled={reportGenStatus34 === "generating"}
                          className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 text-[13px]"
                        >
                          {reportGenStatus34 === "generating" ? "Compiling Draft..." : "Generate New Draft"}
                        </button>
                        <button
                          onClick={() => toast.success(`Test PDF dispatched to Sunita Patel.`)}
                          className="h-10 px-4 rounded-xl border font-bold hover:bg-muted text-[13px]"
                        >
                          Send Test Draft
                        </button>
                      </div>
                    </div>
                  );
                })()}

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 6 — Sub-Module 3.5: SPC (Statistical Process Control) Monitor */}
          {/* ========================================================================= */}
          {s.id === "3-5" && (
            <div className="space-y-6">
              
              {/* Selectors and specs */}
              <div className="rounded-2xl border p-5 bg-card flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">CTQ Parameter</label>
                    <select
                      value={selectedCtq35}
                      onChange={(e) => setSelectedCtq35(e.target.value)}
                      className="h-10 px-3 rounded-xl border bg-background text-[13px] font-medium focus:outline-none"
                    >
                      <option>Wall Thickness</option>
                      <option>Component Length</option>
                      <option>Hole Diameter</option>
                    </select>
                  </div>

                  <div className="space-y-1 font-mono text-[12.5px] bg-muted/40 p-2.5 rounded-lg border">
                    <div>USL: **3.20mm** | CL: **3.00mm** | LSL: **2.80mm**</div>
                    <div className="text-[11px] text-destructive font-bold">Process Cpk: 0.98 (INCAPABLE)</div>
                  </div>
                </div>

                {/* Input measurement values */}
                <div className="flex gap-2 items-center">
                  <input 
                    type="text" 
                    value={newReading35} 
                    onChange={(e) => setNewReading35(e.target.value)}
                    placeholder="Enter mean reading..."
                    className="h-10 w-36 px-2.5 border rounded-xl bg-background font-mono text-[13px] focus:outline-none"
                  />
                  <button
                    onClick={handleAddSpcReading35}
                    className="h-10 px-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[13px]"
                  >
                    Add Reading
                  </button>
                </div>
              </div>

              {/* SPC X-Bar chart and capability panel */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Control chart (70%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">X-Bar Statistical Process Control Chart</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Shows sample subgroup averages against control limits</p>
                  </div>

                  <div className="h-[260px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={spcSubgroups35.slice(-20)}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="subgroup" fontSize={11} stroke="#888888" label={{ value: "Subgroup #", position: "insideBottom", offset: -2 }} />
                        <YAxis domain={[2.7, 3.3]} fontSize={11} stroke="#888888" />
                        <Tooltip />
                        <Bar dataKey="mean" fill="#2E86AB" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Right lists panel (30%) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <h4 className="text-[14.5px] font-bold tracking-tight">CTQs Capability index</h4>
                  
                  <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-1">
                    {[
                      { name: "Wall Thickness", cpk: "0.98", status: "🔴 Incapable" },
                      { name: "Component Length", cpk: "1.44", status: "🔵 Capable" },
                      { name: "Hole Diameter", cpk: "1.61", status: "🔵 Capable" },
                      { name: "Surface Finish Ra", cpk: "1.02", status: "🟡 Marginal" }
                    ].map((ctq) => (
                      <div key={ctq.name} className="flex justify-between items-center text-[12.5px] border-b pb-2 last:border-0">
                        <div>
                          <div className="font-semibold text-foreground">{ctq.name}</div>
                          <div className="text-[11px] text-muted-foreground font-mono mt-0.5">Cpk: {ctq.cpk}</div>
                        </div>
                        <span className="font-semibold">{ctq.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 7 — Sub-Module 3.6: Calibration Management Agent */}
          {/* ========================================================================= */}
          {s.id === "3-6" && (
            <div className="space-y-6">
              
              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Instruments</div>
                  <div className="text-[20px] font-bold mt-1 font-mono">{instruments36.length} Gauges</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Compliant</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-1 font-mono">
                    {instruments36.filter(i => i.status === "Compliant").length} Gauges
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-red-500/20">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Calibration Overdue</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">
                    {instruments36.filter(i => i.status === "Overdue").length} Overdue
                  </div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-destructive/20 animate-pulse">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">QA Hold applied</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono">
                    {instruments36.filter(i => i.hold).length} Locked
                  </div>
                </div>
              </div>

              {/* Main table and details */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Ledger table */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Calibration register ledger</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Tracks instrument NABL calibration periods</p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/30 font-semibold text-muted-foreground">
                          <th className="p-2.5">Instrument ID</th>
                          <th className="p-2.5">Name</th>
                          <th className="p-2.5">Location</th>
                          <th className="p-2.5 text-center">Due Date</th>
                          <th className="p-2.5 text-center">Days left</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {instruments36.map((inst) => (
                          <tr 
                            key={inst.id} 
                            onClick={() => setSelectedInstId36(inst.id)}
                            className={`border-b last:border-0 hover:bg-accent/20 cursor-pointer transition-colors ${
                              selectedInstId36 === inst.id ? "bg-accent/40 font-semibold" : ""
                            }`}
                          >
                            <td className="p-2.5 font-mono font-bold text-primary">{inst.id}</td>
                            <td className="p-2.5 font-medium">{inst.name}</td>
                            <td className="p-2.5 text-muted-foreground">{inst.location}</td>
                            <td className="p-2.5 text-center font-mono text-[11.5px]">{inst.due}</td>
                            <td className={`p-2.5 text-center font-mono font-bold ${inst.days < 0 ? "text-destructive" : "text-foreground"}`}>
                              {inst.days}
                            </td>
                            <td className="p-2.5 text-right">
                              <span className={`inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold border ${
                                inst.status === "Compliant"
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : inst.status === "Overdue"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              }`}>
                                {inst.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Details actions side (35%) */}
                {(() => {
                  const activeInst = instruments36.find(i => i.id === selectedInstId36) || instruments36[0];
                  return (
                    <div className="rounded-2xl border bg-card p-5 space-y-4">
                      <div className="border-b pb-2 flex justify-between items-center">
                        <h4 className="text-[14.5px] font-bold tracking-tight">Calibration actions</h4>
                        <span className="text-[11.5px] font-mono text-primary">{activeInst.id}</span>
                      </div>

                      <div className="space-y-4 text-[12.5px]">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Custodian Name:</span>
                          <span className="font-semibold text-foreground">{activeInst.custodian}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Certificate link:</span>
                          <span className="font-mono text-primary underline cursor-pointer">{activeInst.cert}.pdf</span>
                        </div>
                        
                        <div className="pt-3 border-t space-y-2">
                          <div className="text-[11px] font-bold uppercase text-muted-foreground">QA Hold Lock status</div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleScheduleCalib36(activeInst.id)}
                              className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 text-[12px]"
                            >
                              Recalibrate Gauge
                            </button>
                            <button
                              onClick={() => handleToggleHold36(activeInst.id)}
                              className={`h-9 px-3 rounded-lg border font-semibold hover:bg-muted text-[12px] ${
                                activeInst.hold ? "text-emerald-600 border-emerald-500/25 bg-emerald-500/5" : "text-destructive border-destructive/25 bg-destructive/5"
                              }`}
                            >
                              {activeInst.hold ? "Release Lock" : "Apply Lock"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 8 — Sub-Module 3.7: Customer Complaint Quality Linkage */}
          {/* ========================================================================= */}
          {s.id === "3-7" && (
            <div className="space-y-6">
              
              {/* Main linkages splits */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Complaint inbox (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Complaints inbox linkage</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Select complaint ticket from sales channel</p>
                  </div>

                  <div className="space-y-3">
                    {complaints37.map((comp) => (
                      <div
                        key={comp.id}
                        onClick={() => setSelectedCompId37(comp.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                          selectedCompId37 === comp.id
                            ? "border-primary bg-primary/5 font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span className="font-mono font-bold text-foreground">{comp.id}</span>
                          <span>{comp.date}</span>
                        </div>
                        <div className="text-[13px] font-bold mt-1 text-foreground">{comp.customer}</div>
                        <div className="flex items-center justify-between mt-2 pt-2 border-t text-[11px] font-mono text-muted-foreground">
                          <span>SKU: {comp.product}</span>
                          <span className="text-foreground font-semibold">{comp.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8D panel view (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">AI pre-filled 8D problem solving report</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Complaints linked to Batch {activeComp37.batch} (NCR: {activeComp37.ncr})</p>
                  </div>

                  {/* 8D text panel */}
                  <div className="border rounded-xl p-4 bg-muted/15 space-y-4 text-[12.5px] leading-normal font-sans">
                    <div className="font-bold border-b pb-2 text-[13px]">8D REPORT: {activeComp37.id} — {activeComp37.customer}</div>
                    
                    <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
                      <div>
                        <span className="font-bold text-primary text-[11px] uppercase">D1 — Team Formation</span>
                        <div className="text-foreground mt-0.5">Leader: Sunita Patel, Members: Vijay Sharma, Ramesh Kumar</div>
                      </div>
                      <div className="border-t pt-2">
                        <span className="font-bold text-primary text-[11px] uppercase">D2 — Problem Description</span>
                        <div className="text-foreground mt-0.5">Scratches observed on {activeComp37.qty} units out of 1,000 components received. Spec limit exceeded.</div>
                      </div>
                      <div className="border-t pt-2">
                        <span className="font-bold text-primary text-[11px] uppercase">D3 — Containment Action</span>
                        <div className="text-foreground mt-0.5">Lot B-4821 segregated in Hold bin B. Replacement cleared and shipped DC-2025-0441.</div>
                      </div>
                      <div className="border-t pt-2">
                        <span className="font-bold text-primary text-[11px] uppercase">D4 — Root Cause Analysis (AI suggested)</span>
                        <div className="text-foreground mt-0.5">Micro-vibrations from worn fixture pad on CNC-01 station. Pattern matched to NCR-2024-431 & NCR-2024-398.</div>
                      </div>

                      {/* Manual D5 to D8 fields inputs */}
                      <div className="border-t pt-2.5 space-y-3">
                        <span className="font-bold text-primary text-[11px] uppercase block">Provide D5-D8 corrective actions (signed off)</span>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase">D5 Corrective Action</label>
                            <input 
                              type="text" 
                              value={d5ToD8Answers37[activeComp37.id]?.d5 ?? ""} 
                              onChange={(e) => setD5ToD8Answers37(prev => ({
                                ...prev,
                                [activeComp37.id]: { ...(prev[activeComp37.id] || { d5: "", d6: "", d7: "", d8: "" }), d5: e.target.value }
                              }))}
                              placeholder="e.g. Fixture wear template update..."
                              className="w-full h-8 px-2 border rounded bg-background text-[11.5px]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase">D6 CAPA Implementation</label>
                            <input 
                              type="text" 
                              value={d5ToD8Answers37[activeComp37.id]?.d6 ?? ""} 
                              onChange={(e) => setD5ToD8Answers37(prev => ({
                                ...prev,
                                [activeComp37.id]: { ...(prev[activeComp37.id] || { d5: "", d6: "", d7: "", d8: "" }), d6: e.target.value }
                              }))}
                              placeholder="e.g. Microswitches fitted..."
                              className="w-full h-8 px-2 border rounded bg-background text-[11.5px]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase">D7 Preventive Measures</label>
                            <input 
                              type="text" 
                              value={d5ToD8Answers37[activeComp37.id]?.d7 ?? ""} 
                              onChange={(e) => setD5ToD8Answers37(prev => ({
                                ...prev,
                                [activeComp37.id]: { ...(prev[activeComp37.id] || { d5: "", d6: "", d7: "", d8: "" }), d7: e.target.value }
                              }))}
                              placeholder="e.g. QMS program check update..."
                              className="w-full h-8 px-2 border rounded bg-background text-[11.5px]"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] font-bold text-muted-foreground uppercase">D8 Team Recognition</label>
                            <input 
                              type="text" 
                              value={d5ToD8Answers37[activeComp37.id]?.d8 ?? ""} 
                              onChange={(e) => setD5ToD8Answers37(prev => ({
                                ...prev,
                                [activeComp37.id]: { ...(prev[activeComp37.id] || { d5: "", d6: "", d7: "", d8: "" }), d8: e.target.value }
                              }))}
                              placeholder="e.g. Staff recognized..."
                              className="w-full h-8 px-2 border rounded bg-background text-[11.5px]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-3 border-t">
                    <button
                      onClick={() => handleSave8DAnswers37(activeComp37.id, d5ToD8Answers37[activeComp37.id] || { d5: "", d6: "", d7: "", d8: "" })}
                      className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[13px]"
                    >
                      Save & Sign Off 8D report
                    </button>
                    <button
                      onClick={() => toast.success("8D Report PDF exported and sent to customer via email.")}
                      className="h-10 px-4 rounded-xl border font-bold hover:bg-muted text-[13px]"
                    >
                      Export PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      ) : (isM4 || (isM9 && s.id === "9-2")) ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* PAGE 2 — Sub-Module 4.1: Dealer WhatsApp AI Agent */}
          {/* ========================================================================= */}
          {s.id === "4-1" && (
            <div className="space-y-6">
              
              {/* Agent Health Bar */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">WhatsApp Channel: Online & Active</div>
                    <div className="text-[11.5px] text-muted-foreground font-mono">
                      84 dealers registered • Avg AI response time: 9.4s • 91% resolved autonomously
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11.5px] font-mono text-muted-foreground">Original Language Translation: Auto</span>
                </div>
              </div>

              {/* Chat and Log split */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Live Chat Panel (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between min-h-[500px] space-y-4">
                  <div className="border-b pb-3 flex justify-between items-center">
                    <div>
                      <h4 className="text-[14.5px] font-bold tracking-tight text-foreground">{selectedDealer41}</h4>
                      <p className="text-[11.5px] text-muted-foreground">Connected via WhatsApp Business API</p>
                    </div>
                    <select
                      value={selectedDealer41}
                      onChange={(e) => setSelectedDealer41(e.target.value)}
                      className="h-8 px-2 border rounded bg-background text-[12px] focus:outline-none"
                    >
                      {Object.keys(messages41).map((dlr) => (
                        <option key={dlr} value={dlr}>{dlr}</option>
                      ))}
                    </select>
                  </div>

                  {/* Chat messages */}
                  <div className="flex-1 overflow-y-auto max-h-[350px] space-y-3 pr-1.5 min-h-[280px]">
                    {(messages41[selectedDealer41] || []).map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.sender === "dealer" ? "justify-start" : "justify-end"}`}>
                        <div className={`max-w-[80%] rounded-2xl p-3.5 text-[13px] leading-relaxed shadow-sm relative ${
                          msg.sender === "dealer"
                            ? "bg-muted text-foreground rounded-tl-none"
                            : "bg-primary text-primary-foreground rounded-tr-none"
                        }`}>
                          <div className="whitespace-pre-line">{msg.text}</div>
                          <div className={`text-[10px] mt-2 flex items-center justify-between font-mono ${
                            msg.sender === "dealer" ? "text-muted-foreground" : "text-primary-foreground/80"
                          }`}>
                            <span>{msg.time}</span>
                            {msg.responseTime && (
                              <span className="bg-emerald-500/25 text-emerald-200 px-1.5 py-0.5 rounded ml-2 text-[9px] font-semibold">
                                AI: {msg.responseTime}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}

                    {typing41 && (
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground/80 rounded-2xl rounded-tr-none p-3.5 text-[12px] flex items-center gap-1.5 shadow-sm">
                          <Loader2 className="h-3.5 w-3.5 animate-spin" /> AI Agent is typing response...
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input area */}
                  <div className="flex gap-2 border-t pt-3">
                    <input
                      type="text"
                      value={chatInput41}
                      onChange={(e) => setChatInput41(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSendMessage41()}
                      placeholder="Type dealer message or 'CONFIRM' to simulate order creation..."
                      className="flex-1 h-10 px-3 border rounded-xl bg-background text-[13px] focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      onClick={handleSendMessage41}
                      className="h-10 px-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all text-[13px]"
                    >
                      Send Message
                    </button>
                  </div>
                </div>

                {/* Query Log Panel (40%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Today's Inbound Query Log</h4>
                    <p className="text-[12px] text-muted-foreground">All dealer WhatsApp requests logged at Vatva Hub</p>
                  </div>

                  <div className="space-y-2.5 overflow-y-auto max-h-[360px] pr-1.5">
                    {queryLog41.map((log, idx) => (
                      <div key={idx} className="p-3 rounded-xl border bg-muted/20 flex flex-col justify-between gap-1.5 text-[12px]">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-foreground truncate max-w-[150px]">{log.dealer.split(",")[0]}</span>
                          <span className="font-mono text-muted-foreground text-[10.5px]">{log.time}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-muted-foreground">
                          <span>Intent: **{log.type}**</span>
                          <span className={`px-1.5 py-0.5 rounded font-mono text-[10px] ${
                            log.status === "Resolved"
                              ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-600 border border-amber-500/20 animate-pulse"
                          }`}>{log.status}</span>
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground border-t pt-1 flex justify-between">
                          <span>Processing delay:</span>
                          <span className="font-bold text-foreground">{log.timeTaken}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Inquiries Today</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">47 Chats</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Avg AI Response</div>
                  <div className="text-[24px] font-bold mt-1 font-mono text-primary">9.4s</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-[#1D9E75] uppercase tracking-wider">Self-Resolved</div>
                  <div className="text-[24px] font-bold text-[#1D9E75] mt-1 font-mono">91%</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Escalation Rate</div>
                  <div className="text-[24px] font-bold mt-1 font-mono text-amber-600">9%</div>
                </div>
              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 3 — Sub-Module 4.2: Order Intake Automation */}
          {/* ========================================================================= */}
          {s.id === "4-2" && (
            <div className="space-y-6">
              
              {/* Top Summary Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Orders Today</div>
                  <div className="text-[20px] font-bold mt-0.5 font-mono">11 Orders</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Intake Value</div>
                  <div className="text-[20px] font-bold mt-0.5 font-mono">₹24.8 L</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">WhatsApp</div>
                  <div className="text-[20px] font-bold text-primary mt-0.5 font-mono">9 Orders</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Email/Portal</div>
                  <div className="text-[20px] font-bold mt-0.5 font-mono">2 Orders</div>
                </div>
                <div className="rounded-xl border bg-card p-3.5 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Auto-Confirmed</div>
                  <div className="text-[20px] font-bold text-emerald-600 mt-0.5 font-mono">81.8%</div>
                </div>
              </div>

              {/* Parsing split view */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Orders Feed (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="text-[14.5px] font-bold tracking-tight">Today's Inbound Orders Log</h4>
                      <p className="text-[12px] text-muted-foreground">Select an order record to inspect validation checks</p>
                    </div>
                    <button
                      onClick={handleSimulateParse42}
                      disabled={parsingStep42 === "parsing"}
                      className="h-9 px-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 disabled:opacity-50 text-[12px]"
                    >
                      {parsingStep42 === "parsing" ? "Parsing..." : "Simulate Incoming Order"}
                    </button>
                  </div>

                  <div className="space-y-3.5 mt-4 overflow-y-auto max-h-[350px] pr-1">
                    {orders42.map((o) => (
                      <div
                        key={o.id}
                        onClick={() => setSelectedOrderId42(o.id)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-4 ${
                          selectedOrderId42 === o.id
                            ? "border-primary bg-primary/5 shadow-sm font-semibold"
                            : "bg-card hover:border-primary/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full ${
                            o.status.includes("Hold") ? "bg-amber-500" : o.status === "Rejected" ? "bg-red-500" : "bg-emerald-500"
                          }`} />
                          <div className="space-y-0.5">
                            <div className="text-[13.5px] font-bold text-foreground">{o.id} — {o.dealer.split(",")[0]}</div>
                            <div className="text-[11px] text-muted-foreground font-mono">
                              Channel: {o.channel} • Items: {o.items}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[12px] font-bold font-mono text-foreground">{o.value}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono border ${
                            o.status === "ERP Created"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}>{o.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Validation Checks Panel (40%) */}
                <div className="rounded-2xl bg-card border p-5 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">AI Validation Engine</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Checks for {activeOrder42.id}</p>
                  </div>

                  <div className="space-y-3 bg-muted/20 p-4 rounded-xl border text-[12.5px] leading-relaxed">
                    <div className="flex items-center justify-between border-b pb-2">
                      <span className="text-muted-foreground font-semibold">Dealer account:</span>
                      <span className="font-bold text-foreground">{activeOrder42.dealer.split(",")[0]}</span>
                    </div>

                    <div className="space-y-2.5 pt-1.5">
                      <div className="flex justify-between items-center text-[12px]">
                        <span>• Item catalog code lookup:</span>
                        <span className="text-emerald-600 font-bold font-mono">✓ PASS</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span>• Stock availability check:</span>
                        <span className="text-emerald-600 font-bold font-mono">✓ PASS</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span>• Trade rate card lookup:</span>
                        <span className="text-emerald-600 font-bold font-mono">✓ PASS</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span>• MOQ verification check:</span>
                        <span className="text-emerald-600 font-bold font-mono">✓ PASS</span>
                      </div>
                      <div className="flex justify-between items-center text-[12px]">
                        <span>• Credit limit threshold check:</span>
                        {activeOrder42.status.includes("Hold") ? (
                          <span className="text-red-500 font-bold font-mono animate-pulse">⚠️ WARN (Overlimit)</span>
                        ) : (
                          <span className="text-emerald-600 font-bold font-mono">✓ PASS</span>
                        )}
                      </div>
                    </div>

                    {activeOrder42.status.includes("Hold") && (
                      <div className="p-3.5 rounded-lg border border-amber-500/25 bg-amber-500/5 text-amber-700 space-y-1 text-[11.5px] mt-2">
                        <div className="font-bold flex items-center gap-1.5">
                          <AlertTriangle className="h-4 w-4 shrink-0" /> Credit Overlimit Warning
                        </div>
                        <p className="mt-0.5">
                          Account has ₹4.64L outstanding + new order value exceeds the ₹15L credit threshold. Needs Sales Manager override.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2">
                    {activeOrder42.status.includes("Hold") && (
                      <>
                        <button
                          onClick={() => handleApproveOrder42(activeOrder42.id)}
                          className="flex-1 h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[12.5px]"
                        >
                          Approve Override
                        </button>
                        <button
                          onClick={() => handleRejectOrder42(activeOrder42.id)}
                          className="h-10 px-4 rounded-xl border border-destructive text-destructive font-bold hover:bg-destructive/5 text-[12.5px]"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {activeOrder42.status === "ERP Created" && (
                      <button
                        onClick={() => toast.success(`Order logged inside ERPNext system already.`)}
                        className="w-full h-10 rounded-xl border font-bold hover:bg-muted text-[12.5px]"
                      >
                        Print ERP Order Acknowledgment
                      </button>
                    )}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 4 — Sub-Module 4.3: Dispatch & Logistics Update Agent */}
          {/* ========================================================================= */}
          {s.id === "4-3" && (
            <div className="space-y-6">
              
              {/* Stats Header */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">In-Transit Shipments</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">23 Trucks</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Delivered Today</div>
                  <div className="text-[24px] font-bold text-emerald-600 mt-1 font-mono">4 Invoices</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-red-500/20">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Active Delay Warnings</div>
                  <div className="text-[24px] font-bold text-destructive mt-1 font-mono animate-pulse">2 Warnings</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Awaiting Confirmation</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">7 Dealers</div>
                </div>
              </div>

              {/* Table and notification log */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Active Shipments Table (65%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Vatva Logistics Dispatch Ledger</h4>
                    <p className="text-[12px] text-muted-foreground">Select a shipment to track LR status and trigger manual override alerts</p>
                  </div>

                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="pb-2 font-semibold">SO Code</th>
                          <th className="pb-2 font-semibold">Dealer</th>
                          <th className="pb-2 font-semibold">LR Number</th>
                          <th className="pb-2 font-semibold">Carrier</th>
                          <th className="pb-2 font-semibold text-center">Status</th>
                          <th className="pb-2 font-semibold text-right">Delay Alert</th>
                        </tr>
                      </thead>
                      <tbody>
                        {shipments43.map((ship) => (
                          <tr
                            key={ship.id}
                            onClick={() => setSelectedShipId43(ship.id)}
                            className={`border-b cursor-pointer transition-all ${
                              selectedShipId43 === ship.id ? "bg-primary/5 font-semibold" : "hover:bg-muted/10"
                            }`}
                          >
                            <td className="py-3 font-mono text-foreground font-bold">{ship.id}</td>
                            <td className="py-3 text-foreground">{ship.dealer.split(",")[0]}</td>
                            <td className="py-3 font-mono text-muted-foreground">{ship.lr}</td>
                            <td className="py-3 text-muted-foreground">{ship.transporter}</td>
                            <td className="py-3 text-center">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono border ${
                                ship.status === "In Transit"
                                  ? "bg-amber-500/10 text-amber-600 border-amber-500/20"
                                  : ship.status === "Delayed"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                                  : ship.status === "Scheduled"
                                  ? "bg-blue-500/10 text-blue-600 border-blue-500/20"
                                  : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              }`}>{ship.status}</span>
                            </td>
                            <td className="py-3 text-right">
                              {ship.delay > 0 ? (
                                <span className="text-red-500 font-bold font-mono">+{ship.delay} Days</span>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Notification Log (35%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Today's Dispatch Push Log</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Automated WhatsApp dispatches status</p>
                  </div>

                  <div className="space-y-3 overflow-y-auto max-h-[300px] pr-1 flex-1">
                    {notificationsSent43.map((notif, idx) => (
                      <div key={idx} className="p-3 rounded-xl border bg-muted/20 flex flex-col gap-1 text-[11.5px] leading-relaxed">
                        <div className="flex justify-between items-center font-mono">
                          <span className="font-bold text-foreground">{notif.dealer}</span>
                          <span className="text-muted-foreground text-[10px]">{notif.time}</span>
                        </div>
                        <div className="flex justify-between items-center text-muted-foreground">
                          <span>Alert: {notif.type}</span>
                          <span className="text-primary font-semibold">✓ {notif.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <button
                      onClick={() => handleSendManualUpdate43(activeShipment43.id)}
                      className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[12.5px]"
                    >
                      Send WhatsApp Update Manually
                    </button>
                    <button
                      onClick={() => handleTriggerDelayAlert43(activeShipment43.id)}
                      className="w-full h-10 rounded-xl border font-bold hover:bg-muted text-[12.5px]"
                    >
                      Trigger Delay Alert (+1 Day)
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 5 — Sub-Module 4.4: Secondary Sales Tracking Agent */}
          {/* ========================================================================= */}
          {s.id === "4-4" && (
            <div className="space-y-6">
              
              {/* Summary Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Dealers Reported</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">67 / 84</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Sell-Out Value (Week)</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">₹68.4 L</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-amber-500/20">
                  <div className="text-[11px] font-bold text-amber-500 uppercase tracking-wider">Stagnant SKUs</div>
                  <div className="text-[24px] font-bold text-amber-500 mt-1 font-mono">3 Dealers</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Fast Movers Identified</div>
                  <div className="text-[24px] font-bold text-emerald-600 mt-1 font-mono text-emerald-500">4 Items</div>
                </div>
              </div>

              {/* Matrix and alerts layout */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Secondary Sales Matrix (60%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Gujarat Secondary Sell-Out Matrix</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Product-wise dealer inventory cover tracking matrix</p>
                  </div>

                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b text-muted-foreground">
                          <th className="pb-2 font-semibold">Dealer</th>
                          <th className="pb-2 font-semibold">Product SKU</th>
                          <th className="pb-2 font-semibold text-right">Dealer Stock</th>
                          <th className="pb-2 font-semibold text-right">Units Sold</th>
                          <th className="pb-2 font-semibold text-right">Primary Vol</th>
                          <th className="pb-2 font-semibold text-center">Velocity</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sellThroughData44.map((item, idx) => (
                          <tr key={idx} className="border-b hover:bg-muted/10">
                            <td className="py-3 font-bold text-foreground">{item.dealer.split(",")[0]}</td>
                            <td className="py-3 font-mono text-muted-foreground">{item.product}</td>
                            <td className="py-3 text-right font-mono text-foreground">{item.stock} units</td>
                            <td className="py-3 text-right font-mono text-foreground">{item.sold} units</td>
                            <td className="py-3 text-right font-mono text-muted-foreground">{item.primary} units</td>
                            <td className="py-3 text-center">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono border ${
                                item.status === "Fast Mover"
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : item.status === "Stagnant"
                                  ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              }`}>{item.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Stagnation Alerts Panel (40%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Active Inventory Stagnation Alerts</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Automated recommendations for overstock/deficit</p>
                  </div>

                  <div className="space-y-3.5 flex-1 overflow-y-auto max-h-[300px]">
                    <div className="p-3.5 rounded-xl border border-red-500/25 bg-red-500/5 space-y-2 text-[12px]">
                      <div className="font-bold text-destructive flex items-center gap-1.5 uppercase text-[10.5px]">
                        🔴 Stagnant Stock — Sharma Distributors, Vadodara
                      </div>
                      <div className="text-muted-foreground leading-relaxed">
                        Item: **PC-118** | Primary shipped last 30d: **600 units**. Secondary sold: **82 units**. Closing stock cover: **189 days**.
                      </div>
                      <div className="flex gap-2 pt-1 border-t">
                        <button
                          onClick={() => handleAddressStagnation44("Sharma Distributors, Vadodara", "Schedule Field Visit")}
                          className="flex-1 h-7 rounded bg-primary text-primary-foreground font-semibold text-[11px]"
                        >
                          Field Visit
                        </button>
                        <button
                          onClick={() => handleAddressStagnation44("Sharma Distributors, Vadodara", "Send Scheme Offer")}
                          className="h-7 px-2 rounded border font-semibold text-[11px] hover:bg-muted"
                        >
                          Push Scheme
                        </button>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl border border-amber-500/25 bg-amber-500/5 space-y-2 text-[12px]">
                      <div className="font-bold text-amber-600 flex items-center gap-1.5 uppercase text-[10.5px]">
                        🟡 Overstocked — Jain Traders, Surat
                      </div>
                      <div className="text-muted-foreground leading-relaxed">
                        Item: **SP-044** | Primary shipped: **800 units**. Closing stock: **560 units**. Days of cover: **70 days**.
                      </div>
                      <div className="flex gap-2 pt-1 border-t">
                        <button
                          onClick={() => handleAddressStagnation44("Jain Traders, Surat", "Hold Next Dispatch")}
                          className="flex-1 h-7 rounded bg-primary text-primary-foreground font-semibold text-[11px]"
                        >
                          Hold Dispatch
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-3 text-center">
                    <button
                      onClick={() => toast.success("Weekly stock inquiry nudges compiled & dispatched to 84 dealers via WhatsApp.")}
                      className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[12.5px]"
                    >
                      Send Stock Inquiries to Dealers
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 6 — Sub-Module 9.2: Dealer Payment Follow-Up Automation */}
          {/* ========================================================================= */}
          {s.id === "9-2" && (
            <div className="space-y-6">
              
              {/* Receivables Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Total Outstanding Ledger</div>
                  <div className="text-[20px] font-bold mt-1 font-mono text-foreground">
                    ₹{(receivables45.reduce((sum, r) => sum + r.amount, 0) / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Sum of all open bills</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-red-500/20">
                  <div className="text-[11px] font-bold text-destructive uppercase tracking-wider">Overdue &gt;30 Days</div>
                  <div className="text-[20px] font-bold text-destructive mt-1 font-mono animate-pulse">
                    ₹{(receivables45.filter(r => r.days > 30).reduce((sum, r) => sum + r.amount, 0) / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-red-500/80 mt-0.5">Critical collections focus</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Overdue 15–30 Days</div>
                  <div className="text-[20px] font-bold mt-1 font-mono">
                    ₹{(receivables45.filter(r => r.days > 15 && r.days <= 30).reduce((sum, r) => sum + r.amount, 0) / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Aged warning threshold</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider">Due / Overdue &lt;15d</div>
                  <div className="text-[20px] font-bold mt-1 font-mono text-primary">
                    ₹{(receivables45.filter(r => r.days <= 15).reduce((sum, r) => sum + r.amount, 0) / 100000).toFixed(2)}L
                  </div>
                  <div className="text-[10px] text-primary/80 mt-0.5">Auto reminders active</div>
                </div>
              </div>

              {/* Ageing layout grid */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Ageing Table (65%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Receivables Ageing Log</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Select an overdue invoice to dispatch collection notices</p>
                  </div>

                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left border-collapse text-[12.5px]">
                      <thead>
                        <tr className="border-b text-muted-foreground bg-muted/20">
                          <th className="p-2.5 font-semibold">Dealer</th>
                          <th className="p-2.5 font-semibold">Invoice #</th>
                          <th className="p-2.5 font-semibold">Region</th>
                          <th className="p-2.5 font-semibold text-right">Outstanding</th>
                          <th className="p-2.5 font-semibold text-center">Days O/D</th>
                          <th className="p-2.5 font-semibold">Reminder Stage</th>
                          <th className="p-2.5 text-right font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {receivables45.map((rec) => (
                          <tr
                            key={rec.inv}
                            onClick={() => setSelectedRecId45(rec.inv)}
                            className={`border-b last:border-0 cursor-pointer transition-all ${
                              selectedRecId45 === rec.inv ? "bg-primary/5 font-semibold" : "hover:bg-muted/10"
                            }`}
                          >
                            <td className="p-2.5 font-bold text-foreground">{rec.dealer.split(",")[0]}</td>
                            <td className="p-2.5 font-mono text-muted-foreground">{rec.inv}</td>
                            <td className="p-2.5 font-semibold text-muted-foreground text-[11.5px]">{rec.region}</td>
                            <td className="p-2.5 text-right font-mono text-foreground">₹{(rec.amount / 100000).toFixed(2)}L</td>
                            <td className="p-2.5 text-center font-mono">
                              {rec.days > 0 ? (
                                <span className="text-red-500 font-bold">{rec.days} days</span>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>
                            <td className="p-2.5 text-muted-foreground text-[11.5px]">{rec.stage}</td>
                            <td className="p-2.5 text-right">
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded font-mono border ${
                                rec.status.includes("Committed")
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : rec.status.includes("Notified") || rec.status.includes("Hold")
                                  ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                                  : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                              }`}>{rec.status}</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Collection Follow-Up Panel (35%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Auto-Collections Action Desk</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Chasing Invoice: {activeReceivable45.inv}</p>
                  </div>

                  <div className="space-y-3 flex-1 bg-muted/20 p-4 rounded-xl border text-[12.5px] leading-relaxed">
                    <div className="flex justify-between border-b pb-2">
                      <span className="text-muted-foreground">Outstanding Amount:</span>
                      <span className="font-bold text-foreground font-mono">₹{(activeReceivable45.amount / 100000).toFixed(2)}L</span>
                    </div>

                    <div className="space-y-2 pt-1.5 font-mono text-[11.5px] text-muted-foreground">
                      <div className="flex justify-between">
                        <span>• Due Date:</span>
                        <span className="text-foreground">{activeReceivable45.due}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Overdue:</span>
                        <span className="text-foreground">{activeReceivable45.days} days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Stage:</span>
                        <span className="text-foreground">{activeReceivable45.stage}</span>
                      </div>
                      <div className="flex justify-between pb-1.5">
                        <span>• GSTIN Verified:</span>
                        <span className="text-emerald-500 text-[10px] font-bold">{activeReceivable45.gstNo}</span>
                      </div>
                    </div>

                    {/* Credit Utilization Indicator */}
                    <div className="space-y-1.5 pt-2.5 border-t font-sans">
                      <div className="flex justify-between text-[11px] font-medium">
                        <span className="text-muted-foreground">Credit Utilisation:</span>
                        <span className="font-mono text-foreground">₹{(activeReceivable45.creditUtilized / 100000).toFixed(1)}L / ₹{(activeReceivable45.creditLimit / 100000).toFixed(1)}L Limit</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-primary h-full transition-all duration-300" 
                          style={{ width: `${Math.min(100, (activeReceivable45.creditUtilized / activeReceivable45.creditLimit) * 100)}%` }} 
                        />
                      </div>
                    </div>

                    {/* PTP Compliance Score */}
                    <div className="flex justify-between items-center pt-2.5 border-t font-sans">
                      <span className="text-muted-foreground text-[11px]">PTP Compliance Rating:</span>
                      <span className={`font-mono font-bold px-2 py-0.5 rounded text-[11px] border ${
                        activeReceivable45.ptpCompliance >= 80 
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" 
                          : activeReceivable45.ptpCompliance >= 60 
                          ? "bg-amber-500/10 text-amber-600 border-amber-500/20" 
                          : "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse"
                      }`}>
                        {activeReceivable45.ptpCompliance}% Reliability
                      </span>
                    </div>

                    {/* Outstanding Ageing Distribution Buckets */}
                    <div className="space-y-1 pt-2.5 border-t font-sans">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase block font-sans">Outstanding Ageing Distribution</label>
                      <div className="flex flex-wrap gap-1.5 mt-1 font-mono text-[10px]">
                        <span className={`px-2 py-1 rounded border ${activeReceivable45.days <= 0 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold" : "bg-muted text-muted-foreground border-transparent"}`}>
                          Current: ₹{activeReceivable45.days <= 0 ? (activeReceivable45.amount / 100000).toFixed(2) : "0"}L
                        </span>
                        <span className={`px-2 py-1 rounded border ${activeReceivable45.days > 0 && activeReceivable45.days <= 30 ? "bg-amber-500/10 text-amber-600 border-amber-500/20 font-bold" : "bg-muted text-muted-foreground border-transparent"}`}>
                          15-30d: ₹{activeReceivable45.days > 0 && activeReceivable45.days <= 30 ? (activeReceivable45.amount / 100000).toFixed(2) : "0"}L
                        </span>
                        <span className={`px-2 py-1 rounded border ${activeReceivable45.days > 30 ? "bg-red-500/10 text-red-600 border-red-500/20 font-bold animate-pulse" : "bg-muted text-muted-foreground border-transparent"}`}>
                          &gt;30d: ₹{activeReceivable45.days > 30 ? (activeReceivable45.amount / 100000).toFixed(2) : "0"}L
                        </span>
                      </div>
                    </div>

                    <div className="border-t pt-2.5 space-y-2 mt-2">
                      <label className="text-[10.5px] font-bold text-muted-foreground uppercase block font-sans">Register Commitment Date</label>
                      <input
                        type="date"
                        defaultValue="2025-01-28"
                        id="commitmentDateInput"
                        className="w-full h-8 px-2 border rounded bg-background text-[12px] focus:outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <button
                      onClick={() => handleSendReminder45(activeReceivable45.inv)}
                      className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[12.5px]"
                    >
                      Send WhatsApp Reminder Nudge
                    </button>
                    <button
                      onClick={() => {
                        const inputDate = (document.getElementById("commitmentDateInput") as HTMLInputElement)?.value || "28 Jan";
                        handleRegisterCommitment45(activeReceivable45.inv, inputDate);
                      }}
                      className="w-full h-10 rounded-xl border font-bold hover:bg-muted text-[12.5px]"
                    >
                      Register Payment Promise Date
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ========================================================================= */}
          {/* PAGE 7 — Sub-Module 4.6: Dealer Onboarding Workflow */}
          {/* ========================================================================= */}
          {s.id === "4-6" && (
            <div className="space-y-6">
              
              {/* Onboarding stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Applications (Month)</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">6 Applicants</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Active Pipeline</div>
                  <div className="text-[24px] font-bold mt-1 font-mono text-primary">3 Active</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm border-emerald-500/20">
                  <div className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider">Completed Onboarded</div>
                  <div className="text-[24px] font-bold text-emerald-600 mt-1 font-mono">2 Complete</div>
                </div>
                <div className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Rejected Applications</div>
                  <div className="text-[24px] font-bold mt-1 font-mono">1 Application</div>
                </div>
              </div>

              {/* Kanban & Detail view */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Kanban board (65%) */}
                <div className="xl:col-span-2 rounded-2xl bg-card border p-5 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Dealers Onboarding Pipeline</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Digital onboarding verification stages</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {["applied", "kyc", "credit"].map((stageName) => (
                      <div key={stageName} className="rounded-xl border bg-muted/10 p-3 min-h-[220px] flex flex-col space-y-2">
                        <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider border-b pb-1.5">
                          {stageName.toUpperCase()}
                        </div>
                        <div className="flex-1 space-y-2 overflow-y-auto">
                          {applicants46.filter(a => a.stage === stageName).map((app) => (
                            <div
                              key={app.name}
                              onClick={() => setSelectedAppId46(app.name)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                                selectedAppId46 === app.name
                                  ? "border-primary bg-primary/5 font-semibold"
                                  : "bg-card hover:border-primary/20"
                              }`}
                            >
                              <div className="text-[12.5px] font-bold text-foreground">{app.name}</div>
                              <div className="text-[10.5px] text-muted-foreground mt-0.5">{app.city} • {app.date}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applicant details (35%) */}
                <div className="rounded-2xl bg-card border p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-[14.5px] font-bold tracking-tight">Applicant Dossier</h4>
                    <p className="text-[12px] text-muted-foreground mt-0.5">{activeApp46.name} ({activeApp46.city})</p>
                  </div>

                  <div className="space-y-3 bg-muted/20 p-4 rounded-xl border text-[12px] leading-relaxed">
                    <div className="font-bold border-b pb-1.5 uppercase text-primary text-[10.5px]">KYC Auto-verification</div>
                    <div className="space-y-2 pt-1 font-mono text-[11px]">
                      <div className="flex justify-between">
                        <span>• GSTN active:</span>
                        <span className="text-emerald-600 font-bold">✓ PASS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• PAN-Aadhaar verification:</span>
                        <span className="text-emerald-600 font-bold">✓ PASS</span>
                      </div>
                      <div className="flex justify-between">
                        <span>• Bank account penny drop:</span>
                        <span className="text-emerald-600 font-bold">✓ PASS</span>
                      </div>
                    </div>

                    <div className="font-bold border-b pb-1.5 uppercase text-primary text-[10.5px] mt-3">Document Checklist</div>
                    <div className="space-y-1 pt-1 text-muted-foreground">
                      <div>✓ GST Registration Certificate</div>
                      <div>✓ PAN card (business)</div>
                      <div>✓ Cancelled cheque scan</div>
                    </div>
                  </div>

                  <div className="border-t pt-3 space-y-2">
                    <button
                      onClick={() => handleApproveCredit46(activeApp46.name, 8)}
                      className="w-full h-10 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 text-[12.5px]"
                    >
                      Approve Credit Limit (₹8L)
                    </button>
                    <button
                      onClick={() => {
                        toast.success(`Welcome Kit WhatsApp packet dispatched to ${activeApp46.name}! Portal login credentials active.`);
                        handleMoveKanban46(activeApp46.name, "complete");
                      }}
                      className="w-full h-10 rounded-xl border font-bold hover:bg-muted text-[12.5px]"
                    >
                      Trigger Welcome Pack Setup
                    </button>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      ) : isM6 ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* MODULE 6: AI-POWERED MANAGEMENT DASHBOARDS */}
          {/* ========================================================================= */}

          {/* SUBMODULE 6.2: Production Operations Intelligence Dashboard */}
          {s.id === "6-2" && (
            <div className="space-y-6">
              {/* Header Telemetry summary strip */}
              <div className="rounded-2xl border px-5 py-3 bg-card flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
                <span className="font-semibold text-foreground">OEE <span className="font-mono text-primary ml-1">79%</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Lines Online <span className="font-mono text-primary ml-1">5/6</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Output <span className="font-mono text-primary ml-1">1,285/hr</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Shift Total <span className="font-mono text-primary ml-1">6,240</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Variance <span className="font-mono text-destructive ml-1">-11.9%</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Handover <span className={`font-mono ml-1 ${m62HandoverStatus === "acknowledged" ? "text-[#1D9E75]" : "text-amber-500"}`}>{m62HandoverStatus === "acknowledged" ? "✓ Accepted" : "⚠️ Pending"}</span></span>
              </div>

              {/* Operations Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                
                {/* Left Side: Line Performance Grid Table (60% width) */}
                <div className="xl:col-span-3 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Line-by-Line Production Telemetry</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Select a line to view detailed OEE component breakdown</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-card overflow-hidden shadow-sm">
                    <table className="w-full text-left text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono">
                          <th className="p-4.5">Line</th>
                          <th className="p-4.5 text-center">Status</th>
                          <th className="p-4.5 text-right">Hr Output</th>
                          <th className="p-4.5 text-right">Shift Cum.</th>
                          <th className="p-4.5 text-right">Composite OEE</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m62LineGridData.map(line => {
                          const isSelected = m62SelectedLine === line.name;
                          return (
                            <tr
                              key={line.id}
                              onClick={() => setM62SelectedLine(line.name)}
                              className={`hover:bg-muted/30 cursor-pointer transition-colors ${isSelected ? "bg-primary/5 font-semibold" : ""}`}
                            >
                              <td className="p-4.5 text-foreground font-bold">{line.name}</td>
                              <td className="p-4.5 text-center">
                                <span className={`inline-block w-2.5 h-2.5 rounded-full shrink-0 mr-1.5 ${
                                  line.status === "Below Target" ? "bg-red-500 animate-pulse" :
                                  line.status === "Changeover" ? "bg-amber-500" :
                                  line.status === "Ahead" ? "bg-green-500" : "bg-blue-500"
                                }`} />
                                {line.status}
                              </td>
                              <td className="p-4.5 text-right">{line.actual} <span className="text-[11px] text-muted-foreground">/ {Math.floor(line.target / 8)}</span></td>
                              <td className="p-4.5 text-right">{line.actual * 4} <span className="text-[11px] text-muted-foreground">/ {line.target}</span></td>
                              <td className={`p-4.5 text-right font-extrabold ${line.oee >= 80 ? "text-[#1D9E75]" : line.oee >= 70 ? "text-[#E8A838]" : "text-[#D85A30]"}`}>
                                {line.oee}%
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Side: OEE Breakdown & Drill down panel (40% width) */}
                <div className="xl:col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[15px] font-bold text-foreground">Detailed Diagnostic Panel</h3>
                    <span className="text-[12px] font-bold text-primary font-mono">{m62SelectedLine}</span>
                  </div>

                  {m62OeeComponents[m62SelectedLine] ? (
                    <div className="rounded-2xl border bg-card p-5 space-y-5 shadow-sm">
                      <div className="flex items-center justify-between border-b pb-3">
                        <div>
                          <div className="text-[14px] font-bold text-foreground">{m62SelectedLine} OEE composite</div>
                          <span className="text-[11px] text-muted-foreground font-mono">World Class OEE Target: 85%</span>
                        </div>
                        <div className={`text-2xl font-black font-mono ${
                          m62OeeComponents[m62SelectedLine].composite >= 80 ? "text-[#1D9E75]" :
                          m62OeeComponents[m62SelectedLine].composite >= 70 ? "text-warning" : "text-danger"
                        }`}>
                          {m62OeeComponents[m62SelectedLine].composite}%
                        </div>
                      </div>

                      {/* Concentric-like simple linear OEE indicators */}
                      <div className="space-y-3.5">
                        <div className="space-y-1">
                          <div className="flex justify-between text-[12px] font-mono">
                            <span className="text-muted-foreground">Availability (Uptime)</span>
                            <span className="font-bold text-foreground">{m62OeeComponents[m62SelectedLine].avail}% <span className="text-muted-foreground font-normal">/ {m62OeeComponents[m62SelectedLine].availTarget}%</span></span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${m62OeeComponents[m62SelectedLine].avail}%` }} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[12px] font-mono">
                            <span className="text-muted-foreground">Performance (Rated Speed)</span>
                            <span className="font-bold text-foreground">{m62OeeComponents[m62SelectedLine].perf}% <span className="text-muted-foreground font-normal">/ {m62OeeComponents[m62SelectedLine].perfTarget}%</span></span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-[#E8A838] rounded-full transition-all" style={{ width: `${m62OeeComponents[m62SelectedLine].perf}%` }} />
                          </div>
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between text-[12px] font-mono">
                            <span className="text-muted-foreground">Quality Rate (Good Yield)</span>
                            <span className="font-bold text-foreground">{m62OeeComponents[m62SelectedLine].qual}% <span className="text-muted-foreground font-normal">/ {m62OeeComponents[m62SelectedLine].qualTarget}%</span></span>
                          </div>
                          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-[#1D9E75] rounded-full transition-all" style={{ width: `${m62OeeComponents[m62SelectedLine].qual}%` }} />
                          </div>
                        </div>
                      </div>

                      {/* Root Cause Alerts */}
                      <div className="space-y-2 border-t pt-4">
                        <div className="text-[11.5px] font-bold text-muted-foreground uppercase tracking-wider">Root Cause Flags</div>
                        <ul className="space-y-2">
                          {m62OeeComponents[m62SelectedLine].notes.map((note, index) => (
                            <li key={index} className="text-[12px] text-foreground leading-normal flex items-start gap-1.5">
                              <span className="text-[#D85A30] shrink-0 font-bold">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Ticket link if any */}
                      {m62OeeComponents[m62SelectedLine].ticket && (
                        <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-xl space-y-1 text-[11.5px] font-mono">
                          <div className="font-bold text-[#D85A30] flex items-center gap-1.5">
                            <AlertCircle className="h-3.5 w-3.5" /> Maintenance Ticket #{m62OeeComponents[m62SelectedLine].ticket?.id}
                          </div>
                          <div className="text-muted-foreground">System: {m62OeeComponents[m62SelectedLine].ticket?.desc}</div>
                          <div className="flex justify-between pt-1">
                            <span>Status: <strong className="text-amber-500">{m62OeeComponents[m62SelectedLine].ticket?.status}</strong></span>
                            <span>ETA: {m62OeeComponents[m62SelectedLine].ticket?.eta}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex justify-end gap-2 border-t pt-3">
                        <button
                          onClick={handleSendAlertToProdHead}
                          className="inline-flex items-center gap-1.5 h-8.5 px-3.5 rounded-lg border text-[11.5px] font-bold hover:bg-muted transition-all"
                        >
                          <Send className="h-3.5 w-3.5" /> Escalate to Operations Head
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-20 border rounded-2xl bg-card">
                      <HelpCircle className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-[12.5px] text-muted-foreground">Select a line to view diagnostic telemetry.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom: Downtime Pareto Analysis & Shift Handover */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Downtime Pareto */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Downtime Pareto Analysis</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Top 6 downtime categories by cumulative hours lost this month</p>
                  </div>

                  <div className="space-y-2 font-mono text-[12px]">
                    {m62DowntimePareto.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="text-muted-foreground w-28 truncate font-sans text-[11.5px]">{item.name}</span>
                        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-[#D85A30] rounded-full" style={{ width: `${(item.hours / 24) * 100}%` }} />
                        </div>
                        <span className="text-foreground font-bold w-14 text-right">{item.hours} hrs</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-[11.5px] text-muted-foreground text-center font-mono pt-1">
                    Unplanned Tooling & Breakdowns account for <strong className="text-foreground">60.0%</strong> of total monthly capacity leak.
                  </div>
                </div>

                {/* Shift Handover Report */}
                <div className="rounded-2xl border bg-card p-5 flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[15px] font-bold text-foreground">Automated Shift Handover Log</h3>
                        <p className="text-[11.5px] text-muted-foreground mt-0.5">Morning shift → Afternoon shift • 2:00 PM</p>
                      </div>
                      <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        m62HandoverStatus === "acknowledged" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500 animate-pulse"
                      }`}>
                        {m62HandoverStatus === "acknowledged" ? "Accepted" : "Needs Sign-off"}
                      </span>
                    </div>

                    <div className="bg-muted/30 border p-3 rounded-xl space-y-2 text-[12.5px] font-mono max-h-[145px] overflow-y-auto leading-normal">
                      <div className="text-foreground font-bold">Shift Summary Telemetry:</div>
                      <div>• Output: 7,640 units vs 7,200 plan (106.1% plan adherence).</div>
                      <div>• Plant efficiency benchmark: Assembly Line 2 leading (89% OEE).</div>
                      <div>• Outages: CNC Line 1 down 38 min for broken tooling inserts (see ticket MT-441).</div>
                      <div>• Watchlist items: CNC coolant pressure requires verification, and high priority order SO-4822 (Tata AutoComp) must complete machining.</div>
                      <div className="text-[11.5px] text-muted-foreground pt-1 border-t">Outgoing Production Lead: Mahesh Kapoor</div>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleAcknowledgeHandover}
                      disabled={m62HandoverStatus === "acknowledged"}
                      className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-primary text-primary-foreground text-[12px] font-bold hover:opacity-90 transition-all disabled:opacity-50"
                    >
                      <CheckCircle2 className="h-4 w-4" /> Acknowledge & Accept Handover
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 6.3: Inventory & Warehouse Intelligence Dashboard */}
          {s.id === "6-3" && (
            <div className="space-y-6">
              {/* Header summary strip */}
              <div className="rounded-2xl border px-5 py-3 bg-card flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
                <span className="font-semibold text-foreground">SKUs <span className="font-mono text-primary ml-1">1,847</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Normal <span className="font-mono text-[#1D9E75] ml-1">7</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Reorder <span className="font-mono text-amber-500 ml-1">3</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Critical <span className="font-mono text-destructive ml-1">2</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Stock Out <span className="font-mono text-destructive ml-1">1</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Value <span className="font-mono text-primary ml-1">₹1.34 Cr</span></span>
              </div>

              {/* Filtering Controls */}
              <div className="rounded-2xl border bg-card p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm">
                <div className="flex flex-wrap gap-2 shrink-0">
                  {["All", "Raw Material", "WIP", "Finished Goods"].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setM63CategoryFilter(cat)}
                      className={`h-8 px-3 rounded-lg text-[12.5px] font-semibold transition-all ${
                        m63CategoryFilter === cat ? "bg-primary text-primary-foreground" : "border hover:bg-muted"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:w-60">
                    <input
                      type="text"
                      placeholder="Search material code/name..."
                      value={m63SearchQuery}
                      onChange={(e) => setM63SearchQuery(e.target.value)}
                      className="w-full h-8.5 pl-3 pr-3 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground font-mono"
                    />
                  </div>

                  <label className="flex items-center gap-2 cursor-pointer text-[12.5px] font-semibold select-none">
                    <input
                      type="checkbox"
                      checked={m63SlowMovingOnly}
                      onChange={(e) => setM63SlowMovingOnly(e.target.checked)}
                      className="rounded border-muted text-primary focus:ring-0 shrink-0 h-4 w-4 bg-background"
                    />
                    Slow-Moving Only
                  </label>

                  <button
                    onClick={handleRaiseAllUrgent63}
                    className="inline-flex items-center gap-1.5 h-8.5 px-3.5 rounded-lg bg-red-500 text-white text-[12px] font-bold hover:bg-red-600 transition-all shrink-0 font-sans"
                  >
                    <AlertTriangle className="h-3.5 w-3.5 animate-pulse" /> Raise All Urgent POs
                  </button>
                </div>
              </div>

              {/* Inventory Table & Drill Down Area */}
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                
                {/* Inventory Table (67% width = 2/3 cols) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">ERP Inventory Position Ledger</h3>
                  
                  <div className="rounded-2xl border bg-card overflow-hidden shadow-sm">
                    <table className="w-full text-left text-[12.5px]">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[11px] font-bold uppercase tracking-wider text-muted-foreground font-mono">
                          <th className="p-4">SKU / Description</th>
                          <th className="p-4 text-right">Available Stock</th>
                          <th className="p-4 text-center">Status</th>
                          <th className="p-4 text-right">Days Cover</th>
                          <th className="p-4 text-right">Value (₹)</th>
                          <th className="p-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m63Items
                          .filter(item => {
                            if (m63CategoryFilter !== "All" && item.category !== m63CategoryFilter) return false;
                            if (m63SlowMovingOnly && !item.slowMoving) return false;
                            if (m63SearchQuery && !item.code.toLowerCase().includes(m63SearchQuery.toLowerCase()) && !item.name.toLowerCase().includes(m63SearchQuery.toLowerCase())) return false;
                            return true;
                          })
                          .map(item => {
                            const isCritical = item.status === "Critical" || item.status === "Stock Out";
                            const isReorder = item.status === "Reorder Due";
                            
                            return (
                              <tr key={item.id} className="hover:bg-muted/30 transition-colors">
                                <td className="p-4">
                                  <div className="font-bold text-foreground">{item.code}</div>
                                  <div className="text-[11.5px] text-muted-foreground font-sans mt-0.5">{item.name}</div>
                                </td>
                                <td className="p-4 text-right font-bold text-foreground">
                                  {item.stock.toLocaleString()} <span className="text-[11px] font-normal text-muted-foreground">{item.unit}</span>
                                </td>
                                <td className="p-4 text-center">
                                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[9.5px] font-black uppercase tracking-wider ${
                                    item.status === "Stock Out" ? "bg-red-500/15 text-red-500 animate-pulse" :
                                    item.status === "Critical" ? "bg-red-500/10 text-red-400" :
                                    item.status === "Reorder Due" ? "bg-amber-500/10 text-amber-500" :
                                    item.status === "Surplus" ? "bg-muted text-muted-foreground" : "bg-green-500/10 text-green-500"
                                  }`}>
                                    {item.status}
                                  </span>
                                </td>
                                <td className={`p-4 text-right font-bold ${isCritical ? "text-danger" : isReorder ? "text-warning" : "text-foreground"}`}>
                                  {item.daysCover} days
                                </td>
                                <td className="p-4 text-right text-foreground font-bold">₹{item.value.toLocaleString()}</td>
                                <td className="p-4 text-center">
                                  {item.actionTaken ? (
                                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-1 rounded">
                                      <Check className="h-3 w-3" /> PO Raised
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => handleRaisePO63(item.id, item.code)}
                                      disabled={!isCritical && !isReorder}
                                      className="inline-flex items-center h-7 px-2.5 rounded bg-primary text-primary-foreground text-[11px] font-bold hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none transition-all"
                                    >
                                      Raise PO
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Side: WIP & FG Valuation panels (33% width) */}
                <div className="space-y-6">
                  {/* WIP Summary */}
                  <div className="rounded-2xl border bg-card p-5 space-y-3.5 shadow-sm">
                    <div>
                      <h3 className="text-[14.5px] font-bold text-foreground">WIP Stage Breakdown</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Valuation of inventory in production queue</p>
                    </div>

                    <div className="space-y-2.5 font-mono">
                      {wipStages.map((stage, idx) => (
                        <div key={idx} className="flex justify-between items-center text-[12px] border-b pb-1.5">
                          <span className="text-muted-foreground font-sans truncate pr-2">{stage.stage}</span>
                          <span className="shrink-0 text-foreground font-semibold font-mono">
                            {stage.units} units <span className="text-[10px] text-muted-foreground font-normal">({stage.age})</span>
                          </span>
                          <span className="shrink-0 text-foreground font-extrabold pl-2 text-right">
                            ₹{(stage.value / 100000).toFixed(1)} Lakhs
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Finished Goods Position */}
                  <div className="rounded-2xl border bg-card p-5 space-y-3.5 shadow-sm">
                    <div>
                      <h3 className="text-[14.5px] font-bold text-foreground">Finished Goods Shortfalls</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Committed sales orders vs stock on hand</p>
                    </div>

                    <div className="space-y-2.5 font-mono">
                      {fgPosition.map((fg, idx) => {
                        const isShortfall = fg.free < 0;
                        return (
                          <div key={idx} className="flex justify-between items-center text-[12.5px] border-b pb-1.5">
                            <span className="text-foreground font-bold">{fg.code}</span>
                            <span className="text-muted-foreground truncate font-sans px-2">FG: {fg.stock}</span>
                            <span className={`shrink-0 font-extrabold px-1.5 py-0.25 rounded text-[11.5px] ${
                              isShortfall ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                            }`}>
                              {isShortfall ? `Short: ${Math.abs(fg.free)}` : `Free: ${fg.free}`}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 6.4: Sales & Revenue Intelligence Dashboard */}
          {s.id === "6-4" && (
            <div className="space-y-6">
              {/* Header summary strip */}
              <div className="rounded-2xl border px-5 py-3 bg-card flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
                <span className="font-semibold text-foreground">Orders <span className="font-mono text-primary ml-1">₹4.20 Cr</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Revenue <span className="font-mono text-primary ml-1">₹3.80 Cr</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Backlog <span className="font-mono text-[#1D9E75] ml-1">₹8.60 Cr</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Accounts <span className="font-mono text-primary ml-1">14</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">Avg Ticket <span className="font-mono text-primary ml-1">₹15.0L</span></span>
                <span className="text-muted-foreground">•</span>
                <span className="font-semibold text-foreground">OTD <span className="font-mono text-amber-500 ml-1">87%</span></span>
              </div>

              {/* Tab Selector */}
              <div className="rounded-2xl border bg-card p-2 flex gap-1.5 shadow-sm max-w-md">
                {[
                  { id: "overview", label: "YoY Revenue" },
                  { id: "mix", label: "Product Category Mix" },
                  { id: "pipeline", label: "CRM Sales Pipeline" }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setM64ActiveTab(t.id as any)}
                    className={`flex-1 h-8 rounded-lg text-[12.5px] font-bold transition-all ${
                      m64ActiveTab === t.id ? "bg-primary text-primary-foreground" : "hover:bg-muted text-muted-foreground"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Dashboard Tabs Rendering */}
              {m64ActiveTab === "overview" && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* YoY Revenue Trend */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Year-over-Year Invoiced Growth</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">FY 2024-25 vs FY 2023-24 Monthly Invoiced Comparison (₹ Crores)</p>
                    </div>

                    <div className="rounded-xl border overflow-hidden">
                      <table className="w-full text-left text-[12px] font-mono">
                        <thead>
                          <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase">
                            <th className="p-2.5">Month</th>
                            <th className="p-2.5 text-right">FY 24-25</th>
                            <th className="p-2.5 text-right">FY 23-24</th>
                            <th className="p-2.5 text-right">Growth</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {[
                            { month: "Apr", current: 2.4, prior: 2.1 },
                            { month: "May", current: 2.8, prior: 2.4 },
                            { month: "Jun", current: 2.6, prior: 2.2 },
                            { month: "Jul", current: 3.1, prior: 2.7 },
                            { month: "Aug", current: 2.9, prior: 2.5 },
                            { month: "Sep", current: 3.4, prior: 2.9 },
                            { month: "Oct", current: 3.8, prior: 3.1 },
                            { month: "Nov", current: 3.6, prior: 3.0 },
                            { month: "Dec", current: 3.2, prior: 2.8 },
                            { month: "Jan", current: 3.8, prior: 3.3 },
                          ].map((r, i) => {
                            const growth = (((r.current - r.prior) / r.prior) * 100).toFixed(1);
                            return (
                              <tr key={i} className="hover:bg-muted/30">
                                <td className="p-2.5 font-bold text-foreground">{r.month}</td>
                                <td className="p-2.5 text-right text-primary font-bold">₹{r.current} Cr</td>
                                <td className="p-2.5 text-right text-muted-foreground">₹{r.prior} Cr</td>
                                <td className="p-2.5 text-right text-[#1D9E75] font-extrabold">+{growth}%</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Customer Concentration Analysis */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Customer Concentration & YoY Risk</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Top 5 Gujarat-based customer accounts by MTD invoiced volume (₹ Lakhs)</p>
                    </div>

                    <div className="rounded-xl border overflow-hidden">
                      <table className="w-full text-left text-[12.5px] font-mono">
                        <thead>
                          <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground font-mono">
                            <th className="p-3">Customer Account</th>
                            <th className="p-3 text-right">MTD Rev (₹L)</th>
                            <th className="p-3 text-right">Share (%)</th>
                            <th className="p-3 text-center">YoY</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y font-mono">
                          <tr>
                            <td className="p-3 font-bold text-foreground">Tata AutoComp Systems</td>
                            <td className="p-3 text-right">84</td>
                            <td className="p-3 text-right">22.1%</td>
                            <td className="p-3 text-center text-[#1D9E75] font-bold">+18% ↑</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-foreground">Bajaj Auto Components</td>
                            <td className="p-3 text-right">58</td>
                            <td className="p-3 text-right">15.3%</td>
                            <td className="p-3 text-center text-[#1D9E75] font-bold">+24% ↑</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-foreground">Maruti Ancillaries Gujarat</td>
                            <td className="p-3 text-right">47</td>
                            <td className="p-3 text-right">12.4%</td>
                            <td className="p-3 text-center text-[#1D9E75] font-bold">+9% ↑</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-foreground">Kapoor Industries Pvt. Ltd.</td>
                            <td className="p-3 text-right">38</td>
                            <td className="p-3 text-right">10.0%</td>
                            <td className="p-3 text-center text-foreground font-bold">+5% —</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-bold text-foreground">L&T Construction Materials</td>
                            <td className="p-3 text-right">29</td>
                            <td className="p-3 text-right">7.6%</td>
                            <td className="p-3 text-center text-[#1D9E75] font-bold">+31% ↑</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-[12px] flex items-start gap-2 text-foreground">
                      <AlertTriangle className="h-4 w-4 text-[#D85A30] shrink-0 mt-0.5" />
                      <div className="leading-snug font-mono">
                        <strong className="text-[#D85A30]">Concentration risk:</strong> Top 2 accounts constitute <strong className="text-foreground">37.4%</strong> of MTD revenue.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {m64ActiveTab === "mix" && (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  {/* Category Mix pie chart */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Product Category Mix</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Month-to-date revenue share by product group</p>
                    </div>

                    <div className="h-[220px] flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              { name: "CRCA Sheet Components", value: 164, color: "#2E86AB" },
                              { name: "Precision Castings", value: 98, color: "#1D9E75" },
                              { name: "Stamped Parts", value: 76, color: "#E8A838" },
                              { name: "Custom Fabrication", value: 42, color: "#8E44AD" }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            <Cell fill="#2E86AB" />
                            <Cell fill="#1D9E75" />
                            <Cell fill="#E8A838" />
                            <Cell fill="#8E44AD" />
                          </Pie>
                          <Tooltip formatter={(v) => `₹${v} Lakhs`} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  {/* Profitability Mix Ledger */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Product Profitability Index</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">BOM cost margins by product category</p>
                    </div>

                    <div className="space-y-3 font-mono text-[12px]">
                      <div className="flex justify-between items-center border-b pb-1.5 font-bold text-muted-foreground uppercase text-[10.5px]">
                        <span>Category</span>
                        <span>MTD Revenue</span>
                        <span>Margin (%)</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-1.5">
                        <span className="text-foreground font-bold">Custom Fabrication</span>
                        <span>₹42L</span>
                        <span className="text-[#1D9E75] font-extrabold">28.7%</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-1.5">
                        <span className="text-foreground font-bold">Precision Castings (PC)</span>
                        <span>₹98L</span>
                        <span className="text-[#1D9E75] font-extrabold">24.1%</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-1.5">
                        <span className="text-foreground font-bold">CRCA Sheets (MS)</span>
                        <span>₹164L</span>
                        <span className="text-amber-500 font-extrabold">18.2%</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-1.5">
                        <span className="text-foreground font-bold">Stamped Parts (SP)</span>
                        <span>₹76L</span>
                        <span className="text-amber-500 font-extrabold">15.4%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {m64ActiveTab === "pipeline" && (
                <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                  {/* Left panel: Opportunity list & form (3/5 width) */}
                  <div className="xl:col-span-3 space-y-4">
                    <h3 className="text-[15px] font-bold text-foreground">Open Sales Opportunities (CRM)</h3>
                    
                    <div className="rounded-2xl border bg-card overflow-hidden">
                      <table className="w-full text-left text-[12.5px] font-mono">
                        <thead>
                          <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground">
                            <th className="p-3">Opportunity</th>
                            <th className="p-3">Customer</th>
                            <th className="p-3 text-right">Gross (₹L)</th>
                            <th className="p-3 text-center">Stage</th>
                            <th className="p-3 text-right">Weighted</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {m64Opportunities.map(opp => (
                            <tr key={opp.id} className="hover:bg-muted/30">
                              <td className="p-3 font-bold text-foreground">{opp.name}</td>
                              <td className="p-3 text-muted-foreground">{opp.customer}</td>
                              <td className="p-3 text-right text-foreground font-bold">₹{opp.value}L</td>
                              <td className="p-3 text-center">
                                <span className="inline-flex px-1.5 py-0.25 rounded text-[10px] font-extrabold bg-[#2E86AB]/10 text-[#2E86AB]">
                                  {opp.stage} ({opp.prob}%)
                                </span>
                              </td>
                              <td className="p-3 text-right text-[#1D9E75] font-extrabold">₹{Math.floor(opp.value * opp.prob / 100)}L</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* New opportunity form */}
                    <form onSubmit={handleCreateOpportunity64} className="rounded-2xl border bg-card p-4 space-y-3.5">
                      <div className="text-[13px] font-bold text-foreground">Add New CRM Opportunity</div>
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="Opportunity Name"
                          value={newOppName}
                          onChange={(e) => setNewOppName(e.target.value)}
                          className="h-8.5 px-3 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground"
                        />
                        <input
                          type="text"
                          placeholder="Customer Account"
                          value={newOppCustomer}
                          onChange={(e) => setNewOppCustomer(e.target.value)}
                          className="h-8.5 px-3 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground"
                        />
                        <input
                          type="number"
                          placeholder="Gross Value (₹ Lakhs)"
                          value={newOppValue}
                          onChange={(e) => setNewOppValue(e.target.value)}
                          className="h-8.5 px-3 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground"
                        />
                        <div className="flex gap-2">
                          <select
                            value={newOppStage}
                            onChange={(e) => setNewOppStage(e.target.value)}
                            className="h-8.5 px-2 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground flex-1"
                          >
                            <option value="Negotiation">Negotiation</option>
                            <option value="Proposal sent">Proposal sent</option>
                            <option value="Qualified">Qualified</option>
                            <option value="Demo done">Demo done</option>
                            <option value="RFQ stage">RFQ stage</option>
                          </select>
                          <input
                            type="number"
                            placeholder="Prob (%)"
                            value={newOppProb}
                            onChange={(e) => setNewOppProb(e.target.value)}
                            className="h-8.5 px-2 text-[12px] bg-background border rounded-lg focus:outline-none focus:border-muted-foreground w-16"
                          />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-1 h-8 px-4 rounded-lg bg-primary text-primary-foreground text-[12px] font-bold hover:opacity-90 transition-all"
                        >
                          <Plus className="h-3.5 w-3.5" /> Save Opportunity
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Right panel: Weighted pipeline forecast horizons (2/5 width) */}
                  <div className="xl:col-span-2 space-y-4">
                    <h3 className="text-[15px] font-bold text-foreground">Pipeline weighted forecast horizons</h3>
                    
                    <div className="rounded-2xl border bg-card p-5 space-y-4">
                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <span className="text-[11px] text-muted-foreground font-mono">30-DAY FORECAST HORIZON</span>
                          <div className="text-[15px] font-black text-foreground font-mono">₹4.80 Cr</div>
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-0.5 rounded">Avg 75% Prob</span>
                      </div>

                      <div className="flex justify-between items-center border-b pb-2">
                        <div>
                          <span className="text-[11px] text-muted-foreground font-mono">60-DAY FORECAST HORIZON</span>
                          <div className="text-[15px] font-black text-foreground font-mono">₹9.10 Cr</div>
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-0.5 rounded">Avg 71% Prob</span>
                      </div>

                      <div className="flex justify-between items-center pb-2">
                        <div>
                          <span className="text-[11px] text-muted-foreground font-mono">90-DAY FORECAST HORIZON</span>
                          <div className="text-[15px] font-black text-foreground font-mono">₹13.40 Cr</div>
                        </div>
                        <span className="text-[10.5px] font-extrabold text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-0.5 rounded">Avg 69% Prob</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SUBMODULE 6.5: Cost Variance & Financial KPI Dashboard */}
          {s.id === "6-5" && (
            <div className="space-y-6">
              {/* Header KPI Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                <KpiCard label="MTD Invoiced Rev" value="₹3.80 Cr" delta="FY24-25 Daily sync" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="COGS MTD" value="₹2.96 Cr" delta="Raw materials: 61.4%" tone="warning" sparkline={<SparkLine />} />
                <KpiCard label="Gross Margin %" value="22.1%" delta="Target margin: 25.0%" tone="warning" sparkline={<SparkLine />} />
                <KpiCard label="Estimated EBITDA" value="₹46.0 Lakhs" delta="Gap to target: -₹21.5L" tone="danger" sparkline={<SparkLine />} />
                <KpiCard label="Cash Balance" value="₹1.40 Cr" delta="Tally prime daily sync" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Overdue Receivables" value="₹42.6 Lakhs" delta="Over 60 days: ₹18.4L" tone="danger" sparkline={<SparkLine />} />
              </div>

              {/* Budget vs Actual & Waterfall layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Cost Head Budget vs Actual (side-by-side Recharts BarChart) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Monthly Cost Head Variance</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Budgeted vs Actual Cost of Goods (₹ Lakhs)</p>
                    </div>
                    <button
                      onClick={handleSendToCFO65}
                      className="inline-flex items-center gap-1 h-7.5 px-3 rounded-lg border text-[11px] font-bold hover:bg-muted transition-all"
                    >
                      <Send className="h-3.5 w-3.5" /> Send CFO Summary
                    </button>
                  </div>

                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={m65CostHeads} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                        <XAxis dataKey="head" tick={{ fill: "#888", fontSize: 9 }} />
                        <YAxis tick={{ fill: "#888", fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                          labelStyle={{ color: "#fff", fontWeight: "bold" }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="budget" name="Budget" fill="#888" radius={[3, 3, 0, 0]} />
                        <Bar dataKey="actual" name="Actual" fill="#D85A30" radius={[3, 3, 0, 0]} />
                        <Legend wrapperStyle={{ fontSize: 11 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* EBITDA Waterfall build */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">EBITDA Bridge Build (Waterfall)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">January 2025 MTD operational EBITDA build (₹ Lakhs)</p>
                  </div>

                  <div className="h-[240px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={m65EbitdaWaterfall} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                        <XAxis dataKey="name" tick={{ fill: "#888", fontSize: 9 }} />
                        <YAxis tick={{ fill: "#888", fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                          labelStyle={{ color: "#fff", fontWeight: "bold" }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="value" name="Value" radius={[4, 4, 0, 0]}>
                          {m65EbitdaWaterfall.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Bottom: Material Price Variance Ledger */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Material Variances Table */}
                <div className="rounded-2xl border bg-card p-5 space-y-3.5">
                  <div>
                    <h3 className="text-[14.5px] font-bold text-foreground">Material Purchase Rate Variances</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Standard Rate vs Actual Invoiced Rate from ERP</p>
                  </div>

                  <div className="rounded-xl border overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground font-mono">
                          <th className="p-3">Material Category</th>
                          <th className="p-3 text-right">Std Rate</th>
                          <th className="p-3 text-right">Act Rate</th>
                          <th className="p-3 text-right">Variance</th>
                          <th className="p-3 text-right">Impact (₹L)</th>
                          <th className="p-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m65MaterialVariances.map(mv => {
                          const isAdverse = mv.variance > 0;
                          return (
                            <tr key={mv.id} className="hover:bg-muted/30">
                              <td className="p-3 font-bold text-foreground">{mv.material}</td>
                              <td className="p-3 text-right">₹{mv.standard}</td>
                              <td className="p-3 text-right">₹{mv.actual}</td>
                              <td className={`p-3 text-right font-extrabold ${isAdverse ? "text-danger" : "text-success"}`}>
                                {mv.variance > 0 ? `+${mv.variance}` : mv.variance}%
                              </td>
                              <td className={`p-3 text-right font-black ${isAdverse ? "text-danger" : "text-success"}`}>
                                {isAdverse ? `+₹${mv.impact}L` : `-₹${Math.abs(mv.impact)}L`}
                              </td>
                              <td className="p-3 text-center">
                                {mv.reviewStarted ? (
                                  <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] bg-amber-500/10 text-amber-500 font-extrabold uppercase">
                                    Negotiating
                                  </span>
                                ) : (
                                  <button
                                    onClick={() => handleReviewRate65(mv.id, mv.material)}
                                    className="inline-flex h-6.5 px-2 rounded bg-primary text-primary-foreground text-[10px] font-bold hover:opacity-90"
                                  >
                                    Review
                                  </button>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Receivables Aging Buckets */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[14.5px] font-bold text-foreground">Receivables Outstanding Aging (Tally Sync)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Outstanding invoice collections status aging buckets</p>
                  </div>

                  <div className="grid grid-cols-4 gap-3 text-center font-mono">
                    <div className="rounded-xl border p-3 bg-[#1D9E75]/5">
                      <div className="text-[10px] text-muted-foreground font-sans uppercase">0-30 Days</div>
                      <div className="text-[15px] font-black text-foreground mt-1">₹42.0L</div>
                      <span className="text-[9px] font-bold text-success">Low Risk</span>
                    </div>

                    <div className="rounded-xl border p-3 bg-amber-500/5">
                      <div className="text-[10px] text-muted-foreground font-sans uppercase">31-60 Days</div>
                      <div className="text-[15px] font-black text-foreground mt-1">₹24.2L</div>
                      <span className="text-[9px] font-bold text-warning">Monitor</span>
                    </div>

                    <div className="rounded-xl border p-3 bg-red-500/5">
                      <div className="text-[10px] text-muted-foreground font-sans uppercase">61-90 Days</div>
                      <div className="text-[15px] font-black text-foreground mt-1">₹11.2L</div>
                      <span className="text-[9px] font-bold text-danger">Action Needed</span>
                    </div>

                    <div className="rounded-xl border p-3 bg-red-500/10">
                      <div className="text-[10px] text-muted-foreground font-sans uppercase">&gt;90 Days</div>
                      <div className="text-[15px] font-black text-foreground mt-1">₹7.2L</div>
                      <span className="text-[9px] font-bold text-red-500 animate-pulse">Escalate</span>
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground leading-normal font-mono border-t pt-3">
                    Overdue collections exceeding 60 days currently constitute <strong className="text-foreground">₹18.4 Lakhs</strong> — requiring direct legal notification.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 6.6: People & Productivity Intelligence Dashboard */}
          {s.id === "6-6" && (
            <div className="space-y-6">
              {/* Header KPI Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                <KpiCard label="Attendance Today" value="90.9%" delta="291 present today" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="OT vs Budget MTD" value="120%" delta="384 hrs used / 320 budget" tone="danger" sparkline={<SparkLine />} />
                <KpiCard label="Direct labor productivity" value="92.3%" delta="Benchmark: 48 units/shift" tone="warning" sparkline={<SparkLine />} />
                <KpiCard label="Training Overdue" value="7 employees" delta="ISO audit in 24 days" tone="danger" sparkline={<SparkLine />} />
                <KpiCard label="Active Contract Head" value="38 workers" delta="Daily cost billing: ₹57k" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="YTD Attrition rate" value="14.2%" delta="Rolling 12-month rate" tone="success" sparkline={<SparkLine />} />
              </div>

              {/* Attendance heatmap & OT chart layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {/* Biometric Attendance Heatmap Table */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Department Biometric Attendance (Today)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">ZKTeco active morning & afternoon shifts synchronization</p>
                  </div>

                  <div className="rounded-xl border overflow-hidden max-h-[260px] overflow-y-auto pr-1">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[9.5px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Department</th>
                          <th className="p-3 text-right">Headcount</th>
                          <th className="p-3 text-right">Present</th>
                          <th className="p-3 text-right">Attendance %</th>
                          <th className="p-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m66AttendanceHeatmap.map((dept, idx) => {
                          const isUnder = dept.pct < 85;
                          return (
                            <tr key={idx} className="hover:bg-muted/30">
                              <td className="p-3 font-bold text-foreground">{dept.dept}</td>
                              <td className="p-3 text-right">{dept.total}</td>
                              <td className="p-3 text-right">{dept.present}</td>
                              <td className={`p-3 text-right font-extrabold ${isUnder ? "text-danger" : "text-foreground"}`}>
                                {dept.pct}%
                              </td>
                              <td className="p-3 text-center">
                                <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-bold uppercase ${
                                  isUnder ? "bg-red-500/10 text-red-500 animate-pulse" :
                                  dept.pct === 100 ? "bg-green-500/10 text-green-500" : "bg-muted text-muted-foreground"
                                }`}>
                                  {dept.status}
                                </span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Overtime usage per department */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Monthly Overtime usage by Department</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Budgeted vs Used OT Capacity Hours (MTD)</p>
                  </div>

                  <div className="h-[210px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={m66OtUsage} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                        <XAxis dataKey="dept" tick={{ fill: "#888", fontSize: 9 }} />
                        <YAxis tick={{ fill: "#888", fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                          labelStyle={{ color: "#fff", fontWeight: "bold" }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="budget" name="Budget" fill="#888" radius={[3, 3, 0, 0]} />
                        <Bar dataKey="used" name="Used" fill="#D85A30" radius={[3, 3, 0, 0]} />
                        <Legend wrapperStyle={{ fontSize: 11 }} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Bottom: League Table & Compliance */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Operator Productivity League Table */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <h3 className="text-[14.5px] font-bold text-foreground">Operator Output Efficiency League</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Operator shift volume vs standard output targets</p>
                    </div>
                    <input
                      type="text"
                      placeholder="Filter operator name..."
                      value={m66OperatorSearch}
                      onChange={(e) => setM66OperatorSearch(e.target.value)}
                      className="h-8 pl-3 text-[11.5px] bg-background border rounded-lg focus:outline-none"
                    />
                  </div>

                  <div className="rounded-xl border overflow-hidden max-h-[220px] overflow-y-auto">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[9.5px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Rank</th>
                          <th className="p-3">Employee</th>
                          <th className="p-3">Shift</th>
                          <th className="p-3 text-right">Output</th>
                          <th className="p-3 text-right">Efficiency</th>
                          <th className="p-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m66Operators
                          .filter(op => !m66OperatorSearch || op.name.toLowerCase().includes(m66OperatorSearch.toLowerCase()))
                          .map(op => {
                            const isLow = op.pct < 75;
                            return (
                              <tr key={op.id} className="hover:bg-muted/30">
                                <td className="p-3 font-bold">{op.rank}</td>
                                <td className="p-3">
                                  <span className="font-bold text-foreground">{op.name}</span>
                                  <div className="text-[10px] text-muted-foreground font-sans">{op.dept}</div>
                                </td>
                                <td className="p-3 text-muted-foreground">{op.shift}</td>
                                <td className="p-3 text-right">{op.output} <span className="text-[10px] text-muted-foreground font-sans">/ {op.target}</span></td>
                                <td className={`p-3 text-right font-extrabold ${isLow ? "text-danger" : "text-foreground"}`}>
                                  {op.pct}%
                                </td>
                                <td className="p-3 text-center">
                                  {op.flagged ? (
                                    <span className="inline-flex px-1.5 py-0.5 rounded text-[10px] bg-red-500/10 text-red-500 font-extrabold uppercase">
                                      Flagged
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => handleFlagOperator66(op.id, op.name)}
                                      disabled={!isLow}
                                      className="inline-flex h-6.5 px-2 rounded bg-primary text-primary-foreground text-[10px] font-bold hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none"
                                    >
                                      Flag HR
                                    </button>
                                  )}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Training Compliance Tracker */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[14.5px] font-bold text-foreground">Safety Training Compliance (ISO 9001)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Mandatory certifications & due dates</p>
                  </div>

                  <div className="space-y-3 font-mono text-[12px]">
                    {m66Training.map((tr, idx) => {
                      const isCritical = tr.status === "Critical" || tr.status === "Overdue";
                      return (
                        <div key={idx} className="flex justify-between items-center border-b pb-2">
                          <div>
                            <span className="text-foreground font-bold font-sans block">{tr.type}</span>
                            <span className="text-[10.5px] text-muted-foreground">Due: {tr.earliest} • Overdue: <strong className="text-foreground">{tr.overdue}</strong></span>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className={`inline-flex px-1.5 py-0.25 rounded text-[9.5px] font-black uppercase tracking-wider ${
                              isCritical ? "bg-red-500/15 text-red-500 animate-pulse" : "bg-amber-500/10 text-amber-500"
                            }`}>
                              {tr.status}
                            </span>
                            <button
                              onClick={() => handleScheduleTraining66(tr.type)}
                              className="h-7 px-2 rounded bg-primary text-primary-foreground text-[10.5px] font-bold hover:opacity-90"
                            >
                              Schedule
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      ) : (isM7 || (isM9 && s.id === "9-3")) ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* MODULE 7: CUSTOMER & DEALER VOICE AGENTS */}
          {/* ========================================================================= */}

          {/* SUBMODULE 7.1: Inbound Order Status Voice Agent */}
          {s.id === "7-1" && (
            <div className="space-y-6">
              {/* Call Monitor Top Panel */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                
                {/* Left Side: Call Simulator & Transcript (60% width) */}
                <div className="xl:col-span-3 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Live Telephony Call Monitor</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Real-time helpline simulator for incoming queries</p>
                    </div>
                  </div>

                  {!m71ActiveCall ? (
                    <div className="rounded-2xl border bg-card p-8 text-center flex flex-col items-center justify-center min-h-[340px] space-y-4 shadow-sm border-dashed">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-full bg-green-500/10 text-green-500 grid place-items-center animate-pulse">
                          <PhoneCall className="h-6 w-6" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 animate-ping" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[14px] font-bold text-foreground">Toll-Free Helpline: 1800-FORTIV-AI</h4>
                        <p className="text-[12px] text-muted-foreground max-w-sm">
                          helpline is currently idle and waiting for incoming order status, price, or dispatch queries.
                        </p>
                      </div>
                      <button
                        onClick={handleSimulateCall71}
                        className="inline-flex items-center gap-1.5 h-9 px-4.5 rounded-xl bg-primary text-primary-foreground text-[12.5px] font-bold hover:opacity-90 transition-all shadow-sm"
                      >
                        <Play className="h-3.5 w-3.5" /> Simulate Inbound Query Call
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-2xl border bg-card p-5 flex flex-col justify-between min-h-[340px] shadow-sm space-y-4">
                      <div className="flex justify-between items-start border-b pb-3.5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-primary/15 text-primary grid place-items-center shrink-0">
                            <Clock className="h-5 w-5 shrink-0" />
                          </div>
                          <div>
                            <div className="text-[13.5px] font-bold text-foreground">{m71ActiveCall.account}</div>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] text-muted-foreground font-mono mt-0.5">
                              {m71ActiveCall.caller} • <span className="text-primary font-bold">{m71ActiveCall.lang}</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-right">
                          <div>
                            <span className="text-[10px] text-muted-foreground block uppercase font-medium">Timer</span>
                            <span className="text-[13px] font-bold font-mono text-foreground">{m71LiveCallTimeCounter}s</span>
                          </div>
                          <span className="inline-flex px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#2E86AB]/15 text-[#2E86AB] uppercase tracking-wider animate-pulse">
                            Active Call
                          </span>
                        </div>
                      </div>

                      {/* Visual Waveform Animation */}
                      <div className="flex items-center justify-center gap-1 h-12 bg-muted/20 border rounded-xl py-2 select-none">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((bar) => {
                          const height = Math.sin(bar + m71LiveCallTimeCounter) * 16 + 20;
                          return (
                            <div
                              key={bar}
                              className="w-1 bg-[#2E86AB] rounded transition-all duration-300"
                              style={{ height: `${Math.max(4, height)}px` }}
                            />
                          );
                        })}
                      </div>

                      {/* Transcript Box */}
                      <div className="flex-1 bg-muted/30 border rounded-xl p-3.5 text-[12.5px] font-mono leading-relaxed h-[180px] overflow-y-auto space-y-2">
                        {m71ActiveCall.transcript.map((line, idx) => {
                          const isAI = line.startsWith("AI Assistant:");
                          return (
                            <div key={idx} className={`p-2 rounded-xl max-w-[85%] ${
                              isAI ? "bg-primary/10 text-foreground mr-auto" : "bg-[#2E86AB]/10 text-foreground ml-auto text-right"
                            }`}>
                              <span className="text-[10px] font-bold text-muted-foreground block mb-0.5 uppercase">
                                {isAI ? "AI Voice Agent" : "Rajesh Kapoor (Dealer)"}
                              </span>
                              {line.replace("AI Assistant: ", "").replace("Caller: ", "")}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: ERP Database Query panel (40% width) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">ERP Live Query Result Panel</h3>
                  
                  {m71QueryActive ? (
                    <div className="rounded-2xl border bg-card p-8 text-center flex flex-col items-center justify-center min-h-[340px] space-y-4 shadow-sm">
                      <Loader2 className="h-10 w-10 animate-spin text-primary" />
                      <div>
                        <h4 className="text-[13.5px] font-bold text-foreground">SAP B1 Service Tunnel API call</h4>
                        <p className="text-[11.5px] text-muted-foreground font-mono mt-1">
                          Ingesting purchase orders matching "+91 98251 XXXXX"...
                        </p>
                      </div>
                    </div>
                  ) : m71ActiveCall?.erpPushed ? (
                    <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm min-h-[340px] flex flex-col justify-between">
                      <div className="border-b pb-3">
                        <div className="text-[13.5px] font-bold text-foreground flex items-center gap-1.5">
                          <Database className="h-4 w-4 text-[#1D9E75]" /> SAP B1 Order Ledger Match
                        </div>
                        <span className="text-[11px] text-[#1D9E75] bg-[#1D9E75]/10 px-2 py-0.5 rounded font-mono uppercase inline-block mt-1">
                          ✓ Match found in 3.2s
                        </span>
                      </div>

                      <div className="space-y-2.5 font-mono text-[12px] leading-relaxed">
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Invoice Reference:</span>
                          <span className="font-bold text-foreground">{m71QueryResults.order}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Product Quantity:</span>
                          <span className="font-bold text-foreground">{m71QueryResults.qty}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Dispatch Status:</span>
                          <span className="font-bold text-foreground">{m71QueryResults.status}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Transporter Carrier:</span>
                          <span className="font-bold text-foreground">{m71QueryResults.carrier}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Lorry Receipt (LR):</span>
                          <span className="font-bold text-foreground">{m71QueryResults.lr}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Expected Delivery:</span>
                          <span className="font-extrabold text-[#1D9E75]">{m71QueryResults.eta}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-xl text-[11.5px] font-mono leading-normal">
                        <span className="font-bold text-[#1D9E75]">• WhatsApp confirmation:</span> summary dispatch receipt queued to be delivered to Rajesh Kapoor (+91 98251 XXXXX).
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border bg-card p-8 text-center flex flex-col items-center justify-center min-h-[340px] space-y-2 shadow-sm text-muted-foreground">
                      <Database className="h-8 w-8 mx-auto mb-1.5" />
                      <p className="text-[12.5px]">Helpline currently inactive.</p>
                      <p className="text-[11px]">Matching records will be fetched from ERP SAP B1 Service Layer on call connection.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Inbound Call History Log */}
              <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm">
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">Inbound helpline Call Logs</h3>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">Telemetry history of routine AI handled calls</p>
                </div>

                <div className="rounded-xl border overflow-hidden">
                  <table className="w-full text-left text-[12.5px] font-mono">
                    <thead>
                      <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground font-mono">
                        <th className="p-3">Time</th>
                        <th className="p-3">Caller Account</th>
                        <th className="p-3 text-center">Language</th>
                        <th className="p-3">Query Category</th>
                        <th className="p-3 text-right">Duration</th>
                        <th className="p-3 text-center">Resolution</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {m71CallHistory.map((call) => (
                        <tr key={call.id} className="hover:bg-muted/30 transition-colors">
                          <td className="p-3">{call.time}</td>
                          <td className="p-3">
                            <span className="font-bold text-foreground">{call.account}</span>
                            <div className="text-[10px] text-muted-foreground font-sans">{call.caller}</div>
                          </td>
                          <td className="p-3 text-center font-sans">
                            <span className="inline-block px-1.5 py-0.25 rounded text-[10px] bg-primary/10 text-primary font-bold">
                              {call.lang}
                            </span>
                          </td>
                          <td className="p-3 font-bold">{call.query}</td>
                          <td className="p-3 text-right">{call.duration}</td>
                          <td className="p-3 text-center">
                            <span className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              call.resolution === "Resolved" ? "bg-green-500/10 text-green-500" : "bg-amber-500/10 text-amber-500 animate-pulse"
                            }`}>
                              {call.resolution}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 7.2: Complaint Logging Voice Agent */}
          {s.id === "7-2" && (
            <div className="space-y-6">
              {/* Call Monitor Complaint Panel */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                
                {/* Left Side: Call Simulator & Transcript (60% width) */}
                <div className="xl:col-span-3 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Complaint Intake Helena Monitor</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Empathetic speech-to-text complaint parsing simulator</p>
                    </div>
                  </div>

                  {!m72ActiveCall ? (
                    <div className="rounded-2xl border bg-card p-8 text-center flex flex-col items-center justify-center min-h-[340px] space-y-4 shadow-sm border-dashed">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-full bg-red-500/10 text-red-500 grid place-items-center animate-pulse">
                          <ShieldAlert className="h-6 w-6 animate-pulse" />
                        </div>
                        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 animate-ping" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-[14px] font-bold text-foreground">Inbound Complaint helpline Ready</h4>
                        <p className="text-[12px] text-muted-foreground max-w-sm">
                          Helpline is currently idle and ready to take customer complaints, analyze call tones, and automatically register M8 tickets.
                        </p>
                      </div>
                      <button
                        onClick={handleSimulateComplaintCall72}
                        className="inline-flex items-center gap-1.5 h-9 px-4.5 rounded-xl bg-red-500 hover:bg-red-600 text-white text-[12.5px] font-bold transition-all shadow-sm"
                      >
                        <Play className="h-3.5 w-3.5" /> Simulate Inbound Quality Dispute Call
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-2xl border bg-card p-5 flex flex-col justify-between min-h-[340px] shadow-sm space-y-4">
                      <div className="flex justify-between items-start border-b pb-3.5">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-red-500/15 text-red-500 grid place-items-center shrink-0">
                            <ShieldAlert className="h-5 w-5 shrink-0 animate-bounce" />
                          </div>
                          <div>
                            <div className="text-[13.5px] font-bold text-foreground">{m72ActiveCall.account}</div>
                            <span className="inline-flex items-center gap-1.5 text-[10.5px] text-muted-foreground font-mono mt-0.5">
                              {m72ActiveCall.caller} • <span className="text-primary font-bold">{m72ActiveCall.lang}</span>
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3.5 text-right">
                          <div className="text-right">
                            <span className="text-[10px] text-muted-foreground block uppercase font-medium">Caller Sentiment</span>
                            <span className={`inline-flex px-2 py-0.25 rounded text-[11px] font-extrabold uppercase mt-0.5 ${
                              m72ActiveCall.sentiment === "Upset" ? "bg-red-500/15 text-red-500 animate-pulse font-mono" :
                              m72ActiveCall.sentiment === "Concerned" ? "bg-amber-500/15 text-amber-500" : "bg-green-500/15 text-green-500"
                            }`}>
                              {m72ActiveCall.sentiment}
                            </span>
                          </div>
                          <div className="h-10 w-0.5 bg-muted" />
                          <div>
                            <span className="text-[10px] text-muted-foreground block uppercase font-medium">Timer</span>
                            <span className="text-[13px] font-bold font-mono text-foreground">{m72LiveCallTimeCounter}s</span>
                          </div>
                        </div>
                      </div>

                      {/* Scrollable Speech-to-Text Transcript bubbles */}
                      <div className="flex-1 bg-muted/30 border rounded-xl p-3.5 text-[12.5px] font-mono leading-relaxed h-[180px] overflow-y-auto space-y-2">
                        {m72ActiveCall.transcript.map((line, idx) => {
                          const isAI = line.startsWith("AI Assistant:");
                          return (
                            <div key={idx} className={`p-2 rounded-xl max-w-[85%] ${
                              isAI ? "bg-primary/10 text-foreground mr-auto" : "bg-red-500/5 text-foreground ml-auto text-right border border-red-500/10"
                            }`}>
                              <span className="text-[10px] font-bold text-muted-foreground block mb-0.5 uppercase">
                                {isAI ? "AI Quality Desk" : "Rajesh Kapoor (Upset Dealer)"}
                              </span>
                              {line.replace("AI Assistant (Empathy Script): ", "").replace("AI Assistant: ", "").replace("Caller: ", "")}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Side: Populating Complaint Fields (40% width) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">AI Parsed M8 Ticket Intake Preview</h3>
                  
                  {m72ActiveCall ? (
                    <div className="rounded-2xl border bg-card p-5 space-y-3.5 shadow-sm min-h-[340px] flex flex-col justify-between">
                      <div className="border-b pb-3">
                        <div className="text-[13.5px] font-bold text-foreground flex items-center gap-1.5">
                          <FileText className="h-4 w-4 text-[#D85A30]" /> M8 Omnichannel Ticket Intake
                        </div>
                        <span className="text-[11px] text-[#D85A30] bg-[#D85A30]/10 px-2 py-0.5 rounded font-mono uppercase inline-block mt-1 animate-pulse">
                          Ticket Intake parsing live...
                        </span>
                      </div>

                      <div className="space-y-2.5 font-mono text-[12px] leading-relaxed">
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Ticket Reference:</span>
                          <span className="font-bold text-foreground">{m72ActiveCall.fields.complaint_id}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Defect Category:</span>
                          <span className={`font-bold text-foreground ${m72ActiveCall.fields.defect_type !== "Pending..." ? "text-[#D85A30] font-black" : ""}`}>{m72ActiveCall.fields.defect_type}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Affected Quantity:</span>
                          <span className={`font-bold text-foreground ${m72ActiveCall.fields.qty !== "Pending..." ? "text-[#D85A30] font-black" : ""}`}>{m72ActiveCall.fields.qty}</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="text-muted-foreground">Invoice Reference:</span>
                          <span className="font-bold text-foreground">{m72ActiveCall.fields.ref}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SLA Severity Grade:</span>
                          <span className={`font-extrabold ${m72ActiveCall.fields.severity === "Major" ? "text-red-500 font-black animate-pulse bg-red-500/10 px-2 py-0.25 rounded" : "text-foreground"}`}>{m72ActiveCall.fields.severity}</span>
                        </div>
                      </div>

                      <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-[11.5px] font-mono leading-normal text-muted-foreground">
                        <span className="font-bold text-[#D85A30]">• SLA Action Rules:</span> Major severity routing commits QA deskSunita Patel to call back within 8 hours.
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border bg-card p-8 text-center flex flex-col items-center justify-center min-h-[340px] space-y-2 shadow-sm text-muted-foreground">
                      <FileText className="h-8 w-8 mx-auto mb-1.5" />
                      <p className="text-[12.5px]">Intake preview idle.</p>
                      <p className="text-[11px]">Structured fields parsed by NLP will display here live during complaint dial-ins.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Complaints Log */}
              <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm">
                <div>
                  <h3 className="text-[15px] font-bold text-foreground">Complaints Intake Ledger (today)</h3>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">Complaints logged via AI voice with matching M8 tickets status</p>
                </div>

                <div className="rounded-xl border overflow-hidden">
                  <table className="w-full text-left text-[12.5px] font-mono">
                    <thead>
                      <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground font-mono">
                        <th className="p-3">Ticket ID</th>
                        <th className="p-3">Dealer Account</th>
                        <th className="p-3">Defect Description</th>
                        <th className="p-3 text-center">Language</th>
                        <th className="p-3 text-center">Severity</th>
                        <th className="p-3 text-right">Affected Qty</th>
                        <th className="p-3 text-center">M8 Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y font-mono">
                      {m72ComplaintHistory.map((cmp) => (
                        <tr key={cmp.id} className="hover:bg-muted/30 transition-colors">
                          <td className="p-3 font-extrabold text-[#D85A30]">{cmp.complaintId}</td>
                          <td className="p-3 font-bold text-foreground">{cmp.account}</td>
                          <td className="p-3 text-foreground">{cmp.defect}</td>
                          <td className="p-3 text-center">
                            <span className="inline-block px-1.5 py-0.25 rounded text-[10px] bg-primary/10 text-primary font-bold">
                              {cmp.lang}
                            </span>
                          </td>
                          <td className="p-3 text-center">
                            <span className={`inline-flex px-2 py-0.5 rounded text-[9.5px] font-black uppercase tracking-wider ${
                              cmp.severity === "Critical" ? "bg-red-500/15 text-red-500 animate-pulse" :
                              cmp.severity === "Major" ? "bg-red-500/10 text-red-400 font-bold" : "bg-amber-500/10 text-amber-500"
                            }`}>
                              {cmp.severity}
                            </span>
                          </td>
                          <td className="p-3 text-right font-bold text-foreground">{cmp.qty}</td>
                          <td className="p-3 text-center">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-muted border px-2 py-0.5 rounded text-foreground font-sans">
                              {cmp.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 9.3: Payment Reminder Outbound Voice Agent */}
          {s.id === "9-3" && (
            <div className="space-y-6">
              {/* Header KPI Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                <KpiCard label="Overdue accounts" value="18 accounts" delta="SAP B1 Outstanding" tone="danger" sparkline={<SparkLine />} />
                <KpiCard
                  label="Overdue Balance"
                  value={`₹${(m73OverdueAccounts.filter(a => !a.isWrongNumber && a.commitment === "Pending").reduce((sum, a) => sum + a.amount, 0) / 100000).toFixed(2)}L`}
                  delta="Average: ₹1.5L / account"
                  tone="danger"
                  sparkline={<SparkLine />}
                />
                <KpiCard label="Reminders Placed Today" value="312 calls" delta="Helpline outbound auto" tone="success" sparkline={<SparkLine />} />
                <KpiCard
                  label="PTP Secured (today)"
                  value={`₹${(m73OverdueAccounts.filter(a => a.commitment !== "Pending" && a.commitment !== "Escalated" && a.commitment !== "Invalid Contact").reduce((sum, a) => sum + a.amount, 0) / 100000).toFixed(2)}L`}
                  delta="Promises logged"
                  tone="success"
                  sparkline={<SparkLine />}
                />
                <KpiCard label="Average Call Time" value="1 min 12 sec" delta="Speech optimized script" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="PTP Fulfilment Rate" value="78%" delta="Target collections pace" tone="success" sparkline={<SparkLine />} />
              </div>

              {/* Reminders Controls Bar */}
              <div className="rounded-2xl border bg-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                <div>
                  <h3 className="text-[14px] font-bold text-foreground">Outbound Payment Campaign Control</h3>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">Automated collection dial-outs targeting ageing receivables</p>
                </div>

                <button
                  onClick={handleRunReminderCampaign73}
                  disabled={m73CampaignRunning}
                  className="inline-flex items-center gap-1.5 h-9.5 px-4.5 rounded-xl bg-primary text-primary-foreground text-[12.5px] font-bold hover:opacity-90 disabled:opacity-50 transition-all shrink-0 shadow-sm"
                >
                  {m73CampaignRunning ? <Loader2 className="h-4 w-4 animate-spin" /> : <PhoneCall className="h-4 w-4 shrink-0" />}
                  Trigger Outbound Reminder Campaign
                </button>
              </div>


              {/* Campaign Layout Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                
                {/* Left Side: Overdue Accounts Ledger (60% width) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Receivables Collections Ledger</h3>
                  
                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Account / Contact</th>
                          <th className="p-3 text-right">Overdue Amt</th>
                          <th className="p-3 text-center font-sans">Due Date</th>
                          <th className="p-3 text-right">Days OD</th>
                          <th className="p-3 text-center">Status</th>
                          <th className="p-3 text-center font-sans">PTP Promise</th>
                          <th className="p-3 text-center font-sans">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m73OverdueAccounts.map((acc) => {
                          const isHighRisk = acc.daysOverdue >= 15;
                          const isSelected = selectedAccountId73 === acc.id;
                          return (
                            <tr
                              key={acc.id}
                              onClick={() => setSelectedAccountId73(acc.id)}
                              className={`hover:bg-muted/30 cursor-pointer transition-colors ${
                                isSelected ? "bg-accent/40 font-semibold" : ""
                              }`}
                            >
                              <td className="p-3">
                                <span className="font-bold text-foreground">{acc.account}</span>
                                <div className="text-[10px] text-muted-foreground font-sans">{acc.contact}</div>
                              </td>
                              <td className="p-3 text-right text-foreground font-bold font-mono">₹{acc.amount.toLocaleString()}</td>
                              <td className="p-3 text-center font-sans text-muted-foreground">{acc.dueDate}</td>
                              <td className={`p-3 text-right font-bold ${isHighRisk ? "text-danger" : "text-foreground"}`}>{acc.daysOverdue} days</td>
                              <td className="p-3 text-center font-sans">
                                <span className={`inline-block px-1.5 py-0.25 rounded text-[9.5px] font-extrabold uppercase border ${
                                  acc.status === "Commitment" ? "bg-green-500/10 text-green-500 border-green-500/20" :
                                  acc.status === "Wrong Number" ? "bg-slate-500/10 text-slate-500 border-slate-500/20" :
                                  acc.status.includes("⚠️") ? "bg-amber-500/10 text-amber-500 border-amber-500/20" : "bg-red-500/10 text-red-500 border-red-500/20 animate-pulse"
                                }`}>
                                  {acc.status.replace("⚠️ ", "").replace("🔴 ", "")}
                                </span>
                              </td>
                              <td className={`p-3 text-center font-extrabold ${acc.commitment !== "Pending" ? "text-success font-black" : "text-muted-foreground"}`}>
                                {acc.commitment}
                              </td>
                              <td className="p-3 text-center font-sans" onClick={(e) => e.stopPropagation()}>
                                <div className="flex gap-1 justify-center">
                                  <button
                                    onClick={() => handleSecureCommitment73(acc.id, "05 Feb 2025")}
                                    disabled={acc.commitment !== "Pending"}
                                    className="h-6 px-1.5 rounded bg-primary text-primary-foreground text-[10px] font-bold hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none"
                                  >
                                    PTP
                                  </button>
                                  <button
                                    onClick={() => handleEscalate73(acc.id, acc.account)}
                                    disabled={acc.commitment === "Escalated" || acc.commitment === "Escalated to Credit Manager"}
                                    className="h-6 px-1.5 rounded border border-red-500/30 text-red-500 hover:bg-red-500/5 text-[10px] font-bold disabled:opacity-30 disabled:pointer-events-none"
                                  >
                                    Escalate
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Side: AI Call Player & PTP Collections Calendar (40% width) */}
                <div className="xl:col-span-2 space-y-6">
                  
                  {/* AI Call Recording & Transcript Player Card */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm">
                    <div className="border-b pb-3 flex justify-between items-start">
                      <div>
                        <h4 className="text-[14px] font-bold tracking-tight">AI Voice Call Player</h4>
                        <p className="text-[11.5px] text-muted-foreground mt-0.5">Recording: {activeAccount73.account.split(",")[0]}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1.5 font-sans">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase bg-primary/10 text-primary border border-primary/20">
                          🌐 {activeAccount73.lang || "Hindi"}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono uppercase border ${
                          activeAccount73.sentiment === "Positive" ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" :
                          activeAccount73.sentiment === "Frustrated" || activeAccount73.sentiment === "Agitated" ? "bg-red-500/10 text-red-600 border-red-500/20 animate-pulse" :
                          "bg-slate-500/10 text-slate-600 border-slate-500/20"
                        }`}>
                          😊 {activeAccount73.sentiment || "Neutral"} Sentiment
                        </span>
                      </div>
                    </div>

                    {/* Audio Player Controls */}
                    <div className="p-3.5 bg-muted/40 rounded-xl border space-y-3.5 font-sans">
                      <div className="flex items-center justify-between gap-4">
                        <button
                          onClick={() => {
                            const nextState = !isPlaying73;
                            setIsPlaying73(nextState);
                            if (nextState) {
                              toast.info(`Playing call recording for ${activeAccount73.account.split(",")[0]} at ${playbackSpeed73}x speed...`);
                            } else {
                              toast.dismiss();
                            }
                          }}
                          className="h-9 px-4 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 flex items-center gap-2 text-[12px] shadow-sm transition-all"
                        >
                          {isPlaying73 ? (
                            <>
                              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                              Pause Recording
                            </>
                          ) : (
                            <>
                              <Play className="h-3.5 w-3.5 fill-current" />
                              Play Call Recording
                            </>
                          )}
                        </button>

                        <div className="flex items-center gap-2 bg-card px-2.5 py-1.5 rounded-lg border">
                          <span className="text-[10px] text-muted-foreground uppercase font-bold">Speed:</span>
                          <input 
                            type="range" 
                            min="0.5" 
                            max="2.0" 
                            step="0.25" 
                            value={playbackSpeed73} 
                            onChange={(e) => {
                              const speed = parseFloat(e.target.value);
                              setPlaybackSpeed73(speed);
                              if (isPlaying73) {
                                toast.info(`Playback speed set to ${speed}x`);
                              }
                            }}
                            className="w-16 h-1 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                          />
                          <span className="text-[10.5px] font-bold font-mono w-8">{playbackSpeed73.toFixed(2)}x</span>
                        </div>
                      </div>

                      {/* Waveform Visualization */}
                      <div className="space-y-1">
                        <div className="text-[9.5px] font-bold text-muted-foreground uppercase tracking-wider">Audio Waveform</div>
                        <div className="h-10 flex items-end gap-[3px] px-1 pt-2 rounded-lg bg-card border overflow-hidden">
                          {Array.from({ length: 34 }).map((_, i) => {
                            const baseHeight = 15 + Math.sin(i * 0.5) * 10 + Math.cos(i * 0.9) * 5;
                            const height = isPlaying73 
                              ? Math.max(4, baseHeight + Math.sin(Date.now() / 150 + i) * 8)
                              : Math.max(4, baseHeight);
                            return (
                              <div 
                                key={i} 
                                className={`flex-1 rounded-t transition-all duration-150 ${isPlaying73 ? "bg-primary" : "bg-muted-foreground/35"}`} 
                                style={{ height: `${height}%` }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Escalation Path Alert */}
                    <div className="space-y-1.5 font-sans">
                      <div className="text-[9.5px] font-bold text-muted-foreground uppercase tracking-wider">Escalation Path Status</div>
                      {activeAccount73.commitment.includes("Escalated to Sales") || activeAccount73.status.includes("Dispute") ? (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-[11.5px] font-semibold flex items-start gap-2">
                          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 animate-pulse" />
                          <div>
                            <div>Auto-routed to Sales Head Desk & Quality QC Audit</div>
                            <div className="text-[10px] text-red-500/80 font-normal mt-0.5 font-mono">Dispute logged: Surface quality defect on components</div>
                          </div>
                        </div>
                      ) : activeAccount73.commitment.includes("Escalated to CFO") || activeAccount73.status.includes("3rd Reminder") ? (
                        <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-[11.5px] font-semibold flex items-start gap-2">
                          <ShieldAlert className="h-4 w-4 shrink-0 mt-0.5 animate-pulse" />
                          <div>
                            <div>Auto-routed to CFO & Direct Legal Action Desk</div>
                            <div className="text-[10px] text-red-500/80 font-normal mt-0.5 font-mono">Status: Chronic stagnation threshold reached (&gt;20 days overdue)</div>
                          </div>
                        </div>
                      ) : activeAccount73.status.includes("Escalated to Credit Manager") || activeAccount73.commitment === "Escalated" ? (
                        <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-600 rounded-xl text-[11.5px] font-semibold flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                          <div>
                            <div>Auto-routed to Credit Manager Desk</div>
                            <div className="text-[10px] text-amber-500/80 font-normal mt-0.5 font-mono">Action: Suspended further shipments pending reconciliation</div>
                          </div>
                        </div>
                      ) : activeAccount73.isWrongNumber || activeAccount73.commitment === "Invalid Contact" ? (
                        <div className="p-3 bg-slate-500/10 border border-slate-500/20 text-slate-600 rounded-xl text-[11.5px] font-semibold flex items-start gap-2">
                          <HelpCircle className="h-4 w-4 shrink-0 mt-0.5" />
                          <div>
                            <div>Auto-routed to Master Data Verification Queue</div>
                            <div className="text-[10px] text-slate-500/80 font-normal mt-0.5 font-mono">Flagged: Customer phone contact requires validation</div>
                          </div>
                        </div>
                      ) : (
                        <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-xl text-[11.5px] font-semibold flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" />
                          <div>
                            <div>Telephony Queue Clean / Compliance verified</div>
                            <div className="text-[10px] text-emerald-500/80 font-normal mt-0.5 font-mono">Status: Active promise collected / standard follow-up active</div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Speech Transcript Viewer */}
                    <div className="space-y-2">
                      <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">Audio Transcript Player</div>
                      <div className="max-h-[180px] overflow-y-auto pr-1 space-y-2 border rounded-xl p-3 bg-muted/10 font-sans text-[12px] leading-relaxed">
                        {activeAccount73.transcript && activeAccount73.transcript.map((line, idx) => (
                          <div key={idx} className={`p-2 rounded-lg border ${
                            line.speaker === "Agent" ? "bg-primary/5 text-primary border-primary/10 ml-4" : "bg-card text-foreground border-muted mr-4"
                          }`}>
                            <span className="font-bold text-[10.5px] block uppercase text-muted-foreground tracking-wider mb-0.5">{line.speaker}</span>
                            <p>{line.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Promise to Pay Secured Calendar */}
                  <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm">
                    <div>
                      <h4 className="text-[14px] font-bold tracking-tight font-sans">PTP Collections Calendar</h4>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5 font-sans">Upcoming payment commitments registered via AI voice agents</p>
                    </div>

                    <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                      {m73OverdueAccounts
                        .filter(a => a.commitment !== "Pending" && a.commitment !== "Escalated" && a.commitment !== "Escalated to Credit Manager" && a.commitment !== "Escalated to Sales" && a.commitment !== "Escalated to CFO" && a.commitment !== "Invalid Contact" && !a.isWrongNumber)
                        .map(acc => (
                          <div key={acc.id} className="p-3 rounded-xl border bg-muted/10 space-y-2 text-[12.5px] hover:border-primary/20 transition-all font-sans">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-foreground">{acc.account.split(",")[0]}</span>
                              <span className="font-mono text-primary font-bold text-[11.5px]">{acc.invoice}</span>
                            </div>
                            <div className="flex justify-between items-center text-muted-foreground text-[11px]">
                              <span>Amount: <strong className="text-foreground font-mono">₹{acc.amount.toLocaleString()}</strong></span>
                              <span className="flex items-center gap-1 font-sans">
                                Promise Date: <strong className="text-emerald-500 font-mono font-bold">{acc.commitment}</strong>
                              </span>
                            </div>
                          </div>
                        ))}
                      {m73OverdueAccounts.filter(a => a.commitment !== "Pending" && a.commitment !== "Escalated" && a.commitment !== "Escalated to Credit Manager" && a.commitment !== "Escalated to Sales" && a.commitment !== "Escalated to CFO" && a.commitment !== "Invalid Contact" && !a.isWrongNumber).length === 0 && (
                        <div className="text-center py-10 text-muted-foreground text-[12px] italic font-sans">
                          No active payment promises registered today.
                        </div>
                      )}
                    </div>

                    <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-[11px] font-mono leading-normal text-muted-foreground mt-4 font-sans">
                      <span className="font-bold text-primary block mb-1 font-sans">• PTP Tracking Protocol:</span>
                      Once a date commitment is logged, automated follow-up calls are paused until that date, after which reconciliation is automatically checked.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SUBMODULE 7.4: Dealer Feedback & Survey Agent */}
          {s.id === "7-4" && (
            <div className="space-y-6">
              {/* Header KPI Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-4">
                <KpiCard label="Completed Surveys" value="98 response" delta="79% survey outreach" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Average NPS Score" value="7.4 / 10" delta="Rolling 90 days NPS" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Promoters share" value="42%" delta="NPS score 9-10" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Passives share" value="33%" delta="NPS score 7-8" tone="success" sparkline={<SparkLine />} />
                <KpiCard label="Detractors share" value="25%" delta="NPS score 0-6" tone="danger" sparkline={<SparkLine />} />
                <KpiCard label="Active Campaigns" value="4 campaigns" delta="Trigger: post-delivery M5" tone="success" sparkline={<SparkLine />} />
              </div>

              {/* Surveys Controls Bar */}
              <div className="rounded-2xl border bg-card p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm">
                <div>
                  <h3 className="text-[14px] font-bold text-foreground">Dealer NPS Campaigns Monitor</h3>
                  <p className="text-[11.5px] text-muted-foreground mt-0.5">Proactive monthly NPS survey campaigns via outbound AI voice calls</p>
                </div>

                <button
                  onClick={handleTriggerSurveyCampaign74}
                  disabled={m74SurveyTriggering}
                  className="inline-flex items-center gap-1.5 h-9.5 px-4.5 rounded-xl bg-primary text-primary-foreground text-[12.5px] font-bold hover:opacity-90 disabled:opacity-50 transition-all shrink-0 shadow-sm"
                >
                  {m74SurveyTriggering ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 shrink-0" />}
                  Trigger Surveys Calling Campaign
                </button>
              </div>

              {/* NPS Scoreboard & Themes layout */}
              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                
                {/* Left Panel: NPS Scoreboard Table (60% width = 3/5 cols) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Dealer Satisfaction Index Scoreboard</h3>
                  
                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12.5px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Dealer</th>
                          <th className="p-3 text-center">NPS Score</th>
                          <th className="p-3 text-center font-sans">NPS Status</th>
                          <th className="p-3 font-sans">Key Comment Feedback</th>
                          <th className="p-3 text-center font-sans">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y font-mono">
                        {m74Dealers.map((d) => {
                          const isDetractor = d.category === "Detractor";
                          const isPromoter = d.category === "Promoter";
                          return (
                            <tr key={d.id} className="hover:bg-muted/30 transition-colors">
                              <td className="p-3">
                                <span className="font-bold text-foreground">{d.name}</span>
                                <div className="text-[10px] text-muted-foreground font-sans">{d.city}</div>
                              </td>
                              <td className="p-3 text-center font-extrabold font-mono text-[13.5px]">{d.score}</td>
                              <td className="p-3 text-center font-sans">
                                <span className={`inline-block px-1.5 py-0.25 rounded text-[10px] font-extrabold uppercase ${
                                  isPromoter ? "bg-green-500/10 text-green-500" :
                                  isDetractor ? "bg-red-500/10 text-red-500 animate-pulse font-black" : "bg-blue-500/10 text-blue-500"
                                }`}>
                                  {d.category}
                                </span>
                              </td>
                              <td className="p-3 text-foreground font-sans text-[11.5px] line-clamp-2 max-w-xs">{d.feedback}</td>
                              <td className="p-3 text-center font-sans">
                                {isDetractor && (
                                  d.alerted ? (
                                    <span className="inline-flex px-1.5 py-0.5 rounded text-[9.5px] bg-[#1D9E75]/10 text-[#1D9E75] font-extrabold uppercase">
                                      Alerted
                                    </span>
                                  ) : (
                                    <button
                                      onClick={() => handleEscalateDetractor74(d.id, d.name)}
                                      className="h-6.5 px-2 rounded bg-red-500 text-white text-[10px] font-bold hover:bg-red-600 transition-all shrink-0"
                                    >
                                      Alert RSM
                                    </button>
                                  )
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Right Panel: Themes Analysis (40% width = 2/5 cols) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Feedback Theme NLP Analysis</h3>
                  
                  <div className="rounded-2xl border bg-card p-5 space-y-4 shadow-sm min-h-[360px]">
                    <div className="space-y-1">
                      <h4 className="text-[13px] font-bold text-foreground">Top Complaint & Satisfaction Themes</h4>
                      <p className="text-[11px] text-muted-foreground">NLP theme tagging from open speech dialogs</p>
                    </div>

                    <div className="space-y-3.5 font-mono text-[12px]">
                      {m74Themes.map((th, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between font-mono">
                            <span className="text-muted-foreground font-sans">{th.name}</span>
                            <span className="font-bold text-foreground">{th.count} mentions <span className="text-muted-foreground font-normal">({th.share}%)</span></span>
                          </div>
                          <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                            <div className="h-full bg-[#2E86AB] rounded-full transition-all" style={{ width: `${th.share}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      ) : isM8 ? (
        <div className="space-y-6">
          
          {/* ========================================================================= */}
          {/* MODULE 8: CUSTOMER COMPLAINT & AFTER-SALES MANAGEMENT */}
          {/* ========================================================================= */}

          {/* SUBMODULE 8.1: Omnichannel Complaint Intake */}
          {s.id === "8-1" && (
            <div className="space-y-6">
              {/* Intake Channel Health Banner */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">Intake Channel Health: 5 Channels Active & Online</div>
                    <div className="text-[12px] text-muted-foreground font-mono">
                      Today: 7 complaints received • Oldest unacknowledged: 0 hrs 14 min • SLA: 100% compliant
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCreateManualTicket81}
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-all text-[12.5px] shadow-sm shrink-0"
                >
                  <Plus className="h-3.5 w-3.5" /> Log Manual Ticket
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Unified Inbox Feed (Left 60%) */}
                <div className="xl:col-span-3 space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-[15px] font-bold text-foreground">Unified Complaints Inbox Feed</h3>
                      <p className="text-[11.5px] text-muted-foreground mt-0.5">Chronological record of all complaints logged today across channels</p>
                    </div>
                  </div>

                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12.5px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Time / Channel</th>
                          <th className="p-3">Customer / Account</th>
                          <th className="p-3">Issue Description</th>
                          <th className="p-3 text-center">Severity</th>
                          <th className="p-3 text-center">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m81Complaints.map((c) => (
                          <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                            <td className="p-3">
                              <span className="text-[10px] text-muted-foreground block">{c.time}</span>
                              <div className="flex items-center gap-1 mt-0.5">
                                <span className="text-base select-none">{c.icon}</span>
                                <span className="text-[11px] font-sans font-semibold text-foreground">{c.channel}</span>
                              </div>
                            </td>
                            <td className="p-3">
                              <span className="font-bold text-foreground">{c.customer}</span>
                            </td>
                            <td className="p-3 text-foreground font-sans leading-snug">{c.desc}</td>
                            <td className="p-3 text-center">
                              <span className={`inline-block px-1.5 py-0.5 rounded text-[9.5px] font-bold uppercase ${
                                c.severity === "Critical" ? "bg-red-500/15 text-red-500 animate-pulse font-black" :
                                c.severity === "Major" ? "bg-red-500/10 text-red-500 font-bold" : "bg-amber-500/10 text-amber-500"
                              }`}>
                                {c.severity}
                              </span>
                            </td>
                            <td className="p-3 text-center font-sans">
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-muted border text-foreground">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                                {c.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Channel Metrics (Right 40%) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Intake Channel Metrics</h3>
                  <div className="rounded-2xl border bg-card p-5 space-y-4 min-h-[340px]">
                    <div className="space-y-1">
                      <h4 className="text-[13px] font-bold text-foreground">Performance telemetry by Channel</h4>
                      <p className="text-[11px] text-muted-foreground">Rolling 7 days response speed and volume</p>
                    </div>

                    <div className="space-y-3 font-mono text-[12px]">
                      {m81ChannelStats.map((c, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b pb-2">
                          <span className="text-muted-foreground font-sans">{c.channel}</span>
                          <span className="font-bold text-foreground">{c.today} today <span className="text-muted-foreground font-normal">({c.week} wk)</span></span>
                          <span className="text-[#1D9E75] font-extrabold">{c.avgResponse} response</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 bg-primary/5 border border-primary/10 rounded-xl text-[11.5px] font-mono leading-normal text-muted-foreground mt-4">
                      <span className="font-bold text-primary block mb-1">• OCR & NLP parsing summary:</span>
                      AI extracts customer name, order reference, defect category, and quantity affected automatically on arrival.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 8.2: AI Complaint Classification & Routing */}
          {s.id === "8-2" && (
            <div className="space-y-6">
              {/* Classification Queue Banner */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-primary animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">Classification Queue: 0 Pending</div>
                    <div className="text-[12px] text-muted-foreground font-mono">
                      Average classification time today: 5.8 seconds • Classification accuracy: 94% YTD
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleClassifyComplaint82}
                  disabled={m82Classifying}
                  className="inline-flex items-center gap-1.5 h-9.5 px-4 rounded-xl bg-primary text-primary-foreground text-[12.5px] font-bold hover:opacity-90 disabled:opacity-50 transition-all shrink-0 shadow-sm"
                >
                  {m82Classifying ? <Loader2 className="h-4 w-4 animate-spin" /> : <Cpu className="h-4 w-4 shrink-0" />}
                  Trigger AI Classification Simulation
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* AI Classification Log (Left 60%) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">AI Classification & Routing Log</h3>

                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Ticket / Customer</th>
                          <th className="p-3">AI Classification</th>
                          <th className="p-3 text-center">Confidence</th>
                          <th className="p-3">Routed Destination</th>
                          <th className="p-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m82ClassificationLog.map((c) => (
                          <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                            <td className="p-3">
                              <span className="font-extrabold text-[#D85A30] block">{c.complaintId}</span>
                              <span className="text-[10px] text-muted-foreground font-sans mt-0.5">{c.customer}</span>
                            </td>
                            <td className="p-3 font-semibold text-foreground">
                              {c.classification}
                              <div className="text-[10px] text-muted-foreground font-sans mt-0.5">Severity: {c.severity}</div>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1.5">
                                <div className="w-12 h-1.5 bg-muted rounded-full overflow-hidden">
                                  <div
                                    className={`h-full rounded-full transition-all ${
                                      c.confidence > 90 ? "bg-green-500" : c.confidence > 75 ? "bg-amber-500" : "bg-red-500"
                                    }`}
                                    style={{ width: `${c.confidence}%` }}
                                  />
                                </div>
                                <span className="font-bold">{c.confidence}%</span>
                              </div>
                            </td>
                            <td className="p-3 text-foreground font-sans text-[11.5px] leading-tight">
                              {c.routedTo}
                              <div className="text-[10px] text-muted-foreground font-mono mt-0.5">SLA: {c.time}</div>
                            </td>
                            <td className="p-3 text-center">
                              {c.overridden ? (
                                <span className="inline-flex px-1.5 py-0.5 rounded text-[9.5px] bg-primary/10 text-primary font-bold uppercase tracking-tight">
                                  ✓ Overridden
                                </span>
                              ) : (
                                <button
                                  onClick={() => handleOverrideClassification82(c.id)}
                                  className="h-6.5 px-2 rounded border border-muted hover:bg-muted text-[10.5px] font-semibold text-foreground transition-all shrink-0"
                                >
                                  Override
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Routing Rules (Right 40%) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Taxonomy Routing Rules</h3>
                  <div className="rounded-2xl border bg-card p-5 space-y-4 min-h-[360px]">
                    <div className="space-y-1">
                      <h4 className="text-[13px] font-bold text-foreground">Defect Category Assignees</h4>
                      <p className="text-[11px] text-muted-foreground">Automatic routing path configured in rules engine</p>
                    </div>

                    <div className="space-y-3 font-mono text-[12px]">
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground font-sans">Quality — Any Defect</span>
                        <span className="font-bold text-foreground">QA Team</span>
                        <span className="text-primary font-bold">Sunita Patel</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground font-sans">Delivery — Short Shipment</span>
                        <span className="font-bold text-foreground">Dispatch Manager</span>
                        <span className="text-primary font-bold">Kavita Sharma</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground font-sans">Delivery — Late Delivery</span>
                        <span className="font-bold text-foreground">Production + Dispatch</span>
                        <span className="text-primary font-bold">Deepak Trivedi</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground font-sans">Documentation — GST/Invoice</span>
                        <span className="font-bold text-foreground">Sales Admin / Finance</span>
                        <span className="text-primary font-bold">Anita Kapoor</span>
                      </div>
                      <div className="flex justify-between items-center border-b pb-2">
                        <span className="text-muted-foreground font-sans">Documentation — Test Cert</span>
                        <span className="font-bold text-foreground">QA Team</span>
                        <span className="text-primary font-bold">Sunita Patel</span>
                      </div>
                      <div className="flex justify-between items-center pb-2">
                        <span className="text-muted-foreground font-sans">Service — Delay/Pricing</span>
                        <span className="font-bold text-foreground">Regional Sales Manager</span>
                        <span className="text-primary font-bold">Suresh Nair</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 8.3: Customer Complaint Acknowledgement Agent */}
          {s.id === "8-3" && (
            <div className="space-y-6">
              {/* Acknowledgement Health Banner */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">Acknowledgements: 100% Sent Within SLA</div>
                    <div className="text-[12px] text-muted-foreground font-mono">
                      Sent today: 7 • Target: &lt;5 minutes from intake • Failed deliveries: 0
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleManualAck83}
                  disabled={m83SendingManual}
                  className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 transition-all text-[12.5px] shadow-sm shrink-0"
                >
                  {m83SendingManual ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                  Resend Acknowledgement API Test
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Acknowledgement Log (Left 60%) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Customer Acknowledgement Telemetry Log</h3>

                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Ticket / Customer</th>
                          <th className="p-3">Sent At / Channel</th>
                          <th className="p-3 text-right">Time to Send</th>
                          <th className="p-3 text-center">Status</th>
                          <th className="p-3 text-center">Receipts</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m83AckLog.map((c) => (
                          <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                            <td className="p-3">
                              <span className="font-extrabold text-[#D85A30] block">{c.complaintId}</span>
                              <span className="text-[10px] text-muted-foreground font-sans mt-0.5">{c.customer}</span>
                            </td>
                            <td className="p-3 text-foreground font-semibold">
                              {c.sentAt}
                              <div className="text-[10px] text-muted-foreground font-sans mt-0.5">{c.channel}</div>
                            </td>
                            <td className="p-3 text-right font-bold text-foreground">{c.timeToSend}</td>
                            <td className="p-3 text-center">
                              <span className="inline-flex px-1.5 py-0.5 rounded text-[9.5px] font-extrabold bg-[#1D9E75]/15 text-[#1D9E75] uppercase">
                                Sent within SLA
                              </span>
                            </td>
                            <td className="p-3 text-center">
                              <div className="flex items-center justify-center gap-1.5 text-muted-foreground">
                                {c.delivered ? <span className="text-[11px] text-primary font-bold">✓ Delivered</span> : <span>-</span>}
                                {c.read ? <span className="text-[11px] text-green-500 font-extrabold">✓ Read</span> : <span>-</span>}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Templates Preview (Right 40%) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Active WhatsApp Templates</h3>
                  <div className="rounded-2xl border bg-card p-5 space-y-4 min-h-[360px]">
                    <div className="border-b pb-3">
                      <span className="text-[11.5px] text-[#2E86AB] bg-[#2E86AB]/10 px-2 py-0.5 rounded font-mono uppercase inline-block font-bold">
                        WhatsApp — Major Complaint
                      </span>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-xl border border-muted text-[12px] font-mono leading-relaxed text-foreground select-all whitespace-pre-wrap">
{`Dear Rajesh ji,

Thank you for contacting us regarding your recent delivery. We have registered your concern and sincerely apologise for the inconvenience caused.

📋 Complaint Reference: CMP-2024-441
🔍 Issue Noted: Surface defect on MS-204 — 40 pieces
👥 Assigned To: Our QA Team
⏰ You will receive an update by: 10:37 PM today

We take quality concerns very seriously and will revert with our findings within the committed time.

— Fortiv ManufactureSmart Customer Service`}
                    </div>

                    <div className="p-3 bg-red-500/5 border border-red-500/10 rounded-xl text-[11.5px] font-mono leading-normal text-muted-foreground">
                      <span className="font-bold text-[#D85A30] block mb-1">• Business Logic Rule:</span>
                      Acknowledgement channels match the intake channel (WhatsApp for WhatsApp, Email for Email) with a 5-minute hard constraint.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 8.4: CAPA (Corrective & Preventive Action) Tracking */}
          {s.id === "8-4" && (
            <div className="space-y-6">
              {/* CAPA KPIs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Total CAPAs Open</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">5 CAPAs</div>
                  <div className="text-[10px] text-[#1D9E75] mt-0.5">D1-D8 workflow active</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Overdue Initiation</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">0 cases</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">All initiated on time</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Overdue Closure</div>
                  <div className="text-[20px] font-bold font-mono text-[#D85A30] mt-1">0 cases</div>
                  <div className="text-[10px] text-[#1D9E75] mt-0.5">SLA: 100% compliant</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Closed MTD</div>
                  <div className="text-[20px] font-bold font-mono text-[#1D9E75] mt-1">14 closed</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Avg closure: 11.2 days</div>
                </div>
                <div className="rounded-2xl bg-card border p-4 relative overflow-hidden bg-red-500/5 border-red-500/20">
                  <div className="text-[10px] uppercase font-bold text-red-500 flex items-center gap-1.5 animate-pulse">
                    <span>●</span> Systemic Flags
                  </div>
                  <div className="text-[20px] font-bold font-mono text-red-500 mt-1">1 Active</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Surface finish defects</div>
                </div>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* CAPA Board (Left 60%) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">CAPA 8D Task Ledger</h3>

                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">CAPA Ref / Complaint</th>
                          <th className="p-3">Defect Category</th>
                          <th className="p-3">Progress / Stage</th>
                          <th className="p-3 text-right">Days Open</th>
                          <th className="p-3 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m84Capas.map((c) => (
                          <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                            <td className="p-3">
                              <span className="font-extrabold text-[#D85A30] block">{c.capaId}</span>
                              <span className="text-[10px] text-muted-foreground font-sans mt-0.5">{c.customer} ({c.complaintId})</span>
                            </td>
                            <td className="p-3">
                              <span className="font-bold text-foreground">{c.defect}</span>
                              <span className={`block text-[9.5px] font-bold uppercase mt-0.5 ${
                                c.severity === "Critical" ? "text-red-500" : "text-amber-500"
                              }`}>{c.severity} Severity</span>
                            </td>
                            <td className="p-3 font-sans">
                              <div className="text-[11.5px] font-semibold text-foreground">{c.status}</div>
                              <div className="flex items-center gap-1.5 mt-1">
                                <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                                  <div className="h-full bg-[#1D9E75] rounded-full transition-all" style={{ width: `${c.progress}%` }} />
                                </div>
                                <span className="font-mono text-[10px] font-bold">{c.progress}%</span>
                              </div>
                            </td>
                            <td className="p-3 text-right font-bold text-foreground">{c.daysOpen} days</td>
                            <td className="p-3 text-center font-sans">
                              <div className="flex justify-center gap-1.5">
                                <button
                                  onClick={() => handleAdvanceCapa84(c.id)}
                                  disabled={c.status === "CAPA Closed"}
                                  className="h-6 px-2 rounded bg-primary text-primary-foreground text-[10px] font-bold hover:opacity-90 disabled:opacity-30 transition-all shrink-0"
                                >
                                  Advance
                                </button>
                                <button
                                  onClick={() => handleEscalateCapa84(c.id, c.capaId)}
                                  className="h-6 px-2 rounded border border-red-500/20 text-red-500 hover:bg-red-500/5 text-[10px] font-bold transition-all shrink-0"
                                >
                                  Escalate
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Systemic Risk Alert Panel (Right 40%) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Systemic Quality Risk Panel</h3>
                  <div className="rounded-2xl border bg-red-500/5 border-red-500/10 p-5 space-y-4 flex flex-col justify-between min-h-[360px]">
                    <div className="space-y-2">
                      <div className="text-[13px] font-extrabold text-red-500 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 animate-bounce" /> 3+ Complaints in 90 Days Detected
                      </div>
                      <h4 className="text-[14px] font-bold text-foreground">Surface Finish Defects (CRCA Material)</h4>
                      <p className="text-[11.5px] text-muted-foreground font-sans leading-relaxed">
                        Recurring surface defect pattern identified on raw material sheet lot. CAPA actions for CMP-388 and CMP-402 have not prevented recurrence.
                      </p>
                    </div>

                    <div className="space-y-2 font-mono text-[11px] bg-card border p-3 rounded-lg leading-relaxed">
                      <div className="flex justify-between border-b pb-1">
                        <span className="text-muted-foreground">Affected Supplier:</span>
                        <span className="font-bold text-foreground">Mehta Steel Works</span>
                      </div>
                      <div className="flex justify-between border-b pb-1">
                        <span className="text-muted-foreground">Affected Batch Ref:</span>
                        <span className="font-bold text-foreground">RM-CRCA-1.2 / Lot 88421</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Zinc Coating Insufficiency:</span>
                        <span className="font-extrabold text-red-500">12μm (Spec: &gt;20μm)</span>
                      </div>
                    </div>

                    <button
                      onClick={handleNotifyMD84}
                      className="w-full h-9 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition-all text-[12px] shadow-sm flex items-center justify-center gap-1.5"
                    >
                      <MessageSquare className="h-3.5 w-3.5" /> Dispatch Alert to MD (Vikram Joshi)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 8.5: Customer Resolution Communication Agent */}
          {s.id === "8-5" && (
            <div className="space-y-6">
              {/* Communication Stats Bar */}
              <div className="rounded-2xl border p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-primary/10 via-primary/5 to-card shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 rounded-full bg-[#1D9E75] animate-pulse shrink-0" />
                  <div className="space-y-0.5">
                    <div className="text-[13px] font-bold text-foreground">Resolution Updates Active: CMP-2024-441</div>
                    <div className="text-[12px] text-muted-foreground font-mono">
                      Updates sent today: 14 • Open complaints with pending update: 1 • Avg resolution CSAT: +29 NPS
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSendUpdate85}
                  disabled={m85SendingUpdate}
                  className="inline-flex items-center gap-1.5 h-9.5 px-4 rounded-xl bg-primary text-primary-foreground text-[12.5px] font-bold hover:opacity-90 disabled:opacity-50 transition-all shrink-0 shadow-sm"
                >
                  {m85SendingUpdate ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4 shrink-0" />}
                  Send Scheduled Resolution Update
                </button>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
                {/* Communication Timeline (Left 60%) */}
                <div className="xl:col-span-3 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Complaint Lifecycle Milestone Timeline</h3>

                  <div className="rounded-2xl border bg-card p-5 space-y-5 min-h-[380px]">
                    <div className="relative border-l pl-6 space-y-4 font-mono text-[12px]">
                      {m85Timeline.map((t) => (
                        <div key={t.id} className="relative">
                          {/* Timeline Dot */}
                          <div className={`absolute -left-[30px] top-1 h-3.5 w-3.5 rounded-full border-2 bg-card ${
                            t.status === "Pending" ? "border-amber-500 bg-amber-500/25 animate-pulse" : "border-primary bg-primary/20"
                          }`} />
                          
                          <div className="flex items-center justify-between text-muted-foreground mb-0.5">
                            <span className="text-[10px]">{t.time}</span>
                            <span className="text-[10px] uppercase font-bold text-primary font-sans bg-primary/10 px-1.5 py-0.25 rounded">{t.status}</span>
                          </div>
                          <div className="font-sans text-[13px] font-bold text-foreground">{t.event}</div>
                          <p className="text-[11.5px] text-muted-foreground mt-0.5">{t.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* NPS Scores Board (Right 40%) */}
                <div className="xl:col-span-2 space-y-4">
                  <h3 className="text-[15px] font-bold text-foreground">Post-Resolution NPS Tracker</h3>

                  <div className="rounded-2xl border bg-card overflow-hidden">
                    <table className="w-full text-left text-[12px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Customer / Date</th>
                          <th className="p-3 text-center">Score</th>
                          <th className="p-3 text-center">Category</th>
                          <th className="p-3 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m85NpsScores.map((s) => {
                          const isDetractor = s.score <= 6;
                          return (
                            <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                              <td className="p-3">
                                <span className="font-bold text-foreground block">{s.customer}</span>
                                <span className="text-[10px] text-muted-foreground mt-0.5">{s.ref} • {s.date}</span>
                              </td>
                              <td className="p-3 text-center font-extrabold text-[13px]">{s.score}</td>
                              <td className="p-3 text-center">
                                <span className={`inline-block px-1.5 py-0.25 rounded text-[9.5px] font-extrabold uppercase ${
                                  s.category === "Promoter" ? "bg-green-500/10 text-green-500" :
                                  s.category === "Detractor" ? "bg-red-500/10 text-red-500 animate-pulse" : "bg-blue-500/10 text-blue-500"
                                }`}>
                                  {s.category}
                                </span>
                              </td>
                              <td className="p-3 text-center">
                                {isDetractor ? (
                                  s.flagged ? (
                                    <span className="text-[10px] font-bold text-red-500 font-sans">Flagged</span>
                                  ) : (
                                    <button
                                      onClick={() => handleFlagDetractor85(s.id, s.customer)}
                                      className="h-6.5 px-2 rounded bg-red-500 text-white text-[10px] font-bold hover:bg-red-600 transition-all shrink-0"
                                    >
                                      Alert RSM
                                    </button>
                                  )
                                ) : (
                                  <span className="text-muted-foreground text-[10.5px] font-sans">Closed</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SUBMODULE 8.6: Complaint Analytics & Quality Intelligence */}
          {s.id === "8-6" && (
            <div className="space-y-6">
              {/* Analytics Header KPI Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Total Complaints MTD</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">28 cases</div>
                  <div className="text-[10px] text-red-500 mt-0.5">↑ 27% vs December</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Complaint Rate (PPM)</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">312 PPM</div>
                  <div className="text-[10px] text-red-500 mt-0.5">Target &lt;200 PPM limit</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Avg Resolution Time</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">31.0 hrs</div>
                  <div className="text-[10px] text-[#1D9E75] mt-0.5">SLA: 48.0 hr threshold</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">SLA Compliance</div>
                  <div className="text-[20px] font-bold font-mono text-foreground mt-1">81% resolution</div>
                  <div className="text-[10px] text-[#D85A30] mt-0.5">5 breached this month</div>
                </div>
                <div className="rounded-2xl bg-card border p-4">
                  <div className="text-[10px] uppercase font-bold text-muted-foreground">Net Promoter Score</div>
                  <div className="text-[20px] font-bold font-mono text-[#1D9E75] mt-1">+29 NPS</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">Rating: Satisfactory</div>
                </div>
              </div>

              {/* Main Analytics Layout */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                
                {/* Trend Chart (Line Chart) */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">12-Month Complaint Trend & Moving Avg</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Total complaint count per month with 3-month rolling average</p>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={m86TrendData} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
                        <XAxis dataKey="month" tick={{ fill: "#888", fontSize: 10 }} />
                        <YAxis tick={{ fill: "#888", fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                          labelStyle={{ color: "#fff", fontWeight: "bold" }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="complaints" name="Complaints" fill="#2E86AB" radius={[4, 4, 0, 0]} barSize={20} />
                        <Line type="monotone" dataKey="avg" name="3-Mo Rolling Avg" stroke="#D85A30" strokeWidth={2.5} dot={{ fill: "#D85A30", strokeWidth: 1 }} />
                        <Legend wrapperStyle={{ fontSize: 11 }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Pareto Horizontal Bar */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Defect Type Pareto Analysis (MTD)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Defect type counts sorted by frequency with cumulative contribution</p>
                  </div>
                  <div className="h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={m86ParetoData} layout="vertical" margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#333" />
                        <XAxis type="number" tick={{ fill: "#888", fontSize: 10 }} />
                        <YAxis dataKey="type" type="category" tick={{ fill: "#888", fontSize: 10 }} width={120} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                          labelStyle={{ color: "#fff", fontWeight: "bold" }}
                          itemStyle={{ color: "#fff" }}
                        />
                        <Bar dataKey="count" name="Frequency Count" fill="#D85A30" radius={[0, 4, 4, 0]} barSize={12} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Cost Breakdown & Customer Heatmap */}
                <div className="rounded-2xl border bg-card p-5 space-y-4">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Complaint Cost Breakdown MTD (₹3.8L)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Value of replacements, credit notes, rework and QA audit hours</p>
                  </div>
                  <div className="h-[250px] flex items-center justify-between">
                    <div className="w-[50%] h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={m86CostBreakdown}
                            dataKey="amount"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={4}
                          >
                            <Cell fill="#1A3C5E" />
                            <Cell fill="#2E86AB" />
                            <Cell fill="#E8A838" />
                            <Cell fill="#9B9B9B" />
                          </Pie>
                          <Tooltip
                            contentStyle={{ backgroundColor: "#1e1e1e", border: "1px solid #333", borderRadius: "12px" }}
                            itemStyle={{ color: "#fff" }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="w-[45%] space-y-2 font-mono text-[11px]">
                      {m86CostBreakdown.map((c, idx) => {
                        const colors = ["#1A3C5E", "#2E86AB", "#E8A838", "#9B9B9B"];
                        return (
                          <div key={idx} className="flex flex-col border-b pb-1">
                            <div className="flex items-center gap-1.5 font-sans font-semibold">
                              <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: colors[idx] }} />
                              {c.category}
                            </div>
                            <span className="font-bold text-foreground pl-4">₹{c.amount.toLocaleString()}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Customer Heatmap Table */}
                <div className="rounded-2xl border bg-card p-5 space-y-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-[15px] font-bold text-foreground">Customer Quality Heatmap (90 Days)</h3>
                    <p className="text-[11.5px] text-muted-foreground mt-0.5">Aggregated feedback indicators and resolution speeds by buyer account</p>
                  </div>
                  
                  <div className="rounded-xl border overflow-hidden">
                    <table className="w-full text-left text-[12.5px] font-mono">
                      <thead>
                        <tr className="border-b bg-muted/40 text-[10.5px] font-bold text-muted-foreground uppercase font-mono">
                          <th className="p-3">Customer</th>
                          <th className="p-3 text-center">Volume</th>
                          <th className="p-3 text-center">Open</th>
                          <th className="p-3 text-right">Avg Res (hrs)</th>
                          <th className="p-3 text-center">Rating</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {m86CustomerHeatmap.map((c, idx) => (
                          <tr key={idx} className="hover:bg-muted/30 transition-colors">
                            <td className="p-3 font-bold text-foreground">{c.customer}</td>
                            <td className="p-3 text-center font-bold">{c.complaints}</td>
                            <td className="p-3 text-center text-foreground">{c.open}</td>
                            <td className="p-3 text-right font-extrabold text-foreground">{c.avgResolution} hrs</td>
                            <td className="p-3 text-center">
                              <span className={`inline-block px-1.5 py-0.25 rounded text-[9.5px] font-extrabold uppercase ${
                                c.rating === "Good" ? "bg-green-500/10 text-green-500" :
                                c.rating === "Attention" ? "bg-amber-500/10 text-amber-500" : "bg-red-500/10 text-red-500 animate-pulse font-black"
                              }`}>
                                {c.rating}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-3 border-t">
                    <span className="text-[11px] text-muted-foreground font-mono">Last digest sent: 1st Monday, Feb 2025</span>
                    <button
                      onClick={handleGenerateReport86}
                      disabled={m86ReportGenerating}
                      className="inline-flex items-center gap-1.5 h-9 px-4 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 disabled:opacity-50 transition-all text-[12px] shadow-sm shrink-0"
                    >
                      {m86ReportGenerating ? (
                        <>
                          <Loader2 className="h-3.5 w-3.5 animate-spin" /> Compiling Report...
                        </>
                      ) : (
                        <>
                          <Download className="h-3.5 w-3.5" /> Force Generate Monthly Digest
                        </>
                      )}
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>
      ) : (
        // Generic fallback view for other modules (M5 to M9) showing only specific submodule data
        <div className="space-y-6">
          {/* Compact Summary Strip */}
          <div className="rounded-2xl border px-5 py-3 bg-card flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px]">
            {s.kpis.map((k: any, i: number) => (
              <span key={k.label} className="flex items-center gap-1.5">
                {i > 0 && <span className="text-muted-foreground mr-1.5">•</span>}
                <span className="font-semibold text-foreground">{k.label} <span className="font-mono text-primary ml-1">{k.value}</span></span>
              </span>
            ))}
          </div>

          {/* Records Table */}
          <DataCard
            title={`${s.title} — Active Records`}
            action={
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg border text-[12px] font-medium hover:bg-muted transition-all">
                  <Filter className="h-3.5 w-3.5" /> Filter
                </button>
                <button onClick={() => toast.info(`Adding new record item to ${s.title}...`)} className="inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-primary text-primary-foreground text-[12px] font-medium hover:opacity-90 transition-all">
                  <Plus className="h-3.5 w-3.5" /> New Record
                </button>
              </div>
            }
            columns={s.columns}
            rows={s.rows}
          />
        </div>

      )
    }

      {/* Footer navigation back links */}
      <div className="mt-8">
        <Link to="/m/$moduleId" params={{ moduleId: m.id }} className="inline-flex items-center gap-1.5 text-[12.5px] text-muted-foreground hover:text-foreground transition-colors font-semibold">
          <ChevronLeft className="h-3.5 w-3.5" /> Back to {m.short}
        </Link>
      </div>
    </div>
    )
  );
}
