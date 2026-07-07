import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need to install a home security system? Compare personal loans for home safety equipment and installation in Canada.",
  blocks: [
    { type: "heading", level: 2, text: "Protecting Your Home with a Security System" },
    {
      type: "paragraph",
      text: "A comprehensive home security system can protect your family and belongings, and may even reduce your home insurance premiums. If the upfront installation cost is a barrier, a personal loan can help.",
    },

    { type: "heading", level: 2, text: "Home Security Costs in Canada" },
    {
      type: "table",
      headers: ["System Type", "Estimated Cost (CAD)"],
      rows: [
        ["Basic alarm system", "$200-$800"],
        ["Smart home security package", "$500-$2,000"],
        ["Professional monitoring (annual)", "$300-$600"],
        ["Security cameras (4-8 cameras)", "$400-$2,500"],
        ["Smart locks and doorbell cameras", "$200-$800"],
        ["Full professional installation", "$1,000-$3,500"],
      ],
    },

    { type: "heading", level: 2, text: "Benefits Beyond Security" },
    {
      type: "list",
      items: [
        "Insurance savings: Many insurers offer 5-15% discounts for monitored systems",
        "Property value: Security systems can increase home resale value",
        "Peace of mind: 24/7 monitoring and alerts",
        "Smart home integration: Control lights, locks, and cameras remotely",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Most homeowners borrow $1,000-$5,000 for a complete security setup including equipment and professional installation.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Get quotes from reputable security companies",
        "Compare DIY vs. professional installation costs",
        "Apply for a personal loan through Ask4Loan Canada",
        "Have your system installed and activated",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Choosing a Security System" },
    {
      type: "list",
      items: [
        "Look for systems certified by ULC (Underwriters Laboratories of Canada)",
        "Compare at least 3 quotes before committing",
        "Check if your municipality requires an alarm permit",
        "Ask your insurance provider which systems qualify for discounts",
        "Read reviews on the Better Business Bureau website",
      ],
    },
  ],
};

export default content;
