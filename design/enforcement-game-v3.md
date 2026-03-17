# THE BRIEF — Enforcement Tool-Deployment Game

## Why This Mechanic Maximizes the Teaching Goal

The project goal: after playing, a zero-knowledge person understands what enforcement tools exist, what the job involves, and why the outcome is uncertain.

The critical design choice: **what does the player's decision DO?**

Most game mechanics have the player making META-decisions — prioritize, allocate, manage. These teach "enforcement is hard" but not "how enforcement works." A player who spends 50 sessions triaging intelligence items learns to prioritize but still can't explain what a satellite thermal scan detects or why distributed training evades chip tracking.

THE BRIEF puts the player's decision AT the domain level: **you receive a threat signal, you choose which enforcement tool to deploy, and you see whether that tool catches that evasion method.** Every single decision IS a domain lesson. The player learns "satellite thermal imaging catches undeclared facilities" by deploying satellites against undeclared facilities. They learn "distributed training evades satellite monitoring" by deploying a satellite and failing. The game teaches through tool-threat matching, not through text descriptions of tool-threat matching.

This is combined with triage (multiple signals, limited capacity) and delegation (your institution handles what you can't), which teach the management layer: why enforcement fails even with good tools.

**The three things the player must learn, and how the mechanic creates each:**

1. **What tools exist:** The player chooses between satellite monitoring, inspection teams, chip registry checks, informant networks, financial investigation, power grid analysis. They learn each tool's strengths and weaknesses through use, not description.

2. **What the job involves:** Signals flood in. You can only handle some personally. Your team handles the rest — sometimes well, sometimes not. Political constraints limit which tools you can deploy where. The job is: constant triage, constant matching of tool to threat, never enough capacity.

3. **Why the outcome is uncertain:** Adversary evasion methods evolve (distributed training replaces centralized facilities). Tools degrade (inspectors get captured, satellites get politically defunded). Algorithmic progress shrinks the hardware needed for dangerous AI. The player dies repeatedly from different failure modes, each caused by a different gap in their tooling or judgment.

---

## The Game

### Core Loop (one round, ~30-45 seconds)

**1. Signals arrive.** 3-4 threat signals appear (one per advisor, presented sequentially). Each describes an anomaly, a report, or an intelligence tip. Early signals include built-in explanations for zero-knowledge players.

**2. Triage.** The player selects 1-2 signals to handle personally (limited action points). The rest are delegated to the advisor who reported them.

**3. Deploy.** For each signal the player handles: choose from 3-4 enforcement tools. The tool choice is the core domain decision — "which instrument catches this type of threat?"

**4. Results.** Deployed tool returns a result: detection, partial detection, miss, or false alarm. Each result teaches something about the tool-threat relationship. Delegated signals show the advisor's tool choice and outcome (which may be suboptimal).

**5. Consequences.** Caught threats are disrupted. Missed threats accumulate compute toward a rogue training run. Algorithmic progress ticks. Enforcement capacity adjusts. Political events constrain the next round.

### What the Player Decides (and What Each Decision Teaches)

| Decision | What it teaches |
|---|---|
| Which signal to handle personally | Prioritization — some threats are more dangerous, some are more time-sensitive, some your team will bungle |
| Which tool to deploy against a threat | **The enforcement domain itself** — what each tool detects, what each evasion method looks like, which combinations work |
| Whether to accept delegation outcomes | Institutional trust — when your team's choices are "good enough" vs when their calibration has drifted |

The tool-deployment decision is what makes this concept maximize the project goal. No other mechanic makes "which enforcement instrument catches this evasion method" the player's core action.

---

## First Session Walkthrough

### Round 1 — The Basics (2 signals, 2 action points, no triage)

**Vasquez (Intelligence):** "Director, our satellites detected a heat plume over an industrial zone in Region X. Heat means compute — processors generate heat when they run. This facility isn't in our registry of declared compute sites."

Tools: **[Satellite close-up scan]** — higher-resolution thermal image. **[Dispatch inspection team]** — physical visit. **[Check chip registry]** — see if chips at that address were registered.

You pick inspection team. Result: inspectors find a warehouse with 600 AI chips running unauthorized training workloads. Chips seized, facility shut down.

**Teaching:** Heat = compute. Undeclared facilities exist. Inspection teams can physically verify and seize hardware.

**Okafor (Supply Chain):** "TSMC — the only company that can manufacture the most advanced AI chips — reports 3,400 chips from last quarter still marked 'in transit.' They left the factory but never arrived at their registered destination."

Tools: **[Trace shipping records]** — follow the logistics chain. **[Financial investigation]** — follow the money. **[Alert destination country inspectors]** — ask the receiving country to look.

You pick trace shipping records. Result: shipment was rerouted through a transshipment port. Trail goes cold at a bonded warehouse in a third country.

**Teaching:** Chips can be diverted in transit. Shipping records can be manipulated. Transshipment through third countries is an evasion method.

### Round 3 — Triage + Tool Choice

Three advisors now, still 2 action points. Must delegate one.

**Vasquez:** "Multiple small power anomalies across 30 residential addresses in Region Y. None exceeds our monitoring threshold individually, but the pattern is unusual."

**Okafor:** "Three new companies registered in Singapore this week. All ordered AI chips with similar end-user certificates. Looks like a shell company network."

**Kim (Legal):** "Region Z is demanding we reduce satellite surveillance over their territory. They're calling it a sovereignty violation."

Most players delegate Kim (seems like politics, not enforcement). They handle Vasquez and Okafor.

For Vasquez's signal — the right tool matters:
- **[Satellite thermal scan]** → each individual site is too small to resolve. Inconclusive.
- **[Power grid aggregate analysis]** → reveals coordinated usage pattern across all 30 sites. It's distributed training — one training run split across 30 small clusters.
- **[Dispatch inspectors to a sample]** → inspectors find a few consumer GPUs in a garage. Doesn't reveal the larger pattern.

If the player picks satellite: they learn satellites can't catch distributed training. If they pick power grid: they learn that aggregate power analysis catches what spatial monitoring misses. If they pick inspectors: they learn that sampling misses distributed threats.

**This tool-choice mistake IS the most important thing the game can teach.** The player now understands, through their own failure, that monitoring methods must match threat types.

Meanwhile, Kim was delegated. She negotiated a compromise: reduced satellite coverage in exchange for self-reported audits. The player sees this result next round but can't reverse it.

### Rounds 6-10 — Tools and Threats Evolve

New tools unlock (informant networks, financial intelligence, power grid monitoring). New threats appear (turnkey proliferation brokers, state-sponsored programs, insider compromise). The player develops calibration: "distributed = power grid, shells = financial, insider = informant."

But then: their inspection teams start returning "no findings" on signals that clearly warranted investigation. Did the team get captured? Were they bribed? Was the evidence moved before they arrived?

A new advisor, **Yilmaz (Internal Affairs)**, appears. Her signals are about the agency itself.

### Death — Round 12

Your satellite coverage over Region Z was reduced (Kim's delegation from round 3). Algorithmic progress lowered the compute threshold. A small cluster in Region Z — 800 chips, undetectable at your reduced surveillance level — completed a training run.

**Death screen:**

> **An unauthorized training run succeeded in Region Z.**
>
> 800 chips, assembled gradually in a facility you couldn't see. Your satellite coverage was reduced by the sovereignty compromise your Legal Counsel negotiated in Round 3. Algorithmic progress since then meant 800 chips were enough — a threshold that would have required 5,000 chips when the game started.
>
> The signal you needed was the diplomatic complaint. Political constraints ARE enforcement constraints.

### After 3 Sessions

The player has learned through tool deployment:
- Satellites catch large undeclared facilities, not small distributed clusters
- Power grid analysis catches distributed training that spatial monitoring misses
- Financial investigation catches shell company networks
- Inspection teams confirm on the ground but can be compromised
- Informant networks catch what tech misses but are unreliable
- Chip registries track the supply chain but can be falsified
- Diplomatic signals are enforcement signals in disguise

They learned this by USING tools, not by reading about them.

---

## The Learning Arc

### Phase 1: Foundation (Rounds 1-3)
**Tools available:** Satellite, inspection teams, chip registry
**Threats:** Undeclared facilities, missing chip shipments, unregistered compute
**Player learns:** What each basic tool does. What heat signatures, chip manifests, and declared/undeclared facilities mean.

### Phase 2: First Evasion (Rounds 3-6)
**Tools added:** Financial investigation, power grid analysis
**Threats:** Shell companies, forged certificates, distributed training, transshipment
**Player learns:** Evasion methods exist and require different tools. Tool-threat mismatch = miss. Distributed training evades spatial monitoring.

### Phase 3: Escalation (Rounds 6-10)
**Tools added:** Informant network, KYC enforcement
**Threats:** Turnkey proliferation networks, state-sponsored programs, algorithm papers reducing thresholds, dual-use facilities
**Player learns:** The threat evolves faster than the toolbox. New tools are politically costly. Multiple tools needed in sequence for complex threats.

### Phase 4: Institutional Strain (Rounds 10-15)
**Tools degrade:** Inspection teams return unreliable results. Satellite coverage reduced by political pressure. Financial monitoring evaded through cryptocurrency. Informants compromised.
**Threats:** Same as Phase 3 plus internal problems (captured inspectors, leaked intelligence, budget cuts)
**Player learns:** Tools degrade because the institutions behind them degrade. Regulatory capture, cultural capture, resource constraints. The toolbox shrinks while threats grow.

### Phase 5: Endgame (Rounds 15+)
**Threshold drops:** Consumer hardware becoming sufficient for dangerous training. Algorithmic efficiency has eroded the "detectable" threshold.
**Player learns:** The race: can enforcement hold together long enough for safety research to finish? Success requires: maintaining tools, catching evolving threats, surviving institutional decay, AND luck.

---

## Institutional Decay Through Tool Degradation

The player doesn't see a "decay meter." Instead, their tools stop working as well:

**Early game:** Inspectors find what's there. Satellite data is accurate. Financial trails are followable.

**Mid game (designed feedback):** An inspection returns "no significant findings." Two rounds later, a different signal reveals the facility was operating. The player realizes: inspectors missed it. Was it incompetence? Corruption? They can't tell — but they start second-guessing delegation results.

**Late game:** The player deploys a tool and the result contradicts physical evidence. Internal Affairs reveals systematic problems: inspectors filing template reports, analysts auto-approving manifests, informants feeding false data. The institution itself is failing.

This teaches institutional decay through felt tool unreliability, not through a number. The player's trust in their own instruments erodes — which is exactly what happens to real enforcement agencies over decades.

**Delegation amplifies decay:** When the player delegates a signal, the advisor chooses a tool and handles it. Early game: advisors choose well. Mid game: advisors increasingly choose the wrong tool or the politically safe tool. Late game: delegation results become actively misleading. The player learns: you can't delegate your way through institutional decay. But you can't handle everything personally either.

---

## Why Not Other Concepts

**Card swipe (Reigns):** Player makes binary meta-decisions. Teaches "enforcement has tradeoffs." Does NOT teach what the tools are, how adversaries evade, or why specific tools catch specific threats. The player develops no enforcement calibration.

**Triage only (pure BRIEF v1):** Player decides what to prioritize. Teaches management, not domain. After 10 sessions, the player can triage but can't explain what satellite thermal monitoring detects.

**Map/spatial:** Player allocates coverage. Teaches "enforcement is a coverage problem." But geographic coverage is ONE dimension of enforcement. Misses tool-threat matching, institutional dynamics, and the social/political layer.

**Document inspection (Papers Please):** Player spots discrepancies in reports. Teaches rules and attention. Does NOT teach why rules exist, how they fail, or how adversaries adapt.

**Containment/spreading (Plague Inc):** Player manages spread at macro level. Teaches "coordination is hard." Does NOT teach what enforcement tools exist or what evasion methods look like at the operational level.

THE BRIEF's tool-deployment mechanic is the only one where the player's core decision IS a domain lesson. This is why it maximizes the teaching goal.

---

## Game State

**Enforcement capacity** — starts full, degrades when threats are missed, tools fail, or political constraints tighten. At zero: catastrophic failure. Visible as a meter.

**The race** — two bars approaching each other. Safety research progresses upward (slowly). The "dangerous threshold" drops downward (algorithmic progress reducing hardware needed). When they meet: enforcement can't prevent consumer-hardware training runs. If safety completes first: win. Visible as two converging lines.

**Political context** — exogenous events that constrain which tools are available where. Not player-managed. Appears as text context on signals ("Note: satellite coverage over Region Z is restricted per diplomatic agreement").

---

## Session Structure

- 8-12 rounds per session
- Each round: ~30-45 seconds (see signals, triage, deploy tool, see results)
- Total: ~5-7 minutes per session
- Die-and-restart loop: death is frequent, each death teaches a specific failure mode
- Player knowledge carries over between sessions
- First few sessions: confusing (learning vocabulary). By session 3-5: player has calibration and domain knowledge.

---

## Open Questions

1. **How many tools per deployment choice?** 3 might be cleaner than 4 on mobile. But fewer tools = less domain coverage per round.

2. **How explicit should tool-threat matching be?** Fully learnable through experience (no hints) rewards replay but punishes first sessions. Some scaffolding ("this tool works best against spatial threats") might smooth onboarding.

3. **Consolidation phase:** Include chip supply chain consolidation as rounds 1-2 (player establishes monitoring) or start post-consolidation (player maintains enforcement from day one)?

4. **How many signals per round?** 3-4 with 1-2 action points is the current design. More signals = more triage. Fewer = more focus on tool choice.

5. **How deep should the delegation layer go?** Minimal: advisor handles delegated item, player sees one-line result. Deep: advisor personality, competence tracking, detailed delegation outcomes. Deeper adds institutional teaching but complexity.
