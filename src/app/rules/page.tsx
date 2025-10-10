"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, TrendingUp, Users } from "lucide-react";

const rules = [
  {
    icon: Shield,
    bg: "bg-black",
    text: "text-white",
    value: "0%",
    heading: "No Hidden Fees",
    description: "No fees on deposits, investments, or withdrawals. What you invest is what you get to work with.",
    details: "Transparent pricing and no surprise charges."
  },
  {
    icon: Award,
    bg: "bg-white",
    text: "text-black",
    value: "€50",
    heading: "Low Entry Barrier",
    description: "Start your evaluation with as little as €50. No need for large capital to access funding.",
    details: "Accessible to all traders regardless of experience."
  },
  {
    icon: TrendingUp,
    bg: "bg-white",
    text: "text-black",
    value: "15.6%",
    heading: "High Returns",
    description: "Earn up to 15.6% annual returns with fixed interest rates and monthly payouts.",
    details: "Receive your first payout in just 30 days."
  },
  {
    icon: Users,
    bg: "bg-white",
    text: "text-black",
    value: "24/7",
    heading: "Support & Guidance",
    description: "Dedicated support team available 24/7 to help you succeed.",
    details: "Get expert advice and mentorship throughout your evaluation."
  },
  {
    icon: Shield,
    bg: "bg-white",
    text: "text-black",
    value: "Strict",
    heading: "Risk Management",
    description: "Follow strict daily and overall drawdown limits to protect your account.",
    details: "Risk management is key to long-term success."
  },
  {
    icon: Award,
    bg: "bg-white",
    text: "text-black",
    value: "Target",
    heading: "Profit Targets",
    description: "Achieve the set profit target within the evaluation period to qualify for funding.",
    details: "Clear goals for every trader."
  },
  {
    icon: TrendingUp,
    bg: "bg-white",
    text: "text-black",
    value: "Consistent",
    heading: "Consistent Trading",
    description: "Demonstrate consistent profitability and disciplined trading habits.",
    details: "Consistency is rewarded."
  },
  {
    icon: Users,
    bg: "bg-white",
    text: "text-black",
    value: "Fair",
    heading: "No Martingale",
    description: "Martingale and grid strategies are not allowed to ensure fair evaluation.",
    details: "Trade responsibly and ethically."
  }
];

export default function RulePage() {
  return (
    <div className="min-h-screen bg-[#f6f6f6] text-black w-full flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[1700px] mx-[5px] box-border">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-black text-center font-sans font-bold mb-10"
            style={{
              fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
              fontWeight: 700,
              fontSize: "3rem",
              lineHeight: "1.1",
            }}
          >
            Evaluation <span className="text-neutral-800">Rules</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl"
            style={{fontFamily:'"Geist",sans-serif'}}>
            Please review the rules below to ensure a successful evaluation and funding process. All traders must adhere to these guidelines for fair and transparent assessment.
          </motion.p>
        </section>

        {/* Rules Section - WhyInvestStyle Cards */}
        <section className="py-8 px-2 sm:px-4 flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-wrap gap-4 sm:gap-6 justify-center items-stretch">
            {rules.map((rule, idx) => (
              <motion.div
                key={idx}
                className={`${rule.bg} rounded-[32px] sm:rounded-[40px] relative overflow-hidden flex flex-col justify-between px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[220px] sm:min-w-[280px] flex-1 shadow-xl`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 * idx }}
              >
                <div className="relative z-10">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span
                      className={`${rule.text} font-sans`}
                      style={{
                        fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
                        fontSize: "2.2rem",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {rule.value}
                    </span>
                    <div className={`${rule.text} text-base sm:text-lg font-medium mt-2 whitespace-pre-line`}>
                      {rule.heading}
                    </div>
                  </div>
                  <div className="mt-6 sm:mt-10">
                    <div
                      className={`${rule.text} font-sans font-semibold text-base sm:text-xl md:text-2xl mb-2 sm:mb-3`}
                      style={{ fontFamily: '"Geist",sans-serif' }}
                    >
                      {rule.description}
                    </div>
                    <div className={`${rule.text === "text-black" ? "text-gray-700" : "text-white/90"} text-xs sm:text-base`}>
                      {rule.details}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Section 1: Funding Transparency */}
        <section className="py-16 px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-black text-center font-sans font-bold mb-8"
            style={{ fontFamily: '"Geist",sans-serif', fontWeight: 700, fontSize: "2.5rem", lineHeight: "1.1" }}
          >
            Transparent Funding Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl"
            style={{ fontFamily: '"Geist",sans-serif' }}
          >
            We believe in full transparency at every step. From evaluation to funding, all rules, fees, and payout structures are clearly communicated. No hidden terms—just honest opportunities for traders to grow.
          </motion.p>
        </section>

        {/* Section 2: Security & Compliance */}
        <section className="py-16 px-4 flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-black text-center font-sans font-bold mb-8"
            style={{ fontFamily: '"Geist",sans-serif', fontWeight: 700, fontSize: "2.5rem", lineHeight: "1.1" }}
          >
            Security & Compliance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl"
            style={{ fontFamily: '"Geist",sans-serif' }}
          >
            Your funds and data are protected with industry-leading security protocols. We comply with all financial regulations to ensure a safe, trustworthy environment for every trader and investor.
          </motion.p>
        </section>
      </div>
    </div>
  );
}
