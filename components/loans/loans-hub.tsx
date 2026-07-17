import Link from "next/link";
import { ArrowUpRight, ChevronRight, type LucideIcon } from "lucide-react";

import type { Crumb } from "@/components/loans/article-shell";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { siteUrl } from "@/lib/site";

export type HubItem = { href: string; title: string; desc: string; icon?: LucideIcon };

export function LoansHub({
  title,
  subtitle,
  categoryLabel,
  breadcrumb,
  items,
  icon: SectionIcon,
  compact = false,
}: {
  title: string;
  subtitle: string;
  categoryLabel: string;
  breadcrumb: Crumb[];
  items: HubItem[];
  icon: LucideIcon;
  compact?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `${siteUrl}${c.href}` : `${siteUrl}`,
    })),
  };

  return (
    <main className="bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label={categoryLabel} className="border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {breadcrumb.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight aria-hidden className="size-3" />}
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-accent">{c.label}</Link>
                  ) : (
                    <span className="font-medium text-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

        <div className="grid border-b border-border lg:grid-cols-[0.62fr_0.38fr]">
          <div className="px-6 py-12 md:px-10 md:py-14">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              {categoryLabel}
            </p>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[0.98] tracking-tight text-foreground md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              {subtitle}
            </p>
          </div>

          <aside className="border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <span className="grid size-11 place-items-center bg-accent text-accent-foreground">
                  <SectionIcon className="size-5" />
                </span>
                <p className="mt-6 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                  Browse options
                </p>
                <p className="mt-3 font-display text-5xl font-semibold leading-none tracking-tight">
                  {items.length}
                </p>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/62">
                  Paths curated for Canadian borrowers.
                </p>
              </div>
              <Link
                href="/apply"
                className="inline-flex h-10 w-fit items-center bg-primary-foreground px-4 text-sm font-bold text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Apply now
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>
          </aside>
        </div>

          <div className={`grid border-b border-border ${compact ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {items.map((item) => {
              const Icon = item.icon ?? SectionIcon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative min-h-[176px] border-b border-border p-5 transition-colors hover:bg-accent-soft/60 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                >
                  <ArrowUpRight className="absolute right-4 top-4 size-5 -translate-y-2 translate-x-2 text-accent opacity-0 transition-all group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                  <span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="mt-5 block font-display text-base font-semibold tracking-tight text-foreground">{item.title}</span>
                  {!compact && <span className="mt-2 block text-sm leading-6 text-muted-foreground">{item.desc}</span>}
                </Link>
              );
            })}
          </div>
      </section>
    </main>
  );
}
