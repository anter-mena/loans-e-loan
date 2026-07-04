import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
}

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 py-24 text-center">
      <h1 className="font-display text-4xl tracking-tight text-foreground">404</h1>
      <p className="text-muted-foreground">Could not find the requested page.</p>
      <Link href="/" className="underline underline-offset-4">
        Return home
      </Link>
    </main>
  )
}
