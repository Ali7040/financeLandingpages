"use client";
import React from "react";
import { motion } from "framer-motion";

function DotPattern({ variant = 0 }: { variant?: number }) {
  const active = [
    [[1,1],[1,2],[2,1]],
    [[0,3],[1,2],[2,0]],
    [[0,0],[0,3],[1,1],[1,2]],
  ];
  // Use neutral color for active dots
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
    title: "Register & Verify",
    description:
      "Sign up on our platform and complete your account verification to enter the competition."
  },
  {
    variant: 1,
    icon: (
      <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
        <circle cx={12} cy={12} r={10} fill="#222" />
        <path d="M17 9.5l-5.5 5.5L7 10.5" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Invest & Refer",
    description:
      "Invest a minimum of €100 and refer friends to earn extra points and rewards."
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
    title: "Track & Win",
    description:
      "Track your progress on the dashboard and compete for top rewards. Winners announced at the end!"
  }
];

export default function CompetitionPage() {
  return (
    <div className="w-full flex flex-col items-center">
  <section className="w-full min-h-screen flex flex-col items-center justify-center bg-white rounded-3xl shadow-md pb-20 px-4 sm:px-8 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center"
        >
          Competition Steps
        </motion.h2>
  <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 px-4 sm:px-8 md:px-12">
          {cardData.map((card, i) => (
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
      <div className="h-10" />
      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="w-full max-w-4xl bg-white rounded-[32px] shadow flex flex-col px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 mb-10"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Competition Timeline</h2>
        <ol className="relative border-l-2 border-gray-200 pl-4 sm:pl-6">
          {[
            { title: "Registration Opens", date: "October 15, 2025" },
            { title: "Competition Starts", date: "October 20, 2025" },
            { title: "Referral & Investment Period", date: "October 20 - November 20, 2025" },
            { title: "Winners Announced", date: "November 25, 2025" }
          ].map((item, idx) => (
            <motion.li
              key={idx}
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 * idx }}
            >
              <div className="absolute -left-3 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-base">{idx + 1}</div>
              <div className="ml-7 sm:ml-6">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base">{item.date}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </motion.div>
      {/* Benefits Section */}
  <div className="w-full max-w-4xl bg-white rounded-[32px] shadow flex flex-col px-4 sm:px-8 md:px-12 py-8 sm:py-12 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Why Join?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Boost Your Earnings</h3>
            <p className="text-gray-700">Earn extra rewards and bonuses by participating and referring friends.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Exclusive Recognition</h3>
            <p className="text-gray-700">Get featured on our leaderboard and receive exclusive badges and gifts.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Network & Learn</h3>
            <p className="text-gray-700">Connect with top investors and gain valuable insights during the event.</p>
          </div>
          <div className="bg-gray-100 rounded-2xl p-6 shadow flex flex-col items-start">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Fun & Excitement</h3>
            <p className="text-gray-700">Enjoy a gamified experience and compete for top spots in a friendly environment.</p>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
  <div className="w-full max-w-4xl bg-white rounded-[32px] shadow flex flex-col px-4 sm:px-8 md:px-12 py-8 sm:py-12 mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Competition FAQs</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Can I join if I am a new user?</h3>
            <p className="text-gray-700">Yes! All registered and verified users are eligible to participate.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">How are winners selected?</h3>
            <p className="text-gray-700">Winners are chosen based on investment amount, referrals, and overall engagement during the competition period.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">When will rewards be distributed?</h3>
            <p className="text-gray-700">Rewards will be distributed within 7 days after winners are announced.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Is there a limit to referrals?</h3>
            <p className="text-gray-700">No, you can refer as many friends as you like to boost your chances!</p>
          </div>
        </div>
      </div>
  </div>
  );
}
