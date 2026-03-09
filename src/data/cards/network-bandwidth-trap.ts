// Source: event-map #enforcement--network-bandwidth-trap
// Rationale: teaches that AI monitoring tools produce false positives that cost real
//   resources. The asymmetry: investigation is expensive, evasion is cheap.
//   Distinguishing legitimate high-compute commercial activity from unauthorized
//   training is structurally hard.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "network-bandwidth-trap",
    speaker: "Enforcement Chief",
    text: "Our network monitoring AI flagged coordinated high-bandwidth traffic across four Southeast Asian countries — 94% confidence it's a distributed training run. I've mobilized raid teams in Thailand, Vietnam, Malaysia, and Indonesia. $2M operation, two weeks of enforcement capacity. Then network analysis raised a concern: the traffic pattern also matches a new distributed rendering farm for a Vietnamese film studio. Our AI's training data didn't include cross-border creative industry patterns.",
    left: {
      label: "Proceed with raids",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Delay — investigate the film studio explanation",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Run second-opinion analysis with updated baselines",
      effects: { int: -3, pol: -3 },
      disabled: state.resources.saf < 50,
    },
    weight: 1.5,
  }];
});
