import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A practical, no-nonsense plan to start the year with your finances actually under control — debt, budget, savings, and credit, all reviewed.",
  blocks: [
    { type: "heading", level: 2, text: "Working the Reset" },

    { type: "heading", level: 3, text: "1. Face Your Debt Head-On" },
    {
      type: "paragraph",
      text: "List every debt — cards, loans, lines of credit — with balance, rate, and minimum payment. Add it up and check your overall debt-to-income ratio. Above 40%? Attack the highest-rate balance first.",
    },
    {
      type: "callout",
      text: "Pull up CRA My Account while you're at it, to review your tax situation alongside your debt.",
    },

    { type: "heading", level: 3, text: "2. Build a Budget You'll Actually Use" },
    {
      type: "paragraph",
      text: "The 50/30/20 split — needs, wants, savings/debt — is a solid frame. Track a full month of spending first to know your real starting point, using a free tracking app if that helps.",
    },
    {
      type: "callout",
      text: "The FCAC offers a free budget planner at canada.ca/financial-tools.",
    },

    { type: "heading", level: 3, text: "3. Get an Emergency Fund Going" },
    {
      type: "paragraph",
      text: "3-6 months of expenses is the long-term target, but $1,000 is a reasonable first milestone. Automate a transfer to a high-interest savings account every payday.",
    },
    {
      type: "callout",
      text: "Shop around — several Canadian online banks consistently offer the best savings rates.",
    },

    { type: "heading", level: 3, text: "4. Pull Your Credit Report" },
    {
      type: "paragraph",
      text: "Get your free report from both Equifax and TransUnion and dispute anything that looks wrong. Your score is what shapes every borrowing decision you make the rest of the year.",
    },
    {
      type: "callout",
      text: "Free ongoing monitoring tools can track your score between annual checks.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Do" },
    {
      type: "list",
      items: [
        "Automate savings so it moves before you're tempted to spend it",
        "Cancel subscriptions you're not actually using",
        "Set specific goals with real deadlines, not vague intentions",
        "Put a mid-year check-in on the calendar for July",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Where do I start with a financial reset?",
          answer:
            "List every debt with its balance, rate, and minimum payment, then calculate your overall debt-to-income ratio. If it's above 40%, focus first on paying down the highest-rate balance.",
        },
        {
          question: "What budgeting rule should I follow?",
          answer:
            "50/30/20 — needs, wants, savings/debt — is a solid starting frame. Track a month of real spending first to set an accurate baseline.",
        },
        {
          question: "How much should I have in an emergency fund?",
          answer:
            "3-6 months of expenses is the eventual goal, but start with $1,000 as a first milestone and automate the transfers so it builds consistently.",
        },
        {
          question: "How can I check my credit score for free in Canada?",
          answer:
            "Request free reports directly from Equifax and TransUnion, and use a free monitoring tool to track changes between checks. Dispute any errors you find.",
        },
        {
          question: "What's a good debt-to-income ratio?",
          answer:
            "Generally under 40% of gross income going to debt payments. Above that, prioritize paying down high-interest balances before taking on anything new.",
        },
      ],
    },
  ],
};

export default content;
