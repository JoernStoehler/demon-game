---
name: write-cards
description: Rules and reference for writing game cards. Read before creating or modifying cards.
---

# Card Writing Guide

Read before creating or modifying cards:

1. **This file** — content rules, tone, balance, card categories
2. **`src/data/cards/examples.ts`** — annotated examples of every card pattern (not wired into the game)
3. **`src/engine/types.ts`** — `CardScript`, `PoolEntry`, `GameState` type definitions

Jörn reviews card output on the QA page (`#qa`) and via `npm run cli cards`, not this file. Edit this file if cards keep coming out wrong in the same systematic way.

---

## The Game's Core Thesis

You are the Director-General of the ISIA (International Superintelligence & Intelligence Agency), enforcing an international treaty banning ASI development. The game teaches: **enforcement of a global AI pause is structurally hard**. The player learns this by dying repeatedly from different failure modes.

The core message: "With a pause we can survive superintelligence... if nothing goes wrong and a lot goes right."

The structural hardness comes from four tensions that can't all be resolved simultaneously:

1. **Monitoring vs. sovereignty** — Preventing ASI requires intrusive verification (inspectors in datacenters, chip tracking, researcher surveillance). This looks authoritarian and drives nations to leave the treaty.
2. **Verification vs. trust** — Relying on good faith means nations cheat. Heavy verification signals distrust and erodes the coalition.
3. **Research suppression vs. innovation** — Banning dangerous AI research also blocks beneficial uses. Nations view this as economic sabotage and competitive disadvantage.
4. **Enforcement vs. backlash** — Sanctioning violators requires political power. Accumulating that power makes ISIA itself the threat.

Every card should sit inside one or more of these tensions.

---

## The Treaty (what ISIA enforces)

Key mechanisms from the treaty (see `literature/iabied-treaty.md` for full text):

- **Compute caps**: Training runs above FLOP thresholds are prohibited. Small training (~1e22 FLOP on 16 H100s) is permitted.
- **Centralized chip infrastructure**: All AI chip clusters above threshold size must be in monitored facilities ("declared CCCs"). Governments use eminent domain to centralize private datacenters.
- **On-site verification**: ISIA inspectors, tamper-proof cameras, and chip-use monitoring at every declared CCC. Must distinguish prohibited training from permitted inference.
- **Supply chain tracking**: ISIA monitors chip fabrication, assembly, testing, and installation. Tracks every AI chip from manufacture to declared facility.
- **Non-party restrictions**: Nations that don't sign are denied AI chip sales, cloud access, and frontier model APIs.
- **Restricted research**: Bans precursor ASI research — new training methods, efficient chip designs, distributed training architectures.
- **Research verification**: Domestic enforcement agencies + ISIA auditors embedded in high-risk organizations. Researcher interviews, employment monitoring.

The Director-General can propose emergency threshold changes (implemented immediately, valid 30 days, then needs Executive Council majority).

---

## Resources — What They Represent

Working hypothesis — may change based on what cards actually need.

| Key | Name | At 0 (death) | At 100 (death) | Real-world meaning |
|---|---|---|---|---|
| **pol** | Political Power | Voted out — pause ends | Hubris — unchecked institution → capture → crash | Mandate, budget, authority, public support |
| **int** | Intelligence | Gone dark — rogue run succeeds | Panopticon — drives threats underground | Monitoring, surveillance, information quality |
| **saf** | Safety Progress | Running out of time — threshold shrinks past enforcement | The cure kills — safety research produced ASI | Alignment research advancement |
| **alg** | Algorithmic Progress | (shouldn't deplete — monotone) | Consumer hardware sufficient — can't monitor living rooms | Capability knowledge, shrinking lethal threshold |

All start at 50. saf and alg are monotone accumulators in the expert model (knowledge can't be undiscovered) but the engine treats them as normal 0-100 bars for now.

The tensions above map directly to resource conflicts:
- Monitoring vs. sovereignty → int ↑ but pol ↓
- Enforcement actions → int consumed, pol ↓
- Safety research → saf ↑ but also risks alg ↑ (cure = disease)
- Political spending → pol ↑ but int ↓ (can't fund both)

---

## Card Syntax

Cards use a **registry pattern**. Each file imports `register` and calls it with one or more `Card` objects. No exports needed — the registry collects all cards automatically.

```typescript
import { register } from "./registry";

// Simple card — always in the pool
register({
  id: "kebab-case-id",          // unique, descriptive
  tags: ["topic-a", "topic-b"], // 1-3 content topic tags
  speaker: "Role Title",        // must match a portrait in SpeakerPortrait.tsx
  text: "1-2 sentences...",     // present tense, concrete scenario
  left:  { label: "Action phrase", effects: { pol: 5, int: -8 } },
  right: { label: "Action phrase", effects: { pol: -5, int: 8 } },
  color: "#ef4444",             // optional, crisis accent color
  poolWeight: () => 1.5,        // function: return 0 to exclude from pool
});

// State-gated card — poolWeight returns 0 to exclude
register({
  id: "gated-card",
  tags: ["topic"],
  speaker: "Role Title",
  text: "...",
  left:  { label: "...", effects: { pol: -5 } },
  right: { label: "...", effects: { int: 5 } },
  poolWeight: (state) => state.resources.int >= 40 ? 1.5 : 0,
});

// Three-choice card — third option via swipe down
register({
  id: "three-way",
  tags: ["topic"],
  speaker: "Role Title",
  text: "Scenario...",
  left:  { label: "Option A", effects: { pol: -5 } },
  right: { label: "Option B", effects: { int: -5 } },
  down:  { label: "Option C", effects: { saf: 5 }, enabled: (state) => state.resources.int >= 60 },
  poolWeight: () => 1.5,
});

// Hidden state — cards can read/write shared latent variables
register({
  id: "raid-facility",
  tags: ["enforcement-operations"],
  speaker: "Enforcement Chief",
  text: "...",
  left:  { label: "Raid", effects: { int: -5, pol: -3 }, hiddenEffects: { enforcement_visibility: 1 } },
  right: { label: "Surveil", effects: { int: 5 } },
  poolWeight: () => 1.5,
});
```

**To add a new card:** Create a `.ts` file in `src/data/cards/`, import `register`, call it. Then add a side-effect import in `index.ts`.

The engine auto-derives preview indicators from effects (|delta| >= 10 → large arrow, else small) and builds apply functions from effects. Hidden effects modify `state.hidden` (Record<string, number>) — use these for card interactions.

### Tags

Every card should have `tags: string[]` — 1-3 content topic tags that describe **what the card is about**, not how it works mechanically.

**Good tags** are actors and real-world topics: `"intelligence-agencies"`, `"compute-monitoring"`, `"chip-production"`, `"civil-liberties"`, `"treaty-compliance"`, `"alignment-research"`.

**Bad tags** are UX mechanics or game categories: ~~`"crisis"`~~, ~~`"3-choice"`~~, ~~`"turn-gated"`~~, ~~`"incident"`~~. These say nothing about what connects cards to each other.

Tags drive the card map visualization (`npm run cards` → `public/cards-map.html`). Cards sharing a tag are pulled together in the force graph. Choose tags that express meaningful content relationships — if two cards both involve chip smuggling, they should share a tag so the graph shows that connection.

Don't overthink the tag vocabulary. Use descriptive kebab-case. If a fitting tag doesn't exist yet, invent it. Consistency matters more than a fixed list.

### Text Guidelines

- **50-100 words.** The card is small — text must fit.
- **Present tense, concrete scenario.** "A researcher at a major lab claims they've been running prohibited evaluations." Not: "There is a risk that researchers might conduct prohibited evaluations."
- **Speaker is talking to you.** The tone is a briefing, not a news report. The speaker has a role and a stake.
- **No exposition.** Don't explain why something matters — the resource previews do that. The text presents the situation; the player learns the lesson by seeing what happens.
- **Both choices must feel defensible.** Never "obviously good vs obviously bad." The player should feel torn.

### Delta Guidelines

- **Touch 2-3 resources** per choice. Single-resource cards feel flat.
- **Deltas range ±3 to ±15.** Small (3-6) for routine, medium (6-10) for incidents, large (10-15) for crises.
- **No safe options.** Every choice should cost something.

### Weight Guidelines

- **Always-on routine cards:** weight 1-2 (never above 2)
- **State-gated incidents:** weight 1-2, return 0 when condition not met
- **History-triggered chains:** weight 3 (high priority when triggered, 0 otherwise)
- **Crisis cards:** weight 5, gated on resource extreme (< 20 or > 80)
- **Late-game escalation:** weight 1.5-2.5, gated on turn count (>= 8, 10, or 15)

---

## Card Categories

### Routine (always available, weight 1-2)
Bread-and-butter cards. Budget decisions, public relations, hiring, diplomatic meetings. Establish baseline resource flows. Player sees these every game.

### Incident (state-gated, weight 1-2)
Enforcement events — rogue labs detected, chip smuggling, whistleblowers. Often gated on Intel level. These are the "job" of ISIA.

### Political (turn-gated, weight 1-1.5)
Treaty negotiations, senate hearings, coalition management. Appear after early turns. Leverage-heavy.

### History-triggered (weight 3 when triggered)
Consequences of earlier choices. "You protected the whistleblower → now the lab is suing you." Most narratively interesting. Every major card should eventually have a consequence chain.

### Crisis (weight 5, resource-gated)
Thermostat cards. Appear when a resource is extreme (< 20 or > 80). Offer a way back from the edge, but at steep cost to another resource. There must be at least 1 crisis card per resource per direction (8 minimum).

### Late-game (turn-gated, weight 1.5-2.5)
Escalation. Capability jumps, distributed training networks, novel attack vectors. Make later turns harder. Appear at turn >= 8, 10, or 15.

### Filler (weight 1-1.5)
Low-stakes flavor cards. Quiet days, conference invites. Give the player a breather. Keep deltas small (±2-5).

---

## Patterns

### Degraded Variants
Same event, different content depending on state. Use `Dynamic<T>` fields (functions of state):

```typescript
register({
  id: "rogue-lab-detection",
  tags: ["rogue-actors", "intelligence-gathering"],
  speaker: (state) => state.resources.int >= 40 ? "Intelligence Analyst" : "Junior Analyst",
  text: (state) => state.resources.int >= 40
    ? "Thermal anomaly detected at a facility in Shenzhen..."
    : "Rumors of unauthorized compute — but we can't confirm anything...",
  left: {
    label: (state) => state.resources.int >= 40 ? "Send inspectors" : "Expensive investigation",
    effects: { pol: -3, int: 8 },
  },
  right: {
    label: (state) => state.resources.int >= 40 ? "Flag for next quarter" : "Ignore the rumors",
    effects: { pol: -5, int: -3 },
  },
  poolWeight: () => 1.5,
});
```

Teaches the player: "when your Intel is low, everything is harder." Pure experiential learning.

### History Chains

Card A → consequence Card B (triggered by Card A's choice). Use `poolWeight` to check `state.history`:

```typescript
// Immediate follow-up (within 2 turns, very high weight)
register({
  id: "cannabis-plantation",
  tags: ["enforcement-operations"],
  speaker: "Enforcement Chief",
  text: "...",
  left:  { label: "...", effects: { pol: -5 } },
  right: { label: "...", effects: { int: -3 } },
  poolWeight: (state) => {
    const trigger = state.history.find(
      (h) => h.cardId === "heat-signature" && h.choice === "left",
    );
    return trigger && state.turn - trigger.turn <= 2 ? 10 : 0;
  },
});

// Delayed consequence (3-6 turns later)
register({
  id: "raid-diplomatic-fallout",
  tags: ["international-diplomacy", "enforcement-operations"],
  speaker: "Diplomatic Attaché",
  text: "...",
  left:  { label: "...", effects: { pol: -8 } },
  right: { label: "...", effects: { int: -5 } },
  poolWeight: (state) => {
    const trigger = state.history.find(
      (h) => h.cardId === "heat-signature" && h.choice === "left",
    );
    if (!trigger) return 0;
    const delay = state.turn - trigger.turn;
    return delay >= 3 && delay <= 6 ? 3 : 0;
  },
});
```

Best chains have different consequences for left vs. right choice on the parent card.

---

## Scenario Sources

When writing cards, draw from these real-world dynamics. Key literature references:

| Topic | Literature file | Card scenario types |
|---|---|---|
| Treaty enforcement mechanisms | `literature/iabied-treaty.md` | Inspections, chip tracking, research bans, defection |
| Real AI incidents (2024-2025) | `literature/ai-incident-database-2024-2025.md` | Deepfakes, model theft, safety failures, fraud |
| Political landscape | `literature/political-statements-ai-risk.md` | Administration changes, treaty skepticism, coalition pressure |
| Frontier capabilities | `literature/aisi-frontier-trends-2025.md` | Capability jumps, threshold breaches, novel architectures |
| US policy shifts | `literature/us-ai-executive-orders.md` | Regulatory whiplash, enforcement gaps |

### High-value scenario themes (not yet in card pool)

- **Compute threshold breach** — lab legally just under the limit, pushing boundaries
- **Non-party defection** — nation announces withdrawal or never-signed nation races ahead
- **Distributed training** — many small labs collectively training something massive
- **Researcher brain drain** — top talent leaving treaty nations for non-party jurisdictions
- **Chip fabrication exploit** — backdoored chips, stolen manufacturing designs
- **Economic recession** — pressure to lift compute restrictions for growth
- **Election interference** — AI-powered, treaty blamed for not preventing it
- **Dual-use research dilemma** — beneficial cancer research uses prohibited training scale
- **ISIA internal scandal** — monitors abusing surveillance access
- **Technical surprise** — new training method works at 1/100th expected compute

---

## Provenance Convention

Above each card (or group of related cards), add a comment block:

```typescript
// Source: literature/iabied-treaty.md (Article V — chip centralization)
// Rationale: teaches that centralization creates single points of failure
// Category: incident
```

Fields:
- **Source**: which literature doc or real-world event inspired it. "original" if invented.
- **Rationale**: what game lesson this card teaches (1 line).
- **Category**: routine | incident | political | history-triggered | crisis | late-game | filler

---

## Anti-Patterns

- **Abstract exposition**: "AI poses risks to humanity" → too vague, no scenario
- **Safe option available**: "Investigate" vs "Do nothing wrong" → one choice is obviously better
- **Single-resource card**: Only touches Trust → no tradeoff, no tension
- **Lecture text**: Speaker explains why AI is dangerous → game should teach through play, not text
- **Unrealistic scenario**: Something that wouldn't happen under this treaty framework
- **Redundant card**: Mechanically identical to an existing card with different flavor text

### Common Agent Mistakes (observed in review)

These recur across agent-written cards. Check every card against this list:

1. **SHORT TEXT**: Cards come in at 35-50 words when the floor is 50. Agents stop writing too early. Aim for 60-80.
2. **SINGLE-RESOURCE choices**: `effects: { pol: -8 }` on one side — the guide requires 2-3 resources touched per choice.
3. **ASYMMETRIC cost**: Right choice in political cards often affects only 1 resource vs left's 2. Creates a soft "safe" option — both sides need real tradeoffs.
4. **"you" in card text**: Speaker talks TO you, but the text body describes the situation in third person. Watch for second-person game prose creeping in.
5. **Dangling hidden state**: `hiddenEffects: { key: 1 }` that no other card reads. Every hidden state write needs a corresponding reader.
6. **alg treated as controllable**: alg is a monotone accumulator (capabilities going up is bad). Cards that let the player reduce alg violate the domain model.
7. **Non-choice on "stay out" side**: Labor/economic cards frequently make the passive option a non-choice with only 1 resource and a small delta.

---

## Speakers (21 portraits available)

Use existing speakers when possible. Each has a portrait and an established role:

| Speaker | Role / When to use |
|---|---|
| Chief Financial Officer | Budget decisions, financial crises |
| Communications Director | Public messaging, UN speeches, trust crises |
| Head of Human Resources | Hiring, staffing decisions |
| Political Advisor | Lobbying, senate hearings, political maneuvering |
| Press Secretary | Media relations, leaks, public perception |
| Intelligence Analyst | Rogue labs, threats (high-intel variant) |
| Junior Analyst | Threats (low-intel degraded variant) |
| Customs Liaison | Chip smuggling, supply chain enforcement |
| Anonymous Source | Whistleblowers, insider tips |
| Diplomatic Attaché | Treaty negotiations, nation relations |
| Legal Counsel | Lawsuits, legal precedent, compliance |
| Civil Liberties Advocate | Surveillance backlash, privacy concerns |
| UN Secretary-General | Power accusations, institutional crises |
| Ethics Watchdog | Regulatory capture, corruption allegations |
| Finance Director | Membership dues, funding sources |
| Enforcement Chief | Seizures, raids, enforcement operations |
| Investigative Journalist | Exposés, waste scandals, leaks |
| NATO Liaison | Military AI exemptions, defense cooperation |
| Chief Scientist | Capability assessments, threshold decisions |
| Deputy Director | Internal operations, quiet days |
| Executive Assistant | Conferences, scheduling, networking |

Adding new speakers requires a new portrait (use `scripts/generate-portrait.mjs`).
