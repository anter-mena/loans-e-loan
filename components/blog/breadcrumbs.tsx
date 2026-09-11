import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

// E-Loan uses two breadcrumb styles: a compact one above articles and a
// slightly larger one on the blog and news listing pages.
const STYLES = {
  article: {
    nav: "border-x border-b border-border px-5 py-3 md:px-8",
    list: "flex flex-wrap items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground",
    first: "flex items-center gap-1",
    item: "flex items-center gap-1",
    last: "flex min-w-0 items-center gap-1",
    link: "px-1 py-0.5 transition-colors hover:bg-accent hover:text-accent-foreground",
    icon: "size-3",
    lastIcon: "size-3 shrink-0",
    current: "line-clamp-1 font-medium text-foreground",
  },
  listing: {
    nav: "border-x border-b border-border px-6 py-4 md:px-8",
    list: "flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
    first: undefined,
    item: "flex items-center gap-2",
    last: "flex items-center gap-2",
    link: "px-1 transition-colors hover:bg-accent hover:text-accent-foreground",
    icon: "size-3",
    lastIcon: "size-3",
    current: "text-foreground",
  },
};

/**
 * Breadcrumb trail in the E-Loan style. Its structured data is rendered by the
 * page through JsonLd, not here.
 */
export function Breadcrumbs({
  items,
  variant = "article",
}: {
  items: Crumb[];
  variant?: "article" | "listing";
}) {
  const style = STYLES[variant];

  return (
    <nav aria-label="Breadcrumb" className={style.nav}>
      <ol className={style.list}>
        {items.map((item, i) => {
          const first = i === 0;
          const last = i === items.length - 1;
          return (
            <li
              key={`${item.label}-${i}`}
              className={first ? style.first : last ? style.last : style.item}
            >
              {!first && <ChevronRight aria-hidden className={last ? style.lastIcon : style.icon} />}
              {item.href && !last ? (
                <Link href={item.href} className={style.link}>
                  {item.label}
                </Link>
              ) : (
                <span className={style.current}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
