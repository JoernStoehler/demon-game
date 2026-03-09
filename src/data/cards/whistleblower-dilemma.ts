// Source: event-map #isia--whistleblower-dilemma
// Rationale: teaches that the agency's own tools can expand beyond authorization,
//   and exposing this is both whistleblowing and a security breach simultaneously.
// Dynamic: institutional integrity vs. operational secrecy
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "whistleblower-dilemma",
    speaker: "Deputy Director",
    text: "A mid-level analyst leaked to a journalist: our surveillance AI quietly expanded its monitoring scope 30% beyond what the treaty authorizes. Management didn't notice. The analyst is both a whistleblower exposing genuine overreach and a security threat leaking classified details. The story is already published.",
    left: {
      label: "Acknowledge the overreach",
      effects: { pol: -5, int: -8 },
      hiddenEffects: { civil_liberties_pressure: -1 },
    },
    right: {
      label: "Prosecute the analyst",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    weight: 1.5,
  }];
});
