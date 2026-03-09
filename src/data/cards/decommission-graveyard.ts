// Source: event-map #enforcement--decommission-graveyard
// Rationale: teaches that chip lifecycle monitoring must cover the unglamorous
//   retirement phase. People tasked with destroying valuable things often don't.
//   The disposal phase is vulnerable because it's underfunded.
// Dynamic: cat-and-mouse is permanent; enforcement capability consumed
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "decommission-graveyard",
    speaker: "Customs Liaison",
    text: "Annual chip lifecycle audit found a discrepancy: 23,000 chips declared 'decommissioned and destroyed' over 18 months. 40% of destruction certificates came from three disposal firms — and one went bankrupt six months ago. Its warehouse in Romania contains no destroyed chips. Either 9,200 chips were destroyed before storage with no evidence, diverted to the black market, or sitting somewhere unmonitored. Every chip scheduled for destruction is a temptation.",
    left: {
      label: "Emergency audit of all disposal contractors",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Tighten future protocols — ISIA-witnessed destruction",
      effects: { int: -3, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Check black market prices for supply spike",
      effects: { int: 3, pol: -3 },
      disabled: state.resources.int < 40,
    },
    weight: 1.5,
  }];
});
