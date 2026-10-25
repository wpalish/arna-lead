# Workspace — implemented surface record

## Authority, mode, and task

ArnaLead is an ordinary local Operate extension of the owner-selected OrtaInbox / Startup Lab cabinet. [PRODUCT.md](../../PRODUCT.md) owns product truth; [DESIGN.md](../../DESIGN.md) records the inherited visual system. The documenter compared the current HTML, CSS, and JavaScript against OrtaInbox's existing DESIGN.md and schemaVersion 2 sidecar. The palette, typography, controls, flat depth, and responsive grammar match. The incumbent OrtaInbox files remain unchanged.

The coordinator manually registers a lead, then its current owner proposes a handover to an existing account with author-written RU/KK context. The recipient explicitly accepts or declines; the sender can cancel. The memorable evidence is the frozen snapshot version beside sender → recipient and the current owner/version.

## Direction contract

THESIS: Make explicit two-party handover inspectable through the exact saved source snapshot and current ownership evidence.

OWN-WORLD: Preserve the navy header and signed-in identity, task navigation, pale blue workspace, white labelled form, green labelled action, system typography, thin borders, and native disclosures inherited from OrtaInbox.

STORY: The operator sees who offered to whom, what frozen context was offered, who owns the lead now, and whether a decision is still available. A refusal explains the recovery while retaining input.

FIRST VIEWPORT: Header and task navigation sit above a fixed-size title and instruction. The evidence section leads with source code and snapshot version, then sender → recipient and current owner/version. Frozen context follows; saved RU/KK and decision details use a native disclosure. The green Save decision action sits at the form's bottom beside Return.

FORM: Existing cabinet detail flow: evidence, saved-details disclosure, labelled white form, workflow help. Local extension; no candidate ranking, catalog concept, approved comp, or comp-led build applies. seed: none (not applicable to this local extension).

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Current composition and states

`public/index.html` provides Russian document language, the focus-visible skip link, linked brand and identity header, task navigation, polite live status notice, main region, and footer. `public/app.js` supplies native lists, search/archive controls, labelled forms, handover evidence, and settings. Dynamic copy is inserted as text nodes. `public/styles.css` owns the inherited token grammar.

Detail content flows vertically. A handover opens with snapshot code/version, sender → recipient, current owner/version, frozen lead title, and frozen context. The native **Сохранённые сведения** disclosure contains saved channel/language labels, author-written RU/KK contexts, and any decision identity, timestamp, and note. Summary retains its native marker. Long identities and evidence wrap; frozen/context body text preserves line breaks.

| State | Visible behavior and meaning |
| --- | --- |
| New lead or handover | Labelled native fields and a green Save lead or Offer handover action. A new offer does not transfer ownership. |
| Offered | Saved lead and recipient are immutable. The intended recipient can accept/decline with a reason; the sender can cancel. |
| Accepted | Current owner/version reflect the accepted handover; the exact older source snapshot remains visible. The completed form and action are locked. |
| Declined, cancelled, or archived | The saved record is immutable and evidence remains readable. |
| Wrong actor / self attempt | A focused refusal notice names the designated-recipient restriction. Existing decision-note input remains in the form. |
| Stale snapshot | Evidence distinguishes the frozen version from the current source version. Inline and submitted refusal feedback direct the sender to cancel and create a new offer; entered decision input remains. |
| Search empty | The list explains that no records match and suggests adding a record or changing search. |

The implementation locks fields through native `readOnly`/`disabled` semantics and reuses saved immutable values in the payload. Submission errors report in place; successful saves return to the list. The page does not introduce motion.

## Product boundaries carried by the surface

Channels are manual labels. RU/KK contexts are written by a person, with no translation or language assessment. Internal acceptance is not a client message or consent. All staff see one shared workspace; assignment controls operations rather than confidentiality. The descriptions and footer retain the absence of import, external messages, AI, and translation. Synthetic demonstration records are explicitly labelled.

## Evidence inspected

The documenter read PRODUCT.md, the current `public/index.html`, `public/styles.css`, and `public/app.js`, the incumbent OrtaInbox DESIGN.md and sidecar, and [the fresh finish review](../../../../program/arna-lead-finish-review.json). It opened all five supplied captures without browser actions:

| Capture | Dimensions | Inspected content |
| --- | --- | --- |
| [Desktop](../../../../../outputs/products/arna-lead-desktop-full.png) | 1440 × 1838 | Accepted record, snapshot v2, alpha → beta, current owner beta · v3, expanded saved evidence, locked form, footer. |
| [Mobile](../../../../../outputs/products/arna-lead-mobile-full.png) | 390 × 2111 | Same accepted record, wrapping navigation/context and full form. Supplied browser measurement records viewport/document/scroll width 390. |
| [User width](../../../../../outputs/products/arna-lead-user-1280.png) | 1280 × 1838 | Same accepted evidence and form at the user's 1280px width. |
| [Self refusal](../../../../../outputs/products/arna-lead-self-refusal.png) | 1280 × 1691 | Designated-recipient refusal, collapsed native disclosure marker, retained decision note. |
| [Stale refusal](../../../../../outputs/products/arna-lead-stale-refusal.png) | 1113 × 1805 | Frozen v1/current v2 distinction, cancellation/re-offer recovery, retained decision note. |

The captures show the named content from the document top, with complete forms/footer and no blank capture regions. They are screenshot evidence only. No shipping/generated marketing raster, new illustration, or replacement visual-world asset exists in this documentation pass.

## Review and documentation completion

[The fresh finish review](../../../../program/arna-lead-finish-review.json) records disposition **ship**, a whole supplied-surface review with no material fixes. Its fidelity matrix covers type/material/ground, shell/identity/navigation, first-viewport handover evidence, immutable form, saved-context disclosure, labelled action, refusal feedback, responsive wrapping, and product truth. Persistence and runtime results are primary-agent supplied evidence; the fresh reviewer independently inspected source and the supplied screenshots. The documenter does not turn these observations into a security, production-readiness, or uncaptured-state audit.

The single supplied static detector result is `[]`; no second detector ran in this pass. No new concept seed, approved comp, comp reproduction state, or visual-world quality board applies to the local extension.

Review: complete — **ship**. Documentation: complete — token-bearing DESIGN.md, schemaVersion 2 `.impeccable/design.json`, and this surface brief. The FINISH condition is discharged at that scope; there are no shipping raster assets requiring provenance metadata.

## Write boundary

This pass writes only `DESIGN.md`, `.impeccable/design.json`, and `.impeccable/surfaces/workspace.md`. It changes no runtime source, product behavior, tests, screenshots, incumbent design files, or other documents. Sidecar tonal ramps are documentation previews derived from the inherited current colors, not new runtime tokens. Self-contained component snippets mirror current buttons, fields, navigation, panels, evidence disclosure, tables, and refusal notices for the design panel.
