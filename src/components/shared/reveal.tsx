"use client";

import { motion, useReducedMotion } from "motion/react";

// Revelado al hacer scroll. Superficie de marketing: 600ms con ease-out.
// Con movimiento reducido se mantiene el fundido, sin desplazamiento.
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;

  return (
    <Comp
      className={className}
      initial={{
        opacity: 0,
        transform: reduce ? "translateY(0px)" : "translateY(24px)",
      }}
      whileInView={{ opacity: 1, transform: "translateY(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </Comp>
  );
}
