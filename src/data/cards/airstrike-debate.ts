// Source: event-map #international--airstrike-debate
// Rationale: teaches that the escalation ladder is real. Military force as last resort
//   creates destabilizing dynamics. "The treaty says we can" ≠ "we can do this."
// Dynamic: enforcement escalation; military force creates its own problems
// Category: crisis (late-game, int-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 15) return [];
  if (state.resources.int < 30) return [];
  return [{
    id: "airstrike-debate",
    speaker: "NATO Liaison",
    text: "Diplomacy failed against a confirmed large-scale compute cluster in a non-treaty state. The Security Council referred it for protective action. The US Joint Chiefs have a strike plan — precision airstrikes on the facility's power infrastructure. China abstains. If it escalates into conventional conflict, does the pause survive?",
    left: {
      label: "Authorize the strike",
      effects: { pol: -15, int: 5 },
    },
    right: {
      label: "Sanctions and covert sabotage",
      effects: { pol: -5, int: -5, alg: 5 },
    },
    down: {
      label: "Cyber operation",
      effects: { int: -8, pol: -3 },
      hiddenEffects: { enforcement_visibility: 2 },
      disabled: state.resources.int < 50,
    },
    weight: 3,
    color: "#ef4444",
  }];
});
