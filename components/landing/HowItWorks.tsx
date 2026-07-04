import { ClipboardText, Sparkle, Wallet, ArrowRight } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    icon: ClipboardText,
    n: "01",
    title: "Tell us about you",
    desc: "Answer a few simple questions. No documents to upload.",
    time: "2 min",
  },
  {
    icon: Sparkle,
    n: "02",
    title: "Get your offer",
    desc: "Personalized rate and full schedule. Soft credit check only.",
    time: "30 sec",
  },
  {
    icon: Wallet,
    n: "03",
    title: "Receive your funds",
    desc: "Accept your offer and money lands in your account next day.",
    time: "24 hrs",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-primary py-16 text-primary-foreground lg:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How it works</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl">
            Three steps. Zero stress. <span className="text-accent">No paperwork.</span>
          </h2>
        </div>

        {/* Timeline */}
        <ol className="relative mx-auto mt-10 grid max-w-7xl gap-6 lg:grid-cols-3">
          {/* Connector line */}
          <div aria-hidden className="absolute left-0 right-0 top-5.5 hidden h-px bg-linear-to-r from-transparent via-accent/40 to-transparent lg:block" />

          {steps.map((step, i) => (
            <li
              key={step.n}
              className="relative flex flex-col items-center text-center"
            >
              <div className="relative z-10 grid h-11 w-11 place-items-center rounded-2xl border border-accent/30 bg-primary text-accent shadow-lg">
                <step.icon size={20} weight="bold" />
                <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {i + 1}
                </span>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/15 px-3 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary-foreground/70">
                {step.time}
              </div>
              <h3 className="mt-3 font-display text-lg">{step.title}</h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
                {step.desc}
              </p>

              {i < steps.length - 1 && (
                <ArrowRight aria-hidden className="absolute right-0 top-4 hidden h-4 w-4 translate-x-1/2 text-accent/60 lg:block" weight="bold" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
