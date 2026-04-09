import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { TrendingUp, TrendingDown } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string
  description?: string
  trend?: {
    value: string
    isPositive: boolean
  }
  icon?: React.ReactNode
}

export function MetricCard({
  title,
  value,
  description,
  trend,
  icon,
}: MetricCardProps) {
  return (
    <Card className="bg-surface-container-lowest border-0 shadow-ambient overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
            {title}
          </CardTitle>
          {icon && <div className="text-primary-fixed-dim">{icon}</div>}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <p className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
            {value}
          </p>
          {description && (
            <p className="text-xs text-on-surface-variant">{description}</p>
          )}
        </div>
        {trend && (
          <div className="flex items-center gap-2 pt-1">
            {trend.isPositive ? (
              <>
                <div className="rounded-full bg-secondary-container p-1">
                  <TrendingUp className="h-3 w-3 text-secondary" />
                </div>
                <span className="text-xs font-medium text-secondary">
                  {trend.value}
                </span>
              </>
            ) : (
              <>
                <div className="rounded-full bg-tertiary-container p-1">
                  <TrendingDown className="h-3 w-3 text-tertiary" />
                </div>
                <span className="text-xs font-medium text-tertiary">
                  {trend.value}
                </span>
              </>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
