// Quick Start Guide - Copy and Paste Examples

// ============================================================================
// 1. BASIC UI COMPONENTS
// ============================================================================

// Button Component
import { Button } from "@/components/ui/button"

function ButtonExamples() {
  return (
    <div className="space-y-4">
      <Button variant="default">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="destructive">Delete</Button>
      
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">+</Button>
    </div>
  )
}

// ============================================================================
// 2. CARD COMPONENTS
// ============================================================================

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

function CardExample() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Main content area</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}

// ============================================================================
// 3. INPUT COMPONENT
// ============================================================================

import { Input } from "@/components/ui/input"

function InputExample() {
  return (
    <div className="space-y-4">
      <Input placeholder="Enter your name..." />
      <Input type="email" placeholder="your@email.com" />
      <Input type="number" placeholder="Amount..." />
      <Input type="password" placeholder="Password..." />
    </div>
  )
}

// ============================================================================
// 4. BADGE COMPONENT
// ============================================================================

import { Badge } from "@/components/ui/badge"

function BadgeExample() {
  return (
    <div className="space-y-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Income</Badge>
      <Badge variant="outline">Pending</Badge>
      <Badge variant="destructive">Expense</Badge>
    </div>
  )
}

// ============================================================================
// 5. TABS COMPONENT
// ============================================================================

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { useState } from "react"

function TabsExample() {
  const [activeTab, setActiveTab] = useState("tab1")
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      
      <TabsContent value="tab1">
        <p>Content for tab 1</p>
      </TabsContent>
      
      <TabsContent value="tab2">
        <p>Content for tab 2</p>
      </TabsContent>
      
      <TabsContent value="tab3">
        <p>Content for tab 3</p>
      </TabsContent>
    </Tabs>
  )
}

// ============================================================================
// 6. METRIC CARD - FINANCIAL COMPONENT
// ============================================================================

import { MetricCard } from "@/components/MetricCardShadcn"
import { TrendingUp, TrendingDown } from "lucide-react"

function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        title="Total Assets"
        value="$1,248,392.00"
        description="Current portfolio value"
        trend={{
          value: "+18.6% YTD",
          isPositive: true
        }}
        icon={<TrendingUp className="h-4 w-4" />}
      />
      
      <MetricCard
        title="Monthly Savings"
        value="$8,450"
        description="Saved this month"
        trend={{
          value: "+12% vs last month",
          isPositive: true
        }}
      />
      
      <MetricCard
        title="Expenses"
        value="$3,280"
        description="This month"
        trend={{
          value: "-5% vs last month",
          isPositive: false
        }}
      />
      
      <MetricCard
        title="Investments"
        value="$945,200"
        description="In active investments"
      />
    </div>
  )
}

// ============================================================================
// 7. CASH FLOW CHART - FINANCIAL COMPONENT
// ============================================================================

import { CashFlowChart } from "@/components/CashFlowChartShadcn"

function CashFlowChartExample() {
  const cashFlowData = [
    { name: "Operations & Lifestyle", value: 12400, percentage: 28 },
    { name: "Reinvestment", value: 28900, percentage: 55 },
    { name: "Tax Liabilities", value: 4200, percentage: 17 }
  ]
  
  return (
    <CashFlowChart 
      data={cashFlowData}
      title="Monthly Cash Flow"
      description="Where your money goes"
    />
  )
}

// ============================================================================
// 8. TRANSACTION HISTORY - FINANCIAL COMPONENT
// ============================================================================

import { TransactionHistoryList, type Transaction } from "@/components/TransactionHistoryListShadcn"

function TransactionHistoryExample() {
  const transactions: Transaction[] = [
    {
      id: "1",
      title: "Dividend Reinvestment",
      subtitle: "Tech Index Alpha • Today",
      amount: 1420,
      isIncome: true,
      status: "cleared",
      date: "Today"
    },
    {
      id: "2",
      title: "AWS Cloud Services",
      subtitle: "Operational Expense • Yesterday",
      amount: 892.5,
      isIncome: false,
      status: "pending",
      date: "Yesterday"
    },
    {
      id: "3",
      title: "External Transfer",
      subtitle: "Chase Primary • 2 Days Ago",
      amount: 15000,
      isIncome: true,
      status: "cleared",
      date: "2 Days Ago"
    }
  ]
  
  return (
    <TransactionHistoryList
      transactions={transactions}
      title="Recent Transactions"
      description="Your latest financial activity"
      maxItems={5}
    />
  )
}

// ============================================================================
// 9. PORTFOLIO HEADER - FINANCIAL COMPONENT
// ============================================================================

import { PortfolioHeader } from "@/components/PortfolioHeaderShadcn"

function PortfolioHeaderExample() {
  return (
    <PortfolioHeader
      totalAssets="$1,248,392.00"
      userName="Alex Johnson"
      userTier="Premium Tier"
      onAddTransaction={() => console.log("Add transaction clicked")}
    />
  )
}

// ============================================================================
// 10. RISK MITIGATION - FINANCIAL COMPONENT
// ============================================================================

import { RiskMitigation } from "@/components/RiskMitigationShadcn"

function RiskMitigationExample() {
  return (
    <RiskMitigation
      title="Secure your legacy with AI-driven risk mitigation"
      description="Our predictive engine protects against market volatility"
      status="active"
      encryptionMethod="AES-256"
      lastSync="14:02 GMT"
    />
  )
}

// ============================================================================
// 11. COMPLETE DASHBOARD EXAMPLE
// ============================================================================

function CompleteDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-outline-variant bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-primary">My Portfolio</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* Portfolio Header */}
        <PortfolioHeader
          totalAssets="$1,248,392.00"
          userName="You"
          userTier="Premium"
        />

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <MetricCard title="Assets" value="$1.2M" />
          <MetricCard title="Growth" value="+12.4%" />
          <MetricCard title="Savings" value="64.2%" />
          <MetricCard title="Liquid" value="$184K" />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CashFlowChart
            data={[
              { name: "Operations", value: 12400, percentage: 28 },
              { name: "Reinvestment", value: 28900, percentage: 55 },
              { name: "Taxes", value: 4200, percentage: 17 }
            ]}
          />
          <TransactionHistoryList
            transactions={[
              {
                id: "1",
                title: "Dividend",
                subtitle: "Today",
                amount: 1420,
                isIncome: true,
                status: "cleared",
                date: "Today"
              }
            ]}
          />
        </div>

        {/* Risk Section */}
        <RiskMitigation status="active" />
      </main>
    </div>
  )
}

// ============================================================================
// STYLING CLASSES REFERENCE
// ============================================================================

/*
Grid Layouts:
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
  grid gap-4 md:gap-6 lg:gap-8

Spacing:
  space-y-4 (vertical spacing)
  space-x-4 (horizontal spacing)

Colors:
  text-primary (teal)
  text-secondary (green)
  text-tertiary (coral)
  bg-background (light blue)
  bg-surface-container-lowest (white)

Typography:
  text-xs, text-sm, text-base, text-lg, text-2xl, text-3xl
  font-light, font-normal, font-medium, font-semibold, font-bold

Borders:
  border-outline-variant (ghost borders)
  rounded-md (4px), rounded-lg (8px), rounded-xl (12px)

Responsive:
  sm:, md:, lg:, xl: (breakpoints)
*/

// ============================================================================
// EXPORT ALL FOR QUICK ACCESS
// ============================================================================

export {
  ButtonExamples,
  CardExample,
  InputExample,
  BadgeExample,
  TabsExample,
  MetricCardExample,
  CashFlowChartExample,
  TransactionHistoryExample,
  PortfolioHeaderExample,
  RiskMitigationExample,
  CompleteDashboard
}
