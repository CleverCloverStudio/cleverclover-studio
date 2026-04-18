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
