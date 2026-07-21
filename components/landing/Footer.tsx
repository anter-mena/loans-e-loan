"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { siFacebook, siInstagram, siTiktok } from "simple-icons";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HyperText } from "@/components/ui/hyper-text";
import { PixelTransition } from "@/components/ui/pixel-transition";

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      ["Apply Now", "/application-form"],
      ["About", "/about"],
      ["FAQ", "/resources/faq"],
    ],
  },
  {
    title: "Product",
    links: [
      ["Personal Loans", "/loans"],
      ["By Amount", "/loans/by-amount"],
      ["By Purpose", "/loans/by-purpose"],
      ["Loan Calculator", "/resources/tools"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["News", "/news"],
      ["Guides", "/resources/guides"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["support@e-loan.ca", "mailto:support@e-loan.ca"],
      ["1-888-ELOANCA", "tel:18883562622"],
      ["Support", "/contact"],
    ],
  },
];

function filledBrandIcon(path: string): IconSvgElement {
  return [["path", { d: path, fill: "currentColor", key: "brand" }]];
}

const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 4.127 0c0 1.14-.923 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com", icon: filledBrandIcon(siInstagram.path) },
  { label: "Facebook", href: "https://www.facebook.com", icon: filledBrandIcon(siFacebook.path) },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: filledBrandIcon(linkedinPath) },
  { label: "TikTok", href: "https://www.tiktok.com", icon: filledBrandIcon(siTiktok.path) },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group -ml-1 inline-flex items-center gap-1 px-1 font-sans text-xs font-medium leading-5 text-foreground underline-offset-4 transition-colors hover:bg-accent hover:text-accent-foreground hover:underline"
    >
      <span>{label}</span>
      <ArrowUpRight
        aria-hidden
        className="size-3 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
      />
    </Link>
  );
}

function CtaPixelButton() {
  const [active, setActive] = useState(false);

  return (
    <Link
      href="/application-form"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative inline-flex h-10 items-center overflow-hidden px-5 text-sm font-bold text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <PixelTransition
        active={active}
        columns={16}
        rows={4}
        animationStepDuration={0.38}
        exitAnimationStepDuration={0.38}
        pixelColor="hsl(var(--primary-foreground))"
        exitPixelColor="hsl(var(--accent))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-accent" />}
        secondContent={<span className="block size-full bg-primary-foreground" />}
      />
      <span className="relative z-20">Check my rate</span>
    </Link>
  );
}

function CtaLoansLink() {
  const [triggerKey, setTriggerKey] = useState(0);
  const trigger = () => setTriggerKey((key) => key + 1);

  return (
    <Link
      href="/loans"
      onMouseEnter={trigger}
      onMouseLeave={trigger}
      onFocus={trigger}
      onBlur={trigger}
      className="inline-flex h-10 items-center gap-3 border border-primary-foreground/30 px-3 text-sm font-bold text-primary-foreground transition-[color,border-color] hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <ArrowRight className="size-3.5" />
      <HyperText
        as="span"
        duration={520}
        animateOnHover={false}
        triggerKey={triggerKey}
        className="pointer-events-none py-0 font-sans text-sm font-bold leading-none tracking-normal"
        characterSet={"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
      >
        Explore loan options
      </HyperText>
    </Link>
  );
}

function NewsletterPixelButton() {
  const [active, setActive] = useState(false);

  return (
    <button
      type="submit"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative grid size-8 shrink-0 place-items-center overflow-hidden border border-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label="Subscribe to newsletter"
    >
      <PixelTransition
        active={active}
        gridSize={4}
        animationStepDuration={0.32}
        exitAnimationStepDuration={0.32}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <ArrowRight
        className={`relative z-20 size-4 transition-colors duration-200 ${
          active ? "text-accent-foreground" : "text-primary-foreground"
        }`}
      />
    </button>
  );
}

function SocialPixelLink({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: IconSvgElement;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      aria-label={`E-Loan on ${label}`}
      title={label}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="group relative grid size-7 place-items-center overflow-hidden border border-primary bg-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <PixelTransition
        active={active}
        gridSize={4}
        animationStepDuration={0.3}
        exitAnimationStepDuration={0.3}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <HugeiconsIcon
        icon={icon}
        size={16}
        color="currentColor"
        aria-hidden
        className={`relative z-20 transition-[color,transform] duration-200 group-hover:scale-110 ${
          active ? "text-accent-foreground" : "text-primary-foreground"
        }`}
      />
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-background text-foreground">
      <section id="application-form" className="relative overflow-hidden border-y border-primary bg-primary text-primary-foreground">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary"
        />
        <FlickeringGrid
          aria-hidden
          className="absolute inset-0"
          squareSize={2}
          gridGap={2}
          flickerChance={0.08}
          maxOpacity={0.18}
          color="hsl(var(--primary-foreground))"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/50" />

        <div className="relative mx-auto grid min-h-[340px] max-w-[1000px] place-items-center px-6 py-20 text-center">
          <div>
            <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.55rem,8vw,2.25rem)] font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl">
              <span className="block whitespace-nowrap">Starting with E-Loan is</span>
              <span className="block whitespace-nowrap">simple, fast, and free.</span>
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaPixelButton />
              <CtaLoansLink />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] border-x border-border">
        <div className="flex min-h-[360px] flex-col items-center justify-between gap-12 border-b border-border px-6 pb-6 pt-12 text-center font-sans md:px-8 lg:flex-row lg:items-stretch lg:text-left">
          <div className="flex max-w-[300px] flex-col items-center lg:items-start">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.svg" alt="E-Loan" width={142} height={48} className="h-8 w-auto" />
            </Link>
            <div className="mt-8">
              <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-primary">
                Subscribe
              </h3>
              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Get loan tips, rate updates, and borrower guides in your inbox.
              </p>
              {subscribed ? (
                <p className="mt-5 text-xs leading-5 text-primary" role="status">
                  Thanks — you&apos;re on the list.
                </p>
              ) : (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubscribed(true);
                    // TODO: POST the email to your provider (e.g. /api/newsletter or an ESP) to persist it.
                  }}
                  className="mx-auto mt-5 flex max-w-[250px] bg-background lg:mx-0"
                >
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-newsletter"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="min-w-0 flex-1 border border-r-0 border-border bg-transparent px-3 py-1.5 text-xs text-foreground outline-none placeholder:text-muted-foreground"
                  />
                  <NewsletterPixelButton />
                </form>
              )}
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-between gap-12 lg:min-w-[620px] lg:items-stretch">
            <div className="grid w-full grid-cols-2 justify-items-center gap-x-4 gap-y-10 lg:grid-cols-4 lg:justify-end lg:justify-items-stretch lg:gap-12">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-mono text-[10px] font-extrabold uppercase tracking-[0.22em] text-primary">
                    {column.title}
                  </h3>
                  <ul className="mt-5 grid justify-items-center gap-3 lg:justify-items-start">
                    {column.links.map(([label, href]) => (
                      <li key={`${column.title}-${label}`}>
                        <FooterLink href={href} label={label} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-end">
              {socials.map(({ label, href, icon }) => (
                <SocialPixelLink
                  key={label}
                  label={label}
                  href={href}
                  icon={icon}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 px-6 py-3 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:justify-between md:px-8 md:text-left">
          <p>&copy; {currentYear} E-Loan</p>
          <div className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3 md:justify-end">
            <Link href="/terms-of-use" className="group -mx-1 inline-flex items-center gap-1 px-1 transition-colors hover:bg-accent hover:text-accent-foreground">
              <span>Terms of Use</span>
              <ArrowUpRight
                aria-hidden
                className="size-3 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
            <Link href="/privacy-policy" className="group -mx-1 inline-flex items-center gap-1 px-1 transition-colors hover:bg-accent hover:text-accent-foreground">
              <span>Privacy Policy</span>
              <ArrowUpRight
                aria-hidden
                className="size-3 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
