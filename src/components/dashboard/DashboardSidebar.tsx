import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Megaphone, BarChart3, Users, FlaskConical,
  FileText, Settings, Sparkles, ChevronLeft, ChevronRight
} from "lucide-react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
  { icon: Megaphone, label: "Campaigns", path: "/dashboard/campaigns" },
  { icon: BarChart3, label: "Prompt Performance", path: "/dashboard/prompts" },
  { icon: Users, label: "Audience Insights", path: "/dashboard/audience" },
  { icon: FlaskConical, label: "A/B Testing", path: "/dashboard/ab-testing" },
  { icon: FileText, label: "Reports", path: "/dashboard/reports" },
  { icon: Settings, label: "Settings", path: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={`flex shrink-0 flex-col border-r border-white/[0.06] bg-sidebar transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-white/[0.06] px-4">
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-violet-light" />
            <span className="font-display text-sm font-bold text-foreground">Aakarshan</span>
          </Link>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>

      <nav className="flex-1 space-y-1 p-2">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path || (item.path === "/dashboard" && location.pathname === "/dashboard");
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
                isActive
                  ? "bg-primary/10 text-foreground font-medium"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className={`h-4 w-4 shrink-0 ${isActive ? "text-violet-light" : ""}`} />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
