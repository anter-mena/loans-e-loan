"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import { cn } from "@/lib/utils";

export type ArticleTocItem = { label: string; href: `#${string}` };

export function ArticleToc({ items }: { items: ArticleTocItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="grid sm:grid-cols-2">
      {items.map((item, index) => {
        const active = activeIndex === index;

        return (
          <Link
            key={item.href}
            href={item.href}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onFocus={() => setActiveIndex(index)}
            onBlur={() => setActiveIndex(null)}
            className="group relative flex min-h-16 items-center justify-between gap-4 overflow-hidden border-b border-border px-5 py-4 text-sm font-semibold text-foreground transition-colors sm:border-r sm:even:border-r-0"
          >
            <PixelTransition
              active={active}
              gridSize={7}
              animationStepDuration={0.38}
              exitAnimationStepDuration={0.28}
              pixelColor="hsl(var(--accent))"
              exitPixelColor="hsl(var(--background))"
              squarePixels
              pixelSize={10}
              className="absolute inset-0"
              firstContent={<span className="block size-full bg-background" />}
              secondContent={<span className="block size-full bg-accent" />}
            />
            <span className="relative z-20 flex items-center gap-3">
              <span
                className={cn(
                  "font-mono text-[10px] uppercase tracking-[0.18em] transition-colors",
                  active ? "text-accent-foreground/70" : "text-muted-foreground"
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className={cn("transition-colors", active ? "text-accent-foreground" : "text-foreground")}>
                {item.label}
              </span>
            </span>
            <ArrowUpRight
              className={cn(
                "absolute right-3 top-3 z-20 size-4 -translate-y-2 translate-x-2 opacity-0 transition-all duration-300",
                active ? "text-accent-foreground" : "text-accent",
                "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              )}
            />
          </Link>
        );
      })}
    </div>
  );
}
