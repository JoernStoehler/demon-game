// Source: event-map #civil--ai-winter-narrative
// Rationale: teaches that sincere, credentialed experts can be simply wrong about
//   the technical question. Success is indistinguishable from "threat was never real."
//   Rebutting requires concepts most people can't evaluate.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "ai-winter-narrative",
    speaker: "Communications Director",
    text: "A best-selling book by a former Stanford CS professor — 'The Great Overreaction' — argues ASI was always physically impossible and the pause is an expensive hoax. Well-written, persuasive to non-technical readers, factually wrong in ways requiring deep expertise to rebut. Six talk shows this month. A documentary in pre-production. 'ASI threat was exaggerated' is up 11 points in key demographics. Our Chief Scientist can rebut the arguments, but only in ways the audience won't understand.",
    left: {
      label: "Public scientific rebuttal campaign",
      effects: { pol: -5, saf: -3 },
    },
    right: {
      label: "Ignore — engaging legitimizes the argument",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 1.5,
  }];
});
