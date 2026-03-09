// Source: event-map #international--china-weights-deployed
// Rationale: teaches that the treaty's compute-centric enforcement model has a blind
//   spot for data. Running an existing model isn't a treaty violation — the treaty
//   regulates training runs, not inference. Structural gap, not failure of will.
// Dynamic: enforcement can only control one of four sources of progress
// Category: history-triggered (consequence of weight-theft-state)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "weight-theft-state",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 2 || delay > 5) return [];
  return [{
    id: "china-weights-deployed",
    speaker: "Intelligence Analyst",
    text: "Six months after the weight theft. China has deployed the stolen model internally — not for further training, but as an analysis and planning tool across military and economic applications. They haven't violated the training threshold. Our legal team is split: 'Possessing stolen weights isn't explicitly prohibited — the treaty regulates training runs, not inference.' China's position: 'Running an existing model isn't a treaty violation.' They're technically correct.",
    left: {
      label: "Push for treaty amendment on weight possession",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Accept the gap — focus on what we control",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 8,
  }];
});
