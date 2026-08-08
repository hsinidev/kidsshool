"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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

const courseTypes = [
  {
    title: "Recorded Interactive Video Streams",
    desc: "Coded visual animations that pause for interactive math or vocabulary clicks. Perfect for slow independent schedules.",
    img: "/images/reading-nook.webp",
    tag: "Flexible E-Learning",
    color: "primary",
  },
  {
    title: "Live Virtual Kid-Rooms",
    desc: "Interactive group classes led by early education counselors on Zoom, covering story puppet sessions.",
    img: "/images/classroom-learning.webp",
    tag: "Zoom Group Sessions",
    color: "tertiary",
  },
  {
    title: "On-Campus Physical Workshops",
    desc: "Messy watercolor painting hours, seed gardening days, sandbox construction setups physically held at our facility.",
    img: "/images/art-class.webp",
    tag: "On-Campus Physical",
    color: "accent",
  },
];

export default function CoursesAllTypesPage() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#FAFDFD]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf6ec] to-[#FAFDFD] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#1CBBB4" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">📂 All Streams</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Multi-Type Educational Streams <br />
              <span className="text-primary">Recorded, Live & Physical Modes</span>
            </h1>
          </div>
        </section>

        {/* ── TYPES SECTION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="space-y-12">
              {courseTypes.map((type, idx) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center border border-gray-150 rounded-[40px] p-8 md:p-12 hover:shadow-xl transition-all ${
                    idx % 2 === 0 ? "lg:flex-row-reverse bg-[#fffbf9]" : "bg-[#fafdfd]"
                  }`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-1/2 h-[260px] md:h-[320px] rounded-[30px] overflow-hidden shadow-md">
                    <Image src={type.img} alt={type.title} fill className="object-cover" />
                  </div>

                  {/* Text */}
                  <div className="w-full lg:w-1/2 space-y-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${
                      type.color === "primary" ? "bg-primary/10 text-primary" :
                      type.color === "tertiary" ? "bg-tertiary/10 text-tertiary" : "bg-accent/10 text-accent"
                    }`}>
                      {type.tag}
                    </span>
                    <h3
                      className="text-2xl sm:text-3xl font-bold text-text-heading"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {type.title}
                    </h3>
                    <p className="text-text-primary text-sm leading-relaxed">{type.desc}</p>
                    <div className="pt-2">
                      <motion.a
                        href="/registration"
                        onClick={() => playPopSound()}
                        className="btn-primary inline-block py-2.5 px-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Enroll Now
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
