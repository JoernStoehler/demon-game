// Source: event-map #research--stepping-on-toes
// Rationale: teaches that safety research can't be parallelized. Adding researchers
//   creates redundancy, not progress. The hard fundamental problems bottleneck all approaches.
// Dynamic: nobody knows how hard alignment is; can't throw money at it
// Category: report (turn-gated, saf-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  if (state.resources.saf > 55) return []; // only when safety isn't progressing well
  return [{
    id: "stepping-on-toes",
    speaker: "Chief Scientist",
    text: "Quarterly safety report. Despite doubling the budget, output plateaued. Three independent teams arrived at the same result — the hard fundamental problems bottleneck all approaches. Adding researchers just creates redundancy. We can't buy our way out of this.",
    left: {
      label: "Reorganize — fewer, better teams",
      effects: { saf: 3, pol: -5 },
    },
    right: {
      label: "Diversify — try everything",
      effects: { saf: 5, int: -3 },
    },
    weight: 2,
  }];
});
