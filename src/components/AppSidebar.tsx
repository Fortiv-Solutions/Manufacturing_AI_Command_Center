import { Link, useRouterState } from "@tanstack/react-router";
import { Sparkles, Settings2, ChevronRight } from "lucide-react";
import {
  Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
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
    <Sidebar collapsible="icon" className="border-r">
      <SidebarHeader className="px-3 py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid place-items-center h-9 w-9 rounded-xl bg-primary text-primary-foreground shadow-sm shrink-0">
            <Sparkles className="h-4.5 w-4.5" />
          </div>
          {!collapsed && (
            <div className="leading-tight">
              <div className="text-[15px] font-semibold tracking-tight">Fortiv Solutions</div>
              <div className="text-[11px] text-muted-foreground">Manufacturing Command Centre</div>
            </div>
          )}
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-1.5">
        {GROUPS.map((group) => {
          const groupModules = group.ids
            .map((id) => modules.find((m) => m.id === id))
            .filter(Boolean) as typeof modules;

          if (group.label === "Oil & Gas Sector") {
            return (
              <SidebarGroup key={group.label}>
                <Collapsible defaultOpen={true} className="group/collapsible w-full">
                  {!collapsed && (
                    <SidebarGroupLabel asChild>
                      <CollapsibleTrigger className="flex w-full items-center justify-between text-[10.5px] uppercase tracking-wider hover:text-foreground cursor-pointer select-none">
                        <span>{group.label}</span>
                        <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </CollapsibleTrigger>
                    </SidebarGroupLabel>
                  )}
                  <CollapsibleContent>
                    <SidebarGroupContent className="mt-1.5 animate-in fade-in slide-in-from-top-1 duration-200">
                      <SidebarMenu>
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
            <SidebarGroup key={group.label}>
              {!collapsed && (
                <SidebarGroupLabel className="text-[10.5px] uppercase tracking-wider">
                  {group.label}
                </SidebarGroupLabel>
              )}
              <SidebarGroupContent>
                <SidebarMenu>
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

      <SidebarFooter className="px-2 pb-3">
        <SidebarMenu>
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
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={active} className="h-9 rounded-lg data-[active=true]:bg-primary data-[active=true]:text-primary-foreground data-[active=true]:hover:bg-primary/95">
        <Link to={to} className="flex items-center gap-2.5">
          <Icon className="h-4 w-4 shrink-0" />
          {!collapsed && (
            <>
              <span className="text-[13.5px] font-medium">{label}</span>
              {badge && <span className="ml-auto text-[10.5px] opacity-70 font-mono">{badge}</span>}
            </>
          )}
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
