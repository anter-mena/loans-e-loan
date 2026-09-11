import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Article } from "@/components/blog/article";
import { BLOG_SECTION, getAllPosts, getPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

// Only posts that exist at build time get a page; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const base = buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: `${BLOG_SECTION.path}/${slug}`,
    keywords: post.meta.keywords.length > 0 ? post.meta.keywords : undefined,
    // Share this post's own opengraph-image, not the site-wide default.
    defaultImage: false,
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.meta.date,
      modifiedTime: post.meta.updated,
      authors: [post.meta.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return <Article post={post} section={BLOG_SECTION} />;
}
