"use client";

import { useId, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeDollarSign,
  CalendarClock,
  Clock3,
  Coins,
  ShieldCheck,
  TrendingDown,
  Wallet,
} from "lucide-react";

import { AboutPixelApply } from "@/components/about/about-pixel-apply";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const cad = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});
const cad2 = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

type ScheduleRow = { month: number; interest: number; principal: number; balance: number };

type Amortization = {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  months: number;
  schedule: ScheduleRow[];
};

/** Standard amortized payment: M = P·r / (1 − (1+r)^−n). Handles r = 0. */
function basePayment(principal: number, monthlyRate: number, months: number): number {
  if (months <= 0) return 0;
  if (monthlyRate === 0) return principal / months;
  const factor = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * factor) / (factor - 1);
}

/** Simulate month-by-month with an optional extra payment. */
function amortize(
  principal: number,
  monthlyRate: number,
  months: number,
  extra: number
): Amortization {
  const scheduled = basePayment(principal, monthlyRate, months);
  const payment = scheduled + Math.max(0, extra);
  const schedule: ScheduleRow[] = [];
  let balance = principal;
  let totalInterest = 0;
  let m = 0;

  // Cap at the scheduled term + a guard so a tiny payment can't loop forever.
  const cap = months + 1200;
  while (balance > 0.005 && m < cap) {
    m += 1;
    const interest = balance * monthlyRate;
    let principalPaid = payment - interest;
    if (principalPaid <= 0) {
      // Payment doesn't even cover interest — bail to avoid an infinite loan.
      totalInterest += interest;
      schedule.push({ month: m, interest, principal: 0, balance });
      break;
    }
    if (principalPaid > balance) principalPaid = balance;
    balance -= principalPaid;
    totalInterest += interest;
    schedule.push({ month: m, interest, principal: principalPaid, balance });
  }

  return {
    monthlyPayment: scheduled,
    totalInterest,
    totalCost: principal + totalInterest,
    months: m,
    schedule,
  };
}

function termLabel(months: number): string {
  const y = Math.floor(months / 12);
  const mo = months % 12;
  if (y === 0) return `${mo} mo`;
  if (mo === 0) return `${y} yr`;
  return `${y} yr ${mo} mo`;
}

function Field({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  const id = useId();
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="border-b border-border pb-6 last:border-b-0 last:pb-0">
      <div className="flex items-center justify-between gap-4">
        <label htmlFor={id} className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </label>
        <span className="border border-primary bg-primary px-2.5 py-1 font-display text-base font-bold tabular-nums text-primary-foreground">
          {prefix}
          {display}
          {suffix}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="loan-calculator-range mt-5 h-1.5 w-full cursor-pointer appearance-none rounded-none bg-secondary accent-accent"
        style={{
          background: `linear-gradient(to right, hsl(var(--primary)) ${pct}%, hsl(var(--border)) ${pct}%)`,
        }}
      />
      <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

function Donut({ principal, interest }: { principal: number; interest: number }) {
  const total = principal + interest || 1;
  const r = 42;
  const c = 2 * Math.PI * r;
  const principalLen = (principal / total) * c;
  const interestLen = (interest / total) * c;
  const segmentGap = 5;
  const visiblePrincipal = Math.max(0, principalLen - segmentGap);
  const visibleInterest = Math.max(0, interestLen - segmentGap);
  return (
    <svg viewBox="0 0 100 100" className="size-28 -rotate-90 sm:size-32" role="img" aria-label="Principal versus interest share">
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="10"
        strokeDasharray={`${visiblePrincipal} ${c - visiblePrincipal}`}
        strokeLinecap="butt"
      />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="hsl(var(--primary-foreground) / 0.32)"
        strokeWidth="10"
        strokeDasharray={`${visibleInterest} ${c - visibleInterest}`}
        strokeDashoffset={-principalLen}
        strokeLinecap="butt"
      />
    </svg>
  );
}

function BalanceChart({ base, accelerated }: { base: ScheduleRow[]; accelerated: ScheduleRow[] }) {
  const maxMonths = Math.max(base.length, accelerated.length, 1);
  const maxBal = base[0]?.balance ? base[0].balance + base[0].principal : 1;
  const W = 320;
  const H = 120;
  const toPoints = (rows: ScheduleRow[]) => {
    const start = `0,0`;
    const pts = rows.map((row) => {
      const x = (row.month / maxMonths) * W;
      const y = H - (row.balance / maxBal) * H;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });
    return [start, ...pts].join(" ");
  };
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" preserveAspectRatio="none" role="img" aria-label="Loan balance over time">
      {[0, 30, 60, 90, 120].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2={W}
          y2={y}
          stroke="hsl(var(--primary-foreground) / 0.1)"
          strokeWidth="1"
        />
      ))}
      <polyline points={toPoints(base)} fill="none" stroke="hsl(var(--primary-foreground) / 0.55)" strokeWidth="2.5" />
      {accelerated.length !== base.length && (
        <polyline points={toPoints(accelerated)} fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" />
      )}
    </svg>
  );
}

export function LoanCalculator({
  initialAmount = 15000,
  initialMonths = 48,
}: {
  initialAmount?: number;
  initialMonths?: number;
} = {}) {
  const [amount, setAmount] = useState(initialAmount);
  const [rate, setRate] = useState(9.9);
  const [months, setMonths] = useState(initialMonths);
  const [extra, setExtra] = useState(0);
  const [showSchedule, setShowSchedule] = useState(false);

  const monthlyRate = rate / 100 / 12;

  const base = useMemo(() => amortize(amount, monthlyRate, months, 0), [amount, monthlyRate, months]);
  const accelerated = useMemo(
    () => amortize(amount, monthlyRate, months, extra),
    [amount, monthlyRate, months, extra]
  );

  const interestSaved = base.totalInterest - accelerated.totalInterest;
  const monthsSaved = base.months - accelerated.months;

  // Yearly aggregation of the base schedule for the table.
  const yearly = useMemo(() => {
    const rows: { year: number; principal: number; interest: number; balance: number }[] = [];
    base.schedule.forEach((row) => {
      const year = Math.ceil(row.month / 12);
      let bucket = rows[year - 1];
      if (!bucket) {
        bucket = { year, principal: 0, interest: 0, balance: 0 };
        rows[year - 1] = bucket;
      }
      bucket.principal += row.principal;
      bucket.interest += row.interest;
      bucket.balance = row.balance;
    });
    return rows;
  }, [base.schedule]);

  return (
    <div className="overflow-hidden border border-border bg-background shadow-[0_24px_80px_hsl(var(--primary)/0.08)]">
      <div className="grid lg:grid-cols-[minmax(340px,0.4fr)_minmax(0,0.6fr)]">
        <aside className="border-b border-border bg-background p-6 md:p-8 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-4">
            <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-accent-foreground">
              Build your estimate
            </p>
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
              CAD
            </span>
          </div>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground">
            Shape the loan around your budget.
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
            Move any slider and the payment plan updates instantly.
          </p>

          <div className="mt-8 space-y-6">
            <Field label="Loan amount" value={amount} display={amount.toLocaleString("en-CA")} min={1000} max={50000} step={500} onChange={setAmount} prefix="$" />
            <Field label="Interest rate (APR)" value={rate} display={rate.toFixed(1)} min={3} max={35} step={0.1} onChange={setRate} suffix="%" />
            <Field label="Loan term" value={months} display={termLabel(months)} min={6} max={84} step={6} onChange={setMonths} />
            <Field label="Extra monthly payment" value={extra} display={extra.toLocaleString("en-CA")} min={0} max={1000} step={25} onChange={setExtra} prefix="$" />
          </div>

          <div className="mt-8 flex items-start gap-3 border border-border bg-secondary/45 p-4">
            <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary" />
            <p className="text-xs leading-5 text-muted-foreground">
              Planning estimate only. Your approved rate, payment, and fees may differ.
            </p>
          </div>
        </aside>

        <section className="min-w-0 bg-primary text-primary-foreground">
          <div className="relative overflow-hidden border-b border-border-dark p-6 md:p-8">
            <FlickeringGrid
              aria-hidden
              className="absolute inset-0"
              squareSize={2}
              gridGap={3}
              flickerChance={0.06}
              maxOpacity={0.12}
              color="hsl(var(--primary-foreground))"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />

            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-primary-foreground/55">
                  Live payment estimate
                </p>
                <span className="inline-flex items-center gap-2 border border-border-dark px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-primary-foreground/65">
                  <span className="size-2 bg-accent" />
                  Updates instantly
                </span>
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_164px] lg:items-center lg:gap-6">
                <div>
                  <p className="text-sm text-primary-foreground/60">Estimated monthly payment</p>
                  <p className="mt-2 whitespace-nowrap font-display text-[clamp(3.25rem,6vw,4.5rem)] font-black leading-none tracking-[-0.055em] text-accent">
                    {cad2.format(base.monthlyPayment)}
                  </p>
                  <p className="mt-4 text-sm text-primary-foreground/65">
                    {termLabel(months)} term <span className="mx-2 text-accent">/</span> {rate.toFixed(1)}% APR
                  </p>
                </div>

                <div className="border-border-dark lg:border-l lg:pl-6">
                  <div className="relative mx-auto grid w-fit place-items-center">
                    <Donut principal={amount} interest={base.totalInterest} />
                    <span className="absolute font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground/60">
                      Cost mix
                    </span>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-[10px]">
                    <div className="text-center">
                      <dt className="flex items-center justify-center gap-1.5 text-primary-foreground/55">
                        <span className="size-2 bg-accent" /> Principal
                      </dt>
                      <dd className="mt-1 font-semibold tabular-nums">{cad.format(amount)}</dd>
                    </div>
                    <div className="text-center">
                      <dt className="flex items-center justify-center gap-1.5 text-primary-foreground/55">
                        <span className="size-2 bg-primary-foreground/30" /> Interest
                      </dt>
                      <dd className="mt-1 font-semibold tabular-nums">{cad.format(base.totalInterest)}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-border-dark">
            {[
              { icon: BadgeDollarSign, value: cad.format(amount), label: "Borrowed" },
              { icon: Coins, value: cad.format(base.totalInterest), label: "Interest" },
              { icon: Wallet, value: cad.format(base.totalCost), label: "Total repaid" },
            ].map(({ icon: Icon, value, label }, index) => (
              <div key={label} className={`p-3 text-center md:p-6 ${index < 2 ? "border-r border-border-dark" : ""}`}>
                <Icon className="mx-auto size-4 text-accent md:size-5" />
                <p className="mt-2 font-display text-sm font-bold tabular-nums md:text-xl">{value}</p>
                <p className="mt-1 text-[9px] text-primary-foreground/55 md:text-xs">{label}</p>
              </div>
            ))}
          </div>

          {extra > 0 && monthsSaved > 0 && (
            <div className="grid grid-cols-2 border-b border-accent bg-accent text-accent-foreground">
              <div className="col-span-2 flex items-center gap-3 border-b border-accent-foreground/15 p-5">
                <TrendingDown className="size-5 shrink-0" />
                <p className="text-sm font-semibold">Your extra {cad.format(extra)}/month changes the finish line.</p>
              </div>
              <div className="border-r border-accent-foreground/15 p-5">
                <p className="font-display text-xl font-black tabular-nums">{cad.format(interestSaved)}</p>
                <p className="text-[10px] text-accent-foreground/65">Interest saved</p>
              </div>
              <div className="p-5">
                <p className="font-display text-xl font-black">{termLabel(monthsSaved)}</p>
                <p className="text-[10px] text-accent-foreground/65">Paid off sooner</p>
              </div>
            </div>
          )}

          <div className="border-b border-border-dark">
            <div className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <CalendarClock className="size-4 text-accent" />
                  Balance over time
                </div>
                <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.12em] text-primary-foreground/50">
                  <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-primary-foreground/55" /> Standard</span>
                  {extra > 0 && monthsSaved > 0 && (
                    <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 bg-accent" /> With extra</span>
                  )}
                </div>
              </div>
              <div className="mt-6 h-40 w-full">
                <BalanceChart base={base.schedule} accelerated={accelerated.schedule} />
              </div>
              <div className="mt-3 flex justify-between font-mono text-[9px] uppercase tracking-[0.14em] text-primary-foreground/40">
                <span>Today</span>
                <span>{termLabel(extra > 0 ? accelerated.months : base.months)}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 border-t border-border-dark">
              <div className="border-r border-border-dark p-5">
                <Clock3 className="size-4 text-accent" />
                <p className="mt-4 font-display text-2xl font-bold">{termLabel(extra > 0 ? accelerated.months : base.months)}</p>
                <p className="mt-1 text-xs text-primary-foreground/55">Projected payoff</p>
              </div>
              <div className="p-5">
                <Coins className="size-4 text-accent" />
                <p className="mt-4 font-display text-2xl font-bold">{cad.format(extra > 0 ? accelerated.totalInterest : base.totalInterest)}</p>
                <p className="mt-1 text-xs text-primary-foreground/55">Projected interest</p>
              </div>
            </div>
          </div>

          <div className="border-b border-border-dark">
            <button
              type="button"
              onClick={() => setShowSchedule((s) => !s)}
              aria-expanded={showSchedule}
              className="flex w-full items-center justify-between p-5 text-left text-sm font-semibold transition-colors hover:bg-primary-foreground/[0.045] md:px-6"
            >
              <span>
                Yearly amortization schedule
                <span className="ml-3 font-mono text-[9px] font-normal uppercase tracking-[0.14em] text-primary-foreground/45">
                  {yearly.length} years
                </span>
              </span>
              <ArrowRight className={`size-4 text-accent transition-transform ${showSchedule ? "rotate-90" : ""}`} />
            </button>
            {showSchedule && (
              <div className="overflow-x-auto border-t border-border-dark px-5 pb-6 pt-4 md:px-6">
                <table className="w-full min-w-[460px] text-sm">
                  <thead>
                    <tr className="border-b border-border-dark text-left font-mono text-[9px] uppercase tracking-[0.14em] text-primary-foreground/45">
                      <th className="pb-3 font-medium">Year</th>
                      <th className="pb-3 text-right font-medium">Principal</th>
                      <th className="pb-3 text-right font-medium">Interest</th>
                      <th className="pb-3 text-right font-medium">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="tabular-nums">
                    {yearly.map((row) => (
                      <tr key={row.year} className="border-b border-border-dark last:border-0">
                        <td className="py-3 font-medium">Year {row.year}</td>
                        <td className="py-3 text-right">{cad.format(row.principal)}</td>
                        <td className="py-3 text-right text-primary-foreground/55">{cad.format(row.interest)}</td>
                        <td className="py-3 text-right">{cad.format(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <p className="max-w-md text-xs leading-5 text-primary-foreground/55">
              Ready for a personalized offer? Checking your options uses a soft credit check.
            </p>
            <AboutPixelApply variant="light" label="Check my real rate" className="h-12 w-full shrink-0 justify-center sm:w-auto" />
          </div>
        </section>
      </div>
    </div>
  );
}
