# UI-PES integration

## Package source

- Package: `@universe-forma/ui-pes@0.5.45`
- Registry: GitHub Packages through the project `.npmrc`
- Styling: Tailwind CSS 4, the package theme, and package source scanning in `src/styles.css`
- Project tokens: The Best PDF Inter typography, colors, spacing, and radii remain defined in `src/styles.css`

The previous `vendor/ui-pes` directory was a local two-component copy. The app now imports the published package directly.

## Component mapping

| Site control | UI-PES component |
|---|---|
| Header login | `Button` |
| Template CTA | `Button` |
| Category controls | `Button` |
| Pagination numbers | `Button` |
| FAQ triggers | `Button` |
| Mobile footer triggers | `Button` |
| Clear search | `Button` |
| Mobile menu | `IconButton` |
| Mobile card chevron | `IconButton` |
| Pagination arrows | `IconButton` |
| Hero search field | `Input` |

Every rendered `<button>` and `<input>` now comes from these UI-PES components.

## Project compositions

The package does not export equivalents for the site header, template card, responsive grid, pagination wrapper, contract table, FAQ wrapper, legal notice, or footer. Those blocks remain project components and use UI-PES controls inside them.

`Search`, `Tabs`, `BaseDropdown`, and `Toaster` are not used here. Replacing the approved search field, category list, mobile navigation, or status message with those patterns would change the current Figma behavior.

## Styling rules

- Keep UI-PES component markup and behavior.
- Override only project-facing geometry and The Best PDF tokens.
- Keep Inter and the existing radii: 4 px controls, 6 px search, 8 px mobile tabs, 12 px cards, and 16 px card surfaces/DataGrid.
- Do not restore local copies under `vendor/ui-pes`.

## Verification

- Production build passes with `@universe-forma/ui-pes@0.5.45` installed.
- All 51 rendered buttons carry the UI-PES button signature in the production bundle.
- The single rendered input carries the UI-PES input signature.
- Desktop and mobile have no page-level horizontal overflow.
- Production browser console has zero errors and zero warnings.
- Package audit reports zero known vulnerabilities.
