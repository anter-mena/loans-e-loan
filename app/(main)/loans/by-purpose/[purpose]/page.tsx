import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Target } from "lucide-react";

import ContentBlocks, { findFaqBlock, getContentTocItems } from "@/components/resources/content-blocks";
import { ArticleShell } from "@/components/loans/article-shell";
import { loanPurposes, getLoanPurposeBySlug, getOtherLoanPurposes } from "@/lib/loan-purposes";
import type { GuideContent } from "@/lib/guides";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return loanPurposes.map((p) => ({ purpose: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ purpose: string }> }): Promise<Metadata> {
  const { purpose } = await params;
  const entry = getLoanPurposeBySlug(purpose);
  if (!entry) return {};
  const title = `${entry.name} Loans | E-Loan Canada`;
  const url = `${siteUrl}/loans/by-purpose/${entry.slug}`;
  return {
    title,
    description: entry.description,
    keywords: buildArticleKeywords(`${entry.name} loans`, ["loans by purpose"]),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description: entry.description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

export default async function PurposeArticlePage({ params }: { params: Promise<{ purpose: string }> }) {
  const { purpose } = await params;
  const entry = getLoanPurposeBySlug(purpose);
  if (!entry) notFound();

  let content: GuideContent;
  try {
    content = (await import(`@/lib/loan-purpose-content/${purpose}`)).default;
  } catch {
    notFound();
  }

  const related = getOtherLoanPurposes(entry.slug).slice(0, 6);

  return (
    <ArticleShell
      title={`${entry.name} Loans`}
      subtitle={content.subtitle}
      description={entry.description}
      url={`${siteUrl}/loans/by-purpose/${entry.slug}`}
      icon={Target}
      categoryLabel="Loans by Purpose"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Purpose", href: "/loans/by-purpose" },
        { label: entry.name },
      ]}
      tocItems={getContentTocItems(content.blocks)}
      faqItems={findFaqBlock(content.blocks)?.items}
      related={related.map((p) => ({ label: p.name, href: `/loans/by-purpose/${p.slug}` }))}
      relatedHeading="Other loan purposes"
    >
      <ContentBlocks blocks={content.blocks} />
    </ArticleShell>
  );
}
