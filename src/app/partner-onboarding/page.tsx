"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

interface onboarding {
  question: string;
  answer: React.ReactNode;
}

const partnerOnboarding: onboarding[] = [
  {
    question: "NBFC(Non-bnaking finicial corporation)",
    answer: (
      <div className="flex flex-wrap gap-2">
        <a href="https://www.icicibank.com/" className="text-blue-500">ICICI BANK</a><br />
        
      </div>
    )
  },
  {
    question: "DLA(Digital Lending Application)",
    answer:(
      <div>
        <a href="https://www.eoiloans.com/" className="text-blue-500">EOI LOANS</a><br />
      </div>
    )

      
  },
 
];

const Partner = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      
      <div className="bg-gray-50 pb-20">
        <div className=" p-20 m-4 flex justify-center text-4xl font-bold">
          Our Partners
        </div>
        <div className="max-w-3xl mx-auto">
          {partnerOnboarding.map((partner, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-100"
              >
                <span className="text-lg">
                  {index + 1}. {partner.question}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 text-sm">{partner.answer}</div>
              )}
            </div>
          ))}
        </div>
        <div></div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
