// Source: event-map #civil--supreme-court-challenge
// Rationale: teaches that the agency operates within legal systems that don't have a
//   category for existential risk. Civil liberties arguments are often legally correct.
// Dynamic: monitoring vs. sovereignty (int vs. pol tension)
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  // More likely when surveillance is high
  if (state.resources.int < 50) return [];
  return [{
    id: "supreme-court-challenge",
    speaker: "Legal Counsel",
    text: "The ACLU is bringing a landmark case arguing our chip-tracking firmware on consumer devices violates the Fourth Amendment. Two former ISIA attorneys filed briefs supporting the challenge. If we lose, the entire consumer-hardware monitoring program collapses in the US.",
    left: {
      label: "Fight the case",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Narrow the program",
      effects: { pol: 3, int: -10 },
    },
    weight: 1.5,
  }];
});
