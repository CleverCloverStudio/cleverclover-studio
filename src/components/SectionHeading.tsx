interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-3 ${centered ? "items-center text-center" : ""} ${className}`}
    >
      {label && (
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          {label}
        </span>
      )}
      <h2 className="font-display text-4xl font-bold text-cream md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed text-muted-light ${centered ? "max-w-2xl" : "max-w-xl"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
