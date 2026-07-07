"use client";

import { useId, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, TrendingDown, Wallet, Coins, CalendarClock } from "lucide-react";

import { Button } from "@/components/ui/button";

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
    <div>
      <div className="flex items-baseline justify-between">
        <label htmlFor={id} className="text-sm font-medium text-foreground">
          {label}
        </label>
        <span className="font-display text-base font-bold tabular-nums text-foreground">
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
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-accent"
        style={{
          background: `linear-gradient(to right, hsl(var(--accent)) ${pct}%, hsl(var(--secondary)) ${pct}%)`,
        }}
      />
      <div className="mt-1.5 flex justify-between text-[10px] text-muted-foreground">
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
  const interestLen = (interest / total) * c;
  return (
    <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90" role="img" aria-label="Principal versus interest share">
      <circle cx="50" cy="50" r={r} fill="none" stroke="hsl(var(--accent))" strokeWidth="12" />
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="12"
        strokeDasharray={`${interestLen} ${c - interestLen}`}
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
      <polyline points={toPoints(base)} fill="none" stroke="hsl(var(--border))" strokeWidth="2.5" />
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
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
      {/* Inputs */}
      <div className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
        <h2 className="font-display text-lg font-bold tracking-tight text-foreground">Your loan</h2>
        <div className="mt-6 space-y-7">
          <Field label="Loan amount" value={amount} display={amount.toLocaleString("en-CA")} min={1000} max={50000} step={500} onChange={setAmount} prefix="$" />
          <Field label="Interest rate (APR)" value={rate} display={rate.toFixed(1)} min={3} max={35} step={0.1} onChange={setRate} suffix="%" />
          <Field label="Loan term" value={months} display={termLabel(months)} min={6} max={84} step={6} onChange={setMonths} />
          <Field label="Extra monthly payment" value={extra} display={extra.toLocaleString("en-CA")} min={0} max={1000} step={25} onChange={setExtra} prefix="$" />
        </div>

        <p className="mt-7 text-xs leading-relaxed text-muted-foreground">
          Estimates only, for planning purposes. Your actual rate, payment, and fees depend on your
          application and credit profile.
        </p>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {/* headline payment */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-6 text-primary-foreground shadow-card sm:p-8">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/60">
                Estimated monthly payment
              </div>
              <div className="mt-1 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                {cad2.format(base.monthlyPayment)}
              </div>
              <div className="mt-1 text-xs text-primary-foreground/60">
                over {termLabel(months)} at {rate.toFixed(1)}% APR
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Donut principal={amount} interest={base.totalInterest} />
              <dl className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-accent" />
                  <dt className="text-primary-foreground/60">Principal</dt>
                  <dd className="font-semibold tabular-nums">{cad.format(amount)}</dd>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-gold" />
                  <dt className="text-primary-foreground/60">Interest</dt>
                  <dd className="font-semibold tabular-nums">{cad.format(base.totalInterest)}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* stat tiles */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <Coins className="h-5 w-5 text-accent" />
            <div className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{cad.format(base.totalInterest)}</div>
            <div className="text-xs text-muted-foreground">Total interest</div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <Wallet className="h-5 w-5 text-accent" />
            <div className="mt-2 font-display text-2xl font-bold tabular-nums text-foreground">{cad.format(base.totalCost)}</div>
            <div className="text-xs text-muted-foreground">Total cost of loan</div>
          </div>
        </div>

        {/* extra payment savings */}
        {extra > 0 && monthsSaved > 0 && (
          <div className="rounded-2xl border border-accent/20 bg-accent-soft/60 p-5">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <TrendingDown className="h-4 w-4 text-accent" />
              Paying {cad.format(extra)} extra per month
            </div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div>
                <div className="font-display text-xl font-bold tabular-nums text-accent">{cad.format(interestSaved)}</div>
                <div className="text-xs text-muted-foreground">Interest saved</div>
              </div>
              <div>
                <div className="font-display text-xl font-bold tabular-nums text-accent">{termLabel(monthsSaved)}</div>
                <div className="text-xs text-muted-foreground">Paid off sooner</div>
              </div>
            </div>
          </div>
        )}

        {/* balance chart */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <CalendarClock className="h-4 w-4 text-accent" />
              Balance over time
            </div>
            <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
              <span className="inline-flex items-center gap-1"><span className="inline-block h-2 w-3 rounded-full bg-border" />Standard</span>
              {extra > 0 && monthsSaved > 0 && (
                <span className="inline-flex items-center gap-1"><span className="inline-block h-2 w-3 rounded-full bg-accent" />With extra</span>
              )}
            </div>
          </div>
          <div className="mt-3 h-28 w-full">
            <BalanceChart base={base.schedule} accelerated={accelerated.schedule} />
          </div>
        </div>

        {/* amortization schedule */}
        <div className="rounded-2xl border border-border bg-card shadow-soft">
          <button
            type="button"
            onClick={() => setShowSchedule((s) => !s)}
            aria-expanded={showSchedule}
            className="flex w-full items-center justify-between p-5 text-sm font-semibold text-foreground"
          >
            Yearly amortization schedule
            <ArrowRight className={`h-4 w-4 text-accent transition-transform ${showSchedule ? "rotate-90" : ""}`} />
          </button>
          {showSchedule && (
            <div className="overflow-x-auto px-5 pb-5">
              <table className="w-full min-w-[420px] text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs text-muted-foreground">
                    <th className="pb-2 font-medium">Year</th>
                    <th className="pb-2 text-right font-medium">Principal</th>
                    <th className="pb-2 text-right font-medium">Interest</th>
                    <th className="pb-2 text-right font-medium">Balance</th>
                  </tr>
                </thead>
                <tbody className="tabular-nums">
                  {yearly.map((row) => (
                    <tr key={row.year} className="border-b border-border/60 last:border-0">
                      <td className="py-2 font-medium text-foreground">Year {row.year}</td>
                      <td className="py-2 text-right text-foreground">{cad.format(row.principal)}</td>
                      <td className="py-2 text-right text-muted-foreground">{cad.format(row.interest)}</td>
                      <td className="py-2 text-right text-foreground">{cad.format(row.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <Button variant="hero" size="lg" className="w-full" asChild>
          <Link href="/#apply">
            Get your real rate
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
