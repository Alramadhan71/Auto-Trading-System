# Muslim Alramadhan Atlas Brand Kit

Atlas is the shared design system for Muslim Alramadhan projects. It is built for technical products, dashboards, automation tools, and trading interfaces: calm, precise, dense enough for real work, and recognizable without relying on a logo.

## Identity

The visual signature is:

- Dark professional surfaces with crisp borders.
- A cool blue brand accent for product identity and interaction.
- Green only for success, profit, safe, or active-positive states.
- Red only for loss, danger, failure, or high-risk states.
- Amber only for warning, pending, medium-risk, or attention states.
- Compact 8px to 14px radii, never oversized pill cards except navigation/chips.
- Subtle lift on hover: border brightens, surface lightens, element moves up 1px or 2px.
- Strong data readability: the page background, section surface, card surface, field surface, and hover surface must be visually distinct.

## Theme Modes

All projects should keep these three modes with the same IDs. The exact hex values can evolve, but the semantic roles should not.

### Atlas Light

Use for bright work environments and documents.

```css
:root[data-theme="light"] {
  --bg: #f4f7fb;
  --sidebar: #ffffff;
  --panel: #ffffff;
  --panel-strong: #eef2f7;
  --panel-soft: #e6edf6;
  --border: #c8d2df;
  --text: #111927;
  --muted: #5d6b7c;
  --accent: #245fd6;
  --success: #168a5a;
  --danger: #c84152;
  --warning: #9a691d;
}
```

### Atlas Dark

Use as the default product mode. This is the main brand look.

```css
:root[data-theme="dark"] {
  --bg: #0b1017;
  --sidebar: #0e141d;
  --panel: #141b26;
  --panel-strong: #101720;
  --panel-soft: #1b2532;
  --border: #2c394b;
  --text: #f5f8ff;
  --muted: #9aa8ba;
  --accent: #4f8cff;
  --success: #35c77f;
  --danger: #f06472;
  --warning: #d8a84f;
}
```

### Atlas Black

Use for ultra-dark execution desks, OLED views, and focused monitoring.

```css
:root[data-theme="black"] {
  --bg: #050607;
  --sidebar: #080a0d;
  --panel: #0e1115;
  --panel-strong: #0a0d10;
  --panel-soft: #15191f;
  --border: #2a3038;
  --text: #f4f6f8;
  --muted: #9da5b1;
  --accent: #aeb8c8;
  --success: #52c782;
  --danger: #ef6672;
  --warning: #c99c4a;
}
```

## Core Tokens

Use semantic tokens in components, not raw colors.

```css
:root {
  --surface-page: var(--bg);
  --surface-nav: color-mix(in srgb, var(--sidebar) 94%, black);
  --surface-section: color-mix(in srgb, var(--panel-strong) 86%, var(--bg));
  --surface-card: color-mix(in srgb, var(--panel) 92%, var(--bg));
  --surface-card-raised: color-mix(in srgb, var(--panel-soft) 82%, var(--panel));
  --surface-field: color-mix(in srgb, var(--panel-strong) 74%, var(--bg));
  --surface-hover: color-mix(in srgb, var(--accent) 13%, var(--surface-card-raised));
  --surface-active: color-mix(in srgb, var(--accent) 20%, var(--surface-card));
  --border-subtle: color-mix(in srgb, var(--border) 78%, transparent);
  --border-control: color-mix(in srgb, var(--border) 88%, var(--text) 8%);
  --border-focus: color-mix(in srgb, var(--accent) 64%, var(--border));
  --radius-sm: 8px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --control-h-md: 42px;
  --control-h-lg: 54px;
}
```

## Component Rules

Buttons:

- Primary actions use the brand accent, not green.
- Secondary actions use `--surface-field` and accent border on hover.
- Success buttons are only for successful state confirmation.
- Every button must have hover, active, focus, and disabled states.

Cards and panels:

- Page sections use `--surface-section`.
- Repeated cards use `--surface-card`.
- Inputs and segmented controls use `--surface-field`.
- Use one card level only. Do not put decorative cards inside decorative cards.

Progress and sliders:

- Track uses `--progress-track` or `--slider-track`.
- Fill uses brand accent, or success-warning-danger only when it represents risk.
- Thumb must contrast against both the track and the page.

## Implementation Contract

Every project should:

- Keep `data-theme="light" | "dark" | "black"` on the document root.
- Import the shared token layer before page-specific CSS.
- Use shared classes/components for `Button`, `Panel`, `Card`, `Input`, `SegmentedControl`, `Progress`, `Slider`, `Badge`, and `PageHeader`.
- Avoid page-specific brand colors. Pages can change layout, not identity.
- Treat green, red, and amber as semantic status colors only.

