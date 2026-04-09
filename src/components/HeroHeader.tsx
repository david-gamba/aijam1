export function HeroHeader() {
  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="uppercase tracking-[0.15rem] text-[#727973] text-xs block mb-2">
            Executive Overview
          </span>
          <h1 className="text-[3.5rem] font-extrabold tracking-tighter text-[#001f11] leading-tight">
            $2,840,192<span className="text-[#123524]/40">.00</span>
          </h1>
          <p className="text-[#57615a] mt-2 max-w-md">
            Your portfolio has appreciated by 12.4% this quarter, anchored by private equity and sustainable bonds.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="p-6 bg-[#f2f4f2] rounded-lg min-w-[180px]">
            <div className="uppercase tracking-[0.05rem] text-[#727973] text-[0.7rem] mb-1">Savings Rate</div>
            <div className="text-2xl font-bold text-[#001f11]">34.2%</div>
            <div className="flex items-center mt-2 text-[#436652] text-xs font-semibold">
              <span className="material-symbols-outlined text-sm mr-1">arrow_upward</span> +2.1%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
