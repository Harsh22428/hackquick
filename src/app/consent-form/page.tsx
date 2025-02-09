"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ConsentForm() {
  const [checkedItems, setCheckedItems] = useState({
    aadhar: false,
    pan: false,
    incomeProof: false,
    addressProof: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const allChecked = Object.values(checkedItems).every(Boolean);

  const handleCheck = (key: keyof typeof checkedItems) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <>
    <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-10">
      <Card className="w-full max-w-5xl shadow-lg rounded-2xl">
        <CardHeader className="text-center py-6 bg-blue-600 text-white rounded-t-2xl">
          <CardTitle className="text-3xl font-bold">Loan Consent Form</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          {!isSubmitted ? (
            <>
              <p className="text-lg text-gray-700 font-medium mb-6">
                Please review and agree to the following conditions before proceeding.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
                  <Checkbox
                    id="aadhar"
                    checked={checkedItems.aadhar}
                    onCheckedChange={() => handleCheck("aadhar")}
                    className="w-6 h-6"
                    />
                  <label htmlFor="aadhar" className="text-lg font-medium">
                    I provide consent to verify my Aadhar card.
                  </label>
                </div>
                <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
                  <Checkbox
                    id="pan"
                    checked={checkedItems.pan}
                    onCheckedChange={() => handleCheck("pan")}
                    className="w-6 h-6"
                    />
                  <label htmlFor="pan" className="text-lg font-medium">
                    I provide consent to verify my PAN card.
                  </label>
                </div>
                <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
                  <Checkbox
                    id="incomeProof"
                    checked={checkedItems.incomeProof}
                    onCheckedChange={() => handleCheck("incomeProof")}
                    className="w-6 h-6"
                    />
                  <label htmlFor="incomeProof" className="text-lg font-medium">
                    I provide my Income Proof for eligibility check.
                  </label>
                </div>
                <div className="flex items-center space-x-4 p-4 border rounded-lg bg-white shadow-sm">
                  <Checkbox
                    id="addressProof"
                    checked={checkedItems.addressProof}
                    onCheckedChange={() => handleCheck("addressProof")}
                    className="w-6 h-6"
                    />
                  <label htmlFor="addressProof" className="text-lg font-medium">
                    I provide my Address Proof for verification.
                  </label>
                </div>
              </div>

              <Button
                className="mt-8 w-full py-3 text-lg bg-green-600 hover:bg-green-700"
                disabled={!allChecked}
                onClick={handleSubmit}
                >
                Proceed
              </Button>
            </>
          ) : (
              <motion.div
              className="text-center py-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              >
              <h2 className="text-3xl font-bold text-green-600">
                🎉 Loan Disbursed Successfully!
              </h2>
              <p className="text-lg text-gray-700 mt-4">
                Your loan amount has been successfully disbursed. Check your bank account for details.
              </p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
    <Footer/>
 </>
  );
}
