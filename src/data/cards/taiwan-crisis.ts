// Source: event-map #international--taiwan-crisis
// Rationale: teaches that chip supply chain depends on geopolitics. Taiwan
//   fabricates most advanced chips. A crisis there threatens the entire
//   enforcement architecture — no chips to track if the fab goes dark.
// Dynamic: enforcement depends on physical infrastructure that can be disrupted
// Category: crisis (late-game)

import { register } from "./registry";

register((state) => {
  if (state.turn < 12) return [];
  return [{
    id: "taiwan-crisis",
    speaker: "NATO Liaison",
    text: "Military escalation in the Taiwan Strait. TSMC has activated contingency plans — if fighting starts, they'll disable the fabs. That's 73% of advanced AI chip production. Our entire supply-chain monitoring program depends on chips we can track from fabrication. No fabs, no new chips to track.",
    left: {
      label: "Stockpile chips now",
      effects: { pol: -5, int: 5 },
    },
    right: {
      label: "Diversify supply chain",
      effects: { pol: -3, int: -3, alg: 3 },
    },
    weight: 2,
  }];
});
