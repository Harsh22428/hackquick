"use client"

import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoanEligibilityForm() {
  const [projectCost, setProjectCost] = useState("")
  const [investmentAmount, setInvestmentAmount] = useState("")
  const [error, setError] = useState("")
  const [requiredLoan, setRequiredLoan] = useState(0)
  const [loanType, setLoanType] = useState("handloom")
  const [isWeaver, setIsWeaver] = useState("")
  const [businessType, setBusinessType] = useState("")
  const [constitution, setConstitution] = useState("")

  const handleProjectCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (Number(value) > 10000) {
      setError("Project cost cannot exceed ₹10,000")
    } else {
      setError("")
    }
    setProjectCost(value)
    calculateLoanAmount(value, investmentAmount)
  }

  const handleInvestmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInvestmentAmount(value)
    calculateLoanAmount(projectCost, value)
  }

  const calculateLoanAmount = (cost: string, investment: string) => {
    const loanAmount = Number(cost) - Number(investment)
    setRequiredLoan(loanAmount > 0 ? loanAmount : 0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (Number(projectCost) > 10000) {
      setError("Project cost cannot exceed ₹10,000")
      return
    }
    // Handle form submission
    console.log({
      projectCost,
      investmentAmount,
      requiredLoan,
      loanType,
      isWeaver,
      businessType,
      constitution,
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Let&apos;s check your eligibility</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <Label>Select a suitable option which help us to guide better scheme for you.</Label>
          <RadioGroup value={loanType} onValueChange={setLoanType} className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="handloom" id="handloom" />
              <Label htmlFor="handloom">Loan for Handloom Weaver</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="scavenger" id="scavenger" />
              <Label htmlFor="scavenger">Loan for Manual Scavenger</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="vendor" id="vendor" />
              <Label htmlFor="vendor">Loan for Street Vendors</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other">Other Business Loan</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>
            Are you identified as weaver under third census of handloom weavers conducted by MoT (Ministry of Textile)?
          </Label>
          <RadioGroup value={isWeaver} onValueChange={setIsWeaver} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-4">
          <Label>Select type of business activity.</Label>
          <RadioGroup value={businessType} onValueChange={setBusinessType} className="flex space-x-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="new" id="new" />
              <Label htmlFor="new">New</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="existing" id="existing" />
              <Label htmlFor="existing">Existing</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label>Select Constitution of Business</Label>
          <Select value={constitution} onValueChange={setConstitution}>
            <SelectTrigger>
              <SelectValue placeholder="Select constitution" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="proprietorship">Proprietorship</SelectItem>
              <SelectItem value="partnership">Partnership</SelectItem>
              <SelectItem value="private-limited">Private Limited</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="projectCost">Enter your project cost.</Label>
            <div className="relative">
              <Input
                id="projectCost"
                type="number"
                value={projectCost}
                onChange={handleProjectCostChange}
                className="pl-8"
                placeholder="0"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="investmentAmount">Enter the amount you plan to invest from your own source.</Label>
            <div className="relative">
              <Input
                id="investmentAmount"
                type="number"
                value={investmentAmount}
                onChange={handleInvestmentChange}
                className="pl-8"
                placeholder="0"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₹</span>
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="p-4 bg-gray-50 rounded-lg">
            <Label>Required Loan Amount: ₹{requiredLoan}</Label>
          </div>
        </div>

        <Button type="submit" className="w-full md:w-auto" disabled={!!error || !projectCost || !investmentAmount}>
          Calculate Eligibility
        </Button>
      </form>
    </div>
  )
}

