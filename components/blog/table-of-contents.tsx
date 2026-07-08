"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import type { TocItem } from "@/lib/toc";

/**
 * Table of contents.
 * - variant="mobile": a collapsible block shown above the article on small screens.
 * - variant="sidebar": a sticky side rail shown next to the article on lg+ (parent handles the sticky wrapper).
 * Scroll-spy highlights the section currently in view.
 */
export function TableOfContents({
  items,
  variant = "sidebar",
}: {
  items: TocItem[];
  variant?: "sidebar" | "mobile";
}) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (items.length === 0) return;
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topmost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
          );
          setActiveId(topmost.target.id);
        }
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  if (items.length < 3) return null;

  const list = (
    <ul className="flex flex-col gap-2 text-[0.8125rem]">
      {items.map((item) => (
        <li key={item.id} className={item.depth === 3 ? "pl-3" : ""}>
          <a
            href={`#${item.id}`}
            className={[
              "block leading-snug transition-colors border-l-2 -ml-px pl-3",
              activeId === item.id
                ? "border-accent text-accent font-semibold"
                : "border-transparent text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const header = (
    <div className="mb-3 flex items-center gap-2">
      <List size={14} className="text-accent" strokeWidth={2} />
      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        On this page
      </span>
    </div>
  );

  if (variant === "mobile") {
    return (
      <details className="mb-8 rounded-2xl border border-border bg-card/60 p-4 lg:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          <List size={14} className="text-accent" strokeWidth={2} />
          On this page
        </summary>
        <div className="mt-4 border-l border-border">{list}</div>
      </details>
    );
  }

  return (
    <nav aria-label="Table of contents" className="border-l border-border">
      <div className="pl-3">{header}</div>
      {list}
    </nav>
  );
}
