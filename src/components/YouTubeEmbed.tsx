"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  ariaLabel?: string;
}

export default function YouTubeEmbed({
  videoId,
  title,
  ariaLabel = "Play video",
}: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gold/15 bg-dark-200 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&color=white`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setPlaying(true)}
          aria-label={ariaLabel}
          className="group absolute inset-0 w-full"
        >
          <Image
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={title}
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-dark/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-dark/80"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="currentColor"
                className="translate-x-0.5 text-cream"
                aria-hidden="true"
              >
                <path d="M3 2l13 7-13 7V2z" />
              </svg>
            </motion.div>
          </div>
        </button>
      )}
    </div>
  );
}
