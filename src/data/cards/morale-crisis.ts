// Source: event-map #isia--morale-crisis
// Rationale: teaches that the success trap applies internally — staff don't believe
//   in the mission because the threat is invisible. Losing people = losing capability.
// Dynamic: institutions rot from within; success looks like "nothing happened"
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "morale-crisis",
    speaker: "Head of Human Resources",
    text: "Resignation rate tripled this quarter. Exit interviews: 'Fifteen years, no visible threat. Our friends in AI make 5x our salary. We're monitoring people who aren't doing anything wrong.' The experienced investigators leaving take institutional knowledge with them.",
    left: {
      label: "Retention bonuses",
      effects: { pol: -5, int: 3 },
    },
    right: {
      label: "Recruit new idealists",
      effects: { int: -8, pol: 3 },
    },
    weight: 2,
  }];
});
