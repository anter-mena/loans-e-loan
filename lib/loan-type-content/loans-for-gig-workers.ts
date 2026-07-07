import type { ArticleContent } from "@/lib/content-blocks";

const content: ArticleContent = {
  subtitle:
    "Self-employed or gig worker in Canada? Personal loans for freelancers, Uber drivers, DoorDash couriers & contractors. Flexible income requirements.",
  blocks: [
    { type: "heading", level: 2, text: "Personal Loans for Canada's Gig Economy" },
    {
      type: "paragraph",
      text: "Whether you drive for Uber, deliver for DoorDash, freelance on Upwork, or run a small contracting business, traditional lenders often make it difficult to qualify when your income is non-traditional. Our lender network includes options specifically designed for gig workers.",
    },

    { type: "heading", level: 2, text: "Who Qualifies as a Gig Worker?" },
    {
      type: "list",
      items: [
        "Rideshare drivers — Uber, Lyft",
        "Delivery couriers — DoorDash, Skip the Dishes, Instacart",
        "Freelancers — writers, designers, developers, consultants",
        "Independent contractors — construction, cleaning, tutoring",
        "Side-hustle earners — Etsy sellers, content creators",
      ],
    },

    { type: "heading", level: 2, text: "Challenges Gig Workers Face with Loans" },
    {
      type: "table",
      headers: ["Challenge", "How We Help"],
      rows: [
        ["Irregular income", "Lenders assess earnings over time"],
        ["No pay stubs", "Bank statements accepted as income proof"],
        ["Multiple income sources", "All gig income can be combined"],
        ["Seasonal fluctuations", "3-6 month averages considered"],
      ],
    },

    { type: "heading", level: 2, text: "What You'll Need to Apply" },
    {
      type: "list",
      items: [
        "Government-issued ID",
        "Proof of income — bank statements showing regular deposits (3-6 months)",
        "Active bank account — where your gig payments are deposited",
        "Proof of address — utility bill or lease agreement",
      ],
    },

    { type: "heading", level: 2, text: "Tips for Gig Workers Seeking Loans" },
    {
      type: "list",
      items: [
        "Track all income: Keep records of every payment received.",
        "Use a dedicated business account: Makes income verification easier.",
        "File your taxes: A Notice of Assessment strengthens your application.",
        "Build credit gradually: Even small loans repaid on time help improve your score.",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Can gig workers qualify for personal loans in Canada?",
          answer:
            "Yes. Many Canadian lenders now offer personal loans designed for gig and self-employed workers, assessing bank statements and deposit history instead of requiring traditional pay stubs.",
        },
        {
          question: "What income proof do gig workers need?",
          answer:
            "Most lenders ask for 3-6 months of bank statements showing regular deposits from your gig platform(s), along with your most recent Notice of Assessment if available.",
        },
        {
          question: "Do lenders count all my gig income?",
          answer:
            "Many lenders will combine income from multiple gig platforms or side hustles, as long as you can show consistent deposits over several months.",
        },
        {
          question: "What if my gig income is seasonal or irregular?",
          answer:
            "Lenders that specialize in gig worker loans typically average your income over 3-6 months to smooth out seasonal fluctuations, rather than requiring a fixed monthly salary.",
        },
      ],
    },
  ],
};

export default content;
