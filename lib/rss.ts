import type { PostMeta } from "@/lib/content";
import { BASE_URL } from "@/lib/seo";

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/** RSS 2.0 feed for a post listing served at `${path}/feed.xml`. */
export function rssResponse({
  title,
  description,
  path,
  posts,
}: {
  title: string;
  description: string;
  path: string;
  posts: PostMeta[];
}) {
  const items = posts
    .map((post) => {
      const link = `${BASE_URL}${path}/${post.slug}`;
      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(title)}</title>
    <link>${BASE_URL}${path}</link>
    <description>${escapeXml(description)}</description>
    <language>en-CA</language>
    <atom:link href="${BASE_URL}${path}/feed.xml" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
