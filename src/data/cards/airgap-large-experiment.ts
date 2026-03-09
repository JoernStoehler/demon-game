// Source: event-map #safety--airgap-large-experiment
// Rationale: teaches that ISIA's own safety experiments require preconditions (airgap,
//   threshold intelligence) that cost time and money. Skipping preconditions risks
//   the experiment itself becoming an existential threat.
// Dynamic: the cure and the disease are the same substance
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "airgap-large-experiment",
    speaker: "Chief Scientist",
    text: "I want to run our largest safety experiment yet — training a model at 2×10²³ FLOP to test a corrigibility hypothesis. But our airgap facility was built for experiments ten times smaller. Upgrading costs $400M and eight months. Without the upgrade, if the airgap fails, algorithmic insights leak into the broader ML community. And we're still not confident where the lethal compute threshold actually sits — our estimate has wide error bars.",
    left: {
      label: "Delay for proper airgap",
      effects: { saf: -5, pol: -3 },
    },
    right: {
      label: "Run in existing facility",
      effects: { saf: 8, alg: 5, int: -3 },
    },
    down: {
      label: "Staged protocol — start small",
      effects: { saf: 5, pol: -3, int: -5 },
      disabled: state.resources.int < 40,
    },
    weight: 2,
  }];
});
