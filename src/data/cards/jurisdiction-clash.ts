// Source: event-map #national-intelligence--jurisdiction-clash
// Rationale: teaches that jurisdiction friction is permanent. Even treaty allies
//   resist enforcement on their own soil. The gap between legal authority (treaty)
//   and political authority (willingness to enforce) is structural.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "jurisdiction-clash",
    speaker: "Enforcement Chief",
    text: "We've confirmed an unauthorized compute cluster in a treaty nation. Their national intelligence service claims it's a classified domestic program and invokes national security to block our inspection. Our legal team says the treaty technically overrides domestic classification, but enforcement would require a political fight with a major ally. The longer we wait, the more time they have to relocate or sanitize the facility.",
    left: {
      label: "Invoke treaty override — force inspection",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Joint inspection with national observers",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
