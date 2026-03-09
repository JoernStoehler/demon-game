// Source: event-map #monitoring--surveillance-expand
// Rationale: teaches that expanding the monitoring surface is bad strategy —
//   shrinking the attack surface (consolidate chips) is better than trying to
//   track every GPU everywhere.
// Dynamic: monitoring vs. sovereignty; shrink attack surface, don't expand monitoring
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "surveillance-expand",
    speaker: "Enforcement Chief",
    text: "I'm proposing tracking firmware on ALL GPUs sold worldwide — consumer cards included. Right now we monitor roughly 50,000 chips in declared facilities. This would cover 2 million devices. Massively expands coverage. But the political advisor warns: this is mass surveillance of ordinary citizens' personal computers. Civil liberties groups will call us a surveillance state. Several nations will refuse implementation. We could close the consumer-hardware blind spot or we could keep political support. Not both.",
    left: {
      label: "Approve — cover all GPUs",
      effects: { int: 8, pol: -12 },
      hiddenEffects: { civil_liberties_pressure: 1 },
    },
    right: {
      label: "Reject — maintain political support",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
