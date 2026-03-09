// Source: event-map #treaty--review-conference
// Rationale: teaches that coalition maintenance requires constant compromise.
//   No consensus means the treaty weakens by default. Seven nations want less,
//   three want more.
// Dynamic: political support IS the pause; coalition fragility
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "review-conference",
    speaker: "Diplomatic Attaché",
    text: "Five-year treaty review conference. Seven nations propose weakening enforcement provisions. Three want strengthening. The rest want no changes. Consensus required for any amendment. No consensus means the current text stands — but the seven dissatisfied nations may reduce cooperation informally.",
    left: {
      label: "Push for strengthening",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Accept minor weakening",
      effects: { pol: 5, int: -8 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 2,
  }];
});
