// Source: event-map #international--us-china-mutual-suspicion
// Rationale: teaches that the US-China dynamic is the central geopolitical tension.
//   Both nations are indispensable to the treaty. Both distrust each other.
//   Both may be cheating. ISIA sits between them as useful scapegoat.
// Dynamic: major power dynamics; the agency is a pawn in great-power competition
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "us-china-suspicion",
    speaker: "Diplomatic Attaché",
    text: "US ambassador wants a challenge inspection of a Chinese facility in Xinjiang — won't share intelligence sources. Two days later, China requests inspection of a US facility in Nevada — same terms. Both accusing the other. If either accusation is true, the treaty is in crisis. If neither is, both powers are using you as a weapon.",
    left: {
      label: "Inspect both simultaneously",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Pursue neither — demand own intel",
      effects: { pol: -5, int: -5 },
    },
    down: {
      label: "Deploy independent surveillance",
      effects: { int: 8, pol: -8 },
      disabled: state.resources.int < 55,
    },
    weight: 2.5,
    color: "#f97316",
  }];
});
