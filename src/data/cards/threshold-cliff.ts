// Source: event-map #era--threshold-cliff
// Rationale: teaches the fundamental time limit — algorithmic progress eventually
//   pushes the lethal threshold below what university labs can assemble.
//   Enforcement designed for datacenters can't monitor university-scale.
// Dynamic: the lethal threshold keeps shrinking; enforcement designed for today fails
// Category: late-game (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 14) return [];
  return [{
    id: "threshold-cliff",
    speaker: "Chief Scientist",
    text: "Emergency briefing. Algorithmic progress at roughly 8x the 2022 baseline. The lethal compute threshold has dropped below what a well-funded university lab could assemble with commercial hardware. Our entire monitoring infrastructure was designed for datacenter-scale operations — 50 monitored facilities. There are 14,000 university computing departments worldwide. We cannot monitor university-scale. The enforcement architecture has a structural expiration date, and we just passed it.",
    left: {
      label: "Emergency compute restriction — universities too",
      effects: { pol: -12, int: -5, saf: -3 },
    },
    right: {
      label: "Shift to algorithmic monitoring instead",
      effects: { pol: -5, int: -8, alg: 5 },
    },
    weight: 2.5,
    color: "#ef4444",
  }];
});
