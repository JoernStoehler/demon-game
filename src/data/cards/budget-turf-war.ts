// Source: event-map #isia--budget-turf-war
// Rationale: teaches the core tradeoff — enforcement and safety draw from the same
//   pool. Every dollar for monitoring is a dollar not spent on alignment.
// Dynamic: political power is spendable; enforcement vs. research is zero-sum
// Category: routine (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 3) return [];
  return [{
    id: "budget-turf-war",
    speaker: "Deputy Director",
    text: "Annual budget allocation. Enforcement Chief: 'Evasion techniques are outpacing us — 60% for monitoring.' Chief Scientist: 'We're three years from a safety breakthrough — 60% for research.' Both are right. Both need the money. You can't fund both at the level they need.",
    left: {
      label: "Prioritize enforcement",
      effects: { int: 8, saf: -5 },
    },
    right: {
      label: "Prioritize research",
      effects: { saf: 8, int: -5 },
    },
    weight: 2,
  }];
});
