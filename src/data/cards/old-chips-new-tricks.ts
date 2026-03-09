// Source: event-map #monitoring--old-chips-new-tricks
// Rationale: teaches that the lethal threshold keeps shrinking. Older-generation chips
//   that were below monitoring threshold when the treaty was signed are now dangerous
//   due to algorithmic progress.
// Dynamic: time is always against you; attack surface expands despite best efforts
// Category: report (alg-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.alg < 50) return [];
  return [{
    id: "old-chips-new-tricks",
    speaker: "Chief Scientist",
    text: "Algorithmic progress at 4x 2022 efficiency means older chips — A100s, V100s, even consumer RTX 4090s — are now above the effective training threshold. Millions of unmonitored older GPUs worldwide just became potential weapons. The monitoring architecture was designed for frontier hardware only.",
    left: {
      label: "Expand monitoring to old chips",
      effects: { pol: -10, int: -5 },
    },
    right: {
      label: "Focus on frontier — accept the gap",
      effects: { alg: 5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 2,
  }];
});
