// components/Navbar/index.tsx
"use client";
import { useState } from "react";
// import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50 h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 ">
            <img
              className=" w-auto"
              src="/assets/logos/INFILEND.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Schemes", "About", "Resources", "Help"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90">
              Login/Signup
            </button>
            <span className="text-gray-500">|</span>
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

          {/* Mobile Menu Button */}
          <button
            title="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* <MobileMenu isOpen={isOpen} /> */}
    </nav>
  );
}
