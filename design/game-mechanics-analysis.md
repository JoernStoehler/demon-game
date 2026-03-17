# Game Mechanics Analysis: Enforcement Agency Game on Mobile Web

Structured analysis of proven game mechanics for an enforcement/investigation-themed game about catching illegal AI development. Evaluated against mobile web constraints, teaching goals, session length, replayability, and solo-dev feasibility.

---

## 1. Mechanic-by-Mechanic Analysis

### 1A. Card Swipe Binary Choices (Reigns)

**How it works:** One card at a time, binary swipe left/right. Hidden resource bars. Cards drawn from weighted pool. Die and restart. ~2 minute runs.

**What it teaches well:**
- Tradeoff awareness: every choice has costs. You can't have everything.
- Interconnectedness: touching one bar moves others. The system fights back.
- Failure modes: dying from 8 different causes teaches "this is complicated."
- Randomness of real governance: you can't control what problems arrive.

**What it teaches poorly:**
- Spatial reasoning (where to place inspectors, how smuggling routes work).
- Investigation process (gathering clues, weighing evidence, following leads).
- Adversary intelligence: the opponent is invisible. You never "see" someone evading you.
- Agency: you're reacting, not planning. The player never formulates a strategy and executes it.

**Mobile web fit:** Excellent. Touch-native (drag is the core verb). Minimal screen space. No scrolling. Works in portrait. Interruption-proof (state is one card).

**Session length:** 2-5 minutes. Perfect.

**Replayability:** High via card pool dynamics. Low on strategic depth (each card is an isolated choice; you can't outplay the system, only get luckier draws).

**Implementation cost:** Low. Already built. The existing engine handles this well.

**Verdict:** Strong for "convey that the problem is hard and multidimensional." Weak for "teach the player how enforcement actually works" or "make the player feel like an investigator."

---

### 1B. Document Inspection (Papers Please)

**How it works:** Examine a document against a set of rules. Spot discrepancies. Approve or deny. Rules escalate in complexity over time. Moral wrinkles (the person begging you has a dying child).

**What it teaches well:**
- Inspection is boring, high-stakes, and error-prone: the core reality of enforcement work.
- Rules creep: regulations accumulate, each reasonable alone, collectively overwhelming.
- Error cost asymmetry: missing a threat vs. harassing an innocent.
- Compassion fatigue: the moral weight of mechanical rule-following.

**Adaptation for enforcement agency:**
- "Documents" = chip shipment manifests, compute usage reports, facility inspection reports, end-user certificates.
- "Rules" = treaty provisions, compute thresholds, hardware monitoring standards, reporting requirements.
- "Discrepancies" = mismatched serial numbers, unusual power consumption patterns, shell company signatures, suspiciously round numbers.
- "Moral wrinkles" = the hospital that needs the compute for medical AI, the researcher whose safety work requires borderline-threshold hardware.

**What it teaches poorly:**
- Big-picture strategy: you're a desk clerk, not a director.
- Geopolitics: the game is about paperwork, not power dynamics.
- Long-term consequences: each shift is independent. You don't see how your approvals compound.

**Mobile web fit:** Moderate. Needs readable text (documents), tappable regions (stamp, highlight). Portrait orientation works if documents scroll vertically. Pinch-to-zoom would be needed for detailed inspection.

**Touch innovation:** Tap-to-highlight discrepancies. Drag stamps (approve/deny/flag). Swipe between document pages. Long-press to compare against reference rules.

**Session length:** 5-10 minutes per "shift." Slightly long but workable with save-between-shifts.

**Replayability:** Moderate. Procedurally generated documents keep it fresh, but the core loop (read, compare, stamp) is repetitive. Reigns-like death conditions could add variety.

**Implementation cost:** Medium-high. Needs: document generation system, rule engine, discrepancy detection, visual document layout. More complex than card swipe but still feasible as web game. Main risk: making documents readable on small screens without feeling cramped.

**Verdict:** Excellent for teaching "enforcement is hard detail work." Would need hybridization with strategic layer to avoid feeling like a filing simulator.

---

### 1C. Tactical Missions + Resource Management (XCOM)

**How it works:** Strategic layer (base building, research, squad management) feeds into tactical missions (turn-based squad combat on grid). Missions have consequences that feed back into strategy.

**What it teaches well:**
- Resource allocation under uncertainty: you never have enough inspectors/satellites/analysts for everything.
- Risk management: sending your best team on one mission means another goes undermanned.
- Escalation: enemies get harder; your capabilities must grow to match.
- Fog of war: incomplete information about threats.

**Adaptation for enforcement agency:**
- "Base" = ISIA HQ. Allocate budget between divisions: enforcement, intelligence, safety research, diplomacy.
- "Missions" = inspections, raids, diplomatic negotiations, research reviews. Each needs specific resources (inspectors, analysts, political capital).
- "Squad" = specialists. An enforcement lead, a chip expert, a diplomat, a legal advisor.
- "Enemies" = smuggling networks, rogue labs, uncooperative nations. They get more sophisticated over time.

**What it teaches poorly:**
- Violence is the wrong frame: enforcement is about monitoring and detection, not combat.
- Grid tactics don't map: there's no "combat" in chip enforcement.
- The genre implies military solutions work if you execute well enough. Real enforcement is much more ambiguous.

**Mobile web fit:** Poor for full XCOM. Grid-based tactical combat needs mouse precision and large screen. Strategic layer alone (resource allocation + mission selection) works well on mobile.

**Touch innovation:** If stripped to strategic layer only: drag-to-assign inspectors to missions. Tap to launch. Results as card-like reports.

**Session length:** Full XCOM: 30-60 minutes. Strategic-layer-only: 5-15 minutes.

**Replayability:** High. Random mission generation, different upgrade paths, emergent narrative from mission outcomes.

**Implementation cost:** Very high for full XCOM. Strategic-layer-only (mission selection + resource allocation, no tactical grid) is medium. Still needs mission outcome logic, resource tracking, research trees.

**Verdict:** Pure XCOM is wrong for this game. But "mission board + resource allocation + outcome reports" is a strong strategic layer that could supplement other mechanics.

---

### 1D. Ship Management + Encounters (FTL)

**How it works:** Navigate through nodes on a map. Each node is an encounter (combat, shop, event). Manage ship systems, crew, resources. Permadeath roguelike. ~30 minute runs.

**What it teaches well:**
- Resource scarcity: fuel, missiles, crew, hull. Everything is scarce. Every stop is a gamble.
- Route planning under uncertainty: you see node types but not specifics. Plan with incomplete info.
- Escalation: the rebel fleet advances. You can't stay in one place forever.
- Crew specialization: different crew members have different strengths. Losing one changes your capabilities.

**Adaptation for enforcement agency:**
- "Map" = timeline (years of the pause). Each node is a month/quarter.
- "Ship systems" = ISIA capabilities (surveillance, enforcement, diplomacy, research).
- "Crew" = key personnel (analysts, diplomats, scientists). Can be lost to burnout, recruitment, corruption.
- "Rebel fleet" = algorithmic progress. The clock is ticking. Capability knowledge grows regardless.
- "Encounters" = crises, inspections, diplomatic meetings, research breakthroughs.
- "Shops" = budget allocation, treaty amendments, new monitoring tech.

**What it teaches poorly:**
- Spatial reasoning: the map is arbitrary. Enforcement is about places and supply chains.
- Investigation: encounters are binary (fight/flee/trade). No evidence gathering.
- Corruption: crew betrayal exists in FTL but isn't the main mechanic. In enforcement, institutional decay is central.

**Mobile web fit:** Moderate. Map navigation works with tap. Encounter screens need careful layout. System management (power allocation) works with tap/drag.

**Touch innovation:** Tap nodes to navigate. Drag power between systems during crises. Swipe through crew assignments.

**Session length:** 20-40 minutes for full FTL. Too long. Would need radical compression (10-node map, 5-minute runs) to fit 5-minute target.

**Replayability:** Very high. Random maps, different starting configurations, emergent crew stories.

**Implementation cost:** High. Map generation, encounter system, multiple resource types, crew management, combat (or equivalent). Significant UI work for system management screens.

**Verdict:** FTL's timeline-as-map and advancing-threat-clock are strong ideas. Full FTL is too complex and too long for mobile web. The "advancing threat + node-based encounters + resource juggling" pattern could be extracted and simplified.

---

### 1E. Resource Scarcity + Moral Weight (This War of Mine)

**How it works:** Manage civilians surviving in a war zone. Day: maintain shelter, cook, trade. Night: scavenge (risking death) or guard (risking theft). Moral choices with lasting emotional impact. Characters get depressed, sick, give up.

**What it teaches well:**
- Moral weight of resource allocation: choosing who eats is different from choosing how to spend a budget.
- Cascading failure: one bad night -> injury -> can't scavenge -> less food -> more despair -> someone leaves -> fewer hands -> spiral.
- No good options: every choice costs something irreplaceable.
- Emotional exhaustion: the player feels the grind of sustained crisis management.

**Adaptation for enforcement agency:**
- "Survivors" = ISIA divisions/personnel. Each has morale, capability, loyalty.
- "Scavenging" = intelligence operations. High risk, high reward. Can go wrong.
- "Guarding" = maintaining monitoring. Boring but necessary. Skip it and things slip through.
- "Moral weight" = shutting down a medical AI lab that's actually saving lives. Raiding a researcher's home based on thin evidence.
- "Cascading failure" = burned-out analysts miss threats, missed threats cause crises, crises burn out more analysts.

**What it teaches poorly:**
- Strategy: you're surviving, not planning. The game is about endurance, not cunning.
- Adversary behavior: threats are environmental, not strategic opponents.
- Institutional dynamics: no bureaucracy, no politics, no diplomacy.

**Mobile web fit:** Moderate. Day/night cycle UI works on mobile. Resource management needs clear inventory display. Character status (mood, health) needs compact representation.

**Touch innovation:** Tap to assign tasks. Drag items between characters. Swipe to advance time.

**Session length:** 15-30 minutes per "day." Too long for 5-minute target unless heavily compressed.

**Replayability:** Moderate. Random events and starting conditions vary, but the loop (forage/cook/sleep/guard) is the same.

**Implementation cost:** High. Character simulation (mood, health, skills), resource management, event system, time progression, visual representation of shelter.

**Verdict:** The moral weight and cascading failure patterns are powerful teaching tools. Full TWOM is too complex for mobile web. The "every resource decision costs something human" principle could be layered onto a simpler mechanic (like card swipe).

---

### 1F. Crisis Management + Tough Calls (Frostpunk)

**How it works:** City-building under extreme conditions. Temperature drops. Resources deplete. Laws must be passed (child labor? extended shifts? faith or order?). Hope and discontent meters constrain choices.

**What it teaches well:**
- Policy tradeoffs with no good answer: every law helps one metric and hurts another.
- Escalating crises: the environment gets worse over time. What worked yesterday won't work tomorrow.
- Legitimacy as a resource: push too hard and you lose the people. Too soft and everyone freezes.
- The ratchet: once you pass authoritarian laws, you can't unpause them. Small compromises compound.

**Adaptation for enforcement agency:**
- "Temperature" = algorithmic progress. Drops (rises) inexorably. The game gets harder.
- "Laws" = treaty provisions, surveillance authorizations, enforcement powers. Each helps enforcement but costs legitimacy/privacy/sovereignty.
- "Hope/discontent" = public support / civil liberties backlash.
- "Buildings" = enforcement infrastructure. Inspection stations, monitoring satellites, research labs.
- "Ratchet" = surveillance powers once granted are never returned. Each crisis justifies more control. By the end, the agency is either effective-and-authoritarian or legitimate-and-ineffective.

**What it teaches poorly:**
- Investigation: no detective work. Management, not sleuthing.
- Adversary intelligence: threats are environmental (cold), not strategic opponents who adapt.
- Nuance: the game's binary law system (pass/don't) simplifies real policy complexity.

**Mobile web fit:** Poor for full city-builder. The spatial building + infrastructure placement + worker management needs a large screen and mouse precision. Policy-choice-only layer works on mobile.

**Touch innovation:** For policy-only variant: swipe to pass/reject laws (Reigns-like). Tap to inspect statistics. Drag to allocate resources.

**Session length:** Full Frostpunk: hours. Policy-only: 5-10 minutes.

**Replayability:** Moderate. Different scenarios, different law paths. But the optimal strategy crystallizes after 3-4 plays.

**Implementation cost:** Very high for full Frostpunk. Policy-only (Reigns-like laws + escalating crises + Hope/Discontent bars): medium. Essentially a themed Reigns variant.

**Verdict:** Frostpunk's key insight -- the authoritarian ratchet and the "no good answers" policy dilemmas -- maps perfectly to the enforcement agency theme. But the city-builder frame is too heavy. The policy dilemma system is a Reigns variant with extra weight on irreversibility.

---

### 1G. Spatial Logistics (Mini Motorways / Mini Metro)

**How it works:** Place infrastructure (roads, metro lines) to connect supply to demand. Demand grows. Space is constrained. Failure = any node underserved for too long.

**What it teaches well:**
- Coverage vs. capacity tradeoff: you can't serve everything. Where you build determines what you miss.
- Emergent bottlenecks: systems that work at small scale break at large scale.
- Spatial reasoning: where things are matters. Proximity, routes, chokepoints.
- Incremental overload: the system degrades gracefully, then suddenly.

**Adaptation for enforcement agency:**
- "Nodes" = compute facilities, chip factories, ports, borders, research labs.
- "Lines/roads" = inspector routes, satellite coverage, monitoring networks.
- "Demand" = suspicious activity at each node. Must be covered or violations slip through.
- "Supply" = inspectors, monitoring bandwidth, analyst time.
- "Failure" = unserved node for too long = rogue lab completes training run.

**What it teaches poorly:**
- Policy: no political dimension. Pure logistics.
- Moral weight: abstract puzzle, no emotional stakes.
- Adversary adaptation: demand is random, not strategic. Real adversaries see your coverage and exploit gaps.

**Mobile web fit:** Excellent. Drag to place lines/routes. Tap to deploy inspectors. Portrait-oriented maps work well. Mini Motorways is a mobile game.

**Touch innovation:** Draw routes by finger drag (like Mini Metro). Pinch to zoom map. Tap-and-hold to place facilities. Two-finger rotate for inspection coverage angles.

**Session length:** 5-15 minutes. Good range.

**Replayability:** High. Random node placement guarantees different puzzles each time.

**Implementation cost:** Medium-high. Needs: map generation, pathfinding or connection logic, demand simulation, visual rendering of coverage/routes. Canvas or SVG rendering. More complex than card-based but well within web tech capabilities.

**Verdict:** Strong for teaching "enforcement is a spatial coverage problem." Weak for teaching policy dilemmas or moral weight. Could be excellent as a mini-game layer representing the "enforcement ops" dimension of the larger game.

---

### 1H. Tower Defense (Placement + Coverage + Waves)

**How it works:** Place defensive structures to stop waves of enemies traversing a path. Each tower type has range, damage, cost. Enemies have different vulnerabilities. Waves escalate.

**What it teaches well:**
- Coverage gaps: wherever you don't build, enemies get through.
- Specialization vs. generalization: focused defenses are efficient against known threats, useless against novel ones.
- Resource pacing: spend now for weak defense or save for expensive strong defense later.
- Escalation: early waves are trivial. Late waves require qualitatively different strategies.

**Adaptation for enforcement agency:**
- "Towers" = monitoring infrastructure: satellite coverage, port inspectors, power-grid analyzers, chip tracking firmware, informant networks.
- "Enemies" = evasion methods: shell companies, transshipment, distributed compute, tunneled traffic, bribed officials.
- "Path" = supply chain. Enemies traverse from raw materials to operational training runs.
- "Waves" = escalating sophistication. Early: crude smuggling. Late: turnkey proliferation networks, state-sponsored cyber theft.

**What it teaches poorly:**
- Diplomacy: no political dimension. Pure placement optimization.
- Moral ambiguity: enemies are clearly enemies. No "this lab might be legitimate medical research."
- Adversary intelligence: enemies follow fixed paths. Real adversaries find new paths based on your defense.

**Mobile web fit:** Good. Tap to place, drag to position. Single-screen maps work in portrait. Well-proven mobile genre.

**Touch innovation:** Tap to place towers. Drag to move. Pinch to zoom. Long-press for upgrade menu. Double-tap to sell.

**Session length:** 5-15 minutes per map. Good range.

**Replayability:** Moderate. Different maps and enemy mixes add variety. Optimal strategies crystallize after ~5 plays per map unless enemies are randomized.

**Implementation cost:** Medium. Needs: grid/path system, tower placement logic, enemy pathfinding, wave management, collision/range detection. Canvas rendering. Well-known architecture. Many open-source examples.

**Verdict:** Strong for teaching "monitoring is a coverage problem with escalating threats." Could work as a literal representation of chip supply chain enforcement. Feels game-y rather than educational, which might be a strength (it's fun) or weakness (it trivializes the problem).

---

### 1I. Detective / Mystery Investigation (Obra Dinn, Her Story)

**How it works:** Examine evidence. Form hypotheses. Connect clues to identify facts (who, what, when, why). No action -- pure deduction. In Obra Dinn: examine frozen moments of death to deduce identity and cause. In Her Story: search a database of video clips by keyword to reconstruct a story.

**What it teaches well:**
- Evidence quality: some clues are strong, others misleading. Weighing evidence is the core skill.
- Hypothesis formation: the player builds a mental model and tests it against new evidence.
- Non-obvious connections: the answer isn't in any single clue but in how they combine.
- Uncertainty: sometimes you guess wrong. The game rewards careful reasoning over speed.

**Adaptation for enforcement agency:**
- "Evidence" = chip shipment records, power consumption data, satellite imagery, intercepted communications, financial records, personnel movements.
- "Hypotheses" = "this facility is running unauthorized training" or "these shell companies are connected" or "this inspector is compromised."
- "Investigation" = select which evidence to request, which leads to follow. Each costs time/resources.
- "Revelation" = piece together a smuggling network, identify a mole, uncover willful ignorance by a member state.

**What it teaches poorly:**
- Strategy: investigation games are single-instance puzzles. Once you know the answer, replay value drops.
- Time pressure: detective games reward patience. Enforcement has deadlines.
- Scale: detective games are about one case. Enforcement is about systemic monitoring.

**Mobile web fit:** Moderate. Text-heavy interfaces need careful typography. Tap-to-select evidence. Search interfaces work on mobile. Her Story's search-by-keyword works well on phone.

**Touch innovation:** Tap to examine evidence. Drag to connect clues on a board. Pinch-to-zoom on documents/images. Swipe between evidence tabs.

**Session length:** Highly variable. Her Story: 10-60 minutes. Obra Dinn: hours. Would need session-sized mini-investigations (one case per session, 5-10 minutes).

**Replayability:** Low for hand-crafted puzzles (once solved, solved forever). Moderate if procedurally generated (but procedural mystery generation is extremely hard -- no one has done it well).

**Implementation cost:** Hand-crafted mysteries: medium (content creation is the bottleneck, not code). Procedural mysteries: very high and likely unsatisfying. Each mystery needs: evidence set, red herrings, solution logic, revelation sequence.

**Verdict:** Investigation mechanics are thematically perfect but practically challenging. Procedural mysteries are an unsolved problem in game design. Hand-crafted mysteries are one-shot content. A hybrid approach -- procedurally assembled evidence with hand-crafted "case templates" -- could work but is risky. Best used as an occasional mini-game rather than the core loop.

---

### 1J. Spreading / Containment on a Map (Plague Inc)

**How it works:** A pathogen spreads across a world map through transport links. The player either spreads it (original game) or contains it (The Cure DLC). Containment involves: closing borders, funding research, deploying quarantine, managing public panic.

**What it teaches well:**
- Exponential growth: the core "aha" of epidemiology. Small outbreaks become pandemics if not caught early.
- Network effects: closure of one route shifts traffic to others. Whack-a-mole.
- Global coordination (or its absence): countries act independently. Some cooperate, some don't.
- Information lag: you see infections after they've spread. Monitoring delay is lethal.

**Adaptation for enforcement agency:**
- "Pathogen" = capability knowledge, distributed compute techniques, smuggling networks.
- "Countries" = treaty members with different compliance levels, monitoring capabilities, political willingness.
- "Transport links" = chip supply chains, knowledge transfer networks, brain drain routes.
- "Containment" = inspections, export controls, travel restrictions, information security.
- "Mutations" = algorithmic breakthroughs that change the threat profile. Distributed training makes centralized monitoring obsolete.
- "Cure" = safety research. Race to complete it before capability knowledge reaches critical mass.

**What it teaches poorly:**
- Individual decisions: Plague Inc is about macro policy, not individual card-level choices.
- Moral weight: countries are icons on a map, not people with stories.
- Enforcement detail: high-level strategy, not "how do you actually inspect a chip factory."

**Mobile web fit:** Good. World map works on mobile (Plague Inc was a mobile hit). Tap countries to deploy resources. Pinch to zoom. Notifications for outbreaks.

**Touch innovation:** Tap to deploy containment to a country. Drag to draw containment lines. Pinch-zoom on world map. Swipe to scroll timeline.

**Session length:** 10-20 minutes. Slightly long but compressible.

**Replayability:** High. Different starting conditions, different "mutation" paths, different country behaviors.

**Implementation cost:** Medium-high. Needs: world map with transport graph, spreading simulation, country AI, containment logic, research progress. SVG map rendering. Simulation logic is the hard part -- needs to feel right without being an actual epidemiological model.

**Verdict:** Thematically strong for "capability knowledge spreads across a network of countries, and you must contain it." The map-based spreading mechanic is a natural fit for showing how smuggling networks, knowledge transfer, and compliance gaps work geographically. Implementation is significant but well within web tech. Plague Inc (The Cure) is almost literally "run an enforcement agency against a spreading threat."

---

## 2. Cross-Cutting Evaluation Matrix

| Mechanic | Mobile Web | Teaches Dynamics | 5-min Sessions | Replayability | Solo Dev Feasibility |
|---|---|---|---|---|---|
| Card Swipe (Reigns) | Excellent | Moderate | Excellent | High | Easy (done) |
| Document Inspection (Papers Please) | Moderate | High (enforcement detail) | Moderate | Moderate | Medium |
| Strategic Layer (XCOM-lite) | Moderate | High (resource allocation) | Moderate | High | Medium-High |
| Encounters (FTL-lite) | Moderate | Moderate | Poor (too long) | Very High | High |
| Moral Weight (TWOM) | Poor | High (consequences) | Poor (too long) | Moderate | High |
| Crisis Policy (Frostpunk-lite) | Good (as Reigns variant) | High (policy ratchet) | Good | Moderate | Medium |
| Spatial Logistics (Mini Metro) | Excellent | Moderate (coverage) | Good | High | Medium-High |
| Tower Defense | Good | Moderate (coverage/escalation) | Good | Moderate | Medium |
| Detective (Obra Dinn) | Moderate | High (evidence/reasoning) | Poor (variable) | Low | Medium (content-heavy) |
| Containment Map (Plague Inc) | Good | High (spreading/networks) | Moderate | High | Medium-High |

---

## 3. Feedback and Motivation Channels

Each channel evaluated for enforcement-agency theme and mobile web:

### 3A. Discovery (uncover hidden information)

**Strength for enforcement game:** Very high. The entire premise is about uncovering hidden violations. Every investigation reveals something about the adversary's methods, the supply chain, or institutional weaknesses.

**Mechanics that support it:**
- Detective/mystery: discovery IS the mechanic. Each clue reveals part of the picture.
- Card swipe: weak. Cards reveal information but you're not actively investigating.
- Plague Inc: moderate. You discover new outbreaks and mutation paths.

**Mobile web notes:** Discovery needs clear "reveal" moments. Fade-in, expand, unlock animations. Each discovery should feel earned. A "dossier" or "evidence board" screen that fills in over time is satisfying on mobile (tap to review collected intel).

**Risk:** If discovery is too easy, it's meaningless. If too hard, it's frustrating on a small screen with short sessions. Sweet spot: ~1 significant discovery per 5-minute session.

### 3B. Mastery (pattern recognition improvement)

**Strength for enforcement game:** High. The player should get better at spotting evasion patterns, predicting adversary behavior, reading institutional dynamics. This directly maps to "calibrated experts are better at this than uncalibrated observers."

**Mechanics that support it:**
- Document inspection (Papers Please): excellent. Recognizing discrepancy patterns is the core skill. Players visibly improve.
- Card swipe: weak. Binary choices don't develop transferable skills.
- Tower defense: moderate. Optimal placement becomes intuitive.
- Spatial logistics: high. Players develop intuition for capacity planning.

**Mobile web notes:** Mastery needs measurable feedback. Score, accuracy %, time-to-detection. A "personal best" tracker encourages replay. Difficulty should scale visibly so the player knows they're getting harder problems because they've mastered easier ones.

**Risk:** If the player masters the system in 3 plays, they stop playing. Mastery needs depth. If the system is too opaque (like Reigns' hidden resource numbers), the player never feels mastery -- just luck.

### 3C. Narrative (see story unfold differently)

**Strength for enforcement game:** Very high. Each run tells a different story of how the pause succeeds or fails. Different failure modes (corruption, smuggling, political collapse, rogue lab success) create different narratives.

**Mechanics that support it:**
- Card swipe (Reigns): good. Card pool dynamics create emergent narratives.
- FTL: good. Each run is a different journey with different crew stories.
- This War of Mine: excellent. Character-driven narratives emerge from resource decisions.

**Mobile web notes:** Narrative on mobile needs brevity. Short text snippets, not paragraphs. Character portraits and names create attachment cheaply. A "story so far" summary on death/victory screen helps the player see the narrative arc they just played through.

**Risk:** Agent-written narrative text is the weakest link. Generic card text feels lifeless. Character voice, specificity, and surprising consequences make narrative land. This is a content quality problem, not a mechanic problem.

### 3D. Collection (unlock content)

**Strength for enforcement game:** Moderate. "Unlock all card types" or "see all failure modes" creates completionist motivation. An intel dossier that fills in as you encounter different adversary types, discover different evasion methods, or uncover different corruption patterns is thematically appropriate.

**Mechanics that support it:**
- Card swipe: natural. Track which cards have been seen. Show a collection screen.
- Detective: natural. Evidence collection IS the game.
- Any mechanic with procedural content: moderate. Hard to "collect everything" if content is random.

**Mobile web notes:** A simple grid of locked/unlocked icons is satisfying. Tap to review unlocked content. Show % complete. localStorage persists across sessions.

**Risk:** Collection requires breadth of content. 20 cards = boring collection. 200 cards = meaningful. Collection can also feel like busywork if the collected items aren't interesting to review.

### 3E. Tension / Thriller (time pressure)

**Strength for enforcement game:** Very high. The core dynamic is a race: finish safety research before capability knowledge makes enforcement impossible. Every turn, the clock ticks. The threat is always one bad draw away.

**Mechanics that support it:**
- FTL: excellent. The rebel fleet is always advancing. You can't stay safe.
- Tower defense: moderate. Waves create urgency.
- Frostpunk: excellent. Temperature drops. The crisis is always approaching.
- Plague Inc: moderate. Exponential growth creates panic moments.
- Reigns: weak. No active time pressure (turn-based, no clock).

**Mobile web notes:** Visual urgency cues: pulsing borders, color shifts, sound (if enabled). A visible "threat clock" that advances each turn. Session-appropriate tension: 5 minutes of tension is exciting; 30 minutes is exhausting.

**Risk:** Tension without player agency is frustrating. If the player can't do anything about the approaching threat, the tension feels unfair. The player needs tools that create the illusion of control even when the situation is structurally difficult.

### 3F. Social (share results)

**Strength for enforcement game:** Moderate. "I survived 23 turns as ISIA Director before corruption collapsed my intelligence network" is shareable. Death stories are inherently interesting if they're specific and varied.

**Mechanics that support it:**
- Card swipe: good. Already has share functionality. Death cause + turn count + narrative summary.
- Any roguelike: good. "Here's how I died" is a genre tradition.

**Mobile web notes:** Share button that generates text summary + optional screenshot. Native share API on mobile. Keep text under 280 characters for social media.

**Risk:** Sharing only works if the shared content is interesting to non-players. "I scored 47 points" is boring. "I was overthrown by my own inspectors after authorizing warrantless chip searches in 14 countries" is interesting.

### 3G. Moral Weight (feel consequences)

**Strength for enforcement game:** Very high. The entire domain is about real moral dilemmas: surveillance vs. privacy, enforcement vs. sovereignty, security vs. civil liberties, shutting down beneficial AI to prevent dangerous AI. The player should feel the weight of these decisions.

**Mechanics that support it:**
- This War of Mine: excellent. Characters suffer visibly from your decisions.
- Papers Please: excellent. The person you deny entry to has a face and a story.
- Frostpunk: good. "Signing" child labor into law feels terrible even when necessary.
- Reigns: weak. Binary swipe is too fast for moral weight. Decisions feel like optimization, not ethics.

**Mobile web notes:** Moral weight needs faces, names, and consequences shown. A card that says "restrict compute access" has low moral weight. A card where a doctor says "Without this hardware, 2,000 cancer patients lose access to diagnostic AI" and you swipe to restrict anyway -- that lands.

**Risk:** Moral weight requires excellent writing and careful pacing. Too much moral weight is exhausting and preachy. Too little and decisions feel inconsequential. Sweet spot: 1 morally heavy card per ~5 routine cards.

---

## 4. Mobile UX Innovations by Mechanic Type

### 4A. Touch Gestures That Work Naturally

| Gesture | Best Use | Avoid |
|---|---|---|
| Horizontal swipe | Binary choice (Reigns), page navigation | Conflicting with browser back gesture |
| Vertical swipe | Scroll content, dismiss/confirm | Conflicting with pull-to-refresh |
| Tap | Select, confirm, inspect | Anything requiring precision smaller than 44px |
| Long-press | Details, context menu, inspect | Primary actions (too slow, undiscoverable) |
| Drag | Place objects, draw routes, move cards | Precision placement (finger occludes target) |
| Pinch | Zoom map, resize | Anything besides zoom (confusing) |
| Double-tap | Quick action, zoom toggle | Primary actions (accidental triggers) |

**Key principle:** One primary gesture per screen. The player should always know what to do with their thumb. Card swipe succeeds because the only verb is "drag left or right." Adding a second gesture type to the same screen (e.g., "drag to swipe but also tap to inspect") creates confusion unless very clearly separated spatially.

### 4B. Screen Space Budget (390x844 portrait)

| Zone | Height | Purpose |
|---|---|---|
| Status bar (OS) | ~50px | Not available |
| Resource indicators | ~60px | 4 icons + values or previews |
| Main content area | ~620px | Card, map, document, or game board |
| Action zone | ~60px | Primary action buttons, year display |
| Bottom safe area | ~34px | iPhone home indicator |

**Usable content area: ~620px tall, ~360px wide.** This is less than half a laptop screen. Every element must justify its space.

**Scrolling:** Avoid. A single screen that fits entirely without scrolling is always better than a scrollable one. Scrolling conflicts with drag gestures. If content doesn't fit, the content is too complex for mobile.

**Text:** Maximum ~25 words visible at once without scrolling. Card text must be concise. Document inspection needs line-by-line reveal rather than showing entire documents.

### 4C. Session Interruption Handling

| Pattern | How It Works | Best For |
|---|---|---|
| Instant-state save | Save full state to localStorage on every action | Card games, turn-based games |
| Pause-on-blur | Freeze game clock when tab/app loses focus | Timed games, real-time games |
| Checkpoint resume | Save at defined points (end of turn, between phases) | Multi-phase games |
| Session summary | Show recap on return: "Last time, you..." | Narrative games |

**Key principle:** Mobile users are interrupted constantly. The game must survive: backgrounding, phone calls, lock screen, multi-day gaps between sessions. Full state in localStorage (already implemented in current game) is the gold standard. Never rely on server state or in-memory state surviving a session.

---

## 5. Hybrid Mechanic Combinations Worth Exploring

Based on the analysis above, several combinations stand out as fitting the enforcement-agency theme on mobile web:

### 5A. Card Swipe + Investigation Interludes

**Core loop:** Reigns-style card swipe for strategic decisions (already built). Periodically, a "case" card appears that opens a mini-investigation: 3-4 pieces of evidence to examine, one conclusion to reach. Investigation takes 1-2 minutes. Then back to card swipe.

**What it teaches:** Strategic tradeoffs (cards) + enforcement detail (investigations). The player makes big decisions AND does small detective work.

**Implementation cost:** Medium. Needs: evidence display UI, conclusion selection, integration with card pool system.

**Session length:** 3-7 minutes (2-3 minutes of cards, 1-2 minutes of investigation).

**Risk:** Two different mechanics = two sets of UI to build and maintain. Transition between modes might feel jarring. If investigations are too simple, they're busywork. If too complex, they break the card-swipe flow.

### 5B. Card Swipe + Containment Map

**Core loop:** Reigns-style card swipe for policy decisions. After every N cards, a map phase: capability knowledge is spreading across regions. Allocate inspectors and monitoring to contain it. Then back to cards, with consequences of containment success/failure reflected in new card pool.

**What it teaches:** Policy tradeoffs (cards) + spatial enforcement reality (map). The player sees how their policy decisions affect the geographic reality of enforcement.

**Implementation cost:** High. Needs: world map rendering, spreading simulation, inspector placement, two-way integration between card state and map state.

**Session length:** 5-10 minutes (3-4 minutes of cards, 2-3 minutes of map).

**Risk:** Map phase might feel disconnected from card phase. Two UIs = double maintenance. Map on small screen is inherently cramped. Needs very careful simplification (5-10 regions, not 195 countries).

### 5C. Card Swipe + Document Inspection Events

**Core loop:** Reigns-style card swipe. Occasionally, an "inspection" card appears: instead of a binary choice, the player sees a chip shipment manifest / facility report / end-user certificate with one or more discrepancies to spot. Tap the discrepancy, then decide what to do about it.

**What it teaches:** Strategic tradeoffs (cards) + the actual work of enforcement (inspection). The player learns what evasion patterns look like.

**Implementation cost:** Medium. Needs: document template system, discrepancy generation, tap-to-flag interaction. Can reuse card layout with modified content area.

**Session length:** 3-5 minutes. Inspection cards take ~30 seconds each, appearing 2-3 times per run.

**Risk:** Document readability on small screens. Discrepancies need to be findable without being trivial. Procedural document generation is tricky -- documents need to look plausible.

### 5D. Frostpunk-Style Policy Ratchet + Card Swipe

**Core loop:** Card swipe is the main mechanic. But periodically, a "law" card appears with an irreversible choice. Once you authorize warrantless searches, you can't undo it. The law changes which cards appear in the pool (new enforcement tools, but also new backlash cards). Over a run, the player constructs a unique enforcement regime through their law choices.

**What it teaches:** The authoritarian ratchet. Small surveillance expansions are individually reasonable and collectively terrifying. The player discovers they've built a panopticon incrementally.

**Implementation cost:** Low-medium. Extends existing card system with "law" cards that permanently modify pool weights and hidden state. No new UI beyond marking some cards as "permanent."

**Session length:** Same as current (2-5 minutes). Laws are just special cards within the existing flow.

**Risk:** Minimal. This is the smallest extension to the existing system. Risk is that law cards don't feel special enough without visual distinction from regular cards.

### 5E. Plague Inc Lite (Standalone)

**Core loop:** Simplified world map (10-15 regions connected by trade routes). Capability knowledge spreads along routes. Player deploys inspectors, closes borders, funds monitoring, negotiates with regions. Regions have compliance levels, political stability, economic interests. Events (smuggling ring discovered, new algorithmic paper published, political crisis in key region) modify the map.

**What it teaches:** The global coordination problem. Enforcement in one region pushes evasion to another. Closing borders has economic costs. Some regions cooperate; others defect. The player sees how interconnected the enforcement problem is.

**Implementation cost:** High. Full game from scratch. Map, simulation, event system, region AI, multiple resource types.

**Session length:** 10-15 minutes. Compressible to 5-8 with fewer regions and faster simulation.

**Risk:** Completely new game, not an extension of existing codebase. High implementation cost. Map legibility on mobile. Simulation balance is hard to get right.

---

## 6. Recommendation Framework

When evaluating which direction to go, weight these factors:

**Leverage existing work.** 144 cards, card engine, swipe mechanics, 4-bar resource system, card pool dynamics, death loop -- all built and tested. Any mechanic that builds on this is 10x cheaper than starting fresh.

**One primary gesture per screen.** The moment a screen needs two interaction modes (swipe AND tap AND drag), mobile UX degrades. Keep each screen simple.

**Content is the bottleneck, not code.** The current game's weakness isn't the engine -- it's that 144 cards of agent-written text don't teach specific enforcement dynamics convincingly. More/better content within the existing mechanic may outperform a new mechanic with shallow content.

**Teaching specifics requires specifics.** Reigns teaches "it's complicated." To teach "enforcement is a spatial coverage problem" or "capability knowledge spreads through networks" or "corruption degrades institutions over decades," you need mechanics that make those specific dynamics visible and manipulable. Card swipe is too abstract for some of these lessons.

**Session length is a hard constraint.** Any mechanic that needs >7 minutes per session will lose mobile web users. Complexity must be compressed, not just offered.
