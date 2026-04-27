import type { Metadata } from "next";
import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";

export const metadata: Metadata = {
  title: "License Confirmed",
  robots: { index: false, follow: false },
};

export default function ThankYouLicenseCommercialPage() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center bg-dark py-24">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <AnimatedReveal>
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-400"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12l3 3 5-5" />
            </svg>
          </div>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            License Confirmed
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Your commercial license is active.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-light">
            You're cleared for commercial use — ads, brand content, YouTube, podcasts, and
            more. Check your email for the confirmation and download link.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-white/8 bg-dark-200 p-8 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
              Want complete ownership?
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-cream">
              Upgrade to exclusive rights.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-light">
              Exclusive rights take this track off the market entirely — locked to your brand,
              forever. Nobody else can use it after you do. If this track is central to your
              identity, exclusive is the play.
            </p>
            <a
              href="https://buy.stripe.com/14AdR3c7n7AsaJK95N9bO0f"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Upgrade to Exclusive Rights →
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="mt-8">
            <Link
              href="/library"
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              ← Browse more tracks
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
