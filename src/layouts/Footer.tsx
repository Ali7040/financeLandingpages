"use client";
import React from "react";
import Link from "next/link";
// Lucide icons import
import { Facebook, Twitter, Youtube, Linkedin, MessageCircle, Send, Users, BadgePercent } from "lucide-react";

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case "facebook":
      return <Facebook className="w-6 h-6 text-white" />;
    case "x":
      return <Twitter className="w-6 h-6 text-white" />; // Lucide's Twitter icon for "X"
    case "youtube":
      return <Youtube className="w-6 h-6 text-white" />;
    case "linkedin":
      return <Linkedin className="w-6 h-6 text-white" />;
    case "telegram":
      return <Send className="w-6 h-6 text-white" />;
    case "whatsapp":
      return <MessageCircle className="w-6 h-6 text-white" />;
    case "p2p":
      return <Users className="w-6 h-6 text-white" />;
    case "zealy":
      return <BadgePercent className="w-6 h-6 text-white" />;
    default:
      return null;
  }
};

const TrustpilotStar = () => (
  <svg className="w-6 h-6" fill="#00b67a" viewBox="0 0 24 24">
    <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#232628] rounded-[32px] max-w-[1700px] px-6 sm:px-10 py-14 text-gray-300 text-base font-sans border-[1.5px] border-[#f6f6f6] mx-1 mb-1">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1 flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-white font-bold text-2xl tracking-wide">UNBIASED ALPHA</span>
            
          </div>
          <div className="mt-8 text-white/90 font-medium flex items-center gap-3">
            <span>Excellent <span className="font-bold">4.4 out of 5</span></span>
            <TrustpilotStar />
            <span>Trustpilot</span>
          </div>
           
        </div>

        {/* About us */}
        <div className="md:col-span-1 flex flex-col">
          <span className="text-white font-medium text-xl mb-7">About us</span>
          <Link href="/earn" className="bg-blue-600 text-white font-semibold rounded-lg px-6 py-2 mb-4 text-base inline-flex items-center gap-2 hover:bg-blue-700 transition">
            Earn 25%
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
          <ul className="space-y-2">
            <li>
            <Link href="/evaluations" className="font-normal nav-underline text-xs sm:text-sm md:text-base">Evaluations</Link></li>
            <li>FAQ</li>
            <li>
            <Link href="/rules" className="font-normal nav-underline text-xs sm:text-sm md:text-base">Rules</Link></li>
            <li>
            <Link href="/about" className="font-normal nav-underline text-xs sm:text-sm md:text-base">About</Link></li>
            <li>
            <Link href="/competitions" className="font-normal nav-underline text-xs sm:text-sm md:text-base">Competitions</Link></li>
            <li>
            <Link href="/education" className="font-normal nav-underline text-xs sm:text-sm md:text-base">Education</Link></li>
            <li>
            <Link href="/contact" className="font-normal nav-underline text-xs sm:text-sm md:text-base">Contact</Link></li>
          </ul>
        </div>

        {/* Contact us */}
        <div className="md:col-span-1 flex flex-col">
          <span className="text-white font-medium text-xl mb-7">Contact us</span>
          <div className="mb-2">UNBIASED ALPHA</div>
          <div className="mb-2 text-white">Support:<br></br><a href="mailto:support@unbiasedalpha.ch" className="underline text-white/40 hover:text-blue-400 text-sm">support@unbiasedalpha.ch</a></div>
          <div className="mb-2 text-white">Commercial offers: <a href="mailto:info@unbiasedalpha.ch" className="underline text-white/40 hover:text-blue-400 text-sm">info@unbiasedalpha.ch</a></div>
          <div className="mb-2 text-white">
            Address:<br />
            <span className="text-sm text-white/40">
            Richtistrasse 7<br />
            8304 Wallisellen<br />
            Switzerland
            </span>
          </div>
         
        </div>

        {/* Follow us */}
        <div className="md:col-span-1 flex flex-col items-center md:items-start">
          <span className="text-white font-medium text-xl mb-7">Follow us</span>
          <div className="flex flex-row flex-wrap gap-3 mb-7 md:grid md:grid-cols-2 md:gap-4">
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="facebook">
              <SocialIcon name="facebook" />
            </a>
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="x">
              <SocialIcon name="x" />
            </a>
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="youtube">
              <SocialIcon name="youtube" />
            </a>
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="linkedin">
              <SocialIcon name="linkedin" />
            </a>
          </div>
          <span className="text-white font-medium text-xl mb-4">Community</span>
          <div className="flex flex-row flex-wrap gap-3 md:grid md:grid-cols-2 md:gap-4">
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="telegram">
              <SocialIcon name="telegram" />
            </a>
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="whatsapp">
              <SocialIcon name="whatsapp" />
            </a>
            <a href="#" className="bg-[#33373a] rounded-xl p-3 flex justify-center items-center hover:bg-[#444]" aria-label="p2p">
              <SocialIcon name="p2p" />
            </a>
            <a href="#" className="bg-blue-600 rounded-xl p-3 flex justify-center items-center hover:bg-blue-700 transition relative" aria-label="zealy">
              <SocialIcon name="zealy" />
              {/* Telegram badge on zealy */}
              <span className="absolute -top-2 -right-2 bg-white rounded-full px-1 py-0.5">
                <Send className="w-4 h-4 text-[#2563eb]" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}