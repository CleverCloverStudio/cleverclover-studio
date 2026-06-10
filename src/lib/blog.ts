import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/content/blog");

export interface PostMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  relatedProduct?: string;
  keywords: string[];
  ogImage?: string;
  draft?: boolean;
  prompts?: {
    style?: string;
    exclude?: string;
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(postsDir, f), "utf8");
      return matter(raw).data as PostMeta;
    })
    .filter((p) => !p.draft)
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

export function getPostBySlug(
  slug: string
): { meta: PostMeta; content: string } | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const meta = data as PostMeta;
  if (meta.draft) return null;
  return { meta, content };
}

export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
