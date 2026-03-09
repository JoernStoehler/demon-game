// Source: event-map #research--biotech-proposal
// Rationale: teaches that solving alignment might require a fundamentally different
//   kind of researcher. Human cognitive enhancement is a long-shot survival pathway
//   with explosive ethical implications.
// Dynamic: the cure and the disease are the same substance
// Category: report (late-game)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "biotech-proposal",
    speaker: "Chief Scientist",
    text: "A biotech consortium proposes a 15-year program to genetically enhance human cognitive capabilities. Their pitch: enhanced researchers might solve alignment problems current humans fundamentally can't. The science is speculative but not impossible — recent gene-editing advances make it plausible. Timeline uncertain, success not guaranteed, ethics explosive. Religious organizations will revolt. But if alignment is genuinely too hard for unenhanced human intelligence, this might be the only path that doesn't require building the thing we're trying to prevent.",
    left: {
      label: "Fund it — long shot but possibly necessary",
      effects: { pol: -10, saf: 5 },
    },
    right: {
      label: "Reject — ethics backlash too severe",
      effects: { pol: -3, saf: -3 },
    },
    weight: 2,
  }];
});
