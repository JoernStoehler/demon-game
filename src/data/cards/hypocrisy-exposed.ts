// Source: event-map #corporate--hypocrisy-exposed
// Rationale: teaches that corporate hypocrisy is structural — incentives guarantee it.
//   Companies that publicly support the pause while privately undermining it.
//   Even illicit research can produce genuine safety advances.
// Dynamic: institutions rot from within; the cure and the disease
// Category: crisis (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "hypocrisy-exposed",
    speaker: "Investigative Journalist",
    text: "Three-part series in the Financial Times: 'The Pause Profiteers.' Nexus AI — whose CEO chairs the 'Responsible AI Alliance' and appeared in our recruitment videos — ran a shadow program at a Singapore subsidiary. Multiple sub-threshold runs chained together for above-threshold results. Their internal memos call it 'threshold arbitrage.' They also donated $45M to anti-enforcement candidates while the CEO publicly called for stronger enforcement. But there's a complication: the shadow program produced a genuine corrigibility insight our team hadn't considered.",
    left: {
      label: "Prosecute aggressively — seize and classify",
      effects: { pol: 5, int: -5, saf: -5 },
    },
    right: {
      label: "Negotiate — transfer research to ISIA oversight",
      effects: { pol: -5, saf: 5, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 2,
    color: "#ef4444",
  }];
});
