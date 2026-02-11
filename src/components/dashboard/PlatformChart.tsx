import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Instagram", value: 42 },
  { name: "Google", value: 28 },
  { name: "Meta", value: 20 },
  { name: "Other", value: 10 },
];

const COLORS = ["hsl(262 83% 58%)", "hsl(210 100% 60%)", "hsl(330 80% 60%)", "hsl(220 10% 40%)"];

export function PlatformChart() {
  return (
    <div className="glass-card p-6">
      <h3 className="mb-4 font-display text-sm font-semibold text-foreground">Platform Performance</h3>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={4} dataKey="value">
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(240 15% 8%)",
              border: "1px solid hsl(240 10% 16%)",
              borderRadius: "8px",
              color: "hsl(220 20% 95%)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {data.map((item, i) => (
          <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
            {item.name} ({item.value}%)
          </div>
        ))}
      </div>
    </div>
  );
}
