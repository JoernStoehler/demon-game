// Source: event-map #monitoring--heat-signature-foreign
// Rationale: teaches the tension between legitimate process (Council vote) and
//   operational speed (intelligence goes stale). Cat-and-mouse extends to the
//   diplomatic layer.
// Dynamic: enforcement capability consumed by enforcement actions
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 4) return [];
  return [{
    id: "heat-signature-foreign",
    speaker: "Intelligence Analyst",
    text: "Satellite detected anomalous thermal output from an undeclared facility in a remote region — consistent with a mid-scale compute cluster. No declared CCC within 200 kilometers. The facility appeared in the last 90 days. We need a challenge inspection, but that requires Executive Council approval, and the nation hosting this facility has allies on the Council. Going through channels takes weeks. The facility could be dismantled in days.",
    left: {
      label: "Formal challenge inspection via Council",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Covert intelligence team first",
      effects: { pol: -3, int: -5 },
    },
    down: {
      label: "Joint op with domestic enforcement",
      effects: { pol: -3, int: 3 },
      disabled: (state.hidden.treaty_erosion ?? 0) > 2,
    },
    weight: 1.5,
  }];
});
