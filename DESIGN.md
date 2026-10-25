---
name: ArnaLead
description: An inherited working cabinet for explicit lead handover and versioned ownership evidence.
colors:
  primary: "#126653"
  primary-hover: "#0b5343"
  navy: "#183e60"
  ink: "#172e45"
  page: "#edf3f8"
  surface: "#ffffff"
  line: "#b9cbd9"
  navigation-surface: "#dce9f3"
  muted: "#46627a"
  input-stroke: "#7894aa"
  link: "#174e7e"
  pending: "#795200"
  error: "#942721"
  error-surface: "#fff0ee"
  focus: "#bd671a"
  selection-surface: "#b7ded2"
  selection-ink: "#132f29"
typography:
  primary-heading:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    fontSize: "2rem"
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  section-heading:
    fontSize: "1.3rem"
  brand:
    fontSize: "1.4rem"
    fontWeight: 740
  body:
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
  label:
    fontWeight: 600
  supporting:
    fontSize: "0.9rem"
rounded:
  control: "7px"
  panel: "12px"
spacing:
  inline-gap: "0.5rem"
  action-gap: "0.6rem"
  control-inset: "0.7rem"
  unit: "1rem"
  page-inline: "1.25rem"
  panel-inset: "1.4rem"
  section: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1rem"
  button-default:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1rem"
  field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "{spacing.control-inset}"
    width: "100%"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "{spacing.panel-inset}"
  navigation-current:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.navy}"
    rounded: "{rounded.control}"
    padding: "0.65rem 1rem"
---

# Design System: ArnaLead

## Overview

**Creative North Star: "The Shared Work Cabinet"**

ArnaLead extends the owner-selected OrtaInbox and Startup Lab working cabinet. This is an ordinary Operate surface: pale blue ground, dark navy navigation, white forms, and green primary actions. The inherited shell remains the visual authority; this record does not introduce a replacement world or claim a comp-led build.

Its character is direct, flat, and readable. System typography, native fields, tables, and disclosure controls make operational text the focus. Color separates navigation, actions, and supporting states; borders and spacing separate content without shadows.

**Key Characteristics:**

- Inherited navy navigation and pale blue workspace.
- Green primary actions and white bordered form panels.
- System typography with a fixed-size primary heading.
- Native controls, visible focus, and readable dynamic evidence.

## Colors

A cool working palette uses navy for orientation and deep green for the main action. The frontmatter records the exact implemented values.

### Primary

- **Working Green** (`primary`): submit buttons, primary creation actions, and the available status utility. Its darker hover value is `primary-hover`.

### Secondary

- **Cabinet Navy** (`navy`): header, default filled buttons, navigation text, and outlined secondary actions.
- **Link Blue** (`link`): text links and field caret.

### Tertiary

- **Pending Amber** (`pending`): the available pending-state utility.
- **Error Red** and **Pale Error** (`error`, `error-surface`): error notice text and background.
- **Focus Amber** (`focus`): the three-pixel keyboard focus outline.
- **Soft Selection Green** and **Selection Ink** (`selection-surface`, `selection-ink`): native text selection.

### Neutral

- **Cabinet Ink** (`ink`): the inherited root text color.
- **Cool Workspace** (`page`): page ground and scrollbar track.
- **White Surface** (`surface`): forms, selected navigation, and notices.
- **Divider Blue** (`line`): panel borders, table rows, and section dividers.
- **Navigation Mist** (`navigation-surface`): navigation strip and table heading fill.
- **Supporting Slate** (`muted`): helper copy and footer.
- **Field Slate** (`input-stroke`): input borders and scrollbar thumb.

**The Inherited Shell Rule.** Extend the current OrtaInbox and Startup Lab cabinet instead of replacing its palette, typography, or navigation grammar.

## Typography

**Display Font:** the system stack in `primary-heading`; there is no separate display face.

**Body Font:** the system stack in `body`. Inputs, textareas, selects, and buttons inherit it. No webfont is loaded.

**Character:** practical native-interface typography. Most sizes and weights remain inherited or browser defaults unless explicitly declared below.

### Hierarchy

- **Primary heading:** fixed `2rem`, line height `1.15`, letter spacing `-0.025em`, margin `0 0 0.8rem`. It does not use `clamp()`.
- **Section heading:** `1.3rem`, margin `2rem 0 0.75rem`.
- **Brand:** `1.4rem`, weight `740`.
- **History heading:** `1rem`, margin `0 0 0.5rem` in an entry; handover evidence uses native heading flow with wrapping safeguards.
- **Body paragraphs:** root system font, maximum `72ch`, line height `1.6`, margin `0.5rem 0 1rem`. The root does not declare a body font size or line height.
- **Labels and buttons:** weight `600`; labels use margin `1rem 0 0.35rem` and the first label has no top margin.
- **Supporting copy:** `0.9rem`; mobile table hints use `0.85rem` and line height `1.5`. Small help text has line height `1.5`.
- **Preformatted audit text:** `0.85rem`, `white-space: pre-wrap`, `overflow-wrap: anywhere`. Tables and date inputs use tabular numerals.

**The Fixed Heading Rule.** Keep the primary heading at the implemented fixed 2rem size; no fluid display scale is defined.

## Layout

The header and navigation share an inline inset of `max(1.25rem, calc((100% - 1160px) / 2))`. The header is a flex row with centered items, space between brand and identity, `1rem` gap, and `1.1rem` vertical padding. Navigation is a wrapping-capable button row with `0.5rem` gap and `0.7rem` vertical padding.

Main content has maximum width `1200px`, automatic inline margins, padding `2rem 1.25rem`, and minimum height `75vh`. Form panels have `min-width: 0`. The optional work grid uses `minmax(0, 1fr) minmax(260px, 0.8fr)`, `2rem` gap, and start alignment; paired rows use two equal columns with a `1rem` gap. Handover evidence and its form flow vertically in the current detail surface.

At `700px` and below, work and paired rows become one column, work gap becomes `1.2rem`, main padding becomes `1.4rem 1rem`, and panel padding becomes `1rem`. Header items align to the top; identity is `0.8rem` with maximum width `140px`. Navigation uses `0.6rem` padding, wraps, and initially gives buttons flexible width. At `600px` and below, navigation buttons use `flex: auto`, search tools become one column, and table cells have minimum width `140px` with a `0.9rem` table font size.

Tables remain inside a focusable horizontally scrollable wrapper; the narrow-screen hint explains the scroll. Search tools use `minmax(200px, 500px) auto` with `0.5rem 1.2rem` gaps above the narrow breakpoint. Actions wrap with a `0.6rem` gap and `1rem` top margin.

Long identity, evidence, evidence paragraphs/headings, details, and primary/section headings use `min-width: 0` and `overflow-wrap: anywhere`. Footer text wraps anywhere too. Preserve complete dynamic text rather than adding truncation.

## Elevation & Depth

No box shadows or backdrop effects are defined. White panels, the pale page, the navigation strip, one-pixel borders, and whitespace establish separation. Hover uses a brightness filter; no transition or animation is defined in the current stylesheet.

## Shapes

Controls and notices have gently rounded corners (`7px`); panels and table wrappers use broader corners (`12px`). Borders are one pixel. Form inputs are full width, and textareas start at `100px` high with vertical resizing. Buttons have a minimum height of `44px`.

## Components

### Buttons

Direct, labeled actions with native button semantics.

- Primary and submit buttons use Working Green with a matching border and white text. Hover changes the background to the deeper primary value while the general button brightness filter (`1.13`) also applies.
- Default filled buttons use Cabinet Navy; secondary buttons use white with navy text and border.
- All use `0.65rem 1rem` padding, `7px` corners, minimum height `44px`, inherited font, and weight `600`.
- Disabled buttons use opacity `0.55` and `cursor: not-allowed` (the later declaration overrides the earlier wait cursor). Buttons are limited to `100%` width on narrow screens.
- Keyboard focus uses a `3px` amber outline with `3px` offset. No custom active transform or transition exists.

### Cards / Containers

Flat white forms with a one-pixel Divider Blue border, `12px` corners, `1.4rem` inset (`1rem` below `700px`), and `min-width: 0`. The login form is capped at `480px`. Table wrappers use the same border and corner language with horizontal scrolling.

### Inputs / Fields

Native input, select, and textarea controls use white fill, Cabinet Ink text, a one-pixel Field Slate border, `7px` corners, and `0.7rem` padding. The caret is Link Blue. Labels are explicitly connected to generated field IDs. Read-only and disabled presentation follows native controls; a completed or archived handover form is locked, and a saved handover keeps its source and recipient immutable. Existing leads are locked when the current user is not the owner. Error feedback is a focused, live status notice with Error Red on Pale Error.

### Navigation

The navy header contains the linked brand and current identity. The pale navigation strip uses native text buttons. Unselected buttons are transparent with navy text; the current page is white with a Divider Blue border and `aria-current="page"`. On mobile the row wraps. A skip link becomes visible on keyboard focus.

### Tables

Full-width collapsed-border tables use left-aligned, top-aligned cells with `0.9rem` padding, one-pixel bottom dividers, and `overflow-wrap: anywhere`. Cell text has maximum width `28ch`; action button text remains unbroken. Heading cells use Navigation Mist and `0.9rem` text. The final row drops its bottom border.

### Handover Evidence and Saved Details

A top border, `1rem` padding/margin, and a grid gap of `0.4rem` separate evidence from introductory copy. The saved lead code and snapshot version lead the section, followed by sender → recipient, the current owner and current lead version, the frozen source title, and frozen context. Context body text uses `white-space: pre-wrap`.

Saved channel/language labels, author-written RU/KK contexts, and any decision identity, timestamp, and note use native `details` and `summary`. Summary remains `display: list-item`, with `min-height: 44px`, `padding: 0.7rem 0`, and a pointer cursor. It retains the native right/down disclosure marker in collapsed/expanded states. Identity and all dynamic evidence containers retain wrapping safeguards.

Refusal feedback appears in the focused live status notice above the title. A stale saved snapshot also has an inline error paragraph in the evidence section. Submission errors leave the existing form and entered note in place; the source does not rebuild the form on error.

**The Native Disclosure Rule.** Preserve the native details/summary marker and interaction when presenting saved evidence.

## Do's and Don'ts

### Do:

- **Do** inherit the navy header, pale workspace, white form surfaces, and green primary action.
- **Do** retain system typography and the fixed primary heading scale.
- **Do** keep native disclosure markers and visible keyboard focus.
- **Do** allow long identities and evidence to wrap with min-width: 0 and overflow-wrap: anywhere.
- **Do** retain full evidence text and frozen source snapshots.

### Don't:

- **Don't** replace the inherited shell with a new visual identity.
- **Don't** imply that ownership or a channel label is an access boundary or an integration.
- **Don't** present a manual internal decision as an external message or verified delivery.
- **Don't** remove native disclosure markers or clip long evidence to make a layout fit.
