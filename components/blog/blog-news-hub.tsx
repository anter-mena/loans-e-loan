"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Newspaper,
} from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type BlogNewsHubItem = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string | null;
  category: string;
  readingTime: number;
};

type BlogNewsHubProps = {
  items: BlogNewsHubItem[];
  basePath: "/blog" | "/news";
  emptyHref: string;
  emptyLinkLabel: string;
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

function HubCard({
  item,
  basePath,
}: {
  item: BlogNewsHubItem;
  basePath: "/blog" | "/news";
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={`${basePath}/${item.slug}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "group relative min-h-[360px] overflow-hidden border-b border-r border-border-dark p-6 md:p-8"
      )}
    >
      <PixelTransition
        active={active}
        gridSize={7}
        animationStepDuration={0.28}
        exitAnimationStepDuration={0.22}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />

      <div className="relative z-20 flex h-full min-w-0 flex-col">
        <ArrowUpRight
          className={cn(
            "absolute -right-1 -top-1 size-6 translate-x-2 -translate-y-2 opacity-0 transition-all duration-300",
            active ? "text-accent-foreground" : "text-accent",
            "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        />

        <div className="relative aspect-[1.9] overflow-hidden border border-border-dark bg-primary-foreground">
          {item.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover grayscale transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.035] group-hover:grayscale-0"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-primary-foreground text-primary">
              <Newspaper className="size-9" strokeWidth={1.75} />
            </div>
          )}
        </div>

        <div
          className={cn(
            "mt-4 flex items-center gap-2 text-[10px] leading-none transition-colors duration-300",
            active ? "text-accent-foreground/70" : "text-primary-foreground/66"
          )}
        >
          <time dateTime={item.date}>{formatDate(item.date)}</time>
          <span>/</span>
          <span>{item.readingTime} min read</span>
        </div>

        <p
          className={cn(
            "mt-5 inline-flex w-fit px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
            active
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          )}
        >
          {item.category}
        </p>

        <h2
          className={cn(
            "mt-4 max-w-[18rem] font-display text-2xl font-medium leading-tight tracking-tight transition-colors duration-300",
            active ? "text-accent-foreground" : "text-primary-foreground"
          )}
        >
          {item.title}
        </h2>

        <p
          className={cn(
            "mt-4 line-clamp-2 max-w-[19rem] text-sm leading-5 transition-colors duration-300",
            active ? "text-accent-foreground/72" : "text-primary-foreground/68"
          )}
        >
          {item.description}
        </p>
      </div>
    </Link>
  );
}

export function BlogNewsHub({
  items,
  basePath,
  emptyHref,
  emptyLinkLabel,
}: BlogNewsHubProps) {
  const [itemsPerPage, setItemsPerPage] = useState(24);
  const [page, setPage] = useState(1);
  const pageSize = itemsPerPage;
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const currentPage = Math.min(page, totalPages);

  const visibleItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [currentPage, items, pageSize]);

  const firstVisible = items.length === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const lastVisible = Math.min(currentPage * pageSize, items.length);

  function changeItems(nextItems: number) {
    setItemsPerPage(nextItems);
    setPage(1);
  }

  if (items.length === 0) {
    return (
      <section className="grid border-x border-b border-border px-6 py-16 text-center md:px-10">
        <div className="mx-auto max-w-lg">
          <span className="mx-auto grid size-12 place-items-center bg-primary text-primary-foreground">
            <Newspaper className="size-5" />
          </span>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground">
            New posts coming soon
          </h2>
          <p className="mt-4 text-sm leading-6 text-muted-foreground">
            We&apos;re preparing fresh updates. Until then, the rest of the resource library is ready.
          </p>
          <Link
            href={emptyHref}
            className="mt-8 inline-flex items-center gap-2 border border-border px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-foreground underline-offset-4 transition-colors hover:bg-accent hover:underline"
          >
            {emptyLinkLabel}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="border-x border-b border-primary bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))]">
      <div className="border-b border-border-dark p-5 md:p-6">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
          Library
        </p>

        <div className="mt-2 flex items-center justify-between gap-3 md:gap-5">
          <p className="text-sm text-primary-foreground/66">
            Showing {firstVisible}-{lastVisible} of {items.length}
          </p>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <label
              htmlFor={`${basePath.slice(1)}-items`}
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/55"
            >
              Items
            </label>
            <Select value={String(itemsPerPage)} onValueChange={(value) => changeItems(Number(value))}>
              <SelectTrigger
                id={`${basePath.slice(1)}-items`}
                className="h-9 w-[72px] border-border-dark bg-primary px-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:border-accent focus:border-accent focus-visible:ring-accent/35 [&_svg]:text-primary-foreground"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                align="end"
                className="min-w-[72px] border-border-dark bg-primary text-primary-foreground"
              >
                {[24, 48, 72, 96].map((count) => (
                  <SelectItem
                    key={count}
                    value={String(count)}
                    className="font-mono text-xs font-semibold text-primary-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    {count}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid border-l border-t border-border-dark md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item) => (
            <HubCard
              key={item.slug}
              item={item}
              basePath={basePath}
            />
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border-dark p-5 md:gap-4 md:p-6">
        <p className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-foreground/55">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex min-w-0 items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="inline-flex h-8 items-center gap-1.5 border border-border-dark px-3 text-xs font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-35 md:h-10 md:gap-2 md:px-4 md:text-sm"
          >
            <ArrowLeft className="size-3.5 md:size-4" />
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex h-8 items-center gap-1.5 border border-border-dark px-3 text-xs font-semibold transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-35 md:h-10 md:gap-2 md:px-4 md:text-sm"
          >
            Next
            <ArrowRight className="size-3.5 md:size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
