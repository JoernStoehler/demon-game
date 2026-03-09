// Source: event-map #enforcement--compliant-company-raid
// Rationale: teaches that false positives from enforcement erode trust in the system.
//   Raiding a compliant company makes other companies wonder if cooperation is worth it.
// Dynamic: enforcement actions have political costs even when correct
// Category: incident (int-gated)

import { register } from "./registry";

register((state) => {
  if (state.resources.int < 30) return [];
  return [{
    id: "compliant-company-raid",
    speaker: "Enforcement Chief",
    text: "Anomaly detection flagged Anthropic's declared facility — thermal patterns suggest undisclosed compute. They're one of our most cooperative partners. If we inspect and find nothing, we've just told every compliant company that cooperation doesn't protect you from raids.",
    left: {
      label: "Inspect anyway",
      effects: { int: 3, pol: -8 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Trust the partnership",
      effects: { pol: 3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
