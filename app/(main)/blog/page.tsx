import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronRight, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/lib/blog";
import { siteUrl } from "@/lib/site";

const title = "Blog — Loan Tips & Borrowing Insights for Canadians | E-Loan";
const description =
  "Plain-English guidance on personal loans in Canada — rates, repayment, credit, and the borrowing decisions that shape what you actually pay.";

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

function formatDate(iso: string) {
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function BlogIndex() {
  const posts = getAllPosts();

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
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.title,
      url: `${siteUrl}/blog/${p.slug}`,
    })),
  };

  return (
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* Header */}
      <section className="relative overflow-hidden pt-14 pb-12 md:pt-20 md:pb-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mx-auto mb-6 flex max-w-2xl justify-center">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li className="flex items-center gap-1"><ChevronRight aria-hidden className="h-3 w-3" /><span className="font-medium text-foreground">Blog</span></li>
            </ol>
          </nav>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Blog</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              The E-Loan Blog
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              Rates, repayment, and honest takes on the borrowing decisions that shape what you
              actually pay — written in plain language for Canadians.
            </p>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="mx-auto flex max-w-lg flex-col items-center py-8 text-center md:py-12">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Newspaper className="h-7 w-7" strokeWidth={1.75} />
              </div>
              <h2 className="mt-6 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                New posts coming soon
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We&apos;re putting together fresh borrowing tips, rate explainers, and honest guides
                for Canadian borrowers. Check back shortly — new articles will land here.
              </p>
              <Link
                href="/resources/guides"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
              >
                In the meantime, explore our loan guides
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    {post.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-accent/5 to-transparent" />
                    )}
                    <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-accent backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[0.72rem] uppercase tracking-wide text-muted-foreground">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span>·</span>
                      <span>{post.readingTime} min read</span>
                      <ArrowUpRight className="ml-auto h-3.5 w-3.5 -translate-x-1 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-3xl border border-accent/20 bg-accent-soft/50 p-8 text-center">
            <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Ready to check your rate?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              It takes about two minutes and it&apos;s a soft credit check — no impact on your score.
            </p>
            <Button variant="hero" size="lg" asChild className="mt-5">
              <Link href="/apply">
                Check your rate
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
