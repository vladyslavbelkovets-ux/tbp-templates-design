import { useEffect, useMemo, useRef, useState } from "react";
import {
  Airplane,
  Buildings,
  CaretDown,
  CaretLeft,
  CaretRight,
  ChartBar,
  Desktop,
  DownloadSimple,
  FileText,
  Heartbeat,
  House,
  Info,
  Keyboard,
  List,
  MagnifyingGlass,
  Signature,
  UsersThree,
  Wrench,
  X,
} from "@phosphor-icons/react";
import { Button, IconButton, Input } from "@universe-forma/ui-pes";
import { categories, formTemplates, invoiceTemplates, serviceCategories, templates, templatesPerPage } from "./templateData";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setMatches(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

const footerColumns = [
  {
    title: "Edit PDF",
    links: [
      "Edit PDF",
      "Sign PDF",
      "Delete Pages",
      "Merge PDF",
      "Merge Images",
      "Split PDF",
      "Compress PDF",
      "Compress Images",
      "OCR PDF",
      "Remove Watermark",
      "Unlock PDF",
      "Enhance Image",
    ],
  },
  {
    title: "Convert from PDF",
    links: ["PDF to Word", "PDF to PNG", "PDF to JPG", "PDF to EPUB", "PDF to Excel", "PDF to PPTX", "PDF to RTF"],
  },
  {
    title: "Convert to PDF",
    links: ["Word to PDF", "PNG to PDF", "JPG to PDF", "EPUB to PDF", "Excel to PDF", "PPTX to PDF", "RTF to PDF"],
  },
  {
    title: "Audio & Video",
    links: ["Audio to Audio", "Audio to Video", "Video to Audio", "Video to Video", "Transcribe Audio", "Transcribe Video"],
  },
  {
    title: "Forms",
    links: ["Form W-9", "Form DS-11", "Form DS-82", "Form CMS-1500", "Form I-9", "Form I-864", "Form W-4"],
  },
];

const bottomColumns = [
  {
    title: "Our Team",
    icon: "footer-team.svg",
    links: ["About Us", "Contact Us", "FAQ"],
  },
  {
    title: "Legal Information",
    icon: "footer-legal.svg",
    links: ["Subscription Terms", "Terms and Conditions", "Money-Back Policy", "Privacy Policy", "Cookie Policy"],
  },
  {
    title: "Languages",
    icon: "footer-language.svg",
    links: ["English", "Français", "Deutsch", "Italiana"],
  },
];

function Logo({ className = "" }) {
  return (
    <a className={`logo ${className}`} href="#top" aria-label="TheBestPDF home">
      <img className="logo__mark" src={asset("logo-mark.svg")} alt="" />
      <img className="logo__wordmark" src={asset("logo-wordmark.svg")} alt="TheBestPDF" />
    </a>
  );
}

function Header({ onMessage }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "PDF Converter", icon: "nav-converter.svg", iconOverlay: "nav-converter-arrow.svg" },
    { label: "PDF Editor", icon: "nav-editor.svg" },
    { label: "Forms", icon: "nav-forms.svg" },
    { label: "Translate PDF", icon: "nav-translate.svg" },
    { label: "Other" },
  ];

  return (
    <header className="site-header" id="top">
      <div className="site-header__inner">
        <Logo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.label} className="desktop-nav__link" href="#templates">
              {item.icon ? (
                <span className="nav-icon" aria-hidden="true">
                  <img className="nav-icon__base" src={asset(item.icon)} alt="" />
                  {item.iconOverlay ? <img className="nav-icon__overlay" src={asset(item.iconOverlay)} alt="" /> : null}
                </span>
              ) : null}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
        <Button
          variant="outlined"
          color="primary"
          size="md"
          className="login-button"
          onClick={() => onMessage("Login action selected")}
        >
          Log in
        </Button>
        <IconButton
          className="mobile-menu-button"
          type="button"
          variant="outlined"
          color="primary"
          size="ms"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </IconButton>
      </div>
      {open ? (
        <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a key={item.label} href="#templates" onClick={() => setOpen(false)}>
              {item.icon ? (
                <span className="nav-icon" aria-hidden="true">
                  <img className="nav-icon__base" src={asset(item.icon)} alt="" />
                  {item.iconOverlay ? <img className="nav-icon__overlay" src={asset(item.iconOverlay)} alt="" /> : null}
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Hero({ config, query, onQueryChange, onMessage }) {
  const isMobile = useMediaQuery("(max-width: 620px)");
  const placeholder = isMobile ? config.mobilePlaceholder : config.placeholder;

  return (
    <section className="hero">
      <img className="hero__background" src={asset("hero-background.png")} alt="" />
      <Header onMessage={onMessage} />
      <div className="hero__content">
        <div className="hero__copy">
          <h1>
            Ready-to-use <span>{config.heading}</span>
          </h1>
          <p className="hero__tagline hero__tagline--desktop">{config.desktopTagline}</p>
          <p className="hero__tagline hero__tagline--mobile">{config.mobileTagline}</p>
        </div>
        <Input
          id={`${config.key}-search`}
          type="search"
          size="lg"
          bg="default"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={placeholder}
          aria-label={placeholder.replace("…", "")}
          rootClassName="hero-search"
          containerClassName="hero-search__container"
          className="hero-search__control"
          leftIcon={<MagnifyingGlass size={24} weight="regular" />}
        />
      </div>
    </section>
  );
}

function TemplateCard({ template, onUse, state = "interactive", ctaLabel = "Use template" }) {
  return (
    <article
      className={`template-card${state === "hover" ? " template-card--hover" : ""}`}
      onClick={() => onUse(template)}
    >
      <div className="template-card__dock">
        <div className={`template-card__preview${template.previewFit === "stretch" ? " template-card__preview--stretch" : ""}${template.previewTone === "monochrome" ? " template-card__preview--monochrome" : ""}`}>
          <img src={asset(template.preview)} alt={`${template.title} preview`} />
        </div>
      </div>
      <div className="template-card__body">
        <div className="template-card__copy">
          <h2>{template.title}</h2>
          <p>{template.description}</p>
        </div>
        <Button
          variant="outlined"
          color="action"
          size="ms"
          className="template-card__button"
        >
          {ctaLabel}
        </Button>
        <IconButton
          className="template-card__chevron"
          type="button"
          variant="text"
          color="action"
          size="xs"
          aria-label={`Use ${template.title}`}
        >
          <CaretRight size={24} />
        </IconButton>
      </div>
    </article>
  );
}

function CardStatesPreview() {
  const previewTemplate = templates[0];

  return (
    <main className="card-states-preview" aria-label="Template card states">
      <TemplateCard template={previewTemplate} state="default" onUse={() => {}} />
      <TemplateCard template={previewTemplate} state="hover" onUse={() => {}} />
    </main>
  );
}

function Pagination({ page, pageCount, onPageChange }) {
  const pages = useMemo(() => {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, index) => index + 1);
    if (page <= 3) return [1, 2, 3, "end-ellipsis", pageCount - 2, pageCount - 1, pageCount];
    if (page >= pageCount - 2) return [1, 2, 3, "start-ellipsis", pageCount - 2, pageCount - 1, pageCount];
    return [1, "start-ellipsis", page - 1, page, page + 1, "end-ellipsis", pageCount];
  }, [page, pageCount]);

  return (
    <nav className="pagination" aria-label="Template pages">
      <IconButton variant="text" color="action" size="xs" type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onPageChange(Math.max(1, page - 1))}>
        <CaretLeft size={18} weight="bold" />
      </IconButton>
      {pages.map((item) =>
        typeof item === "string" ? (
          <span key={item} className="pagination__ellipsis">…</span>
        ) : (
          <Button
            variant="text"
            color="action"
            size="sm"
            type="button"
            key={item}
            className={page === item ? "is-active" : ""}
            aria-current={page === item ? "page" : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </Button>
        ),
      )}
      <IconButton variant="text" color="action" size="xs" type="button" aria-label="Next page" disabled={page === pageCount} onClick={() => onPageChange(Math.min(pageCount, page + 1))}>
        <CaretRight size={18} weight="bold" />
      </IconButton>
    </nav>
  );
}

function Catalog({ config, query, onQueryChange, onMessage }) {
  const [activeCategory, setActiveCategory] = useState(config.categoryOptions[0]);
  const [page, setPage] = useState(1);
  const isMobile = useMediaQuery("(max-width: 620px)");
  const pageSize = isMobile ? 6 : templatesPerPage;
  const isMobileSearch = isMobile && query.trim().length > 0;
  const sourceItems = isMobile && config.mobileItems ? config.mobileItems : config.items;
  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const categoryIndex = config.categoryOptions.indexOf(activeCategory);

    return sourceItems.filter((template, index) => {
      const matchesCategory = isMobileSearch
        || activeCategory === config.categoryOptions[0]
        || (config.key === "templates" ? template.category === activeCategory : index % (config.categoryOptions.length - 1) === categoryIndex - 1);
      const matchesQuery = !normalizedQuery
        || `${template.title} ${template.category} ${template.description}`.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, config, isMobileSearch, query, sourceItems]);

  const pageCount = Math.max(1, Math.ceil(filteredTemplates.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const visibleTemplates = useMemo(() => {
    const firstTemplate = (currentPage - 1) * pageSize;
    return filteredTemplates.slice(firstTemplate, firstTemplate + pageSize);
  }, [currentPage, filteredTemplates, pageSize]);

  useEffect(() => {
    setPage(1);
  }, [activeCategory, pageSize, query]);

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
    onQueryChange("");
  };

  return (
    <main className={`catalog catalog--${config.key}${isMobileSearch ? " catalog--mobile-search" : ""}`} id="templates">
      <section className="catalog__panel">
        {!isMobileSearch ? (
          <aside className="categories" aria-label={`${config.singular} categories`}>
            <h2>Categories</h2>
            <div className="categories__list">
              {config.categoryOptions.map((category) => (
                <Button
                  variant="text"
                  color="action"
                  size="ms"
                  key={category}
                  type="button"
                  className={activeCategory === category ? "is-active" : ""}
                  aria-pressed={activeCategory === category}
                  onClick={() => chooseCategory(category)}
                >
                  {isMobile && config.key !== "templates" && category === config.categoryOptions[0] ? "All templates" : category}
                </Button>
              ))}
            </div>
          </aside>
        ) : null}
        <div className="template-list">
          {visibleTemplates.length ? (
            <div className="template-grid">
              {visibleTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  ctaLabel={config.ctaLabel}
                  onUse={() => onMessage(`${template.title} selected`)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state" role="status" aria-live="polite">
              <span className="empty-state__icon" aria-hidden="true">
                <img src={asset("search-off.svg")} alt="" />
              </span>
              <h2>No templates found</h2>
              <p>Try a different keyword or browse another category.</p>
              <Button
                variant="outlined"
                color="primary"
                size="md"
                className="empty-state__button"
                onClick={() => onQueryChange("")}
              >
                Clear search
              </Button>
            </div>
          )}
          {pageCount > 1 ? <Pagination page={currentPage} pageCount={pageCount} onPageChange={setPage} /> : null}
        </div>
      </section>
    </main>
  );
}

const contractCopy = {
  title: "Contract templates for every kind of agreement",
  paragraphs: [
    "A contract puts the terms of a deal in writing, so both sides know exactly what was agreed — what's being provided, what's owed, and what happens if something changes. Our templates cover the agreements businesses rely on most, from service and employment contracts to sales, partnership, and lease agreements.",
    "Open any template to fill in your details, edit the wording to fit your situation, add an electronic signature, and download a finished PDF. Reuse each one as often as you need, and keep your completed copies in one place.",
  ],
};

const contractTableRows = [
  ["Offer", "Exactly what is being bought or sold — for example, 36 units at $3 each, or office cleaning at $40 per hour per cleaner."],
  ["Acceptance", "Confirmation that the other side agrees to the terms, shown by signing the contract."],
  ["Consideration", "The thing of value being exchanged — usually money, but it can be other goods or services."],
  ["Key details", "Delivery dates, payment due dates and method, condition of goods, and what happens if either side can't deliver."],
  ["Signatures", "Both parties sign and date the contract to show they agree to the terms."],
];

const faqItems = [
  {
    question: "What is a contract template?",
    answer: "A contract template is a pre-structured agreement you can customize with the terms, parties, dates, and signatures relevant to your situation.",
  },
  {
    question: "When should I use one?",
    answer: "Use one whenever you need to put an agreement in writing so everyone can review the same terms and responsibilities.",
  },
  {
    question: "How do I create a contract from a template?",
    answer: "Choose a template, replace the sample details with your own, review the wording, add signatures, and download the finished PDF.",
  },
  {
    question: "Are these templates legal advice?",
    answer: "No. The templates are for general informational and self-help purposes and do not replace advice from a qualified attorney.",
  },
  {
    question: "Can I sign a contract online?",
    answer: "Yes. You can complete the template, add electronic signatures, and save or share the signed document online.",
  },
];

function FaqList({ title, items, className = "", idPrefix = "faq" }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className={`faq ${className}`.trim()}>
      <h3>{title}</h3>
      <div className="faq__list">
        {items.map((item, index) => {
          const isOpen = openFaq === index;
          const panelId = `${idPrefix}-panel-${index}`;

          return (
            <div className={`faq__item${isOpen ? " is-open" : ""}`} key={item.question}>
              <Button
                variant="text"
                color="action"
                size="md"
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenFaq(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span className="faq__icon" aria-hidden="true"><CaretDown size={24} /></span>
              </Button>
              <div className="faq__answer" id={panelId} hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ContractGuide() {
  return (
    <section className="contract-guide">
      <div className="contract-guide__inner">
        <div className="contract-guide__content">
          <div className="contract-guide__intro">
            <h2>{contractCopy.title}</h2>
            <div className="contract-guide__description">
              {contractCopy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <section className="contract-includes">
            <div className="contract-includes__heading">
              <h3>What to include in a contract</h3>
              <p>If it isn't written into the contract, it isn't part of the deal. At a minimum, cover the following:</p>
            </div>
            <div className="contract-table" role="table" aria-label="What to include in a contract">
              <div className="contract-table__row contract-table__header" role="row">
                <span role="columnheader">Element</span>
                <span role="columnheader">What it covers</span>
              </div>
              {contractTableRows.map(([element, coverage]) => (
                <div className="contract-table__row" role="row" key={element}>
                  <span className="contract-table__label" role="rowheader">{element}</span>
                  <span role="cell">{coverage}</span>
                </div>
              ))}
            </div>
          </section>
          <FaqList title="Frequently asked questions" items={faqItems} />
          <aside className="legal-alert" aria-label="Legal information">
            <span className="legal-alert__icon" aria-hidden="true"><Info size={24} weight="fill" /></span>
            <p>TheBestPDF is not a law firm and does not provide legal advice. These templates are provided for general informational and self-help purposes only, and are not a substitute for the advice of a qualified attorney.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

const formNeedItems = [
  {
    icon: Buildings,
    title: "Starting and running a business",
    description: "Official forms for setting up and meeting your filing deadlines.",
  },
  {
    icon: Airplane,
    title: "Travel and identity",
    description: "Apply for or renew a U.S. passport with the DS-11 and DS-82.",
  },
  {
    icon: FileText,
    title: "Filing your taxes",
    description: "Income, withholding, and self-employment forms, including tax forms for independent contractors like the W-9 and W-4.",
  },
  {
    icon: UsersThree,
    title: "Hiring and paying people",
    description: "Onboard and pay workers with the I-9, W-4, and contractor forms.",
  },
  {
    icon: Heartbeat,
    title: "Claiming healthcare costs",
    description: "Submit medical claims with the CMS-1500.",
  },
];

const professionalItems = [
  {
    icon: Desktop,
    title: "Self-employed & freelancers",
    description: "Send W-9s, report income, and stay on top of estimated taxes.",
  },
  {
    icon: ChartBar,
    title: "Small business owners",
    description: "Manage payroll, hiring, and tax filings without the paperwork pile.",
  },
  {
    icon: House,
    title: "Individuals & households",
    description: "Take care of passport, healthcare, and personal tax forms from home.",
  },
  {
    icon: Wrench,
    title: "Contractors",
    description: "Handle client and tax paperwork in minutes, then sign and send.",
  },
  {
    icon: UsersThree,
    title: "Small teams & HR",
    description: "Onboard employees with the I-9 and W-4 using shared access.",
  },
];

const formSteps = [
  {
    icon: MagnifyingGlass,
    number: "01",
    title: "Choose your form",
    description: "Search or pick a category to find the official form you need.",
  },
  {
    icon: Keyboard,
    number: "02",
    title: "Fill it out online",
    description: "Type straight into the form, field by field.",
  },
  {
    icon: Signature,
    number: "03",
    title: "Sign and date it",
    description: "Add your signature electronically in a click.",
  },
  {
    icon: DownloadSimple,
    number: "04",
    title: "Download or print",
    description: "Get a clean PDF ready to file or send.",
  },
];

const formFaqItems = [
  {
    question: "Are these the official, current versions of the forms?",
    answer: "We keep the library current, but you should always verify the latest version and filing requirements with the issuing agency.",
  },
  {
    question: "Can I fill out and sign a form online?",
    answer: "Yes. Open a form, complete its fields in your browser, and add an electronic signature before downloading it.",
  },
  {
    question: "Can I download or print the completed form?",
    answer: "Yes. You can download a clean PDF or print the completed form when you are ready to file or share it.",
  },
  {
    question: "Is my information secure?",
    answer: "Your form data is handled through secure browser and document-processing controls designed to protect your information.",
  },
  {
    question: "Does TheBestPDF provide legal or tax advice?",
    answer: "No. TheBestPDF provides convenient fillable templates and does not replace advice from a qualified legal or tax professional.",
  },
];

function FeatureGroup({ title, items }) {
  return (
    <section className="forms-feature-group">
      <h2>{title}</h2>
      <div className="forms-feature-group__grid">
        {items.map(({ icon: Icon, title: itemTitle, description }) => (
          <article className="forms-feature" key={itemTitle}>
            <span className="forms-feature__icon" aria-hidden="true"><Icon size={20} weight="fill" /></span>
            <div>
              <h3>{itemTitle}</h3>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FormsGuide() {
  return (
    <section className="forms-guide">
      <div className="forms-guide__inner">
        <FeatureGroup title="A form for whatever you need" items={formNeedItems} />
        <FeatureGroup title="Made for every professional" items={professionalItems} />
        <section className="forms-how">
          <div className="forms-how__heading">
            <h2>How it works</h2>
            <p>Complete any form in four steps, right in your browser.</p>
          </div>
          <div className="forms-how__steps">
            {formSteps.map(({ icon: Icon, number, title, description }) => (
              <article className="form-step" key={number}>
                <div className="form-step__top">
                  <span className="form-step__icon" aria-hidden="true"><Icon size={20} /></span>
                  <span className="form-step__number">{number}</span>
                </div>
                <div className="form-step__copy">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="forms-stats" aria-label="Forms statistics">
          <div><strong>4.4★</strong><span>rated on Trustpilot</span></div>
          <div><strong>500K+</strong><span>forms completed</span></div>
          <div><strong>50</strong><span>U.S. states supported</span></div>
        </section>
        <FaqList title="Frequently asked questions" items={formFaqItems} className="forms-faq" idPrefix="forms-faq" />
        <aside className="legal-alert forms-legal-alert" aria-label="Forms legal information">
          <span className="legal-alert__icon" aria-hidden="true"><Info size={24} weight="fill" /></span>
          <p>TheBestPDF is not a law firm, a government agency, or a tax advisor, and is not affiliated with the IRS, USCIS, the U.S. Department of State, or CMS. We provide fillable form templates for your convenience. Always verify the current official version and requirements with the issuing agency.</p>
        </aside>
      </div>
    </section>
  );
}

const invoiceIncludeItems = [
  {
    icon: Buildings,
    title: "Your business details",
    description: "Company name, logo, address, and contact information.",
  },
  {
    icon: UsersThree,
    title: "Bill-to details",
    description: "Your client's name, company, and billing address.",
  },
  {
    icon: Keyboard,
    title: "Invoice number & dates",
    description: "A unique invoice number, issue date, and due date.",
  },
  {
    icon: List,
    title: "Itemized line items",
    description: "Description, quantity, rate, and amount for each charge.",
  },
  {
    icon: ChartBar,
    title: "Subtotal, tax & total",
    description: "Automatic subtotals, tax, discounts, and the amount due.",
  },
  {
    icon: FileText,
    title: "Payment terms & notes",
    description: "How and when to pay, plus space for a thank-you note.",
  },
];

const invoiceRelatedCategories = [
  {
    title: "Receipts",
    description: "Payment, rent, and cash receipt templates.",
  },
  {
    title: "Business Letters",
    description: "Quotes, estimates, and payment demand letters.",
  },
  {
    title: "Contracts",
    description: "Service, freelance, and contractor agreements.",
  },
];

const invoiceFaqItems = [
  {
    question: "How do I create an invoice?",
    answer: "Choose a template, add your business and client details, enter each line item, review the calculated total, and download the finished invoice.",
  },
  {
    question: "What's the difference between an invoice and a proforma invoice?",
    answer: "An invoice requests payment for completed or confirmed work. A proforma invoice is a preliminary document shared before the final sale or delivery.",
  },
  {
    question: "Do these invoices calculate totals and tax automatically?",
    answer: "Yes. Enter quantities, rates, discounts, and tax, and the template calculates the subtotal and amount due as you go.",
  },
  {
    question: "Can I add my own logo and branding?",
    answer: "Yes. You can add your logo and business details so every invoice matches your brand.",
  },
  {
    question: "Can I reuse an invoice template?",
    answer: "Yes. Save the completed layout and reuse it for future clients or recurring work.",
  },
];

function InvoiceGuide() {
  return (
    <section className="invoice-guide">
      <div className="invoice-guide__inner">
        <section className="invoice-guide__intro">
          <h2>Invoice templates that get you paid faster</h2>
          <div className="invoice-guide__description">
            <p>A clear, professional invoice is the quickest way to get paid for your work. Instead of wrestling with a spreadsheet or paying for accounting software, our invoice templates give you a polished, ready-to-send starting point for every kind of billing, from simple invoices and freelance invoices to commercial, construction, and catering invoices.</p>
            <p>Every invoice opens in your browser. Add your logo and business details, list your line items, and totals and tax calculate automatically. Download a finished PDF, send it to your client, and reuse the template for your next job, with every invoice saved in one place.</p>
          </div>
        </section>

        <section className="invoice-includes">
          <div className="invoice-includes__heading">
            <h3>What an invoice template includes</h3>
            <p>Every template comes pre-built with the fields a complete invoice needs. Fill them in, and totals and tax calculate as you go.</p>
          </div>
          <div className="invoice-includes__grid">
            {invoiceIncludeItems.map(({ icon: Icon, title, description }) => (
              <article className="invoice-feature" key={title}>
                <span className="invoice-feature__icon" aria-hidden="true"><Icon size={20} weight="fill" /></span>
                <div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="invoice-related">
          <h3>Related categories</h3>
          <div className="invoice-related__grid">
            {invoiceRelatedCategories.map((category) => (
              <a className="invoice-related__card" href="#templates" key={category.title}>
                <h4>{category.title}</h4>
                <p>{category.description}</p>
              </a>
            ))}
          </div>
        </section>

        <FaqList
          title={(
            <>
              <span className="invoice-faq__desktop-title">FAQ</span>
              <span className="invoice-faq__mobile-title">Frequently asked questions</span>
            </>
          )}
          items={invoiceFaqItems}
          className="invoice-faq"
          idPrefix="invoice-faq"
        />

        <aside className="legal-alert invoice-legal-alert" aria-label="Invoice legal information">
          <span className="legal-alert__icon" aria-hidden="true"><Info size={24} weight="fill" /></span>
          <p>TheBestPDF is not an accounting or tax firm and does not provide financial advice. Our invoice templates are general-purpose documents for your convenience. For questions about tax rates, reporting, or compliance, we recommend consulting a qualified accountant.</p>
        </aside>
      </div>
    </section>
  );
}

function Footer() {
  const [openColumn, setOpenColumn] = useState(0);
  const compactHiddenLinks = new Set(["Merge Images", "Compress Images", "Remove Watermark"]);

  return (
    <footer className="footer">
      <div className="footer__top">
        {footerColumns.map((column, columnIndex) => (
          <section className={`footer__tool-column${openColumn === columnIndex ? " is-open" : ""}`} key={column.title}>
            <h2>
              <Button
                variant="text"
                color="action"
                size="ms"
                type="button"
                aria-expanded={openColumn === columnIndex}
                onClick={() => setOpenColumn(openColumn === columnIndex ? -1 : columnIndex)}
              >
                <span>{column.title}</span>
                <CaretDown className="footer__tool-chevron" size={18} />
              </Button>
            </h2>
            <ul>
              {column.links.map((link) => (
                <li className={compactHiddenLinks.has(link) ? "mobile-only-hidden" : ""} key={link}><a href="#top">{link}</a></li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom-columns">
          <div className="footer__brand-column"><Logo /></div>
          {bottomColumns.map((column) => (
            <section className="footer__info-column" key={column.title}>
              <h2><img src={asset(column.icon)} alt="" />{column.title}</h2>
              <ul>
                {column.links.map((link, index) => (
                  <li className={link === "Cookie Policy" ? "mobile-only-hidden" : ""} key={link}>
                    <a href="#top">
                      {link}
                      {column.title === "Languages" && index === 0 ? <img className="language-chevron" src={asset("chevron-down.svg")} alt="" /> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="footer__divider" />
        <p className="footer__legal-copy">© TheBestPDF. All rights reserved 2024. XAFENIL LIMITED, Petraki Giallourou 1, Tofaris Gardens, 1st floor, Office/Flat 101, Latsia, 2220 Nicosia, Cyprus.</p>
      </div>
    </footer>
  );
}

const repeatTemplates = (items, count, prefix) => Array.from({ length: count }, (_, index) => ({
  ...items[index % items.length],
  id: `${prefix}:${index + 1}`,
}));

const pageConfigs = {
  templates: {
    key: "templates",
    label: "Templates",
    singular: "template",
    heading: "document templates",
    desktopTagline: "Invoices, contracts, receipts and more. Customize and download in PDF, Word, or Excel.",
    mobileTagline: "Browse 10,000+ free templates. Customize and download in minutes.",
    placeholder: "Search templates…",
    mobilePlaceholder: "Search templates…",
    categoryOptions: categories,
    items: templates,
    guide: "contracts",
    ctaLabel: "Use template",
  },
  invoice: {
    key: "invoice",
    label: "Invoice",
    singular: "invoice",
    heading: "invoices",
    desktopTagline: "Create a professional invoices in minutes. Customize and download as PDF, Word or Excel.",
    mobileTagline: "Create a professional invoices in minutes. Customize and download as PDF, Word or Excel.",
    placeholder: "Search invoices…",
    mobilePlaceholder: "Search invoices…",
    categoryOptions: ["All templates", "Popular", "Business", "Freelance", "Contractors", "Services"],
    items: invoiceTemplates,
    mobileItems: repeatTemplates(invoiceTemplates, 60, "invoice-mobile"),
    guide: "invoice",
    ctaLabel: "Use template",
  },
  forms: {
    key: "forms",
    label: "Forms",
    singular: "form",
    heading: "forms",
    desktopTagline: "Create a professional form in minutes. Customize and download as PDF, Word or Excel.",
    mobileTagline: "Create a professional form in minutes. Customize and download as PDF, Word or Excel.",
    placeholder: "Search form…",
    mobilePlaceholder: "Search forms…",
    categoryOptions: serviceCategories,
    items: repeatTemplates(formTemplates, 120, "forms"),
    mobileItems: repeatTemplates(formTemplates, 60, "forms-mobile"),
    guide: "forms",
    ctaLabel: "Fill out form",
  },
};

function ProductPage({ view = "templates", capturePage = false, embedded = false }) {
  const config = pageConfigs[view] ?? pageConfigs.templates;
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    document.title = `Ready-to-use ${config.heading} — TheBestPDF`;
  }, [config.heading]);

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2200);
  };

  useEffect(() => {
    if (!embedded || window.parent === window) return undefined;

    const publishHeight = () => {
      window.parent.postMessage({
        type: "tbp-preview-height",
        view: config.key,
        height: document.documentElement.scrollHeight,
      }, window.location.origin);
    };
    const observer = new ResizeObserver(publishHeight);
    observer.observe(document.documentElement);
    window.addEventListener("load", publishHeight);
    publishHeight();

    return () => {
      observer.disconnect();
      window.removeEventListener("load", publishHeight);
    };
  }, [config.key, embedded]);

  return (
    <div className={`page-shell page-shell--${config.key}${capturePage ? " page-shell--qa-capture" : ""}`}>
      <Hero config={config} query={query} onQueryChange={setQuery} onMessage={showMessage} />
      <Catalog key={config.key} config={config} query={query} onQueryChange={setQuery} onMessage={showMessage} />
      {config.guide === "contracts" ? <ContractGuide /> : null}
      {config.guide === "invoice" ? <InvoiceGuide /> : null}
      {config.guide === "forms" ? <FormsGuide /> : null}
      <Footer />
      <div className={`status-toast${message ? " is-visible" : ""}`} role="status" aria-live="polite">{message}</div>
    </div>
  );
}

function PreviewWorkbench() {
  const params = new URLSearchParams(window.location.search);
  const initialView = pageConfigs[params.get("view")] ? params.get("view") : "templates";
  const initialViewport = params.get("viewport") === "mobile" ? "mobile" : "desktop";
  const [view, setView] = useState(initialView);
  const [viewport, setViewport] = useState(initialViewport);
  const [frameHeight, setFrameHeight] = useState(1000);
  const [availableWidth, setAvailableWidth] = useState(() => window.innerWidth - 32);
  const frameWidth = viewport === "mobile" ? 375 : 1440;
  const scale = Math.min(1, availableWidth / frameWidth);
  const iframeRef = useRef(null);

  useEffect(() => {
    document.title = "TheBestPDF design preview";
  }, []);

  useEffect(() => {
    const updateWidth = () => setAvailableWidth(Math.max(320, window.innerWidth - 32));
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const handleHeight = (event) => {
      if (event.origin !== window.location.origin || event.source !== iframeRef.current?.contentWindow) return;
      if (event.data?.type === "tbp-preview-height" && event.data.view === view) {
        setFrameHeight(Math.max(1, Math.ceil(event.data.height)));
      }
    };
    window.addEventListener("message", handleHeight);
    return () => window.removeEventListener("message", handleHeight);
  }, [view]);

  useEffect(() => {
    const nextUrl = new URL(window.location.href);
    nextUrl.search = "";
    nextUrl.searchParams.set("view", view);
    nextUrl.searchParams.set("viewport", viewport);
    window.history.replaceState({}, "", nextUrl);
  }, [view, viewport]);

  const previewUrl = new URL(window.location.href);
  previewUrl.search = "";
  previewUrl.searchParams.set("embedded", "1");
  previewUrl.searchParams.set("view", view);

  const chooseView = (nextView) => {
    setFrameHeight(1000);
    setView(nextView);
  };

  return (
    <main className="preview-workbench">
      <header className="preview-toolbar">
        <div className="preview-toolbar__brand">
          <span>THEBESTPDF</span>
          <strong>Design preview</strong>
        </div>
        <div className="preview-toolbar__controls">
          <div className="preview-switch" aria-label="Viewport">
            {[
              ["mobile", "Mobile"],
              ["desktop", "Desktop"],
            ].map(([value, label]) => (
              <Button
                key={value}
                type="button"
                size="ms"
                color="primary"
                variant={viewport === value ? "filled-tonal" : "text"}
                className={viewport === value ? "is-active" : ""}
                aria-pressed={viewport === value}
                onClick={() => setViewport(value)}
              >
                {label}
              </Button>
            ))}
          </div>
          <div className="preview-switch" aria-label="Page">
            {[
              ["invoice", "Invoice"],
              ["templates", "Templates"],
              ["forms", "Forms"],
            ].map(([value, label]) => (
              <Button
                key={value}
                type="button"
                size="ms"
                color="primary"
                variant={view === value ? "filled-tonal" : "text"}
                className={view === value ? "is-active" : ""}
                aria-pressed={view === value}
                onClick={() => chooseView(value)}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </header>
      <section className="preview-stage" aria-label={`${pageConfigs[view].label} ${viewport} preview`}>
        <div className="preview-frame" style={{ width: frameWidth * scale, height: frameHeight * scale }}>
          <div className="preview-frame__scaled" style={{ width: frameWidth, height: frameHeight, transform: `scale(${scale})` }}>
            <iframe
              ref={iframeRef}
              key={view}
              title={`${pageConfigs[view].label} ${viewport} preview`}
              src={previewUrl.toString()}
              style={{ width: frameWidth, height: frameHeight }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export function App() {
  const params = new URLSearchParams(window.location.search);
  const preview = params.get("preview");
  const view = pageConfigs[params.get("view")] ? params.get("view") : "templates";

  if (preview === "card-states") return <CardStatesPreview />;
  if (preview === "page-qa") return <ProductPage view={view} capturePage />;
  if (params.get("embedded") === "1") return <ProductPage view={view} embedded />;
  return <PreviewWorkbench />;
}
