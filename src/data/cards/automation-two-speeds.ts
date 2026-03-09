// Source: event-map #economic--automation-two-speeds
// Rationale: teaches that the pause restricts AI in a way that maximizes job
//   destruction (sub-threshold automation) while minimizing job creation (above-threshold
//   breakthroughs). The economic distributional consequences fracture political support.
// Dynamic: economic cost is real and unevenly distributed
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "automation-two-speeds",
    speaker: "Political Advisor",
    text: "The pause created a two-speed economy. Industries where sub-threshold AI suffices — logistics, customer service, basic manufacturing — are booming. AI handles 60% of work, productivity up 400%, 40 million jobs eliminated. Industries needing more compute — drug discovery, climate modeling, advanced engineering — stagnate, unable to create replacement jobs. Both groups blame the pause. Laid-off workers: 'It lets companies automate without restriction.' Stalled researchers: 'It prevents the breakthroughs that would create new industries.'",
    left: {
      label: "Propose sector-specific thresholds",
      effects: { pol: -5, alg: 5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    right: {
      label: "Stay out of economic policy",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 1.5,
  }];
});
