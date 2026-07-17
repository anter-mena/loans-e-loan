"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

import { PixelTransition } from "@/components/ui/pixel-transition"
import { cn } from "@/lib/utils"

export function Chatbot() {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 1200)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      className={cn(
        "pointer-events-none fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      )}
    >
      {open && (
        <div className="pointer-events-auto w-80 overflow-hidden border border-border bg-card/95 shadow-[0_20px_44px_-20px_hsl(var(--foreground)/0.45)] backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-border bg-primary px-4 py-3 text-primary-foreground">
            <span className="text-sm font-medium">Chat with us</span>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
              <X className="size-4" />
            </button>
          </div>
          <div className="px-4 py-4">
            <p className="text-sm text-muted-foreground">
              Live chat is coming soon. In the meantime, reach out via our{" "}
              <Link
                href="/contact"
                className="underline underline-offset-4 hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        className={cn(
          "group pointer-events-auto relative grid size-11 place-items-center overflow-hidden border border-primary shadow-[0_8px_24px_hsl(var(--foreground)/0.16)] transition-transform duration-300 active:scale-95 sm:size-12",
          open && "rotate-90"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((prev) => !prev)}
      >
        <PixelTransition
          active={hovered}
          gridSize={4}
          animationStepDuration={0.3}
          exitAnimationStepDuration={0.3}
          pixelColor="hsl(var(--accent))"
          exitPixelColor="hsl(var(--primary))"
          className="absolute inset-0"
          firstContent={<span className="block size-full bg-primary" />}
          secondContent={<span className="block size-full bg-accent" />}
        />
        {open ? (
          <X
            className={cn(
              "relative z-20 size-5 transition-colors duration-200",
              hovered ? "text-accent-foreground" : "text-primary-foreground"
            )}
          />
        ) : (
          <MessageCircle
            className={cn(
              "relative z-20 size-5 transition-colors duration-200",
              hovered ? "text-accent-foreground" : "text-primary-foreground"
            )}
          />
        )}
      </button>
    </div>
  )
}
