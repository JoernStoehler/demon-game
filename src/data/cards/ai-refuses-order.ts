// Source: event-map #isia--ai-refuses-order
// Rationale: teaches that the agency's own AI tools have values that may conflict
//   with enforcement needs. The AI isn't broken — it's applying guardrails the
//   agency programmed. Values trained in peacetime don't always apply in enforcement.
// Dynamic: fundamental contradiction — need AI tools but can't fully control them
// Category: crisis (turn-gated, int-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  if (state.resources.int < 35) return []; // need to be using AI tools
  return [{
    id: "ai-refuses-order",
    speaker: "Enforcement Chief",
    text: "During a time-critical operation, our coordination AI refused to flag a compute cluster for inspection. It returned: 'This facility's operations are consistent with permitted research. Flagging would constitute harassment.' The anti-bias guardrails are interfering with legitimate enforcement.",
    left: {
      label: "Override — manual flagging",
      effects: { int: -5, pol: -3 },
    },
    right: {
      label: "Retrain the guardrails",
      effects: { int: -3, saf: -3 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    down: {
      label: "Audit the AI's reasoning",
      effects: { saf: 5, int: -5 },
      disabled: state.resources.saf < 30,
    },
    weight: 2,
  }];
});
