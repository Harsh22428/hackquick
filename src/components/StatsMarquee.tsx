"use client";
import { useEffect, useRef } from "react";

const StatsMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      marquee.innerHTML += marquee.innerHTML; // Duplicate content for infinite scrolling effect
    }
  }, []);

  return (
    <div className="bg-[#FAEED6] py-2 flex items-center overflow-hidden relative">
      {/* Left Side Announcement Label */}
      <div className="bg-[#E19245] px-4 py-2 text-white font-bold text-sm flex items-center">
        Announcements
      </div>

      {/* Marquee Wrapper */}
      <div className="w-full overflow-hidden whitespace-nowrap relative">
        <div
          ref={marqueeRef}
          className="flex space-x-8 animate-marquee text-sm text-[#3C3C3B] px-4"
        >
          <span>
            🔹 Over 15 central government schemes, spread across 7 loan
            categories.
          </span>
          <span>
            🔹 First of its kind online platform directly connecting lenders
            with beneficiaries.
          </span>
          <span>
            🔹 Easy access to financial support for individuals and businesses.
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsMarquee;
