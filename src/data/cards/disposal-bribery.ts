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
    speaker: "Deputy Director",
    text: "Internal security flagged a chip disposal officer living beyond his means. His GPS tracker was disabled for 2-4 hours on eleven destruction runs this year — estimated 1,400 chips that could have been diverted instead of destroyed. He has 14 years of clean service. He processed chips alone because the two-person verification protocol was suspended six months ago to save money. That budget cut was your decision.",
    left: {
      label: "Arrest and prosecute publicly",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Quiet removal — restore protocols",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
