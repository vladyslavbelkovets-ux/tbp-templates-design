# Visual review — Templates, Invoices, and Forms

## Scope

- Desktop card-state source: A/B Testing TBP node `27980:65054`.
- Mobile sources: Templates `27980:65059`, Forms `27980:65222`, and Invoices `27980:65307`.
- Forms source: Templates Library node `72:43790`.
- Forms handoff: A/B Testing TBP node `27980:65156`.
- Invoice design: A/B Testing TBP node `27980:65291`.
- Reviewed desktop at 1440 px and mobile at 375 px.
- Checked hero, search, categories, catalog density, preview crop, pagination, empty state, content guide, FAQ, legal notice, and footer.

## Corrections included

- Rebuilt the shared desktop card to match the approved Default and Hover states across Templates, Invoices, and Forms.
- Moved the filled CTA into the preview dock: hidden in Default and visible on pointer hover or keyboard focus.
- Matched the 348 px card, 250 px preview dock, 98 px content area, 16 px card radius, dock colors, preview growth, and hover shadow.
- Updated the shared mobile card to 260 px with a neutral 162 px preview dock, 98 px content area, 16 px outer radius, and 10 px preview radius.
- Updated mobile category tabs to the approved compact 32 px treatment and synchronized the Templates mobile descriptor with the current Figma frame.
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
- Templates, Invoices, and Forms desktop each render the shared 348/250/98 px card geometry without horizontal overflow.
- Templates and Invoices expose `Use template`; Forms exposes `Fill out form`.
- Keyboard focus displays the same raised state as pointer hover with a visible focus outline.
- Mobile remains default-only at 260 px card height with its chevron action and no overlaid CTA.
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
