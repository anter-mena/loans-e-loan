"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BookOpenIcon,
  CalculatorIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CircleDollarSignIcon,
  FileTextIcon,
  Grid3x3Icon,
  HelpCircleIcon,
  InfoIcon,
  ListIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  NewspaperIcon,
  ScaleIcon,
  ShieldCheckIcon,
  TargetIcon,
  XIcon,
  type LucideIcon,
} from "lucide-react";

import { PixelTransition } from "@/components/ui/pixel-transition";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
};

type NavMenu = {
  label: string;
  href: string;
  icon: LucideIcon;
  items: NavItem[];
};

const loanItems: NavItem[] = [
  { label: "By Amount", href: "/loans/by-amount", icon: CircleDollarSignIcon, description: "$300 to $5,000 loans" },
  { label: "By Purpose", href: "/loans/by-purpose", icon: TargetIcon, description: "Debt, repairs, bills, and emergencies" },
  { label: "By Credit Score", href: "/loans/by-credit-score", icon: ShieldCheckIcon, description: "Options by credit range" },
  { label: "By Type", href: "/loans/by-type", icon: FileTextIcon, description: "Personal, emergency, same-day loans" },
  { label: "By Location", href: "/loans/by-location", icon: MapPinIcon, description: "Loans across Canada" },
  { label: "All Loan Options", href: "/loans", icon: ListIcon, description: "Browse the full loan hub" },
];

const resourceItems: NavItem[] = [
  { label: "Tools", href: "/resources/tools", icon: CalculatorIcon, description: "Calculators and planning tools" },
  { label: "Comparisons", href: "/resources/comparisons", icon: ScaleIcon, description: "Compare borrowing options" },
  { label: "Guides", href: "/resources/guides", icon: BookOpenIcon, description: "Borrowing and repayment guides" },
  { label: "FAQ", href: "/resources/faq", icon: HelpCircleIcon, description: "Common questions answered" },
  { label: "Blog", href: "/blog", icon: FileTextIcon, description: "Loan tips and borrower insights" },
  { label: "News", href: "/news", icon: NewspaperIcon, description: "Rate updates and lending news" },
  { label: "All Resources", href: "/resources", icon: Grid3x3Icon, description: "Browse the full resource hub" },
];

const navMenus: NavMenu[] = [
  { label: "Loans", href: "/loans", icon: CircleDollarSignIcon, items: loanItems },
  { label: "Resources", href: "/resources", icon: BookOpenIcon, items: resourceItems },
];

const primaryLinks: NavItem[] = [
  { label: "About", href: "/about", icon: InfoIcon },
  { label: "Contact", href: "/contact", icon: MailIcon },
];

function NavPixelApply({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  const [active, setActive] = useState(false);

  return (
    <Link
      href="/application-form"
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={cn(
        "relative inline-flex h-8 items-center gap-1.5 overflow-hidden border border-primary px-3.5 text-[13px] font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
    >
      <PixelTransition
        active={active}
        columns={8}
        rows={3}
        animationStepDuration={0.3}
        exitAnimationStepDuration={0.3}
        pixelColor="hsl(var(--accent))"
        exitPixelColor="hsl(var(--primary))"
        className="absolute inset-0"
        firstContent={<span className="block size-full bg-primary" />}
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span
        className={cn(
          "relative z-20 transition-colors duration-200",
          active ? "text-accent-foreground" : "text-primary-foreground"
        )}
      >
        Apply now
      </span>
      <ChevronRightIcon
        className={cn(
          "relative z-20 size-3.5 transition-colors duration-200",
          active ? "text-accent-foreground" : "text-primary-foreground"
        )}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const mobileMenuId = useId();
  const navShellRef = useRef<HTMLDivElement>(null);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!activeMenu) return;

    function handlePointerDown(event: PointerEvent) {
      if (!navShellRef.current?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeMenu]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        mobileTriggerRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopMediaQuery = window.matchMedia("(min-width: 1280px)");

    function closeMenuAtDesktopWidth(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    desktopMediaQuery.addEventListener("change", closeMenuAtDesktopWidth);

    return () => {
      desktopMediaQuery.removeEventListener("change", closeMenuAtDesktopWidth);
    };
  }, []);

  function closeMobileMenu() {
    setActiveMenu(null);
    setIsMenuOpen(false);
  }

  function closeAllMenus() {
    setActiveMenu(null);
    closeMobileMenu();
  }

  return (
    <header className="sticky top-0 z-50 isolate border-b border-border bg-background xl:bg-background/70 xl:backdrop-blur-xl supports-[backdrop-filter]:xl:bg-background/55">
      {isMenuOpen ? (
        <button
          type="button"
          tabIndex={-1}
          className="absolute left-0 right-0 top-full h-[calc(100dvh-3.5rem)] bg-foreground/25 backdrop-blur-sm focus:outline-none xl:hidden"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
        />
      ) : null}

      <div ref={navShellRef} className="relative mx-auto w-full max-w-[1520px] bg-transparent">
        <div className="relative hidden h-14 items-center xl:flex">
          <Link
            href="/"
            className="absolute left-0 top-1/2 flex w-fit -translate-y-1/2 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="E-Loan home"
            onClick={() => setActiveMenu(null)}
          >
            <Image src="/logo.svg" alt="E-Loan" width={150} height={32} className="h-8 w-auto" priority />
          </Link>

          <nav
            className="absolute left-1/2 top-0 flex h-full -translate-x-1/2 items-center gap-8"
            aria-label="Primary navigation"
          >
            {navMenus.map((menu) => {
              const isOpen = activeMenu === menu.label;

              return (
                <div
                  key={menu.label}
                  className="relative h-full"
                  onMouseEnter={() => setActiveMenu(menu.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                  onFocusCapture={() => setActiveMenu(menu.label)}
                  onBlurCapture={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      setActiveMenu(null);
                    }
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex h-full items-center gap-1 text-sm font-normal text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={() => setActiveMenu(isOpen ? null : menu.label)}
                  >
                    {menu.label}
                    <ChevronDownIcon className={cn("size-3 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                  </button>

                  {isOpen ? (
                    <div className="absolute left-[-16px] top-full z-50 w-[34rem] border border-border bg-background py-3 shadow-[0_18px_50px_-22px_hsl(var(--foreground)/0.45),inset_0_1px_0_hsl(var(--card)/0.85)]">
                      <Link
                        href={menu.href}
                        className="group/nav-all mx-3 mb-2 flex h-9 items-center justify-between border border-border bg-background px-3 text-sm font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() => setActiveMenu(null)}
                      >
                        <span className="-mx-1 inline-flex justify-self-start px-1 underline-offset-4 transition-colors group-hover/nav-all:bg-accent group-hover/nav-all:text-accent-foreground group-hover/nav-all:underline">
                          All {menu.label.toLowerCase()}
                          <ArrowUpRightIcon
                            aria-hidden
                            className="ml-1 size-3 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover/nav-all:translate-x-0 group-hover/nav-all:translate-y-0 group-hover/nav-all:opacity-100"
                          />
                        </span>
                        <ArrowRightIcon className="size-3.5" aria-hidden="true" />
                      </Link>

                      <div className="grid grid-cols-2">
                        {menu.items.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group/nav-item flex min-h-12 items-start gap-3 px-4 py-2.5 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              onClick={() => setActiveMenu(null)}
                            >
                              {Icon ? (
                                <Icon
                                  className="mt-0.5 size-3.5 shrink-0 text-muted-foreground"
                                  strokeWidth={1.5}
                                  aria-hidden="true"
                                />
                              ) : null}
                              <span className="grid justify-items-start gap-0.5">
                                <span className="-mx-1 inline-flex justify-self-start px-1 underline-offset-4 transition-colors group-hover/nav-item:bg-accent group-hover/nav-item:text-accent-foreground group-hover/nav-item:underline">
                                  {item.label}
                                  <ArrowUpRightIcon
                                    aria-hidden
                                    className="ml-1 size-3 translate-x-[-2px] translate-y-0.5 opacity-0 transition-all duration-200 ease-out group-hover/nav-item:translate-x-0 group-hover/nav-item:translate-y-0 group-hover/nav-item:opacity-100"
                                  />
                                </span>
                                {item.description ? (
                                  <span className="text-xs leading-snug text-muted-foreground">{item.description}</span>
                                ) : null}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}

            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex h-full items-center text-sm font-normal text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                onClick={() => setActiveMenu(null)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center">
            <NavPixelApply />
          </div>
        </div>

        <div className="flex h-14 items-center justify-between px-3.5 xl:hidden">
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="E-Loan home"
            onClick={closeAllMenus}
          >
            <Image src="/logo.svg" alt="E-Loan" width={136} height={30} className="h-7 w-auto" priority />
          </Link>

          <button
            ref={mobileTriggerRef}
            type="button"
            className="grid size-9 shrink-0 place-items-center border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-controls={mobileMenuId}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => {
              setActiveMenu(null);
              setIsMenuOpen((isOpen) => !isOpen);
            }}
          >
            {isMenuOpen ? <XIcon className="size-5" aria-hidden="true" /> : <MenuIcon className="size-5" aria-hidden="true" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div
            id={mobileMenuId}
            className="absolute -left-px -right-px top-full max-h-[calc(100dvh-3.5rem)] overflow-y-auto overscroll-contain border border-border bg-white px-6 pb-4 xl:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navMenus.map((group) => {
                const isOpen = activeMenu === group.label;
                const panelId = `${mobileMenuId}-${group.label.toLowerCase()}`;
                const GroupIcon = group.icon;

                return (
                  <div key={group.label} className="border-b border-border py-3">
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-between text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-controls={panelId}
                      aria-expanded={isOpen}
                      onClick={() => setActiveMenu(isOpen ? null : group.label)}
                    >
                      <span className="flex items-center gap-3">
                        <GroupIcon className="size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                        {group.label}
                      </span>
                      <ChevronDownIcon
                        className={cn("size-4 transition-transform", isOpen && "rotate-180")}
                        aria-hidden="true"
                      />
                    </button>

                    {isOpen ? (
                      <div id={panelId} className="mt-1 grid gap-1">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;

                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex min-h-10 items-center justify-between px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                              onClick={closeMobileMenu}
                            >
                              <span className="flex items-center gap-3">
                                {ItemIcon ? (
                                  <ItemIcon className="size-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                                ) : null}
                                {item.label}
                              </span>
                              <ChevronRightIcon className="size-3.5" aria-hidden="true" />
                            </Link>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                );
              })}

              {primaryLinks.map((item) => {
                const ItemIcon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex h-16 items-center border-b border-border text-base font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={closeMobileMenu}
                  >
                    <span className="flex items-center gap-3">
                      {ItemIcon ? (
                        <ItemIcon className="size-4 text-primary" strokeWidth={1.75} aria-hidden="true" />
                      ) : null}
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 grid gap-3">
              <NavPixelApply className="h-12 justify-center text-base" onClick={closeMobileMenu} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
