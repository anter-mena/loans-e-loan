# UI/UX & SEO Working Rules

These rules are standing instructions for anyone (human or agent) working on this codebase.
They apply to every page, component, and review — not just new features.

## 1. Mobile-first, always

- Design and implement for the smallest viewport first (375px), then progressively enhance
  for `sm` / `md` / `lg` / `xl`. Never design desktop-first and shrink it down.
- Before marking any UI task done, check it at 375px width — not just resize the browser,
  actually look at it. Desktop is the enhancement, not the baseline.
- Touch targets must be ≥44px. Never gate a critical action (nav, CTA, form control) behind
  hover-only interaction — hover is a bonus for pointer devices, not a requirement.
- Stack/reflow content sensibly on small screens: no fixed multi-column grids that force
  horizontal scroll, no text that requires pinch-zoom, no dropdown menus that overflow the
  viewport.
- Sticky/fixed elements (nav, banners, chat widgets, cookie banners) must be audited together
  on mobile — they stack vertically and can eat most of a small screen's viewport height.

## 2. Every UI/UX response answers from two expert lenses

When proposing, reviewing, or explaining UI/UX work, explicitly cover both:

**UI/UX expert lens** — visual hierarchy, usability, accessibility (contrast, focus states,
keyboard nav, reduced-motion), interaction design, conversion friction, information
architecture, consistency of the design system.

**SEO expert lens** — semantic HTML, metadata correctness, crawlability, internal linking
health, Core Web Vitals impact, structured data opportunities, content/heading structure.

Don't skip the SEO half just because a change looks purely visual — layout and markup
decisions (e.g. using a `<div>` instead of a `<button>`, image dimensions, heading order,
client-vs-server component choice) have direct SEO consequences in this Next.js app.

If a change is trivial and clearly has no SEO surface (e.g. a color tweak), it's fine to note
that briefly instead of forcing a full second section — but say so explicitly rather than
silently omitting it.

## 3. SEO checklist specific to this project (Next.js App Router)

- One `<h1>` per page; logical heading order after that (no skipping levels for style reasons).
- Every route should export real `metadata` (title, description, OG image, canonical) —
  see [lib/site.ts](lib/site.ts) for shared site metadata helpers.
- All images need meaningful `alt` text (empty `alt=""` only for decorative/`aria-hidden` visuals).
- Use semantic landmarks (`nav`, `main`, `header`, `footer`, `section`) instead of generic `div`
  soup — screen readers and crawlers both rely on this.
- **Internal links must resolve.** `sitemap.ts`, `robots.ts`, and the Navbar's linked routes
  must stay in sync with what actually exists under `app/`. Broken internal links (like the
  current `/loans/*` and `/resources/*` nav entries pointing to non-existent routes) hurt
  crawl budget and rankings, not just UX — treat this as an SEO bug, not only a UX one.
- Watch Core Web Vitals: avoid layout shift (always set image dimensions / use blur
  placeholders), lazy-load below-the-fold sections, keep `"use client"` components as small
  and low as possible in the tree to limit hydration cost.
- Add structured data (JSON-LD) where it's free value: `FAQPage` schema for
  [components/landing/FAQ.tsx](components/landing/FAQ.tsx), `Organization`/`FinancialProduct`
  schema for the homepage.
- Mobile usability is a direct Google ranking factor (mobile-first indexing) — rule #1 above
  is also an SEO rule, not just a UX one.
