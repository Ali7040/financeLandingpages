"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, TrendingUp, Shield, Zap, Award, Users, Clock, Target } from 'lucide-react';
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
      "Trading guidelines",
      "Certificate upon completion",
      "1-on-1 mentor session",
      "Trading journal access"
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
      "Trading guidelines",
      "Certificate upon completion",
      "Weekly mentor sessions",
      "Trading journal access",
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

          <div className="relative z-20 w-full px-4 sm:px-6 md:px-14 py-16 sm:py-24 md:py-32">
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
                className="text-white text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                Trader <span className="text-blue-300">Evaluation</span> Program
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8"
              >
                Prove your skills, get funded, and start earning up to 80% profit share
              </motion.p>
              
              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-700/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/50"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-blue-300 mb-2">{stat.value}</div>
                    <div className="text-white/80 text-sm">{stat.label}</div>
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
            <svg className="w-8 h-8 text-blue-400 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
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
              Why Choose Our <span className="text-blue-500">Evaluation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Industry-leading evaluation program designed for serious traders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
              Choose Your <span className="text-blue-500">Evaluation Plan</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select the plan that fits your trading goals and start your journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {evaluationPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -8 }}
                onClick={() => setSelectedPlan(idx)}
                className={`relative bg-white rounded-3xl p-8 border-2 cursor-pointer transition-all ${
                  plan.popular 
                    ? 'border-blue-500 shadow-2xl' 
                    : selectedPlan === idx 
                      ? 'border-blue-300 shadow-xl' 
                      : 'border-gray-200 shadow-lg hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-end justify-center mb-4">
                    <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl font-semibold text-lg">
                    {plan.accountSize} Account
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Profit Target</span>
                    <span className="font-semibold text-gray-900">{plan.profit}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Daily Drawdown</span>
                    <span className="font-semibold text-gray-900">{plan.daily}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Max Drawdown</span>
                    <span className="font-semibold text-gray-900">{plan.overall}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-gray-600 text-sm">Time Period</span>
                    <span className="font-semibold text-gray-900">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
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
              How It <span className="text-blue-500">Works</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your path to becoming a funded trader in 4 simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 text-white text-2xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {idx < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-300" />
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 md:px-14 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl p-8 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who have passed our evaluation and are now earning consistent profits
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-blue-500 font-bold py-4 px-12 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Begin Evaluation Now
            </motion.button>
          </motion.div>
        </section>

      </div>
    </div>
  );
}