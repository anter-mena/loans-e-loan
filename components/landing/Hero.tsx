import { ArrowRight, Check, Lock, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-36 pb-14 lg:pt-40 lg:pb-20">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-32 h-[360px] w-[360px] rounded-full bg-gold/15 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-[-80px] h-[300px] w-[300px] rounded-full bg-accent/10 blur-3xl" />

      {/* subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent)",
        }}
      />

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left column: all content for now */}
          <div>
            <div className="max-w-2xl text-center lg:text-left">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur lg:mx-0">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <Sparkles className="h-3.5 w-3.5 text-gold" />
                E-Loan approvals now live in 12 provinces
              </div>

              <h1 className="mt-6 font-display text-4xl leading-[1] tracking-tight text-balance text-foreground sm:text-5xl lg:text-[72px]">
                Loans, made
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 text-accent">refreshingly</span>
                  <span aria-hidden className="absolute inset-x-0 bottom-2 z-0 h-3 bg-gold/40" />
                </span>{" "}
                simple.
              </h1>

              <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-balance sm:text-lg lg:mx-0">
                Up to <span className="font-semibold text-foreground">$50,000</span> with rates you can
                read in one breath, decisions in seconds, and zero paperwork.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button variant="hero" size="lg" asChild>
                  <Link href="#apply">
                    Apply now
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="soft" size="lg" asChild>
                  <Link href="#how">See how it works</Link>
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground lg:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <Lock className="h-3.5 w-3.5 text-accent" />
                  Soft credit check
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                  No impact on your score
                </span>
                <span aria-hidden className="hidden h-3 w-px bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-accent" />
                  Decision in 37 seconds
                </span>
              </div>
            </div>

            {/* Stat ticker */}
            <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
              {[
                { v: "240k+", l: "Borrowers funded" },
                { v: "$1.8B", l: "Lent to date" },
                { v: "37s", l: "Avg. decision" },
                { v: "4.9★", l: "Trustpilot rating" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <dt className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{s.v}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right column: reserved for upcoming content */}
          <div />
        </div>
      </div>
    </section>
  );
}
