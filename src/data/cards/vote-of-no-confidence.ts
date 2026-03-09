// Source: event-map #isia--vote-of-no-confidence
// Rationale: teaches that the agency exists at politicians' discretion — including
//   the DG's own position. Competent leadership can be replaced by political appointees.
// Dynamic: far easier to destroy an institution than build one
// Category: crisis (pol-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.pol >= 30) return [];
  // Only fire once per game
  if (state.history.some((h) => h.cardId === "vote-of-no-confidence")) return [];
  return [{
    id: "vote-of-no-confidence",
    speaker: "Deputy Director",
    text: "Three council members tabled a no-confidence motion. Publicly: 'operational failures.' Privately: you refused their corporations compute exemptions. Vote in 72 hours. If it passes, you're replaced — and they choose your successor.",
    left: {
      label: "Lobby wavering members",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Resign — name your deputy",
      effects: { pol: -3, saf: -5 },
    },
    down: {
      label: "Leak their corporate ties",
      effects: { pol: 5, int: -8 },
      disabled: state.resources.int < 40,
    },
    weight: 5,
    color: "#ef4444",
  }];
});
