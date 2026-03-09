// STUB — placeholder cards so the game runs while real cards are being written.

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "whistleblower" && h.choice === "left",
  );
  if (!trigger || state.turn - trigger.turn > 10) return [];
  return [{
    id: "whistleblower-fallout",
    speaker: "Deputy Director",
    text: "The lab you investigated after the whistleblower tip is suing ISIA for overreach. This could set a dangerous precedent.",
    left: { label: "Fight in court", effects: { pol: -8, int: 5 } },
    right: { label: "Settle quietly", effects: { pol: -5, int: -3 } },
    weight: 3,
  }];
});

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "whistleblower" && h.choice === "right",
  );
  if (!trigger || state.turn - trigger.turn > 10) return [];
  return [{
    id: "coverup-leak",
    speaker: "Deputy Director",
    text: "Someone leaked that you declined to protect a whistleblower. The press is running with 'ISIA ignores insider tips.'",
    left: { label: "Deny everything", effects: { pol: -8, int: 3 } },
    right: { label: "Full transparency", effects: { pol: -3, int: -5 } },
    weight: 3,
  }];
});
