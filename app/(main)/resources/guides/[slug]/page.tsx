import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticleShell } from "@/components/loans/article-shell";
import ContentBlocks, { findFaqBlock, getContentTocItems } from "@/components/resources/content-blocks";
import { LoanCalculator } from "@/components/resources/loan-calculator";
import { guides, getGuideBySlug, getRelatedGuides, type GuideContent } from "@/lib/guides";
import { guideIcons } from "@/lib/guide-icons";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export function generateStaticParams() {
  return guides.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) return {};

  const title = `${entry.title} | E-Loan Canada`;
  const url = `${siteUrl}/resources/guides/${entry.slug}`;

  return {
    title,
    description: entry.description,
    keywords: buildArticleKeywords(entry.title, [entry.category]),
    alternates: { canonical: url },
    openGraph: { images: [OG_IMAGE], type: "article", url, title, description: entry.description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

export default async function GuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGuideBySlug(slug);
  if (!entry) notFound();

  let content: GuideContent;
  try {
    content = (await import(`@/lib/guide-content/${slug}`)).default;
  } catch {
    notFound();
  }

  const Icon = guideIcons[entry.icon];
  const related = getRelatedGuides(entry.slug).slice(0, 6);
  const faqBlock = findFaqBlock(content.blocks);

  return (
    <ArticleShell
      title={entry.title}
      subtitle={content.subtitle}
      description={entry.description}
      url={`${siteUrl}/resources/guides/${entry.slug}`}
      icon={Icon}
      categoryLabel={entry.category}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Guides", href: "/resources/guides" },
        { label: entry.title },
      ]}
      tocItems={getContentTocItems(content.blocks)}
      faqItems={faqBlock?.items}
      related={related.map((guide) => ({
        label: guide.title,
        href: `/resources/guides/${guide.slug}`,
      }))}
      relatedHeading="Explore more guides"
    >
      {entry.calculator ? (
        <div className="mb-10 border border-border">
          <LoanCalculator
            initialAmount={entry.calculator.defaultAmount}
            initialMonths={entry.calculator.defaultTerm}
          />
        </div>
      ) : null}
      <ContentBlocks blocks={content.blocks} />
    </ArticleShell>
  );
}
