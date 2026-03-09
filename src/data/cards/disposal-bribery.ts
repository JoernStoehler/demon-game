// Source: event-map #monitoring--disposal-officer-bribery
// Rationale: teaches that chip lifecycle monitoring requires human integrity at
//   every link. The disposal phase is vulnerable because it's unsexy and underfunded.
// Dynamic: enforcement depends on humans who can be corrupted
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "disposal-bribery",
    speaker: "Enforcement Chief",
    text: "Internal security flagged a chip disposal officer living beyond his means. Investigation: he's been certifying destruction of chips that were actually rerouted. At least 800 'destroyed' chips are in unknown hands. The disposal pipeline — 6,000 chips per quarter — is now suspect for the last two years.",
    left: {
      label: "Full disposal audit",
      effects: { int: -8, pol: -5 },
    },
    right: {
      label: "Quietly replace and patch",
      effects: { int: -3, pol: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
