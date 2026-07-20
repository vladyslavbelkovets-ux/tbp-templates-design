# Visual review — fonts, card states, and current Figma frame

Review method: same-input visual comparison against Figma nodes `15:19695` and `15:20776`, plus computed-style inspection in the in-app browser.

## Result

Passed. No P0, P1, or P2 issues remain.

## Findings and applied fixes

### [P1] Project font mismatch

- **Before:** most interface text used Outfit.
- **Expected:** the Figma project-font variable resolves to Inter.
- **Fix:** loaded the required Inter weights, updated the project token and vendored UI-component fallbacks, and removed Outfit.

### [P1] Current frame contained two missing information sections

- **Before:** the footer followed the template catalog at `y=2018`.
- **Expected:** the current `1440 × 3953` Figma frame contains two 524px contract-information sections before the footer.
- **Fix:** implemented both layouts with the exact widths, padding, typography, copy, note-card dimensions, and coordinates from nodes `53:16687` and `53:17006`.

### [P2] Hero content was 40px too high

- **Before:** the hero omitted the Figma gap between the 88px header and the first section.
- **Fix:** restored the 40px desktop gap; the title now starts at `y=160` and the search field at `y=290`.

### [P2] Hover was a permanently emphasized second card

- **Before:** one production card was always rendered with hover styling.
- **Expected:** every card exposes default and hover/focus states.
- **Fix:** moved the state changes to `:hover` and `:focus-within`, with an explicit forced state only in the isolated QA preview.

### [P2] Card tokens drifted from the component variants

- **Fix:** aligned the 12px card radius, 4px button radius, Inter `14/18` button type, `#4c5e7f` description, `#cbd7e6` outline, 24px/16px dock padding, and exact two-layer hover shadow.

## Design-system review

- Existing `Button` and `Input` APIs from the vendored `@universe-forma/ui-pes` package remain in use.
- Card-state values are centralized as semantic CSS properties.
- No duplicate button/input components or approximate visual assets were introduced.

## Verification evidence

- Full page: `qa/full-page-current-comparison.png`.
- Card variants: `qa/card-states-comparison.png`.
- Browser document size: `1440 × 3953`; no horizontal overflow.
- Browser console errors/warnings: none.
