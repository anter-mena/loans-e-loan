"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ShieldCheck } from "lucide-react";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { PixelTransition } from "@/components/ui/pixel-transition";

const checklist = ["No surprise fees", "Clear monthly estimate", "Human help available"];

function PixelCheckBox({ active }: { active: boolean }) {
  return (
    <span className="relative grid size-5 place-items-center overflow-hidden border border-accent text-accent">
      <PixelTransition
        active={active}
        gridSize={4}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <Check
        className={`relative z-20 size-3 transition-colors duration-200 ${
          active ? "text-accent-foreground" : "text-accent"
        }`}
      />
    </span>
  );
}

export function AboutOfferPreview() {
  const [active, setActive] = useState(false);

  return (
    <aside
      className="relative overflow-hidden border-t border-primary bg-primary text-primary-foreground lg:border-l lg:border-t-0"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <FlickeringGrid
        aria-hidden
        className="absolute inset-0"
        squareSize={3}
        gridGap={2}
        color="hsl(var(--primary-foreground))"
        maxOpacity={0.18}
        flickerChance={0.08}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/90 to-primary" />
      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between border-b border-primary pb-5">
          <Image src="/logo-icon-white.svg" alt="" width={34} height={34} />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
            Live offer preview
          </span>
        </div>

        <div className="my-10 border border-primary bg-primary-foreground/[0.04] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-primary-foreground/55">Pre-approved range</p>
              <p className="mt-2 font-display text-5xl font-semibold tracking-tight">
                $25k
              </p>
            </div>
            <span className="grid size-10 place-items-center bg-accent text-accent-foreground">
              <ShieldCheck className="size-5" />
            </span>
          </div>
          <div className="mt-6 h-2 bg-primary-foreground/12">
            <div className="h-full w-[74%] bg-accent" />
          </div>
          <div className="mt-5 grid grid-cols-2 border border-primary">
            <div className="border-r border-primary p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/45">
                Decision
              </p>
              <p className="mt-1 text-sm font-semibold">37 seconds</p>
            </div>
            <div className="p-3">
              <p className="text-[10px] uppercase tracking-[0.18em] text-primary-foreground/45">
                Credit check
              </p>
              <p className="mt-1 text-sm font-semibold">Soft only</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {checklist.map((item) => (
            <div key={item} className="flex items-center gap-3 text-sm text-primary-foreground/80">
              <PixelCheckBox active={active} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
