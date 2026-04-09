import { Card, CardContent, CardHeader } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowUpRight } from "lucide-react"

interface PortfolioHeaderProps {
  totalAssets: string
  userName?: string
  userTier?: string
  onAddTransaction?: () => void
}

export function PortfolioHeader({
  totalAssets,
  userName = "User",
  userTier = "Premium Tier",
  onAddTransaction,
}: PortfolioHeaderProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary-container/20 via-surface-container-lowest to-surface-container-low shadow-ambient">
      {/* Decorative gradient blur */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-primary-container/30 to-transparent blur-3xl" />
      
      <CardHeader className="relative space-y-6 pb-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Portfolio Velocity</p>
            <h1 className="text-5xl md:text-6xl font-bold text-on-background">
              {totalAssets}
            </h1>
            <p className="text-sm text-on-surface-variant">Real-time portfolio valuation</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-medium text-primary-fixed-dim">{userTier}</p>
            <p className="text-sm text-on-surface-variant mt-1">{userName}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative pt-0">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs text-on-surface-variant">Total Assets (USD)</p>
          </div>
          {onAddTransaction && (
            <Button 
              size="default" 
              className="gap-2 bg-gradient-to-r from-primary to-primary-container hover:from-primary-dim hover:to-primary shadow-ambient text-on-primary"
            >
              <ArrowUpRight className="h-4 w-4" />
              New Transaction
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
