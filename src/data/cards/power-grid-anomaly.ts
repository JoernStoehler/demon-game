// Source: event-map #enforcement--power-grid-anomaly
// Rationale: teaches that enforcement uses multiple detection layers (power draw,
//   bandwidth, thermal). Cat-and-mouse: adversaries disguise training as mining.
// Dynamic: detection methods are burned by use; speed vs. certainty
// Category: incident (3-choice, int-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "power-grid-anomaly",
    speaker: "Intelligence Analyst",
    text: "A decommissioned smelter in Norway has drawn 12 MW continuously for six weeks. Listed as cryptocurrency mining — legal and common. But its 400 Gbps internet upgrade is overkill for crypto, consistent with distributed training. Your analyst says 70% chance it's a training run.",
    left: {
      label: "Challenge inspection",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { enforcement_visibility: 2 },
    },
    right: {
      label: "Continue passive monitoring",
      effects: { int: 3, alg: 3 },
    },
    down: {
      label: "Cross-reference chip records",
      effects: { int: 5, pol: -2 },
      disabled: state.resources.int < 50,
    },
    weight: 1.5,
  }];
});
