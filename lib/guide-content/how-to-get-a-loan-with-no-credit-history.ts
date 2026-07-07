import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "No credit history yet? Newcomers, young adults, and first-time borrowers can still get approved in Canada — here's the practical path.",
  blocks: [
    {
      type: "paragraph",
      text: "A thin credit file makes borrowing harder, not impossible. Whether you've just moved to Canada, you're young, or you've simply never used credit, there's a real path to approval — it just takes a bit more preparation.",
    },
    { type: "heading", level: 2, text: "Working Through It" },

    { type: "heading", level: 3, text: "Step 1: Understand Why This Trips Lenders Up" },
    {
      type: "paragraph",
      text: "Lenders lean on your credit history to gauge risk. With none, they simply have no data to go on. That's different from having a bad history — Equifax and TransUnion track behaviour, not the absence of it, and some lenders specifically cater to thin-file applicants.",
    },
    {
      type: "callout",
      text: "No history isn't the same as bad credit — some lenders actually prefer a blank slate to a record of missed payments.",
    },

    { type: "heading", level: 3, text: "Step 2: Confirm You're Actually Starting From Zero" },
    {
      type: "paragraph",
      text: "Before assuming you have nothing, pull a free report from Equifax and TransUnion. A phone contract, utility account, or student loan may have already opened a thin file you didn't know existed — even one or two accounts gives a lender something to work with.",
    },
    {
      type: "callout",
      text: "Request from both bureaus — they don't always have identical data.",
    },

    { type: "heading", level: 3, text: "Step 3: Start Building Something, Fast" },
    {
      type: "paragraph",
      text: "A secured credit card (usually $300-$500 in collateral), becoming an authorized user on a family member's card, or a credit-builder loan through your bank or credit union are all quick ways to open a file. Three to six months of on-time payments is enough to generate a usable score.",
    },
    {
      type: "callout",
      text: "A secured card from a major bank typically needs a $200-$500 deposit and reports to both bureaus.",
    },

    { type: "heading", level: 3, text: "Step 4: Find Lenders Built for This Situation" },
    {
      type: "paragraph",
      text: "Some Canadian lenders specifically work with first-time borrowers. Online lenders often weigh bank transaction history, job stability, and income confirmation instead of leaning entirely on a score. Credit unions also tend to be more flexible than big banks, especially if you already bank with them.",
    },
    {
      type: "callout",
      text: "Alternative lenders may review 3-6 months of bank transactions to confirm income stability in place of a credit score.",
    },

    { type: "heading", level: 3, text: "Step 5: Build a Stronger Application" },
    {
      type: "paragraph",
      text: "With no credit file to lean on, bring more of everything else: income proof, residency proof, government ID, and bank statements showing responsible money management. Asking for a smaller amount, or offering a deposit, both help your odds — and a co-signer with solid credit can make a real difference.",
    },
    {
      type: "callout",
      text: "A co-signer with good credit can significantly boost your approval odds and may unlock a better rate.",
    },

    { type: "heading", level: 3, text: "Step 6: Apply Through a Comparison Platform" },
    {
      type: "paragraph",
      text: "Applying separately to several lenders means separate hard inquiries stacking up. A comparison platform uses a soft check to match you with lenders likely to approve you, protecting the thin file you're trying to build.",
    },
    {
      type: "callout",
      text: "Each hard inquiry can cost you 5-10 points — soft-check platforms sidestep that entirely.",
    },

    { type: "heading", level: 3, text: "Step 7: Keep Building From There" },
    {
      type: "paragraph",
      text: "Once your first loan is approved, pay every installment fully and on time — automate it if you can. Six to twelve months of consistent payments meaningfully improves your standing, and free tools like Borrowell can help you track the progress.",
    },
    {
      type: "callout",
      text: "Payment history makes up 35% of your Canadian credit score — even one missed payment sets back the progress noticeably.",
    },

    { type: "heading", level: 2, text: "A Few More Pointers" },
    {
      type: "list",
      items: [
        "Automate payments so nothing slips",
        "Keep card utilization under 30%",
        "Apply through one comparison platform rather than several lenders separately",
        "A credit-builder loan from your own bank or credit union is a solid starting point",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Is having no credit history the same as having bad credit?",
          answer:
            "No — no history just means there's no data for a lender to assess, while bad credit reflects an actual record of missed payments. Some lenders view a blank slate more favourably than a history of defaults.",
        },
        {
          question: "How can I quickly start building credit before applying for a loan?",
          answer:
            "A secured card ($300-$500 deposit), becoming an authorized user on someone else's account, or a credit-builder loan are all fast options. On-time payments for 3-6 months can produce a usable score.",
        },
        {
          question: "Will applying through a loan comparison platform hurt my credit?",
          answer:
            "Generally no — these platforms typically use a soft inquiry to match you with lenders, which doesn't touch your score. That protects a thin file far better than applying separately to multiple lenders and racking up hard inquiries.",
        },
        {
          question: "Can a co-signer help me get approved with no credit history?",
          answer:
            "Yes — a co-signer with established, solid credit can meaningfully improve your odds and may help you land a better rate.",
        },
        {
          question: "How long does it take to build a usable credit score?",
          answer:
            "A basic score can emerge after 3-6 months of on-time payments, with 6-12 months producing a more substantial improvement. Payment history is 35% of your score, so consistency is what matters most.",
        },
      ],
    },
  ],
};

export default content;
