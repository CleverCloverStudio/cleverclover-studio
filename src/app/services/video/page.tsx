import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import ProcessSteps from "@/components/ProcessSteps";
import { PricingGrid } from "@/components/PricingCard";
import CTASection from "@/components/CTASection";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import { videoServiceTypes, videoProcess, videoPricing, videoSamples } from "@/lib/data";

export const metadata: Metadata = {
  title: "Video Production",
  description:
    "Cinematic video production in DaVinci Resolve — brand videos, social content, event recaps, lyric videos, and more. Based in Phoenix, AZ.",
  openGraph: {
    title: "Video Production | Clever Clover Studio",
    description:
      "Cinematic video production in DaVinci Resolve — brand videos, social content, event recaps, lyric videos, and more. Based in Phoenix, AZ.",
    url: "/services/video",
    siteName: "Clever Clover Studio",
    images: [{ url: "/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production | Clever Clover Studio",
    description:
      "Cinematic video production in DaVinci Resolve — brand videos, social content, event recaps, lyric videos, and more. Based in Phoenix, AZ.",
    images: ["/images/og-image.PNG"],
  },
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
              <AnimatedReveal key={sample.id} delay={i * 0.08}>
                <FeaturedWorkCard project={sample} />
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
