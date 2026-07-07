import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Check, Minus, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { comparisons, exploreMoreLinks, type ComparisonEntry } from "@/lib/comparisons";
import { comparisonIcons } from "@/lib/comparison-icons";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return comparisons.map((entry) => ({ slug: entry.slug }));
}

function getComparison(slug: string): ComparisonEntry | undefined {
  return comparisons.find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getComparison(slug);
  if (!entry) return {};

  const title = `${entry.title} | E-Loan Canada`;
  const url = `${siteUrl}/resources/comparisons/${entry.slug}`;

  return {
    title,
    description: entry.description,
    keywords: buildArticleKeywords(entry.title, ["loan comparison"]),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description: entry.description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

function OptionCard({
  option,
  accent,
}: {
  option: ComparisonEntry["optionA"];
  accent: boolean;
}) {
  return (
    <div className={`rounded-3xl border p-6 shadow-soft ${accent ? "border-accent/30 bg-accent-soft/40" : "border-border bg-card"}`}>
      <h3 className="font-display text-lg font-bold tracking-tight text-foreground">{option.name}</h3>
      <ul className="mt-4 space-y-2">
        {option.pros.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {p}
          </li>
        ))}
        {option.cons.map((c) => (
          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Minus className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border pt-4 text-xs text-muted-foreground">
        <span className="font-semibold text-foreground">Best for: </span>
        {option.bestFor}
      </p>
    </div>
  );
}

export default async function ComparisonArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getComparison(slug);
  if (!entry) notFound();

  const Icon = comparisonIcons[entry.icon];
  const related = comparisons.filter((c) => c.slug !== entry.slug).slice(0, 4);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: entry.title,
        description: entry.description,
        author: { "@type": "Organization", name: "E-Loan" },
        publisher: { "@type": "Organization", name: "E-Loan" },
        mainEntityOfPage: `${siteUrl}/resources/comparisons/${entry.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
          { "@type": "ListItem", position: 3, name: "Comparisons", item: `${siteUrl}/resources/comparisons` },
          { "@type": "ListItem", position: 4, name: entry.title, item: `${siteUrl}/resources/comparisons/${entry.slug}` },
        ],
      },
      ...(entry.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: entry.faq.map((f) => ({
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

      <article className="relative mx-auto max-w-4xl px-4 pt-14 pb-20 sm:px-6 md:pt-16">
        {/* breadcrumb */}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <li><Link href="/" className="hover:text-foreground">Home</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li><Link href="/resources/comparisons" className="hover:text-foreground">Comparisons</Link></li>
            <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
            <li className="font-medium text-foreground">{entry.title}</li>
          </ol>
        </nav>

        {/* header */}
        <header className="mt-8 text-center">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-accent/10 text-accent">
            <Icon className="h-7 w-7" />
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
            {entry.title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
            {entry.subtitle}
          </p>
        </header>

        {/* option cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <OptionCard option={entry.optionA} accent />
          <OptionCard option={entry.optionB} accent={false} />
        </div>

        {/* comparison table */}
        <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] text-sm">
            <thead className="bg-secondary/50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Feature</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">{entry.optionA.name}</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">{entry.optionB.name}</th>
              </tr>
            </thead>
            <tbody>
              {entry.table.map((row) => (
                <tr key={row.feature} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
                  <td className={`px-4 py-3 ${row.winner === "a" ? "font-semibold text-accent" : "text-muted-foreground"}`}>
                    {row.a}
                  </td>
                  <td className={`px-4 py-3 ${row.winner === "b" ? "font-semibold text-accent" : "text-muted-foreground"}`}>
                    {row.b}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* choose when */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-display text-base font-bold tracking-tight text-foreground">
              Choose {entry.optionA.name} when
            </h2>
            <ul className="mt-3 space-y-2">
              {entry.chooseA.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h2 className="font-display text-base font-bold tracking-tight text-foreground">
              Choose {entry.optionB.name} when
            </h2>
            <ul className="mt-3 space-y-2">
              {entry.chooseB.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        {entry.faq.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-xl font-bold tracking-tight text-foreground">Common questions</h2>
            <div className="mt-6 space-y-3">
              {entry.faq.map((f) => (
                <details
                  key={f.question}
                  className="group rounded-2xl border border-border bg-card p-1 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground">
                    {f.question}
                    <Plus className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 rounded-3xl border border-accent/20 bg-accent-soft/50 p-8 text-center">
          <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Ready to move forward?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            Check your personalized rate in about two minutes — a soft credit check with no impact on your score.
          </p>
          <Button variant="hero" size="lg" asChild className="mt-5">
            <Link href="/#apply">
              Check your rate
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* related + explore */}
        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">
              More comparisons
            </h2>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/resources/comparisons/${c.slug}`}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-card"
                >
                  {c.title}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              {exploreMoreLinks.map((l) => (
                <Link key={l.href} href={l.href} className="underline-offset-4 hover:text-accent hover:underline">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
