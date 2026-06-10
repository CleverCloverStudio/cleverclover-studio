import CopyButton from "./CopyButton";

interface ExcludeBlockProps {
  prompt: string;
}

export default function ExcludeBlock({ prompt }: ExcludeBlockProps) {
  return (
    <div className="my-8 rounded-lg border border-white/5 bg-dark-300 shadow-xl">
      <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "#c08080" }}
        >
          Exclude Field
        </span>
        <CopyButton
          text={prompt}
          className="rounded border px-3 py-1 text-xs font-medium transition-all duration-200 active:scale-95"
          style={{ borderColor: "rgba(107,58,58,0.5)", color: "#c08080" }}
        />
      </div>
      <div style={{ borderLeft: "4px solid #6b3a3a" }}>
        <pre
          className="overflow-x-auto whitespace-pre-wrap break-words p-5 text-sm leading-relaxed"
          style={{
            fontFamily:
              "var(--font-mono, 'JetBrains Mono', ui-monospace, monospace)",
            color: "rgba(245, 240, 232, 0.75)",
            margin: 0,
          }}
        >
          {prompt}
        </pre>
      </div>
    </div>
  );
}
