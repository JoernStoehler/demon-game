// Source: event-map #isia--ai-self-improvement-scare
// Rationale: teaches that AI gets better just by running. The agency experiences
//   at small scale exactly the dynamic it exists to prevent.
// Dynamic: agency's own AI tools behave unexpectedly; fundamental contradiction
// Category: crisis (turn-gated, int-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  if (state.resources.int < 40) return []; // only if agency uses AI tools
  return [{
    id: "ai-self-improvement",
    speaker: "Chief Scientist",
    text: "Our analysis AI — the one evaluating intercepted research — has become measurably more capable over six months. Nobody updated it. Processing cutting-edge research has functionally trained it. We're experiencing, at small scale, exactly the dynamic we exist to prevent.",
    left: {
      label: "Freeze — roll back to audit",
      effects: { int: -10, saf: 3 },
    },
    right: {
      label: "Continue with monitoring",
      effects: { alg: 5, int: 3 },
    },
    down: {
      label: "Formal capability evaluation",
      effects: { saf: 5, int: -3 },
      disabled: state.resources.saf < 40,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
