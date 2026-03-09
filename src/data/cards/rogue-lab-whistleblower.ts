// Source: event-map #intelligence--rogue-lab-whistleblower
// Rationale: teaches the first-try problem. Raids reveal methods; slow verification
//   risks the run completing. Every enforcement action is a gamble.
// Dynamic: speed vs. certainty, enforcement capability consumed by enforcement actions
// Category: crisis (chain starter)

import { register } from "./registry";

register(() => [{
  id: "rogue-lab-whistleblower",
  speaker: "Enforcement Chief",
  text: "Whistleblower inside Nexus Computing claims they're running unauthorized training at night using undeclared chips hidden in a legitimate datacenter. She's credible — senior engineer, no grudge, terrified of retaliation. But if we raid and she's wrong, we've burned inspection methods and credibility on a false alarm.",
  left: {
    label: "Immediate raid",
    effects: { int: -8, pol: -3 },
    hiddenEffects: { enforcement_visibility: 10 },
  },
  right: {
    label: "Gather more intelligence first",
    effects: { int: 3, alg: 3 },
  },
  weight: 2,
}]);
