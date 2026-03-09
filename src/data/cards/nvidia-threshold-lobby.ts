// Source: event-map #corporate--nvidia-threshold-lobby
// Rationale: teaches that corporate lobbying is structurally permanent. Companies
//   have legitimate economic arguments — the pause costs real money.
// Dynamic: economic cost is real and legitimate; opponents aren't wrong
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "nvidia-threshold-lobby",
    speaker: "Political Advisor",
    text: "NVIDIA's CEO is testifying before three parliaments this week. Their proposal: raise the compute threshold by 10x, 'freeing innovation while maintaining safety.' Twelve treaty nations are co-sponsoring the amendment. The economic argument is strong — treaty nations are losing market share.",
    left: {
      label: "Oppose the amendment",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Negotiate a compromise",
      effects: { pol: 3, alg: 5, int: -3 },
    },
    weight: 1.5,
  }];
});
