import { useMemo, useState } from "react";
import { CaretLeft, CaretRight, List, MagnifyingGlass, X } from "@phosphor-icons/react";
import { Button, Input } from "@universe-forma/ui-pes";

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`;

const categories = [
  "All templates",
  "Receipts",
  "Estimates",
  "Business Agreements",
  "Financial Statements",
  "Business Letters",
  "Contracts",
  "Bill of Sale",
];

const templates = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  title: "Product Order template",
  description: "With our free online product order form template, you can customize and embed",
}));

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
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
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

function Hero({ query, onQueryChange, onMessage }) {
  return (
    <section className="hero">
      <img className="hero__background" src={asset("hero-background.png")} alt="" />
      <Header onMessage={onMessage} />
      <div className="hero__content">
        <div className="hero__copy">
          <h1>
            Ready-to-use <span>document templates</span>
          </h1>
          <p>Browse 10,000+ free templates. Customize and download in minutes.</p>
        </div>
        <Input
          id="template-search"
          type="search"
          size="lg"
          bg="default"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search templates…"
          aria-label="Search templates"
          rootClassName="hero-search"
          leftIcon={<MagnifyingGlass size={24} weight="regular" />}
        />
      </div>
    </section>
  );
}

function TemplateCard({ template, emphasized, onUse }) {
  return (
    <article className={`template-card${emphasized ? " template-card--emphasized" : ""}`}>
      <div className={`template-card__dock${emphasized ? " template-card__dock--compact" : ""}`}>
        <div className="template-card__preview">
          <img src={asset("template-preview.png")} alt="Preview of a customer registration form" />
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
          onClick={() => onUse(template)}
        >
          Use template
        </Button>
      </div>
    </article>
  );
}

function Pagination({ page, onPageChange }) {
  const pages = [1, 2, 3, "…", 8, 9, 10];
  return (
    <nav className="pagination" aria-label="Template pages">
      <button type="button" aria-label="Previous page" disabled={page === 1} onClick={() => onPageChange(Math.max(1, page - 1))}>
        <CaretLeft size={18} weight="bold" />
      </button>
      {pages.map((item, index) =>
        item === "…" ? (
          <span key={`ellipsis-${index}`} className="pagination__ellipsis">…</span>
        ) : (
          <button
            type="button"
            key={item}
            className={page === item ? "is-active" : ""}
            aria-current={page === item ? "page" : undefined}
            onClick={() => onPageChange(item)}
          >
            {item}
          </button>
        ),
      )}
      <button type="button" aria-label="Next page" disabled={page === 10} onClick={() => onPageChange(Math.min(10, page + 1))}>
        <CaretRight size={18} weight="bold" />
      </button>
    </nav>
  );
}

function Catalog({ query, onQueryChange, onMessage }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [page, setPage] = useState(1);
  const filteredTemplates = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return templates;
    return templates.filter((template) => `${template.title} ${template.description}`.toLowerCase().includes(normalizedQuery));
  }, [query]);

  const chooseCategory = (category) => {
    setActiveCategory(category);
    setPage(1);
    onQueryChange("");
  };

  return (
    <main className="catalog" id="templates">
      <section className="catalog__panel">
        <aside className="categories" aria-label="Template categories">
          <h2>Categories</h2>
          <div className="categories__list">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "is-active" : ""}
                aria-pressed={activeCategory === category}
                onClick={() => chooseCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </aside>
        <div className="template-list">
          {filteredTemplates.length ? (
            <div className="template-grid">
              {filteredTemplates.map((template, index) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  emphasized={index === 1}
                  onUse={() => onMessage(`${template.title} selected`)}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>No templates found</h2>
              <p>Try another search term.</p>
              <Button variant="outlined" color="primary" size="md" onClick={() => onQueryChange("")}>Clear search</Button>
            </div>
          )}
          <Pagination page={page} onPageChange={setPage} />
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        {footerColumns.map((column) => (
          <section className="footer__tool-column" key={column.title}>
            <h2>{column.title}</h2>
            <ul>
              {column.links.map((link) => (
                <li key={link}><a href="#top">{link}</a></li>
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
                  <li key={link}>
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

export function App() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2200);
  };

  return (
    <div className="page-shell">
      <Hero query={query} onQueryChange={setQuery} onMessage={showMessage} />
      <Catalog query={query} onQueryChange={setQuery} onMessage={showMessage} />
      <Footer />
      <div className={`status-toast${message ? " is-visible" : ""}`} role="status" aria-live="polite">{message}</div>
    </div>
  );
}
