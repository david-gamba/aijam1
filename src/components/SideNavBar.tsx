const navItems = [
  { icon: 'account_balance_wallet', label: 'Portfolio', active: true },
  { icon: 'trending_up', label: 'Markets', active: false },
  { icon: 'auto_stories', label: 'Insights', active: false },
  { icon: 'account_balance', label: 'Treasury', active: false },
  { icon: 'description', label: 'Reports', active: false },
];

export function SideNavBar() {
  return (
    <aside className="hidden lg:flex h-screen w-64 fixed left-0 top-0 bg-[#f8faf8] flex-col py-8 z-40">
      <div className="px-8 mb-12">
        <div className="text-lg font-black text-[#123524] mb-1">Wealth Management</div>
        <div className="text-[0.65rem] uppercase tracking-[0.1rem] text-slate-400">Editorial Series</div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map(({ icon, label, active }) => (
          <a
            key={label}
            href="#"
            className={`flex items-center py-2 pl-4 transition-all hover:bg-[#f2f4f2] ${
              active
                ? 'text-[#123524] font-bold border-l-2 border-[#123524]'
                : 'text-slate-500'
            }`}
          >
            <span className="material-symbols-outlined mr-3">{icon}</span>
            <span className="text-xs uppercase tracking-[0.05rem]">{label}</span>
          </a>
        ))}
      </nav>

      <div className="px-8 mt-auto space-y-6">
        <button className="w-full py-3 bg-[#123524] text-white font-bold rounded text-xs uppercase tracking-widest hover:brightness-110 transition-all">
          Consult Advisor
        </button>
        <div className="space-y-3">
          <a className="flex items-center text-slate-400 hover:text-[#123524] transition-colors text-xs uppercase tracking-[0.05rem]" href="#">
            <span className="material-symbols-outlined text-sm mr-2">settings</span> Settings
          </a>
          <a className="flex items-center text-slate-400 hover:text-[#123524] transition-colors text-xs uppercase tracking-[0.05rem]" href="#">
            <span className="material-symbols-outlined text-sm mr-2">contact_support</span> Support
          </a>
        </div>
      </div>
    </aside>
  );
}
