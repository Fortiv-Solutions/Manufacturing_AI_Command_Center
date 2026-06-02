import { Search, Bell, MessageCircle, ChevronDown } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function Topbar() {
  return (
    <header className="h-16 border-b bg-background flex items-center gap-3 px-4 sticky top-0 z-30">
      <SidebarTrigger className="text-muted-foreground" />
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            placeholder="Search anything here…"
            className="w-full h-10 rounded-full bg-muted/60 border border-transparent focus:border-primary/40 focus:bg-background focus:outline-none pl-10 pr-4 text-[13.5px] placeholder:text-muted-foreground/80 transition"
          />
        </div>
      </div>
      <div className="ml-auto flex items-center gap-2">
        <button className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted text-muted-foreground">
          <Bell className="h-4 w-4" />
        </button>
        <button className="h-9 w-9 grid place-items-center rounded-full hover:bg-muted text-muted-foreground">
          <MessageCircle className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full hover:bg-muted cursor-pointer">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary/60 grid place-items-center text-primary-foreground text-[11px] font-semibold">
            VJ
          </div>
          <div className="leading-tight pr-1 hidden sm:block">
            <div className="text-[12.5px] font-semibold">Vikram Joshi</div>
            <div className="text-[10.5px] text-muted-foreground">Managing Director</div>
          </div>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
