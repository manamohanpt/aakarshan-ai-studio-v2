import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Generate Campaign", path: "/generate" },
  { label: "Analytics", path: "/dashboard" },
  { label: "Templates", path: "/templates" },
  { label: "About", path: "/about" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-ai-blue">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Aakarshan <span className="gradient-text">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="group relative px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet to-ai-blue"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet to-ai-blue transition-all duration-300 group-hover:w-6" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Dashboard
            </Button>
          </Link>
          <Button variant="hero" size="sm">
            Login
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-foreground md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-nav border-t border-white/[0.06] px-4 pb-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="hero" size="sm" className="w-full">Login</Button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
