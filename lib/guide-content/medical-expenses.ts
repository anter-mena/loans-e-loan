import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Even with strong public healthcare, out-of-pocket medical costs add up fast in Canada. Here's how a personal loan can help cover the gap.",
  blocks: [
    {
      type: "paragraph",
      text: "Canada's healthcare system covers a lot, but not everything — dental work, fertility treatment, elective procedures, and specialized therapies often come with real out-of-pocket costs. A personal loan is one practical way to cover that gap without draining savings or delaying care.",
    },
    {
      type: "paragraph",
      text: "You get a lump sum upfront and repay it over time at a fixed rate, which for many Canadians is the difference between getting treatment now versus waiting until they've saved enough.",
    },

    { type: "heading", level: 2, text: "What Common Procedures Actually Cost" },
    {
      type: "list",
      items: [
        "Dental work: root canals, crowns, or braces can run $1,000-$8,000+ depending on complexity and location",
        "Vision correction: LASIK/PRK typically runs $1,800-$5,000 per eye",
        "Fertility treatment: IVF cycles run $10,000-$20,000, plus another $5,000-$10,000 in medication — provincial coverage varies and rarely covers it all",
        "Elective surgery: cosmetic procedures or specialized joint replacements can range $5,000-$25,000+",
        "Private nursing or home care: typically $30-$60/hour, which adds up fast",
        "Prescription medications: chronic conditions or specialized drugs can mean significant ongoing out-of-pocket cost",
        "Medical equipment: custom orthotics, mobility aids, or CPAP machines can run into the thousands",
      ],
    },

    { type: "heading", level: 2, text: "How Much to Borrow" },
    {
      type: "paragraph",
      text: "Only borrow what the procedure actually costs. Based on the ranges above, $3,000 to $25,000 covers most situations — get a firm quote from your provider first so you're not over- or under-borrowing.",
    },

    { type: "heading", level: 2, text: "Loan vs. Other Ways to Pay" },
    { type: "heading", level: 3, text: "In favour of a loan" },
    {
      type: "list",
      items: [
        "Funds can arrive quickly when treatment can't wait",
        "A fixed, predictable payment",
        "Generally cheaper than a credit card balance",
        "Usable across procedures, medication, and even travel to appointments",
      ],
    },
    { type: "heading", level: 3, text: "Trade-offs" },
    {
      type: "list",
      negative: true,
      items: [
        "It's new debt with interest attached",
        "A missed payment affects your credit",
        "If you own property, a HELOC might beat it on rate",
      ],
    },
    { type: "heading", level: 3, text: "Other ways to cover it" },
    {
      type: "list",
      items: [
        "A credit card — convenient, but usually the most expensive option for a large bill",
        "A clinic payment plan — often interest-free where available",
        "A HELOC — cheaper if you own a home, at the cost of putting it up as collateral",
        "Savings — the cheapest option by far if you have enough set aside",
      ],
    },
    {
      type: "callout",
      text: "Always exhaust provincial coverage and any private insurance first — they're your best defence against the full cost before a loan even enters the picture.",
    },

    { type: "heading", level: 2, text: "Applying" },
    {
      type: "list",
      ordered: true,
      items: [
        "Compare rates and fees across banks, credit unions, and online lenders",
        "Gather ID, income proof, proof of address, and bank statements",
        "Apply — often online in minutes",
        "Expect a credit check as part of the process",
        "Once approved, funds can land within 1-2 business days",
      ],
    },

    { type: "heading", level: 2, text: "Managing the Loan Responsibly" },
    {
      type: "list",
      items: [
        "Build the payment into your actual monthly budget before committing",
        "Read the agreement fully — rate, schedule, and any penalties",
        "Pay on time to protect your credit and avoid fees",
        "Set up autopay so nothing slips",
        "Add extra payments when you can to cut total interest",
        "Borrow only what the treatment actually requires",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "How do I apply for a loan for medical expenses?",
          answer:
            "Compare rates and fees across a few lenders, gather your ID, income proof, and bank statements, then apply — often online in minutes. Expect a credit check before funding.",
        },
        {
          question: "What loan amounts are available for medical expenses?",
          answer:
            "Typically $3,000 to $25,000, depending on the procedure. Get a firm cost estimate from your provider first so you borrow the right amount.",
        },
        {
          question: "How fast can I get funds for medical expenses?",
          answer:
            "Once approved, funds can land in your account within 1-2 business days — important when treatment is time-sensitive.",
        },
        {
          question: "Are there alternatives to a personal loan for medical expenses?",
          answer:
            "Yes — exhaust provincial and private insurance coverage first. Beyond that, some clinics offer interest-free payment plans, a HELOC may offer a lower rate if you own a home, and using savings avoids interest entirely.",
        },
        {
          question: "What kinds of medical costs can this type of loan cover?",
          answer:
            "Dental work, vision correction like LASIK, fertility treatment, elective surgery, private nursing or home care, medications not fully covered by your plan, and equipment like CPAP machines or mobility aids.",
        },
      ],
    },
  ],
};

export default content;
