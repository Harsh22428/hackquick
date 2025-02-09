"use client";

import React, { useState } from "react";
import { Calculator, IndianRupee, BadgeCheck, BadgeX } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Button} from "@/components/ui/button";
import router from "next/router";
import Link from "next/link";

interface EligibilityFormData {
  monthlyIncome: number;
  creditScore: number;
  employmentYears: number;
  existingLoans: number;
  loanAmount: number;
}

export default function Home() {
  const [formData, setFormData] = useState<EligibilityFormData>({
    monthlyIncome: 0,
    creditScore: 0,
    employmentYears: 0,
    existingLoans: 0,
    loanAmount: 0,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof EligibilityFormData, string>>
  >({});
  const [result, setResult] = useState<{
    isEligible: boolean;
    message: string;
    maxAmount?: number;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value) || 0;

    setFormData((prev) => ({ ...prev, [name]: numValue }));

    // Clear error when user starts typing
    if (errors[name as keyof EligibilityFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof EligibilityFormData, string>> = {};

    if (formData.monthlyIncome <= 0)
      newErrors.monthlyIncome = "Monthly income must be greater than 0";
    if (formData.creditScore <= 0)
      newErrors.creditScore = "Credit score must be greater than 0";
    if (formData.employmentYears <= 0)
      newErrors.employmentYears = "Years of employment must be greater than 0";
    if (formData.loanAmount <= 0)
      newErrors.loanAmount = "Loan amount must be greater than 0";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEligibility = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const debtToIncomeRatio =
      (formData.existingLoans / formData.monthlyIncome) * 100;
    const isEligible =
      formData.creditScore >= 700 &&
      formData.monthlyIncome >= 25000 &&
      formData.employmentYears >= 2 &&
      debtToIncomeRatio < 50;

    const maxLoanAmount = formData.monthlyIncome * 36; // 3 years of income as max loan

    setResult(
      isEligible
        ? {
            isEligible: true,
            message: "Congratulations! You are eligible for a personal loan.",
            maxAmount: maxLoanAmount,
          }
        : {
            isEligible: false,
            message:
              "We're sorry, but you don't meet the eligibility criteria at this time.",
          }
    );
  };

  const formatIndianCurrency = (amount: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-10 my-10">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-8 h-8 text-indigo-600" />
                <h1 className="text-3xl font-bold text-gray-800">
                  Personal Loan Eligibility Checker
                </h1>
              </div>

              <form onSubmit={calculateEligibility} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Monthly Income (₹)",
                      name: "monthlyIncome",
                      placeholder: "e.g., 50000",
                    },
                    {
                      label: "Credit Score (CIBIL)",
                      name: "creditScore",
                      placeholder: "e.g., 750",
                      min: "300",
                      max: "900",
                    },
                    {
                      label: "Years of Employment",
                      name: "employmentYears",
                      placeholder: "e.g., 3",
                    },
                    {
                      label: "Existing Monthly EMIs (₹)",
                      name: "existingLoans",
                      placeholder: "e.g., 15000",
                    },
                    {
                      label: "Desired Loan Amount (₹)",
                      name: "loanAmount",
                      placeholder: "e.g., 500000",
                    },
                  ].map(({ label, name, placeholder }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {label}
                      </label>
                      <input
                        type="text"
                        inputMode="numeric"
                        pattern="[0-9]*"
                        name={name}
                        value={
                          formData[name as keyof EligibilityFormData] || ""
                        }
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        className="block w-full rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                      {errors[name as keyof EligibilityFormData] && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors[name as keyof EligibilityFormData]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium text-lg"
                >
                  Check Eligibility
                </button>
              </form>

              {result && (
                <div
                  className={`mt-8 p-6 rounded-lg ${result.isEligible ? "bg-green-50" : "bg-red-50"}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    {result.isEligible ? (
                      <BadgeCheck className="w-6 h-6 text-green-600" />
                    ) : (
                      <BadgeX className="w-6 h-6 text-red-600" />
                    )}
                    <h3
                      className={`text-xl font-semibold ${result.isEligible ? "text-green-800" : "text-red-800"}`}
                    >
                      {result.isEligible ? "Eligible" : "Not Eligible"}
                    </h3>
                  </div>
                  <p
                    className={`text-lg ${result.isEligible ? "text-green-700" : "text-red-700"}`}
                  >
                    {result.message}

                  </p>
                  {result.maxAmount && (
                    <div>
                      
                    <p className="mt-2 text-green-700">
                      Maximum loan amount you may qualify for:{" "}
                      {formatIndianCurrency(result.maxAmount)}
                    </p>
                     <Link href={"/consent-form"}>
                    <Button className="mt-4 w-full bg-blue-500 hover:bg-blue-600"
                      onClick={(e) => router.push("/consent-form")}>Proceed</Button>
                      </Link>
                    </div>
                    
                  )}
                </div>
              )}

              <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">
                  Eligibility Criteria
                </h3>
                <ul className="list-disc list-inside space-y-2 text-blue-700">
                  <li>Minimum monthly income of ₹25,000</li>
                  <li>CIBIL score of 700 or higher</li>
                  <li>At least 2 years of employment history</li>
                  <li>EMI to income ratio less than 50%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
    </>
  );
}
