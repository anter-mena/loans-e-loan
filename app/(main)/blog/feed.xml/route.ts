import { BLOG_DESCRIPTION, BLOG_SECTION, getAllPosts } from "@/lib/blog";
import { rssResponse } from "@/lib/rss";
import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  return rssResponse({
    title: `${SITE_NAME} ${BLOG_SECTION.label}`,
    description: BLOG_DESCRIPTION,
    path: BLOG_SECTION.path,
    posts: getAllPosts(),
  });
}
