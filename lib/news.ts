import { createPostCollection, type ArticleSection } from "@/lib/content";

export type { PostMeta as NewsMeta } from "@/lib/content";

export const NEWS_DESCRIPTION =
  "Bank of Canada decisions, lending data, and rule changes that affect what you pay to borrow in Canada - reported in plain English.";

export const NEWS_SECTION: ArticleSection = {
  label: "News",
  path: "/news",
  schemaType: "NewsArticle",
  dateLine: "published",
  backLabel: "All news",
  // This site's article design has a single link under the article (backLabel),
  // so `next` is not rendered there.
  next: { label: "Read the blog", href: "/blog" },
};

const news = createPostCollection({
  folder: "news",
  defaultAuthor: "E-Loan Newsroom",
  defaultCategory: "News",
});

/** Published news items, newest first. */
export const getAllNews = news.getAll;
export const getNews = news.get;
