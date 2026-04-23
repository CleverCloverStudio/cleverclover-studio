import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import ArtistCard from "@/components/ArtistCard";
import CTASection from "@/components/CTASection";
import { customSongPricing, musicVideoPricing, artists, licensingTiers } from "@/lib/data";
import { PricingGrid } from "@/components/PricingCard";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Custom songs for special moments, original artists distributed globally, and music licensing for creators and brands. Clever Clover Studio.",
};

export default function MusicPage() {
  return (
    <>
      <PageHero
        label="Music"
        headline="Music made to make you feel."
        subheadline="Custom songs for special moments, original artists built from the ground up, and music licensing for creators."
        accentColor="rgba(52,211,153,0.07)"
      />

      {/* ─── Section A: Custom Songs ─────────────────────────────────────── */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="max-w-2xl">
              <SectionHeading
                label="Custom songs"
                title="A song written just for you."
              />
              <p className="mt-5 text-base leading-relaxed text-muted-light">
                Personalized, fully produced original songs for weddings, anniversaries, proposals, memorials, birthdays, brand anthems, and corporate events. You fill out a brief — the story, the people, the mood. We deliver a professionally produced original song that exists nowhere else in the world.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.08} className="mt-10">
            <p className="text-base font-medium text-muted-light">
              Choose your voice. Choose your genre. Delivered in{" "}
              <span className="font-semibold text-gold">48 hours.</span>
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="mt-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {customSongPricing.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-3 rounded-xl border border-white/8 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/20 hover:bg-dark-300"
                >
                  <p className="text-sm font-semibold text-cream">{item.title}</p>
                  <p className="text-[11px] leading-relaxed text-muted">
                    Voice &amp; genre of your choice · 48-hour delivery
                  </p>
                  <div className="mt-auto flex flex-col gap-3 pt-2">
                    <span className="font-display text-xl font-medium text-gold">
                      {item.price}
                    </span>
                    <a
                      href={item.stripeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gold py-2 text-center text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.15} className="mt-8">
            <Link
              href="/book?type=custom-song"
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/20"
            >
              Commission a custom song →
            </Link>
          </AnimatedReveal>
        </div>
      </section>

      {/* ─── Section NEW: Music Videos ───────────────────────────────────── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="max-w-2xl">
              <SectionHeading
                label="Music videos"
                title="Music videos that bring your sound to life."
              />
              <p className="mt-5 text-base leading-relaxed text-muted-light">
                Full music video production in DaVinci Resolve — from concept and storyboarding to editing, color grading, and final delivery. Whether it's a lyric video, a visualizer, or a full narrative music video, we handle the entire visual side of your release.
              </p>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1} className="mt-12">
            <PricingGrid items={musicVideoPricing} />
          </AnimatedReveal>

          <AnimatedReveal delay={0.15} className="mt-8">
            <a
              href="https://www.youtube.com/@RadiaRadio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-dark-200 px-6 py-3 text-sm font-semibold text-cream transition-all duration-300 hover:border-white/25 hover:bg-dark-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-red-500" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              See our music video work on RadiaRadio ↗
            </a>
          </AnimatedReveal>
        </div>
      </section>

      {/* ─── Section B: Artist Showcase ──────────────────────────────────── */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="The Clever Clover label"
              title="Artists we built from the ground up."
              subtitle="We've produced over 8,000 songs across multiple genres and built multiple artist identities entirely from scratch — writing, production, visual identity, and global distribution, all in-house."
              className="mb-14"
            />
          </AnimatedReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {artists.map((artist, i) => (
              <AnimatedReveal key={artist.id} delay={i * 0.1}>
                <ArtistCard artist={artist} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section C: Music Licensing ──────────────────────────────────── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Music licensing"
              title="License our music for your project."
              subtitle="License original tracks from the Clever Clover catalog for YouTube, podcasts, ads, brand content, and more."
              className="mb-12"
            />
          </AnimatedReveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {licensingTiers.map((tier, i) => (
              <AnimatedReveal key={tier.title} delay={i * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-xl border border-white/8 bg-dark-200 p-7 transition-all duration-300 hover:border-gold/20 hover:bg-dark-300">
                  <div>
                    <h3 className="font-display text-xl font-bold text-cream">
                      {tier.title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                      {tier.subtitle}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-light">
                    {tier.description}
                  </p>
                  <div className="mt-auto pt-3">
                    <span className="font-display text-xl font-medium text-gold">
                      {tier.price}
                    </span>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal delay={0.2}>
            <p className="mt-8 text-sm italic text-muted">
              Browse available tracks or tell us what you need and we'll match you with the perfect sound.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Every song tells a story. Let's write yours."
        subtext="Whether it's a wedding, a brand anthem, or a moment you never want to forget — we'll make it sound like it was always meant to exist."
        buttonText="Commission a custom song"
        buttonHref="/book"
        secondaryText="License a track"
        secondaryHref="/book"
      />
    </>
  );
}
