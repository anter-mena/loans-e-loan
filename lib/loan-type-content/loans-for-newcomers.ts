import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "New to Canada? Get personal loans for newcomers with limited credit history. Newcomer-friendly lenders, fast approval. Build your Canadian credit.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans for New Canadians" },
    {
      type: "paragraph",
      text: "Moving to a new country comes with significant financial challenges. As a newcomer to Canada, you may lack a Canadian credit history, making it difficult to get approved for traditional banking products. Personal loans designed for newcomers can help bridge that gap.",
    },

    { type: "heading", level: 2, text: "Challenges Newcomers Face" },
    {
      type: "list",
      items: [
        "No Canadian credit history — your credit score from your home country doesn't transfer",
        "Limited banking relationships — you're starting fresh with Canadian banks",
        "Upfront settlement costs — housing deposits, furniture, transportation, and licensing fees",
        "Income verification — new employment may not have a long enough history",
      ],
    },

    { type: "heading", level: 2, text: "Types of Newcomers Who Can Apply" },
    {
      type: "list",
      items: [
        "Permanent residents with valid PR cards",
        "Work permit holders with active employment",
        "International students with study permits and part-time income",
        "Refugees with valid documentation",
      ],
    },

    { type: "heading", level: 2, text: "How to Build Credit as a Newcomer" },
    {
      type: "list",
      ordered: true,
      items: [
        "Open a Canadian bank account — this is your foundation",
        "Get a secured credit card — use it for small purchases and pay in full",
        "Apply for a newcomer personal loan — responsible repayment builds your score",
        "Keep balances low — aim to use less than 30% of available credit",
        "Pay all bills on time — payment history is the biggest factor in your credit score",
      ],
    },

    { type: "heading", level: 2, text: "What to Look for in a Newcomer Loan" },
    {
      type: "list",
      items: [
        "Lenders who accept applicants with limited Canadian credit history",
        "Reasonable interest rates for your situation",
        "No requirement for a Canadian co-signer",
        "Flexible documentation requirements",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Can I get a loan as a newcomer to Canada?",
          answer:
            "Yes. Many lenders in our network specialize in working with newcomers, accepting alternative documentation like your work permit, PR card, or study permit alongside proof of income.",
        },
        {
          question: "Do I need a Canadian credit score to get a loan?",
          answer:
            "Not necessarily. Some newcomer-friendly lenders will consider your employment stability, income, and banking history in Canada instead of relying solely on a credit score.",
        },
        {
          question: "What documents do newcomers need to apply?",
          answer:
            "You'll typically need valid immigration documents (PR card, work permit, or study permit), proof of Canadian income or a job offer, and an active Canadian bank account.",
        },
        {
          question: "How can newcomers build credit quickly?",
          answer:
            "Opening a Canadian bank account, getting a secured credit card, keeping balances low, and making all payments on time are the fastest ways for newcomers to build a strong Canadian credit history.",
        },
      ],
    },
  ],
};

export default content;
