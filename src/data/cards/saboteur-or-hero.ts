// Source: event-map #isia--saboteur-or-hero
// Rationale: teaches that employees from different opinion clusters sincerely disagree
//   about the mission. Internal sabotage from conviction, not corruption.
// Dynamic: the agency is made of people who disagree about what the agency should do
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "saboteur-or-hero",
    speaker: "Deputy Director",
    text: "A senior enforcement officer tipped off a foreign government about an upcoming inspection. They moved equipment before inspectors arrived. Her explanation: 'That facility was doing legitimate safety research. Your AI flagged it wrong. I saved us from destroying vital work.' Internal security caught her. She may be right about the facility.",
    left: {
      label: "Prosecute — discipline first",
      effects: { pol: -3, int: 3 },
    },
    right: {
      label: "Review the AI's judgment",
      effects: { int: -5, saf: 3 },
    },
    weight: 1.5,
  }];
});
