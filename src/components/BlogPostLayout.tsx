import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface BlogPostLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

export default function BlogPostLayout({ meta, children }: BlogPostLayoutProps) {
  return (
    <article className="mx-auto max-w-2xl px-6 pb-24 pt-16">
      {/* Header */}
      <header className="mb-12">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-gold/30 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-gold">
            {meta.category}
          </span>
          <span className="text-xs text-muted">{formatDate(meta.date)}</span>
          <span className="text-xs text-muted">By {meta.author}</span>
        </div>
        <h1 className="font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">
          {meta.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-light">
          {meta.description}
        </p>
        <div className="gold-divider mt-8" />
      </header>

      {/* Body */}
      <div className="blog-prose">{children}</div>
    </article>
  );
}
