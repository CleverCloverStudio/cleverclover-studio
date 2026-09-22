# Changelog

Meaningful changes to cleverclover.studio, newest first. One entry per change
worth remembering. Keep it short — what changed and why, not every commit.

---

## September 2026

- **9/22/2026 — Added "Built to Be Maintained" workflow video to Work page
  slot 2.** New `workProjects` entry in `src/lib/data.ts` (id 15) covering the
  project's Claude Code / CLAUDE.md workflow, tagged Web + Video + AI so it
  surfaces under both filters. Reordered "The Resume That Sings" and "NBA
  Finals — Hiring Creatives" down one slot each; no other entries changed.

## July 2026

- **7/29/2026 — Consolidated project documentation and added "AI Development
  Systems" service.** Moved the scattered root-level briefs and redesign specs
  into `docs/reference/` as archived source material; merged `CLAUDE_PROPOSED.md`
  into `CLAUDE.md`. Added the "AI Development Systems" entry to `src/lib/data.ts`,
  rendered via the existing homepage `ServiceCard` grid, linking to `/book`.
- **Established the Command Center documentation set** — formalized `CLAUDE.md`
  and added `docs/PROJECT_BIBLE.md`, `docs/CHANGELOG.md`, `docs/RECOVERY.md`,
  and `docs/HANDOFF.md` so the project has a permanent, handoff-ready operating
  system instead of context scattered across chats.

## Earlier

- **Blog infrastructure shipped** — MDX posts under `src/content/blog/`, static
  generation, `BlogCard` / `BlogPostLayout` / `PromptBlock` / `ExcludeBlock` /
  `ProductCTA` components, per-post metadata, JSON-LD, and sitemap entries.
- **Work page portfolio entry added** — real project with click-to-play embed.
- **Products page + Gumroad listings rewritten** with "engineered, not
  collected" positioning and honest asset-count framing.
- **Music library** built as a filterable 29-track grid with instant Stripe
  licensing.
- **Site launched** on Vercel with GitHub auto-deploy from `main`.
