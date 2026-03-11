# Card Concepts — Organized by Topic

Working document for reviewing and editing card ideas. Grouped by primary content tag (first tag on each card). 144 cards total across 38 source files.

**How to use this file:**
- Each idea listed as: `idea description -- card-id, card-id-2, ...`
- Multiple IDs = sequence or variations of same concept (all need polishing)
- Mark ideas `DROPPED` to remove from the game, `TODO` for needed changes
- Duplicate/overlap notes are flagged inline
- Source files live in `src/data/cards/`; run `npm run cards` for interactive map

---

## Alignment Research

Core safety research — stalls, breakthroughs, scaling problems, dual-use tensions.

- three years with no meaningful alignment progress, fundamental problems remain open -- safety-stall
- alignment paper also shows how to train more capable systems with less compute -- safety-dual-use
- genetic cognitive enhancement to produce researchers who can solve alignment -- biotech-proposal
- largest safety experiment needs airgap facility upgrade or risk leaking insights -- airgap-large-experiment
- doubling budget didn't help, fundamental problems bottleneck all approaches -- stepping-on-toes
- allocate scarce senior researchers between research, mentoring, and public comms -- senior-time-allocation
- senior researcher pipeline produces 0.4 net new per year, need hundreds -- mentoring-pipeline-crisis
- sub-ASI alignment breakthrough mistaken for full solution, pressure to relax treaty -- safety-looks-solved
- annual budget split: enforcement vs safety research, zero-sum -- budget-turf-war
- expand safety department but can't monitor the new researchers -- internal-monitoring-expansion
- junior researchers ran unauthorized experiment, produced genuine result -- rogue-internal-experiment
- win condition: formal proof of corrigibility, approve deployment of safe ASI -- pivotal-moment
- politician publicly overpromises alignment timeline, creating sunset pressure -- government-overpromise

## Algorithmic Progress

The lethal threshold keeps shrinking -- uncontrollable progress from papers, small experiments, and AI self-improvement.

- university papers reduce training requirements 40%, lethal threshold drops -- algorithmic-shortcut
- sub-threshold trading AI causes $3.4T flash crash via emergent behavior -- algorithmic-trading-incident
- lethal threshold drops below university lab scale, monitoring architecture expires -- threshold-cliff
- published paper halves compute requirements, shrinking lethal threshold -- capability-jump
- algorithmic progress makes older unmonitored GPUs dangerous -- old-chips-new-tricks
- consumer gaming hardware approaching frontier training capability -- consumer-hw-threshold
- agency's analysis AI self-improved by processing cutting-edge research -- ai-self-improvement

## Chip Production

Manufacturing chokepoints and their erosion. (Expert model moved to domain-model.md.)

- ASML joint venture would move chip production outside treaty monitoring -- asml-joint-venture
- non-treaty nation builds domestic ASIC foundry outside ASML chokepoint -- custom-asic-foundry
- inference chips can now run training workloads, monitoring architecture blind to them -- inference-chip-loophole



## Chip Supply Chain

Physical chip tracking, smuggling, disposal, and diversion.

- chip disposal officer bribed, diverting chips from destruction -- disposal-bribery
- chip disposal audit finds 9,200 chips unaccounted for from bankrupt contractor -- decommission-graveyard
- chip smuggling network found, seize now or map full organization -- smuggle-ring
- smuggling networks adapt after raid, splitting into smaller resilient cells -- cat-mouse-adapt
- black market chip prices tripled, demand outpacing interdiction -- black-market-signal
- non-treaty nation acquiring chips via same networks as nuclear program -- north-korea-pattern
- professional sanctions evasion network moves 6,000 chips via shell companies -- sanctions-evasion
- detect illegal chip sale via border agents, hidden in networking equipment -- chip-smuggling
- chip consolidation deadline approaching, 14% of facilities behind schedule -- chip-audit-deadline
- 250 chips unaccounted for between TSMC packaging and declared facilities -- chip-diversion
- Taiwan Strait escalation threatens TSMC, 73% of advanced chip production -- taiwan-crisis

## Civil Liberties

Surveillance vs. rights -- the tension between enforcement and democratic legitimacy.

- street protests escalate to legislation stripping surveillance authority -- protest-to-legislator
- ACLU challenges chip-tracking firmware as Fourth Amendment violation -- supreme-court-challenge
- local police refuse to raid homes for GPUs, call ISIA 'GPU Gestapo' -- cops-refuse-search
- zealous officer conducted illegal surveillance out of mission conviction -- true-believer
- crisis: intelligence too powerful, nations demand dismantling programs -- int-crisis-high
- senior inspectors refuse raid order, believe ISIA became surveillance state -- internal-dissent

## Compute Monitoring

Detection systems, surveillance AI, and monitoring infrastructure.

- detect illegal data center via heat signature -- thermal-anomaly, rogue-lab-normal **[DUPLICATE: rogue-lab-normal is a stub of the same concept]**
- detect illegal data center via rumors when intel is low -- thermal-anomaly-degraded, rogue-lab-degraded **[DUPLICATE: rogue-lab-degraded is a stub of the same concept]**
- detect illegal training via power grid anomaly disguised as crypto mining -- power-grid-anomaly
- monitoring AI flags suspicious traffic that might be a film studio -- network-bandwidth-trap
- surveillance AI flags 47 anomalies overnight, likely false positives hiding real threats -- false-positive-cascade
- proposal to put tracking firmware on all consumer GPUs worldwide -- surveillance-expand
- monitoring AI misclassified rogue lab as commercial cloud for 18 months -- surveillance-blind-spot
- agency that bans training runs needs to perform one for monitoring AI -- agency-trains-ai
- ISIA coordination AI refuses enforcement order due to anti-bias guardrails -- ai-refuses-order
- three intelligence sources contradict each other about new facility -- contradictory-reports

## Corporate Lobbying

Industry influence, regulatory capture, and corporate hypocrisy.

- tech industry lobbyists offer cooperation for concessions -- lobby-meeting
- AI companies publicly support pause while secretly funding opposition -- corporate-lobbying
- mega-corp acquiring competitors to control 38% of permitted AI compute -- acquisition-consolidation
- corporate ally exposed running shadow program while chairing responsible AI group -- hypocrisy-exposed
- NVIDIA lobbies parliaments to raise compute threshold 10x -- nvidia-threshold-lobby

## Distributed Compute

Training runs split across many locations to evade per-facility limits.

- detect training hidden inside monitored datacenter via encrypted side channel -- datacenter-hidden
- AWS distributes training across 14 zones to stay under per-facility threshold -- cloud-provider-loophole
- decentralized lab network trains collectively above threshold -- underground-network

## Dual-Use Research

Safety research that also advances capabilities -- the cure and the disease are the same substance.

- safety training run near threshold would also reveal capability advances, follow-up: it did -- approval-dilemma, training-run-consequence
- ISIA's own AI research assistant discovered dual-use insight without instruction -- ai-assistant-incident
- safety paper on detecting deceptive alignment also teaches creating it -- dual-use-publication
- 1,200 researchers sign manifesto against criminalization of knowledge -- academic-freedom-revolt
- top universities demand decentralized safety research without pre-publication review -- university-consortium-demand

## Economic Pressure

The real economic costs of the pause -- opponents aren't wrong about short-term economics.

- sub-threshold AI now 18% of GDP, tightening restrictions threatens economy -- ai-economy-report
- sub-threshold AI accounts for 31% of GDP, threshold reduction means recession -- ai-gdp-dependency
- pause creates two-speed economy: automation booms, innovation stagnates -- automation-two-speeds
- non-treaty nation booms with unrestricted AI, treaty nations lose competitiveness -- non-treaty-advantage
- G7 finance ministers request 10x compute threshold increase for economic growth -- econ-boom-request
- labor unions fracture: manufacturing wants pause lifted, logistics wants it tightened -- labor-union-split
- legal sub-threshold automation eliminates 12M jobs, both sides blame ISIA -- unemployment-crisis
- poster-child compliant company relocates to non-treaty nation over costs -- compliant-defection
- above-threshold compute needed for medical breakthrough (pharma/WHO) -- pharma-breakthrough, medical-ai-request, pharma-ai-breakthrough **[3 cards, same dilemma at different scales: 40K / 2M / 8M lives]**
- billionaire ex-CEO offers huge endowment with hidden strings attached -- funding-deal-techbro
- top alignment researchers leaving treaty nations for unrestricted work abroad -- brain-drain

## Enforcement Operations

Raids, inspections, and the political costs of enforcement actions.

- treaty nation blocks inspection by invoking national security -- jurisdiction-clash
- detect facility via satellite but Council approval too slow -- heat-signature-foreign
- Council vote blocks challenge inspection due to trade deal politics -- challenge-inspection-veto
- anomaly detection flags cooperative partner, inspecting erodes trust -- compliant-company-raid
- raid found near-ASI run, classify or declassify the close call -- near-miss
- military strike on confirmed compute cluster in non-treaty state -- airstrike-debate
- ideological billionaire building ASI on private island, daring ISIA to stop him -- emperor-billionaire, billionaire-island **[DUPLICATE: billionaire-island is a thinner version of same concept]**

## Institutional Integrity

Internal rot, empire-building, memory loss, and the fragility of organizations.

- quarterly budget transparency vs operational secrecy -- budget-review
- filler event with internal ops, morale vs intelligence -- coffee-chat
- government demands replacement of competent officials with political appointees -- leadership-purge
- enforcement division quietly grew into agency-within-agency via empire building -- empire-builder
- bureaucratic drift: compliance paperwork crowding out actual enforcement -- mission-drift
- third-generation staff lost institutional knowledge via generational turnover -- institutional-memory-loss
- senior official passing enforcement schedules to former employer -- mole-discovery
- former employee poisoned monitoring AI training data before leaving for industry -- ai-training-data-poisoned
- council members table no-confidence motion over refused corporate exemptions -- vote-of-no-confidence
- officer tipped off foreign government about inspection to save legitimate research -- saboteur-or-hero
- staff resignations triple due to invisible threat and low pay vs industry -- morale-crisis
- crisis: political power too high, accused of empire-building -- pol-crisis-high

## Intelligence Agencies

National intelligence services -- sometimes allies, sometimes adversaries.

- NSA delayed reporting a foreign attack on monitored data center, follow-up: training completed during gap -- data-center-attack, algorithmic-progress-leak
- frontier model weights stolen by state intelligence, can't un-copy data -- weight-theft, weight-theft-state **[DUPLICATE: same concept, weight-theft-state is fuller with chain follow-up]**
- anonymous defector offers intel on secret state ASI program for asylum and cash -- defector-offer
- US and China each demand inspection of the other, using ISIA as weapon -- us-china-suspicion

## International Diplomacy

Treaty maintenance, coalition fragility, and great-power dynamics.

- major nation threatens treaty withdrawal over enforcement posture -- withdrawal-threat, treaty-threat **[DUPLICATE: treaty-threat is a stub of same concept]**
- five-year treaty review conference, seven nations want weakening -- review-conference
- small nation hosting critical infrastructure demands unrelated concessions -- small-nation-leverage
- non-aligned nation threatens AI development unless given semiconductor tech -- hostage-gambit
- deputy director privately undermining China negotiations from conviction -- china-hawk
- conventional war between treaty nations, both suspend inspections -- war-and-pause
- follow-up: airstrike succeeded but treaty nations reviewing commitments -- post-strike-fallout
- follow-up: China deploys stolen weights for inference, technically not a violation -- china-weights-deployed

## Media Narrative

Public perception, information asymmetry, and the impossibility of proving prevented catastrophes.

- journalist exposes spending while successes are classified -- media-waste-story
- eight years without incident used to justify 40% budget cut -- success-trap
- book argues ASI threat was exaggerated/manufactured to justify budget -- success-narrative, ai-winter-narrative **[same dynamic, different framing]**
- 38% of population indifferent to AI, awareness campaign risks creating skeptics -- low-salience-campaign
- new generation has no memory of AI crisis, 'Free AI' is their slogan -- generational-shift
- celebrity endorses pause with conspiracy theories attached -- celebrity-endorsement
- follow-up: billionaire's manifesto goes viral, accelerationist movement grows -- emperor-manifesto
- mouse brain upload milestone activates public fear about uploading, not ASI -- upload-milestone-panic

## Military AI

Military involvement in AI -- funding, enforcement escalation, and the military as both ally and threat.

- US military caught training above threshold, dares ISIA to enforce -- inconvenient-true-positive
- Pentagon offers massive funding for safety research with military strings -- pentagon-funding

## Political Support

Elections, democratic accountability, and the fragility of political arrangements.

- elections in treaty nations with 'AI freedom' candidates running -- election-year
- US election with leading 'AI freedom' candidate threatening treaty withdrawal -- election-reversal
- crisis: political support cratering, need dramatic gesture -- pol-crisis-low
- megachurch pastor rallies millions for permanent ban, not safe AI -- megachurch-sermon
- US Senate hearing on ISIA effectiveness, American funding at stake -- senate-hearing
- sub-threshold AI causes mass casualty, public blames ISIA regardless -- autonomous-vehicle-massacre
- deepfake video of ISIA director undermines credibility -- deepfake-director
- AI deepfakes flood election in treaty nation, legal sub-threshold AI -- deepfake-election

## Rogue Actors

Non-state threats -- labs, individuals, and insincere treaty members.

- treaty member running secret program since day one, joined insincerely -- insincere-member
- grey market brokers combine sub-threshold models for above-threshold capability -- secret-capability-market
- follow-up: nations start 'defensive ASI programs' claiming alignment is solved -- race-begins
- whistleblower reports secret training at Nexus Computing, raid or verify -- rogue-lab-whistleblower
- lab researcher claims prohibited capability evaluations, wants protection -- whistleblower

## Sub-ASI Incidents

Harms from AI below the threshold -- the technology the pause permits creating new problems.

- drone swarm incident creates momentum, exploit or correct the narrative -- protest-that-helps

## Treaty Compliance

Treaty interpretation, loopholes, and structural gaps.

- follow-up: lab sues ISIA after whistleblower-triggered investigation -- whistleblower-fallout
- follow-up: press learns you declined to protect whistleblower -- coverup-leak
- safety breakthrough requires running banned models to validate -- safety-breakthrough

## Whistleblowers

Insider tips, protection dilemmas, and the leaker-vs-security tension.

- analyst leaks that surveillance AI exceeded authorized scope by 30% -- whistleblower-dilemma
- crisis: intelligence network gone dark, emergency recruitment -- int-crisis-low

---

## Summary: Card Count by Topic

| Topic | Count | Ideas |
|---|---|---|
| Alignment Research | 13 | 13 |
| Algorithmic Progress | 7 | 7 |
| Chip Production | 3 | 3 |
| Chip Supply Chain | 11 | 11 |
| Civil Liberties | 6 | 6 |
| Compute Monitoring | 11 | 9 (2 duplicate stubs) |
| Corporate Lobbying | 5 | 5 |
| Distributed Compute | 3 | 3 |
| Dual-Use Research | 6 | 5 (1 sequence) |
| Economic Pressure | 13 | 11 (1 triple, 1 sequence) |
| Enforcement Operations | 8 | 7 (1 duplicate) |
| Institutional Integrity | 12 | 12 |
| Intelligence Agencies | 7 | 5 (1 sequence, 1 duplicate) |
| International Diplomacy | 9 | 8 (1 duplicate) |
| Media Narrative | 9 | 8 (1 duplicate) |
| Military AI | 2 | 2 |
| Political Support | 8 | 8 |
| Rogue Actors | 5 | 5 |
| Sub-ASI Incidents | 1 | 1 |
| Treaty Compliance | 3 | 3 |
| Whistleblowers | 2 | 2 |
| **Total** | **144** | **~124 distinct ideas** |
