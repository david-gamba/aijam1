export function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface backdrop-blur-md border-b border-outline-variant/20 flex justify-between items-center px-8 h-16">
      <div className="text-xl font-bold tracking-tight text-on-background">
        Quiet Authority
      </div>

      <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
        <a className="text-[#123524] font-semibold hover:text-[#123524] transition-colors" href="#">Portfolio</a>
        <a className="text-slate-500 hover:text-[#123524] transition-colors" href="#">Markets</a>
        <a className="text-slate-500 hover:text-[#123524] transition-colors" href="#">Insights</a>
        <a className="text-slate-500 hover:text-[#123524] transition-colors" href="#">Treasury</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="material-symbols-outlined text-[#123524] scale-95 duration-200">
          dark_mode
        </button>
        <div className="h-8 w-8 rounded-full bg-[#e1e3e1] overflow-hidden">
          <img
            alt="User profile"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFIv3UTLuDgMq610UuZPiU9j6SzlwkleiTCjHwZDAIfAm3XWImFrdg0KkxuPm8RF1S2C0hizZ1wSEe-yDl179rfnagFBrJvXkFjk09nIOYqswoGjdqlnldwLhMTRGvt3asgzAVxgCVP59PSlLxrGNOWnYwfEm-8tPHd4SK656-AK_c-OD8qfbR7xLfXKi_kmXxZC-K23D-ZGxQy8lOJjmWXjmcQcm3QM74pTUKsDGGMlR2IvO3NH5FAMvS1nly0WWyMQbJDy447XCs"
          />
        </div>
      </div>
    </header>
  );
}
