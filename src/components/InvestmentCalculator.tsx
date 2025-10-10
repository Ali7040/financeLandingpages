"use client";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import AnimatedButton from "./ui/AnimatedButton";

// Helper for formatting EUR
const formatEUR = (num: number) => "€" + num.toLocaleString("en-US");

const LOYALTY_OPTIONS = [1.5, 2, 2.5, 3];

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState(1000);
  const [period, setPeriod] = useState(1);
  const [loyalty, setLoyalty] = useState(1.5);

  const isMobile = useMediaQuery({ maxWidth: 640 });
  const annualReturn = 15.6;
  const earnedReturn = Math.round(investment * (annualReturn / 100) * period * (loyalty / 1.5) * 0.2); // Just an illustration
  const futureValue = investment + earnedReturn;

  return (
  <section className="relative w-full flex items-center justify-center bg-black/0 overflow-hidden px-1 sm:px-4 md:px-8 py-2 sm:py-6 md:py-10 rounded-xl sm:rounded-2xl">
      {/* Background image full screen - only show on non-mobile */}
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/inv-bg.png"
            alt="Investment Background"
            fill
            className="object-cover object-center "
            priority
          />
          {/* Optional: Add a slight overlay for readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}
  <div className="relative z-10 w-full max-w-4xl mx-auto bg-white/95 rounded-lg sm:rounded-[32px] shadow-lg flex flex-col md:flex-row px-1 sm:px-4 md:px-8 py-2 sm:py-6 md:py-10 gap-1 sm:gap-4 md:gap-5">
        {/* Left: Inputs */}
  <div className="flex-1 flex flex-col gap-2 sm:gap-6 justify-between min-w-[100px] sm:min-w-[200px]">
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 text-sm sm:text-base md:text-[1.1rem] font-medium font-sans text-black gap-1">
              <span>Initial investment</span>
              <span className="font-bold">{formatEUR(investment)}</span>
            </div>
            <input
              type="range"
              min={100}
              max={10000}
              step={100}
              value={investment}
              onChange={e => setInvestment(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>

          {/* Investment period */}
          <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 text-sm sm:text-base md:text-[1.1rem] font-medium font-sans text-black gap-1">
              <span>Investment period (years)</span>
              <span className="font-bold">{period} year{period > 1 ? "s" : ""}</span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={period}
              onChange={e => setPeriod(Number(e.target.value))}
              className="w-full accent-green-500"
            />
          </div>

          {/* Loyalty bonus */}
          <div>
            <div className="mb-2 sm:mb-3 text-sm sm:text-base md:text-[1.1rem] font-medium font-sans text-black">Loyalty bonus</div>
            <div className="flex gap-1 sm:gap-3 bg-[#f6f6f6] rounded-2xl p-1 sm:p-2 flex-wrap">
              {LOYALTY_OPTIONS.map(b => (
                <button
                  key={b}
                  className={`px-2 sm:px-4 md:px-5 py-1 sm:py-2 rounded-2xl font-bold text-xs sm:text-base md:text-lg transition ${
                    loyalty === b ? "bg-white shadow text-black" : "text-gray-700"
                  }`}
                  onClick={() => setLoyalty(b)}
                >
                  {b}%
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Results */}
  <div className="flex-1 flex flex-col justify-between bg-white/90 rounded-md sm:rounded-[24px] px-1 sm:px-6 md:px-8 py-1 sm:py-6 md:py-10 shadow-md min-w-[100px] sm:min-w-[240px] md:min-w-[320px] mt-1 md:mt-0">
          {/* Future Value */}
          <div>
            <div className="text-xs sm:text-base md:text-[1.25rem] font-medium font-sans text-black mb-2 sm:mb-3">Future value in 5 years</div>
            <div className="flex items-center gap-1 sm:gap-3 mb-2 sm:mb-6">
              {/* Wallet icon */}
              <span className="inline-block">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect x="2" y="6" width="20" height="12" rx="4" fill="#34c759"/>
                  <circle cx="17" cy="12" r="2" fill="#fff"/>
                </svg>
              </span>
              <span className="text-base sm:text-[1.5rem] md:text-[2rem] font-bold text-green-600 font-sans">{formatEUR(futureValue)}</span>
            </div>
          </div>
          <AnimatedButton className="flex items-center justify-center bg-black text-white font-bold text-xs sm:text-base md:text-lg px-2 sm:px-5 md:px-6 py-1 sm:py-3 md:py-4 rounded-2xl shadow hover:bg-gray-900 transition mb-2 sm:mb-6 md:mb-8">
            <svg className="w-4 sm:w-6 h-4 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 8l6 4-6 4V8z" />
            </svg>
            Start Investing
          </AnimatedButton>
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 bg-[#f6f6f6] rounded-2xl px-1 sm:px-4 md:px-5 py-1 sm:py-3 md:py-4 font-sans text-xs sm:text-[1rem] md:text-[1.1rem] gap-1 sm:gap-0">
            <div className="text-center sm:text-left">
              <div>Average annual return</div>
              <div className="font-bold">{annualReturn}%</div>
            </div>
            <div className="text-center sm:text-right">
              <div>Earned return</div>
              <div className="font-bold">{formatEUR(earnedReturn)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}