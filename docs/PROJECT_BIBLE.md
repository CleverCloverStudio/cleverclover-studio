# Project Bible — cleverclover.studio

The permanent source of truth for this project. If it isn't written here, it
isn't decided. Claude Code reads this before changing anything; a new developer
or the owner reads this to understand the whole system without starting from
zero.

**Last updated:** July 2026

**Detailed source material:** the original build brief, addenda, and
page-specific redesign instructions that shaped this site are archived in
`docs/reference/`. They are historical specs (some already superseded by how
the site actually shipped) — this document is the canonical, current-state
description. When the two disagree, this file wins.

---

## 1. Purpose & goals

`cleverclover.studio` is the storefront and portfolio for Clever Clover Studio —
a multidisciplinary creative production studio in Phoenix, Arizona. It sells
video, audio, custom music, website design, AI-assisted workflows, and digital
products, and it houses a licensable music library.

The throughline for everything on the site: *everything we create makes people
feel something.* Positioning is premium but reachable — more agile than an
agency, better value than an agency, never cheap. Dopamine by elegance, not by
noise.

**Goal of the site:** convert visitors into booked projects and product buyers,
and serve as living proof of the studio's range and taste.

---

## 2. Technology stack

- **Framework:** Next.js 16.2.4 (App Router, Turbopack)
- **Language:** TypeScript, strict
- **Styling:** Tailwind CSS + custom theme
- **Animation:** Framer Motion
- **Fonts:** Google Fonts via `next/font` — Playfair Display (serif display) +
  DM Sans (sans body); JetBrains Mono is also loaded site-wide for accent/mono use
- **Hosting:** Vercel (Hobby) — auto-deploy on push to `main`
- **Repo:** GitHub — `CleverCloverStudio/cleverclover-studio`, branch `main`
- **Forms:** Formspree · **Payments:** Stripe Payment Links · **Products:** Gumroad

---

## 3. Architecture

A fully static Next.js App Router site. Pages read shared content from
`src/lib/data.ts` at build time. There is no CMS and no database. The only
server code is a single contact API route. Content and copy change by editing
data/MDX and pushing; the design system is centralized so the site stays
visually consistent as it grows.

---

## 4. File & folder map

```
cleverclover-studio/
├── public/                 images, audio samples, robots.txt, og-image
├── src/
│   ├── app/                App Router pages
│   │   ├── layout.tsx      global layout (fonts, film-grain, nav/footer)
│   │   ├── page.tsx        homepage
│   │   ├── globals.css
│   │   ├── services/       video / audio / music / web
│   │   ├── packages/       bundled offers
│   │   ├── products/       digital products (Suno prompt packs)
│   │   ├── library/        licensable music library
│   │   ├── work/           portfolio
│   │   ├── about/  book/    company + booking form
│   │   ├── blog/           MDX blog (index + [slug])
│   │   ├── thank-you/      per-purchase upsell pages
│   │   └── api/contact/    Formspree-backed contact route
│   ├── components/         ServiceCard, PricingCard, ProjectCard, PackageCard,
│   │                       Navbar, Footer, HeroSection, NeedsSection, etc.
│   ├── content/blog/       MDX posts (one file per post)
│   └── lib/                data.ts (shared content) + blog helpers
├── CLAUDE.md   AGENTS.md   assistant operating instructions
├── docs/                   PROJECT_BIBLE, CHANGELOG, RECOVERY, HANDOFF
└── config: package.json, tailwind.config.ts, tsconfig.json, next.config.ts
```

---

## 5. Design & brand rules

- **Background:** `#0A0A0A`–`#111111` · **Gold accent:** `#C9A84C` (sparing)
- **Text:** warm cream `#F5F0E8` (never pure white)
- **Type:** Playfair Display for serif display headlines, DM Sans for body,
  uppercase letter-spaced labels
- **Motion:** staggered fade-in, scroll fade-up, warm hover glow; cinematic easing
- **Voice:** editorial, confident, honest over hyped. "Direction is the cure."

Note: the **digital-product PDFs** use a related but distinct palette
(`#0e0e10`, gold `#b8a26a`, bright gold `#d4b870`, rust `#6b3a3a`, copper
`#c2853a`; fonts Cormorant Garamond / Inter / JetBrains Mono). The website and
the PDF product line are intentionally separate design systems — do not merge them.

---

## 6. Technical decisions

- **Static, no CMS.** Content lives in the repo and ships on push — zero monthly
  cost, maximum speed, no backend to maintain.
- **Centralized data in `src/lib/data.ts`.** One place to change copy, pricing,
  and links so the site can't drift out of sync.
- **MDX blog, no database.** Posts are files; SEO (metadata + JSON-LD + sitemap)
  is generated at build.
- **Two separate sites, one brand.** Voiceover work lives on the Wix-hosted
  clovervoiceover.com; everything else lives here. They cross-link in footers.

---

## 7. Current features

Homepage with animated "Need…" rotator; service pages (video, audio, music,
web); packages; products (live Suno prompt packs + God-Mode Guide, sold on
Gumroad); a filterable 29-track music library with instant Stripe licensing; a
filterable Work portfolio; About and a Formspree booking form; per-purchase
thank-you/upsell pages; and an MDX blog with product-style prompt components.

---

## 8. Known issues / watch list

No open issues at this time. (Vol. 03's Gumroad URL is live in the product
map; 2 "Coming Soon" product cards remain as placeholders to activate as
future volumes ship — see §11 Roadmap.)

---

## 9. Change log

See `docs/CHANGELOG.md`.

---

## 10. Recovery

See `docs/RECOVERY.md`.

---

## 11. Roadmap

- Publish the first blog post and build out value-first Suno content.
- Add a custom-song + photo-video **tribute** product line with an intake flow.
- Continue activating prompt-pack volumes as they ship.
- Keep the portfolio current as real client work lands.
