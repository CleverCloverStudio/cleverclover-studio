import CopyButton from "./CopyButton";

interface PromptBlockProps {
  prompt: string;
}

export default function PromptBlock({ prompt }: PromptBlockProps) {
  return (
    <div className="my-8 rounded-lg border border-white/5 bg-dark-300 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <span className="text-xs font-semibold uppercase tracking-widest text-gold">
          Style Field
        </span>
        <CopyButton
          text={prompt}
          className="rounded border border-gold/30 px-3 py-1 text-xs font-medium text-gold transition-all duration-200 hover:border-gold hover:bg-gold/10 active:scale-95"
        />
      </div>
      <div style={{ borderLeft: "4px solid #C9A84C" }}>
        <pre
          className="overflow-x-auto whitespace-pre-wrap break-words p-5 text-sm leading-relaxed"
          style={{
            fontFamily:
              "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
            color: "rgba(245, 240, 232, 0.85)",
            margin: 0,
          }}
        >
          {prompt}
        </pre>
      </div>
    </div>
  );
}
