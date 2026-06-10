import { Link, useRouterState } from "@tanstack/react-router";
import { Settings2, ChevronRight } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { modules } from "@/data/modules";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";

const GROUPS = [
  {
    label: "Intelligence",
    ids: ["m6-dashboards"],
  },
  {
    label: "Operations",
    ids: ["m1-production", "m2-procurement", "m3-quality"],
  },
  {
    label: "Sales & Customer",
    ids: ["m4-dealers", "m7-voice", "m8-complaints", "m9-followups"],
  },
  {
    label: "Oil & Gas Sector",
    ids: ["og-regulatory", "og-land-lease", "og-hse", "og-technical-doc", "og-workflow", "og-workforce", "og-reporting"],
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const pathname = useRouterState({ select: (r) => r.location.pathname });
  const isActive = (p: string) => pathname === p || pathname.startsWith(p + "/");

  return (
    <Sidebar collapsible="icon" className="border-r-0 bg-transparent group/sidebar-main" data-collapsed={collapsed}>
      <SidebarHeader className="px-3 py-4">
        <Link to="/" className="flex flex-col gap-3">
          {collapsed ? (
            <div className="flex justify-center py-2 select-none">
              <img src="/favicon.png" alt="Fortiv Logo" className="h-8 w-8 object-contain rounded-lg" />
            </div>
          ) : (
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center p-3 rounded-2xl bg-white/90 backdrop-blur-md border border-black/[0.08] shadow-[0_4px_16px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] dark:bg-[#090a0f] dark:border-white/[0.04] dark:shadow-[0_2px_8px_rgba(0,0,0,0.08)] select-none transition-all duration-300">
                <img src="/logo.webp" alt="Fortiv Solutions" className="h-9.5 object-contain" />
              </div>
              <div className="text-[9px] font-bold tracking-[0.12em] text-zinc-800 dark:text-white text-center uppercase font-mono">
                Manufacturing Command Center
              </div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className={collapsed ? "px-2.5" : "px-3"}>
        {GROUPS.map((group) => {
          const groupModules = group.ids
             .map((id) => modules.find((m) => m.id === id))
             .filter(Boolean) as typeof modules;

          if (group.label === "Oil & Gas Sector") {
            return (
              <SidebarGroup key={group.label} className="py-1">
                <Collapsible defaultOpen={true} className="group/collapsible w-full">
                  {!collapsed && (
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger className="flex w-full items-center justify-between text-[9.5px] uppercase tracking-[0.16em] font-bold font-mono text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 cursor-pointer select-none py-1 transition-colors duration-150">
                        <span>{group.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                  )}
                  <CollapsibleContent>
                    <SidebarGroupContent className="mt-1 bg-black/[0.015] border border-black/[0.04] dark:bg-white/[0.02] dark:border-white/[0.05] rounded-xl p-1 animate-in fade-in slide-in-from-top-1 duration-200">
                      <SidebarMenu className="gap-0.5">
                        {groupModules.map((m) => (
                          <Item
                            key={m.id}
                            to={`/m/${m.id}`}
                            icon={m.icon}
                            label={m.short}
                            active={isActive(`/m/${m.id}`)}
                            collapsed={collapsed}
                          />
                        ))}
                      </SidebarMenu>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarGroup>
            );
          }

          return (
            <SidebarGroup key={group.label} className="py-1">
              {!collapsed && (
                <SidebarGroupLabel className="text-[9.5px] uppercase tracking-[0.16em] font-bold font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 flex items-center gap-2">
                  <span>{group.label}</span>
                  <span className="h-[1px] flex-1 bg-gradient-to-r from-black/[0.08] via-black/[0.02] to-transparent dark:from-white/[0.08] dark:via-white/[0.02] dark:to-transparent" />
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu className="gap-0.5">
                  {groupModules.map((m) => (
                    <Item
                      key={m.id}
                      to={`/m/${m.id}`}
                      icon={m.icon}
                      label={m.short}
                      active={isActive(`/m/${m.id}`)}
                      collapsed={collapsed}
                    />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>

      <SidebarFooter className={`py-2 border-t border-black/[0.06] dark:border-white/[0.05] bg-black/[0.015] dark:bg-white/[0.01] ${collapsed ? "px-2.5" : "px-3"}`}>
        <SidebarMenu className="gap-0.5">
          <Item to="/settings" icon={Settings2} label="Settings" active={isActive("/settings")} collapsed={collapsed} />
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

function Item({
  to, icon: Icon, label, badge, active, collapsed,
}: {
  to: string; icon: any; label: string; badge?: string; active: boolean; collapsed: boolean;
}) {
  const isLive = ["/m/m1-production", "/m/m3-quality", "/m/m7-voice", "/m/og-hse"].includes(to);

  const itemContent = (
    <SidebarMenuButton
      asChild
      isActive={active}
      className={`h-9 rounded-lg relative transition-all duration-200 ${
        active
          ? "active-sidebar-item font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          : "text-zinc-500 hover:text-zinc-800 hover:bg-black/[0.03] dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:bg-white/[0.04]"
      }`}
    >
      <Link to={to} className={`flex items-center gap-2 py-1.5 w-full h-full ${collapsed ? "justify-center px-3" : active ? "pl-5 pr-3.5" : "pl-4.5 pr-4.5"}`}>
        <Icon className={`h-[17px] w-[17px] shrink-0 transition-all duration-200 ${
          active 
            ? "text-primary dark:text-primary opacity-100" 
            : "text-zinc-500 group-hover/menu-item:text-zinc-800 opacity-80 dark:text-zinc-400 dark:group-hover/menu-item:text-zinc-200"
        }`} />
        {!collapsed && (
          <>
            <span className={`text-[13.5px] font-medium flex-1 transition-colors duration-200 ${
              active ? "text-primary dark:text-white" : "text-zinc-600 dark:text-zinc-400"
            }`}>{label}</span>
            {badge ? (
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold transition-all duration-200 ${
                active 
                  ? "bg-primary/10 text-primary border border-primary/20 dark:bg-zinc-900/80 dark:text-zinc-100 dark:border-zinc-700/60" 
                  : "bg-black/[0.04] text-zinc-600 border border-black/[0.06] dark:bg-white/[0.06] dark:text-zinc-300 dark:border-white/[0.06]"
              }`}>
                {badge}
              </span>
            ) : isLive ? (
              <span className="relative flex h-1.5 w-1.5 shrink-0 ml-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
              </span>
            ) : null}
          </>
        )}
      </Link>
    </SidebarMenuButton>
  );

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <SidebarMenuItem>
              {itemContent}
            </SidebarMenuItem>
          </TooltipTrigger>
          <TooltipContent side="right" className="font-medium">
            {label}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <SidebarMenuItem>
      {itemContent}
    </SidebarMenuItem>
  );
}
