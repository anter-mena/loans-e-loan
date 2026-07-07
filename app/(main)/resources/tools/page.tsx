import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { LoanCalculator } from "@/components/resources/loan-calculator";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Calculator — Estimate Payments, Interest & Payoff | E-Loan",
  description:
    "Free advanced loan calculator for Canadians. Estimate your monthly payment, total interest, and payoff time — and see how extra payments save you money.",
  alternates: { canonical: `${siteUrl}/resources/tools` },
  openGraph: {
    title: "Loan Calculator — Estimate Payments, Interest & Payoff | E-Loan",
    description:
      "Estimate your monthly payment, total interest, and payoff time, and see how extra payments save you money.",
    url: `${siteUrl}/resources/tools`,
    siteName: "E-Loan",
    type: "website",
  },
};

const faqs = [
  {
    q: "How is my monthly loan payment calculated?",
    a: "We use the standard amortization formula: your payment is based on the loan amount, the monthly interest rate (APR ÷ 12), and the number of months in your term. Each payment covers that month's interest first, and the rest reduces your principal.",
  },
  {
    q: "How does an extra monthly payment help?",
    a: "Any amount above your scheduled payment goes straight to principal, so you owe less interest every month afterward. Even a small extra payment can shorten your term and cut total interest — the calculator shows exactly how much you'd save.",
  },
  {
    q: "Is the calculator's result my guaranteed rate?",
    a: "No. It's an estimate for planning. Your actual APR, payment, and any origination fee depend on your credit profile, income, and the offer you're approved for. Checking your real rate with E-Loan is a soft credit check with no impact on your score.",
  },
  {
    q: "What's a good loan term to choose?",
    a: "A shorter term means a higher monthly payment but less total interest; a longer term lowers the payment but costs more overall. Try a few terms side by side and pick the shortest one whose monthly payment fits comfortably in your budget.",
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
        { "@type": "ListItem", position: 3, name: "Loan Calculator", item: `${siteUrl}/resources/tools` },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "E-Loan Loan Calculator",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      url: `${siteUrl}/resources/tools`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function ToolsPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-14 pb-16 md:pt-16 lg:pb-24">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-foreground">Loan Calculator</li>
            </ol>
          </nav>

          {/* header */}
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Tools</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Loan calculator
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Estimate your monthly payment, see the true cost of interest, and find out how much an
              extra payment each month could save you.
            </p>
          </div>

          {/* calculator */}
          <div className="mx-auto mt-10 max-w-6xl">
            <LoanCalculator />
          </div>

          {/* FAQ */}
          <div className="mx-auto mt-16 max-w-3xl">
            <h2 className="text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Calculator FAQ
            </h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-t border-border pt-6">
                  <dt className="font-display text-base font-semibold text-foreground">{f.q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
