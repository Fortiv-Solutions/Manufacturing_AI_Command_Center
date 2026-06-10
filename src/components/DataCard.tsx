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
    <div className="rounded-2xl bg-card border border-border/40 overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:border-border/60">
      <div className="flex items-center justify-between px-6 py-3.5 border-b border-border/20 bg-card/30">
        <div className="text-[14.5px] font-semibold font-display tracking-tight text-foreground">{title}</div>
        {action}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr className="text-left text-[10.5px] uppercase tracking-wider font-bold text-zinc-300 bg-muted/20 border-b border-border/20">
              {columns.map((c) => (
                <th key={c} className="px-6 py-3 font-semibold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border/10">
            {rows.map((row, i) => (
              <tr key={i} className="hover:bg-muted/15 transition-colors">
                {row.map((cell, j) => {
                  const isStatus = j === row.length - 1;
                  const isFirstCol = j === 0;
                  const isNumeric = typeof cell === 'number' || (typeof cell === 'string' && /^[0-9%,.\-$/\s]+$/.test(cell.trim()) && cell.trim() !== '');
                  
                  return (
                    <td key={j} className="px-6 py-3 align-middle text-foreground/80">
                      {isStatus ? (
                        <StatusPill value={cell} />
                      ) : (
                        <span className={
                          isFirstCol
                            ? "font-medium text-foreground"
                            : isNumeric
                              ? "font-mono text-[12.5px] tracking-tight text-foreground/90 font-medium tabular-nums"
                              : "text-foreground/80 font-normal"
                        }>
                          {cell}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

