import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPin } from "lucide-react";

import ContentBlocks, { findFaqBlock, getContentTocItems } from "@/components/resources/content-blocks";
import { ArticleShell } from "@/components/loans/article-shell";
import { canadaLocations, getProvinceBySlug, getOtherProvinces } from "@/lib/canada-locations";
import type { GuideContent } from "@/lib/guides";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return canadaLocations.map((p) => ({ province: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ province: string }> }): Promise<Metadata> {
  const { province } = await params;
  const entry = getProvinceBySlug(province);
  if (!entry) return {};
  const description = `Compare personal loans in ${entry.name}, Canada. Rates, eligibility, provincial rules, and how to borrow responsibly.`;
  const title = `Personal Loans in ${entry.name} | E-Loan Canada`;
  const url = `${siteUrl}/loans/by-location/${entry.slug}`;
  return {
    title,
    description,
    keywords: buildArticleKeywords(`personal loans ${entry.name}`, ["loans by location"]),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProvinceArticlePage({ params }: { params: Promise<{ province: string }> }) {
  const { province } = await params;
  const entry = getProvinceBySlug(province);
  if (!entry) notFound();

  let content: GuideContent;
  try {
    content = (await import(`@/lib/province-content/${province}`)).default;
  } catch {
    notFound();
  }

  const related = getOtherProvinces(entry.slug).slice(0, 8);

  return (
    <ArticleShell
      title={`Personal Loans in ${entry.name}`}
      subtitle={content.subtitle}
      description={`Compare personal loans in ${entry.name}, Canada.`}
      url={`${siteUrl}/loans/by-location/${entry.slug}`}
      icon={MapPin}
      categoryLabel="Loans by Location"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Location", href: "/loans/by-location" },
        { label: entry.name },
      ]}
      tocItems={getContentTocItems(content.blocks)}
      faqItems={findFaqBlock(content.blocks)?.items}
      related={related.map((p) => ({ label: p.name, href: `/loans/by-location/${p.slug}` }))}
      relatedHeading="Other provinces & territories"
    >
      <ContentBlocks blocks={content.blocks} />

      {entry.cities.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight text-foreground">
            Serving communities across {entry.name}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            E-Loan works with borrowers in {entry.cities.length}+ cities and towns throughout {entry.name}, including:
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {entry.cities.map((city) => (
              <span key={city} className="border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
                {city}
              </span>
            ))}
          </div>
        </section>
      )}
    </ArticleShell>
  );
}
