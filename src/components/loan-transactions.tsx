"use client";

import { Card } from "./ui/card";
import { Building2, ArrowUpRight, Download } from "lucide-react";
import { Button } from "./ui/button";

export function LoanTransactions() {
  const transactions = [
    {
      id: 1,
      type: "Apartment Loan",
      amount: "-100.09",
      date: "Mar 1, 2025",
      icon: Building2,
      description: "Monthly payment"
    },
    {
      id: 2,
      type: "Business Loan",
      amount: "-100.09",
      date: "Mar 2, 2025",
      icon: Building2,
      description: "Monthly payment"
    },
    {
      id: 3,
      type: "Top Up Balance",
      amount: "2,024.30",
      date: "April 20, 2025",
      icon: ArrowUpRight,
      description: "Via mobile banking"
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <Button variant="ghost" size="sm" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between group hover:bg-muted/50 p-2 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full">
                <transaction.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{transaction.type}</p>
                <p className="text-sm text-muted-foreground">{transaction.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={transaction.amount.startsWith("+") ? "text-green-600 dark:text-green-400 font-medium" : "font-medium"}>
                {transaction.amount}
              </p>
              <time className="text-sm text-muted-foreground">{transaction.date}</time>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}