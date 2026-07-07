import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "How BC's Business Practices and Consumer Protection Act shapes payday and personal lending — the caps, cooling-off rights, and where to complain.",
  blocks: [
    { type: "heading", level: 2, text: "Payday Loans Under BC Law" },
    {
      type: "paragraph",
      text: "BC regulates payday lending through the Business Practices and Consumer Protection Act. The cost ceiling is $15 per $100 borrowed, every lender needs a Consumer Protection BC license, loans max out at $1,500 with a 62-day term limit, and repeat loans within the cooling-off window are banned.",
    },
    {
      type: "callout",
      text: "Consumer Protection BC keeps a public registry of licensed payday lenders at consumerprotectionbc.ca — check it before borrowing.",
    },

    { type: "heading", level: 2, text: "The Rate Ceiling" },
    {
      type: "paragraph",
      text: "BC falls under the same federal 35% APR criminal rate cap as the rest of Canada, and the BPCPA additionally monitors and can act against lenders using unfair or deceptive practices — including misleading rate advertising.",
    },
    {
      type: "callout",
      text: "BC has historically been ahead of most provinces on lending protection — file a complaint with Consumer Protection BC if something looks off.",
    },

    { type: "heading", level: 2, text: "Cooling-Off and Cancellation Rights" },
    {
      type: "paragraph",
      text: "Payday loans in BC come with a 2-business-day cancellation window — during that time you can return the funds and cancel with no fees. Other consumer credit contracts carry their own cancellation rights under the same Act, depending on the contract type.",
    },
    {
      type: "callout",
      text: "The cooling-off clock starts when you receive the funds, not when you sign.",
    },

    { type: "heading", level: 2, text: "Debt Collection Rules" },
    {
      type: "paragraph",
      text: "BC's Debt Collection Industry Act keeps collectors in check: they must identify themselves and the creditor, can't call at unreasonable hours, can't use threats or harassment, and must stop contacting you at work if you ask them to. Every collector must be licensed.",
    },
    {
      type: "callout",
      text: "A written request to stop workplace calls is legally binding on the collector in BC.",
    },

    { type: "heading", level: 2, text: "Where to Turn in BC" },
    {
      type: "paragraph",
      text: "Consumer Protection BC handles complaints about licensed lenders. The Credit Counselling Society, headquartered in BC, offers free financial counselling. Access Pro Bono provides free legal help for qualifying residents, and the FCAC covers federally regulated institutions.",
    },
    {
      type: "callout",
      text: "Consumer Protection BC typically responds to complaints within 10 business days and can pursue enforcement against non-compliant lenders.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Verify a payday lender's license through Consumer Protection BC",
        "You have 2 business days to cancel a payday loan",
        "Consumer Protection BC: 1-888-564-9963",
        "Free credit counselling through the Credit Counselling Society",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "What's the maximum payday loan amount and term in BC?",
          answer:
            "Up to $1,500 for a maximum of 62 days, with a cost cap of $15 per $100 borrowed, under the Business Practices and Consumer Protection Act.",
        },
        {
          question: "Can I cancel a payday loan after I receive the funds in BC?",
          answer:
            "Yes — a 2-business-day cancellation window starts once you receive the funds, letting you return the money and cancel with no fees.",
        },
        {
          question: "Is there a cap on interest rates for personal loans in BC?",
          answer:
            "Yes — the federal 35% APR cap applies, and the BPCPA can separately act against lenders engaging in unfair or deceptive practices like misleading rate advertising.",
        },
        {
          question: "How do I verify a lender is licensed in BC?",
          answer:
            "Check Consumer Protection BC's public registry at consumerprotectionbc.ca before borrowing, and file a complaint there if you run into unfair practices.",
        },
        {
          question: "Where can I get free help with debt in BC?",
          answer:
            "The Credit Counselling Society offers free counselling, Access Pro Bono provides free legal advice for qualifying residents, and Consumer Protection BC (1-888-564-9963) handles complaints about licensed lenders.",
        },
      ],
    },
  ],
};

export default content;
