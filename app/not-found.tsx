import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Compass, Home, LifeBuoy } from "lucide-react";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has moved.",
};

const quickLinks = [
  { href: "/", label: "Homepage", icon: Home },
  { href: "/about", label: "About us", icon: Compass },
  { href: "/contact", label: "Contact support", icon: LifeBuoy },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-hero px-4 py-16">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-accent/12 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-[320px] w-[320px] rounded-full bg-gold/12 blur-3xl" />

      {/* brand */}
      <Link
        href="/"
        className="relative mb-10 inline-flex items-center transition-transform hover:scale-105"
      >
        <Image src="/logo.svg" alt="E-Loan" width={300} height={100} className="h-8 w-auto" priority />
      </Link>

      <div className="relative w-full max-w-xl text-center">
        <p className="font-display text-[7rem] font-black leading-none tracking-tighter text-accent sm:text-[9rem]">
          404
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
          This page took a wrong turn.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground text-balance">
          The page you&apos;re looking for doesn&apos;t exist, moved, or never quite made it.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="hero" size="lg" asChild>
            <Link href="/">
              Back to home
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="soft" size="lg" asChild>
            <Link href="/contact">Contact support</Link>
          </Button>
        </div>

        {/* quick links */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Popular pages
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-medium text-foreground shadow-soft backdrop-blur transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-card"
              >
                <Icon className="h-4 w-4 text-accent" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
