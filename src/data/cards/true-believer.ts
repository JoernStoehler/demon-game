// Source: event-map #institutional--true-believer
// Rationale: teaches that mission urgency vs. rule of law is a real tension.
//   People who believe deeply in the mission will break rules to protect it.
//   Civil liberties advocates are correct that this is illegal.
// Dynamic: institutional integrity vs. mission urgency
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "true-believer",
    speaker: "Legal Counsel",
    text: "Senior enforcement officer — deeply committed to the pause — conducted unauthorized surveillance of university researchers. No violation found. The surveillance was illegal under domestic law. Civil liberties organizations are demanding arrest. She says she had credible intelligence that didn't meet the formal threshold.",
    left: {
      label: "Arrest and prosecute",
      effects: { pol: 3, int: -8 },
    },
    right: {
      label: "Internal discipline only",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    weight: 1.5,
  }];
});
