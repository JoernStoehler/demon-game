// Source: event-map #enforcement--inference-chip-loophole
// Rationale: teaches that the distinction between training and inference chips is
//   collapsing. Algorithmic progress allows training-equivalent workloads disguised
//   as inference. Monitoring designed for training clusters misses the new threat.
// Dynamic: enforcement can only control one of four sources of progress
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "inference-chip-loophole",
    speaker: "Chief Scientist",
    text: "Samsung's latest inference-optimized chips have different thermal profiles and power signatures than training hardware — our monitoring was designed to detect training clusters. But algorithmic advances now allow training workloads decomposed into inference-shaped operations. 800 of these chips running distributed training disguised as batch inference would pass all our checks. Samsung argues these serve a legitimate $40B inference market. My team says the distinction between 'training chip' and 'inference chip' is becoming meaningless.",
    left: {
      label: "Expand monitoring to inference chips",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Maintain training-focused monitoring",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Mandate firmware reporting on Samsung chips",
      effects: { int: 5, pol: -5 },
      disabled: state.resources.int < 40,
    },
    weight: 2,
  }];
});
