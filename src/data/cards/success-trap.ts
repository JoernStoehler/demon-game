// Source: event-map #political--success-trap
// Rationale: teaches the invisible success problem — eight years without incident
//   becomes the strongest argument for defunding. You can't show what you prevented.
// Dynamic: the better you do, the stronger the case for ending you
// Category: political (turn-gated, pol-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  if (state.resources.pol < 35) return []; // only when things aren't already bad
  return [{
    id: "success-trap",
    speaker: "Political Advisor",
    text: "Senate coalition proposes 40% budget cut. 'Eight years, zero serious incidents. The threat was clearly exaggerated.' You know about three near-misses they don't — all classified. Declassifying would justify the budget but burn sources that caught the threats.",
    left: {
      label: "Accept the cuts",
      effects: { pol: 5, int: -10 },
    },
    right: {
      label: "Fight — declassify sanitized data",
      effects: { pol: 3, int: -5 },
    },
    weight: 2,
  }];
});
