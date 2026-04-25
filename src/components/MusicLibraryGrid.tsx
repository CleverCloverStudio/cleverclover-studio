"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LibraryTrack } from "@/lib/data";
import LazySpotifyEmbed from "./LazySpotifyEmbed";

const ARTISTS = ["All", "CLOVER", "Aubrey Hightower", "TrashCat"] as const;
const GENRES = [
  "All", "Pop", "EDM", "Hip-hop", "Country", "Dance",
  "Lofi", "Dubstep", "Indie", "Jazz", "Phonk", "Bass House",
] as const;
const MOODS = [
  "All", "Energetic", "Chill", "Cinematic", "Dark",
  "Uplifting", "Emotional", "Hype", "Euphoric",
] as const;

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 rounded-full px-3.5 py-1.5 text-xs transition-all duration-150 ${
        active
          ? "bg-gold font-semibold text-dark"
          : "border border-white/10 font-medium text-muted-light hover:border-white/25 hover:text-cream"
      }`}
    >
      {label}
    </button>
  );
}

function FilterRow({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: readonly string[];
  active: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1.5 w-14 shrink-0 text-[10px] font-semibold uppercase tracking-widest text-gold">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <FilterPill
            key={opt}
            label={opt}
            active={active === opt}
            onClick={() => onChange(opt)}
          />
        ))}
      </div>
    </div>
  );
}

function TrackCard({ track }: { track: LibraryTrack }) {
  const licenseUrl = (license: "personal" | "commercial") =>
    `/book?type=licensing&license=${license}&track=${encodeURIComponent(track.title)}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-dark-200 transition-all duration-300 hover:border-gold/20 hover:shadow-[0_0_40px_rgba(201,168,76,0.05)]">
      {/* Track info */}
      <div className="px-5 pt-5 pb-3">
        <h3 className="font-display text-lg font-bold leading-snug text-cream">
          {track.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-gold">{track.artist}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {track.genres.map((g) => (
            <span
              key={g}
              className="rounded-full border border-white/10 bg-dark-300 px-2.5 py-0.5 text-[11px] font-medium text-muted-light"
            >
              {g}
            </span>
          ))}
          {track.moods.map((m) => (
            <span
              key={m}
              className="rounded-full border border-gold/15 bg-gold/5 px-2.5 py-0.5 text-[11px] font-medium text-gold/60"
            >
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* Spotify embed — lazy loaded */}
      <LazySpotifyEmbed trackId={track.spotifyTrackId} title={track.title} />

      {/* License buttons */}
      <div className="px-5 pb-5 pt-4">
        <div className="flex gap-3">
          <a
            href={licenseUrl("personal")}
            className="flex-1 rounded-full border border-white/15 py-2.5 text-center text-sm font-medium text-cream transition-all duration-200 hover:border-gold/40 hover:text-gold"
          >
            Personal — $4
          </a>
          <a
            href={licenseUrl("commercial")}
            className="flex-1 rounded-full bg-gold py-2.5 text-center text-sm font-semibold text-dark transition-all duration-200 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.25)]"
          >
            Commercial — $7
          </a>
        </div>
        <p className="mt-3 text-center text-xs text-muted">
          <Link
            href="/book"
            className="transition-colors hover:text-cream"
          >
            Need exclusive rights? Contact us
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function MusicLibraryGrid({ tracks }: { tracks: LibraryTrack[] }) {
  const [artistFilter, setArtistFilter] = useState("All");
  const [genreFilter, setGenreFilter] = useState("All");
  const [moodFilter, setMoodFilter] = useState("All");

  const filteredTracks = useMemo(
    () =>
      tracks.filter((t) => {
        if (artistFilter !== "All" && t.artist !== artistFilter) return false;
        if (genreFilter !== "All" && !t.genres.includes(genreFilter)) return false;
        if (moodFilter !== "All" && !t.moods.includes(moodFilter)) return false;
        return true;
      }),
    [tracks, artistFilter, genreFilter, moodFilter]
  );

  const hasActiveFilter =
    artistFilter !== "All" || genreFilter !== "All" || moodFilter !== "All";

  function clearFilters() {
    setArtistFilter("All");
    setGenreFilter("All");
    setMoodFilter("All");
  }

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-16 z-40 border-b border-white/5 bg-dark-100/95 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-3">
            <FilterRow
              label="Artist"
              options={ARTISTS}
              active={artistFilter}
              onChange={setArtistFilter}
            />
            <FilterRow
              label="Genre"
              options={GENRES}
              active={genreFilter}
              onChange={setGenreFilter}
            />
            <FilterRow
              label="Mood"
              options={MOODS}
              active={moodFilter}
              onChange={setMoodFilter}
            />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xs text-muted">
              Showing{" "}
              <span className="font-semibold text-cream">{filteredTracks.length}</span>{" "}
              of {tracks.length} tracks
            </p>
            {hasActiveFilter && (
              <button
                onClick={clearFilters}
                className="text-xs text-muted transition-colors hover:text-cream"
              >
                Clear filters ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Track grid */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredTracks.length > 0 ? (
              filteredTracks.map((track) => (
                <motion.div
                  key={track.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <TrackCard track={track} />
                </motion.div>
              ))
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-1 py-24 text-center md:col-span-2"
              >
                <p className="text-lg text-muted-light">
                  No tracks match that combination.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-gold transition-colors hover:text-gold-light"
                >
                  Clear all filters →
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
