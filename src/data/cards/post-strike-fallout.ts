// Source: event-map #international--post-strike-fallout
// Rationale: teaches that military force has second-order political costs exceeding
//   the first-order enforcement benefit. A deterrent you actually use becomes less
//   credible, not more. Using the top of the escalation ladder damages the ladder.
// Dynamic: enforcement vs. backlash; political support IS the pause
// Category: history-triggered (consequence of airstrike-debate)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "airstrike-debate" && h.choice === "left",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 1 || delay > 3) return [];
  return [{
    id: "post-strike-fallout",
    speaker: "Diplomatic Attaché",
    text: "The airstrike succeeded — the compute cluster is destroyed. But two treaty nations with ties to the target are 'reviewing their commitments.' Strike footage is on every screen worldwide. The non-aligned movement called an emergency session. Russia introduced a UN resolution condemning us. Our diplomat reports privately: 'If this is what the treaty means, three to five members never should have signed.'",
    left: {
      label: "Double down — this is what Article XII is for",
      effects: { pol: -12, int: -5 },
    },
    right: {
      label: "Express regret, propose review of procedures",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { enforcement_visibility: -1 },
    },
    weight: 10,
    color: "#ef4444",
  }];
});
