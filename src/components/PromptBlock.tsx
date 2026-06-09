"use client";

import { useState, useRef } from "react";

interface PromptBlockProps {
  prompt: string;
}

export default function PromptBlock({ prompt }: PromptBlockProps) {
  const [copied, setCopied] = useState(false);
  const textRef = useRef<HTMLPreElement>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      if (textRef.current) {
        const range = document.createRange();
        range.selectNodeContents(textRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  };

  return (
    <div className="my-8 rounded-lg border border-white/5 bg-dark-300 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          Style Field
        </span>
        <button
          onClick={handleCopy}
          className="rounded border border-gold/30 px-3 py-1 text-xs font-medium text-gold transition-all duration-200 hover:border-gold hover:bg-gold/10 active:scale-95"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <div
        className="border-l-4 border-gold"
        style={{ borderLeftColor: "#C9A84C" }}
      >
        <pre
          ref={textRef}
          className="overflow-x-auto whitespace-pre-wrap break-words p-5 text-sm leading-relaxed text-cream/85"
          style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)" }}
        >
          {prompt}
        </pre>
      </div>
    </div>
  );
}
