/**
 * REFERENCE ONLY — not wired into the card pool.
 *
 * Shows every card pattern using the register() API.
 * Copy-paste and modify to create new cards.
 *
 * Real cards: import { register } from "./registry"; then call register().
 * This file uses CardScript type directly to avoid actually registering.
 */

import type { CardScript, GameState } from "../../engine/types";

// ─── ROUTINE CARD ───────────────────────────────────────────────────
// Always in the pool. Constant weight. Touch 2-3 resources per choice.
//
// In a real card file:
//   import { register } from "./registry";
//   register(() => [{ ... }]);

// Source: [event-map reference]
// Rationale: [what dynamic this teaches]
// Category: routine
const _routine: CardScript = () => [{
  id: "hiring-spree",
  speaker: "Deputy Director",
  text: "We have openings for 200 new inspectors. Aggressive hiring would boost our capabilities but the cost is significant.",
  left: { label: "Hire aggressively", effects: { pol: -4, int: 8 } },
  right: { label: "Hire conservatively", effects: { pol: 5 } },
  weight: 1.5,
}];

// ─── STATE-GATED INCIDENT ──────────────────────────────────────────
// Appears only when a resource condition is met. Return [] to exclude.

const _incident: CardScript = (state) => {
  if (state.resources.int < 40) return [];
  return [{
    id: "rogue-lab-normal",
    speaker: "Deputy Director",
    text: "Thermal anomaly near Shenzhen. Signature consistent with an undeclared compute cluster running prohibited training.",
    left: { label: "Send inspectors", effects: { int: 8, pol: -3 } },
    right: { label: "Flag for next quarter", effects: { pol: -5, int: -3 } },
    weight: 1.5,
  }];
};

// ─── DEGRADED VARIANTS ──────────────────────────────────────────────
// Same event concept, different cards depending on state.

const _degradedPair: CardScript = (state) => {
  const highIntel = state.resources.int >= 40;
  return [{
    id: highIntel ? "rogue-lab-normal" : "rogue-lab-degraded",
    speaker: "Deputy Director",
    text: highIntel
      ? "Thermal anomaly near Shenzhen. Signature consistent with an undeclared compute cluster."
      : "Rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down.",
    left: {
      label: highIntel ? "Send inspectors" : "Expensive investigation",
      effects: highIntel ? { int: 8, pol: -3 } : { int: 5, pol: -5 },
    },
    right: {
      label: highIntel ? "Flag for next quarter" : "Ignore the rumors",
      effects: highIntel ? { pol: -5, int: -3 } : { pol: -3, int: -6 },
    },
    weight: 1.5,
  }];
};

// ─── CRISIS CARD ───────────────────────────────────────────────────
// High weight. Appears at resource extremes (< 20 or > 80). Thermostat.

const _crisis: CardScript = (state) => {
  if (state.resources.pol >= 20) return [];
  return [{
    id: "pol-crisis",
    speaker: "Deputy Director",
    text: "Public approval cratering. Emergency options only.",
    left: { label: "Emergency appeal", effects: { pol: 15, int: -10 } },
    right: { label: "Cut programs", effects: { pol: 8, int: -12 } },
    weight: 5,
    color: "#ef4444",
  }];
};

// ─── HISTORY CHAIN ──────────────────────────────────────────────────
// Consequence of a prior choice. Check state.history for the trigger card.

const _chain: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "heat-signature" && h.choice === "left",
  );
  if (!trigger) return [];
  if (state.turn - trigger.turn > 2) return [];
  return [{
    id: "cannabis-plantation",
    speaker: "Deputy Director",
    text: "The 'rogue compute cluster' was a cannabis growing operation. Heat lamps, not GPUs. The raid made international news.",
    left: { label: "Issue public apology", effects: { pol: -5, int: -3 } },
    right: { label: "Classify the incident", effects: { pol: -8, int: 3 } },
    weight: 10,
  }];
};

// ─── THREE-CHOICE CARD ──────────────────────────────────────────────
// Third option (swipe down). Omit `down` for standard 2-choice cards.
// Set disabled: true + empty label to grey it out pending capabilities.

const _threeChoice: CardScript = (state: GameState) => [{
  id: "three-way-decision",
  speaker: "Deputy Director",
  text: "A lab offers to share their safety research if we grant compute access. Your AI advisor has a third option.",
  left: { label: "Accept the deal", effects: { saf: 8, alg: 5, pol: -3 } },
  right: { label: "Decline", effects: { pol: 3, saf: -2 } },
  down: {
    label: "Counter-propose",
    effects: { saf: 5, pol: -1 },
    // Gate on hidden state — only available if we have diplomatic infrastructure
    disabled: (state.hidden.diplomatic_infrastructure ?? 0) < 1,
  },
  weight: 1.5,
}];

// ─── LATE-GAME ESCALATION ──────────────────────────────────────────
// Turn-gated. Check state.turn.

const _lateGame: CardScript = (state) => {
  if (state.turn < 15) return [];
  return [{
    id: "underground-network",
    speaker: "Deputy Director",
    text: "Decentralized network of small labs, each below thresholds but collectively training something massive.",
    left: { label: "Coordinate raids", effects: { int: 10, pol: -8 } },
    right: { label: "Propose treaty amendment", effects: { pol: 5, int: -3 } },
    weight: 2.5,
  }];
};

// Suppress unused-variable warnings — this file is reference only
void [_routine, _incident, _degradedPair, _crisis, _chain, _threeChoice, _lateGame];
