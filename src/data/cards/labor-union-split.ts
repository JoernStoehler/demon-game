// Source: event-map #civil--labor-union-split
// Rationale: teaches that economic cost of the pause is real and legitimate. Workers
//   whose jobs depend on AI policy take opposing sides simultaneously.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "labor-union-split",
    speaker: "Political Advisor",
    text: "The International Metalworkers' Federation is fracturing over the pause. Manufacturing wing wants it lifted — non-treaty nations automate freely while their jobs stagnate. Logistics wing wants it strengthened — sub-threshold AI already eliminated four million of their jobs. Both sides lobbying. Both have legitimate grievances.",
    left: {
      label: "Tighter sub-threshold limits",
      effects: { pol: -5, alg: -3 },
    },
    right: {
      label: "Stay out of labor politics",
      effects: { pol: -6 },
    },
    weight: 1.5,
  }];
});
