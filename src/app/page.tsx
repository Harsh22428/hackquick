// app/page.tsx
"use client";
import Navbar from "@/components/Navbar";
import StatsMarquee from "@/components/StatsMarquee";
import SchemesSection from "@/components/SchemesSection";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
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

        {/* Testimonials Section */}
        <Testimonials />

        {/* Partner Logos Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-gray-500 text-sm font-semibold mb-8">
              Trusted by Government Organizations
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={`/assets/logos/gov-logo-${i + 1}.svg`}
                  alt="Partner"
                  className="h-12 w-auto mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
