import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Debt strategy",
    title: "How to escape the credit card minimum-payment trap (in 90 days).",
    read: "6 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Home & life",
    title: "When a personal loan beats a HELOC for home renovation.",
    read: "4 min read",
  },
  {
    image: "https://images.unsplash.com/photo-1573163281538-50703b603831?q=80&w=800&h=600&auto=format&fit=crop",
    category: "Credit health",
    title: "The 3 habits that raised our borrowers' scores by 47 points.",
    read: "5 min read",
  },
];

export default function Resources() {
  return (
    <section className="bg-secondary/40 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Money, demystified</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Smart reads before you borrow.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent"
          >
            Visit the e-loan Journal
            <ArrowUpRight className="h-4 w-4" weight="bold" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <span className="text-accent">{a.category}</span>
                  <span>{a.read}</span>
                </div>
                <h3 className="mt-5 flex-1 font-display text-xl leading-tight tracking-tight text-foreground">
                  {a.title}
                </h3>
                <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-foreground">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" weight="bold" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
