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

- [ ] 🔴 Define resource bars — 4 bars with demon-startup theme, death conditions at 0 and 100
- [ ] 🟡 Rewrite write-cards skill for demon-summoning domain
- [ ] 🟡 Replace card content — demon-summoning startup satire with adapted real AI quotes
- [ ] 🟡 Rewrite death messages (src/data/deaths.ts)
- [ ] 🟡 Rewrite tutorial (src/data/tutorial.ts) — currently neutral placeholder
- [ ] 🟡 Update TitleScreen.tsx — final title, subtitle, branding
- [ ] 🟡 Update shareText.ts — demon-themed share text, notable cards, failure phrases
- [ ] 🟡 New color palette — corporate occult theme (index.css variables)
- [ ] 🟢 Update index.html — final title, meta description, OG tags (currently neutral placeholder)
- [ ] 🟢 New resource bar icons — 4 SVGs matching demon-startup bars
- [ ] 🟢 Generate speaker portraits — FAL-AI portraits for demon-game advisors
- [ ] 🟢 New favicon + OG image for social sharing

---

## Done

- [x] Restructure CLAUDE.md — repo map, conventions, workflows; removed stale pause-game content
- [x] Mark stale user-facing content — TODOs in index.html, TitleScreen, deaths, tutorial, shareText, card registry
- [x] Neutralize placeholder text — TitleScreen says "DEMON GAME"/"Play", tutorial is theme-neutral, index.html has neutral title
- [x] Update E2E tests — match new placeholder UI text
