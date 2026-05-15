interface PlatformTagProps {
  platform?: string;
  version?: string;
}

export default function PlatformTag({
  platform = "Suno",
  version = "v4.5 / v5 / v5.5",
}: PlatformTagProps) {
  return (
    <span className="text-xs font-semibold uppercase tracking-widest text-gold/60">
      For {platform} · {version}
    </span>
  );
}
