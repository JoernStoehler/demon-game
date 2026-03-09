// Source: event-map #monitoring--consumer-hw-threshold, #era--threshold-cliff
// Rationale: teaches that the lethal threshold keeps shrinking. Each year, building
//   ASI requires less compute. Eventually consumer hardware is sufficient — at that
//   point, enforcement designed for datacenters can't monitor living rooms.
// Dynamic: time is always against you; alg progress is partly uncontrollable
// Category: late-game (alg-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.alg < 70) return [];
  return [{
    id: "consumer-hw-threshold",
    speaker: "Chief Scientist",
    text: "Algorithmic progress has reached 3.5x the 2022 baseline. At current rates, consumer gaming hardware will be sufficient for frontier training within 18 months. Our entire enforcement architecture — declared facilities, chip tracking, power monitoring — was designed for datacenter-scale compute. None of it works at consumer scale.",
    left: {
      label: "Consumer device restrictions",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Focus on software controls",
      effects: { int: -5, alg: 5 },
    },
    weight: 3,
    color: "#ef4444",
  }];
});
