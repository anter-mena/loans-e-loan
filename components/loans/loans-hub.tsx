import Link from "next/link";
import { ChevronRight, type LucideIcon } from "lucide-react";

import type { Crumb } from "@/components/loans/article-shell";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { ResourceHubCard, type ResourceHubIcon } from "@/components/resources/resource-hub-card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { siteUrl } from "@/lib/site";

export type HubItem = { href: string; title: string; desc: string; icon?: LucideIcon; iconKey?: ResourceHubIcon };

function getDefaultIconKey(categoryLabel: string): ResourceHubIcon {
  const normalized = categoryLabel.toLowerCase();

  if (normalized.includes("amount")) return "dollar";
  if (normalized.includes("purpose")) return "target";
  if (normalized.includes("credit")) return "credit";
  if (normalized.includes("type")) return "file";
  if (normalized.includes("location")) return "map";

  return "dollar";
}

export function LoansHub(props: {
  title: string;
  subtitle: string;
  categoryLabel: string;
  breadcrumb: Crumb[];
  items: HubItem[];
  icon: LucideIcon;
  compact?: boolean;
}) {
  const {
    title,
    subtitle,
    categoryLabel,
    breadcrumb,
    items,
    compact = false,
  } = props;

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

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label={categoryLabel} className="border-x border-b border-border" />

        <nav aria-label="Breadcrumb" className="border-x border-b border-border px-5 py-3 md:px-8">
          <ol className="flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {breadcrumb.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight aria-hidden className="size-3" />}
                  {c.href ? (
                    <Link
                      href={c.href}
                      className="px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {c.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

        <div className="grid border-b border-primary lg:grid-cols-[0.62fr_0.38fr]">
          <div className="border-l border-border px-6 py-12 md:px-10 md:py-14">
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

          <aside className="grid">
            <div className="relative overflow-hidden border-x border-t border-b border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-t-0">
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
                  Browse options
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-primary-foreground">
                  Compare the path before the payment.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  Paths curated for Canadian borrowers, grouped so the next click has a clear job.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 border-r border-border lg:border-l">
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{items.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Options</p>
              </div>
              <div className="p-5">
                <p className="font-display text-4xl font-semibold text-foreground">Soft</p>
                <p className="mt-1 text-xs text-muted-foreground">Credit check</p>
              </div>
            </div>
          </aside>
        </div>

        <section className="grid border-x border-y border-primary bg-primary text-primary-foreground lg:grid-cols-[0.36fr_0.64fr]">
          <div className="border-b border-primary p-6 md:p-8 lg:border-b-0 lg:border-r">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
              Reading order
            </p>
          </div>
          <div className="grid md:grid-cols-3">
            {["Choose a route", "Compare the cost", "Apply when ready"].map((step, index) => (
              <div
                key={step}
                className="border-b border-border-dark p-6 md:border-b-0 md:border-r md:last:border-r-0"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-x border-b border-border p-6 md:p-8">
          <div className={`grid border-l border-t border-border ${compact ? "sm:grid-cols-3 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {items.map((item) => (
              <ResourceHubCard
                key={item.href}
                href={item.href}
                icon={item.iconKey ?? getDefaultIconKey(categoryLabel)}
                title={item.title}
                label="Option"
                desc={item.desc}
                compact={compact}
                className="border-b border-r border-border"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
