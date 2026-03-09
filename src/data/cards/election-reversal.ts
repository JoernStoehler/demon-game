// Source: domain model dimension 4 (public sentiment), event-map #political--election-year
// Rationale: teaches that political support IS the pause. Elections can reverse
//   everything overnight. 30-year timescale = complete generational turnover.
// Dynamic: the pause is a political arrangement that exists at politicians' discretion
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  // Appears at ~yearly intervals (every 12 turns)
  if (state.turn < 10 || state.turn % 12 > 2) return [];
  return [{
    id: "election-reversal",
    speaker: "Political Advisor",
    text: "Elections in the US this cycle. The leading candidate ran on 'AI freedom' — promising to withdraw from the treaty and 'unleash American innovation.' Polling has them at 48%. Our current posture is being used as campaign ammunition either way.",
    left: {
      label: "Campaign for the pause",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    right: {
      label: "Stay above politics",
      effects: { pol: -8 },
    },
    weight: 2,
  }];
});
