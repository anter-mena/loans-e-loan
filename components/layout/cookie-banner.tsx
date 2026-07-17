"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { PixelTransition } from "@/components/ui/pixel-transition"

const STORAGE_KEY = "e-loan-cookie-consent"
const EVENT_NAME = "cookie-consent-change"

function subscribe(callback: () => void) {
  window.addEventListener(EVENT_NAME, callback)
  return () => window.removeEventListener(EVENT_NAME, callback)
}

function getSnapshot() {
  return localStorage.getItem(STORAGE_KEY)
}

function getServerSnapshot() {
  return null
}

function CookiePixelButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: string
  onClick: () => void
  variant?: "primary" | "secondary"
}) {
  const [active, setActive] = useState(false)
  const isPrimary = variant === "primary"

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      className={`relative h-9 overflow-hidden border px-4 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        isPrimary
          ? "border-primary text-primary-foreground"
          : "border-border text-foreground"
      }`}
    >
      <PixelTransition
        active={active}
        columns={8}
        rows={3}
        animationStepDuration={0.3}
        exitAnimationStepDuration={0.3}
        pixelColor="hsl(var(--accent))"
        exitPixelColor={isPrimary ? "hsl(var(--primary))" : "hsl(var(--background))"}
        className="absolute inset-0"
        firstContent={
          <span className={`block size-full ${isPrimary ? "bg-primary" : "bg-background"}`} />
        }
        secondContent={<span className="block size-full bg-accent" />}
      />
      <span
        className={`relative z-20 transition-colors duration-200 ${
          active ? "text-accent-foreground" : isPrimary ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {children}
      </span>
    </button>
  )
}

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (consent) return null

  const decide = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice)
    window.dispatchEvent(new Event(EVENT_NAME))
  }

  return (
    <div
      className="fixed bottom-4 left-4 z-[10000] w-[calc(100%-2rem)] max-w-[620px] animate-in slide-in-from-bottom border border-border bg-background shadow-[0_18px_48px_-24px_hsl(var(--foreground)/0.38)] duration-500 sm:bottom-6 sm:left-6"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="flex flex-col gap-4 p-4 sm:p-5">
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          We use cookies to improve your experience, analyze traffic, and support marketing.{" "}
          <Link
            href="/privacy-policy"
            className="font-bold text-foreground underline-offset-4 hover:bg-accent hover:text-accent-foreground hover:underline"
            title="Read our Privacy Policy"
          >
            Learn more
            <span className="sr-only"> about our Privacy Policy</span>
          </Link>
        </p>

        <div className="flex items-center justify-end gap-2">
          <CookiePixelButton variant="secondary" onClick={() => decide("declined")}>
            Decline
          </CookiePixelButton>
          <CookiePixelButton onClick={() => decide("accepted")}>
            Accept All
          </CookiePixelButton>
        </div>
      </div>
    </div>
  )
}
