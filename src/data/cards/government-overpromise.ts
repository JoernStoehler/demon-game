// Source: event-map #safety--government-overpromise
// Rationale: teaches that politicians create expectation traps. Once the public
//   believes alignment is nearly solved, the pause becomes politically unsustainable.
//   When year five arrives and it's not solved, credibility collapses.
// Dynamic: political support IS the pause; you can't demonstrate prevented catastrophes
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "government-overpromise",
    speaker: "Political Advisor",
    text: "The German Chancellor announced to the Bundestag: 'Thanks to ISIA, we are within five years of solving alignment.' Your Chief Scientist is furious — her actual assessment is that core ASI problems are no closer to solution. The Chancellor's office telephone-gamed a sub-problem timeline into 'five years to solve everything.' Six nations are now lobbying for a sunset date on the pause. Two AI companies announced 'post-pause readiness programs.' The public has a countdown clock in their heads.",
    left: {
      label: "Public correction — contradict the Chancellor",
      effects: { pol: -10, saf: 3 },
    },
    right: {
      label: "Quiet diplomacy — walk it back gradually",
      effects: { pol: -3, saf: -5 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 2,
  }];
});
