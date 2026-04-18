import Link from "next/link";
import AnimatedReveal from "./AnimatedReveal";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  buttonText: string;
  buttonHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTASection({
  heading,
  subtext,
  buttonText,
  buttonHref,
  secondaryText,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-dark-100 py-28">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <AnimatedReveal>
          <div className="gold-divider mb-10 w-16 mx-auto" />
          <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
            {heading}
          </h2>
          {subtext && (
            <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-muted-light">
              {subtext}
            </p>
          )}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={buttonHref}
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_24px_rgba(201,168,76,0.35)]"
            >
              {buttonText}
            </Link>
            {secondaryText && secondaryHref && (
              <Link
                href={secondaryHref}
                className="rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-300 hover:border-white/30 hover:bg-white/5"
              >
                {secondaryText}
              </Link>
            )}
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
