// components/Navbar/index.tsx
"use client";

import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";
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
          <div className="hidden md:flex space-x-8 ">
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

          {/* Mobile Menu Button */}
          
          
      <div className="ml-auto flex items-center space-x-4">
          <Button variant="secondary" className="rounded-full bg-white">
            Apply New Loans
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        </div>
      </div>


      {/* <MobileMenu isOpen={isOpen} /> */}
    </nav>
  );
}
