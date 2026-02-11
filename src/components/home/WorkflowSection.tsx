import { motion } from "framer-motion";
import { Upload, Sparkles, LineChart, BarChart3, Settings, Send } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Brand Data", description: "Add your brand assets, product info, and guidelines" },
  { icon: Sparkles, title: "Generate Campaigns", description: "AI creates ad copy, creatives, and targeting strategies" },
  { icon: LineChart, title: "Predict Performance", description: "Get AI-powered CTR, reach, and conversion predictions" },
  { icon: BarChart3, title: "Analyze Metrics", description: "Track real-time performance across all platforms" },
  { icon: Settings, title: "Optimize Prompts", description: "Refine prompts based on AI-driven recommendations" },
  { icon: Send, title: "Publish Ads", description: "Deploy optimized campaigns directly to ad platforms" },
];

export function WorkflowSection() {
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
            How <span className="gradient-text">Aakarshan AI</span> Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From data to deployed ads in six seamless steps.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Connecting line */}
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-violet/50 via-ai-blue/50 to-ai-pink/50 md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet/20 to-ai-blue/10 ring-1 ring-white/10">
                  <step.icon className="h-6 w-6 text-violet-light" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                </div>
                <div className="glass-card flex-1 p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
