// app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import StatsMarquee from "@/components/StatsMarquee";
import SchemesSection from "@/components/SchemesSection";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { PartnerBanks } from "@/components/PartnerBanks";
// import { useRouter } from "next/navigaton";

export default function Home() {
  // const router = useRouter();
  // const navigate = () => {
  //   router.push("/");
  // };
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Marquee */}
        <StatsMarquee />

        {/* Schemes Search & Categories */}
        <SchemesSection />

        {/* Government Process Section */}
        <ProcessSection />
        <PartnerBanks />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Partner Logos Section */}
      </main>
      <Footer />
    </div>
  );
}
