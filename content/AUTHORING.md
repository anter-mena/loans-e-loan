# Blog & News Authoring Guide (MDX)

How to write a post for this site. One `.mdx` file = one fully-built, SEO-ready page
(route, listing card, sitemap entry, RSS item, social image, structured data, and a
table of contents are all generated automatically).

---

## 1. How to publish

1. Create a file in the right folder:
   - **Blog** → `content/blog/your-slug.mdx`
   - **News** → `content/news/your-slug.mdx`
2. The **filename becomes the URL**: `content/blog/best-loan-tips.mdx` → `/blog/best-loan-tips`.
   Use lowercase words separated by hyphens. No spaces, no capitals, no dates in the slug.
3. Commit and push. The site rebuilds and the post is live in ~1–2 minutes.
   (Locally: run `npm run build`.)

There is **no code to touch** — ever. Just the `.mdx` file.

---

## 2. Frontmatter (the settings block)

Every file **must** begin with a `---` block. This is where all "post settings" live.

```mdx
---
title: "Your Headline — Keep the Main Keyword Near the Front"   # REQUIRED
description: "A 120–160 character summary. This is your Google snippet + social text." # REQUIRED
date: "2026-07-08"            # REQUIRED — publish date, format YYYY-MM-DD
updated: "2026-07-08"         # optional — last-edited date (shows "Updated …")
author: "365loan Editorial Team"   # optional — defaults to the site's editorial byline
category: "Guides"            # optional — shows on the card (e.g. Guides, Rates, Tips, Regulation)
image: "https://…/cover.jpg"  # optional — cover image for the listing card + social share (OG)
keywords:                     # optional — 4–8 target phrases
  - "primary keyword"
  - "secondary keyword"
faqs:                         # optional — renders an FAQ section + FAQ rich-result schema
  - question: "A real question a reader would ask?"
    answer: "A clear, self-contained 1–3 sentence answer."
  - question: "Another question?"
    answer: "Another answer."
related:                      # optional — internal links (SEO) + external sources
  - label: "Debt Consolidation Loans"
    href: "/loans/by-type/debt-consolidation-loans"     # internal → "Related Reading"
  - label: "Bank of Canada"
    href: "https://www.bankofcanada.ca/…"               # external (http) → "Sources"
draft: true                   # optional — set to hide a post from the live site
---
```

| Field | Required | Notes |
|---|---|---|
| `title` | ✅ | ~50–65 characters. Put the main keyword near the start. |
| `description` | ✅ | 120–160 characters. Your search snippet — make it compelling. |
| `date` | ✅ | `YYYY-MM-DD`. Controls ordering (newest first). |
| `updated` | — | Freshness signal; falls back to `date`. |
| `category` | — | One or two words, shown on the card. |
| `image` | — | Card + social image. Omit → a themed gradient is used. |
| `keywords` | — | 4–8 phrases. |
| `faqs` | — | 3–5 recommended. Powers FAQ rich results. |
| `related` | — | Internal `/…` links = **Related Reading**; `http…` links = **Sources**. |
| `draft` | — | `true` = not published. |

> **News posts** must include their real sources as external `related` links (they render
> under a **Sources** heading) and use the site's Newsroom byline automatically.

---

## 3. Writing the body (Markdown)

Everything after the second `---` is the article, written in **Markdown**.

```mdx
Opening paragraph — hook the reader and use your primary keyword once, naturally.

## A Section Heading (H2)

Body text. **Bold**, *italic*, and [links](/loans/by-type/bad-credit-loans) all work.

- Bullet lists
- Work fine

### A Subsection (H3)

> Blockquotes render as styled callouts.

| Column | Column |
|---|---|
| Tables | Work (GFM) |
```

Headings (`##` and `###`) automatically build the **table of contents** (the sticky
side rail on desktop / "On this page" dropdown on mobile). **Use at least 3 headings**
so the TOC appears.

---

## 4. Media — photos, video, iframes

This is where it matches WordPress. All of these work inside the `.mdx` body:

**Photo (simple):**
```mdx
![Descriptive alt text for SEO and accessibility](https://…/photo.jpg)
```

**Photo with caption:**
```html
<figure>
  <img src="https://…/photo.jpg" alt="Descriptive alt text" />
  <figcaption>A short caption.</figcaption>
</figure>
```

**YouTube video:**
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID" title="What the video shows" allowfullscreen></iframe>
```

**Vimeo video:**
```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID" title="What the video shows" allowfullscreen></iframe>
```

**Self-hosted video:**
```html
<video controls src="https://…/clip.mp4"></video>
```

**Any other embed** (maps, calculators, tweets) — paste its `<iframe>` and it renders.

Notes:
- Images are fluid (never overflow). Videos and iframes are automatically **16:9 and
  responsive**. To force a different shape, add `style="aspect-ratio: 4/3"` to the tag.
- **Always** give images meaningful `alt` text — it's an SEO and accessibility signal.

---

## 5. Content & quality criteria (the standard to hit)

These are the rules that make a post actually *rank*, not just publish.

**Length**
- **Blog / guide:** aim for **~1,500–2,500 words** (target ~2,000). Depth wins.
- **News:** **~500–900 words** — tight, factual, timely.

**Structure**
- One clear topic per post. The `title` is the only H1 — never add another H1 in the body.
- Break the body into **3+ `##` / `###` sections** (drives the TOC and readability).
- Lead with the answer/summary in the first paragraph.

**Media**
- **At least one image** per post (a cover via `image:` and/or an in-body image).
- Use video/diagrams where they genuinely help — not for decoration.

**SEO**
- Put the **primary keyword** in the `title`, the **first paragraph**, and **one heading**.
- `description`: 120–160 chars, benefit-driven, includes the primary keyword.
- **2–4 internal links** to relevant money/hub pages (e.g. `/loans/by-type/…`,
  `/resources/…`) via body links and/or `related`. This is the biggest ranking lever.
- 3–5 `faqs` targeting real "People Also Ask" style questions.
- Descriptive `alt` text on every image.

**Quality (E-E-A-T)**
- **Original writing only.** Never paste content from another site — it's duplicate
  content and gets penalized. Across our sibling sites, write **unique** copy per brand.
- Write from experience: specifics, numbers, trade-offs, honest caveats. No fluff.
- Stay **on-topic** for the site's niche. Off-topic posts dilute authority.
- For **news**, cover a real event in your own words and cite **Sources**. Don't copy.

**Checklist before you publish**
- [ ] `title`, `description`, `date` filled in
- [ ] Slug (filename) is clean, lowercase, hyphenated
- [ ] 3+ headings; one topic; answer up top
- [ ] ≥1 image with alt text
- [ ] 2–4 internal links + 3–5 FAQs
- [ ] Original, on-topic, on-brand
- [ ] (News) real sources cited under `related`

---

## 6. Draft & scheduling

- `draft: true` in frontmatter keeps a post off the live site (and out of the sitemap/RSS).
- There's no timed scheduling — a post goes live on the next deploy after `draft` is
  removed (or the file is added).

---

## 7. Minimal copy-paste template

```mdx
---
title: ""
description: ""
date: "2026-07-08"
category: ""
image: ""
keywords:
  - ""
faqs:
  - question: ""
    answer: ""
related:
  - label: ""
    href: ""
---

Opening paragraph.

## First section

Body.

## Second section

Body.

## Third section

Body.
```
