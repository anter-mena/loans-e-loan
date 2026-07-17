"use client"

import { useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { ArrowRight, Clock, X, Zap } from "lucide-react"

type Countdown = {
  isFriday: boolean
  hours: number
  minutes: number
  seconds: number
}

const IDLE: Countdown = { isFriday: false, hours: 0, minutes: 0, seconds: 0 }

function computeCountdown(): Countdown {
  const now = new Date()
  if (now.getDay() !== 5) return IDLE

  const endOfFriday = new Date(now)
  endOfFriday.setHours(23, 59, 59, 999)
  const diff = endOfFriday.getTime() - now.getTime()
  if (diff <= 0) return IDLE

  return {
    isFriday: true,
    hours: Math.floor(diff / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1000),
  }
}

let cachedSnapshot: Countdown = IDLE

function getSnapshot(): Countdown {
  const next = computeCountdown()
  if (
    next.isFriday !== cachedSnapshot.isFriday ||
    next.hours !== cachedSnapshot.hours ||
    next.minutes !== cachedSnapshot.minutes ||
    next.seconds !== cachedSnapshot.seconds
  ) {
    cachedSnapshot = next
  }
  return cachedSnapshot
}

function subscribe(callback: () => void) {
  const interval = setInterval(callback, 1000)
  return () => clearInterval(interval)
}

function getServerSnapshot() {
  return IDLE
}

const formatNumber = (num: number) => num.toString().padStart(2, "0")

export function CountdownBanner() {
  const [dismissed, setDismissed] = useState(false)
  const { isFriday, hours, minutes, seconds } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  )

  if (!isFriday || dismissed) return null

  return (
    <div className="border-y border-primary bg-primary px-3 py-2 text-primary-foreground sm:px-4">
      <div className="relative mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-2 pr-10 text-xs sm:flex-row sm:gap-5 sm:text-sm">
        <Link
          href="/apply"
          className="group inline-flex items-center gap-2 font-bold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="inline-flex h-5 items-center bg-accent px-2 font-mono text-[10px] font-black uppercase tracking-normal text-accent-foreground">
            Friday
          </span>
          <Zap className="h-3.5 w-3.5 text-accent" />
          <span>Apply now for Friday deposit</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <div className="hidden h-4 w-px bg-primary-foreground/20 sm:block" />

        <div className="flex items-center gap-2">
          <Clock className="h-3.5 w-3.5 text-accent" />
          <span className="font-medium text-primary-foreground/70">
            <span className="hidden sm:inline">Time left</span>
            <span className="sm:hidden">Time</span>
          </span>

          <div className="flex items-center gap-1 font-mono font-black">
            <span className="bg-accent px-1.5 py-0.5 text-xs text-accent-foreground sm:text-sm">
              {formatNumber(hours)}
            </span>
            <span className="text-xs text-primary-foreground/55 sm:text-sm">:</span>
            <span className="bg-accent px-1.5 py-0.5 text-xs text-accent-foreground sm:text-sm">
              {formatNumber(minutes)}
            </span>
            <span className="text-xs text-primary-foreground/55 sm:text-sm">:</span>
            <span className="bg-accent px-1.5 py-0.5 text-xs text-accent-foreground sm:text-sm">
              {formatNumber(seconds)}
            </span>
          </div>
        </div>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => setDismissed(true)}
          className="absolute right-0 top-1/2 grid size-7 -translate-y-1/2 place-items-center border border-primary-foreground/15 text-primary-foreground/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
