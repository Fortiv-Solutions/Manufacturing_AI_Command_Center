import { useState } from "react";
import {
  FileText,
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  ArrowRight,
  UserPlus,
  RefreshCw,
  UserCheck,
  Shield,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────── */
interface LogEntry {
  time: string;
  action: string;
  status: "success" | "blocked" | "resolved";
}

export function OGSubModule63() {
  const [isSubstituted, setIsSubstituted] = useState(false);
  const [subName, setSubName] = useState("");
  const [permitIssued, setPermitIssued] = useState(false);
  const [logs, setLogs] = useState<LogEntry[]>([
    {
      time: "11:30:12 IST",
      action: "PTW Check: Vijay Singh ✓, Ramesh Nair ✗ (Gas Testing L2 expired), Deepak Arora ✓",
      status: "blocked",
    },
  ]);

  const handleApplySubstitute = () => {
    setIsSubstituted(true);
    toast.success("Substitute Suresh Kumar assigned. Re-running qualification checks...");
    setLogs((prev) => [
      {
        time: "11:32:05 IST",
        action: "Substituted Ramesh Nair with Suresh Kumar. Running verification...",
        status: "resolved",
      },
      {
        time: "11:32:07 IST",
        action:
          "Suresh Kumar check: Gas Testing L2 ✓ (exp. 14 Sep 2026). All workers now qualified.",
        status: "success",
      },
      ...prev,
    ]);
  };

  const handleReset = () => {
    setIsSubstituted(false);
    setPermitIssued(false);
    setLogs([
      {
        time: "11:30:12 IST",
        action: "PTW Check: Vijay Singh ✓, Ramesh Nair ✗ (Gas Testing L2 expired), Deepak Arora ✓",
        status: "blocked",
      },
    ]);
    toast("Permit state reset to original request.");
  };

  const handleSubmitPermit = () => {
    setPermitIssued(true);
    toast.success("Permit PTW-2025-1163 successfully issued!");
    setLogs((prev) => [
      {
        time: "11:34:10 IST",
        action: "Permit PTW-2025-1163 officially issued by Priya Menon (HSE Manager).",
        status: "success",
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-6">
      {/* ── Top Bar/Header info ───────────────────────── */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center shrink-0">
            <FileText className="h-5.5 w-5.5 text-[#1A6B8A]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-sm text-[#0D1B2A]">PTW-2025-1163</span>
              <Badge className="bg-[#F5F0E8] text-[#C8922A] border-[#C8922A]/20 border text-[9px] font-bold">
                Confined Space Entry
              </Badge>
            </div>
            <p className="text-[11px] text-[#8892A0] font-semibold">
              Location: Storage Tank T-04 | Issuer: Priya Menon (HSE Manager)
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {permitIssued ? (
            <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-xs py-1 px-3 font-bold font-mono">
              STATUS: ISSUED ✓
            </Badge>
          ) : isSubstituted ? (
            <Badge className="bg-blue-50 text-[#1A6B8A] border-blue-200 border text-xs py-1 px-3 font-bold font-mono">
              STATUS: READY TO ISSUE
            </Badge>
          ) : (
            <Badge className="bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20 border text-xs py-1 px-3 font-bold font-mono animate-pulse">
              STATUS: BLOCKED ✗
            </Badge>
          )}
        </div>
      </div>

      {/* ── Main Grid ─────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Qualification Matrix check table (left 2/3) */}
        <div className="lg:col-span-2 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-[#D1D9E3] bg-slate-50/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-[#1A6B8A]" />
              <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">
                Crew Qualification Verification
              </h3>
            </div>
            <span className="text-[10px] text-[#8892A0]">Required certs marked per role</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[#D1D9E3] text-[9.5px] font-bold text-[#8892A0] uppercase tracking-wider bg-slate-50/20">
                  <th className="text-left py-3 px-4">Named Personnel</th>
                  <th className="text-center py-3 px-2">Confined Space Entry</th>
                  <th className="text-center py-3 px-2">Gas Testing L2</th>
                  <th className="text-center py-3 px-2">H2S Awareness</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D1D9E3]">
                {/* Worker 1: Vijay Singh */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[#0D1B2A]">Vijay Singh</p>
                    <p className="text-[10px] text-[#8892A0]">Entrant</p>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                      ✓ Valid <span className="font-mono text-[9px] text-[#8892A0]">(14 Mar)</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                      ✓ Valid <span className="font-mono text-[9px] text-[#8892A0]">(14 Mar)</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span
                      className="inline-flex items-center gap-1 text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 text-[10px]"
                      title="Advisory Warning - Expires soon"
                    >
                      ⚠ Expiring{" "}
                      <span className="font-mono text-[9px] text-[#8892A0]">(11 Nov)</span>
                    </span>
                  </td>
                </tr>

                {/* Worker 2: Ramesh Nair (or Substitute Suresh Kumar) */}
                {!isSubstituted ? (
                  <tr className="bg-red-50/30 hover:bg-red-50/50 transition-colors border-l-4 border-l-[#C0392B]">
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-[#0D1B2A]">Ramesh Nair</p>
                      <p className="text-[10px] text-[#8892A0]">Gas Tester (Named Role)</p>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                        ✓ Valid{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(20 Aug)</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#C0392B] font-bold bg-[#FDECEA] px-2 py-0.5 rounded-full border border-[#C0392B]/10 text-[10px]">
                        ✗ Expired{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(29 Oct)</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                        ✓ Valid{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(11 Nov)</span>
                      </span>
                    </td>
                  </tr>
                ) : (
                  <tr className="bg-blue-50/30 hover:bg-blue-50/50 transition-colors border-l-4 border-l-[#1A6B8A]">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-[#0D1B2A]">Suresh Kumar</p>
                        <Badge className="bg-blue-50 text-[#1A6B8A] border-blue-200 border text-[8px] font-bold">
                          SUBSTITUTE
                        </Badge>
                      </div>
                      <p className="text-[10px] text-[#8892A0]">Gas Tester (Substituted)</p>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                        ✓ Valid{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(15 Feb)</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                        ✓ Valid{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(14 Sep)</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-2 text-center">
                      <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                        ✓ Valid{" "}
                        <span className="font-mono text-[9px] text-[#8892A0]">(14 Sep)</span>
                      </span>
                    </td>
                  </tr>
                )}

                {/* Worker 3: Deepak Arora */}
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-[#0D1B2A]">Deepak Arora</p>
                    <p className="text-[10px] text-[#8892A0]">Standby Person</p>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                      ✓ Valid <span className="font-mono text-[9px] text-[#8892A0]">(08 Dec)</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                      ✓ Valid <span className="font-mono text-[9px] text-[#8892A0]">(18 Feb)</span>
                    </span>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <span className="inline-flex items-center gap-1 text-[#0F7B6C] font-semibold bg-[#E3F4F2] px-2 py-0.5 rounded-full border border-[#0F7B6C]/10 text-[10px]">
                      ✓ Valid <span className="font-mono text-[9px] text-[#8892A0]">(25 Mar)</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Panel / Block Overlay (right 1/3) */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col p-5 space-y-4">
          <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider border-b pb-1.5">
            PTW Submission Gate
          </h3>

          {permitIssued ? (
            <div className="bg-[#E3F4F2] border border-[#0F7B6C]/20 rounded-xl p-4 text-center space-y-3 flex-1 flex flex-col justify-center">
              <CheckCircle2 className="h-10 w-10 text-[#0F7B6C] mx-auto animate-bounce" />
              <div>
                <p className="text-sm font-bold text-[#0F7B6C]">Permit Issued Successfully</p>
                <p className="text-[11px] text-[#0F7B6C]/80 mt-1">
                  PTW-2025-1163 is now active. Crew cleared to proceed with safety compliance
                  verified.
                </p>
              </div>
              <Button
                size="sm"
                onClick={handleReset}
                variant="outline"
                className="h-8 border-[#0F7B6C]/30 text-[#0F7B6C] hover:bg-teal-50 text-[11px] font-bold mt-2"
              >
                <RefreshCw className="h-3 w-3 mr-1" /> Reset Permit View
              </Button>
            </div>
          ) : !isSubstituted ? (
            /* Block State */
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="bg-[#FDECEA] border border-[#C0392B]/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[#C0392B]">
                  <AlertTriangle className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-bold">PERMIT BLOCKED</span>
                </div>
                <p className="text-[11.5px] text-[#C0392B]/90 leading-relaxed font-semibold">
                  Ramesh Nair — Gas Testing Level 2 expired 29 Oct 2025.
                </p>
                <p className="text-[10.5px] text-[#8892A0] leading-relaxed">
                  Required: Current Gas Testing Level 2 for named gas tester role in Confined Space
                  Entry.
                </p>
              </div>

              {/* Substitute action field */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-[#8892A0] uppercase">
                  Assign Substitute Worker
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter worker name (e.g. Suresh Kumar)..."
                    value={subName}
                    onChange={(e) => setSubName(e.target.value)}
                    className="flex-1 px-3 py-1.5 border border-[#D1D9E3] rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-[#1A6B8A]"
                  />
                  {subName.toLowerCase() === "suresh kumar" && (
                    <Button
                      size="sm"
                      onClick={handleApplySubstitute}
                      className="h-8.5 bg-[#C8922A] hover:bg-[#b78222] text-white text-[11px] font-bold rounded-xl"
                    >
                      <UserPlus className="h-4 w-4 mr-1" /> Add
                    </Button>
                  )}
                </div>
                {subName.toLowerCase() === "suresh kumar" ? (
                  <p className="text-[10px] text-[#0F7B6C] font-semibold">
                    ✓ Suresh Kumar is qualified (Gas Testing L2 current)
                  </p>
                ) : (
                  <p className="text-[10px] text-[#8892A0] italic">
                    Type "Suresh Kumar" to pre-qualify a substitute.
                  </p>
                )}
              </div>

              <div className="relative">
                {/* Block Submit Overlay */}
                <div className="absolute inset-0 bg-white/80 backdrop-blur-[0.5px] rounded-xl flex items-center justify-center z-10 p-2 text-center">
                  <div className="space-y-1">
                    <ShieldAlert className="h-5 w-5 text-[#C0392B] mx-auto animate-pulse" />
                    <p className="text-[10.5px] font-bold text-[#C0392B]">
                      Compliance Block Active
                    </p>
                  </div>
                </div>
                <Button className="w-full h-10 bg-slate-300 text-slate-500 text-xs font-bold rounded-xl cursor-not-allowed">
                  Submit Permit to Work
                </Button>
              </div>
            </div>
          ) : (
            /* Substituted / Cleared State */
            <div className="flex-1 flex flex-col justify-between space-y-4">
              <div className="bg-[#E3F4F2] border border-[#0F7B6C]/20 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-2 text-[#0F7B6C]">
                  <ShieldCheck className="h-5 w-5 shrink-0" />
                  <span className="text-xs font-bold text-[#0F7B6C]">QUALIFICATION CLEARED</span>
                </div>
                <p className="text-[11.5px] text-[#0D1B2A] leading-relaxed">
                  Suresh Kumar substituted successfully for Ramesh Nair. All crew members pass
                  verification.
                </p>
              </div>

              <div className="flex items-center justify-between text-[11.5px]">
                <button
                  onClick={handleReset}
                  className="text-[#8892A0] hover:text-[#0D1B2A] text-xs font-semibold flex items-center gap-1"
                >
                  <RefreshCw className="h-3.5 w-3.5" /> Revert Change
                </button>
                <span className="text-[#0F7B6C] font-bold">100% Compliant</span>
              </div>

              <Button
                onClick={handleSubmitPermit}
                className="w-full h-10 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-xl"
              >
                Submit Permit to Work
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* ── Audit Logs ────────────────────────────────── */}
      <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-3">
        <h3 className="text-xs font-bold text-[#1A6B8A] uppercase tracking-wider">
          Permit Verification Audit Logs
        </h3>
        <div className="space-y-2 max-h-[140px] overflow-y-auto font-mono text-[10.5px]">
          {logs.map((log, idx) => {
            const indicatorColors = {
              success: "text-[#0F7B6C] bg-[#E3F4F2] border-[#0F7B6C]/20",
              blocked: "text-[#C0392B] bg-[#FDECEA] border-[#C0392B]/20",
              resolved: "text-blue-700 bg-blue-50 border-blue-200",
            }[log.status];

            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-2 rounded-lg border bg-slate-50/50"
              >
                <span className="text-[#8892A0] shrink-0 font-semibold">{log.time}</span>
                <span className="flex-1 text-[#0D1B2A]">{log.action}</span>
                <Badge className={`${indicatorColors} border text-[8px] font-bold`}>
                  {log.status.toUpperCase()}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
