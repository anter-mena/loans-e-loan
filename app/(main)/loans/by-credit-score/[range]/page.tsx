import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, CreditCard } from "lucide-react";

import { ArticleShell } from "@/components/loans/article-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { creditScoreRanges, getCreditScoreBySlug, getOtherCreditScores } from "@/lib/credit-scores";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return creditScoreRanges.map((r) => ({ range: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ range: string }> }): Promise<Metadata> {
  const { range } = await params;
  const entry = getCreditScoreBySlug(range);
  if (!entry) return {};
  const title = `Loans for a ${entry.label} Credit Score (${entry.tier}) | E-Loan Canada`;
  const description = `Personal loan options, rates, and approval tips for a ${entry.label} (${entry.tier}) credit score in Canada.`;
  const url = `${siteUrl}/loans/by-credit-score/${entry.slug}`;
  return {
    title,
    description,
    keywords: buildArticleKeywords(`${entry.tier} credit loans`, ["loans by credit score"]),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description },
  };
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center bg-accent text-accent-foreground">
            <Check className="h-3.5 w-3.5" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function CreditScoreArticlePage({ params }: { params: Promise<{ range: string }> }) {
  const { range } = await params;
  const entry = getCreditScoreBySlug(range);
  if (!entry) notFound();

  const others = getOtherCreditScores(entry.slug);

  const faqItems = [
    { question: `What loans can I get with a ${entry.label} credit score?`, answer: entry.whatItMeans },
    { question: `What interest rate can I expect with a ${entry.tier} credit score?`, answer: entry.rateInfo },
    {
      question: "How can I improve my chances of approval?",
      answer: entry.approvalTips.join(" "),
    },
  ];

  return (
    <ArticleShell
      title={`Loans for a ${entry.label} Credit Score`}
      subtitle={`${entry.tier} credit — here's what it means for your loan options, the rates to expect, and how to improve your odds.`}
      description={`Loan options and rates for a ${entry.label} (${entry.tier}) credit score in Canada.`}
      url={`${siteUrl}/loans/by-credit-score/${entry.slug}`}
      icon={CreditCard}
      categoryLabel="Loans by Credit Score"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Credit Score", href: "/loans/by-credit-score" },
        { label: `${entry.label} (${entry.tier})` },
      ]}
      tocItems={[
        { href: "#score-meaning", label: "Score meaning" },
        { href: "#loan-options", label: "Loan options" },
        { href: "#rates", label: "Rates" },
        { href: "#approval-tips", label: "Approval tips" },
        { href: "#credit-improvement", label: "Credit improvement" },
        { href: "#faq", label: "FAQ" },
      ]}
      faqItems={faqItems}
      related={others.map((o) => ({ label: `${o.label} (${o.tier})`, href: `/loans/by-credit-score/${o.slug}` }))}
      relatedHeading="Other credit ranges"
    >
      <h2 id="score-meaning" className="scroll-mt-24 font-display text-2xl font-bold tracking-tight text-foreground">What a {entry.label} score means</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{entry.whatItMeans}</p>

      <h2 id="loan-options" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Your loan options</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {entry.loanOptions.map((option) => (
          <div key={option.name} className="border border-primary bg-primary p-5 text-primary-foreground">
            <h3 className="font-display text-base font-semibold tracking-tight text-primary-foreground">{option.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/72">{option.description}</p>
          </div>
        ))}
      </div>

      <h2 id="rates" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">What rates to expect</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{entry.rateInfo}</p>

      <h2 id="approval-tips" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Tips to get approved</h2>
      <List items={entry.approvalTips} />

      <h2 id="credit-improvement" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Improving your credit</h2>
      <List items={entry.creditTips} />

      <h2 id="alternatives" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Alternatives to consider</h2>
      <List items={entry.alternatives} />

      <div className="mt-8 flex items-start gap-3 border border-primary bg-primary p-4 text-primary-foreground">
        <span className="grid size-7 shrink-0 place-items-center bg-accent text-accent-foreground">
          <Check className="h-4 w-4" />
        </span>
        <p className="text-sm leading-relaxed text-primary-foreground/72">{entry.closing}</p>
      </div>

      <h2 id="faq" className="scroll-mt-24 mt-10 font-display text-2xl font-bold tracking-tight text-foreground">
        {entry.label} credit score FAQ
      </h2>
      <Accordion type="single" collapsible className="mt-6 border border-border">
        {faqItems.map((f) => (
          <AccordionItem key={f.question} value={f.question} className="border-b border-border last:border-b-0">
            <AccordionTrigger
              iconVariant="plus"
              className="rounded-none border-0 px-4 py-4 text-sm font-semibold text-foreground no-underline hover:no-underline **:data-[slot=accordion-trigger-icon]:text-primary"
            >
              {f.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
              {f.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </ArticleShell>
  );
}
