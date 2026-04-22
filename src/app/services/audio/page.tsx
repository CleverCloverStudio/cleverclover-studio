import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import ProcessSteps from "@/components/ProcessSteps";
import { PricingGrid } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { audioServiceTypes, audioProcess, audioPricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Audio Production",
  description:
    "Podcast editing, mixing, mastering, and sound design that makes your audience lean in. Professional audio production in Phoenix, AZ.",
};

export default function AudioPage() {
  return (
    <>
      <PageHero
        label="Audio Production"
        headline="Sound that stays with you."
        subheadline="Podcast production, mixing, mastering, and sound design — every project engineered to be heard."
        accentColor="rgba(56,189,248,0.07)"
      />

      {/* What We Make */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="What we do"
              title="Full-service audio production."
            />
          </AnimatedReveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audioServiceTypes.map((item, i) => (
              <AnimatedReveal key={item.title} delay={i * 0.05}>
                <div className="rounded-xl border border-white/8 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/20 hover:bg-dark-300">
                  <div className="mb-1 text-gold" aria-hidden="true">▸</div>
                  <h3 className="font-display text-lg font-semibold text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="How it works"
              title="Send files. Get polish."
              centered
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-dark-200">
              <ProcessSteps steps={audioProcess} />
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Pricing"
              title="Rates that make sense."
              subtitle="Clear starting points for every audio project. Retainer pricing available for ongoing work."
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <PricingGrid
              items={audioPricing}
              footerNote="Not sure what you need? Book a free call and we'll scope it together."
            />
          </AnimatedReveal>
        </div>
      </section>

      {/* Podcast Portfolio */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Our podcast work"
              title="Hear it in action."
              className="mb-10"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-dark-200 p-8 md:p-10">
              <p className="text-base leading-relaxed text-muted-light">
                Hear our podcast production work —{" "}
                <a
                  href="https://open.spotify.com/episode/6GlqEn4Fb9XZirCJhThBqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cream transition-colors hover:text-gold"
                >
                  Paradoxxed
                </a>{" "}
                (a technology fiction series) and the{" "}
                <a
                  href="https://open.spotify.com/show/55jTLjzEIULDjwkeYwYiJc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cream transition-colors hover:text-gold"
                >
                  Clever Clover Podcast
                </a>{" "}
                (daily tech news) — both written, voiced, and fully produced in-house.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                    Paradoxxed
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Technology fiction told in a true-crime style. Multiple character voices, original music, and full sound design — all one person.
                  </p>
                  <a
                    href="https://open.spotify.com/episode/6GlqEn4Fb9XZirCJhThBqs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1DB954] transition-opacity hover:opacity-80"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Listen on Spotify ↗
                  </a>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                    Clever Clover Podcast
                  </p>
                  <p className="text-sm leading-relaxed text-muted">
                    Daily tech and AI news with multiple original characters debating, interrupting, and correcting each other. All voices, writing, and production by one person.
                  </p>
                  <a
                    href="https://open.spotify.com/show/55jTLjzEIULDjwkeYwYiJc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1DB954] transition-opacity hover:opacity-80"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Listen on Spotify ↗
                  </a>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Your audience should hear the difference."
        subtext="Professional audio is the detail that separates good content from great content."
        buttonText="Start your audio project"
        buttonHref="/book"
        secondaryText="See all services"
        secondaryHref="/#services"
      />
    </>
  );
}
