// Source: event-map #political--ai-economy-report
// Rationale: teaches that economic dependency on sub-threshold AI deepens over time.
//   The longer the pause runs, the more the economy depends on AI, and the harder
//   it becomes to tighten restrictions without massive disruption.
// Dynamic: economic cost is real and grows over time
// Category: report (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "ai-economy-report",
    speaker: "Political Advisor",
    text: "New economic data: AI systems operating within treaty limits now contribute 18% of global GDP. Entire industries depend on them — logistics, finance, manufacturing, healthcare. If we tighten the threshold further, we threaten hundreds of millions of livelihoods. The economy didn't just adapt to the pause — it grew around it. Sub-threshold AI became load-bearing infrastructure. Any future restrictions are no longer about preventing growth. They're about tearing out foundations.",
    left: {
      label: "Acknowledge dependency, hold threshold",
      effects: { pol: -5, int: -3 },
    },
    right: {
      label: "Commission review of threshold adequacy",
      effects: { pol: -3, saf: -3 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 1.5,
  }];
});
