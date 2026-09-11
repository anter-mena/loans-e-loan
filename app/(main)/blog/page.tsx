import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/blog/breadcrumbs";
import { PostGrid } from "@/components/blog/post-grid";
import SectionTitleBand from "@/components/landing/SectionTitleBand";
import { JsonLd } from "@/components/seo/json-ld";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { BLOG_DESCRIPTION, BLOG_SECTION, getAllPosts } from "@/lib/blog";
import { BASE_URL, breadcrumbJsonLd, buildMetadata, itemListJsonLd } from "@/lib/seo";

const base = buildMetadata({
  title: "Blog - Loan Tips & Borrowing Insights for Canadians",
  description: BLOG_DESCRIPTION,
  path: BLOG_SECTION.path,
});

export const metadata: Metadata = {
  ...base,
  alternates: {
    ...base.alternates,
    types: { "application/rss+xml": `${BASE_URL}${BLOG_SECTION.path}/feed.xml` },
  },
};

function formatDate(iso?: string) {
  if (!iso) return "Soon";
  const d = new Date(iso);
  return isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((post) => post.category)).size;
  const latest = posts[0]?.date;

  return (
    <main className="bg-background">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: BLOG_SECTION.label, path: BLOG_SECTION.path },
          ]),
          ...(posts.length > 0 ? [itemListJsonLd(BLOG_SECTION, posts)] : []),
        ]}
      />

      <section className="mx-auto w-full max-w-[1000px]">
        <SectionTitleBand label={BLOG_SECTION.label} className="border-x border-b border-border" />

        <Breadcrumbs
          variant="listing"
          items={[{ label: "Home", href: "/" }, { label: BLOG_SECTION.label }]}
        />

        <section className="grid border-b border-border lg:grid-cols-[0.54fr_0.46fr]">
          <div className="border-x border-border px-6 py-14 md:px-10 lg:border-r-0 lg:py-16">
            <p className="flex items-center gap-4 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              <span className="h-4 w-px bg-accent" />
              Borrower notes
            </p>
            <h1 className="mt-5 max-w-xl font-display text-5xl font-semibold leading-[0.96] tracking-tight text-foreground md:text-7xl">
              Borrowing explained before it gets expensive.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
              Practical articles on rates, repayment, credit checks, emergency borrowing, and
              the small details that change the total cost of a loan.
            </p>
          </div>

          <aside className="grid border-t border-border lg:border-t-0">
            <div className="relative min-h-[310px] overflow-hidden border-x border-b border-primary bg-primary p-6 text-primary-foreground [border-left-color:hsl(var(--primary))] [border-right-color:hsl(var(--primary))] md:p-8">
              <FlickeringGrid
                aria-hidden
                className="absolute inset-0"
                squareSize={3}
                gridGap={2}
                flickerChance={0.08}
                maxOpacity={0.2}
                color="hsl(var(--primary-foreground))"
              />
              <div className="relative max-w-sm">
                <p className="inline-flex bg-accent px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-foreground">
                  Start here
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight text-primary-foreground">
                  Read the plain version first.
                </h2>
                <p className="mt-4 text-sm leading-6 text-primary-foreground/65">
                  Short, direct explanations for Canadian borrowers who want clarity before
                  clicking apply.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 border-x border-border">
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{posts.length}</p>
                <p className="mt-1 text-xs text-muted-foreground">Articles</p>
              </div>
              <div className="border-r border-border p-5">
                <p className="font-display text-4xl font-semibold text-foreground">{categories}</p>
                <p className="mt-1 text-xs text-muted-foreground">Topics</p>
              </div>
              <div className="p-5">
                <p className="font-display text-2xl font-semibold text-foreground">{formatDate(latest)}</p>
                <p className="mt-1 text-xs text-muted-foreground">Latest</p>
              </div>
            </div>
          </aside>
        </section>

        <PostGrid
          posts={posts}
          section={BLOG_SECTION}
          empty={{
            title: "New posts coming soon",
            text: "We're preparing fresh updates. Until then, the rest of the resource library is ready.",
            link: { label: "Explore guides", href: "/resources/guides" },
          }}
        />
      </section>
    </main>
  );
}
