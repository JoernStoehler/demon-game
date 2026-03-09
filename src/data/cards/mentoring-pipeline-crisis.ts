// Source: event-map #safety--mentoring-pipeline-crisis
// Rationale: teaches that safety doesn't scale by hiring. Senior researchers are the
//   bottleneck and can't be produced faster. The pipeline math requires centuries
//   unless something fundamental changes. Mentoring competes directly with research.
// Dynamic: the lethal threshold keeps shrinking; safety doesn't scale
// Category: report (late-game, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "mentoring-pipeline-crisis",
    speaker: "Chief Scientist",
    text: "Annual workforce report. Five years in, we have 12 senior alignment researchers. We started with 11. One recruited, two developed from mentoring, two retired from burnout — one now teaches kindergarten, calls it 'more tractable than corrigibility.' The pipeline produces 0.4 net new seniors per year. My estimate for solving alignment: over ten thousand philosopher-years of serial senior-equivalent work. At 12 seniors, that's 833 years assuming no attrition and no wrong turns. We need either a way to make mentoring more efficient or a way to make the research easier. I don't have either.",
    left: {
      label: "Double mentoring allocation",
      effects: { saf: -5, pol: -3 },
      hiddenEffects: { mentoring_cut: -1 },
    },
    right: {
      label: "Optimize current seniors' output",
      effects: { saf: -3, pol: -3 },
    },
    down: {
      label: "Build AI research-amplification tools",
      effects: { saf: 5, alg: 5, int: -3 },
      disabled: state.resources.saf < 60,
    },
    weight: 2,
  }];
});
