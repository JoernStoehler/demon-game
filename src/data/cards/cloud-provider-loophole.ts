// Source: event-map #corporate--cloud-provider-loophole
// Rationale: teaches that corporations find structural workarounds, not just direct
//   opposition. Treaty language specifies per-facility limits; distributed training
//   across zones exploits the gap.
// Dynamic: monitoring designed for one architecture fails against another
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "cloud-provider-loophole",
    speaker: "Legal Counsel",
    text: "AWS distributed a training run across 14 availability zones in 9 countries. No single facility exceeds threshold. Aggregate: well above it. Treaty language says 'per-facility.' Their lawyers are right — technically. But the run is prohibited in spirit. Fix this and cloud providers sue. Ignore it and everyone does it.",
    left: {
      label: "Emergency executive order",
      effects: { pol: -10, int: 5 },
    },
    right: {
      label: "Fast-track treaty amendment",
      effects: { pol: -3, alg: 8 },
    },
    down: {
      label: "Negotiate voluntary moratorium",
      effects: { pol: -5, int: 3 },
      disabled: state.resources.pol < 35,
    },
    weight: 2,
    color: "#f97316",
  }];
});
