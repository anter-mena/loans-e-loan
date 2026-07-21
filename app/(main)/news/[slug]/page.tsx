import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogNewsArticle } from "@/components/blog/blog-news-article";
import { getAllNews, getNews } from "@/lib/news";
import { siteUrl } from "@/lib/site";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};

  const url = `${siteUrl}/news/${slug}`;
  const keywords = item.meta.keywords.length
    ? item.meta.keywords
    : [item.meta.title.toLowerCase(), "canada loan news", "e-loan"];

  return {
    title: `${item.meta.title} | E-Loan`,
    description: item.meta.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${item.meta.title} | E-Loan`,
      description: item.meta.description,
      url,
      siteName: "E-Loan",
      type: "article",
      publishedTime: item.meta.date,
      modifiedTime: item.meta.updated,
      authors: [item.meta.author],
      ...(item.meta.image ? { images: [item.meta.image] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: item.meta.title,
      description: item.meta.description,
      ...(item.meta.image ? { images: [item.meta.image] } : {}),
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const { meta, content } = item;
  const toc = extractToc(content);
  const url = `${siteUrl}/news/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteUrl}/news` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "E-Loan",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.svg` },
    },
    mainEntityOfPage: url,
    url,
  };

  const faqJsonLd =
    meta.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: meta.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      <BlogNewsArticle meta={meta} content={content} toc={toc} kind="news" />
    </>
  );
}
