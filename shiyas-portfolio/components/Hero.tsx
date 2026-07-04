"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { heroStats, profile } from "@/lib/data";

const radarLabels = [
  { label: "Google #1", angle: -40 },
  { label: "ChatGPT cited", angle: 30 },
  { label: "Perplexity cited", angle: 110 },
  { label: "Featured Snippet", angle: 190 },
  { label: "Gemini cited", angle: 250 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden grain"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-radial-glow opacity-70" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
        aria-hidden="true"
      />

      <div className="container-px mx-auto max-w-7xl relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center pt-32 pb-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs text-text-secondary mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-pulse-glow" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight leading-[1.05]"
          >
            Helping Brands Rank Higher,{" "}
            <span className="text-gradient">Grow Faster</span> &amp; Win More
            Customers.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-text-secondary text-base md:text-lg leading-relaxed"
          >
            I create SEO, GEO, AI-powered marketing, and social media
            strategies that turn attention into measurable business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">Let&apos;s Work Together</MagneticButton>
            <MagneticButton href="#projects" variant="secondary">
              View My Work
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-border pt-8"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-semibold font-display">
                  {stat.value}
                </div>
                <div className="text-xs text-text-secondary mt-1 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Signature visual: AI Search Rank Radar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-md"
          aria-hidden="true"
        >
          <div className="absolute inset-0 rounded-full glass" />
          <div className="absolute inset-6 rounded-full border border-border" />
          <div className="absolute inset-16 rounded-full border border-border" />
          <div className="absolute inset-28 rounded-full border border-border" />

          {/* Sweep */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div
              className="absolute inset-0 origin-center animate-radar-sweep"
              style={{
                background:
                  "conic-gradient(from 0deg, rgba(240,29,74,0.45), transparent 40%)",
              }}
            />
          </div>

          {/* Center node */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_30px_rgba(240,29,74,0.8)]" />
          </div>

          {/* Orbiting labels */}
          {radarLabels.map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const radius = 46; // percent
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            return (
              <div
                key={item.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${item.angle}ms` }}
              >
                <div className="glass rounded-full px-3 py-1.5 text-[11px] whitespace-nowrap text-text-primary shadow-lg">
                  {item.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary text-xs"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ChevronDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
