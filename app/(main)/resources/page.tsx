import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, HelpCircle, Scale } from "lucide-react";

import { guides } from "@/lib/guides";
import { comparisons } from "@/lib/comparisons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources — Guides, Comparisons & Tools | E-Loan Canada",
  description:
    "Everything you need to borrow smarter in Canada: in-depth loan guides, side-by-side comparisons, a free loan calculator, and answers to common questions.",
  alternates: { canonical: `${siteUrl}/resources` },
  openGraph: {
    title: "Resources — Guides, Comparisons & Tools | E-Loan Canada",
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

export default function ResourcesHubPage() {
  const cards = [
    {
      href: "/resources/guides",
      icon: BookOpen,
      title: "Guides",
      desc: `${guides.length} step-by-step guides on loans, credit, and borrowing in Canada.`,
    },
    {
      href: "/resources/comparisons",
      icon: Scale,
      title: "Comparisons",
      desc: `${comparisons.length} side-by-side breakdowns to help you pick the right option.`,
    },
    {
      href: "/resources/tools",
      icon: Calculator,
      title: "Loan Calculator",
      desc: "Estimate payments, total interest, and how extra payments save you money.",
    },
    {
      href: "/resources/faq",
      icon: HelpCircle,
      title: "FAQ",
      desc: "Straight answers to the questions borrowers ask us most.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-16 pb-20 md:pt-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Resources</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Borrow smarter.
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Guides, comparisons, and tools to help you understand every number before you sign —
              written in plain language, built for Canadians.
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
