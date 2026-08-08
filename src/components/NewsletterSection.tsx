"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FloatingRocket,
  FloatingStar,
  FloatingUFO,
} from "./decorations/Decorations";

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative py-20 md:py-28 bg-bg-soft overflow-hidden"
    >
      {/* Decorations */}
      <FloatingRocket className="bottom-8 left-[4%] animate-float hidden md:block" size={75} />
      <FloatingStar className="top-12 right-[10%] animate-float-reverse" size={40} color="#f7941e" />
      <FloatingUFO className="top-8 right-[3%] animate-float-slow hidden lg:block" size={65} />

      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="section-label">📬 News Letter</span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl mt-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Subscribe To Get the Latest{" "}
            <span className="text-primary">News About Us</span>
          </h2>
          <p className="mt-4 text-text-primary text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Stay updated with our latest activities, programs, and special offers.
            Join our community of happy parents!
          </p>

          {/* Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 bg-white rounded-2xl shadow-xl p-3 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <div className="flex-1 relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                type="email"
                placeholder="Your Mail Address Here..."
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/30 transition text-sm"
                aria-label="Email address"
              />
            </div>
            <motion.button
              className="btn-primary px-8 py-3.5 shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe
            </motion.button>
          </motion.div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-text-primary">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              No spam, ever
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Unsubscribe anytime
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Weekly updates
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
