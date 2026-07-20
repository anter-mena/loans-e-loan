import type { Metadata } from "next";

import { Chatbot } from "@/components/layout/chatbot";
import { CookieBanner } from "@/components/layout/cookie-banner";
import { CountdownBanner } from "@/components/layout/countdown-banner";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { NotFoundActions, NotFoundQuickLinks } from "@/components/not-found/not-found-interactions";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export const metadata: Metadata = {
  title: "Page Not Found | E-Loan",
  description: "The page you are looking for does not exist or has moved.",
};

export default function NotFound() {
  return (
    <>
      <CountdownBanner />
      <div className="relative flex flex-1 flex-col">
        <Navbar />

        <main className="bg-background">
          <section className="mx-auto w-full max-w-[1000px] border-x border-border">
            <div className="flex items-center justify-between border-b border-border px-6 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:px-8">
              <span>System notice</span>
              <span className="bg-accent px-2 py-1 text-accent-foreground">Error 404</span>
            </div>

            <div className="grid border-b border-primary lg:grid-cols-[0.62fr_0.38fr]">
              <div className="flex min-h-[430px] flex-col justify-center px-6 py-14 md:px-10 md:py-20">
                <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  <span aria-hidden className="h-4 w-px bg-accent" />
                  Route unavailable
                </p>
                <h1 className="mt-5 max-w-2xl font-display text-5xl font-semibold leading-[0.94] tracking-tight text-foreground sm:text-6xl md:text-7xl">
                  This page missed its destination.
                </h1>
                <p className="mt-6 max-w-xl text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                  The address may be incorrect, or the page may have moved. Your next loan option is
                  still only a click away.
                </p>

                <NotFoundActions />
              </div>

              <aside className="relative min-h-[300px] overflow-hidden border-t border-primary bg-primary text-primary-foreground lg:min-h-0 lg:border-l lg:border-t-0">
                <FlickeringGrid
                  aria-hidden
                  className="absolute inset-0"
                  squareSize={3}
                  gridGap={2}
                  flickerChance={0.08}
                  maxOpacity={0.2}
                  color="hsl(var(--primary-foreground))"
                />
                <div className="relative grid h-full min-h-[360px] grid-rows-[auto_1fr_auto] p-6 md:p-8 lg:min-h-0">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/55">
                    Page not found
                  </p>
                  <p className="flex w-full items-center justify-center py-8 font-display text-[8rem] font-black leading-none tracking-[-0.08em] text-accent sm:text-[10rem] lg:text-[9rem]">
                    404
                  </p>
                  <div className="flex items-center gap-3 border-t border-primary-foreground/15 pt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-primary-foreground/60">
                    <span aria-hidden className="size-2 bg-accent" />
                    Safe route recovery
                  </div>
                </div>
              </aside>
            </div>

            <section aria-labelledby="helpful-routes-heading">
              <div className="border-b border-border px-6 py-5 md:px-8">
                <h2
                  id="helpful-routes-heading"
                  className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground"
                >
                  Helpful routes
                </h2>
              </div>
              <NotFoundQuickLinks />
            </section>
          </section>
        </main>
      </div>
      <Footer />
      <Chatbot />
      <CookieBanner />
    </>
  );
}
