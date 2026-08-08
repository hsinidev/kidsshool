"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DottedPath, FloatingStar, GrassDivider } from "./decorations/Decorations";

const teachers = [
  {
    name: "Sarah Michelle",
    role: "Head Teacher — Early Years",
    img: "/images/teacher-sarah.webp",
    bio: "Passionate educator with 10+ years nurturing young minds through creative and play-based learning.",
    socials: ["facebook", "twitter", "youtube"],
  },
  {
    name: "James Anderson",
    role: "STEM & Nature Educator",
    img: "/images/teacher-james.webp",
    bio: "Bringing science alive for little learners through hands-on experiments and outdoor nature exploration.",
    socials: ["facebook", "twitter", "youtube"],
  },
  {
    name: "Emily Grace",
    role: "Art & Music Teacher",
    img: "/images/teacher-emily.webp",
    bio: "Inspiring creativity in every child through art, music, and movement-based learning activities.",
    socials: ["facebook", "twitter", "youtube"],
  },
];

export default function TeachersSection() {
  return (
    <>
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorations */}
        <FloatingStar className="top-16 right-[8%] animate-float" size={35} color="#ed145b" />
        <DottedPath className="top-[35%] left-[15%] hidden lg:block" />
        <DottedPath className="top-[35%] right-[15%] hidden lg:block" />

        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="section-label">⭐ Meet Our Professional</span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl mt-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Teachers &{" "}
              <span className="text-primary">Trainers</span>
            </h2>
            <p className="mt-4 text-text-primary max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Our experienced, passionate teachers create a warm and stimulating environment where every
              child can thrive and reach their full potential.
            </p>
          </motion.div>

          {/* Teacher Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {teachers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="text-center group"
              >
                {/* Portrait */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Decorative ring */}
                  <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary/20 group-hover:border-primary/50 transition-colors duration-500 group-hover:animate-spin-slow" />
                  <div className="absolute inset-2 rounded-full overflow-hidden shadow-xl">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="192px"
                    />
                  </div>
                </div>

                <h3
                  className="text-xl font-bold text-primary mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {t.name}
                </h3>
                <p className="text-sm text-accent font-semibold mb-3">
                  {t.role}
                </p>
                <p className="text-sm text-text-primary leading-relaxed mb-4 max-w-xs mx-auto">
                  {t.bio}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-2">
                  {t.socials.map((s) => (
                    <motion.a
                      key={s}
                      href="#"
                      className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.15, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={s}
                    >
                      <SocialIcon name={s} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grass Divider */}
      <GrassDivider />
    </>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    twitter: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    youtube: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
  };
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name] || ""} />
    </svg>
  );
}
