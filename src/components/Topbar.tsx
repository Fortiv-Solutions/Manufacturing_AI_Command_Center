import { Search, Bell, MessageCircle, ChevronDown } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Topbar() {
  return (
    <header className="h-16 border-b bg-background/80 backdrop-blur-md flex items-center gap-3 px-6 sticky top-0 z-30">
      <SidebarTrigger className="text-muted-foreground hover:bg-muted/50 rounded-lg p-1 transition" />
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground/70" />
          <input
            placeholder="Search anything here…"
            className="w-full h-10 rounded-full bg-muted/30 border border-border/40 focus:border-primary/45 focus:bg-card focus:outline-none pl-10 pr-4 text-[13.5px] placeholder:text-muted-foreground/60 transition shadow-inner focus:shadow-[0_0_12px_-3px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted/60 text-muted-foreground transition border border-[#050507]">
          <Bell className="h-4 w-4" />
        </button>
        <button className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted/60 text-muted-foreground transition border border-[#050507]">
          <MessageCircle className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 pl-2 pr-1.5 py-1 rounded-full border border-[#050507] cursor-pointer transition hover:bg-muted/40">
          <div className="h-8 w-8 rounded-full bg-[#050507] grid place-items-center text-white text-[11px] font-bold">
            VJ
          </div>
          <div className="leading-tight pr-1 hidden sm:block">
            <div className="text-[12.5px] font-semibold text-foreground/90">Vikram Joshi</div>
            <div className="text-[10px] text-muted-foreground font-medium">Managing Director</div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground/70" />
        </div>
      </div>
    </header>
  );
}
