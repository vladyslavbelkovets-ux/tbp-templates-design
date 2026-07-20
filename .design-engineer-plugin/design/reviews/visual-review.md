# Visual review — Figma design update

Authoritative design: Figma `Templates library`, node `15:19695`.

Review method: Figma design context and full-node screenshot compared with the live local implementation at desktop `1440 × 900`, wide desktop `1920 × 1000`, and mobile `390 × 844`.

## Result

Passed. No P0, P1, or P2 visual-fidelity issues remain in the updated page.

## Applied updates

### [P1] The lower page repeated an obsolete content block

- **Expected:** one `906px` content column containing the contract introduction, inclusion table, five-row FAQ, and legal-information alert.
- **Actual:** two variants of the same short contract text block were rendered back to back.
- **Fix:** replaced both legacy blocks with the complete Figma structure and preserved semantic headings, table roles, accordion controls, and legal-information labeling.

### [P1] The template grid stopped expanding on wide screens

- **Expected:** the catalog panel and template list should use the available width after the `197px` category rail and `48px` gap.
- **Actual:** the template list was capped at `1067px`, leaving unused space at wider viewport sizes.
- **Fix:** changed the list track to `minmax(0, 1fr)` and removed the card-width cap so the full catalog surface expands fluidly.

### [P2] Typography and component geometry reflected the previous design revision

- **Expected:** Outfit as the project font, Inter for the contract table, `16px` card corners, `12px` action-button corners, and the updated hero descriptor.
- **Actual:** the page used Inter globally, smaller card/button radii, and the previous descriptor copy.
- **Fix:** added local Outfit font assets, mapped the supporting Inter usage, updated the radii and shadow tokens, and matched the current Figma copy.

## Verification evidence

- Desktop geometry: hero `378px`, catalog panel `1376px` wide, template list `1067px`, cards `339.66px`, contract guide `1576px`, guide column `906px`, footer `887px`.
- Contract-guide geometry: content `1416px`, inclusion section `554px`, table `464px`, FAQ `412px`, alert `76px`.
- Wide desktop (`1920px`): catalog panel `1856px`, template list `1547px`, cards `499.66px`, no horizontal overflow.
- Mobile (`390px`): catalog panel `366px`, cards `334px`, contract/table/FAQ/alert content `350px`, no horizontal overflow.
- FAQ buttons expose `aria-expanded`, reveal their answers, and return to the collapsed Figma state.
- All 22 images visible in the tested mobile state loaded successfully.
- Single-page category regression: Receipts renders 8 cards with no pagination.

## UX non-negotiables

- The active category, page title, and primary card action remain visually clear.
- Filtering, search, conditional pagination, hover/focus states, and FAQ disclosure use conventional interactions.
- The contract comparison data is represented as a table, and the legal disclaimer is exposed as a labeled complementary region.
- The implementation remains keyboard-operable and does not rely on imagery alone.
