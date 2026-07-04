import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about who we are and how we help you find the right loan.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <h1 className="font-display text-3xl tracking-tight text-foreground">About</h1>
    </main>
  )
}
