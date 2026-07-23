import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  Calculator,
  ChevronRight,
  HelpCircle,
  SlidersHorizontal,
  Zap,
} from "lucide-react";

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
import { OG_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Loan Calculator - Estimate Payments, Interest & Payoff | E-Loan",
  description:
    "Free advanced loan calculator for Canadians. Estimate your monthly payment, total interest, and payoff time - and see how extra payments save you money.",
  alternates: { canonical: `${siteUrl}/resources/tools` },
  openGraph: { images: [OG_IMAGE],
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

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Calculator" className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <li><Link href="/" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">Home</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li><Link href="/resources" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">Resources</Link></li>
            <li aria-hidden><ChevronRight className="size-3" /></li>
            <li className="font-medium text-foreground">Loan Calculator</li>
          </ol>
        </nav>

        <section className="grid min-h-[520px] border-b border-border lg:grid-cols-[0.62fr_0.38fr]">
          <div className="flex flex-col justify-between border-x border-border px-6 py-14 md:px-12 md:py-16 lg:border-r-0 xl:px-16 xl:py-20">
            <div>
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Personal loan planner
            </p>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.94] tracking-[-0.055em] text-foreground md:text-7xl xl:text-[5.75rem]">
              Know the payment. See the full cost.
            </h1>
            <p className="mt-7 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Build a clear loan estimate in seconds. Adjust the amount, APR, term, and extra payments to understand the monthly commitment before you apply.
            </p>
            </div>

            <div className="mt-12 grid max-w-3xl grid-cols-3 border border-border">
              {[
                { value: "4", label: "Simple inputs" },
                { value: "Live", label: "Cost updates" },
                { value: "$0", label: "Tool fee" },
              ].map(({ value, label }, index) => (
                <div key={label} className={`p-3 md:p-5 ${index < 2 ? "border-r border-border" : ""}`}>
                  <p className="font-display text-xl font-black text-foreground md:text-3xl">{value}</p>
                  <p className="mt-1 text-[9px] text-muted-foreground md:text-xs">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="relative overflow-hidden border-x border-t border-primary bg-primary p-6 text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))] md:p-10 lg:border-t-0 xl:p-12">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={2}
              gridGap={3}
              flickerChance={0.06}
              maxOpacity={0.15}
              color="hsl(var(--primary-foreground))"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/70 to-primary" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
              <span className="grid size-11 place-items-center bg-accent text-accent-foreground">
                <Calculator className="size-5" />
              </span>
              <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                Clear by design
              </p>
              <p className="mt-4 max-w-md font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-4xl">
                One view for the payment, total cost, and payoff timeline.
              </p>
              </div>

              <div className="mt-12 border-t border-border-dark">
                {[
                  { icon: SlidersHorizontal, text: "Adjust every assumption" },
                  { icon: Zap, text: "See results immediately" },
                  { icon: BadgeCheck, text: "Plan without affecting your credit" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 border-b border-border-dark py-4 text-sm text-primary-foreground/70">
                    <Icon className="size-4 text-accent" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="border-x border-b border-border bg-secondary/35 p-4 md:p-6 xl:p-8">
          <LoanCalculator />
        </section>

        <section className="grid border-x border-b border-border lg:grid-cols-[0.32fr_0.68fr]">
          <aside className="relative overflow-hidden border-b border-border bg-accent p-6 text-accent-foreground md:p-10 lg:border-b-0 lg:border-r xl:p-12">
            <div className="relative">
              <span className="grid size-10 place-items-center bg-primary text-accent">
                <HelpCircle className="size-4" />
              </span>
              <p className="mt-8 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent-foreground/60">
                Need context?
              </p>
              <h2 className="mt-4 max-w-sm font-display text-4xl font-semibold leading-tight tracking-tight text-accent-foreground">
                Calculator questions, answered plainly.
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-6 text-accent-foreground/70">
                Understand what changes the result and what the estimate does—and does not—promise.
              </p>
            </div>
          </aside>
          <Accordion type="single" collapsible className="bg-background">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border last:border-b-0">
                <AccordionTrigger
                  iconVariant="plus"
                  className="rounded-none !border-0 px-6 py-6 text-left text-base font-bold text-foreground no-underline hover:bg-secondary/35 hover:no-underline md:px-10 md:py-8 **:data-[slot=accordion-trigger-icon]:text-primary"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl px-6 pb-6 text-sm leading-6 text-muted-foreground md:px-10 md:pb-8">
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
