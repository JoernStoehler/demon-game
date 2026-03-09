// Source: event-map #monitoring--thermal-anomaly, literature/iabied-treaty.md (Article VI)
// Rationale: teaches core enforcement loop — detecting violations, consuming intelligence
//   to investigate, and the political cost of raids. Degraded variant teaches "low int = harder."
// Dynamic: enforcement capability is consumed by enforcement actions
// Category: incident (degraded variant pair)

import { register } from "./registry";

register((state) => {
  const highIntel = state.resources.int >= 45;
  return [{
    id: highIntel ? "thermal-anomaly" : "thermal-anomaly-degraded",
    speaker: highIntel ? "Intelligence Analyst" : "Junior Analyst",
    text: highIntel
      ? "Satellite imagery shows a thermal anomaly near Shenzhen — consistent with an undeclared compute cluster. Power draw analysis suggests prohibited-scale training. We have a 72-hour window before they can reconfigure."
      : "There are... rumors from a secondary source about unusual power consumption somewhere in the Pearl River Delta. It could be an undeclared training run, or it could be a new factory. We can't tell from what we have.",
    left: {
      label: highIntel ? "Deploy inspectors" : "Expensive investigation",
      effects: highIntel ? { int: -5, pol: -3 } : { int: -8, pol: -5 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: highIntel ? "Flag for monitoring" : "Ignore the rumors",
      effects: highIntel ? { int: -2 } : { int: -5, pol: -2 },
      hiddenEffects: highIntel ? undefined : { missed_threats: 1 },
    },
    weight: 1.5,
  }];
});
