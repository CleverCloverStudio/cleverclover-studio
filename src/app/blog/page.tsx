import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deep-dives into Suno prompt engineering — the method behind 9,000+ songs. Genre breakdowns, working prompts, and the system behind the sound.",
  openGraph: {
    title: "Blog | Clever Clover Studio",
    description:
      "Deep-dives into Suno prompt engineering — the method behind 9,000+ songs. Genre breakdowns, working prompts, and the system behind the sound.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-white/5 px-6 py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
            The Method, Explained
          </p>
          <h1 className="font-display text-5xl font-bold leading-tight text-cream sm:text-6xl">
            Blog
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-light">
            Genre breakdowns, working prompts, and the engineering logic behind
            9,000+ Suno songs. Not tips — methodology.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        {posts.length === 0 ? (
          <p className="text-center text-muted">No posts yet — check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
