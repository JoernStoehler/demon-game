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
