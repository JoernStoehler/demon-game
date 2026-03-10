# Card Concepts — Organized by Topic

Working document for reviewing and editing card ideas. Grouped by primary content tag (first tag on each card). 144 cards total across 38 source files.

**How to use this file:**
- Each card listed as: `idea description -- card-id (speaker)`
- Mark cards `DROPPED` to remove from the game, `TODO` for needed changes
- Duplicate/overlap notes are flagged inline
- Source files live in `src/data/cards/`; run `npm run cards` for interactive map

---

## Alignment Research

Core safety research — stalls, breakthroughs, scaling problems, dual-use tensions.

- three years with no meaningful alignment progress, fundamental problems remain open -- safety-stall (Chief Scientist)
- alignment paper also shows how to train more capable systems with less compute -- safety-dual-use (Chief Scientist)
- genetic cognitive enhancement to produce researchers who can solve alignment -- biotech-proposal (Chief Scientist)
- largest safety experiment needs airgap facility upgrade or risk leaking insights -- airgap-large-experiment (Chief Scientist)
- doubling budget didn't help, fundamental problems bottleneck all approaches -- stepping-on-toes (Chief Scientist)
- allocate scarce senior researchers between research, mentoring, and public comms -- senior-time-allocation (Chief Scientist)
- senior researcher pipeline produces 0.4 net new per year, need hundreds -- mentoring-pipeline-crisis (Chief Scientist)
- sub-ASI alignment breakthrough mistaken for full solution, pressure to relax treaty -- safety-looks-solved (Chief Scientist)
- annual budget split: enforcement vs safety research, zero-sum -- budget-turf-war (Deputy Director)
- expand safety department but can't monitor the new researchers -- internal-monitoring-expansion (Chief Scientist)
- junior researchers ran unauthorized experiment, produced genuine result -- rogue-internal-experiment (Enforcement Chief)
- win condition: formal proof of corrigibility, approve deployment of safe ASI -- pivotal-moment (Chief Scientist)
- politician publicly overpromises alignment timeline, creating sunset pressure -- government-overpromise (Political Advisor)

## Algorithmic Progress

The lethal threshold keeps shrinking -- uncontrollable progress from papers, small experiments, and AI self-improvement.

- university papers reduce training requirements 40%, lethal threshold drops -- algorithmic-shortcut (Chief Scientist)
- sub-threshold trading AI causes $3.4T flash crash via emergent behavior -- algorithmic-trading-incident (Chief Scientist)
- lethal threshold drops below university lab scale, monitoring architecture expires -- threshold-cliff (Chief Scientist)
- published paper halves compute requirements, shrinking lethal threshold -- capability-jump (Deputy Director)
- algorithmic progress makes older unmonitored GPUs dangerous -- old-chips-new-tricks (Chief Scientist)
- consumer gaming hardware approaching frontier training capability -- consumer-hw-threshold (Chief Scientist)
- agency's analysis AI self-improved by processing cutting-edge research -- ai-self-improvement (Chief Scientist)

## Chip Production

Manufacturing chokepoints and their erosion.

- ASML joint venture would move chip production outside treaty monitoring -- asml-joint-venture (Intelligence Analyst)
- non-treaty nation builds domestic ASIC foundry outside ASML chokepoint -- custom-asic-foundry (Intelligence Analyst)
- inference chips can now run training workloads, monitoring architecture blind to them -- inference-chip-loophole (Chief Scientist)

## Chip Supply Chain

Physical chip tracking, smuggling, disposal, and diversion.

- chip disposal officer bribed, diverting chips from destruction -- disposal-bribery (Deputy Director)
- chip disposal audit finds 9,200 chips unaccounted for from bankrupt contractor -- decommission-graveyard (Customs Liaison)
- chip smuggling network found, seize now or map full organization -- smuggle-ring (Customs Liaison)
- smuggling networks adapt after raid, splitting into smaller resilient cells -- cat-mouse-adapt (Enforcement Chief)
- black market chip prices tripled, demand outpacing interdiction -- black-market-signal (Customs Liaison)
- non-treaty nation acquiring chips via same networks as nuclear program -- north-korea-pattern (Intelligence Analyst)
- professional sanctions evasion network moves 6,000 chips via shell companies -- sanctions-evasion (Enforcement Chief)
- detect illegal chip sale via border agents, hidden in networking equipment -- chip-smuggling (Deputy Director)
- chip consolidation deadline approaching, 14% of facilities behind schedule -- chip-audit-deadline (Enforcement Chief)
- 250 chips unaccounted for between TSMC packaging and declared facilities -- chip-diversion (Customs Liaison)
- Taiwan Strait escalation threatens TSMC, 73% of advanced chip production -- taiwan-crisis (NATO Liaison)

## Civil Liberties

Surveillance vs. rights -- the tension between enforcement and democratic legitimacy.

- street protests escalate to legislation stripping surveillance authority -- protest-to-legislator (Political Advisor)
- ACLU challenges chip-tracking firmware as Fourth Amendment violation -- supreme-court-challenge (Legal Counsel)
- local police refuse to raid homes for GPUs, call ISIA 'GPU Gestapo' -- cops-refuse-search (Enforcement Chief)
- zealous officer conducted illegal surveillance out of mission conviction -- true-believer (Legal Counsel)
- crisis: intelligence too powerful, nations demand dismantling programs -- int-crisis-high (Deputy Director)
- senior inspectors refuse raid order, believe ISIA became surveillance state -- internal-dissent (Deputy Director)

## Compute Monitoring

Detection systems, surveillance AI, and monitoring infrastructure.

- detect illegal data center via heat signature -- thermal-anomaly (Intelligence Analyst)
- detect illegal data center via rumors when intel is low -- thermal-anomaly-degraded (Junior Analyst)
- detect illegal training via power grid anomaly disguised as crypto mining -- power-grid-anomaly (Intelligence Analyst)
- detect illegal compute via heat signature near Shenzhen -- rogue-lab-normal (Deputy Director) **[DUPLICATE? very similar to thermal-anomaly]**
- monitoring AI flags suspicious traffic that might be a film studio -- network-bandwidth-trap (Enforcement Chief)
- surveillance AI flags 47 anomalies overnight, likely false positives hiding real threats -- false-positive-cascade (Intelligence Analyst)
- proposal to put tracking firmware on all consumer GPUs worldwide -- surveillance-expand (Enforcement Chief)
- monitoring AI misclassified rogue lab as commercial cloud for 18 months -- surveillance-blind-spot (Chief Scientist)
- agency that bans training runs needs to perform one for monitoring AI -- agency-trains-ai (Chief Scientist)
- ISIA coordination AI refuses enforcement order due to anti-bias guardrails -- ai-refuses-order (Enforcement Chief)
- three intelligence sources contradict each other about new facility -- contradictory-reports (Intelligence Analyst)

> **Duplicate note:** `thermal-anomaly` and `rogue-lab-normal` are nearly identical concepts (detect illegal data center via heat signature near Shenzhen). Same applies to `thermal-anomaly-degraded` and `rogue-lab-degraded`. The `incidents.ts` versions are stubs that overlap with the fuller `enforcement-detection.ts` versions.

## Corporate Lobbying

Industry influence, regulatory capture, and corporate hypocrisy.

- tech industry lobbyists offer cooperation for concessions -- lobby-meeting (Deputy Director)
- AI companies publicly support pause while secretly funding opposition -- corporate-lobbying (Intelligence Analyst)
- mega-corp acquiring competitors to control 38% of permitted AI compute -- acquisition-consolidation (Legal Counsel)
- corporate ally exposed running shadow program while chairing responsible AI group -- hypocrisy-exposed (Investigative Journalist)
- NVIDIA lobbies parliaments to raise compute threshold 10x -- nvidia-threshold-lobby (Political Advisor)

## Distributed Compute

Training runs split across many locations to evade per-facility limits.

- detect training hidden inside monitored datacenter via encrypted side channel -- datacenter-hidden (Intelligence Analyst)
- AWS distributes training across 14 zones to stay under per-facility threshold -- cloud-provider-loophole (Legal Counsel)
- decentralized lab network trains collectively above threshold -- underground-network (Deputy Director)

## Dual-Use Research

Safety research that also advances capabilities -- the cure and the disease are the same substance.

- safety training run near threshold would also reveal capability advances -- approval-dilemma (Chief Scientist)
- follow-up: approved research produced banned capability results -- training-run-consequence (Chief Scientist)
- ISIA's own AI research assistant discovered dual-use insight without instruction -- ai-assistant-incident (Chief Scientist)
- safety paper on detecting deceptive alignment also teaches creating it -- dual-use-publication (Chief Scientist)
- 1,200 researchers sign manifesto against criminalization of knowledge -- academic-freedom-revolt (Chief Scientist)
- top universities demand decentralized safety research without pre-publication review -- university-consortium-demand (Chief Scientist)

## Economic Pressure

The real economic costs of the pause -- opponents aren't wrong about short-term economics.

- sub-threshold AI now 18% of GDP, tightening restrictions threatens economy -- ai-economy-report (Political Advisor)
- sub-threshold AI accounts for 31% of GDP, threshold reduction means recession -- ai-gdp-dependency (Finance Director)
- pause creates two-speed economy: automation booms, innovation stagnates -- automation-two-speeds (Political Advisor)
- non-treaty nation booms with unrestricted AI, treaty nations lose competitiveness -- non-treaty-advantage (Political Advisor)
- G7 finance ministers request 10x compute threshold increase for economic growth -- econ-boom-request (Finance Director)
- labor unions fracture: manufacturing wants pause lifted, logistics wants it tightened -- labor-union-split (Political Advisor)
- legal sub-threshold automation eliminates 12M jobs, both sides blame ISIA -- unemployment-crisis (Political Advisor)
- poster-child compliant company relocates to non-treaty nation over costs -- compliant-defection (Finance Director)
- pharma needs above-threshold compute for cancer drug, 40,000 lives at stake -- pharma-breakthrough (Chief Scientist)
- WHO requests above-threshold training for drug-discovery AI, 2M lives/year -- medical-ai-request (Diplomatic Attache)
- pharma consortium needs 3x threshold for Alzheimer's/Parkinson's drugs, 8M lives/year -- pharma-ai-breakthrough (Chief Scientist)
- billionaire ex-CEO offers huge endowment with hidden strings attached -- funding-deal-techbro (Chief Scientist)
- top alignment researchers leaving treaty nations for unrestricted work abroad -- brain-drain (Chief Scientist)

> **Duplicate note:** `pharma-breakthrough` (corporate-response.ts) and `pharma-ai-breakthrough` (innovation-suppression.ts) are the same concept at different scales (40K vs 8M lives). `medical-ai-request` is also closely related (WHO drug-discovery, 2M lives). Consider whether all three are needed.

## Enforcement Operations

Raids, inspections, and the political costs of enforcement actions.

- treaty nation blocks inspection by invoking national security -- jurisdiction-clash (Enforcement Chief)
- detect facility via satellite but Council approval too slow -- heat-signature-foreign (Intelligence Analyst)
- Council vote blocks challenge inspection due to trade deal politics -- challenge-inspection-veto (Intelligence Analyst)
- anomaly detection flags cooperative partner, inspecting erodes trust -- compliant-company-raid (Enforcement Chief)
- follow-up: raid found near-ASI run, classify or declassify the close call -- near-miss (Chief Scientist)
- military strike on confirmed compute cluster in non-treaty state -- airstrike-debate (NATO Liaison)
- ideological billionaire building ASI on private island, daring ISIA to stop him -- emperor-billionaire (Enforcement Chief)
- tech CEO built compute facility on private island claiming sovereignty -- billionaire-island (Enforcement Chief)

> **Duplicate note:** `emperor-billionaire` and `billionaire-island` are similar concepts (billionaire builds facility on private island). `emperor-billionaire` is the fuller version with a chain follow-up.

## Institutional Integrity

Internal rot, empire-building, memory loss, and the fragility of organizations.

- quarterly budget transparency vs operational secrecy -- budget-review (Deputy Director)
- filler event with internal ops, morale vs intelligence -- coffee-chat (Deputy Director)
- government demands replacement of competent officials with political appointees -- leadership-purge (Deputy Director)
- enforcement division quietly grew into agency-within-agency via empire building -- empire-builder (Deputy Director)
- bureaucratic drift: compliance paperwork crowding out actual enforcement -- mission-drift (Ethics Watchdog)
- third-generation staff lost institutional knowledge via generational turnover -- institutional-memory-loss (Deputy Director)
- senior official passing enforcement schedules to former employer -- mole-discovery (Deputy Director)
- former employee poisoned monitoring AI training data before leaving for industry -- ai-training-data-poisoned (Enforcement Chief)
- council members table no-confidence motion over refused corporate exemptions -- vote-of-no-confidence (Deputy Director)
- officer tipped off foreign government about inspection to save legitimate research -- saboteur-or-hero (Deputy Director)
- staff resignations triple due to invisible threat and low pay vs industry -- morale-crisis (Head of Human Resources)
- crisis: political power too high, accused of empire-building -- pol-crisis-high (Deputy Director)

## Intelligence Agencies

National intelligence services -- sometimes allies, sometimes adversaries.

- NSA delayed reporting a foreign attack on monitored data center -- data-center-attack (Intelligence Analyst)
- follow-up: foreign actor completed training run during monitoring gap -- algorithmic-progress-leak (Intelligence Analyst)
- frontier model weights stolen by state intelligence, can't un-copy data -- weight-theft (Intelligence Analyst)
- China's MSS exfiltrates most capable model weights from compliant lab -- weight-theft-state (Intelligence Analyst)
- anonymous defector offers intel on secret state ASI program for asylum and cash -- defector-offer (Intelligence Analyst)
- detect illegal compute via rumors when intel is low -- rogue-lab-degraded (Deputy Director) **[DUPLICATE? very similar to thermal-anomaly-degraded]**
- US and China each demand inspection of the other, using ISIA as weapon -- us-china-suspicion (Diplomatic Attache)

> **Duplicate note:** `weight-theft` and `weight-theft-state` are nearly identical concepts (state intelligence exfiltrates frontier model weights). `weight-theft-state` is the fuller version with a chain follow-up (`china-weights-deployed`).

## International Diplomacy

Treaty maintenance, coalition fragility, and great-power dynamics.

- India files treaty withdrawal notice citing asymmetric enforcement -- withdrawal-threat (Diplomatic Attache)
- five-year treaty review conference, seven nations want weakening -- review-conference (Diplomatic Attache)
- small nation hosting critical infrastructure demands unrelated concessions -- small-nation-leverage (Diplomatic Attache)
- non-aligned nation threatens AI development unless given semiconductor tech -- hostage-gambit (Diplomatic Attache)
- deputy director privately undermining China negotiations from conviction -- china-hawk (Deputy Director)
- conventional war between treaty nations, both suspend inspections -- war-and-pause (Diplomatic Attache)
- major signatory threatens withdrawal over enforcement posture -- treaty-threat (Deputy Director)
- follow-up: airstrike succeeded but treaty nations reviewing commitments -- post-strike-fallout (Diplomatic Attache)
- follow-up: China deploys stolen weights for inference, technically not a violation -- china-weights-deployed (Intelligence Analyst)

> **Duplicate note:** `treaty-threat` (political.ts stub) and `withdrawal-threat` (international-coalition.ts) cover similar ground (major nation threatens to leave treaty). `withdrawal-threat` is the fuller version.

## Media Narrative

Public perception, information asymmetry, and the impossibility of proving prevented catastrophes.

- journalist exposes spending while successes are classified -- media-waste-story (Investigative Journalist)
- eight years without incident used to justify 40% budget cut -- success-trap (Political Advisor)
- bestselling book argues ASI threat was manufactured to justify ISIA budget -- success-narrative (Investigative Journalist)
- bestselling book argues ASI threat was always a hoax -- ai-winter-narrative (Communications Director)
- 38% of population indifferent to AI, awareness campaign risks creating skeptics -- low-salience-campaign (Communications Director)
- new generation has no memory of AI crisis, 'Free AI' is their slogan -- generational-shift (Political Advisor)
- celebrity endorses pause with conspiracy theories attached -- celebrity-endorsement (Communications Director)
- follow-up: billionaire's manifesto goes viral, accelerationist movement grows -- emperor-manifesto (Communications Director)
- mouse brain upload milestone activates public fear about uploading, not ASI -- upload-milestone-panic (Chief Scientist)

> **Duplicate note:** `ai-winter-narrative` and `success-narrative` are similar (book argues threat was exaggerated/manufactured). Different speakers and framing, but same underlying dynamic.

## Military AI

Military involvement in AI -- funding, enforcement escalation, and the military as both ally and threat.

- US military caught training above threshold, dares ISIA to enforce -- inconvenient-true-positive (Intelligence Analyst)
- Pentagon offers massive funding for safety research with military strings -- pentagon-funding (Finance Director)

## Political Support

Elections, democratic accountability, and the fragility of political arrangements.

- elections in treaty nations with 'AI freedom' candidates running -- election-year (Political Advisor)
- US election with leading 'AI freedom' candidate threatening treaty withdrawal -- election-reversal (Political Advisor)
- crisis: political support cratering, need dramatic gesture -- pol-crisis-low (Deputy Director)
- megachurch pastor rallies millions for permanent ban, not safe AI -- megachurch-sermon (Communications Director)
- US Senate hearing on ISIA effectiveness, American funding at stake -- senate-hearing (Deputy Director)
- sub-threshold AI causes mass casualty, public blames ISIA regardless -- autonomous-vehicle-massacre (Communications Director)
- deepfake video of ISIA director undermines credibility -- deepfake-director (Press Secretary)
- AI deepfakes flood election in treaty nation, legal sub-threshold AI -- deepfake-election (Communications Director)

## Rogue Actors

Non-state threats -- labs, individuals, and insincere treaty members.

- treaty member running secret program since day one, joined insincerely -- insincere-member (Intelligence Analyst)
- grey market brokers combine sub-threshold models for above-threshold capability -- secret-capability-market (Intelligence Analyst)
- follow-up: nations start 'defensive ASI programs' claiming alignment is solved -- race-begins (Diplomatic Attache)
- whistleblower reports secret training at Nexus Computing, raid or verify -- rogue-lab-whistleblower (Enforcement Chief)
- lab researcher claims prohibited capability evaluations, wants protection -- whistleblower (Deputy Director)

## Sub-ASI Incidents

Harms from AI below the threshold -- the technology the pause permits creating new problems.

- drone swarm incident creates momentum, exploit or correct the narrative -- protest-that-helps (Political Advisor)

## Treaty Compliance

Treaty interpretation, loopholes, and structural gaps.

- follow-up: lab sues ISIA after whistleblower-triggered investigation -- whistleblower-fallout (Deputy Director)
- follow-up: press learns you declined to protect whistleblower -- coverup-leak (Deputy Director)
- safety breakthrough requires running banned models to validate -- safety-breakthrough (Deputy Director)

## Whistleblowers

Insider tips, protection dilemmas, and the leaker-vs-security tension.

- analyst leaks that surveillance AI exceeded authorized scope by 30% -- whistleblower-dilemma (Deputy Director)
- crisis: intelligence network gone dark, emergency recruitment -- int-crisis-low (Deputy Director)

---

## Summary: Card Count by Topic

| Topic | Count |
|---|---|
| Alignment Research | 13 |
| Algorithmic Progress | 7 |
| Chip Production | 3 |
| Chip Supply Chain | 11 |
| Civil Liberties | 6 |
| Compute Monitoring | 11 |
| Corporate Lobbying | 5 |
| Distributed Compute | 3 |
| Dual-Use Research | 6 |
| Economic Pressure | 13 |
| Enforcement Operations | 8 |
| Institutional Integrity | 12 |
| Intelligence Agencies | 7 |
| International Diplomacy | 9 |
| Media Narrative | 9 |
| Military AI | 2 |
| Political Support | 8 |
| Rogue Actors | 5 |
| Sub-ASI Incidents | 1 |
| Treaty Compliance | 3 |
| Whistleblowers | 2 |
| **Total** | **144** |

## Flagged Duplicates

1. **thermal-anomaly / rogue-lab-normal** -- Both detect illegal data center via heat signature near Shenzhen. `thermal-anomaly` (enforcement-detection.ts) is fuller; `rogue-lab-normal` (incidents.ts) is a stub.
2. **thermal-anomaly-degraded / rogue-lab-degraded** -- Same: detect compute via rumors when intel is low. `thermal-anomaly-degraded` is fuller; `rogue-lab-degraded` is a stub.
3. **weight-theft / weight-theft-state** -- Both: state intelligence exfiltrates frontier model weights. `weight-theft-state` is fuller and has a chain follow-up (`china-weights-deployed`).
4. **emperor-billionaire / billionaire-island** -- Both: billionaire builds compute on private island. `emperor-billionaire` is fuller with chain follow-up (`emperor-manifesto`).
5. **treaty-threat / withdrawal-threat** -- Both: major nation threatens treaty withdrawal. `withdrawal-threat` is fuller.
6. **ai-winter-narrative / success-narrative** -- Both: book argues ASI threat was exaggerated. Different angles (professor vs journalist) but same dynamic.
7. **pharma-breakthrough / pharma-ai-breakthrough / medical-ai-request** -- Three cards on "above-threshold compute needed for medical breakthrough." Different scales (40K / 8M / 2M lives) but same dilemma.
