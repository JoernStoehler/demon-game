// Source: event-map #national-intelligence--defector-offer
// Rationale: teaches the cost of uncertainty in intelligence work. HUMINT is
//   fragile — contacts disappear if you demand proof before committing.
//   Intelligence quality is always uncertain.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "defector-offer",
    speaker: "Intelligence Analyst",
    text: "Anonymous contact inside a foreign intelligence service claims their government is secretly funding ASI research through a front company. Demands asylum and $5 million. Our assessment: plausible but unverified. If genuine, this is the biggest lead in years — a state-sponsored program we didn't know existed. If it's a setup, we've been played and the money is gone. The contact says we have 48 hours before they go to a different buyer.",
    left: {
      label: "Pay and grant asylum",
      effects: { pol: -5, int: 8 },
    },
    right: {
      label: "Demand verification first",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
