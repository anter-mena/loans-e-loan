import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogNewsArticle } from "@/components/blog/blog-news-article";
import { getAllPosts, getPost } from "@/lib/blog";
import { siteUrl } from "@/lib/site";
import { extractToc } from "@/lib/toc";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `${siteUrl}/blog/${slug}`;
  const keywords = post.meta.keywords.length
    ? post.meta.keywords
    : [post.meta.title.toLowerCase(), "personal loan canada", "e-loan blog"];

  return {
    title: `${post.meta.title} | E-Loan`,
    description: post.meta.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.meta.title} | E-Loan`,
      description: post.meta.description,
      url,
      siteName: "E-Loan",
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated,
      authors: [post.meta.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
    },
  };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const { meta, content } = post;
  const toc = extractToc(content);
  const url = `${siteUrl}/blog/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
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
      <BlogNewsArticle meta={meta} content={content} toc={toc} kind="blog" />
    </>
  );
}
