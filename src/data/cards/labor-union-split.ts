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
    text: "The International Metalworkers' Federation is fracturing over the pause. Manufacturing wing wants it lifted — non-treaty nations automate freely while their members' jobs stagnate. Logistics wing wants it strengthened — sub-threshold AI already eliminated four million warehouse and transport jobs. Both sides are lobbying hard. Both have legitimate grievances. The manufacturing wing is threatening a general strike if we don't respond.",
    left: {
      label: "Tighter sub-threshold limits",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Stay out of labor politics",
      effects: { pol: -6, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    weight: 1.5,
  }];
});
