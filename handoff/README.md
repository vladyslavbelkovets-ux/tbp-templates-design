# Templates catalog — developer handoff

Figma source: [Templates library — Master 2](https://www.figma.com/design/EGgCjJ9KZf2XoX3RXKKuFC/Templates-library?node-id=188-9293&p=f)

## Screen coverage

| State | Desktop | Mobile | Implementation note |
| --- | --- | --- | --- |
| Paginated catalog | Yes | Yes | 12 cards per desktop page; 6 per mobile page. |
| Single-page results | Yes | Yes | Catalog height follows the visible cards; pagination is hidden. |
| Search results | Covered | Yes | Mobile search hides category tabs and pagination. |
| Empty results | Yes | Yes | “Clear search” resets the query and returns to page 1. |
| Card default | Yes | Yes | Preview starts at the top of the document. |
| Card hover / focus | Yes | N/A | Reuse hover styling for keyboard focus; touch uses the default state. |
| Loading / error | N/A | N/A | Current catalog uses local static data and images. Add these states only if the data source becomes remote. |

## Behavior rules

- Hide pagination when the filtered result set fits on one page.
- Keep the catalog container responsive to the number of visible card rows.
- Preserve the selected category while paging; reset to page 1 after category or search changes.
- Clamp card descriptions to two lines and keep each description specific to its template.
- Align document previews to the top of their image area.
- Desktop categories use the left navigation; mobile categories use horizontally scrollable tabs.

## Content and assets

- Canonical titles, categories, descriptions, and runtime paths: [`src/templateData.js`](../src/templateData.js)
- Developer preview library and manifest: [`handoff/template-previews`](template-previews/README.md)
- Runtime preview assets: [`public/assets/template-previews`](../public/assets/template-previews/)
