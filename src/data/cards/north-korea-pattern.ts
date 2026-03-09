// Source: event-map #intelligence--north-korea-pattern
// Rationale: teaches that determined actors find ways despite global cooperation.
//   Same pattern as nuclear proliferation. Attacker only needs to succeed once.
// Dynamic: enforcement can only control some sources; determined actors persist
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "north-korea-pattern",
    speaker: "Intelligence Analyst",
    text: "Briefing: a non-treaty nation acquired 4,000 H100-equivalents through intermediary networks over three years. Not enough for ASI yet, but the trend is clear. Same procurement pattern as their nuclear program — same shell companies, same front organizations. They've done this before.",
    left: {
      label: "Targeted interdiction",
      effects: { int: -5, pol: -5 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Diplomatic containment",
      effects: { pol: -3, int: -3 },
    },
    weight: 1.5,
  }];
});
