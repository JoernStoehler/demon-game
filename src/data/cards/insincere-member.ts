// Source: event-map #international--insincere-member
// Rationale: teaches that some nations join treaties insincerely — for the benefits,
//   not the commitments. Known pattern from nuclear nonproliferation. Enforcing
//   against a member is politically costlier than against a non-member.
// Dynamic: enforcement vs. backlash; institutions rot from within
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 9) return [];
  return [{
    id: "insincere-member",
    speaker: "Intelligence Analyst",
    text: "A mid-sized treaty nation — joined with great fanfare six years ago — has been running a shadow program the entire time. Signed the treaty for technology-sharing provisions and prestige, never intended to comply. Our evidence: chips diverted from declared facilities, parallel procurement through non-treaty intermediaries, military-classified research team beyond ISIA access. Evidence is strong but not airtight. They fund us significantly and host two regional offices. If we confront them, they may withdraw and encourage other wavering members.",
    left: {
      label: "Private ultimatum — dismantle or face exposure",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Go public — present evidence to Council",
      effects: { pol: -10, int: -5 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    down: {
      label: "Amnesty deal — they admit overreach, accept inspections",
      effects: { pol: -3, int: 3 },
      hiddenEffects: { treaty_erosion: 1 },
      disabled: state.resources.pol > 60,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
