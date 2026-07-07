import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CreditCard, DollarSign, FileText, MapPin, Target } from "lucide-react";

import { loanPurposes } from "@/lib/loan-purposes";
import { loanTypes } from "@/lib/loan-types";
import { loanAmounts } from "@/lib/loan-amounts";
import { creditScoreRanges } from "@/lib/credit-scores";
import { canadaLocations } from "@/lib/canada-locations";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Personal Loans in Canada — Browse All Options | E-Loan",
  description:
    "Explore personal loans in Canada by amount, purpose, credit score, type, and location. Transparent rates, soft credit checks, and fast funding.",
  alternates: { canonical: `${siteUrl}/loans` },
  openGraph: {
    title: "Personal Loans in Canada — Browse All Options | E-Loan",
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

export default function LoansHubPage() {
  const cards = [
    { href: "/loans/by-amount", icon: DollarSign, title: "By Amount", desc: `Borrow the exact amount you need — ${loanAmounts.length} amounts from $300 to $5,000.` },
    { href: "/loans/by-purpose", icon: Target, title: "By Purpose", desc: `${loanPurposes.length} guides built around what you're borrowing for.` },
    { href: "/loans/by-credit-score", icon: CreditCard, title: "By Credit Score", desc: `Find options for your range across ${creditScoreRanges.length} credit tiers.` },
    { href: "/loans/by-type", icon: FileText, title: "By Type", desc: `${loanTypes.length} loan types — from bad-credit to same-day and newcomer loans.` },
    { href: "/loans/by-location", icon: MapPin, title: "By Location", desc: `Provincial rules and rates across ${canadaLocations.length} provinces & territories.` },
  ];

  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-16 pb-20 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Loans</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Find your loan.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Browse personal loan options five ways — by amount, purpose, credit score, type, or where
              you live. Transparent rates, soft credit checks, fast funding.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
            {cards.map(({ href, icon: Icon, title, desc }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon className="h-6 w-6" />
                </span>
                <span className="flex flex-col">
                  <span className="flex items-center gap-1.5 font-display text-lg font-bold tracking-tight text-foreground">
                    {title}
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </span>
                  <span className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
