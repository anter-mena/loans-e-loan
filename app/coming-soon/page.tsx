import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This page is on its way.",
}

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <h1 className="font-display text-3xl tracking-tight text-foreground">Coming Soon</h1>
    </main>
  )
}
