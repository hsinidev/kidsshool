"use client";

import React from "react";

/* ─────────────── Floating Star ─────────────── */
export function FloatingStar({
  className = "",
  size = 60,
  color = "#f7941e",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
    >
      <path
        d="M30 4l6.9 14 15.4 2.2-11.2 10.9 2.6 15.3L30 39.4l-13.7 7 2.6-15.3L7.7 20.2 23.1 18z"
        fill={color}
        opacity={0.85}
      />
      {/* Trail */}
      <circle cx="12" cy="8" r="3" fill={color} opacity={0.3} />
      <circle cx="8" cy="16" r="2" fill={color} opacity={0.2} />
    </svg>
  );
}

/* ─────────────── Floating Planet ─────────────── */
export function FloatingPlanet({
  className = "",
  size = 70,
  color = "#1CBBB4",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
    >
      <circle cx="35" cy="35" r="18" fill={color} opacity={0.8} />
      <ellipse
        cx="35"
        cy="35"
        rx="30"
        ry="8"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        opacity={0.5}
        transform="rotate(-20 35 35)"
      />
      {/* Spots */}
      <circle cx="28" cy="30" r="3" fill="#ffffff" opacity={0.3} />
      <circle cx="40" cy="38" r="2" fill="#ffffff" opacity={0.2} />
    </svg>
  );
}

/* ─────────────── Floating Cloud ─────────────── */
export function FloatingCloud({
  className = "",
  size = 100,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size * 0.5}
      viewBox="0 0 120 60"
      fill="none"
    >
      <ellipse cx="60" cy="40" rx="50" ry="18" fill="#ffffff" opacity={0.7} />
      <ellipse cx="40" cy="30" rx="25" ry="20" fill="#ffffff" opacity={0.8} />
      <ellipse cx="75" cy="28" rx="22" ry="18" fill="#ffffff" opacity={0.75} />
      <ellipse cx="55" cy="22" rx="18" ry="16" fill="#ffffff" opacity={0.85} />
    </svg>
  );
}

/* ─────────────── Floating Rocket ─────────────── */
export function FloatingRocket({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
    >
      {/* Body */}
      <path
        d="M40 10c-6 8-10 22-10 35h20c0-13-4-27-10-35z"
        fill="#ed145b"
        opacity={0.9}
      />
      {/* Window */}
      <circle cx="40" cy="30" r="5" fill="#ffffff" opacity={0.9} />
      <circle cx="40" cy="30" r="3" fill="#87CEEB" opacity={0.8} />
      {/* Fins */}
      <path d="M30 45l-8 12h8z" fill="#f7941e" opacity={0.8} />
      <path d="M50 45l8 12h-8z" fill="#f7941e" opacity={0.8} />
      {/* Exhaust */}
      <ellipse cx="37" cy="52" rx="2" ry="4" fill="#f7941e" opacity={0.6} />
      <ellipse cx="43" cy="54" rx="2" ry="5" fill="#ff6b35" opacity={0.5} />
      <ellipse cx="40" cy="58" rx="3" ry="4" fill="#ffd700" opacity={0.4} />
      {/* Stars */}
      <circle cx="15" cy="20" r="1.5" fill="#f7941e" opacity={0.5} />
      <circle cx="65" cy="15" r="1" fill="#f7941e" opacity={0.4} />
      <circle cx="60" cy="60" r="1.5" fill="#1CBBB4" opacity={0.3} />
    </svg>
  );
}

/* ─────────────── Floating Pencil ─────────────── */
export function FloatingPencil({
  className = "",
  size = 60,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      style={{ transform: "rotate(-30deg)" }}
    >
      {/* Body */}
      <rect x="25" y="8" width="10" height="35" rx="1" fill="#f7941e" />
      {/* Tip */}
      <polygon points="25,43 35,43 30,55" fill="#ffe0b2" />
      <polygon points="28,48 32,48 30,55" fill="#333" />
      {/* Eraser */}
      <rect x="25" y="5" width="10" height="6" rx="2" fill="#ed145b" />
      {/* Stripe */}
      <rect x="25" y="18" width="10" height="3" fill="#e67e00" opacity={0.5} />
    </svg>
  );
}

/* ─────────────── Wave Divider ─────────────── */
export function WaveDivider({
  className = "",
  color = "#ffffff",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${className}`}
      style={flip ? { transform: "rotate(180deg)" } : {}}
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[80px]"
      >
        <path
          d="M0,40 C360,100 720,0 1080,60 C1260,80 1380,40 1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ─────────────── Grass Divider ─────────────── */
export function GrassDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[80px] md:h-[120px]"
      >
        {/* Background hill */}
        <path
          d="M0,80 Q360,20 720,60 Q1080,100 1440,40 L1440,120 L0,120 Z"
          fill="#7dc242"
        />
        {/* Foreground hill */}
        <path
          d="M0,90 Q240,50 480,75 Q720,100 960,65 Q1200,30 1440,70 L1440,120 L0,120 Z"
          fill="#5ba830"
        />
        {/* Flowers */}
        {[120, 280, 450, 620, 780, 950, 1100, 1280].map((x, i) => (
          <circle
            key={i}
            cx={x}
            cy={75 + Math.sin(i * 1.5) * 10}
            r="3"
            fill={i % 2 === 0 ? "#ed145b" : "#f7941e"}
            opacity={0.8}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─────────────── Dotted Path ─────────────── */
export function DottedPath({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
    >
      <path
        d="M10 70 Q40 10 70 40"
        stroke="#ccc"
        strokeWidth="2"
        strokeDasharray="4 4"
        fill="none"
      />
      <polygon points="68,36 74,42 66,44" fill="#ccc" />
    </svg>
  );
}

/* ─────────────── ABC Blocks ─────────────── */
export function ABCBlocks({
  className = "",
  size = 70,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size}
      viewBox="0 0 70 70"
      fill="none"
    >
      <rect x="5" y="30" width="25" height="25" rx="3" fill="#ed145b" opacity={0.8} />
      <text x="17.5" y="48" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="var(--font-heading)">A</text>
      <rect x="22" y="15" width="25" height="25" rx="3" fill="#1CBBB4" opacity={0.8} />
      <text x="34.5" y="33" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="var(--font-heading)">B</text>
      <rect x="40" y="35" width="25" height="25" rx="3" fill="#f7941e" opacity={0.8} />
      <text x="52.5" y="53" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="var(--font-heading)">C</text>
    </svg>
  );
}

/* ─────────────── Rainbow ─────────────── */
export function Rainbow({
  className = "",
  size = 100,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill="none"
    >
      <path d="M10 55 Q50 -10 90 55" stroke="#ed145b" strokeWidth="4" fill="none" opacity={0.6} />
      <path d="M15 55 Q50 -2 85 55" stroke="#f7941e" strokeWidth="4" fill="none" opacity={0.6} />
      <path d="M20 55 Q50 6 80 55" stroke="#ffd700" strokeWidth="4" fill="none" opacity={0.6} />
      <path d="M25 55 Q50 14 75 55" stroke="#7dc242" strokeWidth="4" fill="none" opacity={0.6} />
      <path d="M30 55 Q50 22 70 55" stroke="#1CBBB4" strokeWidth="4" fill="none" opacity={0.6} />
    </svg>
  );
}

/* ─────────────── UFO ─────────────── */
export function FloatingUFO({
  className = "",
  size = 70,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width={size}
      height={size * 0.7}
      viewBox="0 0 70 50"
      fill="none"
    >
      <ellipse cx="35" cy="30" rx="30" ry="8" fill="#7dc242" opacity={0.7} />
      <ellipse cx="35" cy="25" rx="15" ry="12" fill="#1CBBB4" opacity={0.8} />
      <ellipse cx="35" cy="20" rx="8" ry="8" fill="#87CEEB" opacity={0.6} />
      {/* Lights */}
      <circle cx="18" cy="32" r="2" fill="#ffd700" opacity={0.8} />
      <circle cx="35" cy="35" r="2" fill="#ffd700" opacity={0.8} />
      <circle cx="52" cy="32" r="2" fill="#ffd700" opacity={0.8} />
      {/* Beam */}
      <path d="M28 38 L22 48 L48 48 L42 38" fill="#ffd700" opacity={0.15} />
    </svg>
  );
}

/* ─────────────── Interactive Moving Clouds DOM ─────────────── */
export function MovingCloudsDOM() {
  const clouds = [
    { id: 1, top: "8%", speed: 75, delay: -12, scale: 0.85, opacity: 0.25 },
    { id: 2, top: "18%", speed: 110, delay: -45, scale: 1.4, opacity: 0.15 },
    { id: 3, top: "28%", speed: 50, delay: -28, scale: 0.7, opacity: 0.35 },
    { id: 4, top: "42%", speed: 95, delay: -85, scale: 1.1, opacity: 0.2 },
    { id: 5, top: "55%", speed: 65, delay: -15, scale: 0.95, opacity: 0.3 },
    { id: 6, top: "68%", speed: 120, delay: -60, scale: 1.5, opacity: 0.12 },
    { id: 7, top: "78%", speed: 55, delay: -38, scale: 0.65, opacity: 0.32 },
    { id: 8, top: "88%", speed: 85, delay: -105, scale: 1.2, opacity: 0.18 },
    { id: 9, top: "15%", speed: 80, delay: -95, scale: 0.75, opacity: 0.28 },
    { id: 10, top: "62%", speed: 70, delay: -50, scale: 1.0, opacity: 0.22 },
  ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute left-0 animate-cloud-drift"
          style={{
            top: cloud.top,
            animationDuration: `${cloud.speed}s`,
            animationDelay: `${cloud.delay}s`,
            transform: `scale(${cloud.scale})`,
            opacity: cloud.opacity,
          }}
        >
          <svg
            width="160"
            height="80"
            viewBox="0 0 120 60"
            fill="none"
            className="filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.02)]"
          >
            <ellipse cx="60" cy="40" rx="50" ry="18" fill="#ffffff" />
            <ellipse cx="40" cy="30" rx="25" ry="20" fill="#ffffff" />
            <ellipse cx="75" cy="28" rx="22" ry="18" fill="#ffffff" />
            <ellipse cx="55" cy="22" rx="18" ry="16" fill="#ffffff" />
          </svg>
        </div>
      ))}
    </div>
  );
}

