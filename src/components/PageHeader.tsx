import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  breadcrumbs, title, subtitle, action,
}: {
  breadcrumbs?: { label: string; to?: string }[];
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 mb-6">
      {breadcrumbs && (
        <nav className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {b.to ? (
                <Link to={b.to} className="hover:text-foreground transition-colors">{b.label}</Link>
              ) : (
                <span className="text-foreground/80">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3 opacity-50" />}
            </span>
          ))}
        </nav>
      )}
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-[24px] font-semibold tracking-tight leading-tight">{title}</h1>
          {subtitle && <p className="text-[13.5px] text-muted-foreground mt-1 max-w-2xl">{subtitle}</p>}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
    </div>
  );
}
