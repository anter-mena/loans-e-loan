export default function TrustedBy() {
  const partners = [
    { name: "Plaid", logo: "Plaid" },
    { name: "Stripe", logo: "Stripe" },
    { name: "Equifax", logo: "Equifax" },
    { name: "TransUnion", logo: "TransUnion" },
    { name: "Interac", logo: "Interac" },
  ];

  return (
    <section className="border-y border-border bg-card/30 py-10 lg:py-14">
      <div className="container mx-auto px-4">
        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground/60">
          Powering the next generation of Canadian lending
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale opacity-40 hover:opacity-100 transition-opacity duration-500">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <span className="font-display text-xl font-bold tracking-tighter text-foreground">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
