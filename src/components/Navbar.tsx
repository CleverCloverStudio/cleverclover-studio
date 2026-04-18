"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const services = [
  { href: "/services/video", label: "Video Production" },
  { href: "/services/audio", label: "Audio Production" },
  { href: "/services/music", label: "Music" },
  { href: "/services/web", label: "Website Design" },
];

const navLinks = [
  { href: "/packages", label: "Packages" },
  { href: "/products", label: "Products" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-wide text-cream transition-opacity hover:opacity-80"
        >
          Clever Clover
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {/* Services dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-muted-light transition-colors hover:text-cream">
              Services
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="mt-px transition-transform group-hover:rotate-180"
                aria-hidden="true"
              >
                <path
                  d="M2 4l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-52 rounded-lg border border-white/10 bg-dark-200 p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block rounded-md px-3 py-2 text-sm text-muted-light transition-colors hover:bg-dark-300 hover:text-cream"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-light transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/book"
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-dark transition-colors hover:bg-gold-light"
          >
            Book a Project
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-cream transition-all duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 top-16 z-40 bg-dark-100 px-6 py-8 md:hidden"
          >
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  Services
                </p>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-cream transition-colors hover:text-gold"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg text-cream transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-block rounded-full bg-gold px-6 py-3 text-center font-semibold text-dark transition-colors hover:bg-gold-light"
              >
                Book a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
