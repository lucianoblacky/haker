"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type AnimatedButtonProps = HTMLMotionProps<"button"> & {
  children: ReactNode;
  variant?: "primary" | "gold";
};

export default function AnimatedButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: AnimatedButtonProps) {
  const variantClass = variant === "gold" ? "pm-btn-gold" : "pm-btn-primary";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`pm-btn ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
