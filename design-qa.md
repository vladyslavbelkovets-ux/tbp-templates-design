# Design QA — Templates / Invoice / Forms

## Result: passed

No actionable P0, P1, or P2 visual issues remain in the reviewed desktop and mobile implementation.

## Source of truth

- Desktop card states: A/B Testing TBP node `27980:65054`.
- Card component: default node `28079:15399`; hover node `28079:15421`.
- Mobile catalog source: A/B Testing TBP nodes `27980:65059`, `27980:65222`, and `27980:65307`.
- Templates: Templates Library node `15:19695`.
- Forms content and previews: Templates Library node `72:43790`.
- Forms handoff: A/B Testing TBP node `27980:65156`.
- Invoice handoff: A/B Testing TBP node `27980:65291`.

## Verified outcomes

- Templates, Invoices, and Forms share the approved desktop card: 348 px tall, 250 px preview dock, and 98 px content area.
- Desktop default uses the neutral dock and hides the CTA; hover and keyboard focus use the blue dock, raised shadow, enlarged preview, and centered filled CTA.
- Mobile keeps the approved default-only card: 260 px tall, neutral 162 px preview dock, 98 px content area, chevron action, and no overlaid CTA.
- Mobile category tabs use the compact 32 px treatment with 14/18 px labels.
- Forms desktop contains the 12 correct official forms, not Template receipt/estimate content.
- Forms titles, short descriptions, preview images, `Fill out form` CTA, and top-aligned crops match the approved source.
- 1099-NEC, W-2, and CMS-1500 use the Figma grayscale/contrast treatment instead of rendering red.
- Invoice keeps the 12 approved invoice titles and exact source descriptions, while each card reuses the closest real document preview from the Templates library.
- No generated or placeholder invoice preview is rendered; the mapping is documented in `handoff/invoice-previews/manifest.csv`.
- Invoice contains exactly 12 unique cards: desktop has one page and hides pagination; mobile has two pages with 6 cards each.
- Templates mobile empty search shows the compact state without categories or pagination.
- Desktop empty search hides the category sidebar and centers the state across the catalog content width.
- Desktop and mobile widths have no horizontal overflow and no broken image requests.
- Production build succeeds with `npm run build`.

## Evidence

- `qa/figma-forms-restored.png`
- `qa/forms-desktop-final.png`
- `qa/forms-mobile-final.png`
- `qa/templates-empty-mobile-final.png`
- `handoff/invoice-previews/manifest.csv` (the reviewed Invoice-to-Template preview map)

## Technical note

The published UI-PES package emits one React `forwardRef` development warning. It is non-visual and does not affect the reviewed layout or interactions.
