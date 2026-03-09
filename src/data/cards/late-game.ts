// STUB — placeholder cards so the game runs while real cards are being written.

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "capability-jump",
    speaker: "Deputy Director",
    text: "A research lab just published a paper that effectively halves compute requirements for frontier models. The algorithmic threshold just shrank.",
    left: { label: "Classify the paper", effects: { pol: -8, alg: 5 } },
    right: { label: "Let it circulate", effects: { alg: 10, saf: 3 } },
    weight: 1,
  }];
});

register((state) => {
  if (state.turn < 15) return [];
  return [{
    id: "underground-network",
    speaker: "Deputy Director",
    text: "We've discovered a decentralized network of small labs, each individually below compute thresholds but collectively training something massive.",
    left: { label: "Coordinate raids", effects: { int: 10, pol: -8 }, hiddenEffects: { enforcement_visibility: 2 } },
    right: { label: "Propose treaty amendment", effects: { pol: 5, int: -3 } },
    weight: 2.5,
  }];
});

register((state) => {
  if (state.resources.saf < 70) return [];
  return [{
    id: "safety-breakthrough",
    speaker: "Deputy Director",
    text: "Safety researchers report a potential breakthrough — but validating it requires running the very models we banned.",
    left: { label: "Authorize controlled test", effects: { saf: 10, alg: 8, pol: -5 } },
    right: { label: "Too dangerous", effects: { pol: 5, saf: -3 } },
    weight: 2,
  }];
});
