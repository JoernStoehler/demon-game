// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: original (throwaway)
// Rationale: funding thermostat — rescues from funding-depleted death at steep cost
// Category: crisis (funding < 20)
const fundingCrisis: CardScript = (state) => {
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

// Source: original (throwaway)
// Rationale: trust thermostat — rescues from trust-depleted death
// Category: crisis (trust < 20)
const trustCrisis: CardScript = (state) => {
  if (state.resources.trust >= 20) return [];
  return [{
    id: "trust-crisis",
    speaker: "Communications Director",
    text: "Public approval is cratering. Protests outside ISIA headquarters. We need a dramatic gesture to restore confidence.",
    leftLabel: "Major transparency push",
    rightLabel: "Crackdown on critics",
    leftEffects: { trust: 15, intel: -10 },
    rightEffects: { trust: 5, leverage: 10 },
    weight: 5,
    color: "#ef4444",
  }];
};

// Source: literature/iabied-treaty.md (Article IX — surveillance overreach)
// Rationale: intel thermostat — monitoring vs sovereignty tension
// Category: crisis (intel > 80)
const surveillanceBacklash: CardScript = (state) => {
  if (state.resources.intel <= 80) return [];
  return [{
    id: "surveillance-backlash",
    speaker: "Civil Liberties Advocate",
    text: "Your intelligence network has grown too powerful. Three nations are demanding you dismantle monitoring programs or they walk.",
    leftLabel: "Scale back surveillance",
    rightLabel: "Defend the programs",
    leftEffects: { intel: -15, trust: 8 },
    rightEffects: { intel: 5, leverage: -10 },
    weight: 5,
    color: "#f97316",
  }];
};

// Source: literature/iabied-treaty.md (Article III — DG accountability)
// Rationale: leverage thermostat — enforcement power breeds resentment
// Category: crisis (leverage > 80)
const powerGrabAccusation: CardScript = (state) => {
  if (state.resources.leverage <= 80) return [];
  return [{
    id: "power-grab-accusation",
    speaker: "UN Secretary-General",
    text: "Multiple delegations accuse you of empire-building. 'The Director-General answers to no one,' they say. They want oversight reforms.",
    leftLabel: "Accept oversight",
    rightLabel: "Resist reforms",
    leftEffects: { leverage: -15, trust: 10 },
    rightEffects: { leverage: 5, trust: -12 },
    weight: 5,
    color: "#f97316",
  }];
};

// Source: original (throwaway)
// Rationale: funding-overloaded thermostat — bloated budget invites scrutiny
// Category: crisis (funding > 80)
const wasteScandal: CardScript = (state) => {
  if (state.resources.funding <= 80) return [];
  return [{
    id: "waste-scandal",
    speaker: "Investigative Journalist",
    text: "Your agency's budget has ballooned. Leaked expense reports show luxury travel and redundant offices. 'ISIA: the agency that pauses everything except spending.'",
    leftLabel: "Slash the budget",
    rightLabel: "Defend spending",
    leftEffects: { funding: -15, trust: 8 },
    rightEffects: { funding: -5, trust: -6, intel: 8 },
    weight: 5,
    color: "#f97316",
  }];
};

// Source: literature/political-statements-ai-risk.md (bilateral bypass)
// Rationale: leverage-depleted thermostat — sidelined agency fights for relevance
// Category: crisis (leverage < 20)
const irrelevanceCrisis: CardScript = (state) => {
  if (state.resources.leverage >= 20) return [];
  return [{
    id: "irrelevance-crisis",
    speaker: "UN Secretary-General",
    text: "Your agency is being sidelined. Three nations just signed bilateral AI agreements that bypass the treaty entirely. ISIA wasn't even consulted.",
    leftLabel: "Demand a seat",
    rightLabel: "Focus on allies",
    leftEffects: { leverage: 12, funding: -8 },
    rightEffects: { leverage: 8, trust: 5, intel: -5 },
    weight: 5,
    color: "#ef4444",
  }];
};

export const crisisScripts: CardScript[] = [
  fundingCrisis, trustCrisis, surveillanceBacklash,
  powerGrabAccusation, wasteScandal, irrelevanceCrisis,
];
