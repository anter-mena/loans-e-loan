"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronRight,
  CreditCard,
  DollarSign,
  FileText,
  Grid3x3,
  HelpCircle,
  List,
  MapPin,
  Menu,
  Scale,
  Target,
  X,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type MenuLink = {
  href: string;
  label: string;
  desc: string;
  icon: LucideIcon;
};

const loanLinks: MenuLink[] = [
  { href: "/loans/by-amount", label: "By Amount", desc: "$300 - $5,000 loans", icon: DollarSign },
  { href: "/loans/by-purpose", label: "By Purpose", desc: "Debt consolidation, emergencies & more", icon: Target },
  { href: "/loans/by-credit-score", label: "By Credit Score", desc: "Find loans for your credit range", icon: CreditCard },
  { href: "/loans/by-type", label: "By Type", desc: "Personal, emergency, same-day loans", icon: FileText },
  { href: "/loans/by-location", label: "By Location", desc: "Loans in Canada", icon: MapPin },
  { href: "/loans", label: "All Loan Options", desc: "Browse all available loans", icon: List },
];

const resourceLinks: MenuLink[] = [
  { href: "/resources/tools", label: "Tools", desc: "Calculators & helpful tools", icon: Calculator },
  { href: "/resources/comparisons", label: "Comparisons", desc: "Compare borrowing options", icon: Scale },
  { href: "/resources/guides", label: "Guides", desc: "Step-by-step loan guides", icon: BookOpen },
  { href: "/resources/faq", label: "FAQ", desc: "Common questions answered", icon: HelpCircle },
  { href: "/resources", label: "All Resources", desc: "Browse all tools & guides", icon: Grid3x3 },
];

const pageLinks = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

function MenuItemLink({ href, label, desc, icon: Icon }: MenuLink) {
  return (
    <NavigationMenuLink asChild className="hover:bg-primary/10 focus:bg-primary/10">
      <Link href={href} className="flex items-start gap-3 rounded-lg p-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{label}</span>
          <span className="text-xs text-muted-foreground">{desc}</span>
        </span>
      </Link>
    </NavigationMenuLink>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center transition-transform hover:scale-105">
      <Image src="/logo.svg" alt="E-Loan" width={300} height={100} className={className ?? "h-9 w-auto"} priority />
    </Link>
  );
}

function DesktopNavLinks() {
  return (
    <NavigationMenu viewport={false} className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:!bg-transparent hover:!underline focus:!bg-transparent data-popup-open:!bg-transparent data-open:!bg-transparent underline-offset-4">
            Loans
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-1/2 -translate-x-1/4">
            <ul className="grid w-[560px] grid-cols-2 gap-1 p-2">
              {loanLinks.map((item) => (
                <li key={item.href}>
                  <MenuItemLink {...item} />
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:!bg-transparent hover:!underline focus:!bg-transparent data-popup-open:!bg-transparent data-open:!bg-transparent underline-offset-4">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-1/2 -translate-x-1/4">
            <ul className="grid w-[560px] grid-cols-2 gap-1 p-2">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <MenuItemLink {...item} />
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {pageLinks.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle({
                className: "hover:!bg-transparent hover:!underline focus:!bg-transparent underline-offset-4",
              })}
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ApplyButton() {
  return (
    <Button variant="hero" size="sm" asChild className="px-6">
      <Link href="#apply">
        Apply now
        <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Button>
  );
}

function MobileAccordion({
  label,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: MenuLink[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-border py-1">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-md px-2 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        <span>{label}</span>
        <ChevronRight className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-90")} />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 pl-2 pt-1">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-center gap-3 rounded-md px-2 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                <item.icon className="h-4 w-4" />
              </span>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<"loans" | "resources" | null>(null);

  useEffect(() => {
    const header1 = document.getElementById("header1");
    const getThreshold = () => (header1 ? header1.offsetTop + header1.offsetHeight : 100);
    const handleScroll = () => setScrolled(window.scrollY > getThreshold());
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileAccordion(null);
  };

  return (
    <>
      {/* Header 1: transparent overlay on the Hero, desktop only */}
      <header id="header1" className="absolute inset-x-0 top-3 z-40 hidden md:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <Logo />
          <DesktopNavLinks />
          <ApplyButton />
        </div>
      </header>

      {/* Header 2: shrunk floating glass pill, desktop only, after scrolling */}
      <header
        className={`fixed inset-x-0 top-4 z-50 hidden justify-center transition-transform duration-300 md:flex ${
          scrolled ? "visible translate-y-0" : "invisible pointer-events-none -translate-y-full"
        }`}
      >
        <div className="w-full max-w-5xl rounded-full border border-border bg-background/70 shadow-soft backdrop-blur-md">
          <div className="flex items-center justify-between px-6 py-3">
            <Logo className="h-8 w-auto" />
            <DesktopNavLinks />
            <ApplyButton />
          </div>
        </div>
      </header>

      {/* Header 3: mobile only, always fixed */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 w-full transition-all md:hidden",
          open
            ? "border-none bg-background shadow-none"
            : scrolled
              ? "border-b border-border bg-background shadow-soft"
              : "border-b border-transparent bg-transparent shadow-none"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Logo />
          <button
            type="button"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => (open ? closeMobileMenu() : setOpen(true))}
            className="grid h-9 w-9 place-items-center text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Backdrop below the header */}
        <div
          className={cn(
            "fixed inset-x-0 bottom-0 top-[60px] z-40 bg-foreground/20 backdrop-blur-sm md:hidden",
            open ? "block" : "hidden"
          )}
          onClick={closeMobileMenu}
        />

        {/* Accordion dropdown anchored right below the header */}
        <div
          className={cn(
            "absolute inset-x-0 top-full z-50 -mt-px overflow-hidden border-b border-border bg-card shadow-card transition-all duration-300 ease-in-out",
            open ? "max-h-[85vh] opacity-100" : "pointer-events-none max-h-0 opacity-0"
          )}
        >
          <nav className="max-h-[85vh] overflow-y-auto overscroll-contain p-4">
            <div className="space-y-1">
              <MobileAccordion
                label="Loans"
                items={loanLinks}
                isOpen={mobileAccordion === "loans"}
                onToggle={() => setMobileAccordion((prev) => (prev === "loans" ? null : "loans"))}
                onNavigate={closeMobileMenu}
              />
              <MobileAccordion
                label="Resources"
                items={resourceLinks}
                isOpen={mobileAccordion === "resources"}
                onToggle={() => setMobileAccordion((prev) => (prev === "resources" ? null : "resources"))}
                onNavigate={closeMobileMenu}
              />

              {pageLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block rounded-md border-b border-border px-2 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}

              <div className="pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link href="#apply" onClick={closeMobileMenu}>
                    Apply now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
