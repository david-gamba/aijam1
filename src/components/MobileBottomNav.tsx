const navItems = [
  { icon: 'account_balance_wallet', label: 'Portfolio', active: true },
  { icon: 'trending_up', label: 'Markets', active: false },
  { icon: 'auto_stories', label: 'Insights', active: false },
  { icon: 'account_balance', label: 'Vault', active: false },
];

export function MobileBottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#f8faf8]/95 backdrop-blur-md px-6 py-3 flex justify-between items-center z-50">
      {navItems.map(({ icon, label, active }) => (
        <button
          key={label}
          className={`flex flex-col items-center gap-1 ${active ? 'text-[#123524]' : 'text-slate-400'}`}
        >
          <span
            className="material-symbols-outlined"
            style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
          >
            {icon}
          </span>
          <span className={`text-[0.6rem] uppercase ${active ? 'font-bold' : ''}`}>{label}</span>
        </button>
      ))}
    </nav>
  );
}
