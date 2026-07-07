import type { GuideContent } from "@/lib/guides";

const content: GuideContent = {
  subtitle:
    "Why payday loans are effectively illegal in Quebec, and what the province's uniquely strong Consumer Protection Act means for borrowers.",
  blocks: [
    { type: "heading", level: 2, text: "The De Facto Payday Loan Ban" },
    {
      type: "paragraph",
      text: "Quebec's Consumer Protection Act (CPA) caps all consumer credit at 35% APR — and since payday loans typically run far higher than that, they simply can't operate legally in the province. That makes Quebec's borrower protection unusually strong compared to the rest of Canada.",
    },
    {
      type: "callout",
      text: "A payday lender operating in Quebec is very likely doing so illegally — report them to the OPC.",
    },

    { type: "heading", level: 2, text: "What the CPA Actually Covers" },
    {
      type: "paragraph",
      text: "Quebec's CPA is among the strongest consumer credit frameworks in North America: a 35% APR ceiling, mandatory French-language contracts, strict rules on lending advertisements, bans on certain penalty clauses, and firm protection against unfair contract terms. The Office de la protection du consommateur (OPC) enforces all of it.",
    },
    {
      type: "callout",
      text: "Every lending contract in Quebec must be available in French — an English-only agreement may signal a compliance problem.",
    },

    { type: "heading", level: 2, text: "Protections You Won't Find Elsewhere" },
    {
      type: "paragraph",
      text: "Quebec goes further than other provinces: no early-repayment penalties on personal loans under $7,000, a 10-day cancellation right on many credit contracts, and a cap on the total cost of credit that includes every fee and charge.",
    },
    {
      type: "callout",
      text: "Check whether the 10-day cancellation right applies to your specific loan — it covers many, but not all, consumer credit contracts.",
    },

    { type: "heading", level: 2, text: "Debt Collection in Quebec" },
    {
      type: "paragraph",
      text: "The OPC enforces collection rules too: no harassment, threats, or intimidation, contact restricted to reasonable hours, and no misrepresenting the legal consequences of not paying. Quebec's Civil Code adds further debtor protections not present in the rest of Canada's common-law provinces.",
    },
    {
      type: "callout",
      text: "Quebec's civil law system gives borrowers protections that often differ — and go further — than common-law Canada.",
    },

    { type: "heading", level: 2, text: "Where to Turn in Quebec" },
    {
      type: "paragraph",
      text: "The Office de la protection du consommateur (opc.gouv.qc.ca) handles lending complaints. Option consommateurs and Union des consommateurs are non-profit advocacy groups, and Justice Québec offers general legal information.",
    },
    {
      type: "callout",
      text: "The OPC's website includes a bilingual credit cost calculator worth using before you sign anything.",
    },

    { type: "heading", level: 2, text: "Quick Reference" },
    {
      type: "list",
      items: [
        "Quebec's 35% APR cap effectively bans payday loans",
        "Lending contracts must be available in French",
        "Many consumer credit contracts carry a 10-day cancellation right",
        "The OPC provides free assistance for lending complaints",
      ],
    },

    {
      type: "faq",
      items: [
        {
          question: "Are payday loans legal in Quebec?",
          answer:
            "Effectively no — the CPA's 35% APR cap on all consumer credit is below what payday loans typically charge, so they can't operate legally in the province.",
        },
        {
          question: "What is the maximum interest rate a lender can charge in Quebec?",
          answer:
            "35% APR under the CPA, applying to all consumer credit — among the strongest rate caps in North America.",
        },
        {
          question: "Do lending contracts have to be in French in Quebec?",
          answer:
            "Yes — the CPA requires lending agreements to be available in French. An English-only contract may point to a compliance issue.",
        },
        {
          question: "Can I cancel a loan after signing in Quebec?",
          answer:
            "Many consumer credit contracts come with a 10-day cancellation right — check whether it applies to your specific agreement.",
        },
        {
          question: "Where can I report a lending issue in Quebec?",
          answer:
            "The Office de la protection du consommateur (opc.gouv.qc.ca) handles complaints and offers a bilingual credit cost calculator. Option consommateurs and Union des consommateurs can also help.",
        },
      ],
    },
  ],
};

export default content;
