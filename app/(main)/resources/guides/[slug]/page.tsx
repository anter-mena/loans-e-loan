import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight } from "lucide-react";

import ContentBlocks, { findFaqBlock } from "@/components/resources/content-blocks";
import { LoanCalculator } from "@/components/resources/loan-calculator";
import { Button } from "@/components/ui/button";
import { guides, getGuideBySlug, getRelatedGuides, type GuideContent } from "@/lib/guides";
import { guideIcons } from "@/lib/guide-icons";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

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
    openGraph: { type: "article", url, title, description: entry.description, siteName: "E-Loan" },
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
  const related = getRelatedGuides(entry.slug);
  const faqBlock = findFaqBlock(content.blocks);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: entry.title,
        description: entry.description,
        author: { "@type": "Organization", name: "E-Loan" },
        publisher: { "@type": "Organization", name: "E-Loan" },
        mainEntityOfPage: `${siteUrl}/resources/guides/${entry.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Guides", item: `${siteUrl}/resources/guides` },
          { "@type": "ListItem", position: 4, name: entry.title, item: `${siteUrl}/resources/guides/${entry.slug}` },
        ],
      },
      ...(faqBlock
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqBlock.items.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />

      <article className="relative mx-auto max-w-3xl px-4 pt-14 pb-20 sm:px-6 md:pt-16">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/resources/guides" className="hover:text-foreground">Guides</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li className="font-medium text-foreground">{entry.title}</li>
          </ol>
        </nav>

        {/* header */}
        <header className="mt-8 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent">
            <Icon className="h-7 w-7" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{entry.category}</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
            {content.subtitle}
          </p>
        </header>

        {/* optional calculator */}
        {entry.calculator && (
          <div className="mt-10">
            <LoanCalculator
              initialAmount={entry.calculator.defaultAmount}
              initialMonths={entry.calculator.defaultTerm}
            />
          </div>
        )}

        {/* content */}
        <div className="mt-10">
          <ContentBlocks blocks={content.blocks} />
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-accent/20 bg-accent-soft/50 p-8 text-center">
          <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Ready to apply?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Check your rate in about two minutes. It&apos;s a soft credit check — no impact on your score.
          </p>
          <Button variant="hero" size="lg" asChild className="mt-5">
            <Link href="/apply">
              Check your rate
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">
              Explore more guides
            </h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {related.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-card"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
