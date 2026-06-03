import { useState, useRef, useEffect } from "react";
import {
  Send, Database, Cpu, Search, Sparkles, Pin, BookOpen,
  ArrowRight, Download, RefreshCw, MessageSquare, ChevronRight, User, Terminal
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ── Types ─────────────────────────────────────────── */
interface Message {
  sender: "user" | "ai";
  text: string;
  timestamp: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  sources?: string[];
  confidence?: number;
}

const HISTORICAL_QUERIES = [
  "Compare H1 2025 OPEX vs H1 2024",
  "Which 3 wells had the highest NPT in Q3 2025?",
  "Current lifting cost vs budget comparison",
  "Which wells had the highest water cut last week?",
  "List active maintenance backlog by severity",
  "HSE compliance checklist filing record YTD",
  "How much chemical expenditure was saved MTD?",
  "Average cycle time for AFE approvals this quarter"
];

const PRELOADED_CONVERSATION: Message[] = [
  {
    sender: "user",
    text: "Compare our H1 2025 OPEX per barrel against H1 2024 and tell me which cost categories drove the difference.",
    timestamp: "04 Nov 09:14 IST"
  },
  {
    sender: "ai",
    text: "Here is the comparison of H1 FY 2025 lifting costs compared to H1 FY 2024, along with the primary cost drivers.",
    timestamp: "04 Nov 09:14 IST",
    confidence: 97,
    sources: ["H1 FY 2025 OPEX Ledger", "H1 FY 2024 OPEX Ledger", "Chemical PO Register", "Maintenance Records - Pad A 2025", "HR Headcount Report Q4 FY 2024"],
    table: {
      headers: ["Lifting Cost Metric", "H1 FY 2024", "H1 FY 2025", "Variance (Rs.)", "Change (%)"],
      rows: [
        ["All-in OPEX / bbl", "Rs. 3,741", "Rs. 4,089", "+Rs. 348", "+9.3%"],
        ["Chemical Treatments / bbl", "Rs. 1,020", "Rs. 1,162", "+Rs. 142", "+13.9%"],
        ["Equipment Rental / bbl", "Rs. 720", "Rs. 817", "+Rs. 97", "+13.5%"],
        ["Maintenance & Repairs / bbl", "Rs. 580", "Rs. 644", "+Rs. 64", "+11.0%"]
      ]
    }
  },
  {
    sender: "user",
    text: "Which 3 wells had the highest NPT in Q3 2025 and what caused it?",
    timestamp: "04 Nov 09:19 IST"
  },
  {
    sender: "ai",
    text: "These are the top 3 wells by Non-Productive Time (NPT) for Q3 FY 2025 (Jul–Sep 2025). Note that Well B-07's recurring stuck pump jack indicates a potential design flaw.",
    timestamp: "04 Nov 09:19 IST",
    confidence: 94,
    sources: ["Q3 2025 Daily Drilling Reports - C-07", "Workover Report A-04 Jul 2025", "Maintenance Records B-07 2024-2025"],
    table: {
      headers: ["Rank", "Well ID", "NPT Hours", "NPT %", "Primary Cause / Description"],
      rows: [
        ["1", "Well C-07", "38.4 hrs", "7.1%", "ESP motor failure (28 Aug - 22 hrs); Separator blockage (14 Sep - 16.4 hrs)"],
        ["2", "Well A-04", "29.1 hrs", "5.4%", "Planned workover - ESP string replacement (Jul 2025)"],
        ["3", "Well B-07", "18.7 hrs", "3.5%", "Stuck pump jack during routine maintenance check (02 Sep - 3rd occurrence in 12 months)"]
      ]
    }
  },
  {
    sender: "user",
    text: "What is our current all-in lifting cost per barrel and how does it compare to our budget for this financial year?",
    timestamp: "04 Nov 09:26 IST"
  },
  {
    sender: "ai",
    text: "Current Lifting Cost comparing October 2025 Actuals against the approved FY 2025-26 Budget. OPEX remains within tolerance limits despite a minor chemical overrun.",
    timestamp: "04 Nov 09:26 IST",
    confidence: 99,
    sources: ["Oct 2025 OPEX Actuals - Finance", "FY 2025-26 Budget - ERP", "CAPEX Schedule FY 2025-26", "Depreciation Register"],
    table: {
      headers: ["Lifting Cost Category", "Actuals (Oct 25)", "Budget FY 25-26", "Variance (Rs.)", "Change (%)"],
      rows: [
        ["OPEX-only (Rs./bbl)", "Rs. 4,127", "Rs. 3,980", "+Rs. 147", "+3.69%"],
        ["All-in Lifting Cost (Rs./bbl)", "Rs. 6,840", "Rs. 6,510", "+Rs. 330", "+5.07%"]
      ]
    }
  }
];

export function OGSubModule72() {
  const [messages, setMessages] = useState<Message[]>(PRELOADED_CONVERSATION);
  const [queryText, setQueryText] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPending, setIsPending] = useState(false);
  
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending]);

  const handleSendQuery = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " IST"
    };

    setMessages(prev => [...prev, userMsg]);
    setQueryText("");
    setIsPending(true);

    // Simulate AI streaming response after 1.5s
    setTimeout(() => {
      setIsPending(false);
      
      let aiResponseText = "";
      let mockTable = undefined;
      let mockSources = ["SAP Financial Ledger Oct 2025", "Daily Ops DB logs"];

      if (text.toLowerCase().includes("water cut")) {
        aiResponseText = "Here are the wells with the highest water cut percentages recorded last week.";
        mockTable = {
          headers: ["Well ID", "Water Cut %", "Gross Production", "Status"],
          rows: [
            ["Well B-09", "64.2%", "420 bbl/d", "High water cut alert"],
            ["Well C-04", "58.1%", "610 bbl/d", "Monitored"],
            ["Well A-12", "54.8%", "340 bbl/d", "Normal"]
          ]
        };
      } else if (text.toLowerCase().includes("maintenance") || text.toLowerCase().includes("backlog")) {
        aiResponseText = "Active maintenance backlog grouped by priority levels from the CMMS registers.";
        mockTable = {
          headers: ["Priority", "Open Work Orders", "Average Age", "Status"],
          rows: [
            ["Critical (Safety/LTI)", "1 (Pad B valve)", "1.5 days", "Scheduled"],
            ["High (Production Impact)", "3 work orders", "4.2 days", "Assigned"],
            ["Medium (Preventive)", "11 work orders", "14 days", "On schedule"]
          ]
        };
      } else {
        aiResponseText = `I compiled the operational logs matching your query: "${text}". No major anomalies detected in this register range.`;
        mockTable = {
          headers: ["Parameter", "Value", "Status"],
          rows: [
            ["Gross Oil Production", "4,120 bbl/day", "On Schedule"],
            ["OPEX Lifting Cost", "Rs. 4,077/bbl", "Within tolerance"],
            ["Active Permits (PTW)", "4 Open", "Verified Compliant"]
          ]
        };
      }

      const aiMsg: Message = {
        sender: "ai",
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " IST",
        confidence: 95,
        sources: mockSources,
        table: mockTable
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 1500);
  };

  const handleExportChat = () => {
    toast.success("Conversational analysis session exported as structured PDF.");
  };

  return (
    <div className="rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex h-[620px]">
      
      {/* ── Left Sidebar: Query History (25%) ────────── */}
      {isSidebarOpen && (
        <div className="w-1/4 border-r border-[#D1D9E3] bg-slate-50/50 flex flex-col hidden md:flex">
          <div className="p-4 border-b border-[#D1D9E3] flex items-center justify-between">
            <span className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">Analysis History</span>
            <MessageSquare className="h-4 w-4 text-[#8892A0]" />
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {HISTORICAL_QUERIES.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendQuery(q)}
                className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-xs text-[#0D1B2A] font-semibold truncate flex items-center gap-2"
              >
                <ChevronRight className="h-3 w-3 text-[#8892A0]" />
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Right Section: Conversational Workspace ───── */}
      <div className="flex-1 flex flex-col bg-slate-50/10">
        
        {/* Top Header status */}
        <div className="p-4 border-b border-[#D1D9E3] bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-[#8892A0] hover:text-[#0D1B2A] text-xs font-bold mr-2 hidden md:block"
            >
              [History]
            </button>
            <div className="flex items-center gap-1.5">
              <Database className="h-4 w-4 text-[#1A6B8A]" />
              <span className="text-[11px] font-semibold text-[#8892A0]">
                Data Freshness: <strong className="text-[#0D1B2A] font-mono">04 Nov 06:00 IST</strong>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9px] font-mono font-bold">
              AI ENGINE CURRENT
            </Badge>
            <Button
              size="sm"
              variant="outline"
              onClick={handleExportChat}
              className="h-7.5 border-[#D1D9E3] text-[#0D1B2A] text-[10.5px] font-bold"
            >
              <Download className="h-3.5 w-3.5 mr-1" />
              Export
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map((msg, idx) => {
            const isUser = msg.sender === "user";

            return (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${isUser ? "ml-auto flex-row-reverse" : "mr-auto"}`}
              >
                <div className={`h-8.5 w-8.5 rounded-full shrink-0 flex items-center justify-center border ${
                  isUser ? "bg-blue-50 border-blue-200" : "bg-slate-100 border-[#D1D9E3]"
                }`}>
                  {isUser ? <User className="h-4.5 w-4.5 text-[#1A6B8A]" /> : <Cpu className="h-4.5 w-4.5 text-[#0D1B2A]" />}
                </div>

                <div className={`rounded-2xl p-4 space-y-3 shadow-sm border ${
                  isUser
                    ? "bg-[#0D1B2A] text-white border-transparent"
                    : "bg-white text-[#0D1B2A] border-[#D1D9E3]"
                }`}>
                  <div className="flex items-center justify-between gap-6">
                    <p className="text-xs leading-relaxed font-sans">{msg.text}</p>
                    <span className={`text-[9.5px] font-mono shrink-0 ${isUser ? "text-white/60" : "text-[#8892A0]"}`}>
                      {msg.timestamp}
                    </span>
                  </div>

                  {/* AI Response Table */}
                  {msg.table && (
                    <div className="border border-[#D1D9E3] rounded-xl overflow-hidden mt-2 bg-slate-50/10">
                      <table className="w-full text-[11px] text-[#0D1B2A]">
                        <thead>
                          <tr className="border-b border-[#D1D9E3] bg-slate-50/50 text-[9px] font-bold uppercase tracking-wider text-[#8892A0]">
                            {msg.table.headers.map((h, i) => (
                              <th key={i} className="py-2 px-3 text-left">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {msg.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`py-2 px-3 ${cIdx > 0 && cIdx < 4 ? "font-mono font-semibold" : ""}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* AI Confidence & Sources */}
                  {!isUser && (
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[10px] text-[#8892A0]">
                      {msg.confidence && (
                        <span className="font-semibold text-[#0F7B6C] flex items-center gap-1">
                          Confidence Index: <strong className="font-mono">{msg.confidence}%</strong>
                        </span>
                      )}
                      {msg.sources && (
                        <div className="flex flex-wrap items-center gap-1.5">
                          <BookOpen className="h-3.5 w-3.5" />
                          <span className="font-semibold">Sources:</span>
                          {msg.sources.map(s => (
                            <Badge
                              key={s}
                              onClick={() => toast.info(`Viewing source ledger: "${s}"`)}
                              className="bg-slate-100 text-slate-500 border border-slate-200 text-[8.5px] cursor-pointer hover:bg-slate-200 font-mono py-0"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Pending Response Indicator */}
          {isPending && (
            <div className="flex gap-3 max-w-[85%] mr-auto items-center">
              <div className="h-8.5 w-8.5 rounded-full shrink-0 flex items-center justify-center bg-slate-100 border border-[#D1D9E3]">
                <Cpu className="h-4.5 w-4.5 text-[#0D1B2A] animate-spin" />
              </div>
              <div className="rounded-2xl p-4 bg-white text-[#8892A0] border border-[#D1D9E3] shadow-sm text-xs font-mono">
                AI analytics engine is pulling production registers and computing metrics...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-[#D1D9E3] bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question about your operations (e.g. Compare H1 2025 OPEX vs H1 2024)..."
              value={queryText}
              onChange={(e) => setQueryText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendQuery(queryText)}
              className="flex-1 px-4 py-2.5 border border-[#D1D9E3] rounded-xl text-xs text-[#0D1B2A] focus:outline-none focus:ring-1 focus:ring-[#1A6B8A]"
            />
            <Button
              onClick={() => handleSendQuery(queryText)}
              className="h-10 bg-[#C8922A] hover:bg-[#b78222] text-white text-xs font-bold rounded-xl px-4 shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            <span className="text-[9.5px] text-[#8892A0] uppercase font-bold mr-1 flex items-center gap-0.5">
              <Terminal className="h-3 w-3" /> Quick Prompts:
            </span>
            {["Compare H1 2025 OPEX vs H1 2024", "Highest NPT in Q3 2025", "Water cut details"].map(p => (
              <Badge
                key={p}
                onClick={() => handleSendQuery(p)}
                className="bg-slate-50 text-slate-600 border border-slate-200 text-[9px] hover:bg-slate-100 cursor-pointer font-semibold py-0.5"
              >
                {p}
              </Badge>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
