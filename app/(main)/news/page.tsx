import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { BlogNewsHub } from "@/components/blog/blog-news-hub";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { getAllNews } from "@/lib/news";
import { siteUrl } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

const title = "News - Loan & Rate Updates for Canadian Borrowers | E-Loan";
const description =
  "Bank of Canada decisions, lending data, and rule changes that affect what you pay to borrow in Canada - reported in plain English.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/news`,
    types: { "application/rss+xml": `${siteUrl}/news/feed.xml` },
  },
  openGraph: { images: [OG_IMAGE],
    title,
    description,
    url: `${siteUrl}/news`,
    siteName: "E-Loan",
    type: "website",
  },
};

function formatDate(iso?: string) {
  if (!iso) return "Soon";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function NewsIndex() {
  const items = getAllNews();
  const categories = new Set(items.map((item) => item.category)).size;
  const latest = items[0]?.date;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteUrl}/news` },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${siteUrl}/news/${item.slug}`,
    })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="News" className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-6 py-4 md:px-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <li>
              <Link href="/" className="px-1 transition-colors hover:bg-accent hover:text-accent-foreground">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight aria-hidden className="size-3" />
              <span className="text-foreground">News</span>
            </li>
          </ol>
        </nav>

        <section className="grid border-b border-border lg:grid-cols-[0.54fr_0.46fr]">
          <div className="border-x border-border px-6 py-14 md:px-10 lg:border-r-0 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Market updates
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Loan news without the noise.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Bank of Canada decisions, lending data, household credit signals, and rule
              changes that can affect what Canadian borrowers pay.
            </p>
          </div>

          <aside className="grid border-t border-border lg:border-t-0">
            <div className="relative min-h-[310px] overflow-hidden border-x border-b border-primary bg-primary p-6 text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))] md:p-8">
              <FlickeringGrid
                aria-hidden
                className="absolute inset-0"
                squareSize={3}
                gridGap={2}
                flickerChance={0.08}
                maxOpacity={0.2}
                color="hsl(var(--primary-foreground))"
              />
              <div className="relative max-w-sm">
                <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Watch list
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary-foreground">
                  Follow the signals that move borrowing costs.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  Quick context for rate changes, credit trends, policy updates, and lender
                  movement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-x border-border">
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{items.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Updates</p>
              </div>
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{categories}</p>
                <p className="mt-1 text-xs text-muted-foreground">Topics</p>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-foreground">{formatDate(latest)}</p>
                <p className="mt-1 text-xs text-muted-foreground">Latest</p>
              </div>
            </div>
          </aside>
        </section>

        <BlogNewsHub
          items={items}
          basePath="/news"
          emptyHref="/blog"
          emptyLinkLabel="Read the blog"
        />
      </section>
    </main>
  );
}
