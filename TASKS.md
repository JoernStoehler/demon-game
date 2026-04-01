# Tasks

## Conventions

This file tracks current work and project state. Read at session start.

- **Current**: active tasks, ordered by priority
- **Done**: completed items (recent first)

### Escalation Markers

- 🔴 **Jörn decision required** — agent cannot proceed alone
- 🟡 **Agent can attempt**, but should present result for Jörn review before building on it
- 🟢 **Agent can do autonomously**

---

## Maturity Map

What's settled vs. placeholder — read before building on anything.

| Component | Status | Notes |
|-----------|--------|-------|
| Engine (types, state, cards, rng) | **Settled** | Pure TS, well-tested, stable API |
| Swipe/drag UX (useSwipe, SwipeCard) | **Settled** | Tuned on real devices, E2E tested |
| Layout/theme system (`src/index.css` @theme) | **Settled** | Centralized CSS vars |
| Card map tool (`npm run cards`) | **Settled** | D3 force graph + .md export |
| Portrait generation script | **Settled** | FAL-AI pipeline, ready for new characters |
| Resource bars (names, icons, death conditions) | **TODO** | Need demon-startup theme definition |
| Card content (144 cards in `src/data/cards/`) | **Placeholder** | Must be fully replaced |
| Death messages (`src/data/deaths.ts`) | **Placeholder** | Must be replaced |
| Tutorial (`src/data/tutorial.ts`) | **Placeholder** | Neutral placeholder, needs demon theme |
| Portraits (`src/assets/portraits/`) | **Placeholder** | 21 pause-game portraits, must be regenerated |
| Title/branding (TitleScreen, index.html, OG) | **Placeholder** | Neutral placeholder, needs final branding |
| Share text (`src/components/shareText.ts`) | **Placeholder** | Must be replaced |
| Color palette (index.css) | **Placeholder** | Inherited parchment theme, needs retheme |
| Write-cards skill | **Placeholder** | xrisk-specific, needs rewrite for demon domain |

---

## Current

### A. Game design (tight iteration loop — all feed into each other)

- [ ] 🔴 Pun sheet — real AI quotes, people, orgs, concepts → demon puns/satire. Rate accessibility (x-risk insider / AI community / general public). Note: Musk (xAI CEO) already used demon metaphor — game can open with this.
- [ ] 🔴 Define resource bars — visible bars + hidden stats are intertwined. Blocked on iterating game design.
- [ ] 🔴 Define speaker roster — blocked on pun sheet (need demon-world names for real people/orgs)
- [ ] 🔴 Game arc / beat sheet — turn ranges for funny→impressive→unsettling tonal shift
- [ ] 🟡 Design hidden state variables — what invisible state mediates card interactions
- [ ] 🟡 Design tonal double-shift — funny→impressive→unsettling expressed through pool gating + content
- [ ] 🟡 Design late-game agency erosion — demons taking over, CEO losing control
- [x] 🔴 Year display — use real years, loosely mapped to AI timeline (start ~2015, OpenAI founding)

### B. Card content (tight loop — needs group A mostly settled first)

- [ ] 🟡 Rewrite write-cards skill + design docs (`design/` guide, domain model) for demon domain
- [ ] 🟡 Replace card content — 144 cards, demon-summoning startup satire with adapted real AI quotes
- [ ] 🟡 Rewrite death messages (`src/data/deaths.ts`)
- [ ] 🟡 Rewrite tutorial (`src/data/tutorial.ts`)

### C. Visual identity (tight loop — loosely connected to A/B, can start in parallel with palette)

- [ ] 🟡 New color palette — corporate occult theme (index.css variables)
- [ ] 🟡 Update TitleScreen.tsx — final title, subtitle, branding
- [ ] 🟢 New resource bar icons — 4 SVGs matching bars from group A
- [ ] 🟢 Generate speaker portraits — FAL-AI portraits for demon-game advisors
- [ ] 🟢 New favicon + OG image for social sharing
- [ ] 🟡 Shareable result card — concept doc: "probably the single highest-ROI feature for virality"

### D. Mechanical implementation (after A settles)

- [ ] 🟢 Rename resource keys in engine — `pol`/`int`/`saf`/`alg` → new keys across codebase
- [ ] 🟢 Implement year display — bottom bar shows timeline from ~2015
- [ ] 🟢 Update index.html — final title, meta description, OG tags
- [ ] 🟢 Update shareText.ts — demon-themed failure phrases, notable cards
- [x] 🟢 Check DeathScreen.tsx — clean, fully data-driven, no pause-game references
- [x] 🟢 Audit audio (`useAudio.ts`) — all 5 sounds synthesized via Web Audio API, no files, theme-agnostic

### E. Verification (after B+C+D are done)

- [ ] 🟢 End-to-end playtest — pool dynamics, death frequency (~15-40 turns), card variety
- [ ] 🟢 Mobile device testing on Jörn's Android
- [ ] 🟢 OG image / social preview — verify rendering on Twitter/Discord/etc.
- [ ] 🟢 Share text QA — generated text reads well

### Stretch

- [ ] 🟡 Secret safety ending — concept doc stretch goal

---

## Done

- [x] Restructure CLAUDE.md — repo map, conventions, workflows; removed stale pause-game content
- [x] Mark stale user-facing content — TODOs in index.html, TitleScreen, deaths, tutorial, shareText, card registry
- [x] Neutralize placeholder text — TitleScreen says "DEMON GAME"/"Play", tutorial is theme-neutral, index.html has neutral title
- [x] Update E2E tests — match new placeholder UI text
