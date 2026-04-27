import type { Metadata } from "next";
import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";

export const metadata: Metadata = {
  title: "Order Confirmed",
  robots: { index: false, follow: false },
};

export default function ThankYouSongWeddingPage() {
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
            Order Confirmed
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold text-cream md:text-5xl">
            Your wedding song is on its way.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-light">
            The most important song of your day — we're honored to write it. Check your email
            for a confirmation. We'll be in touch within 24 hours to hear your story.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-white/8 bg-dark-200 p-8 text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold/70">
              One more thing
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-cream">
              Make it a memory that lasts forever.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-light">
              Add a wedding slideshow video — your photos set to your custom song, professionally
              edited and ready to play at the reception or share with family. A keepsake as
              meaningful as the song itself.
            </p>
            <a
              href="https://buy.stripe.com/7sY9ANdbr1c4dVWgyf9bO0d"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              Add a Wedding Slideshow Video →
            </a>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="mt-8">
            <Link
              href="/"
              className="text-sm text-muted transition-colors hover:text-cream"
            >
              ← Back to Clever Clover Studio
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
