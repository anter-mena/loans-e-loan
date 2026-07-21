"use client";

import { useState } from "react";
import { ArrowRight, BadgeCheck, Eye, HeartHandshake, Sparkles, Wallet, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PixelTransition } from "@/components/ui/pixel-transition";
import SectionTitleBand from "./SectionTitleBand";

const features = [
  {
    icon: Eye,
    title: "Transparent offers",
    desc: "See your full repayment plan before you sign. Every fee, every cent.",
  },
  {
    icon: Zap,
    title: "Fast decisions",
    desc: "Smart underwriting reviews your application instantly, with most decisions in under a minute.",
  },
  {
    icon: HeartHandshake,
    title: "Human support",
    desc: "Real advisors are available when life changes or you need help with your plan.",
  },
  {
    icon: BadgeCheck,
    title: "Soft credit check",
    desc: "Check your rate without affecting your score, so there is zero risk to look around.",
  },
  {
    icon: Wallet,
    title: "Funds in 24 hours",
    desc: "Once approved, money lands in your account the next business day, often sooner.",
  },
  {
    icon: Sparkles,
    title: "Better habits rewarded",
    desc: "Pay on time and unlock stronger future offers. Borrowing should help you grow.",
  },
];

function PixelIcon({ active, icon: Icon }: { active: boolean; icon: LucideIcon }) {
  return (
    <span className="relative grid size-10 place-items-center rounded-md shadow-glow">
      <PixelTransition
        active={active}
        gridSize={7}
        animationStepDuration={0.7}
        exitAnimationStepDuration={0.7}
        pixelColor="hsl(var(--primary-foreground))"
        exitPixelColor="hsl(var(--accent))"
        className="absolute inset-0 rounded-md"
        firstContent={<span className="block size-full bg-accent" />}
        secondContent={<span className="block size-full bg-primary-foreground" />}
      />
      <Icon
        className="relative z-20 size-5 text-accent-foreground"
        strokeWidth={2.2}
      />
    </span>
  );
}

export default function Benefits() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const featureCards = features.map(({ icon: Icon, title, desc }, index) => (
      <article
        key={title}
        onMouseEnter={() => setActiveFeature(index)}
        onMouseLeave={() => setActiveFeature(null)}
        onFocus={() => setActiveFeature(index)}
        onBlur={() => setActiveFeature(null)}
        className={`group/feature grid min-h-[190px] place-items-center border-b border-border-dark px-3 py-5 text-center transition-colors hover:bg-primary-foreground/[0.045] sm:min-h-[216px] sm:px-8 sm:py-8 ${
          index % 2 === 0 ? "border-r" : "border-r-0"
        } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
      >
        <div className="flex max-w-[220px] flex-col items-center sm:max-w-[270px]">
          <PixelIcon active={activeFeature === index} icon={Icon} />
          <h3 className="mt-3 font-display text-lg font-medium leading-tight tracking-tight text-primary-foreground sm:text-xl">
            {title}
          </h3>
          <p className="mt-2 min-h-8 text-[11px] leading-[1.35] text-primary-foreground/62">
            {desc}
          </p>
          <a
            href="/application-form"
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
          >
            Learn more
            <ArrowRight className="size-3.5" />
          </a>
        </div>
      </article>
    ));

  return (
    <section id="benefits" className="border-x bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))]">
      <SectionTitleBand label="Features" tone="dark" className="border-b border-border-dark" />

      <div className="grid grid-cols-2 lg:grid-cols-3">
        {featureCards}
      </div>
    </section>
  );
}
