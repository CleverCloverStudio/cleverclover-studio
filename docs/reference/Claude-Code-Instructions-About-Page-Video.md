# Claude Code — Implementation Instructions
## About Page Hero Update: Brand Intro Video Integration

---

## CONTEXT

Read the following document first for full context before making any changes:

**`Project-Bible-Update-Brand-Intro-Video.md`** (in project root, alongside the existing Project Bible)

This document covers the new May 2026 brand intro video produced via Google Gemini Omni, the placement strategy across all studio properties, and the broader Omni content ecosystem. The only change required on the cleverclover.studio codebase as a result of this update is the About page hero. All other placements (YouTube channel trailer, social pinned posts) are handled outside the codebase.

**Important context:** The homepage hero is NOT changing. The current showreel embed on `/` stays exactly as it is. Do not touch `src/app/page.tsx`, `src/components/HeroSection.tsx`, or `src/components/HeroText.tsx`. Only the About page is being updated.

---

## THE CHANGE

Replace the current hero asset on the `/about` page with an embedded YouTube player for the new brand intro video. The existing About page headline "One studio. Every skill." stays as-is and pairs with the new video below it.

**Video URL:** https://www.youtube.com/watch?v=FSRMmjUl5qE
**YouTube Video ID:** `FSRMmjUl5qE`
**Video Title:** Welcome to Clever Clover Studio

---

## IMPLEMENTATION REQUIREMENTS

### 1. Embed Pattern
Match the click-to-play YouTube embed pattern already used on the homepage and `/work` page. Do NOT use autoplay. Do NOT use a muted background loop. The user clicks a custom thumbnail, and the YouTube player loads on click. This matches the existing performance and aesthetic pattern across the site.

If there's a reusable YouTube embed component in `src/components/` (e.g. `YouTubeEmbed.tsx` or similar — check the homepage and `/work` page for the existing pattern), use that component. If the YouTube embed logic is inline on other pages, extract it into a reusable component during this change.

### 2. Thumbnail
Use YouTube's auto-generated max-res thumbnail as the initial state:
`https://img.youtube.com/vi/FSRMmjUl5qE/maxresdefault.jpg`

Do NOT add a custom thumbnail asset to `/public/images/` for this video. The YouTube max-res thumbnail is fine and avoids adding a binary to the repo.

### 3. Visual Treatment
- The video sits below the "One studio. Every skill." headline
- Aspect ratio: 16:9
- Width: full container width on mobile, constrained to the page's content max-width on desktop (match the existing About page content width)
- Subtle gold border or thin gold line treatment consistent with the existing dark luxury aesthetic — only if it's already in use elsewhere on the page. Do not introduce new visual flourishes.
- Add a fade-up animation on scroll consistent with the existing `AnimatedReveal` component used elsewhere on the site

### 4. Accessibility
- The video container needs an appropriate `aria-label` (e.g. "Play brand intro video")
- The play button overlay needs to be keyboard-accessible (tabbable, activatable with Enter/Space)
- The iframe, once loaded, must have a `title` attribute set to "Welcome to Clever Clover Studio"

### 5. Performance
- Lazy load the iframe — do not load the YouTube player until the user clicks
- This matches the lazy-loaded Spotify embed pattern on `/library`

---

## FILES TO MODIFY

Primary:
- `src/app/about/page.tsx` — replace current hero asset, keep "One studio. Every skill." headline

Possibly:
- `src/components/` — if a YouTube embed component needs to be created or extracted from existing inline usage, create `src/components/YouTubeEmbed.tsx` (or similar) and refactor the existing usages to use it. Only do this refactor if it's clean and safe. If it would require touching many files or introducing risk, just inline the embed on the About page using the same pattern as elsewhere.

DO NOT MODIFY:
- `src/app/page.tsx` (homepage)
- `src/components/HeroSection.tsx`
- `src/components/HeroText.tsx`
- Any homepage-specific assets in `/public/images/`
- The showreel thumbnail at `/public/images/showreel-thumbnail.png`

---

## VERIFICATION CHECKLIST

Before pushing, confirm:
- [ ] `/about` loads with "One studio. Every skill." headline intact
- [ ] Below the headline, the new brand intro video thumbnail displays
- [ ] Clicking the thumbnail loads the YouTube player and starts the video
- [ ] The thumbnail is not loading the YouTube iframe until clicked (check Network tab)
- [ ] The page is responsive on mobile (16:9 aspect ratio holds, no overflow)
- [ ] Keyboard navigation: Tab to the video, press Enter, video loads and plays
- [ ] No console errors
- [ ] The homepage (`/`) is UNTOUCHED — the existing showreel still loads exactly as before
- [ ] Run `npm run dev` and visually confirm both `/` and `/about` look correct

---

## GIT WORKFLOW

After verification passes:

```bash
git add .
git commit -m "Add brand intro video to About page hero"
git push
```

Vercel will auto-deploy from `main` within ~30 seconds. Verify the live deploy at:
- https://www.cleverclover.studio/about

---

## IF SOMETHING GOES WRONG

If the embed pattern on the homepage uses a different approach than what's described here (e.g. it's not a standard click-to-play pattern, or there's a non-obvious dependency), STOP and report back before making changes. Do not invent a new pattern — match what's already in the codebase.

If the About page hero currently has a meaningful asset (e.g. a portrait, a gallery, a stats block above the fold), do NOT delete it without confirming. Preserve the rest of the page and add the video in the appropriate position relative to the headline. Confirm with me if the layout decision isn't obvious.

---

*End of instructions. Reference `Project-Bible-Update-Brand-Intro-Video.md` for full strategic context. Reference `CleverClover-Studio-Project-Bible-UPDATED.md` for codebase architecture, file structure, and deployment workflow.*
