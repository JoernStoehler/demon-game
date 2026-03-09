// Source: event-map #monitoring--asml-joint-venture
// Rationale: teaches that supply chain chokepoints are the foundation of enforcement.
//   If advanced chip production escapes treaty monitoring, the entire architecture fails.
// Dynamic: shrink attack surface — but chokepoints can be circumvented
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "asml-joint-venture",
    speaker: "Intelligence Analyst",
    text: "ASML is exploring a joint venture with a consortium that includes a non-treaty nation. If completed, advanced chip production capacity escapes treaty monitoring entirely. ASML's shareholders want the deal — $40B in projected revenue. The Dutch government is leaning toward approving it.",
    left: {
      label: "Pressure Netherlands to block",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Negotiate monitoring conditions",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 2,
  }];
});
