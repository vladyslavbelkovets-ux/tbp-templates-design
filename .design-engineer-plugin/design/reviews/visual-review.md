# Visual review — Templates, Invoices, and Forms

## Scope

- Forms source: Templates Library node `72:43790`.
- Forms handoff: A/B Testing TBP node `27980:65156`.
- Invoice design: A/B Testing TBP node `27980:65291`.
- Reviewed desktop at 1440 px and mobile at 375 px.
- Checked hero, search, categories, catalog density, preview crop, pagination, empty state, content guide, FAQ, legal notice, and footer.

## Corrections included

- Restored all 12 Forms desktop cards from the verified Templates Library source.
- Kept every Forms card connected to the local `Template Card` component; only title, description, CTA, and image overrides changed.
- Replaced receipt and estimate content with W-9, W-4, 1099-NEC, W-2, 1040-ES, 941, Schedule C, I-9, I-864, DS-11, DS-82, and CMS-1500.
- Restored the original form preview assets and kept the document crop aligned to the top.
- Applied the source grayscale/contrast treatment to 1099-NEC, W-2, and CMS-1500, removing the incorrect red appearance.
- Synchronized Forms CTAs to `Fill out form` and copied the source descriptions exactly.
- Added the complete Invoice content section: introduction, included fields, related categories, FAQ, accounting notice, and responsive layout.
- Kept all 12 approved Invoice titles and restored the exact source descriptions.
- Replaced generated Invoice artwork with semantically matched, existing Templates previews; no new preview artwork is used.
- Added the Invoice single-page rule on desktop: 12 cards and no pagination.
- Removed the old repeated mobile fixture: Invoice now contains 12 unique cards and two mobile pages at 6 cards per page.
- Confirmed the mobile search empty state removes categories and pagination and resizes to its content.
- Preserved Inter, existing radii, UI-PES controls, footer accordions, and the established page tokens.

## Verification

- Production build passes with `npm run build`.
- Invoice desktop: 12 cards with reused Templates documents, no pagination, 1440 px document width, no horizontal overflow, and no broken images.
- Invoice mobile: 6 unique cards on page 1, two pages total, no horizontal overflow, and no broken images.
- Forms mobile: 6 cards, pagination visible, 375 px document width, no horizontal overflow, and no broken images.
- Templates mobile empty state: no cards, no pagination, clear-search action visible, and no horizontal overflow.
- Forms desktop visually matches the restored Figma frame, including grayscale previews and `Frequently asked questions` copy.
- Invoice desktop and mobile screenshots match the Figma section order and responsive composition.
- The only console message is a non-visual React `forwardRef` warning emitted by the published UI-PES dependency in development mode; it does not affect rendering or interaction.

## Review artifacts

- `qa/figma-forms-restored.png`
- `qa/forms-desktop-final.png`
- `qa/forms-mobile-final.png`
- `qa/templates-empty-mobile-final.png`
- `handoff/invoice-previews/manifest.csv`

## Result

No unresolved critical or major visual differences remain in the reviewed scope.
