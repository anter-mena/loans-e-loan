import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteUrl } from "@/lib/site";

const NEWS_DIR = path.join(process.cwd(), "content/news");

export const SITE_NAME = "E-Loan";
export const BASE_URL = siteUrl;
export const DEFAULT_AUTHOR = "E-Loan Newsroom";
const WORDS_PER_MINUTE = 220;

export type FaqItem = { question: string; answer: string };
export type RelatedLink = { label: string; href: string };

/** Frontmatter contract for each news .mdx file (mirrors the blog contract). */
export type NewsFrontmatter = {
  title: string;
  description: string;
  date: string; // published date, ISO "YYYY-MM-DD"
  updated?: string; // last-modified date; falls back to `date`
  author?: string;
  category?: string;
  image?: string;
  keywords?: string[];
  faqs?: FaqItem[];
  related?: RelatedLink[]; // internal links + external sources
  draft?: boolean;
};

export type NewsMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  image: string | null;
  keywords: string[];
  faqs: FaqItem[];
  related: RelatedLink[];
  readingTime: number; // minutes
  draft: boolean;
};

function toISODate(value: unknown): string {
  if (value instanceof Date && !isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  if (typeof value === "string" && value.trim()) {
    const s = value.trim();
    const d = new Date(s);
    return isNaN(d.getTime()) ? s : d.toISOString().slice(0, 10);
  }
  return "";
}

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function normalizeMeta(
  slug: string,
  data: Record<string, unknown>,
  content: string,
): NewsMeta {
  const fm = data as NewsFrontmatter;

  const faqs: FaqItem[] = Array.isArray(fm.faqs)
    ? fm.faqs
        .filter((f) => f && typeof f === "object" && "question" in f && "answer" in f)
        .map((f) => ({ question: String(f.question), answer: String(f.answer) }))
    : [];

  const related: RelatedLink[] = Array.isArray(fm.related)
    ? fm.related
        .filter((r) => r && typeof r === "object" && "label" in r && "href" in r)
        .map((r) => ({ label: String(r.label), href: String(r.href) }))
    : [];

  const date = toISODate(fm.date);

  return {
    slug,
    title: String(fm.title ?? ""),
    description: String(fm.description ?? ""),
    date,
    updated: fm.updated ? toISODate(fm.updated) : date,
    author: fm.author ? String(fm.author) : DEFAULT_AUTHOR,
    category: fm.category ? String(fm.category) : "News",
    image: fm.image ? String(fm.image) : null,
    keywords: Array.isArray(fm.keywords) ? fm.keywords.map(String) : [],
    faqs,
    related,
    readingTime: readingTime(content),
    draft: fm.draft === true,
  };
}

function getNewsFileSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/** All published (non-draft) news items, newest first. */
export function getAllNews(): NewsMeta[] {
  return getNewsFileSlugs()
    .map((slug) => {
      const { data, content } = matter(
        fs.readFileSync(path.join(NEWS_DIR, `${slug}.mdx`), "utf8"),
      );
      return normalizeMeta(slug, data, content);
    })
    .filter((p) => !p.draft && p.title)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPublishedNewsSlugs(): string[] {
  return getAllNews().map((p) => p.slug);
}

export function getNews(
  slug: string,
): { meta: NewsMeta; content: string } | null {
  const file = path.join(NEWS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  const meta = normalizeMeta(slug, data, content);
  if (meta.draft) return null;
  return { meta, content };
}
