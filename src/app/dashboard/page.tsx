
import Navbar from "@/components/userNavbar";
import { LoanStats } from "@/components/loan-stats";
import { LoanWallet } from "@/components/loan-wallet";
import { LoanTransactions } from "@/components/loan-transactions";
import { LoanOfferings } from "@/components/loan-offerings";
import { MobileAppPromo } from "@/components/mobile-app-promo";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto p-4 md:p-8 space-y-8">
        <header className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Hey Parth! Welcome to dashboard</h1>
          <p className="text-muted-foreground">
            Your next payment of <span className="font-medium text-primary">1000</span> is scheduled for{" "}
            <time dateTime="2023-09-30" className="text-primary">Mar 30, 2025</time>
          </p>
        </header>

        <div className="grid gap-6">
          <LoanStats />
          
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              <LoanWallet />
              <LoanOfferings />
            </div>
            <div className="space-y-6">
              <LoanTransactions />
              <MobileAppPromo />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}