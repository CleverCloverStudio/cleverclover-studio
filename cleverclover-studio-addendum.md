# CleverClover.studio — Brief Addendum #1

## Instructions for Claude Code
Read this addendum and apply the following changes to the existing site. Do not rebuild from scratch — modify and add to what already exists.

---

## CORRECTION: Remove Fellowship Square

Fellowship Square is a voiceover project and belongs on CloverVoiceover.com, not this site. Remove any references to Fellowship Square from the portfolio/work page data and anywhere else it appears in the codebase.

---

## NEW: Digital Products Page (/products)

Add a new page to the site for digital products. This is a revenue stream selling downloadable guides, prompt packs, and templates.

### Page Hero
- Headline: "The tools behind the music"
- Subheadline: "AI music production resources refined over 8,000 songs"

### Context
The studio owner has created over 8,000 songs on the Suno AI music platform. Through that massive volume of experimentation, they've developed proprietary prompting techniques they call "God-Mode style prompts" that consistently produce radio-ready, professional-quality tracks. These prompts and the knowledge behind them are the products being sold here.

### Product Cards

**God-Mode Prompt Packs**
- Curated collections of high-performing Suno AI music prompts organized by genre, mood, and use case
- Each pack contains prompts that have been tested and refined across thousands of generations
- Pricing: $19 – $49 per pack
- Examples of pack categories (use as placeholder names):
  - Modern Country Hits
  - Lo-Fi & Chill
  - Cinematic Scores
  - Pop Anthems
  - R&B / Soul
  - Hip-Hop Beats
  - Electronic / EDM
  - Acoustic & Singer-Songwriter
- Display as a grid of product cards with genre name, short description, and price
- CTA button on each: "Coming soon" (these will be connected to a payment platform later)

**The God-Mode Guide**
- A comprehensive guide teaching the methodology behind effective AI music prompting
- Not just what to type — but how to think about structure, genre conventions, vocal styles, instrumentation layering, and production quality
- Pricing: $49 – $79
- Single featured card, larger than the prompt pack cards, with more descriptive text
- CTA: "Coming soon"

**Production Templates & Workflows** (Coming Soon section)
- Future offerings: DaVinci Resolve templates for lyric videos, music video editing workflows, audio production presets
- Display as a "Coming Soon" teaser section at the bottom of the page
- Brief text: "We're building template packs for DaVinci Resolve, audio production presets, and complete creative workflow bundles. Join the list to be first to know."
- Email signup placeholder (simple email input + submit button, can be wired up later)

### Proof/Credibility Strip on this page
- "8,000+ songs generated"
- "Radio-ready results"  
- "Refined over 2+ years of daily production"
- Display these as stat badges or a horizontal strip near the top of the page, below the hero

### Add to Navigation
Add "Products" to the main navigation bar, between "Packages" and "Work"

---

## UPDATE: Music Page (/services/music)

### Add Music Video Production Section
Add a new section to the music page between the Custom Songs section and the Artist Showcase section.

**Section heading**: "Music videos that bring your sound to life"

**Description**: Full music video production in DaVinci Resolve — from concept and storyboarding to editing, color grading, and final delivery. Whether it's a lyric video, a visualizer, or a full narrative music video, we handle the entire visual side of your release.

**Pricing cards to add**:
- Lyric video (animated): $300 – $800
- Visualizer / motion graphics video: $500 – $1,200  
- Full music video (original visuals, editing, color): $800 – $2,500
- Song-to-screen package (write + produce song + create music video): $1,500 – $4,000

**Portfolio link**: "See our music video work on YouTube" — link to https://www.youtube.com/@RadiaRadio
- Display the RadiaRadio YouTube link prominently, possibly with an embedded video preview of one of the best music videos from the channel

### Update Artist Showcase intro text
Change the intro text to emphasize the scale: mention that the studio has produced over 8,000 songs across multiple genres and built multiple artist identities from the ground up.

---

## UPDATE: Work / Portfolio Page (/work)

### Add RadiaRadio as a portfolio source
Add 3-4 portfolio entries sourced from the RadiaRadio YouTube channel (https://www.youtube.com/@RadiaRadio). These should be categorized under "Video" and/or "Music" in the filter system.

Use placeholder data for now with these entries:
1. Title: "CLOVER — Music Video Collection", Tags: Video + Music, Description: "A series of original music videos produced entirely in-house — from songwriting and production to visual editing and color grading in DaVinci Resolve.", Link: https://www.youtube.com/@RadiaRadio
2. Title: "RadiaRadio — Original Music Channel", Tags: Video + Music, Description: "A dedicated YouTube channel showcasing original music and videos across multiple genres and artist identities.", Link: https://www.youtube.com/@RadiaRadio
3. Title: "Lyric Video Production", Tags: Video + Music + Motion Graphics, Description: "Animated lyric videos designed to enhance the listening experience and drive engagement on streaming and social platforms."

### Remove Fellowship Square entry
Remove any portfolio entry related to Fellowship Square (this is voiceover work for CloverVoiceover.com).

---

## UPDATE: About Page (/about)

### Update stats/credentials
Add or update the following stats in the credentials section:
- 8,000+ songs produced on AI music platforms
- Multiple artist identities built and distributed globally via DistroKid
- Original music videos produced in DaVinci Resolve
- RadiaRadio YouTube channel for music video portfolio
- Keep existing stats: Eliances member, tools list, etc.

---

## UPDATE: Packages Page (/packages)

### Add new package: Song-to-Screen
Add a new package card:

**Song-to-Screen** — Tag: "Full creative"
- Custom original song (written + produced) + full music video in DaVinci Resolve + distribution setup
- From silence to a finished, distributed song with a professional music video — the complete artistic vision
- $1,500 – $4,000
- CTA: "Book this package"

Place this package between "Podcast Launch" and "Full Brand Build" in the display order.

---

## UPDATE: Home Page (/)

### Update proof strip
Add to the social proof / proof strip section:
- "8,000+ songs produced"
- Keep existing items and add this as a prominent stat

### Update services overview
Add a fifth service card to the services overview section:
- **Digital Products**: "AI music production prompt packs, guides, and templates — refined over 8,000 songs"
- Links to /products

---

## UPDATE: Footer

Add link to the Products page in the footer navigation under Services or as its own column item.

---

## UPDATE: Data file (lib/data.ts)

All new content (products, music video pricing, updated portfolio entries, updated stats) should be added to the central data file, consistent with the existing data structure. Do not hardcode content in page components.
