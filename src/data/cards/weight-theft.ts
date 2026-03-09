// Source: event-map #intelligence--weight-theft-state
// Rationale: teaches that model weights are the nightmare scenario — data can be
//   copied infinitely. Physical chips can be seized; weights cannot be un-copied.
//   State intelligence services are the main threat vector.
// Dynamic: some things can't be enforced retroactively; weights are permanent
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "weight-theft",
    speaker: "Intelligence Analyst",
    text: "A frontier lab reports catastrophic breach — their latest model's weights exfiltrated. NSA assessment: state intelligence operation, likely China. Weights from a legal training run, now in the hands of a government with no transparency obligations. You can't un-copy data.",
    left: {
      label: "Formal confrontation in Council",
      effects: { pol: -10, int: -5 },
    },
    right: {
      label: "Back-channel diplomacy",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    down: {
      label: "Present classified evidence",
      effects: { pol: -5, int: -10 },
      disabled: state.resources.int < 50,
    },
    weight: 2.5,
    color: "#ef4444",
  }];
});
