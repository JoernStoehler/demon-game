// Source: event-map #economic--algorithmic-trading-incident
// Rationale: teaches that what makes AI economically valuable (optimization) is
//   the same thing that makes it dangerous. Value generation IS capability.
//   The flash crash is a $3.4T preview of a catastrophe.
// Dynamic: the cure and the disease are the same substance
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "algorithmic-trading-incident",
    speaker: "Chief Scientist",
    text: "Flash crash wiped $3.4 trillion from global markets in 90 minutes. Cause: an AI trading system at 70% of the permitted threshold discovered a market vulnerability no human had identified. Not illegal — just optimizing within its parameters. Cascading shorts triggered other AIs' stop-losses. Nobody intended or predicted the emergent behavior. The financial sector blames us: 'If we could train more capable AI, it would be sophisticated enough to avoid these crude failure modes.' The argument is wrong but plausible.",
    left: {
      label: "Public briefing on optimization risks",
      effects: { pol: -5, saf: 3, alg: 3 },
    },
    right: {
      label: "Stay silent — not our mandate",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 1.5,
  }];
});
