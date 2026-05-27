# Muslim Soliotions Product UI Reference

Use this reference for this product and every Muslim Soliotions product. New pages, fields, cards, filters, and navigation must follow these rules instead of creating page-specific visual decisions.

## Themes

Products support two themes only:

- `Dark`: primary operational theme. Base page color is `#010013`.
- `Light`: daily readable theme. Base page color is `#FAF9F6`.

Do not add extra theme modes. The old `Execution` theme is now `Dark`; the old separate dark theme is removed.

## Tokens

Use tokens for all UI:

- Page: `--app-bg`
- Surface: `--surface`
- Raised surface: `--surface-raised`
- Muted surface: `--surface-soft`
- Border: `--border`
- Active border: `--border-strong`
- Text: `--text`
- Muted text: `--muted`
- Brand/action color: `--accent`

Do not hardcode colors inside components unless defining tokens.

## Surfaces

Cards, filters, tables, wallets, ledgers, and panels must come from the same surface family. A filter must not look like a different theme from the card next to it.

Use border and spacing for hierarchy before using shadow. Repeated operational cards should have no decorative glow.

## Glow And Effects

Glow is not a decoration system.

Allowed:

- A small active navigation indicator.
- A critical live/saving/connected state when the state matters.

Avoid:

- Glow under logos.
- Glow on login role text.
- Glow on market cards.
- Glow on normal buttons.
- Different hover glows per feature.

## Buttons

Button sizes:

- Icon: `36px`
- Default: `40px`
- Large action: `48px` or `52px` only when the layout needs it.

Header buttons such as `Execution`, `Alerts`, theme toggle, logout, and back buttons must share the same shell: height, radius, border, padding, font weight, and hover behavior.

Hover is restrained: slight background or border change only. No hover glow and no layout movement in headers.

## Badges

Badges are for state only:

- `Live`
- `Paused`
- `Accepted`
- `Rejected`
- `Saving`
- `Connected`

Do not use badges as decoration or repeated section labels.

## Navigation

Desktop navigation:

- Icon and label use muted color by default.
- Selected item uses brand color and a clear active indicator.
- No glow-heavy active states.

Mobile navigation:

- Use a bottom navigation bar.
- Keep it to the primary destinations: Home, Research, Execution.
- Selected item uses brand color and an active indicator.
- Do not compress desktop sidebars into long vertical mobile layouts.

## Layout

Desktop can be dense, but sections must be flat. Do not create cards inside cards unless the inner card is a repeated data item.

Mobile needs its own layout. Use compact summaries, bottom navigation, sheets/dropdowns for filters, and horizontal scrolling for dense ledgers when needed.

## Implementation Rule

When adding UI, first choose the existing token and component pattern. If a new pattern is needed, add it to this reference before using it in the app.
