import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BarChart3, Zap, Target } from "lucide-react";

const floatingCards = [
  {
    title: "Campaign CTR",
    value: "4.8%",
    change: "+23%",
    icon: TrendingUp,
    className: "float-animation top-8 right-0",
    glow: "glow-violet",
  },
  {
    title: "AI Creatives",
    value: "2,340",
    change: "Generated",
    icon: Zap,
    className: "float-animation-delayed top-44 right-16",
    glow: "glow-blue",
  },
  {
    title: "ROAS",
    value: "5.2x",
    change: "+18%",
    icon: BarChart3,
    className: "float-animation-slow top-72 right-4",
    glow: "glow-pink",
  },
  {
    title: "Audience Reach",
    value: "1.2M",
    change: "Active",
    icon: Target,
    className: "float-animation top-56 right-48 hidden lg:block",
    glow: "glow-violet",
  },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-violet/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-ai-blue/8 blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 h-64 w-64 rounded-full bg-ai-pink/6 blur-[100px]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
              <Zap className="h-3 w-3 text-violet-light" />
              AI-Powered Fashion Campaigns
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Design Smarter
              <br />
              Fashion Campaigns
              <br />
              <span className="gradient-text">with AI</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Turn fashion trends into data-driven ad campaigns. Generate creatives, predict
              performance, and analyze insights — all in one AI platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/generate">
                <Button variant="hero" size="lg" className="gap-2">
                  Create Campaign
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="hero-outline" size="lg">
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8">
              {[
                { label: "Campaigns Created", value: "12K+" },
                { label: "Avg CTR Boost", value: "3.2x" },
                { label: "Brands Onboard", value: "450+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden h-[500px] md:block"
          >
            {floatingCards.map((card) => (
              <div
                key={card.title}
                className={`glass-card gradient-border absolute w-52 p-4 ${card.className} ${card.glow}`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{card.title}</span>
                  <card.icon className="h-4 w-4 text-violet-light" />
                </div>
                <div className="font-display text-2xl font-bold text-foreground">{card.value}</div>
                <span className="text-xs text-emerald-400">{card.change}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
