// Source: event-map #isia--institutional-memory-loss
// Rationale: teaches that organizations forget. Competence isn't permanent.
//   The 30-year timescale means complete generational turnover. Institutional
//   knowledge degrades like a game of telephone.
// Dynamic: institutions rot from within; 30 years of political noise
// Category: report (late-game, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 12) return [];
  return [{
    id: "institutional-memory-loss",
    speaker: "Deputy Director",
    text: "Third generation of staff. The founding cohort who lived through the crisis retired years ago. Second generation learned from them. Now the third generation learned from the second. Institutional knowledge has degraded like telephone. A routine inspection team just missed a suspicious chip configuration that any founding-era inspector would have caught instantly — chips arranged for distributed training across 'innocent' facilities. An old hand in intel caught it by chance. She's retiring next month.",
    left: {
      label: "Knowledge-preservation program — pull seniors to train",
      effects: { int: -5, saf: -3, pol: -3 },
    },
    right: {
      label: "Hire the old hand as consultant",
      effects: { int: -3, pol: -3 },
    },
    down: {
      label: "Deploy AI to encode institutional pattern recognition",
      effects: { int: 5, saf: -3, alg: 3 },
      disabled: state.resources.saf < 50,
    },
    weight: 2,
  }];
});
