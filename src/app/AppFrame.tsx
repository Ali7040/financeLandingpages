"use client";
import { usePathname } from "next/navigation";
import Navbar from "../layouts/Header";
import Footer from "@/layouts/Footer";

const NavItems = [
  { href: "/evaluations", label: "Evaluations" },
  { href: "/rules", label: "Rules" },
  { href: "/about", label: "About" },
  { href: "/competitions", label: "Competitions" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function AppFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideHeaderFooter = pathname === "/login" || pathname === "/signup";
  return (
    <>
      {!hideHeaderFooter && <Navbar NavbarItems={NavItems} />}
      {children}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}
