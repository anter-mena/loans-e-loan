import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, type LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
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
  related,
  relatedHeading = "Keep exploring",
  maxWidth = "max-w-3xl",
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
  related?: RelatedLink[];
  relatedHeading?: string;
  maxWidth?: string;
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
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />

      <article className={`relative mx-auto ${maxWidth} px-4 pt-14 pb-20 sm:px-6 md:pt-16`}>
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            {breadcrumb.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight aria-hidden className="h-3 w-3" />}
                {c.href ? (
                  <Link href={c.href} className="hover:text-foreground">{c.label}</Link>
                ) : (
                  <span className="font-medium text-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* header */}
        <header className="mt-8 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent">
            <Icon className="h-7 w-7" />
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{categoryLabel}</p>
          <h1 className="mt-2 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
            {subtitle}
          </p>
        </header>

        {/* body */}
        <div className="mt-10">{children}</div>

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
        {related && related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">{relatedHeading}</h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link
                  key={r.href + r.label}
                  href={r.href}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-card"
                >
                  {r.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
