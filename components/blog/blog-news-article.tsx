import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { ArrowUpRight, ChevronRight, Newspaper, PenLine } from "lucide-react";

import { AboutPixelApply } from "@/components/about/about-pixel-apply";
import { PostImage } from "@/components/blog/post-image";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ArticleRelatedLink } from "@/components/loans/article-related-link";
import { ArticleToc } from "@/components/loans/article-toc";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import type { TocItem } from "@/lib/toc";

type RelatedLink = { label: string; href: string };
type FaqItem = { question: string; answer: string };

type ArticleMeta = {
  title: string;
  description: string;
  date: string;
  updated: string;
  author: string;
  category: string;
  image: string | null;
  faqs: FaqItem[];
  related: RelatedLink[];
  readingTime: number;
};

type BlogNewsArticleProps = {
  meta: ArticleMeta;
  content: string;
  toc: TocItem[];
  kind: "blog" | "news";
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

export function BlogNewsArticle({ meta, content, toc, kind }: BlogNewsArticleProps) {
  const hubHref = kind === "blog" ? "/blog" : "/news";
  const hubLabel = kind === "blog" ? "Blog" : "News";
  const Icon = kind === "blog" ? PenLine : Newspaper;
  const internal = meta.related.filter((link) => !link.href.startsWith("http"));
  const external = meta.related.filter((link) => link.href.startsWith("http"));
  const tocItems = toc.map((item) => ({
    label: item.text,
    href: `#${item.id}` as `#${string}`,
  }));

  return (
    <main className="bg-background">
      <article className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label={hubLabel} className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            <li className="flex items-center gap-1">
              <Link
                href="/"
                className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Home
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight aria-hidden className="size-3" />
              <Link
                href={hubHref}
                className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {hubLabel}
              </Link>
            </li>
            <li className="flex min-w-0 items-center gap-1">
              <ChevronRight aria-hidden className="size-3 shrink-0" />
              <span className="line-clamp-1 font-medium text-foreground">{meta.title}</span>
            </li>
          </ol>
        </nav>

        <header className="grid border-x border-b border-border lg:grid-cols-[0.6fr_0.4fr]">
          <div className="px-6 py-12 md:px-10 md:py-14">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              {meta.category}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-6xl">
              {meta.title}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              {meta.description}
            </p>
            <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {kind === "blog" ? "Reviewed" : "Published"} by {meta.author} / {formatDate(meta.updated)} /{" "}
              {meta.readingTime} min read
            </p>
          </div>

          <aside className="relative overflow-hidden border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={3}
              gridGap={2}
              flickerChance={0.08}
              maxOpacity={0.2}
              color="hsl(var(--primary-foreground))"
            />
            <div className="relative flex h-full min-h-[360px] flex-col justify-between gap-8">
              <div>
                <span className="grid size-12 place-items-center bg-accent text-accent-foreground">
                  <Icon className="size-6" />
                </span>
                <p className="mt-6 inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  {hubLabel} article
                </p>
                {meta.image ? (
                  <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-border-dark bg-primary-foreground/5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={meta.image}
                      alt={meta.title}
                      className="absolute inset-0 h-full w-full object-cover grayscale"
                    />
                  </div>
                ) : null}
                <p className="mt-5 text-sm leading-6 text-primary-foreground/65">
                  Clear borrower context, practical next steps, and no rounded marketing fog.
                </p>
              </div>
              <AboutPixelApply variant="light" className="ml-auto w-fit px-4 text-xs" />
            </div>
          </aside>
        </header>

        {tocItems.length > 0 ? (
          <section className="grid border-x border-b border-border lg:grid-cols-[0.36fr_0.64fr]">
            <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                Contents
              </p>
            </div>
            <ArticleToc items={tocItems} />
          </section>
        ) : null}

        <section className="border-x border-b border-border">
          <div className="mx-auto max-w-3xl px-6 py-10 md:px-8 md:py-12">
            <div className="blog-prose prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug]}
                components={{
                  img: PostImage,
                  ol: ({ children }) => <ol className="article-numbered-list">{children}</ol>,
                  table: ({ children }) => (
                    <div className="not-prose my-7 overflow-x-auto border border-border">
                      <table className="w-full min-w-[520px] border-collapse text-sm">{children}</table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-primary text-primary-foreground">{children}</thead>
                  ),
                  tbody: ({ children }) => (
                    <tbody className="[&>tr]:border-t [&>tr]:border-border">{children}</tbody>
                  ),
                  th: ({ children }) => (
                    <th className="px-4 py-3 text-left font-semibold text-primary-foreground">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="px-4 py-3 align-top text-muted-foreground first:font-medium first:text-foreground">
                      {children}
                    </td>
                  ),
                }}
              >
                {content}
              </ReactMarkdown>
            </div>
          </div>
        </section>

        {internal.length > 0 || external.length > 0 ? (
          <section className="border-x border-b border-border px-6 py-8 md:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              {internal.length > 0 ? (
                <div>
                  <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">
                    Related reading
                  </h2>
                  <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center">
                    {internal.map((link) => (
                      <ArticleRelatedLink key={link.href + link.label} href={link.href} label={link.label} />
                    ))}
                  </div>
                </div>
              ) : null}

              {external.length > 0 ? (
                <div>
                  <h2 className="text-center font-display text-lg font-bold tracking-tight text-foreground">
                    Sources
                  </h2>
                  <div className="mt-5 grid border-t border-border">
                    {external.map((link, index) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-h-14 items-center justify-between gap-4 border-b border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                      >
                        <span>{String(index + 1).padStart(2, "0")} / {link.label}</span>
                        <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="border-x border-b border-primary bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-3xl gap-5 px-6 py-8 md:grid-cols-[1fr_auto] md:items-center md:px-8">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight">Ready to apply?</h2>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/65">
                Check your rate in about two minutes. It is a soft credit check with no impact on your score.
              </p>
            </div>
            <AboutPixelApply variant="light" />
          </div>
        </section>

        {meta.faqs.length > 0 ? (
          <section className="grid border-x border-b border-border lg:grid-cols-[0.36fr_0.64fr]">
            <div className="border-b border-border p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-4 w-px bg-accent" />
                FAQ
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-none tracking-tight text-foreground">
                Quick answers.
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {meta.faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question} className="border-b border-border px-6 md:px-8">
                  <AccordionTrigger
                    iconVariant="plus"
                    className="rounded-none !border-0 py-5 text-sm font-semibold hover:no-underline [&_[data-slot=accordion-trigger-icon]]:text-primary"
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        ) : null}

        <section className="border-x border-b border-border px-6 py-8 text-center md:px-8">
          <Link
            href={hubHref}
            className="inline-flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline-offset-4 transition-colors hover:bg-accent hover:underline"
          >
            All {hubLabel.toLowerCase()}
            <ArrowUpRight className="size-4" />
          </Link>
        </section>
      </article>
    </main>
  );
}
