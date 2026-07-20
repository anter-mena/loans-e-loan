import type { Metadata } from "next";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ResourceHubCard } from "@/components/resources/resource-hub-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { comparisons } from "@/lib/comparisons";
import { guides } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources - Guides, Comparisons & Tools | E-Loan Canada",
  description:
    "Everything you need to borrow smarter in Canada: in-depth loan guides, side-by-side comparisons, a free loan calculator, and answers to common questions.",
  alternates: { canonical: `${siteUrl}/resources` },
  openGraph: {
    title: "Resources - Guides, Comparisons & Tools | E-Loan Canada",
    description: "In-depth loan guides, comparisons, a free calculator, and FAQs for Canadian borrowers.",
    url: `${siteUrl}/resources`,
    siteName: "E-Loan",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
  ],
};

const cards = [
  {
    href: "/resources/guides",
    icon: "book",
    title: "Guides",
    label: `${guides.length} guides`,
    desc: "Step-by-step explainers on loans, credit, repayment, and borrowing in Canada.",
  },
  {
    href: "/resources/comparisons",
    icon: "scale",
    title: "Comparisons",
    label: `${comparisons.length} comparisons`,
    desc: "Side-by-side breakdowns for choosing between borrowing options.",
  },
  {
    href: "/resources/tools",
    icon: "calculator",
    title: "Loan Calculator",
    label: "Payment tool",
    desc: "Estimate payments, interest, and how extra payments can change the total.",
  },
  {
    href: "/resources/faq",
    icon: "help",
    title: "FAQ",
    label: "Quick answers",
    desc: "Plain-language answers to the questions borrowers ask most often.",
  },
  {
    href: "/blog",
    icon: "pen",
    title: "Blog",
    label: "Borrower notes",
    desc: "Practical articles on money questions, loan choices, and everyday borrowing.",
  },
  {
    href: "/news",
    icon: "newspaper",
    title: "News",
    label: "Market updates",
    desc: "Current updates on Canadian credit, lending, housing, and borrower trends.",
  },
] as const;

export default function ResourcesHubPage() {
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Resources" className="border-x border-b border-border" />

        <section className="grid border-b border-primary lg:grid-cols-[0.52fr_0.48fr]">
          <div className="border-l border-border px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Borrower library
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Learn the numbers before they become decisions.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Guides, comparisons, calculators, and answers for Canadian borrowers who want
              the plain version before they commit.
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
                  Start here
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-foreground">
                  Compare, calculate, then choose.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  The resource hub is built around the questions that usually come up before
                  applying: what it costs, how it works, and what changes by situation.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-r border-border lg:border-l">
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{guides.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Guides</p>
              </div>
              <div className="p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{comparisons.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Comparisons</p>
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
            {["Understand the loan", "Compare the option", "Estimate the payment"].map((step, index) => (
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

        <section className="border-x border-b border-border p-6 md:p-8">
          <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ href, icon, title, label, desc }) => (
              <ResourceHubCard
                key={href}
                href={href}
                icon={icon}
                title={title}
                label={label}
                desc={desc}
                className="group relative min-h-[260px] border-b border-r border-border p-6 transition-colors hover:bg-accent-soft/60 md:p-8"
              />
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
