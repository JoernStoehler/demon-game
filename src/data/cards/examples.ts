/**
 * REFERENCE ONLY — not wired into the card pool.
 *
 * Read this file to see every card pattern with annotations.
 * Copy-paste and modify to create new cards.
 */

import type { CardScript } from "../../engine/types";

// ─── ROUTINE CARD ───────────────────────────────────────────────────
// Always in the pool. Constant weight. Touch 2-3 resources per choice.

// Source: literature/iabied-treaty.md (Article III — ISIA staffing)
// Rationale: verification requires inspectors; hiring costs money and looks aggressive
// Category: routine
const _routine: CardScript = () => [{
  id: "hiring-spree",
  speaker: "Head of Human Resources",
  text: "We have openings for 200 new inspectors. Aggressive hiring would boost our capabilities but the cost is significant.",
  leftLabel: "Hire aggressively",
  rightLabel: "Hire conservatively",
  leftEffects: { funding: -10, intel: 8, trust: -4 },
  rightEffects: { funding: -3, trust: 5 },
  weight: 1.5,
}];

// ─── STATE-GATED INCIDENT ──────────────────────────────────────────
// Appears only when a resource condition is met. Return [] to exclude.

// Source: literature/iabied-treaty.md (Article VI — on-site verification)
// Rationale: core enforcement scenario; needs intel >= 40 to detect
// Category: incident
const _incident: CardScript = (state) => {
  if (state.resources.intel < 40) return [];
  return [{
    id: "rogue-lab-normal",
    speaker: "Intelligence Analyst",
    text: "Thermal anomaly near Shenzhen industrial zone. Signature consistent with an undeclared compute cluster running prohibited training.",
    leftLabel: "Send inspectors",
    rightLabel: "Flag for next quarter",
    leftEffects: { funding: -8, intel: 8, leverage: 5 },
    rightEffects: { trust: -5, intel: -3 },
    weight: 1.5,
  }];
};

// ─── DEGRADED VARIANTS ──────────────────────────────────────────────
// Same event concept, different cards depending on state.
// One script returns different content based on conditions.

// Source: literature/iabied-treaty.md (Article VI — on-site verification)
// Rationale: low-intel variant has worse options — teaches "low intel = harder"
// Category: incident (degraded variant pair)
const _degradedPair: CardScript = (state) => {
  const highIntel = state.resources.intel >= 40;
  return [{
    id: highIntel ? "rogue-lab-normal" : "rogue-lab-degraded",
    speaker: highIntel ? "Intelligence Analyst" : "Junior Analyst",
    text: highIntel
      ? "Thermal anomaly near Shenzhen industrial zone. Signature consistent with an undeclared compute cluster running prohibited training."
      : "There are... rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down with our current intelligence.",
    leftLabel: highIntel ? "Send inspectors" : "Expensive investigation",
    rightLabel: highIntel ? "Flag for next quarter" : "Ignore the rumors",
    leftEffects: highIntel ? { funding: -8, intel: 8, leverage: 5 } : { funding: -12, intel: 5 },
    rightEffects: highIntel ? { trust: -5, intel: -3 } : { trust: -3, intel: -6 },
    weight: 1.5,
  }];
};

// ─── CRISIS CARD ───────────────────────────────────────────────────
// High weight. Appears at resource extremes (< 20 or > 80). Thermostat:
// offers a way back from death, but at steep cost to another resource.

// Source: original
// Rationale: funding thermostat — rescues from funding-depleted death
// Category: crisis (funding < 20)
const _crisis: CardScript = (state) => {
  if (state.resources.funding >= 20) return [];
  return [{
    id: "funding-crisis",
    speaker: "Chief Financial Officer",
    text: "We're running dangerously low on funds. Emergency options only: either cut programs or beg member states for emergency funding.",
    leftLabel: "Emergency appeal",
    rightLabel: "Cut programs",
    leftEffects: { funding: 15, leverage: -10 },
    rightEffects: { funding: 8, intel: -12 },
    weight: 5,
    color: "#ef4444",
  }];
};

// ─── HISTORY CHAIN ──────────────────────────────────────────────────
// Consequence of a prior choice. Check state.history for the trigger card.
// Use state.turn - trigger.turn to control delay.

// Source: original
// Rationale: false positive teaches that enforcement has collateral damage
// Category: history-triggered (child of heat-signature→left)
const _chain: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "heat-signature" && h.choice === "left",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay > 2) return []; // only appears within 2 turns of trigger
  return [{
    id: "cannabis-plantation",
    speaker: "Enforcement Chief",
    text: "The 'rogue compute cluster' was a cannabis growing operation. Heat lamps, not GPUs. The raid made international news.",
    leftLabel: "Issue public apology",
    rightLabel: "Classify the incident",
    leftEffects: { trust: -5, leverage: -3 },
    rightEffects: { trust: -8, intel: 3 },
    weight: 10, // very high — should appear ASAP after trigger
  }];
};

// ─── DELAYED CONSEQUENCE ────────────────────────────────────────────
// Same as chain, but appears 3-6 turns after trigger. Normal weight.

// Source: original
// Rationale: diplomatic fallout from the botched raid arrives weeks later
// Category: history-triggered (child of heat-signature→left)
const _delayedConsequence: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "heat-signature" && h.choice === "left",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 3 || delay > 6) return [];
  return [{
    id: "raid-diplomatic-fallout",
    speaker: "Diplomatic Attaché",
    text: "The government where you conducted that botched raid is demanding reparations and threatening to restrict ISIA access to their territory.",
    leftLabel: "Pay reparations",
    rightLabel: "Invoke treaty authority",
    leftEffects: { funding: -8, trust: 3 },
    rightEffects: { leverage: -6, trust: -5 },
    weight: 3,
  }];
};

// ─── LATE-GAME ESCALATION ──────────────────────────────────────────
// Turn-gated. Makes later turns harder. Check state.turn.

// Source: literature/iabied-treaty.md (Article IV — compute threshold evasion)
// Rationale: distributed training defeats per-cluster thresholds
// Category: late-game (turn >= 15)
const _lateGame: CardScript = (state) => {
  if (state.turn < 15) return [];
  return [{
    id: "underground-network",
    speaker: "Intelligence Analyst",
    text: "We've discovered a decentralized network of small labs, each individually below compute thresholds but collectively training something massive. The treaty wasn't designed for this.",
    leftLabel: "Coordinate raids",
    rightLabel: "Propose treaty amendment",
    leftEffects: { funding: -10, intel: 10, leverage: 5 },
    rightEffects: { leverage: -8, trust: 5 },
    weight: 2.5,
  }];
};

// Suppress unused-variable warnings — this file is reference only
void [_routine, _incident, _degradedPair, _crisis, _chain, _delayedConsequence, _lateGame];
