"use client";

import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { LeadGenForm } from '@/components/LeadForm';


export default function ContactPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      info: "support@yourcompany.com",
      gradient: "from-neutral-400 to-neutral-600"
    },
    {
      icon: Phone,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: "123 Trading St, Finance District",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="w-full flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[1700px] mx-[5px] box-border">
        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center bg-gray-100 overflow-hidden rounded-3xl mb-8">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Image
              src="/bg.png"
              alt="Contact background"
              fill
              sizes="100vw"
              className="object-cover object-center rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-black/50 rounded-3xl" />
          </div>

          {/* Content */}
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
                Let's Start a{" "}
                <span className="text-neutral-100">Conversation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-white/90 text-lg sm:text-xl md:text-2xl mb-8"
              >
                Ready to elevate your investment journey? Get in touch with us today and discover how we can help you succeed.
              </motion.p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12"
            >
              {contactInfo.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.18, ease: 'easeOut', delay: 0 }}
                  whileHover={{ scale: 1.12, y: -10 }}
                  className="bg-gray-700/90 backdrop-blur-lg rounded-2xl p-6 border border-gray-600/50 cursor-pointer shadow-xl"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mb-4`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.info}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Animated Down Arrow */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="absolute left-1/2 -translate-x-1/2 bottom-6 z-30 cursor-pointer"
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg className="w-8 h-8 text-neutral-100 drop-shadow-lg" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </motion.div>
        </section>

        {/* Form Section */}
        <section id="contact-form" className="w-full px-4 sm:px-6 md:px-14 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <LeadGenForm />

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-gray-600 text-sm mb-4">Trusted by investors worldwide</p>
              <div className="flex items-center justify-center gap-6 flex-wrap text-gray-500">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="font-semibold"
                >
                  5000+ Active Investors
                </motion.div>
                <div>•</div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="font-semibold"
                >
                  24/7 Support
                </motion.div>
                <div>•</div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="font-semibold"
                >
                  Swiss Regulated
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}