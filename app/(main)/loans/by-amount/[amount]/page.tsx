import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, DollarSign, Plus } from "lucide-react";

import { ArticleShell } from "@/components/loans/article-shell";
import {
  loanAmounts,
  getLoanAmountBySlug,
  getOtherLoanAmounts,
  creditTiers,
  monthlyPayment,
  CRIMINAL_RATE_APR,
} from "@/lib/loan-amounts";
import { buildArticleKeywords } from "@/lib/seo-keywords";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return loanAmounts.map((a) => ({ amount: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ amount: string }> }): Promise<Metadata> {
  const { amount } = await params;
  const entry = getLoanAmountBySlug(amount);
  if (!entry) return {};
  const title = `$${entry.amount} Loan in Canada — Rates & How to Apply | E-Loan`;
  const description = `Need to borrow $${entry.amount} in Canada? See typical rates, monthly payments, eligibility, and how fast you can get funded. APR capped at ${CRIMINAL_RATE_APR}%.`;
  const url = `${siteUrl}/loans/by-amount/${entry.slug}`;
  return {
    title,
    description,
    keywords: buildArticleKeywords(`$${entry.amount} loan`, ["loans by amount"]),
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: "E-Loan" },
    twitter: { card: "summary_large_image", title, description },
  };
}

const commonReasons = [
  "A car repair or towing bill",
  "An emergency utility bill",
  "A rent or mortgage shortfall",
  "A short-term gap until payday",
  "A dental or vision expense not covered by insurance",
  "A security deposit on a new apartment",
];

const eligibility = [
  "Age of majority in your province (18 or 19+)",
  "Canadian residency and a government-issued ID",
  "An active bank account for e-Transfer or direct deposit",
  "Verifiable income — employment, self-employment, EI, CPP, OAS, or support payments",
];

const speedTable = [
  { when: "Weekday morning before 11am", result: "Same-day, often within 2–4 hours" },
  { when: "Weekday afternoon or evening", result: "Same-day or next business morning" },
  { when: "Weekend or statutory holiday", result: "Next business day" },
];

export default async function AmountArticlePage({ params }: { params: Promise<{ amount: string }> }) {
  const { amount: slug } = await params;
  const entry = getLoanAmountBySlug(slug);
  if (!entry) notFound();
  const { amount } = entry;

  const others = getOtherLoanAmounts(slug);
  const checklist = [
    `Confirm you actually need $${amount} — borrow only what solves the problem`,
    "Check the lender is licensed in your province — regulators publish licensee lists",
    "Compare 2–3 offers — even a small APR difference adds up",
    "Read the fine print — origination, NSF, and prepayment fees change the real cost",
    "Have a repayment plan — know which paycheque covers the payment before you sign",
  ];

  const faqItems = [
    {
      question: `Can I get a $${amount} loan with bad credit?`,
      answer:
        "Yes. Several Canadian lenders specialize in smaller loans for borrowers with less-than-perfect credit, though your APR will typically land at the higher end of the legal range.",
    },
    {
      question: "Will applying hurt my credit score?",
      answer:
        "Pre-qualification uses a soft pull that never affects your credit. Only a formal application and acceptance of a firm offer triggers a hard inquiry, which may cause a small, temporary dip.",
    },
    {
      question: `How quickly can I get a $${amount} loan?`,
      answer:
        "Many online lenders can approve you within minutes and fund your account by e-Transfer the same business day, provided you apply before their daily cut-off time.",
    },
    {
      question: `What's the difference between a $${amount} personal loan and a payday loan?`,
      answer: `A personal loan is repaid in installments over months at a rate capped by law at ${CRIMINAL_RATE_APR}% APR, while a payday loan is due in full on your next payday and can carry an effective APR well over 300% once annualized.`,
    },
  ];

  return (
    <ArticleShell
      title={`Borrowing $${amount} in Canada`}
      subtitle={`Need $${amount}? Here's what it costs, who qualifies, and how fast you can be funded — with the APR capped at ${CRIMINAL_RATE_APR}% by law.`}
      description={`How to borrow $${amount} in Canada — rates, payments, eligibility, and funding speed.`}
      url={`${siteUrl}/loans/by-amount/${slug}`}
      icon={DollarSign}
      categoryLabel="Loans by Amount"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Loans", href: "/loans" },
        { label: "By Amount", href: "/loans/by-amount" },
        { label: `$${amount}` },
      ]}
      faqItems={faqItems}
      related={others.map((o) => ({ label: `$${o.amount}`, href: `/loans/by-amount/${o.slug}` }))}
      relatedHeading="Other loan amounts"
    >
      <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
        If you need to borrow ${amount} in Canada, you have real options. Same-day personal loans are
        widely available online from lenders that use a soft credit-check pre-approval — so you can
        compare offers with no impact to your credit score.
      </p>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">What a ${amount} loan costs</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        Under federal law, the Criminal Rate of Interest caps personal loan APRs at {CRIMINAL_RATE_APR}%.
        Legitimate Canadian lenders cannot charge more, regardless of your credit profile.
      </p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[420px] text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Credit profile</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Typical APR</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">Payment on ${amount} (12 mo)</th>
            </tr>
          </thead>
          <tbody>
            {creditTiers.map((tier) => (
              <tr key={tier.label} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{tier.label}</td>
                <td className="px-4 py-3 text-muted-foreground">{tier.minApr}%–{tier.maxApr}%</td>
                <td className="px-4 py-3 text-muted-foreground">
                  ${Math.round(monthlyPayment(amount, tier.minApr, 12))}–${Math.round(monthlyPayment(amount, tier.maxApr, 12))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-accent/20 bg-accent-soft/50 p-4">
        <Plus className="mt-0.5 h-5 w-5 shrink-0 rotate-45 text-accent" />
        <p className="text-sm leading-relaxed text-foreground">
          Avoid payday loans for ${amount}: a typical payday loan costs $15–$21 per $100 for a two-week
          term — roughly 390%–546% APR annualized. A personal loan at even the {CRIMINAL_RATE_APR}% legal
          maximum is dramatically cheaper.
        </p>
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Why ${amount} is a common amount</h2>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        ${amount} lines up closely with everyday short-term needs like:
      </p>
      <ul className="mt-4 space-y-2.5">
        {commonReasons.map((r) => (
          <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {r}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Who qualifies</h2>
      <ul className="mt-4 space-y-2.5">
        {eligibility.map((r) => (
          <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {r}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">How fast can you get ${amount}?</h2>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-border">
        <table className="w-full min-w-[420px] text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-foreground">When you apply</th>
              <th className="px-4 py-3 text-left font-semibold text-foreground">When funds land</th>
            </tr>
          </thead>
          <tbody>
            {speedTable.map((row) => (
              <tr key={row.when} className="border-t border-border">
                <td className="px-4 py-3 font-medium text-foreground">{row.when}</td>
                <td className="px-4 py-3 text-muted-foreground">{row.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">Before you apply</h2>
      <ul className="mt-4 space-y-2.5">
        {checklist.map((r) => (
          <li key={r} className="flex items-start gap-2.5 text-sm text-muted-foreground sm:text-base">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {r}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-display text-2xl font-bold tracking-tight text-foreground">${amount} loan FAQ</h2>
      <div className="mt-6 space-y-3">
        {faqItems.map((f) => (
          <details key={f.question} className="group rounded-2xl border border-border bg-card p-1 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground">
              {f.question}
              <Plus className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-45" />
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
          </details>
        ))}
      </div>
    </ArticleShell>
  );
}
