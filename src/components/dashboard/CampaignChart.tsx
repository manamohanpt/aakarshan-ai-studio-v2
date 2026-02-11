import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", ctr: 3.2, conversions: 2.1 },
  { month: "Feb", ctr: 3.5, conversions: 2.4 },
  { month: "Mar", ctr: 3.8, conversions: 2.6 },
  { month: "Apr", ctr: 4.1, conversions: 2.9 },
  { month: "May", ctr: 4.4, conversions: 3.0 },
  { month: "Jun", ctr: 4.8, conversions: 3.2 },
];

export function CampaignChart() {
  return (
    <div className="glass-card p-6">
      <h3 className="mb-4 font-display text-sm font-semibold text-foreground">Campaign Performance Over Time</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(240 10% 16%)" />
          <XAxis dataKey="month" stroke="hsl(220 10% 55%)" fontSize={12} />
          <YAxis stroke="hsl(220 10% 55%)" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(240 15% 8%)",
              border: "1px solid hsl(240 10% 16%)",
              borderRadius: "8px",
              color: "hsl(220 20% 95%)",
            }}
          />
          <Line type="monotone" dataKey="ctr" stroke="hsl(262 83% 58%)" strokeWidth={2} dot={false} name="CTR %" />
          <Line type="monotone" dataKey="conversions" stroke="hsl(210 100% 60%)" strokeWidth={2} dot={false} name="Conv %" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
