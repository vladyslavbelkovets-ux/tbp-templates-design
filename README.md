# TheBestPDF service pages — design handoff

Standalone React implementation of the Templates, Invoice, and Forms desktop/mobile frames from the Templates Library Figma file. The project is intentionally separate from `universe-forma/tbp-fe` and is designed for developer handoff.

- Figma source: [Templates Library — Template page](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=15-19695)
- Forms source: [Templates Library — Forms](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=205-24460)
- Invoice source: [Templates Library — Invoice](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=205-24595)
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

## Template content

The catalog data lives in `src/templateData.js`. Preview assets are stored in `public/assets/template-previews/`; each filename follows `<Category>-<Template title>.png`, matching the handoff source exactly.

The source repositories were used as read-only references and were not modified.
