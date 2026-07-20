# TheBestPDF Templates — design handoff

Standalone React implementation of the `Template page` frame from the Templates Library Figma file. The project is intentionally separate from `universe-forma/tbp-fe` and is designed for developer handoff.

- Figma source: [Templates Library — Template page](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=15-19695)
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

The isolated card-state comparison is available locally at `?preview=card-states`.

## UI components

The page uses the `Button` and `Input` APIs from `@universe-forma/ui-pes`. Because the original GitHub Package requires private package access, the exact components needed by this handoff are vendored under `vendor/ui-pes` and installed through a local file dependency. No credentials are stored in the repository.

## Interaction coverage

- template search and empty state across 56 real templates
- category filtering across seven filename-derived categories
- dynamic 12-card pagination
- template and login actions
- default and hover/focus card states
- responsive mobile navigation

## Template content

The catalog data lives in `src/templateData.js`. Preview assets are stored in `public/assets/template-previews/`; each filename follows `<Category>-<Template title>.png`, matching the handoff source exactly.

The source repositories were used as read-only references and were not modified.
