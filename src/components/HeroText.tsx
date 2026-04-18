"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const headline = "Music. Video. Websites. AI. One studio that makes it all hit.";
const words = headline.split(" ");

const trustStats = [
  "8,000+ songs produced",
  "4 artists distributed globally",
  "Phoenix, AZ",
];

export default function HeroText() {
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-10 xl:gap-16">
      {/* ── Left: Copy ─────────────────────────────────────────────── */}
      <div className="flex flex-col">
        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
        >
          Clever Clover Studio · Phoenix, AZ
        </motion.span>

        {/* Headline — word-by-word reveal */}
        <h1 className="font-display text-4xl font-black leading-[1.08] tracking-tight text-cream sm:text-5xl xl:text-6xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: 0.1 + i * 0.055,
              }}
              className="mr-[0.2em] inline-block last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.75 }}
          className="mt-6 max-w-lg text-base leading-relaxed text-muted-light md:text-lg"
        >
          Custom songs, cinematic visuals, and digital products — built fast,
          built to stand out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/work"
            className="rounded-full bg-gold px-7 py-3.5 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_28px_rgba(201,168,76,0.45)]"
          >
            View Work
          </Link>
          <Link
            href="/book"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-white/35 hover:bg-white/5"
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Trust micro-bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1"
        >
          {trustStats.map((stat, i) => (
            <span key={stat} className="flex items-center gap-4">
              <span className="text-xs text-muted">{stat}</span>
              {i < trustStats.length - 1 && (
                <span className="text-gold/30" aria-hidden="true">◆</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Right: Showreel Panel ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 }}
        className="relative w-full"
      >
        <ShowreelPanel />
      </motion.div>
    </div>
  );
}

/**
 * Swap this component's inner content for a <video> element when the
 * showreel is ready:
 *
 *   <video
 *     autoPlay muted loop playsInline
 *     className="absolute inset-0 h-full w-full object-cover"
 *     src="/showreel.mp4"
 *   />
 */
function ShowreelPanel() {
  return (
    <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-white/8 bg-dark-200 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
      {/* ── Cinematic gradient layers ── */}
      {/* Base atmospheric glow — warm left, cool right */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 70% 80% at 20% 60%, rgba(201,168,76,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 60% 70% at 80% 30%, rgba(56,189,248,0.06) 0%, transparent 55%),
            radial-gradient(ellipse 50% 60% at 50% 100%, rgba(52,211,153,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Subtle horizontal scan line — suggests motion */}
      <div
        className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent"
        style={{ animation: "reel-scan 6s linear infinite", top: "40%" }}
      />

      {/* Vignette around edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 40%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* ── Center play button ── */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-dark/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-dark/70"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            className="translate-x-0.5 text-cream"
          >
            <path d="M3 2l13 7-13 7V2z" />
          </svg>
        </motion.div>
      </div>

      {/* ── Bottom labels ── */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-4">
        {/* Showreel label */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
            Showreel
          </span>
        </div>

        {/* "Coming soon" pill */}
        <span className="rounded-full border border-white/10 bg-dark/60 px-2.5 py-1 text-xs font-medium text-white/30 backdrop-blur-sm">
          Video coming soon
        </span>
      </div>

      {/* ── Top-left corner accent ── */}
      <div className="absolute left-4 top-4 flex items-center gap-1.5">
        <span
          className="h-1.5 w-1.5 rounded-full bg-gold/40"
          style={{ animation: "reel-pulse 2.5s ease-in-out infinite" }}
        />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/25">
          CC Studio
        </span>
      </div>

      {/* ── Right-edge gold accent line ── */}
      <div className="absolute bottom-8 right-0 top-8 w-px bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
    </div>
  );
}
