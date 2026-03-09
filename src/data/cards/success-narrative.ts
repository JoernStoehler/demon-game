// Source: event-map #political--success-narrative, domain model
// Rationale: teaches the fundamental paradox — you can't demonstrate prevented
//   catastrophes. The better you do, the stronger the case for defunding you.
//   Success is indistinguishable from "the threat was never real."
// Dynamic: success looks like "the threat was never real"
// Category: political (turn-gated, appears when things are going well)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  // Only appears when things are going relatively well
  if (state.resources.pol < 40 || state.resources.int < 40) return [];
  return [{
    id: "success-narrative",
    speaker: "Investigative Journalist",
    text: "My new book argues the ASI threat was manufactured to justify ISIA's budget. Ten years, no rogue AI, no near-misses the public can see. 'The agency that prevents invisible threats conveniently can never prove they exist.' It's climbing the bestseller lists.",
    left: {
      label: "Declassify threat data",
      effects: { pol: 3, int: -10 },
    },
    right: {
      label: "Let the book run its course",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 2,
  }];
});
