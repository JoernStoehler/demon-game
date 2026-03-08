// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: literature/political-statements-ai-risk.md (treaty withdrawal threats)
// Rationale: coalition fragility — nations can always leave
// Category: political
const treatyThreat: CardScript = (state) => {
  if (state.turn < 5) return [];
  return [{
    id: "treaty-threat",
    speaker: "Diplomatic Attaché",
    text: "A major signatory is threatening to withdraw from the treaty. They say enforcement is too aggressive. Or maybe not aggressive enough.",
    leftLabel: "Offer concessions",
    rightLabel: "Stand firm",
    leftEffects: { leverage: -10, trust: -5, funding: 8 },
    rightEffects: { leverage: 8, funding: -8 },
    weight: 1.5,
  }];
};

// Source: literature/us-ai-executive-orders.md (congressional oversight)
// Rationale: US funding dependency — must perform for biggest funder
// Category: political
const senateHearing: CardScript = (state) => {
  if (state.turn < 3) return [];
  return [{
    id: "senate-hearing",
    speaker: "Political Advisor",
    text: "The US Senate wants you to testify about ISIA effectiveness. They're skeptical. Your performance here affects American funding.",
    leftLabel: "Show strength",
    rightLabel: "Ask for patience",
    leftEffects: { leverage: 10, trust: -5 },
    rightEffects: { trust: 5, funding: -5 },
    weight: 1,
  }];
};

export const politicalScripts: CardScript[] = [
  treatyThreat, senateHearing,
];
