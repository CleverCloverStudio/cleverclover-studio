import type { Metadata } from "next";
import Link from "next/link";
import AnimatedReveal from "@/components/AnimatedReveal";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Project",
  description:
    "Start your creative project with Clever Clover Studio. Tell us what you need and we'll get back to you within 24 hours.",
  openGraph: {
    title: "Book a Project | Clever Clover Studio",
    description:
      "Start your creative project with Clever Clover Studio. Tell us what you need and we'll get back to you within 24 hours.",
    url: "/book",
    siteName: "Clever Clover Studio",
    images: [{ url: "https://www.cleverclover.studio/images/og-image.PNG" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Project | Clever Clover Studio",
    description:
      "Start your creative project with Clever Clover Studio. Tell us what you need and we'll get back to you within 24 hours.",
    images: ["https://www.cleverclover.studio/images/og-image.PNG"],
  },
};

export default function BookPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-dark py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <AnimatedReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get in touch
            </span>
            <h1 className="mt-4 font-display text-5xl font-bold text-cream md:text-6xl">
              Let's make something.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-light">
              Tell us about your project and we'll get back to you within 24
              hours. No pressure, no pitch — just a conversation.
            </p>
          </AnimatedReveal>
        </div>
      </section>

      {/* Form section */}
      <section className="bg-dark-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:items-start">
            {/* Sidebar */}
            <AnimatedReveal>
              <div className="flex flex-col gap-8 lg:sticky lg:top-24">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Response time
                  </p>
                  <p className="text-sm text-muted-light">
                    We respond to every inquiry within 24 hours — usually much faster.
                  </p>
                </div>

                <div className="gold-divider" />

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Prefer email?
                  </p>
                  <a
                    href="mailto:hello@cleverclover.studio"
                    className="text-sm text-cream transition-colors hover:text-gold"
                  >
                    hello@cleverclover.studio
                  </a>
                </div>

                <div className="gold-divider" />

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Looking for voiceover?
                  </p>
                  <a
                    href="https://clovervoiceover.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-light transition-colors hover:text-cream"
                  >
                    Visit CloverVoiceover.com ↗
                  </a>
                  <p className="text-xs text-muted">
                    Voiceover services live on our sister site.
                  </p>
                </div>

                <div className="gold-divider" />

                <div className="flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                    Not sure what you need?
                  </p>
                  <p className="text-sm text-muted-light">
                    Just fill in what you know. "Not sure yet" is a completely valid answer for any field.
                  </p>
                  <Link
                    href="/packages"
                    className="text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                  >
                    Browse our packages →
                  </Link>
                </div>
              </div>
            </AnimatedReveal>

            {/* Booking form */}
            <AnimatedReveal delay={0.1}>
              <div className="rounded-2xl border border-white/8 bg-dark-200 p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-cream">
                  Project inquiry
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Every field marked Required matters — everything else is optional.
                </p>
                <div className="mt-8">
                  <BookingForm />
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </section>
    </>
  );
}
