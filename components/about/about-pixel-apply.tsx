"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import { cn } from "@/lib/utils";

type AboutPixelApplyProps = {
  className?: string;
  variant?: "dark" | "light";
  label?: string;
};

export function AboutPixelApply({ className, variant = "dark", label = "Apply now" }: AboutPixelApplyProps) {
  const [active, setActive] = useState(false);
  const isLight = variant === "light";

  return (
    <Link
      href="/apply"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "relative inline-flex items-center overflow-hidden border px-5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        isLight
          ? "h-9 border-primary-foreground bg-primary-foreground text-primary"
          : "h-11 border-primary text-primary-foreground",
        className
      )}
    >
      <PixelTransition
        active={active}
        columns={8}
        rows={3}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor={isLight ? "hsl(var(--accent))" : "hsl(var(--accent))"}
        exitPixelColor={isLight ? "hsl(var(--primary-foreground))" : "hsl(var(--primary))"}
        className="absolute inset-0"
        firstContent={<span className={cn("block size-full", isLight ? "bg-primary-foreground" : "bg-primary")} />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span
        className={cn(
          "relative z-20 transition-colors duration-200",
          active ? "text-accent-foreground" : isLight ? "text-primary" : "text-primary-foreground"
        )}
      >
        {label}
      </span>
      <ArrowUpRight
        className={cn(
          "relative z-20 ml-2 size-4 transition-colors duration-200",
          active ? "text-accent-foreground" : isLight ? "text-primary" : "text-primary-foreground"
        )}
      />
    </Link>
  );
}
