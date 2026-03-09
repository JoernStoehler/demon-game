// Source: event-map #safety--rogue-internal-experiment
// Rationale: teaches the innovator's dilemma inside a bureaucracy — the same initiative
//   that produces breakthroughs also produces uncontrolled risk. Best researchers
//   may not follow rules. Punishing initiative deters future breakthroughs.
// Dynamic: institutions rot from within; the cure and the disease
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "rogue-internal-experiment",
    speaker: "Enforcement Chief",
    text: "Internal security caught four junior researchers who ran an unauthorized experiment overnight — 200 consumer GPUs cobbled from a university partnership, below any compute threshold, perfectly safe in isolation. Their team leader is defiant: 'The classification review takes nine months. The alignment problem doesn't wait for bureaucracy.' The experiment was small enough to be safe. But if four juniors can do this, so can forty. And not all will be as careful. The finding they produced is, by initial assessment, genuinely significant.",
    left: {
      label: "Discipline — suspensions, example set",
      effects: { saf: -5, int: 5, pol: -3 },
    },
    right: {
      label: "Quietly incorporate the result",
      effects: { saf: 5, int: -5, alg: 3 },
    },
    down: {
      label: "Use incident to justify expanded monitoring",
      effects: { int: 8, saf: 3, pol: -5 },
      disabled: state.resources.int > 60,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
