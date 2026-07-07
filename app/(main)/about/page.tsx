import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, HeartHandshake, Scale, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About E-Loan — Lending rebuilt around the borrower",
  description:
    "E-Loan is a Canadian lender on a mission to make borrowing fast, transparent, and fair. Learn who we are, what we stand for, and how we got here.",
  alternates: { canonical: `${siteUrl}/about` },
  openGraph: {
    title: "About E-Loan — Lending rebuilt around the borrower",
    description:
      "A Canadian lender on a mission to make borrowing fast, transparent, and fair.",
    url: `${siteUrl}/about`,
    siteName: "E-Loan",
    type: "website",
  },
};

const stats = [
  { v: "240k+", l: "Borrowers funded" },
  { v: "$1.8B", l: "Lent to date" },
  { v: "37s", l: "Avg. decision" },
  { v: "4.9★", l: "Trustpilot rating" },
];

const principles = [
  {
    icon: Eye,
    title: "Transparency by default",
    desc: "Every rate, fee, and repayment date is on the table before you sign. No fine print, no surprises.",
  },
  {
    icon: Zap,
    title: "Speed that respects you",
    desc: "Smart underwriting means most people get a decision in under a minute — because waiting is stressful.",
  },
  {
    icon: Scale,
    title: "Fairness over profit",
    desc: "We publish our rate ranges and default rates. If a loan isn't right for you, we'll say so.",
  },
  {
    icon: HeartHandshake,
    title: "Real human support",
    desc: "Advisors, not bots. When life throws a curveball, a person picks up and works with you.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-16 md:pt-20 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-24 h-[320px] w-[320px] rounded-full bg-gold/12 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About E-Loan
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.03] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Lending, rebuilt around <span className="text-accent">the borrower.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-balance sm:text-lg">
              We started E-Loan because borrowing shouldn&apos;t feel like a test you might
              fail. Fast decisions, honest pricing, and a team that treats you like a person —
              that&apos;s the whole idea.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild>
                <Link href="/#apply">
                  Apply now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="soft" size="lg" asChild>
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / story */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our mission</p>
              <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
                Credit should be a tool, not a trap.
              </h2>
            </div>
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground lg:text-base">
              <p>
                For too long, borrowing meant deciphering fine print, waiting days for an
                answer, and hoping the number at the end wasn&apos;t a shock. We thought that
                was backwards.
              </p>
              <p>
                So we built a lender around a simple promise:{" "}
                <span className="font-semibold text-foreground">
                  you should understand exactly what you&apos;re signing, and get an answer in
                  seconds.
                </span>{" "}
                Every product decision we make runs through that filter.
              </p>
              <p>
                Today we&apos;re proud to serve borrowers across Canada — but we measure success
                less by how much we lend and more by how many people feel in control of their
                money afterward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-primary py-14 text-primary-foreground lg:py-16">
        <div className="container mx-auto px-4">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-y-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <dt className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{s.v}</dt>
                <dd className="mt-1 text-xs text-primary-foreground/60">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">What we stand for</p>
            <h2 className="mt-3 font-display text-2xl leading-tight tracking-tight text-balance text-foreground sm:text-3xl lg:text-4xl">
              Four principles we don&apos;t bend on.
            </h2>
          </div>

          <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
            {principles.map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-cta px-6 py-12 text-center text-primary-foreground sm:px-10 lg:py-14">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <h2 className="relative font-display text-2xl leading-tight tracking-tight text-balance sm:text-3xl lg:text-4xl">
              Ready to borrow with <span className="text-accent">confidence?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-sm text-primary-foreground/70">
              Check your rate in seconds. It&apos;s a soft credit check — zero impact on your score.
            </p>
            <div className="relative mt-7 flex justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link href="/#apply">
                  Apply now
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
