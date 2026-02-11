import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border glow-violet relative overflow-hidden rounded-2xl p-12 text-center md:p-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet/15 blur-[80px]" />
          </div>
          <h2 className="relative font-display text-3xl font-bold text-foreground sm:text-4xl">
            Ready to build your next
            <br />
            <span className="gradient-text">high-performing fashion campaign?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">
            Join hundreds of fashion brands already using AI to create smarter, data-driven campaigns.
          </p>
          <div className="relative mt-8">
            <Link to="/generate">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
