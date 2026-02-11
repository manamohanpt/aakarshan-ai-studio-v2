const campaigns = [
  { name: "Summer Collection 2026", platform: "Instagram", ctr: "5.2%", status: "Active", date: "Feb 8, 2026" },
  { name: "Winter Sale Promo", platform: "Meta", ctr: "4.1%", status: "Completed", date: "Feb 5, 2026" },
  { name: "New Arrivals Launch", platform: "Google", ctr: "3.8%", status: "Active", date: "Feb 3, 2026" },
  { name: "Brand Awareness Q1", platform: "Instagram", ctr: "4.6%", status: "Draft", date: "Feb 1, 2026" },
  { name: "Valentine Special", platform: "Meta", ctr: "6.1%", status: "Active", date: "Jan 28, 2026" },
];

const statusColors: Record<string, string> = {
  Active: "bg-emerald-500/20 text-emerald-400",
  Completed: "bg-muted text-muted-foreground",
  Draft: "bg-violet/20 text-violet-light",
};

export function RecentCampaigns() {
  return (
    <div className="glass-card overflow-hidden">
      <div className="p-6 pb-0">
        <h3 className="font-display text-sm font-semibold text-foreground">Recent Campaigns</h3>
      </div>
      <div className="overflow-x-auto p-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.06] text-left text-xs text-muted-foreground">
              <th className="pb-3 font-medium">Campaign</th>
              <th className="pb-3 font-medium">Platform</th>
              <th className="pb-3 font-medium">CTR</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((c) => (
              <tr key={c.name} className="border-b border-white/[0.04] last:border-0">
                <td className="py-3 font-medium text-foreground">{c.name}</td>
                <td className="py-3 text-muted-foreground">{c.platform}</td>
                <td className="py-3 text-foreground">{c.ctr}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs ${statusColors[c.status]}`}>
                    {c.status}
                  </span>
                </td>
                <td className="py-3 text-muted-foreground">{c.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
