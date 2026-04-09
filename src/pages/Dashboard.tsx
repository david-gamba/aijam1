import { TopNavBar } from '../components/TopNavBar';
import { SideNavBar } from '../components/SideNavBar';
import { MobileBottomNav } from '../components/MobileBottomNav';
import { HeroHeader } from '../components/HeroHeader';
import { CashFlowChart } from '../components/CashFlowChart';
import { MetricCard } from '../components/MetricCard';
import { ReportCard } from '../components/ReportCard';
import { RecentActivity } from '../components/RecentActivity';

export function Dashboard() {
  return (
    <div className="bg-[#f8faf8] text-[#191c1b] min-h-screen">
      <TopNavBar />
      <SideNavBar />

      <main className="lg:pl-64 pt-24 pb-12 px-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <HeroHeader />

          <div className="editorial-grid">
            {/* Left column */}
            <div className="space-y-8">
              <CashFlowChart />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <MetricCard
                  icon="payments"
                  label="Average Monthly Cost"
                  value="$12,450"
                  progress={65}
                />
                <MetricCard
                  icon="analytics"
                  label="Median Transaction"
                  value="$842"
                  progress={42}
                />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-8">
              <ReportCard />
              <RecentActivity />
            </div>
          </div>
        </div>
      </main>

      <MobileBottomNav />
    </div>
  );
}
