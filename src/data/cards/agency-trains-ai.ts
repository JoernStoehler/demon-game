// Source: event-map #isia--agency-trains-ai
// Rationale: teaches the fundamental contradiction — the agency that bans training
//   runs needs to perform one itself. Credibility cost of necessary exceptions.
// Dynamic: enforcement requires the thing you're enforcing against
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "agency-trains-ai",
    speaker: "Chief Scientist",
    text: "Enforcement needs a new monitoring AI — current tools are falling behind adversary techniques. The irony: the agency that bans training runs needs to perform one itself. Research Controls says the run is technically within threshold. The optics are devastating if it leaks.",
    left: {
      label: "Approve the training run",
      effects: { int: 8, pol: -8, alg: 3 },
    },
    right: {
      label: "Use existing tools",
      effects: { int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 2,
  }];
});
