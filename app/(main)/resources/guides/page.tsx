import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ResourceHubCard, type ResourceHubIcon } from "@/components/resources/resource-hub-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { guides, guideSectionLabels, type GuideCategory, type GuideMeta } from "@/lib/guides";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Guides & Resources | E-Loan Canada",
  description:
    "Clear, practical guides on personal loans, credit, and borrowing in Canada - from choosing a term to rebuilding credit and understanding provincial regulations.",
  alternates: { canonical: `${siteUrl}/resources/guides` },
  openGraph: {
    title: "Loan Guides & Resources | E-Loan Canada",
    description: "Clear, practical guides on personal loans, credit, and borrowing in Canada.",
    url: `${siteUrl}/resources/guides`,
    siteName: "E-Loan",
    type: "website",
  },
};

const categoryOrder: GuideCategory[] = [
  "General Guides",
  "Loan Types",
  "Purposes",
  "Comparisons",
  "Educational",
  "Special Circumstances",
  "Alternatives",
  "Tools/Guides",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${siteUrl}/resources` },
    { "@type": "ListItem", position: 3, name: "Guides", item: `${siteUrl}/resources/guides` },
  ],
};

function guideCardIcon(guide: GuideMeta): ResourceHubIcon {
  if (guide.category === "Comparisons") return "scale";
  if (guide.category === "Tools/Guides") return "calculator";
  if (guide.category === "Purposes") return "target";
  if (guide.category === "Loan Types") return "file";
  if (guide.category === "Special Circumstances") return "credit";
  return "book";
}

function GuideCard({ guide }: { guide: GuideMeta }) {
  return (
    <ResourceHubCard
      href={`/resources/guides/${guide.slug}`}
      icon={guideCardIcon(guide)}
      title={guide.title}
      label={guide.category}
      desc={guide.description}
      className="min-h-[240px] border-r border-b border-border"
    />
  );
}

function Grid({ items }: { items: GuideMeta[] }) {
  return (
    <div className="grid border-l border-t border-border md:grid-cols-2 lg:grid-cols-3">
      {items.map((g) => (
        <GuideCard key={g.slug} guide={g} />
      ))}
    </div>
  );
}

export default function GuidesHubPage() {
  const main = guides.filter((g) => g.section === "main");
  const byCategory = categoryOrder
    .map((cat) => ({ cat, items: main.filter((g) => g.category === cat) }))
    .filter((group) => group.items.length > 0);

  const specialSections: { key: "how-to" | "regulations" | "seasonal"; label: string }[] = [
    { key: "how-to", label: guideSectionLabels["how-to"] },
    { key: "regulations", label: guideSectionLabels.regulations },
    { key: "seasonal", label: guideSectionLabels.seasonal },
  ];

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Guides" className="border-x border-b border-border" />

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
            <li className="font-medium text-foreground">Guides</li>
          </ol>
        </nav>

        <section className="grid border-b border-border lg:grid-cols-[0.52fr_0.48fr]">
          <div className="border-x border-border px-6 py-14 md:px-10 lg:border-r-0 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Borrower guides
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Loan guides &amp; resources.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Straightforward, no-jargon guidance to help you borrow smarter and understand every number before you sign.
            </p>
          </div>

          <aside className="relative overflow-hidden border-x border-primary bg-primary p-6 text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))] md:p-8">
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
                Read the plain version first.
              </h2>
              <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                Practical explainers for rates, credit, loan types, approval, repayment, and provincial rules.
              </p>
            </div>
          </aside>
        </section>

        <div className="border-x border-b border-border">
          {byCategory.map(({ cat, items }) => (
            <section key={cat} className="border-b border-border p-6 last:border-b-0 md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <h2 className="font-display text-xl font-bold tracking-tight text-foreground">{cat}</h2>
                <div aria-hidden className="h-px flex-1 bg-border" />
              </div>
              <Grid items={items} />
            </section>
          ))}

          {specialSections.map(({ key, label }) => {
            const items = guides.filter((g) => g.section === key);
            if (items.length === 0) return null;
            return (
              <section key={key} className="border-b border-border p-6 last:border-b-0 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <h2 className="font-display text-xl font-bold tracking-tight text-foreground">{label}</h2>
                  <div aria-hidden className="h-px flex-1 bg-border" />
                </div>
                <Grid items={items} />
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
