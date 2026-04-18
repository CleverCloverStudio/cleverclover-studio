import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import ProcessSteps from "@/components/ProcessSteps";
import { PricingGrid } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { videoServiceTypes, videoProcess, videoPricing, videoSamples } from "@/lib/data";

export const metadata: Metadata = {
  title: "Video Production",
  description:
    "Cinematic video production in DaVinci Resolve — brand videos, social content, event recaps, lyric videos, and more. Based in Phoenix, AZ.",
};

export default function VideoPage() {
  return (
    <>
      <PageHero
        label="Video Production"
        headline="Video that moves people."
        subheadline="Professional video production in DaVinci Resolve — from concept to final cut, built for impact."
        accentColor="rgba(251,191,36,0.08)"
      />

      {/* What We Make */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="What we make"
              title="Every format. Every platform."
            />
          </AnimatedReveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {videoServiceTypes.map((item, i) => (
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
              title="Simple process. Cinematic results."
              centered
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="rounded-2xl border border-white/8 bg-dark-200">
              <ProcessSteps steps={videoProcess} />
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
              title="Transparent rates."
              subtitle="Every project is different — these are starting ranges. Book a free discovery call for an exact quote."
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <PricingGrid
              items={videoPricing}
              footerNote="Every project is unique. Book a free discovery call to get an exact quote."
            />
          </AnimatedReveal>
        </div>
      </section>

      {/* Portfolio Samples */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Portfolio samples"
              title="Recent video work."
              className="mb-12"
            />
          </AnimatedReveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videoSamples.map((sample, i) => (
              <AnimatedReveal key={sample.title} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl border border-white/8 bg-dark-200">
                  <div
                    className={`relative h-48 bg-gradient-to-br ${sample.gradient} overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse at 30% 40%, ${sample.accent}, transparent 65%)`,
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-dark/50 backdrop-blur-sm transition-all group-hover:scale-110 group-hover:border-gold/40">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="translate-x-0.5 text-cream">
                          <path d="M2 1.5l10 5.5-10 5.5V1.5z" />
                        </svg>
                      </div>
                    </div>
                    <p className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-dark/60 px-2.5 py-0.5 text-xs text-cream backdrop-blur-sm">
                      Placeholder
                    </p>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {sample.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{sample.description}</p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to make something people will watch twice?"
        subtext="Let's talk about your vision and build a video that earns real attention."
        buttonText="Start your video project"
        buttonHref="/book"
        secondaryText="See our packages"
        secondaryHref="/packages"
      />
    </>
  );
}
