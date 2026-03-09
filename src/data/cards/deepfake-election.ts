// Source: event-map #civil--deepfake-election-interference
// Rationale: teaches that sub-threshold AI undermines democratic processes. The
//   very technology the pause permits is eroding the political system the pause
//   depends on.
// Dynamic: non-ASI harms shift opinion; sub-threshold AI creates real damage
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "deepfake-election",
    speaker: "Communications Director",
    text: "Three weeks before a critical election in a major treaty nation, AI-generated deepfakes flood social media: fake recordings of the pro-pause candidate, fabricated scandals, synthetic news articles. All sub-threshold AI, perfectly legal. The technology the pause permits is attacking the democracy the pause requires.",
    left: {
      label: "Emergency deepfake task force",
      effects: { pol: -5, int: -5 },
    },
    right: {
      label: "Not our jurisdiction",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 2,
  }];
});
