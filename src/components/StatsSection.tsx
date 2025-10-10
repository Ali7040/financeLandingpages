"use client";
import React from "react";

import { motion } from "framer-motion";
// If you use Geist font from next/font/google in your layout, this will match perfectly!
export default function StatsSection() {
  return (
    <section
      id="stats"
      className="bg-[#f6f6f6] min-h-screen w-full flex flex-col items-center justify-center px-2 sm:px-4 py-10 sm:py-16 md:py-24"
      style={{ margin: "0 auto", boxSizing: "border-box" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-black text-center font-sans font-medium mb-6 sm:mb-10 text-2xl sm:text-4xl md:text-5xl"
        style={{ fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif', fontWeight: 500, lineHeight: "1.1" }}
      >
        UNBIASED ALPHA<br />in Numbers
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="w-full max-w-5xl bg-white rounded-[32px] sm:rounded-[48px] flex flex-col md:flex-row justify-between items-center px-4 sm:px-8 md:px-14 py-8 sm:py-12 md:py-16 shadow-sm gap-6 md:gap-0"
      >
        <div className="flex-1 flex flex-col items-center mb-6 md:mb-0">
          <span className="text-black font-sans text-xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: "-0.04em" }}>€45,1M+</span>
          <span className="mt-2 sm:mt-4 text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-base md:text-lg" style={{fontFamily:'"Geist",sans-serif'}}>Total Funded</span>
        </div>
        <div className="flex-1 flex flex-col items-center mb-6 md:mb-0">
          <span className="text-black font-sans text-xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: "-0.04em" }}>€8,6M+</span>
          <span className="mt-2 sm:mt-4 text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-base md:text-lg" style={{fontFamily:'"Geist",sans-serif'}}>Repaid Total</span>
        </div>
        <div className="flex-1 flex flex-col items-center mb-6 md:mb-0">
          <span className="text-black font-sans text-xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: "-0.04em" }}>20661</span>
          <span className="mt-2 sm:mt-4 text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-base md:text-lg" style={{fontFamily:'"Geist",sans-serif'}}>Investors</span>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <span className="text-black font-sans text-xl sm:text-3xl md:text-4xl font-semibold" style={{ fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif', letterSpacing: "-0.04em" }}>0/0</span>
          <span className="mt-2 sm:mt-4 text-gray-500 font-medium uppercase tracking-wide text-xs sm:text-base md:text-lg" style={{fontFamily:'"Geist",sans-serif'}}>Default / Late Loans</span>
        </div>
      </motion.div>
    </section>
  );
}
