# Geopolitics Synthesis: Mechanisms for Enforcing a 30-Year Technology Ban

Grounded in source documents from `literature/`: IAEA safeguards evolution, Iran/Iraq noncompliance records, A.Q. Khan network analyses, Goldschmidt's nonproliferation critiques, Stigler/Kwak/Carpenter-Moss on regulatory capture, Boeing 737 MAX and Deepwater Horizon regulatory failure reports, CNAS chip smuggling and sanctions reports, Carnegie Russia evasion analysis, CYFIRMA North Korea cyber operations, and FinIntegrity convergence analysis.

---

## A. Verification and Detection Gaps

### 1. Declared-vs-Undeclared Blindness

Pre-1991 IAEA safeguards verified only *declared* nuclear materials, leaving undeclared facilities invisible. Iraq maintained a "very extensive clandestine nuclear weapon programme" alongside declared facilities that inspectors visited routinely. The IAEA's post-Iraq review (Programme 93+2) found that inspectors "had not been so restricted, the probability of their detecting Iraq's [programme]" would have been higher.

**Source:** `iaea-evolution-of-safeguards.txt`, Introduction (lines 450-455, 1091-1101)
**Timescale:** Structural from day one; exposed after ~20 years
**ISIA scenario:** ISIA monitors declared compute facilities but misses undeclared distributed training runs in residential or industrial buildings. The monitoring architecture assumes compliance rather than detecting evasion.

### 2. Concealment Through Incremental Disclosure

Iran operated undeclared enrichment facilities at Natanz and conducted plutonium separation for nearly two decades before acknowledging them in 2003. The IAEA found "many failures and breaches of obligation" but Iran used incremental, partial disclosures to delay consequences for years.

**Source:** `iaea-gov2003-75-iran-safeguards.txt` (lines 1-13); `goldschmidt-safeguards-noncompliance.txt` (lines 78-86)
**Timescale:** 3-20 years of concealment
**ISIA scenario:** A treaty member reveals small violations when confronted but withholds the full picture. Each partial disclosure buys time while the real program advances. Maps to `insincere-member`.

### 3. Under-Resourced Enforcement

BIS has just six export control officers across all of East, South, and Southeast Asia. The profits from three reported chip smuggling cases in 2024 exceeded BIS's entire annual enforcement budget ($55M). Smugglers can outspend enforcement roughly 15:1.

**Source:** `cnas-chip-smuggling.md`, "Why Does AI Chip Smuggling Occur?" section
**Timescale:** Immediate and ongoing
**ISIA scenario:** ISIA inspection teams stretched thin globally while smuggling networks operate with superior resources. Maps to `budget-turf-war`, `morale-crisis`.

---

## B. Smuggling and Supply Chain Evasion

### 4. Turnkey Proliferation Networks

The Khan network offered complete nuclear weapons capability -- centrifuges, designs, manufacturing equipment, weapons blueprints, and ongoing technical assistance. It operated across 20+ countries using front companies, false end-user certificates, and workshops in countries with weak export controls (Malaysia, Turkey, UAE).

**Source:** `albright-hinderstein-nuclear-black-market.txt` (lines 26-52); `maccalman-khan-smuggling-network.txt` (lines 43-54, 79-98)
**Timescale:** ~20 years of operation before exposure
**ISIA scenario:** A network offers complete AI training infrastructure: smuggled chips, distributed networking, training software, and expert consultation. Maps to `smuggle-ring`, `sanctions-evasion`.

### 5. Shell Company Proliferation

AI chip smugglers use shell companies that "can typically be set up online for a few thousand dollars in a matter of hours or days, whereas it can take years of investigation to uncover a shell company's illicit activities." In one case, a Malaysian broker helped a Chinese company create a website, email address, and rented data center space to fool inspections.

**Source:** `cnas-chip-smuggling.md`, "Better Enforcement" section and Case Study
**Timescale:** Hours to set up, years to dismantle
**ISIA scenario:** Evasion networks spin up new entities faster than ISIA can investigate old ones. Maps to `cat-mouse-adapt`.

### 6. Third-Country Transshipment

After Russia sanctions, EU direct exports dropped to near-zero, but intermediary countries (Turkey, UAE, Armenia) showed suspicious import surges -- e.g., landlocked Armenia and Kyrgyzstan suddenly importing maritime equipment. Similarly, NVIDIA's exports to Singapore reached 18% of total revenue after chip bans, far exceeding legitimate demand.

**Source:** `carnegie-russia-sanctions-evasion-costs-2024.md` (evidence section); `cnas-chip-smuggling.md` (Singapore data)
**Timescale:** Emerges within months of controls
**ISIA scenario:** Non-treaty nations become chip transshipment hubs. Maps to `north-korea-pattern`, `non-treaty-advantage`.

### 7. Convergent Illicit Networks

Money laundering, sanctions evasion, and export control evasion share common methods: shell companies, front entities, false documentation, and third-country routing. By 2024, approximately $4 billion in export-controlled semiconductor chips had reached Russia via 6,000+ companies. The same networks serve multiple adversaries simultaneously.

**Source:** `finintegrity-convergence-sanctions-export-controls-aml-2025.md` (Core Thesis, Case Study 1)
**Timescale:** Networks mature over 2-5 years, persist indefinitely
**ISIA scenario:** Chip smuggling networks also serve rogue AI labs, weapons programs, and cyber operations. Disrupting one node barely slows the system.

---

## C. Institutional and Political Dysfunction

### 8. Delayed Noncompliance Response

The IAEA Board failed to declare Iran noncompliant in November 2003 despite documented breaches. Referral to the Security Council came only in February 2006 -- "losing three crucial years during which Iran's nuclear program became practically irreversible." The delay was political: three EU nations traded non-referral for Iran's voluntary (and limited) enrichment suspension.

**Source:** `goldschmidt-six-lessons-not-learned.txt` (Lesson 1, lines 28-33); `goldschmidt-safeguards-noncompliance.txt` (lines 78-101)
**Timescale:** 3+ years of delay
**ISIA scenario:** When ISIA detects a treaty violation, coalition politics prevent swift action. Allies trade enforcement concessions for diplomatic deals. Maps to `challenge-inspection-veto`, `review-conference`.

### 9. Veto Exploitation

States calculate that "geopolitical or economic considerations will cause at least one veto-wielding Security Council member to oppose effective sanctions." North Korea exploited this: the Security Council waited 13 years after initial noncompliance before taking action (only after a 2006 nuclear test). Even then, sanctions were "modest."

**Source:** `goldschmidt-six-lessons-not-learned.txt` (Lessons 4-5, lines 52-62); `goldschmidt-safeguards-noncompliance.txt` (lines 92-93)
**Timescale:** Decades
**ISIA scenario:** A major power shields an allied violator from ISIA enforcement, calculating that blocking action serves its strategic interests. Maps to `us-china-suspicion`, `challenge-inspection-veto`.

### 10. Treaty Withdrawal Loophole

NPT safeguards agreements automatically lapse if a state withdraws. North Korea exploited this: it withdrew from the NPT in 2003, and previously safeguarded materials could then be weaponized without treaty violation. No pre-agreed consequences existed.

**Source:** `goldschmidt-six-lessons-not-learned.txt` (Lesson 6, lines 64-76)
**Timescale:** Immediate upon withdrawal
**ISIA scenario:** A treaty member threatens or executes withdrawal, removing all monitoring obligations. Maps to `withdrawal-threat`, `treaty-threat`.

---

## D. Regulatory Capture and Institutional Decay

### 11. Delegated Oversight Capture (Boeing/FAA Pattern)

Boeing employees serving as FAA Authorized Representatives -- paid by Boeing but representing the regulator -- experienced "undue pressure" (39% of surveyed ARs). FAA management repeatedly overruled its own technical experts at Boeing's behest. The result: "insufficient oversight by the FAA -- the pernicious result of regulatory capture."

**Source:** `boeing-737max-house-committee-report-2020.txt` (Executive Summary, lines 872-895, 934-940)
**Timescale:** Developed over 10-20 years of delegation
**ISIA scenario:** ISIA relies on national inspectors or industry self-reporting for compute monitoring. These inspectors face pressure from employers, not ISIA. Maps to `mole-discovery`, `saboteur-or-hero`.

### 12. Conflicting Mandates / Revenue-Regulation Fusion

MMS combined revenue collection from offshore drilling with safety regulation. "MMS had a conflicting and ultimately disastrous mandate: to both regulate offshore energy leases and collect the revenue they generated." Revenue maximization systematically overrode safety oversight.

**Source:** `deepwater-horizon-commission-ch3-regulatory-failure-2011.txt` (lines 84-102, 594-596)
**Timescale:** From founding; compounded over 28 years
**ISIA scenario:** ISIA depends on treaty member contributions for funding. Enforcing against major funders threatens the agency's budget. Maps to `budget-review`, `vote-of-no-confidence`.

### 13. Cultural Capture

Beyond explicit corruption, regulators absorb the worldview of the industry they oversee through social proximity, shared expertise, career incentives (revolving door), and "identity" -- regulators come to see themselves as part of the industry community. Kwak argues this is "more dangerous than outright corruption" because it operates without anyone recognizing it.

**Source:** `kwak-cultural-capture-2014.txt` (lines 275-338); `carpenter-moss-preventing-capture-introduction-2014.txt` (lines 20-40)
**Timescale:** 5-15 years of institutional drift
**ISIA scenario:** ISIA officials who spend careers alongside AI researchers begin to share their assumptions about capability risks, safety progress, and acceptable thresholds. Maps to `empire-builder`, `mission-drift`.

### 14. Production Pressure Overriding Safety

Boeing's "Go, Go, Go" culture prioritized schedule and cost over safety. Internal surveys documented fear of reporting safety issues (34% cited "fear of retribution"). Boeing concealed critical test data showing catastrophic failure modes.

**Source:** `boeing-737max-house-committee-report-2020.txt` (lines 799-826, 837-870)
**Timescale:** Builds over 5-10 years
**ISIA scenario:** Pressure to show results (safety breakthroughs, enforcement wins) leads ISIA to cut corners on verification or suppress inconvenient findings. Maps to `rogue-internal-experiment`.

---

## E. Cyber and Asymmetric Evasion

### 15. State-Sponsored Cyber Theft

North Korea stole $1.34 billion in cryptocurrency in 2024 alone (61% of global crypto theft), using IT worker infiltration with AI-generated deepfakes, cross-chain laundering, and thousands of false identities. The 2025 Bybit hack netted ~$1.5 billion. These operations fund weapons programs despite comprehensive sanctions.

**Source:** `cyfirma-dprk-sanctions-cyber-operations-2025.md` (Executive Summary, Financial Scale, Major Operations)
**Timescale:** Continuous, accelerating
**ISIA scenario:** Adversaries steal ISIA funds, compromise monitoring systems, or fund illicit compute purchases through cyber operations. Maps to `data-center-attack`, `weight-theft-state`.

### 16. Willful Ignorance as Compliance Strategy

Under current export law, exporters face criminal penalties only for *willful* violations. This creates incentives "to know as little as possible about who ultimately owns exported chips." NVIDIA and distributors have "limited visibility into their distribution networks and little incentive to improve them."

**Source:** `cnas-chip-smuggling.md`, "Collecting Detailed Data" section (lines 57-65)
**Timescale:** Structural from day one
**ISIA scenario:** Treaty members design their domestic monitoring to avoid detecting violations, maintaining plausible deniability. Maps to `surveillance-blind-spot`.

---

## F. Sanctions Fatigue and Escalation

### 17. Sanctions Volume Without Proportional Effect

In 2024, the US added 3,135 persons to the SDN list (25% increase) and 520 to the Entity List, spanning 55+ countries. Despite unprecedented volume, Russia continued receiving critical military inputs. The strategy shifted from preventing exports to "making sanctions evasion prohibitively expensive" -- an acknowledgment that total prevention failed.

**Source:** `cnas-sanctions-by-the-numbers-2024.md` (Executive Summary, lines 10-21); `carnegie-russia-sanctions-evasion-costs-2024.md` (Strategic Objective)
**Timescale:** Erosion over 2-3 years
**ISIA scenario:** ISIA bans proliferate but enforcement capacity doesn't scale. The system shifts from preventing violations to raising their cost. Maps to `success-trap`, `mission-drift`.

---

## Coverage Analysis

### Good coverage (3+ cards, multiple angles):
- **Smuggling networks** (M4, M5, M6): `smuggle-ring`, `cat-mouse-adapt`, `sanctions-evasion`, `chip-smuggling`, `black-market-signal`, `north-korea-pattern` -- well-covered chain
- **Treaty/coalition politics** (M8, M9, M10): `withdrawal-threat`, `review-conference`, `challenge-inspection-veto`, `us-china-suspicion`, `insincere-member`
- **Enforcement resource strain** (M3): `budget-turf-war`, `morale-crisis`, `int-crisis-low`

### Thin coverage (1-2 cards, needs depth):
- **Declared-vs-undeclared blindness** (M1): `surveillance-blind-spot` partially covers this; no card models the systematic assumption-of-compliance failure
- **Turnkey proliferation** (M4): `smuggle-ring` exists but doesn't capture the *turnkey* scale -- complete infrastructure packages
- **Cultural capture** (M13): `empire-builder`, `mission-drift` are adjacent but don't model the specific mechanism of regulators absorbing industry worldview
- **Delegated oversight capture** (M11): `mole-discovery` is explicit corruption; no card for the subtler FAA/Boeing pattern of conflicted representation
- **Willful ignorance** (M16): no card models the perverse incentive to avoid knowing about violations

### No coverage:
- **Conflicting mandate / revenue-regulation fusion** (M12): no card where ISIA's funding depends on the entities it regulates
- **Incremental disclosure** (M2): no card chain modeling a violator's salami-slice revelations
- **Production pressure overriding safety** (M14): `rogue-internal-experiment` is adjacent but doesn't model institutional pressure to suppress findings
- **Convergent illicit networks** (M7): no card modeling how smuggling/money laundering/sanctions evasion use shared infrastructure
- **Cyber theft funding evasion** (M15): `data-center-attack` covers attacks but not the funding-through-cybercrime mechanism

---

## Caveats

1. **Nuclear vs. compute analogy limits.** Nuclear materials are physical, scarce, and detectable. Compute is digital, commoditizing, and harder to monitor. The IAEA sources establish *institutional* patterns (delay, capture, political dysfunction) that transfer well, but *technical* detection challenges differ fundamentally. The domain model already captures this via the distributed compute and algorithmic progress dimensions.

2. **Capture literature disagrees on severity.** Stigler's original thesis ("regulation is acquired by the industry") is increasingly contested. Carpenter & Moss (conclusion, lines 37-75) argue that "the old Stiglerian notion of a fully captured regulator is most likely a rarity." Kwak's cultural capture model is more nuanced but less empirically tested. For the game, the spectrum from weak to strong capture is more useful than the binary.

3. **Chip smuggling estimates are uncertain.** CNAS's 140,000-chip median estimate is a "probabilistic extrapolation," not a summation of confirmed cases. The 90% CI spans 10,000 to several hundred thousand. The *existence* of large-scale smuggling is well-supported; the *scale* is genuinely uncertain.

4. **Goldschmidt's reform proposals are prescriptive, not descriptive.** His six lessons describe failures, but his proposed solutions (generic Security Council resolutions, automatic escalation) have never been tested. The game should model the *failures* as established, but treat the *solutions* as uncertain.

5. **DPRK cyber data is recent and from a private threat intelligence firm** (CYFIRMA). The financial figures are broadly consistent with other reporting (Chainalysis, FBI attributions) but precise numbers should be treated as approximate.

6. **Boeing/Deepwater Horizon are domestic regulatory failures**, not international treaty enforcement. The institutional dynamics (delegation, conflicting mandates, cultural capture) transfer to international bodies, but the political accountability mechanisms differ. An international agency faces *less* democratic accountability than the FAA or MMS, which could make capture either harder (less domestic lobbying) or easier (less public scrutiny).
