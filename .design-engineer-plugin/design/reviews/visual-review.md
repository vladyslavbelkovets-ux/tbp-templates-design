# Visual review — populated template catalog

Review method: live local URL in the in-app browser at desktop `1440 × 900` and mobile `390 × 844`.

## Result

Passed. No P0, P1, or P2 issues remain in the populated catalog.

## Scope

- 56 user-provided PNG previews and their filename-derived template names.
- Seven categories plus the combined `All templates` view.
- Category filtering, search, dynamic pagination, image loading, card layout, and responsive behavior.

## Findings and applied fixes

### [P1] Catalog still used placeholder content

- **Before:** all 12 cards repeated `Product Order template` and one shared placeholder preview.
- **Expected:** each source file should render as its own card with the filename-derived category and title.
- **Fix:** created `src/templateData.js`, copied all 56 source previews to `public/assets/template-previews/`, and bound every card to its own title, category, preview, and descriptive alt text.

### [P1] Category controls did not filter the cards

- **Before:** category buttons only changed their active color.
- **Expected:** each category should show only its assigned templates.
- **Fix:** applied the active category before search and pagination; category selection and a new search both reset to page 1.

### [P2] Pagination was static

- **Before:** pagination always showed the mock sequence ending at page 10 and did not change the card slice.
- **Expected:** page count and cards should reflect the filtered result set.
- **Fix:** added 12-card pagination with dynamic page counts and compact ellipsis handling for larger datasets.

### [P2] Portrait previews were vertically cropped at the title

- **Before:** the legacy shared preview used a negative top offset.
- **Expected:** the user-provided `1200 × 1553` documents should show their identifying headings.
- **Fix:** anchored previews at the top of the existing Figma card frame without altering the card geometry or hover/focus states.

## Verification evidence

- Desktop screenshot: `qa/catalog-content-1440.jpg`.
- Mobile screenshot: `qa/catalog-content-mobile.jpg`.
- All 56 configured preview paths exist; no missing assets.
- All 12 previews on the initial desktop page loaded at natural size `1200 × 1553`.
- `All templates`: 5 pages (`12 + 12 + 12 + 12 + 8`).
- `Contracts`: 2 pages (`12 + 5`).
- Other category counts: `8, 6, 11, 2, 5, 7`, each on one page.
- Search for `Employment` within Contracts returns only `Employment Contract`.
- Card geometry remains `339.66 × 356` on desktop and `334 × 356` on mobile.
- No horizontal overflow at 1440px or 390px.
- Browser console errors/warnings: none.

## UX non-negotiables

- Active category clearly communicates location.
- The template name, preview, and `Use template` action retain a clear hierarchy.
- Category buttons, pagination, search, hover, and keyboard focus remain conventional and actionable.
- Every preview includes meaningful alt text and the interface remains usable without relying on the image alone.
