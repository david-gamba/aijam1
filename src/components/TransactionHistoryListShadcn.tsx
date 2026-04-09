import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import {
  ArrowUpRight,
  ArrowDownLeft,
} from "lucide-react"

export interface Transaction {
  id: string
  title: string
  subtitle: string
  amount: number
  isIncome: boolean
  status: "cleared" | "pending"
  date: string
  icon?: React.ReactNode
}

interface TransactionHistoryListProps {
  transactions: Transaction[]
  title?: string
  description?: string
  maxItems?: number
}

export function TransactionHistoryList({
  transactions,
  title = "Flow History",
  description,
  maxItems = 5,
}: TransactionHistoryListProps) {
  const displayedTransactions = transactions.slice(0, maxItems)

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
        <div className="space-y-3">
          {displayedTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-lg bg-surface-container-low p-3 transition-colors hover:bg-surface-container"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`rounded-full p-2 ${
                    transaction.isIncome
                      ? "bg-secondary-container"
                      : "bg-tertiary-container"
                  }`}
                >
                  {transaction.isIncome ? (
                    <ArrowUpRight className="h-4 w-4 text-secondary" />
                  ) : (
                    <ArrowDownLeft className="h-4 w-4 text-tertiary" />
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-sm font-medium text-on-surface">
                    {transaction.title}
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    {transaction.subtitle}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span
                  className={`text-sm font-semibold ${
                    transaction.isIncome
                      ? "text-secondary"
                      : "text-tertiary"
                  }`}
                >
                  {transaction.isIncome ? "+" : "-"}$
                  {Math.abs(transaction.amount).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <Badge
                  variant={
                    transaction.status === "cleared" ? "secondary" : "outline"
                  }
                  className="text-xs"
                >
                  {transaction.status.charAt(0).toUpperCase() +
                    transaction.status.slice(1)}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
