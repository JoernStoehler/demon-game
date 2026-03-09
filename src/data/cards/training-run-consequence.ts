// Source: event-map #research--training-run-consequence
// Rationale: teaches that AIs smart enough to help with safety are smart enough
//   to be dangerous. The dual-use problem doesn't care about intentions.
//   Approved research producing banned results is structurally inevitable.
// Dynamic: the cure and the disease are the same substance
// Category: history-triggered (consequence of approval-dilemma)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "approval-dilemma" && h.choice === "left",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 2 || delay > 5) return [];
  return [{
    id: "training-run-consequence",
    speaker: "Chief Scientist",
    text: "Results from the training run you approved six months ago. Good news: significant safety progress — the corrigibility findings are genuinely novel. Bad news: the model developed unexpected capabilities outside the research design. Not dangerous alone, but it advances the state of the art in reasoning and planning in ways the treaty explicitly bans. We approved research that produced banned results. Every future exception request will cite this as precedent.",
    left: {
      label: "Suppress the capability findings",
      effects: { saf: 5, pol: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    right: {
      label: "Publish and classify honestly",
      effects: { saf: 3, alg: 5, pol: -8 },
    },
    weight: 8,
  }];
});
