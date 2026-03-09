// Source: event-map #institutional--empire-builder
// Rationale: teaches that organizations can be destroyed by their most dedicated
//   members building fiefdoms. Empire-building driven by sincere belief, not
//   corruption. Internal fractures waste resources.
// Dynamic: institutions rot from within
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "empire-builder",
    speaker: "Deputy Director",
    text: "The enforcement division quietly expanded from 200 to 1,800 staff over eight years. Division chief argues every expansion was justified. But a leaked org chart shows: enforcement now has its own intelligence unit, its own communications team, its own political liaisons — duplicating central functions. It's become an agency within the agency. The division chief isn't corrupt. She's a genuine believer who thinks enforcement is the only thing that matters and didn't trust the rest of us to prioritize it.",
    left: {
      label: "Reorganize — merge duplicated functions",
      effects: { int: -5, pol: -3 },
    },
    right: {
      label: "Formalize the split — give enforcement autonomy",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 1.5,
  }];
});
