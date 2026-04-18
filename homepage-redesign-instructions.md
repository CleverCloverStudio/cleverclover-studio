# Homepage Redesign — Hero + Animated Needs Section

## Instructions for Claude Code
Apply these changes to the homepage (src/app/page.tsx) and any related components. Maintain the existing premium dark-luxury aesthetic throughout. Every change should feel elegant, cinematic, and intentional.

---

## SECTION 1: HERO (Above the Fold)

### Layout
Redesign the homepage hero for stronger clarity and conversion. The layout should feel like Apple meets cinematic creator studio — clean, confident, bold, with breathing room.

### Content

**Headline:**
Music. Video. Websites. AI. One studio that makes it all hit.

**Subheadline:**
Custom songs, cinematic visuals, and digital products — built fast, built to stand out.

**Buttons:**
- Primary (gold, prominent): "View Work" — links to /work
- Secondary (outlined, subtle): "Start a Project" — links to /book

### Background
Add a muted autoplay cinematic showreel placeholder. For now, use a dark cinematic gradient with very subtle slow-moving ambient motion (CSS animation — a gentle gradient shift or a slow radial pulse). The implementation must make it easy to later swap this for a real muted autoplay MP4 video by simply dropping in a `<video autoPlay muted loop playsInline>` element. Add a code comment marking where the video will go.

### Animation
- Headline: staggered word-by-word or line-by-line reveal on page load. Each word/line fades up with slight upward motion, sequentially. Easing should be smooth and cinematic (cubic-bezier, ease-out). Total reveal duration ~1.5 seconds.
- Subheadline: fades in after headline completes, with a slight delay
- Buttons: fade in last, after subheadline

### Design Notes
- Generous vertical padding — the hero should feel spacious and unhurried
- Headline typography should be large, bold, and use the display/serif font
- Subheadline in the body sans-serif font, muted cream color, smaller size
- The entire hero section should command the viewport — it IS the first impression

---

## SECTION 2: Animated Needs Section (Directly Below Hero)

### Purpose
This section converts the curiosity created by the hero into self-recognition. The visitor sees their own need reflected back at them. This is the bridge between "who is this studio?" and "they do what I need."

### Layout
Centered on the page. Generous whitespace above and below — this section needs breathing room to feel premium. Nothing else competes for attention in this section.

### Content Structure
The word "Need" stays fixed in place, large and prominent.

Below or beside it, a single rotating phrase cycles through the following lines, one at a time:

1. a custom song?
2. visuals that hit?
3. a website that sells?
4. an AI edge?
5. prompts that win?
6. something unforgettable?

Below the rotating text, a CTA button: **"Let's Build It"** — links to /book

### Typography
- "Need" should be in the display/serif headline font, large size, gold color
- The rotating phrases should be in the same display/serif font, same large size, but in the warm cream/white text color
- Together they read as one fluid sentence: "Need [rotating phrase]"
- The CTA button uses the standard gold button style

### Animation Specification

**Timing:**
- Each phrase is visible for 2.2 seconds
- Transition between phrases takes 0.4 seconds
- Continuous loop, infinite

**Animation style: Vertical slide up**
- Current phrase slides upward and fades out simultaneously
- Next phrase slides in from below and fades in simultaneously
- The slide distance should be subtle — roughly 20-30px of vertical travel, not a dramatic swoosh
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1) or similar smooth ease-out
- The container for the rotating text should have overflow hidden so exiting text clips cleanly

**Hover behavior:**
- When the user hovers over the rotating text area, the animation pauses
- The current phrase stays visible and still
- On mouse leave, the animation resumes from where it paused
- This gives the user a feeling of control and improves UX

### What to Avoid
- No typing/typewriter effect
- No bouncing or elastic animations
- No horizontal sliding
- No blur transitions
- No multiple animations happening simultaneously
- No icons or emoji next to the phrases
- Nothing fast or frantic — the pace should feel confident and unhurried

### Technical Implementation
- Use Framer Motion's AnimatePresence with mode="wait" for clean enter/exit transitions
- Use a React state with useEffect interval for the rotation timing
- Pause the interval on mouse enter, resume on mouse leave
- The container height should be fixed to prevent layout shift during transitions
- The "Need" text and the rotating phrase should be on separate lines, both centered, with the rotating phrase slightly below "Need"

---

## SECTION 3: After the Animated Needs Section

Keep the existing clickable service cards section that's already built, but ensure it comes after the animated needs section. The flow should be:

1. Hero (curiosity + credibility)
2. Animated "Need" section (self-recognition + conversion)
3. Service cards (exploration + navigation)
4. Rest of homepage as-is

This creates an elite funnel structure: perform for the visitor first with the animation, then let them explore with the clickable cards.

---

## General Notes
- Test on mobile — the animated section should work beautifully on small screens. The text may need to be smaller on mobile to prevent line breaks in the middle of phrases.
- The "Need" section should feel like a moment of pause in the page — a beat between the high-energy hero and the detailed service cards. Don't rush past it.
- Dark background consistent with the rest of the site. No section background changes needed — let it breathe on the same dark canvas.
