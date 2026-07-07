import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need to pay for professional certification or licensing? Compare personal loans for career development costs in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Investing in Your Career with a Personal Loan" },
    {
      type: "paragraph",
      text: "Professional certifications and licenses can significantly boost your earning potential. When the upfront cost is a barrier, a personal loan can help you invest in your career growth.",
    },

    { type: "heading", level: 2, text: "Common Certification Costs in Canada" },
    {
      type: "table",
      headers: ["Certification", "Estimated Cost (CAD)"],
      rows: [
        ["CPA (Chartered Professional Accountant)", "$3,000-$8,000"],
        ["PMP (Project Management Professional)", "$1,500-$3,000"],
        ["Real estate license", "$2,000-$5,000"],
        ["Trades certification (Red Seal)", "$1,000-$4,000"],
        ["IT certifications (AWS, Azure)", "$500-$2,500"],
        ["Healthcare certifications", "$1,000-$5,000"],
        ["Commercial driver's license (CDL)", "$3,000-$8,000"],
      ],
    },

    { type: "heading", level: 2, text: "Return on Investment" },
    {
      type: "paragraph",
      text: "Many professional certifications lead to salary increases of 10-25%. The loan cost is often recovered within the first year of higher earnings.",
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Typically $1,000-$8,000 depending on the certification and whether exam prep courses are included.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Research certification requirements and total costs",
        "Check if your employer offers education reimbursement",
        "Apply for a personal loan through Ask4Loan Canada",
        "Pay for courses, exams, and study materials",
      ],
    },

    { type: "heading", level: 2, text: "Tax Benefits" },
    {
      type: "list",
      items: [
        "Tuition amounts over $100 may qualify for the federal tuition tax credit",
        "Employment-related certification costs may be tax-deductible",
        "Keep all receipts for your tax return",
        "Consult the CRA website or a tax professional for eligibility details",
      ],
    },
  ],
};

export default content;
