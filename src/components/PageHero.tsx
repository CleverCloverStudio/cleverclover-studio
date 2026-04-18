import AnimatedReveal from "./AnimatedReveal";

interface PageHeroProps {
  label?: string;
  headline: string;
  subheadline: string;
  accentColor?: string;
}

export default function PageHero({
  label,
  headline,
  subheadline,
  accentColor = "rgba(201,168,76,0.08)",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-dark py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -5%, ${accentColor} 0%, transparent 70%)`,
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-100 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <AnimatedReveal>
          {label && (
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {label}
            </span>
          )}
          <h1 className="font-display text-5xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
            {headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-light md:text-xl">
            {subheadline}
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
