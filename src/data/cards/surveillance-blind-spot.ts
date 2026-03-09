// Source: event-map #ai--ai-surveillance-blind-spot
// Rationale: teaches that agency AI develops blind spots. Adversaries adapt to tools.
//   Taking AI offline for retraining creates monitoring gaps.
// Dynamic: cat-and-mouse is permanent; agency tools are fallible
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "surveillance-blind-spot",
    speaker: "Chief Scientist",
    text: "Post-incident analysis: our monitoring AI classified a rogue lab's compute as 'commercial cloud' for 18 months. The lab deliberately mimicked cloud traffic. A human tip caught them, not our AI. Emergency retrain takes 6 weeks offline — 12% of facilities unmonitored.",
    left: {
      label: "Emergency retrain — 6 weeks dark",
      effects: { int: -10, saf: 3 },
    },
    right: {
      label: "Layer human inspectors",
      effects: { int: -3, pol: -5 },
    },
    down: {
      label: "Commission new AI from scratch",
      effects: { pol: -8, saf: 5, int: -5 },
      disabled: state.resources.pol < 50,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
