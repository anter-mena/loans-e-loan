import type { Metadata } from "next";
import Link from "next/link";
import { Calculator, ChevronRight, HelpCircle } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { LoanCalculator } from "@/components/resources/loan-calculator";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Calculator - Estimate Payments, Interest & Payoff | E-Loan",
  description:
    "Free advanced loan calculator for Canadians. Estimate your monthly payment, total interest, and payoff time - and see how extra payments save you money.",
  alternates: { canonical: `${siteUrl}/resources/tools` },
  openGraph: {
    title: "Loan Calculator - Estimate Payments, Interest & Payoff | E-Loan",
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
    a: "We use the standard amortization formula: your payment is based on the loan amount, the monthly interest rate (APR divided by 12), and the number of months in your term. Each payment covers that month's interest first, and the rest reduces your principal.",
  },
  {
    q: "How does an extra monthly payment help?",
    a: "Any amount above your scheduled payment goes straight to principal, so you owe less interest every month afterward. Even a small extra payment can shorten your term and cut total interest.",
  },
  {
    q: "Is the calculator's result my guaranteed rate?",
    a: "No. It is an estimate for planning. Your actual APR, payment, and any origination fee depend on your credit profile, income, and the offer you are approved for.",
  },
  {
    q: "What is a good loan term to choose?",
    a: "A shorter term means a higher monthly payment but less total interest; a longer term lowers the payment but costs more overall.",
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
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Calculator" className="border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <li><Link href="/" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">Home</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li><Link href="/resources" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">Resources</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li className="font-medium text-foreground">Loan Calculator</li>
          </ol>
        </nav>

        <section className="grid border-b border-border lg:grid-cols-[0.55fr_0.45fr]">
          <div className="px-6 py-12 md:px-10 md:py-14">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Payment tool
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Estimate the monthly number before you apply.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Adjust amount, APR, term, and extra payments to see how the loan behaves over time.
            </p>
          </div>
          <aside className="relative overflow-hidden border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={3}
              gridGap={2}
              flickerChance={0.08}
              maxOpacity={0.2}
              color="hsl(var(--primary-foreground))"
            />
            <div className="relative">
              <span className="grid size-11 place-items-center bg-accent text-accent-foreground">
                <Calculator className="size-5" />
              </span>
              <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                Estimate only
              </p>
              <p className="mt-4 text-2xl font-semibold leading-tight">
                Your real rate depends on your application and approved offer.
              </p>
            </div>
          </aside>
        </section>

        <section className="border-b border-border">
          <LoanCalculator />
        </section>

        <section className="grid border-b border-border lg:grid-cols-[280px_1fr]">
          <aside className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3">
              <span className="grid size-9 place-items-center bg-accent text-accent-foreground">
                <HelpCircle className="size-4" />
              </span>
              <h2 className="text-xl font-semibold text-foreground">Calculator FAQ</h2>
            </div>
          </aside>
          <Accordion type="single" collapsible>
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border last:border-b-0">
                <AccordionTrigger
                  iconVariant="plus"
                  className="rounded-none !border-0 px-5 py-5 text-sm font-bold text-foreground no-underline hover:no-underline md:px-6 **:data-[slot=accordion-trigger-icon]:text-primary"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm leading-6 text-muted-foreground md:px-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>
    </main>
  );
}
