"use client";

import { Bell, Settings } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./mode-toggle";

export function NavBar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="flex items-center space-x-4">
          {/* <Image src="/logo.svg" alt="Loan Planner" width={32} height={32} /> */}
          <span className="text-xl font-semibold">InfiLend</span>
        </div>
        
        <div className="flex items-center space-x-6 ml-6">
          <Button variant="ghost" className="text-sm font-medium">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Offer
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Loan Transaction
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            Analytics
          </Button>
          <Button variant="ghost" className="text-sm font-medium">
            News
          </Button>
        </div>

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
    </nav>
  );
}