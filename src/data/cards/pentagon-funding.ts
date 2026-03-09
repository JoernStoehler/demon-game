// Source: event-map #safety--funding-deal-pentagon
// Rationale: teaches that the agency itself needs funding, and funding comes with
//   strings. Military funding accelerates safety but also capability, and creates
//   political dependency on defense establishment.
// Dynamic: every resource comes with hidden costs and dependencies
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "pentagon-funding",
    speaker: "Finance Director",
    text: "The US Department of Defense is offering $2.8 billion for ISIA's alignment research program — triple our current budget. The catch: they want access to intermediate results, priority hiring of their nominees, and a seat on the research steering committee. It's the most money anyone has ever offered for safety research.",
    left: {
      label: "Accept the deal",
      effects: { saf: 8, pol: -5, alg: 3 },
      hiddenEffects: { military_dependency: 1 },
    },
    right: {
      label: "Decline — too many strings",
      effects: { pol: 3, saf: -3 },
    },
    weight: 1.5,
  }];
});
