import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import SectionTitleBand from "./SectionTitleBand";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Toronto",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "E-Loan gave me a clear offer in minutes. The cost was simple to understand and there were no surprises.",
  },
  {
    name: "Diana Evans",
    role: "Vancouver",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The fixed payment helped me roll my cards into one plan I could actually budget around.",
  },
  {
    name: "George Harris",
    role: "Calgary",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "I compared the total before signing and knew exactly what I would pay every month.",
  },
  {
    name: "Bob Brown",
    role: "Ottawa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The soft check made it easy to look without worrying about my credit score taking a hit.",
  },
  {
    name: "Ethan Ford",
    role: "Montreal",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "I needed money for a repair quickly. The process stayed calm, fast, and very direct.",
  },
  {
    name: "Hannah Irving",
    role: "Halifax",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The monthly estimate matched the final offer, which made the decision feel much easier.",
  },
  {
    name: "Charlie Davis",
    role: "Winnipeg",
    avatar: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "I used E-Loan to cover medical bills and kept everything on one manageable schedule.",
  },
  {
    name: "Fiona Grant",
    role: "Edmonton",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "No paperwork maze. I saw my rate, term, and payment clearly before I accepted.",
  },
  {
    name: "Ian Johnson",
    role: "Mississauga",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop",
    quote: "The money arrived quickly and the repayment plan was straightforward from day one.",
  },
];

const testimonialColumns = [
  [testimonials[0], testimonials[3], testimonials[6], testimonials[1], testimonials[4]],
  [testimonials[4], testimonials[7], testimonials[1], testimonials[5], testimonials[8]],
  [testimonials[2], testimonials[5], testimonials[8], testimonials[0], testimonials[3]],
];

function TestimonialCard({
  testimonial,
  columnIndex,
}: {
  testimonial: (typeof testimonials)[number];
  columnIndex: number;
}) {
  return (
    <figure
      className={cn(
        "min-h-[148px] border-b border-border bg-background p-5 md:border-x",
        columnIndex === 0 && "md:border-l-0",
        columnIndex === testimonialColumns.length - 1 && "md:border-r-0"
      )}
    >
      <figcaption className="flex items-center gap-3">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          width={40}
          height={40}
          className="size-10 shrink-0 rounded-full object-cover"
        />
        <div>
          <div className="font-display text-base font-bold leading-tight text-foreground">
            {testimonial.name}
          </div>
          <span className="mt-1 inline-flex bg-accent px-1.5 py-0.5 font-mono text-[10px] leading-none text-accent-foreground">
            @{testimonial.role}
          </span>
        </div>
      </figcaption>
      <blockquote className="mt-4 text-sm font-semibold leading-6 text-foreground">
        {testimonial.quote}
      </blockquote>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="mx-auto w-full max-w-[1000px] border-x border-border">
        <SectionTitleBand label="Testimonials" className="border-b border-border" />

        <div className="grid md:grid-cols-3">
          {testimonialColumns.map((column, index) => (
            <div
              key={index}
              className="relative h-[440px] overflow-hidden bg-background md:-ml-px md:h-[520px] first:md:ml-0"
            >
              <Marquee
                vertical
                reverse={index !== 1}
                repeat={4}
                className="h-full [--duration:34s] [--gap:0px] p-0"
              >
                {column.map((testimonial) => (
                  <TestimonialCard
                    key={`${testimonial.name}-${testimonial.role}`}
                    testimonial={testimonial}
                    columnIndex={index}
                  />
                ))}
              </Marquee>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
