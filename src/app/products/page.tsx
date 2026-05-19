import type { Metadata } from "next";
import AnimatedReveal from "@/components/AnimatedReveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import EmailSignup from "@/components/EmailSignup";
import { productStats, genrePromptPacks, godModeGuide, bundles } from "@/lib/data";
import PlatformTag from "@/components/PlatformTag";

export const metadata: Metadata = {
  title: "Digital Products",
  description:
    "AI music production prompt packs, guides, and templates refined over 8,000 songs. God-Mode Suno prompts that produce radio-ready results.",
  openGraph: {
    title: "Digital Products | Clever Clover Studio",
    description:
      "AI music production prompt packs, guides, and templates refined over 8,000 songs. God-Mode Suno prompts that produce radio-ready results.",
    url: "/products",
    siteName: "Clever Clover Studio",
    images: [{ url: "https://www.cleverclover.studio/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Products | Clever Clover Studio",
    description:
      "AI music production prompt packs, guides, and templates refined over 8,000 songs. God-Mode Suno prompts that produce radio-ready results.",
    images: ["https://www.cleverclover.studio/images/og-image.PNG"],
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark py-28 md:py-36">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(201,168,76,0.1) 0%, transparent 65%)",
          }}
        />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-100 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <AnimatedReveal>
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Digital Products
            </span>
            <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
              Engineered Suno Prompts.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light md:text-xl">
              Genre-specific prompt packs and the complete God Mode production system. 310+ engineered assets built on real music theory — the depth behind every song on Suno that actually feels intentional. The tools behind the songs.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* ─── Stats strip ──────────────────────────────────────────── */}
      <section className="border-y border-white/5 bg-dark-100 py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
            {productStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                <span className="font-display text-3xl font-bold text-gold">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 1: Featured Product — The God-Mode Guide ────── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Featured Product"
              title="The God-Mode Guide."
              className="mb-10"
            />
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-gold/30 bg-dark-200 p-10 shadow-[0_0_100px_rgba(201,168,76,0.1)] md:p-16">
              {/* Background glow */}
              <div
                className="pointer-events-none absolute right-0 top-0 h-full w-2/3"
                style={{
                  background:
                    "radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.08), transparent 65%)",
                }}
              />
              <div
                className="pointer-events-none absolute bottom-0 left-0 h-1/2 w-1/2"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 80%, rgba(201,168,76,0.04), transparent 60%)",
                }}
              />

              <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
                {/* Left column */}
                <div className="flex flex-col gap-6">
                  <div>
                    <PlatformTag />
                    <div className="mt-3">
                      <span className="rounded-full border border-gold/40 bg-gold/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                        {godModeGuide.tag}
                      </span>
                    </div>
                    <h2 className="mt-5 font-display text-4xl font-bold text-cream md:text-5xl">
                      {godModeGuide.title}
                    </h2>
                    <p className="mt-2 text-base font-medium text-gold/70">
                      {godModeGuide.subtitle}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-muted-light">
                    {godModeGuide.description}
                  </p>
                  <div className="flex flex-col gap-4 pt-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-4xl font-bold text-gold">
                        {godModeGuide.price}
                      </span>
                      <span className="text-sm font-medium text-muted">
                        {godModeGuide.formatLine}
                      </span>
                    </div>
                    <a
                      href={godModeGuide.gumroadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_50px_rgba(201,168,76,0.4)]"
                    >
                      Buy the Guide — $39
                    </a>
                  </div>
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
                    What&apos;s inside
                  </p>
                  <ul className="flex flex-col gap-3">
                    {godModeGuide.whatYouGet.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-muted-light"
                      >
                        <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedReveal>
          <AnimatedReveal delay={0.15}>
            <p className="mt-6 text-sm italic text-muted">
              Built from 8,000+ songs across every genre. This is the system behind the music.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* ─── Tagline bridge ───────────────────────────────────────── */}
      <div className="bg-dark-100 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <AnimatedReveal>
            <p className="text-base italic text-cream/60">
              The packs give you the songs. The Guide gives you the system.
            </p>
          </AnimatedReveal>
        </div>
      </div>

      {/* ─── Section 2: Genre Prompt Packs ────────────────────────── */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Prompt Packs"
              title="Suno Prompt Packs by Genre."
              subtitle="Style prompts engineered for Suno — copy-paste ready. Each pack covers one genre family in forensic depth: key, tempo, motif, structure, vocal direction, and the production rationale behind every choice."
              className="mb-12"
            />
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {genrePromptPacks.map((pack, i) => (
              <AnimatedReveal key={pack.title} delay={i * 0.06}>
                {pack.status === "live" ? (
                  <div className="flex h-full flex-col gap-5 rounded-xl border border-gold/20 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/30 hover:bg-dark-300">
                    <PlatformTag />
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-cream">
                          {pack.title}
                        </h3>
                        {pack.subtitle && (
                          <p className="mt-0.5 font-display text-sm font-semibold text-cream">
                            {pack.subtitle}
                          </p>
                        )}
                      </div>
                      <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">
                        {pack.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-light">
                      {pack.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <span className="font-display text-xl font-bold text-gold">
                        {pack.price}
                      </span>
                      <a
                        href={pack.gumroadUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                      >
                        Get This Pack — {pack.price}
                      </a>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col gap-4 rounded-xl border border-white/5 bg-dark-200/40 p-6 opacity-50">
                    <PlatformTag />
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-semibold text-muted-light">
                        {pack.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-white/10 bg-dark-300 px-2.5 py-1 text-xs font-semibold text-muted">
                        {pack.tag}
                      </span>
                    </div>
                  </div>
                )}
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Bundles ───────────────────────────────────── */}
      <section className="bg-dark py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <SectionHeading
              label="Bundles"
              title="Two ways to go all in."
              className="mb-12"
            />
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {bundles.map((bundle, i) => (
              <AnimatedReveal key={bundle.title} delay={i * 0.08}>
                <div
                  className={`flex h-full flex-col gap-5 rounded-xl p-8 ${
                    bundle.featured
                      ? "border border-gold/30 bg-dark-200 shadow-[0_0_40px_rgba(201,168,76,0.06)]"
                      : "border border-white/8 bg-dark-200"
                  }`}
                >
                  <PlatformTag />
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-bold text-cream">
                      {bundle.title}
                    </h3>
                    {bundle.tag && (
                      <span className="shrink-0 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
                        {bundle.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-muted-light">
                    {bundle.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-display text-2xl font-bold text-gold">
                      {bundle.price}
                    </span>
                    {bundle.status === "live" ? (
                      <a
                        href={bundle.gumroadUrl!}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-gold px-4 py-2 text-xs font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                      >
                        {bundle.cta}
                      </a>
                    ) : (
                      <button
                        disabled
                        className="rounded-full border border-white/10 bg-dark-300 px-5 py-2 text-xs font-semibold text-muted opacity-60 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Coming Soon — Production Templates ────────── */}
      <section className="bg-dark-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="rounded-2xl border border-white/8 bg-dark-200 p-8 md:p-12">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="rounded-full border border-white/10 bg-dark-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      Coming soon
                    </span>
                    <h2 className="mt-4 font-display text-3xl font-bold text-cream">
                      Production Templates & Workflows.
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-muted-light">
                    We&apos;re building template packs for DaVinci Resolve, audio production presets, and complete creative workflow bundles. Join the list to be first to know.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "DaVinci Resolve lyric video templates",
                      "Music video editing workflows",
                      "Audio production presets",
                      "Complete creative workflow bundles",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/8 bg-dark-300 px-3 py-1 text-xs text-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="text-sm font-semibold text-cream">
                    Get notified when new products drop.
                  </p>
                  <EmailSignup />
                  <p className="text-xs text-muted">
                    No spam. Just a heads-up when something new is ready.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      <CTASection
        heading="Want custom AI music production support?"
        subtext="Beyond the packs — we can work with you directly on your AI music workflow, or produce tracks for your project."
        buttonText="Book a project"
        buttonHref="/book"
        secondaryText="See our music services"
        secondaryHref="/services/music"
      />
    </>
  );
}
