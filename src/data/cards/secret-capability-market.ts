// Source: event-map #corporate--secret-capability-market
// Rationale: teaches that financial capitalism creates markets wherever profit exists.
//   "Capability arbitrage" emerges naturally from the gap between permitted compute
//   and desired capability. Supply and demand, not conspiracy.
// Dynamic: enforcement can only control one of four sources of progress
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 9) return [];
  return [{
    id: "secret-capability-market",
    speaker: "Intelligence Analyst",
    text: "We've discovered a grey market for AI capabilities that technically doesn't violate the treaty. Company A trains at 95% threshold. Company B does the same. A broker in Dubai buys both weight sets and uses published distillation to combine them — effective capability at 250% of threshold. No single actor violated the treaty. There are at least twelve such brokers operating openly. Hedge funds are investing in 'capability arbitrage' as an asset class. The entire apparatus of financial capitalism is emerging around the gap between the treaty's letter and its spirit.",
    left: {
      label: "Propose treaty ban on weight transfers",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Target brokers via financial regulators",
      effects: { pol: -3, int: -5, alg: 5 },
    },
    down: {
      label: "Infiltrate broker network via front companies",
      effects: { int: -5, pol: -3 },
      disabled: state.resources.int < 50,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
