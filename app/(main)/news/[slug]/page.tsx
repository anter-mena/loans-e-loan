import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { PostImage } from "@/components/blog/post-image";
import rehypeRaw from "rehype-raw";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { getAllNews, getNews } from "@/lib/news";
import { extractToc } from "@/lib/toc";
import { siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((p) => ({ slug: p.slug }));
}

type Params = Promise<{ slug: string }>;

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

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) return {};

  const url = `${siteUrl}/news/${slug}`;
  const keywords = item.meta.keywords.length
    ? item.meta.keywords
    : [item.meta.title.toLowerCase(), "canada loan news", "e-loan"];

  return {
    title: `${item.meta.title} | E-Loan`,
    description: item.meta.description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${item.meta.title} | E-Loan`,
      description: item.meta.description,
      url,
      siteName: "E-Loan",
      type: "article",
      publishedTime: item.meta.date,
      modifiedTime: item.meta.updated,
      authors: [item.meta.author],
    },
    twitter: {
      card: "summary_large_image",
      title: item.meta.title,
      description: item.meta.description,
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNews(slug);
  if (!item) notFound();

  const { meta, content } = item;
  const toc = extractToc(content);
  const url = `${siteUrl}/news/${slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "News", item: `${siteUrl}/news` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.date,
    dateModified: meta.updated,
    ...(meta.image ? { image: meta.image } : {}),
    author: { "@type": "Organization", name: meta.author },
    publisher: {
      "@type": "Organization",
      name: "E-Loan",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.svg` },
    },
    mainEntityOfPage: url,
    url,
  };

  const faqJsonLd =
    meta.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: meta.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const internal = meta.related.filter((l) => !l.href.startsWith("http"));
  const sources = meta.related.filter((l) => l.href.startsWith("http"));

  return (
    <main className="relative overflow-x-clip bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      {/* Header */}
      <section className="relative overflow-x-clip pt-14 pb-10 md:pt-20 md:pb-14">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container relative mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mx-auto mb-6 flex max-w-3xl justify-center">
            <ol className="flex flex-wrap items-center justify-center gap-1 text-xs text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li className="flex items-center gap-1"><ChevronRight aria-hidden className="h-3 w-3" /><Link href="/news" className="hover:text-foreground">News</Link></li>
              <li className="flex items-center gap-1"><ChevronRight aria-hidden className="h-3 w-3" /><span className="line-clamp-1 font-medium text-foreground">{meta.title}</span></li>
            </ol>
          </nav>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{meta.category}</p>
            <h1 className="mt-3 font-display text-3xl font-bold leading-tight tracking-tight text-balance text-foreground sm:text-4xl">
              {meta.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground text-balance">
              {meta.description}
            </p>
            <p className="mt-5 text-xs text-muted-foreground">
              By the {meta.author} · Published {formatDate(meta.date)}
              {meta.updated !== meta.date ? ` · Updated ${formatDate(meta.updated)}` : ""} · {meta.readingTime} min read
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start lg:gap-12">
          <article className="min-w-0 w-full max-w-[760px] mx-auto lg:mx-0">
            <TableOfContents items={toc} variant="mobile" />
            <div className="blog-prose prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSlug]} components={{ img: PostImage }}>
                {content}
              </ReactMarkdown>
            </div>

            {/* Related reading + sources */}
            {(internal.length > 0 || sources.length > 0) && (
              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
                {internal.length > 0 && (
                  <div>
                    <h2 className="mb-4 font-display text-lg font-bold tracking-tight text-foreground">Related Reading</h2>
                    <ul className="flex flex-col gap-2.5">
                      {internal.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-2 hover:underline"
                          >
                            {link.label}
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {sources.length > 0 && (
                  <div>
                    <h2 className="mb-4 font-display text-lg font-bold tracking-tight text-foreground">Sources</h2>
                    <ul className="flex flex-col gap-2.5">
                      {sources.map((link) => (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 hover:text-accent"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-accent/20 bg-accent-soft/50 p-8 text-center">
              <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Ready to apply?</h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Check your rate in about two minutes. It&apos;s a soft credit check — no impact on your score.
              </p>
              <Button variant="hero" size="lg" asChild className="mt-5">
                <Link href="/apply">
                  Check your rate
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Back to hub */}
            <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
              <Link href="/news" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-all hover:decoration-foreground">
                <ArrowUpRight className="h-3.5 w-3.5 rotate-180" />
                All news
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground underline decoration-foreground/25 underline-offset-4 transition-all hover:decoration-foreground">
                Read the blog
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          <aside className="hidden lg:block sticky top-24 self-start">
            <TableOfContents items={toc} variant="sidebar" />
          </aside>
        </div>
      </section>

      {/* FAQ */}
      {meta.faqs.length > 0 && (
        <section className="pb-20">
          <div className="container mx-auto max-w-3xl px-4">
            <h2 className="mb-8 text-center font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col">
              {meta.faqs.map((f) => (
                <div key={f.question} className="border-b border-border py-5 last:border-b-0">
                  <h3 className="mb-2 text-[0.95rem] font-semibold text-foreground">{f.question}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
