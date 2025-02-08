"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLoans, setShowLoans] = useState(false)

  const loans = ["Personal Loan", "Business Loan", "Home Loan", "Education Loan",
    "2-Wheeler Loan","Car Loan"
  ]

  // Increased delay time for better usability
  const closeLoansMenu = useCallback(() => {
    const timeout = setTimeout(() => {
      setShowLoans(false)
    }, 300) // Increased delay to 300ms

    return () => clearTimeout(timeout)
  }, [])

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img className="w-auto" src="/assets/logos/INFILEND.png" alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium rounded-md relative after:absolute after:inset-0 after:bg-gray-100 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:-z-10">
              Home
            </Link>

            {/* Loans Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowLoans(true)}
              onMouseLeave={closeLoansMenu}
            >
              <button
                className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium inline-flex items-center rounded-md relative after:absolute after:inset-0 after:bg-gray-100 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:-z-10"
              >
                Loans
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Extended hover area */}
              <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 w-64 bg-white rounded-md shadow-lg py-1 transition-all duration-300 ease-in-out ${
                  showLoans 
                    ? 'opacity-100 visible translate-y-2' 
                    : 'opacity-0 invisible translate-y-0'
                }`}
                style={{ 
                  transformOrigin: 'top',
                  marginTop: '0.5rem'
                }}
              >
                {loans.map((loan, index) => (
                  <Link
                    key={loan}
                    href={`/loans/${loan.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-indigo-800 transition-colors duration-200"
                  >
                    {loan}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/faqs" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium rounded-md relative after:absolute after:inset-0 after:bg-gray-100 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:-z-10">
              FAQs
            </Link>
            <Link href="/grievances" className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium rounded-md relative after:absolute after:inset-0 after:bg-gray-100 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:-z-10">
              Grievances
            </Link>
            <Link
              href="/partner-onboarding"
              className="text-gray-700 hover:text-indigo-800 px-3 py-2 text-sm font-medium rounded-md relative after:absolute after:inset-0 after:bg-gray-100 after:scale-0 hover:after:scale-100 after:transition-transform after:duration-300 after:-z-10"
            >
              Partner Onboarding
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-indigo-800 border-2 border-indigo-800 px-6 py-1.5 rounded text-sm font-medium transition-colors duration-200 hover:bg-indigo-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-indigo-800 text-white px-6 py-2 rounded text-sm font-medium transition-colors duration-200 hover:bg-indigo-700"
            >
              Register
            </Link>
            <label>
              <input
                type="checkbox"
                className="hidden"
                id="theme-toggle"
                onChange={(e) => {
                  if (e.target.checked) {
                    document.documentElement.classList.add("dark")
                  } else {
                    document.documentElement.classList.remove("dark")
                  }
                }}
              />
              <div className="bg-gray-300 dark:bg-gray-600 w-14 h-8 flex items-center rounded-full p-1 duration-300 ease-in-out cursor-pointer">
                <div className="bg-white dark:bg-gray-300 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out"></div>
              </div>
            </label>
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
      <div 
        className={`md:hidden bg-white border-t transform transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            Home
          </Link>
          <button
            className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
            onClick={() => setShowLoans(!showLoans)}
          >
            Loans
          </button>
          <div 
            className={`pl-6 space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${
              showLoans ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            {loans.map((loan) => (
              <Link
                key={loan}
                href={`/loans/${loan.toLowerCase().replace(/\s+/g, '-')}`}
                className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                {loan}
              </Link>
            ))}
          </div>
          <Link
            href="/faqs"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            FAQs
          </Link>
          <Link
            href="/grievances"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            Grievances
          </Link>
          <Link
            href="/partner-onboarding"
            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-800 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            Partner Onboarding
          </Link>
          <div className="mt-4 space-y-2 px-3">
            <Link
              href="/login"
              className="block text-center text-indigo-800 border-2 border-indigo-800 px-4 py-2 rounded text-base font-medium transition-colors duration-200 hover:bg-indigo-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block text-center bg-indigo-800 text-white px-4 py-2 rounded text-base font-medium transition-colors duration-200 hover:bg-indigo-700"
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
    </nav>
  )
}