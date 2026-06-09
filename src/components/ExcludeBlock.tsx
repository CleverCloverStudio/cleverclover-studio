"use client";

import { useState, useRef } from "react";

interface ExcludeBlockProps {
  prompt: string;
}

export default function ExcludeBlock({ prompt }: ExcludeBlockProps) {
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
        <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#c08080" }}>
          Exclude Field
        </span>
        <button
          onClick={handleCopy}
          className="rounded border px-3 py-1 text-xs font-medium transition-all duration-200 active:scale-95"
          style={{
            borderColor: "rgba(107, 58, 58, 0.5)",
            color: "#c08080",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#6b3a3a";
            e.currentTarget.style.backgroundColor = "rgba(107, 58, 58, 0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(107, 58, 58, 0.5)";
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <div
        className="border-l-4"
        style={{ borderLeftColor: "#6b3a3a" }}
      >
        <pre
          ref={textRef}
          className="overflow-x-auto whitespace-pre-wrap break-words p-5 text-sm leading-relaxed text-cream/75"
          style={{ fontFamily: "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)" }}
        >
          {prompt}
        </pre>
      </div>
    </div>
  );
}
