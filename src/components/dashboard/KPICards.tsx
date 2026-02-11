import { motion } from "framer-motion";
import { TrendingUp, MousePointerClick, RefreshCcw, DollarSign, Heart } from "lucide-react";

const kpis = [
  { label: "Total Campaigns", value: "142", change: "+12%", icon: TrendingUp, color: "text-violet-light" },
  { label: "Avg CTR", value: "4.8%", change: "+0.6%", icon: MousePointerClick, color: "text-ai-blue" },
  { label: "Conversion Rate", value: "3.2%", change: "+0.4%", icon: RefreshCcw, color: "text-ai-pink" },
  { label: "ROAS", value: "5.2x", change: "+0.8x", icon: DollarSign, color: "text-violet-light" },
  { label: "Engagement Score", value: "87", change: "+5", icon: Heart, color: "text-ai-blue" },
];

export function KPICards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {kpis.map((kpi, i) => (
        <motion.div
          key={kpi.label}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          className="glass-card p-4"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{kpi.label}</span>
            <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
          </div>
          <div className="mt-2 font-display text-2xl font-bold text-foreground">{kpi.value}</div>
          <span className="text-xs text-emerald-400">{kpi.change}</span>
        </motion.div>
      ))}
    </div>
  );
}
