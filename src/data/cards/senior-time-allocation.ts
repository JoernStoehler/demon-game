// Source: event-map #safety--senior-time-allocation
// Rationale: teaches that safety research doesn't scale — senior researchers are
//   the bottleneck for everything and their time must be allocated between research,
//   mentoring, and public communication, all of which are load-bearing.
// Dynamic: the cure and the disease are the same substance; safety doesn't scale
// Category: report (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "senior-time-allocation",
    speaker: "Chief Scientist",
    text: "We have 12 senior alignment researchers. Four mentor juniors. Three do congressional testimony and media — they're why our funding hasn't collapsed. Five do actual research. I want to pull the communication scientists back to research. The corrigibility window is narrow and I need every mind we have. But the comms director says support for our budget will evaporate within two quarters without senior scientists explaining the work to Congress.",
    left: {
      label: "Pull comms seniors to research",
      effects: { saf: 8, pol: -10 },
    },
    right: {
      label: "Maintain current allocation",
      effects: { saf: -3, pol: -3 },
    },
    down: {
      label: "Reassign mentoring seniors instead",
      effects: { saf: 5, pol: -3 },
      hiddenEffects: { mentoring_cut: 1 },
      disabled: state.resources.pol > 60,
    },
    weight: 2,
  }];
});
