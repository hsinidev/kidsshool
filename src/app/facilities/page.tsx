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
  WaveDivider,
  MovingCloudsDOM
} from "@/components/decorations/Decorations";

const facilities = [
  {
    title: "Vibrant Learning Classrooms",
    desc: "Cushioned floors, soft circular tables, interactive reading boards, and modular blocks designed for safety.",
    img: "/images/classroom-learning.webp",
    specs: "Air Filtered • Child Height Furniture",
  },
  {
    title: "Sensory Playground & Sandpit",
    desc: "A massive, soft cushioned outdoor playground containing secure slides, tunnels, climbing walls, and sensory pits.",
    img: "/images/outdoor-play.webp",
    specs: "Shockproof Cushions • CCTV Covered",
  },
  {
    title: "Mini Watercolor Arts Corner",
    desc: "Easels, non-toxic colors, watercolor trays, and customized drawing desks for messy creative play.",
    img: "/images/art-class.webp",
    specs: "Washable Safe Paints • Bright Lighting",
  },
  {
    title: "Quiet Cozy Nursery Sleeping Room",
    desc: "Soundproof dark sleeping cribs, white noise machines, and continuous breathing monitors for infant wellness.",
    img: "/images/hero-nursery.webp",
    specs: "Silent Aircon • Individual Cribs",
  },
  {
    title: "Story Books & Quiet Nook",
    desc: "Plush cushions, visual story books catalogs, animal puppets, and a comfortable round rug layout.",
    img: "/images/reading-nook.webp",
    specs: "2000+ Books • Soft Fabric Seats",
  },
  {
    title: "Organic Dietitian Dining Hall",
    desc: "Hygienic open kitchen where fresh purees and baby meals are customized daily.",
    img: "/images/healthy-meals.webp",
    specs: "Sterile Kitchen • Nut-Free Area",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="relative overflow-hidden bg-[#fafbfe]">
        {/* Continuous moving clouds in background */}
        <MovingCloudsDOM />

        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf2fe] to-[#fafbfe] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#f7941e" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={90} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={45} color="#1CBBB4" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-primary/10 text-primary">🏫 Campus Facilities</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Explore Our State-Of-The-Art <br />
              <span className="text-tertiary">Nursery & Learning Facilities</span>
            </h1>
            <p className="text-text-primary text-base">
              Step inside a nursery school designed strictly for high-end pediatric safety, sensory discoverings, 
              and active, happy playtimes.
            </p>
          </div>
        </section>

        {/* ── FACILITIES GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facilities.map((fac, index) => (
                <motion.div
                  key={fac.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => playPopSound()}
                  className="bg-white border border-gray-150 rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image src={fac.img} alt={fac.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold text-text-heading shadow-sm">
                      {fac.specs}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3
                      className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {fac.title}
                    </h3>
                    <p className="text-text-primary text-xs leading-relaxed">{fac.desc}</p>
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
