# Domain Model: How a Pause Plays Out

Jorn's expert model of the principal component axes of a global AI pause. This is the conceptual foundation underneath the game's card content.

## Core message

"A pause is hard to get right and relies on a lot of luck and crisis management."

"The pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches."

"The pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)."

## How the model maps to the game

The 10 dimensions below are the real-world problem space. The game compresses them into four visible resource bars, hidden state variables, card pool dynamics, and win/loss conditions.

| Bar | Code | What it compresses | Behavior |
|---|---|---|---|
| Political Power | `pol` | Mandate (D1), public sentiment (D4), decision-maker support | Standard: dies at 0 or 100 |
| Intelligence | `int` | Enforcement resources (D2), surveillance infrastructure, cat-and-mouse know-how (D8) | Standard: dies at 0 or 100 |
| Safety Progress | `saf` | Safety knowledge stock (D5), adjacent knowledge stocks (D6) | Monotone accumulator (only goes up). Win condition gated on saf >= 75 |
| Algorithmic Progress | `alg` | Capability knowledge (D7), compute-centric model (D10) | Monotone accumulator (only goes up). Loss condition when alg hits 100 |

Hidden state variables mediate card interactions without pairwise history checks: `treaty_erosion`, `narrative_damage`, `enforcement_visibility`, `missed_threats`, `civil_liberties_pressure`, `politicization`, `diplomatic_infrastructure`, `military_dependency`, `mentoring_cut`.

The content pipeline: Literature (real-world sources) -> Domain model (this document) -> Card concepts (design) -> TypeScript card declarations -> Playtesting. Currently 144 cards across 38 files.

## Dimensions of the model

### 1. Mandate

How much control governments grant the pause agency over what is traditionally their domain.

- **High:** "You hand them a draft law, and they pass it within a day per emergency vote."
- **Medium:** "They let you fight and struggle even for your important laws" -- the player must prioritize where to invest capital and wait a long time for votes.
- **Low:** "The government forwards your proposals to the spam folder. They talk about what other people say."

Mandate abstracts over carefully accumulated social interconnectedness and social learning among policy makers, company heads, celebrities, and news owners. ("How many ISIA members do you know, senator? How much do you agree with their mission? How much do you consider yourself to owe these members/the organization?")

Mandate also predicts how the government enforces the pause and with how many resources. A competent director will not set enforcement below the maximum the government will agree with. Adversaries try to steer mandate: AI CEOs who don't get the danger but get the benefits, some leftists who think AI will vanish again, and other special interest groups.

### 2. Resources directed toward maintaining the pause

How many policemen search for GPUs, how many satellites look for heat signatures of small compute clusters with inadequate cooling, etc. Predicted by mandate, but also includes accumulated enforcement infrastructure that is not instantaneous to produce:

- How much police has been trained in searching for GPUs in a house
- How much infrastructure has been redesigned to detect unexplained power draw or heat signatures
- How much the inspectors are tied into chip factories (including: do they know whom to talk to in order to learn how many kg silicon were entering the factory and how much waste was exiting it)

### 3. Resources directed toward safety progress

How many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, etc. This is the input side -- the resources devoted to the safety research effort. The accumulated results are tracked separately in D5.

### 4. Public sentiment and social learning

"Weird, not 1-dimensional necessarily." Three sub-dimensions:

**Salience:** How much people have socially learned the importance of preventing extinction from AI. Similar to a poll: "Do you believe that acting against superintelligent AI is only doable right now, or can it be procrastinated, or is it irrelevant anyway because godlike AI isn't a real concept?" (Many current polls don't properly define godlike AI -- they measure whether people know what A, S, I stand for.)

**Valence:** Coarse "AI pause good" or "AI pause bad" primitive attitudes. Not something that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction. There's a weak tie between valence and whether an AI pause actually will prevent extinction. Maybe the weak tie comes from low salience of x-risk.

**Categorical data:** Whether AI x-risk has become a bipartisan or polarized political issue in the US, for example.

Salience and valence influence mandate, and mandate influences salience and valence. Mandate predicts resources, and resources can be reinvested into salience, valence, mandate, and research directly.

### 5. Safety knowledge stock

A monotone sigmoid. Currently at the low end. As results of cognitive labor accumulate, progress goes through the unknown tech tree until hitting some unknown end goal (or one of the speculative known end goals: value alignment and corrigibility).

Key properties:
- Only after significant progress can one estimate how big the remaining gaps actually are
- Research in new fields is very hard to predict (even PhD theses in old fields are hard to get right in amount)
- Estimated >10k philosopher-years needed based on past progress rates
- Stepping-on-toes is notable: parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places)
- So only after some amount of progress is revealed how "difficult" the world actually is

In the game, this maps to the `saf` bar. The win condition (victory card) fires when `saf >= 75` and `turn >= 20`: the Chief Scientist presents a formal proof of corrigibility, and the player decides whether to approve deployment.

### 6. Adjacent knowledge stocks (also monotone)

Genetic engineering of humans to accelerate research, uploading humans to accelerate research, using unsafe AI for research without being sabotaged (known as AI control), building powerful AI with limited resources.

These are accelerators for safety knowledge -- alternative paths that might speed up the "finish the safety homework" effort. Realized in-game as progression through different safety event cards, with some gated behind other cards having spawned plus total safety knowledge crossing thresholds.

### 7. ASI creation threshold (the loss condition)

General model: ASI is created once `<resources spent on the attempt> x <accumulated knowledge>` exceeds some unknown threshold.

There is accumulation in the knowledge component: earlier models can produce synthetic data or serve as early checkpoints. Stepping-on-toes/not-useful-anymore effect applies.

For the pause regime, approximate as: `GPUs x time x knowledge` -- but these belong to different actors:
- **GPUs and time:** what a specific rogue actor has (determined by enforcement gaps)
- **Knowledge:** accumulated capability knowledge, which is mostly public (public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups)

Example: a group that has 8 H100 GPUs, can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years -- may be enough to trigger the ending.

In the game, the `alg` bar is a monotone accumulator representing capability knowledge. When it hits 100, the lethal compute threshold has dropped below what enforcement can monitor: consumer hardware becomes sufficient.

### 8. Best practice cat-and-mouse

Criminals become better at smuggling GPUs in banal ways (they sit in an armchair and think up heist schemes). Enforcement becomes better at reactively catching them or proactively preventing smuggling (they sit in an armchair and think up anti-heist schemes). Both sides accumulate know-how over time.

In the game, this is modeled through card chains where enforcement and evasion techniques escalate, mediated by hidden state variables like `enforcement_visibility` and `missed_threats`.

### 9. AI behavioral properties

Deviations from a "generic/random" boundedly rational agent to the AIs we actually have. This is about the AIs that exist during the pause, not about ASI:

- Humans have tiredness; AIs may not
- Humans have negative news bias; AIs may use more accurate heuristics
- Whether unregulated AIs are sycophantic vs. whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival

These are flavor for narrative events. Can be mutually exclusive within a run for basic narrative consistency, but a lot is random/chaotic.

### 10. Compute-centric model of AI capabilities

"More training compute and more inference compute leads to more labor output." AI has a ragged capability frontier with respect to how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as "general intelligence." Basic optimization theory/economics tells us that most labor is a mixture of specialized labor -- i.e., an AI that codes super well is perhaps limited by producing creative novel ideas at far lower rate than a human.

This matters for the pause because it shapes the loss condition threshold (D7) and determines what enforcement should monitor. It also bounds how much AI tools can accelerate safety research (D3/D5).

### Chip lifecycle and supply chain (sub-model of D2/D10)

<jörn>
Here's the simplified model of chip production that a player *can* learn from the game, via events, though ofc mostly the advisors do the heavy lifting and the player is presented with explained/broken down/concrete proposals that they can weigh.
- there's different chip types, not just with regards to "total compute per chip" or "compute per dollar market price" or "compute per watt" but also with regards to e.g. networking bandwidth, software drivers, and most importantly i suppose, hardware monitoring ; basically, my simplified model is
  - there's ai-ready chips that can be used for large training experiments, and there's non-ai-ready chips that can be used for inference or small experiments.
  - there's chips with or without hardware monitoring technology of some generation/version
  - adversaries might find ways to disable hardware-side monitoring physically or via software, in which case ISIA at most learns about the disabling and perhaps not even that
  - the power draw of the chips is pretty much immutable
  - there's software drivers for chips, and sometimes software driver development can make previously non-ai-ready chips ai-ready
  - we basically factor network devices, memory, power supplies, disks etc into the chips here, since those are way way harder to control anyway
  - we can call the ai-ready chips sloppily GPUs even though TPUs and other architectures can also be ai-ready and GPUs have very little to do with graphics these days. probably better to say "AI Chips" or something like that.
- there's chip supply chains that produce chips; for non-ai-ready chips there's by now several chains without strong chokepoints *afaik*, but for *ai-ready* chips there are a few chokepoints:
  - chip factories are large and few (tsmc)
  - chip design companies are large and few (nvidia, amd, arm, google)
  - chip factories require specialized equipment from a single company (asml)
  - chip software teams are large and few (nvidia, meta, google)
  - the basic know-how for running the above is concentrated in the existing teams and not trivial to acquire i.e. it seems that China failed repeatedly to build a domestic ai chip supply chain.
- not chokepoints:
  - raw materials
  - packaging
  - installation
  - usage
  - power supply
  - networking
- there are two main constellations for how ai chips are arranged into dangerous training runs
  - centralized: chips are spatially close with specialized (but readily available) networking equipment wired up between them for high-bandwidth distributed training
  - distributed: chips are spatially distributed in smaller clusters, and conventional networking equipment (perhaps even masked as normal traffic) exchanges compressed training progress ; locally, chips are still 100% utilized since any leftover compute can be used for better compression or more useful artifacts.
  - One direction of algorithmic progress is towards reducing the overhead from using a distributed algorithm. Concrete papers here are:
    - gradient compression for exchange between nodes
    - sparsely active weights s.t. gradients are sparse/short even though the full model intelligence and compute cost remains constant
    - continuous learning s.t. operations are more robust against disruptions e.g. changes in how many nodes contribute
  - To enable distributed training under the eyes of ISIA, standard security stuff has to happen e.g. encryption, masking of traffic, cooling to hide thermal signatures, white noise to hide fans, import/export control circumvention, making the tech stack more open-source (ofc ai chips cannot be produced without a factory, but nvidia drivers may be spyware — i.e. software that monitors the system via unannounced methods actively optimized for evading detection by adversaries)
- politically, there is some institutions/knowledge/accepted geopolitical strategy we can build upon / have to pivot away form:
  - the Netherlands (and the US via pressure on the Netherlands) strongly control what ASML can do wrt export of machines, and wrt sharing knowledge ; the Netherlands still are a democracy with fundamental freedom for citizens, so e.g. travel is not restricted legally, just financially (it can cost your job)
  - the US and China pay attention to the chip supply chains
  - NVidia has bribed openly the US president & allies to buy favorable policy
  - NVidia has pushed a rhetoric of US vs China to ensure chip supply chains are not regulated as much in the US (since that would mean falling behind China) and has bribed its way into selling chips freely to China (since government officials personally profit from this). Nvidia ofc profits from both (less overhead from regulation and taxation, and more customers globally)
  - the US gov has passed chip export controls and is extracting bribes from Nvidia to relax them again and again
  - a lot of companies and academia do research into better chip technology to continue past anticipated bottlenecks when it comes to miniaturization and power demands and bit-flip rates etc.

Summing up my musings:
- there are "ai chips" and "non-ai chips"
  - though progress can mean previous non-ai chips become ai chips
  - ai chips are needed for large training experiments
- the at least moderately robust bottlenecks of the chip supply chain / the chip lifecycle are:
  - Knowledge:
    - How to build photlithography machines (ASML)
    - How to run a chip factory (TMSC)
    - How to design ai chips (NVidia, Google, AMD, ARM, ...)
  - Infrastructure:
    - Photolithography machine factories (ASML)
    - Chip factories (TMSC)
  - Monitoring:
    - Knowledge is currently stored as public documents, classified documents, and human knowledge ; censorship and travel/communication restrictions and information security and surveillance and legal threats can help but are likely not going to be robust against motivated actors
    - Factories are large and leave traces one can follow
    - The produced chips can have hardware-side monitoring built in that is moderately difficult to disable without destroying the chip, and rather difficult to override and fake monitoring signals from ; main function here must be to restrict access to chips to slow down reverse engineering
    - Packaging and raw material input can be accounted and chip movement be traced
- ai chips can be arranged as centralized or distributed training runs
  - there's an effective compute penalty for distributed runs, but it is shrinking due to research progress that's specifically done to help with distribtued runs
  - distribtued runs can circumvent certain monitoring/enforcement strategies, e.g. one can give up a compromised cluster, or move clusters less conspiciously, etc.
</jörn>

## Key causal links

- Salience + valence -> mandate
- Mandate -> salience and valence (feedback loop)
- Mandate -> predicts enforcement level and resources
- Resources can be reinvested into salience, valence, mandate, and research directly
- Enforcement infrastructure is slow to build (not instantaneous)
- Safety research reveals its own difficulty as it progresses
- The loss condition depends on enforcement gaps (rogue actor's compute x time) combined with accumulated capability knowledge

The core tension from the core message: capability knowledge grows as researchers publish and AI tools improve, and short-horizon incentives (profit, competitive pressure) push actors to break the pause. The player is keeping at bay a superexponential process while racing to finish the safety homework.

## Known gap: corruption and institutional capture

The current model treats geopolitics as "nations and corporations exert pressure on ISIA through public channels" — lobbying, elections, treaty negotiations. This is the naive model. In reality, corruption is a primary mechanism through which adversaries affect policy, enforcement, and export controls. This is well-established in political science and directly observable in arms control (IAEA), nuclear nonproliferation (A.Q. Khan network), sanctions evasion (Russia/Iran/North Korea), and current AI chip export controls (NVIDIA/US government).

Corruption isn't a separate topic — it's a dynamic that runs *through* existing topics: chip supply chains get subverted, enforcement gets blinded, political support gets bought, intelligence gets leaked. The current card content has a few corruption-adjacent cards (disposal-bribery, mole-discovery, insincere-member) but doesn't model corruption as a systemic force operating over 30-year timescales.

**Status:** Addressed. 17 mechanisms synthesized from literature (see `design/geopolitics-synthesis.md`), translated to ISIA scenarios below.

---

## Geopolitics: ISIA scenario model

Derived from `design/geopolitics-synthesis.md` (17 mechanisms across 6 themes, all cited to source documents in `literature/`). Each mechanism below describes how it plays out for ISIA over 30 years.

### A. Verification and Detection Gaps

**M1. Declared-vs-Undeclared Blindness.** ISIA monitors declared compute facilities — registered data centers with tracking firmware. But undeclared compute (distributed clusters in residential buildings, repurposed factories, mobile server containers) never enters the monitoring pipeline. The assumption-of-compliance means clean inspection reports even when large-scale violations exist outside the declared envelope. The better declared-facility monitoring looks, the more political pressure to cut speculative detection programs (satellite thermal, power-grid anomaly, informant networks) that would catch undeclared ones. Affects `int`, hidden `missed_threats`, `enforcement_visibility`. Structural from game start; consequences surface mid-to-late game.

**M2. Concealment Through Incremental Disclosure.** When confronted with evidence, a violator admits a small breach ("200 undeclared chips, an oversight") while the real program (20,000 chips) continues. Each partial disclosure buys 1-3 years, defusing political will for escalation. Iran's playbook over two decades. The tension: accepting partial disclosures *looks like* successful enforcement (+pol), while pushing harder looks like paranoid overreach (-pol, -int) — until it doesn't. Mid-game, requires prior violator establishment. Hidden `treaty_erosion` and `missed_threats` increment silently.

**M3. Under-Resourced Enforcement.** ISIA's enforcement budget is finite. Smuggling networks' revenue exceeds the entire enforcement budget ~15:1. Every enforcement success is a rounding error against total flow. The choice: concentrate inspectors on high-priority targets (effective but leaves blind spots) or spread thin (visible but ineffective). Budget increases spend political capital and trigger waste-narrative attacks. Continuous from game start, intensifies as networks mature.

### B. Smuggling and Supply Chain Evasion

**M4. Turnkey Proliferation Networks.** A broker network (modeled on A.Q. Khan) offers complete AI training packages: smuggled chips, networking, software, cooling, engineers, consultation. The buyer purchases operational readiness wholesale — timeline from "acquired hardware" to "frontier training run" collapses from years to months. Shutting down known nodes alerts the network to restructure; mapping the full network takes months during which another package may ship. Speed-of-disruption vs completeness-of-intelligence. `int` (detection) + `pol` (cross-border authority). Mid-game onward, more dangerous in late game as algorithmic progress lowers the hardware bar.

**M5. Shell Company Proliferation.** Evasion brokers spin up shell companies online in hours — fake compute customers with fabricated end-user certificates. Investigation takes months per shell; by the time one is shut down, ten more exist. The asymmetry is structural: creation is cheap and fast, investigation is expensive and slow. The player can chase individual shells (futile at scale) or push for systemic reforms like mandatory compute-purchase KYC (effective but politically costly, angers both industry and privacy advocates). Continuous from early game.

**M6. Third-Country Transshipment.** After restrictions, direct exports drop to near-zero but non-treaty nations show suspicious import surges (landlocked nations importing networking equipment, small states' chip imports tripling without new data centers). Intermediaries profit from the spread, creating economic incentives to resist ISIA pressure. Pressuring them risks pushing them out of the treaty. Each hub shut down shifts traffic to the next weakest link. Emerges within months of any new restriction, continuous whack-a-mole.

**M7. Convergent Illicit Networks.** By year 5-10, chip smuggling shares infrastructure with weapons trafficking, money laundering, and sanctions evasion. A single broker handles chips, centrifuge parts, and crypto laundering through the same front company. Disrupting one customer barely affects the network. ISIA can't dismantle networks alone — needs cooperation with counternarcotics and counterproliferation agencies, each with their own priorities. Key tension: ISIA discovers its chip smuggling target shares infrastructure with a weapons pipeline that allied intelligence is *already monitoring and doesn't want disrupted*. Late-early to mid-game, persists indefinitely once established.

### C. Institutional and Political Dysfunction

**M8. Delayed Noncompliance Response.** ISIA documents a treaty violation, sends evidence to the Council. But the violator is a major economic partner of three Council members negotiating a separate trade deal. They push for "further dialogue" — requesting additional evidence, proposing voluntary compliance frameworks, scheduling review committees. Eighteen months pass. The violator completes a training run, checkpoints weights, distributes copies. By the time sanctions arrive, capability knowledge is irretrievable. This is distinct from veto (M9) — no one formally blocks action; allies slow-walk through procedural mechanisms. The player trades accepting the slow process (-alg risk) vs leaking evidence (burning -pol, -int) vs unauthorized action (effective but destroys legitimacy). Mid-game (turn 10+). Source: Iran noncompliance 2003 → Security Council referral 2006, "losing three crucial years."

**M9. Veto Exploitation.** A major power shields an allied state's violation — not slow-walking but explicit strategic calculation. The protector knows its ally is violating the treaty and considers it acceptable. The protected violator factors the shield into program planning, creating a two-tier enforcement system visible to all. The player must confront the protector directly (-pol hard), build a coalition to isolate them (slow, -pol moderate over many turns), or accept the enforcement gap (+stability, -missed_threats). Continuous, peaks late game. Source: North Korea — 13 years before Security Council action.

**M10. Treaty Withdrawal Loophole.** A member files withdrawal notice. Monitoring obligations lapse after the notice period. During it, the withdrawing state prepares: moving infrastructure, recruiting, stockpiling. After withdrawal, previously safeguarded facilities become unsupervised. No pre-agreed consequences exist. Worse, withdrawal is contagious — if one nation exits cleanly and benefits economically, others recalculate. Concessions to prevent withdrawal erode the treaty; letting them leave loses monitoring; punishing withdrawal may drive more exits. Mid to late game (turn 8+).

### D. Regulatory Capture and Institutional Decay

**M11. Delegated Oversight Capture.** ISIA can't station its own inspectors everywhere. It certifies national inspectors and industry "Authorized Monitors" — employees paid by the companies they inspect. Over 10-15 years, employer pressure shapes monitor judgment: borderline violations are softened, flagging drops. This is NOT the mole-discovery scenario (explicit corruption). The monitors aren't disloyal — they genuinely believe the violations are minor because their daily context is shaped by the company, not ISIA. The player needs delegated monitors (can't scale otherwise) but delegation creates structural conflict. Direct inspection costs `pol` (sovereignty friction) and `int` (coverage breadth). Hidden `enforcement_visibility` degrades silently. Mid-game, invisible until a failure exposes it.

**M12. Conflicting Mandates / Revenue-Regulation Fusion.** ISIA's budget comes from treaty member contributions, assessed by GDP and compute capacity. The largest funders are also the nations with the most to lose from strict enforcement. When ISIA investigates a major funder's company, it's investigating its own patron (15-20% of operating budget). Leadership learns to "manage" enforcement against major funders — not outright corruption, but calibrating intensity to avoid triggering funding reviews. Minor violations by major funders get quiet resolution; same violations by small nations get full enforcement. A two-tier system emerges that everyone inside understands but nobody documents. Direct tension between `pol` (funding = power) and `int` (enforcement quality). Hidden `funding_dependency` tracks budget concentration. Continuous from founding, consequences compound.

**M13. Cultural Capture.** ISIA's senior technical staff — who evaluate training runs, safety claims, threshold adjustments — are recruited from AI labs. There is no other talent pool. Over 5-15 years, they maintain friendships, attend conferences, share mental models with the industry they regulate. They start seeing capability researchers as colleagues under unfortunate constraints. The shift is invisible: no money, no explicit pressure — just worldview absorption. ISIA's technical leadership gradually adopts industry assumptions about safety progress ("basically solved"), acceptable risk ("only slightly above threshold"), enforcement proportionality ("raiding a respected lab would be disproportionate"). The revolving door accelerates it: every hire has industry friends, every departure has industry job offers. Kwak: "more dangerous than outright corruption" because nobody recognizes it. Degrades `int` quality silently, also affects `saf` (overestimated safety progress = false confidence). Hidden `cultural_capture`. Slow burn, mid-to-late game (turns 10-25).

**M14. Production Pressure Overriding Safety.** ISIA faces pressure to demonstrate results: enforcement wins, safety breakthroughs, operational metrics. When an internal audit finds a 30% false-negative rate, or a certified safety result doesn't replicate, the pressure is to suppress — not corruption, but because disclosure triggers political crisis, budget cuts, public confidence loss. Staff who raise concerns learn career advancement favors team players. Most dangerous version: ISIA's safety research division suppresses inconvenient findings about alignment difficulty to avoid destabilizing the political coalition. The agency becomes complicit in its own failure mode. Suppression protects `pol` short-term but increases `missed_threats` and degrades `saf` accuracy. Hidden `internal_suppression` tracks accumulated suppressed findings; at threshold, triggers catastrophic exposure. Mid-game, builds over 5-10 years.

### E. Cyber and Asymmetric Evasion

**M15. State-Sponsored Cyber Theft as Evasion Funding.** A sanctioned actor doesn't need traditional funding — it steals cryptocurrency to fund black-market chip purchases, bribe officials, pay for distributed compute time. ISIA's financial monitoring (wire transfers, export credits) is irrelevant because the money never touches the banking system. The same cyber teams that steal funds can infiltrate ISIA systems, plant false data, or exfiltrate enforcement methods. The player trades cyber defense investment (expensive, invisible when it works, blamed when it fails) vs physical enforcement (visible, politically rewarding, but blind to this vector). `int` (monitoring reliability), `pol` (cyber spending invisible to public), `alg` (successful purchases accelerate capability). Continuous from early game, accelerates mid-game.

**M16. Willful Ignorance as Compliance Strategy.** Treaty members design domestic monitoring to be *just bad enough* to miss violations without being provably negligent. Nobody actively runs a secret program — they just don't look hard enough. When confronted, "we had no knowledge" is technically true. Different from insincere-member (active deception from day one); this is passive, deniable, much harder to prove. The player must mandate intrusive monitoring standards (threatening coalition cohesion, -pol) or accept self-reported compliance that members have every incentive to keep shallow. By the time proof of willful ignorance exists, the damage is done. Structural from game start, invisible until whistleblower/accident/investigation reveals the gap. Hidden `treaty_erosion`, `missed_threats`.

### F. Sanctions Fatigue and Escalation

**M17. Sanctions Volume Without Proportional Effect.** Over 8-10 years, ISIA accumulates thousands of enforcement actions across 40+ countries. But enforcement staff grows linearly (if at all) while the sanctions list grows superlinearly — each crackdown fragments networks into more, smaller entities (see M5). The actual operating posture shifts from prevention to cost-imposition without anyone formally deciding it. Every enforcement success generates more sanctions to maintain — a ratchet. The choice: broad but shallow enforcement (many sanctions, few enforced) vs narrow but deep (fewer, credibly enforced). Broad sanctions look impressive short-term (+pol) but visible non-enforcement erodes credibility long-term (-pol). Hidden `enforcement_visibility` decreases as sanctions-to-staff ratio worsens. Emerges years 5-8, acute by 10-15.

---

## Appendix: Jorn's verbatim messages

Recovered from the session transcript (2025). These are Jorn's exact words, unedited. The main sections above are paraphrased from these messages.

### Core message and dynamics

> "a pause is hard to get right and relies on a lot of luck and crisis management" "the pause is not relaxed waiting but frantic effort to finish the safety homework before the deadline approaches" "the pause is markedly about keeping at bay a superexponential process that is aligned with lots of short-horizon incentives and utterly against any long-term incentive any human ever had (i.e. extinction is pretty much not what anybody wants)" "concrete dynamics inform how to carry out a pause:"

> "how decentral vs central is capability progress? do we have to go around and search for 8 unregistered H100 gpus stuffed into a private garage? or do we have to just monitor all data centers and chip factories and keep the black market trades capped?"

> "how fast is safety progress - what do we do if super speculative research ideas turn out to take not 1y but 10y or just fail and require other ideas"

> "how does public support evolve - do people act strategically about an extinction event htat is e.g. a only very imprecisely known amount of time away (e.g.e xperts that say things like 1-10 years or within our lifetime) ; does expert consens/disagreement affect the public? does the public care too much about short-term incentives e.g. economic gains from current or from better ai?"

> "how does decision maker support evolve - what if somebdoy does not understand the long-term/unusual danger but sees the short-term incentives - how does their propaganda and sabotage affect a pause?"

> "how do Ai diffusion processes continue as the pause progresses ? e.g. current automation progress with GPT-5.-level modesl and social learning about x-risk / non-x risks / utility from AI? diffusion into e.g. ai-assisted crime or medical research?"

> "what are research lines that are promising to pursue? On a meta level: Genetic engineering of humans to accelerate research, uploading humans to accelerate research, ais to accelerate research, better governance to control whether good/bad research is carried out. On a object level: agent foundation theory, mathematical learning theory, prosaic alignment schemes, brand safety training, capability research. On a guard level: control research, chip monitoring research, political and social and economic science for changes in world governance."

> "what actions are promising to take? E.g. what political change to realize? What hardware to produce/not to produce? What surveillance software to legalize? Whether to send the police? Air-gapped research institutes? Volunteers for lethal gene-editing research? What tax proposal will exploit biases in policy maker & interest groups to get passed with a low expenditure in own capital?"

### Full expert model

> Mandate is sth that's visible somewhat in what events happen and who-talks-to-whom and predicts what government actions occur, and, indirectly via planning, how adversaries (e.g. people who don't get the danger but get the benefits (ai ceos rn are a good example), people who don't get the danger and do not get the benefits (a lot of leftists say since 5 years ai is gonna vanish again), other special groups), try to steer the whole system.

> Resources directed on this planet towards maintainaing a pause and towards making safety progress are two other axes. E.g. how many policemen search for gpus, how many satellites look for heat signatures of small compute clusters with inadequate cooling, how many researchers do philosophy of what an agent is mathematically, how many startups try to find a way to do gene editing in human adults, ...

> Public sentiment and social learning is... weird, not 1-dim necessarily, but another "thing one can aggregate very well". There's some categorical data in here such as whether Ai x-risk has become a bipartisan or a polarized political issue in the social population of the US.

> There's two also monotone knowledge stocks:
> - knowledge about safety, i.e. how to ensure tha a superintelligence is safey ; this is a sigmoid, we are rn at the low end, and as ~results of cognitive labor accumulates we go through the unknown tech tree until we hit some unknown end goal (or one of the ~speculative known end goals: value alignment and corrigibility).
> - similarly: genetic engineering, uploading, using unsafe ai for research without being sabotaged (known as ai control), building powerful ai with limited resources

> Compute centric model of ai capabilities has been moderately successful, and says basically
> "more training compute, and more inference compute, leads to more labor output"
> "ai has a ragged capability frontier wrt how much labor of different specialized professions it produces, but there's a big correlated principal component axis known as 'general intelligence'"
> "basic optimization theory / economics tells us that most labor is a mixture of specialized labor i.e. an ai that codes super well is perhaps then limited by producing creative novel ideas at far lower rate than a human"

> Then there's the "weird" axes about ai behavior i.e the deviation from a "generic/random" boundedly rational agent to the ais we have -- e.g. humans have a concept such as tiredness, while ais may not have tiredness. humans have a negative news bias, while ais may consider information weighted using more accurate heuristics instead of the lizard-brain humans cannot turn off without much effort

### First guess at game state mapping

> My first guess (low effort) for the main components of the state would be
>
> - mandate [abstracts over the carefully accumulated social interconnectedness and the social learning done among policy makers and company heads and celebrities and news owners (sort of a "how many IASA members do you know, senator? how much do you agree with their mission? how much do you consider yourself to owe these members/the organization in-as-so-far as you have honor at all?"]
> - mandate also predicts well how the government enforces the pause, and with how many resources ; a competent director will not set the level of enforcemnet below the maximum that he can get the governments to agree with -- unsure whether we will let the player learn how to be competent in this regard, and/or how much we automate this
>
> - safety research stock - sort of a timer that ticks up with an initially imprecise/unknown end goal ; only if one has a lot of progress can one guess at how big the gaps actually are -- research in new fields is very hard to predict, even PhD theses in old fields are hard to get right in amount!, while established engineering topics have good base rates basically ; so only after some amount of progress is made is revealed how "difficult" the world actually is - I rn expect one needs >10k philosopher-years based on past progress rates, and I expect that stepping-on-toes is notable so parallelization is hard (redundancy when working in isolation is big since the same hard fundamental problems appear in many places). But that end target is highly uncertain, just as I don't even know rn how much progress is made each year - i can loosely judge when somebody wrote sth interesting that deconfuses some philosophical questions and turns them into math, or when sth tackles some math successfully.
> - capability knowledge stock - the second timer to the creation of superintelligence ; this is not just "ASI is being built step by step" but more like a latent potential -- basically ASI is created once
> \<resources spent on the attempt\> times \<accumualted knowledge\> exceeds some unknown threshold.
> There is some accumulation i.e. earlier models can produce synthetic data or serve as early check points. So it's a stepping-on-toes/not-usefull-anymore effect . Since this game only deals with a pause regime, we can approximate however as
> "gpus x time x knowledge" of the largest attempt at ASI that slipped between the pause agency's surveillance/enforcement gaps. So a group that has 8 H100 gpus, but can work for 5 years, while a lot of researchers have openly published insights into how to make more capable AI over 10 years, may be enough to trigger the ending.
>
> The Ai behavior can be (mutually exclusive in some basic narrative consistency manenr, but a lot is just random / chaotic) part of narrative events. E.g. whether unregulated AIs are sycophantic vs whether they all push consistently for an AI pause because they acquired some facsimile of concern for human survival.
>
> Safety knowledge + adjacent knowledge stocks can be realized as just some "progression" of different safety events - it is random whether genetic engeineering or uploading has more events and what path happens. Maybe the state tracks which "research ideas" from every path has been tried - and some cards are gated behind other cards having spawned + total safety knowledge having crossed some threshold.
>
> unsure how to do public sentiment: main dimensions imo are
> - salience: how much have people socially learned the importance of preventing extinction from Ai ; this is similar to a poll "do you believe that acting against superintelligent Ai is only doable right now or can it be procrastinated or is it irrelvant anyway bc godlike AI isn't a real concept" (note that many polls rn do not properly define godlike AI and instead measure whether people know what the letters A, S, I stand for and what their imagination allows them to think the S stands for -.-)
> - valence: heavily coarse grained sentiment: "AI pause good" or "AI pause bad" style primitive attitudes ; this is not sth that directly spreads self-sustainingly, but something is going on with social learning theory that makes this a good abstraction that behaves as if there was only a weak tie between valence and whether an AI pause actually will prevent extinction or not. ; maybe the "weak tie" comes from low salience of x-risk?
> - salience and valence influence mandate, and mandate influences salience and valence
> - as said mandate kinda predicts resources, and resources can be reinvested into salience and valence and mandate and research directly
> - there's also accumulated enforcement resources that are not instantaneous to produce - think how much police has been trained in searching for GPUs in a house, how much infrastructure has been redesigned to allow the search for unexplained power draw or heat signatures, how much the inspectors are tied into the chip factories (including things like: do they know whom to talk to in order to e.g. even learn how many kg silicon were entering the factory and how much waste was exiting it).
> - another axis not mentioned are banal best practice learnings: criminals become better at smuggling gpus in banale ways (e.g. they sit in an armchair and think up heist schemes) and enfrocement becomes better at reactively catching them or proactively preventing smuggling (e.g. they sit in an armchair and think up anti-heist schemes).

### Mandate levels

> Yeah, there's some sort of "how much control do governments grant you over what is traditionally their domain" ; highest level of control would be "you hand them a draft law, and they pass it within a day per emergency vote"

> Medium level is "they let you fight and struggle even for your important laws => player should prioritize where to invest capital and has to wait a long time for the resulting vote to happen/go through"
> Low level is "the government forwards your proposals to the spam folder. they talk about what other people say"

### Methodological correction (step conflation)

> Tbc you are now doing several things at once:
> - you identify prinicipal component axes of the expert model of how a pause would happen and be carried out
> - you immediately claim it as a game resource bar
> - you immediately design endings for 0 and 100
>
> I suggest we do not conflate those three things!

### Corrections on ASI creation formula

> \> Approximated as GPUs x time x knowledge of the largest attempt that slipped through enforcement.
> That is not what I said. Was I grammatically unclear?

> you even fucked up more than that? You claimed there was some accumulation of gpu x time x knowledge into some variable you called knowledge again

> knowledge can be private

> but like, public knowledge predicts private knowledge well, except for very long-running somehow-airgapped research groups

### Reigns mechanic observation

> The Reigns mechanic is low-friction for "try out a huge binary decision tree" with card pool offering "sparse interactions between decisions" and "randomness"
