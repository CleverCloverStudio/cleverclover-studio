import Link from "next/link";
import HeroText from "@/components/HeroText";
import NeedsSection from "@/components/NeedsSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import FeaturedWorkCard from "@/components/FeaturedWorkCard";
import { services, proofItems, featuredWork } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden pt-20 pb-10 md:pt-24 md:pb-12">
        {/* Radial gold glow — left-biased toward the copy side */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 40%, rgba(201,168,76,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Cool glow on right — behind the showreel panel */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 80% 50%, rgba(56,189,248,0.04) 0%, transparent 65%)",
          }}
        />
        {/* Bottom vignette into next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />

        <HeroText />
      </section>

      {/* ─── Animated Needs Section ───────────────────────────── */}
      <NeedsSection />

      {/* ─── Services Overview ────────────────────────────────── */}
      <section id="services" className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="What we make"
              title="One studio. Every discipline."
              subtitle="From the first concept to the final deliverable — video, audio, music, and web all built under one roof with one point of contact."
            />
          </AnimatedReveal>

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {services.map((service, i) => (
              <AnimatedReveal key={service.id} delay={i * 0.08}>
                <ServiceCard {...service} index={i} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof Strip ──────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-white/5 bg-dark py-7">
        <div
          className="flex gap-0 whitespace-nowrap"
          style={{ animation: "marquee 40s linear infinite" }}
        >
          {/* Duplicate for seamless loop */}
          {[...proofItems, ...proofItems].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="px-8 text-sm font-medium tracking-wide text-muted-light">
                {item}
              </span>
              <span className="text-gold/40" aria-hidden="true">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── Featured Work ────────────────────────────────────── */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                label="Selected work"
                title="The work speaks."
              />
              <Link
                href="/work"
                className="shrink-0 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
              >
                View all projects →
              </Link>
            </div>
          </AnimatedReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredWork.map((project, i) => (
              <AnimatedReveal key={project.id} delay={i * 0.1}>
                <FeaturedWorkCard project={project} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <CTASection
        heading="Let's build something together."
        subtext="Tell us about your project and we'll get back to you within 24 hours. No pressure, no pitch — just a conversation."
        buttonText="Book a project"
        buttonHref="/book"
        secondaryText="See our packages"
        secondaryHref="/packages"
      />
    </>
  );
}
