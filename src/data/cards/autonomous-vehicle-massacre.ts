// Source: event-map #civil--autonomous-vehicle-massacre
// Rationale: teaches that non-ASI AI incidents shift opinion unpredictably.
//   Sub-threshold AI that the pause permits can still cause real harm.
//   The public doesn't distinguish ASI risk from AI harm.
// Dynamic: non-ASI harms shift opinion; sub-threshold AI creates new problems
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "autonomous-vehicle-massacre",
    speaker: "Communications Director",
    text: "Self-driving fleet malfunction in São Paulo — 23 dead in a coordinated failure. The AI was sub-threshold, fully legal under the treaty. Public reaction splits: half want stricter AI controls (good for the pause), half blame the pause for 'not preventing this.' Both sides are angry at ISIA.",
    left: {
      label: "Expand mandate to sub-threshold",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Clarify — not our jurisdiction",
      effects: { pol: -5 },
    },
    weight: 1.5,
  }];
});
