"use client";

import { useState, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo } from "@phosphor-icons/react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { HyperText } from "@/components/ui/hyper-text";
import { PixelTransition } from "@/components/ui/pixel-transition";

type SocialIcon = ComponentType<{
  size?: number;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
  className?: string;
  "aria-hidden"?: boolean;
}>;

const footerColumns = [
  {
    title: "Quick Links",
    links: [
      ["Apply Now", "/apply"],
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
      ["support@eloan.ca", "mailto:support@eloan.ca"],
      ["1-888-ELOANCA", "tel:18883562622"],
      ["Support", "/contact"],
    ],
  },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com", icon: InstagramLogo },
  { label: "Facebook", href: "https://www.facebook.com", icon: FacebookLogo },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: LinkedinLogo },
  { label: "TikTok", href: "https://www.tiktok.com", icon: TiktokLogo },
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
      href="/apply"
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
      <span className="relative z-20">Get started for free</span>
    </Link>
  );
}

function CtaDemoLink() {
  const [triggerKey, setTriggerKey] = useState(0);
  const trigger = () => setTriggerKey((key) => key + 1);

  return (
    <Link
      href="/contact"
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
        Request a demo
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
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: SocialIcon;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href={href}
      aria-label={`E-Loan on ${label}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className="relative grid size-7 place-items-center overflow-hidden border border-primary text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
      <Icon
        size={16}
        weight="fill"
        aria-hidden
        className={`relative z-20 transition-colors duration-200 ${
          active ? "text-accent-foreground" : "text-primary-foreground"
        }`}
      />
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground">
      <section id="apply" className="relative overflow-hidden border-y border-primary bg-primary text-primary-foreground">
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
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl">
              Starting with E-Loan is
              <br />
              simple, fast, and free.
            </h2>
            <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CtaPixelButton />
              <CtaDemoLink />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1000px] border-x border-border">
        <div className="flex min-h-[360px] flex-col justify-between gap-12 border-b border-border px-6 pb-6 pt-12 font-sans md:px-8 lg:flex-row">
          <div className="max-w-[300px]">
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
              <form className="mt-5 flex max-w-[250px] bg-background">
                <label htmlFor="footer-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-newsletter"
                  type="email"
                  placeholder="Email address"
                  className="min-w-0 flex-1 border border-r-0 border-border bg-transparent px-3 py-1.5 text-xs text-foreground outline-none placeholder:text-muted-foreground"
                />
                <NewsletterPixelButton />
              </form>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:min-w-[620px]">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:justify-end lg:gap-12">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-mono text-[10px] font-extrabold uppercase tracking-[0.22em] text-primary">
                    {column.title}
                  </h3>
                  <ul className="mt-5 grid gap-3">
                    {column.links.map(([label, href]) => (
                      <li key={`${column.title}-${label}`}>
                        <FooterLink href={href} label={label} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 lg:justify-end">
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

        <div className="flex flex-col gap-4 px-6 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-8">
          <p>&copy; {currentYear} E-Loan</p>
          <div className="flex flex-wrap items-center gap-x-9 gap-y-3 md:justify-end">
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
