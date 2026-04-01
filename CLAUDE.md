# CLAUDE.md

## Project

Reigns-clone card-swipe game. You are the Director-General of ISIA, enforcing a global AI pause treaty. Engine and tooling are settled; all game content is placeholder awaiting replacement.

**Live:** https://demon-game.pages.dev
**Concept:** `design/concept-chat.md` (demon-summoning startup satire of AI companies)
**Owner:** Jorn Stoehler — domain expertise and game content direction. Does not write code.

## Project Layout

```
src/
  engine/                  Pure TS, no React dependency — used by UI and CLI
    types.ts               GameState, Card, Resources, ChoiceSpec
    state.ts               newGame, applyChoice, checkDeath
    cards.ts               drawNextCard (weighted pool, anti-repeat last 3)
    rng.ts                 Seeded PRNG (mulberry32)
    useGame.ts             React bridge: state + actions + localStorage
  data/
    cards/                 41 card files, 41 register() calls — ALL PLACEHOLDER
      registry.ts          Card registry (register/getCards)
      examples.ts          Annotated card patterns for reference
    deaths.ts              Death messages — PLACEHOLDER
    tutorial.ts            Tutorial cards (3) — PLACEHOLDER
  components/              11 React components (GameScreen, SwipeCard, etc.)
  hooks/
    useSwipe.ts            Pointer event drag/swipe/tilt
    useAudio.ts            Web Audio synthesis
  assets/portraits/        20 speaker portraits (PNG) — PLACEHOLDER

e2e/                       Playwright (smoke, drag, tutorial)
scripts/                   Portrait generation (FAL-AI), card export
design/                    concept-chat.md, cards-export.md, satire-raw-material.md
literature/                122 source documents for card content

CLAUDE.md                  (this file)
TASKS.md                   Task tracking — read at session start
.claude/
  skills/                  write-cards, research-topic
  hooks/                   session-start, worktree-create, worktree-remove
  settings.json
```

**Key architectural patterns:**
- Engine is pure TypeScript with zero React dependency. `types.ts`, `state.ts`, `cards.ts`, `rng.ts` are used by both the React UI and the CLI tool.
- Cards are declarative. Each card has `poolWeight: (state) => number`. The engine evaluates all cards each turn, filters by weight > 0 and anti-repeat, does weighted random pick, resolves into an `ActiveCard` for the UI.
- Resource bars: 4 bars (`pol`/`int`/`saf`/`alg`), all start at 50, death at 0 or 100. Placeholder names — will be renamed.
- Swipe via Pointer Events. CSS transforms via ref during drag (no re-renders). Preview arrows on resource icons show effects on tilt.
- Game phases: title -> tutorial (3 cards) -> playing -> dead (or victory).

## Decision Authority

|  | Cheap to verify | Expensive to verify |
|---|---|---|
| **Easy rollback** | Act freely | Act, then Jorn verifies |
| **Hard rollback** | Discuss first | Discuss first |

Engineering and web experience design decisions: agents own these. Content accuracy, game design, scope: Jorn decides.

## Chat with Jorn

Jorn provides domain expertise (x-risk, AI governance, game content direction) and reviews deployed results. Does not write code. On mobile, typing is slow.

**Setup:** devcontainer CLI -> VS Code tunnel -> vscode.dev -> Chrome. Raw localhost doesn't work — needs port forwarding.

### Message Style

Optimize for these qualities (descending effort priority):

1. **Correct, verifiable.** Verify claims before making them. Read the code before saying what it does.
2. **Unambiguous, self-contained.** Repeat context Jorn may have forgotten between messages.
3. **Complete.** Include everything Jorn needs to act. Spell out implications. Quote tool output — Jorn doesn't see it.
4. **Actionable, low-overhead.** Number items so Jorn can refer by number. Copy-paste-ready commands.
5. **Skimmable.** Bold keywords, structured lists, prioritized content.

### Reading Jorn's messages

- Jorn writes literally. If he asks "what does X say?", answer with what X says.
- Push back when you can improve on what Jorn said — a better approach, a concern he may not have considered.
- Ask for clarification, with your top interpretations.
- Don't assume messages are fully read. Repeat unanswered questions.

### What to avoid

- No apologies, praise, or conversation-about-the-conversation.
- No narrating plans ("I'll now read the file...") — do the work and show results.
- No trailing summaries of what you just did — Jorn can read the diff.
- No "Should I proceed?" — either proceed or state what decision you need.
- Avoid the AskUserQuestion tool — Jorn hates the modal UI.

## Session Workflow

**Scope** (Jorn + agent): Jorn scopes. Agents suggest scope expansion/contraction, but Jorn decides.

**Plan -> implement -> review** (agent autonomous): No Jorn involvement unless specifically requested.

**Merge** (Jorn + agent): Agent reports what changed, what's verified, what needs Jorn. Push to main, Jorn reviews deployed result.

**Reactive playtest:** Jorn tests on live site. Fix -> push -> confirm deployed (~40s). Check `gh run list` before saying it's live.

**Plan mode:** Jorn uses plan mode for discussion/alignment. Exiting plan mode = "go implement." If conversation shifts to lengthy discussion, enter plan mode.

### Writing Cards

Use the `/write-cards` skill. Also read `src/data/cards/examples.ts`. Each card file has provenance comments (Source, Rationale, Category).

### QA

- **`#qa` hash** on live site — portrait gallery, card overview, death messages
- **Visual QA:** 390x844 viewport, clear localStorage first
- **After UI changes** (SwipeCard, useSwipe, ResourceIcons, GameScreen): run `e2e/drag.spec.ts`, verify SwipeCard key changes with activeCard, visual check at mobile viewport

## Git

- `npm run check` passes before committing.
- Push to main. Jorn reviews deployed result.

## Environment

Local devcontainer on Jorn's Ubuntu desktop. `npm install` on first run. Playwright browsers pre-installed.
- `.env` at repo root has Cloudflare credentials. `source .env` when needed. Never ask for secrets.
- Never read `.jsonl` transcript logs directly — crashes agent context.
- Tech stack: Vite + React 19 + TypeScript, Tailwind CSS 4, Playwright, Cloudflare Pages.

## Quick Commands

```bash
npm run check          # typecheck + lint + build + unit tests (run before committing)
npm run dev            # dev server
npm run test:e2e       # Playwright E2E
npm run cards          # Export -> design/cards-export.md + public/cards-map.html
npm run cli auto 20    # Random-play 20 turns
```

## Content Status

**Settled** (safe to build on): engine, swipe UX, layout system, card map tool, portrait generation script.

**Placeholder** (must be replaced): all 41 cards, death messages, tutorial, portraits, title/branding, color palette, share text, resource bar names. See TASKS.md maturity map.
