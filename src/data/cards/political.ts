// STUB — placeholder cards so the game runs while real cards are being written.

import type { CardScript } from "../../engine/types";

const treatyThreat: CardScript = (state) => {
  if (state.turn < 5) return [];
  return [{
    id: "treaty-threat",
    speaker: "Deputy Director",
    text: "A major signatory is threatening to withdraw from the treaty. They say enforcement is too aggressive. Or maybe not aggressive enough.",
    left: { label: "Offer concessions", effects: { pol: -10, int: 8 } },
    right: { label: "Stand firm", effects: { pol: 8, int: -5 } },
    weight: 1.5,
  }];
};

const senateHearing: CardScript = (state) => {
  if (state.turn < 3) return [];
  return [{
    id: "senate-hearing",
    speaker: "Deputy Director",
    text: "The US Senate wants you to testify about ISIA effectiveness. They're skeptical. Your performance here affects American funding.",
    left: { label: "Show strength", effects: { pol: 10, int: -5 } },
    right: { label: "Ask for patience", effects: { pol: 5, int: -3 } },
    weight: 1,
  }];
};

export const politicalScripts: CardScript[] = [treatyThreat, senateHearing];
