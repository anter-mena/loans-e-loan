import { getAllNews, getNews, NEWS_SECTION } from "@/lib/news";
import { articleOgImage } from "@/lib/og";
import { SITE_NAME } from "@/lib/seo";

export const alt = `${SITE_NAME} news article`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getNews(slug);

  return articleOgImage({
    title: item?.meta.title ?? `${SITE_NAME} ${NEWS_SECTION.label}`,
    eyebrow: item?.meta.category ?? NEWS_SECTION.label,
    path: NEWS_SECTION.path,
    size,
  });
}
