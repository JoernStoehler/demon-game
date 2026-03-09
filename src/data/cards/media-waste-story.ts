// Source: event-map #safety--media-waste-story
// Rationale: teaches the classification trap — dual-use constraints mean successes
//   must be hidden while failures are public. "Null results ARE results" doesn't
//   play well in congressional hearings.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "media-waste-story",
    speaker: "Investigative Journalist",
    text: "My outlet is running 'Inside the Black Hole: How ISIA Spends Your Billions.' A $180M experiment that produced null results. A $2.1M retreat in Switzerland for 40 researchers. Your top scientist's $4.2M salary. The story is well-researched and mostly accurate. What it doesn't mention are your actual successes — because those are classified for dual-use reasons. Three congressional committees are requesting hearings.",
    left: {
      label: "Declassify selected successes",
      effects: { pol: 5, alg: 5, int: -5 },
    },
    right: {
      label: "Absorb the hit — refuse to declassify",
      effects: { pol: -10, saf: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    down: {
      label: "Closed congressional briefing",
      effects: { pol: -3, int: -3 },
      disabled: state.resources.pol > 60,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
