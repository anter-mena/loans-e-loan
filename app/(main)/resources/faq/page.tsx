import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | E-Loan Canada",
  description:
    "Answers to common questions about E-Loan personal loans — rates, credit checks, eligibility, funding times, fees, and repayment in Canada.",
  alternates: { canonical: `${siteUrl}/resources/faq` },
  openGraph: {
    title: "Frequently Asked Questions | E-Loan Canada",
    description: "Answers about rates, credit checks, eligibility, funding, fees, and repayment.",
    url: `${siteUrl}/resources/faq`,
    siteName: "E-Loan",
    type: "website",
  },
};

const categories = [
  {
    label: "Rates & credit",
    faqs: [
      {
        q: "Will checking my rate hurt my credit score?",
        a: "No. We use a soft credit pull to show your personalized rate, which has zero impact on your score. A hard pull only happens if you accept an offer.",
      },
      {
        q: "What are the fees?",
        a: "There's a one-time origination fee (1%–6%) deducted from your loan amount. There are no prepayment penalties and no hidden charges — your full repayment schedule is shown before you sign.",
      },
      {
        q: "What credit score do I need?",
        a: "There's no single cutoff. We work with a range of credit profiles, and your rate reflects your overall situation — income, existing obligations, and history — not just a number.",
      },
    ],
  },
  {
    label: "Loans & eligibility",
    faqs: [
      {
        q: "How much can I borrow?",
        a: "Loans range from $1,000 to $50,000 with terms between 24 and 84 months. Your offer depends on your credit profile, income, and existing obligations.",
      },
      {
        q: "Am I eligible?",
        a: "You'll generally need to be the age of majority in your province, a Canadian resident, and have a steady source of income and an active bank account. You'll see eligibility instantly when you start your application.",
      },
      {
        q: "Is E-Loan available in my province?",
        a: "We lend across Canada, with coverage expanding regularly. You'll see eligibility for your province the moment you begin your application.",
      },
    ],
  },
  {
    label: "Funding & repayment",
    faqs: [
      {
        q: "How fast will I get the money?",
        a: "Most approved borrowers receive funds in their bank account within 24 hours of accepting the offer — often the same business day.",
      },
      {
        q: "How do repayments work?",
        a: "You repay in fixed monthly installments via automatic withdrawal from your bank account. The amount and dates are set out in your agreement before you accept.",
      },
      {
        q: "What if I miss a payment?",
        a: "We waive the first late fee automatically, and our team will work with you on a flexible plan. Reach out early — we'd always rather help than penalize.",
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
        { "@type": "ListItem", position: 3, name: "FAQ", item: `${siteUrl}/resources/faq` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: categories.flatMap((cat) =>
        cat.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        }))
      ),
    },
  ],
};

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-14 pb-20 md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-3xl">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-foreground">FAQ</li>
            </ol>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Questions, answered</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Everything you wanted to ask — without the fine print.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-10">
            {categories.map((cat, idx) => (
              <div key={cat.label}>
                <div className="mb-4 flex items-baseline gap-3">
                  <span className="font-display text-xs font-semibold tabular-nums text-accent">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display text-base font-semibold tracking-tight text-foreground">{cat.label}</h2>
                  <div aria-hidden className="h-px flex-1 bg-border" />
                </div>
                <div className="space-y-3">
                  {cat.faqs.map((f) => (
                    <details
                      key={f.q}
                      className="group rounded-2xl border border-border bg-card p-1 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-foreground">
                        {f.q}
                        <Plus className="h-4 w-4 shrink-0 text-accent transition-transform group-open:rotate-45" />
                      </summary>
                      <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
