// Source: event-map #institutional--mission-drift-decade
// Rationale: teaches that bureaucratic inertia is structural, not a failure of
//   leadership. Organizations drift toward compliance paperwork and away from
//   their actual mission over time.
// Dynamic: institutions rot from within through slow gravitational pull
// Category: report (late-game)

import { register } from "./registry";

register((state) => {
  if (state.turn < 12) return [];
  return [{
    id: "mission-drift",
    speaker: "Ethics Watchdog",
    text: "Internal audit after 12 years. Findings: 40% of enforcement staff now spend most time on compliance paperwork for permitted AI — not detecting unauthorized training. Budget for monitoring rogue actors is down 25% while compliance grew 300%. We're becoming a rubber-stamp agency by institutional drift.",
    left: {
      label: "Major reorganization",
      effects: { int: 5, pol: -8 },
    },
    right: {
      label: "Incremental rebalancing",
      effects: { int: -3, pol: -3 },
    },
    weight: 2,
  }];
});
