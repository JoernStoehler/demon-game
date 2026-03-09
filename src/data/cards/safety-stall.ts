// Source: event-map #safety--three-year-stall
// Rationale: teaches that nobody knows how hard alignment is. Could take decades
//   or millennia. Can't parallelize (stepping-on-toes). Can't hire experts
//   (the expertise doesn't exist yet).
// Dynamic: safety progress is uncertain and may stall indefinitely
// Category: report (turn-gated, saf check)

import { register } from "./registry";

register((state) => {
  if (state.turn < 12) return [];
  if (state.resources.saf > 60) return []; // only appears when safety isn't progressing fast
  return [{
    id: "safety-stall",
    speaker: "Chief Scientist",
    text: "Third consecutive annual review with no meaningful progress on formal verification of alignment. The fundamental problems remain open. Our best researchers say 'we don't even know what we don't know.' Meanwhile, the algorithmic threshold keeps shrinking. We're in a race we might not be able to win.",
    left: {
      label: "Double research funding",
      effects: { pol: -5, saf: 5 },
    },
    right: {
      label: "Diversify approaches",
      effects: { saf: 3, int: -3 },
    },
    weight: 2,
  }];
});
