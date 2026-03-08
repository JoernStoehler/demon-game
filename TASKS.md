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
| Card content (28 scripts in `src/data/cards/`) | **Placeholder** | All cards are placeholder — 11 marked throwaway, 18 grounded in literature but still placeholder |
| Death messages (`src/data/deaths.ts`) | **Placeholder** | Will change with content overhaul |
| Tutorial (3 cards in `src/data/tutorial.ts`) | **Placeholder** | MVP: 3 scripted Deputy Director cards, not designed content |
| Portraits (21 PNGs in `src/assets/portraits/`) | **Placeholder** | 11 flagged bad style, 3 borderline, need regen. Per-file JSON sidecars do NOT exist — only shared `style.json` |
| Title/death screen visuals | **Placeholder** | Will change with content overhaul |
| History chains / degraded variants | **Not started** | Blocked on card content |
| Achievements / card collection | **Not started** | Deferred — only 28 cards, collection completes in ~5 runs |

Status tiers: **Settled** = safe to build on. **Draft** = exists but expected to change. **Placeholder** = will be replaced. **Not started** = blocked or deferred.

---

## Current

- [ ] Card content: replace throwaway cards with real x-risk scenario cards — use `/write-cards` skill, review output via `npm run cli cards` and `#qa` page. Review format: agent generates .md listing all cards → Jörn gives feedback → agent edits cards + regenerates .md
- [ ] Portrait regeneration: 11 portraits flagged as bad style need regen via `scripts/generate-portrait.mjs` — bad: P2(CFO), P3(Chief Scientist), P7(Deputy Dir), P9(Enforcement Chief), P11(Exec Asst), P14(Intel Analyst), P17(Legal Counsel), P20(Press Secretary); borderline: P15(Inv Journalist), P16(Junior Analyst), P18(NATO Liaison)
- [ ] More history-triggered chains (blocked on card content)
- [ ] More degraded variant pairs (blocked on card content)
- [ ] Re-balance after content pass
- [ ] Title/death screen polish: animations, icon sizes, layout feel clunky on mobile — defer until after card content pass sets the mood

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

**Last balance state (28 cards, 24 death messages):** 6/8 death types observed. Still rare: intel-depleted (intel trends up), leverage-depleted (rescued by crisis card). Only random-play tested — no human playtesting yet.

---

### Considered but deferred

- Achievements / card collection: only 28 cards — collection completes in ~5 runs. Revisit after content overhaul
- Settings screen: nothing to configure. Add if tutorial needs skip toggle or accessibility needs arise
- Better desktop layout: mobile is primary, current max-w-md phone-app look works fine
- Different starts + immersive selection screen: massive scope, premature with 28 cards
- framer-motion migration: AnimatePresence would properly sequence card enter/exit (currently setTimeout + key remount)

---

## Done (recent first)

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
