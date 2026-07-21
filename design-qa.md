# Design QA — Templates / Invoice / Forms preview

## final result: passed

No actionable P0, P1, or P2 visual or interaction issues remain in the updated six-state implementation.

## Source visual truth

- Templates desktop/mobile: approved implementation based on Figma nodes `15:19695`, `39:11153`, and `72:30766`.
- Forms desktop/mobile layout: Figma section `205:24460`, frames `205:24461` and `205:24526`.
- Invoice desktop/mobile layout: Figma section `205:24595`, frames `205:24596` and `205:24611`.
- Compact mobile empty state: `/var/folders/lr/bcw5plhx3_z6tzd_9dt__zsr0000gn/T/codex-clipboard-b15facd9-0452-4eb0-b7e4-4388d79ce828.png` plus the user's explicit request for a small square state.
- Mode-specific preview requirement: user's instruction that previews must change with `Invoice / Templates / Forms`.
- Preview sources: the reference `tbp-fe/public/invoices` library and `handoff/form-previews` library.

## Browser-rendered implementation evidence

- Invoice desktop previews: `qa/invoice-desktop-previews-updated.png` at `1440 × 900`.
- Forms desktop previews: `qa/forms-desktop-previews-updated.png` at `1440 × 900`.
- Invoice mobile previews: `qa/invoice-mobile-previews-updated.png` at `375 × 812`.
- Forms mobile previews: `qa/forms-mobile-previews-updated.png` at `375 × 812`.
- Compact Invoice mobile empty state: `qa/invoice-mobile-empty-compact.png` at `375 × 812`.

## Full-view and focused comparison evidence

- The compact empty-state source and the browser-rendered implementation were opened together at the same mobile width. The previous tall white catalog region is gone: the updated state measures `343 × 343`, the catalog panel is `383px` tall, and the footer begins immediately at `y=643`.
- Focused desktop and mobile captures confirm that the page shell, header, hero, tabs, cards, typography, radii, spacing, and footer styling remain unchanged while only the document imagery and matching copy change by mode.
- The mode-specific preview change intentionally supersedes the placeholder receipt imagery previously shared by the Invoice and Forms Figma frames.

## Findings

- No P0/P1/P2 findings remain.
- Templates starts with receipt/template previews, Invoice starts with Simple/Commercial/Freelance Invoice previews, and Forms starts with W-9/W-4/1099-NEC previews.
- All reviewed preview images load successfully and show the top of the document; no broken image requests were observed.

## Required fidelity surfaces

- Fonts and typography: existing Inter family, weights, sizes, line heights, hierarchy, wrapping, and two-line card descriptions are preserved.
- Spacing and layout rhythm: existing card/grid dimensions, 12px card radius, 4px button radius, section gaps, and responsive structure are preserved. The mobile empty state is now a compact square.
- Colors and visual tokens: existing TheBestPDF blues, text colors, borders, opacity values, and UI-PES theme tokens are unchanged.
- Image quality and asset fidelity: Templates uses the supplied template library; Invoice uses 12 dedicated invoice documents; Forms uses 12 official form previews. All use source raster assets with top-aligned cropping.
- Copy and content: each Invoice and Form card has matching, unique title and concise two-line description.

## Primary interactions tested

- `Mobile / Desktop` and `Invoice / Templates / Forms` switches.
- Switching from Templates to Invoice changes the first card to `Simple Invoice` and its image path to `invoice-previews/simple-invoice.png`.
- Switching to Forms changes the first card to `Form W-9` and its image path to `form-previews/form-w9.png`.
- Mobile search hides filters, produces the compact empty state, and keeps `Clear search` usable.
- Pagination remains at 10 pages for Invoice and Forms mobile views and Forms desktop.
- Production build completes successfully.
- Browser console: 0 errors, 0 warnings.

## Comparison history

1. Earlier QA aligned the six responsive layouts, UI-PES controls, card interactions, typography, radii, and Figma-specific section heights.
2. The latest review found that Invoice and Forms still reused Template preview imagery. Dedicated Invoice and Form datasets and assets were connected for both desktop and mobile.
3. The supplied mobile search capture showed the empty state inside an overly tall catalog panel. The panel min-height was removed for mobile search and the empty state was constrained to `343 × 343`.
4. Post-fix browser captures confirm distinct mode previews, compact empty-state geometry, no horizontal overflow, and no console errors.

## Implementation checklist

- [x] Dedicated Templates, Invoice, and Forms preview datasets.
- [x] Desktop and mobile switch states use the matching dataset.
- [x] Top-aligned document previews.
- [x] Compact square mobile empty state.
- [x] Build, interaction, image-load, and console checks passed.
