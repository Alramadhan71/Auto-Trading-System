# Muslim Soliotions Product Design System

Use this guide for every Muslim Soliotions product. A product may have its own logo, name, accent, and domain language, but it must still feel like it belongs to one product family.

## Product Lockup

Every product must present identity in this order:

1. Product logo or product mark.
2. Product name.
3. `By Muslim Soliotions`.

The logo may change per project, but all marks should share a similar grid, stroke weight, corner radius, and simple geometric construction.

## Themes

Each product must support three themes:

- `Light`: daily work, readability, settings, forms, and general browsing.
- `Dark`: long sessions, dashboards, and low-light work.
- `Execution`: high-focus operational mode with stronger contrast, tighter surfaces, clear status colors, and minimal decoration.

Do not hardcode colors in components. Use tokens such as `--bg`, `--panel`, `--panel-strong`, `--border`, `--text`, `--muted`, `--accent`, `--success`, `--danger`, and `--warning`.

## Layout

Desktop should use wider, denser layouts with clear navigation, dashboards, tables, and multi-column work areas.

Mobile must not be a smaller desktop. Use focused screens, bottom navigation, compact summaries, sheets for filters, and sticky primary actions when the user is executing a task.

## Gradients And Effects

Use gradients only for brand focus, status emphasis, or hero atmosphere. Avoid gradients inside tables, forms, repeated cards, and execution screens.

Use shadows, blur, glow, and animation only to clarify depth, interaction, or state. Effects should never carry the design by themselves.

## AI Prompt

```text
Design this product as part of the Muslim Soliotions product family.

Always show the product identity as: product logo, product name, and “By Muslim Soliotions”.

Support Light, Dark, and Execution themes using design tokens. Do not hardcode visual values inside individual components.

Keep the interface technical, clean, structured, and operational. Use restrained surfaces, consistent spacing, 6px-10px radius, clear hierarchy, and status colors only when they communicate state.

Mobile must be designed as its own experience, not a compressed desktop. Use bottom navigation, focused screens, compact summaries, sheets for filters, and sticky execution actions where useful.

Use gradients only when they communicate focus, status, or brand atmosphere. Avoid decorative gradients in tables, forms, and repeated operational cards.

Every new button, card, form, table, modal, and page must fit the same tokens, radius, spacing, typography, and theme behavior.
```
