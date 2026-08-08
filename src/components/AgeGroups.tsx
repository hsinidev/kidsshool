"use client";

import React from "react";
import { motion } from "framer-motion";

const ageGroups = [
  { range: "2–3", label: "Infant", color: "#ed145b", bg: "rgba(237,20,91,0.1)" },
  { range: "4–6", label: "Kindergarten", color: "#0a6375", bg: "rgba(10,99,117,0.1)" },
  { range: "7–8", label: "Pre-Primary", color: "#1CBBB4", bg: "rgba(28,187,180,0.1)" },
  { range: "9–10", label: "Primary", color: "#f7941e", bg: "rgba(247,148,30,0.1)" },
];

export default function AgeGroups() {
  return (
    <section className="relative py-16 md:py-24 bg-bg-soft overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ageGroups.map((ag, i) => (
            <motion.div
              key={ag.label}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.12,
                type: "spring",
                stiffness: 200,
              }}
              className="text-center"
            >
              <motion.div
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full flex flex-col items-center justify-center shadow-lg cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${ag.color}, ${ag.color}dd)`,
                  boxShadow: `0 8px 30px ${ag.color}40`,
                }}
                whileHover={{
                  scale: 1.12,
                  y: -8,
                  boxShadow: `0 16px 40px ${ag.color}60`,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <span
                  className="text-3xl md:text-4xl font-bold text-white leading-none"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {ag.range}
                </span>
                <span className="text-sm md:text-base text-white/90 font-semibold">
                  Years
                </span>
              </motion.div>
              <p
                className="mt-4 text-base md:text-lg font-bold"
                style={{ fontFamily: "var(--font-heading)", color: ag.color }}
              >
                {ag.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
