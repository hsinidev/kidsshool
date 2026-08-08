"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const counters = [
  {
    target: 3564,
    suffix: "+",
    label: "Students Admission",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14">
        <circle cx="24" cy="14" r="8" fill="#ffffff" opacity={0.9} />
        <path d="M10 40c0-8 6-14 14-14s14 6 14 14" fill="#ffffff" opacity={0.7} />
        <path d="M34 10l4-4M38 10l-4-4" stroke="#ffd700" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    target: 156,
    suffix: "+",
    label: "Total No of Class",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14">
        <rect x="8" y="10" width="14" height="18" rx="2" fill="#ffffff" opacity={0.8} />
        <rect x="12" y="14" width="6" height="2" fill="#f7941e" opacity={0.6} />
        <rect x="12" y="18" width="8" height="2" fill="#f7941e" opacity={0.4} />
        <rect x="26" y="14" width="14" height="18" rx="2" fill="#ffffff" opacity={0.7} />
        <rect x="30" y="18" width="6" height="2" fill="#f7941e" opacity={0.5} />
        <rect x="30" y="22" width="8" height="2" fill="#f7941e" opacity={0.3} />
        <path d="M20 38v-6l4-4 4 4v6" fill="#ffffff" opacity={0.6} />
      </svg>
    ),
  },
  {
    target: 76,
    suffix: "+",
    label: "No of Teachers",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14">
        <circle cx="18" cy="16" r="6" fill="#ffffff" opacity={0.8} />
        <circle cx="32" cy="16" r="5" fill="#ffffff" opacity={0.6} />
        <path d="M6 38c0-7 5-12 12-12 3 0 6 1 8 3" fill="#ffffff" opacity={0.6} />
        <path d="M24 38c0-6 4-10 8-10s8 4 8 10" fill="#ffffff" opacity={0.5} />
        <rect x="14" y="6" width="8" height="2" rx="1" fill="#ed145b" opacity={0.7} />
      </svg>
    ),
  },
  {
    target: 8,
    suffix: "+",
    label: "Years Experience",
    icon: (
      <svg viewBox="0 0 48 48" className="w-14 h-14">
        <polygon points="24,6 28,18 40,18 30,26 34,38 24,30 14,38 18,26 8,18 20,18" fill="#ffffff" opacity={0.8} />
        <polygon points="24,12 26,20 34,20 28,25 30,33 24,28 18,33 20,25 14,20 22,20" fill="#ffd700" opacity={0.4} />
      </svg>
    ),
  },
];

function AnimatedNumber({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function AnimatedCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #f7941e 0%, #f9a840 40%, #fbbd60 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="white" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center">
                  {c.icon}
                </div>
              </div>
              <div
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <AnimatedNumber
                  target={c.target}
                  suffix={c.suffix}
                  isVisible={isInView}
                />
              </div>
              <p className="text-sm md:text-base font-semibold opacity-90">
                {c.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
