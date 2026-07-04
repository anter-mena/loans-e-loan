"use client"

import { useSyncExternalStore } from "react"
import Link from "next/link"

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

export function CookieBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (consent) return null

  const decide = (choice: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, choice)
    window.dispatchEvent(new Event(EVENT_NAME))
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom border-t border-border bg-background p-3 shadow-lg duration-500 sm:p-4"
      role="region"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-3 lg:flex-row lg:items-center lg:gap-4">
          <div className="flex-1 pr-4">
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              We use cookies and similar technologies to improve your experience, analyze site
              traffic, and for marketing purposes.{" "}
              <Link
                href="/privacy-policy"
                className="font-medium text-primary hover:underline"
                title="Read our Privacy Policy"
              >
                Learn more
                <span className="sr-only"> about our Privacy Policy</span>
              </Link>
            </p>
          </div>

          <div className="flex w-full items-center justify-end gap-2 lg:w-auto sm:gap-3">
            <button
              type="button"
              onClick={() => decide("declined")}
              className="whitespace-nowrap rounded-lg border border-border bg-transparent px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-muted sm:px-4 sm:text-sm"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => decide("accepted")}
              className="whitespace-nowrap rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:bg-primary/90 sm:px-4 sm:text-sm"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
