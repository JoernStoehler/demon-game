// Source: event-map #research--approval-dilemma
// Rationale: teaches that the boundary between safety and capability research is
//   inherently blurry. The most promising safety approaches push right up against
//   the capability boundary.
// Dynamic: cure = disease; classification dilemma at the frontier
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "approval-dilemma",
    speaker: "Chief Scientist",
    text: "Leading alignment researcher proposes training at 5×10²³ FLOP — just below the banned threshold. Could accelerate safety by years. But Research Controls flags: the methodology could reveal capability advances. We can't separate the safety insight from the capability one. Approve and you get both. Deny and you get neither.",
    left: {
      label: "Approve with monitoring",
      effects: { saf: 8, alg: 5, pol: -3 },
    },
    right: {
      label: "Deny — too risky",
      effects: { saf: -3, pol: 3 },
    },
    weight: 1.5,
  }];
});
