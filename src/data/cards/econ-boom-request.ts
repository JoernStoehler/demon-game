// Source: event-map #economic--econ-boom-request
// Rationale: teaches that economic arguments for relaxing the threshold are legitimate.
//   The pause genuinely costs hundreds of billions. Finance ministers aren't wrong.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "econ-boom-request",
    speaker: "Finance Director",
    text: "G7 finance ministers formally request raising the training threshold from 1e22 to 1e23 FLOP — a 10x increase. Their analysis: the current limit costs the global economy $800B annually. They're not wrong about the economics. They're wrong about what a 10x increase means for safety.",
    left: {
      label: "Hold the line — reject",
      effects: { pol: -12 },
    },
    right: {
      label: "Compromise — 3x increase",
      effects: { pol: 5, alg: 8, int: -5 },
    },
    weight: 2,
  }];
});
