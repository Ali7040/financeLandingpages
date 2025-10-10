"use client";
import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { motion } from "framer-motion";

const bannerMessages = [
  "APR UP TO 25%",
  "Invite friends and earn rewards!",
  "Check out our crypto course!",
];

interface NavbarProps {
  href: string;
  label: string;
}


export default function Navbar({NavbarItems}: {NavbarItems: NavbarProps[]}) {
  const isMobileMenu = useMediaQuery({ maxWidth: 970 });
  const showTicker = useMediaQuery({ minWidth: 1060 });
  const [menuOpen, setMenuOpen] = useState(false);
  const tickerRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [tickerWidth, setTickerWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Remove hasMounted logic to prevent delayed rendering

  const tickerText = bannerMessages.join("   •   ");

  // Ensure ticker width updates on window resize and after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (!mounted) return;
    function updateWidths() {
      if (tickerRef.current) setTickerWidth(tickerRef.current.offsetWidth);
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    }
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [tickerText, showTicker, isMobileMenu, menuOpen, mounted]);

  // Track scroll for margin/rounding
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Blue ticker animation logic
  // Animate only if tickerText is wider than container
  const tickerAnimation =
    tickerWidth > containerWidth
      ? {
          x: [0, -(tickerWidth - containerWidth + 30)], // 30px extra for smooth animation
        }
      : { x: [0, 0] };

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 bg-white/70 backdrop-blur-md ${scrolled ? "mx-[5px] rounded-2xl" : ""}`}
    >
  <nav className="mx-auto max-w-7xl w-full py-2 px-2 sm:px-4 md:px-6 flex flex-col md:flex-row items-stretch md:items-center gap-2 md:gap-0">
        {isMobileMenu ? (
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between w-full">
              {/* Logo */}
              <Link href="/">
                <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight">UNBIASED ALPHA</span>
              </Link>
              {/* Hamburger & Mobile menu */}
              <div className="flex items-center">
                <button
                  className="p-2 rounded-xl bg-black text-white hover:bg-gray-900 transition"
                  aria-label="Open menu"
                  onClick={() => setMenuOpen(v => !v)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Hide ticker on mobile/small devices */}
            {!isMobileMenu && (
              <div className="w-full flex items-center justify-center mt-2">
                <div
                  ref={containerRef}
                  className="relative flex items-center w-full max-w-xs h-10 sm:h-8 md:h-7 lg:h-6 bg-blue-600 rounded-full shadow px-2 sm:px-3 overflow-hidden min-w-0"
                >
                  <motion.div
                    className="absolute left-0 top-0 flex items-center h-full"
                    style={{ whiteSpace: "nowrap" }}
                    animate={tickerAnimation}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: tickerWidth > containerWidth ? (tickerWidth / 35) : 0.5,
                      ease: "linear",
                    }}
                  >
                    <span ref={tickerRef} className="font-bold text-white text-xs sm:text-sm">
                      {tickerText + "   •   "}
                    </span>
                  </motion.div>
                  <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer bg-white/50 rounded-2xl">
                    <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {/* Mobile menu dropdown */}
            {menuOpen && (
              <div className="absolute top-full right-2 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-200 z-50">
                <div className="flex flex-col py-2">
                  {NavbarItems.map((item) => (
                    <Link key={item.href} href={item.href} className="px-4 py-2 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded transition">
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 my-2" />
                  <Link href="/login" className="px-4 py-2 font-semibold hover:text-blue-600 hover:bg-blue-50 rounded transition">Log In</Link>
                  <Link href="/signup" className=" text-white mx-2 px-4 py-2 font-semibold hover:text-white bg-black rounded-xl shadow hover:bg-gray-900 transition">Sign Up</Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-row items-center justify-between w-full gap-2">
            {/* Left: Logo & Links */}
            <div className="flex items-center gap-2 whitespace-nowrap min-w-0 flex-shrink">
              <Link href="/">
                <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight px-2 md:px-4 lg:px-6">UNBIASED ALPHA</span>
              </Link>
              <Link href="/evaluations" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">Evaluations</Link>
              <Link href="/rules" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">Rules</Link>
              <Link href="/about" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">About</Link>
              <Link href="/competitions" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">Competitions</Link>
              <Link href="/education" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">Education</Link>
              <Link href="/contact" className="font-semibold nav-underline text-xs sm:text-sm md:text-base">Contact</Link>
            </div>
            {/* Center: Ticker only visible >=1060px. Render immediately if showTicker is true. */}
            {showTicker && mounted && (
              <div className="flex items-center justify-center min-w-0">
                <div
                  ref={containerRef}
                  className="relative flex items-center ticker-area rounded-full shadow px-2 sm:px-3 overflow-hidden min-w-0 cursor-pointer"
                  style={{ width: '200px', maxWidth: '390px', height: '28px' }}
                >
                  <motion.div
                    className="absolute left-0 top-0 flex items-center h-full"
                    style={{ whiteSpace: "nowrap" }}
                    animate={
                      tickerWidth > containerWidth
                        ? { x: [0, -(tickerWidth - containerWidth + 30)] }
                        : { x: [0, 0] }
                    }
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: tickerWidth > containerWidth ? tickerWidth / 35 : 0.5,
                      ease: "linear",
                    }}
                  >
                    <span ref={tickerRef} className="font-bold text-white text-xs sm:text-sm">
                      {tickerText + "   •   "}
                    </span>
                  </motion.div>
                  <span className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 flex items-center cursor-pointer bg-white/50 rounded-2xl">
                    <svg className="w-4 h-4" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            )}
            {/* Right: Auth buttons only */}
            <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap justify-end flex-shrink-0">
              <span className="hidden md:inline h-5 border-l border-gray-300 mx-1" />
              <Link href="/login" className="font-semibold nav-underline text-xs sm:text-sm md:text-base cursor-pointer">Log In</Link>
              <Link href="/signup">
                <button className="bg-black text-white font-bold px-3 sm:px-4 py-1 rounded-xl shadow hover:bg-gray-900 transition text-xs sm:text-sm md:text-base cursor-pointer">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}