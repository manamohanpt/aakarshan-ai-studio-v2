import { Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "About Aakarshan AI", path: "/about" },
  { label: "Privacy Policy", path: "#" },
  { label: "Contact", path: "#" },
  { label: "GitHub", path: "#" },
  { label: "LinkedIn", path: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-ai-blue">
            <Sparkles className="h-3.5 w-3.5 text-primary-foreground" />
          </div>
          <span className="font-display text-sm font-semibold text-foreground">
            Aakarshan AI
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © 2026 Aakarshan AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
