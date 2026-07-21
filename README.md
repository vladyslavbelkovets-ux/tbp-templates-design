# TheBestPDF service pages — design handoff

Standalone React implementation of the Templates, Invoice, and Forms desktop/mobile frames from the Templates Library Figma file. The project is intentionally separate from `universe-forma/tbp-fe` and is designed for developer handoff.

- Figma source: [Templates Library — Template page](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=15-19695)
- Forms content source: [Templates Library — Forms catalog](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=72-43790)
- Forms handoff frame: [A/B Testing TBP — Forms](https://www.figma.com/design/mHGmB1eJ1Y0FvdNIg122GM/%F0%9F%9F%A6-A-B-Testing---TBP?node-id=27980-65156)
- Invoice handoff frame: [A/B Testing TBP — Invoices](https://www.figma.com/design/mHGmB1eJ1Y0FvdNIg122GM/%F0%9F%9F%A6-A-B-Testing---TBP?node-id=27980-65291)
- Live preview: [GitHub Pages](https://vladyslavbelkovets-ux.github.io/tbp-templates-design/)
- Current reference screenshot: [`docs/figma-reference-current.png`](docs/figma-reference-current.png)
- Card-state reference: [`docs/figma-card-states.png`](docs/figma-card-states.png)
- Visual QA report: [`design-qa.md`](design-qa.md)

## Run locally

```bash
npm install
npm run dev
```

Production check:

```bash
npm run build
npm run preview
```

Use the controls at the top of the live preview to switch between Mobile/Desktop and Invoice/Templates/Forms. The isolated card-state comparison is available locally at `?preview=card-states`.

## UI components

The page imports `Button`, `IconButton`, and `Input` from the published `@universe-forma/ui-pes` package. The project `.npmrc` points the `@universe-forma` scope to GitHub Packages; installing dependencies requires an account or token with access to that package. No credentials are stored in the repository.

See [`.design-engineer-plugin/design/dev/design-system.md`](.design-engineer-plugin/design/dev/design-system.md) for the component mapping and styling rules.

## Interaction coverage

- template search and empty state across 56 real templates
- category filtering across seven filename-derived categories
- dynamic pagination with 12 desktop cards or 6 mobile cards per page
- template and login actions
- default and hover/focus card states
- responsive mobile navigation
- in-place Mobile/Desktop and Invoice/Templates/Forms preview switching
- Forms-specific content, official form previews, FAQ, and legal state
- Invoice-specific catalog with 12 approved titles, exact source copy, reused Templates previews, included-fields guide, related categories, FAQ, and accounting notice

## Template content

The catalog data lives in `src/templateData.js`. Templates and Invoice cards reuse `public/assets/template-previews/`; Forms use `public/assets/form-previews/` with the source image treatment from Figma, including the grayscale overrides for 1099-NEC, W-2, and CMS-1500. The Invoice-to-Template preview mapping is documented in `handoff/invoice-previews/`.

The source repositories were used as read-only references and were not modified.
