import { BLOG_SECTION, getAllPosts, getPost } from "@/lib/blog";
import { articleOgImage } from "@/lib/og";
import { SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} blog article`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);

  return articleOgImage({
    title: post?.meta.title ?? `${SITE_NAME} ${BLOG_SECTION.label}`,
    eyebrow: post?.meta.category ?? BLOG_SECTION.label,
    path: BLOG_SECTION.path,
    size,
  });
}
