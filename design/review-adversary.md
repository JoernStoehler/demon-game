# Adversary Modeler Analysis: Chip Movement Events

## 1. Adversary Types Relevant to Chip Movement

**A. State Programs (nation-state actors)**
- **Motivation:** National prestige, strategic autonomy, military advantage, fear of being left behind if the pause ends and others have a head start.
- **Resources:** State budgets, intelligence agencies, diplomatic cover (embassies, diplomatic pouches — already in event list), military facilities outside civilian oversight.
- **Key advantage:** Can create legal cover for illegal activity (classify programs, invoke sovereignty, use veto power on the Council). They don't just evade enforcement — they restructure the political environment around enforcement.
- **Real-world parallel:** Iran's nuclear program operated under a veneer of "peaceful energy research" for 18 years. North Korea simply withdrew from the NPT.

**B. Commercial Labs / Corporate Actors**
- **Motivation:** Profit, competitive positioning for when the pause ends, belief that their safety work makes them "responsible" enough to justify secret capability research.
- **Resources:** Existing chip stockpiles (pre-pause inventories that were supposed to be surrendered or monitored), engineering talent, legal teams, lobbying budgets.
- **Key advantage:** Already have the technical knowledge to set up and run training. Their violation looks like legitimate business activity (server maintenance, inference workloads, safety research) until the training run actually starts. The line between "permitted inference" and "prohibited training" is technically blurry and they know exactly where it is.
- **Real-world parallel:** NVIDIA's aggressive lobbying and rule-stretching on export controls; Boeing's self-certification regime where the company was both operator and regulator.

**C. Ideological Groups (AI accelerationists, transhumanists, techno-utopians)**
- **Motivation:** Genuine belief that ASI will solve death, disease, poverty — that the pause is condemning billions to unnecessary suffering. Some are "effective accelerationists" who see the pause as a power grab by incumbents.
- **Resources:** Modest direct resources but high technical skill. Many are former AI researchers, open-source contributors, or engineers at chip companies. Their real resource is distributed knowledge and motivation.
- **Key advantage:** Decentralized, ideologically committed, willing to take personal risk. A cell of 5-10 skilled engineers with 100 smuggled chips and good algorithmic knowledge is dangerous. They're the most likely to recruit unwitting helpers by framing their work as legitimate research.
- **Real-world parallel:** Nuclear scientists who leaked secrets out of ideological conviction (Ted Hall, Klaus Fuchs); open-source cryptography movement's resistance to export controls.

**D. Criminal Profit-Seekers**
- **Motivation:** Pure profit. AI chips under a pause regime become like drugs or weapons — the ban itself creates the black-market premium. A chip that costs $25K to manufacture might sell for $500K on the black market.
- **Resources:** Existing smuggling infrastructure (routes, corrupt officials, shell companies), money laundering networks, contacts with all the above adversary types as customers.
- **Key advantage:** They don't care what the chips are used for. They're the logistics layer that connects chip theft/diversion to end users. They adapt to enforcement the same way drug smugglers adapt to the DEA — it's a cost of business.
- **Real-world parallel:** A.Q. Khan network (operated as a for-profit proliferation business); Russian sanctions evasion networks moving chips through 6,000+ shell companies.

**E. Rogue Insiders (ISIA's own people)**
- **Motivation:** Bribery, ideological sympathy, blackmail, or simply the belief that "controlled" capability research is fine. An ISIA inspector who thinks the pause is excessive might look the other way — not for money, but because they genuinely believe a particular lab is "safe enough."
- **Resources:** Access to monitoring systems, inspection schedules, enforcement methods, informant identities.
- **Key advantage:** They don't move chips — they blind the system. One compromised inspector is worth more than 1,000 smuggled chips because they can make entire facilities invisible.
- **Real-world parallel:** IAEA inspectors facing pressure from national governments; FAA Authorized Representatives paid by Boeing.

---

## 2. Attack Chains — Full Operational Sequences

The event ideas list individual incidents well, but adversaries think in complete chains. Here are the full sequences:

### Chain A: "The Patient State Program"
1. **Acquire knowledge** — Recruit ASML/TSMC engineers (already in event list) not just for domestic fab, but to understand monitoring firmware vulnerabilities. The engineers don't know the full plan; they think they're building a legitimate domestic semiconductor industry.
2. **Build domestic fab** — Inferior chips, but produced outside ISIA's supply chain entirely. No monitoring firmware. (Already in event list as "non-treaty nation's domestic fab.")
3. **Stockpile quietly** — Produce chips slowly over 3-5 years. Each year's production is below the threshold that would trigger satellite detection of a major fab operation.
4. **Acquire algorithmic knowledge** — Fund "safety research" programs at universities that are actually capability research with a safety veneer. Recruit researchers who publish openly, feeding the public knowledge base that benefits the secret program.
5. **Prepare infrastructure** — Build the data center inside a military facility (classified, ISIA can't inspect). Power draw is masked by the base's existing consumption.
6. **Launch training run** — Once algorithmic progress (alg) is high enough that inferior chips + lots of time = sufficient compute, begin training. By the time ISIA detects anomalous behavior, the run has been going for months.

**Missing from event list:** Steps 3-5. The list has the fab and the recruitment but not the patient multi-year accumulation, the safety-research-as-cover for capability work, or the military-facility hiding spot used for the actual training run (the military base event exists but only for surplus chips, not as a deliberate hiding location).

### Chain B: "The Corporate Slow Roll"
1. **Retain pre-pause chips** — When the treaty was signed, the company reported 90% of its chip inventory. The other 10% was "in transit," "deployed in customer environments," or "destroyed in testing." Paperwork discrepancies are small enough to be plausible.
2. **Maintain permitted infrastructure** — The company has a legitimate license for safety research and inference services. Its data centers are monitored, but the company's own engineers designed the monitoring integration and know its blind spots.
3. **Exploit the training/inference boundary** — Run "inference workloads" that are actually gradient updates distributed across many inference servers. Each individual server looks like it's doing inference. The aggregate is a slow distributed training run. (This is technically possible and extremely hard to detect without deep network traffic analysis.)
4. **Leverage cultural capture** — ISIA's technical reviewers are former colleagues. When the company's compliance reports arrive, reviewers apply the most generous interpretation. Borderline anomalies get filed as "within expected variance."
5. **Extract results** — The trained model weights are exfiltrated as "safety research results" shared with partner institutions. The capability advance is laundered through the academic safety community.

**Missing from event list:** The training/inference boundary exploitation (step 3) is not in any current event. This is arguably the most realistic corporate attack vector — it doesn't require any chip smuggling at all, just clever software engineering on chips the company already has legally. The cultural capture enabling this (step 4) is noted in the domain model but has no corresponding event.

### Chain C: "The Ideological Cell"
1. **Recruit** — A charismatic AI researcher posts manifestos about how the pause is "condemning humanity to biological prison." Recruits 8 engineers from different companies through encrypted channels. None of them steal chips — yet.
2. **Acquire chips piecemeal** — Each cell member purchases consumer hardware (gaming GPUs, FPGAs) in small quantities from different retailers. None individually triggers monitoring thresholds. Some buy used enterprise GPUs from e-waste recyclers (decommissioned chips that were supposed to be destroyed but were skimmed by a disposal contractor — connects to the "decommissioned data center" event).
3. **Develop distributed training software** — The cell's real contribution is algorithmic. They develop open-source distributed training frameworks optimized for heterogeneous consumer hardware. They publish this as "democratizing AI research" — and genuinely believe it.
4. **Build the cluster in plain sight** — The training run is distributed across 50 apartments in a major city. Each node looks like a gamer or crypto miner. Total power draw is lost in urban noise. Cooling is residential air conditioning.
5. **Operate on ideology** — No one is paid. There's no financial trail. The cell communicates through encrypted channels and in-person meetings. ISIA's financial monitoring, export tracking, and institutional surveillance miss all of it.

**Missing from event list:** The piecemeal consumer-hardware acquisition (step 2) and the ideological cell recruitment (step 1) are completely absent. The distributed-in-apartments model (step 4) is implied by the consumer hardware events but never made explicit as an adversary strategy. The "no financial trail" aspect (step 5) is a critical blind spot — most enforcement assumes money flows to trace.

### Chain D: "The Broker Ecosystem"
1. **Theft/diversion** — Chips leave the monitored supply chain through any of the mechanisms in the event list (factory mislabeling, transit theft, disposal skimming, firmware disabling).
2. **Laundering** — Chips move through 3-4 countries via shell companies (M5), transshipment hubs (M6), and sometimes physically modified (monitoring hardware removed, serial numbers altered).
3. **Assembly** — A turnkey provider (M4) assembles the complete package: chips + networking + cooling + software + engineer. The engineer is often an unwitting contractor who thinks they're setting up a legitimate data center.
4. **Delivery** — The package is installed at the buyer's site. The buyer could be any of types A-C above.
5. **Operation** — The broker provides ongoing support: replacement chips, software updates, even operational security consulting. This is a *service business*, not a one-time sale.
6. **Adaptation** — When ISIA shuts down one node, the broker network restructures within weeks. The same infrastructure that moved weapons components and laundered money seamlessly absorbs the disruption. (M7 convergent networks.)

**Missing from event list:** Steps 3 and 5. The turnkey assembly and ongoing-service model are the Khan network's most dangerous innovation — it wasn't just selling centrifuges, it was selling an *operational capability*. The event list has the broker network but treats it as a transport problem, not a service-delivery business.

---

## 3. Social Engineering and Unwitting Helpers

This is the area where the event list is thinnest. Adversaries don't just steal chips — they manipulate people.

**A. The Logistics Worker Who Doesn't Know**
- A shipping company employee is told to reroute a container from Port A to Port B. They process it as a routine redirect — happens dozens of times daily. The container holds chips with disabled monitoring. The employee never opens the container, never questions the paperwork.
- **Card concept:** ISIA discovers rerouted chip shipments. Investigation reveals the shipping company's systems were accessed by someone with legitimate credentials. The employee did nothing wrong — they followed procedure. The procedure was exploited.

**B. The Firmware Engineer Who Sees a Bug**
- An engineer at a chip manufacturer discovers a monitoring firmware vulnerability while doing routine testing. They report it internally but also mention it at a conference (good professional practice). An adversary in the audience now knows the vulnerability exists, even without the details.
- **Card concept:** A firmware vulnerability is disclosed at a security conference before ISIA can patch it. The researcher acted ethically. The knowledge is now public. The clock is ticking on how many chips get exploited before the patch deploys.

**C. The University Researcher Doing "Safety Work"**
- A state program funds a university research group studying "AI safety." The researchers genuinely believe they're doing safety work — and some of it is. But the program design subtly steers them toward capability-relevant results (understanding training dynamics, optimization shortcuts, distributed compute efficiency). The published papers advance public capability knowledge without any researcher intending it.
- **Card concept:** A well-funded "AI safety" program at a prestigious university publishes results that ISIA's technical reviewers flag as capability-advancing. The researchers are outraged at the accusation. Shutting down the program is politically explosive (-pol). Letting it continue feeds alg.

**D. The Gradually Bribed Inspector**
- An ISIA inspector at a chip factory is offered money — not to falsify reports, but to "not notice" a particular shipment discrepancy. The inspector rationalizes: the discrepancy is small, probably a counting error, not worth the paperwork. Over months, small discrepancies accumulate.
- Already partially covered by existing events, but the *gradual normalization* aspect is missing. It's not one big bribe — it's a slow erosion where each individual compromise seems trivial.

**E. The Ideologically Recruited ISIA Analyst**
- A mid-level ISIA analyst with access to the chip tracking database is recruited by an intelligence service. Not through money — through ideology. The analyst believes their home country's AI program is "defensive" and that ISIA is overreaching. They don't alter data; they selectively delay flagging anomalies, buying weeks of unmonitored operation.
- **Card concept:** Anomaly reports in the tracking database are reaching investigators 2-3 weeks later than they should. Investigation reveals an analyst was holding them. The analyst isn't a spy — they genuinely believed the flagged activities were harmless. But the delay allowed a real violation to proceed undetected.

**F. The Contractor Who Cuts Corners**
- ISIA contracts chip destruction to a private company (cheaper than doing it in-house). The company's employees are paid per batch destroyed. A supervisor realizes that reporting chips as destroyed without actually destroying them is faster and more profitable. They sell the "destroyed" chips to a broker.
- Already in the event list (decommissioned data center), but the *incentive structure* should be explicit: the contract structure itself creates the vulnerability. Paying per-batch with spot audits is a known failure mode.

**G. The Diplomat's Junior Staffer**
- A junior staff member at an embassy handles the diplomatic pouch. They're told by their superior to include a package. They don't open it, don't ask questions — diplomatic protocol discourages it. The package contains chips.
- Already partially covered by the embassy event, but the unwitting helper angle adds a layer: if caught, the junior staffer is the fall guy. The principal is protected by diplomatic immunity.

---

## 4. Adaptation Patterns — How Adversaries Evolve

**Pattern 1: Fragmentation After Crackdowns**
When ISIA raids a large smuggling network, it doesn't disappear — it fragments into smaller, independent cells. Each cell has less visibility into the others (operational security improves). The total volume of smuggling may temporarily decrease but the *number of targets* ISIA must track increases. This is the structural asymmetry from M5: investigation scales linearly, fragmentation scales exponentially.
- **Missing event:** ISIA celebrates a major bust. Six months later, intelligence shows the network has reconstituted as 12 smaller operations, each harder to detect individually.

**Pattern 2: Moving Up the Supply Chain**
When enforcement focuses on chip movement (transit, shipping, customs), adversaries move upstream: corrupting chip factories directly, recruiting factory workers, or compromising the chip ordering system so that chips are diverted before they ever enter the tracking pipeline.
- **Missing event:** ISIA's transit monitoring catches fewer and fewer diversions — not because smuggling stopped, but because chips are now being diverted *before they enter the tracking system* at the factory level. The monitoring is working perfectly on a shrinking fraction of the actual supply.

**Pattern 3: Exploiting the Legal/Technical Boundary**
As ISIA tightens technical monitoring, adversaries shift to legal and political avenues: filing lawsuits challenging inspection authority, lobbying for "privacy" restrictions on monitoring, funding think tanks that publish reports on ISIA overreach. The goal isn't to beat the monitoring — it's to get the monitoring defunded or constrained.
- **Missing event:** A coalition of privacy advocacy groups (some genuinely concerned, some funded by adversary interests) files a legal challenge to ISIA's firmware monitoring. The case goes to an international court. Even if ISIA wins, monitoring is suspended during proceedings.

**Pattern 4: Technology Substitution (with Strategic Intent)**
When ISIA controls one hardware type, adversaries develop alternatives: FPGAs, repurposed consumer GPUs, custom ASICs manufactured at older fabs (already in event list), or entirely novel architectures. The monitoring framework is always one generation behind.
- Covered somewhat in the "new chip sources" group, but the adversary's *strategic intentionality* is missing — they're not just stumbling onto alternatives, they're actively investing in hardware R&D specifically to route around ISIA's monitoring categories.

**Pattern 5: Timing Exploitation**
Adversaries learn ISIA's rhythms: inspection schedules, satellite pass times, report deadlines, staff rotation cycles. They schedule illicit activity during blind spots — weekend shifts, holiday periods, the 72 hours after a major enforcement action (when ISIA is processing the current bust and attention is elsewhere).
- **Missing event:** ISIA notices that chip discrepancies cluster around inspection cycle boundaries — chips disappear in the week *after* an inspection, maximizing the time before the next count. Someone is reading the inspection schedule.

**Pattern 6: Information Warfare**
Adversaries don't just evade — they actively poison ISIA's information. False tips flood the intelligence pipeline (100 fake leads for every real one). Forged evidence is planted to discredit ISIA investigations. Deepfakes show ISIA inspectors accepting bribes. The goal is to degrade ISIA's ability to distinguish signal from noise and to erode public trust.
- **Missing event:** ISIA receives a surge of anonymous tips about illegal chip operations. Investigation reveals 95% are fabricated — planted to consume enforcement resources. But 5% are real. ISIA can't afford to ignore tips, and can't afford to investigate them all.

---

## 5. Missing Events — Things Adversaries Would Definitely Try

**5.1 The Training/Inference Disguise**
A licensed facility runs "inference workloads" that are actually disguised distributed training. Each server looks compliant individually. The aggregate computation constitutes a prohibited training run. Detection requires deep network traffic analysis that ISIA doesn't currently perform (and may not have legal authority to perform on licensed facilities).
- **Why this matters:** This requires zero chip smuggling. It exploits the fundamental difficulty of distinguishing training from inference computationally. It's the most likely corporate attack vector.

**5.2 The "Safety Research" Trojan**
A state or corporate actor runs a large compute facility under an ISIA safety-research license. The facility genuinely does safety research — 80% of the time. The other 20% runs capability experiments disguised in the safety research pipeline. ISIA's technical reviewers lack the expertise (or the access) to distinguish the two.
- **Why this matters:** The pause regime must permit safety research (D5). This creates an inherent vulnerability — any permitted compute is potential cover for prohibited compute.

**5.3 The Pre-Pause Stockpile**
Before the treaty was signed, a state or corporation quietly purchased and hid a large chip inventory. These chips were never registered, never entered the tracking system. They're sitting in a warehouse, powered off, invisible to all monitoring. The adversary simply waits for algorithmic progress to advance enough, then powers up.
- **Why this matters:** This is a "time bomb" that no amount of current enforcement can defuse. It represents a known unknown that ISIA must account for but can never fully verify (you can't prove a negative — you can't prove no hidden stockpile exists).

**5.4 Crypto-Funded Compute Rental**
An adversary doesn't buy chips at all. They rent compute from distributed cloud providers using stolen cryptocurrency (M15), laundered through mixing services. Each rental is small, anonymous, and short-lived. Thousands of micro-rentals aggregate into a training run. No chips change hands physically.
- **Why this matters:** This bypasses the entire physical supply chain that most enforcement is designed to monitor. It requires cloud providers to do real-time workload classification — something that's technically difficult and privacy-invasive.

**5.5 Insider Threat to ISIA's Own Systems**
An adversary recruits (or plants) a systems administrator at ISIA's chip tracking center. The admin doesn't steal data — they introduce subtle errors: a handful of chip serial numbers reassigned, location records delayed by hours, anomaly thresholds quietly raised. Each change is tiny. Over months, entire clusters become invisible in the database.
- **Why this matters:** ISIA's monitoring is only as trustworthy as its own internal systems. The event list has firmware attacks and database hacks, but not the slow, insider-driven data degradation that's hardest to detect.

**5.6 The False Flag Operation**
A state actor stages a "rogue" training run that appears to come from an ideological group or criminal network. When ISIA raids it, they find a small operation — enough to declare a win. Meanwhile, the real program continues elsewhere, and ISIA's resources are diverted toward chasing the decoy.
- **Why this matters:** Adversaries don't just hide — they actively misdirect. False flags consume enforcement resources and create political pressure to address the visible threat while the real one grows.

**5.7 The Academic Knowledge Pipeline**
Adversaries fund legitimate academic conferences, journals, and research grants that advance capability-relevant knowledge. No single paper is dangerous. The aggregate effect over 5-10 years is to advance the public knowledge frontier enough that smaller compute budgets become sufficient for ASI attempts. This is legal, visible, and extremely difficult to counter without censoring science.
- **Why this matters:** The alg bar in the game goes up partly through public knowledge diffusion. Adversaries can *accelerate* this diffusion deliberately, and the counter-measures (censorship, publication review) have enormous political costs.

**5.8 The Multi-Country Distributed Run**
An adversary distributes a training run across 15 countries, using small compute clusters in each (some rented, some smuggled, some diverted from legitimate facilities). No single country hosts enough compute to trigger detection thresholds. Coordination happens through encrypted internet traffic indistinguishable from normal VPN usage. ISIA would need simultaneous detection across 15 jurisdictions — something its institutional structure isn't designed for.
- **Why this matters:** This exploits the jurisdictional fragmentation that is inherent to any international enforcement body. Even with perfect technology, the coordination problem across national boundaries creates seams.

---

## Summary of Key Gaps in Current Event List

The event list is strong on **physical chip movement** (theft, transit, smuggling) and **monitoring attacks** (firmware, database). It is weak on:

1. **Software/algorithmic attack vectors** — training disguised as inference, safety-as-cover-for-capability
2. **Ideological adversaries** — recruitment, cell structure, no-financial-trail operations
3. **Active information warfare** — false tips, planted evidence, decoy operations, legal challenges to monitoring authority
4. **Pre-pause stockpile time bombs** — chips that were hidden before tracking began
5. **Adversary adaptation as a systemic pattern** — fragmentation, upstream migration, timing exploitation
6. **Social engineering specifics** — the unwitting helpers who enable each attack chain without knowing it
7. **The knowledge diffusion attack** — deliberately accelerating public capability knowledge through legal channels

Each gap represents a realistic adversary strategy grounded in real-world precedent. The current events model ISIA's reactive challenges well but underrepresent the adversary's *strategic planning* — the multi-step, multi-year sequences that real state programs and organized networks execute.
