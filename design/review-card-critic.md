# Card Feasibility Review: Chip Movement Events

Reviewed every event idea in `design/event-ideas.md` against the existing card pool (`enforcement-supply-chain.ts`, `enforcement-monitoring.ts`, `enforcement-detection.ts`) and the card format in `examples.ts`/`types.ts`.

---

## Group 1: Compute chips become temporarily unmonitored

**1. Professional thieves break into ISIA storage facility**
- Card potential: **HIGH**
- Natural speaker: Enforcement Chief or Security Officer
- Touches: int (security breach), pol (embarrassment)
- Two hard choices: pursue thieves immediately (burn resources) vs. lock down and audit (slow, chips gone)
- The honeypot follow-up variant is excellent — history chain where earlier "set a trap" choice pays off. 2-3 card chain.
- The "fewer thieves attempt if caught probability is known" is a pool weight adjustment, not card text. Good instinct.

**2. Chip factory workers mislabeled and sold chips**
- Card potential: **MEDIUM-HIGH**
- REDUNDANCY WARNING: Very close to existing `chip-diversion` card (250 chips unaccounted at TSMC). The distinction is thin from the player's perspective.
- The "broker network recruitment" variant saves it — organized infiltration IS distinct from petty theft.
- **Recommendation:** Only worth it if the organized infiltration variant is the main version. Otherwise duplicate.

**3. Chips go missing during shipping**
- Card potential: **MEDIUM**
- REDUNDANCY WARNING: Overlaps with `chip-diversion`. "Chips disappear between A and B" is the same player experience.
- The "shipping company handles 40% of logistics" variant is the real card — cut off your own logistics vs. trust a compromised partner. THAT is distinct.
- **Recommendation:** Skip generic version. "Compromised logistics partner" variant is worth a card.

**4. Decommissioned data center — contractor skimmed chips**
- Card potential: **LOW — ALREADY EXISTS**
- Existing `decommission-graveyard` card in `enforcement-monitoring.ts` covers this almost exactly (9,200 chips from bankrupt disposal contractor).
- **Recommendation:** Cut.

**5. Facility transfer — chips disappear in transit**
- Card potential: **LOW**
- Writer's own note says "recurring pattern / routine hazard." But that's a weaker version of #3 and existing `chip-diversion`.
- **Recommendation:** Cut. Redundant.

**6. Chips with disabled firmware at border crossing**
- Card potential: **HIGH**
- Natural speaker: Customs Liaison
- Great specific detail (hidden in consumer electronics, firmware physically removed). "Who disabled the firmware?" gives investigation flavor.
- Two hard choices: investigate source (slow, expensive) vs. tighten export scanning (industry backlash, -pol).
- Touches: int (detection), pol (trade friction), possibly alg (the chips are out there).
- The "mandatory scanning of all electronics exports" follow-up is a separate card with genuine tension.

**7. Government donates "obsolete" chips to non-treaty university**
- Card potential: **HIGH**
- Natural speaker: Legal Counsel or Intelligence Analyst
- "Technically legal, practically dangerous" is peak Reigns tension. Neither choice obviously correct.
- "University is a front" follow-up is a great history chain (discovered 18 months later = 3-5 turns).
- Touches: pol (restricting donations = political cost), int (monitoring gap), alg (chips enable training).
- Teaches the "loophole" pattern — enforcement always has edges where legal meets illegal. Strong teaching value.

**8. Military base decommissions AI defense systems — chips never in civilian database**
- Card potential: **HIGH**
- Natural speaker: NATO Liaison or Military Adviser
- "Demand military chip registries vs. accept the gap" is a hard sovereignty dilemma.
- Touches: pol (sovereignty fight), int (visibility gap), and opens a military-civilian enforcement gap thread.
- Genuinely distinct from civilian chip events. Military blindness is a different failure mode. Strong teaching value about declared-vs-undeclared compute.

**9. Insurance fraud covering chip diversion (data center fire)**
- Card potential: **MEDIUM-HIGH**
- Natural speaker: Intelligence Analyst
- Creative detection vector (insurance claim). Specific and surprising.
- The forensic audit follow-up leading to a broker is a nice chain.
- Weakness: the player choice isn't obvious from the event. What does the DG decide? Investigate the fire (expensive) vs. flag and move on (risky)? Needs sharper framing of the dilemma.
- **Recommendation:** Good event, needs work on the choice architecture.

**10. Embassy diplomatic pouches smuggling chips**
- Card potential: **HIGH**
- Natural speaker: Intelligence Analyst or Deputy Director
- "Confront privately vs. go public" is a classic diplomacy dilemma with clear tradeoffs.
- Small volume but poisonous precedent — the writer's note is exactly right.
- Touches: pol (diplomatic relations), int (delay vs. deterrence).
- Could set hidden state that makes similar events more likely if handled quietly.

---

## Group 2: Tracking itself is attacked or degraded

**11. Monitoring firmware vulnerability (chips report idle while training)**
- Card potential: **HIGH**
- Natural speaker: Chief Scientist
- Multiple discovery variants give pool weight flexibility.
- The "bug bounty program" variant is a distinct card about institutional investment in security infrastructure.
- Touches: int (monitoring integrity), pol (embarrassment), saf (if exploited for training).
- PARTIAL REDUNDANCY: The `surveillance-blind-spot` card (monitoring AI misclassified rogue lab) covers adjacent ground — "our monitoring failed" — but the mechanism is different enough (firmware vs. AI classification) to coexist.

**12. ISIA tracking database hacked**
- Card potential: **HIGH**
- Natural speaker: Chief Scientist or Intelligence Analyst
- "How long has the data been wrong?" is a terrifying question with real tension.
- Full physical re-audit vs. quiet fix is a genuinely hard choice (both are bad).
- The state-sponsored variant (exfiltrated enforcement methods) is a separate, scarier card.
- Touches: int (massive), pol (embarrassment), and hidden state (database_integrity or similar).
- This is an institutional crisis card, not just a detection event. High weight, should appear mid-game.

**13. Accidental firmware update breaks monitoring on 50,000 chips**
- Card potential: **MEDIUM**
- Natural speaker: Enforcement Chief
- "Manufacturer wants quiet fix vs. ISIA wants announcement" is okay but not a hard dilemma — transparency is usually obviously better, which makes this a weak card.
- The follow-up (anomalous power spike during the window) is the real card — that's where the tension is.
- **Recommendation:** Combine into one card: "Firmware bug created a monitoring window. During that window, we detected an anomalous power spike. Coincidence?" Now the choice is investigate (costs resources, maybe nothing) vs. assume coincidence (risky). That's harder.

**14. Chip signature cloning method published**
- Card potential: **HIGH**
- Natural speaker: Chief Scientist
- "Suppress publication vs. rush hardware countermeasure" is a great dilemma — censorship vs. security. Neither is obviously correct.
- Touches: pol (censorship precedent), int (monitoring integrity), saf (countermeasure R&D).
- Strong teaching value about information control vs. open science.
- The "preprints already exist" detail is crucial — it means suppression might fail, adding risk to that choice. Include it in card text.

**15. Signal relay spoofing (chip moves but monitoring signature stays)**
- Card potential: **MEDIUM**
- Natural speaker: Intelligence Analyst
- The ankle-bracelet analogy is vivid but the detection method (cross-reference power draw with location) is too technical for card text.
- Partially redundant with #11 (firmware vulnerability) — both are "monitoring says one thing, reality is different."
- **Recommendation:** Could work as a variant of #11 rather than a standalone card. Or merge the concept into the firmware vulnerability card's follow-up.

**16. Satellite monitoring knocked out by solar storm / jamming**
- Card potential: **MEDIUM-HIGH**
- Natural speaker: Enforcement Chief
- "Invest in redundant infrastructure vs. accept blind spots" is a reasonable dilemma.
- The writer's design note is correct — not every threat is adversarial. This variety is valuable.
- Touches: int (monitoring gap), pol (hard to justify expense for natural events).
- Weakness: the "solar storm" framing is a bit random/unlucky feeling. The "targeted jamming" variant is more interesting because it implies an adversary.
- **Recommendation:** Lead with jamming, mention solar storms as the cover story the adversary uses.

---

## Group 3: New chip sources outside monitored supply chain

**17. Non-treaty nation builds domestic fab**
- Card potential: **LOW — ALREADY EXISTS**
- The existing `custom-asic-foundry` card covers this exactly (non-treaty nation, older lithography, no EUV, outside ASML controls).
- The early/mid game variants (100x vs 5x less efficient) could be a degraded variant pair, but the core card exists.
- **Recommendation:** Cut the base event. The ASML technician poaching sub-event (#22) is the distinct angle here.

**18. Open-source chip design publishable at older fabs**
- Card potential: **MEDIUM-HIGH**
- Natural speaker: Chief Scientist
- "Classify chip designs vs. scientific freedom" is a hard dilemma.
- Touches: pol (censorship), alg (knowledge diffusion), int (monitoring becomes harder).
- The "published by a safety researcher with good intentions" variant adds moral complexity.
- PARTIAL REDUNDANCY: Thematically similar to #14 (suppress publication vs. accept consequences). Two "should we censor science?" cards in one game feels repetitive.
- **Recommendation:** Keep ONE of #14 or #18. I'd keep #14 (signature cloning) because the stakes are more immediate and the dilemma is sharper.

**19. Consumer GPUs / crypto hardware repurposed for distributed training**
- Card potential: **LOW — ALREADY EXISTS**
- The existing `old-chips-new-tricks` and `consumer-hw-threshold` cards cover this progression (older GPUs become dangerous, consumer hardware approaches frontier).
- The late-game variant (alg > 70) is literally `consumer-hw-threshold`.
- **Recommendation:** Cut. Already well-covered.

**20. Crypto mining operation pivots to distributed AI training**
- Card potential: **MEDIUM-HIGH**
- Natural speaker: Intelligence Analyst
- Distinct from #19 because it's a specific detection challenge (same hardware, same power draw, different software).
- The "decentralized marketplace" variant where the operator doesn't know what compute is used for is morally interesting.
- Touches: int (detection difficulty), pol (jurisdiction issues in non-treaty country).
- **Recommendation:** This works as a detection card, not a "new source" card. Reframe around the investigation challenge.

**21. Gaming console chip turns out to be AI-capable**
- Card potential: **MEDIUM**
- Natural speaker: Chief Scientist
- Fun concept but the player choice is unclear — what does the DG actually decide? Ban a console? Monitor hobbyists? The choices need work.
- Partially redundant with the consumer hardware threshold progression (#19/existing cards).
- **Recommendation:** Low priority. Only include if the card can find a sharp dilemma that's distinct from consumer-hw-threshold.

**22. ASML technicians recruited by non-treaty nation**
- Card potential: **HIGH**
- Natural speaker: Intelligence Analyst
- "Travel restrictions on technical personnel vs. monitor and hope" is a hard sovereignty/liberty dilemma.
- Distinct from the existing ASML joint venture card (that's a corporate deal; this is individual knowledge transfer).
- Touches: pol (sovereignty nightmare), int (monitoring), alg (knowledge diffusion).
- Teaching value: "knowledge is harder to contain than machines" — important concept.
- Could chain from the custom-asic-foundry card — if that nation already has a fab, poaching ASML engineers makes it worse.

**23. FPGA breakthrough enables training on untracked hardware**
- Card potential: **MEDIUM**
- Natural speaker: Chief Scientist
- "Expand monitoring mandate to FPGAs vs. accept the gap" echoes many other "expand monitoring" dilemmas.
- REDUNDANCY WARNING: This is structurally identical to old-chips-new-tricks and consumer-hw-threshold — "new hardware category becomes dangerous, do we monitor it?" Same dilemma, different hardware name.
- **Recommendation:** Cut. The teaching point (algorithmic progress makes new hardware dangerous) is already covered by two existing cards.

---

## Group 4: Smuggling networks and transshipment

**24. Broker network selling turnkey "training kits"**
- Card potential: **HIGH**
- Natural speaker: Intelligence Analyst
- "Raid now vs. keep watching to map the network" is a classic intelligence dilemma with real tension. Both choices have clear downsides.
- The variant where allied intelligence agencies don't want ISIA disrupting their parallel operation adds inter-agency friction.
- Touches: int (network intelligence), pol (inter-agency relations), and sets up chain cards.
- Teaching value: the A.Q. Khan analogy — commoditization of capability is the real danger.
- **Best event in the smuggling group.** The "raid vs. watch" dilemma is a proven game mechanic (spy games, XCOM, etc.).

**25. Transshipment hub — chip imports triple in small non-treaty nation**
- Card potential: **MEDIUM-HIGH**
- Natural speaker: Customs Liaison
- "Diplomatic pressure vs. deploy inspectors" is adequate but not thrilling.
- The whack-a-mole follow-up (shut one hub, traffic shifts to the next) is the teaching point — and it's a good one.
- Touches: pol (diplomatic cost), int (inspection cost).
- **Recommendation:** The follow-up is better than the initial card. Make the whack-a-mole the card: "You shut down Hub A. Imports to Hub B just spiked. What now?"

**26. Shell company with forged end-user certificates**
- Card potential: **MEDIUM**
- Natural speaker: Customs Liaison or Legal Counsel
- "Mandatory real-time verification vs. accept the gap" is okay but leans toward an obviously correct answer (verify, obviously).
- The "structural asymmetry" observation (creation cheap, investigation expensive) is insightful but hard to turn into a card choice.
- **Recommendation:** Works if the verification choice has a real downside (it does — industry opposition, shipping delays). Needs sharper framing of the cost.

**27. Legitimate distributor discovers reseller diverting chips**
- Card potential: **HIGH**
- Natural speaker: Deputy Director or Enforcement Chief
- "Keep quiet and investigate vs. make a public example" is a great dilemma. Both choices have second-order consequences (private deals vs. chilling self-reporting).
- Touches: pol (public perception), int (cooperation), and hidden state (industry_cooperation or similar).
- Teaching value: enforcement depends on voluntary cooperation. How you treat informants determines whether more come forward.
- This is a relationship-management card, distinct from detection cards. Valuable variety.

**28. Chips hidden in agricultural machinery at port**
- Card potential: **MEDIUM**
- Natural speaker: Customs Liaison
- Vivid detail (hidden in hydraulic systems, firmware physically removed) but the player choice is unclear — what does the DG decide after the chips are already found?
- The "found by tip-off, how many got through?" angle is the real tension, but it's a question, not a choice.
- **Recommendation:** Merge with the "turnkey training kit" event (#24) as color detail rather than a standalone card.

**29. Floating warehouse ship in international waters**
- Card potential: **HIGH**
- Natural speaker: Intelligence Analyst
- "Naval interdiction vs. track and identify buyers" is a great dilemma — legally fraught action vs. risky patience.
- Touches: pol (international waters, sovereignty), int (intelligence value), and it's cinematic/memorable.
- The domain model lesson (packaging/transport are NOT chokepoints) is well-taught by this event.
- This is a memorable, high-drama card. The international-waters setting is visually distinct from every other card. Great for variety.

---

## TOP 5 — Must Become Cards

1. **#24 — Turnkey training kit broker network** (raid vs. watch — classic intel dilemma, A.Q. Khan teaching point, chain potential)
2. **#8 — Military chip decommission** (sovereignty vs. visibility, distinct failure mode, teaches declared-vs-undeclared gap)
3. **#7 — "Obsolete" chip donation to non-treaty university** (technically legal / practically dangerous, great chain to "university is a front")
4. **#12 — ISIA tracking database hacked** (institutional crisis, "how long has data been wrong?", high-stakes choice)
5. **#14 — Chip signature cloning published** (censorship vs. security, strong teaching value about information control)

Honorable mentions: #10 (diplomatic pouches), #29 (floating warehouse), #1 (storage facility heist + honeypot chain), #27 (distributor informant dilemma).

## BOTTOM 3 — Probably Cut

1. **#4 — Decommissioned data center contractor skimmed chips** — Already exists as `decommission-graveyard` card.
2. **#19 — Consumer GPUs repurposed for training** — Already exists as `old-chips-new-tricks` and `consumer-hw-threshold`.
3. **#5 — Facility transfer chips disappear** — Generic version of shipping event (#3) and existing `chip-diversion`. No distinct dilemma.

## Cross-Cutting Notes

- **Redundancy is the biggest risk.** 6 of 29 events overlap significantly with existing cards. The "chips go missing between A and B" pattern appears in at least 4 events (#2, #3, #4, #5) plus the existing `chip-diversion` card. Pick ONE new angle (I'd pick #3's "compromised logistics partner" variant) and cut the rest.
- **The "expand monitoring to X" dilemma recurs too often.** Events #11, #15, #16, #19, #21, #23 all boil down to "new threat category, do we expand monitoring?" Need to differentiate the choices or consolidate.
- **Follow-ups are often better than the base events.** In several cases (#13, #25, #28), the initial event is weaker than its follow-up card. Lead with the interesting part.
- **Speaker variety is good.** Events naturally distribute across Customs Liaison, Intelligence Analyst, Chief Scientist, Enforcement Chief, Legal Counsel, NATO Liaison. No single speaker dominates.
- **Resource bar coverage is good.** Events touch all four bars. pol and int dominate (expected for enforcement content), but saf and alg appear through algorithmic progress events and security R&D choices.
