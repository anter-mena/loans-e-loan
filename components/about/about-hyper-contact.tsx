"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HyperText } from "@/components/ui/hyper-text";

export function AboutHyperContact() {
  const [triggerKey, setTriggerKey] = useState(0);
  const trigger = () => setTriggerKey((key) => key + 1);

  return (
    <Link
      href="/contact"
      onMouseEnter={trigger}
      onMouseLeave={trigger}
      onFocus={trigger}
      onBlur={trigger}
      className="inline-flex h-11 items-center gap-3 border border-primary bg-background px-4 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <ArrowRight className="size-4" />
      <HyperText
        as="span"
        duration={520}
        animateOnHover={false}
        triggerKey={triggerKey}
        className="pointer-events-none py-0 font-sans text-sm font-bold leading-none tracking-normal"
        characterSet={"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
      >
        Talk to us
      </HyperText>
    </Link>
  );
}
