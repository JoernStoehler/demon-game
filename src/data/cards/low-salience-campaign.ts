// Source: event-map #civil--low-salience-campaign
// Rationale: teaches that 38% of the population doesn't think about AI at all.
//   Activating them is a gamble — the agency can't control what conclusions
//   newly-attentive people reach. The indifferent cluster is the biggest reservoir
//   of both potential support and potential opposition.
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "low-salience-campaign",
    speaker: "Communications Director",
    text: "38% of treaty-nation populations are in the indifferent cluster — AI is not a topic they think about. They vote on other issues. Politicians know their AI-indifferent constituents won't punish them for cutting our budget. I have two proposals: a $200M personal-relevance campaign framing ASI risk through things people already care about — their children, their savings. Or we do nothing. The indifferent cluster has no reason to oppose us. But activating them might produce more skeptics than supporters.",
    left: {
      label: "Launch the awareness campaign",
      effects: { pol: -5, saf: -3 },
    },
    right: {
      label: "Let sleeping dogs lie",
      effects: { pol: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 1.5,
  }];
});
