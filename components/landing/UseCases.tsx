"use client";

import { useState } from "react";
import { CreditCard, House, GraduationCap, AirplaneTilt, Heartbeat, Wrench, ArrowUpRight } from "@phosphor-icons/react";

const useCases = [
  {
    icon: CreditCard,
    title: "Consolidate debt",
    copy: "Roll high-interest cards into one fixed monthly payment you can actually plan around.",
    stat: "Avg. APR drop",
    statValue: "−9.4%",
    tag: "Most popular",
  },
  {
    icon: House,
    title: "Improve your home",
    copy: "Renovate the kitchen, finish the basement, or finally fix the roof — without touching your equity.",
    stat: "Up to",
    statValue: "$50k",
    tag: "Homeowners",
  },
  {
    icon: Heartbeat,
    title: "Cover medical bills",
    copy: "Spread out unexpected health costs over terms that don't bury you.",
    stat: "Prepay fee",
    statValue: "$0",
    tag: "Flexible",
  },
  {
    icon: Wrench,
    title: "Fix the unexpected",
    copy: "Car broke down, AC died, dog ate the couch — get back to normal fast.",
    stat: "Funded in",
    statValue: "24h",
    tag: "Emergency",
  },
  {
    icon: GraduationCap,
    title: "Invest in yourself",
    copy: "Bootcamps, certifications, gear, or a career pivot. Borrow against your future self.",
    stat: "Soft check",
    statValue: "0 impact",
    tag: "Career",
  },
  {
    icon: AirplaneTilt,
    title: "Big life moments",
    copy: "Weddings, moves, growing the family. Fixed rates so the milestone doesn't follow you forever.",
    stat: "Fixed APR from",
    statValue: "6.99%",
    tag: "Milestones",
  },
];

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];
  const Icon = current.icon;

  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">Real-life uses</p>
            <h2 className="mt-3 font-display text-3xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-4xl lg:text-5xl">
              One loan. <span className="text-accent">Endless reasons.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted-foreground lg:max-w-md lg:justify-self-end">
            Hover or tap a category to see what borrowers are doing with e-loan today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* List */}
          <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {useCases.map((u, i) => {
              const ItemIcon = u.icon;
              const isActive = i === active;
              return (
                <li key={u.title}>
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                      isActive ? "bg-accent-soft" : "hover:bg-secondary/60"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${
                          isActive ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"
                        }`}
                      >
                        <ItemIcon size={20} weight={isActive ? "fill" : "bold"} />
                      </span>
                      <div>
                        <div className="font-display text-base text-foreground">{u.title}</div>
                        <div className="text-xs text-muted-foreground">{u.tag}</div>
                      </div>
                    </div>
                    <ArrowUpRight
                      weight="bold"
                      className={`h-4 w-4 transition-all ${
                        isActive ? "text-accent translate-x-0" : "text-muted-foreground -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/80">
                  {current.tag}
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon size={24} weight="fill" />
                </span>
              </div>
              <h3 className="mt-8 font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                {current.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
                {current.copy}
              </p>
            </div>

            <div className="relative mt-10 flex flex-wrap items-end justify-between gap-6 border-t border-primary-foreground/10 pt-6">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/55">
                  {current.stat}
                </div>
                <div className="mt-1 font-display text-4xl font-bold tracking-tight text-gold">
                  {current.statValue}
                </div>
              </div>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Apply for this
                <ArrowUpRight className="h-4 w-4" weight="bold" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
