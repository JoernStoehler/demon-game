// Source: event-map #institutional--leadership-purge
// Rationale: teaches that politicians can undermine the agency by replacing competent
//   officials with political appointees. Institutional fragility is structural.
// Dynamic: far easier to destroy an institution than build one
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "leadership-purge",
    speaker: "Deputy Director",
    text: "New government demands replacement of three senior ISIA officials deemed 'too aggressive.' Threatens to withhold treaty funding. The officials are competent — the real objection is political. Lose them and we lose decades of institutional knowledge. Keep them and we lose a major funder.",
    left: {
      label: "Replace the officials",
      effects: { pol: 5, int: -10 },
    },
    right: {
      label: "Refuse — defend independence",
      effects: { pol: -10, int: 3 },
    },
    weight: 2,
  }];
});
