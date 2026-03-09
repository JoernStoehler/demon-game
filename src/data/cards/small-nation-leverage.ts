// Source: event-map #international--small-nation-leverage
// Rationale: teaches that treaty infrastructure creates leverage for hosts.
//   Small nations have legitimate grievances about burden-sharing.
//   "Create an enforcement gap" threats are more credible than "build ASI" threats.
// Dynamic: nations exploit the pause for concessions
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "small-nation-leverage",
    speaker: "Diplomatic Attaché",
    text: "A small but strategically located treaty nation — hosts a critical undersea cable junction and a regional monitoring station covering 40% of South Asian compute traffic — is demanding concessions unrelated to AI. Debt relief, a Council seat, trade preferences. Their leverage: 'We could withdraw. We've had very interesting conversations with a non-treaty nation about hosting their data centers.' They're not threatening to build ASI. They're threatening to create an enforcement gap for others to exploit.",
    left: {
      label: "Call the bluff",
      effects: { pol: -5, int: -8 },
    },
    right: {
      label: "Negotiate — the station is critical",
      effects: { pol: -5, int: 3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 1.5,
  }];
});
