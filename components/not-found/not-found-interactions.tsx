"use client";

import { useState, type ComponentType } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, House, LifeBuoy } from "lucide-react";

import { HyperText } from "@/components/ui/hyper-text";
import { PixelTransition } from "@/components/ui/pixel-transition";

type QuickLink = {
  href: string;
  label: string;
  description: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
};

const quickLinks: QuickLink[] = [
  {
    href: "/",
    label: "Homepage",
    description: "Return to the E-Loan landing page.",
    icon: House,
  },
  {
    href: "/loans",
    label: "Loan options",
    description: "Browse loans by amount, purpose, type, or province.",
    icon: BookOpen,
  },
  {
    href: "/contact",
    label: "Contact support",
    description: "Tell us what you were trying to find.",
    icon: LifeBuoy,
  },
];

export function NotFoundActions() {
  const [primaryActive, setPrimaryActive] = useState(false);
  const [exploreTriggerKey, setExploreTriggerKey] = useState(0);
  const triggerExplore = () => setExploreTriggerKey((key) => key + 1);

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <Link
        href="/"
        onMouseEnter={() => setPrimaryActive(true)}
        onMouseLeave={() => setPrimaryActive(false)}
        onFocus={() => setPrimaryActive(true)}
        onBlur={() => setPrimaryActive(false)}
        className="relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden border border-primary px-5 text-sm font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <PixelTransition
          active={primaryActive}
          columns={16}
          rows={4}
          animationStepDuration={0.38}
          exitAnimationStepDuration={0.38}
          pixelColor="hsl(var(--accent))"
          exitPixelColor="hsl(var(--primary))"
          className="absolute inset-0"
          firstContent={<span className="block size-full bg-primary" />}
          secondContent={<span className="block size-full bg-accent" />}
        />
        <ArrowLeft
          className={`relative z-20 size-4 transition-colors ${primaryActive ? "text-accent-foreground" : "text-primary-foreground"}`}
          aria-hidden
        />
        <span
          className={`relative z-20 transition-colors ${primaryActive ? "text-accent-foreground" : "text-primary-foreground"}`}
        >
          Back to homepage
        </span>
      </Link>

      <Link
        href="/loans"
        onMouseEnter={triggerExplore}
        onMouseLeave={triggerExplore}
        onFocus={triggerExplore}
        onBlur={triggerExplore}
        className="inline-flex h-12 items-center justify-center gap-3 border border-primary bg-transparent px-5 text-sm font-bold text-foreground hover:border-primary hover:bg-transparent hover:text-foreground focus-visible:border-primary focus-visible:bg-transparent focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ArrowRight className="size-4" aria-hidden />
        <HyperText
          as="span"
          duration={520}
          animateOnHover={false}
          triggerKey={exploreTriggerKey}
          className="pointer-events-none py-0 font-sans text-sm font-bold leading-none tracking-normal text-foreground"
          characterSet={"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
        >
          Explore loan options
        </HyperText>
      </Link>
    </div>
  );
}

function NotFoundQuickLink({ href, label, description, icon: Icon }: QuickLink) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="group relative overflow-hidden border-b border-border p-6 md:border-b-0 md:border-r md:last:border-r-0"
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

      <span className="relative z-20 block">
        <span
          className={`grid size-10 place-items-center transition-colors ${
            active ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"
          }`}
        >
          <Icon className="size-4" aria-hidden />
        </span>
        <span className="mt-6 flex items-center justify-between gap-4 text-base font-semibold text-foreground">
          {label}
          <ArrowUpRight className="size-4 shrink-0" aria-hidden />
        </span>
        <span
          className={`mt-2 block text-sm leading-6 transition-colors ${
            active ? "text-accent-foreground/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </span>
      </span>
    </Link>
  );
}

export function NotFoundQuickLinks() {
  return (
    <div className="grid md:grid-cols-3">
      {quickLinks.map((link) => (
        <NotFoundQuickLink key={link.href} {...link} />
      ))}
    </div>
  );
}
