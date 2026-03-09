// Source: event-map #economic--ai-gdp-dependency
// Rationale: teaches that sub-threshold AI becomes economically embedded.
//   The longer the pause runs, the harder it is to tighten restrictions
//   because the economy depends on what's already permitted.
// Dynamic: economic cost of the pause is real and grows over time
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "ai-gdp-dependency",
    speaker: "Finance Director",
    text: "New economic data: sub-threshold AI now accounts for 31% of GDP across treaty nations. Industries built around permitted AI are lobbying hard against any threshold reduction. 'You can't lower the limit without triggering a recession.' They're probably right.",
    left: {
      label: "Accept the dependency",
      effects: { pol: 5, alg: 5 },
    },
    right: {
      label: "Begin gradual restrictions",
      effects: { pol: -10, alg: -3 },
    },
    weight: 1.5,
  }];
});
