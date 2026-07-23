import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FileText } from "lucide-react";

import ContentBlocks, { findFaqBlock, getContentTocItems } from "@/components/resources/content-blocks";
import { ArticleShell } from "@/components/loans/article-shell";
import { loanTypes, getLoanTypeBySlug, getOtherLoanTypes } from "@/lib/loan-types";
import type { GuideContent } from "@/lib/guides";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

export function generateStaticParams() {
  return loanTypes.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ type: string }> }): Promise<Metadata> {
  const { type } = await params;
  const entry = getLoanTypeBySlug(type);
  if (!entry) return {};
  const title = `${entry.name} | E-Loan Canada`;
  const url = `${siteUrl}/loans/by-type/${entry.slug}`;
  return {
    title,
    description: entry.description,
    keywords: buildArticleKeywords(entry.name, ["loans by type"]),
    alternates: { canonical: url },
    openGraph: { images: [OG_IMAGE], type: "article", url, title, description: entry.description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

export default async function LoanTypeArticlePage({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const entry = getLoanTypeBySlug(type);
  if (!entry) notFound();

  let content: GuideContent;
  try {
    content = (await import(`@/lib/loan-type-content/${type}`)).default;
  } catch {
    notFound();
  }

  const related = getOtherLoanTypes(entry.slug).slice(0, 6);

  return (
    <ArticleShell
      title={entry.name}
      subtitle={content.subtitle}
      description={entry.description}
      url={`${siteUrl}/loans/by-type/${entry.slug}`}
      icon={FileText}
      categoryLabel="Loans by Type"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Type", href: "/loans/by-type" },
        { label: entry.name },
      ]}
      tocItems={getContentTocItems(content.blocks)}
      faqItems={findFaqBlock(content.blocks)?.items}
      related={related.map((t) => ({ label: t.name, href: `/loans/by-type/${t.slug}` }))}
      relatedHeading="Other loan types"
    >
      <ContentBlocks blocks={content.blocks} />
    </ArticleShell>
  );
}
