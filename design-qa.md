# Design QA — Template page

## final result: passed

No P0, P1, or P2 visual issues remain in the reviewed desktop implementation.

## Comparison setup

- Current Figma page: `docs/figma-reference-current.png`, frame `15:19695`, `1440 × 3953`.
- Current implementation: `qa/implementation-current-1440.png`, captured at `1440 × 3953`.
- Same-input comparison: `qa/full-page-current-comparison.png` (Figma left, implementation right).
- Card variants: Figma node `15:20776` compared in `qa/card-states-comparison.png`.
- Desktop state: page 1, `All templates`, empty search, all cards in their default state.

## Findings resolved

1. Replaced the incorrect Outfit project font with Inter and loaded weights 300, 400, 500, 600, 700, and 900.
2. Preserved the Figma-specific footer exceptions: Arial Bold for the upper footer headings and Inter Black for the lower footer headings.
3. Replaced the permanently emphasized second card with real default and hover/focus states on every card.
4. Matched the current card radius, button radius/type, description color, dock padding, and two-layer hover shadow.
5. Added the two current contract-information sections that now appear before the footer in frame `15:19695`.
6. Restored the 40px Figma gap between the desktop header and hero content.

## Structural checks

- Document: `1440 × 3953`, matching Figma.
- Hero: `378px`; heading at `y=160`, search field at `y=290`.
- Catalog: `1640px`, 197px category rail, 3 × 4 card grid.
- Information sections: two blocks at `524px` each; inner widths `906px` and `1146px`.
- Footer: `887px` total.
- Horizontal overflow: none at 1440px.

## Typography checks

- Hero title: Inter 700, `48/56`.
- Navigation: Inter 500, `18/26`.
- Search: Inter 300, `16/24`.
- Card title: Inter 600, `16/20`.
- Card description: Inter 400, `14/18`.
- Card button: Inter 500, `14/18`.
- Information heading: Inter 600, `28/34`.
- Information body: Inter 400, `16/22`.
- Upper footer headings: Arial 700, `16/19.2`.
- Lower footer headings: Inter 900, `16/19.2`.

## State and interaction checks

- Default card: no outer shadow, 24px preview dock padding.
- Hover/focus card: Figma two-layer shadow and 16px preview dock padding.
- `:focus-within` was verified on the production card grid.
- Search, empty-state recovery, categories, pagination, login/template feedback, and mobile navigation remain functional.
- Browser console errors/warnings: none.
