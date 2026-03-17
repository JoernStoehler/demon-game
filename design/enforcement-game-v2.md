# Enforcement Game — Refined Concepts (v2)

**Date:** 2026-03-16
**Context:** Iteration on v1 proposals (`design/enforcement-game-proposals.md`). Incorporates review feedback, design solutions for identified weaknesses, and two key insights from the project owner.

---

## What Changed From v1

**v1 produced 4 concepts** (WATCHLIST, COMPUTE CRISIS, DEADHAND, DARK LAB) and 5 dismissed ones. Review identified 6 structural problems:

1. No concept covered the full enforcement domain model
2. Institutional decay was unmodeled
3. Distributed compute might be the starting condition, not late-game
4. WATCHLIST was too derivative of Papers Please
5. DEADHAND had a degenerate "distribute evenly" strategy
6. COMPUTE CRISIS sessions were too long

**v1's dismissed VERIFICATION GAME turned out to be the strongest seed.** The reviewer flagged it as potentially the most domain-accurate concept. Developing it fully confirmed this.

**Two owner insights reshaped the design space:**

1. **Institutional decay is emergent from delegation, not a separate mechanic.** If the player can't do everything themselves and must delegate, delegation quality degrades naturally over time — bad employees hire more bad employees, work without tight feedback loops compounds errors. This means: design a game where the player MUST delegate, and decay emerges structurally. Don't bolt on a "decay meter."

2. **Vary the starting condition.** Whether compute consolidation (registering all AI chips globally) is already completed or still in progress fundamentally changes the game. Different starting points model different phases of the enforcement challenge.

---

## Design Parameters (apply to all concepts)

### Starting Conditions

Each concept should support at least two starting conditions:

**"Day Zero"** — The treaty just took effect. Compute consolidation is in progress. Many nations haven't declared their full compute inventory. Chip registries are incomplete. Monitoring infrastructure doesn't exist yet. The early game is about BUILDING capability: getting declarations, deploying monitoring, establishing access agreements. Teaching: enforcement infrastructure takes years to build, and early political decisions about agency authority shape everything downstream.

**"Established"** — Consolidation is complete. All known AI-capable chips are registered. Monitoring infrastructure is operational. The game is about MAINTAINING enforcement against evasion, adaptation, and decay. Teaching: even with a functioning regime, enforcement requires constant effort because adversaries adapt and institutions degrade.

**"Late Treaty"** — 15+ years in. Institutional decay is already advanced. Adversaries are sophisticated. Algorithmic progress has reduced the lethal compute threshold. Detection thresholds are outdated. Hard mode. Teaching: enforcement under adverse conditions, what happens when the regime wasn't maintained.

These aren't difficulty levels — they're different phases of the same enforcement story, each teaching different lessons.

### Political Mandate

Confirmed design decision: political capacity is exogenous. The player experiences its effects but doesn't manage it.

Implementation: between turns, political events arrive as constraints. "Budget increased 15%," "Challenge inspection authority suspended pending review," "New member state joined — 3 additional declarations next quarter," "Major funder demands you deprioritize their allied state." These shape the player's options without requiring political strategy.

### Delegation as Institutional Decay

The player cannot personally handle everything. They MUST delegate most enforcement work. The game's institutional quality depends on the quality of delegated work, which degrades over time unless the player invests attention in oversight.

Implementation: the player has a limited "personal attention" budget per turn (e.g., 1-2 actions they do themselves with full quality). Everything else is delegated to staff.

**Critical design rule: decay must be OPAQUE.** The player should NOT see a "staff quality: 73%" meter. Real institutional decay is invisible, deniable, and self-reinforcing — directors don't know their false-negative rate has risen. Instead, decay manifests as hidden failure modes that activate stochastically:
- "Your analyst dismissed a credible signal as noise" (the player sees the signal disappear, but doesn't know whether it was actually noise or a missed threat — until the year-end reveal)
- "Your inspector missed a discrepancy at a declared facility" (the inspection returns clean results, but the facility was actually violating)
- "Your informant was compromised 2 quarters ago and has been feeding you fabricated tips" (retroactive revelation)

The player notices that delegated results seem to be getting worse — more surprises at year-end, more missed threats — but can't see the exact number. They can spend personal actions on "audit" to DISCOVER specific failure modes (not a clean reset, but a partial reveal: "Your Singapore analyst team has been approving facilities without full evidence review for 6 months"). Fixing discovered problems takes time and has side effects (the audited team resents the scrutiny, morale drops, one analyst quits).

This creates a natural tension: direct enforcement vs. institutional maintenance. Early game: delegation works fine. Mid game: suspicious patterns emerge, player starts auditing. Late game: auditing reveals how bad things are, fixing requires diverting significant capacity from operations. The decay EMERGED from delegation and remained invisible until actively investigated — matching the real dynamic.

### The Threshold Problem

Algorithmic progress reduces the lethal compute threshold over time. Early game: only 50,000+ GPU clusters are dangerous (easy to detect — thermal signature, power draw). Mid game: 5,000 GPU clusters become sufficient (harder to detect). Late game: 500 GPUs across 50 locations become sufficient (nearly impossible to detect with physical monitoring).

Implementation: a visible "frontier compute requirement" ticker that drops over time. When it drops, the player's detection tools become less effective (thermal satellites can't see 10-GPU clusters) and must shift to different tools (financial forensics, informant networks, network traffic analysis). The player experiences the shrinking window directly.

---

## Concept: INSPECTION

**Tagline:** They all say they're compliant. Decide who to believe and where to look.

**Elevator pitch:** Each turn is a quarter. Treaty members submit declarations of their compute infrastructure. You allocate limited inspection capacity to verify them. Some are truthful, some lie, some are truthful about what they know while their agencies operate independently. You can't inspect everyone — choose where your limited attention goes.

### Why This Is the Strongest Concept

The VERIFICATION GAME was dismissed in v1 as "too diplomatic." That was wrong. The core activity — deciding where to allocate scarce verification resources under adversarial uncertainty — is the most important operational decision an enforcement agency makes. It's not diplomatic; it's the heart of enforcement.

INSPECTION directly models the domain model's most critical dynamics:
- **Declared-vs-undeclared blindness (M1):** Routine inspections only see declared facilities. The most dangerous violations are undeclared. You need challenge inspections or intelligence to find them.
- **Incremental disclosure (M2):** When caught, violators admit a small fraction. "200 undeclared chips, an oversight." The real program is 20,000 chips.
- **Willful ignorance (M16):** Some nations design their monitoring to be just bad enough to miss violations. When confronted: "We had no knowledge."
- **Delayed noncompliance response (M8):** Violation found, evidence sent to Council, but allies slow-walk the response while the violator completes their training run.

### Player Fantasy

You are the Director of Verification. 12-16 treaty member states submit quarterly declarations. You have a small team and limited tools. Your job: figure out who's lying, using the information available — declaration patterns, intelligence reports, inspection results, behavioral signals.

You cannot inspect everyone. You cannot even inspect most. The quarterly allocation decision — where to send your 3-4 routine inspections, whether to spend your rare challenge inspection, where to point the satellite — IS the game.

### How It Plays

**Screen layout:**
- Top bar: Quarter/year, inspection budget (3 routine, 1 challenge, 2 satellite passes, 1 personal inspection slot)
- Main area: Country cards in a scrollable list, each showing: flag, declared compute total, compliance history (green/yellow/red), intelligence flag (if any)
- Bottom: "End Quarter" button (finalizes allocations and shows results)

**Turn structure (one quarter, ~30-45 seconds):**

**1. Declarations arrive.**
12-16 country cards appear. Each shows:
- Declared AI-capable chip count
- Declared facility count and locations
- Compliance history dots (based on your past inspection results)
- Intelligence flag (icon indicating you have outside info — satellite anomaly, informant tip, financial trace)

**2. Allocate inspections.**
Tap a country → choose inspection type:
- **Routine inspection** (3-4 per quarter): Checks declared facilities. Verifies declared hardware counts. Will FIND discrepancies at declared sites but will MISS entirely undeclared facilities. This is the Iraq/IAEA problem — inspectors visited declared sites and found nothing, because the enrichment was in adjacent buildings they weren't authorized to enter.
- **Challenge inspection** (0-1 per quarter, costs diplomatic capital): Can access ANY location, including undeclared ones. Finds violations that routine inspections miss. But: politically expensive (the inspected country objects, allies may push back, uses diplomatic capital that doesn't regenerate quickly).
- **Satellite pass** (2 per quarter): Remote thermal/power scan of a region. Can detect large undeclared clusters but not small or underground ones. Results are suggestive, not conclusive — provides intelligence flags for future quarters.

**3. Personal inspection (1 per quarter).**
For ONE of your allocated inspections, you do it yourself. This triggers a mini evidence-evaluation sequence:
- 3-4 evidence cards appear (chip count discrepancy, thermal scan result, personnel profile, financial trace)
- Tap to examine each
- Cross-reference: evidence cards have confidence levels that change based on what other cards show
- Your personal assessment is more accurate than delegated inspections (~95% vs staff's ~80% degrading)

All other inspections are handled by staff (results appear as one-line summaries: "No discrepancies found" or "Discrepancy: 3,600 chips above declared").

**4. Results & Consequences.**
After allocating, tap "End Quarter." Results appear:
- Inspection results (per-country, brief)
- Any violations found → response decision: "Report to Council" (visible and legitimate, but takes **2-4 quarters** — during which the violator may complete their run, destroy evidence, or file a counter-complaint — this is the M8 delayed-response dynamic that cost 3 years in the Iran case) or "Negotiate quietly" (faster, bilateral, but no public deterrent and violator may not comply) or "Emergency unilateral action" (immediate, effective, but massive diplomatic cost — may trigger allied backlash or treaty withdrawal threats)
- Any missed violations → NOT shown yet (you don't know what you missed — this is the point)
- Between-quarter events: political shocks, adversary adaptation, intelligence reports

**Each quarter, immediate results appear** for the inspections you conducted that quarter. No waiting.

**Between quarters, partial hints emerge** about what you may be missing — creating an ongoing feedback loop rather than waiting for a big annual reveal:
- "Intelligence report: satellite thermal analysis shows unusual readings in a region you haven't recently inspected" (ambiguous — might be nothing, might be a growing violation)
- "Diplomatic chatter: Country X's trade representative made unusual inquiries about chip import procedures" (behavioral signal)
- "Media report: former researcher publishes paper with results that imply access to undeclared compute resources" (indirect evidence)

These hints don't tell the player what to do — they create unease about what's happening in the countries they're NOT looking at. The player must decide whether to shift inspection capacity based on weak signals.

**At year-end (every 4 quarters):** A "Year in Review" screen reveals the FULL picture:
- What you caught (confirmed violations)
- What you MISSED (violations that were occurring in countries you didn't inspect — the teaching gut-punch)
- How missed violations evolved (some grew, some self-terminated, some completed training runs)
- Institutional health (any delegation failures that emerged)
- How the threat landscape changed

The year-end reveal CONFIRMS what the between-quarter hints were suggesting. The player learns to read the hints as early warning signals. Over multiple years, they get better at detecting patterns that predict hidden violations — a genuine strategic skill.

### Delegation & Institutional Decay

The player does 1 personal inspection per quarter. The other 3-4 routine inspections are delegated to staff. Staff handle them with results reported as one-line summaries.

**Decay is opaque.** There is no visible staff quality meter. Instead, hidden failure modes activate stochastically over time:
- A delegated inspection returns "No discrepancies found" — but the inspector actually missed a violation because they've developed a working relationship with the facility manager
- A delegated inspection flags a "minor paperwork discrepancy" — but the inspector didn't push hard enough to discover the 3,000 undeclared chips in the basement
- An informant tip is dismissed by staff as unreliable — but the informant was actually credible

The player notices problems indirectly: the year-end reveal shows more missed violations in inspected countries. Between-quarter hints suggest things are happening in countries that got clean inspection results. Something feels wrong, but the player can't see a number to diagnose it.

The player can spend their personal inspection slot on **"Staff Audit"** instead of inspecting a country. An audit doesn't give a clean percentage — it reveals specific problems: "Your Southeast Asia inspection team has been accepting facility self-tours instead of conducting independent walkthroughs for the past 3 quarters." Fixing the problem takes 1-2 more quarters of reduced capacity (retraining, personnel changes), and the audited team may push back (morale effects, one analyst quits). It's costly, messy, and necessary.

This naturally models:
- **Delegated oversight capture (M11):** Staff inspectors gradually adopt facility perspectives
- **Cultural capture (M13):** Staff start seeing violators as colleagues under unfortunate constraints
- **Production pressure (M14):** Staff report clean results to avoid the complications of finding violations

The tradeoff: direct enforcement (inspect countries) vs. institutional maintenance (audit staff). Early game: delegation works fine, no need to audit. By Year 3-4: the player starts getting surprised by year-end reveals. By Year 5+: must invest significant capacity in institutional maintenance or accept degraded performance.

### Adversary Model

Countries have hidden states:
- **Compliant:** Truthful declarations, no violations. Inspecting them wastes capacity.
- **Minor violator:** Slightly under-declaring (e.g., 95% of chips declared). Routine inspection MIGHT catch the discrepancy if staff quality is high enough.
- **Major violator with declared cover:** Running illegal training at declared facilities alongside legitimate work. Routine inspection might catch it; personal inspection likely catches it.
- **Major violator with undeclared facility:** The dangerous case. Routine inspection finds nothing (wrong location). Only challenge inspection or intelligence-driven investigation can find it.
- **Willful ignorance state:** Not actively violating, but monitoring is designed to miss violations by domestic actors. Self-reporting is technically accurate about what they "know."

Country states can change between quarters based on events, adversary adaptation, and consequences of your inspections.

**Adversary adaptation:** After successful inspections, violators adapt:
- Move operations to undeclared facilities (routine inspections become useless for them)
- Improve documentation quality (harder to spot discrepancies)
- Distribute training across multiple smaller clusters (each below detection threshold)
- Coordinate diplomatic pressure to reduce challenge inspection authority

### Loss & Win Conditions

**Loss:**
- Any undetected violation achieves frontier capability (the training run completed while you weren't looking)
- Diplomatic capital exhausted (too many false challenge inspections — you lose the authority to do them)
- Treaty dissolution (3+ countries withdraw after perceived overreach or perceived failure)

**Win:**
- Reach Year 10 with no undetected frontier achievement and treaty intact
- Score: detection rate, diplomatic capital remaining, institutional health, efficient use of inspection capacity

### Session Length

40 quarters (10 years). At 30-45 seconds per quarter: **5-7 minutes per session.**

Turn-based with auto-save — player can stop after any quarter and resume later. In practice, many sessions will be shorter (player quits after a loss or after completing a scenario arc).

### Starting Conditions

- **"Day Zero":** Fewer initial declarations (some nations haven't joined yet). No compliance history. No intelligence flags. You're building the system. Early quarters: get countries to declare, deploy initial monitoring. Teaching: the cold-start problem.
- **"Established":** Full declarations, 3 years of compliance history, intelligence network operational. You're maintaining. Teaching: the ongoing verification challenge.
- **"Late Treaty":** Staff quality starts at 55% (decay already happened). Several intelligence flags. Adversaries are sophisticated. Political capital is low. Teaching: enforcement under adverse conditions.

### Engineering Assessment

**Complexity:** Moderate. Systems needed:
- Country state machine (compliant / types of violation)
- Declaration generation
- Inspection allocation UI
- Mini evidence-evaluation sequence (for personal inspections)
- Staff quality degradation
- Year-end reveal system

**Content cost:** Low-moderate. Countries and declarations are procedurally generated. The evidence evaluation mini-game reuses templates. The main content need is varied year-end reveal narratives and political event text.

**Timeline:** 5-7 weeks for MVP. Content expansion is incremental.

**Replayability:** High. Country states are randomized each playthrough. Different starting conditions provide variety. The strategic allocation skill has a genuine mastery curve (learning which signals predict violations).

### What This Teaches

After 3-5 sessions, a player can articulate:
1. The verification asymmetry (proving absence is harder than proving presence)
2. Why routine inspections miss the most dangerous violations (declared-vs-undeclared blindness)
3. Why challenge inspections are necessary but politically costly
4. How institutional quality degrades through delegation without oversight
5. How adversaries adapt to inspection patterns
6. Why you can't "just inspect everyone" (resource constraints)
7. How algorithmic progress erodes detection capability over time

This covers more of the domain model than any v1 proposal.

---

## Concept: SIGNAL

**Tagline:** Alerts are streaming in. Deploy your assets. Find the threat before it finds you.

**Elevator pitch:** You're the operations commander. Monitoring systems generate alerts — thermal anomalies, suspicious shipments, informant tips, network traffic spikes. You dispatch specific enforcement assets (satellites, analysts, field agents, raid teams, cyber teams) to investigate. Each asset reveals different information. Some alerts are real threats, most are noise. Find the real ones before they finish their training runs.

### Why This Concept

This is what Jorn originally envisioned: "direct a thermal satellite," "send a police raid," "hack into surveillance cameras," with concrete employee counts. It's the most operational and tactile concept — the player IS the enforcement mechanism, not the person deciding where to point it (that's INSPECTION) or the person evaluating its results (that's WATCHLIST).

SIGNAL is a refined version of v1's DEADHAND, with two critical fixes:
1. **Raw signals replace pre-categorized threats.** DEADHAND presented threats with urgency levels already assigned. SIGNAL presents raw monitoring data that the player must assess. This adds the evidence-evaluation dimension DEADHAND was missing.
2. **Typed asset requirements replace symmetric adaptation.** Instead of "adversaries counter your most-used asset" (creating a degenerate "distribute evenly" strategy), threats have specific vulnerability profiles that require specific asset types. Adaptation shifts the THREAT MIX, not asset effectiveness.

### Player Fantasy

Your desk is a dashboard. Monitoring systems feed you a constant stream of signals. Most are noise — a factory's power spike that turned out to be air conditioning, a chip shipment that went to a legitimate buyer, an informant tip from someone with an axe to grind. But somewhere in the noise are real threats: undeclared compute clusters, chip diversions, distributed training networks.

You have a toolkit of specific enforcement assets, each with concrete capabilities:

| Asset | Count | Cooldown | What it does |
|---|---|---|---|
| Thermal satellite pass | 2 | 1 turn | Scans a location for heat signatures consistent with GPU clusters. Detects centralized clusters > 5,000 GPUs. Cannot see underground or well-cooled facilities. |
| Chip tracer query | 1 | 1 turn | Traces a specific chip batch through the supply chain. Shows where chips were sold, shipped, and installed. Reveals chain of custody gaps. |
| Analyst team | 3 | 1 turn | Evaluates a signal's credibility. Cross-references with existing intelligence. Returns: "credible," "ambiguous," "likely noise," or "high confidence threat." |
| Field agent | 3 | 2 turns | Deploys to a location for covert observation. Reports: facility activity level, vehicle traffic, security posture, personnel. Takes 2 turns (deploy + report). |
| Raid squad | 1 | 3 turns | Executes enforcement action. Seizes hardware, arrests operators. If target is real: major success. If target is innocent: credibility disaster. Must have prior evidence to justify. |
| Cyber team | 1 | 2 turns | Monitors digital infrastructure. Detects encrypted traffic patterns, command-and-control channels, distributed training coordination. Politically sensitive (requires authorization). |

### How It Plays

**Screen layout:**
- Top: Asset roster (icons with counts and cooldown indicators)
- Center: Signal feed (1-3 new signals per turn, plus ongoing investigations)
- Bottom: Turn counter, credibility meter, threat level

**Turn structure (~20-30 seconds per turn, 20-25 turns per session):**

**1. New signals arrive (1-3).**
Each signal is a card showing:
- Source icon: which monitoring system generated it (satellite, power grid, informant, network, financial)
- Location: rough geographic area
- Raw data: 2-3 sentences describing what was observed — factual, no interpretation

**No pre-labeled confidence levels.** The player assesses signal quality themselves, based on the raw data. This is the core skill: learning what makes a signal credible through experience, not through reading a label.

Example signals:
- "SATELLITE: Thermal anomaly in industrial zone outside Lagos. Elevated heat signature over 200m x 80m area. Cloud cover partially obscured the scan. Adjacent to a declared steel processing plant."
- "INFORMANT: Former employee of Horizon AI reports training experiments at an undisclosed second campus in Ireland. Source left the company 8 months ago after a workplace dispute."
- "FINANCIAL: Entity 'Evergreen Compute Solutions' registered in Singapore 4 months ago. Purchased 2,200 H100 GPUs from a Taiwanese distributor. No public website, no known customers, single director."
- "NETWORK: Encrypted peer-to-peer traffic between residential ISPs in 12 German cities. Packet timing shows coordinated bursts every 14 minutes. Total bandwidth consistent with gradient exchange for ~500 GPUs."

The player must develop intuition: satellite signals near declared industrial plants are often false alarms. Informants with grudges are less reliable but not worthless. Shell companies buying chips with no visible business are always worth tracing. Coordinated 14-minute burst patterns are a strong distributed-training indicator. This intuition develops over sessions — a genuine mastery curve.

**2. Dispatch assets.**
For each signal (or ongoing investigation), tap an available asset to assign it. Investigation chains emerge naturally:
- Suspicious thermal anomaly → assign analyst to cross-reference with power data → if elevated → send field agent → if confirmed → raid
- Informant tip → assign analyst to background-check the source → if plausible → assign cyber team to monitor facility traffic → if suspicious → field agent
- Financial trace → assign chip tracer to follow the hardware → destination found → assign field agent → if confirmed → raid

Not all signals warrant investigation. Ignoring ambiguous signals is often correct — but which signals are "ambiguous" is the player's judgment, not a label.

**3. Results of previously dispatched assets.**
Assets deployed in prior turns report back:
- "Analyst assessment: Lagos thermal anomaly is CREDIBLE. Heat signature is consistent with GPU cluster, not industrial process. Recommend field agent deployment."
- "Field agent report: Horizon AI secondary campus has heavy security, restricted access, delivery trucks arriving at night. Construction of additional cooling infrastructure observed."
- "Chip tracer: Evergreen Compute Solutions' H100s were shipped to a warehouse in Dubai Free Trade Zone. Warehouse is rented by a company registered in the Cayman Islands. No further chain of custody available."

**4. Response decisions.**
For confirmed threats (sufficient evidence accumulated through multi-turn investigation):
- **Raid:** Deploy raid squad (uses it for 3 turns). If evidence is strong → success (hardware seized, +credibility). If evidence is weak → embarrassment (-credibility, -diplomatic capital). Immediate resolution.
- **Refer to Council:** Preserves credibility and diplomatic relationships. But: the Council process takes **3-5 turns**. During that time, allies may slow-walk ("requesting further evidence"), the violator may complete their training run, or evidence may be destroyed. This is the M8 dynamic — the single most important enforcement failure mode in arms control history (Iran: 3 years between evidence and Security Council referral). The player experiences the agonizing wait: their evidence is strong, but action is delayed by institutional process while the threat grows.
- **Continue monitoring:** Gathers more evidence but target may detect your surveillance and destroy evidence, or complete their training run. Time is not on your side.

The Council referral delay is the game's most important teaching moment. Players who always refer (politically safe) will watch threats complete while committees debate. Players who always raid (operationally effective) will burn credibility on insufficient evidence. The right answer changes case by case.

### Delegation & Institutional Decay

The player dispatches assets — but asset quality is opaque and degrades over time. There are no quality meters.

Degradation manifests as:
- An analyst dismisses a signal that later turns out to be a real threat. You see the signal disappear from your feed. Turns later, you discover the threat through other means — or at session end.
- A field agent reports "facility appears inactive" for a location where a violation was actually in progress. You trusted the report and moved on.
- An informant tip turns out to be fabricated — the source was turned 3 turns ago and has been feeding you disinformation.

The player notices problems through OUTCOMES, not through numbers. Signals that should have been flagged weren't. Investigations that should have found something came back clean. Tips that seemed credible led nowhere.

The player can spend asset-turns on MAINTENANCE instead of operations:
- Assign analyst team to "internal review" instead of signal evaluation → may reveal specific problems ("Analyst Chen has been dismissing all network-traffic signals as noise for the past 4 turns — she believes distributed training is a theoretical concern, not a real threat")
- Assign field agent to "counter-intelligence sweep" → may identify compromised agents
- Use personal attention (1 per turn) on "informant network review" → may discover turned sources

Maintenance actions reveal problems but don't instantly fix them. Fixing takes time and has costs (staff resentment, temporary capacity loss from retraining/replacement).

Same tradeoff as INSPECTION: maintain your tools or use your tools. Can't do both. And you can't see the problem until you look for it.

### Adversary Evolution

**Key design decision: adversaries evolve based on TECHNOLOGY, not based on the player's strategy.**

Real adversaries don't know your internal resource allocation. They pursue the best available evasion strategy regardless of what you're doing. The threat landscape evolves because of technological progress and adversary capability development, not as a direct counter to your enforcement choices.

**Turn 1-8 (Early):** Centralized clusters dominate. Adversaries use large GPU farms because that's what works for frontier training. Satellite and power monitoring are your best tools.

**Turn 9-14 (Mid):** Distributed training becomes viable (algorithmic progress). Some adversaries shift to multi-location clusters. Network traffic analysis and financial forensics become important. Satellite signals decrease not because you used satellites, but because adversaries found a better method.

**Turn 15-20 (Late):** Distributed training is dominant. Consumer hardware contributes. Novel architectures (neuromorphic, optical) start appearing. Physical detection tools (satellites, power monitoring) are nearly obsolete for new threats. Informants, financial forensics, and network analysis are essential.

**Turn 21-25 (Crisis):** The frontier compute threshold has dropped below reliable physical detection. Behavioral signals (researcher recruitment, encrypted group formation, unusual financial patterns) are the main detection avenue. Old tools still catch legacy centralized operations but miss the cutting edge.

**Your choices determine how EFFECTIVE you are against the evolving landscape, not what the landscape looks like.** A player who invested heavily in satellites early has great detection for turns 1-8 but faces a capability gap at turn 9 when threats shift to distributed. A player who invested early in network analysis was suboptimal for turns 1-8 but well-positioned for 9-14. There's no degenerate "distribute evenly" strategy because the optimal allocation changes over time in ways the player must anticipate.

**Occasional adversary-specific adaptation does occur**, but as discrete events rather than a smooth counter-mechanic: "ALERT: Following your raid on the Lagos facility, three other known clusters in West Africa went dark simultaneously — operators apparently had a coordinated evacuation plan." These events are narrative, not systematic — they create surprise and teach that adversaries learn from enforcement actions, without creating a gameable counter-pattern.

### The Threshold Problem

A visible ticker shows "Estimated frontier compute requirement" dropping over time.

- Turns 1-8: 50,000+ GPUs needed → thermal satellites can reliably detect clusters this large
- Turns 9-14: 10,000+ GPUs → satellites still useful but miss more, power grid monitoring becomes important
- Turns 15-20: 2,000+ GPUs → satellites nearly useless, must rely on chip tracing, financial forensics, informants
- Turns 21-25: 500+ GPUs distributed → only network analysis and human intelligence can detect

The player watches their primary tools become obsolete and must build capability in new areas before the old tools stop working. Teaching: enforcement must evolve as technology evolves, and the window for physical detection methods is closing.

### Loss & Win Conditions

**Loss:**
- Undetected threat completes training run (a signal you ignored or a threat in an unmonitored area achieves frontier capability)
- Credibility collapse (3+ false raids → mandate withdrawn)
- Asset depletion (institutional decay + adversary targeting of your assets → insufficient capacity to operate)

**Win:**
- Survive 25 turns with no undetected frontier achievement
- Score: true positive rate, false positive rate, efficiency (threats neutralized per asset-turn), adaptation score (how well you shifted strategy as threats evolved)

### Session Length

20-25 turns at ~20-30 seconds per turn: **5-8 minutes per session.**

Each turn is quick: read 1-3 signal cards, dispatch 1-3 assets, read 1-3 results, make 0-1 response decisions. The pacing is brisk and constant — there's always something to do.

### Starting Conditions

- **"Day Zero":** Few monitoring systems online. Only satellite and informant signals. Must build up analyst teams, field agents, cyber team through early budget allocation. Teaching: standing up an enforcement operation from scratch.
- **"Established":** Full asset roster, signal flow is steady. Game is about triage and investigation. Teaching: operational enforcement day-to-day.
- **"Late Treaty":** Asset quality degraded, threshold has dropped, adversaries are sophisticated. Signals are noisy, assets are unreliable. Teaching: enforcement under adverse conditions.

### Engineering Assessment

**Complexity:** Moderate. Systems needed:
- Signal generation (procedural from templates based on turn count, adaptation state, threshold)
- Asset management (inventory, cooldown, quality degradation)
- Multi-turn investigation tracking (signal → analysis → field work → resolution)
- Adversary adaptation state machine
- Threshold ticker

**Content cost:** Low. Signal templates are short (2-3 sentences + metadata). Procedural generation provides variety. ~60-80 signal templates + ~20 result templates + ~15 event templates = sufficient for high replayability.

**Timeline:** 5-7 weeks for MVP. Content expansion is cheap — add signal templates.

**Replayability:** High. Procedural signals, adversary adaptation, threshold progression, and randomized starting conditions create genuinely different runs. Strong mastery curve (learning which signals to prioritize, when to commit assets, how to manage decay).

### What This Teaches

After 3-5 sessions, a player can:
1. Name specific enforcement tools and what each detects (thermal satellites → centralized clusters; chip tracers → supply chain diversions; network analysis → distributed training)
2. Explain why most signals are noise and how to triage
3. Describe how adversaries adapt to enforcement methods
4. Articulate why detection gets harder as technology advances (threshold drop)
5. Explain why institutional maintenance competes with operational enforcement

---

## How INSPECTION and SIGNAL Relate

They're complementary — different zoom levels on the same problem:

| | INSPECTION | SIGNAL |
|---|---|---|
| Zoom level | Strategic (where to look) | Operational (what to do with alerts) |
| Time per turn | 1 quarter | 1 week |
| Core decision | Where to allocate verification capacity | How to investigate specific signals |
| Evidence interaction | Brief (personal inspection only) | Deep (every signal requires assessment) |
| Delegation focus | Inspection quality | Asset quality |
| Adversary model | Countries that may lie | Threats that may evade |
| Teaching emphasis | Verification asymmetry, inspection politics | Tool capabilities, triage, arms race |

**Combined concept ("ENFORCEMENT"):** INSPECTION provides the strategic layer (quarterly allocation), SIGNAL provides the operational layer (within-quarter signal processing). Each quarter: allocate inspections (INSPECTION), then process operational signals with available assets (SIGNAL). This covers both strategic and operational enforcement but doubles the session length. Best suited for a "1-year-per-session" format with meta-progression between sessions.

**Standalone:** Either works as a complete game. INSPECTION teaches the strategic challenge; SIGNAL teaches the operational challenge. A player who plays both understands enforcement at both levels.

---

## Comparison: All Concepts

### v1 proposals (original 4)

| | Strongest element | Fatal weakness | Salvageable? |
|---|---|---|---|
| WATCHLIST | Evidence literacy | Papers Please derivative, no temporal dimension | Cross-referencing mechanic → fold into INSPECTION's personal inspection phase |
| COMPUTE CRISIS | Emotional engagement | Too long, too expensive, limited replayability | Flash crisis format (7 decisions) → fold into SIGNAL as special events |
| DEADHAND | Tactical deployment feel | Degenerate strategy, generic feel | Concrete assets → evolved into SIGNAL |
| DARK LAB | Investigation depth | Lowest replayability, highest content cost | Investigation sequences → fold into SIGNAL as multi-turn investigations |

### v2 concepts (new 2)

| | INSPECTION | SIGNAL |
|---|---|---|
| Core mechanic | Allocate verification capacity across countries | Dispatch enforcement assets to investigate signals |
| Domain model coverage | Verification asymmetry (M1), incremental disclosure (M2), willful ignorance (M16), delayed response (M8), institutional decay (M11-M14) | Detection capabilities, delayed response (M8, Council referral delay), threshold erosion (D7/D10), technology-driven evolution |
| Session length | 5-7 min (10 years of quarters) | 5-8 min (25 turns of operations) |
| Replayability | High (procedural country states) | High (procedural signals + adaptation) |
| Delegation decay | Inspection quality degrades | Asset quality degrades |
| Fun type | Strategic deduction ("who's lying?") | Tactical urgency ("which signal is real?") |
| Engineering | 5-7 weeks | 5-7 weeks |
| Content cost | Low-moderate | Low |
| Mobile UX | Good (tap to allocate) | Good (tap to dispatch) |

### Teaching coverage across concepts

| Teaching goal | INSPECTION | SIGNAL | Both |
|---|---|---|---|
| Specific enforcement tools exist | Partial (inspection types) | Strong (6 asset types) | Full |
| Distinguishing legal from illegal compute | Strong (personal inspection evidence) | Strong (signal assessment) | Full |
| Verification asymmetry | Strong (declared-vs-undeclared) | Weak | Strong |
| Adversary evolution | Medium (countries adapt) | Strong (technology-driven threat evolution) | Full |
| Institutional decay | Strong (delegation quality) | Strong (asset quality) | Full |
| Political constraints on enforcement | Strong (challenge inspection cost) | Medium (external events) | Full |
| Technology erodes detection | Medium (threshold ticker) | Strong (tools become obsolete) | Full |
| Resource scarcity | Strong (limited inspections) | Strong (limited assets + cooldowns) | Full |

---

## Dismissed New Concepts (explored during iteration)

### "MANDATE" (Full synthesis — 3-phase turns)

A synthesis concept where each turn = 1 year, with three phases: Allocate (DEADHAND), Verify (INSPECTION), Respond (COMPUTE CRISIS). Covers the full domain model in one game.

**Why dismissed:** Three phases per turn is too much mechanical complexity for a mobile game. Players must learn three interaction patterns. Each phase gets compressed to the point where it loses depth. The combined session length (15-20 minutes for 30 years) is too long for casual play. The 1-year-per-session variant works but requires heavy meta-progression infrastructure.

**What survived:** The insight that a single game CAN cover the full domain model. INSPECTION + SIGNAL together achieve this with two simpler games rather than one complex one.

### "SHIFT COMMANDER" (Delegation-focused management)

Player has 5 personal actions per week. Everything not personally handled is delegated. Quality of delegation IS the game.

**Why dismissed:** Too focused on management, not enough on enforcement operations. The player spends more time managing staff quality than doing enforcement work. Loses the "direct a satellite, send a raid" feel.

### "COMPUTE TRACE" (Supply chain tracking)

Follow a chip batch from TSMC through the supply chain. Monitor checkpoints, catch diversions.

**Why dismissed:** Too narrow — only teaches supply chain dimension. Good as a tutorial level or mini-game within SIGNAL, not a standalone game.

### "THE AUDIT" (Institutional quality management)

Each session: audit one aspect of ISIA's operations. Find problems, allocate reform capacity.

**Why dismissed:** Pure management, no enforcement operations. Players learn about institutional dynamics but not about detection, investigation, or enforcement actions.

---

## Recommendation

### If building one game:

This is genuinely close. Two candidates:

**INSPECTION is the stronger design.** Its core mechanic (allocate scarce verification capacity under adversarial uncertainty) is more original — there are few games about verification resource allocation. It teaches the STRUCTURAL reasons enforcement is hard (verification asymmetry, declared-vs-undeclared blindness, political cost of challenge inspections) which is more valuable for the target audience. A person who plays INSPECTION understands WHY enforcement is hard. It directly addresses the "you can't enforce a compute ban" objection.

**SIGNAL is the more immediately engaging game.** Constant signal stream, tactical asset dispatch, investigation chains resolving over multiple turns. It teaches HOW enforcement operations work — specific tools, signal assessment, the triage challenge. It's closer to Jorn's original vision ("direct a satellite, send a raid"). And it has lower content cost (procedural signals are cheap; procedural country declarations need more careful design).

**Honest recommendation:** INSPECTION for the stated audience (people debating enforcement feasibility). SIGNAL for a broader gaming audience. If forced to pick one: INSPECTION, because its teaching is more unique and harder to get elsewhere.

### If building two games: INSPECTION + SIGNAL.

Together they cover nearly the entire domain model — INSPECTION teaches strategic verification, SIGNAL teaches operational enforcement.

Build order depends on priority:
- **Teaching-first:** INSPECTION first (more unique teaching), SIGNAL second
- **Engagement-first:** SIGNAL first (lower content cost, faster to fun), INSPECTION second

### Validation plan:

1. Paper-prototype the chosen concept with index cards and tokens. Run 5-10 playtesters. Pre/post quiz: "Describe three enforcement mechanisms for a compute ban" and "Name two reasons enforcement is hard."
2. If it teaches: build MVP (5-7 weeks)
3. Playtest MVP with target audience (x-risk community, policy researchers)
4. Iterate based on feedback, then consider the companion game

### What neither game teaches (and whether it matters):

- **The political economy of enforcement** — externalized by design. The current Reigns-style game handles this. The two games together (Reigns for politics, SIGNAL/INSPECTION for enforcement) provide complete coverage.
- **Safety research dynamics** — not enforcement. Handled by the Reigns game.
- **The 30-year institutional arc as a lived experience** — decay is modeled within sessions but the full career arc (early optimism → mid grind → late crisis) would require either a very long session or meta-progression across many sessions. Worth considering as a "career mode" if the core game validates.
