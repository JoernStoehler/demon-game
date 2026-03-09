// Source: domain model dimension 9 (institutional dynamics)
// Rationale: teaches that institutions rot from within. Employees from different
//   opinion clusters sincerely disagree about the mission. Internal sabotage from
//   conviction, not corruption.
// Dynamic: far easier to destroy an institution than build one
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "internal-dissent",
    speaker: "Deputy Director",
    text: "Three senior inspectors refused to execute a raid order. They believe we've become 'the thing we were meant to prevent — an unaccountable surveillance state.' They're not wrong about the surveillance part. They're filing a formal complaint and talking to press contacts.",
    left: {
      label: "Suspend them",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Internal review process",
      effects: { pol: -3, int: -5 },
    },
    weight: 1.5,
  }];
});
