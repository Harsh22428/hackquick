"use client";
import { useState } from "react";
const loanOptions = [
  {
    lender: "HDFC Bank",
    loanAmount: "Up to ₹40L",
    interestRate: "10.85% - 21.00%",
    term: "1 - 5 Years",
    processingFee: "₹4,999",
  },
  {
    lender: "Tata Capital",
    loanAmount: "Up to ₹50L",
    interestRate: "10.49%",
    term: "5 Years",
    processingFee: "Up to 3.00%",
  },
  {
    lender: "Yes Bank",
    loanAmount: "₹1L - ₹3L",
    interestRate: "10.25% - 34.05%",
    term: "Up to 3 Years",
    processingFee: "3.00%",
  },
];

const banks = [
  "HDFC Bank",
  "IndusInd Bank",
  "Chola",
  "MyShubhLife",
  "Tata Capital",
  "Fullerton",
  "Home Credit",
  "Kotak Mahindra",
  "Ujjivan Small Finance Bank Ltd",
  "InCred",
  "Edelweiss Salaried Personal Loan",
];

export default function LoanComparisonPage() {
  const [selectedBank, setSelectedBank] = useState("HDFC Bank");

  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      {/* Sidebar Filter */}
      <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Filter</h2>
        <p className="text-gray-600 mb-2">Bank</p>
        <div className="flex flex-col gap-2">
          {banks.map((bank) => (
            <button
              key={bank}
              onClick={() => setSelectedBank(bank)}
              className={`px-4 py-2 text-left rounded-lg ${
                selectedBank === bank ? "bg-green-100 text-green-600 font-bold" : "hover:bg-gray-200"
              }`}
            >
              {bank}
            </button>
          ))}
        </div>
      </div>

      {/* Loan Cards */}
      <div className="w-3/4 ml-6">
        {loanOptions
          .filter((loan) => loan.lender.includes(selectedBank))
          .map((loan, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold">{loan.lender} Personal Loan</h3>
                  <p className="text-gray-600">Loan Amount: {loan.loanAmount}</p>
                  <p className="text-gray-600">Tenure: {loan.term}</p>
                  <p className="text-gray-600">Fixed: {loan.interestRate}</p>
                  <p className="text-gray-600">Processing Fee: {loan.processingFee}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg">Apply Now</button>
                  <button className="border border-green-600 text-green-600 px-4 py-2 rounded-lg">Explore</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
