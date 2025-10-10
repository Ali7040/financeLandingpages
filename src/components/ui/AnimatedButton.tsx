"use client";
import { motion } from "framer-motion";
import React from "react";
import { HTMLMotionProps } from "framer-motion";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}


export default function AnimatedButton({ children, className = "", ...props }: AnimatedButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        backgroundColor: "#2563eb", // blue-600
        boxShadow: "0 0 0 4px #2563eb22",
      }}
      whileTap={{ scale: 0.97 }}
      type={props.type || "button"}
      className={`bg-blue-600 text-white font-bold rounded-xl shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out ${className}`}
      {...(props as HTMLMotionProps<"button">)}
    >
      {children}
    </motion.button>
  );
}
