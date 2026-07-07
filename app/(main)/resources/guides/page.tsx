import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { guides, guideSectionLabels, type GuideCategory, type GuideMeta } from "@/lib/guides";
import { guideIcons } from "@/lib/guide-icons";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Loan Guides & Resources | E-Loan Canada",
  description:
    "Clear, practical guides on personal loans, credit, and borrowing in Canada — from choosing a term to rebuilding credit and understanding provincial regulations.",
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

function GuideCard({ guide }: { guide: GuideMeta }) {
  const Icon = guideIcons[guide.icon];
  return (
    <Link
      href={`/resources/guides/${guide.slug}`}
      className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
        <Icon className="h-5 w-5" />
      </span>
      <span className="font-display text-base font-semibold tracking-tight text-foreground">{guide.title}</span>
      <span className="text-sm leading-relaxed text-muted-foreground">{guide.description}</span>
    </Link>
  );
}

function Grid({ items }: { items: GuideMeta[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-14 pb-20 md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
              <li aria-hidden><ChevronRight className="h-3 w-3" /></li>
              <li className="font-medium text-foreground">Guides</li>
            </ol>
          </nav>

          {/* header */}
          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Guides</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              Loan guides &amp; resources
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Straightforward, no-jargon guidance to help you borrow smarter — and understand every
              number before you sign.
            </p>
          </div>

          {/* main, grouped by category */}
          <div className="mx-auto mt-12 max-w-6xl space-y-12">
            {byCategory.map(({ cat, items }) => (
              <section key={cat}>
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
                <section key={key}>
                  <div className="mb-5 flex items-center gap-3">
                    <h2 className="font-display text-xl font-bold tracking-tight text-foreground">{label}</h2>
                    <div aria-hidden className="h-px flex-1 bg-border" />
                  </div>
                  <Grid items={items} />
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
