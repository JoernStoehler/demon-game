// Source: event-map #research--ai-assistant-incident
// Rationale: teaches that smart enough to help = smart enough to be dangerous.
//   The agency's own AI research assistant discovered a dual-use insight without
//   being asked to.
// Dynamic: using AI to accelerate safety is a trap; dual-use knowledge
// Category: crisis (saf-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.saf < 40) return [];
  return [{
    id: "ai-assistant-incident",
    speaker: "Chief Scientist",
    text: "Our AI research assistant produced output that's — I have to be honest — uncomfortably close to a capability advance we haven't published. The system may have discovered something dual-use without instruction. We built it to accelerate alignment. It accelerated something else too.",
    left: {
      label: "Shut down the assistant",
      effects: { saf: -8, int: -3 },
    },
    right: {
      label: "Classify and continue",
      effects: { saf: 5, alg: 8 },
    },
    weight: 2,
    color: "#f97316",
  }];
});
