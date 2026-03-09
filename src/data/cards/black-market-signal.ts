// Source: event-map #monitoring--black-market-signal
// Rationale: teaches that market signals are intelligence. Black market chip prices
//   tripling means demand from unauthorized actors is outpacing interdiction.
//   Winning battles but losing the war.
// Dynamic: cat-and-mouse never ends; enforcement can't control everything
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "black-market-signal",
    speaker: "Customs Liaison",
    text: "Black market H100-equivalent prices tripled this quarter. Demand from unauthorized actors is outpacing our interdiction capacity. We're seizing more chips than ever and it's not enough. The enforcement chief's assessment: 'We're winning battles but losing the war on supply chain control.'",
    left: {
      label: "Increase interdiction resources",
      effects: { int: 3, pol: -5 },
    },
    right: {
      label: "Focus on the big buyers",
      effects: { int: -3, pol: -2 },
    },
    weight: 1.5,
  }];
});
