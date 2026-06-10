import { useState } from "react";
import {
  BookOpen,
  Search,
  Sparkles,
  Loader2,
  Tag,
  User,
  Clock,
  ThumbsUp,
  MessageSquare,
  Plus,
  Star,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  tags: string[];
  summary: string;
  confidence: number;
  votes: number;
  comments: number;
  validated: boolean;
  wellRef?: string;
}

const ARTICLES: Article[] = [
  {
    id: "KA-2025-0419",
    title: "ESP Restarts After Workover — C-Series Wells: Optimal Ramp-Up Protocol",
    category: "Well Engineering",
    author: "A. Sharma",
    date: "27 Oct 2025",
    tags: ["ESP", "Workover", "Ramp-Up", "Well C-07"],
    summary:
      "Following the Well C-07 ESP workover (Oct 2025), ramp-up from 0 to target rate over 72 hrs using 5% increments every 8 hrs prevented motor burnout. This supersedes the legacy 24-hr protocol.",
    confidence: 97,
    votes: 14,
    comments: 3,
    validated: true,
    wellRef: "Well C-07",
  },
  {
    id: "KA-2025-0311",
    title: "Pad B Water Injection Shortfall — Root Cause & Diagnostic Tree",
    category: "Production Engineering",
    author: "R. Kumar",
    date: "22 Oct 2025",
    tags: ["Water Injection", "Pad B", "Pump", "Diagnostic"],
    summary:
      "Injection shortfall on Pad B (Oct 2025) systematically diagnosed to impeller wear on injection pump P-B02. Decision tree and inspection checklist developed for future recurrences.",
    confidence: 91,
    votes: 9,
    comments: 5,
    validated: true,
    wellRef: "Pad B",
  },
  {
    id: "KA-2025-0277",
    title: "DGH W-10 Monthly Return Filing — Step-by-Step Guide (OML-11)",
    category: "Regulatory",
    author: "R. Kumar",
    date: "10 Oct 2025",
    tags: ["DGH", "Regulatory", "W-10", "Compliance"],
    summary:
      "Documented procedure for filing the DGH W-10 monthly production return for OML-11, including SAP data pull steps, typical validation errors, and submission portal walkthrough.",
    confidence: 99,
    votes: 21,
    comments: 8,
    validated: true,
  },
  {
    id: "KA-2025-0198",
    title: "Jodhpur Yard Rig Mobilisation Logistics — B-Cluster Wells",
    category: "Drilling",
    author: "S. Verma",
    date: "05 Oct 2025",
    tags: ["Rig", "Mobilisation", "B-15", "Drilling"],
    summary:
      "Standard mobilisation sequence from Jodhpur yard for B-cluster well spuds. Lead time benchmarked at 72 hours from approval. Route clearances, escort requirements, and permit checklist included.",
    confidence: 89,
    votes: 6,
    comments: 2,
    validated: false,
    wellRef: "Well B-15",
  },
  {
    id: "KA-2025-0103",
    title: "Pad C Chemical Inventory Audit — Monthly Procedure & Tolerance Limits",
    category: "HSE",
    author: "P. Menon",
    date: "18 Sep 2025",
    tags: ["Chemical", "Inventory", "HSE", "Pad C"],
    summary:
      "Monthly audit checklist for Pad C chemical storage yards including MSDS verification, container integrity inspection, and tolerance limits for corrosion inhibitor stock levels.",
    confidence: 93,
    votes: 11,
    comments: 4,
    validated: true,
  },
];

const CATEGORIES = [
  "All",
  "Well Engineering",
  "Production Engineering",
  "Drilling",
  "Regulatory",
  "HSE",
];

export function OGSubModule44() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(ARTICLES[0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeSection, setActiveSection] = useState<"browse" | "contribute">("browse");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const filtered = ARTICLES.filter((a) => {
    const matchCat = selectedCategory === "All" || a.category === selectedCategory;
    const matchQ =
      !query ||
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchQ;
  });

  const handleAICapture = () => {
    if (!newContent.trim()) {
      toast.error("Enter your experience or observation first.");
      return;
    }
    setIsGenerating(true);
    toast.loading("Structuring your knowledge entry and tagging entities...");
    setTimeout(() => {
      setIsGenerating(false);
      toast.dismiss();
      toast.success("Knowledge article drafted and submitted for peer validation.");
      setNewContent("");
      setNewTitle("");
      setActiveSection("browse");
    }, 2000);
  };

  const handleVote = (a: Article) => {
    toast.success(`You voted for "${a.title.substring(0, 40)}..."`);
  };

  const getCategoryBadge = (cat: string) => {
    const map: Record<string, string> = {
      "Well Engineering": "bg-blue-50 text-[#1A6B8A] border-[#1A6B8A]/20",
      "Production Engineering": "bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20",
      Drilling: "bg-[#F5F0E8] text-[#C8922A] border-[#C8922A]/20",
      Regulatory: "bg-slate-100 text-slate-600 border-slate-200",
      HSE: "bg-[#FDECEA] text-[#C0392B] border-[#C0392B]/20",
    };
    return map[cat] || "bg-slate-100 text-slate-600";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* LEFT: Article List / Contribute Toggle (40%) */}
      <div className="lg:col-span-4 space-y-4">
        {/* Section toggle */}
        <div className="rounded-2xl border border-[#D1D9E3] bg-white p-1.5 flex shadow-sm">
          <button
            onClick={() => setActiveSection("browse")}
            className={`flex-1 rounded-xl py-2 text-xs font-bold transition-colors ${activeSection === "browse" ? "bg-[#0D1B2A] text-white shadow" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
          >
            <BookOpen className="h-3.5 w-3.5 inline mr-1.5" />
            Browse
          </button>
          <button
            onClick={() => setActiveSection("contribute")}
            className={`flex-1 rounded-xl py-2 text-xs font-bold transition-colors ${activeSection === "contribute" ? "bg-[#C8922A] text-white shadow" : "text-[#8892A0] hover:text-[#0D1B2A]"}`}
          >
            <Plus className="h-3.5 w-3.5 inline mr-1.5" />
            Contribute
          </button>
        </div>

        {activeSection === "browse" ? (
          <>
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#8892A0]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search knowledge base..."
                className="w-full h-9 pl-9 pr-3 rounded-xl border border-[#D1D9E3] bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-2.5 py-1 rounded-full border text-[10px] font-bold transition-colors ${selectedCategory === c ? "bg-[#1A6B8A] text-white border-[#1A6B8A]" : "border-[#D1D9E3] text-[#8892A0] hover:border-[#1A6B8A] hover:text-[#1A6B8A]"}`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Article list */}
            <div className="space-y-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#8892A0]">
                  No articles match your search.
                </div>
              ) : (
                filtered.map((a) => (
                  <button
                    key={a.id}
                    onClick={() => setSelectedArticle(a)}
                    className={`w-full text-left p-3 rounded-xl border transition-all ${selectedArticle?.id === a.id ? "border-[#C8922A] bg-amber-50/60 shadow-sm" : "border-[#D1D9E3] bg-white hover:bg-slate-50"}`}
                  >
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Badge
                            className={`${getCategoryBadge(a.category)} text-[9px] font-bold border`}
                          >
                            {a.category}
                          </Badge>
                          {a.validated && (
                            <Star className="h-3 w-3 text-[#C8922A] fill-[#C8922A]" />
                          )}
                        </div>
                        <p className="text-xs font-bold text-[#0D1B2A] line-clamp-2 leading-snug">
                          {a.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-[#8892A0]">
                          <span className="flex items-center gap-0.5">
                            <User className="h-3 w-3" />
                            {a.author}
                          </span>
                          <span className="flex items-center gap-0.5">
                            <Clock className="h-3 w-3" />
                            {a.date}
                          </span>
                        </div>
                      </div>
                      <ChevronRight className="h-4 w-4 text-[#D1D9E3] shrink-0 mt-1" />
                    </div>
                  </button>
                ))
              )}
            </div>
          </>
        ) : (
          /* Contribute Panel */
          <div className="rounded-2xl border border-[#D1D9E3] bg-white p-5 shadow-sm space-y-4">
            <div>
              <p className="text-xs font-bold text-[#0D1B2A] mb-0.5">Share Your Field Experience</p>
              <p className="text-[10.5px] text-[#8892A0] leading-relaxed">
                Describe an issue you solved, a technique that worked, or a regulatory insight. AI
                will structure it into a knowledge article.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                Title (optional)
              </label>
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="e.g. Handling annulus pressure build-up — Well D-03"
                className="w-full h-9 px-3 rounded-lg border border-[#D1D9E3] bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                Experience / Observation
              </label>
              <textarea
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                rows={8}
                placeholder="Describe the situation, what you tried, what worked (or didn't), and any lessons learned..."
                className="w-full rounded-lg border border-[#D1D9E3] bg-white p-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#C8922A] resize-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                  Category
                </label>
                <select className="w-full h-9 rounded-lg border border-[#D1D9E3] bg-white px-2.5 text-xs">
                  {CATEGORIES.filter((c) => c !== "All").map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider">
                  Well / Asset Ref
                </label>
                <input
                  type="text"
                  placeholder="e.g. Well D-03"
                  className="w-full h-9 px-3 rounded-lg border border-[#D1D9E3] bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#C8922A]"
                />
              </div>
            </div>

            <Button
              onClick={handleAICapture}
              disabled={isGenerating}
              className="w-full bg-[#C8922A] hover:bg-[#b78222] text-white font-semibold text-xs h-10 rounded-lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                  Structuring Article...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-1.5" />
                  Capture & Structure with AI
                </>
              )}
            </Button>
          </div>
        )}
      </div>

      {/* RIGHT: Article Detail (60%) */}
      <div className="lg:col-span-8 rounded-2xl border border-[#D1D9E3] bg-white shadow-sm overflow-hidden flex flex-col">
        {!selectedArticle ? (
          <div className="flex-1 flex flex-col items-center justify-center py-28 text-center space-y-3 text-[#8892A0]">
            <BookOpen className="h-10 w-10 text-[#D1D9E3]" />
            <p className="text-sm font-semibold">Select an article to read</p>
          </div>
        ) : (
          <>
            {/* Article Header */}
            <div className="p-5 border-b border-[#D1D9E3] bg-slate-50/50">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge
                      className={`${getCategoryBadge(selectedArticle.category)} border text-[9.5px] font-bold`}
                    >
                      {selectedArticle.category}
                    </Badge>
                    {selectedArticle.validated && (
                      <Badge className="bg-[#E3F4F2] text-[#0F7B6C] border-[#0F7B6C]/20 border text-[9.5px] font-bold">
                        <Star className="h-3 w-3 mr-0.5 fill-[#0F7B6C]" /> Expert Validated
                      </Badge>
                    )}
                    <span className="text-[10px] font-mono text-[#8892A0]">
                      {selectedArticle.id}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#0D1B2A] leading-snug">
                    {selectedArticle.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10.5px] text-[#8892A0]">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />{" "}
                      <strong className="text-[#1A6B8A]">{selectedArticle.author}</strong>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {selectedArticle.date}
                    </span>
                    {selectedArticle.wellRef && (
                      <span className="flex items-center gap-1">
                        <Tag className="h-3 w-3" />
                        {selectedArticle.wellRef}
                      </span>
                    )}
                  </div>
                </div>

                {/* AI Confidence */}
                <div className="shrink-0 text-center">
                  <p className="text-[9.5px] font-bold text-[#8892A0] uppercase mb-1">
                    AI Confidence
                  </p>
                  <div className="relative h-16 w-16 mx-auto">
                    <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke="#F0F2F5"
                        strokeWidth="3"
                      />
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9155"
                        fill="none"
                        stroke={
                          selectedArticle.confidence >= 95
                            ? "#0F7B6C"
                            : selectedArticle.confidence >= 85
                              ? "#C8922A"
                              : "#C0392B"
                        }
                        strokeWidth="3"
                        strokeDasharray={`${selectedArticle.confidence} ${100 - selectedArticle.confidence}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs font-bold font-mono text-[#0D1B2A]">
                        {selectedArticle.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-5 overflow-y-auto space-y-5">
              {/* Summary */}
              <div>
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">
                  Summary
                </h4>
                <p className="text-xs text-[#0D1B2A] leading-relaxed border-l-4 border-[#1A6B8A] pl-3 bg-blue-50/30 py-2 rounded-r-lg">
                  {selectedArticle.summary}
                </p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">
                  Entity Tags (AI-Extracted)
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 border border-[#D1D9E3] text-[10.5px] font-semibold text-[#0D1B2A]"
                    >
                      <Tag className="h-2.5 w-2.5 text-[#C8922A]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Related article suggestions (static) */}
              <div>
                <h4 className="text-[10px] font-bold text-[#1A6B8A] uppercase tracking-wider mb-2">
                  Related Articles
                </h4>
                <div className="space-y-1.5">
                  {ARTICLES.filter((a) => a.id !== selectedArticle.id)
                    .slice(0, 2)
                    .map((a) => (
                      <button
                        key={a.id}
                        onClick={() => setSelectedArticle(a)}
                        className="w-full text-left flex items-center gap-2 p-2.5 rounded-lg border border-[#D1D9E3] hover:bg-slate-50 transition-colors"
                      >
                        <BookOpen className="h-4 w-4 text-[#1A6B8A] shrink-0" />
                        <span className="text-xs text-[#0D1B2A] line-clamp-1">{a.title}</span>
                        <ChevronRight className="h-3 w-3 text-[#D1D9E3] ml-auto shrink-0" />
                      </button>
                    ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-[#D1D9E3] bg-white flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 text-[10.5px] text-[#8892A0]">
                <button
                  onClick={() => handleVote(selectedArticle)}
                  className="flex items-center gap-1.5 hover:text-[#0F7B6C] transition-colors font-semibold"
                >
                  <ThumbsUp className="h-3.5 w-3.5" /> {selectedArticle.votes} Helpful
                </button>
                <span className="flex items-center gap-1.5">
                  <MessageSquare className="h-3.5 w-3.5" /> {selectedArticle.comments} Comments
                </span>
              </div>
              <Button
                size="sm"
                className="h-8 bg-[#1A6B8A] hover:bg-[#155a75] text-white text-xs font-bold"
                onClick={() => toast.success("Article shared to Teams channel: Upstream-Tech.")}
              >
                Share to Teams
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
