// Source: event-map #isia--ai-training-data-poisoned
// Rationale: teaches that the revolving door between agency and industry is
//   the greatest operational vulnerability. People who built the tools understand
//   them better than anyone — and might one day work for the other side.
// Dynamic: institutions rot from within; enforcement capability consumed
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "ai-training-data-poisoned",
    speaker: "Enforcement Chief",
    text: "Our monitoring AI suddenly started missing detections it previously caught. Internal security investigation: a former employee — left six months ago for an AI company — introduced subtle biases into the training data before departing. The poisoning creates blind spots matching the new employer's compute patterns. The AI has been compromised for months. Every 'clean' result during that period is now suspect. She had the skills to do this precisely because we hired the best ML engineers — who are also the most valuable to the companies we monitor.",
    left: {
      label: "Full system rebuild — audit everything",
      effects: { int: -10, pol: -5 },
    },
    right: {
      label: "Targeted patch — fix known blind spots",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 2,
    color: "#ef4444",
  }];
});
