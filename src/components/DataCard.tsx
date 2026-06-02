import { StatusPill } from "./StatusPill";

export function DataCard({
  title, action, columns, rows,
}: {
  title: string;
  action?: React.ReactNode;
  columns: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="rounded-2xl bg-card border overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b">
        <div className="text-[15px] font-semibold tracking-tight">{title}</div>
        {action}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-left text-[10.5px] uppercase tracking-wider text-muted-foreground">
              {columns.map((c) => (
                <th key={c} className="px-5 py-3 font-medium">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t hover:bg-muted/40 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className="px-5 py-3.5 align-middle">
                    {j === row.length - 1 ? <StatusPill value={cell} /> : <span className={j === 0 ? "font-medium" : "text-foreground/80"}>{cell}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
