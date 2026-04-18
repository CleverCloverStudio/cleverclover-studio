import Link from "next/link";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  href: string;
  index?: number;
}

export default function ServiceCard({
  id,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-5 rounded-2xl border border-white/8 bg-dark-200 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/25 hover:bg-dark-300 hover:shadow-[0_0_0_1px_rgba(201,168,76,0.1),0_12px_40px_rgba(201,168,76,0.07)]"
    >
      {/* Icon */}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-dark-300 text-gold transition-colors duration-300 group-hover:border-gold/30 group-hover:bg-dark-400">
        <ServiceIcon id={id} />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-xl font-semibold text-cream">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-light">{description}</p>
      </div>

      {/* Arrow link */}
      <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-gold transition-all duration-300 group-hover:gap-2.5">
        Explore
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M1 7h12M7 1l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Corner accent line */}
      <div className="absolute bottom-0 left-0 h-px w-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/60 to-gold/0 transition-all duration-500 group-hover:w-full" />
    </Link>
  );
}

function ServiceIcon({ id }: { id: string }) {
  if (id === "video") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="5" width="15" height="14" rx="2" />
        <path d="M17 9l5-3v12l-5-3V9z" />
      </svg>
    );
  }
  if (id === "audio") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 13h4l3-9 4 18 3-9h6" />
      </svg>
    );
  }
  if (id === "music") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    );
  }
  if (id === "products") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    );
  }
  // web
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" />
      <path d="M2 8h20" />
      <circle cx="6" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="9" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
