// Source: event-map #political--corporate-lobbying
// Rationale: teaches that corporate hypocrisy is structural — companies publicly
//   support the pause while privately funding opposition. Intel sources are finite.
// Dynamic: corporate interests structurally opposed to pause
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "corporate-lobbying",
    speaker: "Intelligence Analyst",
    text: "Three largest AI companies formed a lobbying alliance. They publicly support the pause. A journalist contact has evidence they're privately funding anti-enforcement candidates. Publishing burns the source.",
    left: {
      label: "Leak to independent press",
      effects: { pol: 5, int: -8 },
    },
    right: {
      label: "Confront companies privately",
      effects: { pol: -3, int: -3 },
    },
    weight: 1.5,
  }];
});
