import Link from "next/link";
import HeroText from "@/components/HeroText";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import AnimatedReveal from "@/components/AnimatedReveal";
import { services, proofItems, featuredWork } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24">
        {/* Radial warm glow at top-center */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.09) 0%, transparent 65%)",
          }}
        />
        {/* Subtle bottom vignette */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark to-transparent" />

        <HeroText />
      </section>

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
                <Link
                  href="/work"
                  className="group flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-dark-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-xl"
                >
                  {/* Thumbnail placeholder */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} overflow-hidden`}
                  >
                    {/* Simulated image overlay */}
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor}, transparent 65%)`,
                      }}
                    />
                    {/* Tags */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/15 bg-dark/60 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-cream backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* Play icon for video projects */}
                    {project.tags.includes("Video") && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-dark/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold/40 group-hover:bg-dark/70">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="translate-x-0.5 text-cream">
                            <path d="M2 1.5l10 5.5-10 5.5V1.5z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col gap-2 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {project.client}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-cream">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </Link>
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
