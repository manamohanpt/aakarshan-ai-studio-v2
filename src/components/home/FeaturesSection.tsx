import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Campaign Generator",
    description: "Auto-generates ad creatives using prompts & brand data with cutting-edge AI models.",
    glow: "glow-violet",
  },
  {
    icon: TrendingUp,
    title: "Trend Prediction Engine",
    description: "Forecasts upcoming fashion trends using AI analysis of market signals and social data.",
    glow: "glow-blue",
  },
  {
    icon: Users,
    title: "Audience Insights",
    description: "Target demographics, behavior patterns, and engagement insights powered by AI analytics.",
    glow: "glow-pink",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Real-time ad metrics, A/B testing results, and performance comparisons across platforms.",
    glow: "glow-violet",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
            Everything you need to
            <span className="gradient-text"> dominate fashion ads</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From creative generation to performance optimization, our AI handles the heavy lifting.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card gradient-border group p-6 transition-all duration-300 hover:-translate-y-1 ${feature.glow}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet/20 to-ai-blue/20">
                <feature.icon className="h-5 w-5 text-violet-light" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
