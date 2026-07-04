"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 overflow-hidden rounded-lg border border-border bg-card shadow-lg">
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

      <Button
        size="icon-lg"
        className="rounded-full shadow-lg"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? <X className="size-5" /> : <MessageCircle className="size-5" />}
      </Button>
    </div>
  )
}
