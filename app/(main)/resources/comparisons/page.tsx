import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { comparisons } from "@/lib/comparisons";
import { comparisonIcons } from "@/lib/comparison-icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Comparisons | E-Loan Canada",
  description:
    "Side-by-side comparisons of borrowing options in Canada — personal loans vs credit cards, secured vs unsecured, fixed vs variable, and more.",
  alternates: { canonical: `${siteUrl}/resources/comparisons` },
  openGraph: {
    title: "Loan Comparisons | E-Loan Canada",
    description: "Side-by-side comparisons of borrowing options in Canada.",
    url: `${siteUrl}/resources/comparisons`,
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
    { "@type": "ListItem", position: 3, name: "Comparisons", item: `${siteUrl}/resources/comparisons` },
  ],
};

export default function ComparisonsHubPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-14 pb-20 md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-foreground">Comparisons</li>
            </ol>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Comparisons</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Compare your options
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Honest, side-by-side breakdowns of the borrowing choices Canadians face — so you can
              pick the one that actually fits.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((c) => {
              const Icon = comparisonIcons[c.icon];
              return (
                <Link
                  key={c.slug}
                  href={`/resources/comparisons/${c.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold tracking-tight text-foreground">{c.title}</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">{c.description}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
