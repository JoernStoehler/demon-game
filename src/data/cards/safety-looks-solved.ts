// Source: event-map #era--safety-looks-solved
// Rationale: teaches that sub-ASI alignment ≠ ASI alignment. When safety "looks solved,"
//   the political landscape shifts dangerously. Nations want to relax the treaty precisely
//   when the hardest part remains.
// Dynamic: game gets HARDER when safety appears achievable
// Category: crisis (era transition, saf-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.saf < 60) return [];
  // Only fire once
  if (state.history.some((h) => h.cardId === "safety-looks-solved")) return [];
  return [{
    id: "safety-looks-solved",
    speaker: "Chief Scientist",
    text: "Formal verification breakthrough for sub-ASI systems. Every major outlet: 'Alignment is solved.' My assessment: we solved the easy part. Sub-ASI alignment and ASI alignment are categorically different problems. But three nations are already lobbying to relax the treaty based on the headlines.",
    left: {
      label: "Embrace the narrative",
      effects: { pol: 12, saf: -5 },
      hiddenEffects: { narrative_damage: 2 },
    },
    right: {
      label: "Correct the record",
      effects: { pol: -10, saf: 5 },
    },
    weight: 5,
    color: "#f97316",
  }];
});
