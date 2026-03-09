// Source: event-map #economic--unemployment-crisis
// Rationale: teaches that AI automation happens under the threshold — permitted
//   deployments destroy jobs. Different opinion clusters blame the pause for
//   opposite reasons simultaneously.
// Dynamic: economic cost of pause is real and legitimate; opinion clusters diverge
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "unemployment-crisis",
    speaker: "Political Advisor",
    text: "Sub-threshold AI automation eliminated 12 million jobs in treaty nations in two years. All perfectly legal. Protests spreading — half blame the pause for 'not restricting AI enough,' half blame it for 'restricting the AI that could create new jobs.' Both groups are marching against ISIA.",
    left: {
      label: "Propose sub-threshold restrictions",
      effects: { pol: -8, alg: -3 },
    },
    right: {
      label: "Stay focused on ASI mandate",
      effects: { pol: -5 },
    },
    weight: 1.5,
  }];
});
