import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageHeader({
  breadcrumbs,
  title,
  subtitle,
  action,
}: {
  breadcrumbs?: { label: string; to?: string }[];
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      {breadcrumbs && (
        <nav className="flex items-center gap-1 text-[10px] font-bold tracking-wider uppercase text-muted-foreground/60 select-none">
          {breadcrumbs.map((b, i) => (
            <span key={i} className="flex items-center gap-1">
              {b.to ? (
                <Link to={b.to} className="hover:text-primary transition-colors duration-150">
                  {b.label}
                </Link>
              ) : (
                <span className="text-foreground/60">{b.label}</span>
              )}
              {i < breadcrumbs.length - 1 && <ChevronRight className="h-2.5 w-2.5 opacity-30" />}
            </span>
          ))}
        </nav>
      )}
      <div className="flex items-center justify-between gap-6 flex-wrap mt-0.5">
        <div className="space-y-1">
          <h1 className="text-2xl md:text-3xl font-extrabold font-display tracking-tight text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[13px] text-muted-foreground leading-relaxed max-w-3xl">
              {subtitle}
            </p>
          )}
        </div>
        {action && <div className="flex items-center gap-2">{action}</div>}
      </div>
    </div>
  );
}
