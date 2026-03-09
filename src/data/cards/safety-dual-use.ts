// Source: domain model dimension 5 (safety knowledge), event-map #research--dual-use
// Rationale: teaches that the cure and the disease are the same substance. Safety
//   research advances capabilities. The most promising shortcut (use AI to do alignment)
//   is also the most dangerous path.
// Dynamic: safety research = capability research; dual-use knowledge
// Category: routine

import { register } from "./registry";

register((state) => {
  if (state.turn < 3) return [];
  return [{
    id: "safety-dual-use",
    speaker: "Chief Scientist",
    text: "Our alignment team's latest paper on reward modeling has an unintended implication — it also shows how to train more capable systems with less compute. The paper advances safety by 6 months but hands capability researchers a significant shortcut. Do we publish?",
    left: {
      label: "Publish — safety first",
      effects: { saf: 8, alg: 6 },
    },
    right: {
      label: "Classify and restrict",
      effects: { saf: 3, pol: -5 },
    },
    weight: 2,
  }];
});
