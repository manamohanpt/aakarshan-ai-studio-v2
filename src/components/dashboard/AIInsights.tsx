import { Sparkles, ArrowUpRight } from "lucide-react";

const insights = [
  {
    type: "Optimization",
    message: "Improve headline for better CTR — current headline underperforms by 12%",
  },
  {
    type: "Recommendation",
    message: "Change CTA wording from 'Buy Now' to 'Shop the Look' for +8% engagement",
  },
  {
    type: "Top Performer",
    message: "Best performing prompt detected: v3.0 with 4.8% CTR across all platforms",
  },
  {
    type: "Audience",
    message: "Women 25-34 show 2x higher conversion on Instagram — reallocate budget",
  },
];

export function AIInsights() {
  return (
    <div className="glass-card gradient-border p-6">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-violet-light" />
        <h3 className="font-display text-sm font-semibold text-foreground">AI Insights</h3>
      </div>
      <div className="space-y-3">
        {insights.map((insight, i) => (
          <div key={i} className="group cursor-pointer rounded-lg bg-secondary/50 p-3 transition-colors hover:bg-secondary">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-xs font-medium text-violet-light">{insight.type}</span>
              <ArrowUpRight className="h-3 w-3 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{insight.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
