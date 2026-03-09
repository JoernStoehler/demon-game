// Source: event-map #international--hostage-gambit
// Rationale: teaches that non-aligned nations use the threat of AI development as
//   leverage. Political threats vs. capability threats require different responses.
// Dynamic: nations exploit the pause for concessions
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "hostage-gambit",
    speaker: "Diplomatic Attaché",
    text: "Major non-aligned nation announces large-scale AI training unless treaty nations share semiconductor technology. Framing it as 'technological sovereignty.' Intel suggests they're years from actual capability — this is a negotiating tactic, not an imminent threat. But calling the bluff risks being wrong.",
    left: {
      label: "Call the bluff — sanctions",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Negotiate technology sharing",
      effects: { pol: -3, alg: 5, int: -5 },
    },
    weight: 2,
  }];
});
