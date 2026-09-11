import { toSitemapIndexXml } from "@/lib/sitemap";

// Lists the section sitemaps served by app/sitemap/[section]/route.ts
export const dynamic = "force-static";

export function GET() {
  return new Response(toSitemapIndexXml(), {
    headers: { "Content-Type": "application/xml" },
  });
}
