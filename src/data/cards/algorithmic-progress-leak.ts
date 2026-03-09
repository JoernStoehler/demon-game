// Source: event-map #national-intelligence--algorithmic-progress-leak
// Rationale: teaches that algorithmic progress is irreversible — knowledge once
//   created can't be uncreated. Intelligence agencies can be threat actors.
// Dynamic: the lethal threshold keeps shrinking; enforcement can't control all sources
// Category: history-triggered (consequence of data-center-attack)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "data-center-attack",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 2 || delay > 4) return [];
  return [{
    id: "algorithmic-progress-leak",
    speaker: "Intelligence Analyst",
    text: "Follow-up on the data center attack. Analysis suggests the foreign actor did complete a training run during the monitoring gap. Results unknown — but checkpoint files and training data now exist somewhere in a foreign intelligence service. Not ASI-level, but the algorithmic knowledge can't be un-created. The threshold just got a little lower and we can't tell anyone why without revealing how we found out.",
    left: {
      label: "Confront the nation — demand disclosure",
      effects: { pol: -8, int: -5 },
    },
    right: {
      label: "Monitor quietly — track if knowledge propagates",
      effects: { pol: -3, int: -3, alg: 5 },
    },
    weight: 8,
  }];
});
