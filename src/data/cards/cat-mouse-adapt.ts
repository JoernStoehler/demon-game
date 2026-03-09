// Source: event-map #enforcement--cat-mouse-adapt
// Rationale: teaches the Hydra problem — disrupting smuggling networks creates
//   smaller, more resilient ones. Every raid teaches adversaries more about our
//   methods than it teaches us about theirs. Cat-and-mouse is permanent.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "cat-mouse-adapt",
    speaker: "Enforcement Chief",
    text: "After last quarter's raid on the chip smuggling ring — 2,000 chips seized, six arrests — we expected deterrence. Instead, networks adapted within weeks. Chips now arrive with serial numbers ground off, firmware reflashed with fake IDs. Routes shifted from commercial freight to private aviation and diplomatic pouches. One network breaks chips into individual units, ships through consumer electronics channels disguised as gaming GPUs, reassembles at destination. We disrupted one network and created three smaller, more resilient ones.",
    left: {
      label: "Fund chip-level PUF identification R&D",
      effects: { int: 5, pol: -5, saf: -3 },
    },
    right: {
      label: "Pivot to financial network intelligence",
      effects: { int: -3, pol: -3 },
    },
    weight: 1.5,
  }];
});
