"use client";
import React from "react";
import { motion } from "framer-motion";

function DotPattern({ variant = 0 }: { variant?: number }) {
  const active = [
    [[1,1],[1,2],[2,1]],
    [[0,3],[1,2],[2,0]],
    [[0,0],[0,3],[1,1],[1,2]],
  ];
  // Increase SVG height and adjust cy so dots are not clipped
  return (
    <svg width={56} height={40} viewBox="0 0 56 40" fill="none" className="mb-4">
      {[0, 1, 2].map(row =>
        [0, 1, 2, 3].map(col => {
          const isActive = active[variant].some(([r, c]) => r === row && c === col);
          return (
            <circle
              key={`${row}-${col}`}
              cx={col * 14 + 6}
              cy={row * 12 + 8}
              r={4}
              fill={isActive ? "#222" : "#e5e5e5"}
            />
          );
        })
      )}
    </svg>
  );
}

const cardData = [
  {
    variant: 0,
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <rect x={4} y={4} width={16} height={12} rx={2} fill="#222" />
        <rect x={8} y={10} width={8} height={2} rx={1} fill="#fff" />
      </svg>
    ),
    title: "Business Application",
    description:
      "European companies submit funding requests for their growth projects and equipment purchases"
  },
  {
    variant: 1,
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} fill="#222" />
        <path d="M17 9.5l-5.5 5.5L7 10.5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Due Diligence",
    description:
      "Multi-stage due diligence by our financial experts ensures only quality projects advance"
  },
  {
    variant: 2,
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} fill="#222" />
        <polygon points="12,7 15,11 9,11" fill="#fff" />
        <circle cx={12} cy={16} r={1.5} fill="#fff" />
      </svg>
    ),
    title: "Risk Assessment",
    description:
      "Risk assessments are conducted by Maclear's AML team in full compliance with European regulatory standards"
  }
];


export default function HowDoesItWorkSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };
  return (
    <section
      className="relative flex flex-col justify-center items-center min-h-screen w-full bg-white rounded-3xl shadow-md mt-8 sm:mt-12"
      id="how-it-works"
      style={{ minHeight: '100vh', paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={fadeInUp}
        className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
      >
        How Does It Work?
      </motion.h2>
  <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-12">
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            transition={{ delay: i * 0.15 }}
            className="flex-1 bg-white rounded-[32px] border border-gray-200 flex flex-col px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[220px] sm:min-w-[280px] shadow transition mb-6 md:mb-0"
            whileHover={{
              scale: 1.04,
              y: -10,
              boxShadow: "0 8px 32px 0 #2563eb22"
            }}
          >
            <DotPattern variant={card.variant} />
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="inline-block">{card.icon}</span>
              <span className="font-bold text-lg sm:text-xl md:text-2xl font-sans text-black">{card.title}</span>
            </div>
            <p className="text-gray-800 mt-2 font-sans text-sm sm:text-base">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}