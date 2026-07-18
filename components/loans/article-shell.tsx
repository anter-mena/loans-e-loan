import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

import { AboutPixelApply } from "@/components/about/about-pixel-apply";
import { ArticleRelatedLink } from "@/components/loans/article-related-link";
import { ArticleToc, type ArticleTocItem } from "@/components/loans/article-toc";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { siteUrl } from "@/lib/site";

export type Crumb = { label: string; href?: string };
export type RelatedLink = { label: string; href: string };
type FaqItem = { question: string; answer: string };

export function ArticleShell({
  title,
  subtitle,
  description,
  url,
  icon: Icon,
  categoryLabel,
  breadcrumb,
  faqItems,
  tocItems,
  related,
  relatedHeading = "Keep exploring",
  maxWidth = "max-w-3xl",
  sideLabel = "Loan guide",
  sideDescription = "Clear costs, eligibility, timing, and next steps before you commit.",
  children,
}: {
  title: string;
  subtitle: string;
  description: string;
  url: string;
  icon: LucideIcon;
  categoryLabel: string;
  breadcrumb: Crumb[];
  faqItems?: FaqItem[];
  tocItems?: ArticleTocItem[];
  related?: RelatedLink[];
  relatedHeading?: string;
  maxWidth?: string;
  sideLabel?: string;
  sideDescription?: string;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        author: { "@type": "Organization", name: "E-Loan" },
        publisher: { "@type": "Organization", name: "E-Loan" },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: breadcrumb.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: c.href ? `${siteUrl}${c.href}` : url,
        })),
      },
      ...(faqItems && faqItems.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: faqItems.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label={categoryLabel} className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            {breadcrumb.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight aria-hidden className="size-3" />}
                {c.href ? (
                  <Link
                    href={c.href}
                    className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header className="grid border-b border-border lg:grid-cols-[0.62fr_0.38fr]">
          <div className="border-l border-border px-6 py-12 md:px-10 md:py-14">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              {categoryLabel}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              {subtitle}
            </p>
          </div>

          <aside className="relative overflow-hidden border-x border-t border-b border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-t-0">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={3}
              gridGap={2}
              flickerChance={0.08}
              maxOpacity={0.2}
              color="hsl(var(--primary-foreground))"
            />
            <div className="relative flex h-full flex-col justify-between gap-10">
              <div>
                <span className="grid size-12 place-items-center bg-accent text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <p className="mt-6 inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  {sideLabel}
                </p>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  {sideDescription}
                </p>
              </div>
              <AboutPixelApply variant="light" className="ml-auto w-fit px-4 text-xs" />
            </div>
          </aside>
        </header>

        {tocItems && tocItems.length > 0 ? (
          <section className="grid border-x border-b border-border lg:grid-cols-[0.36fr_0.64fr]">
            <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                Contents
              </p>
            </div>
            <ArticleToc items={tocItems} />
          </section>
        ) : null}

        <section className="border-x border-b border-border">
          <div className={`mx-auto ${maxWidth} px-6 py-10 md:px-8 md:py-12`}>
            <div className="loan-article-content">{children}</div>
          </div>
        </section>

        <section className="border-x border-b border-primary bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-3xl gap-5 px-6 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-8">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Ready to apply?</h2>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                Check your rate in about two minutes. It is a soft credit check with no impact on your score.
              </p>
            </div>
            <AboutPixelApply variant="light" />
          </div>
        </section>

        {related && related.length > 0 ? (
          <section className="border-x border-b border-border px-6 py-8 md:px-8">
            <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">
              {relatedHeading}
            </h2>
            <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center">
              {related.map((r) => (
                <ArticleRelatedLink
                  key={r.href + r.label}
                  href={r.href}
                  label={r.label}
                />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </main>
  );
}
