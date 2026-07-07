"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  DollarSign,
  Target,
  CreditCard,
  FileText,
  MapPin,
  List,
  Calculator,
  Scale,
  BookOpen,
  HelpCircle,
  Grid3x3,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

type NavItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  to: string;
};

const loansDropdownItems: NavItem[] = [
  { icon: DollarSign, title: "By Amount", description: "$300 - $5,000 loans", to: "/loans/by-amount" },
  { icon: Target, title: "By Purpose", description: "Debt consolidation, emergencies & more", to: "/loans/by-purpose" },
  { icon: CreditCard, title: "By Credit Score", description: "Find loans for your credit range", to: "/loans/by-credit-score" },
  { icon: FileText, title: "By Type", description: "Personal, emergency, same-day loans", to: "/loans/by-type" },
  { icon: MapPin, title: "By Location", description: "Loans in Canada", to: "/loans/by-location" },
  { icon: List, title: "All Loan Options", description: "Browse all available loans", to: "/loans" },
];

const resourcesDropdownItems: NavItem[] = [
  { icon: Calculator, title: "Tools", description: "Calculators & helpful tools", to: "/resources/tools" },
  { icon: Scale, title: "Comparisons", description: "Compare borrowing options", to: "/resources/comparisons" },
  { icon: BookOpen, title: "Guides", description: "Step-by-step loan guides", to: "/resources/guides" },
  { icon: HelpCircle, title: "FAQ", description: "Common questions answered", to: "/resources/faq" },
  { icon: Grid3x3, title: "All Resources", description: "Browse all tools & guides", to: "/resources" },
];

function DesktopDropdown({
  label,
  items,
  isActive,
  onEnter,
  onLeave,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: NavItem[];
  isActive: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggle();
        }}
        aria-haspopup="true"
        aria-expanded={isActive}
        className={`flex items-center gap-1 py-2 text-sm font-medium outline-none transition-colors focus-visible:text-foreground ${
          isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isActive ? "rotate-180" : ""}`} />
      </button>

      <div
        className={`absolute left-0 top-full mt-2 w-80 rounded-xl border border-border bg-card shadow-card transition-all duration-300 ease-out ${
          isActive
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <div className="p-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                href={item.to}
                onClick={onNavigate}
                className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-secondary/60"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-medium text-foreground">{item.title}</span>
                  <span className="mt-0.5 text-xs text-muted-foreground">{item.description}</span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
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
  items: NavItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-t border-border py-2 first:border-t-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
      >
        <span>{label}</span>
        <ChevronRight className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`} />
      </button>

      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mt-1 space-y-1 pl-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                href={item.to}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordions, setMobileAccordions] = useState<Record<string, boolean>>({});
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileAccordions((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
      [section]: !prev[section],
    }));
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileAccordions({});
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo — left */}
          <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-105">
            <Image src="/logo.svg" alt="E-Loan" width={150} height={32} className="h-8 w-auto" priority />
          </Link>

          {/* Desktop nav — center */}
          <nav className="mx-8 hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-8">
              <DesktopDropdown
                label="Loans"
                items={loansDropdownItems}
                isActive={activeDropdown === "loans"}
                onEnter={() => handleDropdownEnter("loans")}
                onLeave={handleDropdownLeave}
                onToggle={() => setActiveDropdown((prev) => (prev === "loans" ? null : "loans"))}
                onNavigate={() => setActiveDropdown(null)}
              />
              <DesktopDropdown
                label="Resources"
                items={resourcesDropdownItems}
                isActive={activeDropdown === "resources"}
                onEnter={() => handleDropdownEnter("resources")}
                onLeave={handleDropdownLeave}
                onToggle={() => setActiveDropdown((prev) => (prev === "resources" ? null : "resources"))}
                onNavigate={() => setActiveDropdown(null)}
              />
              <Link href="/about" className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link href="/contact" className="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>
          </nav>

          {/* Right — CTA + mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Button variant="hero" size="sm" asChild className="hidden px-4 lg:inline-flex">
              <Link href="#apply">
                Apply now
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <button
              type="button"
              onClick={() => (isMenuOpen ? closeMobileMenu() : setIsMenuOpen(true))}
              className="grid h-9 w-9 place-items-center text-muted-foreground lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`absolute left-0 right-0 top-full border-b border-border bg-card shadow-card transition-all duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "max-h-[80vh] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-4 overflow-hidden opacity-0"
        }`}
      >
        <nav className="max-h-[80vh] overflow-y-auto overscroll-contain p-4">
          <div className="space-y-1">
            <MobileAccordion
              label="Loans"
              items={loansDropdownItems}
              isOpen={!!mobileAccordions.loans}
              onToggle={() => toggleMobileAccordion("loans")}
              onNavigate={closeMobileMenu}
            />
            <MobileAccordion
              label="Resources"
              items={resourcesDropdownItems}
              isOpen={!!mobileAccordions.resources}
              onToggle={() => toggleMobileAccordion("resources")}
              onNavigate={closeMobileMenu}
            />

            <div className="border-t border-border py-2">
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                About Us
              </Link>
            </div>
            <div className="border-t border-border py-2">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block rounded-md px-2 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Contact
              </Link>
            </div>

            <div className="border-t border-border pt-4">
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
  );
}
