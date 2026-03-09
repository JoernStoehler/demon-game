// Source: event-map #ai--false-positive-cascade
// Rationale: teaches that agency AI is not fully reliable. Overwhelming false positives
//   either exhaust enforcement capacity or force accepting risk in the noise.
// Dynamic: surveillance AI hiccups; can't investigate everything
// Category: incident (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "false-positive-cascade",
    speaker: "Intelligence Analyst",
    text: "Surveillance AI flagged 47 high-priority anomalies overnight — unprecedented spike. Likely a firmware update caused false positives. But we can't rule out real threats hiding in the noise. Investigating all 47 exhausts the team for weeks.",
    left: {
      label: "Investigate all 47",
      effects: { int: -8, pol: -3 },
    },
    right: {
      label: "Triage — top 10 only",
      effects: { int: -3 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
