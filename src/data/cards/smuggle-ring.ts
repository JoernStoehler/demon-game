// Source: event-map #monitoring--smuggle-ring
// Rationale: teaches the fundamental asymmetry: catch this batch (short-term gain)
//   or map the full network (long-term advantage). Enforcement reveals methods
//   either way.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "smuggle-ring",
    speaker: "Customs Liaison",
    text: "Interpol identified a chip smuggling network — 2,000 H100-equivalents unaccounted for across five countries, moved through shell companies. Enough for a serious training run if concentrated. We can seize the chips now by raiding the warehouses, but that alerts the network and they scatter. Or we let some chips move while we map the full organization — buyers, routes, financiers. Every day we wait, chips get closer to wherever they're going.",
    left: {
      label: "Seize now — raid the warehouses",
      effects: { int: -5, pol: 3 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Map the network — let chips move",
      effects: { int: -3, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
