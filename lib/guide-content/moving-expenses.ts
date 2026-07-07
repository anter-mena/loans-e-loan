import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Planning a move in Canada? Here's what it actually costs, how a personal loan can help spread out the expense, and how to apply.",
  blocks: [
    { type: "heading", level: 2, text: "Financing a Move With a Personal Loan" },
    {
      type: "paragraph",
      text: "A personal loan hands you a lump sum upfront, repaid over time at a fixed rate — useful when a move's costs all land at once during an already stressful stretch. Whether it fits depends on your specific relocation and budget.",
    },

    { type: "heading", level: 2, text: "What Moving Actually Costs in Canada" },
    {
      type: "paragraph",
      text: "Costs swing widely based on distance, how much you're moving, and whether you hire movers or go DIY. Rough ranges:",
    },
    {
      type: "list",
      items: [
        "Professional movers: $3,000-$10,000+ for a long-distance move (say, Calgary to Halifax) with a 2-3 bedroom home; $500-$2,000 for a local move",
        "Rental truck: $100-$500/day locally plus mileage and gas; long-distance rentals can hit $1,000-$3,000 before fuel",
        "Packing supplies: $100-$500 for boxes, tape, and wrap, more for larger homes",
        "Storage: $50-$300/month if there's a gap between homes — downtown markets run pricier than smaller towns",
        "Travel costs: flights, gas, food, and accommodation for a long-distance move can run into the thousands",
        "Utility hookups and deposits: usually $50-$200 per service",
        "New furniture or appliances: optional, but often tempting when you're already moving",
      ],
    },
    {
      type: "paragraph",
      text: "All told, a Canadian move can run anywhere from $1,000 for something local and small to $15,000+ for a large, long-distance relocation with full-service movers.",
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Most moving loans land between $2,000 and $10,000. For a large long-distance move with full-service movers or significant new purchases, up to $15,000 may make sense — but borrow only what you actually need to keep the payment manageable.",
    },

    { type: "heading", level: 2, text: "Loan vs. Other Ways to Pay" },
    { type: "heading", level: 3, text: "In favour of a loan" },
    {
      type: "list",
      items: [
        "A fixed payment that's easy to budget around",
        "Usually cheaper than a credit card",
        "Usable for any moving-related cost",
        "On-time payments can help your credit",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "It's new debt on top of moving costs",
        "Interest adds to the total you'll pay",
        "Late payments can hurt your credit",
      ],
    },
    { type: "heading", level: 3, text: "Other options" },
    {
      type: "list",
      items: [
        "A credit card — convenient, but usually pricier for larger amounts",
        "A line of credit — pay interest only on what you draw, though rates can be variable",
        "Savings — the cheapest route if you have enough set aside",
        "Borrowing from family or friends — interest-free, but weigh the relationship risk",
      ],
    },

    { type: "heading", level: 2, text: "Applying" },
    {
      type: "paragraph",
      text: "You can apply through a bank, credit union, or online lender. You'll generally need:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Government-issued ID",
        "Proof of address — a utility bill, bank statement, or lease",
        "Proof of income — pay stubs or a Notice of Assessment",
        "Your bank account details for disbursement and repayment",
        "A credit check, which every lender will run",
      ],
    },
    {
      type: "paragraph",
      text: "Most applications go through online, with decisions ranging from minutes to a few business days, and funds usually arriving shortly after approval.",
    },

    { type: "heading", level: 2, text: "Managing the Loan Responsibly" },
    {
      type: "list",
      items: [
        "Build a real moving budget and stick to it — don't overborrow",
        "Understand the rate, schedule, and fees before signing",
        "Automate payments to avoid missing a due date",
        "Pay it off early if your lender allows it penalty-free",
        "Make sure your new budget in your new home comfortably covers the payment",
      ],
    },
    {
      type: "paragraph",
      text: "Comparing offers from a few lenders before committing is worth the extra ten minutes — the difference in rate can add up over the term.",
    },

    {
      type: "faq",
      items: [
        {
          question: "What can I use a moving loan for?",
          answer:
            "Movers, a rental truck, packing supplies, storage, travel costs, utility hookup deposits — essentially anything tied to the relocation.",
        },
        {
          question: "How much can I borrow for moving expenses?",
          answer:
            "Most moving loans fall between $2,000 and $10,000, with up to $15,000 for a large, long-distance move. Borrow only what keeps the payment manageable.",
        },
        {
          question: "How fast will I receive the funds?",
          answer:
            "Most applications are online, with decisions arriving anywhere from minutes to a few business days, and funds typically following shortly after approval.",
        },
        {
          question: "What documents do I need to apply?",
          answer:
            "Government ID, proof of address, proof of income, and your bank details — plus a credit check as part of the process.",
        },
        {
          question: "Is a personal loan better than a credit card for moving costs?",
          answer:
            "Usually — a personal loan carries a lower rate and a fixed, predictable payment. A credit card can still make sense for smaller purchases you'll pay off quickly.",
        },
      ],
    },
  ],
};

export default content;
