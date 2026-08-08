"use client";

import React from "react";
import Image from "next/image";

const quickLinks = [
  "About Hsini",
  "Our Team",
  "News Feed",
  "Infrastructure",
];

const moreLinks = ["F.A.Q", "Contact Us", "Privacy Policy", "Terms of Service"];

const galleryImages = [
  "/images/classroom-learning.webp",
  "/images/art-class.webp",
  "/images/outdoor-play.webp",
  "/images/healthy-meals.webp",
  "/images/sensory-play.webp",
  "/images/reading-nook.webp",
];

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white overflow-hidden">
      {/* Decorative top curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px]"
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,30 1440,35 L1440,0 L0,0 Z"
            fill="#fef6f0"
          />
        </svg>
      </div>

      {/* Cute character decoration */}
      <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 z-10">
        <div className="w-16 h-16 rounded-full bg-tertiary flex items-center justify-center shadow-lg text-2xl">
          😊
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Column 1: Logo & Info */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-md">
                <span className="text-white font-[var(--font-heading)] text-xl font-bold">
                  K
                </span>
              </div>
              <div className="leading-tight">
                <span
                  className="text-xl text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Kids
                </span>
                <span
                  className="text-xl text-tertiary"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Cool
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Nurturing young minds through creative play, expert care, and
              innovative learning. Your child&apos;s bright future starts here at Hsini
              KidsCool.
            </p>
            <div className="flex gap-2">
              {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={s}
                >
                  <SocialIcon name={s} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="text-lg font-bold mb-5 text-white relative inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              About Hsini
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-tertiary transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3 text-primary shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: More Links */}
          <div>
            <h4
              className="text-lg font-bold mb-5 text-white relative inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <ul className="space-y-3">
              {moreLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/70 text-sm hover:text-tertiary transition-colors flex items-center gap-2"
                  >
                    <svg
                      className="w-3 h-3 text-primary shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Gallery */}
          <div>
            <h4
              className="text-lg font-bold mb-5 text-white relative inline-block"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-primary rounded-full" />
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative h-16 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="80px"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment & Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              Copyright © 2025 Hsini KidsCool by{" "}
              <a href="mailto:contact@hsini.dev" className="text-tertiary hover:underline">
                contact@hsini.dev
              </a>
              . All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              {["VISA", "MC", "AMEX", "PP"].map((card) => (
                <div
                  key={card}
                  className="w-12 h-7 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold text-white/60"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sleek Dark Developer Credit Bar */}
      <div className="w-full bg-[#050506] border-t border-white/5 py-5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left: Avatar & Title */}
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <Image
                src="/images/hsini.webp"
                alt="Hsini Mohamed - Lead Systems Architect & Developer"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Lead Systems Architect & Developer
              </span>
              <span className="text-sm md:text-base font-bold text-white uppercase tracking-wide">
                Hsini Mohamed
              </span>
            </div>
          </div>

          {/* Right: Interactive Contact Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-white/70">
            <a
              href="https://hsini.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              <span className="border-b border-transparent group-hover:border-emerald-400/50 pb-0.5 transition-colors">hsini.dev</span>
            </a>

            <a
              href="mailto:contact@hsini.dev"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="border-b border-transparent group-hover:border-emerald-400/50 pb-0.5 transition-colors">contact@hsini.dev</span>
            </a>

            <a
              href="https://github.com/hsinidev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span className="border-b border-transparent group-hover:border-emerald-400/50 pb-0.5 transition-colors">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/hsinidev/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
            >
              <svg
                className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span className="border-b border-transparent group-hover:border-emerald-400/50 pb-0.5 transition-colors">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, string> = {
    facebook: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
    twitter: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
    instagram: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 01-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 017.8 2zm-.2 2A3.6 3.6 0 004 7.6v8.8A3.6 3.6 0 007.6 20h8.8a3.6 3.6 0 003.6-3.6V7.6A3.6 3.6 0 0016.4 4H7.6zm9.65 1.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z",
    youtube: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
  };
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name] || ""} />
    </svg>
  );
}
