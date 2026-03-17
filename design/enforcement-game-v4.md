# Enforcement Game — Design Space Exploration and Recommendation

## Why the previous concepts were limited

Every concept I developed (v1-v3, THE BRIEF) lives on the same submanifold: card-flow. "Present text, player picks option, see text result." This interaction pattern teaches decision-making but not systems. The player reads about the supply chain, reads about evasion, reads about tools — but never SEES any of it. All learning happens through text comprehension, which is the weakest channel for teaching spatial and systemic concepts.

The project goal — give zero-knowledge players a mental model of enforcement — requires them to understand a SYSTEM: chips flow from factories through supply chains to deployment. Monitoring tools cover parts of that system. Adversaries exploit uncovered parts. The system evolves. This is inherently spatial and visual. A card game is the wrong representation.

## Design space dimensions

| Dimension | Card-flow (THE BRIEF) | Spatial (recommended) | Simulation | Puzzle |
|---|---|---|---|---|
| How player sees the system | Text descriptions | Visual diagram of supply chain | Parameter dashboards | Static scenes |
| How player uses tools | Menu choice | Place tools on diagram | Set investment levels | Given tools |
| How player sees gaps | Death screen tells them | Visible on diagram NOW | Output metrics | Clue analysis |
| How player sees evasion | Text: "chips were smuggled" | Visual: new route bypasses their monitor | Output: "loss rate up" | Hidden in clue set |
| How player sees decay | Text: "inspector filed bad report" | Tool icon dims/disappears on map | Parameter drift | Not well |

**Key insight:** For teaching "what the enforcement system IS," visual representation is strictly better than text. You understand a supply chain by SEEING it, not by reading about it. Coverage gaps are understood by SEEING uncovered regions, not by being told "you had a gap."

## Recommended Concept: CHAINWATCH

**One sentence:** You see the AI chip supply chain as a living diagram. You place monitoring tools on it. Adversaries find routes around your monitors. The chain grows, your tools degrade, and the compute threshold drops. Hold it together long enough for safety research to finish.

### Why this maximizes the teaching goal

1. **The player SEES the system.** The supply chain (ASML → factories → chips → shipping → deployment) is a visible flow diagram. Zero-knowledge players understand "chips flow from here to there" immediately — no text explanation needed for the spatial structure.

2. **Monitoring coverage is visible.** Tools placed on the diagram show covered regions. Uncovered regions are visually obvious. The player never needs to be TOLD "you have a gap" — they can SEE the gap. This teaches the fundamental enforcement challenge: coverage is always incomplete.

3. **Evasion is visible.** When adversaries open a new smuggling route, a new edge appears on the diagram bypassing the player's monitors. The player SEES how evasion works — it goes around monitoring, not through it. This teaches the declared/undeclared blindness problem visually.

4. **Tool-threat matching is spatial.** Placing a satellite on a node that has distributed clusters (many small dots instead of one big dot) visually shows that spatial monitoring doesn't match distributed threats. The player sees the mismatch, not just reads about it.

5. **The race is visible.** A threshold line on the diagram shows the minimum compute needed for dangerous training. It drops over time (algorithmic progress). Rogue accumulations approach it from below. The player watches the gap shrink.

6. **Institutional decay is visible.** Tools dim, flicker, or disappear from the diagram. A tool that stops working is visually absent — the coverage it provided vanishes. The player sees their monitoring network erode.

No text-based mechanic achieves any of these. The visual representation IS the teaching.

### What it looks like on a phone (390x844)

```
┌──────────────────────────────┐
│  [Enforcement ████░░]  [Race]│  ← status bar (60px)
│                              │
│     [ASML] ──→ [TSMC]       │
│                  │           │
│              [Shipping]      │
│              /       \       │
│        [Region A]  [Region B]│  ← main diagram (~550px)
│            │                 │
│        [Lab ??]              │
│                              │
│  ┌────────────────────────┐  │
│  │ 🛰️  👤  📊  🔍        │  │  ← tool palette (60px)
│  └────────────────────────┘  │
│  ┌────────────────────────┐  │
│  │  [Event card text]  ▶  │  │  ← event card (optional, 120px)
│  └────────────────────────┘  │
└──────────────────────────────┘
```

**Top:** Status indicators (enforcement capacity, the race).
**Center:** The supply chain diagram. Nodes = entities (factories, shipping hubs, regions, facilities). Edges = flows (chip supply, smuggling routes). Starts with 3-4 nodes, grows to 8-10.
**Bottom:** Tool palette (drag tools onto the diagram) + periodic event cards (institutional/political events that modify the diagram).

Nodes and edges are large enough to tap on mobile (~44px minimum). The diagram starts sparse and grows — progressive disclosure through spatial expansion.

### Core loop (one turn, ~30-45 seconds)

**1. The world advances.** New edges may appear (smuggling routes). Existing threats accumulate chips. Algorithmic progress ticks. An event card may appear (political constraint, institutional issue, research update).

**2. Handle event (if any).** A narrative card slides up: "Region B demands reduced satellite coverage — threatens to withdraw from treaty." Binary choice: [Comply: remove satellite from Region B] or [Refuse: -political support]. This is the card-flow element, used ONLY for institutional/political dynamics that are inherently non-spatial.

**3. Place/move tools.** The player has a limited tool budget. Drag tools from the palette onto nodes or edges. Each tool type detects different threat types:

| Tool | Icon | Placed on | Detects |
|---|---|---|---|
| Satellite | 🛰️ | Node | Large facilities (thermal signature) |
| Inspector | 👤 | Node | On-site verification, seizes hardware |
| Financial monitor | 📊 | Edge | Chip purchases, shell company flows |
| Power grid analyzer | ⚡ | Region | Distributed training (aggregate power draw) |
| Informant | 👁️ | Node | Insider threats, concealed operations |
| Chip tracker | 📍 | Edge | Diverted shipments, missing serial numbers |

**4. Resolution.** Threats at covered locations are detected. Player sees: green flash (caught), red flash (threat at uncovered location progresses). Chips accumulate at uncovered rogue nodes. If any rogue node's accumulation reaches the current threshold: game over.

### Progressive disclosure — the diagram grows

**Phase 1 (turns 1-3): The chain**
Diagram: `[ASML] → [TSMC] → [Shipping] → [Region A]`
Tools: Satellite, Inspector (2 tools, simple placement)
Threats: One rogue facility appears in Region A (visible as a red dot on the node)
Teaching: The supply chain exists. Chips flow from factory to deployment. Placing a tool on a node monitors it.

**Phase 2 (turns 3-6): First evasion**
New edge appears: `[Shipping] → [Shell Co] → [Region B]` (bypassing monitored Region A)
New tool: Financial monitor (placed on edges)
Teaching: Adversaries route around your monitoring. New routes appear. Edge monitoring catches diversion. **The player SEES evasion happening spatially — the smuggling route visually bypasses their satellite.**

**Phase 3 (turns 6-10): Distributed threats**
New node type: Distributed cluster (shown as cloud of small dots instead of single circle)
New tool: Power grid analyzer (covers a region, not a node — catches distributed)
Teaching: Distributed training looks different. Node-level tools (satellite, inspector) can't catch it. Need region-level tools. **The player places a satellite on the distributed cluster and sees it fail — the dots are too small to detect individually.**

**Phase 4 (turns 10-15): Degradation**
Tools start failing: an inspector icon dims (institutional capture). A satellite coverage circle shrinks (political pressure). A financial monitor goes dark (crypto evasion).
Event cards explain WHY: "Your inspectors in Region B have been filing identical reports for 6 months." Choice: [Investigate inspectors (-coverage elsewhere)] or [Replace them (-budget)].
Teaching: Tools degrade. The monitoring network you built is eroding. **The player watches their carefully placed tools disappear from the diagram.**

**Phase 5 (turns 15+): The race**
The threshold line drops visibly on each turn. Rogue accumulations approach it. New threats appear faster than tools can be placed. Some tools are gone. The player is trying to hold a shrinking perimeter.
Teaching: The enforcement window narrows. Algorithmic progress + institutional decay + adversary adaptation compound. Success requires holding everything together simultaneously.

### What the player understands after N sessions

**After 1 session:**
- The supply chain exists (ASML → factory → chips → deployment)
- You can monitor parts of it with tools
- Adversaries find routes around your monitors
- You died because of a gap you could SEE

**After 3 sessions:**
- Different tools catch different threats (satellite = facilities, power grid = distributed, financial = diversion)
- Evasion evolves (centralized → distributed → crypto-funded → insider-assisted)
- Tools degrade (institutional decay makes monitors fail)
- The threshold drops (algorithmic progress makes smaller operations dangerous)
- Political events constrain which tools you can place where

**After 10 sessions:**
- Full mental model: supply chain structure, monitoring tool types and limits, evasion method taxonomy, institutional decay dynamics, algorithmic threshold erosion
- Can explain WHY enforcement is hard: "You can monitor the known chain, but adversaries create new routes. Your tools degrade. The bar keeps dropping. You're covering more with less."
- Can explain WHY it's possible: "The supply chain has chokepoints. Monitoring tools work. If you maintain them and adapt to new threats, you can hold long enough for safety research."

### Why this beats every card-flow concept

A card-flow player after 10 sessions can tell you: "Enforcement is hard. There are many failure modes. You can't do everything." These are meta-level observations.

A CHAINWATCH player after 10 sessions can tell you: "Satellites catch large facilities by heat. Distributed training needs power grid analysis. Shell companies are caught by financial monitoring on shipping edges. Inspectors can be captured over time. Political pressure removes your coverage in some regions. Algorithmic progress means smaller clusters become dangerous." These are DOMAIN-SPECIFIC insights.

The difference: card-flow teaches that enforcement is hard. Spatial teaches HOW enforcement works. The project goal is the latter.

### Institutional/political dynamics (the event card layer)

Pure spatial mechanics can't teach institutional decay, political constraints, or the broader context. These are handled through periodic event cards that modify the diagram:

- "Budget cut: remove one tool" → player must choose which monitor to sacrifice
- "Region B sovereignty complaint: satellite cannot be placed in Region B for 3 turns" → coverage gap appears
- "Inspector corps review: inspectors in Region A restored to full effectiveness" → tool repairs
- "Algorithmic paper published: threshold drops by 15%" → the danger line moves
- "Safety milestone: safety progress advances 10%" → the race bar moves
- "Turnkey broker network: new edge appears connecting 3 regions directly to rogue lab" → diagram changes

These arrive ~once every 2-3 turns. Brief text, binary choice, immediate effect on the diagram. The player doesn't need to understand the politics deeply — they see the RESULT on their map.

### Event cards vs spatial — division of labor

| Spatial diagram teaches | Event cards teach |
|---|---|
| Supply chain structure | Political constraints on tools |
| Tool-threat matching | Institutional decay causes |
| Coverage gaps | Budget and resource limits |
| Evasion routes | Diplomatic dynamics |
| The race (visual threshold) | Safety research progress |
| Distributed vs centralized threats | Algorithmic progress impacts |

The spatial diagram carries ~70% of the teaching load. Event cards carry ~30%. This is the inverse of card-flow concepts (which are 100% text-based teaching).

### Implementation notes

**Engine:**
- Graph data structure: nodes + edges with properties (type, monitoring, threat level, accumulation)
- Tool placement: drag from palette to node/edge, with type-compatibility rules
- Threat simulation: each turn, unmonitored threats accumulate compute; new routes probabilistic
- Event pool: weighted event cards (same pattern as existing card pool)
- Win/lose: accumulation reaches threshold = loss; safety bar fills = win

**Rendering:**
- SVG or Canvas diagram. Nodes as circles/icons. Edges as lines/curves.
- Force-directed or fixed layout (fixed is simpler and more stable on mobile)
- Tool icons overlay on nodes/edges
- Animations: edge appearance (dashed → solid), threat accumulation (node pulses red), tool degradation (icon dims)
- Touch: drag tools from palette to diagram. Tap node/edge for info popup.

**Content:**
- 8-10 node types (factory, shipping hub, region, rogue lab, shell company, distributed cluster, etc.)
- 6 tool types
- ~60-80 event cards (institutional, political, research, algorithmic)
- 10-15 death messages with spatial diagrams showing the failure point

### Open questions

1. **Fixed vs dynamic layout?** Fixed layout (predetermined positions for node types) is more learnable but less replayable. Dynamic (force-directed, varies each game) is more replayable but harder to learn. Probably: fixed layout with randomized which-nodes-appear-when.

2. **How many tools?** Starting with 2, growing to 6 over a session. Total budget per turn: 3-5 tools placed. This means always fewer tools than needed — coverage is always incomplete.

3. **Real-time or turn-based?** Turn-based is safer for mobile (no time pressure during placement). But mild time pressure ("threats advance each second you don't end your turn") could add tension. Probably: turn-based for MVP.

4. **How literal should the supply chain be?** Using "ASML," "TSMC," and real entity names teaches real-world structure but risks dating the game. Abstract names ("The Factory," "The Port") are timeless but less grounded. Probably: real names in early versions, assess during playtesting.

5. **Diagram complexity ceiling.** At 8-10 nodes with multiple edges and 5-6 tools, the diagram gets busy. Need visual hierarchy: active threats brighten, quiet nodes dim. Tool placement should feel manageable, not overwhelming.
