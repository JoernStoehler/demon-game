# Enforcement Domain Analysis: Enforcing a Global Ban on ASI Development

Research compiled March 2026. Covers compute governance mechanisms, analogous enforcement regimes, adversary models, evasion methods, and key references.

---

## 1. Compute Governance Enforcement Mechanisms

### 1.1 Hardware-Based Compute Governance (GPU/TPU Tracking, Chip Registration)

**The chokepoint advantage.** AI compute hardware has an extremely concentrated supply chain. TSMC controls ~90% of the market for chips at 3nm and 5nm process nodes. ASML holds 100% of the market for extreme ultraviolet (EUV) lithography machines required to fabricate sub-7nm chips. NVIDIA dominates AI accelerator sales. This concentration creates a natural governance leverage point: fewer than a dozen entities worldwide can produce the hardware needed for frontier AI training.

**Chip-level tracking proposals.** The CNAS "Secure, Governable Chips" report (January 2024) proposes unique chip identifiers, on-chip governance modules, and supply chain traceability tools. Each AI chip would carry a tamper-resistant unique ID, enabling tracking from fabrication through deployment.

**Current production volumes.** An estimated 6.5-7 million AI GPUs were sold in 2025 (~2M Hopper-class, ~5M Blackwell-class). This is a tractable number for a registration regime, comparable in scale to tracking nuclear fuel assemblies or precursor chemicals.

**Supply chain monitoring.** End-use and end-user reporting requirements, on-site inspections of major buyers, secure chip-level identifiers to verify chips reach declared destinations, and information sharing between participating states (modeled on Wassenaar Arrangement practices).

### 1.2 Power Consumption Monitoring

**Scale of AI energy consumption.** US data centers consumed 183 TWh in 2024 (>4% of national electricity), with AI-specific servers using an estimated 53-76 TWh. A single frontier AI training run on tens of thousands of GPUs creates distinctive power consumption patterns: compute-heavy phases require far more power than communication phases, causing large, characteristic power swings.

**Detection signatures.** Large training clusters are detectable through:
- **Grid-level power draw:** A 1 GW AI data center costs ~$30 billion to build and draws power equivalent to a mid-size city. Meta's Prometheus cluster has an estimated 700 MW capacity.
- **Thermal signatures:** Satellite thermal imaging can detect operational data centers via heat output, even at night.
- **Power stability requirements:** Large training runs require dedicated power infrastructure — sudden load changes of 1,500 MW have been documented from data center disruptions (Fairfax County, Virginia, 2024).

**Verification potential.** Energy monitoring can detect power consumption patterns suggesting large GPU clusters. This is identified as one of the 10 verification methods in the Wasil et al. (2024) taxonomy.

### 1.3 KYC (Know Your Customer) for Cloud Compute

**GovAI's KYC proposal.** The Centre for the Governance of AI proposes adapting banking-sector KYC standards for cloud compute providers. Cloud Service Providers (CSPs) would be required to verify the identity of customers purchasing large compute allocations, report suspicious usage patterns, and maintain records.

**US regulatory developments.** The Commerce Department proposed rules requiring IaaS (Infrastructure as a Service) providers to implement KYC procedures for foreign customers, specifically to prevent adversaries from accessing large-scale AI compute through commercial cloud services.

**Threshold-based reporting.** Training runs exceeding defined compute thresholds (e.g., 10^26 FLOPs under EO 14110, 10^25 FLOPs under the EU AI Act) would trigger mandatory reporting. At current costs, a 10^25 FLOP run costs $7-10M, and a 10^26 FLOP run costs $70-100M — these are significant enough to be detectable through financial monitoring alone.

### 1.4 On-Chip Governance Mechanisms (Licensing, Kill Switches)

**Hardware-Enabled Mechanisms (HEMs).** RAND's 2024 working paper (Kulp, Gonzales, Smith, Heim, Puri et al.) describes security features built into AI chips that enact or enable policies:

- **Offline licensing:** Chips perform a limited amount of computation per license period, then require renewal before performing more. The license authority (government or chipmaker) can revoke licenses.
- **FLOP caps:** Tamper-proof counters limit total computation before re-authorization.
- **Network restrictions:** Export-controlled chips can only establish high-bandwidth connections with a limited number of other chips, preventing assembly of unauthorized large clusters.
- **Computation attestation:** On-chip modules produce verifiable data about the quantity of computation or datasets used in a training run, without revealing proprietary details (privacy-preserving verification).

**Feasibility.** CNAS notes that much of the required functionality (secure enclaves, cryptographic attestation, remote management) already exists in shipping AI chips from AMD, Apple, Intel, and NVIDIA. The "FlexHEG" approach (a secure processor interacting with the AI chip for governance operations) could be designed and tested in under two years, then retrofitted to existing chips.

**Risks and opposition.** On-chip kill switches create new attack surfaces — if the governance mechanism can be exploited, adversaries gain a tool for sabotage. The Center for Cybersecurity Policy warned that the Chip Security Act "threatens to create new cyber vulnerabilities in U.S. semiconductors." The Data Innovation Foundation argues policymakers should reject kill switches due to security risks and competitive disadvantage.

**Circumvention concern.** A well-resourced and motivated adversary could tamper with HEMs to disable them. Physical chip decapping and reverse engineering are established techniques, though extremely expensive at scale.

### 1.5 International Verification Regimes

**Wasil et al. (2024) taxonomy.** "Verification Methods for International AI Agreements" categorizes 10 methods into three classes:

1. **National technical means** (minimal cooperation needed):
   - Remote sensing (satellite detection of data centers via visual/thermal signatures)
   - Energy monitoring (detecting power consumption patterns)
   - Financial intelligence (tracking large compute purchases)
   - Whistleblowers (incentivizing insiders to report violations)

2. **Access-dependent methods** (require cooperation from inspected state):
   - On-site inspections (physical verification of facilities)
   - Data center audits (reviewing compute usage logs)
   - Model evaluations (testing AI systems for prohibited capabilities)

3. **Hardware-dependent methods** (require rules around advanced hardware):
   - Chip tracking and registration
   - On-chip governance mechanisms
   - Supply chain controls

**The "Compute Pause Button" framework (2025).** A Governance-Enforcement-Verification (GEV) architecture proposes:
- **Governance:** International body sets rules and compute thresholds
- **Enforcement:** Technical mechanisms (FLOP caps, model locking, licensing) plus administrative actions
- **Verification:** Audits, digital computation receipts, supply chain monitoring

**Global compute cap treaty proposal.** An international treaty banning AI systems above an agreed computational threshold, with emergency response plans, an international enforcement agency, whistleblower protections, and commitments to avoid AI arms races. Stakeholders would have authority to approve or deny compute license renewals based on risk levels and compliance.

---

## 2. Analogous Enforcement Regimes

### 2.1 Nuclear Non-Proliferation (IAEA Inspections, Enrichment Monitoring)

**Strengths of the nuclear analogy:**
- The IAEA safeguards system functions as a confidence-building measure, early warning mechanism, and trigger for international response.
- Current safeguards cover ~1,300 nuclear facilities and verify significant quantities of nuclear material worldwide.
- The system evolved from "accountancy" (verifying declared materials) to "detective work" (actively seeking undeclared activities) after the Iraq failure.
- Challenge inspections, Additional Protocol access, environmental sampling, and remote monitoring cameras provide layers of verification.

**Key failures and lessons:**
- **Iraq (1991):** IAEA inspectors had been conducting routine inspections at Tuwaitha while Iraq was illegally enriching uranium in adjacent buildings. The failure: safeguards only inspected what states *declared*. Lesson for AI: a regime that only monitors declared data centers will miss clandestine ones.
- **Iran (ongoing):** Iran has repeatedly failed to explain uranium particles at undeclared locations and has denied inspector access since 2019. As of February 2026, the IAEA was unable to verify whether Iran had suspended all uranium enrichment. Lesson: verification regimes can be obstructed by determined state actors.
- **Libya/Syria:** Unstable security situations prevent routine inspections. Lesson: enforcement requires stable geopolitical conditions.

**Structural challenges applicable to AI governance:**
- Near-zero budget growth for years, with actual cuts, while the number of facilities under safeguards rose 12% and nuclear material grew 24%.
- Baruch Plan lesson: attempting to negotiate global governance from a position of technological superiority tends to fail.

**RAND's "Insights from Nuclear History for AI Governance" (2024)** draws specific parallels and warns against repeating mistakes.

### 2.2 Chemical Weapons (OPCW Verification)

**Gold standard for treaty verification.** The Chemical Weapons Convention (CWC) is the most successful disarmament treaty:
- In 2023, all declared chemical weapons stockpiles were verified as destroyed — a historic milestone.
- The CWC includes **challenge inspections**: any state party can request a surprise inspection of another party, with "any time, anywhere" access and no right of refusal.
- The OPCW maintains a constructive relationship with the chemical industry, which is critical for sustainable verification.

**Lessons for AI governance:**
- Industry partnership is essential. The OPCW-chemical industry relationship is a model for how an AI verification body must work with chip manufacturers, cloud providers, and AI labs.
- Trial inspections during CWC development were key to building the verification mechanism. An AI treaty would benefit from similar pilot verification exercises.
- Dual-use challenges exist but are manageable when verification is robust.

### 2.3 Biological Weapons (BWC Challenges)

**The cautionary tale.** The Biological Weapons Convention (BWC) *lacks* a verification regime — it has no inspections, no enforcement body, and no Organization for the Prohibition of Biological Weapons. After a decade of negotiation, efforts to create a verification protocol failed in 2001 when the US rejected the draft.

**Why it failed:**
- Biological research is inherently dual-use (defensive research requires understanding offensive capabilities)
- Industry opposition to intrusive inspections
- Verification deemed technically infeasible for biology
- The US did not want foreign inspectors in its biodefense facilities

**Lesson for AI governance:** AI research is similarly dual-use. A verification regime must navigate the tension between safety research and capability research, and must address the same dual-use challenge that killed BWC verification. The BWC failure demonstrates that without a verification mechanism, a treaty is largely aspirational.

### 2.4 Export Controls (Wassenaar, ITAR)

**Current AI chip export control landscape:**
- US BIS controls restrict advanced computing semiconductors to China (Entity List of 140+ companies, Foreign Direct Product Rule)
- The AI Diffusion Framework (January 2025, later rescinded and revised) attempted global chip distribution rules
- Wassenaar Arrangement provides soft-law framework for coordinating dual-use technology export controls among 42 participating states

**Enforcement challenges (specific numbers):**
- At least 8 Chinese AI chip-smuggling networks have been identified, each conducting transactions worth >$100 million
- A Florida front company ("Luxuriate Your Life") purchased $390 million in servers with banned NVIDIA GPUs, falsifying export documentation
- Huawei reportedly used shell companies to trick TSMC into manufacturing 2 million chiplets for its Ascend 910 AI processors
- The largest BIS administrative penalty in history was $300 million — while the AI chip market in China is tens of billions annually

**Structural enforcement problem:** Penalties are dwarfed by profits. The financial incentive to smuggle is massive. Congress approved a 23% increase in BIS's FY2026 budget, with funds specifically for semiconductor enforcement, but the scale mismatch remains.

**Circumvention categories:**
1. Technical gaps (controls fail to account for new chip architectures)
2. Legal circumvention (companies skirt restrictions within the letter of the law)
3. Illicit evasion (smuggling through shell companies, false documentation, third-country transshipment)

### 2.5 Financial Crime Enforcement (AML, Sanctions)

**Structural parallels to AI compute governance:**
- AML/KYC frameworks require financial institutions to verify customer identities, monitor transactions, and report suspicious activity above thresholds. This maps directly to proposed KYC requirements for cloud compute providers.
- Sanctions enforcement monitors global financial flows to block prohibited transactions. AI compute governance would similarly monitor compute access.
- Russia-linked sanctions evasion in 2025 involved at least $39 billion in concentrated stablecoin activity — demonstrating that even heavily monitored systems face massive evasion.

**Key lessons:**
- **False positives are a major challenge.** Financial institutions generate enormous volumes of false alerts that delay legitimate activity. AI compute monitoring would face the same problem.
- **Behavioral baselines help.** Moving beyond static rules to contextual risk modeling reduces false positives and catches novel evasion patterns.
- **Financial intelligence follows the money.** Frontier AI training at $70-100M+ per run leaves large financial footprints — purchase orders, power contracts, facility leases — that are detectable through financial monitoring even without technical means.

---

## 3. Adversary Models for AI Compute

### 3.1 State Actors (Military AI Programs)

**Capabilities and motivations:**
- China, Russia, and the US are "tier one" military AI powers
- China's 2019 defense white paper champions "intelligentized warfare" with AI as central to PLA modernization
- Putin views AI leadership as essential to Russia's great power status
- Both nations have extensive state-sponsored programs with military funding and infrastructure

**Evasion capacity:**
- State actors can build sovereign chip fabrication (China's SMIC, though currently limited to 7nm)
- Can commandeer national power grids and telecommunications infrastructure
- Can classify AI programs under national security exemptions
- Can deny access to international inspectors (the Iran model)
- Can develop AI-specific hardware alternatives (China's Ascend chips)

**Detection difficulty:** HIGH. State programs can operate within military facilities exempt from civilian oversight, use state-controlled infrastructure, and leverage diplomatic immunity. The Iraq/IAEA precedent shows state programs can hide adjacent to declared facilities.

### 3.2 Corporate Actors (Economic Incentives)

**Motivations:**
- First-mover advantage in ASI development could be worth trillions
- Companies with existing AI capabilities (compute infrastructure, talent, data) have the lowest marginal cost of violation
- Competitive pressure between companies creates prisoner's dilemma dynamics
- Stock market incentives reward capability announcements

**Evasion capacity:**
- Can disguise prohibited training as legitimate research, inference, or other approved workloads
- Can use subsidiaries in jurisdictions with weaker enforcement
- Can exploit legal loopholes (compute structuring to stay below thresholds)
- Have deep expertise in the exact hardware and software being governed
- Can fund lobbying to weaken regulations

**Detection difficulty:** MEDIUM-HIGH. Corporate actors have large financial footprints and many employees (whistleblower risk), but can hide activities within massive legitimate operations. The DeepSeek case (2024) showed unauthorized model distillation through API access — no physical compute violation needed.

### 3.3 Ideological Actors (AI Accelerationists)

**The e/acc movement.** Effective accelerationism explicitly advocates unrestricted AI development and opposes regulation. Key beliefs:
- Technological progress (especially AGI) solves all human problems
- Technological stagnation is a greater danger than uncontrolled AI
- Government intervention in AI development is harmful
- The universe's purpose is fulfilled by spreading intelligence

**Threat profile:**
- Individual researchers or small teams with elite technical skills
- Motivated by ideology rather than profit, making them harder to deter with financial penalties
- Could work within legitimate institutions while covertly advancing prohibited research
- May share prohibited capabilities openly (viewing this as a moral duty)
- Unlikely to command frontier-scale compute individually, but could contribute to distributed or open-source efforts

**Detection difficulty:** MEDIUM. Ideological actors tend to be visible (the e/acc movement is public), but their actual technical activities may not cross enforcement thresholds.

### 3.4 Academic Actors (Curiosity-Driven)

**The dual-use research tension:**
- AI safety research itself requires understanding dangerous capabilities
- The EU AI Act's research exemptions are poorly drafted, creating legal uncertainty
- Academic freedom norms resist enforcement on research
- University research may produce capabilities that cross governance thresholds without intent to violate

**Specific concerns:**
- Open publication norms conflict with information hazard management
- Algorithmic efficiency research directly undermines compute-threshold governance (enabling the same capabilities with less compute)
- Graduate students and postdocs may lack security clearances but work on sensitive capability research

**Detection difficulty:** LOW-MEDIUM. Academic work is usually published and conducted in known facilities. But the line between "safety research" and "capability research" is genuinely blurred.

### 3.5 Criminal Organizations

**Emerging threat patterns:**
- ShadowRay 2.0 campaign (2024-present): attackers compromised ~230,000 AI compute environments (Ray clusters), hijacking GPU clusters for cryptomining, data theft, and botnet expansion
- At least 8 Chinese chip-smuggling networks conducting >$100M transactions each
- Criminal groups steal AI models and source code alongside compute hijacking
- Attackers maintain stealth by capping resource usage at 60% to avoid detection triggers

**Business models:**
- Selling illicit AI compute access as a service
- Training and selling prohibited AI models on black markets
- Ransoming stolen models or threatening to release them
- Using hijacked compute to train models that enable further criminal activity (deepfakes, social engineering)

**Detection difficulty:** MEDIUM. Criminal operations leave technical traces (unusual network traffic, energy anomalies) and financial trails (payment processing), but sophisticated operations can be difficult to attribute.

### 3.6 Insider Threats Within Enforcement

**The corruption/capture risk:**
- Enforcement agency personnel have access to sensitive intelligence about monitoring capabilities and their gaps
- Revolving door between enforcement agencies and regulated industry creates loyalty conflicts
- Nation-states can attempt to recruit or compromise inspectors (as attempted against IAEA)
- AI governance complexity means few people understand the full system, giving knowledgeable insiders outsized leverage

**Specific vectors:**
- Inspector corruption (accepting bribes to overlook violations)
- Regulatory capture (agency culture aligns with industry interests over public safety)
- Intelligence leakage (revealing monitoring capabilities to adversaries)
- Deliberate weakening of standards from within

**The IAEA experience:** The IAEA has established whistleblower policies specifically to address internal misconduct. But the nuclear verification community is small enough that personnel relationships create inherent conflicts. An AI enforcement body would face similar challenges at an even larger scale.

---

## 4. Technical Evasion Methods

### 4.1 Distributed Training Across Many Small Clusters

**Current state of technology.** Distributed and decentralized AI training is advancing rapidly:
- Pluralis Research has demonstrated training billion-parameter models with layers distributed across GPUs in entirely different geographic locations
- Internet-connected consumer hardware can participate in training, with inter-node bandwidth ranging from 200 Mb/s to 100 Gb/s
- New low-communication algorithms are enabling practical distributed training that was previously impractical

**Governance implications (from Arxiv 2507.07765):**
- **Compute structuring risk:** Adversaries split training across facilities to keep each below detection thresholds (analogous to "structuring" cash deposits below $10,000 to evade AML reporting)
- **Capability proliferation:** Distributed training enables more actors to contribute to and access frontier capabilities
- **Erosion of detectability:** No single facility to inspect; no single power draw to monitor
- **Erosion of shutdownability:** No single point to shut down

**Detection feasibility.** Recent work (OpenReview) suggests detecting compute structuring is "likely feasible" through analysis of communication patterns, timing correlations, and aggregate compute usage. But feasible is not easy.

### 4.2 Using Consumer Hardware at Scale

**The algorithmic efficiency threat.** The amount of compute needed to reach a given capability level declines by ~3x per year. Capability density doubles approximately every 3.5 months. This means:
- Today's frontier model capabilities will be achievable on consumer hardware within 5-7 years
- The enforcement window narrows as algorithmic efficiency improves
- The game's "Algorithmic Progress" bar directly models this dynamic

**Specific numbers:**
- GPT-4 used ~25,000 A100 GPUs for ~100 days at ~$63M
- DeepSeek V3 achieved comparable capabilities using 2,048 H800 GPUs for $5.6M
- This 10x efficiency gain occurred in roughly 18 months
- Continued gains at this rate would put equivalent training within reach of consumer GPU clusters (~2030-2032)

**Consumer GPU availability:** Gaming GPUs (NVIDIA RTX 4090, RTX 5090) provide substantial AI compute. Botnets or volunteer networks could aggregate thousands of consumer GPUs for distributed training.

### 4.3 Hiding Compute in Legitimate Operations

**Camouflage within legitimate workloads:**
- Large cloud providers process petabytes of legitimate AI workload daily. Prohibited training can be hidden within this volume.
- Inference workloads can generate training data (model distillation), as demonstrated by the DeepSeek/OpenAI case
- Cryptocurrency mining operations provide cover for compute-intensive GPU usage
- Scientific computing facilities (climate modeling, drug discovery, genomics) have legitimate large-scale compute that could mask AI training

**Synthetic data camouflage:** Adversaries can generate synthetic network traffic and compute patterns that perfectly mimic legitimate operations, hiding actual training within a stream of legitimate-looking activity.

**The structuring problem:** Just as financial criminals structure transactions below reporting thresholds, AI developers could structure compute usage below governance thresholds. RAND's game-theoretic model found detection gaps in current governance proposals and suggests noncompute mechanisms may be necessary.

### 4.4 Novel Hardware (Neuromorphic, Optical, Biological Compute)

**Current state:**
- **Neuromorphic:** Intel Loihi 2 ran the first LLM on neuromorphic hardware in April 2025, achieving comparable accuracy at half the energy. SpiNNcloud partnered with Sandia National Laboratories for defense applications.
- **Optical/photonic:** Photonic processors exploit light's parallelism for near-zero-loss matrix operations (the computational backbone of neural networks). Multiple startups are developing photonic AI accelerators.
- **Biological:** DNA computing and organoid computing are in early research stages, far from practical AI training.

**Governance implications:**
- Current compute governance proposals focus on tracking GPUs/TPUs. Novel hardware architectures could bypass these entirely.
- Neuromorphic chips may not be captured by existing FLOP-based thresholds (they process information differently)
- Optical computing could potentially run in facilities with lower power and thermal signatures
- However, all alternative hardware is currently far behind GPU-based systems for frontier AI training (years to decades behind for frontier-scale)
- The timeline risk: governance regimes established today must be adaptive enough to cover hardware that doesn't exist yet

### 4.5 Corrupting Monitoring Systems

**Attack vectors against governance infrastructure:**
- **Chip-level:** Physical tamper attacks against on-chip governance mechanisms (decapping, side-channel attacks, fault injection)
- **Software-level:** Compromising monitoring software to report false compliance data
- **Network-level:** Spoofing compute usage reports, disguising training traffic as legitimate
- **Human-level:** Corrupting inspectors, planting insiders in verification bodies
- **Supply chain:** Diverting chips before governance mechanisms are installed, or manufacturing chips without governance features in non-compliant fabs

**The arms race dynamic:** Every governance mechanism creates an attack surface. On-chip kill switches create new cyber vulnerabilities. Monitoring systems can be spoofed. Digital computation receipts can be falsified. This creates a continuous attacker-defender dynamic similar to the malware/antimalware ecosystem.

---

## 5. Key Papers and Proposals

### Foundational Compute Governance

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Computing Power and the Governance of AI | Sastry, Heim, Belfield, Anderjung, Brundage, Hazell, O'Keefe, Hadfield et al. | 2024 | Foundational framework: compute is detectable, excludable, quantifiable. Three governance functions: visibility, allocation, enforcement. |
| Crucial Considerations for Compute Governance | Heim | 2024 | Warns against premature advocacy for HEMs; identifies risks of naive compute governance |
| Training Compute Thresholds: Features and Functions in AI Regulation | Heim et al. (GovAI) | 2024 | Analysis of compute thresholds in EU AI Act and EO 14110; discusses evasion via algorithmic efficiency |

### Hardware-Enabled Mechanisms

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Hardware-Enabled Governance Mechanisms (RAND working paper) | Kulp, Gonzales, Smith, Heim, Puri, Vermeer, Winkelman | 2024 | Technical proposals for offline licensing, FLOP caps, network restrictions |
| Secure, Governable Chips (CNAS report) | CNAS | 2024 | Operating licenses, on-chip governance modules, computation attestation |
| Near-Term Enforcement of AI Chip Export Controls | (arXiv) | 2024 | Practical near-term enforcement approaches |

### Treaty Verification

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Verification Methods for International AI Agreements | Wasil, Reed, Miller, Barnett | 2024 | Taxonomy of 10 verification methods in 3 categories; game-theoretic analysis |
| Governing Dual-use Technologies: Case Studies | Wasil, Barnett, Gerovitch, Hauksson, Reed, Miller | 2024 | Lessons from nuclear, chemical, biological weapons regimes for AI governance |
| Toward a Global Regime for Compute Governance: Building the Pause Button | (arXiv) | 2025 | Comprehensive GEV framework with compute cap treaty proposal |
| Insights from Nuclear History for AI Governance (RAND) | RAND | 2024 | Historical lessons from nuclear governance failures and successes |

### Detection and Enforcement

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Strategies and Detection Gaps in a Game-Theoretic Model of Compute Governance | Moon, Padmaja Vedula, Geneson, Bar-on (RAND) | 2025 | Game-theoretic model showing detection gaps; suggests noncompute mechanisms needed |
| Detecting Compute Structuring in AI Governance | (OpenReview) | 2025 | Argues detection of compute structuring is feasible |
| Distributed and Decentralised Training: Technical Governance Challenges | (arXiv 2507.07765) | 2025 | Maps decentralized training evasion techniques and governance responses |

### KYC and Cloud Governance

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Oversight for Frontier AI through a KYC Scheme for Compute Providers | GovAI | 2024 | Detailed KYC proposal adapted from banking sector |
| Governing Through the Cloud | Oxford Martin School | 2025 | Role of cloud providers as intermediary governance points |

### Legal and Institutional

| Paper | Authors | Year | Key Contribution |
|-------|---------|------|-----------------|
| Towards an International Regulatory Framework for AI Safety: Lessons from IAEA | Nature Humanities & Social Sciences Communications | 2024 | IAEA as model for AI safety regulation |
| Framework Convention on AI (Council of Europe) | Council of Europe | 2024 | First legally binding international AI treaty (though focused on human rights, not compute) |
| AI Whistleblower Protection Act | US Senate (Grassley) | 2025 | Legal protections for reporting AI security vulnerabilities and violations |

---

## 6. Key Numbers for Game Design

### Compute Scale
- **Frontier training (2024):** ~25,000 A100 GPUs, ~100 days, ~$63M (GPT-4 scale)
- **Efficient frontier training (2025):** ~2,048 H800 GPUs, ~$5.6M (DeepSeek V3)
- **Projected frontier clusters (2027):** Up to 5.2M H100-equivalents (Microsoft)
- **Annual GPU production (2025):** ~6.5-7M GPUs
- **Algorithmic efficiency gain:** ~3x per year (same capability with less compute)

### Energy
- **US data center power (2024):** 183 TWh (>4% of national electricity)
- **AI-specific (2024):** 53-76 TWh
- **Single major data center:** 700 MW - 1 GW
- **Cost of 1 GW AI facility:** ~$30 billion

### Governance Thresholds
- **EU AI Act:** 10^25 FLOPs triggers systemic risk obligations
- **US EO 14110:** 10^26 FLOPs triggers reporting obligations
- **Cost at 10^25 FLOPs:** $7-10M
- **Cost at 10^26 FLOPs:** $70-100M
- **Models projected above 10^26 by 2030:** ~200 (median estimate)

### Supply Chain Concentration
- **TSMC:** ~90% of advanced node (3nm/5nm) chips
- **ASML:** 100% of EUV lithography machines
- **Taiwan:** 92% of advanced semiconductor manufacturing
- **Engineers with key knowledge:** <50,000 globally
- **Manufacturing steps per chip:** >1,000 over 70-90 days

### Enforcement Gaps
- **Chip smuggling networks identified:** 8+ Chinese networks, each >$100M
- **Largest BIS penalty ever:** $300M (vs. tens of billions in annual market)
- **Compromised AI compute environments (ShadowRay):** ~230,000
- **Russia-linked sanctions evasion (2025):** $39B+ via stablecoins

---

## 7. Synthesis: What Makes ASI Enforcement Hard (and What Makes It Possible)

### Why enforcement is possible (advantages over nuclear/bio)

1. **Extreme supply chain concentration.** AI compute hardware has fewer chokepoints than nuclear materials. You can't mine uranium substitutes, but you can't build EUV lithography machines either — there is literally one company.

2. **Large physical footprint.** Frontier training requires massive facilities (700 MW+), tens of thousands of GPUs, specialized cooling, and enormous power contracts. These are harder to hide than biological weapons labs.

3. **Financial visibility.** Training runs cost $5M-100M+. The hardware, power, and facility costs create financial trails detectable through AML-style monitoring.

4. **Digital nature.** Unlike nuclear material, compute usage generates digital records that can be cryptographically attested and remotely verified.

5. **Existing governance infrastructure.** Export controls, cloud KYC, chip tracking — much of the infrastructure exists or can be adapted from financial regulation.

### Why enforcement is hard (fundamental challenges)

1. **Algorithmic efficiency erodes thresholds.** The amount of compute needed for given capabilities drops ~3x/year. Today's frontier requires a detectable mega-facility; in 5-7 years it might require a room full of consumer GPUs.

2. **Dual-use everything.** Every GPU, every data center, every training framework has legitimate uses. Unlike enriched uranium (few peaceful uses at weapons-grade), AI compute is indistinguishable from legitimate until the training objective is known.

3. **Distributed training undermines physical inspection.** New algorithms enable training across geographically dispersed small clusters. There's no single facility to inspect.

4. **Speed of technological change.** Novel hardware (neuromorphic, optical) could bypass GPU-centric governance entirely. Governance regimes must be adaptive, but international treaties are slow to amend.

5. **Incentives are massive.** The expected value of developing ASI first could be "controlling the future of civilization." No enforcement penalty can match this incentive. Financial penalties for chip smuggling ($300M max) are rounding errors compared to the market opportunity.

6. **Verification requires cooperation.** The most effective verification methods (on-site inspections, data center audits) require the inspected party's cooperation. State actors can refuse access (the Iran model).

7. **Novel hardware escapes current frameworks.** Neuromorphic, optical, and biological computing don't fit FLOP-based thresholds. They could eventually enable AI training outside the governance regime entirely.

8. **Insider risk is high.** The enforcement body itself becomes a target for corruption, capture, and infiltration — anyone who understands the monitoring gaps can exploit them.

---

## Sources

- [RAND: Hardware-Enabled Governance Mechanisms](https://www.rand.org/pubs/working_papers/WRA3056-1.html)
- [RAND: Insights from Nuclear History for AI Governance](https://www.rand.org/pubs/perspectives/PEA3652-1.html)
- [RAND: Strategies and Detection Gaps in Compute Governance](https://www.rand.org/pubs/research_reports/RRA3686-1.html)
- [CNAS: Secure, Governable Chips](https://www.cnas.org/publications/reports/secure-governable-chips)
- [GovAI: Computing Power and the Governance of AI](https://www.governance.ai/analysis/computing-power-and-the-governance-of-ai)
- [GovAI: KYC Scheme for Compute Providers](https://www.governance.ai/research-paper/oversight-for-frontier-ai-through-kyc-scheme-for-compute-providers)
- [GovAI: Training Compute Thresholds](https://www.governance.ai/research-paper/training-compute-thresholds-features-and-functions-in-ai-regulation)
- [Heim: Crucial Considerations for Compute Governance](https://blog.heim.xyz/crucial-considerations-for-compute-governance/)
- [Heim: Considerations and Limitations for AI HEMs](https://blog.heim.xyz/considerations-and-limitations-for-ai-hardware-enabled-mechanisms/)
- [Wasil et al.: Verification Methods for International AI Agreements (arXiv)](https://arxiv.org/abs/2408.16074)
- [Wasil et al.: Governing Dual-use Technologies](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4946527)
- [Toward a Global Regime for Compute Governance: Building the Pause Button (arXiv)](https://arxiv.org/abs/2506.20530)
- [An International Treaty to Implement a Global Compute Cap (arXiv)](https://arxiv.org/html/2311.10748v2)
- [Distributed and Decentralised Training: Governance Challenges (arXiv)](https://arxiv.org/abs/2507.07765)
- [Nature: International Regulatory Framework for AI Safety: Lessons from IAEA](https://www.nature.com/articles/s41599-024-03017-1)
- [Epoch AI: How Many AI Models Will Exceed Compute Thresholds](https://epoch.ai/blog/model-counts-compute-thresholds)
- [Epoch AI: Trends in AI](https://epoch.ai/trends)
- [Lawfare: To Govern AI, We Must Govern Compute](https://www.lawfaremedia.org/article/to-govern-ai-we-must-govern-compute)
- [80,000 Hours: Lennart Heim on Compute Governance](https://80000hours.org/podcast/episodes/lennart-heim-compute-governance/)
- [OPCW: Chemical Weapons Convention](https://www.opcw.org/chemical-weapons-convention)
- [BWC Verification Compliance (Bulletin of the Atomic Scientists)](https://thebulletin.org/2024/03/how-the-biological-weapons-convention-could-verify-treaty-compliance/)
- [CSIS: Limits of Chip Export Controls](https://www.csis.org/analysis/limits-chip-export-controls-meeting-china-challenge)
- [Wire China: Chasing the Chip Smugglers](https://www.thewirechina.com/2026/03/01/chasing-the-chip-smugglers-nvidia-ai-chips-china/)
- [Pew Research: Data Centers Energy Use](https://www.pewresearch.org/short-reads/2025/10/24/what-we-know-about-energy-use-at-us-data-centers-amid-the-ai-boom/)
- [IEA: Energy Demand from AI](https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai)
- [IAEA: Challenges in Nuclear Verification](https://www.iaea.org/newscenter/statements/challenges-in-nuclear-verification)
- [GAO: Export Controls Commerce Implementation](https://www.gao.gov/products/gao-25-107386)
- [AI Whistleblower Protection Act (S.1792)](https://www.congress.gov/bill/119th-congress/senate-bill/1792/text)
- [Carnegie: Governing Military AI](https://carnegieendowment.org/research/2024/07/governing-military-ai-amid-a-geopolitical-minefield)
- [Detecting Compute Structuring (OpenReview)](https://openreview.net/forum?id=qseqw1sWzz)
- [The Role of Compute Thresholds (Institute for Law & AI)](https://law-ai.org/the-role-of-compute-thresholds-for-ai-governance/)
