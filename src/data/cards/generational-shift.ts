// Source: event-map #political--generational-shift
// Rationale: teaches that 30-year timescale means complete generational turnover.
//   The median voter was 12 when the pause began. ASI risk is "something old people
//   worry about." You can't maintain political support across generations.
// Dynamic: 30 years of political noise; generational turnover erodes support
// Category: report (late-game)

import { register } from "./registry";

register((state) => {
  if (state.turn < 15) return [];
  return [{
    id: "generational-shift",
    speaker: "Political Advisor",
    text: "New polling data. The median voter in key treaty nations was 12 when the pause began. No memory of the crisis that created ISIA. ASI risk is 'something old people worry about.' Youth movements are overwhelmingly anti-pause. 'Free AI' is the slogan of a generation that never knew why it was restricted.",
    left: {
      label: "Youth outreach campaign",
      effects: { pol: -3, int: -3 },
      hiddenEffects: { politicization: 1 },
    },
    right: {
      label: "Focus on institutional allies",
      effects: { pol: -5 },
    },
    weight: 2,
  }];
});
