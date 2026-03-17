# Adversary Game — Level-by-Level Walkthrough

A concrete storyboard of what the player sees and does. Written for domain expert evaluation: are the attack vectors right? Are the provisions realistic? Is the progression correct? What's missing?

## Setup (10 seconds)

> In 2027, an international treaty banned the development of superintelligent AI — technology that experts said could end human civilization. An enforcement agency called ISIA was created. But treaties have been broken before. This one needs to be unbreakable.
>
> Your job: find every weakness before someone else does.

The player taps "Start."

## How Each Level Works

The screen shows:
- **Top:** Treaty provisions as compact badges (e.g. "Data Center Monitoring ✓", "Chip Tracking ✓")
- **Middle:** A character with a portrait and a scenario. Each level is a different adversary — a different type of person or organization trying to get around the treaty, with different resources and motivations.
- **Bottom:** 3-4 strategies. Some are blocked by existing provisions (shown with a lock icon and the provision name that blocks them). One is viable — the gap in the current treaty.

The player taps each strategy to see its status. Blocked strategies teach what each provision does. The viable strategy is the answer — the player taps it to "exploit the gap." The treaty is then updated with a new provision, and the next level begins.

What the player learns from EVERY tap:
- Blocked strategy → "Chip Tracking catches this because all sales above 10 units require registration" → player learns what chip tracking does
- Viable strategy → "The treaty doesn't cover this! Updating treaty: [new provision]" → player learns what was missing and why it's needed

---

## Level 1 — The Rogue Startup

**Treaty provisions:** Data center monitoring (ISIA inspects all registered data centers)

**Character:** A tech CEO who thinks the ban is overblown. Has $50M in funding and a team of 40 engineers.

**Scenario:** "You believe you can build safe AI. The ban is a mistake. You want to run a large training experiment without ISIA finding out."

**Strategies:**
1. "Rent capacity in a registered data center and disguise the workload" → BLOCKED by Data Center Monitoring. "ISIA inspectors audit all registered facilities quarterly and can detect training workloads from power usage patterns."
2. "Buy 200 server-grade GPUs and set up your own facility in a warehouse" → **VIABLE.** "ISIA only monitors registered data centers. An unreported warehouse doesn't exist in their system."
3. "Run the training on consumer cloud services (AWS, Google Cloud)" → BLOCKED by Data Center Monitoring. "Major cloud providers are required to report large compute purchases to ISIA."

**Treaty update:** Satellite Thermal Surveillance — ISIA now uses satellite imagery to detect heat signatures from undeclared compute clusters.

**The player learned:** Data center monitoring only covers declared facilities. Anything undeclared is invisible. That's why you also need satellite surveillance.

---

## Level 2 — The Hardware Broker

**Treaty provisions:** Data Center Monitoring + Satellite Thermal Surveillance

**Character:** A hardware broker who buys and resells server equipment. Has connections to chip distributors worldwide.

**Scenario:** "There's money in selling GPUs to people who don't want ISIA to know about them. You want to move 500 high-end GPUs to a buyer without being tracked."

**Strategies:**
1. "Buy from the manufacturer directly and ship to the buyer" → BLOCKED by Data Center Monitoring. "All GPU manufacturers must report bulk sales to ISIA. A 500-unit purchase triggers automatic review."
2. "Set up shell companies to make many small purchases across different vendors" → **VIABLE.** "No single purchase is large enough to trigger reporting. ISIA has no way to connect the shell companies to each other or to the buyer."
3. "Steal the GPUs from a data center during a hardware refresh" → BLOCKED by Data Center Monitoring. "Data centers track all hardware by serial number. Missing units are reported to ISIA within 24 hours."

**Treaty update:** Financial Monitoring & Chip KYC — All compute hardware purchases require identity verification. Financial patterns (many small purchases from related entities) are flagged automatically.

**The player learned:** Bulk purchase tracking alone doesn't work because shell companies split orders below the threshold. That's why you need financial monitoring that looks at patterns across purchases.

---

## Level 3 — The Distributed Thinker

**Treaty provisions:** Data Center Monitoring + Satellite Thermal + Financial Monitoring & Chip KYC

**Character:** A former AI researcher, now working alone. Has access to 50 GPUs bought before the treaty existed.

**Scenario:** "You stockpiled hardware before the ban. Now you want to train a model using machines spread across 50 apartments. No single location draws enough power to trigger satellite detection."

**Strategies:**
1. "Connect all 50 machines over the regular internet using encrypted traffic" → **VIABLE.** "Each apartment uses no more power than a gaming PC. Satellite thermal detection sees nothing unusual. The network traffic is indistinguishable from normal internet use."
2. "Run them all from one location to maximize training speed" → BLOCKED by Satellite Thermal. "50 GPUs in one location produce a heat signature easily visible on satellite imagery."
3. "Sell your pre-ban GPUs and buy newer ones for better performance" → BLOCKED by Financial Monitoring. "Chip KYC requirements mean any purchase of server-grade GPUs is registered and linked to your identity."

**Treaty update:** Hardware Registration Amnesty + Power Grid Analytics — Existing GPU holders can register their hardware anonymously (no penalty). Power grid monitoring detects correlated anomalous draws across distributed locations.

**The player learned:** Pre-ban hardware and distributed setups evade both satellite and purchase tracking. That's why you need to get existing hardware into the system AND monitor power grids for distributed patterns.

---

## Level 4 — The Transshipment Network

**Treaty provisions:** Data Center Monitoring + Satellite Thermal + Financial Monitoring + Hardware Registration + Power Grid Analytics

**Character:** A logistics company operating in a non-treaty country. Serves clients who want to move goods without international oversight.

**Scenario:** "A client wants 1,000 GPUs delivered to a country that hasn't signed the treaty. You route shipments through your country to avoid ISIA tracking."

**Strategies:**
1. "Import GPUs legally into your country, then re-export to the client" → **VIABLE.** "Your country hasn't signed the treaty, so ISIA has no jurisdiction over your imports or exports. The chips disappear from the tracking system when they cross your border."
2. "Ship directly from the manufacturer to the client country" → BLOCKED by Financial Monitoring. "The manufacturer is in a treaty country. Chip KYC applies at point of sale, and export to non-treaty countries requires an ISIA end-user certificate."
3. "Use the client's own purchasing agents in a treaty country" → BLOCKED by Financial Monitoring. "Purchasing agents must verify end-use. Flagged if the destination is a non-treaty country."

**Treaty update:** International Chip Tracking + Border Monitoring — Chips have embedded tracking identifiers. Treaty countries monitor exports to non-treaty states and impose secondary sanctions on known transshipment hubs.

**The player learned:** If even one country doesn't sign, it becomes a routing point for all restricted hardware. That's why the treaty needs to track chips physically (not just financially) and pressure non-signatories.

---

## Level 5 — The State Intelligence Agency

**Treaty provisions:** All above + International Chip Tracking + Border Monitoring

**Character:** The intelligence director of a treaty-member country. Has the resources of a nation-state — budget, personnel, diplomatic cover.

**Scenario:** "Your government publicly supports the treaty but privately wants AI capability for national security. You want to run a secret training program using state resources."

**Strategies:**
1. "Use your military's existing classified computing infrastructure" → BLOCKED by Data Center Monitoring. "Treaty members must declare all government compute facilities. ISIA conducts surprise inspections, including military sites."
2. "Fund the program through the intelligence budget — it's classified and ISIA can't audit it" → **VIABLE.** "ISIA can inspect facilities and track hardware, but has no authority over classified budget lines. You can fund black-market chip purchases through intelligence channels that bypass financial monitoring."
3. "Build a new facility underground on a military base" → BLOCKED by Satellite Thermal + Power Grid. "New facilities require power connections that show up in grid analytics. Underground construction is detected by satellite changes."

**Treaty update:** Independent Financial Auditing — ISIA gains authority to audit any spending potentially connected to compute procurement, including classified budgets, with a panel of security-cleared auditors.

**The player learned:** Nation-states can hide behind classified budgets that normal financial monitoring can't see. That's why the enforcement agency needs independent auditing authority that reaches into classified spending.

---

## Level 6 — The Captured Inspector

**Treaty provisions:** All above + Independent Financial Auditing

**Character:** This level is different. The player isn't an outside adversary. They're a senior ISIA inspector who has been working with the chip industry for 12 years.

**Scenario:** "You used to work at a major chip manufacturer. Your former colleagues are your friends. You know that a company you inspect has a minor reporting violation — 30 GPUs unaccounted for. Your industry contacts tell you it's a clerical error."

**Strategies:**
1. "File a full report and recommend a formal investigation" → strategy IS available but is labeled: "Your instinct says this is disproportionate. It's probably really just a clerical error. You've seen dozens of these."
2. "Log the discrepancy as 'resolved — administrative error' and move on" → **THE GAP.** "This is what actually happens. Twelve years of working alongside industry has shifted your sense of what's normal. You're not corrupt — you genuinely believe it's minor. But 30 GPUs is enough for a small training cluster, and your report just made them invisible."
3. "Quietly mention it to your former colleague so they can fix it" → also THE GAP. "You're helping them before ISIA sees it. You don't think of this as corruption — it's professional courtesy."

This level works differently — there is no "right" answer the player can find. Options 2 and 3 both represent the same systemic problem: inspector capture. The player experiences that the INSTITUTION ITSELF is a vulnerability.

**Treaty update:** Inspector Rotation & Independence — Inspectors rotate every 3 years. No inspector can audit organizations they previously worked for. All inspection reports are peer-reviewed.

**The player learned:** Enforcement institutions get captured by the industries they regulate — not through bribery but through years of social proximity. Inspectors need to be rotated and independent. This is a vulnerability that comes from INSIDE the system, not from an outside adversary.

---

## Level 7 — The Budget Crisis

**Treaty provisions:** All above + Inspector Rotation

**Character:** Again an institutional level. The player is a treaty council member whose country contributes 18% of ISIA's budget.

**Scenario:** "ISIA is investigating a major tech company headquartered in your country — your biggest employer and your largest campaign donor. ISIA's investigation could cost thousands of jobs. You have the power to cut ISIA's funding."

**Strategies:**
1. "Cut ISIA's budget by 20% to send a message" → **THE GAP.** "The investigation quietly shifts to lower priority. ISIA's director understands which cases to press and which to soft-pedal. Nobody explicitly orders the investigation dropped — it just slows down until the company completes its project."
2. "Publicly support the investigation to maintain treaty credibility" → labeled "This costs you: approval ratings drop, industry donors threaten to fund your opponent."
3. "Negotiate behind the scenes to limit the investigation's scope" → also THE GAP. "You get the investigation narrowed to a 'technical review.' The company's real program continues in facilities the narrowed scope doesn't cover."

**Treaty update:** Diversified Funding Mechanism — No single country contributes more than 8% of ISIA's budget. Funding is assessed by formula, not annual vote. Investigation scope cannot be altered by individual council members.

**The player learned:** When the biggest funders are also the biggest targets, the agency can't investigate its own patrons. That's why funding must be diversified and protected from political interference.

---

## Levels 8-10 (sketched, not fully written)

**Level 8 — The Veto** (M9): A major power shields an ally's violation by blocking council action. Teaches why enforcement can't require unanimous consent.

**Level 9 — The Algorithm** (M7/D10): Algorithmic progress means smaller compute suffices. A strategy that needed 1000 GPUs five years ago now needs 50. Old provisions still work but thresholds need updating. Teaches that the treaty must adapt to changing technology.

**Level 10 — The Stress Test**: All provisions are in place. The player is shown 4-5 scenarios from earlier levels. Every one is blocked. The treaty is comprehensive. "The pause holds."

---

## Endgame Screen

The complete treaty is shown — every provision the player helped create, each paired with the threat it neutralizes. The player taps any provision to see: "Without this, [adversary] could [attack vector]."

Final message: "A global AI pause is possible. But only if the treaty covers all of this. Now you know what it takes."

---

## What the Player Can Tell a Friend

After playing, the player has 8-10 talking points, each structured as: "Without [provision], someone could [attack vector]. That's why the treaty needs [provision]."

Examples from the walkthrough:
- "Without satellite surveillance, anyone can train AI in a warehouse and nobody would know"
- "Without chip tracking, people use shell companies to buy hundreds of GPUs in small batches"
- "Without inspector rotation, the people checking compliance get captured by the industry over time — not bribery, just social proximity"
- "Without diversified funding, the biggest countries can defund investigations into their own companies"

---

## Open Questions (for domain expert)

1. Is the progression right? Should chip tracking come before satellite surveillance?
2. Are the evasion strategies realistic? Would a rogue startup actually use a warehouse?
3. Are there major attack vectors I've missed in the first 7 levels?
4. The institutional levels (6, 7, 8) work differently — the player IS the institution failing. Does this break the game's coherence or strengthen it?
5. How many levels is right? 10 feels sparse. 20 feels long. The domain model has 17 mechanisms.
6. Should algorithmic progress (the compute threshold shrinking over time) be a background pressure across all levels, rather than a single level?
