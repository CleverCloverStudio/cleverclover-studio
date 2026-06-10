"use client";

import { type CSSProperties, useState } from "react";

interface CopyButtonProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

export default function CopyButton({ text, className, style }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent — clipboard API unavailable
    }
  };

  return (
    <button onClick={handleCopy} className={className} style={style}>
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}
