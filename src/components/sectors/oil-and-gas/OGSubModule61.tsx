import { useState } from "react";
import {
  CheckCircle2, AlertTriangle, XCircle, Search, Mail,
  Download, ExternalLink, Calendar, ChevronRight, User
} from "lucide-react";
import { toast } from "sonner";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────── */
interface Certificate {
  name: string;
  status: "CURRENT" | "EXPIRING" | "EXPIRED";
  issuedDate: string;
  expiryDate: string;
  daysRemaining: number;
  renewalStatus?: string;
}

interface Worker {
  id: string;
  name: string;
  role: string;
  department: string;
  site: string;
  onboardDate: string;
  certificates: Certificate[];
  blockedPermits: string[];
}

/* ── Mock Data ─────────────────────────────────────── */
const COMPLIANCE_DATA = [
  { name: "Fully Compliant", value: 134, color: "#0F7B6C" },
  { name: "Expiring Within 30 Days", value: 5, color: "#C8922A" },
  { name: "Already Expired - Blocked", value: 3, color: "#C0392B" }
];

const EXPIRING_30_DAYS = [
  { name: "Ramesh Nair", cert: "H2S Awareness", date: "11 Nov 2025", days: 7 },
  { name: "Meena Sharma", cert: "First Aid (St. John)", date: "14 Nov 2025", days: 10 },
  { name: "Suresh Kumar", cert: "Rigging Supervisor", date: "22 Nov 2025", days: 18 },
  { name: "Priya Menon", cert: "OISD-STD-154", date: "25 Nov 2025", days: 21 },
  { name: "Ravi Patel", cert: "Fire Safety Awareness", date: "30 Nov 2025", days: 26 }
];

const EXPIRED_BLOCKED = [
  { name: "Vijay Singh", cert: "Well Control Level 1", date: "21 Oct 2025", daysOverdue: 13 },
  { name: "Suresh Kumar", cert: "BOSIET", date: "02 Nov 2025", daysOverdue: 2 },
  { name: "Deepak Arora", cert: "Gas Testing Level 2", date: "29 Oct 2025", daysOverdue: 5 }
];

const WORKFORCE: Worker[] = [
  {
    id: "EMP-0472",
    name: "Vijay Singh",
    role: "Field Technician",
    department: "Operations",
    site: "Rajasthan Pad A",
    onboardDate: "12 Mar 2019",
    blockedPermits: ["Hot Work (well area)", "Well Test Permits", "Workover AFE execution"],
    certificates: [
      { name: "Well Control Level 1", status: "EXPIRED", issuedDate: "22 Oct 2021", expiryDate: "21 Oct 2025", daysRemaining: -13, renewalStatus: "Booked: 14 Nov (IWCF Mumbai)" },
      { name: "H2S Awareness", status: "EXPIRING", issuedDate: "04 Nov 2024", expiryDate: "11 Nov 2025", daysRemaining: 7 },
      { name: "OISD-STD-154", status: "EXPIRING", issuedDate: "04 Nov 2024", expiryDate: "11 Nov 2025", daysRemaining: 7 },
      { name: "First Aid (St. John)", status: "CURRENT", issuedDate: "08 Jan 2025", expiryDate: "07 Jan 2027", daysRemaining: 430 },
      { name: "Confined Space Entry", status: "CURRENT", issuedDate: "15 Mar 2024", expiryDate: "14 Mar 2026", daysRemaining: 132 },
      { name: "Gas Testing Level 1", status: "CURRENT", issuedDate: "15 Mar 2024", expiryDate: "14 Mar 2026", daysRemaining: 132 },
      { name: "Fire Safety Awareness", status: "CURRENT", issuedDate: "02 Feb 2025", expiryDate: "01 Feb 2026", daysRemaining: 104 },
      { name: "PTW Awareness", status: "CURRENT", issuedDate: "12 Mar 2024", expiryDate: "11 Mar 2026", daysRemaining: 129 }
    ]
  },
  {
    id: "EMP-0881",
    name: "Suresh Kumar",
    role: "Field Technician",
    department: "Maintenance",
    site: "Rajasthan Block Centre",
    onboardDate: "14 Jun 2021",
    blockedPermits: ["Offshore Helicopter Travel Clearance"],
    certificates: [
      { name: "BOSIET", status: "EXPIRED", issuedDate: "03 Nov 2021", expiryDate: "02 Nov 2025", daysRemaining: -2, renewalStatus: "Pending Booking" },
      { name: "Rigging Supervisor", status: "EXPIRING", issuedDate: "23 Nov 2022", expiryDate: "22 Nov 2025", daysRemaining: 18 },
      { name: "First Aid (St. John)", status: "CURRENT", issuedDate: "10 Feb 2024", expiryDate: "09 Feb 2026", daysRemaining: 112 }
    ]
  },
  {
    id: "EMP-1029",
    name: "Deepak Arora",
    role: "Field Technician",
    department: "Operations",
    site: "Rajasthan Pad A",
    onboardDate: "20 Sep 2023",
    blockedPermits: ["Confined Space Entry (as gas tester)", "PTW Issuer (Confined Space)"],
    certificates: [
      { name: "Gas Testing Level 2", status: "EXPIRED", issuedDate: "30 Oct 2023", expiryDate: "29 Oct 2025", daysRemaining: -5 },
      { name: "H2S Awareness", status: "CURRENT", issuedDate: "10 Jan 2025", expiryDate: "09 Jan 2026", daysRemaining: 81 },
      { name: "Confined Space Entry", status: "CURRENT", issuedDate: "09 Dec 2023", expiryDate: "08 Dec 2025", daysRemaining: 5 }
    ]
  },
  {
    id: "EMP-0612",
    name: "Ramesh Nair",
    role: "Senior Technician",
    department: "Operations",
    site: "Rajasthan Pad B",
    onboardDate: "10 Jan 2020",
    blockedPermits: [],
    certificates: [
      { name: "H2S Awareness", status: "EXPIRING", issuedDate: "12 Nov 2024", expiryDate: "11 Nov 2025", daysRemaining: 7 },
      { name: "PTW Awareness", status: "CURRENT", issuedDate: "15 Apr 2024", expiryDate: "14 Apr 2026", daysRemaining: 163 }
    ]
  },
  {
    id: "EMP-0941",
    name: "Meena Sharma",
    role: "Environment Officer",
    department: "HSE",
    site: "Rajasthan Block Centre",
    onboardDate: "05 May 2022",
    blockedPermits: [],
    certificates: [
      { name: "First Aid (St. John)", status: "EXPIRING", issuedDate: "15 Nov 2023", expiryDate: "14 Nov 2025", daysRemaining: 10 }
    ]
  }
];

export function OGSubModule61() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWorker, setSelectedWorker] = useState<Worker | null>(WORKFORCE[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSendReminder = (name: string, cert: string) => {
    toast.success(`Reminder sent to ${name} and their supervisor via SMS and Email for: ${cert}`);
  };

  const handleBookRenewal = (name: string, cert: string) => {
    toast.success(`Renewal course request pre-populated for ${name} - ${cert}. Forwarded to HR & HSE.`);
  };

  const filteredWorkers = WORKFORCE.filter(w =>
    w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    w.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">

      {/* ── Top Stats Bar ────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Workforce Compliance Rate", value: "94.4%", color: "#0F7B6C", bg: "bg-[#E3F4F2]", border: "border-[#0F7B6C]/20" },
          { label: "Certifications Expiring (30 Days)", value: "5", color: "#C8922A", bg: "bg-amber-50", border: "border-[#C8922A]/20", pulse: true },
          { label: "Workers Currently Blocked", value: "3", color: "#C0392B", bg: "bg-[#FDECEA]", border: "border-[#C0392B]/20", pulse: true },
          { label: "Onboardings In Progress", value: "2", color: "#1A6B8A", bg: "bg-blue-50", border: "border-blue-200" }
        ].map(kpi => (
          <div
            key={kpi.label}
            className={`rounded-2xl border ${kpi.border} bg-white p-4 shadow-sm flex items-center gap-3 transition-transform hover:scale-[1.01]`}
          >
            <div className={`${kpi.bg} h-11 w-11 rounded-xl flex items-center justify-center shrink-0`}>
              {kpi.value === "94.4%" ? (
                <CheckCircle2 className="h-6 w-6 text-[#0F7B6C]" />
              ) : kpi.color === "#C8922A" ? (
                <AlertTriangle className={`h-6 w-6 text-[#C8922A] ${kpi.pulse ? "animate-bounce" : ""}`} />
              ) : kpi.color === "#C0392B" ? (
                <XCircle className={`h-6 w-6 text-[#C0392B] ${kpi.pulse ? "animate-pulse" : ""}`} />
              ) : (
                <User className="h-6 w-6 text-[#1A6B8A]" />
              )}
            </div>
            <div>
              <p className="text-[11px] text-[#8892A0] font-semibold">{kpi.label}</p>
              <p className="text-2xl font-bold font-mono" style={{ color: kpi.color }}>{kpi.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Top Half: Compliance Rate Donut Chart ─────── */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-6 shadow-sm">
        <h3 className="text-sm font-bold text-[#0D1B2A] mb-4">Workforce Compliance Distribution</h3>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6 h-[200px]">
          <div className="w-full md:w-1/2 h-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={COMPLIANCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {COMPLIANCE_DATA.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} Personnel`, "Breakdown"]} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 gap-3 w-full md:w-1/2">
            {COMPLIANCE_DATA.map(item => (
              <div key={item.name} className="flex items-center gap-3">
                <span className="h-3.5 w-3.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <div className="flex-1 flex justify-between text-xs">
                  <span className="font-semibold text-[#0D1B2A]">{item.name}</span>
                  <span className="font-mono text-[#8892A0] font-bold">
                    {item.value} ({((item.value / 142) * 100).toFixed(1)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom Half: Forecast & Expired Alerts ─────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Expiring Soon (30 Days) */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#C8922A]" />
              <h3 className="text-sm font-bold text-[#0D1B2A]">Expiring in Next 30 Days</h3>
            </div>
            <Badge className="bg-amber-50 text-[#C8922A] border border-[#C8922A]/20 text-[9px] font-bold">
              {EXPIRING_30_DAYS.length} Active
            </Badge>
          </div>
          <div className="p-2 divide-y divide-[#D1D9E3] flex-1">
            {EXPIRING_30_DAYS.map(row => (
              <div key={`${row.name}-${row.cert}`} className="flex items-center justify-between p-3 text-xs hover:bg-slate-50 transition-colors">
                <div>
                  <p className="font-bold text-[#0D1B2A]">{row.name}</p>
                  <p className="text-[11px] text-[#8892A0]">{row.cert}</p>
                </div>
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <p className="font-mono text-[11.5px] font-bold text-[#C8922A]">{row.date}</p>
                    <p className="text-[10px] text-[#8892A0] font-mono">{row.days} days remaining</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSendReminder(row.name, row.cert)}
                    className="h-8 border-[#C8922A]/40 text-[#C8922A] hover:bg-amber-50 text-[10.5px] font-bold"
                  >
                    <Mail className="h-3.5 w-3.5 mr-1" />
                    Remind
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Already Expired - Blocked */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <XCircle className="h-4 w-4 text-[#C0392B]" />
              <h3 className="text-sm font-bold text-[#0D1B2A]">Already Expired - Action Required</h3>
            </div>
            <Badge className="bg-[#FDECEA] text-[#C0392B] border border-[#C0392B]/20 text-[9px] font-bold">
              {EXPIRED_BLOCKED.length} Blocked
            </Badge>
          </div>
          <div className="p-2 divide-y divide-[#D1D9E3] flex-1">
            {EXPIRED_BLOCKED.map(row => (
              <div
                key={`${row.name}-${row.cert}`}
                className="flex items-center justify-between p-3 text-xs hover:bg-slate-50 transition-colors border-l-4 border-l-[#C0392B] animate-pulse"
              >
                <div>
                  <p className="font-bold text-[#0D1B2A]">{row.name}</p>
                  <p className="text-[11px] text-[#8892A0]">{row.cert}</p>
                </div>
                <div className="flex items-center gap-4 text-right">
                  <div>
                    <p className="font-mono text-[11.5px] font-bold text-[#C0392B]">Lapsed {row.date}</p>
                    <p className="text-[10px] text-[#8892A0] font-mono">{row.daysOverdue} days overdue</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleBookRenewal(row.name, row.cert)}
                    className="h-8 border-[#C0392B]/40 text-[#C0392B] hover:bg-[#FDECEA] text-[10.5px] font-bold"
                  >
                    View Renewal
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Employee Search & Cert Portfolio Card ─────── */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-[#0D1B2A]">Employee Certification Lookup</h3>
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-[#8892A0]" />
          </div>
          <input
            type="text"
            placeholder="Search worker..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            className="w-full pl-9 pr-4 py-2 border border-[#D1D9E3] rounded-xl text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#1A6B8A]"
          />
          {showDropdown && searchQuery && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-[#D1D9E3] rounded-xl shadow-lg max-h-48 overflow-y-auto divide-y divide-slate-100">
              {filteredWorkers.map(w => (
                <button
                  key={w.id}
                  onClick={() => {
                    setSelectedWorker(w);
                    setShowDropdown(false);
                    setSearchQuery(w.name);
                  }}
                  className="w-full text-left px-4 py-2 text-xs text-[#0D1B2A] hover:bg-slate-50 flex items-center justify-between"
                >
                  <div>
                    <span className="font-bold">{w.name}</span>
                    <span className="text-[10px] text-[#8892A0] ml-2">({w.role})</span>
                  </div>
                  <Badge className="bg-slate-100 text-slate-500 font-mono text-[9px]">{w.id}</Badge>
                </button>
              ))}
              {filteredWorkers.length === 0 && (
                <div className="px-4 py-3 text-xs text-[#8892A0] text-center">No results found</div>
              )}
            </div>
          )}
        </div>

        {/* Selected Worker Cert Card */}
        {selectedWorker && (
          <div className="border border-[#D1D9E3] rounded-xl p-5 bg-slate-50/30 grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 bg-blue-50 border border-blue-200 rounded-full flex items-center justify-center shrink-0">
                  <User className="h-6 w-6 text-[#1A6B8A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0D1B2A]">{selectedWorker.name}</h4>
                  <p className="text-[11px] text-[#8892A0] font-semibold">{selectedWorker.role} — {selectedWorker.department}</p>
                </div>
              </div>
              <div className="space-y-1.5 text-xs text-[#8892A0]">
                <p>Site: <strong className="text-[#0D1B2A]">{selectedWorker.site}</strong></p>
                <p>Employee ID: <strong className="text-[#0D1B2A] font-mono">{selectedWorker.id}</strong></p>
                <p>Onboard Date: <strong className="text-[#0D1B2A] font-mono">{selectedWorker.onboardDate}</strong></p>
              </div>

              {selectedWorker.blockedPermits.length > 0 ? (
                <div className="p-3 border border-[#C0392B]/20 bg-[#FDECEA] rounded-xl space-y-1">
                  <p className="text-[11px] font-bold text-[#C0392B] flex items-center gap-1.5 animate-pulse">
                    <XCircle className="h-3.5 w-3.5" />
                    QUALIFICATION BLOCKED
                  </p>
                  <p className="text-[10px] text-[#C0392B]/80 leading-relaxed">
                    Blocked from: {selectedWorker.blockedPermits.join(", ")}
                  </p>
                </div>
              ) : (
                <div className="p-3 border border-[#0F7B6C]/20 bg-[#E3F4F2] rounded-xl">
                  <p className="text-[11px] font-bold text-[#0F7B6C] flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    QUALIFIED FOR ALL ROLES
                  </p>
                </div>
              )}
            </div>

            <div className="md:col-span-3 space-y-3">
              <h5 className="text-[10.5px] font-bold text-[#1A6B8A] uppercase tracking-wider">Certification Portfolio</h5>
              <div className="max-h-[220px] overflow-y-auto border border-[#D1D9E3] rounded-xl bg-white divide-y divide-[#D1D9E3] text-xs">
                {selectedWorker.certificates.map(c => {
                  const statusColors = {
                    CURRENT: "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20",
                    EXPIRING: "bg-amber-50 text-amber-700 border-amber-200",
                    EXPIRED: "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 font-bold"
                  }[c.status];

                  return (
                    <div key={c.name} className="p-3 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div>
                        <p className="font-semibold text-[#0D1B2A]">{c.name}</p>
                        <p className="text-[9.5px] text-[#8892A0] font-mono">
                          Expires: {c.expiryDate} {c.renewalStatus && `| (${c.renewalStatus})`}
                        </p>
                      </div>
                      <Badge className={`${statusColors} border text-[9px] font-bold font-mono`}>
                        {c.status}
                      </Badge>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center gap-2 pt-2">
                <Button
                  size="sm"
                  onClick={() => toast.success("Downloading complete certification portfolio PDF...")}
                  className="h-8 bg-[#C8922A] hover:bg-[#b78222] text-white text-[10.5px] font-bold rounded-lg"
                >
                  <Download className="h-3.5 w-3.5 mr-1" />
                  Download PDF
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => toast.info("Opening permit audit history logs...")}
                  className="h-8 border-[#D1D9E3] text-[#0D1B2A] hover:bg-slate-50 text-[10.5px] font-bold rounded-lg"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Permit History
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
