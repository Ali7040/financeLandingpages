"use client"

import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import HowDoesItWorkSection from "@/components/HowDoesItWorkSection";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import { LeadGenForm } from '@/components/LeadForm';
import StatsSection from "@/components/StatsSection";
import WhyInvestSection from "@/components/WhyInvestSection";

export default function Home() {
  return (
    <div className="font-sans w-full min-h-screen bg-[#f6f6f6]">
      <div className="w-full max-w-[1700px] mx-auto px-2">
        <HeroSection />
        <StatsSection />
        <WhyInvestSection />
        <InvestmentCalculator />
        <HowDoesItWorkSection />
        <LeadGenForm />
        <FAQSection />
      </div>
    </div>
  );
}
