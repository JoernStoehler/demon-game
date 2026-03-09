// Source: event-map #enforcement--billionaire-island-raid
// Rationale: teaches that enforcement actions reveal methods — next adversary hides better.
//   Also: the wealthy can bypass enforcement designed for institutions.
// Dynamic: enforcement capability is consumed by enforcement actions
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "billionaire-island",
    speaker: "Enforcement Chief",
    text: "Former tech CEO bought a private island and built an underground facility. Satellite thermal signatures suggest prohibited-scale compute. He's in a treaty nation but claiming the island is sovereign territory. Legal ambiguity aside — if we raid, we show exactly how we detect these operations.",
    left: {
      label: "Raid the facility",
      effects: { int: -8, pol: -3 },
      hiddenEffects: { enforcement_visibility: 2 },
    },
    right: {
      label: "Diplomatic pressure",
      effects: { pol: -5, int: -3 },
    },
    weight: 1.5,
  }];
});
