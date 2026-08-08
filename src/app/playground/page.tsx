"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const playgroundZones = [
  {
    title: "Cushioned Activity Lawn",
    desc: "A massive, soft cushioned outdoor lawn containing secure slides, colorful crawl tunnels, and soft blocks.",
    img: "/images/outdoor-play.webp",
    safety: "Shockproof Cushions • CCTV Covered",
  },
  {
    title: "Sensory Sandbox Area",
    desc: "Clean organic sand sandbox spaces filled with wood molds, animal shovels, and sensory water wheels.",
    img: "/images/sensory-water-table.webp",
    safety: "100% Non-Toxic Sand • Sterilized Daily",
  },
  {
    title: "Cozy Indoor Toy Studio",
    desc: "Soft plush pillows, wood train tracks, colorful activity boards, and interactive cartoon houses.",
    img: "/images/blocks-building.webp",
    safety: "Antibacterial Air Filtration • Fully Padded",
  },
  {
    title: "Nature Gardening Club",
    desc: "Toddlers learning to plant seeds, hold tiny shovels, and watch green sprouts grow in our organic garden.",
    img: "/images/gardening-club.webp",
    safety: "Organically Maintained Soil • 100% Kid Safe",
  },
];

export default function PlaygroundPage() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <>
      <BubbleTrailCursor />
      <MagicDoodlePad />
      <Header />

      <main className="overflow-hidden bg-[#fafdfa]">
        {/* ── HERO BANNER ── */}
        <section className="relative pt-16 pb-24 bg-gradient-to-b from-[#eaf6ec] to-[#fafdfa] overflow-hidden text-center">
          <FloatingStar className="top-10 left-[8%] animate-float" size={40} color="#1CBBB4" />
          <FloatingCloud className="top-12 right-[10%] animate-float-slow" size={95} />
          <ABCBlocks className="bottom-8 left-[5%] animate-float-slow" size={70} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={50} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">🛹 Outdoor Fun</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Playground & Sensory Yards <br />
              <span className="text-primary">Safe Active Exploration</span>
            </h1>
            <p className="text-text-primary text-base">
              Explore our outdoor climbing zones and sandbox systems. Every single corner is padded with medical-grade 
              shock-absorbing lawn cushions to ensure absolute physical safety.
            </p>
          </div>
        </section>

        {/* ── AREAS SECTION ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {playgroundZones.map((zone, idx) => (
                <motion.div
                  key={zone.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#fafdfa] border border-gray-150 rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => {
                    setSelectedImg(zone.img);
                    playPopSound();
                  }}
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image src={zone.img} alt={zone.title} fill className="object-cover" />
                    <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1 rounded-full text-[10px] font-bold text-text-heading shadow-sm">
                      🔍 Click to Zoom Image
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <span className="text-primary text-[10px] font-bold tracking-widest uppercase block">
                      {zone.safety}
                    </span>
                    <h3
                      className="text-xl font-bold text-text-heading font-[var(--font-heading)]"
                    >
                      {zone.title}
                    </h3>
                    <p className="text-text-primary text-xs leading-relaxed">{zone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIGHTBOX ACCORDION ── */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
              onClick={() => {
                setSelectedImg(null);
                playPopSound();
              }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
              >
                <Image src={selectedImg} alt="Zoomed View" fill className="object-cover" />
                <button
                  className="absolute top-4 right-4 bg-white/95 w-10 h-10 rounded-full font-bold flex items-center justify-center text-text-heading hover:bg-white shadow-md"
                  onClick={() => setSelectedImg(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </>
  );
}
