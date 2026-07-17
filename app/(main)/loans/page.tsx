import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CreditCard, DollarSign, FileText, MapPin, Sparkles, Target } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { canadaLocations } from "@/lib/canada-locations";
import { creditScoreRanges } from "@/lib/credit-scores";
import { loanAmounts } from "@/lib/loan-amounts";
import { loanPurposes } from "@/lib/loan-purposes";
import { loanTypes } from "@/lib/loan-types";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personal Loans in Canada - Browse All Options | E-Loan",
  description:
    "Explore personal loans in Canada by amount, purpose, credit score, type, and location. Transparent rates, soft credit checks, and fast funding.",
  alternates: { canonical: `${siteUrl}/loans` },
  openGraph: {
    title: "Personal Loans in Canada - Browse All Options | E-Loan",
    description: "Explore personal loans in Canada by amount, purpose, credit score, type, and location.",
    url: `${siteUrl}/loans`,
    siteName: "E-Loan",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Loans", item: `${siteUrl}/loans` },
  ],
};

const cards = [
  { href: "/loans/by-amount", icon: DollarSign, title: "By Amount", desc: `Borrow the exact amount you need. ${loanAmounts.length} amounts from $300 to $5,000.` },
  { href: "/loans/by-purpose", icon: Target, title: "By Purpose", desc: `${loanPurposes.length} guides built around what you are borrowing for.` },
  { href: "/loans/by-credit-score", icon: CreditCard, title: "By Credit Score", desc: `Find options for your range across ${creditScoreRanges.length} credit tiers.` },
  { href: "/loans/by-type", icon: FileText, title: "By Type", desc: `${loanTypes.length} loan types from bad-credit to same-day and newcomer loans.` },
  { href: "/loans/by-location", icon: MapPin, title: "By Location", desc: `Provincial rules and rates across ${canadaLocations.length} provinces and territories.` },
];

export default function LoansHubPage() {
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Loans" className="border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-[0.58fr_0.42fr]">
          <div className="px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Personal loan finder
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Find the loan path that fits the reason.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Browse personal loan options by amount, purpose, credit score, type, or province.
              Every path is built to make the cost, timing, and tradeoffs easier to compare.
            </p>
          </div>

          <aside className="border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
            <div className="grid h-full content-between gap-10">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                  Coverage
                </p>
                <div className="mt-6 grid grid-cols-2 border border-primary">
                  <div className="border-b border-r border-primary p-4">
                    <p className="font-display text-4xl font-semibold">{loanAmounts.length}</p>
                    <p className="mt-1 text-xs text-primary-foreground/55">Amounts</p>
                  </div>
                  <div className="border-b border-primary p-4">
                    <p className="font-display text-4xl font-semibold">{loanPurposes.length}</p>
                    <p className="mt-1 text-xs text-primary-foreground/55">Purposes</p>
                  </div>
                  <div className="border-r border-primary p-4">
                    <p className="font-display text-4xl font-semibold">{loanTypes.length}</p>
                    <p className="mt-1 text-xs text-primary-foreground/55">Types</p>
                  </div>
                  <div className="p-4">
                    <p className="font-display text-4xl font-semibold">{canadaLocations.length}</p>
                    <p className="mt-1 text-xs text-primary-foreground/55">Regions</p>
                  </div>
                </div>
              </div>
              <Link
                href="/apply"
                className="inline-flex h-11 w-fit items-center bg-primary-foreground px-5 text-sm font-bold text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Apply now
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>
          </aside>
        </section>

        <section className="grid border-b border-border sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ href, icon: Icon, title, desc }, index) => (
            <Link
              key={href}
              href={href}
              className={`group relative min-h-[230px] border-b border-border p-6 transition-colors hover:bg-accent-soft/60 lg:p-8 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
            >
              <ArrowUpRight className="absolute right-5 top-5 size-6 -translate-y-2 translate-x-2 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              <span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h2 className="mt-10 text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{desc}</p>
            </Link>
          ))}
          <div className="relative min-h-[230px] border-b border-border p-6 opacity-60 lg:p-8 lg:border-r-0">
            <span className="grid size-11 place-items-center rounded-md border border-border bg-muted text-muted-foreground">
              <Sparkles className="size-5" />
            </span>
            <p className="mt-10 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Not active yet
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-muted-foreground">
              More paths coming soon
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              Additional loan categories are planned, but this section is not available yet.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
