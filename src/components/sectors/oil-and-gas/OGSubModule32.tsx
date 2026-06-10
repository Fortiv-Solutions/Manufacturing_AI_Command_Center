import { useState } from "react";
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  HelpCircle,
  UserCheck,
  ShieldAlert,
  Download,
  FileSpreadsheet,
  ChevronRight,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Qualification {
  name: string;
  certificate: string;
  status: "PASS" | "FAIL";
  expiry: string;
}

interface ApprovalStep {
  step: number;
  role: string;
  approver: string;
  status: "Completed" | "Pending" | "Skipped";
  timestamp?: string;
}

interface Permit {
  id: string;
  type:
    | "Hot Work"
    | "Cold Work"
    | "Confined Space"
    | "Elec Isolation"
    | "Height Work"
    | "Excavation";
  location: string;
  personnel: string;
  issuedBy: string;
  issuedAt: string;
  expiryAt: string;
  linkedJsa: string;
  status: "Active" | "Pending" | "Closed" | "Blocked" | "Draft";
  escalated: boolean;
  qualifications: Qualification[];
  approvals: ApprovalStep[];
}

export function OGSubModule32() {
  const [selectedPermitId, setSelectedPermitId] = useState("PTW-2025-1147");
  const [permits, setPermits] = useState<Permit[]>([
    {
      id: "PTW-2025-1147",
      type: "Hot Work",
      location: "Well Pad C - Compressor Area",
      personnel: "Rajesh Kumar, Ramesh Nair",
      issuedBy: "Anand Sharma",
      issuedAt: "28 Oct 2025, 07:30 IST",
      expiryAt: "28 Oct 2025, 14:00 IST",
      linkedJsa: "JSA-2025-0314",
      status: "Active",
      escalated: false,
      qualifications: [
        {
          name: "Rajesh Kumar",
          certificate: "Hot Work Awareness",
          status: "PASS",
          expiry: "12 Dec 2026",
        },
        {
          name: "Rajesh Kumar",
          certificate: "Gas Testing Level 1",
          status: "PASS",
          expiry: "28 Apr 2026",
        },
        {
          name: "Ramesh Nair",
          certificate: "Safety Induction",
          status: "PASS",
          expiry: "01 Nov 2026",
        },
      ],
      approvals: [
        {
          step: 1,
          role: "Area Authority",
          approver: "Sushant Verma",
          status: "Completed",
          timestamp: "28 Oct 07:15 IST",
        },
        {
          step: 2,
          role: "Safety Officer",
          approver: "Priya Menon",
          status: "Completed",
          timestamp: "28 Oct 07:22 IST",
        },
        {
          step: 3,
          role: "Site Manager",
          approver: "Anand Sharma",
          status: "Completed",
          timestamp: "28 Oct 07:30 IST",
        },
      ],
    },
    {
      id: "PTW-2025-1148",
      type: "Elec Isolation",
      location: "Substation A",
      personnel: "Vijay Singh, Deepak Arora",
      issuedBy: "Sushant Verma",
      issuedAt: "--",
      expiryAt: "Shift duration",
      linkedJsa: "JSA-2025-0315",
      status: "Blocked",
      escalated: true,
      qualifications: [
        {
          name: "Vijay Singh",
          certificate: "OISD Electrical Cert",
          status: "FAIL",
          expiry: "Expired 15 Oct 2025",
        },
        {
          name: "Deepak Arora",
          certificate: "Lockout/Tagout Trained",
          status: "PASS",
          expiry: "04 Aug 2026",
        },
      ],
      approvals: [
        { step: 1, role: "Area Authority", approver: "Sushant Verma", status: "Pending" },
        { step: 2, role: "Electrical Specialist", approver: "R. K. Mehta", status: "Pending" },
        { step: 3, role: "Safety Officer", approver: "Priya Menon", status: "Pending" },
      ],
    },
    {
      id: "PTW-2025-1149",
      type: "Confined Space",
      location: "Water Storage Tank B",
      personnel: "Vijay Singh, Deepak Arora",
      issuedBy: "Anand Sharma",
      issuedAt: "28 Oct 2025, 06:15 IST",
      expiryAt: "28 Oct 2025, 08:30 IST",
      linkedJsa: "JSA-2025-0312",
      status: "Closed",
      escalated: false,
      qualifications: [
        {
          name: "Vijay Singh",
          certificate: "Confined Space Entry",
          status: "PASS",
          expiry: "03 Jan 2026",
        },
        {
          name: "Deepak Arora",
          certificate: "First Aid Level 2",
          status: "PASS",
          expiry: "18 Sep 2026",
        },
      ],
      approvals: [
        {
          step: 1,
          role: "Area Authority",
          approver: "Sushant Verma",
          status: "Completed",
          timestamp: "28 Oct 05:55 IST",
        },
        {
          step: 2,
          role: "Safety Officer",
          approver: "Priya Menon",
          status: "Completed",
          timestamp: "28 Oct 06:05 IST",
        },
        {
          step: 3,
          role: "Site Manager",
          approver: "Anand Sharma",
          status: "Completed",
          timestamp: "28 Oct 06:15 IST",
        },
      ],
    },
    {
      id: "PTW-2025-1150",
      type: "Excavation",
      location: "Well Pad C North Boundary",
      personnel: "Ravi Patel, Ravi Joshi",
      issuedBy: "Sushant Verma",
      issuedAt: "--",
      expiryAt: "24 hours",
      linkedJsa: "Pending JSA approval",
      status: "Draft",
      escalated: false,
      qualifications: [
        {
          name: "Ravi Patel",
          certificate: "Civil Safety Awareness",
          status: "PASS",
          expiry: "09 Jul 2026",
        },
      ],
      approvals: [
        { step: 1, role: "Area Authority", approver: "Sushant Verma", status: "Pending" },
        { step: 2, role: "Civil Engineer", approver: "H. S. Rao", status: "Pending" },
      ],
    },
  ]);

  const activePermit = permits.find((p) => p.id === selectedPermitId) || permits[0];

  const handleApproveStep = (stepNo: number) => {
    setPermits((prev) =>
      prev.map((p) => {
        if (p.id === selectedPermitId) {
          const updatedApprovals = p.approvals.map((a) =>
            a.step === stepNo
              ? { ...a, status: "Completed" as const, timestamp: new Date().toLocaleTimeString() }
              : a,
          );
          // If all approved, transition status
          const allCompleted = updatedApprovals.every((a) => a.status === "Completed");
          return {
            ...p,
            approvals: updatedApprovals,
            status: allCompleted ? ("Active" as const) : p.status,
            issuedAt: allCompleted ? new Date().toLocaleString() : p.issuedAt,
          };
        }
        return p;
      }),
    );
    toast.success(`Approval step ${stepNo} logged successfully.`);
  };

  const getPermitTypeColor = (type: string) => {
    switch (type) {
      case "Hot Work":
        return "bg-[#C0392B]/10 text-[#C0392B] border-[#C0392B]/20";
      case "Confined Space":
        return "bg-[#C8922A]/10 text-[#C8922A] border-[#C8922A]/20";
      case "Elec Isolation":
        return "bg-[#1A6B8A]/10 text-[#1A6B8A] border-[#1A6B8A]/20";
      case "Cold Work":
        return "bg-[#0F7B6C]/10 text-[#0F7B6C] border-[#0F7B6C]/20";
      case "Height Work":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  const getPermitStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20";
      case "Blocked":
        return "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 animate-pulse";
      case "Closed":
        return "bg-slate-100 text-slate-500 border-slate-200";
      case "Pending":
        return "bg-amber-50 text-[#C8922A] border-[#C8922A]/20";
      default:
        return "bg-blue-50 text-blue-600 border-blue-200";
    }
  };

  const handleShiftHandover = () => {
    toast.loading("Generating digital shift handover brief...");
    setTimeout(() => {
      toast.dismiss();
      toast.success("Shift Handover Brief compiled! 2 active permits mapped.");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      {/* Top Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">
            Active Permits
          </p>
          <p className="text-xl font-bold font-mono text-[#0D1B2A] mt-1">
            {permits.filter((p) => p.status === "Active").length}
          </p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">
            Pending Approvals
          </p>
          <p className="text-xl font-bold font-mono text-[#C8922A] mt-1">
            {
              permits.filter(
                (p) =>
                  p.status === "Pending" ||
                  p.approvals.some((a) => a.status === "Pending" && p.status !== "Blocked"),
              ).length
            }
          </p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold text-[#8892A0] uppercase tracking-wider">
            Closed Today
          </p>
          <p className="text-xl font-bold font-mono text-[#0F7B6C] mt-1">
            {permits.filter((p) => p.status === "Closed").length}
          </p>
        </div>
        <div className="rounded-xl border border-[#D1D9E3] bg-white p-4 shadow-sm border-l-4 border-l-[#C0392B]">
          <p className="text-[10px] font-bold text-[#C0392B] uppercase tracking-wider">
            Gate Violations / Blocked
          </p>
          <p className="text-xl font-bold font-mono text-[#C0392B] mt-1">
            {permits.filter((p) => p.status === "Blocked").length}
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Permit Table (65%) */}
        <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] flex items-center justify-between">
            <h3 className="text-[13.5px] font-bold text-[#0D1B2A]">Digital Permit board</h3>
            <div className="flex items-center gap-2">
              <Button
                onClick={handleShiftHandover}
                variant="outline"
                size="sm"
                className="h-8 text-xs"
              >
                <Clock className="h-3.5 w-3.5 mr-1" /> Shift Handover Summary
              </Button>
              <Button
                onClick={() => toast.success("Exporting permit registry...")}
                variant="outline"
                size="sm"
                className="h-8 text-xs"
              >
                <Download className="h-3.5 w-3.5 mr-1" /> Export Registry
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-[#D1D9E3] text-[#1A6B8A] font-semibold">
                  <th className="p-3">Permit ID</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Location</th>
                  <th className="p-3">Personnel</th>
                  <th className="p-3">Linked JSA</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E3]/50">
                {permits.map((permit) => (
                  <tr
                    key={permit.id}
                    onClick={() => setSelectedPermitId(permit.id)}
                    className={`hover:bg-[#F5F6FA] cursor-pointer transition-colors ${selectedPermitId === permit.id ? "bg-slate-50" : ""}`}
                  >
                    <td className="p-3 font-mono font-bold text-[#0D1B2A]">{permit.id}</td>
                    <td className="p-3">
                      <Badge
                        className={`${getPermitTypeColor(permit.type)} border text-[10px] font-medium px-2 rounded`}
                      >
                        {permit.type}
                      </Badge>
                    </td>
                    <td className="p-3 font-medium text-[#0D1B2A]">{permit.location}</td>
                    <td
                      className="p-3 text-[#8892A0] truncate max-w-[120px]"
                      title={permit.personnel}
                    >
                      {permit.personnel}
                    </td>
                    <td className="p-3 font-mono text-[#1A6B8A]">{permit.linkedJsa}</td>
                    <td className="p-3">
                      <Badge
                        className={`${getPermitStatusColor(permit.status)} border text-[10px] font-semibold px-2 py-0.5 rounded-full`}
                      >
                        {permit.status}
                      </Badge>
                    </td>
                    <td className="p-3" onClick={(e) => e.stopPropagation()}>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setSelectedPermitId(permit.id)}
                        className="h-7 px-2 hover:bg-slate-100"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Detail Card (35%) */}
        <div className="lg:col-span-4 rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-5">
          <div className="border-b pb-3">
            <h4 className="text-[13.5px] font-bold text-[#0D1B2A] font-mono">{activePermit.id}</h4>
            <p className="text-[11px] text-[#8892A0] mt-0.5">
              Permit parameters & compliance verification status
            </p>
          </div>

          {/* Qualification Checker Gate */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-1 text-[#1A6B8A] font-bold text-[11px] uppercase tracking-wider">
              <UserCheck className="h-4 w-4" />
              <span>Qualification Gate Checks</span>
            </div>

            <div className="space-y-2">
              {activePermit.qualifications.map((q, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-lg border text-xs bg-slate-50"
                >
                  <div>
                    <p className="font-semibold text-[#0D1B2A]">{q.name}</p>
                    <p className="text-[10px] text-[#8892A0]">{q.certificate}</p>
                  </div>
                  {q.status === "PASS" ? (
                    <Badge className="bg-[#E3F4F2] text-[#0F7B6C] hover:bg-[#E3F4F2] font-semibold text-[9.5px]">
                      PASS
                    </Badge>
                  ) : (
                    <Badge className="bg-[#FDECEA] text-[#C0392B] hover:bg-[#FDECEA] font-semibold text-[9.5px] animate-pulse">
                      EXPIRED
                    </Badge>
                  )}
                </div>
              ))}
            </div>

            {activePermit.status === "Blocked" && (
              <div className="p-3 bg-[#FDECEA] border border-[#C0392B]/20 rounded-xl flex gap-2 text-xs text-[#C0392B]">
                <ShieldAlert className="h-4.5 w-4.5 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Permit Blocked at Gate</p>
                  <p className="text-[10.5px] leading-relaxed mt-0.5">
                    A named worker has expired certifications. Substitute with a qualified crew
                    member to unlock.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Workflow / Approval Timeline */}
          <div className="space-y-3 pt-3 border-t">
            <div className="flex items-center gap-1 text-[#1A6B8A] font-bold text-[11px] uppercase tracking-wider">
              <ShieldCheck className="h-4 w-4" />
              <span>Workflow Sign-off Chain</span>
            </div>

            <div className="relative pl-5 border-l-2 border-slate-100 space-y-4">
              {activePermit.approvals.map((app) => (
                <div key={app.step} className="relative text-xs">
                  {/* Circle Marker */}
                  <span
                    className={`absolute -left-[27px] top-0.5 h-3.5 w-3.5 rounded-full border-2 bg-white flex items-center justify-center ${
                      app.status === "Completed" ? "border-[#0F7B6C]" : "border-slate-300"
                    }`}
                  >
                    {app.status === "Completed" && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0F7B6C]" />
                    )}
                  </span>

                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-bold text-[#0D1B2A]">{app.role}</p>
                      <p className="text-[10.5px] text-[#8892A0]">{app.approver}</p>
                    </div>
                    {app.status === "Completed" ? (
                      <span className="text-[10px] font-mono text-[#0F7B6C] font-semibold">
                        {app.timestamp}
                      </span>
                    ) : activePermit.status === "Blocked" ? (
                      <span className="text-[10px] text-[#C0392B] font-medium flex items-center gap-0.5">
                        <XCircle className="h-3 w-3" /> Gate Blocked
                      </span>
                    ) : (
                      <Button
                        onClick={() => handleApproveStep(app.step)}
                        size="sm"
                        className="h-6 bg-[#C8922A] hover:bg-[#b78222] text-white text-[10px] px-2"
                      >
                        Approve
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
