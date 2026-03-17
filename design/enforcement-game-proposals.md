# Enforcement Game — Concept Proposals

**Date:** 2026-03-16
**Context:** Spin-off game focused exclusively on enforcement of a global AI pause. Narrower scope than the current Reigns-style game (which models politics, diplomacy, safety research, and enforcement together). The hypothesis: a tighter focus on enforcement enables more accurate modeling, tailored mechanics, and faster content development.

**Target audience for the game:** People who discuss AI pause feasibility but lack intuition for what enforcement actually involves — what tools exist, what makes it hard, how adversaries adapt, and what determines success or failure.

**Audience for this document:** Game company CEO (feasibility, market, fun), chief playtesting officer (mechanics, balance, replayability), MIRI as commissioning client (technical accuracy, educational impact, policy relevance).

---

## Executive Summary

Four game concepts explored, each with different mechanics and teaching emphasis:

| | A: WATCHLIST | B: COMPUTE CRISIS | C: DEADHAND | D: DARK LAB |
|---|---|---|---|---|
| **Mechanic** | Evidence inspection (Papers Please style) | Branching crisis narrative | Tactical asset deployment | Detective investigation |
| **Teaches** | What evidence looks like, signal vs noise | How crises unfold, speed vs process | Resource allocation, arms race | Investigation process, attribution |
| **Build time** | 4-6 weeks | 8-12 weeks | 5-7 weeks | 10-12 weeks |
| **Replayability** | High (procedural) | Moderate (branching) | High (procedural) | Moderate (finite content) |

**Recommendation:** WATCHLIST for fastest path to a playable game that teaches evidence literacy. COMPUTE CRISIS if emotional engagement with enforcement difficulty matters more than breadth. See "Honest Gaps" section — no single proposal models the full domain; the 30-year institutional decay dynamics from the domain model are unaddressed by all four.

**Commercial context:** Papers Please (~5M copies), Reigns (~3M), 80 Days (~2M) demonstrate market viability for decision-based mobile games with serious themes. The AI governance audience (policy researchers, x-risk community, informed public) is niche but highly engaged and likely to share. Distribution: free web game, grant-funded or community-funded.

**Validation before building:** Paper-prototype the top candidate with index cards. Run 5-10 playtesters through it. Pre/post quiz: "Describe three enforcement mechanisms for a compute ban" and "Name two reasons enforcement is hard." If playtesters can't articulate these after 3 sessions, the game isn't teaching what it claims.

---

## Why enforcement specifically?

The current game models the full Director-General experience: political coalition management, safety research oversight, international diplomacy, AND enforcement. This breadth means each dimension gets shallow treatment — a player might die 15 times without ever developing intuition for how enforcement actually works.

Enforcement is the most commonly cited objection to pause proposals: "You can't enforce a global ban on compute." But most people who say this can't describe what enforcement mechanisms exist, what makes them hard, or what determines whether they'd work. This is precisely the gap a focused game can fill.

A focused enforcement game offers:
- **Tighter feedback loop:** Every decision is about enforcement, so every death teaches something about enforcement
- **Concrete resources:** Instead of abstract bars, players deploy specific tools (satellites, inspectors, raid teams) against specific threats
- **Mechanically tailored:** Game mechanics can match the enforcement domain instead of being generic binary choices
- **Faster content development:** Narrower domain = faster expert review, fewer interdependencies

The enforcement domain is rich enough to sustain a standalone game. The domain model (design/domain-model.md) documents 17 geopolitical mechanisms across 6 categories, plus a detailed chip lifecycle and supply chain sub-model. There is no shortage of material.

---

## The Enforcement Domain (brief primer)

What does enforcement of an AI training ban actually involve?

**Detection tools** (ranging from established to aspirational):
- Chip registry / supply chain tracking (closest to existing — builds on current export controls and chip design chokepoints at ASML/TSMC)
- On-chip hardware monitoring (firmware-based usage reporting, kill switches — proposed in compute governance literature, technically feasible but not yet deployed at scale)
- Power grid monitoring (large training runs draw megawatts — requires new infrastructure partnerships with utilities)
- Thermal satellite surveillance (GPU clusters produce heat — requires new monitoring programs, faces practical limits: cloud cover, underground facilities, standard cooling)
- Network traffic analysis (distributed training creates detectable patterns — requires deep packet inspection capabilities)
- Informant networks / whistleblowers (human intelligence — traditional, proven in other domains)

Note: The game would portray these as tools the player builds up over time, not as pre-existing infrastructure. Early game = limited tools. Building detection capability IS the game.

**Enforcement actions:**
- Routine inspections of declared facilities
- Challenge inspections of suspected undeclared facilities
- Customs interdiction of chip shipments
- Raids on confirmed illegal compute clusters
- Diplomatic pressure on non-cooperative states
- Sanctions and trade restrictions

**Adversary types:**
- State actors (military AI programs behind sovereignty shields)
- Corporations (economic incentives, legal teams, regulatory capture)
- Ideological groups (AI accelerationists who believe the ban is wrong)
- Criminal networks (black-market compute, convergence with other trafficking)
- Academic researchers (curiosity-driven, may not believe their work is dangerous)
- Insiders (ISIA employees compromised or ideologically opposed)

**What makes it hard:**
- Declared-vs-undeclared blindness (you monitor what you know about)
- Adversary adaptation (switch to distributed compute, go underground, forge evidence)
- Political constraints (can't raid a sovereign nation's "weather research center" without diplomatic cover)
- Base rate problem (99% of compute facilities are legitimate — your tools generate noise)
- Scale asymmetry (creating shell companies is cheap; investigating each takes months)
- Institutional decay (regulatory capture, cultural capture, funding dependency)

---

## Proposal A: WATCHLIST

**Tagline:** Papers Please for compute governance — inspect, evaluate, decide.

**Core teaching:** The signal-vs-noise challenge of enforcement. What does real evidence of illegal compute look like? How do you distinguish it from legitimate use? What are the costs of getting it wrong?

### Player Fantasy

You're a Senior Inspector in ISIA's Verification Division. Dossiers land on your desk every shift — anomaly reports from monitoring systems, tip-offs from informants, routine inspection requests. Each contains 3-5 pieces of evidence. You examine them, compare against what you know, and decide: **Clear** (legitimate), **Monitor** (keep watching), **Investigate** (deploy a team), or **Raid** (full enforcement action).

You're not in the field. You're the decision-maker who determines what gets attention and what gets ignored. Every correct call protects the world. Every wrong call either lets a rogue lab grow or damages ISIA's credibility with an innocent facility.

### How It Plays

**Screen layout:**
- Top bar: Shift metrics (cases remaining, accuracy score, credibility meter, backlog)
- Center: Current dossier — facility name, country, declared purpose, evidence cards
- Bottom: Four action buttons (Clear / Monitor / Investigate / Raid)

**Evidence cards** (tap to examine):
1. **Power consumption graph** — time series of facility's power draw. Legitimate data centers have predictable patterns. Training runs show characteristic multi-day spikes.
2. **Chip registry report** — registered hardware at the facility. Discrepancy between registered count and estimated compute (from power data) is a red flag.
3. **Satellite thermal scan** — overhead heat map. Dense GPU clusters have distinctive thermal footprints — hotter than equivalent legitimate workloads, often with asymmetric cooling signatures.
4. **Personnel dossier** — key staff backgrounds. ML researchers at a "weather modeling" facility is suspicious. Known capability researchers appearing at an unknown facility is alarming.
5. **Network traffic summary** — data flow patterns. Heavy encrypted outbound traffic to model hosting services, or unusual peer-to-peer patterns consistent with distributed training.
6. **Financial trace** — funding sources. Shell company chains, cryptocurrency payments, or funding from sanctioned entities.
7. **Informant report** — human intelligence. Ranges from "I saw trucks of servers at night" to "my colleague says they're training a frontier model." Variable reliability — some informants are reliable, some have axes to grind, some are adversary plants feeding disinformation.
8. **Self-declaration** — the facility's own filing with ISIA. May be honest, vague, or fabricated.

Not all evidence types appear in every dossier. Early cases show 3 clear pieces. Later cases show 5 ambiguous or contradictory pieces.

**Turn structure:**
1. New dossier appears (facility summary + face-down evidence cards)
2. Tap evidence cards to examine them (each takes a moment — time pressure from backlog)
3. Some evidence is clear-cut. Some requires comparing pieces (power data says 5MW, but chip registry says only 200 GPUs — those only draw 0.5MW total. Where's the other 4.5MW going?)
4. Choose action: Clear / Monitor / Investigate / Raid
5. Brief result text: "CORRECT: This facility housed 12,000 undeclared H100s running a frontier training experiment" or "MISTAKE: This was a legitimate climate research consortium. Brazil has filed a formal complaint."
6. Metrics update. Next dossier.

**Session length:** One "shift" = 8-12 dossiers. At ~30-60 seconds per dossier (depending on evidence complexity), sessions run ~5-8 minutes.

**Critical design tension: time pressure vs. evidence depth.** Backlog pressure incentivizes fast pattern-matching ("if power graph has spike, raid"). But the teaching goal requires careful evidence evaluation. Resolution options:
- **Option 1: No time pressure.** Remove backlog. Player examines evidence at their own pace. Teaching: excellent. Engagement: weaker (no urgency).
- **Option 2: Soft time pressure.** Backlog grows slowly. Taking time costs score but doesn't cause loss. Player CAN rush but shouldn't.
- **Option 3: Dual speed.** "Training shifts" (no timer) to build evidence literacy, then "live shifts" (backlog pressure) to test it under stress.
Option 3 is the strongest — it separates the learning phase from the testing phase. But it needs playtesting to validate.

### Adversary Model

Cases are procedurally generated from templates with escalating sophistication:

**Week 1 (Training):** Obvious cases
- Warehouse full of GPUs, no declared purpose, power spike visible from orbit
- University with 10 registered GPUs doing published language research (clearly legitimate)

**Week 2 (Basic Deception):** Simple covers
- Corporation claiming "autonomous vehicle testing" but power consumption is 50x what that requires
- State facility with clean paperwork but one anomalous personnel transfer from a sanctioned AI lab

**Week 3 (Sophisticated Evasion):** Multiple layers
- Distributed operation: 12 small clusters in different cities, each below reporting threshold, connected via encrypted tunnel (network evidence is key)
- Turnkey proliferation package: broker network providing hardware + expertise + cover documentation (financial trace reveals the pattern)

**Week 4 (Adversary Adaptation):** They know your methods
- Facility that's been spoofing power consumption data to make a training run look like normal server load
- Informant report that turns out to be adversary disinformation designed to make you waste an investigation on an innocent facility (damages credibility)
- State actor whose self-declaration is technically accurate (they declared a "computing research center") but misleading (the "research" is frontier AI training)

**Week 5+ (Expert Mode):** Hard cases
- Legitimate safety research lab that's using more compute than its license allows — technically a violation, but raiding it damages safety progress
- Incremental disclosure: facility you previously investigated and cleared has expanded, but only admits a fraction of the growth when confronted
- A case where every piece of evidence is clean except one subtle inconsistency that could be a genuine error or a sign of a massive hidden program

### Progression & Replayability

- **Unlock new evidence types** as you level up (satellite thermal only becomes available after Week 1; financial traces after Week 2)
- **Adversary adaptation** is procedural — the mix of easy/hard/deceptive cases shifts based on your choices
- **Persistent score/rank** across sessions (lifetime accuracy, true positive rate, false positive rate)
- **Special scenarios** unlock after demonstrating competence (e.g., "The A.Q. Khan Analog" — a multi-facility turnkey proliferation case that spans several dossiers)
- **Evidence gets harder to read** — early power graphs are labeled clearly; later ones require the player to notice patterns themselves

**Estimated replayability:** High. Procedural generation means no two shifts are identical. The skill ceiling (learning to spot subtle evidence patterns) provides long-term mastery motivation. Comparable to Papers Please's replay value.

### Loss & Win Conditions

**Loss triggers:**
- **Credibility collapse** (credibility meter hits 0): too many false positives — you raided too many innocent facilities, and ISIA loses international support
- **Threat breach** (a missed case escalates to catastrophic level): you cleared or under-responded to a facility that achieved frontier capability
- **Backlog overflow** (too many unprocessed cases pile up): you're too slow, and threats slip through while you deliberate

**Win condition:** Survive the full shift rotation (5 weeks / 50-75 cases) with credibility above threshold and no threat breach. Score based on accuracy, efficiency, and the sophistication level of cases you handled correctly.

**Death teaches:** Each loss shows what you missed and why. "You cleared Case 47, but the power consumption data showed weekend spikes inconsistent with the declared 'weekday-only research schedule.' The facility was running unauthorized training after hours." These post-mortem screens are where most learning happens.

### Mobile UX

Excellent fit. The dossier metaphor maps naturally to a phone screen:
- Evidence cards as tap-to-flip elements (familiar gesture)
- Four action buttons at bottom (large touch targets, always visible)
- One dossier at a time fills the screen (no scrolling, no map, no complex spatial layout)
- Time pressure creates urgency without requiring twitch reflexes
- Portrait orientation, one-handed play

### Engineering Assessment

**Complexity:** Moderate. New systems needed:
- Evidence generation system (procedural dossier assembly from templates)
- Evidence display components (graphs, images, text cards)
- Scoring and progression system
- Adversary sophistication scaling

**Reusable from current game:** Typography, color scheme, portrait aesthetic, deployment pipeline, mobile-first responsive layout.

**Art requirements:** Evidence card visual templates (power graphs, thermal scans, personnel photos). Could use stylized/procedural visuals rather than hand-drawn assets. The existing dark/moody aesthetic works well for an inspection desk.

**Timeline estimate:** 4-6 weeks for MVP with 5 evidence types and 3 difficulty tiers. Content expansion is incremental (add evidence types, case templates, special scenarios).

### Risks

1. **Papers Please comparison is unavoidable and dangerous.** The core interaction pattern is nearly identical: receive dossier, examine items, choose from action buttons, receive feedback. "The domain is novel" is a weak defense — Papers Please's domain (immigration) was also novel. The real question: how does WATCHLIST differentiate MECHANICALLY? Honest answer: the evidence cross-referencing (comparing power data against chip registry against thermal scan) is more analytical than Papers Please's rule-matching. But as described, a player could ignore cross-referencing and still play adequately via pattern-matching. **This needs design work to ensure evidence cross-referencing is REQUIRED, not optional** — e.g., cases where no single evidence card is conclusive but the combination is. Without this, it IS "Papers Please but worse."
2. **Evidence examination could feel tedious on mobile.** Small graphs and data on a phone screen. Mitigation: stylize evidence for readability (large, clear patterns rather than detailed data); use the tap-to-zoom pattern for details.
3. **Content variety.** Procedural generation can feel repetitive if templates aren't varied enough. Mitigation: large template pool, with special hand-crafted scenarios to break up routine.
4. **Difficulty curve is critical.** Too easy = boring, too hard = unfair. The transition from "obvious cases" to "sophisticated deception" must feel gradual and earned. This requires extensive playtesting.

### Teaching Effectiveness

**Rating: High.**

The player directly engages with enforcement's central challenge: evaluating evidence under uncertainty. After multiple sessions, players develop genuine intuition for:
- What evidence types exist for compute monitoring (power, thermal, chips, traffic, human intel)
- Why distinguishing legal from illegal compute is genuinely hard (similar signatures, adversary deception)
- The cost structure of false positives vs. false negatives (credibility vs. security)
- How adversaries adapt to monitoring methods
- Why you can't "just check everything" (backlog pressure, limited resources)

**Policy relevance:** After playing, a person can engage with "can you actually enforce a compute ban?" from an informed position. They know what evidence exists, what it looks like, and why it's ambiguous. This is precisely MIRI's stated goal.

---

## Proposal B: COMPUTE CRISIS

**Tagline:** 72 hours. An illegal AI lab has been detected. Manage the response.

**Core teaching:** How enforcement crises unfold in real time — the tension between speed and due process, how adversaries use delay and obfuscation, how diplomatic constraints shape operational decisions, and why even successful enforcement can have political costs.

### Player Fantasy

An alarm triggers on your phone. ISIA's monitoring network has detected something — a thermal anomaly, a suspicious chip shipment, a credible whistleblower tip. You have roughly 72 hours before the situation resolves one way or another. What you do in those hours determines whether you catch the violator, fumble the response, or cause a diplomatic incident.

You're the Enforcement Director — senior enough to make decisions, junior enough that you need the Director-General's backing for the politically explosive ones. You coordinate analysts, field teams, diplomats, and sometimes military assets. Every hour you spend gathering intelligence is an hour the adversary might use to destroy evidence or complete their training run.

### How It Plays

**Screen layout:**
- Top: Crisis clock (hours elapsed / hours remaining), severity indicator
- Center: Current event card (text describing what's happening, with 2-3 response options)
- Bottom: Asset status bar (which teams/tools are deployed, which are available)
- Background color shifts as clock advances (cool blue → warm amber → urgent red)

**Session structure — one crisis per play:**

Each crisis is a branching event sequence unfolding over a compressed 72-hour timeline. Events appear at intervals (some immediate, some triggered by your earlier decisions). At each event, you choose a response. Your choices determine what information you get, what assets you commit, and how the crisis resolves.

**Example crisis: "The Shenzhen Signal"**

```
HOUR 0 — ALERT
Thermal satellite detects anomaly in Guangdong industrial zone.
Estimated compute: 50,000+ GPU-equivalents. Not declared in any registry.

→ "Notify Chinese liaison office and request information"
→ "Deploy high-resolution satellite for detailed thermal mapping"
→ "Send field agents for visual observation"

HOUR 4 — INTELLIGENCE (if satellite)
High-res thermal confirms: dense compute signature consistent with
frontier-scale training cluster. Active cooling visible. Facility
appears purpose-built, operational for at least 8 weeks.

→ "Present evidence to Chinese government, request inspection access"
→ "Continue covert surveillance — map perimeter, monitor traffic patterns"
→ "Escalate to ISIA Council — request emergency inspection authority"

HOUR 8 — DIPLOMATIC CONTACT
China responds: "This facility is a quantum computing research center
for civilian weather modeling. We welcome a guided tour at your
convenience — available next week."

→ "Accept guided tour offer (low-confrontation, but they'll have time to prepare)"
→ "Push for immediate unrestricted inspection (high-confrontation)"
→ "Decline tour, continue independent surveillance (preserves options)"

HOUR 14 — COMPLICATION
Satellite detects truck convoy departing facility at 2 AM.
Possible evidence removal or hardware relocation.

→ "Track convoy via satellite — see where it goes"
→ "Confront China with convoy evidence — demand explanation"
→ "Alert border monitoring — in case trucks head for port/border"

HOUR 24 — FORK (based on cumulative decisions)

[If aggressive path]: You've pushed for access and presented strong
evidence. China agrees to inspection but imposes "safety protocols"
requiring 24-hour delay. During the delay, satellite shows activity
inside the facility — are they cleaning up?

[If cautious path]: You've been monitoring covertly. You now have
extensive external intelligence (traffic patterns, power consumption,
personnel observations) but no internal access. The training run
may be completing.

[If diplomatic path]: You've worked through channels. The ISIA Council
is debating an inspection mandate. Three council members with trade
relationships with China are requesting "further evidence" before voting.

... continues to HOUR 72 with branching resolution ...
```

**Resolution types:**
- **Clean enforcement:** Undeniable evidence obtained, international support secured, hardware seized, program terminated. (Rare — requires both good decisions AND some luck.)
- **Messy win:** Violation confirmed but partial evidence; China privately agrees to shut down but saves face publicly. You know they violated, they know you know, nobody says it out loud.
- **Stalemate:** Investigation inconclusive. Maybe they cleaned up in time, maybe it really was quantum computing. You'll never know. Credibility unharmed but threat unresolved.
- **Diplomatic failure:** Your aggressive approach alienated China. They've filed formal complaints, and three allied nations are questioning ISIA's mandate. The facility? Still operational.
- **Catastrophic miss:** While you focused on diplomatic niceties, the training run completed. The weights are now distributed across encrypted servers in 40 countries. Game over.

**Session length:** ~15-20 decision points across the 72-hour timeline. At ~20-40 seconds per decision point (read event, choose response), sessions run **8-12 minutes** per crisis. This is on the long side for mobile — compensated by the narrative tension keeping players engaged, and by save/resume at each decision point. Could be shortened to 10-12 decision points (~5-7 minutes) by compressing mid-crisis events, at the cost of less branching depth.

### Adversary Model

Different crises feature different adversary types, each requiring different approaches:

1. **State actor crisis (China/Russia):** Sovereignty is the shield. Diplomatic tools needed, but diplomacy is slow and the adversary uses delay deliberately. The teaching: state-sponsored violations are the hardest enforcement problem because political constraints limit your tools.

2. **Corporate front crisis (Singapore/Ireland):** A legitimate tech company with a secret research division. Legal complexity — you need warrants, and the company's lawyers are faster than your legal team. The teaching: corporate violators weaponize legal process.

3. **Distributed network crisis (global):** No single facility to raid. Dozens of small clusters across 8 countries, each below reporting threshold, coordinating via encrypted channels. The teaching: algorithmic progress makes distributed training viable, and enforcement designed for large centralized clusters becomes obsolete.

4. **Insider threat crisis (internal):** An ISIA analyst has been leaking investigation plans to targets. Your last three operations were compromised. The teaching: enforcement institutions are themselves targets for infiltration.

5. **Academic lab crisis (Switzerland):** A respected university lab doing "alignment research" but using unauthorized compute scale. Raiding them would be a PR disaster and would actually harm safety progress. The teaching: enforcement must distinguish between categories of violation, and the hardest cases are sympathetic violators.

6. **Turnkey broker crisis (multi-country):** A proliferation network selling complete AI training packages. Shutting down one node alerts the rest. Do you grab the node you've found, or try to map the full network first? The teaching: network disruption involves speed-vs-completeness tradeoffs (directly from domain model mechanism M4).

### Progression & Replayability

- **6-10 crises, each hand-crafted** with 3-4 major branching paths
- Each crisis has a **letter grade** (A through F) based on outcome quality, encouraging replay for better outcomes
- **Unlock mechanism:** completing early crises unlocks harder ones. The distributed network crisis only unlocks after you've handled at least one state actor and one corporate front.
- **"Intel file" collection:** each crisis resolution reveals background lore about the adversary, enforcement mechanisms, and geopolitical context. Completionists will replay to see all outcomes.
- **Difficulty modes:** "Analyst" (more time, more information per event) vs "Director" (less time, more ambiguity, harder consequences)

**Estimated replayability:** Moderate-high. Hand-crafted crises have fewer unique runs than procedural games, but branching paths provide strong "what if?" replay motivation. The 6-10 crises provide 4-6 hours of content before exhaustion. (Compare: a well-crafted narrative game like 80 Days gets ~8-12 hours from its branching narrative structure.)

### Loss & Win Conditions

**Each crisis has its own outcome spectrum** (no single loss condition):
- S-rank: Threat neutralized, evidence secured, diplomatic relationships intact, ISIA credibility enhanced
- A-rank: Threat neutralized but with some political cost or evidence gaps
- B-rank: Threat partially contained, significant costs
- C-rank: Stalemate — threat unresolved, significant resource expenditure
- D-rank: Failed — threat continues, ISIA credibility damaged
- F-rank: Catastrophic — threat achieves capability milestone, or diplomatic crisis undermines ISIA's mandate globally

**Meta-progression:** your overall grade across all crises determines your "career rating" as Enforcement Director.

### Mobile UX

Strong fit:
- Event cards with 2-3 choices map perfectly to phone screens
- Timeline/clock creates natural urgency
- One event at a time — no complex spatial layouts
- Color-coded urgency (background shifts) provides ambient information
- Portrait orientation, can be played one-handed
- Natural "put down and think about it" moments between events

### Engineering Assessment

**Complexity:** Moderate. New systems needed:
- Branching event engine (state machine tracking player decisions and their consequences)
- Timeline UI with clock progression
- Crisis scoring system
- Asset tracking (which teams are deployed, cooldown states)

**Content creation is the dominant cost.** Each crisis is 15-20 events with 2-3 options each, branching into 3-4 major paths. That's roughly 40-60 unique events per crisis. For 6 crises: ~300 events. This is a significant writing effort requiring domain expertise review.

**Reusable from current game:** Visual aesthetic, deployment pipeline, mobile responsiveness.

**Timeline estimate:** 4-5 weeks for engine + 2 crises. Additional crises at ~1 week each with domain review. Full game (6+ crises): 8-12 weeks.

### Risks

1. **Content bottleneck.** Each crisis must be hand-crafted by someone who understands enforcement procedures, diplomatic dynamics, and adversary behavior. This is skilled labor. Mitigation: start with 2-3 crises, expand based on reception.
2. **Linear feel.** If branching isn't deep enough, replaying feels like "same story, slightly different." Mitigation: ensure at least 3 genuinely distinct resolution paths per crisis, with meaningfully different outcomes.
3. **Session length.** 5-7 minutes is on the long side for casual mobile games. Players who are interrupted mid-crisis need save/resume. Mitigation: save state at each decision point; events are discrete enough to resume cleanly.
4. **Pacing.** Real crises involve hours of waiting punctuated by intense decision moments. The game compresses this, but it needs to feel natural. Too fast = no tension. Too slow = boring. This requires careful playtesting.

### Teaching Effectiveness

**Rating: High.**

The immersive, time-pressured format creates genuine emotional engagement with enforcement decisions. Players experience:
- The fog of uncertainty (you're never sure if the threat is real)
- The speed-vs-thoroughness tradeoff (every hour spent investigating is an hour the adversary uses)
- How diplomatic constraints limit operational choices
- The cost of both overreaction and underreaction
- How different adversary types (state, corporate, distributed, insider) require fundamentally different approaches

**Policy relevance:** After playing through several crises, a person understands that enforcement isn't a binary "possible/impossible" — it's a complex operational challenge where success depends on tools, speed, international cooperation, and adversary sophistication. They can articulate specific scenarios where enforcement works and where it fails.

**Emotional channel:** This game teaches through tension and consequence, not just information. The "oh no, I waited too long and they completed the training run" feeling is more memorable than reading about enforcement challenges.

---

## Proposal C: DEADHAND

**Tagline:** Deploy satellites, analysts, and raid teams against escalating threats. You can't cover everything — choose wisely.

**Core teaching:** Enforcement is a resource allocation problem under adversarial pressure. You have specific tools, each suited to different threats. Adversaries adapt to your strategy. The right response to today's threat creates tomorrow's vulnerability.

### Player Fantasy

You're the Enforcement Director with a concrete toolkit: thermal satellites, analyst teams, field agents, raid squads, informant networks, cyber teams. Every turn, threats emerge — intelligence reports, anomaly alerts, tip-offs, defensive incidents. You deploy assets to counter them. Used assets go on cooldown. Unaddressed threats escalate.

The DG handles politics and funding (they appear as events that affect your budget, not as decisions you make). Your world is operational: detect, investigate, neutralize, repeat.

### How It Plays

**Screen layout:**
- Top row: Asset roster — icon for each asset type with count and cooldown indicators
- Center: 1-3 threat cards per turn, showing type, urgency level, and summary
- Bottom: Turn counter, score, threat level meter

**Asset types** (unlocked progressively):

| Asset | Count | Cooldown | Best for |
|---|---|---|---|
| Thermal satellite | 2 | 2 turns | Detecting heat signatures of undeclared compute clusters |
| Analyst team | 3 | 1 turn | Evaluating intelligence, distinguishing real threats from noise |
| Field agent | 4 | 2 turns | Covert on-ground observation of suspected facilities |
| Raid team | 1 | 3 turns | Seizure operations on confirmed illegal sites |
| Informant network | passive | — | Generates tip-off cards each turn (quality varies) |
| Cyber team | 1 | 2 turns | Monitoring digital infrastructure, detecting distributed training |
| Diplomatic channel | 2 | 3 turns | Requesting cooperation from national governments |
| Chip tracer | 1 | 1 turn | Following supply chain for specific hardware batches |

**Turn structure:**
1. **Intel phase:** 1-3 threat cards appear (generated based on turn number, adversary adaptation state, and randomness)
2. **Deploy phase:** Tap an available asset, then tap a threat to assign it. Some threats need multiple assets. Some need specific types.
3. **Resolution phase:** See results of deployments. Threats may be: neutralized (removed), downgraded (reduced urgency), revealed (more info, stays active), or unaffected (wrong tool for this job).
4. **Escalation phase:** Un-addressed threats increase urgency by one level. New background events may occur (DG cuts budget, new evidence type becomes available, an asset is compromised).
5. **Next turn.**

**Threat cards are specific** (not generic):
- "Thermal anomaly in former ASML supplier facility outside Dresden — consistent with 10,000-GPU cluster with improvised cooling"
- "Informant tip: ex-DeepMind researcher recruiting team in Singapore, connected to Abu Dhabi sovereign wealth fund"
- "Supply chain alert: 2,000 H100 GPUs purchased through shell company network, destination unknown after reaching free trade zone in Dubai"
- "Cyber alert: probing detected against ISIA satellite control systems — potential attempt to blind monitoring"
- "Diplomatic incident: Indonesian government demands ISIA inspectors leave territorial waters"

**Threat urgency levels:**
1. **Whisper** — unconfirmed, low priority. Costs nothing to ignore for now.
2. **Signal** — credible intelligence, worth a look. Ignoring = risk.
3. **Concern** — strong evidence, should act. Ignoring = escalation guaranteed.
4. **Alarm** — confirmed threat, act now. Ignoring = near-term catastrophe risk.
5. **Critical** — frontier capability imminent. If this reaches next turn without response, game over.

**Session length:** 20-30 turns, ~4-5 minutes.

### Adversary Model

The adversary isn't a single entity — it's an ecosystem that adapts:

**Adaptation mechanic:** The game tracks which asset types you use most frequently. After every 5 turns, adversaries "adapt":
- **Heavy satellite use** → adversaries move underground, use mobile containers, deploy thermal camouflage → satellite-detected threats decrease, but harder-to-detect threats appear
- **Heavy raid use** → adversaries shift to distributed compute (no single target), use dead-drop evidence destruction → raid opportunities decrease, distributed threat cards increase
- **Heavy informant reliance** → adversaries run counter-intelligence, feed disinformation → informant tip quality decreases, some tips become actively misleading
- **Heavy cyber use** → adversaries go air-gapped, use physical couriers → cyber-detected threats decrease, physical surveillance becomes necessary

This teaches the arms race dynamic directly: every enforcement strategy has an adversary counter-strategy, requiring continuous adaptation.

**Design risk: degenerate strategy.** If adaptation simply punishes your most-used asset, the optimal strategy is "cycle through assets evenly" — which is the OPPOSITE of "use the right tool for each job." Fix: adaptation should change threat TYPES (e.g., "adversaries went underground" means threats now require field agents, not that satellites stop working). The adaptation creates new problems rather than disabling old tools. This requires more sophisticated threat generation but avoids the degenerate equilibrium.

**Threat escalation path (over a full game):**
- Turns 1-5: Simple threats (single facilities, obvious violations)
- Turns 6-10: Corporate fronts and shell companies (need investigation before action)
- Turns 11-15: State-involved threats (diplomatic assets required, sovereignty complications)
- Turns 16-20: Distributed compute and AI-assisted evasion
- Turns 21-25: Convergent networks (threats share infrastructure with other illicit trafficking)
- Turns 26-30: Combined threats and insider attacks on ISIA itself

### Progression & Replayability

- **Asset unlocks:** Start with satellites + analysts. Field agents unlock turn 3. Raid team turn 5. Cyber team turn 8. Diplomatic channels turn 10. Chip tracer turn 12.
- **Roguelike meta-progression:** Each completed game (survive 30 turns) earns "experience" that unlocks permanent upgrades for future runs (extra asset slot, faster cooldowns, better informant quality)
- **Adversary profiles:** Different runs randomize which adversary type is dominant, changing which assets are most valuable
- **Achievement system:** "Survive 30 turns without using a raid team," "Neutralize 3 state-actor threats in one game," etc.

**Estimated replayability:** High. The combination of randomized threat generation, adversary adaptation, and asset management creates genuinely different runs. The skill ceiling (optimal asset allocation) provides long-term improvement motivation. Closest comparison: FTL's encounter + resource management loop.

### Loss & Win Conditions

**Loss triggers:**
- **Any threat reaches Critical without response** — rogue lab achieves frontier capability
- **3+ failed raids** (raid on a facility that turns out to be legitimate) — credibility collapse, ISIA mandate withdrawn
- **All assets compromised** — adversary has blinded your monitoring entirely

**Win condition:** Survive 30 turns with total threat level below threshold. Score = threats neutralized + accuracy (raids on real targets) + efficiency (assets used per threat) + adaptation score (did you diversify your approach when adversaries adapted?).

**External events (not player-controlled):**
- "DG announces 10% budget cut — lose one analyst team" (teaches resource scarcity)
- "New chip tracking firmware deployed — gain chip tracer asset" (teaches tech development)
- "Whistleblower goes public — 3 new threats revealed simultaneously" (teaches information cascades)
- "Allied intelligence agency shares data — your informant network quality improves this turn" (teaches cooperation)

### Mobile UX

Good fit with one design challenge:
- **Deploying assets:** tap asset, then tap threat. Two-tap interaction is clean on mobile.
- **Multiple threats per turn:** may need horizontal scroll for 3 simultaneous threats. Manageable.
- **Asset cooldowns:** clear visual indicators (grayed icons with countdown numbers)
- **The main challenge:** showing enough information about threats for informed decisions without crowding the screen. Solution: threat cards show summary (type + urgency), tap to expand for details.
- Portrait orientation, playable one-handed

### Engineering Assessment

**Complexity:** Moderate-high. New systems needed:
- Asset management (inventory, cooldown, deployment)
- Threat generation (procedural from templates, scaling with turn count)
- Adversary adaptation state machine
- Asset-threat resolution logic (which combinations work against which threats)
- External event system

**Content creation cost is moderate.** Threat templates are shorter than full crisis narratives (Proposal B), and procedural generation provides variety. ~50-80 threat templates + ~20 external events would provide good variety.

**Reusable from current game:** Visual aesthetic, deployment pipeline, mobile responsiveness.

**Timeline estimate:** 5-7 weeks for MVP with core asset types and basic adversary adaptation. Full game with all assets and polish: 8-10 weeks.

### Risks

1. **Generic strategy game risk.** Without strong thematic grounding, this could feel like "tower defense with enforcement skin." Mitigation: make threats and assets hyper-specific to compute governance (not generic "investigate" but "deploy thermal satellite to scan Guangdong industrial zone").
2. **Balance complexity.** 8 asset types × 5 urgency levels × adversary adaptation creates a large balance space. Mitigation: start with 4 asset types, add others only after core is balanced.
3. **Information overload.** Multiple threats per turn, each with details, plus asset management. Mobile screens can't show everything. Mitigation: progressive disclosure (summary → tap for details), and limit to 2 simultaneous threats initially.
4. **Adversary adaptation could feel random.** If the player doesn't understand WHY threats are changing, adaptation feels unfair. Mitigation: explicit feedback ("Adversaries have adapted to satellite surveillance — targets are moving to underground facilities") so the player understands the causal link.

### Teaching Effectiveness

**Rating: Medium-high.**

The game teaches resource allocation and prioritization effectively. Players learn:
- What enforcement tools exist and what each is good for
- That enforcement is resource-constrained (you can't investigate everything)
- How adversaries adapt to specific enforcement strategies
- The importance of diversified approaches

**Weaker on:** The detailed "what does evidence look like?" question (WATCHLIST covers this better) and the "how do crises unfold?" narrative (COMPUTE CRISIS covers this better). DEADHAND is more strategic and less immersive.

**Policy relevance:** After playing, a person understands enforcement as a dynamic resource allocation problem with adversarial adaptation, not a static "can you or can't you" question. This is valuable but less granular than WATCHLIST's evidence-level teaching.

---

## Proposal D: DARK LAB

**Tagline:** Follow the leads. Find the lab. Decide when you know enough to act.

**Core teaching:** How investigations actually work — following evidence chains, managing the speed-vs-thoroughness tradeoff, and the difficulty of definitive attribution when adversaries actively work to mislead you.

### Player Fantasy

You're a Lead Investigator in ISIA's Special Investigations Unit. You take cases from initial tip-off through resolution. Each case is a mini detective story: you receive a lead, choose how to pursue it, gather evidence, follow threads, hit dead ends, and eventually must decide — do you have enough to act, or is this a dead end?

Unlike WATCHLIST (desk-based, high-volume, quick decisions), you're deep in ONE case at a time. You live with it for 10-15 decisions, build a theory, and test it.

### How It Plays

**Screen layout:**
- Top: Case header (codename, origin, days elapsed)
- Center: Current event/scene — narrative text with 2-4 investigation options
- Right sidebar (or tap-to-show): Evidence board — a simple grid showing evidence collected so far, organized by type
- Bottom: Resource indicators (time remaining, budget remaining, team morale)

**Case structure (each case is a branching narrative):**

Opening: You receive a tip/anomaly/report. Brief context sets the scene.

Each "turn" within a case:
1. You're at a decision point: what to investigate next
2. Choose from 2-4 options (each costs time and/or budget)
3. See the result: new evidence, a dead end, a complication, or a breakthrough
4. Evidence is added to your board
5. At any point, you can choose to: "Act" (recommend enforcement action based on current evidence) or "Shelve" (close the case as unsubstantiated)
6. If you Act: your evidence is evaluated — sufficient = success, insufficient = embarrassment, wrong conclusion = catastrophic error
7. If you wait too long (time runs out): the lab may complete its work

**Example case: "CODENAME: WEATHER FRONT"**

```
OPENING:
Network monitoring flags unusual encrypted traffic between three
data centers in Kazakhstan, Uzbekistan, and Kyrgyzstan. Traffic
patterns are consistent with distributed training coordination.
Each center is registered as a government weather service node.

TURN 1:
→ Request traffic analysis detail (cost: 1 day, low budget)
→ Cross-reference data center registrations with chip registry (cost: 2 days, low budget)
→ Request satellite thermal scan of all three facilities (cost: 1 day, medium budget)
→ Contact Central Asian liaison office for local information (cost: 3 days, no budget cost)

TURN 1 RESULT (if traffic analysis):
Traffic is encrypted with non-standard protocol. Volume spikes
correlate between all three facilities with ~14-minute delay —
consistent with gradient exchange in distributed training.
But: could also be synchronized weather data updates.

[Evidence added: "Correlated traffic spikes (14-min delay)"]

TURN 2:
→ Can we identify the encryption protocol? (cost: 2 days, medium budget)
→ Request power consumption data from regional utilities (cost: 3 days, diplomatic channel needed)
→ Send field agent to observe one facility (cost: 4 days, high budget)
→ ACT: Recommend challenge inspection of all three facilities
→ SHELVE: Traffic pattern is ambiguous, not enough to justify action
```

The case unfolds over 8-15 turns. Evidence accumulates on the board. Some evidence supports the theory ("These are weather stations being used for AI training"). Some evidence challenges it ("The weather data they produce is legitimate and used by national meteorological services"). Some evidence is ambiguous.

The player must weigh:
- **How much evidence is "enough"?** (Acting on strong evidence vs. waiting for certainty)
- **What kind of evidence?** (Traffic correlation is suggestive but not proof; finding undeclared GPUs is proof)
- **Time vs. thoroughness** (Every day of investigation is a day the lab operates — but premature action with weak evidence wastes credibility)
- **Investigation security** (Some investigation methods risk alerting the target — if they know you're looking, they'll destroy evidence or relocate)

### Adversary Model

Each case has a hidden "truth" (generated at case start):
- **Real threat:** The facility IS conducting illegal AI training. Evidence will accumulate if you look in the right places. But the adversary may detect your investigation and begin counter-measures (evidence destruction, relocation, legal challenges).
- **False alarm:** The facility is legitimate. Evidence will be ambiguous. Investigating further just wastes resources. The skill is knowing when to shelve.
- **Partial truth:** The facility WAS conducting illegal research but has already stopped. Evidence of past activity exists but the current threat is gone. The skill is distinguishing current from historical.
- **Sophisticated cover:** The facility has a legitimate operation and an illegal one running in parallel. Surface investigation finds legitimate work. Deeper investigation might find the hidden layer — or might not, if the cover is good enough.

Case difficulty is determined by:
- How many layers of cover the adversary has
- How much counter-investigation capability they have
- How much time pressure exists (fast-moving vs. cold case)
- How ambiguous the evidence is

### Progression & Replayability

- **Case library:** 8-12 hand-crafted cases with branching paths
- **Each case has 3-4 "truth" variants** — same opening, but the underlying reality differs. On replay, the same case might be a real threat or a false alarm, requiring different evidence evaluation.
- **Investigator skills:** As you complete cases, your investigator unlocks new tools (deep financial forensics, satellite tasking priority, recruited local informants in specific regions)
- **Difficulty tiers:** Junior Investigator (2-3 evidence types, obvious truths) → Senior Investigator (all evidence types, ambiguous truths) → Lead Investigator (adversary actively counter-investigating you)

**Estimated replayability:** Moderate. The truth-variant mechanic provides some replay value, but branching narratives are ultimately exhaustible. ~6-10 hours of content before most paths have been explored. Strongest for players who enjoy detective/mystery games.

### Loss & Win Conditions

**Per-case outcomes:**
- **Brilliant:** Correct action with strong evidence, minimal time/budget spent
- **Solid:** Correct action, sufficient evidence, reasonable cost
- **Messy:** Correct action but evidence was borderline — you got lucky
- **Fumbled:** Acted on insufficient evidence, or shelved a real threat
- **Catastrophic:** Acted wrongly (raided innocent facility) or failed to act while lab completed training

**Career progression:** Cases feed into an overall investigator rating. Higher rating = harder cases available.

### Mobile UX

Good fit:
- Narrative text + choice buttons is the most mobile-native format possible
- Evidence board can be a tap-to-show overlay (no constant screen space needed)
- One decision at a time, generous text, comfortable reading pace
- Can be played in short bursts (save at any decision point)
- Portrait orientation, one-handed

### Engineering Assessment

**Complexity:** Moderate. Systems needed:
- Branching narrative engine (state machine with evidence tracking)
- Evidence board UI
- Case generation with truth variants
- Scoring system

**The cost is content, not engineering.** Each case requires careful writing of ~30-50 event nodes across its branching tree, plus 3-4 truth variants. This is narrative design work that needs domain expertise review. For 8 cases: ~300-400 event nodes total.

**Timeline estimate:** 3-4 weeks for engine + 2 cases. Each additional case: ~1 week of writing + review. Full game (8 cases): 10-12 weeks.

### Risks

1. **Content creation is the bottleneck.** Each case needs to be written by someone who understands investigation procedures AND can write engaging prose. This is a narrow skill set. Mitigation: develop a case template system that separates domain structure from narrative prose.
2. **Pacing risk.** Detective games live or die on pacing — too many dead-end turns and the player gets bored. Mitigation: limit cases to 10-15 turns max, ensure every turn reveals something (even if it's "this lead is a dead end").
3. **Replay value ceiling.** Once you've solved all cases on all truth variants, there's nothing new. Mitigation: the truth-variant mechanic helps, but this is inherently a finite-content game. Could supplement with procedurally generated "quick cases."
4. **Difficulty calibration.** The "do I have enough evidence?" judgment is subjective. If the game's threshold feels arbitrary, players will be frustrated. Mitigation: clear evidence evaluation rubric (the game tells you how strong your evidence is, you decide whether that's enough).

### Teaching Effectiveness

**Rating: Medium-high.**

The game teaches investigation process deeply — players learn how evidence chains work, what different intelligence tools reveal, and why definitive attribution is hard. The speed-vs-thoroughness tradeoff is viscerally felt.

**Weaker on:** Breadth. Each case teaches about one enforcement scenario in depth, but the player might complete 3-4 cases and feel they understand investigation without understanding the broader enforcement ecosystem (monitoring infrastructure, resource allocation, institutional dynamics). DARK LAB is a microscope; WATCHLIST and DEADHAND are wider-angle lenses.

**Policy relevance:** After playing, a person understands that enforcement isn't "find bad guy, arrest bad guy" — it's a complex evidence-gathering process with real uncertainty, time pressure, and consequences for mistakes. This is valuable but narrower than WATCHLIST's teaching.

---

## Explored & Dismissed Concepts

### "CONTAINMENT" — Map-Based Coverage Game

**The idea:** World map with compute infrastructure. Place monitoring assets (satellite orbits, power grid taps, inspector offices) to maximize coverage. Adversaries probe for gaps.

**Why it was explored:** Visually compelling. Teaches the coverage problem directly — you can see where you're monitoring and where the gaps are. The geographic dimension of enforcement is real and important.

**Why dismissed:**
- **Mobile UX is poor.** Map games require pinch-to-zoom, precise tap placement, and enough screen space to show meaningful geography. Phone screens are too small for this to feel good.
- **Teaching is abstract.** "Place a monitoring asset on Southeast Asia" doesn't teach what that asset does or what evidence it produces. The player learns WHERE to monitor but not HOW.
- **Engineering is heavy.** Map rendering, spatial placement systems, regional mechanics, adversary pathfinding — this is substantially more complex than card-based interfaces. Estimated 6-10 weeks for MVP.
- **Replayability depends on sophisticated adversary AI.** Without it, optimal placement is solvable quickly.

**What's salvageable:** The coverage problem is real. Could be incorporated as a strategic layer in DEADHAND (choose which regions to prioritize) or as context in COMPUTE CRISIS (the crisis happens because of a gap in your coverage).

### "ANOMALY" — Pattern Recognition Arcade

**The idea:** Data streams (power readings, network traffic, chip shipment logs) scroll across the screen. Tap anomalies that indicate illegal compute. True positives score points, false positives cost credibility. Speed increases over time.

**Why it was explored:** The scale problem — legal compute vastly outnumbers illegal — is a real enforcement challenge. A reflex game could teach this viscerally.

**Why dismissed:**
- **Teaching is too shallow.** Players learn "there's a lot of data and anomalies are hard to spot" — full stop. They don't learn what to do about anomalies, how adversaries create them, or why enforcement is hard beyond information overload.
- **Not a decision game.** MIRI's goal is to inform policy discussions. Policy decisions require understanding tradeoffs, not reflex speed. An arcade game doesn't build the right kind of intuition.
- **Genre mismatch with audience.** The target audience (people discussing AI governance) is not primarily seeking arcade gameplay.

**What's salvageable:** The monitoring data visualization could be background flavor in WATCHLIST (the raw data behind evidence cards) or a mini-game tutorial in DEADHAND (practice spotting signals before deploying assets).

### "SHADOW MARKET" — Play Both Sides

**The idea:** Each turn, you alternate between enforcement (place monitors, run investigations) and adversary (evade detection, build illegal compute). You learn enforcement by also learning evasion.

**Why it was explored:** This was the most creatively novel concept. Playing both sides of the cat-and-mouse game teaches the adversarial dynamic directly. "I know enforcement is hard because I know how I would evade it" is a powerful insight.

**Why dismissed:**
- **Cognitively confusing.** Switching perspectives every turn is disorienting. Players report confusion in dual-role games unless the perspectives are clearly separated (e.g., separate screens, separate sessions).
- **Doubles the mechanic space.** You need a complete enforcement game AND a complete evasion game, with interactions between them. This is ~2x the engineering and content effort.
- **Goal confusion.** Am I trying to win as enforcement or as adversary? Both? The motivational structure is unclear.

**What's salvageable:** The "think like the adversary" insight could be a special mode in another game. For example, DEADHAND could have a "Red Team Challenge" where you play 5 turns as the adversary, trying to evade a simulated enforcement strategy. This teaches the same lesson in a contained way without the full dual-game complexity.

### "FIREWALL" — Defend ISIA From Attack

**The idea:** You're ISIA's Chief of Security. Protect monitoring systems, secure agents' identities, maintain operational integrity while adversaries try to blind, corrupt, or infiltrate your organization.

**Why it was explored:** The domain model documents real insider threats, institutional decay, and adversary attacks on enforcement infrastructure. This is a genuine enforcement challenge.

**Why dismissed:**
- **Too narrow.** This is only the defensive half of enforcement. Players learn about protecting the agency but not about detecting, investigating, or neutralizing threats. It's a necessary part of the full picture but not sufficient as a standalone game.
- **Harder to make fun.** Defensive security games tend to be reactive and frustrating ("something bad happened, now deal with it") rather than empowering ("I found the threat and stopped it").

**What's salvageable:** Defensive incidents should appear as complications in other games. DEADHAND's "cyber alert: probing detected against ISIA satellite control systems" is exactly this — a defensive challenge within an offensive enforcement game.

### "TRUST NETWORK" — Intelligence Network Management

**The idea:** Build a network of informants, partner agencies, and monitoring nodes. Each provides intelligence coverage for a region/sector. But some nodes may be compromised — feeding false intel or leaking your operations.

**Why it was explored:** The intelligence network concept is thematically rich. Trust as a depletable/corruptible resource is a powerful metaphor for institutional integrity in enforcement.

**Why dismissed:**
- **Network graph UX on mobile is poor.** Nodes and edges are too small to interact with on a phone screen. Network visualization tools (D3, etc.) are designed for desktop.
- **Too abstract without supporting narrative.** "This node is compromised" means nothing without the story of who compromised it, how, and what the consequences are.
- **Overlaps with other concepts.** The trust/compromise dynamic works better as a dimension within DEADHAND (unreliable informants) or DARK LAB (your source was compromised) than as its own game.

**What's salvageable:** The concept of trust as a corruptible resource could be a hidden variable in any of the four main proposals. Informants in DEADHAND degrade in reliability over time. Sources in DARK LAB might be adversary plants. Dossier evidence in WATCHLIST might be fabricated.

### "ESCALATION LADDER" — Multi-Level Response to Situations

**The idea:** Every enforcement situation has escalation levels: ignore → monitor → investigate → confront → raid → prosecute. Each step costs more but reveals more. The game is deciding how far to escalate.

**Why dismissed:** Overlaps almost entirely with DARK LAB (which is fundamentally about deciding how far to pursue an investigation). Not distinct enough to warrant its own game. The escalation mechanic is implicit in DARK LAB's investigation depth and DEADHAND's threat urgency levels.

### "THE VERIFICATION GAME" — International Inspection Regime

**The idea:** Nations submit declarations of their compute infrastructure. You allocate limited inspections (routine and challenge) to verify them. Some nations are lying.

**Why explored:** Inspired by IAEA nuclear inspections. The verification asymmetry (proving absence is hard) is a key enforcement concept.

**Why dismissed:** Too focused on state-level diplomacy rather than operational enforcement. Overlaps with the current Reigns-style game's political dynamics. Better suited as a layer within COMPUTE CRISIS (where inspection is one tool in a crisis response) than as a standalone game.

---

## Comparison Matrix

| Dimension | A: WATCHLIST | B: COMPUTE CRISIS | C: DEADHAND | D: DARK LAB |
|---|---|---|---|---|
| **Core metaphor** | Inspection desk | Crisis room | Command center | Detective's office |
| **Decision cadence** | Rapid (30s per case) | Medium (1-2 min per event) | Medium (30-60s per turn) | Slow (1-2 min per turn) |
| **Session length** | 4-5 min | 5-7 min | 4-5 min | 5-8 min |
| **Teaching depth** | Evidence & judgment | Crisis management | Resource allocation | Investigation process |
| **Teaching breadth** | Medium (evidence focus) | High (full crisis arc) | High (all enforcement tools) | Low (one case at a time) |
| **Evidence detail accuracy** | Highest | Medium | Medium | High |
| **Domain model coverage** | Low (no politics, no time) | Medium (crisis dynamics) | Medium (arms race) | Low (single cases) |
| **Fun archetype** | Mastery / puzzle | Narrative tension | Strategy / optimization | Discovery / mystery |
| **Replayability** | High (procedural) | Moderate (branching) | High (procedural) | Moderate (finite content) |
| **Mobile UX quality** | Excellent | Strong | Good | Excellent |
| **Engineering scope** | 4-6 weeks | 8-12 weeks | 5-7 weeks | 10-12 weeks |
| **Content creation cost** | Medium (templates) | High (hand-crafted crises) | Low (threat templates) | Highest (branching cases) |
| **Content expertise needed** | Medium | High | Low-medium | High |
| **Novel vs. derivative** | Derivative (Papers Please) | Novel | Moderate (strategy hybrid) | Moderate (detective hybrid) |
| **Emotional channel** | Methodical tension | Urgent pressure | Strategic worry | Curious discovery |

### What each teaches best

- **WATCHLIST:** "Here's what illegal compute evidence looks like, and here's why it's ambiguous." Best for building EVIDENCE LITERACY.
- **COMPUTE CRISIS:** "Here's how an enforcement crisis unfolds, and here's why speed-vs-process tradeoffs are agonizing." Best for EMOTIONAL UNDERSTANDING of enforcement difficulty.
- **DEADHAND:** "Here are the specific tools enforcement has, and here's why adversaries always find counter-strategies." Best for STRATEGIC COMPREHENSION of the enforcement arms race.
- **DARK LAB:** "Here's how you build a case from fragments, and here's why definitive attribution is hard." Best for PROCESS UNDERSTANDING of investigations.

### What each teaches least

- **WATCHLIST:** Doesn't teach strategic resource allocation or crisis dynamics
- **COMPUTE CRISIS:** Doesn't teach evidence details or day-to-day enforcement routine
- **DEADHAND:** Doesn't teach what evidence actually looks like or how investigations unfold
- **DARK LAB:** Doesn't teach broader enforcement ecosystem or resource constraints

---

## Honest Gaps — What None of These Proposals Model

Three major dimensions from the domain model are absent from ALL four proposals:

### 1. Political economy of enforcement — RESOLVED

**Design decision (confirmed by Jörn):** Political capacity is an exogenous variable — the player experiences its effects but doesn't manage it. Like weather in a farming game. Political events arrive as external shocks that constrain the player's toolkit (e.g., "challenge inspections suspended," "budget cut," "jurisdiction revoked"). This is somewhat artificial (real enforcement directors DO manage upward) but is an acceptable simplification that keeps scope tight while still teaching "enforcement depends on political conditions outside your control." Each proposal has a natural slot for these shocks — no new systems needed, just content.

### 2. Multi-decade institutional decay

The domain model's mechanisms M11-M14 (delegated oversight capture, revenue-regulation fusion, cultural capture, production pressure) describe slow rot over 5-15 years. All four proposals model sessions of days to weeks. None captures the experience of watching your institution slowly lose its edge as industry absorption, funding dependency, and internal suppression accumulate. This may be the least intuitive and most important enforcement challenge — and it's unmodeled.

A potential "Proposal E" addressing this: a long-horizon simulation where each "turn" is a year, the player makes institutional decisions (hiring, funding, inspection standards), and slow-burn decay dynamics play out over 30 turns. But this is a very different game — more like a management sim — and may not be fun. Noted here as a gap, not a recommendation.

### 3. The distributed compute starting condition

The proposals treat distributed compute as a mid-to-late-game escalation (an adversary adaptation). But the domain model suggests that by the time a pause regime operates, algorithmic progress may have ALREADY reduced the penalty for distributed training. If the lethal compute threshold has dropped, the entire "find the big GPU cluster" framing that underlies WATCHLIST's core loop could be teaching the wrong mental model. The game should at minimum acknowledge this uncertainty — perhaps through difficulty modes where the starting condition varies.

### 4. The dismissed VERIFICATION GAME

The review process flagged that the dismissed VERIFICATION GAME concept (nations submit declarations, you allocate inspections) may be closer to the domain model's most important dynamics than any of the four developed proposals. Its dismissal as "too diplomatic" may have been premature. If scope permits, it deserves development as a fifth full proposal.

---

## Recommendation

### No single proposal covers the full domain.

This must be stated upfront. The domain model describes enforcement as a system: political mandate → resources → detection → investigation → action → adversary adaptation → institutional decay → political mandate. Each proposal covers 1-2 links in this chain. WATCHLIST teaches detection judgment. COMPUTE CRISIS teaches crisis response. DEADHAND teaches resource allocation and arms race. DARK LAB teaches investigation. None teaches the full loop.

### For MIRI's stated goal ("technically accurate, inform real discussions"):

**WATCHLIST** teaches the most policy-relevant skill: evidence literacy for compute governance. After playing, a person can describe specific evidence types, articulate why distinguishing legal from illegal compute is hard, and discuss the false-positive/false-negative tradeoff. This directly informs the "can you enforce a ban?" debate.

**But:** WATCHLIST risks teaching that enforcement is primarily a desk-level pattern-recognition problem. It doesn't model political constraints, institutional decay, or the adversarial arms race at a systemic level. A MIRI reviewer should ask: "Will players walk away thinking enforcement is harder or easier than it actually is?"

### For maximum engagement and memorability:

**COMPUTE CRISIS** creates the strongest emotional connection to enforcement difficulty. The time pressure generates genuine tension. The branching narrative teaches through consequence, not just information.

**But:** Emotional resonance ≠ analytical understanding. A player might finish thinking "enforcement crises are stressful" without being able to articulate specific mechanisms that make them hard. And the content cost is the highest of any proposal.

### For fastest time-to-playable:

**DEADHAND** has the best engineering-to-content ratio and the most natural "enforcement game" feel (deploy assets, fight threats). Closest to Jörn's original vision of concrete employee counts and tactical deployment.

**But:** Highest risk of feeling generic. The adversary adaptation mechanic needs careful design to avoid degenerate strategies (see inline note). And it teaches less about specific evidence than WATCHLIST or DARK LAB.

### If I had to pick one:

**WATCHLIST**, with the evidence cross-referencing mechanic made mandatory (not optional), the time/depth tension resolved via dual-speed design (training shifts → live shifts), and an explicit acknowledgment in the game itself that inspection is only one piece of enforcement. But this is a weak recommendation — the right answer depends on what MIRI values most (evidence literacy vs. systems understanding vs. emotional engagement).

### The strongest version might be a combination:

WATCHLIST as the core loop (daily enforcement grind) + COMPUTE CRISIS scenarios that interrupt routine when a major threat is detected + DEADHAND-style asset management deciding what tools you have available for each shift. This mirrors actual enforcement work and covers more of the domain model. But it's 3 games in 1, and should only be considered after a standalone MVP ships and validates the concept.

### What I'd actually do first:

1. Paper-prototype WATCHLIST with index cards (1 day)
2. Run 5 playtesters through it, pre/post quiz on enforcement knowledge (1 day)
3. If it teaches: build WATCHLIST MVP (4-6 weeks)
4. If it doesn't teach: prototype COMPUTE CRISIS the same way before committing engineering

---

## Open Questions for Discussion

1. **Accuracy vs. fun threshold.** How technically detailed should evidence be? Real power consumption graphs vs. stylized indicators? This determines whether the game skews educational or entertaining.

2. **Adversary agency.** Should the adversary be a passive threat generator or an active opponent that "plays against" the player? Active opponents are more engaging but harder to implement and balance.

3. **Moral complexity.** Should the game include sympathetic violators (alignment researchers exceeding compute limits, developing-world researchers who can't afford compliance)? This adds depth but risks muddying the enforcement message.

4. **Connection to main game.** Should this be narratively connected to the Reigns-style game (same ISIA, shared lore) or a standalone? Shared universe reduces art/branding work but constrains design.

5. **Art direction.** The current game's dark moody portrait aesthetic works for a card-swipe game. Does it work for an inspection desk or crisis room? The mood might need to shift toward clinical/functional for WATCHLIST or tense/cinematic for COMPUTE CRISIS.
