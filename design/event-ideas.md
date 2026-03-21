# Event Ideas

The big list of event/situation ideas for the card game. Each idea is something that could happen during a 30-year pause. Ideas grow, get nested notes, and accumulate feedback as we turn them into cards.

## Coverage Checklist

Memory-trigger list — not an organizing structure for the events below. Use this to verify nothing is forgotten.

**Entities:** Governments, Corporations, ISIA itself, Criminal networks, Researchers, Courts, Media, Military, Existing AI systems, The public

**Systems:** AI chip supply chain, AI training infrastructure, The international treaty, Financial systems, Surveillance infrastructure, The economy, Sociological and cultural institutions

**Patterns:** Attack vs defense, Evasion vs enforcement, Shifts in equilibria, Desperate attempts, Reactive vs proactive, Public perception, Regulatory capture and institutional decay, Knowledge diffusion, Corruption and bribery, Exogenous shocks

**Research and Innovation:** Safety, Algorithmic progress, Economic automation, Monitoring, Evasion, Warfare

**History/Status Quo:** Nuclear weapons and other military strategy, Ongoing conflicts, Trade/economic/financial warfare, Totalitarianism and liberty, Distribution of know-how, National institutions/competency

---

## Event Ideas

**Ideas: chip movement**

How chips physically move, get lost, get stolen, get tracked, get smuggled, and emerge from new sources. Grounded in domain model D2/D8/D10 (chip lifecycle, cat-and-mouse, compute model) and geopolitics synthesis M3-M7 (smuggling mechanisms).

- Group: some compute chips become at least temporarily unmonitored
  - Professional thieves break into an ISIA storage facility of unused compute chips
    - follow ups: thieves and/or chips caught; or a raid on a compute cluster due to luck with the chips' secret monitoring; or an unrelated raid finds the chips we lost
    - fewer thieves make an attempt if the probability of being caught is known to be bigger
    - variant: the facility was a "honeypot" — ISIA planted tagged chips to trace the buyer network. Player chose this tactic earlier; now it pays off (or the thieves detected the tags and burned the trail)
  - Chip factory workers mislabeled chips and sold them; variants: different types of investigation that caught the illegal sale too late, management may be involved or not, amount of chips is large or small, the monitoring gap may be accidental/hacking/management-made
    - fewer workers will try to sell if monitoring is known to be reliable
    - related card: chip sale has been prevented and no chips were lost
    - variant: the workers were recruited by a broker network (links to turnkey proliferation, M4) — this isn't petty theft but organized supply chain infiltration
  - Chips go missing during shipping between factory and declared facility — could be theft, could be paperwork error, could be deliberate diversion by the shipping company
    - follow ups: investigation reveals the shipper was bribed by a broker network; or it was genuinely lost and found in a warehouse; or the chips surface months later in a rogue cluster
    - variant: the shipping company handles 40% of ISIA's chip logistics. Cutting them off disrupts the entire transfer pipeline. Keeping them means trusting a compromised partner.
  - Chips at a decommissioned data center — supposed to be destroyed but the destruction contractor skimmed some off. Audit catches a count discrepancy.
    - variants: small discrepancy (dozens) vs large (thousands); contractor acted alone vs was hired by someone
    - follow up: ISIA mandates in-house destruction with video verification. Costs more, slower, but closes the contractor loophole. Or: rely on spot audits and accept occasional shrinkage.
  - A declared facility is shutting down and transferring chips to another site. During transit, a fraction disappears. The receiving facility's count doesn't match.
    - design note: this is a recurring pattern — every facility transfer is a vulnerability window. Could become a "routine hazard" card that appears more often as facilities age and consolidate.
  - Chips with disabled monitoring firmware show up at a border crossing, hidden in consumer electronics shipments
    - who disabled the firmware? factory insider, aftermarket modification shop, or the buyer's own engineers?
    - variant: the chips are hidden inside legitimate server hardware being exported as "refurbished equipment" — customs doesn't x-ray every rack
    - follow up: ISIA pushes for mandatory scanning of all electronics exports above a weight/value threshold. Industry screams about trade friction and shipping delays.
  - A government donates "obsolete" chips to a university program in a non-treaty nation. The chips are older but still usable for distributed training at scale.
    - technically legal, practically dangerous — loophole or genuine oversight?
    - follow up: ISIA drafts a rule restricting chip donations to non-treaty nations. Treaty members with large universities abroad resist. The loophole stays open or closes at political cost.
    - variant: the university is a front. The "academic program" is actually a state-run lab. ISIA discovers this 18 months later.
  - A military base decommissions its AI-assisted defense systems. The chips were never in ISIA's civilian tracking database because they were classified military hardware. Now they're surplus.
    - player choice: demand military chip registries (huge sovereignty fight, -pol) or accept the gap (chips enter gray market)
    - design note: this surfaces the declared-vs-undeclared blindness problem (M1) applied to military compute
  - An insurance company reports a suspicious claim — a data center fire destroyed 8,000 tracked chips, but the thermal evidence doesn't match the claimed chip count. Possible insurance fraud covering chip diversion.
    - follow up: forensic audit confirms fewer chips were present than records show. Where did they go? Trail leads to a broker in a transshipment hub (M6).
  - Embassy of a treaty member nation is caught using diplomatic pouches to move small batches of unmonitored chips across borders. Diplomatic immunity complicates enforcement.
    - player choice: confront the member state privately (-int for the delay, but preserves relationship) or go public (burns diplomatic bridge but deters others, -pol with that nation)
    - design note: small volume but the precedent is poisonous — if one embassy does it, others will

- Group: chips are tracked and accounted for, but the tracking itself is attacked or degraded
  - Monitoring firmware has a vulnerability — someone found a way to make chips report idle while actually training
    - variants: discovered by ISIA security audit (proactive), discovered because a training run's power draw didn't match reported compute (reactive), discovered because the exploit was published online
    - follow up: ISIA issues emergency firmware patch. But patching requires physical access or trusted network update — both have their own vulnerabilities. How many chips were exploited during the window?
    - variant: the vulnerability was found by a friendly security researcher who disclosed responsibly. ISIA must decide: pay a bug bounty and build a vulnerability disclosure program (+int long term, costs resources) or rely on finding bugs internally (cheaper, riskier)
  - ISIA's chip tracking database is hacked — records altered to hide the location of thousands of chips
    - the real question: how long has the data been wrong? do we trust any of it now?
    - follow up: ISIA launches a full physical re-audit of all declared facilities. Massive resource drain (-int temporarily), politically embarrassing (-pol), but restores database integrity. Or: quietly fix what they can and hope the gap is small.
    - variant: the hack was state-sponsored (M15) — the attacker also exfiltrated ISIA's enforcement methods, informant identities, and upcoming inspection schedules
  - A chip manufacturer pushed a firmware update that accidentally broke monitoring on 50,000 deployed chips. Genuine accident, but it creates a window.
    - manufacturer wants to fix it quietly; ISIA wants to announce it; the window exists regardless
    - follow up: while the monitoring is down, power-grid analysis detects an anomalous spike in a region with those chips. Coincidence, or someone who knew about the bug?
  - A research team publishes a method to clone chip monitoring signatures — one chip's ID can be spoofed onto another, making tracking meaningless for that batch
    - follow up: ISIA must decide whether to suppress the publication (sets censorship precedent, -pol, may fail anyway since preprints exist) or rush a hardware countermeasure (expensive, takes 12-18 months to deploy)
    - variant: the cloning method requires physical access to a chip for 30 minutes. ISIA's response determines whether this is a serious threat or a curiosity — depends on how well physical access to chips is controlled
  - Monitoring firmware reports chip location via network, but someone figured out how to relay the signal — the chip physically moves to an undeclared site while its monitoring signature appears stationary at the declared facility
    - design note: this is the chip-tracking equivalent of an ankle bracelet spoof. Detected if ISIA cross-references power draw data with chip location, but that requires cooperation from utility companies.
  - ISIA's monitoring relies on a satellite communications backbone for remote facilities. A solar storm (or targeted jamming) knocks out coverage for 72 hours over Central Asia. Natural event, but it creates an enforcement blind spot.
    - player choice: invest in redundant monitoring infrastructure (expensive, hard to justify politically when the sun is the threat) or accept periodic blind spots
    - design note: not every threat is adversarial — natural and infrastructure failures create windows that adversaries can opportunistically exploit

- Group: new chip sources emerge outside the monitored supply chain
  - A non-treaty nation's domestic fab starts producing AI-capable chips — inferior to TSMC but good enough for training with enough of them
    - variant (early game): the fab is crude, producing chips 100x less efficient. Irrelevant today, but a proof of concept.
    - variant (mid game): after 10 years of investment and imported expertise (some poached from ASML/TSMC employees who left despite travel restrictions), the fab produces chips only 5x less efficient. With enough of them and algorithmic progress, it's a real threat.
    - follow up: ISIA pressures the non-treaty nation to join the treaty or accept inspections. The nation demands concessions — economic aid, technology sharing, seat on the Council.
    - design note: mirrors China's repeated attempts to build domestic chip supply chains (domain model D10). The question isn't if someone builds an alternative fab, but when and how good it is.
  - An open-source chip design is published that can be manufactured at older (widely available) fabs. Not cutting-edge, but the threshold keeps dropping.
    - variant: the design is published by an AI safety researcher who believes open hardware monitoring is better than proprietary monitoring. Intentions are good; consequences are dangerous.
    - follow up: ISIA debates whether to classify chip designs as controlled information. Scientists revolt — this looks like censorship of basic hardware research.
  - Repurposed chips: someone figured out how to use consumer gaming GPUs or crypto mining hardware for distributed training. Not efficient, but unmonitored.
    - this gets worse as algorithmic progress reduces compute requirements
    - variant (late game): algorithmic progress has advanced enough (alg > 70) that consumer hardware is genuinely viable for distributed training. The entire monitoring framework, built around tracking AI-specific chips, becomes obsolete. Enforcement must shift from chip tracking to power-draw monitoring, network traffic analysis, or something entirely new.
    - design note: this is the approaching endgame for chip-based enforcement. Connects directly to the alg bar — as alg rises, the definition of "dangerous compute" expands to include hardware ISIA never tracked.
  - A cryptocurrency mining operation in a non-treaty country quietly pivots its GPU farm to distributed AI training. Same hardware, same power draw, different software. From the outside, nothing changed.
    - detection depends on network traffic analysis or an informant — neither is reliable
    - variant: the mining operation is legitimate but rents excess compute to anonymous buyers via a decentralized marketplace. The operator doesn't know (or care) what the compute is used for.
  - A consumer electronics company releases a new gaming console with a custom chip that turns out to be surprisingly capable for AI inference and, with firmware modification, for training micro-models. Millions of units sold worldwide, none tracked.
    - design note: this isn't a chip "source" in the factory sense, but it's a source of unmonitored compute. The threshold for "AI-capable" keeps shifting as software improves.
    - variant: hobbyists publish guides for linking consoles into distributed clusters. It becomes a subculture — most participants are curious tinkerers, but the infrastructure is identical to what a rogue actor needs.
  - ASML equipment maintenance technicians are being recruited by a non-treaty nation offering 10x salary. Not to steal machines — to train local engineers who will build a domestic photolithography capability from scratch.
    - player choice: push for travel restrictions on key technical personnel (sovereignty nightmare, -pol) or monitor and hope the knowledge transfer is too slow to matter
    - design note: the domain model identifies knowledge concentration at ASML/TSMC as a chokepoint. This event tests that chokepoint's durability over time. Knowledge is harder to contain than machines.
  - A treaty member's national lab publishes a breakthrough in using commodity FPGAs (field-programmable gate arrays) for AI training workloads. The paper is legitimate science, but it means AI training can now happen on hardware that ISIA doesn't track at all.
    - follow up: ISIA must decide whether to expand its monitoring mandate to cover FPGAs and similar programmable hardware. The volume is enormous — millions of units in industrial and telecom equipment worldwide. Monitoring all of it is infeasible; monitoring none of it is a gap.
    - design note: algorithmic progress doesn't just make training cheaper — it makes training possible on hardware categories that enforcement was never designed to watch.

- Group: chip smuggling networks and transshipment (M4-M7)
  - A broker network is offering complete "training kits" — smuggled chips, networking gear, pre-configured software, cooling systems, and an engineer to set it up. Turnkey AI capability for any buyer with cash.
    - follow up: ISIA intelligence maps part of the network but faces a dilemma — raid the known nodes now (gets a few, alerts the rest to restructure) or keep watching to map the full network (risks another kit shipping while you wait)
    - variant: the network also handles weapons components and money laundering (M7). Allied intelligence agencies are already monitoring it for other purposes and don't want ISIA's raid disrupting their operation.
    - design note: this is the A.Q. Khan pattern applied to compute. The danger isn't a single stolen chip — it's the commoditization of the entire training stack into a purchasable package.
  - Chip imports to a small non-treaty nation triple in one quarter despite no new data centers being built. Classic transshipment pattern (M6).
    - player choice: pressure the nation diplomatically (slow, may push them further from treaty) or deploy ISIA inspectors to trace the chips' onward movement (expensive, may reveal nothing if the trail is cold)
    - follow up: ISIA persuades the nation to join a chip transit monitoring agreement. Six months later, chip imports drop — but imports to the next weakest-link country spike. Whack-a-mole.
    - design note: every transshipment hub shut down shifts traffic to the next. The only systemic fix is universal chip tracking, which requires near-universal treaty membership.
  - A shell company in a free-trade zone places a large order for "industrial computing equipment" with forged end-user certificates. ISIA flags the order but investigation takes months. By the time it's confirmed as fraudulent, the chips have been delivered and moved.
    - variant: ISIA pushes for mandatory real-time verification of end-user certificates before shipment. Chip manufacturers resist — it adds days to every sale and requires sharing customer data with an international body. The choice costs pol (industry opposition) but closes a major gap.
    - follow up: the same broker network (M5) has already spun up three new shell companies by the time the first is shut down. Structural asymmetry: creation is cheap and fast, investigation is expensive and slow.
  - A legitimate chip distributor discovers that one of its regional resellers has been diverting a percentage of every shipment to an undisclosed buyer. The distributor reports it to ISIA — but quietly, because public disclosure would tank their stock price.
    - player choice: keep it quiet and investigate (preserves the distributor's cooperation, but sets a precedent for private enforcement deals) or make a public example (deters others, but distributors stop self-reporting)
    - design note: enforcement depends on voluntary cooperation from industry. How ISIA handles informants shapes whether companies come forward or cover up.
  - Customs officers at a major port discover AI chips hidden in a container of agricultural machinery, concealed inside the hydraulic systems. The chips' monitoring firmware has been physically removed — just the silicon, no tracking.
    - follow up: the container was routed through three countries before reaching the port. Tracing the origin requires cooperation from all three customs agencies, each with different capacity and willingness.
    - variant: the concealment method is sophisticated enough that standard customs scanning wouldn't have caught it — this was found by a tip-off. How many containers got through without a tip?
  - ISIA intercepts encrypted communications describing a "floating warehouse" — a cargo ship that serves as a mobile chip cache, transferring inventory to smaller boats in international waters where no jurisdiction applies.
    - player choice: naval interdiction (legally fraught — international waters, flag-of-convenience registration, -pol with maritime nations) or track the ship and identify the buyers (risky — lose the ship, lose the trail)
    - design note: the domain model notes that packaging, installation, and transport are NOT chokepoints. This event shows why — moving chips is easy once they leave the monitored supply chain.


