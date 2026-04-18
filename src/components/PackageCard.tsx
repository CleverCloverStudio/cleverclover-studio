import Link from "next/link";

interface PackageCardProps {
  title: string;
  tag?: string;
  tagColor?: string;
  description: string;
  includes: string[];
  price: string;
  href: string;
  featured?: boolean;
}

export default function PackageCard({
  title,
  tag,
  tagColor = "muted",
  description,
  includes,
  price,
  href,
  featured = false,
}: PackageCardProps) {
  return (
    <div
      className={`relative flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-300 ${
        featured
          ? "border-gold/30 bg-dark-200 shadow-[0_0_40px_rgba(201,168,76,0.08)]"
          : "border-white/8 bg-dark-200 hover:border-gold/20 hover:shadow-[0_8px_40px_rgba(201,168,76,0.06)]"
      }`}
    >
      {tag && (
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
            tagColor === "gold"
              ? "bg-gold/10 text-gold"
              : "bg-white/5 text-muted-light"
          }`}
        >
          {tag}
        </span>
      )}

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-2xl font-bold text-cream">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-light">{description}</p>
      </div>

      <ul className="flex flex-col gap-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-muted-light">
            <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">✦</span>
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-4 pt-2">
        <div className="gold-divider" />
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-bold text-gold">{price}</span>
          <Link
            href={href}
            className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-dark transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_20px_rgba(201,168,76,0.3)]"
          >
            Book this package
          </Link>
        </div>
      </div>
    </div>
  );
}
