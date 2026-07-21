"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HyperText } from "@/components/ui/hyper-text";
import { Marquee } from "@/components/ui/marquee";
import { PixelTransition } from "@/components/ui/pixel-transition";
import Image from "next/image";
import Link from "next/link";

const partnerLogos = [
  { name: "TD Bank", src: "/partners/TD_BANK.svg", scale: 1 },
  { name: "RBC", src: "/partners/RBC.svg", scale: 1.72 },
  { name: "Scotiabank", src: "/partners/Scotiabank.svg", scale: 1 },
  { name: "BMO", src: "/partners/BMO.svg", scale: 1 },
  { name: "CIBC", src: "/partners/CIBC.svg", scale: 1.42 },
  { name: "National Bank", src: "/partners/National_Bank.svg", scale: 1 },
];

const logoSeparators = [1, 2, 3, 4, 5];

const heroStats = [
  ["240k+", "Borrowers funded"],
  ["$1.8B", "Lent to date"],
  ["37s", "Average decision"],
];

const heroPatternTiles = [
  ["3%", "10%", 44, "outline", 0.42],
  ["10%", "7%", 46, "dots", 0.45],
  ["18%", "2%", 46, "accent", 0.72],
  ["23%", "2%", 46, "shade", 0.32],
  ["34%", "8%", 46, "outline", 0.28],
  ["42%", "5%", 46, "dots", 0.34],
  ["53%", "3%", 46, "shade", 0.24],
  ["68%", "7%", 46, "dots", 0.42],
  ["78%", "6%", 46, "outline", 0.36],
  ["86%", "5%", 46, "dots", 0.32],
  ["93%", "9%", 46, "accent", 0.34],
  ["1%", "26%", 44, "dots", 0.42],
  ["8%", "26%", 46, "shade", 0.36],
  ["16%", "31%", 46, "outline", 0.32],
  ["26%", "30%", 46, "dots", 0.22],
  ["72%", "27%", 46, "outline", 0.28],
  ["83%", "25%", 46, "dots", 0.38],
  ["91%", "31%", 46, "shade", 0.25],
  ["4%", "48%", 46, "outline", 0.26],
  ["13%", "50%", 46, "dots", 0.26],
  ["23%", "56%", 46, "accent", 0.2],
  ["69%", "54%", 46, "dots", 0.22],
  ["80%", "49%", 46, "accent", 0.26],
  ["91%", "52%", 46, "outline", 0.28],
  ["8%", "74%", 46, "dots", 0.42],
  ["17%", "82%", 46, "outline", 0.28],
  ["30%", "78%", 46, "dots", 0.28],
  ["40%", "86%", 46, "accent", 0.32],
  ["54%", "80%", 46, "outline", 0.24],
  ["66%", "74%", 46, "shade", 0.24],
  ["76%", "82%", 46, "dots", 0.34],
  ["88%", "77%", 46, "accent", 0.34],
  ["95%", "71%", 46, "dots", 0.42],
] as const;

function HeroMosaicPattern() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        maskImage:
          "radial-gradient(circle at center, transparent 0%, transparent 28%, black 48%, black 100%)",
      }}
    >
      {heroPatternTiles.map(([left, top, size, variant, opacity], index) => {
        const isDots = variant === "dots";
        const isAccent = variant === "accent";
        const isShade = variant === "shade";

        return (
          <span
            key={`${left}-${top}-${index}`}
            data-left={left}
            data-top={top}
            data-size={size}
            className={`hero-pattern-tile absolute border transition-transform duration-500 ease-out ${
              isAccent
                ? "border-accent/30 bg-accent"
                : isShade
                  ? "border-border bg-border"
                  : "border-border bg-background/40"
            }`}
            style={{
              left,
              top,
              width: size,
              height: size,
              "--hero-tile-opacity": opacity,
              animation: `hero-mosaic-flicker ${5200 + (index % 5) * 700}ms steps(1, end) infinite`,
              animationDelay: `${index * 180}ms`,
              backgroundImage: isDots
                ? "radial-gradient(hsl(var(--border) / 0.9) 1px, transparent 1px)"
                : isShade
                  ? "linear-gradient(135deg, hsl(var(--border) / 0.2), hsl(var(--border) / 0.78))"
                  : undefined,
              backgroundSize: isDots ? "7px 7px" : undefined,
            } as React.CSSProperties}
          />
        );
      })}
    </div>
  );
}

function HeroPixelButton() {
  const [active, setActive] = useState(false);

  return (
    <Link
      href="/application-form"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative inline-flex h-11 items-center gap-2 overflow-hidden px-6 text-base font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
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
      <span className={`relative z-30 transition-colors duration-200 ${active ? "text-accent-foreground" : "text-primary-foreground"}`}>
        Apply now
      </span>
      <ArrowRight
        className={`relative z-30 size-4 transition-colors duration-200 ${active ? "text-accent-foreground" : "text-primary-foreground"}`}
      />
    </Link>
  );
}

function HeroSecondaryLink() {
  const [triggerKey, setTriggerKey] = useState(0);
  const trigger = () => setTriggerKey((key) => key + 1);

  return (
    <Link
      href="#how"
      onMouseEnter={trigger}
      onMouseLeave={trigger}
      onFocus={trigger}
      onBlur={trigger}
      className="inline-flex h-11 items-center gap-3 border border-border px-4 text-base font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <ArrowRight className="size-4" />
      <HyperText
        as="span"
        duration={520}
        animateOnHover={false}
        triggerKey={triggerKey}
        className="pointer-events-none py-0 font-sans text-base font-bold leading-none tracking-normal"
        characterSet={"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
      >
        See how it works
      </HyperText>
    </Link>
  );
}

export default function Hero() {
  const patternFrameRef = useRef<number | null>(null);
  const logoDragRef = useRef<{
    pointerId: number;
    startX: number;
    scrollLeft: number;
  } | null>(null);

  const handlePatternPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;

    if (patternFrameRef.current) {
      window.cancelAnimationFrame(patternFrameRef.current);
    }

    patternFrameRef.current = window.requestAnimationFrame(() => {
      const bounds = target.getBoundingClientRect();
      const x = clientX - bounds.left;
      const y = clientY - bounds.top;
      const tiles = target.querySelectorAll<HTMLElement>(".hero-pattern-tile");

      tiles.forEach((tile) => {
        const left = Number.parseFloat(tile.dataset.left ?? "0");
        const top = Number.parseFloat(tile.dataset.top ?? "0");
        const size = Number.parseFloat(tile.dataset.size ?? "0");
        const centerX = (left / 100) * bounds.width + size / 2;
        const centerY = (top / 100) * bounds.height + size / 2;
        const deltaX = centerX - x;
        const deltaY = centerY - y;
        const distance = Math.hypot(deltaX, deltaY);
        const radius = 190;

        if (distance >= radius || distance === 0) {
          tile.style.transform = "translate3d(0, 0, 0)";
          return;
        }

        const strength = Math.pow(1 - distance / radius, 1.35) * 42;
        const rawMoveX = (deltaX / distance) * strength;
        const rawMoveY = (deltaY / distance) * strength;
        const gridStep = 12;
        const snapToGrid = (value: number) => {
          const snapped = Math.round(value / gridStep) * gridStep;

          if (snapped === 0 && Math.abs(value) > 4) {
            return Math.sign(value) * gridStep;
          }

          return snapped;
        };
        const moveX = snapToGrid(rawMoveX);
        const moveY = snapToGrid(rawMoveY);

        tile.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });
  };

  const handlePatternPointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    if (patternFrameRef.current) {
      window.cancelAnimationFrame(patternFrameRef.current);
      patternFrameRef.current = null;
    }

    event.currentTarget
      .querySelectorAll<HTMLElement>(".hero-pattern-tile")
      .forEach((tile) => {
        tile.style.transform = "translate3d(0, 0, 0)";
      });
  };

  const handleLogoPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || event.button !== 0) return;

    logoDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      scrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleLogoPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = logoDragRef.current;

    if (!drag || drag.pointerId !== event.pointerId) return;

    event.preventDefault();
    event.currentTarget.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
  };

  const handleLogoPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    if (logoDragRef.current?.pointerId !== event.pointerId) return;

    logoDragRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto w-full max-w-[1000px] border-x border-border">
        <div
          className="relative flex min-h-[540px] items-center justify-center overflow-hidden px-6 pb-28 pt-16 text-center sm:py-16 md:px-12 lg:px-16 lg:py-20"
          onPointerMove={handlePatternPointerMove}
          onPointerLeave={handlePatternPointerLeave}
        >
          <HeroMosaicPattern />
          <div aria-hidden className="absolute left-8 top-8 h-16 w-16 border-l border-t border-primary" />
          <div aria-hidden className="absolute right-8 top-8 h-16 w-16 border-r border-t border-primary" />
          <div aria-hidden className="absolute bottom-8 left-8 h-16 w-16 border-b border-l border-primary" />
          <div aria-hidden className="absolute bottom-8 right-8 h-16 w-16 border-b border-r border-primary" />
          <div aria-hidden className="absolute left-1/2 top-0 h-8 w-px bg-border" />
          <div aria-hidden className="absolute bottom-0 left-1/2 h-8 w-px bg-border" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto inline-flex items-center gap-2 border border-border bg-card/90 px-2 py-1 text-xs font-semibold text-muted-foreground shadow-soft backdrop-blur">
              <span className="bg-primary px-2 py-0.5 text-[10px] font-black uppercase tracking-normal text-primary-foreground">
                New
              </span>
              <span className="pr-2">E-Loan approvals now live across Canada</span>
            </div>

            <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-[1] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
              Loans, made
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 inline-block px-4 py-1 text-foreground">refreshingly</span>
                <span aria-hidden className="absolute -inset-x-2 inset-y-1 z-0 bg-accent" />
              </span>{" "}
              simple.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-balance">
              Up to <span className="font-semibold text-foreground">$50,000</span> with rates you can
              read in one breath, decisions in seconds, and zero paperwork.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <HeroPixelButton />
              <HeroSecondaryLink />
            </div>

            <div className="mx-auto mt-12 grid w-full grid-cols-3 border-y border-border text-left sm:grid-cols-6">
              {heroStats.map(([value, label], index) => (
                <div
                  key={label}
                  className={`relative min-h-[66px] px-2 py-3 sm:col-span-2 sm:min-h-[104px] sm:px-6 sm:py-6 ${
                    index < heroStats.length - 1 ? "border-r border-border" : ""
                  }`}
                >
                  <div className="font-display text-lg font-medium leading-none tracking-tight text-foreground sm:text-3xl md:text-4xl">
                    {value}
                  </div>
                  <div className="mt-1.5 text-[9px] font-medium leading-tight text-muted-foreground sm:mt-3 sm:text-sm">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Marquee
          aria-label="Partner lenders. Swipe or drag to see all logos."
          className="cursor-grab touch-pan-x select-none overflow-x-auto border-y border-border p-0 [--duration:24s] [--gap:0px] active:cursor-grabbing sm:hidden [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          onPointerDown={handleLogoPointerDown}
          onPointerMove={handleLogoPointerMove}
          onPointerUp={handleLogoPointerEnd}
          onPointerCancel={handleLogoPointerEnd}
          onDragStart={(event) => event.preventDefault()}
          pauseOnHover
          repeat={4}
          role="region"
          tabIndex={0}
        >
          {partnerLogos.map((partner) => (
            <div
              key={partner.name}
              className="grid h-[76px] w-[116px] shrink-0 place-items-center border-r border-border px-4"
            >
              <span className="relative block h-10 w-24">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="96px"
                  draggable={false}
                  className="pointer-events-none object-contain opacity-55 grayscale [transform:scale(var(--partner-scale))]"
                  style={{ "--partner-scale": partner.scale } as React.CSSProperties}
                />
              </span>
            </div>
          ))}
        </Marquee>

        <div className="relative hidden border-y border-border sm:grid sm:grid-cols-3 lg:grid-cols-6">
          {logoSeparators.map((separator) => (
            <span
              key={separator}
              aria-hidden
              className="pointer-events-none absolute inset-y-0 hidden w-px bg-border lg:block"
              style={{ left: `${(separator / partnerLogos.length) * 100}%` }}
            />
          ))}
          {partnerLogos.map((partner, index) => (
            <div
              key={partner.name}
              className={`grid h-[72px] place-items-center px-5 ${
                index < partnerLogos.length - 1 ? "border-b border-border sm:border-r lg:border-b-0 lg:border-r-0" : ""
              }`}
            >
              <span className="relative block h-9 w-28">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  sizes="112px"
                  className="object-contain opacity-45 grayscale transition-all duration-200 [transform:scale(var(--partner-scale))] hover:opacity-95 hover:contrast-125"
                  style={{ "--partner-scale": partner.scale } as React.CSSProperties}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
