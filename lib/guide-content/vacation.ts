import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Thinking about financing a Canadian getaway? Here's what trips actually cost, how a personal loan stacks up, and how to borrow responsibly.",
  blocks: [
    { type: "heading", level: 2, text: "Is a Loan the Right Call for a Vacation?" },
    {
      type: "paragraph",
      text: "A personal loan lets you take the trip now and spread the cost out — appealing for a big, once-in-a-while trip or an opportunity that came up unexpectedly. Just weigh the interest cost honestly against your budget. Saving up first is usually the better move, but if a loan is genuinely your best option, it's worth understanding how it works.",
    },

    { type: "heading", level: 2, text: "What Trips Actually Cost" },
    {
      type: "paragraph",
      text: "Costs vary enormously by destination, length, and style. Rough estimates for common Canadian trip types:",
    },
    { type: "heading", level: 3, text: "City Break (Toronto, Vancouver, Montreal)" },
    {
      type: "paragraph",
      text: "Per person, 3-5 days: $1,200-$3,000+, covering flights (if needed), a mid-range hotel, dining, attractions, and transit.",
    },
    { type: "heading", level: 3, text: "Nature/Adventure Trip (Rockies, East Coast trails)" },
    {
      type: "paragraph",
      text: "Per person, 5-7 days: $1,800-$4,500+, covering flights, a rental car, mid-range lodging (or some camping), park passes, tours, and some meals.",
    },
    { type: "heading", level: 3, text: "Resort-Style Trip Within Canada" },
    {
      type: "paragraph",
      text: "Per person, 7 days: $1,500-$3,500+ — domestic options tend to center on specific activities like ski resorts or spa retreats rather than a full all-inclusive meal plan.",
    },
    { type: "heading", level: 3, text: "Family Road Trip" },
    {
      type: "paragraph",
      text: "Family of 4, 7-10 days: $4,000-$8,000+, covering fuel, hotels or an Airbnb, groceries, activities, and park entry fees.",
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Based on those ranges, most vacation loans fall between $2,000 and $8,000, occasionally $10,000+ for a bigger family trip. Borrow only what you can comfortably repay with interest factored in.",
    },

    { type: "heading", level: 2, text: "Loan vs. Other Ways to Pay" },
    { type: "heading", level: 3, text: "In favour of a loan" },
    {
      type: "list",
      items: [
        "A fixed rate and payment, easy to budget around",
        "A defined end date for the debt",
        "Often cheaper than a credit card, especially with good credit",
        "Keeps your cards free for actual emergencies",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "You'll pay more than the trip's sticker price in interest",
        "It's still debt you need to manage",
        "A missed payment hurts your credit",
        "There's an application and credit check involved",
      ],
    },
    { type: "heading", level: 3, text: "Other options" },
    {
      type: "list",
      items: [
        "A credit card — fine if you can clear it before interest accrues (typically 19-25% APR in Canada otherwise)",
        "Savings — the cheapest option by far, since there's no interest at all",
        "A line of credit — flexible, but rates can move and it takes discipline to pay down",
      ],
    },

    { type: "heading", level: 2, text: "Applying" },
    { type: "heading", level: 3, text: "1. Gather Your Documents" },
    {
      type: "paragraph",
      text: "Government ID, proof of income (pay stubs, T4s, or a Notice of Assessment if self-employed), 3-6 months of bank statements, and proof of address.",
    },
    { type: "heading", level: 3, text: "2. Compare Lenders" },
    {
      type: "paragraph",
      text: "Look across banks, credit unions, and online lenders on rate, fees, and terms.",
    },
    { type: "heading", level: 3, text: "3. Apply" },
    {
      type: "paragraph",
      text: "Most lenders offer a quick online application; some prefer meeting in person.",
    },
    { type: "heading", level: 3, text: "4. Credit Check" },
    {
      type: "paragraph",
      text: "Expect a credit check as part of the decision — a stronger score means a better rate.",
    },
    { type: "heading", level: 3, text: "5. Get Funded" },
    {
      type: "paragraph",
      text: "Once approved, funds typically land in your account within a few business days.",
    },

    { type: "heading", level: 2, text: "Managing It Responsibly" },
    {
      type: "list",
      items: [
        "Budget for the loan payment, not just the trip itself",
        "Automate payments to avoid missing a due date",
        "Put extra cash toward the principal when you can",
        "Understand the full agreement, prepayment terms included, before signing",
        "Borrow only what you actually need — a buffer just costs more in interest",
        "Make sure your emergency fund is healthy before adding new debt for a trip",
      ],
    },
    {
      type: "paragraph",
      text: "With a clear budget and a responsibly sized loan, you can take the trip without turning it into a long-term financial headache.",
    },
    {
      type: "callout",
      text: "Editorial Note: Our content is reviewed by financial experts for accuracy. We may receive compensation from partner lenders, which does not influence our rankings or recommendations.",
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I apply for a loan for vacation?",
          answer:
            "Gather ID, income proof, bank statements, and proof of address, then compare offers from a few lenders on rate and terms. Most applications are quick and online, with a credit check as part of the approval.",
        },
        {
          question: "What loan amounts are available for a vacation?",
          answer:
            "Typically $2,000 to $8,000 based on common trip costs, sometimes $10,000+ for larger family trips. Borrow only what you can comfortably repay with interest.",
        },
        {
          question: "How fast can I get funds for a vacation?",
          answer:
            "Usually within a few business days of approval — enough time to book before your trip.",
        },
        {
          question: "Are there alternatives to a personal loan for a vacation?",
          answer:
            "Saving up avoids interest entirely and is the cheapest route. A credit card works if you can clear it before interest hits (otherwise 19-25% APR in Canada). A line of credit offers flexibility but needs discipline to pay down.",
        },
      ],
    },
  ],
};

export default content;
