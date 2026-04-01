# Tasks

## Conventions

This file tracks current work and project state. Read at session start.

- **Current**: active tasks, ordered by priority
- **Maturity Map**: what's settled vs placeholder — read before polishing or building on anything
- **Considered but deferred**: ideas parked with rationale
- **Done**: completed items (recent first, compressed)

Status updates: mark items DONE/STALE, don't delete — context matters for future sessions.

### Escalation Markers

Each task item carries an escalation marker:
- 🔴 **Jörn decision required** — agent cannot proceed alone
- 🟡 **Agent can attempt**, but should present result for Jörn review before building on it
- 🟢 **Agent can do autonomously**

---

## Maturity Map

What's settled vs. placeholder — read this before polishing or building on anything.

| Component | Status | Notes |
|-----------|--------|-------|
| Engine (types, state, cards, rng) | **Settled** | Pure TS, well-tested, stable API — inherited from xrisk-pause-game |
| Swipe/drag UX (useSwipe, SwipeCard) | **Settled** | Tuned on real devices, E2E tested |
| Layout/theme system (`src/index.css` @theme) | **Settled** | Centralized CSS vars, safe to retheme |
| Card map tool (`npm run cards`) | **Settled** | D3 force graph + .md export |
| Portrait generation (`scripts/generate-portrait.mjs`) | **Settled** | FAL-AI pipeline, ready for new characters |
| Resource bars (names, icons, death conditions) | **Not started** | Need demon-startup theme definition |
| Card content (144 xrisk cards in `src/data/cards/`) | **Placeholder** | Inherited from pause-game, must be fully replaced |
| Death messages (`src/data/deaths.ts`) | **Placeholder** | Inherited, must be replaced |
| Tutorial (`src/data/tutorial.ts`) | **Placeholder** | Inherited, must be replaced |
| Portraits (`src/assets/portraits/`) | **Placeholder** | 21 pause-game portraits, must be regenerated |
| Title/branding (TitleScreen, index.html, OG) | **Placeholder** | Still shows pause-game branding |
| Share text (`src/components/shareText.ts`) | **Placeholder** | Still references pause-game |
| Color palette (index.css) | **Placeholder** | Current parchment/surveillance theme, needs corporate occult retheme |
| Write-cards skill (`.claude/skills/write-cards/`) | **Placeholder** | xrisk-specific, needs rewrite for demon domain |
| CLAUDE.md | **Placeholder** | Engine/process sections valid, game description sections stale |

Status tiers: **Settled** = safe to build on. **Draft** = exists but expected to change. **Placeholder** = will be replaced. **Not started** = blocked or deferred.

---

## Current

- [ ] 🔴 Define resource bars — 4 bars with demon-startup theme, death conditions at 0 and 100
- [ ] 🔴 Rewrite CLAUDE.md — update title, game description, resource bar docs; keep engine/process sections
- [ ] 🟡 Rewrite write-cards skill for demon-summoning domain
- [ ] 🟡 Replace card content — demon-summoning startup satire with adapted real AI quotes
- [ ] 🟡 Rewrite death messages (src/data/deaths.ts)
- [ ] 🟡 Rewrite tutorial (src/data/tutorial.ts)
- [ ] 🟡 Update TitleScreen.tsx — new title, subtitle, branding
- [ ] 🟡 Update shareText.ts — demon-themed share text, notable cards, failure phrases
- [ ] 🟡 New color palette — corporate occult theme (index.css variables)
- [ ] 🟢 Update index.html — title, meta description, OG tags
- [ ] 🟢 New resource bar icons — 4 SVGs matching demon-startup bars
- [ ] 🟢 Generate speaker portraits — FAL-AI portraits for demon-game advisors
- [ ] 🟢 New favicon + OG image for social sharing

---

## Done
