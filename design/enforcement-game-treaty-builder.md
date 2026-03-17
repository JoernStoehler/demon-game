# Treaty Builder — Enforcement Game Concept

**Status:** Proposed by Jörn (2026-03-16). Not yet developed. Evaluated favorably against WATCHPOINT in `design/concept-evaluation.md`.

## Core Idea

Sequential failure-mode reveal: the player sees how a naive pause fails, adds a treaty provision to address it, then sees the next failure mode. "Are we safe yet? No? What measures are immediately available? Are we safe yet? No? ..."

A "bouncing-forward-backward" approach to explaining what a successful pause requires.

## Teaching Goal

What measures are necessary for a pause, and why. Each provision IS a talking point the player can articulate to a friend afterward.

## Proposed Mechanics (from Jörn)

- **Core loop:** See failure → select provision → failure resolves → new failure appears
- **Incremental teaching:** Only display the next-to-address failures and present the related measures
- **Fun elements:**
  - Players predict what goes wrong next (then see if they're right)
  - Challenge: try to use minimal measures
  - Challenge: avoid misleading measures that sound good but don't work
  - Reveal click for new failure modes (adds anticipation)
- **Text handling:** New failures/measures expanded, resolved failures/passed measures collapsed by default to free UX space
- **Supply chain visualization:** Optional. Could be a flow diagram (chips flow from top, measures act as sinks) or just an always-updated stat showing how many chips are monitored/leaked. Not the primary interaction.

## Proposed UX (from Jörn)

- **Vertical arrangement:** Each treaty option / resolved failure / current failure / proposed options is one row
- **Each row:** Illustration + collapsible text body (bold title? details in body)
- **Player controls screen real estate:** Tap row to expand/collapse. Sensible defaults (collapse just-resolved, expand current)
- **Color/style/icon coding** for row types:
  - Treaty option (passed)
  - Failure story (resolved)
  - Failure story (current)
  - Treaty option (proposed)
- **Interaction:** Player taps a treaty option to select it, confirms via button. Treaty updates, failure may resolve, new failure opens.
- **Animations:** Treaty updates and new failure reveals should be animated

## Open Questions (from Jörn)

1. **Jarring failure transitions:** "You resolved failure A, but failure B now becomes apparent" — how jarring is this? Players might:
   - Anticipate failure modes in advance / out of order (is that good or bad?)
   - Get frustrated wanting to resolve a whole family of failures at once
   - Feel whack-a-mole frustration

2. **Multiple plausible next failures:** If 2 failure modes are equally likely, and the player predicts #2 but the game shows #1 first, the player gets a negative surprise despite being correct. Need to handle this.

3. **Graph/visualization view:** Jörn considered a separate tab showing algorithmic progress vs safety development over time, chip production/sales/black-market stats. Deferred as YAGNI for now.

4. **Replayability:** Not a primary goal. Useful for retention through repetition. The main metric is "so good, need to share!" after one playthrough.

## Why This Concept (from evaluation)

- Produces **articulable knowledge** by construction (each provision is a sentence the player evaluated)
- Lower dropout risk than WATCHPOINT (simpler interaction, lower cognitive load, better interruption recovery)
- Covers full domain model (every mechanism can be a failure-provision pair, including M12 and M16 which WATCHPOINT can't represent)
- Bottleneck is execution (sounds boring → fixable with naming/framing/visual design) not structural

## Weaknesses

- **Encounter:** Sounds like homework. Needs compelling name, framing, and visual design.
- **Fun:** Core interaction is read → tap → read. Needs excellent content and reveal mechanics to sustain 5-7 minutes.
- **No spatial understanding:** Player doesn't develop visual intuition about the supply chain. Partially addressable with flow visualization.
- **No felt urgency:** Sequential model is methodical, not frantic. May not convey "the pause is frantic effort."

## Unexplored Third Options

Before committing to Treaty Builder, these hybrids/alternatives should be considered:

1. **Treaty Builder + flow visualization** — provisions affect a visible chip-flow diagram
2. **Treaty Builder + adversarial stress test** — brief scenario after each provision showing how actors adapt
3. **Adversarial debate** — player argues FOR each provision against a devil's advocate system
4. **Conversation simulator** — player advocates provisions to stakeholders (industry, diplomats, inspectors)

## Related Files

- `design/concept-evaluation.md` — detailed comparison with WATCHPOINT
- `design/enforcement-game-final.md` — WATCHPOINT concept (alternative)
- `design/enforcement-game-v3.md` — THE BRIEF (earlier concept)
- `design/enforcement-game-v4.md` — CHAINWATCH (earlier concept)
- `design/domain-model.md` — authoritative domain model
