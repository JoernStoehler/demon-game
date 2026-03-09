// Source: event-map #civil--supreme-court-challenge
// Rationale: teaches that the agency operates within legal systems that don't have a
//   category for existential risk. Civil liberties arguments are often legally correct.
// Dynamic: monitoring vs. sovereignty (int vs. pol tension)
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  // More likely when surveillance is high
  if (state.resources.int < 60) return [];
  return [{
    id: "supreme-court-challenge",
    speaker: "Legal Counsel",
    text: "The ACLU is bringing a landmark case: our chip-tracking firmware on consumer devices violates the Fourth Amendment. Two former ISIA attorneys filed supporting briefs — they helped design the program and now say it overreaches. The Ninth Circuit is sympathetic. If we lose, consumer-hardware monitoring collapses in the US. If we fight and win, we've set a surveillance precedent that will follow us internationally.",
    left: {
      label: "Fight the case",
      effects: { pol: -8, int: -3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Narrow the program preemptively",
      effects: { pol: -3, int: -10 },
    },
    weight: 1.5,
  }];
});
