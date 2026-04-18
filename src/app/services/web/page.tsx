import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import { PricingGrid } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import { webTracks, webIncludes, webPricing } from "@/lib/data";

export const metadata: Metadata = {
  title: "Website Design",
  description:
    "Professional website design and development in Wix Studio or custom Next.js. Built for performance, designed to convert. Phoenix, AZ.",
};

export default function WebPage() {
  return (
    <>
      <PageHero
        label="Website Design"
        headline="Websites that work as hard as you do."
        subheadline="Professional website design and development — Wix Studio or custom-coded, built for your business."
        accentColor="rgba(167,139,250,0.07)"
      />

      {/* Two tracks */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Two approaches"
              title="Choose your path."
              subtitle="Both options deliver a premium result. The choice depends on your goals, technical comfort, and budget."
              className="mb-14"
            />
          </AnimatedReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {webTracks.map((track, i) => (
              <AnimatedReveal key={track.id} delay={i * 0.1}>
                <div className="flex h-full flex-col gap-6 rounded-2xl border border-white/8 bg-dark-200 p-8 transition-all duration-300 hover:border-gold/20">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {track.tagline}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-cream">
                      {track.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-light">
                      {track.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {track.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-muted-light">
                        <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto rounded-lg border border-white/8 bg-dark-300 px-4 py-3">
                    <p className="text-xs text-muted-light">
                      <span className="font-semibold text-cream">Best for: </span>
                      {track.bestFor}
                    </p>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
          <AnimatedReveal delay={0.2}>
            <p className="mt-6 text-center text-sm italic text-muted">
              Not sure which is right for you? We'll recommend the best option during your free discovery call.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
            <AnimatedReveal>
              <SectionHeading
                label="Every project includes"
                title="No corners cut."
                subtitle="Whether it's a one-page site or a full CMS build, every Clever Clover website ships with these fundamentals."
              />
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {webIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-light">
                    <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Pricing"
              title="Investment ranges."
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <PricingGrid
              items={webPricing}
              footerNote="Need something in between? Every project is custom-scoped. Book a discovery call and we'll build a quote around your goals."
            />
          </AnimatedReveal>
        </div>
      </section>

      {/* Cross-sell */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimatedReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                The Clever Clover advantage
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold text-cream md:text-4xl">
                We don't just build your site and walk away.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-light">
                We can also produce your brand video, create background music, design your social media content, and build your entire digital presence — all under one roof, with one point of contact.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Your website should be your hardest-working employee."
        subtext="Let's build something that looks great, loads fast, and actually converts."
        buttonText="Start your website project"
        buttonHref="/book"
        secondaryText="View packages"
        secondaryHref="/packages"
      />
    </>
  );
}
