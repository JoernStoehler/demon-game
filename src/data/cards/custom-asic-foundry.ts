// Source: event-map #monitoring--custom-asic-foundry
// Rationale: teaches that supply chain chokepoints can crack. Non-treaty nations
//   can build their own chip fabs using older lithography — outside ASML controls.
// Dynamic: structural advantage erodes as adversaries route around chokepoints
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "custom-asic-foundry",
    speaker: "Intelligence Analyst",
    text: "Non-treaty nation has a domestic ASIC foundry using older lithography — no EUV, outside ASML controls. Chips are 10x less efficient than H100s but they're making thousands. Enough in aggregate for a prohibited training run. Our entire enforcement architecture assumes ASML/TSMC as chokepoints.",
    left: {
      label: "Sanctions on lithography equipment",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Update threat models",
      effects: { int: -5, alg: 5 },
    },
    weight: 2,
  }];
});
