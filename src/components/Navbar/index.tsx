"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoans, setShowLoans] = useState(false)

  const loans = ["Personal Loan", "Business Loan", "Home Loan", "Education Loan",
    "2-Wheeler Loan","Car Loan"
  ]

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className=" w-auto" src="/assets/logos/INFILEND.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium">
              Home
            </Link>

            {/* Loans Dropdown */}
            <div className="relative">
              <button
                className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium inline-flex items-center"
                onMouseEnter={() => setShowLoans(true)}
                onMouseLeave={() => setShowLoans(false)}
              >
                Loans
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {showLoans && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1"
                  onMouseEnter={() => setShowLoans(true)}
                  onMouseLeave={() => setShowLoans(false)}
                >
                  {loans.map((loan) => (
                    <a
                      key={loan}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-800"
                    >
                      {loan}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <Link href="/faqs" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium">
              FAQs
            </Link>
            <Link href="/grievances" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium">
              Grievances
            </Link>
            <Link
              href="/partner-onboarding"
              className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium"
            >
              Partner Onboarding
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-indigo-800 border-2 border-indigo-800 px-6 py-1.5 rounded text-sm font-medium hover:bg-indigo-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-indigo-800 text-white px-6 py-2 rounded text-sm font-medium hover:bg-indigo-700"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            title="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
            >
              Home
            </Link>
            <button
              className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
              onClick={() => setShowLoans(!showLoans)}
            >
              Loans
            </button>
            {showLoans && (
              <div className="pl-6 space-y-1">
                {loans.map((loan) => (
                  <a
                    key={loan}
                    href="#"
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
                  >
                    {loan}
                  </a>
                ))}
              </div>
            )}
            <Link
              href="/faqs"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
            >
              FAQs
            </Link>
            <Link
              href="/grievances"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
            >
              Grievances
            </Link>
            <Link
              href="/partner-onboarding"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-indigo-50 rounded-md"
            >
              Partner Onboarding
            </Link>
            <div className="mt-4 space-y-2 px-3">
              <Link
                href="/login"
                className="block text-center text-indigo-800 border-2 border-indigo-800 px-4 py-2 rounded text-base font-medium hover:bg-indigo-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block text-center bg-indigo-800 text-white px-4 py-2 rounded text-base font-medium hover:bg-indigo-700"
              >
                Register
              </Link>
              <label htmlFor="language-select" className="sr-only">
              Language
            </label>
            <select
              id="language-select"
              className="bg-transparent text-gray-700 text-sm focus:outline-none"
            >
              <option>English</option>
              <option>हिन्दी</option>
            </select>

            </div>
          </div>
        </div>
      )}
    </nav>
  )
}