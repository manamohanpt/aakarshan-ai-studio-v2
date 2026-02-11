import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { KPICards } from "@/components/dashboard/KPICards";
import { CampaignChart } from "@/components/dashboard/CampaignChart";
import { PromptChart } from "@/components/dashboard/PromptChart";
import { PlatformChart } from "@/components/dashboard/PlatformChart";
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns";
import { AIInsights } from "@/components/dashboard/AIInsights";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <header className="flex h-16 items-center border-b border-white/[0.06] px-6">
          <h1 className="font-display text-lg font-semibold text-foreground">Dashboard Overview</h1>
        </header>
        <div className="space-y-6 p-6">
          <KPICards />
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CampaignChart />
            </div>
            <PlatformChart />
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PromptChart />
            </div>
            <AIInsights />
          </div>
          <RecentCampaigns />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
