import type { Metadata } from "next";
import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import MusicLibraryGrid from "@/components/MusicLibraryGrid";
import { libraryTracks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Music Library",
  description:
    "Browse 29 original tracks from the Clever Clover catalog. Preview any song on Spotify and license it instantly for YouTube, podcasts, ads, or exclusive use.",
};

export default function LibraryPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark py-28 md:py-36">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(52,211,153,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-100 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimatedReveal>
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Music Library
            </span>
            <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
              Find your sound.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light md:text-xl">
              Browse our catalog. Preview any track. License it instantly.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-light">
              <span>
                <span className="font-semibold text-cream">Personal use</span> — $4
              </span>
              <span className="text-white/20">·</span>
              <span>
                <span className="font-semibold text-cream">Commercial use</span> — $7
              </span>
              <span className="text-white/20">·</span>
              <span>
                <span className="font-semibold text-cream">Exclusive rights</span> — $199
              </span>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ─── Filter + Grid (client component) ────────────────────────────── */}
      <div className="bg-dark-100">
        <MusicLibraryGrid tracks={libraryTracks} />
      </div>

      {/* ─── Bottom CTA ───────────────────────────────────────────────────── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedReveal>
              <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
                Don't hear what you need?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-light">
                We have thousands more tracks in production. Tell us the genre, mood, and
                vibe you're looking for and we'll match you with the perfect sound. Or
                commission a completely custom track starting at $19.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
                >
                  Request a specific sound
                </Link>
                <Link
                  href="/services/music"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-dark-200 px-7 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-white/25 hover:bg-dark-300"
                >
                  Order a custom song
                </Link>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
