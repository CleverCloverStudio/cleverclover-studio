import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import BlogPostLayout from "@/components/BlogPostLayout";
import PromptBlock from "@/components/PromptBlock";
import ExcludeBlock from "@/components/ExcludeBlock";
import ProductCTA from "@/components/ProductCTA";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const { meta } = post;
  const ogImage = meta.ogImage ?? "/images/og-image.PNG";

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/blog/${meta.slug}`,
      type: "article",
      publishedTime: meta.date,
      authors: [meta.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://www.cleverclover.studio/blog/${meta.slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { meta, content } = post;

  const BoundProductCTA = () => (
    <ProductCTA productKey={meta.relatedProduct} />
  );

  const { content: rendered } = await compileMDX({
    source: content,
    components: {
      PromptBlock,
      ExcludeBlock,
      ProductCTA: BoundProductCTA,
    },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: meta.author,
      url: "https://www.cleverclover.studio/about",
    },
    image: meta.ogImage
      ? `https://www.cleverclover.studio${meta.ogImage}`
      : "https://www.cleverclover.studio/images/og-image.PNG",
    url: `https://www.cleverclover.studio/blog/${meta.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Clever Clover Studio",
      url: "https://www.cleverclover.studio",
    },
    keywords: meta.keywords?.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostLayout meta={meta}>{rendered}</BlogPostLayout>
    </>
  );
}
