// Source: event-map #institutional--china-hawk
// Rationale: teaches that individuals can sabotage international cooperation from
//   sincere belief. Internal disagreement about methods paralyzes the agency.
// Dynamic: institutions rot from within; sincere disagreement about the mission
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "china-hawk",
    speaker: "Deputy Director",
    text: "Our deputy director — former military intelligence — has been privately undermining China negotiations. He believes cooperation with China is naive. The Chinese diplomat threatens to withdraw from talks unless he's removed. The deputy is competent, experienced, and may be right about China.",
    left: {
      label: "Remove the deputy",
      effects: { pol: 3, int: -8 },
    },
    right: {
      label: "Keep him — manage China differently",
      effects: { pol: -8, int: 3 },
    },
    weight: 1.5,
  }];
});
