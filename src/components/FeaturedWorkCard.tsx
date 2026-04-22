"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import type { WorkProject } from "@/lib/data";

export default function FeaturedWorkCard({ project }: { project: WorkProject }) {
  const [playing, setPlaying] = useState(false);
  const thumbnailUrl = project.youtubeId
    ? `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`
    : null;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-dark-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-xl">
      {/* Thumbnail / embed */}
      <div className="relative h-52 overflow-hidden">
        {playing && project.youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : thumbnailUrl ? (
          <button
            onClick={() => setPlaying(true)}
            aria-label={`Play ${project.title}`}
            className="absolute inset-0 w-full"
          >
            <Image
              src={thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)",
              }}
            />
            {/* Tags */}
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-dark/60 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-dark/60 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold/60 group-hover:bg-dark/80"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="translate-x-0.5 text-cream">
                  <path d="M3 2l11 6-11 6V2z" />
                </svg>
              </motion.div>
            </div>
          </button>
        ) : (
          /* Gradient fallback for projects without a YouTube ID */
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom ?? "from-dark-300"} ${project.gradientTo ?? "to-dark-400"}`}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor ?? "rgba(201,168,76,0.1)"}, transparent 65%)`,
              }}
            />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/15 bg-dark/60 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Card body */}
      <div className="flex flex-col gap-2 p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">
          {project.client}
        </p>
        <h3 className="font-display text-lg font-semibold text-cream">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{project.description}</p>
      </div>
    </div>
  );
}
