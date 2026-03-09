// Source: event-map #research--dual-use-publication
// Rationale: teaches that safety research and capability research are the same
//   substance. A paper on detecting deceptive alignment implicitly teaches how
//   to CREATE it more efficiently. Knowledge can't be unlearned.
// Dynamic: cure = disease; dual-use knowledge
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "dual-use-publication",
    speaker: "Chief Scientist",
    text: "University researcher published a paper on detecting deceptive alignment. Excellent safety work. Problem: the detection method implicitly teaches how to create deceptive alignment more efficiently. It's already on arXiv — 4,000 downloads in 48 hours.",
    left: {
      label: "Retroactive classification",
      effects: { pol: -10, saf: 3 },
    },
    right: {
      label: "Accept — update thresholds",
      effects: { alg: 8, saf: 3 },
    },
    weight: 1.5,
  }];
});
