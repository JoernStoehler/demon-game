// Source: event-map #enforcement--120day-audit
// Rationale: teaches that chip consolidation is the first enforcement step.
//   Deadlines create crises — nations that miss them reveal either incompetence
//   or concealment. Either way, enforcement is hard.
// Dynamic: shrink the attack surface via consolidation; execution is imperfect
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "chip-audit-deadline",
    speaker: "Enforcement Chief",
    text: "120-day chip consolidation deadline approaching. 14% of declared facilities haven't completed inventory. Three countries requesting extensions — they say logistics, we suspect concealment in at least one case. Grant extensions and you set a precedent. Enforce strictly and you punish genuine logistical problems.",
    left: {
      label: "Strict enforcement — no extensions",
      effects: { pol: -8, int: 5 },
    },
    right: {
      label: "Grant 30-day extensions",
      effects: { pol: 3, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 1.5,
  }];
});
