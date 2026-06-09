import Link from "next/link";

const services = [
  { href: "/services/video", label: "Video Production" },
  { href: "/services/audio", label: "Audio Production" },
  { href: "/services/music", label: "Music" },
  { href: "/library", label: "Music Library" },
  { href: "/services/web", label: "Website Design" },
  { href: "/packages", label: "Packages" },
  { href: "/products", label: "Digital Products" },
];

const studio = [
  { href: "/work", label: "Our Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book a Project" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-cream transition-opacity hover:opacity-80"
            >
              Clever Clover
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              A full-service creative production studio based in Phoenix,
              Arizona. Everything we create makes people feel something.
            </p>
            <a
              href="mailto:bryan@clovervoiceover.com"
              className="mt-4 inline-block text-sm text-gold transition-colors hover:text-gold-light"
            >
              bryan@clovervoiceover.com
            </a>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/bryan7737/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-cream"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@RadiaRadio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-cream"
                aria-label="YouTube"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://open.spotify.com/artist/6MFKPgbFJDAR91KAx8wxuq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-cream"
                aria-label="Spotify"
              >
                <SpotifyIcon />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-muted transition-colors hover:text-cream"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio column */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
              Studio
            </p>
            <ul className="flex flex-col gap-2">
              {studio.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="https://clovervoiceover.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition-colors hover:text-cream"
                >
                  CloverVoiceover.com ↗
                </a>
                <p className="mt-1 text-xs text-muted/60">
                  Looking for voiceover? Visit our sister site.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-divider my-10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Clever Clover Studio. All rights
            reserved.
          </p>
          <p className="text-xs text-muted">
            Phoenix, Arizona · Creative Production Studio
          </p>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}
