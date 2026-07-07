import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Need help paying for prescriptions? Compare personal loans for medication costs in Canada. Cover drug expenses until fully insured.",
  blocks: [
    { type: "heading", level: 2, text: "Covering Prescription Drug Costs" },
    {
      type: "paragraph",
      text: "While Canada has public healthcare, prescription medications are not fully covered for everyone. Out-of-pocket drug costs can be a significant burden, especially for chronic conditions or specialty medications.",
    },

    { type: "heading", level: 2, text: "Prescription Drug Costs in Canada" },
    {
      type: "table",
      headers: ["Medication Type", "Typical Annual Cost (CAD)"],
      rows: [
        ["Common chronic medications", "$500-$2,000/year"],
        ["Specialty medications", "$5,000-$30,000+/year"],
        ["Dental prescriptions", "$50-$500"],
        ["Mental health medications", "$300-$1,800/year"],
        ["Diabetes supplies", "$1,000-$5,000/year"],
      ],
    },

    { type: "heading", level: 2, text: "Provincial Drug Coverage" },
    {
      type: "list",
      items: [
        "Ontario: OHIP+ covers those under 25; the Trillium Drug Program is available for others.",
        "BC: Fair PharmaCare, based on income.",
        "Alberta: Coverage available for seniors, low-income individuals, and specific conditions.",
        "Quebec: Mandatory prescription drug insurance for all residents.",
      ],
    },

    { type: "heading", level: 2, text: "When a Loan Makes Sense" },
    {
      type: "list",
      items: [
        "You have a coverage gap between insurance plans",
        "Your deductible is high and you need medications now",
        "You need a specialty medication not covered by your plan",
        "You're waiting for insurance approval",
      ],
    },

    { type: "heading", level: 2, text: "Recommended Loan Amounts" },
    {
      type: "paragraph",
      text: "Typically $500-$5,000 depending on medication needs.",
    },

    { type: "heading", level: 2, text: "How to Apply" },
    {
      type: "list",
      ordered: true,
      items: [
        "Talk to your pharmacist about generic alternatives",
        "Check your provincial drug plan eligibility",
        "Apply for a personal loan through Ask4Loan Canada if needed",
        "Use funds to cover out-of-pocket medication costs",
      ],
    },

    { type: "heading", level: 2, text: "Cost-Saving Resources" },
    {
      type: "list",
      items: [
        "Ask your doctor about generic or biosimilar alternatives",
        "Check manufacturer patient assistance programs",
        "Use pharmacy discount programs",
        "Apply for your provincial pharmacare program",
        "The Canadian government is working toward national pharmacare — check Canada.ca for updates",
      ],
    },
  ],
};

export default content;
