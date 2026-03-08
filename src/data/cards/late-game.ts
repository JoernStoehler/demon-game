// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: literature/aisi-frontier-trends-2025.md (capability advances)
// Rationale: thresholds become obsolete as capabilities advance — late-game pressure
// Category: late-game (turn >= 10)
const capabilityJump: CardScript = (state) => {
  if (state.turn < 10) return [];
  return [{
    id: "capability-jump",
    speaker: "Chief Scientist",
    text: "A lab has made a significant capability leap in reasoning benchmarks — legally, just under prohibited thresholds. The line between 'safe' and 'unsafe' AI just got blurrier.",
    leftLabel: "Lower the thresholds",
    rightLabel: "Monitor closely",
    leftEffects: { leverage: 8, trust: -10, funding: -5 },
    rightEffects: { intel: 6, trust: -5 },
    weight: 2,
  }];
};

// Source: literature/iabied-treaty.md (Article IV — compute threshold evasion)
// Rationale: distributed training defeats per-cluster thresholds — treaty design flaw
// Category: late-game (turn >= 15)
const undergroundNetwork: CardScript = (state) => {
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

// Source: literature/ai-incident-database-2024-2025.md (viral AI demos)
// Rationale: public panic when capabilities outpace expectations
// Category: late-game (turn >= 8)
const publicAiDemo: CardScript = (state) => {
  if (state.turn < 8) return [];
  return [{
    id: "public-ai-demo",
    speaker: "Press Secretary",
    text: "A viral video shows an AI system performing tasks the public was told were years away. Panic is setting in. People want answers.",
    leftLabel: "Reassure the public",
    rightLabel: "Announce investigation",
    leftEffects: { trust: 8, leverage: -5 },
    rightEffects: { intel: 5, trust: -5, funding: -3 },
    weight: 1.5,
  }];
};

export const lateGameScripts: CardScript[] = [
  capabilityJump, undergroundNetwork, publicAiDemo,
];
