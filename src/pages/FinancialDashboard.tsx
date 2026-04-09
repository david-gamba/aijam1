import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import { MetricCard } from "../components/MetricCardShadcn"
import { CashFlowChart } from "../components/CashFlowChartShadcn"
import { TransactionHistoryList } from "../components/TransactionHistoryListShadcn"
import { PortfolioHeader } from "../components/PortfolioHeaderShadcn"
import { RiskMitigation } from "../components/RiskMitigationShadcn"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts"
import { TrendingUp } from "lucide-react"

// Sample data
const trendData = [
  { month: "Jan", value: 1042900 },
  { month: "Feb", value: 1085400 },
  { month: "Mar", value: 1128900 },
  { month: "Apr", value: 1167200 },
  { month: "May", value: 1205600 },
  { month: "Jun", value: 1248392 },
]

const cashFlowData = [
  { name: "Operations & Lifestyle", value: 12400, percentage: 28 },
  { name: "Reinvestment", value: 28900, percentage: 55 },
  { name: "Tax Liabilities", value: 4200, percentage: 17 },
]

const sampleTransactions = [
  {
    id: "1",
    title: "Dividend Reinvestment",
    subtitle: "Tech Index Alpha • Today",
    amount: 1420,
    isIncome: true,
    status: "cleared" as const,
    date: "Today",
  },
  {
    id: "2",
    title: "Operational Expense",
    subtitle: "AWS Cloud Services • Yesterday",
    amount: 892.5,
    isIncome: false,
    status: "pending" as const,
    date: "Yesterday",
  },
  {
    id: "3",
    title: "External Transfer",
    subtitle: "Chase Primary • 2 Days Ago",
    amount: 15000,
    isIncome: true,
    status: "cleared" as const,
    date: "2 Days Ago",
  },
  {
    id: "4",
    title: "Market Fee",
    subtitle: "Interactive Brokers • 3 Days Ago",
    amount: 125,
    isIncome: false,
    status: "cleared" as const,
    date: "3 Days Ago",
  },
  {
    id: "5",
    title: "Interest Income",
    subtitle: "High Yield Savings • 4 Days Ago",
    amount: 234.56,
    isIncome: true,
    status: "cleared" as const,
    date: "4 Days Ago",
  },
]

export function FinancialDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("portfolio-theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setDarkMode(storedTheme ? storedTheme === "dark" : prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light")
  }, [darkMode])

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-outline-variant/20 bg-surface sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Editorial Excellence</p>
              <h1 className="text-2xl font-bold text-on-background">Portfolio Velocity</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Support</button>
              <button className="text-sm text-on-surface-variant hover:text-on-surface transition-colors">Logout</button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-low px-4 py-2 text-sm text-on-surface transition-colors hover:bg-surface-container"
                onClick={() => setDarkMode((value) => !value)}
              >
                <span className="material-symbols-outlined">{darkMode ? "light_mode" : "dark_mode"}</span>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
        {/* Portfolio Header */}
        <PortfolioHeader
          totalAssets="$1,248,392.00"
          userName="Executive"
          userTier="Premium Tier"
        />

        {/* Tabs */}
        <div>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="bg-surface-container-low border-b border-outline-variant/20 w-full justify-start rounded-none px-0 h-auto p-0">
              <TabsTrigger value="overview" className="rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent px-6 py-4">Overview</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent px-6 py-4">Analytics</TabsTrigger>
              <TabsTrigger value="transactions" className="rounded-none border-b-2 border-b-transparent data-[state=active]:border-b-primary data-[state=active]:bg-transparent px-6 py-4">Transactions</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-12 mt-8">
              {/* Key Metrics */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-6">Key Metrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <MetricCard
                    title="Avg Growth"
                    value="+12.4%"
                    description="Performance over last 30 days"
                    trend={{
                      value: "+2.1% from last month",
                      isPositive: true,
                    }}
                    icon={<TrendingUp className="h-4 w-4" />}
                  />
                  <MetricCard
                    title="Savings Rate"
                    value="64.2%"
                    description="Monthly savings ratio"
                    trend={{
                      value: "+4.1% from last month",
                      isPositive: true,
                    }}
                  />
                  <MetricCard
                    title="Average Cost Basis"
                    value="$42.18"
                    description="Across 12 asset classes"
                  />
                  <MetricCard
                    title="Liquid Reserve"
                    value="$184.2K"
                    description="Cash position"
                    trend={{
                      value: "-2.1%",
                      isPositive: false,
                    }}
                  />
                </div>
              </div>

              {/* Charts Row */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-6">Analysis</h2>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                  {/* Growth Trajectory */}
                  <Card className="border-0 bg-surface-container-lowest shadow-ambient">
                    <CardHeader>
                      <div className="space-y-1">
                        <CardTitle className="text-lg font-semibold">Growth Trajectory</CardTitle>
                        <CardDescription className="text-sm">Performance over last 6 months</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ResponsiveContainer width="100%" height={250}>
                        <AreaChart
                          data={trendData}
                          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                        >
                          <defs>
                            <linearGradient
                              id="colorValue"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="1"
                            >
                              <stop
                                offset="5%"
                                stopColor="#006479"
                                stopOpacity={0.3}
                              />
                              <stop
                                offset="95%"
                                stopColor="#006479"
                                stopOpacity={0.01}
                              />
                            </linearGradient>
                          </defs>
                          <CartesianGrid
                            strokeDasharray="3 3"
                            stroke="#86b3cc"
                            opacity={0.3}
                          />
                          <XAxis
                            dataKey="month"
                            stroke="#326177"
                            style={{ fontSize: "12px" }}
                          />
                          <YAxis
                            stroke="#326177"
                            style={{ fontSize: "12px" }}
                          />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: "#ffffff",
                              border: "1px solid #86b3cc",
                              borderRadius: "8px",
                            }}
                            formatter={(value) =>
                              `$${Number(value).toLocaleString()}`
                            }
                          />
                          <Area
                            type="monotone"
                            dataKey="value"
                            stroke="#006479"
                            strokeWidth={2}
                            fillOpacity={1}
                            fill="url(#colorValue)"
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </CardContent>
                  </Card>

                  {/* Cash Flow Allocation */}
                  <CashFlowChart data={cashFlowData} />
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant mb-6">Recent Activity</h2>
                <TransactionHistoryList
                  transactions={sampleTransactions}
                  title="Flow History"
                  description="Recent transactions and cash movements"
                  maxItems={5}
                />
              </div>

              {/* Risk Mitigation */}
              <RiskMitigation
                title="Secure your legacy with AI-driven risk mitigation"
                status="active"
                encryptionMethod="AES-256"
                lastSync="14:02 GMT"
              />
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-8 mt-8">
              <Card className="border-0 bg-surface-container-lowest shadow-ambient">
                <CardHeader>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold">Performance Analysis</CardTitle>
                    <CardDescription className="text-sm">Detailed breakdown of portfolio performance</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                      <span className="text-sm font-medium text-on-surface">Total Return</span>
                      <span className="text-lg font-semibold text-primary">+18.6%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                      <span className="text-sm font-medium text-on-surface">Annualized Growth</span>
                      <span className="text-lg font-semibold text-secondary">+24.2%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low">
                      <span className="text-sm font-medium text-on-surface">Volatility Index</span>
                      <span className="text-lg font-semibold text-tertiary">2.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Transactions Tab */}
            <TabsContent value="transactions" className="space-y-8 mt-8">
              <TransactionHistoryList
                transactions={sampleTransactions}
                title="All Transactions"
                description="Complete transaction history"
                maxItems={10}
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
