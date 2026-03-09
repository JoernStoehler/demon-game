// Source: event-map #consequence--near-miss
// Rationale: teaches the fundamental paradox — classify and it becomes another
//   "nothing happened." Declassify and you prove the threat but burn sources.
// Dynamic: you can't demonstrate prevented catastrophes
// Category: consequence (follows rogue-lab-whistleblower left choice)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "rogue-lab-whistleblower" && h.choice === "left",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 1 || delay > 3) return [];
  return [{
    id: "near-miss",
    speaker: "Chief Scientist",
    text: "The raid found it. 800 undeclared chips, partially completed run at 2×10²³ FLOP. My estimate: 15% chance it would have produced ASI. Nobody outside the agency knows how close this was. Classify it and it's another 'nothing happened.' Declassify and you prove the threat — but burn every source that led here.",
    left: {
      label: "Classify — protect sources",
      effects: { int: 5, pol: -5 },
      hiddenEffects: { narrative_damage: 1 },
    },
    right: {
      label: "Declassify sanitized version",
      effects: { pol: 8, int: -10 },
    },
    weight: 10,
  }];
});
