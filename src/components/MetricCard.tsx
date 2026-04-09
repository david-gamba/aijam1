interface MetricCardProps {
  icon: string;
  label: string;
  value: string;
  progress: number; // 0–100
}

export function MetricCard({ icon, label, value, progress }: MetricCardProps) {
  return (
    <div className="bg-white p-8 border border-[#c1c8c1]/10 rounded-xl">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-[#dbe5dd] flex items-center justify-center text-[#123524]">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div className="ml-4">
          <div className="uppercase tracking-wider text-[0.65rem] text-[#727973]">{label}</div>
          <div className="text-2xl font-bold text-[#191c1b]">{value}</div>
        </div>
      </div>
      <div className="h-1 bg-[#e6e9e7] rounded-full overflow-hidden">
        <div
          className="h-full bg-[#123524] rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
