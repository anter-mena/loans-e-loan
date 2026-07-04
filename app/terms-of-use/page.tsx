import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing your use of our website and services.",
}

export default function TermsOfUsePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-24 text-center">
      <h1 className="font-display text-3xl tracking-tight text-foreground">Terms of Use</h1>
    </main>
  )
}
