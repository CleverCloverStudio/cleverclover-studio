# Music Licensing Library — Build Instructions for Claude Code

## Overview
Create a new page at /library (or /services/music/library) that serves as a browsable, filterable music licensing library. This page lets visitors preview tracks via Spotify embeds, filter by artist/genre/mood, and license tracks at flat prices ($4 personal use, $7 commercial use). Link to this page from the Music Licensing section on /services/music.

Maintain the existing dark premium aesthetic throughout. This page should feel like browsing a high-end music catalog, not a cluttered stock music site.

---

## Page Structure

### Page Hero
- Headline: "Find your sound."
- Subheadline: "Browse our catalog. Preview any track. License it instantly."
- Below subheadline, show the pricing simply: "Personal use: $4 · Commercial use: $7 · Exclusive rights: $199"

### Filter Bar
- Sticky filter bar below the hero (stays visible while scrolling)
- Filter by Artist: All | CLOVER | Aubrey Hightower | TrashCat
- Filter by Genre: All | Pop | EDM | Hip-hop/Rap | Country | Dance | Lofi | Dubstep | Other
- Filter by Mood: All | Energetic | Chill | Cinematic | Dark | Uplifting | Emotional | Hype
- Filters should work combinatively (e.g., "CLOVER" + "Cinematic" shows only CLOVER tracks tagged Cinematic)
- Animated transitions when filtering — cards should fade in/out smoothly
- Show a count of visible tracks: "Showing X of 29 tracks"

### Track Grid
- Responsive grid layout: 2 columns on desktop, 1 column on mobile
- Each track card contains:
  - Track name (display font, prominent)
  - Artist name (smaller, gold accent color)
  - Genre tags (small pill badges)
  - Mood tags (small pill badges, slightly different style from genre)
  - Spotify embed player (compact, dark theme, 152px height)
  - Two license buttons side by side:
    - "Personal — $4" (outlined button style)
    - "Commercial — $7" (gold filled button style)
  - Small text link below buttons: "Need exclusive rights? Contact us"

### Card Design
- Dark card background consistent with rest of site
- Subtle border with hover glow effect
- Track name and artist should be readable at a glance
- Genre and mood pills should be small enough not to dominate but scannable
- The Spotify player embed should be the visual centerpiece of each card

### Bottom Section
- After the track grid, add a section:
  - Heading: "Don't hear what you need?"
  - Text: "We have thousands more tracks in production. Tell us the genre, mood, and vibe you're looking for and we'll match you with the perfect sound. Or commission a completely custom track starting at $19."
  - Two CTAs: "Request a specific sound" (links to /book) and "Order a custom song" (links to /services/music custom songs section)

---

## Track Data

Add all track data to lib/data.ts in a new array. Each track object should include: id, name, artist, genres (array), moods (array), spotifyTrackId (extracted from the URL).

### Track 1
- Name: Right Here All Along
- Artist: CLOVER
- Genres: Country
- Moods: Uplifting, Motivational
- Spotify ID: 7mk8CIvn6MvcGvghbQXWUA

### Track 2
- Name: I Just Wanna
- Artist: Aubrey Hightower
- Genres: Pop, Dance
- Moods: Chill, Playful
- Spotify ID: 6CDMPGUUeh39cRZ1ooLlfM

### Track 3
- Name: Boobs!
- Artist: TrashCat
- Genres: EDM, Hip-hop
- Moods: Energetic, Hype
- Spotify ID: 4t9dW0NHiZscCGC2fGEQOU

### Track 4
- Name: Mark My Words
- Artist: CLOVER
- Genres: EDM, Hip-hop
- Moods: Cinematic, Dark, Hype
- Spotify ID: 7eSwC6T4MveQAGRSByxn9A

### Track 5
- Name: Nothing Else Moves Me
- Artist: Aubrey Hightower
- Genres: Dance, EDM
- Moods: Chill, Euphoric, Uplifting
- Spotify ID: 56xa7UsH7mJwuytJU6IX6z

### Track 6
- Name: All My Shits & Fucks
- Artist: TrashCat
- Genres: EDM, Hip-hop
- Moods: Energetic, Satirical
- Spotify ID: 0WfOSiDxnX2ilZzEhgFut0

### Track 7
- Name: I'm On the Brink
- Artist: CLOVER
- Genres: Dance, EDM, Pop
- Moods: Energetic, Euphoric, Cinematic
- Spotify ID: 7l3cqQPA8pHuKiOjZM1ahj

### Track 8
- Name: Dance of Shame
- Artist: Aubrey Hightower
- Genres: Dance, EDM, Pop
- Moods: Energetic, Uplifting, Fun
- Spotify ID: 4qx9thqWJPyJXREpkwHxYy

### Track 9
- Name: I Don't Like Lima Beans
- Artist: TrashCat
- Genres: EDM, Dubstep
- Moods: Chaotic, Hype
- Spotify ID: 2J1lQoabtitWLonzJ3bhrb

### Track 10
- Name: Ahead of My Time
- Artist: CLOVER
- Genres: Pop, Dance
- Moods: Energetic, Cinematic, Emotional
- Spotify ID: 6PLL5E5jPGV9dMaX0LrM8T

### Track 11
- Name: Stay With Me
- Artist: Aubrey Hightower
- Genres: Dance, EDM
- Moods: Uplifting, Club
- Spotify ID: 4tUUsdZYpwfwnlcVIrZLFo

### Track 12
- Name: PAC-MAN, PAC-MAN (Eating All the Dots Again)
- Artist: TrashCat
- Genres: EDM, Dubstep, Hip-hop
- Moods: Energetic, Dark, Hype
- Spotify ID: 5lRsEbXeMpaUFxr1pbaRJw

### Track 13
- Name: GridBreak
- Artist: CLOVER
- Genres: Indie, Pop
- Moods: Uplifting, Emotional, Hype
- Spotify ID: 763fIVrOz25J8Hbk18309G

### Track 14
- Name: Outta My Mind
- Artist: Aubrey Hightower
- Genres: Dance, Pop, EDM
- Moods: Euphoric, Uplifting, Emotional
- Spotify ID: 2baHzN3RQOZVCZHMA91Q08

### Track 15
- Name: Downtown Phonk Drift
- Artist: TrashCat
- Genres: EDM, Phonk
- Moods: Cinematic, Dark, Hype
- Spotify ID: 0ITqPdVOn6ZGbVbGOsyTid

### Track 16
- Name: i hope you know - soft corruption
- Artist: CLOVER
- Genres: Lofi, Hip-hop
- Moods: Uplifting, Emotional, Chill
- Spotify ID: 6eLORqWnJ7DdrDZuNciCrY

### Track 17
- Name: I Don't Beg
- Artist: Aubrey Hightower
- Genres: Dance, Pop, EDM
- Moods: Dark, Emotional, Hype
- Spotify ID: 0undhdsBzZxUj6RWnaYoFT

### Track 18
- Name: Charlie Sheen
- Artist: TrashCat
- Genres: EDM, Dubstep
- Moods: Energetic, Wild, Cinematic, Hype
- Spotify ID: 2WHMCVU78hcknoWJv7xwn2

### Track 19
- Name: i want a girl who reads
- Artist: CLOVER
- Genres: Dance, Pop, EDM
- Moods: Energetic, Cinematic, Uplifting
- Spotify ID: 3AX1XdI0NCAxaaGXsEFC9J

### Track 20
- Name: My Magic Time Machine
- Artist: Aubrey Hightower
- Genres: Pop
- Moods: Chill, Uplifting, Emotional
- Spotify ID: 6AGmCnTNI0T9GbhADMt7aX

### Track 21
- Name: Panicking Anakin
- Artist: TrashCat
- Genres: Hip-hop, EDM
- Moods: Cinematic, Dark, Hype
- Spotify ID: 4aa2eOc1J2mHRgMt5l2Nsb

### Track 22
- Name: Unravel Me
- Artist: CLOVER
- Genres: Pop
- Moods: Dark, Emotional
- Spotify ID: 3ahFAGsgtub9MzEboT9LdL

### Track 23
- Name: Impossible Colors
- Artist: Aubrey Hightower
- Genres: Dance, Pop
- Moods: Energetic, Cinematic, Uplifting
- Spotify ID: 6mgE5xZG2PFMhpo5IGsBhl

### Track 24
- Name: The Conundrummer
- Artist: TrashCat
- Genres: EDM, Bass house
- Moods: Energetic, Dark, Hype
- Spotify ID: 1yY5I20WD8u4AHL2cihHej

### Track 25
- Name: Downtown Phoenix Love
- Artist: CLOVER
- Genres: Pop, Jazz
- Moods: Chill, Cinematic, Uplifting
- Spotify ID: 3mZp4B1sJTwONxW6CsAhIh

### Track 26
- Name: I Knew You'd Feel This
- Artist: Aubrey Hightower
- Genres: Dance, Pop
- Moods: Chill, Dark, Emotional
- Spotify ID: 1V8RMtW0JOHyTW6Z1poHo8

### Track 27
- Name: I Dare a Bitch
- Artist: TrashCat
- Genres: EDM, Hip-hop
- Moods: Energetic, Hype
- Spotify ID: 63vXaZ0o3PC3N2kGFry6hn

### Track 28
- Name: Borrowed Heart. Borrowed Light
- Artist: Aubrey Hightower
- Genres: Pop
- Moods: Chill, Emotional, Sweet
- Spotify ID: 2qH8FqG5MXdRfo6B5bv2xU

### Track 29
- Name: GEEK MODE
- Artist: TrashCat
- Genres: Hip-hop, EDM
- Moods: Energetic, Uplifting, Hype
- Spotify ID: 1hRre7bul36jdtUzPLgL1i

---

## Spotify Embed Format
For each track, use: https://open.spotify.com/embed/track/SPOTIFY_ID?theme=0
Theme=0 gives the dark theme matching the site aesthetic.
Height: 152px for compact player.

---

## Navigation Updates
- Add "Library" as a link on the /services/music page in the Music Licensing section — "Browse available tracks" should link to /library
- Add "Library" to the main site navigation under the Services dropdown, below Music
- Add "Library" link in the footer under Services

---

## License Button Behavior
For now, the Personal ($4) and Commercial ($7) license buttons should link to the /book page with a pre-filled message or to a Stripe payment link. Since Stripe payment links are not yet created for licensing, make the buttons link to /book with query parameters that pre-fill the project type as "Music Licensing" and include the track name. Example: /book?type=licensing&track=Mark+My+Words

When Stripe licensing links are available later, the buttons can be updated to link directly to Stripe checkout.

---

## Performance Note
29 Spotify embeds on one page could be heavy. Lazy-load the embeds — only load the Spotify iframe when the card scrolls into the viewport. This keeps the page fast on initial load. Use Intersection Observer or a React lazy loading approach.

---

## Push to GitHub when complete.
