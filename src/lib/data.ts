// ─── Home page ────────────────────────────────────────────────────────────────

export const services = [
  {
    id: "video",
    title: "Video Production",
    description:
      "Cinematic editing, color grading, and motion graphics in DaVinci Resolve — from 30-second social content to full brand stories.",
    href: "/services/video",
    startingAt: "Projects from $75",
  },
  {
    id: "audio",
    title: "Audio Production",
    description:
      "Podcast production, mixing, mastering, and sound design that makes your audience lean in and stay there.",
    href: "/services/audio",
    startingAt: "Projects from $40",
  },
  {
    id: "music",
    title: "Music",
    description:
      "Custom songs for special moments, original artists distributed globally, and licensing for creators and brands.",
    href: "/services/music",
    startingAt: "Custom songs from $19",
  },
  {
    id: "web",
    title: "Website Design",
    description:
      "Professional sites built in Wix Studio or custom-coded in Next.js — designed to look premium and convert.",
    href: "/services/web",
    startingAt: "Sites from $150",
  },
  {
    id: "products",
    title: "Digital Products",
    description:
      "AI music production prompt packs, guides, and templates — refined over 8,000 songs.",
    href: "/products",
    startingAt: "Prompt packs from $19",
  },
];

export const proofItems = [
  "8,000+ Songs Produced",
  "Eliances Member",
  "4 Artists Distributed Globally",
  "5,000+ AI Tracks Generated",
  "DaVinci Resolve",
  "Phoenix, Arizona",
  "DistroKid Distribution",
  "Wix Studio",
  "Next.js",
  "Adobe Creative Suite",
  "RadiaRadio on YouTube",
];


// ─── Video page ───────────────────────────────────────────────────────────────

export const videoServiceTypes = [
  {
    title: "Brand & promotional videos",
    description: "Tell your story in 60–180 seconds and make it unforgettable.",
  },
  {
    title: "Social media content",
    description: "Reels, TikToks, and Shorts cut for the platform and the scroll.",
  },
  {
    title: "Event recaps & highlight reels",
    description: "Capture the energy of the moment and make it last.",
  },
  {
    title: "Lyric videos & animated lyric videos",
    description: "Motion-graphic lyric videos that elevate the listening experience.",
  },
  {
    title: "Testimonial & interview edits",
    description: "Clean, professional cuts that let the story carry the weight.",
  },
  {
    title: "Explainer & educational videos",
    description: "Simplify the complex — clear visuals, clear message.",
  },
  {
    title: "Donor appreciation & fundraising videos",
    description: "Emotionally resonant pieces that inspire action and generosity.",
  },
];

export const videoProcess = [
  {
    num: "01",
    title: "Discovery",
    description:
      "Tell us what you need and who it's for. We'll align on the vision, tone, and deliverables before a single frame is cut.",
  },
  {
    num: "02",
    title: "Production",
    description:
      "We handle editing, motion graphics, color grading, and sound in DaVinci Resolve. You get progress updates throughout.",
  },
  {
    num: "03",
    title: "Delivery",
    description:
      "Receive your final video with revisions included — export-ready in every format you need.",
  },
];

export const videoPricing = [
  { title: "Social media video (30–60s)", price: "$75" },
  { title: "Lyric video (animated)", price: "$150" },
  { title: "Brand / promo video (1–3 min)", price: "$250" },
  { title: "Event recap", price: "$400" },
  { title: "Monthly content retainer (4 videos)", price: "$500/mo" },
];


// ─── Audio page ───────────────────────────────────────────────────────────────

export const audioServiceTypes = [
  {
    title: "Podcast editing & full production",
    description: "From raw recording to polished, publish-ready episode.",
  },
  {
    title: "Audio mixing & mastering",
    description: "Professional level and balance for music, voice, or any audio project.",
  },
  {
    title: "Sound design for video",
    description: "Foley, ambience, and effects that make your visuals feel alive.",
  },
  {
    title: "Audio cleanup & restoration",
    description: "Remove noise, hum, and room sound — rescue recordings that matter.",
  },
  {
    title: "Jingles & sonic branding",
    description: "A few seconds of the right sound can define a brand forever.",
  },
  {
    title: "Intro/outro music production",
    description: "Original music that makes your show instantly recognizable.",
  },
];

export const audioProcess = [
  {
    num: "01",
    title: "Send your files",
    description:
      "Upload your raw recordings or assets. We'll assess what needs to be done and confirm the scope.",
  },
  {
    num: "02",
    title: "We get to work",
    description:
      "Editing, mixing, cleanup, and mastering — every step handled with precision and care.",
  },
  {
    num: "03",
    title: "You get the final product",
    description:
      "Delivered in your preferred format, ready to publish, broadcast, or distribute.",
  },
];

export const audioPricing = [
  { title: "Podcast episode edit (up to 60 min)", price: "$40" },
  { title: "Sound design package (per video)", price: "$75" },
  { title: "Song mixing + mastering", price: "$100" },
  { title: "Full podcast launch (intro/outro + first 3 eps)", price: "$250" },
  { title: "Monthly podcast retainer (4 eps/mo)", price: "$300/mo" },
];

// ─── Music page ───────────────────────────────────────────────────────────────

export const customSongPricing = [
  { title: "Personal song (birthdays, anniversaries)", price: "$19" },
  { title: "Wedding / proposal song", price: "$29" },
  { title: "Brand anthem / corporate", price: "$39" },
  { title: "Add a lyric video to any song", price: "$69" },
];

export interface Artist {
  id: string;
  name: string;
  tagline: string;
  genre: string;
  vibe: string;
  gradientFrom: string;
  gradientAccent: string;
  spotifyArtistUrl: string;
  spotifyTrackId: string;
  appleMusicUrl: string;
  youtubeMusicUrl: string;
  beatportUrl: string;
}

export const artists: Artist[] = [
  {
    id: "clover",
    name: "CLOVER",
    tagline: "The Everything Bagel Producer",
    genre: "Club/Dance · Progressive House · Country · Rap/Hip-Hop",
    vibe: "Can't stay in one lane. Every genre. Every mood.",
    gradientFrom: "from-emerald-950",
    gradientAccent: "rgba(52,211,153,0.18)",
    spotifyArtistUrl: "https://open.spotify.com/artist/6MFKPgbFJDAR91KAx8wxuq",
    spotifyTrackId: "7eSwC6T4MveQAGRSByxn9A",
    appleMusicUrl: "https://music.apple.com/us/artist/clover/1826916732",
    youtubeMusicUrl: "https://music.youtube.com/channel/UCVFAoNWt_uPkrGqkbK0HNQw",
    beatportUrl: "https://www.beatport.com/artist/clover/460705",
  },
  {
    id: "aubrey",
    name: "Aubrey Hightower",
    tagline: "The Voice of Emotion",
    genre: "Pop · EDM · Singer/Songwriter",
    vibe: "Big heart, bold presence.",
    gradientFrom: "from-rose-950",
    gradientAccent: "rgba(251,113,133,0.18)",
    spotifyArtistUrl: "https://open.spotify.com/artist/02YzdFz3dg4tf9uxM5G8TN",
    spotifyTrackId: "4qx9thqWJPyJXREpkwHxYy",
    appleMusicUrl: "https://music.apple.com/us/artist/aubrey-hightower/1826040982",
    youtubeMusicUrl: "https://music.youtube.com/channel/UCjAkjDNsaqIwxslw96iYlCg",
    beatportUrl: "https://www.beatport.com/artist/aubrey-hightower/2345564",
  },
  {
    id: "trashcat",
    name: "TrashCat",
    tagline: "Unhinged. Wildcard Energy. Got Memes…?",
    genre: "EDM · Tech-House · Dubstep · G-House · Hip-Hop",
    vibe: "Unhinged. Wildcard energy. Got memes…?",
    gradientFrom: "from-violet-950",
    gradientAccent: "rgba(167,139,250,0.18)",
    spotifyArtistUrl: "https://open.spotify.com/artist/7fAlkYj8HVShNDITziAoso",
    spotifyTrackId: "0WfOSiDxnX2ilZzEhgFut0",
    appleMusicUrl: "https://music.apple.com/us/artist/trashcat/1863558303",
    youtubeMusicUrl: "https://music.youtube.com/channel/UCgp6tWjBdeyyySvk0Kv7igQ",
    beatportUrl: "https://www.beatport.com/artist/trashcat/703347",
  },
];

export const musicVideoPricing = [
  { title: "Lyric video (animated)", price: "$150" },
  { title: "Visualizer / motion graphics video", price: "$250" },
  { title: "Full music video (original visuals, editing, color)", price: "$400" },
  { title: "Song-to-screen (write + produce song + music video)", price: "$750" },
];

export const licensingTiers = [
  {
    title: "Personal use",
    subtitle: "YouTube, podcast, personal projects",
    price: "$15",
    description: "License a track for non-commercial use across personal content.",
  },
  {
    title: "Commercial use",
    subtitle: "Ads, brand content, paid campaigns",
    price: "$75",
    description: "Full commercial rights for monetized content and brand campaigns.",
  },
  {
    title: "Exclusive rights",
    subtitle: "Own the track entirely",
    price: "$500",
    description:
      "Full ownership transfer — the track is yours and pulled from public distribution.",
  },
];

// ─── Web page ─────────────────────────────────────────────────────────────────

export const webTracks = [
  {
    id: "wix",
    name: "Wix Studio",
    tagline: "Powerful CMS, fully managed",
    description:
      "A complete visual CMS that you can update yourself. Mobile-responsive, SEO-ready, and designed to look custom — not templated.",
    bestFor: "Businesses that want an easy-to-manage site with professional results.",
    features: ["Visual drag-and-drop editing", "Client-managed content updates", "Built-in SEO tools", "E-commerce ready", "Fast hosting included"],
  },
  {
    id: "custom",
    name: "Custom-Coded",
    tagline: "Next.js / React, built to perform",
    description:
      "Fully custom design and development. Blazing-fast performance, pixel-perfect execution, and complete flexibility.",
    bestFor: "Businesses that want maximum speed, uniqueness, and technical flexibility.",
    features: ["100% custom design", "Next.js / React codebase", "Deployed on Vercel or your preferred host", "Lighthouse 95+ performance", "API and integration-ready"],
  },
];

export const webIncludes = [
  "Custom design — no templates",
  "Mobile-responsive layout",
  "SEO fundamentals",
  "Contact / booking form integration",
  "Analytics setup",
  "Training on how to update your site",
  "30 days of post-launch support",
];

export const webPricing = [
  { title: "Landing page (1 page)", price: "$150" },
  { title: "Business website (3–5 pages)", price: "$400" },
  { title: "E-commerce setup", price: "$750" },
  { title: "Full website (6+ pages, CMS, integrations)", price: "$1,000" },
  { title: "Monthly maintenance + updates", price: "$50/mo" },
];

// ─── Packages page ────────────────────────────────────────────────────────────

export type PackageTier = "quick" | "popular" | "premium";

export interface Package {
  id: string;
  tier: PackageTier;
  title: string;
  tag?: string;
  tagColor?: "gold" | "muted";
  description: string;
  includes: string[];
  price: string;
  href: string;
  ctaText?: string;
}

export const packages: Package[] = [
  // ── Quick Starts ──────────────────────────────────────────────────────────
  {
    id: "quick-social-video",
    tier: "quick",
    title: "Quick Start — Social Video",
    description: "A polished 30–60 second video ready to post on any platform. Fast turnaround, no fluff.",
    includes: [
      "30–60 second edited video",
      "Platform-optimized export",
      "Sound design included",
    ],
    price: "$75",
    href: "/book",
    ctaText: "Book this",
  },
  {
    id: "quick-landing-page",
    tier: "quick",
    title: "Quick Start — Landing Page",
    description: "A single-page website that looks premium, loads fast, and converts visitors into inquiries.",
    includes: [
      "Single page, mobile-ready",
      "Contact / booking form",
      "SEO fundamentals",
    ],
    price: "$150",
    href: "/book",
    ctaText: "Book this",
  },
  {
    id: "quick-podcast-episode",
    tier: "quick",
    title: "Quick Start — Podcast Episode",
    description: "One episode edited, polished, and delivered — ready to publish without the headache.",
    includes: [
      "One episode edited (up to 60 min)",
      "Noise reduction & audio cleanup",
      "Ready-to-publish file",
    ],
    price: "$40",
    href: "/book",
    ctaText: "Book this",
  },
  // ── Popular ───────────────────────────────────────────────────────────────
  {
    id: "podcast-launch",
    tier: "popular",
    title: "Podcast Launch",
    tag: "For creators",
    tagColor: "muted",
    description:
      "Walk in with an idea, walk out ready to publish. Everything you need to launch a polished, professional podcast.",
    includes: [
      "Podcast intro/outro music (original)",
      "Cover art concept",
      "First 3 episodes edited & produced",
      "Distribution setup guidance",
      "Show notes template",
    ],
    price: "$400",
    href: "/book",
    ctaText: "Book this package",
  },
  {
    id: "business-launch",
    tier: "popular",
    title: "Business Launch",
    tag: "Most popular",
    tagColor: "gold",
    description:
      "Website (up to 5 pages) + 60-second brand video + sound design. Everything a new business needs to launch with a professional digital presence.",
    includes: [
      "Website — up to 5 pages",
      "60-second brand video",
      "Sound design for video",
      "SEO fundamentals",
      "30 days post-launch support",
    ],
    price: "$900",
    href: "/book",
    ctaText: "Book this package",
  },
  {
    id: "song-to-screen",
    tier: "popular",
    title: "Song-to-Screen",
    tag: "Full creative",
    tagColor: "gold",
    description:
      "From silence to a finished, distributed song with a professional music video — the complete artistic vision, handled entirely in-house.",
    includes: [
      "Custom original song (written + produced)",
      "Full music video in DaVinci Resolve",
      "Color grading & sound design",
      "Distribution setup via DistroKid",
      "Export-ready for all platforms",
    ],
    price: "$750",
    href: "/book",
    ctaText: "Book this package",
  },
  // ── Premium ───────────────────────────────────────────────────────────────
  {
    id: "full-brand",
    tier: "premium",
    title: "Full Brand Build",
    tag: "Premium",
    tagColor: "gold",
    description:
      "The complete creative launch. For businesses that want to come out swinging with a cohesive, premium presence across every channel.",
    includes: [
      "Custom website design (up to 8 pages)",
      "60–90 second cinematic brand video",
      "Original brand anthem / theme music",
      "5 social media content pieces",
      "Professional voiceover for any video",
      "Full SEO setup",
      "30 days post-launch support",
      "2 rounds of revisions on all deliverables",
    ],
    price: "$2,000",
    href: "/book",
    ctaText: "Book a discovery call",
  },
  {
    id: "monthly-partner",
    tier: "premium",
    title: "Monthly Content Partner",
    tag: "Ongoing",
    tagColor: "muted",
    description:
      "Your creative team on retainer — without the overhead of hiring in-house. Consistent, high-quality content every month.",
    includes: [
      "4 videos per month",
      "2 audio pieces per month",
      "Website updates",
      "Priority booking",
      "Monthly strategy check-in",
    ],
    price: "$1,000/mo",
    href: "/book",
    ctaText: "Book a discovery call",
  },
];

// ─── Work / Portfolio page ────────────────────────────────────────────────────

export type WorkCategory = "Video" | "Audio" | "Music" | "Web";

export interface WorkProject {
  id: number;
  title: string;
  client: string;
  category: WorkCategory;
  tags: string[];
  description: string;
  gradientFrom?: string;
  gradientTo?: string;
  accentColor?: string;
  youtubeId?: string;
  spotifyEpisodeId?: string;
  spotifyShowId?: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  testimonial?: string;
  testimonialAuthor?: string;
  externalUrl?: string;
}

export const workProjects: WorkProject[] = [
  {
    id: 1,
    title: "Better Than Yours — Comic-Book Pop Motion Video",
    client: "CLOVER",
    category: "Video",
    tags: ["Music", "Video", "Motion Graphics"],
    description:
      "Original pop punk track — written, produced, and brought to life as a comic-book style motion video. Songwriting, music production, and video creation delivered as a complete package by one person.",
    youtubeId: "dSg7tiVy89Q",
    externalUrl: "https://www.youtube.com/watch?v=dSg7tiVy89Q",
    challenge: "Produce a complete song-to-screen release — original track plus full motion video — entirely solo, on a tight timeline.",
    solution: "Wrote, recorded, and produced the song in-house, then built a comic-book style motion video in DaVinci Resolve with custom graphics and frame-by-frame animation.",
    deliverables: ["Original song (written + produced)", "Comic-book motion video", "Color grading", "YouTube + streaming release"],
  },
  {
    id: 2,
    title: "What I Bring to the Table — A Spoken Word Business Card",
    client: "CLOVER",
    category: "Video",
    tags: ["Video", "Music", "Branding"],
    description:
      "A spoken word rap transformed into a cinematic lyric video — turning a business pitch into a creative brand piece. Concept, writing, music production, animation, and editing all done in-house.",
    youtubeId: "PmNJKyAREXk",
    externalUrl: "https://www.youtube.com/watch?v=PmNJKyAREXk",
    challenge: "Turn a personal brand pitch into something visually compelling and shareable — not a slide deck, but a creative statement.",
    solution: "Wrote and produced an original spoken word rap, then built a cinematic animated lyric video that serves as both a portfolio piece and a living business card.",
    deliverables: ["Original spoken word track", "Cinematic lyric video", "Brand identity integration", "YouTube release"],
  },
  {
    id: 3,
    title: "NBA Finals — Hiring Creatives",
    client: "CLOVER",
    category: "Video",
    tags: ["Video", "Content Creation"],
    description:
      "On-location talking head video shot at the NBA Finals, discussing the value of hiring creative professionals. Demonstrates video production, on-camera presence, and real-world content creation.",
    youtubeId: "SZ95ZRveEk0",
    externalUrl: "https://www.youtube.com/watch?v=SZ95ZRveEk0",
    challenge: "Capture compelling, professional-quality content in an uncontrolled live-event environment without a dedicated crew.",
    solution: "Shot, directed, and delivered a clean talking head video on location at the NBA Finals — proving that professional results don't require a studio setup.",
    deliverables: ["On-location video production", "Talking head edit", "Sound mixing", "YouTube release"],
  },
  {
    id: 4,
    title: "Cheers to the Presidents — Downtown Phoenix Music Video",
    client: "Aubrey Hightower",
    category: "Video",
    tags: ["Music", "Video", "AI", "Songwriting", "Local"],
    description:
      "What happens when dead presidents come back to life on the Phoenix streets named after them? An original country-pop anthem featuring 15+ real downtown Phoenix bars, restaurants, and landmarks — Roosevelt Row, Valley Bar, Crescent Ballroom, Bitter & Twisted, Cibo, and more — blended with AI-generated scenes bringing the presidents into present day. Songwriting, production, AI video, and editing — all one person.",
    youtubeId: "TPLhUaZaoRg",
    externalUrl: "https://www.youtube.com/watch?v=TPLhUaZaoRg",
    challenge: "Create a music video that authentically represents downtown Phoenix's real venues and culture while weaving in a creative AI-generated concept — without a film crew, location budget, or production team.",
    solution: "Wrote and produced an original country-pop anthem, shot on-location at 15+ real Phoenix landmarks, then used AI-generated video to resurrect the presidents and blend historical figures into the present-day streets they were named for.",
    deliverables: ["Original song (written + produced)", "On-location Phoenix footage", "AI-generated video segments", "Full music video edit", "YouTube release"],
  },
  {
    id: 5,
    title: "TrashCat — Single Release",
    client: "Clever Clover Label",
    category: "Music",
    tags: ["Music", "Audio"],
    description: "Production, mixing, and release of a hyperpop single with custom artwork concept.",
    gradientFrom: "from-fuchsia-950",
    gradientTo: "to-dark-300",
    accentColor: "rgba(232,121,249,0.12)",
    challenge: "Release a high-energy hyperpop single that stood out in an extremely crowded genre.",
    solution: "Leaned into the chaotic, maximalist production style that defines TrashCat — loud, layered, and intentionally jarring in the best way.",
    deliverables: ["Single production", "Mixing & mastering", "Distribution to all platforms"],
  },
  {
    id: 6,
    title: "Paradoxxed — The Walt Paradox (Episode 5)",
    client: "Clever Clover Studio",
    category: "Audio",
    tags: ["Audio", "Music", "Storytelling"],
    description:
      "Paradoxxed is an original technology storytelling podcast — science fiction told in a true-crime style, with a twist ending every episode. Written, voiced in multiple character performances, and fully produced with original music and sound design. In 'The Walt Paradox,' AI is released 100 years early into the hands of Walt Disney. What happens next changes everything. 6 episodes produced. All writing, voice acting, music, and sound design by one person.",
    spotifyEpisodeId: "6GlqEn4Fb9XZirCJhThBqs",
    externalUrl: "https://open.spotify.com/episode/6GlqEn4Fb9XZirCJhThBqs",
    challenge: "Create a fully produced narrative fiction podcast — with multiple voice characters, original music, and layered sound design — entirely solo, with no cast or production team.",
    solution: "Wrote all scripts, performed every character voice, composed original music and sound design, and produced all 6 episodes in-house. Built a signature format: science fiction told with the tension and structure of true crime.",
    deliverables: ["6 original episodes written + produced", "Multiple character voice performances", "Original music per episode", "Full sound design", "Distributed on Spotify"],
  },
  {
    id: 9,
    title: "Clever Clover Podcast — Daily Tech & AI News",
    client: "Clever Clover Studio",
    category: "Audio",
    tags: ["Audio", "Music", "Content Creation"],
    description:
      "A daily tech and AI news podcast featuring multiple original characters — all voiced, written, and produced by one person. Two hosts debate, interrupt, and correct each other across topics in tech, AI, and culture. All voice performances, writing, editing, music, and sound design produced entirely in-house. 6 episodes produced.",
    spotifyShowId: "55jTLjzEIULDjwkeYwYiJc",
    externalUrl: "https://open.spotify.com/show/55jTLjzEIULDjwkeYwYiJc",
    challenge: "Build a multi-character daily podcast with distinct, believable host personalities — without a co-host, writing team, or production budget.",
    solution: "Wrote all content, performed every character voice, produced original music and sound design, and released 6 episodes entirely in-house — building a full cast from one person.",
    deliverables: ["6 episodes written + produced", "Multiple original character voices", "Original music and sound design", "Distributed on Spotify"],
  },
  {
    id: 7,
    title: "Wedding Custom Song",
    client: "Private Client",
    category: "Music",
    tags: ["Music", "Custom Song"],
    description: "An original song written and produced for a couple's first dance, capturing their specific story and relationship.",
    gradientFrom: "from-rose-950",
    gradientTo: "to-dark-300",
    accentColor: "rgba(251,113,133,0.12)",
    challenge: "Write and produce a genuinely personal, professional-quality song — not a generic ballad — within a 3-week timeline.",
    solution: "Conducted an in-depth brief to capture the couple's story, references, and emotional tone. Delivered a fully produced original track with two revision rounds.",
    deliverables: ["Original song (3:30)", "Full production & mastering", "Lyric sheet", "High-quality WAV + MP3 delivery"],
    testimonial: "We still listen to it every anniversary. Worth every penny.",
    testimonialAuthor: "Private Client",
  },
  {
    id: 8,
    title: "Small Business Website",
    client: "Confidential Client",
    category: "Web",
    tags: ["Web", "SEO"],
    description: "A 5-page Wix Studio website with booking integration, SEO setup, and client training for a local service business.",
    gradientFrom: "from-teal-950",
    gradientTo: "to-dark-300",
    accentColor: "rgba(45,212,191,0.12)",
    challenge: "The client had an outdated site that looked unprofessional and had no booking system or SEO presence.",
    solution: "Full redesign in Wix Studio with a clean, mobile-first layout, integrated booking widget, and foundational SEO configuration.",
    deliverables: ["5-page Wix Studio site", "Booking system integration", "SEO setup", "Client training session"],
  },
  {
    id: 11,
    title: "What If Our Pets Were Really God All Along",
    client: "CLOVER",
    category: "Video",
    tags: ["Music", "Video", "Songwriting"],
    description:
      "An original song exploring the idea that our creator and loved ones who have passed watch over us through the eyes of our pets. Written, produced, and brought to life as a music video using real images animated in post-production. Dedicated to the creator's late grandparents.",
    youtubeId: "qZWpe2nQBh4",
    externalUrl: "https://www.youtube.com/watch?v=qZWpe2nQBh4",
    challenge: "Create a deeply personal music video that honors real people without traditional film footage — working entirely from family photos.",
    solution: "Wrote an original song, produced the full track, then animated family photographs in post-production to build a moving, cinematic music video dedicated to late grandparents.",
    deliverables: ["Original song (written + produced)", "Animated photo music video", "Color grading", "YouTube release"],
  },
  {
    id: 12,
    title: "EVERY Body Is Beautiful",
    client: "CLOVER",
    category: "Video",
    tags: ["Music", "Video", "Motion Graphics"],
    description:
      "An original body positivity anthem declaring that every body is beautiful. Written, produced, and paired with a cinematic music video designed to encourage self-love and challenge how we see ourselves.",
    youtubeId: "5BOxus77zZI",
    externalUrl: "https://www.youtube.com/watch?v=5BOxus77zZI",
    challenge: "Write and produce an anthem with genuine emotional weight — one that feels personal rather than generic in an oversaturated category.",
    solution: "Focused on specific, honest language in the songwriting, then built a music video with bold motion graphics that amplified the visual message of the lyrics.",
    deliverables: ["Original anthem (written + produced)", "Cinematic music video", "Motion graphics", "YouTube release"],
  },
  {
    id: 13,
    title: "A John Wayne Song for Dad — Father's Day Commission",
    client: "Private Commission",
    category: "Video",
    tags: ["Music", "Video", "Client Work"],
    description:
      "A client brought lyrics and a vision — turn them into a fully produced song and lyric video featuring his father as John Wayne, his dad's favorite actor. The final piece included family photos and animated clips. His father cries every time he watches it.",
    youtubeId: "RJxsc3s3W-8",
    externalUrl: "https://www.youtube.com/watch?v=RJxsc3s3W-8",
    challenge: "Take a client's raw, heartfelt lyrics and transform them into a fully produced song and visual tribute — with no studio footage, only family photos and a creative brief.",
    solution: "Produced an original country-inspired track from the client's lyrics, then built an animated lyric video incorporating family photos and custom John Wayne-themed visuals.",
    deliverables: ["Full song production from client lyrics", "Animated lyric video", "Family photo integration", "YouTube + private delivery"],
    testimonial: "His father cries every time he watches it. This is what it looks like when music and video make people feel something.",
    testimonialAuthor: "Private Client",
  },
];

// Featured work on homepage — derived from the first 3 workProjects
export const featuredWork = workProjects.filter((p) => [1, 2, 3].includes(p.id));

// Video page portfolio samples
export const videoSamples = workProjects.filter((p) => [11, 12, 13].includes(p.id));

// ─── Products page ────────────────────────────────────────────────────────────

export const productStats = [
  { value: "8,000+", label: "Songs Generated" },
  { value: "2+ Years", label: "Daily Production" },
  { value: "Radio-Ready", label: "Results" },
];

export const promptPacks = [
  {
    genre: "Modern Country Hits",
    description: "Polished, contemporary country with strong hooks and radio-ready production.",
    price: "$29",
  },
  {
    genre: "Lo-Fi & Chill",
    description: "Warm, textured beats perfect for focus, study, and relaxed atmospheres.",
    price: "$19",
  },
  {
    genre: "Cinematic Scores",
    description: "Orchestral and hybrid cinematic prompts for trailers, films, and brand content.",
    price: "$49",
  },
  {
    genre: "Pop Anthems",
    description: "Huge, hook-driven pop with polished production and emotional impact.",
    price: "$29",
  },
  {
    genre: "R&B / Soul",
    description: "Smooth, soulful, and emotionally layered. Ranges from classic soul to modern R&B.",
    price: "$29",
  },
  {
    genre: "Hip-Hop Beats",
    description: "From boom-bap to trap to melodic rap — versatile prompts for any hip-hop style.",
    price: "$29",
  },
  {
    genre: "Electronic / EDM",
    description: "High-energy electronic production across house, techno, synthwave, and beyond.",
    price: "$29",
  },
  {
    genre: "Acoustic & Singer-Songwriter",
    description: "Intimate, authentic acoustic music that feels genuinely human and personal.",
    price: "$19",
  },
];

export const godModeGuide = {
  title: "The God-Mode Guide",
  subtitle: "The complete methodology",
  description:
    "Not just a list of prompts — a complete framework for thinking about AI music production. Learn how to engineer genre conventions, layer instrumentation, direct vocal styles, and consistently produce tracks that sound professionally mastered rather than AI-generated.",
  whatYouGet: [
    "The full God-Mode methodology, explained",
    "How to structure prompts for consistent, repeatable results",
    "Genre convention breakdowns across 15+ styles",
    "Vocal direction techniques",
    "Instrumentation layering strategies",
    "Production quality engineering",
    "Refined across 8,000+ real generations",
  ],
  price: "$49 – $79",
};

// ─── About page ───────────────────────────────────────────────────────────────

export const tools = [
  { name: "DaVinci Resolve", category: "Video" },
  { name: "Adobe Premiere Pro", category: "Video" },
  { name: "After Effects", category: "Motion" },
  { name: "Adobe Audition", category: "Audio" },
  { name: "DAW / Music Production", category: "Audio" },
  { name: "Adobe Photoshop", category: "Design" },
  { name: "Wix Studio", category: "Web" },
  { name: "Next.js / React", category: "Web" },
  { name: "TypeScript", category: "Web" },
  { name: "DistroKid", category: "Music" },
  { name: "AI-assisted workflows", category: "Production" },
  { name: "Suno AI Music", category: "Production" },
  { name: "Adobe Creative Suite", category: "Design" },
];
