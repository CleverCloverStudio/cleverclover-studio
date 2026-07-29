@AGENTS.md

# cleverclover.studio — Operating Instructions

For deep context — history, decisions, roadmap — see `docs/PROJECT_BIBLE.md`.

---

## What this project is

`cleverclover.studio` is the marketing and commerce site for Clever Clover
Studio, a Phoenix-based creative production studio (video, audio, custom music,
web, AI-assisted workflows, and digital products). It is a statically generated
Next.js site with no CMS and no backend beyond a single contact API route.
Content ships when it is pushed.

- **Live site:** https://cleverclover.studio
- **Repo:** https://github.com/CleverCloverStudio/cleverclover-studio
- **Deploy:** Vercel (Hobby), auto-deploys on every push to `main`

---

## Stack

- **Framework:** Next.js 16.2.4 — App Router, Turbopack
- **Language:** TypeScript (strict; ~99% of the codebase)
- **Styling:** Tailwind CSS with a custom theme in `tailwind.config.ts`
- **Animation:** Framer Motion (cinematic easing — never bouncy)
- **Fonts:** Google Fonts via `next/font` — serif display + sans body
- **Package manager:** npm
- **Forms:** Formspree (`/book` + `/products` signup)
- **Payments:** Stripe Payment Links (custom songs, licensing, upsells)
- **Digital products:** Gumroad (handle `cloverbryan`)

---

## Rules

**Design system is locked. Match it exactly — never introduce new colors,
fonts, or spacing systems.**

- Background: deep charcoal / near-black (`#0A0A0A`–`#111111`)
- Gold accent (CTAs, highlights, hover): warm gold `#C9A84C` family — used sparingly
- Primary text: warm cream `#F5F0E8` — never pure white
- Headlines: serif display; body: sans; accent labels: uppercase, letter-spaced
- Motion: staggered fade-ins, scroll-triggered fade-up, warm hover glow on cards

**Conventions**

- Reuse existing components (`ServiceCard`, `PricingCard`, `ProjectCard`,
  `PackageCard`, `SectionHeading`, `CTASection`, `AnimatedReveal`, etc.) before
  writing new ones. Match their prop patterns.
- Shared data (services, pricing, products, tracks) lives in `src/lib/data.ts`.
  Edit data there; do not hardcode content inside components.
- Keep pages statically generated. Do not add a database, CMS, or server-side
  rendering without flagging it first.
- One `<h1>` per page. Preserve heading hierarchy and existing SEO metadata.
- Do not commit secrets. Environment values live in Vercel project settings and
  a local `.env.local` that is never committed.

**Deploy discipline**

- Run `npm run build` locally and confirm it succeeds before pushing.
- Commit messages: short, imperative, descriptive (`add AI dev systems service card`).
- Push to `main` triggers a live Vercel deploy in ~30 seconds. Treat every push
  as production.
- After any meaningful change, add an entry to `docs/CHANGELOG.md`.

---

## Ask before you do these

- Adding a dependency, changing the build pipeline, or touching `next.config.ts`
- Anything that changes routing, the design tokens, or global layout
- Deleting files, or large refactors across many components
- Anything involving payments, forms, environment variables, or DNS

When unsure, make the smallest correct change, explain it, and stop.

---

## Local environment (owner's machine)

- Path: `C:\Users\bryan\cleverclover-studio`
- Node: v24.15.0 · Git: 2.53.0 · OS: Windows 11
- Dev server: `npm run dev` → http://localhost:3000
- Deploy: `git add .` → `git commit -m "..."` → `git push` (or ask Claude Code to do all three)
