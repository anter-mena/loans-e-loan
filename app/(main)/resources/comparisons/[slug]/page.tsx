import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Minus } from "lucide-react";

import { ArticleShell } from "@/components/loans/article-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { comparisons, exploreMoreLinks, type ComparisonEntry } from "@/lib/comparisons";
import { comparisonIcons } from "@/lib/comparison-icons";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

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
    openGraph: { images: [OG_IMAGE], type: "article", url, title, description: entry.description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

function OptionCard({ option }: { option: ComparisonEntry["optionA"] }) {
  return (
    <div className="border border-primary bg-primary p-6 text-primary-foreground">
      <h3 className="font-display text-xl font-bold tracking-tight text-primary-foreground">{option.name}</h3>
      <ul className="mt-5 space-y-2.5">
        {option.pros.map((p) => (
          <li key={p} className="flex items-start gap-2.5 text-sm text-primary-foreground/72">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-accent text-accent-foreground">
              <Check className="h-3.5 w-3.5" />
            </span>
            {p}
          </li>
        ))}
        {option.cons.map((c) => (
          <li key={c} className="flex items-start gap-2.5 text-sm text-primary-foreground/72">
            <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-primary-foreground text-primary">
              <Minus className="h-3.5 w-3.5" />
            </span>
            {c}
          </li>
        ))}
      </ul>
      <p className="mt-5 border-t border-primary-foreground/12 pt-4 text-xs leading-5 text-primary-foreground/65">
        <span className="font-semibold text-primary-foreground">Best for: </span>
        {option.bestFor}
      </p>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-accent text-accent-foreground">
            <Check className="h-3.5 w-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
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
  const related = comparisons.filter((c) => c.slug !== entry.slug).slice(0, 6);

  return (
    <ArticleShell
      title={entry.title}
      subtitle={entry.subtitle}
      description={entry.description}
      url={`${siteUrl}/resources/comparisons/${entry.slug}`}
      icon={Icon}
      categoryLabel="Comparisons"
      sideLabel="Comparison"
      sideDescription="A side-by-side look at cost, flexibility, timing, approval fit, and borrower risk."
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "Comparisons", href: "/resources/comparisons" },
        { label: entry.title },
      ]}
      tocItems={[
        { href: "#options", label: "Options" },
        { href: "#comparison-table", label: "Comparison table" },
        { href: "#choose-when", label: "Choose when" },
        { href: "#faq", label: "FAQ" },
      ]}
      faqItems={entry.faq}
      related={related.map((c) => ({
        label: c.title,
        href: `/resources/comparisons/${c.slug}`,
      }))}
      relatedHeading="More comparisons"
      maxWidth="max-w-4xl"
    >
      <h2 id="options" className="scroll-mt-24 font-display text-2xl font-bold tracking-tight text-foreground">
        Compare the two options
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <OptionCard option={entry.optionA} />
        <OptionCard option={entry.optionB} />
      </div>

      <h2 id="comparison-table" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
        Side-by-side table
      </h2>
      <div className="mt-6 overflow-x-auto border border-border">
        <table className="w-full min-w-[520px] text-sm">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">Feature</th>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">{entry.optionA.name}</th>
              <th className="px-4 py-3 text-left font-semibold text-primary-foreground">{entry.optionB.name}</th>
            </tr>
          </thead>
          <tbody>
            {entry.table.map((row) => (
              <tr key={row.feature} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  <span className={row.winner === "a" ? "bg-accent px-1 font-semibold text-accent-foreground" : ""}>
                    {row.a}
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">
                  <span className={row.winner === "b" ? "bg-accent px-1 font-semibold text-accent-foreground" : ""}>
                    {row.b}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 id="choose-when" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
        Choose based on the job
      </h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold tracking-tight text-foreground">
            Choose {entry.optionA.name} when
          </h3>
          <CheckList items={entry.chooseA} />
        </div>
        <div className="border border-border bg-card p-6">
          <h3 className="font-display text-base font-bold tracking-tight text-foreground">
            Choose {entry.optionB.name} when
          </h3>
          <CheckList items={entry.chooseB} />
        </div>
      </div>

      {entry.faq.length > 0 ? (
        <>
          <h2 id="faq" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
            Common questions
          </h2>
          <Accordion type="single" collapsible className="mt-6 border border-border">
            {entry.faq.map((f) => (
              <AccordionItem key={f.question} value={f.question} className="border-b border-border last:border-b-0">
                <AccordionTrigger
                  iconVariant="plus"
                  className="rounded-none !border-0 px-4 py-4 text-sm font-semibold text-foreground no-underline hover:no-underline **:data-[slot=accordion-trigger-icon]:text-primary"
                >
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
        {exploreMoreLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="px-1 py-0.5 underline-offset-4 transition-colors hover:bg-accent hover:text-accent-foreground hover:underline"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </ArticleShell>
  );
}
