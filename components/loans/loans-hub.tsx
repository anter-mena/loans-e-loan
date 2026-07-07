import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

import { siteUrl } from "@/lib/site";
import type { Crumb } from "@/components/loans/article-shell";

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
    <main className="relative overflow-hidden bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="relative overflow-hidden pt-14 pb-20 md:pt-16">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
              {breadcrumb.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight aria-hidden className="h-3 w-3" />}
                  {c.href ? (
                    <Link href={c.href} className="hover:text-foreground">{c.label}</Link>
                  ) : (
                    <span className="font-medium text-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="mx-auto mt-6 max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{categoryLabel}</p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-balance">
              {subtitle}
            </p>
          </div>

          <div className={`mx-auto mt-12 grid max-w-6xl gap-4 ${compact ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {items.map((item) => {
              const Icon = item.icon ?? SectionIcon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-base font-semibold tracking-tight text-foreground">{item.title}</span>
                  {!compact && <span className="text-sm leading-relaxed text-muted-foreground">{item.desc}</span>}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
