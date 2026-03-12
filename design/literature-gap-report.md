# Literature Gap Assessment

Generated 2026-03-12 by systematic audit of ~85 literature files against the 10-dimension domain model.

## Summary

The literature collection is **strong on AI safety/alignment, public opinion snapshots, and geopolitics analogs**, but **weak on enforcement mechanics, institutional dynamics, and long-horizon opinion change**. The biggest gaps are exactly where the game most needs grounding: how enforcement actually works day-to-day, and how public opinion evolves over decades (not just what it looks like today).

---

## Coverage by Domain Model Dimension

### WELL-COVERED (marginal search value < marginal cost)

| Dimension | Files | Assessment |
|-----------|-------|------------|
| **D1: ISIA Mandate & Treaty** | ~8 | IABIED treaty draft, EU AI Act, SB1047, executive orders, RSPs. Solid grounding for what a treaty looks like. |
| **D5: Safety Knowledge** | ~15 | Alignment faking, sleeper agents, reward hacking, corrigibility, MIRI agenda, scheming. Deep coverage of why alignment is hard. |
| **D9: AI Behavior** | ~8 | Apollo scheming, Anthropic alignment faking/reward hacking, METR evals. Good coverage of emergent misbehavior. |
| **D4: Public Sentiment (snapshots)** | ~10 | Pew, Gallup, Brookings, Carnegie, FLI, Public Citizen surveys. Excellent cross-section of current opinion. But see gap below for *dynamics*. |
| **Geopolitics (analogical)** | ~15 | IAEA Iraq, Khan network, sanctions evasion, chip smuggling, regulatory capture, lobbying. Strong analog base for enforcement scenarios. |
| **X-risk arguments** | ~10 | Yudkowsky, Cotra, Karnofsky, Gwern, IABIED book + resources. Comprehensive coverage of the core case. |

**Recommendation:** No further searches needed for these areas. Diminishing returns.

### ADEQUATELY COVERED (targeted searches only if specific card needs grounding)

| Dimension | Files | Assessment |
|-----------|-------|------------|
| **D2: Enforcement Resources** | ~5 | Wasil verification methods, RAND model weights, CNAS chip smuggling. Covers *what* to enforce but thin on *how* (operational details of chip tracking, inspection protocols). |
| **D3: Safety Resources** | ~3 | Covered indirectly by safety knowledge papers. Thin on research management/funding dynamics specifically. |
| **D8: Cat-and-Mouse** | ~4 | Sanctions evasion cases, Khan network. Good analogs but no formal treatment of adversarial dynamics in compute monitoring. |

### GAPS (high search value — new this session)

| Dimension | Gap | What we need | Papers found/downloaded |
|-----------|-----|-------------|----------------------|
| **D10: Compute Model** | Compute governance mechanics | How compute thresholds work, cloud provider monitoring, chip lifecycle tracking, detection gaps | **6 papers downloaded:** Sastry & Heim 2024, Heim cloud governance 2024, Heim thresholds 2024, CNAS secure chips 2024, Wasil verification 2024, RAND game theory 2025 |
| **D6: Adjacent Knowledge (scaling)** | Algorithmic progress rates | Quantitative data on efficiency gains, distributed training feasibility, threshold erosion timelines | **2 papers downloaded:** DiLoCo 2024, Epoch algorithmic progress 2024 (pending) |
| **D4: Public Sentiment (dynamics)** | Long-horizon opinion change | Issue-attention cycles, risk amplification/attenuation, psychic numbing, climate polarization as analog | **Downloads pending:** Downs 1972, Kasperson 1988, Slovic 2007, McCright & Dunlap 2011 |
| **Institutional dynamics** | IO authority/pathology | How international organizations gain/lose authority, bureaucratic pathologies, treaty effectiveness | **3 papers downloaded:** Hoffman treaty effectiveness 2022, Pollack PA delegation 2007 (pending), Barnett & Finnemore IO pathologies 1999 (pending) |

---

## What Each Gap Means for the Game

### 1. Compute Governance (D10) — NOW LARGELY FILLED

This was the most critical gap. ISIA's core function is monitoring compute — without grounding in how compute governance actually works, enforcement cards would be speculative. The 6 new papers provide:

- **Concrete mechanisms:** Cloud provider KYC, chip export controls, on-site inspections, hardware-based tracking (Sastry & Heim)
- **Threshold design:** Why 1e25 vs 1e26 FLOP, what thresholds can/can't detect (Heim & Koessler)
- **Evasion strategies:** Game-theoretic analysis of what adversaries can hide (RAND)
- **Verification toolkit:** 10 methods mapped to specific evasion techniques (Wasil et al.)
- **Cloud as chokepoint:** How cloud providers become enforcement intermediaries (Heim et al.)
- **Hardware security:** Physical chip tracking, secure enclaves, supply chain controls (CNAS)

**Status:** Well-grounded now. Specific card scenarios can reference these papers directly.

### 2. Algorithmic Progress / Scaling (D6) — PARTIALLY FILLED

The game needs quantitative anchors for "the clock is ticking" — how fast does the compute needed for ASI shrink? Key findings from new + existing literature:

- Algorithmic efficiency doubles every ~8 months (Epoch AI)
- Distributed training demonstrated across 3 continents (DiLoCo)
- Frontier training compute growing ~4-5x/year (AISI trends report, already had)
- EU threshold 1e25 FLOP, US 1e26 FLOP — but these erode (Heim thresholds)

**Remaining gap:** INTELLECT-1 (open distributed training demo) — download may still be pending. Also: no formal model of threshold erosion rates combining algorithmic + hardware progress. May need to derive this ourselves from the Epoch data.

### 3. Public Opinion Dynamics (D4) — DOWNLOADS PENDING

We have 10 surveys showing *what people think now*. We have zero on *how opinions change over decades*. For a 30-year game, this is critical. The search identified classic frameworks:

- **Issue-attention cycle** (Downs 1972): 5-stage model of how issues rise and fade from public attention
- **Social amplification of risk** (Kasperson 1988): How risk events get amplified or dampened by media, institutions, activist groups
- **Psychic numbing** (Slovic 2007): Why threats to billions feel less urgent than threats to identifiable individuals
- **Climate polarization** (McCright & Dunlap 2011): How political polarization on a technical issue can *increase* despite growing scientific consensus — the strongest analog for AI risk over 30 years

**Status:** Papers identified and downloads launched. Once available, these will ground the "opinion cluster" mechanics and long-horizon political dynamics.

### 4. Institutional Dynamics — DOWNLOADS PENDING

ISIA is an international organization. How do IOs actually behave over decades? The search found:

- **Treaty effectiveness** (Hoffman 2022): Meta-analysis showing most treaties fail to achieve intended effects — downloaded
- **IO pathologies** (Barnett & Finnemore 1999): IOs develop autonomous interests and dysfunctional behaviors — download pending
- **Principal-agent delegation** (Pollack 2007): How member states control (or fail to control) international agencies — download pending

**Status:** These will ground the "institutional rot" and "mandate creep" card dynamics.

---

## Remaining True Gaps (no good literature exists)

These are areas where expert literature is thin or nonexistent, and we'll need to rely on Jörn's domain expertise:

1. **ISIA-specific enforcement operations.** No one has written about how a hypothetical ASI pause agency would actually run day-to-day. We extrapolate from IAEA + compute governance papers, but the specific combination is novel.

2. **AI-assisted enforcement paradox.** The idea that the agency must use AI tools that are themselves potentially dangerous — this is discussed in IABIED but not formalized anywhere.

3. **Alignment research management.** How do you run a research program on a problem where the expertise doesn't exist yet, you can't parallelize, and your best tool is also your biggest risk? No management science literature covers this specific case.

4. **30-year political economy of a technology ban.** No technology has been successfully banned at this scale for this duration. The closest analogs (nuclear nonproliferation, CFC ban) are imperfect. This is inherently speculative territory.

---

## Download Status

| Paper | Slug | Status |
|-------|------|--------|
| Sastry & Heim, Computing Power and AI Governance | sastry-heim-compute-governance-2024 | DONE |
| Heim, Governing Through the Cloud | heim-governing-through-cloud-2024 | DONE |
| Heim & Koessler, Training Compute Thresholds | heim-training-compute-thresholds-2024 | DONE |
| CNAS, Secure Governable Chips | cnas-secure-governable-chips-2024 | DONE |
| Wasil et al., Verification Methods | wasil-verification-methods-ai-agreements-2024 | DONE |
| RAND, Compute Governance Game Theory | rand-compute-governance-game-theory-2025 | DONE |
| Hoffman et al., Treaties Failed Intended Effects | hoffman-treaties-failed-intended-effects-2022 | DONE |
| DiLoCo, Distributed Training | diloco-distributed-training-2024 | DONE |
| Epoch AI, Algorithmic Progress in LMs | epoch-algorithmic-progress-2024 | PENDING |
| Downs, Issue-Attention Cycle | downs-issue-attention-cycle-1972 | PENDING |
| Kasperson et al., Social Amplification of Risk | kasperson-social-amplification-risk-1988 | PENDING |
| Slovic, Psychic Numbing | slovic-psychic-numbing-2007 | PENDING |
| McCright & Dunlap, Climate Polarization | mccright-dunlap-climate-polarization-2011 | PENDING |
| Barnett & Finnemore, IO Pathologies | barnett-finnemore-io-pathologies-1999 | PENDING |
| Pollack, PA and International Delegation | pollack-principal-agent-international-delegation-2007 | DONE (from prior session) |
