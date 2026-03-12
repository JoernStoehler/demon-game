# Tasks

## Conventions

This file tracks current work and project state. Read at session start.

- **Current**: active tasks, ordered by priority
- **Maturity Map**: what's settled vs placeholder — read before polishing or building on anything
- **Considered but deferred**: ideas parked with rationale
- **Done**: completed items (recent first, compressed)

Status updates: mark items DONE/STALE, don't delete — context matters for future sessions.

---

## Maturity Map

What's settled vs. placeholder — read this before polishing or building on anything.

| Component | Status | Notes |
|-----------|--------|-------|
| Engine (types, state, cards, rng) | **Mostly settled** | Pure TS, well-tested, stable API |
| Swipe/drag UX (useSwipe, SwipeCard) | **Mostly settled** | Tuned on real devices, E2E tested |
| Resource system (4 bars, icons, previews) | **Draft** | Mechanics may change in content overhaul |
| Layout/theme system (`src/index.css` @theme) | **Mostly settled** | Centralized CSS vars, safe to retheme |
| Screens (Title, Game, Death, Tutorial) | **Draft** | Screen layout and content will change |
| Card content (144 cards in `src/data/cards/`) | **Draft** | 144 cards across 38 files, agent-written — text quality needs expert review/rewrite |
| Death messages (`src/data/deaths.ts`) | **Placeholder** | Will change with content overhaul |
| Tutorial (3 cards in `src/data/tutorial.ts`) | **Placeholder** | MVP: 3 scripted Deputy Director cards, not designed content |
| Portraits (21 PNGs in `src/assets/portraits/`) | **Placeholder** | 11 flagged bad style, 3 borderline, need regen. Per-file JSON sidecars do NOT exist — only shared `style.json` |
| Title/death screen visuals | **Placeholder** | Will change with content overhaul |
| Card map tool (`npm run cards`) | **Settled** | D3 force graph + .md export, content tags on all cards |
| Domain model (`design/domain-model.md`) | **Settled** | 10-dimension expert model, clean rewrite, game-state mapping |
| Card concepts (`design/card-concepts.md`) | **Settled** | 144 ideas by topic, duplicate flags, upstream design artifact |
| History chains / degraded variants | **Draft** | Some exist in current cards, needs expansion |
| Achievements / card collection | **Not started** | Deferred — revisit after content overhaul |

Status tiers: **Settled** = safe to build on. **Draft** = exists but expected to change. **Placeholder** = will be replaced. **Not started** = blocked or deferred.

---

## Current

### Geopolitics content gap (in progress)

Jörn identified that the game's geopolitical model is naive — treats corruption, institutional capture, and adversary influence as edge cases when they're primary mechanisms. This is well-established in arms control, nonproliferation, and export control literature.

**Why:** Without this, the game won't feel realistic to anyone who knows how geopolitics works. Corruption isn't a card topic — it's a dynamic that runs through chip supply chains, enforcement, political support, and intelligence.

**Steps:**
1. [x] Flag gap in domain-model.md
2. [x] Agent research: 4 reports in `design/research/` (arms control, sanctions evasion, regulatory capture, 30yr geopolitics) — agent-written, cited, need expert validation
3. [x] Fetch cited source documents → `literature/` (16 geopolitics sources added to literature root)
4. [x] Synthesis: 17 mechanisms extracted → `design/geopolitics-synthesis.md`
5. [ ] Jörn reviews synthesis, corrects misunderstandings, adds expert context
6. [x] Update domain-model.md with validated geopolitics model (M1–M17 ISIA scenario model)
7. [x] Derive new card concepts from updated model → 40 geopolitics card concepts in `design/card-concepts.md`
8. [ ] Implement cards in TypeScript

### Other (blocked on content decisions)

- [ ] Card text quality: 144 cards exist but text is agent-written placeholder quality — Jörn reviewing via `design/cards-export.md` and `public/cards-map.html`
- [ ] Portrait regeneration: 11 bad, 3 borderline — blocked on card content
- [ ] More history-triggered chains (blocked on card content)
- [ ] More degraded variant pairs (blocked on card content)
- [ ] Re-balance after content pass
- [ ] Title/death screen polish — defer until after card content pass

### Balance Tuning Process

When re-balancing after content changes, follow this process:

1. **Simulate before tuning.** Run 20-30 random-play games, collect death-cause distribution and turn-count range:
   ```bash
   for i in $(seq 1 20); do npm run cli reset 2>&1 | tail -0; npm run cli auto 50 2>&1 | grep -E "depleted|overloaded|Survived"; done
   ```
   If >40% of deaths are the same cause, that resource axis is structurally broken.

2. **Count flow rates, not individual cards.** Balance problems are rarely one card's delta — usually the net flow for resource X across ALL cards. Count sources and sinks per resource. If a resource has 12 drain cards and 3 source cards, add source cards.

3. **Crisis cards are the thermostat.** High-weight resource-gated cards self-correct extreme bars. Minimum: 1 crisis card per resource per direction = 8 total.

4. **Weight dominance kills variety.** No always-on card should exceed 1.5x average pool weight. High weights (3-5) reserved for conditional cards.

5. **Re-simulate after changes.** Check: (a) death types spread across 5+ of 8 causes, (b) turn counts 15-40, (c) no card appears more than once every 4 turns.

**Last balance state (144 cards, 8 death messages):** STALE — balance stats are from the old 28-card set. Needs re-simulation after content overhaul.

---

### Considered but deferred

- Achievements / card collection: revisit after content overhaul
- Settings screen: nothing to configure. Add if tutorial needs skip toggle or accessibility needs arise
- Better desktop layout: mobile is primary, current max-w-md phone-app look works fine
- Different starts + immersive selection screen: massive scope, premature before content overhaul
- framer-motion migration: AnimatePresence would properly sequence card enter/exit (currently setTimeout + key remount)

---

## Done (recent first)

- [x] Domain model rewrite: `design/domain-model.md` — full rewrite, stripped stale agent commentary, added game-state mapping + content pipeline
- [x] Card concepts file: `design/card-concepts.md` — 144 card ideas grouped by 21 topics, duplicate flags, upstream design artifact for Jörn
- [x] Idea field: added `idea?: string` to all 144 cards for concept-level review in cards-export.md
- [x] Card map & export tool: `npm run cards` generates `design/cards-export.md` + `public/cards-map.html` (D3 force graph with tag/state/chain edges, force+grid toggle, search, tooltips)
- [x] Content topic tags: added `tags?: string[]` to Card type, tagged all 144 cards with 21 content topics, added tag guidance to write-cards skill
- [x] Card system refactor: CardScript functions, deleted helpers.ts, inlined clamping, split cards into 6 files, updated docs + SKILL.md
- [x] Stale reference audit: fixed card counts (29→28), file paths in review agent, removed helpers.ts references
- [x] Repo cleanup: deleted 9 stale files, removed CC Web section from CLAUDE.md, fixed core thesis attribution, cleaned up TASKS.md, folded BALANCE.md, deleted stale branch
- [x] Polish branch merged: ErrorBoundary, data-testid/ARIA, SEO meta tags, useAudio hook (6 SFX + ambient drone), keyboard controls (Enter/Escape)
- [x] Phone-frame layout, death screen polish, fly-off animation tuning
- [x] Keyboard controls, social sharing, tutorial cards
- [x] QA reference page (`#qa`), card-writing guide, portrait provenance, card provenance
- [x] Swipe flicker fix, swipe UX polish (real mobile), UX polish pass, desktop playtest fixes
- [x] Visual overhaul v3 polish + v3 + v2 + v1
- [x] E2E tests, balance tuning (29 cards, 6/8 death types), engine, CLI tool, swipe UX
- [x] V1 prototype (RTS/map) — scrapped, pivoted to Reigns-style
