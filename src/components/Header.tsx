"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MagneticElement } from "@/components/MagicSpells";

interface MegaMenuItem {
  title: string;
  href: string;
  desc?: string;
  img?: string;
}

interface NavLink {
  label: string;
  href: string;
  megaMenu?: MegaMenuItem[];
}

const navLinks: NavLink[] = [
  {
    label: "Home",
    href: "/",
    megaMenu: [
      {
        title: "Home 1 — KidsCool",
        desc: "Playful nursery & daycare landing",
        img: "/images/home1.webp",
        href: "/",
      },
      {
        title: "Home 2 — Play Academy",
        desc: "Interactive early education",
        img: "/images/home2.webp",
        href: "/home2",
      },
      {
        title: "Home 3 — Baby Daycare",
        desc: "Cozy nap & customized care routines",
        img: "/images/home3.webp",
        href: "/home3",
      },
      {
        title: "Home 4 — Kids LMS Portal",
        desc: "Gamified online kids learning",
        img: "/images/home4.webp",
        href: "/home4",
      },
    ]
  },
  {
    label: "LMS Pages",
    href: "/courses-all-types",
    megaMenu: [
      {
        title: "All Courses",
        desc: "Structured early learning programs",
        img: "/images/art-class.webp",
        href: "/courses-all-types",
      },
      {
        title: "Online Classes",
        desc: "Interactive virtual classrooms",
        img: "/images/classroom-learning.webp",
        href: "/classes-all-types",
      },
      {
        title: "Course Categories",
        desc: "Explore subjects and learning spheres",
        img: "/images/reading-nook.webp",
        href: "/course-categories",
      },
      {
        title: "Courses Listing",
        desc: "Filter and find classes for kids",
        img: "/images/teacher-interaction.webp",
        href: "/courses-listing",
      },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    megaMenu: [
      { title: "Online Class", href: "/classes-all-types" },
      { title: "Individual Care", href: "/individual-care" },
      { title: "Child Safety", href: "/child-safety" },
      { title: "Activities", href: "/activities" },
      { title: "Playground", href: "/playground" },
      { title: "Cycling", href: "/playground" },
    ],
  },
  {
    label: "Pages",
    href: "#",
    megaMenu: [
      { title: "Infrastructure Listing", href: "/facilities" },
      { title: "Infrastructure Detail", href: "/playground" },
      { title: "Shop Listing", href: "/courses-all-types" },
      { title: "Shop Detail", href: "/registration" },
      { title: "About Us", href: "/about" },
      { title: "FAQ Center", href: "/faq" },
      { title: "Our Teachers", href: "/team-listing" },
      { title: "Teacher Detail Profile", href: "/team-detail" },
    ],
  },
  { label: "Ask Us", href: "/ask-us" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* ── Top Info Bar ── */}
      <div className="bg-secondary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <PhoneIcon /> +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-2">
              <MailIcon /> contact@hsini.dev
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-2 opacity-80">Follow Us :</span>
            {["facebook", "twitter", "instagram", "youtube"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label={s}
              >
                <SocialIcon name={s} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navigation ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <MagneticElement range={80}>
              <a href="/" className="flex items-center gap-2 shrink-0">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-md">
                  <span className="text-white font-[var(--font-heading)] text-xl font-bold">
                    K
                  </span>
                </div>
                <div className="leading-tight">
                  <span className="font-[var(--font-heading)] text-xl text-text-heading">
                    Kids
                  </span>
                  <span className="font-[var(--font-heading)] text-xl text-primary">
                    Cool
                  </span>
                  <p className="text-[10px] text-text-primary -mt-0.5 tracking-wider uppercase">
                    Learning & Fun
                  </p>
                </div>
              </a>
            </MagneticElement>
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 relative">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className=""
                  onMouseEnter={() =>
                    link.megaMenu ? setActiveMega(link.label) : null
                  }
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <MagneticElement range={40}>
                    <a
                      href={link.href}
                      className="px-4 py-2 rounded-lg text-[15px] font-semibold text-text-heading hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      {link.megaMenu && (
                        <svg
                          className={`w-3.5 h-3.5 transition-transform ${
                            activeMega === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </a>
                  </MagneticElement>
 
                  {/* Mega Menu */}
                  <AnimatePresence>
                    {link.megaMenu && activeMega === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-[32px] shadow-2xl border border-gray-100 p-6 z-50 ${
                          link.label === "Home" || link.label === "Facilities" || link.label === "Pages"
                            ? "w-[920px]"
                            : "w-[520px]"
                        }`}
                      >
                        {link.label === "Home" && (
                          <div className="grid grid-cols-4 gap-4">
                            {link.megaMenu.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="group flex flex-col p-2.5 rounded-2xl hover:bg-bg-soft transition-all duration-300"
                              >
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md border-2 border-transparent group-hover:border-primary group-hover:scale-[1.03] transition-all duration-300 relative bg-bg-soft">
                                  {item.img && (
                                    <Image
                                      src={item.img}
                                      alt={item.title}
                                      fill
                                      sizes="(max-width: 920px) 25vw, 200px"
                                      className="object-cover object-top"
                                    />
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h4 className="font-[var(--font-heading)] font-bold text-sm text-text-heading mt-3.5 group-hover:text-primary transition-colors text-center">
                                  {item.title}
                                </h4>
                                <p className="text-[11px] text-text-primary mt-1 text-center leading-normal px-2">
                                  {item.desc}
                                </p>
                                <span className="w-6 h-0.5 bg-gray-150 group-hover:bg-primary group-hover:w-16 transition-all duration-300 mt-2 mx-auto" />
                              </a>
                            ))}
                          </div>
                        )}

                        {link.label === "LMS Pages" && (
                          <div className="grid grid-cols-2 gap-3">
                            {link.megaMenu.map((item) => (
                              <a
                                key={item.title}
                                href={item.href}
                                className="group flex gap-3 p-3 rounded-xl hover:bg-bg-soft transition-colors"
                              >
                                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 shadow-sm relative">
                                  {item.img && (
                                    <Image
                                      src={item.img}
                                      alt={item.title}
                                      fill
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                  )}
                                </div>
                                <div>
                                  <h4 className="font-bold text-sm text-text-heading group-hover:text-primary transition-colors">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-text-primary mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}

                        {link.label === "Facilities" && (
                          <div className="grid grid-cols-12 gap-8 text-left p-2">
                            {/* Column 1: Facilities List */}
                            <div className="col-span-4 flex flex-col justify-between h-[360px]">
                              <div>
                                <h3 className="font-[var(--font-heading)] text-xl text-text-heading font-bold flex flex-col">
                                  Facilities Available
                                  <WavyUnderline color="#FBBF24" />
                                </h3>
                                <ul className="mt-6 space-y-3 font-semibold text-text-primary text-[15px]">
                                  {[
                                    { title: "Online Class", href: "/classes-all-types" },
                                    { title: "Individual Care", href: "/individual-care" },
                                    { title: "Child Safety", href: "/child-safety" },
                                    { title: "Activities", href: "/activities" },
                                    { title: "Playground", href: "/playground" },
                                    { title: "Cycling", href: "/playground" },
                                  ].map((item) => (
                                    <li key={item.title}>
                                      <a
                                        href={item.href}
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                      >
                                        <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">—</span>
                                        {item.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="w-full flex justify-center -mb-2 mt-4">
                                <RainbowKidsSVG />
                              </div>
                            </div>

                            {/* Column 2: KidsArts Showcase */}
                            <div className="col-span-4 relative h-[360px] rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group">
                              <div className="absolute inset-0 bg-sky-100/60 z-0">
                                <Image
                                  src="/images/art-class.webp"
                                  alt="KidsArts Learning Center"
                                  fill
                                  sizes="(max-width: 920px) 33vw, 280px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                              </div>

                              <div className="absolute inset-0 z-10 p-5 flex flex-col justify-between text-white">
                                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md self-start px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                                  🎨 KidsArts
                                </div>

                                <div className="mt-auto mb-4">
                                  <h4 className="font-[var(--font-heading)] text-2xl font-bold leading-tight drop-shadow-md">
                                    OPEN FOR ADMISSIONS
                                  </h4>
                                  <ul className="mt-3 space-y-1 text-xs font-medium text-white/90 drop-shadow-sm">
                                    <li className="flex items-center gap-1.5">
                                      <span className="text-emerald-400">✓</span> Nulla varius enim ut massa.
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                      <span className="text-emerald-400">✓</span> Aliquam efficitur elit eget.
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                      <span className="text-emerald-400">✓</span> Curabitur blandit mauris.
                                    </li>
                                    <li className="flex items-center gap-1.5">
                                      <span className="text-emerald-400">✓</span> Fusce dignissim lorem eget.
                                    </li>
                                  </ul>
                                </div>

                                <div className="flex justify-between items-center">
                                  <span className="text-[11px] uppercase tracking-wider text-white/70">learning center</span>
                                  <div className="bg-yellow-400 text-black font-[var(--font-heading)] font-bold text-xs px-3 py-1.5 rounded-lg shadow-md -rotate-6 hover:rotate-0 transition-transform duration-300">
                                    NEW SCHOOL
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Column 3: Discount Showcase */}
                            <div className="col-span-4 relative h-[360px] rounded-[24px] overflow-hidden shadow-lg border border-gray-100 group">
                              <div className="absolute inset-0 bg-yellow-50 z-0">
                                <Image
                                  src="/images/classroom-learning.webp"
                                  alt="Early Bird Offer"
                                  fill
                                  sizes="(max-width: 920px) 33vw, 280px"
                                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                              </div>

                              <div className="absolute inset-0 z-10 p-5 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                  <div className="bg-rose-500 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full tracking-wider shadow">
                                    SPECIAL OFFER
                                  </div>
                                  <div className="relative w-20 h-20 flex items-center justify-center -mr-2 -mt-2 animate-pulse">
                                    <svg className="absolute w-full h-full text-yellow-400 drop-shadow-md" viewBox="0 0 100 100">
                                      <circle cx="50" cy="50" r="42" fill="currentColor" />
                                      <circle cx="50" cy="50" r="38" fill="none" stroke="white" strokeWidth="2" strokeDasharray="5 3" />
                                    </svg>
                                    <div className="z-10 text-center flex flex-col items-center leading-none text-black">
                                      <span className="font-extrabold text-[10px] tracking-tighter uppercase">DISCOUNT</span>
                                      <span className="font-[var(--font-heading)] font-black text-2xl">50%</span>
                                    </div>
                                  </div>
                                </div>

                                <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                  <div className="absolute top-24 left-8 animate-bounce w-8 h-8 text-indigo-400">
                                    <PencilIcon />
                                  </div>
                                  <div className="absolute bottom-20 right-10 animate-bounce w-8 h-8 text-rose-400" style={{ animationDelay: "0.2s" }}>
                                    <GraduationCapIcon />
                                  </div>
                                  <div className="absolute top-36 right-8 animate-pulse w-6 h-6 text-yellow-400">
                                    <SparkleIcon />
                                  </div>
                                </div>

                                <div className="mt-auto text-white">
                                  <h4 className="font-[var(--font-heading)] text-xl font-bold leading-tight drop-shadow-md">
                                    Early Bird Offer
                                  </h4>
                                  <p className="text-xs text-white/95 mt-1 font-medium drop-shadow-sm">
                                    Register today to secure your child's spot and specialized kit!
                                  </p>
                                  <a
                                    href="/registration"
                                    className="inline-flex items-center gap-1 mt-3 bg-white text-primary font-bold text-xs px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all shadow"
                                  >
                                    Enroll Now
                                    <span>→</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {link.label === "Pages" && (
                          <div className="grid grid-cols-12 gap-8 text-left p-2">
                            {/* Column 1: Infrastructure */}
                            <div className="col-span-3 flex flex-col justify-between h-[360px]">
                              <div>
                                <h3 className="font-[var(--font-heading)] text-lg text-text-heading font-bold flex flex-col">
                                  Infrastructure
                                  <WavyUnderline color="#F97316" />
                                </h3>
                                <ul className="mt-6 space-y-3 font-semibold text-text-primary text-[14px]">
                                  {[
                                    { title: "Infrastructure Listing", href: "/facilities" },
                                    { title: "Infrastructure Detail", href: "/playground" },
                                  ].map((item) => (
                                    <li key={item.title}>
                                      <a
                                        href={item.href}
                                        className="hover:text-primary transition-colors flex items-center gap-2 group"
                                      >
                                        <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">—</span>
                                        {item.title}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="w-full flex justify-center -mb-2 mt-4">
                                <HandstandKidSVG />
                              </div>
                            </div>

                            {/* Column 2: Shop */}
                            <div className="col-span-3 h-[360px]">
                              <h3 className="font-[var(--font-heading)] text-lg text-text-heading font-bold flex flex-col">
                                Shop
                                <WavyUnderline color="#F97316" />
                              </h3>
                              <ul className="mt-6 space-y-3 font-semibold text-text-primary text-[14px]">
                                {[
                                  { title: "Shop Listing", href: "/courses-all-types" },
                                  { title: "Shop Detail", href: "/registration" },
                                  { title: "Cart", href: "/registration" },
                                  { title: "Wishlist", href: "#" },
                                  { title: "My Account", href: "#" },
                                ].map((item) => (
                                  <li key={item.title}>
                                    <a
                                      href={item.href}
                                      className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                      <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">—</span>
                                      {item.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 3: Other */}
                            <div className="col-span-3 h-[360px]">
                              <h3 className="font-[var(--font-heading)] text-lg text-text-heading font-bold flex flex-col">
                                Other
                                <WavyUnderline color="#F97316" />
                              </h3>
                              <ul className="mt-6 space-y-3 font-semibold text-text-primary text-[14px]">
                                {[
                                  { title: "About", href: "/about" },
                                  { title: "FAQ", href: "/faq" },
                                  { title: "Team Listing", href: "/team-listing" },
                                  { title: "Team Detail", href: "/team-detail" },
                                  { title: "404 Page", href: "/not-found" },
                                ].map((item) => (
                                  <li key={item.title}>
                                    <a
                                      href={item.href}
                                      className="hover:text-primary transition-colors flex items-center gap-2 group"
                                    >
                                      <span className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all">—</span>
                                      {item.title}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Column 4: Tall Preview Image Showcase Card */}
                            <div className="col-span-3 h-[360px] rounded-[24px] overflow-hidden shadow-lg border border-gray-150 relative group bg-gray-50 flex flex-col">
                              <div className="w-full h-full relative overflow-hidden bg-rose-50 flex-1">
                                <Image
                                  src="/images/pages_preview.webp"
                                  alt="Hsini Daycare Kids"
                                  fill
                                  sizes="(max-width: 920px) 25vw, 200px"
                                  className="object-cover object-center group-hover:scale-[1.04] transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                                
                                <div className="absolute bottom-4 inset-x-4 text-white z-10">
                                  <span className="text-[10px] font-extrabold uppercase tracking-wider bg-primary/95 text-white px-2 py-0.5 rounded-full shadow">
                                    Campus Life
                                  </span>
                                  <h4 className="font-[var(--font-heading)] font-bold text-sm mt-1.5 drop-shadow-md">
                                    Joyful Learning
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button className="hidden md:flex w-10 h-10 rounded-full items-center justify-center hover:bg-gray-100 transition" aria-label="Search">
                <svg className="w-5 h-5 text-text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="hidden md:flex w-10 h-10 rounded-full items-center justify-center hover:bg-gray-100 transition relative" aria-label="Cart">
                <svg className="w-5 h-5 text-text-heading" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-primary text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <a
                href="#newsletter"
                className="hidden md:inline-flex btn-primary text-sm py-2.5 px-6"
              >
                Register Now
              </a>

              {/* Mobile Hamburger */}
              <button
                className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-100"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <span
                    className={`block w-6 h-0.5 bg-text-heading transition-all ${
                      mobileOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-text-heading transition-all ${
                      mobileOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`block w-6 h-0.5 bg-text-heading transition-all ${
                      mobileOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white border-t"
            >
              <nav className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label} className="border-b border-gray-50 pb-2 last:border-0 last:pb-0">
                    <a
                      href={link.href}
                      className="block px-4 py-2.5 rounded-xl font-bold text-[16px] text-text-heading hover:bg-gray-50"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                    {link.megaMenu && (
                      <div className="pl-6 space-y-1 mt-1 grid grid-cols-2 gap-2">
                        {link.megaMenu.map((item) => (
                          <a
                            key={item.title}
                            href={item.href}
                            className="block px-3 py-2 text-xs font-semibold text-text-primary hover:text-primary hover:bg-gray-50 rounded-lg"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="#newsletter"
                  className="block btn-primary text-center mt-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Register Now
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

/* ── Tiny icon helpers ── */
function PhoneIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
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
    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
      <path d={paths[name] || ""} />
    </svg>
  );
}

/* ── Custom Mega Menu Decoration Helpers ── */
function WavyUnderline({ color = "#F97316" }: { color?: string }) {
  return (
    <svg className="w-32 h-2 mt-1.5 text-orange-500" viewBox="0 0 120 10" preserveAspectRatio="none" style={{ color }}>
      <path
        d="M0,5 C10,1 20,9 30,5 C40,1 50,9 60,5 C70,1 80,9 90,5 C100,1 110,9 120,5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RainbowKidsSVG() {
  return (
    <svg className="w-56 h-28 select-none pointer-events-none" viewBox="0 0 200 100" fill="none">
      {/* Rainbow */}
      <path d="M30 90 A70 70 0 0 1 170 90" stroke="#EF4444" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M40 90 A60 60 0 0 1 160 90" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M50 90 A50 50 0 0 1 150 90" stroke="#10B981" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M60 90 A40 40 0 0 1 140 90" stroke="#3B82F6" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.8" />
      
      {/* Sun */}
      <circle cx="25" cy="25" r="14" fill="#FBBF24" />
      {/* Sun rays */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 25 + 18 * Math.cos(angle);
        const y1 = 25 + 18 * Math.sin(angle);
        const x2 = 25 + 24 * Math.cos(angle);
        const y2 = 25 + 24 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FBBF24"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        );
      })}

      {/* Cloud */}
      <path
        d="M150 25 C145 25, 140 30, 140 35 C135 35, 130 40, 130 46 C130 52, 135 57, 142 57 L168 57 C174 57, 178 52, 178 46 C178 40, 174 35, 168 35 C168 30, 163 25, 158 25 Z"
        fill="#EFF6FF"
        stroke="#DBEAFE"
        strokeWidth="2"
      />
      
      {/* Happy kids stick figures */}
      <g transform="translate(65, 55)">
        <circle cx="15" cy="12" r="6" fill="#F43F5E" />
        <path d="M15 18 L15 32" stroke="#F43F5E" strokeWidth="3" strokeLinecap="round" />
        <path d="M5 22 Q15 15 25 22" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 32 L8 42" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 32 L22 42" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(100, 52)">
        <circle cx="15" cy="12" r="6" fill="#10B981" />
        <path d="M15 18 L15 32" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
        <path d="M5 14 Q15 22 25 14" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 32 L9 42" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M15 32 L21 42" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      {/* Grass base */}
      <rect x="0" y="90" width="200" height="10" fill="#10B981" rx="5" />
      <path d="M15 90 L18 82 L21 90 M40 90 L42 80 L45 90 M180 90 L183 83 L186 90" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function HandstandKidSVG() {
  return (
    <svg className="w-48 h-28 select-none pointer-events-none" viewBox="0 0 160 100" fill="none">
      <path d="M10 90 L150 90" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
      <g transform="translate(65, 10)">
        <path d="M10 80 L10 70 M20 80 L20 70" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M10 70 L15 50 M20 70 L15 50" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="15" cy="62" r="7.5" fill="#3B82F6" />
        <path d="M15 69.5 L15 74" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 50 L15 25" stroke="#3B82F6" strokeWidth="4.5" strokeLinecap="round" />
        <line x1="12" y1="42" x2="18" y2="42" stroke="#FBBF24" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="12" y1="34" x2="18" y2="34" stroke="#EF4444" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M15 25 L-2 8" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M15 25 L32 8" stroke="#3B82F6" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="-2" cy="7" r="4.5" fill="#F43F5E" />
        <circle cx="32" cy="7" r="4.5" fill="#F43F5E" />
      </g>
      <g className="text-yellow-400">
        <path d="M35 30 L37 36 L43 36 L38 40 L40 46 L35 42 L30 46 L32 40 L27 36 L33 36 Z" fill="currentColor" />
        <path d="M125 45 L127 49 L132 49 L128 52 L129 56 L125 53 L121 56 L122 52 L118 49 L123 49 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
    </svg>
  );
}
