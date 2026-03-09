// Source: event-map #monitoring--chip-diversion, literature/iabied-treaty.md (Article VII)
// Rationale: teaches that chip supply chain is the central enforcement pillar.
//   Physical enforcement — chips are the bottleneck. Shrink the attack surface.
// Dynamic: shrink attack surface (consolidate chips) not expand monitoring surface
// Category: incident

import { register } from "./registry";

register((state) => {
  if (state.turn < 2) return [];
  return [{
    id: "chip-diversion",
    speaker: "Customs Liaison",
    text: "Manifest discrepancy at the TSMC packaging facility in Kumamoto. 2,400 H100 equivalents entered testing but only 2,150 reached declared facilities. Two hundred fifty chips unaccounted for — enough for a small prohibited training run if aggregated.",
    left: {
      label: "Lockdown and audit",
      effects: { int: 5, pol: -5 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Track the gap quietly",
      effects: { int: 3, pol: -2 },
    },
    weight: 1.5,
  }];
});
