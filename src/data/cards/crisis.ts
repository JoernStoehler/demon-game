// STUB — placeholder cards so the game runs while real cards are being written.

import type { CardScript } from "../../engine/types";

const polCrisisLow: CardScript = (state) => {
  if (state.resources.pol >= 20) return [];
  return [{
    id: "pol-crisis-low",
    speaker: "Deputy Director",
    text: "Public approval is cratering. Protests outside ISIA headquarters. We need a dramatic gesture to restore confidence.",
    left: { label: "Major transparency push", effects: { pol: 15, int: -10 } },
    right: { label: "Ignore the protests", effects: { pol: 5, int: 5 } },
    weight: 5,
    color: "#ef4444",
  }];
};

const intCrisisLow: CardScript = (state) => {
  if (state.resources.int >= 20) return [];
  return [{
    id: "int-crisis-low",
    speaker: "Deputy Director",
    text: "Our intelligence network has gone dark. We're missing critical signals. Emergency recruitment of informants?",
    left: { label: "Emergency recruitment", effects: { int: 15, pol: -8 } },
    right: { label: "Use existing channels", effects: { int: 5, pol: 3 } },
    weight: 5,
    color: "#ef4444",
  }];
};

const intCrisisHigh: CardScript = (state) => {
  if (state.resources.int <= 80) return [];
  return [{
    id: "int-crisis-high",
    speaker: "Deputy Director",
    text: "Your intelligence network has grown too powerful. Three nations are demanding you dismantle monitoring programs or they walk.",
    left: { label: "Scale back surveillance", effects: { int: -15, pol: 8 } },
    right: { label: "Defend the programs", effects: { int: 5, pol: -10 } },
    weight: 5,
    color: "#f97316",
  }];
};

const polCrisisHigh: CardScript = (state) => {
  if (state.resources.pol <= 80) return [];
  return [{
    id: "pol-crisis-high",
    speaker: "Deputy Director",
    text: "Multiple delegations accuse you of empire-building. They want oversight reforms.",
    left: { label: "Accept oversight", effects: { pol: -15, int: 5 } },
    right: { label: "Resist reforms", effects: { pol: 5, int: -8 } },
    weight: 5,
    color: "#f97316",
  }];
};

export const crisisScripts: CardScript[] = [
  polCrisisLow, intCrisisLow, intCrisisHigh, polCrisisHigh,
];
