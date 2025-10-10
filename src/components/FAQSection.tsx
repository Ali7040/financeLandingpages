"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Grip, ChevronDown } from "lucide-react";
import AnimatedButton from "./ui/AnimatedButton";

const questions = [
  {
    q: "What is Maclear?",
    a: "Maclear is a Swiss-regulated investment platform for EU businesses, offering high returns and transparency.",
  },
  {
    q: "How is Maclear regulated?",
    a: "Maclear operates under Swiss financial regulations, ensuring investor protection and compliance.",
  },
  {
    q: "What is the minimum investment?",
    a: "The minimum investment amount is €50, making it accessible for all investors.",
  },
  {
    q: "How does deposits and withdrawals work?",
    a: "Deposits and withdrawals are processed securely and efficiently through your account dashboard.",
  },
  {
    q: "Are there any fees for Investors?",
    a: "There are no hidden fees for investors. All terms are transparent and upfront.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
  <section className="w-full bg-[#fafafa] py-6 sm:py-10 md:py-12 px-2 sm:px-4 md:px-6 flex flex-col items-center">
  <div className="max-w-7xl w-full flex flex-col md:flex-row gap-4 sm:gap-8 md:gap-12 justify-between items-start">
        {/* Left Side: Title & Button */}
        <div className="flex-1 flex flex-col justify-center items-start pl-0 sm:pl-4 md:pl-16 min-w-[180px] sm:min-w-[220px] w-full mb-6 sm:mb-8 md:mb-0">
          <h2
            className="text-black font-sans font-bold mb-4 sm:mb-8 text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            style={{
              fontWeight: 700,
              letterSpacing: "-0.03em",
            }}
          >
            Frequently asked<br />questions
          </h2>
          <Link href="/contact">
            <AnimatedButton className="bg-black text-white rounded-xl px-4 sm:px-6 py-2 sm:py-4 mt-2 font-semibold text-base sm:text-lg flex items-center gap-2 hover:bg-gray-900 transition shadow w-full sm:w-auto">
              More Questions
              <span>
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
            </AnimatedButton>
          </Link>
        </div>
        {/* Right Side: Questions List */}
        <div className="flex-[2] w-full">
          <ul className="w-full">
            {questions.map((item, idx) => (
              <li
                key={item.q}
                className="flex flex-col"
              >
                <button
                  className="flex items-center justify-between py-3 sm:py-6 border-b border-gray-200 text-black font-sans font-semibold text-base sm:text-2xl md:text-3xl transition hover:bg-gray-100 px-2 sm:px-4 md:px-8"
                  style={{ letterSpacing: '-0.01em' }}
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  aria-expanded={openIdx === idx}
                >
                  <span className="text-left">{item.q}</span>
                  <span>
                    <Grip className="w-5 h-5 sm:w-8 sm:h-8 text-gray-800 opacity-80" />
                  </span>
                </button>
                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 px-2 sm:px-4 md:px-8 text-xs sm:text-base text-gray-700 font-sans ${openIdx === idx ? "max-h-40 py-2 sm:py-4" : "max-h-0 py-0"}`}
                  aria-hidden={openIdx !== idx}
                >
                  {openIdx === idx && item.a}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}