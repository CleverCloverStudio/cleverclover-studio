import type { Metadata } from "next";
import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import CTASection from "@/components/CTASection";
import { packages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Creative production packages for every stage — from quick-start projects to full brand builds. One studio, everything you need.",
  openGraph: {
    title: "Packages | Clever Clover Studio",
    description:
      "Creative production packages for every stage — from quick-start projects to full brand builds. One studio, everything you need.",
    url: "/packages",
    siteName: "Clever Clover Studio",
    images: [{ url: "/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Packages | Clever Clover Studio",
    description:
      "Creative production packages for every stage — from quick-start projects to full brand builds. One studio, everything you need.",
    images: ["/images/og-image.PNG"],
  },
};

const quickStarts = packages.filter((p) => p.tier === "quick");
const popular = packages.filter((p) => p.tier === "popular");
const premium = packages.filter((p) => p.tier === "premium");

export default function PackagesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-dark py-24 md:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% -10%, rgba(201,168,76,0.09) 0%, transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <AnimatedReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Packages
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold text-cream md:text-6xl">
              Packages for every stage.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-light">
              Whether you&apos;re just getting started or ready to go all-in, there&apos;s a package built for where you are right now.
            </p>
            <p className="mt-3 text-sm text-muted">
              Projects starting at $40 — from podcast edits to full brand builds.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* ── Quick Starts ──────────────────────────────────────────── */}
      <section className="bg-dark-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Start here
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-cream">
                Low-friction entry points.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-light">
                Small, fast, low-risk projects designed to get you results without the commitment. Try us once — you&apos;ll come back.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickStarts.map((pkg, i) => (
              <AnimatedReveal key={pkg.id} delay={i * 0.07}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/8 bg-dark-200 p-6 transition-all duration-300 hover:border-gold/25 hover:bg-dark-300">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-lg font-bold text-cream">
                      {pkg.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-light">
                      {pkg.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-1.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-muted-light">
                        <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-white/6">
                    <div>
                      <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold/60">starting at</span>
                      <span className="font-display text-2xl font-bold text-gold">{pkg.price}</span>
                    </div>
                    <Link
                      href={pkg.href}
                      className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                    >
                      {pkg.ctaText ?? "Book this"}
                    </Link>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Packages ──────────────────────────────────────── */}
      <section className="bg-dark py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Most popular
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-cream">
                Bundled for better results.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-light">
                More output, better value — these packages combine services for maximum impact with less back-and-forth.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {popular.map((pkg, i) => (
              <AnimatedReveal key={pkg.id} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col gap-5 rounded-2xl border p-8 transition-all duration-300 ${
                    pkg.id === "business-launch"
                      ? "border-gold/30 bg-dark-200 shadow-[0_0_40px_rgba(201,168,76,0.07)]"
                      : "border-white/8 bg-dark-200 hover:border-gold/20"
                  }`}
                >
                  {pkg.tag && (
                    <span
                      className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        pkg.tagColor === "gold"
                          ? "bg-gold/10 text-gold"
                          : "bg-white/5 text-muted-light"
                      }`}
                    >
                      {pkg.tag}
                    </span>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl font-bold text-cream">{pkg.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-light">{pkg.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-light">
                        <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-white/6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold/60">starting at</span>
                        <span className="font-display text-2xl font-bold text-gold">{pkg.price}</span>
                      </div>
                      <Link
                        href={pkg.href}
                        className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
                      >
                        {pkg.ctaText ?? "Book this package"}
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Premium ───────────────────────────────────────────────── */}
      <section className="bg-dark-100 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Ready to go all-in?
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-cream">
                The full creative studio experience.
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-light">
                For businesses that want everything handled — strategy, execution, and delivery — without building an internal team.
              </p>
            </div>
          </AnimatedReveal>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {premium.map((pkg, i) => (
              <AnimatedReveal key={pkg.id} delay={i * 0.1}>
                <div className="relative flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-dark-200 p-8 opacity-95 transition-all duration-300 hover:border-gold/20 hover:opacity-100">
                  {pkg.tag && (
                    <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted-light">
                      {pkg.tag}
                    </span>
                  )}
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display text-2xl font-bold text-cream">{pkg.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-light">{pkg.description}</p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-light">
                        <span className="mt-0.5 shrink-0 text-gold/60" aria-hidden="true">✦</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-4 border-t border-white/6">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-widest text-gold/60">starting at</span>
                        <span className="font-display text-2xl font-medium text-gold">{pkg.price}</span>
                      </div>
                      <Link
                        href={pkg.href}
                        className="rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/20"
                      >
                        {pkg.ctaText ?? "Book a discovery call"}
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Custom note ───────────────────────────────────────────── */}
      <section className="bg-dark py-16">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedReveal>
            <div className="rounded-2xl border border-white/8 bg-dark-200 p-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                Need something different?
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-cream">
                Every project can be customized.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-light">
                Don&apos;t see exactly what you need? Book a free discovery call and we&apos;ll build something custom around your goals, timeline, and budget.
              </p>
              <Link
                href="/book"
                className="mt-6 inline-block rounded-full bg-gold px-7 py-3 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
              >
                Book a free discovery call
              </Link>
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
