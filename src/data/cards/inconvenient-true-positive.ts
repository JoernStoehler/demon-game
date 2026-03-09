// Source: event-map #enforcement--politically-inconvenient-true-positive
// Rationale: teaches that enforcement asymmetry applies even to allies. A powerful
//   nation can simply refuse. The agency exists at their discretion.
// Dynamic: political support IS the pause; can't enforce against your backers
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "inconvenient-true-positive",
    speaker: "Intelligence Analyst",
    text: "Our monitoring detected an unauthorized training run inside the US military's largest AI research facility. 4x the permitted threshold. The Pentagon says it's 'national security research exempt under Article IX.' That exemption doesn't exist. They're daring us to enforce against our biggest funder.",
    left: {
      label: "Issue formal violation notice",
      effects: { pol: -15, int: 5 },
    },
    right: {
      label: "Negotiate quietly",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { treaty_erosion: 2 },
    },
    weight: 2.5,
    color: "#ef4444",
  }];
});
