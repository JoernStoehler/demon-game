# Review: THE BRIEF (enforcement-game-v3.md)

**Reviewer:** Agent review
**Date:** 2026-03-16
**Compared against:** domain-model.md, game-mechanics-analysis.md, enforcement-game-v2.md (INSPECTION + SIGNAL concepts)

---

## Verdict

Revise before proceeding. THE BRIEF is a plausible concept but makes several claims that don't survive scrutiny. The first-session walkthrough is idealized, the implementation cost is understated, and the proposal has a blind spot on zero-knowledge onboarding. Most critically, it retreats from the superior structural design in v2 without acknowledging that it's doing so.

---

## Findings

### 1. The zero-knowledge onboarding claim is false

The proposal says "none of this was explained in a tutorial — you absorbed it by doing your job." But Round 1 shows a player reading "3,400 chips from last quarter still in transit" and understanding why this matters. A zero-knowledge player does not know what an AI chip is, why chip counts matter, or why transit gaps are suspicious. They will read the full briefing and have no framework to evaluate it. The claim that game content functions as a tutorial requires the player to already have a model that the content is supposed to build. The domain model is genuinely non-obvious: the chip supply chain chokepoint structure (TSMC, ASML, Nvidia), the distinction between declared and undeclared facilities, the heat-signature detection method — none of this is self-evident from a two-sentence briefing card. Compare v2's SIGNAL: it explicitly designs for signal-quality intuition developing over sessions, not from round 1. THE BRIEF needs an explicit onboarding layer or must concede that the first 1-2 sessions are confusion-heavy and frame that appropriately.

### 2. Triage is not inherently engaging — it's a menu selection problem

The proposal claims "triage IS the teaching." But choosing 2 of 4 items is structurally a priority queue. In round 3, the player picks Vasquez (Southeast Asia, operational, time-sensitive) and Okafor (Singapore shells, escalating) over Kim (Kazakhstan, diplomatic). This is an obvious choice. The interesting triage decisions require the player to understand that diplomatic signals are enforcement signals in disguise — but that insight is exactly what the zero-knowledge player lacks. Without that understanding, every round they'll pick the "active threat" items and delegate "political" items, consistently. The delegation failure that teaches the lesson (Kim's Kazakhstan compromise masking the chip accumulation) won't feel like a consequence of their choice; it will feel like a gotcha. Reigns succeeds with binary choices because both options are immediately legible and have visible tradeoffs. Here, the triage choices require domain knowledge to evaluate, which breaks the learning-by-doing claim.

### 3. Delegation decay is asserted, not designed

The proposal says advisor personality "adds depth" and that "eventually the player learns don't let Vasquez handle anything political." But how does the player learn this if outcomes are vague by design ("Did they really look, or did the facility operator get a tip-off?")? v2's INSPECTION and SIGNAL address this directly with an explicit opaque-decay design: delayed reveals, year-end gut-punches, specific revealed failure modes on audit. THE BRIEF describes the same goal ("delegated results get worse") but provides no mechanism. Without a designed feedback signal — even a delayed one — the player will attribute bad outcomes to bad luck, not to advisor personality drift. The proposal needs to specify how a player develops the "Vasquez handles political badly" calibration. Currently it's a design wish, not a mechanic.

### 4. The first-session walkthrough is an author fantasy

The Round 11 death screen traces a causal chain across 8 rounds: Kazakhstan complaint (round 3) → Kim compromise → reduced satellite coverage → chip accumulation → medical equipment smuggling → junior analyst mistake → training run. This is intricate, narratively satisfying, and requires that the game correctly track all these causal connections AND surface them coherently at death. v2 explicitly grapples with this: "connection graph" is listed as a new development item and question 6 asks how deep connections should go. THE BRIEF presents the fully-connected outcome as if it's a natural result of the game mechanics, but it presupposes a working signal connection graph that the implementation section lists as something new to build. The walkthrough is what you'd see in a scripted demo, not what an actual playthrough produces until the connection graph, consequence queue, and delayed-reveal system are all tuned.

### 5. "Medium, comparable to Reigns" implementation estimate is wrong

The proposal says scope is "comparable code complexity to the current Reigns game." The current game is: a weighted card pool, four resource bars, a swipe interaction, death conditions. THE BRIEF requires: (1) a 5-advisor delegation system with per-advisor personality and competence degradation, (2) a delayed consequence queue surfacing outcomes 1-3 rounds later, (3) a signal connection graph linking items across advisors and rounds, (4) a briefing room layout with 3-4 advisor portraits in a row and tap-to-expand interaction, (5) a two-indicator game state (enforcement capacity + race bars), (6) 120-160 signal templates with phase structure. v2's engineering assessments for INSPECTION and SIGNAL each estimate 5-7 weeks for MVP. THE BRIEF is mechanically more complex than either (it combines advisory personalities, connection graphs, and delayed consequences that neither v2 concept requires). "2-3 focused development sessions" is implausible.

### 6. The phone layout claim fails the screen space budget

"3-4 advisor portraits in a row with summaries" at 390px wide: four portraits at 390px wide means each portrait plus summary is ~90px wide. At a portrait height that allows facial recognition, that's a ~70px square image. The game-mechanics-analysis document documents the usable content area as 360px wide, 620px tall, and explicitly states "maximum ~25 words visible at once without scrolling." Four advisor cards with one-line summaries plus portrait plus name plus selection state in 360px width either requires tiny portraits (unrecognizable) or requires scrolling (which conflicts with swipe gestures per the same document's design rules). v2's INSPECTION uses a scrollable country list for the same reason — the proposal needs to address this or show a layout that actually fits.

### 7. The alternatives dismissal misrepresents the current Reigns game

"Binary swiping with abstract resource bars doesn't teach 'what does enforcement look like' — the player never reads intelligence, evaluates evidence, or experiences delegation failure." This accurately describes the current 144-card game's cards in aggregate, but it's not an inherent limitation of the card-swipe format. Cards CAN present intelligence reports, evidence evaluations, and delegation outcomes — they're just short-form. The proposal frames the format as the problem when it's a content problem. v2 explicitly identified this: "Content is the bottleneck, not code." THE BRIEF's own solution (read 2-3 sentence briefings, choose between 2 responses) is functionally identical to a card in the Reigns format, but distributed across a tap-to-expand flow. The dismissal is unfair to v2's card-content-improvement path, which would cost a fraction of the implementation effort.

### 8. THE BRIEF is an unnamed regression from v2

v2 produced INSPECTION and SIGNAL after explicit iteration on v1's weaknesses. THE BRIEF recombines elements of both (advisory personalities from INSPECTION, signal assessment from SIGNAL, triage from both) but without the structural design choices that made each work: INSPECTION's quarterly allocation against country states, SIGNAL's typed-asset dispatch system, both concepts' explicit opaque-decay designs with defined reveal mechanics. The proposal presents this as a new concept but it is actually a de-structured synthesis. It should acknowledge v2 and explain why the synthesis is better than either standalone concept, or why the v2 structural designs were abandoned.

---

## What the proposal gets right

- The teaching arc (foundation → evasion → escalation → institutional strain) is well-ordered and matches the domain model's complexity progression.
- Death screens that trace specific causal chains are the right teaching mechanism and the Round 11 example is excellent content, even if it presupposes a working connection graph.
- Political capacity as exogenous matches the v2 design parameter.
- The advisor personality system (Vasquez aggressive, Kim diplomatic, Mehta optimistic) maps cleanly to real regulatory capture dynamics M11-M13 in the domain model.

---

## Suggested path

1. Either: return to v2's INSPECTION or SIGNAL concepts (better structural design, honest implementation estimates, explicit opaque-decay mechanics), or
2. If pursuing THE BRIEF: replace the idealized first-session walkthrough with an honest account of what a confused zero-knowledge player actually experiences in session 1, specify the mechanical design for delegation decay feedback (not "outcomes seem worse" — name the signal), get a real implementation estimate, and address the phone layout constraint for 3-4 advisor portraits with a mockup.
