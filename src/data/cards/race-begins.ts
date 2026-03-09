// Source: event-map #era--race-begins
// Rationale: teaches that political confidence ≠ technical confidence. After safety
//   "looks solved," nations start ASI programs. The pause gets HARDER, not easier.
// Dynamic: race dynamic after safety looks solved; political confidence diverges from reality
// Category: crisis (follows safety-looks-solved)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "safety-looks-solved",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 2 || delay > 5) return [];
  return [{
    id: "race-begins",
    speaker: "Diplomatic Attaché",
    text: "Two major nations have begun 'defensive ASI programs' — claiming alignment is solved so the treaty is outdated. Programs technically violate the treaty. They're daring us to enforce. If we don't, the pause is over. If we do, it's the biggest international crisis since the treaty signing.",
    left: {
      label: "Enforce the treaty",
      effects: { pol: -15, int: -8 },
    },
    right: {
      label: "Negotiate new terms",
      effects: { pol: -5, alg: 10 },
      hiddenEffects: { treaty_erosion: 2 },
    },
    weight: 8,
    color: "#ef4444",
  }];
});
