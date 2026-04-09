import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

interface CashFlowData {
  name: string
  value: number
  percentage: number
}

interface CashFlowChartProps {
  data: CashFlowData[]
  title?: string
  description?: string
}

const COLORS = {
  operations: "#006a35",
  reinvestment: "#006479",
  tax: "#aa2c32",
}

const renderCustomLabel = ({ value }: any) => {
  const total = 45500 // sum of all values
  const percentage = Math.round((value / total) * 100)
  return `${percentage}%`
}

export function CashFlowChart({
  data,
  title = "Cash Flow Allocation",
  description = "Distribution of monthly cash flow",
}: CashFlowChartProps) {
  const getColor = (name: string): string => {
    if (name.toLowerCase().includes("operations")) return COLORS.operations
    if (name.toLowerCase().includes("reinvestment")) return COLORS.reinvestment
    if (name.toLowerCase().includes("tax")) return COLORS.tax
    return "#00B4D8"
  }

  return (
    <Card className="border-0 bg-surface-container-lowest shadow-ambient">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          {description && (
            <CardDescription className="text-sm">{description}</CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getColor(entry.name)} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => {
                return `$${Number(value).toLocaleString()}`
              }}
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #86b3cc",
                borderRadius: "8px",
              }}
            />
            <Legend 
              wrapperStyle={{ paddingTop: "20px" }}
              formatter={(value) => <span className="text-xs text-on-surface-variant">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
