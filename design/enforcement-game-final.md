# WATCHPOINT — Enforcement Game Final Concept

## Why This Concept Maximizes the Teaching Goal

The project goal: after playing, a zero-knowledge person understands what enforcement tools exist, how adversaries evade them, why enforcement degrades over time, and why the outcome is uncertain.

Every prior concept in this design space failed at the same junction: they tried to teach the full enforcement domain model through a single interaction pattern. Card-flow (THE BRIEF) puts everything in text and can't show systems visually. Spatial (CHAINWATCH) shows the supply chain but can't teach institutional dynamics. Both assume the player arrives with a mental model that the game is supposed to build.

WATCHPOINT solves this with two structural innovations:

**1. The mechanic is a monitoring dashboard where the player deploys, reads, and trusts (or doubts) their own instruments.** The player's core action is placing monitoring tools on a schematic, reading the signals those tools produce, and deciding what to do about them. This is inherently both spatial (where you place tools determines what you see) and informational (the signals are text that teaches domain concepts). The spatial and textual layers are fused, not alternated.

**2. Progressive complexity unfolds the domain model in teaching order.** Session 1 teaches "what is compute, why does it need monitoring." Session 3 teaches "adversaries route around your coverage." Session 10 teaches "your own instruments are lying to you." Each concept builds on the previous one. The player never faces a concept they lack the vocabulary to understand, because the game built that vocabulary through prior play.

The result: every player decision IS a domain lesson. Placing a satellite teaches what satellites detect. Seeing a smuggling route bypass your monitor teaches evasion. Watching an inspector's reports become unreliable teaches institutional decay. The hardest-to-teach concept (institutional decay) gets the most mechanical investment: the player's own tools visually degrade, and the player must choose between using degraded instruments and spending capacity to repair them.

### What prior concepts got right (and what WATCHPOINT keeps)

- **From THE BRIEF (v3):** Tool-threat matching as the core decision. The player learns enforcement by deploying enforcement tools against specific threats. Kept.
- **From CHAINWATCH (v4):** Visual representation of the supply chain. Coverage gaps are visible, not described. Kept.
- **From INSPECTION (v2):** Opaque institutional decay through delegation. The player can't see a quality meter — they notice their tools producing suspicious results. Kept.
- **From SIGNAL (v2):** Multi-turn investigation chains. A thermal anomaly leads to an analyst assessment leads to a field agent report leads to a raid. Kept.

### What prior concepts got wrong (and what WATCHPOINT fixes)

- **v3's onboarding problem:** The first-session walkthrough assumes the player knows what AI chips are. WATCHPOINT's session 1 teaches this through the schematic itself — the player sees chips flow from factory to data center before they're asked to monitor anything.
- **v4's institutional blindness:** A spatial diagram can't show that your inspector was captured. WATCHPOINT's tools are visual objects ON the schematic that visually degrade — an inspector icon dims, a satellite's coverage circle shrinks. The player sees decay spatially.
- **v2 INSPECTION's menu problem:** Allocating inspectors from a country list is a menu selection. WATCHPOINT's tool placement is a spatial action on a visible system.
- **v2 SIGNAL's text dependency:** Raw signal cards require reading comprehension. WATCHPOINT's signals are visual events ON the schematic — a node pulses, an edge appears, a tool icon changes color.

---

## The Game

### The Schematic

The center of the screen shows a simplified flow diagram of the AI compute supply chain. This is not a geographic map — it's a system diagram, like a circuit schematic or a metro map.

```
Session 1 schematic (4 nodes, one inactive):

    [FACTORY] ──chips──> [SHIPPING] ──chips──> [DATA CENTER]
    [FACTORY ░░] (offline)

Session 5 schematic (~8 nodes):

    [ASML] ──machines──> [FACTORY]
                            │
                        [chips]
                            │
                    ┌───────┴───────┐
                    ▼               ▼
              [SHIPPING]      [BLACK MARKET]
                    │               │
              ┌─────┴─────┐        ▼
              ▼           ▼    [ROGUE LAB]
        [REGION A]  [REGION B]
              │
         [Lab Alpha]

Session 10 schematic (~8 nodes, same count but types evolved):

    [ASML] ──> [FACTORY] ──> [SHIPPING] ──> [REGION A]
                                  │               │
                            [SHELL CO] ──> [DISTRIBUTED ☁]
                                  │
                            [REGION B]  (tools dimmed = degraded)
```

The schematic starts simple and grows to a maximum of ~8 nodes. Complexity increases through node TYPE variety (a declared facility node gets replaced by a distributed cluster; a legitimate shipping edge sprouts a shell-company branch), not through count. This keeps the screen legible while teaching new concepts. The growth is semi-structured: phases are fixed (foundation → evasion → decay), but which specific routes, regions, and evasion methods appear is randomized — each playthrough has a different schematic shape.

The session-1 schematic shows TWO factory nodes — one active, one grayed out ("offline — no ASML allocation"). The player discovers supply chain concentration through failure: they try to place a tracker on the offline factory and find it empty. Scarcity is a discovered constraint, not a stated fact.

### Core Loop (one turn, ~20-30 seconds)

**1. The schematic advances.** Chips flow along edges (animated dots moving from factory toward deployment). Threats may appear: a new edge (smuggling route), a suspicious node (undeclared facility), an existing node changing state (distributed cluster forming). The player SEES the system operating.

**2. Place or adjust tools.** The player has a limited tool budget. Tap a node or edge on the schematic, then tap a tool from the palette to assign it. Each tool monitors what passes through its location and generates signals.

| Tool | Placed on | What it shows | What it misses |
|---|---|---|---|
| Satellite | Node | Thermal anomalies (crude early warning, not reliable) | Any adversary with cooling/heat-masking budget; distributed clusters; underground facilities |
| Inspector | Node | On-site verification of declared hardware | Undeclared facilities nearby, corruption |
| Chip tracker | Edge | Serial numbers of chips in transit | Chips with disabled tracking firmware |
| Financial monitor | Edge | Purchase records, shell company flags | Cryptocurrency, informal transfers |
| Power analyzer | Region* | Aggregate power draw anomalies | Well-cooled facilities, low-power hardware |
| Informant | Node | Insider tips on hidden operations | Fabricated tips, turned informants |

*Regions appear in later sessions as nodes cluster into geographic areas.

**3. Read signals.** Tools already placed on the schematic produce signals — visual indicators on the schematic itself plus a brief text readout when tapped.

- A satellite on a node shows a green circle (clear) or orange pulse (thermal anomaly detected).
- A chip tracker on an edge shows chip flow counts. A gap (chips entered the edge but fewer exited) pulses red.
- A financial monitor shows transaction volume. A spike with no corresponding chip delivery pulses yellow.

Tapping a signal shows a 1-2 sentence readout: "Thermal anomaly at Node B: heat signature consistent with 3,000 GPU cluster. Not in declared inventory." The player reads domain-specific information IN CONTEXT — they see WHERE the anomaly is on the schematic, which gives them the spatial reasoning to understand WHY it matters.

**4. Respond.** For confirmed threats (enough signals converge on one location), the player can:
- **Investigate further:** Assign an additional tool to the same node/edge. More evidence, but costs a tool slot.
- **Act:** Spend political capital for enforcement (raid, seizure, council referral). Immediate effect. False positives damage credibility. Council referrals show a visible timer on the node — but the timer is VARIABLE and can be EXTENDED. Sometimes 2 turns, sometimes 6, occasionally blocked by a veto event ("Member state requests additional evidence review"). The player watches the threat accumulate compute while enforcement stalls. This teaches the real lesson: council delays aren't merely slow, they can be exploited as stalling tactics. The Iran analogy: 3 years not because the process was slow, but because delay was actively weaponized.
- **Ignore:** Some signals are noise. Learning to distinguish noise from threat is a core skill.

**5. Consequences.** Caught threats are removed. Missed threats accumulate compute toward a training run. If any rogue operation accumulates enough compute (relative to the current threshold), the game ends: an unauthorized ASI training run succeeded.

**Pacing for "frantic effort":** As the game progresses, more threats appear per turn than the player can address. The visual experience of seeing red indicators multiply while you have 4 tools to cover 8 nodes creates the core feeling: "I'm falling behind." This isn't artificial time pressure — it's the real enforcement dynamic where threat surface grows while capacity stagnates.

### The Phone Layout (390x844)

```
┌──────────────────────────────┐
│  [Year 2032]  [⚡ capacity]  │  ← status (50px)
│  [▓▓▓▓░░ safety] [▓▓░░ alg] │  ← race bars (30px)
│                              │
│                              │
│    ┌─[FACTORY]──[SHIPPING]─┐ │
│    │              │        │ │
│    │         [REGION A]    │ │  ← schematic (~450px)
│    │              │        │ │
│    │         [Lab ??]      │ │
│    │                       │ │
│    └───────────────────────┘ │
│                              │
│  ┌────────────────────────┐  │
│  │ Signal: Thermal anomaly│  │  ← signal readout (80px)
│  │ at Region A. 3,000 GPU │  │
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │ 🛰 👤 📊 🔍 ⚡ 👁    │  │  ← tool palette (60px)
│  │ [Investigate] [Action] │  │  ← response buttons
│  └────────────────────────┘  │
└──────────────────────────────┘
```

The schematic is the dominant visual element. Nodes are large enough to tap (~44px). Tools are dragged from the bottom palette onto the schematic. Signal readout appears when tapping an active signal on the schematic.

One gesture: tap. Tap a node/edge to select it, tap a tool to assign, tap a signal to read, tap a button to respond. No gesture conflicts, no drag-vs-tap ambiguity.

---

## Session Walkthrough: Session 1

**The player knows nothing about AI enforcement. Turn 1 is a guided tutorial; from turn 2 onward, the game teaches through play.**

### Turn 1 — What is a chip?

The schematic shows two factory nodes, a shipping hub, and a data center:

```
[CHIP FACTORY] ──> [SHIPPING] ──> [DATA CENTER]
[CHIP FACTORY ░░] (offline — no ASML allocation)
```

Animated dots flow left to right from the active factory: chips being manufactured, shipped, and deployed. A text overlay (shown once, first turn only): "AI training requires specialized chips. These chips are manufactured in a few factories and shipped to data centers worldwide."

The player notices the grayed-out factory and tries to interact with it — tap it, try to place a tool on it. Nothing happens. Tapping shows: "This factory has no ASML lithography allocation. It cannot produce AI chips." The player discovers supply chain concentration through failure: there are only a handful of factories, and not all of them are even operational. Scarcity is a felt constraint, not a stated fact.

The player's tool palette has one tool: **Chip Tracker**. The tutorial prompt says: "Place the chip tracker on the shipping edge to count chips in transit."

The player taps the shipping edge, then taps the chip tracker from the palette to assign it. Numbers appear on the edge: "2,400 chips shipped / 2,400 received." A brief overlay: "These chips power AI systems. If enough chips reach the wrong hands, someone could build an uncontrollable AI. Your job: make sure that doesn't happen." All clear.

The urgency calibration is simple and concrete: chips → AI → danger. The player doesn't need to understand training runs, compute thresholds, or frontier models. They need to understand: these chips are dangerous in the wrong hands, and you're the one watching the flow.

**Teaching:** Chips exist. They flow through a supply chain with very few manufacturers. They're dangerous. You can monitor the flow.

### Turn 2 — Something is wrong

New chips flow. The chip tracker now reads: "2,400 shipped / 2,100 received." 300 chips are missing. The edge pulses yellow.

Tapping the signal: "300 chips left the factory but didn't arrive at the declared data center. Where did they go?"

A new node appears on the schematic, branching off the shipping edge: **[???]** with a dashed border. The missing chips flowed there.

The player's palette now has a second tool: **Satellite**. Tutorial: "Place the satellite on the unknown node to scan for heat signatures."

The player places the satellite. It resolves: the ??? node becomes **[UNDECLARED FACILITY]**. Readout: "Thermal scan detected a heat signature consistent with 300 GPUs running continuously. This facility is not in the declared compute registry." (This undeclared facility hasn't invested in heat masking — the satellite catches it easily.)

**Teaching:** Chips can be diverted. Undeclared facilities exist. Satellites detect heat from GPU clusters — at least when adversaries haven't prepared countermeasures. (Later sessions show satellites failing against better-prepared adversaries who use cooling systems, heat masking, or distributed clusters. The satellite is a crude early warning, not a reliable detector.)

### Turn 3 — Your first enforcement decision

The undeclared facility is confirmed. The player has three response options:

- **[Investigate]** — Send an inspector for physical verification. Takes 1 turn.
- **[Refer to council]** — Flag for international enforcement action. Takes 3 turns.
- **[Direct action]** — Raid now. Costs political capital.

Most players choose investigate or direct action. If they investigate: the inspector confirms 300 GPUs running unauthorized workloads. Hardware seized. Facility removed from schematic.

If they referred to council: by the time action is taken (turn 6), the facility has accumulated more compute. Still caught, but barely.

If they did direct action: fast and effective, but the status bar shows political capital decreased.

**Teaching:** Enforcement tools exist (inspectors, raids, council referral). Speed vs. legitimacy is a real tradeoff.

### Turn 4-6 — The schematic grows

A new node appears: **[ASML]** (the only company that makes chip-manufacturing equipment), connected to the factory. The player learns the upstream supply chain.

A second shipping route appears, going to **[REGION B]**. More chip trackers are available. The player must decide: monitor both routes, or focus on the one that had a diversion?

By turn 6, the schematic has ~5 nodes and the player has 3-4 tools placed. They understand the supply chain structure, have used two tool types, and have made one enforcement decision.

### Death — Turn 8

A smuggling route appeared at turn 5 that the player didn't monitor (they had limited tools). A rogue lab accumulated 800 GPUs through the unmonitored route and completed a training run.

**Death screen:** The schematic freezes, highlighting the unmonitored path in red. "An unauthorized training run succeeded. 800 GPUs were assembled through a shipping route you weren't monitoring. You had 3 chip trackers covering 2 of 4 routes. The route through [Port C] was unmonitored for 3 turns."

The player sees ON THE SCHEMATIC exactly where their coverage failed. The gap is visual, not described.

**Teaching:** You can't monitor everything. Coverage gaps are exploited. This is the fundamental enforcement problem.

---

## Session Walkthrough: Session 3

The player now understands: chips, supply chain, basic tools (satellite, chip tracker, inspector), and coverage gaps. Session 3 introduces evasion.

### New concepts introduced through play

**Distributed training (turns 3-4):** A node appears not as a single facility but as a cluster of small dots spread across a region. The player places a satellite — it shows "No significant thermal signature at any single location." The individual clusters are too small. A new tool unlocks: **Power Analyzer** (placed on a region, detects aggregate power draw). The player places it and sees: "Aggregate power anomaly: combined draw across 30 residential addresses is consistent with coordinated GPU cluster." The player learns through tool failure and tool success that distributed threats require different monitoring.

**Shell companies (turns 5-6):** A financial monitor on a shipping edge flags: "Entity 'Evergreen Compute Solutions' purchased 2,200 chips. Registered 4 months ago. No public website. Single director." This is a shell company — the player sees the financial anomaly on the edge and can trace it to a destination. If they don't: the chips disappear into an undeclared node.

**Transshipment (turns 7-8):** A chip tracker shows chips arriving at Region C — but Region C has no declared AI facilities. A small, seemingly harmless nation is serving as a pass-through. The player must choose: [Pressure Region C to report end-users (costs political capital, reveals the destination)] or [Place a second tracker on Region C's outbound edge (costs a tool slot, follows the chips silently)]. This is a real enforcement choice: diplomatic pressure vs. intelligence gathering.

### After session 3, the player understands:

1. Distributed training evades satellite monitoring (requires power analysis)
2. Shell companies can purchase chips through legitimate channels (requires financial monitoring)
3. Chips can be routed through third countries (requires watching for geographic anomalies)
4. Different tools catch different evasion methods — no single tool catches everything
5. The schematic keeps growing as adversaries find new routes

---

## Session Walkthrough: Session 5+

By session 5, the player has a solid foundation: supply chain, basic tools, evasion methods. Now the game introduces the hardest lesson: institutional decay. (Earlier sessions contained subtle hints — a slightly delayed inspector report, a financial monitor that missed one transaction — but the player likely attributed these to noise. Now the pattern becomes unmistakable.)

### Your tools start lying to you

**Turn 3:** An inspector on a declared facility shows green (compliant). Normal.

**Turn 7:** A satellite detects a thermal anomaly AT the same declared facility the inspector is covering. The inspector is still showing green. What's happening?

Tapping the inspector shows: "Inspector report: facility operating within declared parameters." Tapping the satellite shows: "Thermal signature 40% above expected for declared compute capacity."

The player now faces a trust problem: which instrument is correct? The satellite or the inspector?

A new action appears: **[Audit inspector]**. This costs a tool slot for 2 turns (the inspector can't monitor anything while being audited). Result: "Inspector has been filing standardized reports without conducting independent walkthroughs for 4 months. Facility manager provides pre-arranged tours."

**Teaching:** This is regulatory capture (M11). The inspector isn't corrupt — they've been absorbed into the facility's routine. Their reports look fine. The violation is real. This is the most important lesson in the game: your own instruments degrade, and you can't tell from the instrument's output alone.

### The decay cascade

Once the player understands inspector capture, more decay patterns emerge:

- **Informant compromise (turn 9):** An informant starts providing unusually clean intelligence — no threats anywhere. Too clean. If the player audits: the informant was turned 3 turns ago and has been feeding fabricated tips.
- **Financial monitor evasion (turn 11):** Cryptocurrency payments bypass the financial monitor entirely. The monitor shows normal transactions while chips are purchased through channels it can't see.
- **Satellite defunding (turn 12):** A political event removes satellite coverage from Region D. The player's tool is physically removed from the schematic. The coverage gap is immediately visible.

### The institutional maintenance decision

The player now faces the central tension of real enforcement: **use your tools or maintain your tools.** Auditing an inspector takes that inspector offline. Verifying an informant takes resources from other monitoring. Replacing a defunded satellite requires political capital.

Every turn spent on maintenance is a turn not spent on monitoring. Every turn not spent on maintenance means tools degrade further. The player is stretched between two competing imperatives — exactly like a real enforcement agency director.

### After session 5+, the player understands:

1. Enforcement tools degrade over time (capture, compromise, defunding)
2. Degradation is invisible from the tool's output — it looks normal until you check
3. Maintaining institutional quality competes directly with operational enforcement
4. Political events constrain your toolkit
5. The overall enforcement capacity is shrinking while threats grow
6. This is what "the pause is not relaxed waiting but frantic effort" means

---

## Mechanic-by-Mechanic Breakdown

### 1. The Schematic (teaches: what the enforcement system IS)

A simplified flow diagram of the AI compute supply chain. Nodes represent entities (factories, shipping hubs, regions, facilities). Edges represent flows (chip supply, smuggling routes, financial transfers).

The schematic is not a geographic map — it's a system diagram. This has three advantages:
- **Clarity:** The supply chain structure is immediately legible. No geographic knowledge required.
- **Progressive disclosure:** New nodes and edges appear as concepts are introduced. The diagram grows with the player's understanding.
- **Visual coverage:** Tools placed on the schematic show exactly what's monitored. Unmonitored areas are visually obvious.

The schematic starts with 3 nodes (session 1) and grows to ~8 nodes (session 5+). Complexity increases through node TYPE variety, not count. The complexity matches the player's accumulated knowledge.

### 2. Tool Placement (teaches: what tools exist, what each detects)

The player drags monitoring tools from a palette onto the schematic. Each tool type monitors a specific aspect of whatever it's placed on. The player learns each tool's capabilities through use:

- Place satellite on a facility node → see thermal output → learn: satellites detect large heat signatures
- Place satellite on a distributed cluster → see nothing → learn: satellites can't detect distributed compute
- Place chip tracker on an edge → see chip flow counts → learn: tracking reveals supply chain gaps
- Place financial monitor on an edge → see transaction patterns → learn: financial monitoring catches procurement

The tool palette grows over sessions. Session 1: 2 tools. Session 3: 4 tools. Session 5+: 6 tools. Each new tool is introduced through a situation where existing tools fail, motivating the player to understand why the new tool exists.

Limited tool budget (3-6 tools depending on game phase) forces the player to choose what to monitor. They can never cover everything. This teaches the fundamental resource constraint of real enforcement.

### 3. Signal Reading (teaches: how to interpret monitoring data)

Tools produce signals — visual changes on the schematic plus brief text readouts. The player taps signals to read them and decides whether to investigate, act, or ignore.

Signals vary in clarity:
- **Clear threat:** Chip tracker shows 500 chips diverted, destination unknown. Obvious — investigate.
- **Ambiguous:** Power analyzer shows elevated draw in a region with legitimate data centers. Could be normal load. Could be unauthorized compute hidden in legitimate operations.
- **False alarm:** Satellite detects heat from an industrial process, not a GPU cluster.
- **True but hidden by decay:** Inspector reports "compliant" but the inspection was cursory. The signal looks clean but the underlying reality isn't.

Over sessions, the player develops signal-reading intuition. They learn which signal patterns predict real threats and which are noise. This is a genuine mastery curve — an experienced player catches threats that a novice misses, not through better tools but through better interpretation.

### 4. The Response System (teaches: enforcement tradeoffs)

When signals converge on a confirmed threat, the player chooses:

- **Investigate further:** More evidence, less uncertainty, but costs time and tool capacity. The threat may complete while you gather evidence.
- **Refer to council:** Politically safe, internationally legitimate. But the delay is variable and exploitable — sometimes 2 turns, sometimes 6, occasionally blocked entirely by a veto or "additional evidence" request. During this delay, the threat operates freely. The player doesn't know how long the referral will take when they initiate it. This teaches the real lesson from arms control history: Iran's nuclear program advanced for 3 years not because the IAEA-to-Security-Council process was merely slow, but because delay was actively weaponized through procedural mechanisms.
- **Direct action:** Immediate. Effective if the threat is real. If it's a false alarm, credibility and political capital are damaged. Too many false raids and the player loses the ability to act unilaterally.

The tradeoff shifts over the game. Early game: direct action is affordable. Mid game: political capital is scarce, council referrals are necessary but slow. Late game: the player must decide which threats are urgent enough for direct action and which can survive the council delay. This teaches that enforcement effectiveness depends on institutional credibility, not just technical capability.

### 5. Tool Degradation (teaches: institutional decay)

The game's most important mechanic. Tools have three visually distinct degradation states:

- **Institutional decay** (amber tint): tool compromised from within. Inspector going amber = captured. Informant going amber + question mark = possibly turned. The tool still produces signals, but they may be misleading.
- **Threat-type obsolescence** (per-threat markers dim): algorithmic progress means this tool can no longer detect a specific threat type. Satellite's distributed-threat marker dims while centralized-threat marker stays bright. (See section 6.)
- **Political removal** (tool removed from schematic): political event physically removes the tool. The coverage gap is immediately visible.

These must be visually distinct because they require different player responses: decay → audit, obsolescence → switch tool type, removal → spend political capital to restore or accept the gap.

Critically, degraded tools do NOT go silent. They produce ACTIVELY MISLEADING signals — false "all clear" reports that look like real data. A captured inspector doesn't stop reporting; they report "compliant" with specific details (facility tours, equipment counts) that happen to be template text recycled from months ago. A compromised informant doesn't go quiet; they feed fabricated tips with plausible detail. The distinction: silence means no coverage (correct interpretation from Mechanic A), while a positive "clean" signal from a tool could be genuine OR could be decay. This makes decay detection a calibration problem — "is this clean signal suspiciously clean?" — rather than contradicting the silence-means-no-coverage lesson.

The player detects decay through multiple paths, not just overlapping coverage. (a) The game provides occasional external cross-check signals — a whistleblower, satellite intelligence from an ally, an academic publication citing data from a facility — that flag specific nodes where the player's tool output may not match reality. These arrive as events. (b) Decay manifests through pattern anomalies the player can spot without a second tool: an inspector who reports the exact same equipment counts three turns in a row, or an informant whose reports are suspiciously well-timed. (c) Overlapping tools can still reveal contradictions, but this is one detection path among several, not the only one.

The player can spend tool capacity on **auditing** — temporarily removing a tool from monitoring to assess its quality. Audits reveal specific problems:

- "Inspector has been accepting facility-guided tours instead of independent walkthroughs"
- "Informant was compromised 3 turns ago — recent tips are fabricated"
- "Financial monitor is missing all cryptocurrency-based purchases"

Fixing problems takes additional turns and may have side effects (audited staff resent scrutiny, morale drops, a team member quits). The player must balance: use degraded tools (risky but maintains coverage) or audit and fix (reliable but creates temporary gaps).

This teaches M11 (delegated oversight capture), M13 (cultural capture), and M14 (production pressure) — three of the four most important institutional decay mechanisms — without ever using those labels. The maintenance-vs-operations tradeoff partially embodies M12 (conflicting mandates), but the deeper political dimension of M12 (the agency's funders are the nations it regulates) has no interaction path. The player learns operational decay through felt consequences; structural conflicts are gestured at through political events.

### 6. The Race (teaches: why the outcome is uncertain)

Shown directly on the schematic, not as abstract bars:

- **Safety progress** (a green fill bar at screen top): Advances slowly. When full, the player wins.
- **The dangerous threshold** is visualized ON rogue nodes as a shrinking circle. Early game: a rogue lab's "danger radius" is large (needs 50,000 GPUs — easy to see). When algorithmic progress advances, the danger radius shrinks (needs fewer GPUs). Tools don't go uniformly gray. Instead, tool icons on the schematic gain THREAT-TYPE MARKERS showing what they can still detect. A satellite on a node hosting a centralized facility stays bright for centralized threats. The same satellite on a node with distributed clusters dims SPECIFICALLY for the distributed indicator while remaining bright for centralized detection. Tapping a tool shows its per-threat-type effectiveness. This teaches the correct domain lesson: "my satellite still catches big facilities but can't catch distributed training" — not the false lesson that tools uniformly degrade with time.

Early game: a rogue lab needs massive compute, satellite catches it easily. Mid game: threshold shrinks, satellite still catches centralized facilities (bright marker) but its distributed-threat marker dims (can't detect smaller clusters). Late game: 500 GPUs distributed across 50 locations — satellite's distributed marker is dark, only power analysis and informants show bright markers for distributed threats. The satellite isn't "obsolete" — it's obsolete for one threat type.

The player learns the race by watching their tools lose effectiveness against specific threat types, not by watching them uniformly go dark. The urgency is specific: "my satellite can't catch distributed training anymore, and that's where the threats are moving."

**Win condition:** Safety progress fills before algorithmic progress makes enforcement impossible. This requires: maintaining tool effectiveness (fighting institutional decay), adapting to evolving threats (switching tool types as the threshold drops), and surviving political constraints (keeping enough capacity to operate).

**The message emerges from play:** Winning requires constant effort, adaptation, and luck. A moment of inattention — an unaudited inspector, an unmonitored route, a political event that removes a tool — can be fatal. The pause is not relaxed waiting. It is frantic effort to hold a degrading system together while the target keeps moving.

### 7. Political Events (teaches: political constraints on enforcement)

Between turns, political events modify the schematic. These arrive as brief cards (1-2 sentences + binary choice) that resolve immediately:

- "Region D demands reduced satellite coverage. [Comply: remove satellite] [Refuse: -political capital]"
- "Budget increase approved. [+1 tool slot]"
- "Treaty member withdraws. [Region E nodes become unmonitorable]"
- "Whistleblower reports unauthorized compute at declared facility. [+intelligence flag on node]"
- "Algorithmic breakthrough published. [Dangerous threshold drops]"
- "Safety research milestone. [Safety bar advances]"

Political events are exogenous — the player experiences their effects but doesn't manage politics directly. This keeps the focus on enforcement operations while teaching that political context shapes what enforcement can do.

Political events modify the schematic visually: a tool disappears, a node becomes grayed out (unmonitorable), a new edge appears. The player sees the political impact on their operational reality.

---

## The Learning Progression

### Sessions 1-2: Foundation

**Player learns:**
- AI training requires specialized chips
- Chips flow through a supply chain with few manufacturers
- You can monitor the supply chain with specific tools
- Satellites detect heat from large GPU clusters
- Chip trackers detect supply chain diversions
- Coverage gaps get exploited
- You can't monitor everything

**Schematic complexity:** 3-5 nodes, 2-3 edges, 2 tools
**Death cause:** Unmonitored shipping route exploited

### Sessions 3-4: Evasion + First Decay Hints

**Player learns:**
- Distributed training evades satellite monitoring
- Shell companies launder chip purchases
- Third-country transshipment bypasses export controls
- Different tools catch different evasion methods
- Power analysis catches what spatial monitoring misses
- Financial monitoring catches procurement evasion

**First decay signal (subtle):** An inspector you placed 2 sessions ago returns a report that's slightly delayed, or a financial monitor misses one small transaction. The player likely attributes this to noise. On REPLAY (after experiencing full decay later), they'll recognize these as early warnings.

**Schematic complexity:** 6-8 nodes (grown from 3-5), 4 tools
**Death cause:** Distributed cluster missed because wrong tool type was deployed

### Sessions 5-7: Institutional Decay + Escalation

**Player learns:**
- Inspectors can be captured (filing template reports that contradict satellite data)
- Informants can be compromised (suspiciously clean intelligence)
- Tools degrade invisibly — output looks normal until cross-checked
- Auditing a tool costs operational capacity (tool goes offline during audit)
- Maintaining tools competes with using tools
- Council referral delays are dangerous — threats operate during deliberation
- Algorithmic progress reduces the compute threshold
- Convergent illicit networks: a smuggling node on the schematic turns out to share infrastructure with weapons trafficking — disrupting it risks an allied intelligence operation (M7)
- Cryptocurrency purchases bypass financial monitoring entirely — the monitor shows clean transactions while chips are bought through channels it can't see (M15)

**Schematic complexity:** ~8 nodes (type variety, not count growth), tools visibly degrading
**Death cause:** Trusted inspector was captured; threat was at a "compliant" facility. Or: council referral delay allowed training run to complete.

### Sessions 8+: Mastery Play

**By session 8, the structured learning progression is complete.** The player understands:
- The supply chain structure and its single-factory chokepoint
- 6 monitoring tool types and what each catches/misses
- 4+ evasion methods and which tools counter each
- Institutional decay dynamics and the maintenance vs. operations tradeoff
- The race between safety progress and algorithmic progress
- Political constraints on enforcement
- Why the outcome is uncertain: decay + adaptation + threshold erosion + politics compound

**Post-learning, the game shifts to mastery mode.** No new mechanics are introduced. Instead, the player faces compound failures — multiple decay mechanisms + evasion methods + political events combining in ways they haven't seen. The variety comes from combinatorial interaction between known mechanics, not from new mechanics. Additionally, the schematic becomes more dynamic: nodes change type mid-session (a formerly legitimate facility flips to rogue), newly cooperating regions appear, and threat patterns shift unpredictably. This uses existing tools but creates novel situations.

Like Reigns, most players won't play 20+ sessions. The teaching goal is met by session 8. Mastery play rewards the committed player with deeper pattern recognition, but the game doesn't promise new conceptual territory beyond session 8 — it promises harder combinations of existing territory.

**Schematic complexity:** ~8 nodes with multiple degraded tools, active threats, type variety, mid-session node mutations
**Death cause:** Compound failure — decay + political event + evasion method combine. Traceable on the schematic.

---

## Why Other Concepts Are Weaker

### Card swipe (Reigns)
Binary text choices teach "enforcement has tradeoffs" but not HOW enforcement works. After 10 sessions, the player knows enforcement is hard. They can't name a single monitoring tool or evasion method. The teaching is meta-level, not domain-level.

### Pure spatial (CHAINWATCH)
The supply chain diagram teaches the technical layer well. But 9 of 17 institutional mechanisms (M8-M14, M16-M17) can't be represented spatially. A map can show WHERE tools are placed but not WHY they're failing. WATCHPOINT integrates spatial and institutional: tools are spatial objects that degrade for institutional reasons.

### Pure card-flow (THE BRIEF)
Tool-threat matching through text menus. The player reads about tools and threats but never sees the system. After 10 sessions, the player can name tools and threats but can't explain how the supply chain works or where coverage gaps emerge. All learning was through reading, the weakest channel.

### Inspection allocation (v2 INSPECTION)
Strong on verification asymmetry and institutional decay. But the core interaction (select countries from a list, allocate inspectors) is a menu, not kinesthetically engaging. The player never sees the supply chain. They allocate attention abstractly, not spatially.

---

## Session Structure

- **15-20 turns per session** (early sessions shorter as schematic is simpler)
- **~20-30 seconds per turn** (see schematic advance, adjust tools, read signals, respond)
- **Total: ~5-7 minutes per session**
- **Die-and-restart loop:** Death is frequent and expected. Each death teaches a specific failure mode, traced visually on the schematic.
- **Player knowledge carries over:** Tool types, evasion methods, and signal-reading intuition persist across sessions. The schematic starts simple each time but grows faster as the player demonstrates mastery.
- **Difficulty scales with sessions played:** More evasion types, faster threshold drop, earlier onset of institutional decay. The game gets harder because the domain is genuinely harder at scale.

---

## Game State

**Visible to player:**
- The schematic (nodes, edges, tools, signals)
- Safety progress bar and algorithmic progress bar (the race)
- Political capital (how much direct action capacity remains)
- Tool palette (available tools, counts)
- Year/turn counter

**Hidden from player:**
- Institutional quality per tool (decays silently)
- Specific compromise states (which informants are turned, which inspectors are captured)
- Adversary intent at each node (compliant, minor violation, major violation)
- Exact threshold for dangerous training run (player sees the bar but not the number)

The hidden state creates genuine uncertainty. The player must decide: is this inspector report reliable? Is this informant tip real? Is this clean-looking node actually clean? The uncertainty IS the teaching — real enforcement operates under the same fog.

---

## Teaching Mechanism Assessment

An honest accounting of which concepts are taught INTERACTIVELY (through player action and visual feedback) and which are taught TEXTUALLY (through signal readouts and event cards).

### Genuinely interactive (~40%) — player learns from action + visual consequence alone

- **Coverage gaps:** Unmonitored edges and nodes are visible on the schematic. When the player dies, the death screen highlights the unmonitored path. The gap is visual, not described.
- **Enforcement window narrowing (surface):** Tool threat-type markers dim as algorithmic progress advances. The player watches specific capabilities become insufficient.
- **Resource scarcity:** Limited tool budget forces tradeoffs. The player can't cover everything and feels the constraint through play.
- **Maintenance vs. operations:** Auditing a tool removes it from monitoring. The player feels the coverage gap during the audit.

### Interaction-prompted text (~35%) — interaction creates attention, text delivers the lesson

- **Tool-specific detection:** Place a tool, see signal or silence, then TAP to read a 1-2 sentence explanation. Silence means no coverage (consistent with the signal model). The interaction produces a prompt to read; reading produces the learning.
- **Tool-threat matching:** Wrong tool on a node = silence. Correct tool = signal. The player learns the distinction when a new tool is introduced through a situation where the existing tool failed (silence), motivating the labeled description of the new tool.
- **Institutional decay (the fact of contradiction):** Inspector vs. satellite disagreement is visible, but the player must read the audit result to understand WHY. The interaction surfaces the contradiction; the text explains the cause.
- **Supply chain concentration:** The offline factory is visually grayed out, but the player learns WHY (ASML allocation) only by tapping and reading.

### Pure text (~25%) — inherently verbal knowledge

- **Political event rationale:** Why a country objects to surveillance, why a budget was cut — conveyed through 1-2 sentence event cards.
- **Scale/calibration claims:** "One shipment = enough for a training run," "heat signature consistent with 3,000 GPUs" — quantitative facts are inherently verbal.
- **Domain vocabulary:** What "AI chips" are, what "ASML" is, what "distributed training" means — introduced through tutorial text and signal readouts.
- **Enforcement window narrowing (causal):** WHY algorithmic progress makes tools obsolete requires understanding the relationship between compute thresholds and detection capability — this is text-delivered.

### Assessment

Approximately 40% genuinely interactive, 35% interaction-prompted text, 25% pure text. The interactive portion is real and substantially better than card-flow games (where interaction-to-learning ratio is near zero). The interaction-prompted text portion is where WATCHPOINT's spatial context adds value: the player reads domain text WHILE looking at the relevant part of the schematic, which is a better learning context than reading text on a card. The player who skimmed every text readout would understand that coverage gaps kill, tools become obsolete against specific threats, and maintenance competes with operations — but would lack the vocabulary and causal understanding to explain why.

---

## Known Weaknesses

### 1. Schematic legibility on small screens
At 8 nodes with tools and signals, the schematic may still be crowded on a 390px-wide screen. Mitigations: visual hierarchy (active threats bright, quiet nodes dim), complexity through type variety not count (cap at ~8 nodes), careful fixed layout per complexity level. Needs a visual mockup to validate — this is the single highest-risk item to prototype first.

### 2. Implementation cost
WATCHPOINT is more complex than a card-swipe game. It requires: graph rendering, tool placement interaction, signal generation, institutional decay simulation, investigation tracking, political event system. Estimated 6-8 weeks for MVP. This is significant but not prohibitive, and the teaching effectiveness justifies the cost.

### 3. Content cost for signal variety
Signals need enough variety that the player doesn't see identical readouts every session. Mitigation: signal templates with procedural variation (location names, chip counts, time periods vary). ~40-60 signal templates provide sufficient variety for high replayability.

### 4. Institutional decay needs to land early enough
Tool degradation now starts with subtle hints in sessions 3-4 and becomes unmistakable by session 5-7. Players who quit before session 5 miss it. Mitigation: the session 3-4 hints should be noticeable (not just "subtle on replay") — e.g., an inspector report that contradicts a satellite reading, forcing the player to notice the discrepancy even if they don't yet understand why.

### 5. Political events as exogenous shocks
Removing a tool via political event can feel arbitrary to the player ("I didn't do anything wrong, why was my satellite removed?"). Mitigation: political events always include a brief explanation ("Region D's parliament voted to restrict aerial surveillance following privacy protests") and a choice that gives the player agency, even if both options are bad.

### 6. Depth cliff after session 8
The structured learning progression completes at session 8. Post-session-8 mastery play offers combinatorial novelty (known mechanics in new combinations, dynamic schematic mutations) but no new conceptual territory. Most mobile web players won't reach session 8 anyway. The teaching goal is met by session 8; mastery play is a bonus, not a promise. Acknowledged honestly — not a fatal flaw, but sets correct expectations for long-term engagement.

### 7. M16 (willful ignorance) and M12 (conflicting mandates) lack interaction paths
These structural institutional dynamics operate above the supply-chain schematic level. Political events can gesture at them textually, but no mechanic makes the player FEEL willful ignorance or revenue-regulation fusion. This is a genuine coverage gap in the domain model teaching.

### Domain Model Gaps
The specific capabilities of each enforcement tool (what satellites can detect, how reliable chip tracking is, etc.) need correction from domain expertise. The current tool-threat matrix is a first approximation. In particular: satellite thermal detection is less reliable than modeled — adversaries with cooling/heat-masking budgets can evade it even for centralized facilities, and distributed training makes thermal evasion linearly cheaper per site.

---

## Implementation Architecture

**Engine (pure TypeScript, no React dependency):**
- Graph state: nodes with properties, edges with properties, tools with placement and quality
- Turn simulation: chip flow along edges, threat accumulation, threshold progression
- Signal generation: based on tool placement, node states, and institutional quality
- Institutional decay: per-tool quality degradation, opaque to player, stochastic failure activation
- Political event pool: weighted events similar to existing card pool system

**Rendering:**
- SVG schematic with fixed layout (node positions predetermined per complexity level)
- Tool icons as draggable SVG elements
- Signal indicators as animated SVG elements (pulses, color changes)
- Responsive layout: schematic scales to viewport, minimum tap targets 44px

**Content:**
- 8-10 node types (factory, shipping hub, region, declared facility, undeclared facility, distributed cluster, shell company, black market, rogue lab)
- 6 tool types (satellite, inspector, chip tracker, financial monitor, power analyzer, informant)
- ~50 signal templates with procedural variation
- ~30 political event cards
- ~15 death screens with schematic highlighting
- ~10 decay audit result templates

**Reuse from existing codebase:**
- Weighted pool system for political events (same pattern as card pool)
- Death screen infrastructure
- localStorage persistence
- Share functionality
- Seeded PRNG

---

## The Teaching Test

After 5+ sessions, a committed player has internalized: the supply chain has chokepoints, different tools detect different threats, adversaries route around monitoring, tools degrade for institutional reasons, and the enforcement window narrows. They learned this primarily through interaction (tool failure, visual contradictions, coverage gaps) rather than reading. The specific domain vocabulary (tool names, evasion categories, institutional dynamics labels) was learned through text.
