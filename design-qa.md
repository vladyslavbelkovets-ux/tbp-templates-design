# Design QA — Templates / Invoice / Forms preview

## final result: passed

No P0, P1, or P2 visual or interaction issues remain in the reviewed six-state implementation.

## Reviewed sources

- Templates desktop and mobile: existing approved implementation based on Figma nodes `15:19695`, `39:11153`, and `72:30766`.
- Forms desktop/mobile: Figma section `205:24460`, frames `205:24461` and `205:24526`.
- Invoice desktop/mobile: Figma section `205:24595`, frames `205:24596` and `205:24611`.
- Source captures: `docs/figma-forms-desktop.png`, `docs/figma-forms-mobile.png`, `docs/figma-invoices-desktop.png`, and `docs/figma-invoices-mobile.png`.

## Same-input visual comparisons

Reference is on the left; implementation is on the right.

- Forms desktop: `qa/forms-desktop-comparison.jpg`.
- Forms mobile: `qa/forms-mobile-comparison.jpg`.
- Invoice desktop: `qa/invoice-desktop-comparison.jpg`.
- Invoice mobile: `qa/invoice-mobile-comparison.jpg`.
- Preview workbench with both switch groups: `qa/preview-switches.png`.

The comparisons were reviewed after the implementation screenshots were captured at the same 1440px and 375px viewport widths as the Figma frames.

## Structural checks

- Forms desktop: `1440 × 5059`; hero `378px`; catalog `1632px`; forms guide `2162px`; footer `887px`.
- Invoice desktop: `1440 × 2825`; hero `378px`; catalog `1560px`; footer starts at `y=1938`; footer `887px`.
- Forms mobile: hero `260px`; catalog `1634px`; forms guide `2664px`; cards `343 × 232`.
- Invoice mobile: hero `260px`; catalog `1634px`; cards `343 × 232`.
- No horizontal overflow at 1440px or 375px in Templates, Invoice, or Forms.

## Content and responsive checks

- Forms mobile page 1 uses the six source previews and copy from Figma: W-9, W-4, 1099-NEC, W-2, 1040-ES, and 941.
- Forms desktop preserves the exact 12-card first page shown in Figma and the ten-page selector.
- Invoice desktop renders 12 cards with no page selector; Invoice mobile renders six cards with the ten-page selector.
- Forms includes both feature groups, the four-step workflow, statistics, desktop FAQ, legal disclaimer, and the Figma-specific mobile stacking behavior.
- Mobile service tabs use `All templates`; desktop service navigation uses `All`, matching the supplied states.
- Existing Inter typography, button radii, card radii, and TheBestPDF values were preserved.

## Interaction checks

- Viewport switch: Mobile / Desktop.
- Page switch: Invoice / Templates / Forms.
- All six switch combinations load in-place without a page refresh and keep the selected state in the URL.
- Search, category tabs, pagination, FAQ expansion, mobile navigation, and login feedback work.
- Mobile search hides category filters as specified.
- Clicking anywhere on a card triggers the template action; hovering a desktop card also activates the `Use template` hover state.
- The production build completes successfully.
- Production preview console: 0 errors, 0 warnings.

## UI-PES connection

- Switches, login, card CTA, pagination, category controls, FAQ controls, mobile menu, and search all use components from `@universe-forma/ui-pes`.
- Icons use the existing Phosphor icon dependency; no handmade SVG or placeholder UI was introduced.

## Comparison history

1. Initial Forms mobile comparison exposed empty W-2 and 1099-NEC image payloads from the Figma asset endpoint.
2. Replaced those two empty payloads with exact source captures from their Figma card nodes.
3. Aligned service-page hero/catalog heights and the Invoice desktop catalog/footer boundary.
4. Matched the service mobile `All templates` tab and verified all six final states.
