"use client";

import { useRef, useState, type RefObject } from "react";
import { ArrowUpRight, Banknote, ClipboardList, SlidersHorizontal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { PixelTransition } from "@/components/ui/pixel-transition";
import SectionTitleBand from "./SectionTitleBand";

const steps = [
  {
    icon: ClipboardList,
    n: "01",
    title: "Quick Application",
    desc: "2-minute form. No paperwork, no hard check.",
  },
  {
    icon: SlidersHorizontal,
    n: "02",
    title: "Compare Offers",
    desc: "Matched with top Canadian lenders instantly.",
  },
  {
    icon: Banknote,
    n: "03",
    title: "Get Your Funds",
    desc: "Funds deposited to your bank in 24h.",
  },
];

function ProcessIcon({
  active,
  icon: Icon,
  iconRef,
}: {
  active: boolean;
  icon: LucideIcon;
  iconRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={iconRef}
      className={`relative z-10 grid size-16 place-items-center border transition-colors duration-200 ${
        active ? "border-accent/25 bg-accent" : "border-primary bg-primary"
      }`}
    >
      <div
        className={`relative grid size-12 place-items-center overflow-hidden border transition-colors duration-200 ${
          active ? "border-accent" : "border-primary"
        }`}
      >
        <PixelTransition
          active={active}
          gridSize={4}
          animationStepDuration={0.34}
          exitAnimationStepDuration={0.34}
          pixelColor="hsl(var(--accent))"
          exitPixelColor="hsl(var(--primary))"
          className="absolute inset-0"
          firstContent={<span className="block size-full bg-primary" />}
          secondContent={<span className="block size-full bg-accent" />}
        />
        <Icon
          className={`relative z-20 size-5 transition-colors duration-200 ${
            active ? "text-accent-foreground" : "text-accent"
          }`}
          strokeWidth={1.9}
        />
      </div>
    </div>
  );
}

function ProcessStepBadge({
  active,
  label,
}: {
  active: boolean;
  label: string;
}) {
  return (
    <span className="relative mb-3 inline-flex overflow-hidden px-2 py-1">
      <PixelTransition
        active={active}
        columns={7}
        rows={2}
        animationStepDuration={0.26}
        exitAnimationStepDuration={0.26}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--background))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-transparent" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span className="relative z-20 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
        {label}
      </span>
    </span>
  );
}

function ProcessButton() {
  const [active, setActive] = useState(false);

  return (
    <Link
      href="/application-form"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative inline-flex h-12 items-center gap-3 overflow-hidden border border-primary pl-6 pr-2 text-sm font-bold text-primary-foreground shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <PixelTransition
        active={active}
        columns={18}
        rows={4}
        animationStepDuration={0.34}
        exitAnimationStepDuration={0.34}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span
        className={`relative z-20 transition-colors duration-200 ${
          active ? "text-accent-foreground" : "text-primary-foreground"
        }`}
      >
        Start My Application
      </span>
      <span
        className={`relative z-20 grid size-9 place-items-center transition-colors duration-200 ${
          active
            ? "bg-primary text-primary-foreground"
            : "bg-primary-foreground text-primary"
        }`}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const railRef = useRef<HTMLOListElement>(null);
  const firstStepRef = useRef<HTMLDivElement>(null);
  const secondStepRef = useRef<HTMLDivElement>(null);
  const thirdStepRef = useRef<HTMLDivElement>(null);
  const stepRefs = [firstStepRef, secondStepRef, thirdStepRef];

  return (
    <section id="how" className="border-x border-b border-border bg-background text-foreground">
      <SectionTitleBand label="Simple Process" className="border-b border-border" />

      <div className="px-6 py-16 md:px-10 lg:py-20">
        <ol ref={railRef} className="relative mx-auto grid max-w-[900px] gap-12 md:grid-cols-3 md:gap-8">
          <AnimatedBeam
            className="z-0 hidden md:block"
            containerRef={railRef}
            fromRef={firstStepRef}
            toRef={secondStepRef}
            pathWidth={1}
            pathOpacity={0.34}
            duration={4.2}
            repeatDelay={0.7}
          />
          <AnimatedBeam
            className="z-0 hidden md:block"
            containerRef={railRef}
            fromRef={secondStepRef}
            toRef={thirdStepRef}
            pathWidth={1}
            pathOpacity={0.34}
            duration={4.2}
            delay={0.9}
            repeatDelay={0.7}
          />
          {steps.map((step, index) => (
            <li
              key={step.n}
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
              className="group relative flex flex-col items-center text-center"
            >
              <ProcessStepBadge active={activeStep === index} label={`Step ${step.n}`} />

              <ProcessIcon
                active={activeStep === index}
                icon={step.icon}
                iconRef={stepRefs[index]}
              />

              <h3 className="mt-6 font-display text-xl font-semibold leading-tight tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 min-h-10 max-w-[190px] text-xs leading-5 text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-center">
          <ProcessButton />
          <p className="mt-4 text-xs text-muted-foreground">
            No hard credit check - Free to use - Results in seconds
          </p>
        </div>
      </div>
    </section>
  );
}
