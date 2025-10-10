"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Users, TrendingUp, Award, Shield, Zap } from "lucide-react";

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We believe in complete transparency in our evaluation process and payout structure."
    },
    {
      icon: Users,
      title: "Trader-Centric",
      description: "Every decision we make puts our traders first, from flexible rules to responsive support."
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "We're committed to helping traders grow their skills and scale their trading careers."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in evaluation criteria and trader development."
    }
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      description: "15+ years in prop trading and risk management"
    },
    {
      name: "Sarah Williams",
      role: "Head of Trading",
      description: "Former institutional trader with 12 years of experience"
    },
    {
      name: "David Martinez",
      role: "Chief Technology Officer",
      description: "Built trading platforms serving 100,000+ traders"
    },
    {
      name: "Emily Johnson",
      role: "Head of Trader Success",
      description: "Dedicated to helping traders achieve their goals"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to democratize prop trading" },
    { year: "2021", event: "1,000 Traders", description: "Reached our first major milestone" },
    { year: "2022", event: "$5M Paid Out", description: "Crossed $5 million in trader payouts" },
    { year: "2023", event: "10,000 Traders", description: "Growing community of successful traders" },
    { year: "2024", event: "$50M+ Paid Out", description: "Leading the industry in trader payouts" }
  ];

  return (
  <div className="min-h-screen bg-[#f6f6f6] text-black">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-black text-center font-sans font-bold mb-10"
          style={{
            fontFamily: '"Geist", "Helvetica Neue", Helvetica, Arial, sans-serif',
            fontWeight: 700,
            fontSize: "3rem",
            lineHeight: "1.1",
          }}
        >
          About <span className="text-neutral-800">Unbiased Alpha</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl"
          style={{fontFamily:'"Geist",sans-serif'}}>
          Empowering talented traders worldwide with capital, technology, and support to achieve their trading goals
        </motion.p>
            <div className="w-full max-w-5xl bg-white rounded-[48px] flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 py-8 md:py-12 shadow-sm">
              <motion.div
                className="flex-1 flex flex-col items-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="text-black font-sans"
                  style={{fontFamily:'"Geist",sans-serif',fontSize:"3rem",fontWeight:500,letterSpacing:"-0.04em"}}
                >15,000+</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.18 }}
                  className="mt-4 text-gray-500 font-medium uppercase tracking-wide text-base md:text-lg"
                  style={{fontFamily:'"Geist",sans-serif'}}
                >Active Traders</motion.span>
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col items-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 }}
                  className="text-black font-sans"
                  style={{fontFamily:'"Geist",sans-serif',fontSize:"3rem",fontWeight:500,letterSpacing:"-0.04em"}}
                >120+</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.28 }}
                  className="mt-4 text-gray-500 font-medium uppercase tracking-wide text-base md:text-lg"
                  style={{fontFamily:'"Geist",sans-serif'}}
                >Countries</motion.span>
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col items-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.35 }}
                  className="text-black font-sans"
                  style={{fontFamily:'"Geist",sans-serif',fontSize:"3rem",fontWeight:500,letterSpacing:"-0.04em"}}
                >$50M+</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.38 }}
                  className="mt-4 text-gray-500 font-medium uppercase tracking-wide text-base md:text-lg"
                  style={{fontFamily:'"Geist",sans-serif'}}
                >Paid Out</motion.span>
              </motion.div>
              <motion.div
                className="flex-1 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="text-black font-sans"
                  style={{fontFamily:'"Geist",sans-serif',fontSize:"3rem",fontWeight:500,letterSpacing:"-0.04em"}}
                >89%</motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.48 }}
                  className="mt-4 text-gray-500 font-medium uppercase tracking-wide text-base md:text-lg"
                  style={{fontFamily:'"Geist",sans-serif'}}
                >Success Rate</motion.span>
              </motion.div>
            </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 flex flex-col items-center">
        <h2 className="text-black text-center font-sans font-bold mb-10" style={{fontFamily:'"Geist",sans-serif',fontWeight:700,fontSize:"2.5rem",lineHeight:"1.1"}}>
          Our <span className="text-neutral-800">Mission</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl" style={{fontFamily:'"Geist",sans-serif'}}>
          We're on a mission to discover and fund talented traders from around the world. We believe that trading skill shouldn't be limited by capital. Our evaluation process identifies disciplined traders and provides them with the resources they need to succeed in the markets.
        </p>
        <motion.div
          className="w-full max-w-4xl bg-white rounded-[48px] flex flex-col items-center px-6 md:px-10 py-10 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="flex items-center gap-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <Target className="w-10 h-10 text-neutral-800" />
            <h3 className="text-xl md:text-2xl font-bold" style={{fontFamily:'"Geist",sans-serif'}}>Why We Exist</h3>
          </motion.div>
          <motion.p
            className="text-gray-700 text-center text-base md:text-lg"
            style={{fontFamily:'"Geist",sans-serif'}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Traditional prop trading firms have high barriers to entry. We've removed those barriers by creating a fair, accessible evaluation process. Whether you're a seasoned professional or an ambitious newcomer, if you can demonstrate consistent profitability and risk management, we'll back you with real capital.
          </motion.p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 flex flex-col items-center">
        <h2 className="text-black text-center font-sans font-bold mb-10" style={{fontFamily:'"Geist",sans-serif',fontWeight:700,fontSize:"2.5rem",lineHeight:"1.1"}}>
          Our <span className="text-neutral-800">Values</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl" style={{fontFamily:'"Geist",sans-serif'}}>
          The principles that guide everything we do
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[48px] flex flex-col items-center px-6 md:px-10 py-10 shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
            >
              <motion.div
                className="bg-neutral-100 p-4 rounded-xl mb-4 flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
              >
                <value.icon className="w-8 h-8 text-neutral-800" />
              </motion.div>
              <motion.h3
                className="text-xl md:text-2xl font-bold mb-2"
                style={{fontFamily:'"Geist",sans-serif'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.14 * index }}
              >{value.title}</motion.h3>
              <motion.p
                className="text-gray-700 text-center text-base md:text-lg"
                style={{fontFamily:'"Geist",sans-serif'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16 * index }}
              >{value.description}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 flex flex-col items-center">
        <h2 className="text-black text-center font-sans font-bold mb-10" style={{fontFamily:'"Geist",sans-serif',fontWeight:700,fontSize:"2.5rem",lineHeight:"1.1"}}>
          Our <span className="text-neutral-800">Journey</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl" style={{fontFamily:'"Geist",sans-serif'}}>
          Key milestones in our growth story
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[48px] flex flex-col md:flex-row items-center px-6 md:px-10 py-8 shadow-sm gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
            >
              <motion.div
                className="bg-neutral-100 px-6 py-3 rounded-xl flex-shrink-0 mb-4 md:mb-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
              >
                <div className="text-xl md:text-2xl font-bold text-neutral-800">{milestone.year}</div>
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <motion.h3
                  className="text-lg md:text-xl font-bold mb-2"
                  style={{fontFamily:'"Geist",sans-serif'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.14 * index }}
                >{milestone.event}</motion.h3>
                <motion.p
                  className="text-gray-700 text-base md:text-lg"
                  style={{fontFamily:'"Geist",sans-serif'}}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.16 * index }}
                >{milestone.description}</motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 flex flex-col items-center">
        <h2 className="text-black text-center font-sans font-bold mb-10" style={{fontFamily:'"Geist",sans-serif',fontWeight:700,fontSize:"2.5rem",lineHeight:"1.1"}}>
          Meet Our <span className="text-neutral-800">Team</span>
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-10 text-lg md:text-xl" style={{fontFamily:'"Geist",sans-serif'}}>
          Experienced professionals dedicated to your success
        </p>
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[48px] flex flex-col items-center px-6 md:px-10 py-10 shadow-sm text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * index }}
            >
              <motion.div
                className="w-20 h-20 bg-neutral-100 rounded-full mb-4 flex items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.12 * index }}
              >
                <Users className="w-10 h-10 text-neutral-800" />
              </motion.div>
              <motion.h3
                className="text-lg md:text-xl font-bold mb-2"
                style={{fontFamily:'"Geist",sans-serif'}}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.14 * index }}
              >{member.name}</motion.h3>
              <motion.div
                className="text-sm md:text-base text-neutral-800 mb-3"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.16 * index }}
              >{member.role}</motion.div>
              <motion.p
                className="text-gray-700 text-xs md:text-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.18 * index }}
              >{member.description}</motion.p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}