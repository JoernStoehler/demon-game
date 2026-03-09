// Source: event-map #treaty--withdrawal-threat
// Rationale: teaches coalition fragility — any nation can leave. The pause exists
//   at politicians' discretion. Concessions erode the treaty; hardline loses members.
// Dynamic: political support IS the pause
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "withdrawal-threat",
    speaker: "Diplomatic Attaché",
    text: "India has filed a 12-month withdrawal notice from the treaty. Their stated reason: 'asymmetric enforcement.' Three other nations are watching — if India leaves cleanly, they'll follow. India's compute infrastructure is growing fast. In 12 months they'll be outside our jurisdiction entirely.",
    left: {
      label: "Offer special terms",
      effects: { pol: -5, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Invoke non-party sanctions",
      effects: { pol: -8, int: 5 },
    },
    weight: 2,
  }];
});
