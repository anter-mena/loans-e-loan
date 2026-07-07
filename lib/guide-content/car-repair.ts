import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Facing a big mechanic bill in Canada? Here's how a personal loan can cover transmission, engine, or brake repairs without draining your savings.",
  blocks: [
    { type: "heading", level: 2, text: "When a Loan Makes Sense for a Car Repair" },
    {
      type: "paragraph",
      text: "A dead transmission or a failed alternator doesn't wait for a convenient paycheque. If your vehicle is how you get to work, a personal loan can bridge the gap between the repair bill and your next few pay periods without touching your emergency fund.",
    },

    { type: "heading", level: 2, text: "What Repairs Actually Cost" },
    {
      type: "list",
      items: [
        "Brake replacement: $300–$800 per axle, depending on pads and rotors",
        "New tires: $400–$1,600 for a full set, depending on size and brand",
        "Alternator: $500–$1,200 including labour",
        "Transmission work: $2,000–$6,000 for major repairs",
        "Engine repairs: $1,500–$4,000+ for something like a head gasket",
        "Starter: $400–$900 including parts and labour",
      ],
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Most car-repair loans in Canada land between $1,000 and $5,000, matching typical repair costs. Bigger jobs — transmission or engine work — can push that up to $6,000.",
    },

    { type: "heading", level: 2, text: "Loan vs. Other Ways to Pay" },
    { type: "heading", level: 3, text: "In favour of a loan" },
    {
      type: "list",
      items: [
        "A fixed, predictable payment over a set term",
        "Your car isn't the collateral, unlike a title loan",
        "Most Canadian lenders fund within 1-3 business days",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "You're paying interest on top of the repair cost",
        "A missed payment can hurt your credit",
      ],
    },
    { type: "heading", level: 3, text: "Other ways to cover it" },
    {
      type: "list",
      items: [
        "A credit card, though usually at a steeper interest rate",
        "Your own savings, if you have enough — no interest at all",
        "In-house financing some repair shops offer directly",
        "An existing line of credit, which may already beat a new loan's rate",
      ],
    },

    { type: "heading", level: 2, text: "Applying in Canada" },
    {
      type: "list",
      ordered: true,
      items: [
        "Compare rates across banks, credit unions, and online lenders",
        "Have your ID, income proof, and bank statements ready",
        "Apply online — most Canadian lenders take just a few minutes",
        "If approved, funds usually land within 1-3 business days",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much can I borrow for a car repair loan?",
          answer:
            "Most fall in the $1,000-$5,000 range for typical repairs, and up to $6,000 for bigger jobs like transmission or engine work.",
        },
        {
          question: "Do I need to put up my car as collateral?",
          answer:
            "No — a personal loan for a car repair is typically unsecured, unlike a title loan, so your vehicle isn't at risk if you fall behind.",
        },
        {
          question: "How fast can I get the money for an urgent repair?",
          answer:
            "Most Canadian lenders fund within 1-3 business days of approval, which is usually quick enough to get essential repairs done.",
        },
        {
          question: "What documents do I need to apply?",
          answer:
            "Government-issued ID, proof of income, and recent bank statements — having these ready before you apply speeds things up.",
        },
        {
          question: "What are my alternatives to a personal loan for car repairs?",
          answer:
            "A credit card gets you funds fast but usually at a higher rate; savings avoid interest entirely if you have enough; some shops offer their own payment plans; and an existing line of credit may already beat what a new loan would cost.",
        },
      ],
    },
  ],
};

export default content;
