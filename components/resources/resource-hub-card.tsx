"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  BookOpen,
  Calculator,
  CreditCard,
  DollarSign,
  FileText,
  HelpCircle,
  MapPin,
  Newspaper,
  PenLine,
  Scale,
  Sparkles,
  Target,
} from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import { cn } from "@/lib/utils";

const icons = {
  book: BookOpen,
  scale: Scale,
  calculator: Calculator,
  help: HelpCircle,
  pen: PenLine,
  newspaper: Newspaper,
  dollar: DollarSign,
  target: Target,
  credit: CreditCard,
  file: FileText,
  map: MapPin,
  sparkles: Sparkles,
};

export type ResourceHubIcon = keyof typeof icons;

type ResourceHubCardProps = {
  href: string;
  icon: ResourceHubIcon;
  title: string;
  label: string;
  desc: string;
  compact?: boolean;
  className?: string;
};

export function ResourceHubCard({
  href,
  icon,
  title,
  label,
  desc,
  compact = false,
  className,
}: ResourceHubCardProps) {
  const [active, setActive] = useState(false);
  const Icon = icons[icon];

  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "group relative overflow-hidden border-b border-border p-6 md:p-8",
        compact ? "min-h-[156px]" : "min-h-[260px]",
        className
      )}
    >
      <PixelTransition
        active={active}
        gridSize={7}
        animationStepDuration={0.38}
        exitAnimationStepDuration={0.28}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--background))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-background" />}
        secondContent={<span className="block size-full bg-accent" />}
      />

      <div className="relative z-20">
        <ArrowUpRight
          className={cn(
            "absolute -right-5 -top-5 size-6 -translate-y-1 translate-x-1 opacity-0 transition-all duration-300",
            active ? "text-accent-foreground" : "text-accent",
            "group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
          )}
        />
        {compact ? (
          <div className="flex items-center gap-3 pr-8">
            <span
              className={cn(
                "grid size-11 shrink-0 place-items-center rounded-md transition-colors duration-300",
                active ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
              )}
            >
              <Icon className="size-5" />
            </span>
            <h2
              className={cn(
                "min-w-0 font-display text-3xl font-semibold tracking-tight transition-colors duration-300",
                active ? "text-accent-foreground" : "text-foreground"
              )}
            >
              <span className="transition-colors duration-300">{title}</span>
            </h2>
          </div>
        ) : (
          <>
            <span
              className={cn(
                "grid size-11 shrink-0 place-items-center rounded-md transition-colors duration-300",
                active ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
              )}
            >
              <Icon className="size-5" />
            </span>
            <p className="mt-12 inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
              {label}
            </p>
            <h2
              className={cn(
                "mt-3 block font-display text-3xl font-semibold tracking-tight transition-colors duration-300",
                active ? "text-accent-foreground" : "text-foreground"
              )}
            >
              <span
                className={cn(
                  "px-1 transition-colors duration-300",
                  active ? "bg-accent text-accent-foreground" : "bg-transparent text-foreground"
                )}
              >
                {title}
              </span>
            </h2>
          </>
        )}
        <p
            className={cn(
              "max-w-sm transition-colors duration-300",
              compact ? "mt-5 line-clamp-2 text-xs leading-5" : "mt-3 text-sm leading-6",
              active ? "text-accent-foreground/72" : "text-muted-foreground"
            )}
          >
          {desc}
        </p>
      </div>
    </Link>
  );
}
