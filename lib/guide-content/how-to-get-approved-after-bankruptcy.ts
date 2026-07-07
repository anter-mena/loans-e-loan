import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Bankruptcy doesn't close the door on borrowing forever. Here's the realistic timeline for getting approved again in Canada, and how to rebuild along the way.",
  blocks: [
    { type: "heading", level: 2, text: "Working Your Way Back" },

    { type: "heading", level: 3, text: "1. Know Where You Stand on the Timeline" },
    {
      type: "paragraph",
      text: "A first bankruptcy sits on your Canadian credit report for 6 years after discharge (7 in some provinces); a second stays for 14. The impact fades as it ages, but the real turning point is your discharge date — that's when your legal obligation to creditors ends and rebuilding can genuinely start.",
    },
    {
      type: "callout",
      text: "Your discharge date is the single most important marker in this whole process.",
    },

    { type: "heading", level: 3, text: "2. Get Your Discharge Certificate First" },
    {
      type: "paragraph",
      text: "Most lenders won't even consider you before you're officially discharged. Your Licensed Insolvency Trustee issues the Certificate of Discharge, and some lenders want 1-2 years of distance from that date before they'll look at an application.",
    },
    {
      type: "callout",
      text: "If you went through a consumer proposal instead of bankruptcy, you're likely in a somewhat better position — lenders tend to view proposals more favourably.",
    },

    { type: "heading", level: 3, text: "3. Start Rebuilding Right Away" },
    {
      type: "paragraph",
      text: "Once discharged, a secured card — typically a $500 deposit — is the most common starting point. Some credit unions run \"fresh start\" programs specifically for this. Make small purchases, pay them off fully and on time, and expect real movement in your score after 12-18 months.",
    },
    {
      type: "callout",
      text: "Several Canadian issuers offer secured cards built specifically for post-bankruptcy rebuilding.",
    },

    { type: "heading", level: 3, text: "4. Look for Lenders That Specialize in This" },
    {
      type: "paragraph",
      text: "Not every lender writes you off. Online and alternative lenders often focus on second-chance lending, weighing your current income and spending rather than dwelling on the bankruptcy itself. Expect a higher rate at first — typically 19.99%-34.99% APR — dropping as your record improves. Credit unions tend to be more understanding than the big banks here too.",
    },
    {
      type: "callout",
      text: "Credit unions generally show more flexibility toward a past bankruptcy than the major banks do.",
    },

    { type: "heading", level: 3, text: "5. Put Together a Strong Application" },
    {
      type: "paragraph",
      text: "Bring more than the basics: your Certificate of Discharge, proof of stable employment (six months or more preferred), recent pay stubs and bank statements, and ideally a short explanation of what led to the bankruptcy and what's different now. The more complete the picture, the better your odds.",
    },
    {
      type: "callout",
      text: "A brief, honest explanation letter about the bankruptcy and what's changed since can genuinely sway a lender's decision.",
    },

    { type: "heading", level: 3, text: "6. Start Small" },
    {
      type: "paragraph",
      text: "Skip the big loan right out of the gate. A $1,000-$3,000 amount you can comfortably handle builds a track record — after one or two of those, you'll typically qualify for more at better rates. The FCAC recommends keeping total debt payments under 40% of gross income throughout.",
    },
    {
      type: "callout",
      text: "Every loan you repay successfully strengthens the next application.",
    },

    { type: "heading", level: 2, text: "A Few More Things to Keep in Mind" },
    {
      type: "list",
      items: [
        "Give it at least 12 months post-discharge before applying for unsecured credit",
        "Keep all debt payments under 40% of gross income",
        "Check your Equifax or TransUnion report monthly for accuracy",
        "A non-profit credit counsellor can provide ongoing guidance if you want it",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How soon after bankruptcy can I get approved for a loan?",
          answer:
            "You generally need your Certificate of Discharge first, and some lenders want 1-2 years of distance from that date. Waiting at least 12 months while rebuilding credit is a reasonable approach.",
        },
        {
          question: "What interest rate should I expect after bankruptcy?",
          answer:
            "Lenders specializing in post-bankruptcy borrowers typically charge 19.99%-34.99% APR at first, dropping as consistent on-time payments rebuild your record.",
        },
        {
          question: "Do I need a Certificate of Discharge to apply?",
          answer:
            "Yes — your Licensed Insolvency Trustee issues it once your bankruptcy is complete, and most lenders will ask for it before considering an application.",
        },
        {
          question: "Is a consumer proposal better than bankruptcy for future borrowing?",
          answer:
            "Generally, yes — proposals tend to be viewed more favourably by lenders than a completed bankruptcy, which can make approval somewhat easier.",
        },
        {
          question: "How much should I borrow for my first loan after bankruptcy?",
          answer:
            "Start small — $1,000 to $3,000, an amount you can comfortably repay. Success there opens the door to larger amounts at better rates down the line.",
        },
      ],
    },
  ],
};

export default content;
