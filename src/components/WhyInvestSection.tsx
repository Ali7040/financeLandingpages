"use client";

import React from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion } from "framer-motion";


export default function WhyInvestSection() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 900 });
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-[#f6f6f6]"
      id="why-invest"
      style={{ minHeight: '100vh', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeInUp}
        className="text-black text-center font-sans font-medium mb-6 sm:mb-10"
        style={{
          fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
          fontWeight: 500,
          fontSize: "2rem",
          lineHeight: "1.1",
        }}
      >
        Why Invest<br />With Unbiased Alpha?
      </motion.h2>
      <div
        className={
          isTabletOrMobile
            ? "w-full max-w-6xl flex flex-col gap-4 sm:gap-6 justify-center items-center px-4 sm:px-8 md:px-12"
            : "w-full max-w-6xl flex flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-8 md:px-12"
        }
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ delay: 0 }}
          className="flex-1 bg-black rounded-[24px] sm:rounded-[40px] relative overflow-hidden flex flex-col justify-between px-4 sm:px-8 py-6 sm:py-10 w-full mb-4 md:mb-0"
        >
          <div className="absolute inset-0 opacity-50 z-0">
            <Image
              src="/pattern.png"
              alt=""
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="relative z-10">
            <div className="flex items-start gap-6">
              <span
                className="text-white font-sans"
                style={{
                  fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
                  fontSize: "2rem",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                }}
              >
                0%
              </span>
              <div className="text-white text-sm sm:text-lg font-medium mt-2 whitespace-pre-line">
                ON DEPOSITS<br />
                ON INVESTMENTS<br />
                ON WITHDRAWALS
              </div>
            </div>
            <div className="mt-10">
              <div
                className="text-white font-sans font-semibold text-lg sm:text-2xl mb-2 sm:mb-3"
                style={{ fontFamily: '"Geist",sans-serif' }}
              >
                No<br />Hidden Fees
              </div>
              <div className="text-white/90 text-xs sm:text-base">
                What you invest is what you get to work with — no hidden charges
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ delay: 0.15 }}
          className="flex-1 bg-white rounded-[24px] sm:rounded-[40px] flex flex-col justify-between px-4 sm:px-8 py-6 sm:py-10 w-full mb-4 md:mb-0"
        >
          <div>
            <span
              className="text-black font-sans"
              style={{
                fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              €50
            </span>
          </div>
          <div className="mt-10">
            <div
              className="text-black font-sans font-semibold text-lg sm:text-2xl mb-2 sm:mb-3"
              style={{ fontFamily: '"Geist",sans-serif' }}
            >
              Invest From<br />Just €50
            </div>
            <div className="text-gray-700 text-xs sm:text-base">
              Start your investment journey with as little as €50. No need for large capital to access monthly income
            </div>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
          className="flex-1 bg-white rounded-[24px] sm:rounded-[40px] flex flex-col justify-between px-4 sm:px-8 py-6 sm:py-10 w-full"
        >
          <div>
            <span
              className="text-black font-sans"
              style={{
                fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              15.6%
            </span>
          </div>
          <div className="mt-10">
            <div
              className="text-black font-sans font-semibold text-lg sm:text-2xl mb-2 sm:mb-3"
              style={{ fontFamily: '"Geist",sans-serif' }}
            >
              Earn Up To 15.6%<br />Annual Returns
            </div>
            <div className="text-gray-700 text-xs sm:text-base">
              Fixed interest rates with guaranteed monthly payouts. Receive your first interest payment in just 30 days.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}