"use client";
import React from "react";
import { motion } from "framer-motion";

const educationSteps = [
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <rect x={4} y={4} width={16} height={12} rx={2} fill="#222" />
        <rect x={8} y={10} width={8} height={2} rx={1} fill="#fff" />
      </svg>
    ),
    title: "Learn the Basics",
    description: "Start with foundational concepts in finance and investing."
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} fill="#222" />
        <path d="M17 9.5l-5.5 5.5L7 10.5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Explore Strategies",
    description: "Discover proven investment strategies and risk management techniques."
  },
  {
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} fill="#222" />
        <polygon points="12,7 15,11 9,11" fill="#fff" />
        <circle cx={12} cy={16} r={1.5} fill="#fff" />
      </svg>
    ),
    title: "Apply & Grow",
    description: "Put your knowledge into practice and track your progress."
  }
];

export default function EducationPage() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
  <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white rounded-3xl shadow-md pb-20 px-4 sm:px-8 md:px-12 relative overflow-hidden" id="education-hero">
        {/* Animated background pattern */}
        {/* Animated background bubbles */}
        <div className="absolute inset-0 pointer-events-none w-full h-full">
          <motion.svg
            width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full"
          >
            <motion.circle
              cx="200" cy="120" r="80" fill="#2563eb"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: [0.8, 1.05, 0.95, 1] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.circle
              cx="600" cy="320" r="100" fill="#e5e5e5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: [0.8, 1.1, 0.9, 1] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.circle
              cx="400" cy="200" r="60" fill="#f6f6f6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.15, scale: [0.8, 1.08, 0.92, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </motion.svg>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center relative z-10"
        >
          Education Hub
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 text-center max-w-2xl mx-auto mb-6 text-lg md:text-xl relative z-10"
        >
          Unlock your financial potential with our curated learning resources, guides, and interactive tools. Every section is designed to help you grow your knowledge and confidence in investing.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-gray-600 text-center max-w-xl mx-auto mb-10 text-base md:text-lg relative z-10"
        >
          Whether you're a beginner or an experienced investor, our platform offers step-by-step guides, expert insights, and interactive tools to help you master the art of investing. Join our community and start your journey to financial freedom today.
        </motion.p>
        {/* Highlighted info card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative z-10 bg-[#f6f6f6] rounded-2xl shadow-lg px-6 py-5 max-w-md mx-auto mb-8 flex flex-col items-center"
        >
          <span className="text-gray-800 font-bold text-lg mb-2">Did you know?</span>
          <span className="text-gray-800 text-center text-base">Over 70% of successful investors started with small, consistent learning steps. Take your first step today!</span>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-900 transition mb-2"
          onClick={() => {
            const el = document.getElementById('education-steps');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Start Learning ↓
        </motion.button>
      </section>
      {/* Education Steps Section */}
  <section className="w-full min-h-screen flex flex-col items-center justify-center bg-[#f6f6f6] rounded-3xl shadow-md pb-20 px-4 sm:px-8 md:px-12" id="education-steps">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
        >
          Your Learning Journey
        </motion.h2>
        <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-12">
          {educationSteps.map((step, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-white rounded-[32px] border border-gray-200 flex flex-col px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[220px] sm:min-w-[280px] shadow transition mb-6 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              whileHover={{
                scale: 1.04,
                y: -10,
                boxShadow: "0 8px 32px 0 #2222"
              }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <span className="inline-block">{step.icon}</span>
                <span className="font-bold text-lg sm:text-xl md:text-2xl font-sans text-black">{step.title}</span>
              </div>
              <p className="text-gray-800 mt-2 font-sans text-sm sm:text-base">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Content Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white rounded-3xl shadow-md pb-20 px-4 sm:px-8 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
        >
          Featured Resources
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Beginner's Guide</h3>
            <p className="text-gray-700">A step-by-step guide to understanding the basics of investing and personal finance.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Interactive Tools</h3>
            <p className="text-gray-700">Use our calculators and simulators to practice and plan your investment strategies.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Expert Insights</h3>
            <p className="text-gray-700">Read articles and watch videos from top financial experts and educators.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Community Support</h3>
            <p className="text-gray-700">Join our forums and discussion groups to connect, ask questions, and share experiences.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
