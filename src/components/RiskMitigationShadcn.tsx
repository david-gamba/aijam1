import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Shield, CheckCircle } from "lucide-react"

interface RiskMitigationProps {
  title?: string
  description?: string
  status?: "active" | "inactive"
  encryptionMethod?: string
  lastSync?: string
}

export function RiskMitigation({
  title = "Secure your legacy with AI-driven risk mitigation",
  description,
  status = "active",
  encryptionMethod = "AES-256",
  lastSync = "14:02 GMT",
}: RiskMitigationProps) {
  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-primary/10 via-surface-container-lowest to-surface-variant/30 shadow-ambient">
      {/* Decorative gradient */}
      <div className="absolute -left-40 -bottom-40 h-80 w-80 rounded-full bg-gradient-to-tr from-primary-container/40 to-transparent blur-3xl" />
      
      <CardHeader className="relative space-y-4">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary-container/30 p-3">
            <Shield className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 space-y-1">
            <CardTitle className="text-xl font-semibold leading-tight">
              {title}
            </CardTitle>
            {description && (
              <CardDescription className="text-sm">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-6">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          Our new predictive engine analyzes global market volatility in
          real-time to protect your primary assets against tail-risk events.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="bg-gradient-to-r from-primary to-primary-container hover:from-primary-dim hover:to-primary-dim text-on-primary shadow-ambient">
            Deploy Guardrail
          </Button>
          <Button variant="outline" className="border-outline-variant">
            Learn More
          </Button>
        </div>

        <div className="space-y-3 border-t border-outline-variant/30 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-on-surface-variant">Status</span>
            <Badge
              variant={status === "active" ? "secondary" : "outline"}
              className="gap-1 text-xs font-semibold"
            >
              <CheckCircle className="h-3 w-3" />
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-on-surface-variant">Encryption</span>
            <span className="text-xs font-semibold text-on-surface">{encryptionMethod}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-on-surface-variant">Last Sync</span>
            <span className="text-xs font-semibold text-on-surface">{lastSync}</span>
          </div>
        </div>

        <p className="text-xs text-on-surface-variant italic">
          Verdant Financial is a registered advisory entity. Data shown is
          subject to market fluctuations.
        </p>
      </CardContent>
    </Card>
  )
}
