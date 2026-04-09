# shadcn/ui Financial Dashboard Components

This project implements a comprehensive financial dashboard using React, shadcn/ui, and the Stitch design system colors.

## 🎨 Design System

The components use a premium financial design system with:
- **Color Palette**: Vibrant teal (#006479) primary, green secondary, and coral tertiary
- **Typography**: Manrope headlines, Plus Jakarta Sans for body text
- **Surface Layers**: Multi-layered surface system for visual hierarchy
- **Rounded Corners**: 8px default border radius for a modern feel

### Key Colors
- **Primary**: #006479 (Teal)
- **Secondary**: #006a35 (Green - for income)
- **Tertiary**: #aa2c32 (Coral - for expenses)
- **Background**: #eef8ff (Light blue)
- **Surface**: Various layered surfaces (#ffffff to #cdedff)

## 📦 Installed Components

### UI Foundation Components (`src/components/ui/`)

#### Button
Base button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui/button"

<Button variant="default" size="lg">
  Submit
</Button>

<Button variant="secondary" size="sm">
  Cancel
</Button>

<Button variant="ghost">
  Dismiss
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
**Sizes**: `default`, `sm`, `lg`, `icon`

#### Card
Container component for grouping related content.

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

#### Input
Text input field with focus states.

```tsx
import { Input } from "@/components/ui/input"

<Input placeholder="Enter amount..." type="number" />
```

#### Badge
Small label component for categorization.

```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="secondary">Income</Badge>
<Badge variant="outline">Pending</Badge>
```

#### Tabs
Tabbed content navigation.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs value="overview" onValueChange={setTab}>
  <TabsList>
    <TabsTrigger value="overview">Overview</TabsTrigger>
    <TabsTrigger value="details">Details</TabsTrigger>
  </TabsList>
  <TabsContent value="overview">
    Overview content
  </TabsContent>
</Tabs>
```

### Financial Dashboard Components (`src/components/`)

#### MetricCard
Displays a key financial metric with trend indicators.

```tsx
import { MetricCard } from "@/components/MetricCardShadcn"

<MetricCard
  title="Avg Growth"
  value="+12.4%"
  description="Performance over last 30 days"
  trend={{
    value: "+2.1% from last month",
    isPositive: true
  }}
  icon={<TrendingUp className="h-4 w-4" />}
/>
```

**Props**:
- `title`: Metric label
- `value`: Main displayed value
- `description`: Optional subtitle
- `trend`: Optional trend object with `value` and `isPositive` boolean
- `icon`: Optional Lucide icon

#### CashFlowChart
Pie chart showing cash flow allocation across categories.

```tsx
import { CashFlowChart } from "@/components/CashFlowChartShadcn"

const data = [
  { name: "Operations & Lifestyle", value: 12400, percentage: 28 },
  { name: "Reinvestment", value: 28900, percentage: 55 },
  { name: "Tax Liabilities", value: 4200, percentage: 17 }
]

<CashFlowChart 
  data={data}
  title="Cash Flow Allocation"
  description="Distribution of monthly cash flow"
/>
```

**Props**:
- `data`: Array of CashFlowData objects with `name`, `value`, and `percentage`
- `title`: Chart title
- `description`: Optional subtitle

#### TransactionHistoryList
List component displaying recent transactions with status badges.

```tsx
import { TransactionHistoryList, type Transaction } from "@/components/TransactionHistoryListShadcn"

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
    title: "AWS Bill",
    subtitle: "AWS Cloud Services • Yesterday",
    amount: 892.5,
    isIncome: false,
    status: "pending",
    date: "Yesterday"
  }
]

<TransactionHistoryList
  transactions={transactions}
  title="Flow History"
  description="Recent transactions"
  maxItems={5}
/>
```

**Props**:
- `transactions`: Array of Transaction objects
- `title`: List title
- `description`: Optional subtitle
- `maxItems`: Maximum transactions to display (default: 5)

#### PortfolioHeader
Header component displaying total assets and portfolio overview.

```tsx
import { PortfolioHeader } from "@/components/PortfolioHeaderShadcn"

<PortfolioHeader
  totalAssets="$1,248,392.00"
  userName="Alex"
  userTier="Premium Tier"
  onAddTransaction={() => console.log("Add transaction")}
/>
```

**Props**:
- `totalAssets`: Formatted asset value
- `userName`: User display name
- `userTier`: Subscription tier
- `onAddTransaction`: Optional callback for new transaction button

#### RiskMitigation
Feature card for AI-driven risk mitigation with security information.

```tsx
import { RiskMitigation } from "@/components/RiskMitigationShadcn"

<RiskMitigation
  title="Secure your legacy with AI-driven risk mitigation"
  status="active"
  encryptionMethod="AES-256"
  lastSync="14:02 GMT"
/>
```

**Props**:
- `title`: Card title
- `description`: Optional longer description
- `status`: "active" or "inactive"
- `encryptionMethod`: Encryption type (default: "AES-256")
- `lastSync`: Last sync timestamp

## 🗂️ Project Structure

```
src/
├── components/
│   ├── ui/                          # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── tabs.tsx
│   ├── MetricCardShadcn.tsx         # Financial metrics display
│   ├── CashFlowChartShadcn.tsx      # Cash flow visualization
│   ├── TransactionHistoryListShadcn.tsx  # Transaction list
│   ├── PortfolioHeaderShadcn.tsx    # Portfolio overview
│   └── RiskMitigationShadcn.tsx     # Risk mitigation feature
├── lib/
│   └── utils.ts                     # Utility functions (cn() for classnames)
├── pages/
│   └── FinancialDashboard.tsx       # Complete dashboard page
├── index.css                        # Tailwind theme configuration
└── tailwind.config.ts               # Tailwind configuration
```

## 🚀 Usage Example

See `src/pages/FinancialDashboard.tsx` for a complete working example with:
- Tab-based navigation
- Multiple metric cards
- Charts and visualizations
- Transaction history
- Risk mitigation section

## 🎯 Key Features

✅ **Design System**: Colors, typography, and spacing from Stitch design  
✅ **Responsive**: Mobile-first design with Tailwind CSS  
✅ **Accessible**: Built on Radix UI with proper ARIA attributes  
✅ **Type-Safe**: Full TypeScript support  
✅ **Customizable**: Tailwind CSS for easy customization  
✅ **Charts**: Recharts integration for data visualization  
✅ **Icons**: Lucide React icons throughout  

## 🛠️ Dependencies

- **React 19**: UI framework
- **TypeScript**: Type safety
- **Tailwind CSS**: Styling
- **shadcn/ui**: Component library
- **Radix UI**: Primitive components
- **Recharts**: Data visualization
- **Lucide React**: Icons
- **class-variance-authority**: Component variants
- **clsx**: Class name utilities

## 📚 Tailwind Configuration

The project includes a custom Tailwind configuration with design system colors:

```ts
// tailwind.config.ts
colors: {
  primary: "#006479",
  secondary: "#006a35",
  tertiary: "#aa2c32",
  surface: { ... },
  // ... and more
}
```

## 🎨 Customization

To customize colors, edit:
1. `tailwind.config.ts` - Main color definitions
2. `src/index.css` - CSS theme variables
3. Component files - Individual component styling

## 📝 Notes

- The dashboard uses Recharts for charts - customize data and colors in component files
- All components follow Tailwind CSS conventions for styling
- Use the `cn()` utility from `@/lib/utils` to merge classnames
- Badge and Button components support multiple variants - check component files for options

## 🔗 Component Dependencies

- Most components use the `Card` component as base
- Charts use `ResponsiveContainer` from Recharts for responsiveness
- All financial values use locale-aware formatting with `toLocaleString()`

Enjoy building! 🚀
