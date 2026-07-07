import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Predatory lending follows recognizable patterns. Here's how to spot illegal rates, hidden fees, and scam tactics before you sign anything in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Recognizing the Warning Signs" },

    { type: "heading", level: 3, text: "1. Know the Legal Rate Ceiling" },
    {
      type: "paragraph",
      text: "The Criminal Code caps the criminal rate of interest at 35% APR (lowered from 48% as of January 2025) — any lender above that line is operating illegally. Payday loans have their own provincial caps on top of that; Ontario, for instance, limits the cost to $15 per $100 borrowed. Knowing these numbers is your first defense.",
    },
    {
      type: "callout",
      text: "If a lender won't give you a clear, all-in APR figure, that's a serious red flag on its own.",
    },

    { type: "heading", level: 3, text: "2. Watch for the Common Patterns" },
    {
      type: "paragraph",
      text: "Predatory lenders tend to share traits: guaranteed approval regardless of credit, pressure to sign immediately, fees requested before funds go out, requests for bank access or blank cheques, unsolicited calls or texts, and no clear physical address. A legitimate Canadian lender is licensed and upfront about every term.",
    },
    {
      type: "callout",
      text: "No legitimate Canadian lender will ever ask for a fee before you've received the loan.",
    },

    { type: "heading", level: 3, text: "3. Confirm the Lender's License" },
    {
      type: "paragraph",
      text: "Every lender operating in Canada needs a license in each province they do business in. Check with your provincial regulator — Consumer Protection Ontario, Consumer Protection BC, Alberta's Consumer Protection Act office, or Quebec's Office de la protection du consommateur — and the Financial Consumer Agency of Canada also maintains resources for verifying legitimacy.",
    },
    {
      type: "callout",
      text: "Search for the lender on your provincial regulator's site — if they don't show up, don't borrow from them.",
    },

    { type: "heading", level: 3, text: "4. Actually Read the Agreement" },
    {
      type: "paragraph",
      text: "Before signing anything, look closely for the total cost of borrowing, prepayment penalties, automatic renewal clauses, variable-rate terms, insurance add-ons, and how collections would work. Canadian law requires a written agreement spelling all of this out — if something's unclear, ask, and if the answer doesn't satisfy you, walk away.",
    },
    {
      type: "callout",
      text: "Watch especially for \"loan insurance\" or \"protection plan\" add-ons — often expensive, often with minimal real coverage.",
    },

    { type: "heading", level: 3, text: "5. Recognize Rollover and Renewal Traps" },
    {
      type: "paragraph",
      text: "Some lenders push you to \"roll over\" a loan — extending it while tacking on new fees. Payday loan rollovers are illegal in many provinces. For personal loans, watch for automatic renewal clauses that can extend the loan at a worse rate. Understand exactly how the loan ends and what happens if a payment is late.",
    },
    {
      type: "callout",
      text: "A lender pushing you to take a new loan to pay off your existing one with them is a classic debt trap — walk away.",
    },

    { type: "heading", level: 3, text: "6. Know Where to Report It" },
    {
      type: "paragraph",
      text: "If you think you've encountered a predatory lender, report it to your provincial consumer protection agency, the Financial Consumer Agency of Canada, the Canadian Anti-Fraud Centre (1-888-495-8501), and local police if you suspect criminal activity. A non-profit credit counsellor can also help if you're already stuck with predatory debt.",
    },
    {
      type: "callout",
      text: "The Canadian Anti-Fraud Centre actively tracks and investigates lending scams.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Compare at least 3 lenders before committing to any offer",
        "If it sounds too good to be true, assume it is",
        "A legitimate lender never guarantees approval sight unseen",
        "Keep copies of every document and message",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What is the maximum interest rate a lender can legally charge in Canada?",
          answer:
            "35% APR under the Criminal Code (down from 48% as of January 2025), covering all fees and charges expressed as an annual rate. Anything above that is illegal.",
        },
        {
          question: "What are the biggest red flags of a predatory lender?",
          answer:
            "Guaranteed approval regardless of credit, pressure to sign immediately, upfront fees before disbursing funds, requests for bank access or blank cheques, and no clear physical address. Legitimate lenders are licensed and transparent.",
        },
        {
          question: "Is it legal for a lender to ask for an upfront fee?",
          answer:
            "No — a legitimate Canadian lender never asks for payment before you've received your loan. It's one of the clearest scam indicators there is.",
        },
        {
          question: "How can I check if a lender is licensed?",
          answer:
            "Check your provincial consumer protection office or the Financial Consumer Agency of Canada. If the lender isn't listed in the registry, don't borrow from them.",
        },
        {
          question: "Where do I report a predatory lender?",
          answer:
            "Your provincial consumer protection agency, the Financial Consumer Agency of Canada, or the Canadian Anti-Fraud Centre at 1-888-495-8501. Contact local police if you suspect criminal activity.",
        },
      ],
    },
  ],
};

export default content;
