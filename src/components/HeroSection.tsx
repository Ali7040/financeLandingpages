"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Image from "next/image";

const cards = [
  {
    flag: "de",
    rating: "BBB",
    name: "Live120",
    interest: 14.8,
    period: "14 month",
    funded: "9.48%",
    country: "Germany",
  },
  {
    flag: "fr",
    rating: "A",
    name: "LiveFrance",
    interest: 12.3,
    period: "10 month",
    funded: "7.12%",
    country: "France",
  },
  {
    flag: "ch",
    rating: "AA",
    name: "LiveSwiss",
    interest: 15.2,
    period: "16 month",
    funded: "10.34%",
    country: "Switzerland",
  },
];

const Flag = ({ code }: { code: string }) => {
  switch (code) {
    case "de":
      return (
        <span className="inline-block align-middle mr-2">
          <img src="https://flagcdn.com/de.svg" alt="Germany" className="h-5 w-7 rounded-sm" />
        </span>
      );
    case "fr":
      return (
        <span className="inline-block align-middle mr-2">
          <img src="https://flagcdn.com/fr.svg" alt="France" className="h-5 w-7 rounded-sm" />
        </span>
      );
    case "ch":
      return (
        <span className="inline-block align-middle mr-2">
          <img src="https://flagcdn.com/ch.svg" alt="Switzerland" className="h-5 w-7 rounded-sm" />
        </span>
      );
    default:
      return null;
  }
};

export default function HeroSection() {
  const { useRouter } = require('next/navigation');
  const router = useRouter();
  const TrustpilotLogo = ({ className }: { className?: string }) => (
    <span className={`inline-flex items-center ${className ?? ""}`}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-auto mr-2" fill="#22c55e" aria-hidden>
        <path d="M12 2l2.9 5.88L21 9.24l-4.5 4.38L17.8 21 12 17.77 6.2 21l1.3-7.38L3 9.24l6.1-.36L12 2z" />
      </svg>
      <span className="text-white/90 text-sm font-medium">Trustpilot</span>
    </span>
  );

  const [cardIdx, setCardIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIdx((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handler for smooth scroll to #stats section
  const handleScrollDown = () => {
    const statsSection = document.getElementById("stats");
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      <section
        className="relative w-full max-w-[1700px] mx-[5px] box-border flex flex-col md:flex-row items-center justify-center bg-gray-100 overflow-visible rounded-3xl"
      >
        {/* Background image & overlay */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <Image
            src="/bg.png"
            alt="Hero background"
            fill
            sizes="100vw"
            className="object-cover object-center rounded-3xl"
            priority
          />
          <div className="absolute inset-0 bg-black/40 rounded-3xl" />
        </div>
        {/* Responsive content */}
        <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-center md:items-center justify-between px-2 sm:px-4 md:px-14 py-6 sm:py-10 md:py-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-white text-2xl sm:text-4xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6 break-words"
            >
              Swiss-regulated<br className="hidden md:block" /> investment platform
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
              className="text-white/90 text-sm sm:text-lg md:text-xl mb-4 sm:mb-6"
            >
              Earn up to 16.5% + Referral 3% and Loyalty 3% returns investing directly in EU businesses
            </motion.p>
            <div className="flex items-center mb-4 sm:mb-6 gap-2 sm:gap-3 flex-wrap">
              <span className="text-white/80 text-sm sm:text-base font-medium">
                Excellent 4.4 out of 5
              </span>
              <TrustpilotLogo className="mx-1" />
            </div>
            <AnimatedButton
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-4 rounded-2xl mt-1"
              onClick={() => router.push('/login')}
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" />
              </svg>
              Invest Now
            </AnimatedButton>
          </div>
          {/* Right: Card */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-0">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cardIdx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  whileHover={{ rotateY: 8, scale: 1.04 }}
                  transition={{ duration: 0.5 }}
                  style={{ perspective: 600 }}
                  className="w-full max-w-[320px] sm:w-64 md:w-80 bg-gray-700/90 rounded-2xl shadow-lg p-3 sm:p-6 text-white cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Flag code={cards[cardIdx].flag} />
                    <span className="bg-blue-300 text-gray-900 font-bold px-2 sm:px-3 py-1 rounded-lg text-xs">{cards[cardIdx].rating}</span>
                  </div>
                  <div className="text-lg sm:text-xl font-semibold mb-2">{cards[cardIdx].name}</div>
                  <div className="flex items-end mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-4xl font-extrabold">{cards[cardIdx].interest}</span>
                    <span className="ml-2 text-base">%</span>
                    <span className="ml-2 text-base text-white/70">Interest rate</span>
                  </div>
                  <div className="w-full h-2 bg-gray-500 rounded mb-2 sm:mb-3">
                    <div className="h-2 bg-blue-300 rounded" style={{ width: cards[cardIdx].funded }}></div>
                  </div>
                  <div className="flex items-center justify-between text-xs sm:text-sm text-white/90">
                    <div>
                      Loan period<br />
                      <span className="font-semibold">{cards[cardIdx].period}</span>
                    </div>
                    <div>
                      Funded<br />
                      <span className="font-semibold">{cards[cardIdx].funded}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        {/* Down arrow */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 flex items-center justify-center cursor-pointer"
          aria-label="Scroll down"
          onClick={handleScrollDown}
        >
          <svg className="w-8 h-8 text-blue-500 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </section>
    </div>
  );
}