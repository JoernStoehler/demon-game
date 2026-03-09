// Source: event-map #international--weight-theft-state
// Rationale: teaches that model weights are the nightmare scenario — data can be
//   copied infinitely and once stolen cannot be recovered. Physical chips can be
//   seized; weights cannot be un-copied. The treaty was designed around compute,
//   not data.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "weight-theft-state",
    speaker: "Intelligence Analyst",
    text: "A treaty-compliant frontier lab reports a catastrophic security breach. Their latest model's weights — product of a legally sanctioned training run — have been exfiltrated. Joint forensics with NSA confirm: this was a state intelligence service operation, almost certainly China's MSS. The weights represent the most capable AI system in existence. China denies everything. The weights are just data. Once copied, they cannot be un-copied. China now has them.",
    left: {
      label: "Formal confrontation in Executive Council",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Back-channel diplomacy — negotiate monitoring",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    down: {
      label: "Present classified evidence at emergency session",
      effects: { pol: -5, int: -10 },
      disabled: state.resources.int < 60,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
