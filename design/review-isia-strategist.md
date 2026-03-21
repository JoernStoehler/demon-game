# ISIA Strategic Perspective on Chip Movement Events

Analysis from the ISIA Director-General's strategic viewpoint, grounded in domain model D2 (enforcement resources), D8 (cat-and-mouse), D10 (compute model), and geopolitics synthesis M1-M17.

---

## 1. Proactive Measures (each is a potential "invest now, pay later" card)

### Supply Chain Integrity

- **End-to-end chip custody protocol.** ISIA embeds inspectors at TSMC/Samsung fabs who witness wafer counts, cross-reference silicon input mass against chip output counts, and seal shipping containers with tamper-evident hardware. Cost: permanent inspector billets at every major fab (-int capacity elsewhere, -pol sovereignty friction with host nations). Payoff: factory-level diversion (the mislabeled-chips event) becomes much harder. Card concept: "Your Fab Liaison program costs 12% of your inspection budget. Fund it?" Left: fund it (reduces factory diversion events later). Right: redirect budget to field enforcement (more inspectors chasing chips already loose).

- **Chip destruction witnessing.** Instead of trusting contractors to destroy decommissioned chips, ISIA mandates in-house destruction with video verification and mass spectrometry confirmation of destroyed silicon. Expensive and slow, but closes the contractor-skimming loophole entirely. Card: "Decommissioning backlog is growing. Outsource destruction to clear it, or keep the slow but verified in-house process?"

- **Mandatory chip transit GPS seals.** Every chip shipment between declared facilities gets a GPS-tracked tamper-evident seal. If the seal breaks or deviates from the declared route, an alert fires. Industry hates the logistics overhead. Card: "Chip manufacturers want exemptions from transit seals for domestic shipments. Grant exemptions (-int on domestic transfers) or hold firm (-pol with industry)?"

- **Pre-positioned audit triggers.** ISIA establishes automatic audit triggers: if any facility's chip count deviates by more than 0.1% from records, a physical recount is mandatory within 72 hours. The threshold is tight enough to catch the insurance-fraud-fire scenario early. Card: "Your audit threshold caught 47 false alarms last quarter and one real diversion. Industry says you're crying wolf. Loosen the threshold?"

### Intelligence and Detection

- **Informant network in chip logistics.** ISIA cultivates paid informants among shipping companies, customs brokers, data center technicians, and chip resellers. This is how you find the containers with chips hidden in hydraulic systems -- tips, not scans. Card: "A shipping company employee offers to report suspicious cargo for $50K/year. Reliable intel or a liability?" (Connects to: the customs-discovery event was found by a tip-off -- the informant network is what generates those tips.)

- **Power grid monitoring agreements.** ISIA signs data-sharing agreements with utility companies in treaty nations to flag anomalous power draw patterns consistent with undeclared compute clusters. This is the cross-reference that catches the firmware-spoofing relay attack (chip appears stationary but physically moved). Card: "Utility companies will share power data, but privacy advocates call it mass surveillance. Sign the agreements?"

- **Satellite thermal surveillance for non-treaty regions.** Dedicated satellite coverage monitoring heat signatures in regions where ISIA has no ground access. Expensive, requires years to build coverage, but it's the only way to detect large undeclared facilities in non-cooperative nations. Card: "Satellite program costs $2B over 5 years. Congress wants that money for border security. Defend the budget?" (This is an institutional investment -- see section 3.)

- **Bug bounty and vulnerability disclosure program.** Proactively invite security researchers to find monitoring firmware vulnerabilities before adversaries do. The friendly-researcher event should be a *consequence* of having built this program. Card: "A hacker collective offers to stress-test your chip monitoring firmware. Let outsiders probe your security infrastructure?"

### Diplomatic and Legal

- **Military chip registry push (early game).** The military-surplus event is devastating if it hits unprepared. A smart DG pushes for military chip registries in year 1-3, when political capital is high and the treaty is fresh. Card: "The treaty exempts military hardware from monitoring. Propose closing the loophole now, while momentum is strong?" Left: push for it (-pol with defense ministries, but closes the gap). Right: defer to maintain coalition unity (gap remains, military surplus event hits harder later).

- **Chip donation restrictions.** Preemptively draft rules restricting chip transfers to non-treaty nations, including "obsolete" hardware and university programs. The university-front event is preventable if the rule exists. Card: "Propose restricting all chip exports to non-treaty nations? Universities and aid organizations protest."

- **Diplomatic pouch protocol.** Negotiate an explicit treaty addendum that diplomatic immunity does not extend to chip transport. Getting this agreed early, before an embassy is caught, is far cheaper politically than reacting after the scandal. Card: "Propose a treaty clause banning chip transport via diplomatic channels. Ambassadors call it an insult to sovereignty."

---

## 2. Smart Reactions vs. Panicked Reactions (the interesting choice for each event)

### Storage facility theft
- **Smart:** If honeypot was pre-planted, activate tracking. Map the buyer network for 2-3 months before raids. Accept that the stolen chips are "spent" intelligence investment.
- **Panicked:** Immediate press conference, nationwide facility lockdown, demand emergency budget. Looks strong, teaches thieves nothing, burns the intelligence trail.
- **Card choice:** "Tagged chips from the honeypot are moving. Track the buyers (risky -- they might detect the tags) or raid now (catch the thieves, lose the network)?"

### Monitoring firmware vulnerability discovered
- **Smart:** Quiet patch via trusted network update. Simultaneously cross-reference power draw data against firmware reports for the entire vulnerability window to estimate exploitation scope. Announce the fix *after* patching.
- **Panicked:** Public announcement before patching. Demonstrates transparency but tells every adversary "you have a window right now."
- **Card choice:** "Patch quietly and audit later, or announce the vulnerability immediately? Your transparency record is on the line."

### ISIA database hack
- **Smart:** Assume worst case -- all data compromised for an unknown period. Launch physical re-audit of highest-risk facilities first (those near non-treaty borders, those with prior discrepancies). Accept that full re-audit takes 18 months.
- **Panicked:** Try to quietly fix records and hope the gap is small. Or: announce everything, triggering a political crisis and potential treaty confidence collapse.
- **Card choice:** "The database hack is worse than you thought. Full re-audit (-int for 18 months while inspectors recount) or targeted audit of top 50 facilities (faster, but what about the other 500)?"

### Chip imports triple in a small nation (transshipment)
- **Smart:** Don't pressure the nation directly yet. Deploy undercover ISIA agents posing as buyers to trace the onward movement. Simultaneously prepare diplomatic approach with evidence.
- **Panicked:** Public sanctions on the small nation. Chips shift to the next hub. You've burned a potential intelligence source for a press release.
- **Card choice:** "Chip imports to a small nation tripled. Infiltrate the pipeline (slow, might lose chips) or sanction immediately (fast, chips reroute)?"

### Shell company with forged end-user certificates
- **Smart:** Don't shut down the shell company. Feed it controlled shipments with tagged chips to map the network. Use it as an intelligence asset.
- **Panicked:** Shut it down, issue a press release, propose new regulations. Ten new shells open next week.
- **Card choice:** "You've identified a front company. Use it as a window into the network (risky -- real chips flow through it) or shut it down (safe, but blind)?"

### Floating warehouse ship
- **Smart:** Track the ship via satellite. Identify every smaller boat that meets it. Build a map of the distribution network over months. When you raid, raid everything simultaneously.
- **Panicked:** Naval interdiction in international waters. Legal nightmare, diplomatic incident with the flag state, and you catch one ship while the network learns to use submarines.
- **Card choice:** "We've found the floating warehouse. Watch it and map the network (months of chip flow we can't stop) or interdict now (one ship, one headline)?"

### ASML technicians being recruited
- **Smart:** Don't try to restrict travel (sovereignty nightmare). Instead, counterintelligence: debrief departing technicians, track what knowledge they're sharing, and accelerate ASML's own security protocols. Also: invest in making ASML's equipment *harder to reverse-engineer* even with knowledgeable operators.
- **Panicked:** Push for travel restrictions. ASML engineers unionize in protest. The Netherlands threatens to reduce treaty cooperation.
- **Card choice:** "ASML technicians are being poached. Restrict travel (-pol, sovereignty fight) or invest in counterintelligence and equipment security (slower, but sustainable)?"

---

## 3. Institutional Investments (multi-turn card chains)

These are capabilities that take years to build and can't be improvised. Each represents a card chain: initial investment card (early game) -> capability-building cards (mid game) -> payoff cards (late game where the investment matters).

### A. Trained Inspector Corps (years 1-5, payoff years 5-30)
- Year 1-2: "Recruit and train 500 chip inspectors. They won't be field-ready for 3 years. Budget fight now." (-pol, -int short term)
- Year 5: Inspectors are competent. Factory diversion detection rate doubles. Audit triggers catch real discrepancies.
- Year 10+: Inspector corps is the backbone. If you *didn't* invest, every enforcement card is harder (higher -int costs, more missed threats).
- **Chain mechanic:** if the early investment card was declined, later enforcement cards have worse options.

### B. Satellite Thermal Surveillance Network (years 1-7, payoff years 7-30)
- Year 1: Propose satellite program. Expensive, politically contested.
- Year 3: First satellites operational but coverage is patchy.
- Year 7: Full coverage. Can detect undeclared compute clusters by heat signature anywhere on Earth.
- Late game payoff: When algorithmic progress makes distributed training viable on consumer hardware, satellite detection of *any* large cluster (even consumer GPUs) is the last enforcement tool that works. Without it, you're blind.
- **Chain mechanic:** satellite program gates late-game detection cards.

### C. International Cooperation Agreements (years 1-10, payoff continuous)
- Year 1-3: Negotiate chip transit monitoring agreements with transshipment-hub nations. Each one costs diplomatic capital.
- Year 5: Customs data sharing between 30+ nations. ISIA can track chip movements across borders in near-real-time.
- Year 10+: When the floating warehouse or diplomatic pouch events hit, cooperation agreements mean you have allies at every port. Without them, tracing a chip through three countries requires three separate negotiations.
- **Chain mechanic:** each cooperation card signed early makes later smuggling-response cards cheaper.

### D. Chip Monitoring Firmware R&D Pipeline (years 1+)
- Year 1: Establish hardware security research lab. Fund bug bounties.
- Year 3-5: First firmware generation is battle-tested. Vulnerability events are less frequent.
- Year 8-10: Second generation includes hardware roots of trust that make signature cloning physically impossible.
- Late game: When the clone-chip-signature paper drops, you're already on gen-2 hardware that's immune. Without the R&D pipeline, you're scrambling.
- **Chain mechanic:** R&D investment cards gate firmware resilience; without them, firmware attack cards are catastrophic.

### E. Forensic Accounting and Financial Intelligence Unit (years 2-5, payoff years 5-30)
- Year 2: Establish ISIA financial intelligence unit to track chip purchases, suspicious transactions, shell company patterns.
- Year 5: Unit has databases and pattern recognition for shell company detection. Investigation time drops from months to weeks.
- Late game: When convergent illicit networks (M7) mature, your financial intelligence unit is the only way to follow the money. Without it, you can raid physical locations but never map the financial network.
- **Chain mechanic:** financial unit gates the "map the network" option in smuggling response cards.

---

## 4. Accepted Losses -- Things ISIA Can't Prevent, Only Manage

**Algorithmic progress is unstoppable.** Published research, open-source code, and diffuse expertise mean capability knowledge accumulates regardless of ISIA's actions. You can slow it (classify certain results, restrict publication) but at enormous political cost and uncertain effectiveness. A smart DG accepts that the alg bar rises and focuses on keeping enforcement ahead of the shrinking threshold rather than trying to stop knowledge diffusion.

**Small-scale chip diversion will always happen.** A few dozen chips disappearing from a decommissioning site, a worker pocketing samples, a small shipment lost in transit -- these are noise, not signal. ISIA cannot achieve 100% chip accountability any more than any inventory system achieves zero shrinkage. The smart response is statistical: set thresholds for investigation, accept shrinkage below the threshold, and ensure that small diversions can't *aggregate* into a dangerous cluster without detection (which is what power-grid monitoring and satellite thermal are for).

**Some nations will maintain plausible deniability (M16).** Willful ignorance is structurally undetectable until a specific failure exposes it. ISIA can mandate intrusive monitoring standards, but enforcing them against sovereign nations that technically comply on paper is a political war ISIA may not win. The smart approach: design enforcement to not *depend* on national self-reporting. Independent verification (ISIA's own inspectors, satellite, power-grid, informants) is the hedge against willful ignorance.

**The revolving door can't be sealed.** ISIA needs AI expertise. AI expertise lives in industry. People will move between ISIA and industry. Cultural capture (M13) is a *structural condition*, not a bug to be fixed. The smart DG doesn't try to ban the revolving door -- instead, they build institutional countermeasures: mandatory cooling-off periods, internal red teams that challenge institutional assumptions, rotating inspectors so no one stays at the same facility too long, and a culture of documenting *why* decisions were made (so future leaders can audit for drift).

**Treaty withdrawal is a sovereign right.** ISIA cannot legally prevent a nation from leaving the treaty. What it can do: ensure withdrawal has consequences. Pre-negotiate withdrawal protocols (monitoring continues during notice period, previously safeguarded chips remain tracked, economic consequences activate automatically). The goal isn't preventing withdrawal but making it expensive enough that nations calculate it's not worth it -- and ensuring that *when* it happens, the intelligence loss is minimized.

**Convergent illicit networks (M7) won't be dismantled by ISIA alone.** These networks serve weapons trafficking, money laundering, sanctions evasion, and chip smuggling simultaneously. ISIA can't take them down without cooperation from counternarcotics, counterproliferation, and financial intelligence agencies -- each with their own priorities. The smart approach: build those inter-agency relationships in peacetime. When the convergent-network event fires, the DG who invested in inter-agency cooperation has allies; the one who didn't is asking for favors while chips are moving.

**Periodic enforcement blind spots from infrastructure failure.** Solar storms, satellite outages, network failures, even power grid disruptions -- these create windows that adversaries can exploit opportunistically. ISIA can invest in redundancy but can't eliminate every blind spot. The mitigation: ensure that no single monitoring modality is the *only* check. Layered detection (firmware + power grid + satellite + informants + financial) means a failure in one layer doesn't create total blindness.

---

## Cross-Cutting Strategic Themes

**The intelligence-action tradeoff recurs constantly.** In almost every event, the smart move is "watch longer, learn more, act later" while the panicked move is "act now, look strong, learn nothing." This is the core recurring tension for the DG -- and the game should make the player *feel* the cost of patience (chips are flowing while you wait) and the cost of impatience (you caught one node but the network adapted).

**Proactive investment has invisible payoffs.** The satellite program, the inspector corps, the firmware R&D -- none of these produce visible wins. They prevent invisible losses. This creates a political vulnerability: a DG who invests proactively looks like they're wasting money until the day the investment saves them. The game should model this by making early investment cards cost -pol (looks wasteful) but gate better options in later cards.

**ISIA's biggest vulnerability is its own legitimacy.** Every panicked overreaction, every privacy violation, every failed raid, every scandal erodes the political coalition that funds ISIA. The adversary's best strategy isn't to outrun ISIA -- it's to provoke ISIA into discrediting itself. A smart DG knows that *how* you enforce matters as much as *whether* you enforce. The "effective but ugly" option should always carry a -pol cost.

**The compounding problem.** Each missed threat, each eroded capability, each declined investment makes the next crisis harder. The game's hidden state variables (missed_threats, enforcement_visibility, treaty_erosion) should accumulate from these choices. The player who skipped the satellite program, declined the inspector training, and chose quick raids over intelligence gathering finds themselves in year 15 with an enforcement infrastructure that can't handle the threats that algorithmic progress has created. This is the core loop: the choices that feel safe in year 3 kill you in year 20.
