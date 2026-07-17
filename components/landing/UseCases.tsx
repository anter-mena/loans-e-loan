"use client";

import { useState } from "react";
import { AirplaneTilt, ArrowUpRight, CreditCard, GraduationCap, Heartbeat, House, Wrench } from "@phosphor-icons/react";
import { PixelTransition } from "@/components/ui/pixel-transition";
import SectionTitleBand from "./SectionTitleBand";

const useCases = [
  {
    icon: CreditCard,
    title: "Consolidate debt",
    copy: "Combine cards, lines of credit, or bills into one fixed payment with a clearer payoff path.",
    stat: "Best for",
    statValue: "1 payment",
    tag: "Debt reset",
    cards: [
      ["Why it helps", "One due date can make cash flow easier to track than several balances."],
      ["Common uses", "Cards, store financing, lines of credit, or older installment bills."],
      ["Watch for", "Compare total cost, not just monthly payment, before you accept."],
    ],
  },
  {
    icon: House,
    title: "Improve your home",
    copy: "Handle repairs, upgrades, or efficiency work without opening a home-equity product.",
    stat: "Useful for",
    statValue: "Repairs",
    tag: "Homeowners",
    cards: [
      ["Why it helps", "A fixed loan can suit projects where the cost is known upfront."],
      ["Common uses", "Roof repairs, appliances, accessibility updates, energy upgrades."],
      ["Watch for", "Large renovations may still fit better with secured home financing."],
    ],
  },
  {
    icon: Heartbeat,
    title: "Cover medical bills",
    copy: "Manage dental, prescriptions, vision, therapy, or other out-of-pocket care costs.",
    stat: "Covers",
    statValue: "Care gaps",
    tag: "Health costs",
    cards: [
      ["Why it helps", "Some costs arrive before insurance reimbursements or outside coverage."],
      ["Common uses", "Dental, prescriptions, vision, therapy, mobility aids, diagnostics."],
      ["Watch for", "Ask providers about payment plans before choosing borrowed money."],
    ],
  },
  {
    icon: Wrench,
    title: "Fix the unexpected",
    copy: "Cover car repairs, urgent home fixes, job gaps, or bills that arrive before payday.",
    stat: "Built for",
    statValue: "Surprises",
    tag: "Emergency",
    cards: [
      ["Why it helps", "Unexpected expenses often do not wait for the next pay cycle."],
      ["Common uses", "Car repair, urgent travel, appliance failure, temporary income gaps."],
      ["Watch for", "Use only what solves the immediate problem, not the full approved amount."],
    ],
  },
  {
    icon: GraduationCap,
    title: "Invest in yourself",
    copy: "Pay for courses, certifications, tools, equipment, or a career move on a fixed plan.",
    stat: "Supports",
    statValue: "Upskilling",
    tag: "Career",
    cards: [
      ["Why it helps", "Career costs are easier to evaluate when repayment is fixed."],
      ["Common uses", "Courses, exams, bootcamps, tools, laptop, work equipment."],
      ["Watch for", "Check grants, employer support, and student aid before borrowing."],
    ],
  },
  {
    icon: AirplaneTilt,
    title: "Big life moments",
    copy: "Plan weddings, moving costs, family milestones, or travel without card-rate uncertainty.",
    stat: "Plan with",
    statValue: "Fixed cost",
    tag: "Milestones",
    cards: [
      ["Why it helps", "Fixed payments can keep one-time events from lingering on cards."],
      ["Common uses", "Moves, weddings, family travel, new-baby expenses, deposits."],
      ["Watch for", "Keep the budget realistic so the event does not outlast the plan."],
    ],
  },
];

function UseCaseApplyButton() {
  const [active, setActive] = useState(false);

  return (
    <a
      href="/apply"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative inline-flex h-10 items-center gap-2 overflow-hidden px-5 text-sm font-bold text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <PixelTransition
        active={active}
        columns={12}
        rows={4}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor="hsl(var(--primary-foreground))"
        exitPixelColor="hsl(var(--accent))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-accent" />}
        secondContent={<span className="block size-full bg-primary-foreground" />}
      />
      <span
        className={`relative z-20 transition-colors duration-200 ${
          active ? "text-primary" : "text-accent-foreground"
        }`}
      >
        Apply for this
      </span>
      <ArrowUpRight
        className={`relative z-20 size-4 transition-colors duration-200 ${
          active ? "text-primary" : "text-accent-foreground"
        }`}
        weight="bold"
      />
    </a>
  );
}

function UseCaseSidebarCard({
  icon: ItemIcon,
  isActive,
  item,
  onClick,
}: {
  icon: typeof CreditCard;
  isActive: boolean;
  item: (typeof useCases)[number];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      onClick={onClick}
      className={`group relative flex min-h-[98px] w-full items-start justify-between gap-4 overflow-hidden border px-4 py-4 text-left transition-colors ${
        isActive ? "border-accent/20" : "border-border"
      }`}
    >
      <PixelTransition
        active={isActive}
        columns={16}
        rows={5}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.26}
        pixelColor="hsl(var(--accent-soft))"
        exitPixelColor="hsl(var(--background))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-background transition-colors group-hover:bg-secondary/60" />}
        secondContent={<span className="block size-full bg-accent-soft" />}
      />

      <span className="relative z-20 min-w-0">
        <span className="block text-base font-bold leading-snug text-foreground">
          {item.title}
        </span>
        <span className="mt-1.5 block max-w-[320px] text-[11px] leading-[1.45] text-muted-foreground">
          {item.copy}
        </span>
      </span>

      <span
        className={`relative z-20 grid size-8 shrink-0 place-items-center border transition-colors ${
          isActive
            ? "border-accent bg-accent text-accent-foreground"
            : "border-border text-muted-foreground"
        }`}
      >
        <ItemIcon size={16} weight={isActive ? "fill" : "bold"} />
      </span>
    </button>
  );
}

export default function UseCases() {
  const [active, setActive] = useState(0);
  const current = useCases[active];
  const CurrentIcon = current.icon;

  const switchUseCase = (index: number) => {
    setActive(index);
  };

  return (
    <section id="use-cases" className="bg-background">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label="Use Cases" className="border-x border-b border-border" />

        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="border-x border-b border-border bg-background p-4 text-foreground lg:border-r">
            <ul className="grid gap-2">
            {useCases.map((item, index) => {
              const ItemIcon = item.icon;
              const isActive = index === active;

              return (
                <li key={item.title}>
                  <UseCaseSidebarCard
                    icon={ItemIcon}
                    isActive={isActive}
                    item={item}
                    onClick={() => switchUseCase(index)}
                  />
                </li>
              );
            })}
            </ul>
          </div>

          <article className="relative flex min-h-[540px] flex-col justify-between overflow-hidden border border-primary bg-primary p-8 text-primary-foreground md:p-10 lg:border-l-0">
            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <span className="inline-flex h-6 items-center border border-primary px-4 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary-foreground/75">
                  {current.tag}
                </span>
                <span className="grid size-10 place-items-center bg-accent text-accent-foreground">
                  <CurrentIcon size={20} weight="fill" />
                </span>
              </div>

              <h3 className="mt-16 font-display text-3xl leading-tight tracking-tight">{current.title}</h3>
              <p className="mt-4 max-w-md text-xs leading-6 text-primary-foreground/75">
                {current.copy}
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {current.cards.map(([label, text]) => (
                  <div key={label} className="min-h-[128px] border border-border-dark p-4">
                    <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                      {label}
                    </div>
                    <p className="mt-4 text-[11px] leading-5 text-primary-foreground/68">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex flex-wrap items-end justify-between gap-6 border-t border-primary pt-5">
              <div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary-foreground/55">
                  {current.stat}
                </div>
                <div className="mt-1 font-display text-3xl font-bold tracking-tight text-gold">
                  {current.statValue}
                </div>
              </div>
              <UseCaseApplyButton />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
