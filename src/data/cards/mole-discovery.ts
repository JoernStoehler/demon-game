// Source: event-map #institutional--mole-corp
// Rationale: teaches that regulatory capture is a structural risk. People move
//   between industry and enforcement, bringing loyalties with them.
// Dynamic: institutions rot from within; regulatory capture
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "mole-discovery",
    speaker: "Deputy Director",
    text: "Internal security found a senior official passing enforcement schedules to a corporation they previously worked for. The company timed chip transfers around our inspection windows. Quiet removal avoids scandal but doesn't deter. Public prosecution deters but damages credibility.",
    left: {
      label: "Remove quietly",
      effects: { int: -5, pol: 3 },
    },
    right: {
      label: "Prosecute publicly",
      effects: { int: -3, pol: -8 },
    },
    weight: 1.5,
  }];
});
