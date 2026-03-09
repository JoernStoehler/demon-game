// Source: event-map #isia--media-waste-story
// Rationale: teaches the classification trap — dual-use constraints mean successes
//   must be hidden while failures are public. The agency can't defend itself.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: political (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "media-waste-story",
    speaker: "Press Secretary",
    text: "Major outlet published 'Inside the Black Hole: How ISIA Spends Your Billions.' Mostly accurate. A $180M 'null result' experiment (Chief Scientist says null results ARE results), conference spending, executive perks. What they can't report: the classified breakthroughs that justify the budget.",
    left: {
      label: "Declassify selected successes",
      effects: { pol: 5, alg: 5, int: -5 },
    },
    right: {
      label: "Absorb the hit — don't declassify",
      effects: { pol: -10 },
    },
    down: {
      label: "Closed congressional briefing",
      effects: { pol: -3, int: -3 },
      disabled: state.resources.pol < 50,
    },
    weight: 2,
  }];
});
