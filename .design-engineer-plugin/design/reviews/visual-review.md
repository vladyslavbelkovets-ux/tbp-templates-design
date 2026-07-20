# Visual review — centered template catalog

Review source: the user's catalog reference screenshot, the existing implementation before commit `f041913`, and the current Figma-based page structure.

Review method: live local implementation at wide desktop `1920 × 1000`, design desktop `1440 × 900`, and mobile `390 × 844`.

## Result

Passed. The complete catalog is centered as one bounded block, and the previously approved font and corner geometry are restored.

## Applied corrections

### [P1] The catalog expanded edge-to-edge on wide screens

- **Expected:** categories and cards should remain one centered catalog surface, matching the supplied reference composition.
- **Actual:** after the previous revision, the grid continued growing with the viewport and cards reached almost `500px` wide at `1920px`.
- **Fix:** constrained the complete catalog to the `1440px` design canvas and centered it with automatic outer margins. The white panel remains `1376px` wide and its internal card grid still uses all available design width.

### [P1] Typography changed from the approved implementation

- **Expected:** Inter throughout the existing page.
- **Actual:** the previous revision switched the project font to Outfit.
- **Fix:** restored Inter as the primary font and removed the unused Outfit dependency and font files from the build.

### [P2] Corner radii changed from the approved implementation

- **Expected:** card `12px`, card action `4px`, search field `6px`, and login action `4px`.
- **Actual:** the previous revision increased these values to `16px` and `12px`.
- **Fix:** restored the earlier design tokens and component-specific radii.

## Verification evidence

- Wide desktop (`1920px`): complete catalog `1440px`, centered at `960px`; white panel from `272px` to `1648px`, centered at `960px`.
- Design desktop (`1440px`): white panel from `32px` to `1408px`, centered at `720px`.
- Mobile (`390px`): white panel from `12px` to `378px`, centered at `195px`.
- Computed primary font: `Inter, sans-serif`.
- Computed radii: card `12px`, card button `4px`, search `6px`, login `4px`.
- No horizontal overflow at `1920px`, `1440px`, or `390px`.
- Existing filtering, conditional pagination, responsive card count, table, FAQ, and legal alert remain intact.

## UX non-negotiables

- Categories and cards read as one grouped catalog instead of two disconnected regions.
- The primary `Use template` action remains consistent across all cards.
- Active category, filtering, search, pagination, and FAQ disclosure retain conventional interaction and visible focus behavior.
