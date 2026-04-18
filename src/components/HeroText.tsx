"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const headline = "Everything we create makes people feel something.";
const words = headline.split(" ");

export default function HeroText() {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Eyebrow label */}
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-gold"
      >
        Clever Clover Studio · Phoenix, AZ
      </motion.span>

      {/* Headline — word-by-word reveal */}
      <h1 className="max-w-4xl font-display text-5xl font-bold leading-tight text-cream sm:text-6xl md:text-7xl">
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.21, 0.47, 0.32, 0.98],
              delay: 0.15 + i * 0.06,
            }}
            className="mr-[0.22em] inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.85 }}
        className="mt-7 max-w-xl text-lg leading-relaxed text-muted-light md:text-xl"
      >
        A full-service creative production studio based in Phoenix, Arizona —
        video, audio, music, and web, built under one roof.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 1.1 }}
        className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
      >
        <a
          href="#services"
          className="rounded-full bg-gold px-8 py-3.5 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_28px_rgba(201,168,76,0.4)]"
        >
          See what we build
        </a>
        <Link
          href="/book"
          className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-white/35 hover:bg-white/5"
        >
          Start a project
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-muted/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="h-6 w-px bg-gradient-to-b from-muted/40 to-transparent"
        />
      </motion.div>
    </div>
  );
}
