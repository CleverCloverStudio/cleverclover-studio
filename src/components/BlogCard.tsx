import Link from "next/link";
import type { PostMeta } from "@/lib/blog";
import { formatDate } from "@/lib/blog";

interface BlogCardProps {
  post: PostMeta;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-white/5 bg-dark-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/20 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full border border-gold/30 px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-gold">
          {post.category}
        </span>
        <span className="text-xs text-muted">{formatDate(post.date)}</span>
      </div>
      <h2 className="font-display text-xl font-semibold leading-snug text-cream transition-colors group-hover:text-gold-light">
        {post.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-light line-clamp-3">
        {post.description}
      </p>
      <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-gold">
        Read post
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M2.5 7h9M8 3.5 11.5 7 8 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  );
}
