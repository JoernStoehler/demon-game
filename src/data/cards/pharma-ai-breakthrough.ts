// Source: event-map #economic--pharma-ai-breakthrough
// Rationale: teaches that the hardest version of the economic argument isn't "we want
//   more money" — it's "we can save your mother." The humanitarian case for crossing
//   bright lines is emotionally irresistible and factually legitimate.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "pharma-ai-breakthrough",
    speaker: "Chief Scientist",
    text: "A pharmaceutical consortium trained an AI at 90% of the permitted threshold and identified drugs that reverse early-stage Alzheimer's. Phase II trials confirm efficacy. Now they need 3x the threshold to extend the approach to Parkinson's and ALS — projected 8 million lives saved per year. A dying senator gave a speech: 'The ISIA is choosing to let me die to prevent a threat that has never materialized.' Patient advocacy groups are organizing rallies in 40 cities. The science is real. The lives are real. The risk is 'very probably safe but I cannot guarantee it.'",
    left: {
      label: "Approve the exception",
      effects: { pol: 8, alg: 8, saf: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Deny — bright line exists for this",
      effects: { pol: -12, int: -3 },
    },
    down: {
      label: "Run training under ISIA supervision",
      effects: { pol: 3, alg: 5, int: -5 },
      disabled: state.resources.saf < 50,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
