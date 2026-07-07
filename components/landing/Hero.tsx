import { ArrowRight, Check, Lock, ShieldCheck, Sparkles, Star, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-16 pb-14 lg:pt-24 lg:pb-20">
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
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-12">
          {/* Left column: copy + CTAs */}
          <div className="max-w-2xl text-center lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur lg:mx-0">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              E-Loan approvals now live across Canada
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

          {/* Right column: animated pre-approval visual (decorative) */}
          <div aria-hidden className="relative mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end">
            {/* rotating ambient rings */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-accent/15 hero-spin-slow" />
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10" />

            {/* Offer card */}
            <div className="hero-float hero-rise relative rounded-[1.75rem] border border-border bg-card/90 p-6 shadow-card backdrop-blur-sm">
              {/* card header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-cta">
                    <Sparkles className="h-4 w-4 text-accent" />
                  </span>
                  <div className="leading-tight">
                    <div className="font-display text-sm font-bold text-foreground">Your pre-approval</div>
                    <div className="text-[10px] text-muted-foreground">E-Loan · updated live</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-1 text-[10px] font-semibold text-accent">
                  <Lock className="h-3 w-3" />
                  Encrypted
                </span>
              </div>

              {/* loan amount + slider */}
              <div className="mt-6">
                <div className="text-xs font-medium text-muted-foreground">Loan amount</div>
                <div className="mt-1 font-display text-4xl font-bold tracking-tight text-foreground">$25,000</div>
                <div className="relative mt-3 h-2 rounded-full bg-secondary">
                  <div className="hero-grow h-full w-[68%] rounded-full bg-gradient-emerald" />
                  <span className="absolute top-1/2 left-[68%] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent bg-card shadow-soft" />
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>

              {/* rate + term tiles */}
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">APR from</div>
                  <div className="mt-0.5 font-display text-lg font-bold text-foreground">6.99%</div>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Term</div>
                  <div className="mt-0.5 font-display text-lg font-bold text-foreground">48 mo</div>
                </div>
              </div>

              {/* monthly estimate */}
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-secondary/60 px-4 py-3">
                <span className="text-xs font-medium text-muted-foreground">Est. monthly</span>
                <span className="font-display text-lg font-bold text-foreground">
                  $599<span className="text-xs font-medium text-muted-foreground">/mo</span>
                </span>
              </div>

              {/* approved bar with shimmer sweep */}
              <div className="relative mt-5 overflow-hidden rounded-xl bg-gradient-emerald px-4 py-3 text-center">
                <span className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-accent-foreground">
                  <span className="hero-pop grid h-5 w-5 place-items-center rounded-full bg-white/25">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  Approved in 37 seconds
                </span>
                <span className="hero-shimmer pointer-events-none absolute inset-y-0 left-0 z-0 w-1/3 bg-white/25 blur-md" />
              </div>
            </div>

            {/* floating chips */}
            <div className="hero-float-slow absolute -left-3 top-10 rounded-2xl border border-border bg-card px-3 py-2 shadow-card sm:-left-5">
              <div className="flex items-center gap-1.5">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                <span className="text-xs font-bold text-foreground">4.9</span>
                <span className="text-[10px] text-muted-foreground">Trustpilot</span>
              </div>
            </div>

            <div
              className="hero-float absolute -right-3 top-1/3 rounded-2xl border border-border bg-card px-3 py-2 shadow-card sm:-right-6"
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-accent" />
                No credit impact
              </div>
            </div>

            <div
              className="hero-float-slow absolute -bottom-4 left-10 rounded-2xl border border-border bg-card px-3 py-2 shadow-card"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-1.5 text-xs font-semibold text-foreground">
                <Wallet className="h-3.5 w-3.5 text-accent" />
                Funds in 24h
              </div>
            </div>
          </div>
        </div>

        {/* Stat ticker — full width below the split */}
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
    </section>
  );
}
