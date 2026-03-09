// Source: event-map #isia--rogue-internal-experiment
// Rationale: teaches that even ISIA's own safety department can go rogue. The
//   innovator's dilemma inside a bureaucracy — brilliant researchers frustrated
//   by caution, doing unauthorized work that might actually advance safety.
// Dynamic: internal sabotage from conviction; the cure and disease are the same
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "rogue-internal-experiment",
    speaker: "Deputy Director",
    text: "Internal security found four junior researchers in our safety department ran an unauthorized ML experiment. 200 consumer GPUs from a university, trained a model that — they claim — solves a core alignment subproblem. Below monitoring threshold but violated every internal protocol. And their results look genuinely promising.",
    left: {
      label: "Terminate and prosecute",
      effects: { pol: -3, saf: -5 },
    },
    right: {
      label: "Review results, discipline later",
      effects: { saf: 8, pol: -8, alg: 3 },
    },
    weight: 2,
  }];
});
