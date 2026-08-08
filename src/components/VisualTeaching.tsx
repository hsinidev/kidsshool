"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VisualTeaching() {
  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Text Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <span className="section-label">🎓 Active</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Visual Teaching{" "}
              <span className="text-primary">Methodology!</span>
            </h2>
            <p className="text-text-primary leading-relaxed text-base md:text-lg">
              Our visual-first approach uses colorful materials, interactive displays, and hands-on
              activities to make learning tangible and memorable. Children learn best when they can see,
              touch, and experience concepts firsthand.
            </p>
            <p className="text-text-primary leading-relaxed text-base md:text-lg">
              From science experiments to storytelling with props, every lesson is designed to engage
              multiple senses and spark genuine curiosity.
            </p>
            <motion.a
              href="#"
              className="btn-primary inline-flex"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Creative Works
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* ── Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-primary/10 rounded-[2rem] -z-10" />
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[350px] md:h-[420px] relative">
                <Image
                  src="/images/hero-nursery.webp"
                  alt="Visual teaching methodology in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
