"use client";

import AnimatedReveal from "@/components/AnimatedReveal";

export default function SunoLongformIntro() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <AnimatedReveal>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-cream">
            Most Suno prompt packs are phonebooks. This is a manual.
          </h2>
        </AnimatedReveal>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-light">
          <p>
            Search &ldquo;Suno prompts&rdquo; and the market shows you the same thing every time. 700 prompts. 2,500 prompts. 5,000 prompts. Each one a one-liner: <em>&ldquo;epic cinematic trailer with orchestral drums.&rdquo;</em> The pitch is volume. The premise is that more is better.
          </p>
          <p>It isn&rsquo;t. More is just more.</p>
          <p>
            When you generate a track with a one-liner prompt, Suno does what it always does — it averages every cinematic trailer in its training data and gives you the median. Stock brass. Predictable drum hits. A drop that lands where you&rsquo;d expect. The prompt isn&rsquo;t wrong; it&rsquo;s just not directing anything. It&rsquo;s a wish, not a blueprint.
          </p>
          <p>
            The Clever Clover prompt packs are built on the opposite premise: that a single prompt, engineered correctly, is worth more than fifty written carelessly. Each prompt in these packs is decomposed into the musical decisions that actually drive the output — key choice, tempo, mode, harmonic palette, motif construction, rhythmic placement, vocal delivery direction, and an exclusion strategy that tells Suno what to refuse before it commits.
          </p>
          <p>That decomposition is the difference between asking for a song and scoring one.</p>
        </div>

        <div className="space-y-6">
          <AnimatedReveal>
            <h3 className="font-display text-xl md:text-2xl font-bold text-cream">
              What &ldquo;engineered&rdquo; means, specifically
            </h3>
          </AnimatedReveal>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-light">
            <p>Every prompt in every pack ships with eight components:</p>
            <p>
              <strong className="text-gold">The X-Ray View</strong> breaks the prompt down by key and tempo, chord progression, mode and color choice, instrumental palette, motif construction by interval and shape, rhythmic movement, vocal delivery direction, and section-by-section structure with bar counts. You don&rsquo;t just see the prompt — you see the architecture underneath it.
            </p>
            <p>
              <strong className="text-gold">The Copy-Paste Style Prompt</strong> is the actual text you paste into Suno&rsquo;s Style field. Front-loaded with the highest-weight elements, written in Suno&rsquo;s native tag syntax, structured to survive the platform&rsquo;s averaging tendency.
            </p>
            <p>
              <strong className="text-gold">The Exclude Prompt</strong> is the affirmative-descriptor exclusion list — written as the <em>characteristics</em> you don&rsquo;t want, not as negative commands. This is the most underused mechanism in Suno prompting and the one that makes the largest single difference to output quality.
            </p>
            <p>
              <strong className="text-gold">The Reason</strong> is the rationale: why this key, why this mode, why this interval, why this exclusion. The Reason is the part of the pack that compounds. Once you understand <em>why</em> a Phrygian flat-2 is the entire identity of drill, or why a Dorian raised-6th is the emotional center of modern R&amp;B, you stop needing prompt packs at all.
            </p>
            <p>
              <strong className="text-gold">The Arrangement Blueprint</strong> specifies the structural escalation — bar counts, section transitions, where the build releases, where silence does the work.
            </p>
            <p>
              <strong className="text-gold">The Vocal Delivery Blueprint</strong> directs Suno&rsquo;s vocal generation past its defaults: behind-the-beat vs. ahead-of-beat phrasing, head voice vs. chest voice, audible breath placement, ad-lib positioning, harmony stacking method.
            </p>
            <p>
              <strong className="text-gold">The Motif Recipe</strong> is the melodic and rhythmic hook decomposed by interval — tonic to flat-third to flat-second, three-note ascending stepwise, five-note descending Aeolian — given as a reusable architectural pattern, not a notation.
            </p>
            <p>
              <strong className="text-gold">Use-Case Variations</strong> show how each prompt adapts across content types: TikTok cuts, brand films, podcast intros, trailer beds, gaming highlights.
            </p>
            <p>
              Eight engineered prompts per pack. Each prompt unpacks into roughly forty distinct reusable assets. That&rsquo;s where the 310+ asset count across the three-pack bundle comes from — counted honestly by what&rsquo;s actually in the PDFs, not by inflated unit-of-measure.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <AnimatedReveal>
            <h3 className="font-display text-xl md:text-2xl font-bold text-cream">
              What Suno actually rewards
            </h3>
          </AnimatedReveal>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-light">
            <p>
              Volume prompting fails because Suno is not a search engine. It&rsquo;s a probabilistic generator that responds to specificity. The platform rewards three things, in order:
            </p>
            <p>
              <strong className="text-gold">Front-loaded specificity.</strong> The first twenty to thirty words of the Style box carry disproportionate weight. A prompt that opens with &ldquo;epic cinematic trailer&rdquo; averages all epic cinematic trailers. A prompt that opens with &ldquo;D major, 92 BPM accelerating to 138 BPM, perfect-fifth heroic motif, taiko drums, French horn statement&rdquo; gives the model nine distinct constraints before it begins averaging.
            </p>
            <p>
              <strong className="text-gold">Exclusion, not negation.</strong> Suno doesn&rsquo;t reliably parse negative commands. &ldquo;No trap drums&rdquo; lands as approximately <em>please include trap drums</em>. The fix is affirmative-descriptor exclusion: describe the <em>characteristics</em> of what you don&rsquo;t want — &ldquo;muddy 808, overcompressed master, generic trap bounce&rdquo; — as a list of positive descriptors in the Exclude field. The platform then refuses those characteristics rather than seeking them.
            </p>
            <p>
              <strong className="text-gold">Architectural section tagging.</strong> [Verse 1], [Chorus], [Pre-Chorus | building | stacked harmonies] give the model structural anchors. Pipe-stacked tags — multiple cues inside a single bracket — act as AND operators and let you direct a section&rsquo;s mix, energy, and instrumentation in a single move.
            </p>
            <p>
              These three mechanisms compound. A prompt that uses all three doesn&rsquo;t just produce a better track on average — it produces a track that reliably arrives in the genre target, with the intended emotional shape, on the first or second generation. That&rsquo;s the actual measure of a prompt&rsquo;s quality: not what it produces in isolation, but what it produces reliably.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <AnimatedReveal>
            <h3 className="font-display text-xl md:text-2xl font-bold text-cream">
              Who these packs are for
            </h3>
          </AnimatedReveal>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-light">
            <p>
              If you&rsquo;re new to Suno: the packs give you working prompts immediately. Paste, generate, hear the difference. The Reason sections teach you why the prompts work, so the next track you build from scratch is better.
            </p>
            <p>
              If you&rsquo;re already producing on Suno: the packs are a reference architecture. Even if you never use a prompt verbatim, the X-Ray Views and Exclude prompts will change how you build your own.
            </p>
            <p>
              If you&rsquo;re building content at volume — TikTok, YouTube, brand work, podcasting — the Use-Case Variations and Arrangement Blueprints adapt across formats without rewriting the underlying prompt.
            </p>
            <p>
              If you want the full system, the Suno God Mode Bible at $39 is the unified reference. It teaches the methodology that produced every prompt in every pack — duet architecture, cross-genre engineering, vocal delivery frameworks, the affirmative-only exclusion system, the structural escalation logic. The packs give you the songs. The Bible gives you the system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
