// Source: event-map #civil--protest-to-legislator-pipeline
// Rationale: teaches that democratic accountability and existential risk management
//   are genuinely in tension. The agency can't survive without democratic legitimacy
//   and can't do its job within the constraints democracy imposes.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: political (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  if ((state.hidden.civil_liberties_pressure ?? 0) < 1) return [];
  return [{
    id: "protest-to-legislator",
    speaker: "Political Advisor",
    text: "Street protests against ISIA surveillance in Berlin, London, and Washington crossed a threshold. Three European parliamentary caucuses and a bipartisan US Senate group introduced coordinated legislation to strip our domestic surveillance authority. 40% poll approval. The surveillance powers being challenged are genuinely important for enforcement. The people challenging them have genuinely legitimate civil liberties concerns. Democracy is functioning correctly — and it might kill everyone.",
    left: {
      label: "Lobby against the bills",
      effects: { pol: -8, int: 3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Propose independent oversight board",
      effects: { pol: -3, int: -5 },
    },
    down: {
      label: "Declassify a recent surveillance success",
      effects: { pol: 3, int: -8 },
      disabled: state.resources.int > 60,
    },
    weight: 2,
  }];
});
