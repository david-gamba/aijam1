const months = [
  { label: 'Jan', incomeH: '80%', expensesH: '40%' },
  { label: 'Feb', incomeH: '100%', expensesH: '33%' },
  { label: 'Mar', incomeH: '75%', expensesH: '50%' },
  { label: 'Apr', incomeH: '83%', expensesH: '25%' },
  { label: 'May', incomeH: '67%', expensesH: '67%' },
  { label: 'Jun', incomeH: '100%', expensesH: '20%' },
];

export function CashFlowChart() {
  return (
    <div className="bg-[#f2f4f2] rounded-xl p-8 h-[460px] flex flex-col">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-2xl font-bold text-[#001f11]">Cash Flow Dynamics</h2>
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#123524]"></div>
            <span className="text-xs uppercase tracking-wider font-semibold">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#c1c8c1]"></div>
            <span className="text-xs uppercase tracking-wider font-semibold">Expenses</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-end justify-between gap-4 px-4">
        {months.map(({ label, incomeH, expensesH }) => (
          <div key={label} className="flex flex-col items-center gap-2 w-full">
            <div className="w-full flex gap-1 items-end h-48">
              <div
                className="w-1/2 bg-[#123524] rounded-t-sm transition-all"
                style={{ height: incomeH }}
              ></div>
              <div
                className="w-1/2 bg-[#c1c8c1] rounded-t-sm transition-all"
                style={{ height: expensesH }}
              ></div>
            </div>
            <span className="text-[0.65rem] uppercase tracking-tighter text-[#727973]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
