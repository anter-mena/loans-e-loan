"use client";

import { type ComponentType } from "react";
import { Ban, Database, Lock, ShieldCheck } from "lucide-react";

import { FlickeringGrid } from "@/components/ui/flickering-grid";

type SignalIcon = ComponentType<{ className?: string }>;

const badges: { icon: SignalIcon; label: string }[] = [
  { icon: Lock, label: "Encrypted transmission" },
  { icon: ShieldCheck, label: "Restricted access" },
  { icon: Ban, label: "No unauthorized use" },
];

export function PrivacySignalsPanel() {
  return (
    <aside className="relative overflow-hidden border-t border-primary bg-primary p-6 text-primary-foreground md:p-8 lg:border-l lg:border-t-0">
      <FlickeringGrid
        aria-hidden
        className="absolute inset-0"
        squareSize={3}
        gridGap={2}
        color="hsl(var(--primary-foreground))"
        maxOpacity={0.18}
        flickerChance={0.08}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/88 to-primary" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div>
          <p className="inline-block bg-accent px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
            Privacy signals
          </p>
          <div className="mt-6 grid border border-border-dark bg-primary">
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 border-b border-border-dark p-4 last:border-b-0"
              >
                <span className="grid size-9 shrink-0 place-items-center bg-accent text-accent-foreground">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-semibold text-primary-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border-dark bg-primary-foreground/[0.04] p-5">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center bg-accent text-accent-foreground">
              <Database className="size-4" />
            </span>
            <p className="text-lg font-semibold text-primary-foreground">
              Data with a purpose
            </p>
          </div>
          <p className="mt-3 text-sm leading-6 text-primary-foreground/68">
            We use personal information to process applications, service accounts,
            assess credit, improve service, and support customers.
          </p>
        </div>
      </div>
    </aside>
  );
}
