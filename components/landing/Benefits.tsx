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

  return (
    <section id="benefits" className="border-x bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))]">
      <SectionTitleBand label="Features" tone="dark" className="border-b border-border-dark" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }, index) => (
          <article
            key={title}
            onMouseEnter={() => setActiveFeature(index)}
            onMouseLeave={() => setActiveFeature(null)}
            onFocus={() => setActiveFeature(index)}
            onBlur={() => setActiveFeature(null)}
            className={`group/feature grid min-h-[216px] place-items-center border-b border-border-dark px-8 py-8 text-center transition-colors hover:bg-primary-foreground/[0.045] ${
              index % 2 === 0 ? "sm:border-r" : ""
            } ${index % 3 !== 2 ? "lg:border-r" : "lg:border-r-0"}`}
          >
            <div className="flex max-w-[270px] flex-col items-center">
              <PixelIcon active={activeFeature === index} icon={Icon} />
              <h3 className="mt-3 font-display text-xl font-medium leading-tight tracking-tight text-primary-foreground">
                {title}
              </h3>
              <p className="mt-2 min-h-8 text-[11px] leading-[1.35] text-primary-foreground/62">
                {desc}
              </p>
              <a
                href="/apply"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent underline-offset-4 transition-colors hover:text-primary-foreground hover:underline"
              >
                Learn more
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
