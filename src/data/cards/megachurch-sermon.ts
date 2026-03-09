// Source: event-map #civil--megachurch-sermon
// Rationale: teaches that political support can come from unexpected sources with
//   incompatible goals. Religious allies want permanent ban, not safe AI.
// Dynamic: political support is fragile and comes with strings attached
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "megachurch-sermon",
    speaker: "Communications Director",
    text: "A megachurch pastor's sermon goes viral — 'Building a mind greater than God's is the sin of Babel.' Ninety million views. Evangelical organizations across three continents adopt anti-ASI positions. Millions of new pause supporters — but they want a permanent ban, not a bridge to safe AI. They'd block our safety research.",
    left: {
      label: "Embrace the coalition",
      effects: { pol: 12, saf: -5 },
    },
    right: {
      label: "Maintain scientific framing",
      effects: { pol: -5, saf: 3 },
    },
    weight: 1.5,
  }];
});
