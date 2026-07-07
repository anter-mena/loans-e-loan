import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Compare personal loans for car repairs in Canada. Cover mechanic bills, transmission, engine and brake repairs with affordable payments.",
  blocks: [
    { type: "heading", level: 2, text: "Is a Personal Loan Right for Your Car Repairs?" },
    {
      type: "paragraph",
      text: "Unexpected car repairs can strain any Canadian budget. Whether it's a transmission issue, brake replacement, or engine trouble, getting your vehicle back on the road is often urgent. A personal loan can help you cover repair costs without draining your savings.",
    },

    { type: "heading", level: 2, text: "Typical Car Repair Costs in Canada" },
    {
      type: "list",
      items: [
        "Brake Replacement: $300 to $800 per axle, depending on pads and rotors.",
        "Tire Replacement: $400 to $1,600 for a full set, depending on tire type and size.",
        "Alternator Replacement: $500 to $1,200 including labour.",
        "Transmission Repair: $2,000 to $6,000 for major transmission work.",
        "Engine Issues: $1,500 to $4,000+ for head gasket or engine repairs.",
        "Starter Replacement: $400 to $900 including parts and labour.",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Based on typical Canadian repair costs, a personal loan between $1,000 and $5,000 is most common. For major repairs like transmission or engine work, you may need up to $6,000.",
    },

    { type: "heading", level: 2, text: "Pros and Cons: Personal Loan vs. Other Options" },
    { type: "heading", level: 3, text: "Personal Loan Pros" },
    {
      type: "list",
      items: [
        "Fixed Payments: Predictable monthly payments over a set period.",
        "No Collateral Required: Your vehicle is not at risk, unlike with a title loan.",
        "Quick Funding: Many Canadian lenders provide funds within 1-3 business days.",
      ],
    },
    { type: "heading", level: 3, text: "Personal Loan Cons" },
    {
      type: "list",
      negative: true,
      items: [
        "Interest Costs: You will pay interest on the borrowed amount.",
        "Credit Impact: Late payments can hurt your credit score.",
      ],
    },
    { type: "heading", level: 3, text: "Other Options to Consider" },
    {
      type: "list",
      items: [
        "Credit Card: Quick access but often high interest rates.",
        "Savings: Best option if available, as it avoids interest.",
        "Mechanic Payment Plans: Some shops offer in-house financing.",
        "Line of Credit: May offer lower rates if you already have one set up.",
      ],
    },

    { type: "heading", level: 2, text: "How to Apply in Canada" },
    {
      type: "list",
      ordered: true,
      items: [
        "Compare Lenders: Review rates from banks, credit unions, and online lenders.",
        "Gather Documents: Government ID, proof of income, bank statements.",
        "Submit Application: Apply online through most Canadian lenders.",
        "Receive Funds: Funds are typically deposited within 1-3 business days if approved.",
      ],
    },
  ],
};

export default content;
