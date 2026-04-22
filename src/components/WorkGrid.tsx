"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type { WorkProject, WorkCategory } from "@/lib/data";

const FILTERS: Array<"All" | WorkCategory> = [
  "All",
  "Video",
  "Audio",
  "Music",
  "Web",
];

export default function WorkGrid({ projects }: { projects: WorkProject[] }) {
  const [activeFilter, setActiveFilter] = useState<"All" | WorkCategory>("All");
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
              activeFilter === f
                ? "bg-gold text-dark"
                : "border border-white/10 bg-dark-200 text-muted-light hover:border-white/20 hover:text-cream"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <motion.div
        layout
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.button
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-dark-200 text-left transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-xl"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                {project.youtubeId ? (
                  <>
                    <Image
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
                      }}
                    />
                  </>
                ) : (project.spotifyEpisodeId || project.spotifyShowId) ? (
                  /* Spotify branded placeholder */
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark-400">
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "radial-gradient(ellipse 70% 70% at 50% 40%, rgba(30,215,96,0.10) 0%, transparent 65%)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 px-4 text-center">
                      <span className="font-display text-2xl font-black text-cream leading-tight">
                        {project.title.split(" — ")[0]}
                      </span>
                      {project.title.includes(" — ") && (
                        <span className="text-xs font-medium text-muted-light">
                          {project.title.split(" — ").slice(1).join(" — ")}
                        </span>
                      )}
                    </div>
                    {/* Spotify-green play button */}
                    <div className="absolute inset-0 flex items-end justify-end p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1DB954] shadow-[0_0_16px_rgba(30,215,96,0.4)] transition-transform duration-300 group-hover:scale-110">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="translate-x-0.5 text-black">
                          <path d="M2 1.5l9 4.5-9 4.5V1.5z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom ?? "from-dark-300"} ${project.gradientTo ?? "to-dark-400"}`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor ?? "rgba(201,168,76,0.1)"}, transparent 65%)`,
                      }}
                    />
                  </div>
                )}
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
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded-full border border-white/20 bg-dark/60 px-4 py-2 text-sm font-semibold text-cream backdrop-blur-sm">
                    {project.youtubeId ? "Watch video" : (project.spotifyEpisodeId || project.spotifyShowId) ? "Listen now" : "View case study"}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-1.5 p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {project.client}
                </p>
                <h3 className="font-display text-lg font-semibold text-cream">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Case study modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal panel */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed inset-x-4 bottom-0 top-8 z-50 mx-auto flex max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-white/10 bg-dark-200 md:inset-x-auto md:inset-y-8 md:rounded-2xl"
            >
              {/* Modal header / thumbnail */}
              <div className={`relative shrink-0 overflow-hidden ${(selectedProject.spotifyEpisodeId || selectedProject.spotifyShowId) ? "h-[232px]" : "h-52"}`}>
                {selectedProject.youtubeId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={selectedProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : selectedProject.spotifyEpisodeId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://open.spotify.com/embed/episode/${selectedProject.spotifyEpisodeId}?theme=0`}
                    title={selectedProject.title}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : selectedProject.spotifyShowId ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://open.spotify.com/embed/show/${selectedProject.spotifyShowId}?theme=0`}
                    title={selectedProject.title}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradientFrom ?? "from-dark-300"} ${selectedProject.gradientTo ?? "to-dark-400"}`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 30% 50%, ${selectedProject.accentColor ?? "rgba(201,168,76,0.1)"}, transparent 65%)`,
                      }}
                    />
                    <div className="absolute bottom-4 left-6 flex flex-wrap gap-1.5">
                      {selectedProject.tags.map((tag) => (
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
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close"
                  className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-dark/50 text-cream backdrop-blur-sm transition-colors hover:bg-dark/70"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Modal content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {selectedProject.client}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-cream md:text-3xl">
                  {selectedProject.title}
                </h2>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                      The Challenge
                    </p>
                    <p className="text-sm leading-relaxed text-muted-light">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                      The Solution
                    </p>
                    <p className="text-sm leading-relaxed text-muted-light">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                    Deliverables
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.deliverables.map((d) => (
                      <span
                        key={d}
                        className="rounded-full border border-white/10 bg-dark-300 px-3 py-1 text-xs font-medium text-muted-light"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.testimonial && (
                  <div className="mt-8 rounded-xl border border-gold/15 bg-dark-300 p-5">
                    <p className="text-sm italic leading-relaxed text-cream">
                      "{selectedProject.testimonial}"
                    </p>
                    {selectedProject.testimonialAuthor && (
                      <p className="mt-3 text-xs font-semibold text-gold">
                        — {selectedProject.testimonialAuthor}
                      </p>
                    )}
                  </div>
                )}

                {selectedProject.externalUrl && (
                  <div className="mt-6">
                    <a
                      href={selectedProject.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-dark-300 px-4 py-2 text-sm font-semibold text-cream transition-colors hover:border-white/25 hover:text-gold"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500" aria-hidden="true">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                      Watch on YouTube ↗
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
