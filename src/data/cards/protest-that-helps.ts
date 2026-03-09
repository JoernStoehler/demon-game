// Source: event-map #consequence--protest-that-helps
// Rationale: teaches that non-ASI incidents shift opinion in ways you can exploit
//   but shouldn't. Attaching your mission to misunderstanding is effective but fragile.
// Dynamic: crises as opportunities; incorrect conclusions help short-term, hurt long-term
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "protest-that-helps",
    speaker: "Political Advisor",
    text: "Autonomous drone swarm malfunction killed 6 people in a military exercise. Sub-threshold AI, nothing to do with ASI. Massive protests — not about existential risk, but the public doesn't distinguish. Momentum for stronger enforcement is surging. I can push through measures we've wanted for years.",
    left: {
      label: "Exploit the momentum",
      effects: { pol: 8, int: 5 },
      hiddenEffects: { narrative_damage: 1 },
    },
    right: {
      label: "Correct the narrative",
      effects: { pol: -5, saf: 3 },
    },
    weight: 1.5,
  }];
});
