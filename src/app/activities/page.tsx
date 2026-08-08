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
  Rainbow,
  WaveDivider
} from "@/components/decorations/Decorations";

const activities = [
  {
    title: "Sensory Sandbox Discovery",
    desc: "Digging and sorting using organic sensory sands, sea molds, and wood chips that refine fingers motor nerves.",
    img: "/images/sensory-water-table.webp",
    schedule: "Every morning 09:00 AM",
    color: "primary",
  },
  {
    title: "Interactive Story Circle",
    desc: "Reading aloud classic cartoon books with animal puppets, encouraging vocal responses and phonics correlation.",
    img: "/images/storytelling-circle.webp",
    schedule: "Daily 11:00 AM",
    color: "tertiary",
  },
  {
    title: "Mini Puppetry & Drama Studio",
    desc: "Acting out folklore tales in a miniature puppet theater setup that builds high vocabulary and social self-assurance.",
    img: "/images/puppet-theater.webp",
    schedule: "Tuesdays & Thursdays",
    color: "accent",
  },
  {
    title: "Spacious Outdoor Lawns",
    desc: "Bouncing balls, climbing safe structures, running on soft lawns that exhaust excessive energies safely.",
    img: "/images/gymnastics-play.webp",
    schedule: "Every afternoon 03:00 PM",
    color: "primary",
  },
  {
    title: "Preschool Science Lab",
    desc: "Mixing water colors, matching magnetic poles, discovering plant growth loops under active instructions.",
    img: "/images/stem-science.webp",
    schedule: "Wednesdays & Fridays",
    color: "tertiary",
  },
  {
    title: "Vocal Music & Nursery Rythms",
    desc: "Tapping wooden drums, singalong loops, and dancing designed specifically for basic body balances.",
    img: "/images/music-class.webp",
    schedule: "Fridays 10:00 AM",
    color: "accent",
  },
];

export default function ActivitiesPage() {
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
          <Rainbow className="bottom-8 left-[4%] animate-float-slow" size={110} />
          <FloatingPlanet className="bottom-12 right-[8%] animate-float" size={50} color="#ed145b" />

          <div className="max-w-3xl mx-auto px-4 md:px-6 space-y-6">
            <span className="section-label bg-[#7dc242]/15 text-[#5ba830] font-bold">🤸 Extra Activities</span>
            <h1
              className="text-4xl sm:text-5xl font-bold text-text-heading leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Extracurricular Activities <br />
              <span className="text-primary">That Spark Ultimate Fun!</span>
            </h1>
            <p className="text-text-primary text-base">
              Explore our diverse extracurricular schedule. From sandbox sensory discovering to colorful painting labs, 
              we keep children active, safe, and continuously thinking.
            </p>
          </div>
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="py-20 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((act, index) => (
                <motion.div
                  key={act.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => playPopSound()}
                  className="bg-white border border-gray-100 rounded-[35px] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="relative h-[220px] w-full overflow-hidden">
                    <Image src={act.img} alt={act.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <span className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-text-heading shadow-sm">
                      🕒 {act.schedule}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3
                      className="text-xl font-bold text-text-heading group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {act.title}
                    </h3>
                    <p className="text-text-primary text-xs leading-relaxed">{act.desc}</p>
                    <div className="pt-2">
                      <span className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full ${
                        act.color === "primary" ? "bg-primary/10 text-primary" :
                        act.color === "tertiary" ? "bg-tertiary/10 text-tertiary" : "bg-accent/10 text-accent"
                      }`}>
                        Preschool Approved
                      </span>
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
