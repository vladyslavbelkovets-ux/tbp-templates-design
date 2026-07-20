const templateGroups = {
  Receipts: [
    "Cash Receipt",
    "Donation Receipt",
    "General Receipt",
    "Pay Stub Paystub",
    "Payment Receipt",
    "Receipt Book",
    "Rent Receipt",
    "Sales Receipt",
  ],
  Estimates: [
    "Construction Estimate Template",
    "Contractor Estimate Template",
    "Estimate Template",
    "Job Estimate Template",
    "Painting Estimate Template",
    "Roofing Estimate Template",
  ],
  "Business Agreements": [
    "Consulting Agreement Template",
    "Independent Contractor Agreement",
    "Loan Agreement Template",
    "Non-Disclosure Agreement Template",
    "Operating Agreement Template",
    "Partnership Agreement Template",
    "Promissory Note Template",
    "Purchase Agreement Template",
    "Service Agreement Template",
    "Settlement Agreement Template",
    "Subcontractor Agreement Template",
  ],
  "Financial Statements": [
    "Balance Sheet",
    "Profit & Loss (P&L) Statement",
  ],
  "Business Letters": [
    "Business Letter Template",
    "Cease and Desist Letter Template",
    "Demand Letter Template",
    "Offer Letter Template",
    "Termination Letter Template",
  ],
  Contracts: [
    "Business Contract",
    "Catering Contract",
    "Cleaning Contract",
    "Construction Contract",
    "Consulting Contract",
    "Contractor Contract",
    "Employment Contract",
    "Freelance Contract",
    "General Contract",
    "Landscaping Contract",
    "Nanny Contract",
    "Photography Contract",
    "Real Estate Contract",
    "Roofing Contract",
    "SEO Contract",
    "Sales Contract",
    "Service Contract",
  ],
  "Bill of Sale": [
    "Bill of Sale Template",
    "Boat Bill of Sale Template",
    "Car Bill of Sale Template",
    "Gun Bill of Sale Template",
    "Motorcycle Bill of Sale Template",
    "RV Bill of Sale Template",
    "Trailer Bill of Sale Template",
  ],
};

export const categories = ["All templates", ...Object.keys(templateGroups)];

export const templates = Object.entries(templateGroups).flatMap(([category, titles]) =>
  titles.map((title) => ({
    id: `${category}:${title}`,
    category,
    title,
    description: "Customize this ready-to-use template and download it as a PDF.",
    preview: `template-previews/${category}-${title}.png`,
  })),
);

export const templatesPerPage = 12;
