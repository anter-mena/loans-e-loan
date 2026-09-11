import {
  getSitemapEntries,
  isSitemapSection,
  sitemapSections,
  toUrlsetXml,
} from "@/lib/sitemap";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return sitemapSections.map((section) => ({ section: `${section}.xml` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ section: string }> },
) {
  const { section } = await params;
  const name = section.replace(/\.xml$/, "");

  if (!section.endsWith(".xml") || !isSitemapSection(name)) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(toUrlsetXml(getSitemapEntries(name)), {
    headers: { "Content-Type": "application/xml" },
  });
}
