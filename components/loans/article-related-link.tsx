"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, DollarSign } from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";

export function ArticleRelatedLink({ href, label }: { href: string; label: string }) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="group relative grid min-h-20 w-full place-items-center overflow-hidden border border-border px-4 py-4 text-center text-sm font-semibold text-foreground transition-colors sm:w-1/2"
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
      <span className="relative z-20 flex items-center justify-center gap-2">
        <span className="grid size-7 place-items-center bg-primary text-primary-foreground">
          <DollarSign className="size-4" />
        </span>
        <span className={active ? "text-accent-foreground" : "text-foreground"}>
          {label}
        </span>
      </span>
      <ArrowUpRight
        className={`absolute right-3 top-3 z-20 size-4 -translate-y-2 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 ${
          active ? "text-accent-foreground" : "text-accent"
        }`}
      />
    </Link>
  );
}
