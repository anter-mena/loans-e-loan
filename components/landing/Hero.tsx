import { ArrowRight, Check, Lock, Star, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-hero pt-24 pb-14 lg:pt-24 lg:pb-20">
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
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-soft backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            LoanHero approvals now live in 12 states
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

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted-foreground text-balance sm:text-lg">
            Up to <span className="font-semibold text-foreground">$50,000</span> with rates you can
            read in one breath, decisions in seconds, and zero paperwork.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
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

        {/* Visual showcase */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="grid items-end gap-6 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:translate-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Your rate</span>
                <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                  Locked
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-tight text-foreground">7.4</span>
                <span className="font-display text-xl text-muted-foreground">%</span>
                <span className="ml-1 text-xs text-muted-foreground">APR</span>
              </div>
              <div className="mt-1 text-xs text-muted-foreground">Fixed for 36 months</div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[34%] rounded-full bg-gradient-emerald" />
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative rounded-2xl bg-gradient-cta p-6 text-primary-foreground shadow-cta">
              <div aria-hidden className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-accent/30 blur-2xl" />
              <div className="relative flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground/60">
                <span className="grid h-4 w-4 place-items-center rounded-full bg-accent">
                  <Check className="h-2.5 w-2.5 text-accent-foreground" strokeWidth={3} />
                </span>
                Approved · 37 sec
              </div>
              <div className="relative mt-4 font-display text-4xl font-bold tracking-tight">$24,000</div>
              <div className="relative mt-1 text-xs text-primary-foreground/60">Funds arrive tomorrow</div>
              <div className="relative mt-5 flex items-center justify-between border-t border-primary-foreground/10 pt-4 text-xs">
                <div>
                  <div className="text-primary-foreground/50">Monthly</div>
                  <div className="font-semibold">$748.20</div>
                </div>
                <div>
                  <div className="text-primary-foreground/50">Total interest</div>
                  <div className="font-semibold">$2,935</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card sm:translate-y-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-2xl font-bold tracking-tight text-foreground">4.9</span>
                <span className="text-xs text-muted-foreground">average rating</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-foreground">
                &ldquo;Honestly the easiest financial thing I&apos;ve done all year.&rdquo;
              </p>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-accent" />
                Verified · Trustpilot
              </div>
            </div>
          </div>
        </div>

        {/* Stat ticker */}
        <dl className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
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
