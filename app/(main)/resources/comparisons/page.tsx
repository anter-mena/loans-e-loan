import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ResourceHubCard } from "@/components/resources/resource-hub-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { comparisons } from "@/lib/comparisons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Comparisons | E-Loan Canada",
  description:
    "Side-by-side comparisons of borrowing options in Canada - personal loans vs credit cards, secured vs unsecured, fixed vs variable, and more.",
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
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Comparisons" className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <li>
              <Link href="/" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">
                Home
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li>
              <Link href="/resources" className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground">
                Resources
              </Link>
            </li>
            <li aria-hidden>
              <ChevronRight className="h-3 w-3" />
            </li>
            <li className="font-medium text-foreground">Comparisons</li>
          </ol>
        </nav>

        <section className="grid border-x border-b border-border lg:grid-cols-[0.52fr_0.48fr]">
          <div className="border-r border-border px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Compare options
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Compare your options.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Honest, side-by-side breakdowns of borrowing choices Canadians face, so you can pick the one that fits.
            </p>
          </div>

          <aside className="relative overflow-hidden border-primary bg-primary p-6 text-primary-foreground md:p-8">
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
                Decision grid
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-foreground">
                Put two choices on the same page.
              </h2>
              <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                Compare cost, speed, risk, flexibility, and fit before choosing a borrowing route.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid border-x border-b border-border md:grid-cols-2 lg:grid-cols-3">
          {comparisons.map((c, index) => (
            <ResourceHubCard
              key={c.slug}
              href={`/resources/comparisons/${c.slug}`}
              icon="scale"
              title={c.title}
              label="Comparison"
              desc={c.description}
              className={`min-h-[250px] border-b border-border ${
                index % 2 === 0 ? "md:border-r" : ""
              } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
            />
          ))}
        </section>
      </section>
    </main>
  );
}
