import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "A practical, no-jargon walkthrough of how to build a real emergency fund in Canada, one paycheque at a time.",
  blocks: [
    { type: "heading", level: 2, text: "Why This Matters" },
    {
      type: "paragraph",
      text: "You can't predict when the furnace dies or the hours get cut. An emergency fund is what stands between a bad week and months of scrambling to catch up on debt — it's the buffer that keeps a surprise expense from turning into a crisis.",
    },

    { type: "heading", level: 2, text: "Building It, Step by Step" },

    { type: "heading", level: 3, text: "1. Know What It's For (and What It Isn't)" },
    {
      type: "paragraph",
      text: "This fund exists for genuine surprises — a layoff, a medical bill, a major repair. It's not for a vacation or a planned purchase. Its whole job is keeping you out of debt when something unexpected hits.",
    },
    {
      type: "callout",
      text: "Before dipping in, ask honestly whether this is a real emergency or just a want dressed up as one.",
    },

    { type: "heading", level: 3, text: "2. Set a Real Target" },
    {
      type: "paragraph",
      text: "The common benchmark is 3-6 months of essential expenses — housing, utilities, groceries, transportation, insurance. Add those up to get a number that actually reflects your life, not a generic rule of thumb.",
    },
    {
      type: "callout",
      text: "If 3-6 months feels miles away, start with a mini-goal of $1,000-$2,000 CAD and build from there.",
    },

    { type: "heading", level: 3, text: "3. Give It Its Own Account" },
    {
      type: "paragraph",
      text: "Open a separate high-interest savings account just for this money. Keeping it apart from your everyday chequing makes it much less likely you'll accidentally spend it — but it should still be reachable within a day or two when a real emergency hits.",
    },
    {
      type: "callout",
      text: "Shop around — several Canadian banks and credit unions offer no-fee savings accounts with genuinely competitive rates.",
    },

    { type: "heading", level: 3, text: "4. Make the Saving Automatic" },
    {
      type: "paragraph",
      text: "Set up a standing transfer from chequing to your emergency account on payday. Paying yourself first, before the money has a chance to disappear elsewhere, is what makes this actually stick.",
    },
    {
      type: "callout",
      text: "Treat the transfer like a fixed bill in your budget, not an optional extra.",
    },

    { type: "heading", level: 3, text: "5. Free Up More Room When You Can" },
    {
      type: "paragraph",
      text: "Look for spending you can trim, even temporarily, and redirect it toward the fund. A side gig, selling things you don't use, or picking up extra shifts can all speed things along — every bit helps close the gap faster.",
    },
    {
      type: "callout",
      text: "Scan your statements for subscriptions or memberships you'd forgotten you were paying for.",
    },

    { type: "heading", level: 3, text: "6. Keep It Topped Up" },
    {
      type: "paragraph",
      text: "Life changes, so revisit your target periodically. If you ever tap the fund for a genuine emergency, make rebuilding it a priority — a healthy fund also reduces how much you lean on credit cards during a crunch, which is exactly the kind of thing Equifax and TransUnion track.",
    },
    {
      type: "callout",
      text: "Once a year, recheck your essential expenses and adjust your target if your life has changed.",
    },

    { type: "heading", level: 2, text: "A Few More Pointers" },
    {
      type: "list",
      items: [
        "Even $25 CAD a paycheque adds up faster than you'd think",
        "Keep it in a separate, reasonably accessible account",
        "Automate the transfer so it happens without a decision every time",
        "Resist using it for anything that isn't a real emergency",
        "A high-interest account helps the balance grow a little faster on its own",
        "Recheck the target size once a year",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How much should I have in my emergency fund?",
          answer:
            "3-6 months of essential expenses is the common benchmark — housing, utilities, groceries, transportation, insurance. If that feels out of reach right now, start with a mini-goal of $1,000-$2,000 CAD.",
        },
        {
          question: "Where should I keep my emergency fund?",
          answer:
            "A dedicated, high-interest savings account separate from your everyday chequing — reachable when you genuinely need it, but not so convenient you're tempted to dip in for non-emergencies.",
        },
        {
          question: "What counts as a true emergency?",
          answer:
            "Something unexpected — a layoff, a medical bill, a major repair. Planned spending like a vacation or a down payment doesn't qualify; the fund exists specifically to keep you out of debt during genuine surprises.",
        },
        {
          question: "How do I build an emergency fund on a tight budget?",
          answer:
            "Automate a small, consistent transfer every payday — even $25 CAD adds up. Treat it as a fixed bill, and look for subscriptions or memberships you can cancel to free up more.",
        },
        {
          question: "What should I do after using my emergency fund?",
          answer:
            "Make rebuilding it a priority as soon as the emergency has passed. Revisit your target at least once a year to make sure it still matches your actual expenses.",
        },
      ],
    },
  ],
};

export default content;
