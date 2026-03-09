// Source: event-map #political--medical-ai-request
// Rationale: teaches the bright-line erosion problem. Once you make one exception
//   for humanitarian reasons, every future request cites the precedent.
//   The humanitarian case is both real and politically weaponizable.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "medical-ai-request",
    speaker: "Diplomatic Attaché",
    text: "The WHO petitions for a training run to create a drug-discovery AI. Above current threshold but well below the ASI danger zone. Chief Scientist rates the risk as low but nonzero. Projected impact: 2 million lives saved per year. The humanitarian case is overwhelming. But every exception erodes the bright line. Last month three companies cited the WHO's request in their own threshold-exception applications. If we approve, the line moves. If we deny, we own 2 million preventable deaths annually.",
    left: {
      label: "Approve the exception",
      effects: { pol: 5, alg: 5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Deny — maintain the bright line",
      effects: { pol: -10, int: -3 },
    },
    weight: 2,
  }];
});
