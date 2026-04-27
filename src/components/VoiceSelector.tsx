"use client";

import { useRef, useState } from "react";

const VOICES = [
  {
    id: "original" as const,
    name: "The Original",
    description:
      "Warm, confident, versatile. Great for pop, country, singer/songwriter, and anything that needs genuine human emotion.",
    src: "/audio/Music-Sample-Original.mp3",
  },
  {
    id: "villain" as const,
    name: "The Villain",
    description:
      "Deep baritone. Dark, powerful, commanding. Built for hard rock, cinematic scores, dramatic ballads, and songs that hit like a movie trailer.",
    src: "/audio/Music-Sample-Villain.mp3",
  },
  {
    id: "character" as const,
    name: "The Character",
    description:
      "Playful, quirky, unforgettable. Perfect for comedy songs, novelty tracks, kids music, and anything that needs personality nobody has ever heard before.",
    src: "/audio/Music-Sample-Character.mp3",
  },
  {
    id: "aubrey" as const,
    name: "Aubrey",
    description:
      "Female vocals. Emotional, powerful, pop-forward. Ideal for dance, EDM, pop anthems, and songs that need heart and soul.",
    src: "/audio/Music-Sample-Aubrey.mp3",
  },
  {
    id: "surprise" as const,
    name: "Surprise Me",
    description:
      "Not feeling any of the above? We'll match the perfect voice to your genre and mood.",
    src: null,
  },
];

type VoiceId = (typeof VOICES)[number]["id"];
type Voice = (typeof VOICES)[number];

export default function VoiceSelector() {
  const [playingId, setPlayingId] = useState<VoiceId | null>(null);
  const audioRefs = useRef<Partial<Record<VoiceId, HTMLAudioElement | null>>>({});

  function handleToggle(id: VoiceId) {
    const el = audioRefs.current[id];
    if (!el) return;

    if (playingId === id) {
      el.pause();
      setPlayingId(null);
    } else {
      if (playingId) {
        const prev = audioRefs.current[playingId];
        if (prev) {
          prev.pause();
          prev.currentTime = 0;
        }
      }
      el.play().catch(() => {});
      setPlayingId(id);
    }
  }

  function handleEnded(id: VoiceId) {
    setPlayingId((cur) => (cur === id ? null : cur));
  }

  return (
    <>
      {/* Mobile: horizontal scroll */}
      <div
        className="flex gap-3 overflow-x-auto pb-3 md:hidden [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {VOICES.map((voice) => (
          <VoiceCard
            key={voice.id}
            voice={voice}
            isPlaying={playingId === voice.id}
            onToggle={() => handleToggle(voice.id)}
            onEnded={() => handleEnded(voice.id)}
            setRef={(el) => {
              audioRefs.current[voice.id] = el;
            }}
            className="w-52 flex-shrink-0"
          />
        ))}
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {VOICES.map((voice) => (
          <VoiceCard
            key={voice.id}
            voice={voice}
            isPlaying={playingId === voice.id}
            onToggle={() => handleToggle(voice.id)}
            onEnded={() => handleEnded(voice.id)}
            setRef={(el) => {
              audioRefs.current[voice.id] = el;
            }}
          />
        ))}
      </div>
    </>
  );
}

function VoiceCard({
  voice,
  isPlaying,
  onToggle,
  onEnded,
  setRef,
  className = "",
}: {
  voice: Voice;
  isPlaying: boolean;
  onToggle: () => void;
  onEnded: () => void;
  setRef: (el: HTMLAudioElement | null) => void;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border p-5 transition-all duration-300 ${
        isPlaying
          ? "border-gold/40 bg-dark-300 shadow-[0_0_24px_rgba(201,168,76,0.12)]"
          : "border-white/8 bg-dark-200 hover:border-gold/20 hover:bg-dark-300"
      } ${className}`}
    >
      <div className="flex-1">
        <p className="font-display text-base font-bold leading-tight text-cream">
          {voice.name}
        </p>
        <p className="mt-2 text-xs leading-relaxed text-muted">{voice.description}</p>
      </div>

      <div className="mt-auto">
        {voice.src ? (
          <>
            <audio
              ref={setRef}
              src={voice.src}
              preload="none"
              onEnded={onEnded}
            />
            <button
              onClick={onToggle}
              aria-label={isPlaying ? `Pause ${voice.name}` : `Preview ${voice.name}`}
              className="group flex items-center gap-2 text-xs font-medium text-muted-light transition-colors hover:text-cream"
            >
              <span
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
                  isPlaying
                    ? "border-gold bg-gold/20 text-gold"
                    : "border-white/20 bg-white/5 text-muted-light group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:text-gold"
                }`}
              >
                {isPlaying ? (
                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <rect x="0" y="0" width="3" height="10" rx="0.5" />
                    <rect x="5" y="0" width="3" height="10" rx="0.5" />
                  </svg>
                ) : (
                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="currentColor"
                    aria-hidden="true"
                    className="translate-x-px"
                  >
                    <polygon points="0,0 8,5 0,10" />
                  </svg>
                )}
              </span>
              <span>{isPlaying ? "Playing…" : "Preview"}</span>
            </button>
          </>
        ) : (
          <p className="text-xs font-medium text-gold/70">✦ We'll find your match</p>
        )}
      </div>
    </div>
  );
}
