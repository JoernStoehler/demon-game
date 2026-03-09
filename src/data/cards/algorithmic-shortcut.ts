// Source: domain model dimension 6 (algorithmic progress)
// Rationale: teaches that algorithmic progress happens from multiple uncontrollable
//   sources. Theory papers, small experiments, and AI self-improvement can't be banned.
//   Only large training runs (via chip tracking) are controllable.
// Dynamic: lethal threshold keeps shrinking; enforcement designed for today becomes
//   inadequate tomorrow
// Category: late-game (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "algorithmic-shortcut",
    speaker: "Chief Scientist",
    text: "Three independent university groups published papers this quarter that collectively reduce frontier training requirements by 40%. All used small-scale experiments under the compute threshold — perfectly legal. The lethal compute threshold just dropped significantly. Our chip-tracking enforcement was designed for last year's numbers. The research community is celebrating openly — they see this as proof the compute cap doesn't slow real progress.",
    left: {
      label: "Lower compute threshold",
      effects: { pol: -10, int: 5, alg: 3 },
    },
    right: {
      label: "Update monitoring only",
      effects: { pol: -3, int: 3, alg: 8 },
    },
    weight: 2,
  }];
});
