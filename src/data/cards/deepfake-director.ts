// Source: event-map #civil--deepfake-isia-director
// Rationale: teaches that sub-threshold AI (which the pause allows) can undermine the
//   political support the pause depends on. The cure creates new problems.
// Dynamic: non-ASI harms shift opinion; epistemics corrode
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "deepfake-director",
    speaker: "Press Secretary",
    text: "A deepfake video of you surfaces — convincing footage saying 'I know ASI isn't real but we need the funding.' Tens of millions of views before takedown. Our AI tools confirm it's synthetic, but the skeptics see confirmation.",
    left: {
      label: "Public rebuttal",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Ignore — responding amplifies",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    down: {
      label: "Trace the source",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { narrative_damage: -1 },
      disabled: state.resources.int < 60,
    },
    weight: 1.5,
  }];
});
