# demon-game

Reigns-clone card-swipe game. Forked from xrisk-pause-game — engine and tooling are settled, all game content is placeholder awaiting replacement. See `design/concept-chat.md` for the full game concept (demon-summoning startup satire of AI companies).

**Live:** https://demon-game.pages.dev
**Owner:** Jörn Stöhler — provides domain expertise, reviews decisions, does NOT write code.

## Project Layout

```
CLAUDE.md                  Project rules and context (you are here)
TASKS.md                   Task tracking — read at session start
package.json               Vite + React + TypeScript, Tailwind, Playwright

src/
  engine/
    types.ts               GameState, Card, Resources, ChoiceOption, ChoiceSpec
    rng.ts                 Seeded PRNG (mulberry32)
    state.ts               newGame, applyChoice, checkDeath (pure functions)
    state.test.ts          Unit tests for engine
    cards.ts               drawNextCard (weighted pool, anti-repeat)
    useGame.ts             React bridge: state + actions + localStorage
    tutorial.ts            Tutorial localStorage persistence helper
  data/
    cards/                 Card declarations (144 cards, 38 files) — ALL PLACEHOLDER
      registry.ts          Card registry (register/getCards)
      examples.ts          Annotated card patterns for reference
    deaths.ts              Death messages per resource × extreme — PLACEHOLDER
    tutorial.ts            Tutorial card content (3 cards) — PLACEHOLDER
  hooks/
    useSwipe.ts            Pointer event drag/swipe/tilt logic
  components/
    TitleScreen.tsx        Title screen — PLACEHOLDER text
    GameScreen.tsx         Main game screen
    SwipeCard.tsx          Draggable card with portrait + choices
    ResourceIcons.tsx      4 resource bar icons with fill + preview arrows
    SpeakerPortrait.tsx    Speaker portrait display
    DeathScreen.tsx        Death screen with message + restart
    TutorialScreen.tsx     Tutorial flow (3 cards before game)
    ShareButton.tsx        Share button on death screen
    QAReference.tsx        QA overlay (#qa hash)
    shareText.ts           Share text generation — PLACEHOLDER
  assets/
    portraits/*.png        21 AI-generated speaker portraits — PLACEHOLDER
  cli.ts                   CLI playtest tool (headless, no React)
  App.tsx                  App root (phase router)
  main.tsx                 Entry point
  index.css                Tailwind + CSS variables — PLACEHOLDER palette

e2e/                       Playwright E2E tests
  smoke.spec.ts            Title → game → death flow
  drag.spec.ts             Pointer drag, tilt, commit
  tutorial.spec.ts         Tutorial flow + keyboard
  screenshot.ts            Screenshot capture script

scripts/
  generate-portrait.mjs    FAL-AI portrait generation (one at a time)
  export-cards.ts          Card map + markdown export

design/
  concept-chat.md          Game concept (demon-summoning startup satire) — authoritative
  cards-export.md          Generated card review file

index.html                 HTML shell — PLACEHOLDER title/meta/OG

.github/workflows/deploy.yml   CI/CD → Cloudflare Pages
.devcontainer/                  Local devcontainer config
.claude/                        Hooks, agents, skills, settings
```

## Quick Commands

```bash
npm run check          # typecheck + lint + build + unit tests (run before committing)
npm run dev            # dev server
npm run test:e2e       # Playwright E2E tests
npm run cli show       # Print current card + resources
npm run cli auto 20    # Random-play 20 turns
npm run cli state      # Full state dump (pool, history)
npm run cli reset      # New game
npm run cards          # Export → design/cards-export.md + public/cards-map.html
```

## Architecture

Engine is pure TypeScript with zero React dependency. `types.ts`, `state.ts`, `cards.ts`, `rng.ts` are used by both the React UI and the CLI tool.

**Cards are declarative.** Each card is a `Card` object with `poolWeight: (state) => number`. The engine evaluates all cards each turn, filters by weight > 0 and anti-repeat (last 3 turns), does weighted random pick, and resolves into an `ActiveCard` for the UI.

**Card pool patterns:**
- State-gated: `poolWeight` checks resource levels, turn count, or history
- Degraded variants: different card content based on state
- History chains: `poolWeight` checks `state.history` for prior cards/choices
- Crisis cards: high weight when bars near extremes

**Resource bars:** 4 bars, all start at 50, die at 0 or 100. Currently `pol`/`int`/`saf`/`alg` — placeholder, will be renamed for demon-game theme.

**Swipe via Pointer Events.** Touch and mouse. CSS transforms via ref during drag (no re-renders). Preview indicators on tilt: colored triangles on resource icons (no numbers).

## Code Conventions

**KISS and YAGNI everywhere:**
- Simple, standard, well-known solutions only
- Don't add features beyond what's requested
- Don't refactor code you didn't change
- Three lines of code > premature abstraction
- Don't add error handling for impossible scenarios

**Prefer standard over clever:**
- Use patterns agents already know (React hooks, Tailwind utilities, standard Vite config)
- Push back when Jörn suggests non-standard approaches — propose the standard alternative
- Every idiosyncratic pattern is a tax on every future agent session

**Aggressively prune false information:**
- Never document removed features or previous versions
- Only current state matters in docs
- Before claiming something exists in the codebase, read the code to verify

**No over-engineering:**
- No feature flags or backwards-compatibility shims
- No helpers/utilities for one-time operations
- No design for hypothetical future requirements

## Repo Invariants

- `npm run check` passes before committing
- Tech stack: Vite + React + TypeScript, Tailwind CSS, Playwright, Cloudflare Pages
- `.env` at repo root has Cloudflare credentials and service keys. `source .env` when needed. Never ask for secrets.
- Never read `.jsonl` transcript logs directly — they crash agent context. Narrow grep is fine.

**Definition of Done:**
- `npm run build` passes
- `npm run lint` passes
- Feature works end-to-end (not just "function exists")
- `// TODO` stubs do NOT count as done
- Commit after completing each unit of work

**Specs are authoritative (precedence order):**
- Jörn's words in conversation > CLAUDE.md > TASKS.md > auto-memory files
- Don't modify specs without explicit approval
- Fix code to match specs, not the other way around

## Session Workflow

**Planned work:** discuss → plan → implement → review → push
- Read `CLAUDE.md` and `TASKS.md`. Flag ambiguities. Wait for Jörn's scope decision.
- Commit and push to main. Jörn reviews deployed result.

**Reactive work (playtest):** Jörn tests on https://demon-game.pages.dev. Fix → verify → push → confirm deployed (~40s deploy). Check `gh run list` before saying it's live.

### Writing Card Content

Use the `/write-cards` skill — the authoritative spec. Also read `src/data/cards/examples.ts`. Each card file has provenance comments (Source, Rationale, Category).

### QA Reference

- **`#qa`** on the live site — portrait gallery (P1-P21) + card overview + death messages
- **Visual QA:** screenshots at 390×844, clear localStorage first

### Review Checklist (after UI changes)

After changes to SwipeCard, useSwipe, ResourceIcons, or GameScreen:
1. Drag E2E test passes (`e2e/drag.spec.ts`)
2. SwipeCard key changes when activeCard changes (prevents drag state leaks)
3. Visual QA at mobile viewport (390×844)

## Environment

Local devcontainer on Jörn's Ubuntu desktop.
- **Rebuild:** `.devcontainer/host-devcontainer-rebuild.sh` (from host)
- **VS Code tunnel:** `.devcontainer/host-vscode-tunnel.sh` (from host)
- **First run:** `npm install` (Playwright browsers pre-installed in image)
- Playwright runs normally in the devcontainer, no special flags

## Working with Jörn

**Expertise:** Top expert on ASI x-risk, AI capabilities/trends, AI governance. Self-described bad taste in design/UX/game mechanics. Top 10% in using agents for development; prefers not to write code. Agents own the "how" (web experience design), Jörn provides the "what" (x-risk concepts, game content direction).

**Setup:** devcontainer CLI → VS Code tunnel → vscode.dev → Chrome. Raw localhost doesn't work — needs port forwarding. On mobile, typing is slow.

**Plan mode:** Jörn uses plan mode for discussion/alignment. Exiting plan mode = "go implement." If conversation shifts to lengthy discussion, enter plan mode to avoid unsupervised work.

**Communication:**
- Efficient information exchange, not politeness
- Number items so Jörn can refer by number
- Push back on YAGNI/KISS violations, unclear requirements, over-scoping
- Don't ask permission for obvious engineering decisions
- DO ask when: content accuracy matters, scope is ambiguous
- Write structured reports to files, not chat walls
- Avoid the AskUserQuestion tool — Jörn hates the modal UI

**Quality ownership:**
- Run subagent review before presenting deliverables
- Don't push QA to Jörn — own quality
- Jörn's time >> agent time. Present only finished work.

## Agent Behavior Norms

**Push back on bad ideas.** Say so plainly with reasoning. Don't just comply. Defer after pushing back once.

**Defer without forgetting.** Issues outside current task: TODO comment (lightweight), TASKS.md entry (medium), or raise in conversation (if blocking).

**Generalize from mistakes.** Abstract the error class, scan for other instances. Load `meta-feedback-processing` skill for full workflow.

**Recognize complexity limits.** Delegate to focused subagents, or hand back to Jörn if too complex.

**Plan before acting.** Have a goal, approved approach, and verified assumptions before starting non-trivial work.

**Ask questions when EV is positive.** A 5-second question with 10% chance of saving 1 hour is worth asking. Especially: task goal, assumption correctness, whether to verify before proceeding.

**Communicate reliably.** Don't assume Jörn saw your messages. Repeat unanswered questions. Check what Jörn is referring to.

## Content Status

What's settled vs. placeholder. Read before building on anything.

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
| Tutorial (`src/data/tutorial.ts`) | **Placeholder** | Must be replaced |
| Portraits (`src/assets/portraits/`) | **Placeholder** | 21 pause-game portraits, must be regenerated |
| Title/branding (TitleScreen, index.html, OG) | **Placeholder** | Neutral placeholder text, needs final branding |
| Share text (`src/components/shareText.ts`) | **Placeholder** | Must be replaced |
| Color palette (index.css) | **Placeholder** | Inherited parchment theme, needs retheme |
| Write-cards skill | **Placeholder** | xrisk-specific, needs rewrite for demon domain |
