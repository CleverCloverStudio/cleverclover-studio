import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import AnimatedReveal from "@/components/AnimatedReveal";
import CTASection from "@/components/CTASection";
import { tools } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind Clever Clover Studio — one multidisciplinary creative professional building a full-service production studio in Phoenix, Arizona.",
  openGraph: {
    title: "About | Clever Clover Studio",
    description:
      "The story behind Clever Clover Studio — one multidisciplinary creative professional building a full-service production studio in Phoenix, Arizona.",
    url: "/about",
    siteName: "Clever Clover Studio",
    images: [{ url: "/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Clever Clover Studio",
    description:
      "The story behind Clever Clover Studio — one multidisciplinary creative professional building a full-service production studio in Phoenix, Arizona.",
    images: ["/images/og-image.PNG"],
  },
};

const TOOL_CATEGORY_COLORS: Record<string, string> = {
  Video: "text-amber-400",
  Motion: "text-orange-400",
  Audio: "text-sky-400",
  Design: "text-pink-400",
  Web: "text-violet-400",
  Music: "text-emerald-400",
  Production: "text-gold",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        headline="One studio. Every skill."
        subheadline="The story behind Clever Clover — and why one person can build what used to take an entire team."
      />

      {/* The Story */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
            {/* Story text */}
            <AnimatedReveal>
              <div className="flex flex-col gap-6">
                <SectionHeading
                  label="The story"
                  title="Built before AI made it easy."
                />
                <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-light">
                  <p>
                    Before AI tools existed, before anyone was talking about "one-person agencies" — there was just a person learning every tool available. Photoshop, Premiere Pro, Audition, and After Effects. Not because it was efficient. Because every discipline told a different part of the same story.
                  </p>
                  <p>
                    That foundation led to building a professional voiceover studio and career at{" "}
                    <a
                      href="https://clovervoiceover.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold underline-offset-4 hover:underline"
                    >
                      CloverVoiceover.com
                    </a>{" "}
                    — recording, editing, and delivering broadcast-quality voice work for clients worldwide.
                  </p>
                  <p>
                    In parallel: writing and producing music across multiple genres under multiple artist names. Distributing globally via DistroKid. Building artists from concept to catalog. Not just producing songs — building creative identities.
                  </p>
                  <p>
                    Then DaVinci Resolve. Mastered for professional video production — color grading, editing, motion graphics. Wix Studio for client websites. Custom-coded Next.js for the ones that need more.
                  </p>
                  <p>
                    Now all of it — every tool, every skill, every discipline — comes together under one roof. Clever Clover is the place where video, audio, music, and web don't compete with each other. They amplify each other.
                  </p>
                  <p className="border-l-2 border-gold/30 pl-5 text-cream italic">
                    "Everything I create is designed to make people feel something." A line from a multimedia journalism professor that became a career philosophy.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            {/* Credentials sidebar */}
            <AnimatedReveal delay={0.15}>
              <div className="flex flex-col gap-5">
                {/* Credential card */}
                <div className="rounded-2xl border border-white/8 bg-dark-200 p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Credentials
                  </p>
                  <ul className="mt-5 flex flex-col gap-4">
                    {[
                      {
                        label: "8,000+ Songs Produced",
                        sub: "AI music generation refined over 2+ years of daily production on Suno",
                      },
                      {
                        label: "Eliances Member",
                        sub: "Invitation-only entrepreneur community · SkySong, Scottsdale",
                      },
                      {
                        label: "CloverVoiceover.com",
                        sub: "Professional voiceover studio — broadcast, commercial, narration",
                      },
                      {
                        label: "Clever Clover Label",
                        sub: "Multiple artist identities built and distributed globally via DistroKid",
                      },
                      {
                        label: "RadiaRadio on YouTube",
                        sub: "Original music videos produced in DaVinci Resolve",
                      },
                      {
                        label: "Based in Phoenix, AZ",
                        sub: "Serving clients locally and remotely worldwide",
                      },
                    ].map((item) => (
                      <li key={item.label} className="flex flex-col gap-0.5">
                        <span className="text-sm font-semibold text-cream">
                          {item.label}
                        </span>
                        <span className="text-xs text-muted">{item.sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Philosophy card */}
                <div className="rounded-2xl border border-gold/15 bg-dark-200 p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    The philosophy
                  </p>
                  <p className="mt-4 font-display text-xl font-semibold italic leading-relaxed text-cream">
                    "Everything we create makes people feel something."
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Not just a tagline. The standard every project is held to.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Skills & tools"
              title="The full toolkit."
              subtitle="Every tool here represents real, professional-level capability — not surface-level familiarity."
              className="mb-12"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col gap-1 rounded-xl border border-white/8 bg-dark-200 p-4 transition-all duration-300 hover:border-white/15"
                >
                  <span
                    className={`text-xs font-semibold uppercase tracking-widest ${TOOL_CATEGORY_COLORS[tool.category] ?? "text-muted"}`}
                  >
                    {tool.category}
                  </span>
                  <span className="text-sm font-medium text-cream">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* The Advantage */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedReveal>
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                The advantage
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
                The range of a team. The attention of a partner.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light">
                Most freelancers do one thing well. Agencies charge for ten people when you only need one. Clever Clover gives you the creative range of a full production team — with the speed, consistency, and personal attention of a single dedicated partner who actually cares about the outcome.
              </p>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Ready to work together?"
        subtext="Tell us what you're trying to build. We'll tell you how we can help."
        buttonText="Start a project"
        buttonHref="/book"
        secondaryText="See our work"
        secondaryHref="/work"
      />
    </>
  );
}
