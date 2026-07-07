import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A practical walkthrough for getting approved for a personal loan even with a score under 600 — what to check, what to gather, and how to apply.",
  blocks: [
    {
      type: "paragraph",
      text: "A bank turning you down isn't the end of the road. Plenty of lenders specialize in working with borrowers who don't have clean credit histories. Here's the practical path to getting approved, even below a 600 score.",
    },

    { type: "heading", level: 2, text: "Working Through It" },

    { type: "heading", level: 3, text: "Step 1: Know your actual number" },
    {
      type: "paragraph",
      text: "Pull your free credit report and check your score before you apply anywhere. Knowing exactly where you stand helps you target lenders who actually work in your range instead of wasting applications.",
    },
    {
      type: "callout",
      text: "Scan your report for errors — disputing something inaccurate can sometimes bump your score up quickly.",
    },

    { type: "heading", level: 3, text: "Step 2: Figure out the real number you need" },
    {
      type: "paragraph",
      text: "Borrow only what covers the actual expense. Smaller amounts are both easier to get approved for and cheaper to pay back — list out what you actually need and stick to it.",
    },
    {
      type: "callout",
      text: "Remember interest and fees add to the total — a $3,000 loan might actually cost $3,500+ by the time it's paid off.",
    },

    { type: "heading", level: 3, text: "Step 3: Target lenders who work with bad credit" },
    {
      type: "paragraph",
      text: "Online lenders, credit unions, and peer-to-peer platforms tend to have more flexible criteria than a traditional bank.",
    },
    {
      type: "callout",
      text: "Steer clear of payday lenders entirely — rates of 300-500% APR can trap you in a cycle you don't need.",
    },

    { type: "heading", level: 3, text: "Step 4: Get your paperwork together" },
    {
      type: "paragraph",
      text: "Have ID, proof of income (pay stubs or bank statements), proof of address, and your SIN ready before you start.",
    },
    {
      type: "callout",
      text: "Showing up organized with documents ready genuinely speeds up approval.",
    },

    { type: "heading", level: 3, text: "Step 5: Consider a co-signer or collateral" },
    {
      type: "paragraph",
      text: "A co-signer with solid credit can meaningfully improve both your approval odds and your rate. Offering collateral — a car, savings — for a secured loan is another route.",
    },
    {
      type: "callout",
      text: "Only ask someone to co-sign if you're genuinely confident you'll make every payment — their credit is riding on it too.",
    },

    { type: "heading", level: 3, text: "Step 6: Pre-qualify with several lenders" },
    {
      type: "paragraph",
      text: "Most offer soft-check pre-qualification that doesn't touch your score. Compare at least 3-5 before deciding.",
    },
    {
      type: "callout",
      text: "Compare on APR and total cost, not just the headline interest rate.",
    },

    { type: "heading", level: 3, text: "Step 7: Submit the full application" },
    {
      type: "paragraph",
      text: "Once you've picked the best offer, fill out the complete application honestly — lenders verify income and employment, so accuracy matters.",
    },
    {
      type: "callout",
      text: "Applying during business hours can mean faster processing.",
    },

    { type: "heading", level: 3, text: "Step 8: Review before you sign" },
    {
      type: "paragraph",
      text: "Go over the payment, total interest, fees, and payoff date carefully before accepting. Once you do, funds usually land within 1-3 business days.",
    },
    {
      type: "callout",
      text: "Set up autopay — it helps you avoid missed payments and sometimes qualifies you for a small rate discount.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Try" },
    {
      type: "list",
      items: [
        "Start smaller — smaller amounts approve more easily",
        "Credit unions often treat members with bad credit better than banks do",
        "An existing banking relationship can help with future applications",
        "A credit-builder loan can strengthen your file for next time",
        "Avoid stacking up multiple hard inquiries in a short window",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I get a personal loan with bad credit?",
          answer:
            "Yes. Many lenders specialize in borrowers with less-than-perfect credit, including scores below 600 — online lenders, credit unions, and peer-to-peer platforms tend to be more flexible than a traditional bank.",
        },
        {
          question: "Will checking my rate hurt my credit score?",
          answer:
            "No — pre-qualification typically uses a soft check that doesn't affect your score. A hard inquiry only happens once you submit the full application, so pre-qualifying with several lenders first is a safe way to compare.",
        },
        {
          question: "What documents do I need to apply?",
          answer:
            "ID, proof of income, proof of address, and your SIN. Having all of it ready before you start speeds up the whole process.",
        },
        {
          question: "Does having a co-signer improve my chances?",
          answer:
            "Yes — a co-signer with good credit can meaningfully improve both approval odds and rate. Just make sure you can realistically make every payment, since their credit is affected too.",
        },
        {
          question: "How fast can I get funded after approval?",
          answer:
            "Usually within 1-3 business days of accepting the offer. Applying during business hours can help things move a bit faster.",
        },
      ],
    },
  ],
};

export default content;
