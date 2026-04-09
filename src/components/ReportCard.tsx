export function ReportCard() {
  return (
    <div className="bg-[#123524] text-white rounded-xl overflow-hidden p-8 flex flex-col min-h-[400px]">
      <div className="uppercase tracking-[0.2rem] text-white/40 text-[0.7rem] mb-8">
        Quarterly Perspective
      </div>

      <h3 className="text-3xl font-light leading-tight mb-8">
        Refining your <span className="font-bold">Treasury Strategy</span> for the next cycle.
      </h3>

      <div className="mt-auto">
        <div className="flex -space-x-2 mb-6">
          <img
            className="w-10 h-10 rounded-full border-2 border-[#123524] object-cover"
            alt="Advisor 1"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSr1V1mBLxFB2GxgOxO5j-FjiJBmGJ6UbE19FqFr-eh_qvOR__1p0DhKnHi7RqY115Z2csIUCGDDWg_6o4GYeQf6sEdnE5z-OLNXHIjLMg2kTEcHXb5aBQscI1yYRhzLXkMcHuVUdWpPaipx2JHLwEurDIq13hNoFYsrAk4E2gpiaLgpAIVpZhv8Zol6IM05uwpcL-eFZWOHeoips0N8EJuNFk-PJFcZT7sJBndYON43wt_DnIQ3S11u3i9KSBlGJSXKubaf5oSIht"
          />
          <img
            className="w-10 h-10 rounded-full border-2 border-[#123524] object-cover"
            alt="Advisor 2"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlADA8Ym6c82aX4vo-5g2nKR5GWe7pvzdYJRAVUe2WsQsZbKjgFrlgID3GQpLIhO9NpX7BRskVMrhcO7lE9p63wSmsarm7fHpRULeOnZ6-aV2qHP2s7w5saDs1qayuUt1jrxTqN5blUS5-X9niQ0EShPSRpRHjeR5Tf4U1u6N730Y4n5CAR4E0IT9XrcpkOGODEh5YDnd6S5lX9DfnJRYh_Ubrl50pE-9cK1O77C91a7VlaVSLKL0TbsZfQpCIvx5bqv8GyPXfs_6Z"
          />
          <div className="w-10 h-10 rounded-full bg-[#001f11] flex items-center justify-center text-[0.6rem] font-bold border-2 border-[#123524]">
            +3
          </div>
        </div>

        <button className="flex items-center text-xs uppercase tracking-widest font-bold group">
          Read the Analysis
          <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}
