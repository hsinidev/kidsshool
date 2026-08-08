"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// ── Web Audio API Synthesizer for Bubble Pop ──
export function playPopSound() {
  if (typeof window === "undefined") return;
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Bubble pop synthesizer
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = "sine";
    // Quick sweep up in frequency feels like a pop
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);
    
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Audio context blocked or unsupported
  }
}

// ── Magnetic Button / Element Wrapper ──
export function MagneticElement({ children, range = 50 }: { children: React.ReactNode; range?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 15, mass: 0.6 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < range) {
      // Pull element toward mouse proportional to proximity
      const pull = 0.35;
      x.set(distanceX * pull);
      y.set(distanceY * pull);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

// ── Bubble & Star Cursor Trail Component ──
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  type: "bubble" | "star";
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const COLORS = ["#ed145b", "#f7941e", "#0a6375", "#1CBBB4", "#ffd700"];

export function BubbleTrailCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let particleId = 0;

    const createParticle = (x: number, y: number, isClick = false) => {
      const type = Math.random() > 0.4 ? "bubble" : "star";
      const count = isClick ? 12 : 1;
      
      for (let i = 0; i < count; i++) {
        const angle = isClick ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;
        const speed = isClick ? Math.random() * 4 + 2 : Math.random() * 0.8 + 0.2;
        
        particles.current.push({
          id: particleId++,
          x,
          y,
          size: Math.random() * 12 + 6,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          type,
          vx: isClick ? Math.cos(angle) * speed : (Math.random() - 0.5) * 1.5,
          vy: isClick ? Math.sin(angle) * speed - 1 : -Math.random() * 1.5 - 0.5,
          life: 1,
          maxLife: isClick ? 40 + Math.random() * 20 : 30 + Math.random() * 15,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const dx = clientX - lastMousePos.current.x;
      const dy = clientY - lastMousePos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 8) {
        createParticle(clientX, clientY, false);
        lastMousePos.current = { x: clientX, y: clientY };
      }
    };

    const handleClick = (e: MouseEvent) => {
      createParticle(e.clientX, e.clientY, true);
      if (audioEnabled) {
        playPopSound();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    // Animation Loop
    let animationFrame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.03; // Slight gravity
        p.life -= 1 / p.maxLife;

        if (p.life <= 0) return false;

        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 1.5;

        if (p.type === "bubble") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
          ctx.stroke();
          // Shiny inner dot
          ctx.beginPath();
          ctx.arc(p.x - p.size * p.life * 0.3, p.y - p.size * p.life * 0.3, p.size * p.life * 0.15, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
          ctx.fill();
        } else {
          // Draw little star
          ctx.beginPath();
          const spikes = 5;
          const outerRadius = p.size * p.life;
          const innerRadius = outerRadius * 0.4;
          let rot = (Math.PI / 2) * 3;
          let cx = p.x;
          let cy = p.y;
          let step = Math.PI / spikes;

          ctx.moveTo(cx, cy - outerRadius);
          for (let i = 0; i < spikes; i++) {
            cx = p.x + Math.cos(rot) * outerRadius;
            cy = p.y + Math.sin(rot) * outerRadius;
            ctx.lineTo(cx, cy);
            rot += step;

            cx = p.x + Math.cos(rot) * innerRadius;
            cy = p.y + Math.sin(rot) * innerRadius;
            ctx.lineTo(cx, cy);
            rot += step;
          }
          ctx.lineTo(p.x, p.y - outerRadius);
          ctx.closePath();
          ctx.fill();
        }

        ctx.restore();
        return true;
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationFrame);
    };
  }, [audioEnabled]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999]"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Playful Control Bar in Corner */}
      <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
        <motion.button
          onClick={() => {
            const nextVal = !audioEnabled;
            setAudioEnabled(nextVal);
            if (nextVal) {
              playPopSound();
            }
          }}
          className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold shadow-lg transition-all border ${
            audioEnabled 
              ? "bg-primary text-white border-primary" 
              : "bg-white text-text-primary border-gray-200 hover:border-primary/50"
          }`}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          title="Toggle interactive sound effects"
        >
          <span>{audioEnabled ? "🔊 Sound On" : "🔇 Sound Off"}</span>
        </motion.button>
      </div>
    </>
  );
}

// ── Interactive Kids Drawing Easel / Doodle Pad Widget ──
export function MagicDoodlePad() {
  const [isOpen, setIsOpen] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("#ed145b");
  const [brushSize, setBrushSize] = useState(6);
  const isDrawing = useRef(false);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    isDrawing.current = true;
    
    // Get correct coordinates
    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    isDrawing.current = false;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (isOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 300;
      canvas.height = 300;
    }
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 left-6 z-[9999]">
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          playPopSound();
        }}
        className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center shadow-xl text-2xl border-4 border-white hover:bg-accent-dark transition-colors"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        title="Open Interactive Doodle Pad!"
      >
        🎨
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="absolute bottom-16 left-0 bg-white rounded-3xl p-4 shadow-2xl border-4 border-accent w-[340px]"
        >
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold text-accent font-[var(--font-heading)] text-lg">
              Hsini Magic Easel 🎨
            </h4>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600 font-bold"
            >
              ✕
            </button>
          </div>

          <div className="border border-gray-100 rounded-2xl overflow-hidden bg-bg-soft">
            <canvas
              ref={canvasRef}
              className="w-full h-[300px] cursor-crosshair touch-none"
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              onTouchStart={startDrawing}
              onTouchMove={draw}
              onTouchEnd={stopDrawing}
            />
          </div>

          {/* Controls */}
          <div className="flex gap-2 items-center justify-between mt-3">
            {/* Colors */}
            <div className="flex gap-1.5">
              {COLORS.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-7 h-7 rounded-full border-2 transition-transform ${
                    color === c ? "scale-115 border-gray-600" : "border-transparent"
                  }`}
                  style={{ backgroundColor: c }}
                  aria-label={`Select color ${c}`}
                />
              ))}
            </div>

            {/* Clear Button */}
            <button
              onClick={clearCanvas}
              className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-text-primary rounded-lg text-xs font-bold transition-colors"
            >
              Clear
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
