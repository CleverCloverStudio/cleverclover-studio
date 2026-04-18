import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Pre-built creative production packages that combine video, audio, music, and web for maximum impact. One studio, everything you need.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        label="Packages"
        headline="Everything you need. One studio."
        subheadline="Pre-built packages that combine our services for maximum impact — less decision fatigue, better results."
      />

      {/* Package grid */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {packages.map((pkg, i) => (
              <AnimatedReveal key={pkg.id} delay={i * 0.08}>
                <PackageCard
                  {...pkg}
                  featured={pkg.id === "business-launch"}
                />
              </AnimatedReveal>
            ))}
          </div>

          {/* Custom note */}
          <AnimatedReveal delay={0.2} className="mt-14">
            <div className="rounded-2xl border border-white/8 bg-dark-200 p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Need something different?
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-cream">
                Every package can be customized.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-light">
                Don't see exactly what you need? Book a discovery call and we'll build a package around your specific goals, timeline, and budget.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-block rounded-full bg-gold px-6 py-3 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
              >
                Book a free discovery call
              </Link>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* Compare services note */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="flex flex-col items-center gap-5 text-center">
              <SectionHeading
                label="À la carte"
                title="Prefer to build your own?"
                centered
              />
              <p className="max-w-lg text-muted-light">
                Browse individual services and mix exactly what you need — no bundle required.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/services/video", label: "Video Production" },
                  { href: "/services/audio", label: "Audio Production" },
                  { href: "/services/music", label: "Music" },
                  { href: "/services/web", label: "Website Design" },
                ].map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="rounded-full border border-white/10 bg-dark-200 px-5 py-2.5 text-sm font-semibold text-muted-light transition-all duration-200 hover:border-white/20 hover:text-cream"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Let's build the right package for you."
        subtext="Tell us your goals and we'll put together a scope that fits your budget and timeline."
        buttonText="Start the conversation"
        buttonHref="/book"
      />
    </>
  );
}
