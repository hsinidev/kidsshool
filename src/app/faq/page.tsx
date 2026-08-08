"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BubbleTrailCursor, MagicDoodlePad, playPopSound } from "@/components/MagicSpells";
import {
  FloatingStar,
  FloatingPlanet,
  FloatingCloud,
  ABCBlocks,
  WaveDivider
} from "@/components/decorations/Decorations";

const faqs = [
  {
    q: "What age groups do you accept for nursery daycare?",
    a: "We welcome infants and children from exactly 3 months up to 6 years of age. Our infants stay in a dedicated quiet cozy sleeping room, while children from 3 to 6 years participate in early learning academies and classes.",
    category: "general",
  },
  {
    q: "Can parents view the live 24/7 CCTV feeds?",
    a: "Yes! Every registered family receives unique encrypted login keys to access our high-resolution live camera streams inside classrooms, playgrounds, and sleeping spaces at any hour.",
    category: "security",
  },
  {
    q: "How do you handle dietary allergies and infant nutrition?",
    a: "Our seasonal kitchen relies on 100% organic, non-GMO foods. We prepare allergen-free meals (gluten-free, nut-free, dairy-free) under the daily supervision of a licensed pediatric dietitian.",
    category: "meals",
  },
  {
    q: "What is your teacher-to-child ratio in the infant nurseries?",
    a: "We maintain an excellent gold-standard ratio of 1 teacher/nurse for every 3 infants (ages 3 to 12 months) and 1 teacher for every 5 toddlers (ages 1 to 3 years) to ensure absolute care and attention.",
    category: "general",
  },
  {
    q: "Do you offer physical secure pickup transport/bus routes?",
    a: "Yes, we operate secure yellow school buses equipped with certified infant car seats, real-time GPS tracking trackers, and emergency responders on board. Bus routes serve a 15-mile campus radius.",
    category: "general",
  },
  {
    q: "Are diaper changes and nap intervals tracked digitally?",
    a: "Absolutely! Caregivers update our parents app in real-time. You receive immediate push notifications whenever your infant has a nap, drink, meal, diaper change, or medical health check.",
    category: "security",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState("all");

  const filteredFaqs =
    filter === "all" ? faqs : faqs.filter((faq) => faq.category === filter);

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafdfd]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#e6fcfc] to-[#fafdfd] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[6%] animate-float" size={40} color="#ed145b" />
          <FloatingCloud className="top-12 right-[12%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={48} color="#f7941e" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-primary/10 text-primary">❓ FAQ Center</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions <br />
              <span className="text-tertiary">Answering Your Main Concerns</span>
            </h1>
            <p className="text-text-primary text-base">
              Explore absolute specifics on child safety protocols, nap routines, specialized pediatric diets, 
              live feeds, and campus enrollment logistics below.
            </p>

            {/* Cat Filters */}
            <div className="flex flex-wrap justify-center gap-2 pt-4">
              {["all", "general", "security", "meals"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilter(cat);
                    setOpenIdx(null);
                    playPopSound();
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    filter === cat
                      ? "bg-primary text-white shadow-md scale-105"
                      : "bg-white text-text-primary border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ACCORDION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIdx === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-150 rounded-3xl bg-bg-soft overflow-hidden hover:border-primary/50 transition-colors"
                  >
                    <button
                      onClick={() => {
                        setOpenIdx(isOpen ? null : index);
                        playPopSound();
                      }}
                      className="w-full px-6 py-5 text-left flex justify-between items-center font-bold text-text-heading text-base md:text-lg focus:outline-none"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      <span>{faq.q}</span>
                      <span className={`text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>
                        ➕
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 pt-2 text-xs md:text-sm text-text-primary leading-relaxed border-t border-gray-100/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Call to action footer */}
            <div className="mt-16 text-center space-y-4 bg-[#fff9f0] border border-[#ffecce] rounded-3xl p-8">
              <span className="text-3xl">🎒</span>
              <h4 className="font-bold text-text-heading text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                Still have questions in mind?
              </h4>
              <p className="text-text-primary text-xs max-w-md mx-auto">
                No worries at all! Reach out to us directly through our contact ticket form or speak to a nursery coordinator today.
              </p>
              <div>
                <motion.a
                  href="/ask-us"
                  onClick={() => playPopSound()}
                  className="btn-primary inline-block py-2.5 px-6 text-xs bg-tertiary border-tertiary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send a Direct Query
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
