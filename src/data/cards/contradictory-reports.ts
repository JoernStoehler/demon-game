// Source: event-map #intelligence--contradictory-reports
// Rationale: teaches that imperfect, contradictory intelligence is the norm.
//   The DG must make decisions with incomplete information. Information quality
//   is a strategic dimension, not a problem to solve.
// Dynamic: enforcement operates under fundamental uncertainty
// Category: routine (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 3) return [];
  return [{
    id: "contradictory-reports",
    speaker: "Intelligence Analyst",
    text: "Morning briefing, three items partially contradict: satellite data suggests a new facility in Southeast Asia. Signals intelligence says the region is clean. Human source claims facility exists but is a semiconductor fab, not training. Can't reconcile without revealing which sources we trust most.",
    left: {
      label: "Investigate in person",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "File and wait for convergence",
      effects: { int: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
