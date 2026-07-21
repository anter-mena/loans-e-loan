"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MessageCircle, Phone, type LucideIcon } from "lucide-react";
import { PixelTransition } from "@/components/ui/pixel-transition";

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "1-888-ELOANCA",
    detail: "Mon-Fri, 8am-8pm ET",
    href: "tel:1888356226",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "support@e-loan.ca",
    detail: "We reply within one business day",
    href: "mailto:support@e-loan.ca",
  },
  {
    icon: MessageCircle,
    label: "Live chat",
    value: "Coming soon",
    detail: "Live advisor chat is not available yet",
    href: null,
    disabled: true,
  },
];

function PixelContactIcon({ active, icon: Icon }: { active: boolean; icon: LucideIcon }) {
  return (
    <span className="relative grid size-8 place-items-center rounded-md shadow-glow">
      <PixelTransition
        active={active}
        gridSize={7}
        animationStepDuration={0.7}
        exitAnimationStepDuration={0.7}
        pixelColor="hsl(var(--primary-foreground))"
        exitPixelColor="hsl(var(--accent))"
        className="absolute inset-0 rounded-md"
        firstContent={<span className="block size-full bg-accent" />}
        secondContent={<span className="block size-full bg-primary-foreground" />}
      />
      <Icon className="relative z-20 size-3.5 text-accent-foreground" strokeWidth={2.2} />
    </span>
  );
}

export function ContactCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="grid border-x border-b border-border-dark bg-primary text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))] sm:grid-cols-3">
      {channels.map(({ icon: Icon, label, value, detail, href, disabled }, index) => {
        const inner = (
          <div className="grid max-w-[235px] grid-rows-[auto_auto] gap-y-2 text-left">
            <span className="block font-mono text-[9px] font-bold uppercase tracking-[0.28em] text-primary-foreground/62">
              {label}
            </span>
            <span className="flex items-center gap-3">
              <PixelContactIcon active={!disabled && activeCard === index} icon={Icon} />
              <span className="min-w-0">
                <span className="mt-1 inline-flex items-center font-display text-sm font-medium leading-tight tracking-tight text-primary-foreground underline-offset-4 group-hover/contact:underline">
                  {value}
                  {href ? (
                    <ArrowUpRight
                      aria-hidden
                      className="ml-1 size-3.5 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover/contact:translate-x-0 group-hover/contact:translate-y-0 group-hover/contact:opacity-100"
                    />
                  ) : null}
                </span>
                <span className="mt-1 block min-h-5 text-[9px] leading-[1.25] text-primary-foreground/62">
                  {detail}
                </span>
              </span>
            </span>
          </div>
        );
        const className = `group/contact grid min-h-[112px] items-center justify-items-start border-b border-border-dark px-6 py-4 transition-colors sm:place-items-center sm:border-b-0 ${
          index < channels.length - 1 ? "sm:border-r" : ""
        } ${disabled ? "cursor-not-allowed opacity-50" : "hover:bg-primary-foreground/[0.045]"}`;

        return href ? (
          <a
            key={label}
            href={href}
            onMouseEnter={() => !disabled && setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => !disabled && setActiveCard(index)}
            onBlur={() => setActiveCard(null)}
            className={className}
            aria-disabled={disabled}
          >
            {inner}
          </a>
        ) : (
          <div
            key={label}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
            onFocus={() => setActiveCard(index)}
            onBlur={() => setActiveCard(null)}
            className={className}
          >
            {inner}
          </div>
        );
      })}
    </div>
  );
}
