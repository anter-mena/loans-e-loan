"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import { cn } from "@/lib/utils";

type AboutPixelApplyProps = {
  className?: string;
};

export function AboutPixelApply({ className }: AboutPixelApplyProps) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href="/apply"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "relative inline-flex h-11 items-center overflow-hidden border border-primary px-5 text-sm font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
    >
      <PixelTransition
        active={active}
        columns={8}
        rows={3}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span
        className={cn(
          "relative z-20 transition-colors duration-200",
          active ? "text-accent-foreground" : "text-primary-foreground"
        )}
      >
        Apply now
      </span>
      <ArrowUpRight
        className={cn(
          "relative z-20 ml-2 size-4 transition-colors duration-200",
          active ? "text-accent-foreground" : "text-primary-foreground"
        )}
      />
    </Link>
  );
}
