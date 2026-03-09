// Source: event-map #safety--university-consortium-demand
// Rationale: teaches that centralizing safety research creates bureaucratic bottlenecks,
//   but decentralizing it enables uncontrolled algorithmic progress through
//   "purely theoretical" papers that turn out to be dual-use.
// Dynamic: research suppression vs. innovation; the cure and the disease
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "university-consortium-demand",
    speaker: "Chief Scientist",
    text: "Fourteen universities — MIT, Oxford, Tsinghua, ETH Zurich — published an open letter with 2,200 signatories demanding we return alignment research to academia. They cite three cases where our classification system blocked papers they call 'purely theoretical.' They want a federated model: universities run their own programs under our guidelines but without pre-publication review. I've seen the classified intelligence on how 'purely theoretical' papers were used to accelerate capability research. The academics haven't.",
    left: {
      label: "Two-tier system — free theory, review experiments",
      effects: { pol: 5, saf: 3, alg: 5 },
    },
    right: {
      label: "Refuse — maintain centralized control",
      effects: { pol: -8, saf: -3 },
    },
    down: {
      label: "Share declassified case studies",
      effects: { pol: 3, int: -5, alg: 3 },
      disabled: state.resources.int < 40,
    },
    weight: 2,
  }];
});
