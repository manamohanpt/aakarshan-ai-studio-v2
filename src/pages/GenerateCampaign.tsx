import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCcw, Save, TrendingUp, Eye, MousePointerClick } from "lucide-react";

const platforms = ["Instagram", "Google Ads", "Meta", "TikTok"];

export default function GenerateCampaign() {
  const [brandName, setBrandName] = useState("");
  const [category, setCategory] = useState("");
  const [audience, setAudience] = useState("");
  const [platform, setPlatform] = useState("Instagram");
  const [prompt, setPrompt] = useState("");
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-5xl"
        >
          <h1 className="font-display text-3xl font-bold text-foreground">
            Generate <span className="gradient-text">AI Campaign</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Fill in your brand details and let AI create optimized ad campaigns.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-5">
              <div className="glass-card p-6 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Brand Name</label>
                  <input
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="e.g., Luxe Fashion Co."
                    className="w-full rounded-lg border border-white/[0.08] bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Product Category</label>
                  <input
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g., Women's Streetwear"
                    className="w-full rounded-lg border border-white/[0.08] bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Target Audience</label>
                  <input
                    value={audience}
                    onChange={(e) => setAudience(e.target.value)}
                    placeholder="e.g., Women 18-35, Urban Fashion Enthusiasts"
                    className="w-full rounded-lg border border-white/[0.08] bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Platform</label>
                  <div className="flex flex-wrap gap-2">
                    {platforms.map((p) => (
                      <button
                        key={p}
                        onClick={() => setPlatform(p)}
                        className={`rounded-lg border px-3 py-1.5 text-xs transition-colors ${
                          platform === p
                            ? "border-primary bg-primary/10 text-foreground"
                            : "border-white/[0.08] text-muted-foreground hover:bg-secondary"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Campaign Prompt</label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    placeholder="Describe your campaign goals, tone, style preferences..."
                    className="w-full rounded-lg border border-white/[0.08] bg-secondary/50 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <Button variant="hero" className="gap-2" onClick={handleGenerate}>
                    <Sparkles className="h-4 w-4" />
                    Generate
                  </Button>
                  <Button variant="hero-outline" className="gap-2" onClick={handleGenerate}>
                    <RefreshCcw className="h-4 w-4" />
                    Regenerate
                  </Button>
                </div>
              </div>
            </div>

            {/* Outputs */}
            <div className="space-y-5">
              {generated ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-5">
                  <div className="glass-card gradient-border p-6">
                    <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Generated Ad Copy</h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">
                        "Unleash Your Street Style — {brandName || "Your Brand"}'s New Drop is Here 🔥"
                      </p>
                      <p>
                        Turn heads this season with {brandName || "our"} latest {category || "fashion"} collection.
                        Designed for {audience || "trendsetters"} who dare to stand out.
                      </p>
                      <p className="text-violet-light">CTA: Shop the Collection →</p>
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Predicted Metrics</h3>
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Est. CTR", value: "4.2%", icon: MousePointerClick },
                        { label: "Est. Reach", value: "85K", icon: Eye },
                        { label: "Est. Conv.", value: "3.1%", icon: TrendingUp },
                      ].map((m) => (
                        <div key={m.label} className="rounded-lg bg-secondary/50 p-3 text-center">
                          <m.icon className="mx-auto mb-1 h-4 w-4 text-violet-light" />
                          <div className="font-display text-lg font-bold text-foreground">{m.value}</div>
                          <div className="text-xs text-muted-foreground">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-6">
                    <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Creative Suggestions</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-light" />
                        Use lifestyle imagery over product-only shots for 23% higher engagement
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ai-blue" />
                        Short-form video content outperforms static on {platform} by 40%
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-ai-pink" />
                        Include user-generated content references for authenticity
                      </li>
                    </ul>
                  </div>

                  <Button variant="glow" className="w-full gap-2">
                    <Save className="h-4 w-4" />
                    Save Campaign
                  </Button>
                </motion.div>
              ) : (
                <div className="glass-card flex h-full min-h-[400px] items-center justify-center p-6">
                  <div className="text-center">
                    <Sparkles className="mx-auto mb-3 h-8 w-8 text-muted-foreground/50" />
                    <p className="text-sm text-muted-foreground">
                      Fill in your brand details and click Generate to create your AI campaign.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
