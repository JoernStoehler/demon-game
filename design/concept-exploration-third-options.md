# Third-Option Exploration: Enforcement Game Concepts

## What We're Solving

Treaty Builder produces articulable knowledge but risks being boring (encounter bottleneck). WATCHPOINT is engaging but produces the wrong knowledge type (structural learn bottleneck). We need concepts that combine articulable knowledge production with genuine engagement.

## Key Distinction: Where Does Learning Happen?

The previous evaluation established that articulable knowledge requires **propositional evaluation** — the player reads and judges a proposition for it to encode as a talking point. The critical question for each concept: is the player's primary action propositional evaluation, or strategic action followed by a text readout?

| Concept type | Primary player action | Where learning happens | Knowledge type |
|---|---|---|---|
| **Treaty Builder** (builder/defender/narrator framings) | Read failure + evaluate provision against it | IN the choice — the evaluation IS the learning | Articulable by construction |
| **BREACH** (adversary framing) | Pick evasion strategy (strategic action) | In the OUTCOME TEXT — "you were caught because..." | Articulable through text readouts |
| **WATCHPOINT** (spatial framing) | Place tool on schematic (spatial action) | In peripheral text readouts | Primarily felt understanding |

Treaty Builder and its variants (HOLD THE LINE, THE ADVOCATE) keep propositional evaluation as the core interaction — the player's choice IS the learning moment. BREACH puts strategic action first and learning in the outcome text, which is closer to WATCHPOINT's structure than to Treaty Builder's. BREACH is better than WATCHPOINT (the outcome text is the punchline, not peripheral) but not as structurally strong as Treaty Builder (where the learning IS the interaction).

Four framings explored:

| Framing | Player role | Emotional register | Knowledge encoding |
|---|---|---|---|
| **Builder** | Fix failures by adding provisions | Constructive, methodical | "You need X because Y" |
| **Adversary** | Break the treaty by finding gaps | Transgressive, challenging | "Without X, you can do Y — that's why X is needed" |
| **Defender** | Defend provisions against challenges | Social pressure, justification | "X is needed because it prevents Y" |
| **Narrator** | Manage the treaty across decades | Temporal, consequential | "In year 7, Y happened, so we added X" |

The adversary framing produces **more vivid** talking points: "Without chip tracking, you can buy 500 GPUs through shell companies and nobody notices" is more memorable than "You need chip tracking because otherwise people build hidden clusters." But vividness comes at the cost of structural learning reliability — the talking point lives in the outcome text, not in the player's evaluative choice.

**Domain coverage varies by framing.** Builder/defender/narrator framings can represent all 17 domain mechanisms as failure-provision pairs. The adversary framing cannot represent institutional/structural mechanisms (M9 veto exploitation, M12 conflicting mandates, M14 production pressure) as evasion strategies — these are failures of the enforcement institution, not adversary actions. BREACH would need supplementary framing for ~3-4 mechanisms.

---

## Concepts

### A. BREACH (Adversary Framing)

**One-line pitch:** "Can you break the world's most important treaty?"

**Player role:** You're an adversary trying to run an unauthorized AI training run. The treaty exists as a set of enforcement measures. Find the gaps.

**Core loop:**
1. Treaty has current provisions (compact display: chip tracking, factory monitoring, financial surveillance...)
2. Player sees their resources (GPUs to acquire, money, connections) and picks an evasion strategy from 3-4 options
3. Treaty either catches them ("Financial monitoring flagged your shell company") or doesn't ("You acquired 500 GPUs through a transshipment network — the treaty doesn't monitor third-country imports")
4. When caught: player learns WHY the provision works
5. When not caught: a new provision is added to patch the gap, player learns WHY it's needed
6. Next round: treaty is stronger, evasion must be more sophisticated
7. **Endgame:** All provisions in place. Player can't find gaps. "This treaty survives."

**Narrative arc:** From "this is trivially easy to break" to "this is genuinely robust" — the player's OWN difficulty curve demonstrates both the problems and the solutions. The complete treaty is the player's achievement, even though they were playing against it.

**Fun drivers:** Transgression (doing something forbidden), challenge (can I beat this?), puzzle-solving (finding gaps), discovery (what evasion methods exist?), surprise (when the treaty catches you in unexpected ways).

**Talking point quality:** Each round produces a talking point with attack + defense: "I tried to [evasion method] but [provision] caught me because [mechanism]" or "I got away with [evasion method] until they added [provision]." These are vivid, personal, story-shaped — better for transmission than abstract "provision X addresses failure Y."

**Weaknesses:**
- **Learning happens in outcome text, not the choice.** When the player picks an evasion strategy, they're making a strategic guess, not evaluating a proposition. The talking point comes from the outcome text ("you were caught because financial monitoring detected..."), not from the choice itself. This is the same "do action → read text" structure that limited WATCHPOINT's articulable knowledge production — though in BREACH the text is the punchline, not peripheral, making it more prominent and likely to be read.
- **Pessimism risk — hard to mitigate.** The player spends 70%+ of playtime successfully breaking the treaty. The adversarial experiences encode more vividly (this document's own Retain argument). If vivid adversarial experiences are more memorable, the dominant takeaway is "I kept breaking this treaty" not "the treaty eventually caught me." Thesis point 2 ("a serious pause is possible") depends on the endgame, but players who drop out before the end — or whose vivid evasion memories dominate — leave with the opposite message. The vividness that drives retention also drives pessimism. This tension is not fully resolvable through endgame design alone.
- **Moral framing for target audience.** "Think like a hacker" works for security professionals but the target audience is people who don't yet appreciate how a pause works — casual web visitors, not gamers or security people. Some may feel uncomfortable "playing the bad guy" in a context about preventing human extinction.
- **Institutional mechanisms don't map.** M9 (veto exploitation), M12 (conflicting mandates), M14 (production pressure) are failures of the enforcement institution, not adversary evasion strategies. BREACH would need supplementary framing or a secondary interaction mode for these.

### B. HOLD THE LINE (Narrator Framing — Treaty Builder Variant)

**One-line pitch:** "Can your treaty survive 30 years?"

**Note:** This is a temporal variant of Treaty Builder, not a structurally distinct concept. The core interaction (read failure, evaluate provision) is the same. The difference is narrative framing: failures arrive in chronological order with a year counter, and provisions can degrade over time. Included for completeness because the temporal frame meaningfully improves Encounter and narrative momentum.

**Player role:** You build and maintain a treaty across decades. Each era reveals new threats that test existing provisions and demand new ones.

**Core loop:**
1. Year 1: Treaty signed with minimal provisions. First threat emerges.
2. Player adds a provision to address it.
3. Time advances. Old provisions may degrade (inspectors get captured, technology changes). New threats emerge that existing provisions don't cover.
4. Player patches, upgrades, or replaces provisions.
5. Each era (years 1-5, 5-10, 10-20, 20-30) has a distinct threat profile — smuggling evolves, institutional decay sets in, algorithmic progress drops thresholds.
6. **Endgame:** Year 30. If the treaty is comprehensive enough, "Safety research completes. The pause held."

**What this adds over base Treaty Builder:** Temporal narrative creates forward momentum ("what happens next year?"). Provision degradation teaches that enforcement isn't set-and-forget. Eras create natural acts with distinct flavors. "How long did your treaty survive?" is a shareable outcome.

**Fun drivers:** Narrative momentum (what happens next?), temporal strategy (do I fix old provisions or add new ones?), survival challenge (can I make it to year 30?), discovery (what threats emerge in the 2040s?).

**Weaknesses:**
- **Same core interaction as Treaty Builder.** The temporal framing adds narrative but doesn't change the fundamental propositional evaluation loop.
- **Degradation complexity.** Tracking which provisions have degraded and why adds cognitive load that base Treaty Builder avoids.
- **Encounter hook decent but not exceptional.** "Can your treaty survive 30 years?" is better than "build a treaty" but less attention-grabbing than BREACH's transgressive hook.

### C. THE ADVOCATE (Defender Framing)

**One-line pitch:** "Defend the AI pause against its toughest critics."

**Player role:** You're defending the treaty's provisions against skeptical stakeholders — industry lobbyists, privacy advocates, skeptical diplomats, budget hawks. Each challenges a specific provision.

**Core loop:**
1. A stakeholder challenges a provision: "Chip tracking is mass surveillance — it violates our citizens' privacy."
2. Player picks a response from 3-4 options. One correctly defends the provision, one partially addresses the challenge, one concedes too much, one is a bad argument that sounds good.
3. If the defense holds: stakeholder accepts (reluctantly). Provision remains.
4. If the defense fails: provision is weakened or removed. A failure mode opens.
5. Player must then add a new/better provision to address the failure.

**What this adds over base Treaty Builder:** Social pressure (someone is challenging you). The player PRACTICES articulating why each provision matters — which is exactly the skill needed for transmission. The stakeholder objections are the real-world objections the player will face when explaining pauses to friends.

**Fun drivers:** Social dynamics (negotiation/debate), vindication (proving the critic wrong), surprise (the critic raises a point you hadn't considered), mastery (getting better at defending the treaty).

**Talking point quality:** The highest of all concepts. The player literally practiced defending the provision against a realistic objection. "When someone says chip tracking is surveillance, you can point out that..." — this IS the transmission scenario.

**Weaknesses:**
- **Encounter hook:** "Defend the AI pause" sounds like homework for activists. Less universally appealing than BREACH's transgressive hook.
- **Quiz feel:** Picking the "right" response from options feels like a quiz, even with social framing.
- **Implementation complexity:** Each provision needs multiple stakeholder challenges with distinct objections. Content-heavy.

### D. Treaty Builder (Builder Framing — Baseline)

Jörn's original concept, documented at `design/enforcement-game-treaty-builder.md`. Sequential failure → provision → new failure. Included for comparison.

### E. Treaty Builder + Flow Visualization (Variant)

Jörn's hybrid idea: base Treaty Builder with a chip-flow diagram showing how provisions affect the supply chain. Each provision visibly reduces flow through a monitored channel or closes a gap.

**What it adds:** Spatial intuition about where enforcement bites. Visual satisfaction of seeing gaps close.
**What it doesn't fix:** Still read-tap-read at core. Encounter hook unchanged. Flow diagram adds mobile UX complexity.
**Assessment:** Modest improvement. Addresses "no spatial understanding" weakness but not the engagement bottleneck.

---

## Success Chain Comparison

### Encounter

| Concept | Hook | Screenshot | Share-bait | Edge |
|---|---|---|---|---|
| **BREACH** | "Can you break the world's most important treaty?" — transgressive, challenging | Schematic showing gaps you exploited | "I broke the AI treaty in 3 moves" | **Strongest** |
| **HOLD THE LINE** | "Can your treaty survive 30 years?" — survival challenge | Timeline with threat markers | "My treaty collapsed in year 12" | Medium |
| **THE ADVOCATE** | "Defend the AI pause against its toughest critics" — social challenge | Debate interface with stakeholder | "I couldn't defend chip tracking" | Weakest for general audience |
| **Treaty Builder** | "Build a treaty that actually works" — constructive | Scrollable list with provisions | Hard to make exciting | Weak |

BREACH wins Encounter decisively. The transgressive hook ("break the treaty") is attention-grabbing in a way that constructive framings can't match. It's counterintuitive — "wait, I'm playing the BAD guy?" — which creates curiosity.

### Complete (dropout resistance)

| Exit point | BREACH | HOLD THE LINE | ADVOCATE | Treaty Builder |
|---|---|---|---|---|
| **Bounce (10s)** | Low risk — "break the treaty" is immediately intriguing | Low risk — year counter and first threat create urgency | Medium risk — debate framing may confuse | Low risk — clear problem/solution |
| **First interaction (30s)** | Strong — pick evasion, see if you get caught. Immediate feedback with stakes | Good — add provision, time advances, see consequence | Good — pick response, see if stakeholder accepts | Good — pick provision, see failure resolve |
| **Pattern recognition (2min)** | Strong — puzzle variety (different evasion strategies), escalating difficulty | Good — temporal progression adds variety | Medium — debate format may feel repetitive | Medium — read-pick-advance may feel repetitive |
| **Mid-experience fatigue (2-5min)** | Low fatigue — each round is a fresh puzzle with new constraints | Low fatigue — era transitions refresh the experience | Medium fatigue — debate can be tiring | Medium fatigue — constant reading load |
| **Resolution (end)** | Strong — "the treaty caught everything" is earned satisfaction | Strong — "survived to year 30" is achievement | Medium — "defended all provisions" is satisfying but less dramatic | Medium — "treaty is complete" is educational but flat |
| **Interruption recovery** | Easy — "I was trying to evade chip tracking" is simple state | Easy — "I was in year 12" is simple state | Easy — "I was defending provision X" | Easy — "I was looking at failure X" |

BREACH and HOLD THE LINE tie for strongest Complete. Both have better pattern-recognition variety and resolution satisfaction than base Treaty Builder.

### Learn (articulable knowledge production)

| Factor | BREACH | HOLD THE LINE | ADVOCATE | Treaty Builder |
|---|---|---|---|---|
| **Knowledge encoding** | Moderate — learning is in outcome text after strategic choice; vivid but not structurally propositional | Good — propositional evaluation with temporal causation | Strongest — propositional evaluation + practiced articulation under pressure | Good — propositional evaluation |
| **Talking point vividness** | Most vivid — attack + defense stories are memorable | Good — temporal context adds color | High — practiced defending against real objections | Adequate — provision + purpose |
| **Encoding reliability** | Lower — depends on player reading outcome text carefully | High — evaluation IS the choice | High — evaluation IS the choice | High — evaluation IS the choice |
| **Domain coverage** | Partial — institutional mechanisms (M9, M12, M14) don't map to evasion strategies | Full (all 17 as era-specific threats) | Full (all 17 as stakeholder challenges) | Full (all 17 as failure-provision pairs) |
| **Thesis alignment** | Point 3: strong. Point 2: significant risk — player spends most of playtime breaking treaty. Endgame mitigates but may not dominate the memory. | Strong for all 3 points — temporal arc shows necessity, possibility, and specifics | Strong for point 3. Point 2 implicit (if you can defend it, it's possible) | Strong for points 2 and 3 |

Treaty Builder, HOLD THE LINE, and ADVOCATE produce articulable knowledge by construction — the player's evaluative choice IS the learning moment. BREACH produces articulable knowledge through outcome text — vivid but less reliable, structurally similar to WATCHPOINT's learning mechanism (though BREACH's text is the punchline, not peripheral).

### Retain

| Factor | BREACH | HOLD THE LINE | ADVOCATE | Treaty Builder |
|---|---|---|---|---|
| **Emotional encoding** | Strong — "I tried to cheat and got caught" is memorable | Moderate — "my treaty collapsed in year 12" is memorable | Strong — "I couldn't answer the privacy objection" is memorable | Moderate — sequential evaluation is less emotionally marked |
| **Distinctiveness** | High — "the game where you try to break the treaty" is a unique frame people remember | Medium — "the treaty survival game" is moderately distinctive | Medium — "the treaty debate game" | Low — "the treaty building exercise" is generic |
| **Story shape** | Strong — each evasion attempt is a mini-story | Strong — the timeline IS a story | Moderate — debates are episodes, not a connected story | Weak — sequential list has no narrative arc |

BREACH has the strongest retention profile because adversarial experiences encode more vividly than constructive ones. "I tried to smuggle GPUs through shell companies" is more memorable than "I added a provision about shell companies."

### Transmit

| Factor | BREACH | HOLD THE LINE | ADVOCATE | Treaty Builder |
|---|---|---|---|---|
| **Challenge sharing** | "I broke the treaty in 3 moves — can you do better?" — very strong | "My treaty survived 18 years — can you beat that?" — strong | "I couldn't defend chip tracking — can you?" — moderate | Weak challenge frame |
| **Insight sharing** | "Did you know you can buy AI chips through shell companies and nobody notices?" — strong, framed as personal discovery | "By year 15, the inspectors were captured by the companies they regulated" — moderate | "When someone says chip tracking is surveillance, the answer is..." — very strong, ready-to-use | "A pause needs these 8 provisions" — informative but dry |
| **Emotional sharing** | "You HAVE to play this — I felt like a criminal mastermind" — strong fun-sharing | "My treaty collapsed because I forgot about algorithmic progress" — story-sharing | "This game made me realize I can't defend the pause properly" — identity-sharing | Weak emotional hook |

BREACH wins Transmit through the combination of challenge-sharing ("beat my score") AND insight-sharing (each evasion method is a story). THE ADVOCATE produces the most directly transmissible talking points ("when someone says X, respond with Y") but has weaker viral mechanics.

---

## Bottleneck Analysis

| Concept | Bottleneck link | Nature | Addressable? |
|---|---|---|---|
| **BREACH** | Learn — TWO issues: (1) learning through text readouts not propositional evaluation, (2) pessimism risk undermines thesis-2 | (1) partially structural, (2) tension between vividness-as-retention and vividness-as-pessimism | Partially. Outcome text can be made prominent. Pessimism risk can't be fully resolved — the vivid evasion experiences may dominate the endgame. |
| **HOLD THE LINE** | Encounter — survival challenge hook is decent but not exceptional | Execution | Yes — naming, framing |
| **THE ADVOCATE** | Encounter — debate framing appeals to policy wonks, not general audience | Partially structural — "defend the treaty" is inherently less exciting than "break the treaty" | Partially |
| **Treaty Builder** | Encounter — sounds like homework | Execution | Yes — naming, framing, visual design |

No concept has no bottleneck. The tradeoff is:
- **BREACH** trades a stronger Encounter for a weaker Learn (text readouts + pessimism risk + coverage gaps)
- **Treaty Builder** trades a weaker Encounter for a stronger Learn (propositional evaluation by construction + full coverage + thesis-2 alignment)
- **THE ADVOCATE** has the strongest Learn (practiced articulation) but the weakest Encounter
- **HOLD THE LINE** is Treaty Builder with a stronger narrative frame — modest improvement, not a distinct concept

The decisive question: **is BREACH's Encounter advantage worth its Learn disadvantages?** This depends on the relative value of reach vs. knowledge quality — a judgment call, not an analytical conclusion.

---

## Hybrid: BREACH with Blue-Team Endgame

The strongest version may be a hybrid:

**Phase 1 (70% of playtime):** BREACH — player exploits gaps, treaty patches them. Fun, transgressive, discovery-driven.

**Phase 2 (30% of playtime):** The treaty is nearly complete. The player switches to "stress testing" — trying the hardest remaining evasion strategies. The treaty catches them every time. The player experiences the complete treaty's robustness firsthand.

**Final screen:** The complete treaty, with every provision the player forced into existence by exploiting its absence. "You made this treaty unbreakable. Here's what it took." The provisions listed are the talking points.

This addresses the pessimism risk: the player's FINAL experience is "I can't break this treaty anymore." The emotional arc goes from power ("I'm beating the system") to earned respect ("this system actually works when it has everything").

---

## Implementation Comparison

| Factor | BREACH | HOLD THE LINE | ADVOCATE | Treaty Builder |
|---|---|---|---|---|
| **Content needed** | ~20-30 evasion strategies, ~20-30 treaty responses, outcome text for each | ~20-30 threats per era, ~30-40 provisions, degradation descriptions | ~20-30 stakeholder challenges per provision, ~80-120 response options | ~20-30 failures, ~30-40 provisions |
| **State complexity** | Current treaty provisions + player resources + evasion history | Current provisions + degradation state + year + era | Current provisions + stakeholder satisfaction | Current provisions + failure queue |
| **New UI** | Provision display, evasion option cards, caught/escaped outcome screen | Timeline, era transitions, degradation indicators | Stakeholder portrait, debate interface, headline display | Scrollable provision list, failure cards |
| **Technical risk** | Low — standard state machine | Low-medium — degradation logic adds complexity | Low — standard dialogue tree | Low |
| **Estimated build** | 2-3 weeks | 3-4 weeks | 3-4 weeks (content-heavy) | 2-3 weeks |

BREACH and Treaty Builder have comparable build timelines, but BREACH is NOT "Treaty Builder with reversed perspective." BREACH requires evasion-outcome logic: a many-to-many mapping between evasion strategies and current treaty provisions to determine whether an evasion succeeds. Treaty Builder needs only one-to-one mappings (this provision addresses this failure). BREACH's logic is meaningfully more complex to get right — each evasion attempt must coherently respond to the current treaty state.

---

## Recommendation

**Treaty Builder with adversarial narrative framing** is the strongest synthesis available.

The exploration reveals that pure BREACH's engagement advantages come with real Learn costs: learning through text readouts (not propositional evaluation), pessimism risk, institutional mechanism gaps. Pure Treaty Builder has reliable Learn but a weak Encounter. Neither extreme is best.

The synthesis: **Keep Treaty Builder's core interaction** (player reads failure + evaluates provision — propositional evaluation IS the learning moment). **Add adversarial narrative framing** to failures (each failure is framed as an adversary exploiting a gap, not an abstract failure mode). This borrows BREACH's engagement without losing Treaty Builder's structural Learn advantage.

Instead of: "Failure: distributed training clusters evade data center monitoring. Pick a provision."
Frame as: "A rogue lab distributed a training run across 200 residential apartments, evading your data center monitoring entirely. Your chip tracking saw nothing. [Pick a provision to address this.]"

The encounter hook borrows from both: **"Can you build a treaty that no one can break?"** Constructive (building) + adversarial (no one can break). Or: **"Every treaty has a fatal flaw. Can you find them all before it's too late?"**

**What this preserves from Treaty Builder:**
- Propositional evaluation as the core interaction (articulable knowledge by construction)
- Full domain model coverage (all 17 mechanisms including institutional ones)
- Thesis-2 alignment ("the treaty works when you get it right")
- Simple state, low implementation cost

**What this borrows from BREACH:**
- Adversarial narrative voice (vivid, personal, story-shaped failures)
- Encounter framing (challenge + adversarial + stakes)
- Discovery fun ("what goes wrong next?")

**What this leaves on the table:**
- BREACH's transgressive fun ("I'm the bad guy") — partially, though the adversarial narrative implies opposition
- THE ADVOCATE's practiced articulation — could be a postgame feature ("now defend your treaty")
- HOLD THE LINE's temporal degradation — could be a structural element (provisions degrade over game-time)

**THE ADVOCATE remains the strongest concept for transmission quality.** The player literally practices defending provisions against realistic objections — the exact skill needed for real-world transmission. Its encounter weakness is real but may be overstated for a project where most traffic arrives from a shared link with context, not cold from a tweet. Worth considering as a primary concept if the project's priority is quality-of-knowledge over reach.

**Decision required:** The synthesis (Treaty Builder + adversarial narrative) vs. THE ADVOCATE depends on whether the project optimizes for reach or transmission quality. This is a strategic question for Jörn, not an analytical one.

---

## Open Questions for Decision

1. **Reach vs. transmission quality:** Should the game optimize for getting many people to play (favors BREACH-like encounter hooks) or for high-quality knowledge transmission per player (favors ADVOCATE-style articulation practice)? The project's success depends on both; which is the tighter bottleneck in practice?

2. **Adversarial narrative intensity:** The recommended synthesis uses adversarial framing in the failure narratives, not as the player's role. How vivid and adversarial should the failure framing be? A spectrum from "Failure: data center monitoring is evaded" to "A rogue lab just trained an AI in 200 apartments and laughed at your monitoring."

3. **ADVOCATE as secondary mode:** After completing the treaty, could the player face 3-5 rapid-fire stakeholder challenges? "You built the treaty. Now defend it." This would add practiced articulation (ADVOCATE's strength) as a postgame feature, taking 1-2 extra minutes.

4. **Pure BREACH as alternative:** If the pessimism risk and thesis-2 concern are judged acceptable (e.g., the endgame is deemed sufficient), BREACH remains the strongest encounter hook. Worth prototyping if encounter turns out to be the binding constraint after initial deployment.

---

## Related Files

- `design/enforcement-game-treaty-builder.md` — Treaty Builder concept (baseline)
- `design/concept-evaluation.md` — WATCHPOINT vs Treaty Builder comparison
- `design/enforcement-game-final.md` — WATCHPOINT concept
- `design/domain-model.md` — authoritative domain model
- `design/game-mechanics-analysis.md` — mechanic analysis
