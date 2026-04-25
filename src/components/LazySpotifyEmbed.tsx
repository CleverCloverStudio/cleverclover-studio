"use client";

import { useEffect, useRef, useState } from "react";

export default function LazySpotifyEmbed({
  trackId,
  title,
}: {
  trackId: string;
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="h-[152px] w-full bg-dark-300">
      {loaded && (
        <iframe
          src={`https://open.spotify.com/embed/track/${trackId}?theme=0`}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="border-0 block"
          title={`Listen to ${title} on Spotify`}
        />
      )}
    </div>
  );
}
