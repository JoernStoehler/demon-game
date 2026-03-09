// Source: event-map #international--challenge-inspection-veto
// Rationale: teaches that the challenge inspection mechanism is political, not
//   automatic. Major powers can block inspections through Council votes. Same
//   dynamic plagued the IAEA.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "challenge-inspection-veto",
    speaker: "Intelligence Analyst",
    text: "We identified suspicious activity at a facility in a major treaty nation — thermal signatures, unusual network traffic, personnel movements consistent with a covert training operation. I invoked a challenge inspection under Article IX. The Council vote: 7-7 with one abstention. Inspection fails. Three nations that voted no have bilateral trade deals pending with the target. The intelligence goes stale within weeks — if they're running a training operation, they'll relocate once they know we suspect them.",
    left: {
      label: "Leak intelligence to force public pressure",
      effects: { pol: -10, int: -8 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Work back-channels for second vote in 30 days",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Deploy covert technical monitoring",
      effects: { int: -5, pol: -3 },
      disabled: state.resources.int < 50,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
