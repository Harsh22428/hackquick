"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from "react";

interface onboarding {
  question: string;
  answer: string;
}

const faqs: onboarding[] = [
  {
    question: "What is JanSamarth Portal?",
    answer:
      "JanSamarth Portal is a one-stop digital platform for credit-linked government schemes.",
  },
  {
    question: "How can I apply for the Scheme?",
    answer:
      "You can apply by visiting the official JanSamarth portal and selecting the desired scheme.",
  },
  {
    question: "What are the documents requirement?",
    answer:
      "Documents required include ID proof, income proof, and relevant certificates based on the loan type.",
  },
  {
    question: "Can anyone apply for the loan?",
    answer:
      "Yes, anyone who meets the eligibility criteria can apply for the loan.",
  },
  {
    question: "How can I see my application?",
    answer:
      "Sign in with your credentials and go to the 'My Applications' tab to check your status.",
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
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left font-medium text-gray-900 hover:bg-gray-100"
              >
                <span className="text-lg">
                  {index + 1}. {faq.question}
                </span>
                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 text-gray-700 text-sm">{faq.answer}</div>
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
