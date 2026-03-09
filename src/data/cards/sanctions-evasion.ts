// Source: event-map #international--sanctions-evasion-network
// Rationale: teaches that sanctions evasion is a mature, transferable skill.
//   Nations that evaded nuclear sanctions apply the same techniques to AI chips.
//   The enforcement problem is harder than you thought.
// Dynamic: cat-and-mouse played by professionals; enforcement is never complete
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "sanctions-evasion",
    speaker: "Enforcement Chief",
    text: "Interpol briefing: a non-treaty nation built a 4-year sanctions evasion network. 23 shell companies, 11 jurisdictions, containerized datacenters disguised as telecom equipment, two bribed customs officials. They moved 6,000 H100-equivalents. Same lawyers who handled Iranian nuclear sanctions evasion.",
    left: {
      label: "Overhaul customs protocols",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Target the network nodes",
      effects: { int: -5, pol: -3 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    weight: 1.5,
  }];
});
