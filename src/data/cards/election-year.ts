// Source: event-map #political--election-year
// Rationale: teaches that elections can reverse everything. Staying neutral risks
//   losing supporters; intervening risks destroying legitimacy if discovered.
// Dynamic: 30 years of political noise; elections can end the pause overnight
// Category: political (turn-gated, recurring)

import { register } from "./registry";

register((state) => {
  // Appears every ~8 turns after turn 6
  if (state.turn < 6) return [];
  if ((state.turn - 6) % 8 > 1) return [];
  return [{
    id: "election-year",
    speaker: "Political Advisor",
    text: "Three major treaty nations hold elections this cycle. 'AI freedom' candidates are running in two of them — promising to revoke treaty commitments for AI-driven economic growth. Polling shows them competitive. We could stay neutral or quietly run risk-information campaigns.",
    left: {
      label: "Stay neutral",
      effects: { pol: -6 },
    },
    right: {
      label: "Quiet information campaign",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    weight: 2,
  }];
});
