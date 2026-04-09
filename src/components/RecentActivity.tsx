interface ActivityItem {
  name: string;
  type: string;
  amount: string;
  positive: boolean;
}

const activities: ActivityItem[] = [
  { name: 'Vanguard Global REIT', type: 'Equity Purchase', amount: '+$45,000', positive: true },
  { name: 'Private Equity Distribution', type: 'Capital Gain', amount: '+$12,300', positive: true },
  { name: 'Operational Treasury', type: 'Transfer', amount: '-$8,400', positive: false },
];

export function RecentActivity() {
  return (
    <div className="bg-[#f2f4f2] rounded-xl p-8">
      <h4 className="text-lg font-bold text-[#001f11] mb-6">Recent Activity</h4>

      <div className="space-y-6">
        {activities.map(({ name, type, amount, positive }) => (
          <div key={name} className="flex justify-between items-start">
            <div>
              <div className="text-sm font-bold text-[#191c1b]">{name}</div>
              <div className="text-xs text-[#727973]">{type}</div>
            </div>
            <div className={`text-sm font-bold ${positive ? 'text-[#001f11]' : 'text-[#414843]'}`}>
              {amount}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-10 py-3 text-xs uppercase tracking-widest font-bold text-[#123524] hover:bg-white/50 rounded transition-all">
        View All Statements
      </button>
    </div>
  );
}
