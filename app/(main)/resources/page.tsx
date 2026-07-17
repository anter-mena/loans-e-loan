import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Calculator, HelpCircle, Newspaper, PenLine, Scale } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
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
    icon: BookOpen,
    title: "Guides",
    label: `${guides.length} guides`,
    desc: "Step-by-step explainers on loans, credit, repayment, and borrowing in Canada.",
  },
  {
    href: "/resources/comparisons",
    icon: Scale,
    title: "Comparisons",
    label: `${comparisons.length} comparisons`,
    desc: "Side-by-side breakdowns for choosing between borrowing options.",
  },
  {
    href: "/resources/tools",
    icon: Calculator,
    title: "Loan Calculator",
    label: "Payment tool",
    desc: "Estimate payments, interest, and how extra payments can change the total.",
  },
  {
    href: "/resources/faq",
    icon: HelpCircle,
    title: "FAQ",
    label: "Quick answers",
    desc: "Plain-language answers to the questions borrowers ask most often.",
  },
  {
    href: "/blog",
    icon: PenLine,
    title: "Blog",
    label: "Borrower notes",
    desc: "Practical articles on money questions, loan choices, and everyday borrowing.",
  },
  {
    href: "/news",
    icon: Newspaper,
    title: "News",
    label: "Market updates",
    desc: "Current updates on Canadian credit, lending, housing, and borrower trends.",
  },
];

export default function ResourcesHubPage() {
  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Resources" className="border-b border-border" />

        <section className="grid border-b border-border lg:grid-cols-[0.52fr_0.48fr]">
          <div className="px-6 py-14 md:px-10 lg:py-16">
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

          <aside className="grid border-t border-border lg:border-l lg:border-t-0">
            <div className="border-b border-border bg-accent-soft/60 p-6 md:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                Start here
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-foreground">
                Compare, calculate, then choose.
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                The resource hub is built around the questions that usually come up before
                applying: what it costs, how it works, and what changes by situation.
              </p>
            </div>
            <div className="grid grid-cols-2">
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

        <section className="grid border-b border-border md:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ href, icon: Icon, title, label, desc }, index) => (
            <Link
              key={href}
              href={href}
              className={`group relative min-h-[260px] border-b border-border p-6 transition-colors hover:bg-accent-soft/60 md:p-8 ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"} ${index >= cards.length - 2 ? "md:border-b-0" : ""} ${
                index >= cards.length - 3 ? "lg:border-b-0" : ""
              }`}
            >
              <ArrowUpRight className="absolute right-5 top-5 size-6 -translate-y-2 translate-x-2 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
              <span className="grid size-11 place-items-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <p className="mt-12 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                {label}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{title}</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">{desc}</p>
            </Link>
          ))}
        </section>

        <section className="grid border-b border-primary bg-primary text-primary-foreground lg:grid-cols-[0.36fr_0.64fr]">
          <div className="border-b border-primary p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
              Reading order
            </p>
          </div>
          <div className="grid md:grid-cols-3">
            {["Understand the loan", "Compare the option", "Estimate the payment"].map((step, index) => (
              <div
                key={step}
                className="border-b border-primary p-6 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
