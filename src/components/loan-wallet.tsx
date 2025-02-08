"use client";

import { CreditCard, ArrowUpRight, ArrowDownRight, Plus } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export function LoanWallet() {
  return (
    <Card className="overflow-hidden">
      <div className="p-6 space-y-6 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Loan Wallet</h3>
          <CreditCard className="h-6 w-6 text-primary" />
        </div>
        
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Current balance</p>
          <h2 className="text-4xl font-bold tracking-tight">4,259.32</h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto hover:bg-primary/5"
            aria-label="Make loan payment"
          >
            <ArrowUpRight className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm">Payment</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto hover:bg-primary/5"
            aria-label="Top up wallet"
          >
            <Plus className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm">Top Up</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-4 h-auto hover:bg-primary/5"
            aria-label="Withdraw funds"
          >
            <ArrowDownRight className="h-5 w-5 mb-2 text-primary" />
            <span className="text-sm">Withdraw</span>
          </Button>
        </div>
      </div>
    </Card>
  );
}