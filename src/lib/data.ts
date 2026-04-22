// ─── Home page ────────────────────────────────────────────────────────────────

export const services = [
  {
    id: "video",
    title: "Video Production",
    description:
      "Cinematic editing, color grading, and motion graphics in DaVinci Resolve — from 30-second social content to full brand stories.",
    href: "/services/video",
  },
  {
    id: "audio",
    title: "Audio Production",
    description:
      "Podcast production, mixing, mastering, and sound design that makes your audience lean in and stay there.",
    href: "/services/audio",
  },
  {
    id: "music",
    title: "Music",
    description:
      "Custom songs for special moments, original artists distributed globally, and licensing for creators and brands.",
    href: "/services/music",
  },
  {
    id: "web",
    title: "Website Design",
    description:
      "Professional sites built in Wix Studio or custom-coded in Next.js — designed to look premium and convert.",
    href: "/services/web",
  },
  {
    id: "products",
    title: "Digital Products",
    description:
      "AI music production prompt packs, guides, and templates — refined over 8,000 songs.",
    href: "/products",
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
  { title: "Social media video (30–60s)", price: "$150 – $300" },
  { title: "Brand / promo video (1–3 min)", price: "$500 – $1,200" },
  { title: "Lyric video (animated)", price: "$300 – $800" },
  { title: "Full event recap", price: "$800 – $2,000" },
  { title: "Monthly content retainer (4 videos)", price: "$1,000 – $1,800 /mo" },
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
  { title: "Podcast episode edit (up to 60 min)", price: "$75 – $200" },
  { title: "Full podcast launch (intro/outro + first 3 eps)", price: "$500 – $1,000" },
  { title: "Song mixing + mastering", price: "$200 – $500" },
  { title: "Sound design package (per video)", price: "$150 – $400" },
  { title: "Monthly podcast retainer (4 eps/mo)", price: "$600 – $1,200 /mo" },
];

// ─── Music page ───────────────────────────────────────────────────────────────

export const customSongPricing = [
  { title: "Personal song (birthdays, anniversaries)", price: "$500 – $1,000" },
  { title: "Wedding / proposal song", price: "$800 – $1,500" },
  { title: "Brand anthem / corporate", price: "$1,000 – $2,500" },
  { title: "Add a lyric video to any song", price: "+ $300 – $600" },
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
  { title: "Lyric video (animated)", price: "$300 – $800" },
  { title: "Visualizer / motion graphics video", price: "$500 – $1,200" },
  { title: "Full music video (original visuals, editing, color)", price: "$800 – $2,500" },
  { title: "Song-to-screen (write + produce song + music video)", price: "$1,500 – $4,000" },
];

export const licensingTiers = [
  {
    title: "Personal use",
    subtitle: "YouTube, podcast, personal projects",
    price: "$25 – $75",
    description: "License a track for non-commercial use across personal content.",
  },
  {
    title: "Commercial use",
    subtitle: "Ads, brand content, paid campaigns",
    price: "$150 – $500",
    description: "Full commercial rights for monetized content and brand campaigns.",
  },
  {
    title: "Exclusive rights",
    subtitle: "Own the track entirely",
    price: "$1,000+",
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
  { title: "Landing page (1 page)", price: "$300 – $600" },
  { title: "Business website (3–5 pages)", price: "$800 – $2,000" },
  { title: "Full website (6+ pages, CMS, integrations)", price: "$2,000 – $4,000" },
  { title: "E-commerce setup", price: "$1,500 – $3,500" },
  { title: "Monthly maintenance + updates", price: "$100 – $300 /mo" },
];

// ─── Packages page ────────────────────────────────────────────────────────────

export const packages = [
  {
    id: "business-launch",
    title: "Business Launch",
    tag: "Most popular",
    tagColor: "gold",
    description:
      "Website (up to 5 pages) + 60-second brand video + basic sound design. Everything a new business needs to launch with a professional digital presence.",
    includes: [
      "Website — up to 5 pages",
      "60-second brand video",
      "Sound design for video",
      "SEO fundamentals",
      "30 days post-launch support",
    ],
    price: "$1,800 – $3,500",
    href: "/book",
  },
  {
    id: "song-to-screen",
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
    price: "$1,500 – $4,000",
    href: "/book",
  },
  {
    id: "podcast-launch",
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
    price: "$800 – $1,500",
    href: "/book",
  },
  {
    id: "full-brand",
    title: "Full Brand Build",
    tag: "Premium",
    tagColor: "gold",
    description:
      "The complete creative launch. For businesses that want to come out swinging with a cohesive, premium presence.",
    includes: [
      "Website (full build)",
      "Brand video",
      "Custom brand anthem",
      "Social media launch content (5 pieces)",
      "Voiceover for any video (via CloverVoiceover.com)",
    ],
    price: "$4,000 – $7,500",
    href: "/book",
  },
  {
    id: "monthly-partner",
    title: "Monthly Content Partner",
    tag: "Ongoing",
    tagColor: "muted",
    description:
      "A creative team on retainer. For businesses that need consistent, high-quality content without the overhead of a full in-house team.",
    includes: [
      "4 videos per month",
      "2 audio pieces per month",
      "Website updates",
      "Priority booking",
      "Monthly strategy check-in",
    ],
    price: "$2,000 – $3,500 /mo",
    href: "/book",
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
    title: "Eliances Event Recap",
    client: "Eliances",
    category: "Video",
    tags: ["Video", "Audio"],
    description: "A 60-second highlight reel capturing the energy of an invitation-only entrepreneur summit in Scottsdale.",
    gradientFrom: "from-sky-950",
    gradientTo: "to-dark-300",
    accentColor: "rgba(56,189,248,0.12)",
    challenge: "Distill a full day of high-energy networking into a shareable, professional 60-second reel.",
    solution: "Fast-paced editing with carefully curated moments, matched to an energetic music bed that kept the pacing tight.",
    deliverables: ["60-second event recap", "Social-optimized cut (9:16)", "Audio mix"],
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
    title: "Podcast Series — Full Production",
    client: "Confidential Client",
    category: "Audio",
    tags: ["Audio", "Podcast"],
    description: "End-to-end production for a 12-episode business podcast series, from raw interviews to publish-ready episodes.",
    gradientFrom: "from-orange-950",
    gradientTo: "to-dark-300",
    accentColor: "rgba(251,146,60,0.12)",
    challenge: "Turn unedited, 90-minute raw interview recordings into tight, polished 30-minute episodes — consistently, at scale.",
    solution: "Built a streamlined post-production workflow with consistent audio treatment, intro/outro music, and show notes for every episode.",
    deliverables: ["12 edited episodes", "Custom intro/outro music", "Show notes", "Distribution setup"],
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
