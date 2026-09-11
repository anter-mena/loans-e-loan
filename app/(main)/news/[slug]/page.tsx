import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/blog/article";
import { getAllNews, getNews, NEWS_SECTION } from "@/lib/news";
import { buildMetadata } from "@/lib/seo";

// Only news items that exist at build time get a page; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};

  const base = buildMetadata({
    title: item.meta.title,
    description: item.meta.description,
    path: `${NEWS_SECTION.path}/${slug}`,
    keywords: item.meta.keywords.length > 0 ? item.meta.keywords : undefined,
    // Share this item's own opengraph-image, not the site-wide default.
    defaultImage: false,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: item.meta.date,
      modifiedTime: item.meta.updated,
      authors: [item.meta.author],
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  return <Article post={item} section={NEWS_SECTION} />;
}
