"use client";

import { Filter, IndianRupee, Star, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const banks = [
  { name: "HDFC", selected: true },
  { name: "Bajaj Finance", selected: false },
  { name: "Chola", selected: false },
  { name: "MyShubhLife", selected: false },
  { name: "Tata Capital", selected: false },
  { name: "Fullerton", selected: false },
  { name: "Home Credit", selected: false },
  { name: "Kotak Mahindra", selected: false },
  { name: "Ujjivan Small Finance Bank Ltd", selected: false },
  { name: "InCred", selected: false },
  { name: "Edelweiss Salaried Personal Loan", selected: false },
  { name: "Standard Chartered Bank", selected: false },
  { name: "YES BANK", selected: false },
  { name: "HDB FINANCIAL SERVICES", selected: false },
  { name: "Aditya Birla Finance Limited", selected: false },
];

const loans = [
  {
    title: "HDFC Bank Personal Loan",
    amount: "Up to ₹40L",
    interest: "10.85% - 21.00%",
    tenure: "1 - 5 Years",
    processingFee: "₹ 4,999",
    tag: "Instant Loans Up To Rs. 40 Lakhs",
  },
  {
    title: "Tata Capital Personal Loan",
    amount: "Up to ₹50L",
    interest: "10.49%",
    tenure: "5 Years",
    processingFee: "Up to 3.00%",
    tag: "Loans Upto Rs. 5 Lakhs",
  },
  {
    title: "Yes Bank Personal Loan",
    amount: "₹1L -₹3L",
    interest: "10.25% - 34.05%",
    tenure: "Up to 3 Years",
    processingFee: "3.00%",
    tag: "Instant Disbursal",
  },
];

const FilterSection = ({ selectedBanks, toggleBank }: { 
  selectedBanks: Set<string>;
  toggleBank: (name: string) => void;
}) => (
  <div className="space-y-4">
    <div className="flex items-center gap-2 mb-6">
      <Filter className="w-5 h-5 text-gray-500" />
      <h2 className="text-lg font-semibold text-gray-900">Filter</h2>
    </div>

    <div className="space-y-4">
      <h3 className="text-gray-700 font-medium mb-2">Bank</h3>
      <div className="space-y-2">
        {banks.map((bank) => (
          <button
            key={bank.name}
            onClick={() => toggleBank(bank.name)}
            className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
              selectedBanks.has(bank.name)
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            {bank.name}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [selectedBanks, setSelectedBanks] = useState(
    new Set(banks.filter(bank => bank.selected).map(bank => bank.name))
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleBank = (bankName: string) => {
    const newSelected = new Set(selectedBanks);
    if (newSelected.has(bankName)) {
      newSelected.delete(bankName);
    } else {
      newSelected.add(bankName);
    }
    setSelectedBanks(newSelected);
  };
 const router = useRouter();
  const handleLogin = () => {
    router.push("/personal-loan/apply"); 
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">We found 17 Personal Loans</h1>
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= 4 ? "text-yellow-400" : "text-gray-300"} fill-current`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.0/5.0 from 97112 users</span>
            </div>
          </div>
          
          {/* Mobile Filter Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="lg:hidden"
                onClick={() => setIsOpen(true)}
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <div className="h-full overflow-y-auto py-6">
                <FilterSection selectedBanks={selectedBanks} toggleBank={toggleBank} />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filter Section */}
          <div className="hidden lg:block bg-white rounded-lg shadow-sm p-6 h-fit sticky top-4">
            <FilterSection selectedBanks={selectedBanks} toggleBank={toggleBank} />
          </div>

          {/* Loans List */}
          <div className="lg:col-span-3 space-y-6">
            {loans.map((loan) => (
              <Card key={loan.title} className="p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-emerald-500 text-white">{loan.tag}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-700">
                    100% Paperless Approval
                  </Badge>
                </div>

                <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <IndianRupee className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{loan.title}</h3>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                        <div>
                          <p className="text-sm text-gray-500">Loan Amount:</p>
                          <p className="font-medium text-gray-900">{loan.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Fixed:</p>
                          <p className="font-medium text-gray-900">{loan.interest}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Tenure:</p>
                          <p className="font-medium text-gray-900">{loan.tenure}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Processing Fee:</p>
                          <p className="font-medium text-gray-900">{loan.processingFee}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-col gap-2 w-full sm:w-auto">
                    <Button className="w-full sm:w-40 bg-emerald-500 hover:bg-emerald-600"
                    onClick={handleLogin}>
                      Apply Now
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full sm:w-40 text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                    >
                      Explore
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}