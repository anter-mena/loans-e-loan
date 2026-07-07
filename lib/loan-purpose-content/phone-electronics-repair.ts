import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need to fix your phone or laptop? Compare personal loans for electronics repair costs in Canada. Quick approval for device repairs.",
  blocks: [
    { type: "heading", level: 2, text: "Financing Phone and Electronics Repairs in Canada" },
    {
      type: "paragraph",
      text: "A broken phone, laptop, or essential electronic device can disrupt your daily life and work. When repair costs exceed what you can pay out of pocket, a small personal loan can help you get back up and running quickly.",
    },

    { type: "heading", level: 2, text: "Common Repair Costs in Canada" },
    {
      type: "table",
      headers: ["Device", "Typical Repair Cost (CAD)"],
      rows: [
        ["iPhone screen replacement", "$200-$450"],
        ["Samsung screen replacement", "$250-$500"],
        ["Laptop screen repair", "$200-$600"],
        ["MacBook repair", "$400-$1,200"],
        ["Tablet screen replacement", "$150-$400"],
        ["Water damage repair", "$100-$500"],
      ],
    },

    { type: "heading", level: 2, text: "When a Loan Makes Sense" },
    {
      type: "list",
      items: [
        "Your device is essential for work or school",
        "Repair cost is less than replacement cost",
        "You don't have an emergency fund to cover the expense",
        "You need the device fixed immediately",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Most Canadians borrow $500-$2,000 for electronics repairs. For multiple devices or premium repairs, you may need up to $3,000.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Get a repair quote from a certified technician",
        "Compare small personal loan options on Ask4Loan Canada",
        "Apply online — approval can be same-day",
        "Use funds to pay for repairs",
      ],
    },

    { type: "heading", level: 2, text: "Cost-Saving Tips" },
    {
      type: "list",
      items: [
        "Compare prices between authorized service centres and independent repair shops",
        "Check if your device is still under manufacturer warranty",
        "Look into your home insurance — some policies cover electronics",
        "Consider whether a refurbished replacement might be more cost-effective",
      ],
    },
  ],
};

export default content;
