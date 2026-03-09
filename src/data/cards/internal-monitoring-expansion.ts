// Source: event-map #safety--internal-monitoring-expansion
// Rationale: teaches that scaling the safety department creates internal control
//   problems. Researchers immersed in fascinating problems experiment without
//   permission. Expansion without monitoring is expansion without control.
// Dynamic: institutions rot from within; agency can't trust itself
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "internal-monitoring-expansion",
    speaker: "Chief Scientist",
    text: "I want to expand the safety department from 340 to 600 researchers — we have genuinely promising threads that need staffing. But internal security flagged three incidents this year where junior researchers ran unauthorized experiments on personal workstations. None produced anything dangerous, but the pattern is clear: at 340 we can investigate incidents after the fact. At 600, with current monitoring budget, we can't even do that.",
    left: {
      label: "Expand to 600 now",
      effects: { saf: 8, int: -5, alg: 3 },
    },
    right: {
      label: "Freeze hiring until monitoring upgraded",
      effects: { saf: -3, int: 5, pol: -3 },
    },
    down: {
      label: "Tiered access — no compute for new hires",
      effects: { saf: 5, int: -3 },
      disabled: state.resources.int < 50,
    },
    weight: 1.5,
  }];
});
