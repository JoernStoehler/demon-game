// Source: event-map #consequence--celebrity-endorsement-backfire
// Rationale: teaches that public opinion channels are unpredictable. Support from
//   unexpected sources comes with incompatible goals and can backfire.
// Dynamic: political support comes with strings; opinion shifts are chaotic
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "celebrity-endorsement",
    speaker: "Communications Director",
    text: "A globally popular musician — 300M followers — made the pause their personal cause. 'Pause World Tour,' $50M donation, apocalypse music video. Millions of new supporters. Problem: they're spreading conspiracy theories alongside real risk. Opponents now call us 'the celebrity agency.' Embrace and gain support with toxic baggage, or distance and lose the momentum.",
    left: {
      label: "Embrace the endorsement",
      effects: { pol: 8, saf: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    right: {
      label: "Distance — correct misconceptions",
      effects: { pol: -5, saf: 3 },
    },
    weight: 1.5,
  }];
});
