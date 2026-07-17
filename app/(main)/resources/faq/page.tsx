import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | E-Loan Canada",
  description:
    "Answers to common questions about E-Loan personal loans - rates, credit checks, eligibility, funding times, fees, and repayment in Canada.",
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
        a: "There is a one-time origination fee (1%-6%) deducted from your loan amount. There are no prepayment penalties and no hidden charges. Your full repayment schedule is shown before you sign.",
      },
      {
        q: "What credit score do I need?",
        a: "There is no single cutoff. We work with a range of credit profiles, and your rate reflects your overall situation: income, existing obligations, and history, not just a number.",
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
        a: "You will generally need to be the age of majority in your province, a Canadian resident, and have a steady source of income and an active bank account. You will see eligibility instantly when you start your application.",
      },
      {
        q: "Is E-Loan available in my province?",
        a: "We lend across Canada, with coverage expanding regularly. You will see eligibility for your province the moment you begin your application.",
      },
    ],
  },
  {
    label: "Funding & repayment",
    faqs: [
      {
        q: "How fast will I get the money?",
        a: "Most approved borrowers receive funds in their bank account within 24 hours of accepting the offer, often the same business day.",
      },
      {
        q: "How do repayments work?",
        a: "You repay in fixed monthly installments via automatic withdrawal from your bank account. The amount and dates are set out in your agreement before you accept.",
      },
      {
        q: "What if I miss a payment?",
        a: "We waive the first late fee automatically, and our team will work with you on a flexible plan. Reach out early; we would always rather help than penalize.",
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
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Questions, Answered" className="border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <li><Link href="/" className="transition-colors hover:text-accent">Home</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li><Link href="/resources" className="transition-colors hover:text-accent">Resources</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li className="font-medium text-foreground">FAQ</li>
          </ol>
        </nav>

        <section className="grid border-b border-border lg:grid-cols-[0.36fr_0.64fr]">
          <aside className="border-b border-border p-6 md:p-10 lg:border-b-0 lg:border-r">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              FAQ
            </p>
            <h1 className="mt-5 font-display text-[2.75rem] font-semibold leading-[0.95] tracking-tight text-foreground md:text-6xl">
              Everything you wanted to ask, without the fine print.
            </h1>
            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              Clear answers about rates, eligibility, credit checks, funding, fees, and repayment.
            </p>
          </aside>

          <div>
            {categories.map((cat, idx) => (
              <section key={cat.label} className="border-b border-border last:border-b-0">
                <div className="flex items-center gap-4 border-b border-border px-5 py-5 md:px-8">
                  <span className="bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-accent-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-lg font-semibold tracking-tight text-foreground">{cat.label}</h2>
                  <div aria-hidden className="h-px flex-1 bg-border" />
                </div>
                <div>
                  {cat.faqs.map((f) => (
                    <details key={f.q} className="group border-b border-border last:border-b-0 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5 text-sm font-bold text-foreground md:px-8">
                        {f.q}
                        <span className="relative grid size-5 shrink-0 place-items-center text-accent">
                          <Plus className="size-4 transition-transform duration-300 group-open:rotate-45" />
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground md:px-8">
                        {f.a}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
