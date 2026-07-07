import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Thinking about financing a renovation in Canada? Here's what projects actually cost, how a personal loan compares to other options, and how to apply.",
  blocks: [
    {
      type: "paragraph",
      text: "Owning a home usually comes with a running list of upgrades you'd like to make — a new kitchen, an extra bedroom, a finished basement. A personal loan is one practical way to fund that list without waiting years to save up.",
    },

    { type: "heading", level: 2, text: "Why a Personal Loan Fits Renovation Projects" },
    {
      type: "paragraph",
      text: "You get a lump sum upfront, repaid at a fixed rate over a set schedule — predictable in a way that makes budgeting for a reno much easier. Because these loans are usually unsecured, your home isn't on the line the way it would be with a refinance, and the process moves faster, even without much home equity built up.",
    },

    { type: "heading", level: 2, text: "What Renovations Actually Cost" },
    {
      type: "paragraph",
      text: "Costs swing a lot depending on scope, materials, and where you live. Rough ranges:",
    },
    {
      type: "list",
      items: [
        "Minor bathroom refresh: $5,000–$15,000 — new fixtures, paint, some tiling",
        "Major bathroom overhaul: $15,000–$35,000+ — new layout, custom shower, higher-end finishes",
        "Minor kitchen update: $10,000–$30,000 — refaced cabinets, new counters, appliance upgrades",
        "Major kitchen renovation: $30,000–$75,000+ — structural changes, custom cabinetry, high-end appliances",
        "Basement finishing: $25,000–$70,000+, depending on whether you're adding a bathroom or separate entrance",
        "New deck or patio: $5,000–$20,000+, depending on size and materials",
        "Roof replacement: $8,000–$25,000+, depending on home size and material",
      ],
    },
    {
      type: "paragraph",
      text: "These are ballpark figures — get several quotes from local contractors, since costs in cities like Toronto, Vancouver, or Calgary can run noticeably higher.",
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Renovation loans in Canada typically fall between $5,000 and $50,000. Let the actual project cost — and your realistic ability to repay — set the number. Borrowing more than you need just adds interest for no benefit.",
    },

    { type: "heading", level: 2, text: "Comparing Your Financing Options" },
    { type: "heading", level: 3, text: "Personal Loan" },
    {
      type: "list",
      items: [
        "Fixed payments you can plan around",
        "Unsecured — generally easier to get than a HELOC if your equity is limited",
        "Often approved faster than secured alternatives",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Higher rate than a HELOC",
        "Shorter terms can mean a bigger monthly payment",
      ],
    },

    { type: "heading", level: 3, text: "Home Equity Line of Credit (HELOC)" },
    {
      type: "list",
      items: [
        "Lower rate, since it's secured by your home",
        "Pay interest only on what you actually draw",
        "Revolving — draw as needed rather than all at once",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Requires meaningful home equity",
        "Rate typically floats rather than staying fixed",
        "Your home is the collateral",
      ],
    },

    { type: "heading", level: 3, text: "Mortgage Refinance" },
    {
      type: "list",
      items: [
        "Usually the lowest rate available, tied to your mortgage",
        "Spreads the cost over a long term",
      ],
    },
    {
      type: "list",
      negative: true,
      items: [
        "Appraisal and legal fees add up",
        "Can take weeks or months to close",
        "May reset your mortgage term, adding interest over time",
      ],
    },

    { type: "heading", level: 2, text: "Applying" },
    {
      type: "list",
      ordered: true,
      items: [
        "Get contractor quotes to nail down your budget",
        "Check your credit score — 650+ typically gets meaningfully better rates",
        "Gather ID, proof of income (pay stubs, T4s), and banking details",
        "Compare offers across banks, credit unions, and online lenders",
        "Apply with whichever lender comes out ahead, online or in person",
      ],
    },

    { type: "heading", level: 2, text: "Keeping the Loan Manageable" },
    {
      type: "list",
      items: [
        "Nail down the real cost before applying — don't guess",
        "Borrow only what the project actually needs",
        "Pay on time, every time, to protect your credit",
        "Make extra payments if your loan allows — it shortens the term and cuts total interest",
        "Keep an emergency fund separate from renovation money",
        "Read every term — rate, fees, schedule — before signing",
      ],
    },
    {
      type: "paragraph",
      text: "With a realistic budget and a loan sized to match it, financing a renovation doesn't have to mean financial stress.",
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I apply for a loan for home improvement?",
          answer:
            "Start with contractor quotes to set your budget, then check your credit score. Gather ID, income proof, and banking details, compare offers from banks, credit unions, and online lenders, then apply with the one that fits best.",
        },
        {
          question: "What loan amounts are available for home improvement?",
          answer:
            "Typically $5,000 to $50,000 in Canada. Let your actual project cost — not the maximum a lender offers — set the amount.",
        },
        {
          question: "What credit score do I need for a home improvement loan?",
          answer:
            "A score of 650 or higher generally unlocks better rates. Since these loans are usually unsecured, they can still be more accessible than a HELOC if your home equity is limited.",
        },
        {
          question: "How fast can I get funds for home improvement?",
          answer:
            "Faster than secured alternatives — a HELOC or mortgage refinance can take weeks or months due to appraisals and legal steps, while an unsecured personal loan often funds within days.",
        },
        {
          question: "Are there alternatives to a personal loan for home improvement?",
          answer:
            "A HELOC offers a lower rate and flexible draws if you have equity, at the cost of putting your home up as collateral. A mortgage refinance can offer the lowest rate over a long term, but comes with fees, a longer timeline, and may reset your mortgage term.",
        },
      ],
    },
  ],
};

export default content;
