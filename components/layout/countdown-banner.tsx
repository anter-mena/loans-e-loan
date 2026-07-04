"use client"

import { useState, useSyncExternalStore } from "react"
import { Clock, X, Zap } from "lucide-react"

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
    <div className="relative bg-primary px-3 py-2 text-primary-foreground sm:px-4 sm:py-2.5">
      <div className="flex flex-col items-center justify-center gap-2 text-xs sm:flex-row sm:gap-4 sm:text-sm">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="font-medium">Apply now for Friday deposit!</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">Time left:</span>
          <span className="sm:hidden">Time:</span>

          <div className="flex items-center gap-0.5 font-mono font-bold sm:gap-1">
            <span className="rounded bg-primary-foreground/20 px-1 py-0.5 text-xs sm:px-1.5 sm:text-sm">
              {formatNumber(hours)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span className="rounded bg-primary-foreground/20 px-1 py-0.5 text-xs sm:px-1.5 sm:text-sm">
              {formatNumber(minutes)}
            </span>
            <span className="text-xs sm:text-sm">:</span>
            <span className="rounded bg-primary-foreground/20 px-1 py-0.5 text-xs sm:px-1.5 sm:text-sm">
              {formatNumber(seconds)}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 transition-colors hover:bg-primary-foreground/10 sm:right-4"
      >
        <X className="h-3 w-3 sm:h-4 sm:w-4" />
      </button>
    </div>
  )
}
