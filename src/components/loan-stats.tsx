"use client";

import { Card } from "./ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CreditCard, DollarSign, PiggyBank } from "lucide-react";

const data = [
  { time: "2am", value: 3.2 },
  { time: "4am", value: 3.4 },
  { time: "6am", value: 3.3 },
  { time: "8am", value: 3.5 },
  { time: "10am", value: 3.6 },
  { time: "12pm", value: 3.4 },
  { time: "2pm", value: 3.3 },
];

const chartProps = {
  xAxis: {
    dataKey: "time",
    stroke: "hsl(var(--muted-foreground))",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    padding: { left: 10, right: 10 }
  },
  yAxis: {
    stroke: "hsl(var(--muted-foreground))",
    fontSize: 12,
    tickLine: false,
    axisLine: false,
    padding: { top: 10, bottom: 10 }
  },
  tooltip: {
    contentStyle: {
      backgroundColor: "hsl(var(--background))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "var(--radius)",
      padding: "8px 12px"
    }
  },
  line: {
    type: "monotone",
    dataKey: "value",
    stroke: "hsl(var(--primary))",
    strokeWidth: 2,
    dot: { fill: "hsl(var(--primary))" }
  }
};

export function LoanStats() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <DollarSign className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">All Loan Amount</p>
            <h2 className="text-3xl font-bold tracking-tight">40,560</h2>
          </div>
        </div>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <CreditCard className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Monthly Payment</p>
            <h2 className="text-3xl font-bold tracking-tight">1000</h2>
          </div>
        </div>
      </Card>
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <PiggyBank className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Loans</p>
            <h2 className="text-3xl font-bold tracking-tight">2 Loans</h2>
          </div>
        </div>
      </Card>
      <Card className="col-span-full p-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold"> 10 Years Treasury Analytics</h3>
            <time className="text-sm text-muted-foreground">Sept 13 - 14, 2023</time>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                <XAxis {...chartProps.xAxis} />
                <YAxis {...chartProps.yAxis} />
                <Tooltip {...chartProps.tooltip} />
                <Line {...chartProps.line} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </div>
  );
}