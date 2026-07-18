import type { Metadata } from "next";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ResourceHubCard } from "@/components/resources/resource-hub-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
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
  {
    href: "/loans/by-amount",
    icon: "dollar",
    title: "By Amount",
    label: `${loanAmounts.length} amounts`,
    desc: "Borrow the exact amount you need, from $300 to $5,000.",
  },
  {
    href: "/loans/by-purpose",
    icon: "target",
    title: "By Purpose",
    label: `${loanPurposes.length} purposes`,
    desc: "Compare guides around what you are borrowing for.",
  },
  {
    href: "/loans/by-credit-score",
    icon: "credit",
    title: "By Credit Score",
    label: `${creditScoreRanges.length} credit tiers`,
    desc: "Find options shaped around your credit range.",
  },
  {
    href: "/loans/by-type",
    icon: "file",
    title: "By Type",
    label: `${loanTypes.length} loan types`,
    desc: "Browse bad-credit, same-day, newcomer, and other loan types.",
  },
  {
    href: "/loans/by-location",
    icon: "map",
    title: "By Location",
    label: `${canadaLocations.length} regions`,
    desc: "Review provincial rules and lending details across Canada.",
  },
] as const;

export default function LoansHubPage() {
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Loans" className="border-x border-b border-border" />

        <section className="grid border-b border-primary lg:grid-cols-[0.58fr_0.42fr]">
          <div className="border-l border-border px-6 py-14 md:px-10 lg:py-16">
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

          <aside className="grid">
            <div className="relative overflow-hidden border-x border-t border-b border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-t-0">
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
                <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Coverage
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-foreground">
                  Compare the path before the payment.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  The loans hub groups options by the way borrowers actually search: amount,
                  reason, credit profile, type, and province.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-r border-border lg:border-l">
              <div className="border-b border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{loanAmounts.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Amounts</p>
              </div>
              <div className="border-b border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{loanPurposes.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Purposes</p>
              </div>
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{loanTypes.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Types</p>
              </div>
              <div className="p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{canadaLocations.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Regions</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="grid border-x border-y border-primary bg-primary text-primary-foreground lg:grid-cols-[0.36fr_0.64fr]">
          <div className="border-b border-primary p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
              Reading order
            </p>
          </div>
          <div className="grid md:grid-cols-3">
            {["Pick an amount", "Match your purpose", "Check the details"].map((step, index) => (
              <div
                key={step}
                className="border-b border-border-dark p-6 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid border-x border-b border-border sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ href, icon, title, label, desc }, index) => (
            <ResourceHubCard
              key={href}
              href={href}
              icon={icon}
              title={title}
              label={label}
              desc={desc}
              className={`group relative min-h-[260px] border-b border-border p-6 transition-colors hover:bg-accent-soft/60 lg:p-8 ${
                index % 2 === 0 ? "sm:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
            />
          ))}
          <div className="relative min-h-[260px] border-b border-border p-6 opacity-60 lg:border-r-0 lg:p-8">
            <span className="grid size-11 place-items-center rounded-md border border-border bg-muted text-muted-foreground">
              <span className="text-lg leading-none">+</span>
            </span>
            <p className="mt-12 inline-flex bg-muted px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
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
