// Source: event-map #enforcement--cops-refuse-gpu-search
// Rationale: teaches that domestic enforcement agents don't want to search houses
//   for GPUs. Political costs of residential enforcement are extreme.
// Dynamic: enforcement at consumer scale is politically impossible
// Category: crisis (turn-gated, alg-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  if (state.resources.alg < 45) return [];
  return [{
    id: "cops-refuse-search",
    speaker: "Enforcement Chief",
    text: "We identified 14 addresses in the American Midwest with anomalous power draw suggesting unauthorized compute in residential basements. Local police refuse to execute search warrants. 'We're not raiding families over computer chips.' County sheriffs going on TV calling us 'the GPU Gestapo.'",
    left: {
      label: "Federal agents instead",
      effects: { pol: -12, int: 5 },
      hiddenEffects: { civil_liberties_pressure: 2 },
    },
    right: {
      label: "Drop residential enforcement",
      effects: { pol: -3, int: -8 },
    },
    weight: 2,
    color: "#ef4444",
  }];
});
