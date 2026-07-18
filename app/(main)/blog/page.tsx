import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { BlogNewsHub } from "@/components/blog/blog-news-hub";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const title = "Blog - Loan Tips & Borrowing Insights for Canadians | E-Loan";
const description =
  "Plain-English guidance on personal loans in Canada - rates, repayment, credit, and the borrowing decisions that shape what you actually pay.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${siteUrl}/blog`,
    types: { "application/rss+xml": `${siteUrl}/blog/feed.xml` },
  },
  openGraph: {
    title,
    description,
    url: `${siteUrl}/blog`,
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

export default function BlogIndex() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category)).size;
  const latest = posts[0]?.date;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
    })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Blog" className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-6 py-4 md:px-8">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            <li>
              <Link href="/" className="px-1 transition-colors hover:bg-accent hover:text-accent-foreground">
                Home
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight aria-hidden className="size-3" />
              <span className="text-foreground">Blog</span>
            </li>
          </ol>
        </nav>

        <section className="grid border-x border-b border-border lg:grid-cols-[0.54fr_0.46fr]">
          <div className="px-6 py-14 md:px-10 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Borrower notes
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Borrowing explained before it gets expensive.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Practical articles on rates, repayment, credit checks, emergency borrowing, and
              the small details that change the total cost of a loan.
            </p>
          </div>

          <aside className="grid border-t border-border lg:border-l lg:border-t-0">
            <div className="relative min-h-[310px] overflow-hidden border-b border-primary bg-primary p-6 text-primary-foreground md:p-8">
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
                  Start here
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary-foreground">
                  Read the plain version first.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  Short, direct explanations for Canadian borrowers who want clarity before
                  clicking apply.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3">
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{posts.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Articles</p>
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
          items={posts}
          basePath="/blog"
          emptyHref="/resources/guides"
          emptyLinkLabel="Explore guides"
        />
      </section>
    </main>
  );
}
