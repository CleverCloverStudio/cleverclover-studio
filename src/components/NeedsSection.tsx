"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const phrases = [
  "a custom song?",
  "visuals that hit?",
  "a website that sells?",
  "an AI edge?",
  "prompts that win?",
  "something unforgettable?",
];

const VISIBLE_MS = 2200;
const TRANSITION_MS = 300;
const INTERVAL_MS = VISIBLE_MS + TRANSITION_MS;

export default function NeedsSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const remainingRef = useRef(INTERVAL_MS);
  const lastTickRef = useRef<number | null>(null);

  const advance = useCallback(() => {
    setIndex((i) => (i + 1) % phrases.length);
    remainingRef.current = INTERVAL_MS;
    lastTickRef.current = Date.now();
  }, []);

  const startTimer = useCallback(
    (delay: number) => {
      intervalRef.current = setTimeout(() => {
        advance();
        intervalRef.current = setInterval(advance, INTERVAL_MS);
      }, delay);
    },
    [advance],
  );

  const clearTimer = useCallback(() => {
    if (intervalRef.current !== null) {
      clearTimeout(intervalRef.current);
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    lastTickRef.current = Date.now();
    startTimer(INTERVAL_MS);
    return clearTimer;
  }, [startTimer, clearTimer]);

  const handleMouseEnter = () => {
    if (!paused) {
      clearTimer();
      const elapsed = lastTickRef.current ? Date.now() - lastTickRef.current : 0;
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
      setPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (paused) {
      setPaused(false);
      lastTickRef.current = Date.now();
      startTimer(remainingRef.current);
    }
  };

  return (
    <section className="bg-dark py-12 md:py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* "Need" — fixed gold label */}
        <span className="font-display text-xl font-black text-gold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Need
        </span>

        {/* Rotating phrase container — no overflow:hidden, opacity-only crossfade */}
        <div
          className="relative mt-1 h-10 w-full sm:h-12 md:h-16 lg:h-20 xl:h-24"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: TRANSITION_MS / 1000,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex items-center justify-center font-display text-xl font-black text-cream sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            >
              {phrases[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-10 md:mt-14"
        >
          <Link
            href="/book"
            className="rounded-full bg-gold px-8 py-4 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_28px_rgba(201,168,76,0.45)]"
          >
            Let&apos;s Build It
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
