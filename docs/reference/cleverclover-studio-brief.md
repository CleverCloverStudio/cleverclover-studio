# CleverClover.studio — Complete Project Brief for Claude Code

## Project Overview

Build a full creative production studio website for CleverClover.studio using Next.js 16+ with the App Router, TypeScript, and Tailwind CSS. The site is for Bhodi, a multidisciplinary creative professional based in Phoenix, Arizona who runs a one-person full-service production studio. This site is separate from their voiceover-specific site (CloverVoiceover.com) and instead showcases their broader creative services: video production, audio production, music (custom songs + artist label + licensing), website design, and AI-assisted creative workflows.

The brand tagline/philosophy: **"Everything we create makes people feel something."**

The parent brand is "Clever Clover" — originally a music label containing four artists (CLOVER, Aubrey Hightower, TrashCat, and one other). This site expands Clever Clover from a music label into a full creative production studio, with the music label as one division within it.

---

## Design System & Aesthetic Direction

### Overall Vibe
**Dark, luxurious, confident, and cinematic.** Think premium recording studio meets high-end creative agency. The site should feel like walking into a space where important, beautiful things get made. It should convey prestige, momentum, and emotional impact without crossing into flashy or gimmicky territory.

### Key Design Principles
- **Dark-first palette**: Deep charcoal/near-black backgrounds (#0A0A0A to #111111 range) as the primary canvas
- **Gold/warm accent color**: A refined gold (#C9A84C or similar warm metallic tone) for CTAs, highlights, hover states, and accent elements. Not bright yellow — think aged gold, warm and rich
- **Secondary accent**: A deep warm white or cream (#F5F0E8) for primary text instead of pure white — softer on the eyes, more luxurious feel
- **Tertiary accent**: Subtle use of a deep amber or copper for supporting elements
- **Strategic contrast**: The dark background makes content, images, and video pop dramatically

### Typography
- **Headlines**: Use a bold, distinctive display font — something with character and weight. Consider fonts like "Playfair Display", "Cormorant Garamond", "Tenor Sans", or "Libre Caslon Display". The headline font should feel editorial and premium, not techy or startup-y
- **Body text**: A clean, highly readable sans-serif — "DM Sans", "Outfit", "General Sans", or "Satoshi". Should contrast with the display font while remaining elegant
- **Accent text**: For labels, tags, and small caps — use letter-spacing and the body font in uppercase at small sizes
- Import fonts from Google Fonts

### Motion & Animation
- **Page load**: Staggered fade-in reveals — elements appear sequentially as the page loads, creating a cinematic unveiling effect
- **Scroll animations**: Elements fade up and slide in as they enter the viewport. Use Framer Motion or CSS intersection observer
- **Hover states**: Service cards subtly lift and gain a warm glow on hover. Buttons have smooth color transitions
- **Page transitions**: Smooth crossfades between pages
- **Hero section**: The headline could have a subtle text reveal animation (letters or words appearing sequentially)
- **Keep it refined**: Every animation should feel intentional and smooth, never bouncy or playful. Easing should be smooth and cinematic (ease-out, cubic-bezier)

### Layout Principles
- **Generous whitespace**: Let the dark space breathe. Don't crowd elements
- **Full-width sections**: Alternate between contained content and full-bleed visual sections
- **Asymmetric touches**: Not everything centered — some sections can have off-center layouts for visual interest
- **Card-based service displays**: Services presented as elevated cards with subtle borders or glow effects against the dark background
- **Sticky navigation**: Minimal top nav that's always accessible, potentially with a blur/transparency effect

### Visual Details
- **Subtle grain/noise texture**: A very faint film grain overlay on the background adds depth and prevents the dark from feeling flat (use CSS or a tiny repeating PNG)
- **Thin gold lines**: Use as dividers and accent borders sparingly
- **Gradient accents**: Subtle dark-to-slightly-less-dark gradients on sections to create depth, never bright or colorful gradients
- **Image treatment**: Portfolio images and videos should have slight rounded corners and potentially a subtle warm vignette

---

## Site Structure — 9 Pages

### Page 1: Home (/)

**Purpose**: First impression. One clear message, proof of capability, and a path to services.

**Sections**:

1. **Hero Section**
   - Large headline: "Everything we create makes people feel something." (or a variation — this is the hook)
   - Subheadline: One sentence positioning Clever Clover as a full-service creative production studio based in Phoenix, AZ
   - A 30-second showreel or background video loop (for now, use a placeholder dark gradient or cinematic still image — the video can be added later)
   - One primary CTA button in gold: "See what we build" (scrolls to services overview)
   - One secondary CTA: "Start a project" (links to booking page)

2. **Services Overview**
   - Section heading: "What we make"
   - Four cards, one per core service category:
     - Video Production
     - Audio Production
     - Music (Custom Songs & Licensing)
     - Website Design
   - Each card has: an icon or subtle visual element, a short 1-2 sentence description, and a link to its dedicated service page
   - Cards should have the elevated dark card aesthetic with subtle border and hover glow

3. **Proof Strip / Social Proof**
   - A horizontal strip showing client names, project names, or credentials
   - Could include: "Fellowship Square", "Eliances Member", "4 artists distributed globally", number of tracks produced, etc.
   - Keep it subtle and minimal — a single horizontal scroll or static row

4. **Featured Work**
   - 2-3 portfolio highlights from across disciplines
   - Each with a thumbnail/preview, project title, and what was delivered (tagged: Video, Audio, Music, Web)
   - Links to the full Work/Portfolio page

5. **Call to Action**
   - Section heading: "Let's build something together"
   - Brief text about starting a conversation
   - Gold CTA button: "Book a project" (links to booking page)

6. **Footer**
   - Logo or wordmark
   - Navigation links to all pages
   - Contact email
   - Link to CloverVoiceover.com ("Looking for voiceover? Visit CloverVoiceover.com")
   - Social media links (placeholders)
   - Copyright line

---

### Page 2: Video Production (/services/video)

**Purpose**: Sell video production services. Show what you make, how it works, what it costs.

**Sections**:

1. **Page Hero**
   - Headline: "Video that moves people"
   - Subheadline: Professional video production in DaVinci Resolve — from concept to final cut
   - Atmospheric background (dark with subtle visual element)

2. **What We Make**
   - Grid or list of video service types:
     - Brand & promotional videos
     - Social media content (Reels, TikTok, Shorts)
     - Event recaps & highlight reels
     - Lyric videos & animated lyric videos
     - Testimonial & interview edits
     - Explainer & educational videos
     - Donor appreciation & fundraising videos
   - Each with a brief one-line description

3. **How It Works**
   - 3-step process displayed visually:
     - Step 1: Discovery — "Tell us what you need and who it's for"
     - Step 2: Production — "We handle editing, motion graphics, color, and sound"
     - Step 3: Delivery — "Receive your final video with revisions included"
   - Keep it simple and visual, not text-heavy

4. **Pricing**
   - Display as elegant pricing cards or a clean table:
     - Social media video (30-60s): $150 – $300
     - Brand / promo video (1-3 min): $500 – $1,200
     - Lyric video (animated): $300 – $800
     - Full event recap: $800 – $2,000
     - Monthly content retainer (4 videos): $1,000 – $1,800/mo
   - Note below: "Every project is unique. Book a free discovery call to get an exact quote."

5. **Portfolio Samples**
   - Grid of 3-4 video project placeholders (can be replaced with real embeds later)
   - Each with a title and one-line description of the client goal

6. **CTA**
   - "Ready to make something people will watch twice?"
   - Gold button: "Start your video project"

---

### Page 3: Audio Production (/services/audio)

**Purpose**: Sell audio production services. Separate from voiceover (that stays on CloverVoiceover.com).

**Sections**:

1. **Page Hero**
   - Headline: "Sound that stays with you"
   - Subheadline: Podcast production, mixing, mastering, and sound design

2. **What We Make**
   - Service list:
     - Podcast editing & full production
     - Audio mixing & mastering
     - Sound design for video
     - Audio cleanup & restoration
     - Jingles & sonic branding
     - Intro/outro music production

3. **How It Works**
   - Same 3-step format as video page, adapted for audio

4. **Pricing**
   - Podcast episode edit (up to 60 min): $75 – $200
   - Full podcast launch (intro/outro + first 3 eps): $500 – $1,000
   - Song mixing + mastering: $200 – $500
   - Sound design package (per video): $150 – $400
   - Monthly podcast retainer (4 eps/mo): $600 – $1,200/mo

5. **CTA**
   - "Your audience should hear the difference."
   - Gold button: "Start your audio project"

---

### Page 4: Music (/services/music)

**Purpose**: Three sections — custom songs for purchase, artist showcase as proof of work, and music licensing. This is the most unique page on the site.

**Sections**:

1. **Page Hero**
   - Headline: "Music made to make you feel"
   - Subheadline: Custom songs for special moments, original artists, and music licensing for creators

2. **Section A: Custom Songs**
   - Heading: "A song written just for you"
   - Description: Personalized, fully produced original songs for weddings, anniversaries, proposals, memorials, birthdays, brand anthems, and corporate events. The client fills out a brief describing who it's for, the story, and the mood — and receives a professionally produced original song.
   - This is a high-emotion, high-margin offering. The copy should lean into the emotional impact.
   - Pricing cards:
     - Personal song (birthdays, anniversaries): $500 – $1,000
     - Wedding / proposal song: $800 – $1,500
     - Brand anthem / corporate: $1,000 – $2,500
     - Add a lyric video to any song: +$300 – $600

3. **Section B: Artist Showcase (The Clever Clover Label)**
   - Heading: "Artists we built from the ground up"
   - Intro text: Frame this as proof of capability — "We don't just produce music. We build artists. From writing and production to visual identity and global distribution, these artists were created entirely in-house."
   - Three artist cards:
     - **CLOVER**: Genre, vibe description, latest track (Spotify/streaming embed placeholder), streaming platform links
     - **Aubrey Hightower**: Same format
     - **TrashCat**: Same format
   - Each card should feel like a mini artist profile — dark card with the artist name prominent, genre tags, and streaming links
   - Link to DistroKid or streaming platform chooser for each artist

4. **Section C: Music Licensing**
   - Heading: "License our music for your project"
   - Description: License existing tracks from the Clever Clover catalog for YouTube, podcasts, ads, brand content, and more.
   - Licensing tiers:
     - Personal use (YouTube, podcast): $25 – $75
     - Commercial use (ads, brand content): $150 – $500
     - Exclusive rights: $1,000+
   - Note: "Browse available tracks or tell us what you need and we'll match you with the perfect sound."

5. **CTA**
   - "Every song tells a story. Let's write yours."
   - Gold button: "Commission a custom song"

---

### Page 5: Website Design (/services/web)

**Purpose**: Sell website design services. Position as done-for-you with two options: Wix Studio or custom-coded.

**Sections**:

1. **Page Hero**
   - Headline: "Websites that work as hard as you do"
   - Subheadline: Professional website design and development — Wix Studio or custom-coded, built for your business

2. **What We Build**
   - Two tracks presented side by side:
     - **Wix Studio**: Full visual CMS, client can update content themselves, mobile-responsive, SEO-ready. Best for businesses that want an easy-to-manage site.
     - **Custom-coded**: Next.js / React, blazing fast performance, fully custom design, deployed on modern infrastructure. Best for businesses that want maximum speed and flexibility.
   - Note: "Not sure which is right for you? We'll recommend the best option during your free discovery call."

3. **What's Included**
   - List of what every website project includes:
     - Custom design (no templates)
     - Mobile-responsive layout
     - SEO fundamentals
     - Contact/booking form integration
     - Analytics setup
     - Training on how to update your site
     - 30 days of post-launch support

4. **Pricing**
   - Landing page (1 page): $300 – $600
   - Business website (3-5 pages): $800 – $2,000
   - Full website (6+ pages, CMS, integrations): $2,000 – $4,000
   - E-commerce setup: $1,500 – $3,500
   - Monthly maintenance + updates: $100 – $300/mo

5. **The Clever Clover Advantage**
   - Short section explaining the cross-sell: "Most web designers hand you a site and walk away. We can also produce your brand video, create your background music, design your social media content, and build your entire digital presence — all under one roof."

6. **CTA**
   - "Your website should be your hardest-working employee."
   - Gold button: "Start your website project"

---

### Page 6: Packages (/packages)

**Purpose**: Pre-built bundles at higher ticket prices. Less decision fatigue for the client.

**Sections**:

1. **Page Hero**
   - Headline: "Everything you need. One studio."
   - Subheadline: Pre-built packages that combine our services for maximum impact

2. **Package Cards** (display as large, elevated cards — potentially in a grid or stacked):

   **Business Launch** — Tag: "Most popular"
   - Website (up to 5 pages) + 60-second brand video + basic sound design
   - Everything a new business needs to launch with a professional digital presence
   - $1,800 – $3,500
   - Gold CTA: "Book this package"

   **Podcast Launch** — Tag: "For creators"
   - Podcast intro/outro music + cover art concept + first 3 episodes edited and produced + distribution setup guidance
   - Walk in with an idea, walk out ready to publish
   - $800 – $1,500
   - CTA: "Book this package"

   **Full Brand Build** — Tag: "Premium"
   - Website + brand video + custom brand anthem + social media launch content (5 pieces) + voiceover for any video (via CloverVoiceover.com)
   - The complete creative launch for businesses that want to come out swinging
   - $4,000 – $7,500
   - CTA: "Book this package"

   **Monthly Content Partner** — Tag: "Ongoing"
   - 4 videos + 2 audio pieces + website updates + priority booking
   - For businesses that need a creative team on retainer but can't afford to hire one in-house
   - $2,000 – $3,500/mo
   - CTA: "Book this package"

3. **Custom Package Note**
   - "Don't see exactly what you need? Every package can be customized. Book a discovery call and we'll build a package around your goals."

4. **CTA**
   - Gold button: "Book a free discovery call"

---

### Page 7: Work / Portfolio (/work)

**Purpose**: Curated portfolio. Not a gallery dump — case studies that show the problem, process, and result.

**Sections**:

1. **Page Hero**
   - Headline: "The work speaks"
   - Subheadline: Selected projects across video, audio, music, and web

2. **Filter Bar**
   - Tabs or filter buttons: All | Video | Audio | Music | Web
   - Filters should be smooth with animated transitions

3. **Project Grid**
   - 6-8 project cards in a responsive grid (2-3 columns)
   - Each card shows:
     - Project thumbnail / preview image (placeholder for now)
     - Project title
     - Client name (or "Internal project" for artist work)
     - Tags showing disciplines involved (e.g., "Video + Music + Sound Design")
     - One-line result or description
   - Cards link to expanded case study views (can be modals or separate pages — start with modals)

4. **Case Study Modal/Expanded View**
   - When a project card is clicked, show:
     - The challenge: What did the client need? (1-2 sentences)
     - The solution: What did you build? (1-2 sentences)
     - The deliverables: Tagged list of what was produced
     - Media embed: Video, audio player, or screenshots
     - Testimonial quote (if available — placeholder for now)

---

### Page 8: About (/about)

**Purpose**: Your story. Builds trust and explains why one person can do all of this.

**Sections**:

1. **Page Hero**
   - Headline: "One studio. Every skill."
   - Subheadline: The story behind Clever Clover

2. **The Story**
   - Written in first person or close third person. Key narrative beats:
     - Learned Photoshop, Premiere Pro, Audition, and After Effects before AI was available to the public
     - Built a professional voiceover studio and career (link to CloverVoiceover.com)
     - Wrote and produced music across multiple genres under multiple artist names, distributing globally via DistroKid
     - Mastered DaVinci Resolve for professional video production
     - Now combines all of these skills with AI-assisted workflows to deliver work that would normally require an entire team
     - The throughline: "Everything I create is designed to make people feel something." — a defining statement from a multimedia journalism professor
   - This should feel genuine and confident, not boastful. The story IS the credibility.

3. **Skills & Tools**
   - Visual display (could be a grid of tool icons/logos or a clean list):
     - DaVinci Resolve, Wix Studio, Adobe Creative Suite (Photoshop, Premiere Pro, Audition, After Effects), DistroKid, DAW/Music Production tools, Next.js, AI-assisted workflows
   - Credentials: Eliances member (invitation-only entrepreneur community, SkySong, Scottsdale)

4. **The Advantage**
   - Short closing section: "Most freelancers do one thing. Agencies charge for ten people when you only need one. Clever Clover gives you the creative range of a full team with the speed, consistency, and personal attention of a single dedicated partner."

---

### Page 9: Book a Project (/book)

**Purpose**: One clear call to action. Start the conversation. Minimal friction.

**Sections**:

1. **Page Hero**
   - Headline: "Let's make something"
   - Subheadline: "Tell us about your project and we'll get back to you within 24 hours."

2. **Booking Form**
   - Clean, elegant form against the dark background with gold accent on the submit button
   - Fields:
     - Name (text input)
     - Email (email input)
     - Phone (optional, text input)
     - Project type (dropdown): Video Production, Audio Production, Custom Song, Music Licensing, Website Design, Package, Not sure yet
     - Budget range (dropdown): Under $500, $500 – $1,000, $1,000 – $2,500, $2,500 – $5,000, $5,000+, Not sure yet
     - Tell us about your project (textarea)
     - Submit button: "Send project inquiry"
   - Form should submit to an email or integrate with a service (for now, build the form UI and we'll connect the backend later — use a simple API route that logs the submission or use Formspree/similar)

3. **Alternative Contact**
   - "Prefer to talk? Email us directly at [email placeholder]"
   - "Looking for voiceover specifically? Visit CloverVoiceover.com"
   - Social media links

---

## Navigation Structure

**Top navigation bar** (sticky, with backdrop blur on dark background):
- Logo/Wordmark: "Clever Clover" (left side)
- Nav links (right side): Services (dropdown: Video, Audio, Music, Web), Packages, Work, About
- CTA button (gold): "Book a Project"

**Services dropdown** on hover/click:
- Video Production
- Audio Production
- Music
- Website Design

**Mobile navigation**: Hamburger menu that slides in from the right with the same links.

---

## Technical Requirements

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom theme configuration for the design system colors, fonts, and spacing
- **Animations**: Framer Motion for scroll reveals, page transitions, and hover effects. Install with `npm install framer-motion`
- **Font loading**: Use next/font for Google Fonts (or local fonts)
- **Images**: Use next/image for optimized image loading. Use placeholder images from a service like picsum.photos or solid color blocks for now
- **SEO**: Each page should have proper meta titles and descriptions
- **Responsive**: Mobile-first design, fully responsive across all breakpoints
- **Performance**: Aim for 90+ Lighthouse scores
- **Accessibility**: Proper heading hierarchy, alt text on images, keyboard navigation, sufficient color contrast on all text

## File Structure

```
src/
  app/
    layout.tsx          (root layout with nav, footer, fonts)
    page.tsx            (home page)
    services/
      video/page.tsx
      audio/page.tsx
      music/page.tsx
      web/page.tsx
    packages/page.tsx
    work/page.tsx
    about/page.tsx
    book/page.tsx
  components/
    Navbar.tsx
    Footer.tsx
    ServiceCard.tsx
    PricingCard.tsx
    ProjectCard.tsx
    ArtistCard.tsx
    PackageCard.tsx
    SectionHeading.tsx
    CTASection.tsx
    HeroSection.tsx
    AnimatedReveal.tsx  (reusable scroll animation wrapper)
  lib/
    data.ts             (all service data, pricing, project data in one place)
```

## Tailwind Theme Extensions

In tailwind.config.ts, extend with:
- Custom colors for the gold accent, cream text, dark backgrounds
- Custom font families for the display and body fonts
- Custom animation values if needed

---

## Important Notes for Claude Code

1. **Build incrementally**: Start with the layout (nav + footer), then the home page, then each service page one at a time. Test each page before moving to the next.

2. **Reusable components**: Create shared components (HeroSection, SectionHeading, PricingCard, CTASection, AnimatedReveal) early and reuse them across pages. This keeps the design consistent and the code maintainable.

3. **Data-driven**: Put all service descriptions, pricing, and project data in a central data file (lib/data.ts). Pages should import from there, not hardcode content. This makes future updates easy.

4. **Placeholder content is fine**: Use placeholder images and video embeds for now. The structure and design are what matter first — real media will be swapped in later.

5. **The gold accent should be used sparingly**: CTAs, hover highlights, thin accent lines, and key headings only. If everything is gold, nothing is gold. The restraint is what makes it luxurious.

6. **Test mobile at every stage**: This site needs to look just as premium on a phone as on desktop. Many potential clients will find it on mobile first.

7. **The dark aesthetic must maintain readability**: Cream/warm white text on dark backgrounds needs sufficient contrast. Body text should never feel hard to read.
