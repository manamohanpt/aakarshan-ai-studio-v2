import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { version: "v1.0", ctr: 3.2 },
  { version: "v1.1", ctr: 3.8 },
  { version: "v2.0", ctr: 4.2 },
  { version: "v2.1", ctr: 4.5 },
  { version: "v3.0", ctr: 4.8 },
];

export function PromptChart() {
  return (
    <div className="glass-card p-6">
      <h3 className="mb-4 font-display text-sm font-semibold text-foreground">Prompt Version vs CTR</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 10% 16%)" />
          <XAxis dataKey="version" stroke="hsl(220 10% 55%)" fontSize={12} />
          <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(240 15% 8%)",
              border: "1px solid hsl(240 10% 16%)",
              borderRadius: "8px",
              color: "hsl(220 20% 95%)",
            }}
          />
          <Bar dataKey="ctr" fill="hsl(262 83% 58%)" radius={[6, 6, 0, 0]} name="CTR %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
