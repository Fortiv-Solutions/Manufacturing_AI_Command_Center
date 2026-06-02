import {
  ResponsiveContainer, LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";

const data = Array.from({ length: 12 }, (_, i) => ({
  name: ["Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar"][i],
  v: 30 + ((i * 41) % 60),
  v2: 20 + ((i * 23) % 50),
}));

export function MainChart({ type = "bar" }: { type?: "bar" | "line" | "area" }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      {type === "line" ? (
        <LineChart data={data} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid var(--border)", fontSize: 12 }} />
          <Line type="monotone" dataKey="v" stroke="var(--primary)" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="v2" stroke="var(--info)" strokeWidth={2} dot={false} strokeDasharray="4 4" />
        </LineChart>
      ) : type === "area" ? (
        <AreaChart data={data} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid var(--border)", fontSize: 12 }} />
          <Area type="monotone" dataKey="v" stroke="var(--primary)" strokeWidth={2.5} fill="url(#g)" />
        </AreaChart>
      ) : (
        <BarChart data={data} margin={{ top: 8, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
          <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid var(--border)", fontSize: 12 }} />
          <Bar dataKey="v" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={28} />
          <Bar dataKey="v2" fill="var(--warning)" radius={[6, 6, 0, 0]} maxBarSize={28} />
        </BarChart>
      )}
    </ResponsiveContainer>
  );
}

export function SparkLine() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 4, right: 4, left: 4, bottom: 0 }}>
        <Line type="monotone" dataKey="v" stroke="var(--primary)" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}
