"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Shield, Zap, Award } from 'lucide-react';
import Image from 'next/image';

const evaluationPlans = [
  {
    name: "Starter",
    price: "99",
    accountSize: "$10,000",
    profit: "$1,000",
    daily: "5%",
    overall: "10%",
    period: "30 days",
    popular: false,
    features: [
      "1 Trading account",
      "Real-time data feed",
      "Basic analytics",
      "Email support",
      "Trading guidelines",
      "Certificate upon completion"
    ]
  },
  {
    name: "Professional",
    price: "249",
    accountSize: "$25,000",
    profit: "$2,500",
    daily: "5%",
    overall: "10%",
    period: "30 days",
    popular: true,
    features: [
      "2 Trading accounts",
      "Real-time data feed",
      "Advanced analytics",
      "Priority email support",
      "Certificate upon completion",
      "1-on-1 mentor session"
    ]
  },
  {
    name: "Expert",
    price: "499",
    accountSize: "$50,000",
    profit: "$5,000",
    daily: "5%",
    overall: "10%",
    period: "30 days",
    popular: false,
    features: [
      "3 Trading accounts",
      "Real-time data feed",
      "Premium analytics suite",
      "24/7 Priority support",
      "Certificate upon completion",
      "Risk management tools",
      "Community access"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Profit Potential",
    description: "Keep up to 80% of your trading profits with our generous profit split model"
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Clear daily and overall drawdown limits to protect both you and your capital"
  },
  {
    icon: Zap,
    title: "Fast Evaluation",
    description: "Complete your evaluation in as little as 30 days and start earning"
  },
  {
    icon: Award,
    title: "No Time Limits",
    description: "Trade at your own pace without pressure - quality over speed"
  }
];

const stats = [
  { value: "10,000+", label: "Active Traders" },
  { value: "95%", label: "Success Rate" },
  { value: "$50M+", label: "Paid to Traders" },
  { value: "24/7", label: "Support Available" }
];

const howItWorks = [
  {
    step: "1",
    title: "Choose Your Plan",
    description: "Select the evaluation plan that matches your trading style and capital goals"
  },
  {
    step: "2",
    title: "Pass Evaluation",
    description: "Trade within our guidelines and hit your profit target while managing risk"
  },
  {
    step: "3",
    title: "Get Funded",
    description: "Receive your funded account and start earning real profits immediately"
  },
  {
    step: "4",
    title: "Scale Up",
    description: "Grow your account size based on your consistent performance"
  }
];

export default function EvaluationsPage() {
  const [selectedPlan, setSelectedPlan] = useState(1);

  return (
    <div className="w-full flex justify-center overflow-x-hidden bg-gray-50">
      <div className="relative w-full max-w-[1700px] mx-[5px] box-border">
        
        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center bg-gray-100 overflow-hidden rounded-3xl mb-8">
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/bg.png"
              alt="Evaluations background"
              fill
              sizes="100vw"
              className="object-cover object-center rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-black/50 rounded-3xl" />
          </div>

          <div className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-14 py-12 sm:py-16 md:py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6"
              >
                Trader <span className="text-neutral-100">Evaluation</span> Program
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 px-2"
              >
                Prove your skills, get funded, and start earning up to 80% profit share
              </motion.p>
              
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-12"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/90 backdrop-blur-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 border border-gray-600/50"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-100 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-white/80 text-xs sm:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 cursor-pointer"
            onClick={() => {
              document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg className="w-8 h-8 text-neutral-100 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="px-4 sm:px-6 md:px-14 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-neutral-800">Evaluation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Industry-leading evaluation program designed for serious traders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-neutral-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                  <benefit.icon className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-800" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="plans" className="px-4 sm:px-6 md:px-14 py-12 md:py-20 bg-gray-100 rounded-3xl my-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your <span className="text-neutral-800">Evaluation Plan</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select the plan that fits your trading goals and start your journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {evaluationPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => setSelectedPlan(idx)}
                className={`relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border-2 cursor-pointer transition-all ${
                  plan.popular 
                    ? 'border-neutral-800 shadow-2xl' 
                    : selectedPlan === idx 
                      ? 'border-neutral-400 shadow-xl' 
                      : 'border-gray-200 shadow-lg hover:border-neutral-300'
                } ${plan.popular ? 'mt-6 sm:mt-8' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-neutral-800 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap z-10">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">${plan.price}</span>
                  </div>
                  <div className="bg-neutral-800 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base">
                    {plan.accountSize} Account
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-sm">Profit Target</span>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.profit}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-sm">Daily Drawdown</span>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.daily}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-sm">Max Drawdown</span>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.overall}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-xs sm:text-sm">Time Period</span>
                    <span className="font-semibold text-gray-900 text-xs sm:text-sm">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-0.5 sm:mt-1 flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 text-white" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm transition-all ${
                    plan.popular
                      ? 'bg-neutral-800 text-white shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Start Evaluation
                </motion.button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="px-4 sm:px-6 md:px-14 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It <span className="text-neutral-800">Works</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your path to becoming a funded trader in 4 simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-neutral-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-neutral-800 text-lg sm:text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-neutral-300" />
                )}
              </motion.div>
            ))}
          </div>
        </section>


      </div>
    </div>
  );
}