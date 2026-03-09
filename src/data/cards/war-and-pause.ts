// Source: event-map #international--war-and-pause
// Rationale: teaches that the treaty assumed a mostly peaceful world. Conventional
//   military conflicts create enforcement gaps that have nothing to do with AI.
//   The pause doesn't exist in a vacuum.
// Dynamic: 30 years of political noise; enforcement capability consumed
// Category: crisis (late-game, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "war-and-pause",
    speaker: "Diplomatic Attaché",
    text: "Conventional war between two treaty nations over a territorial dispute unrelated to AI. Both demand we suspend inspections — 'We can't have international inspectors in active military zones.' Both accuse the other of using the war as cover for unauthorized training. Our satellite data shows unusual compute activity in both countries but can't distinguish military AI from forbidden training runs. The treaty says nothing about what happens during a war between members.",
    left: {
      label: "Demand both honor inspection obligations",
      effects: { pol: -12, int: 5 },
    },
    right: {
      label: "Suspend inspections, rely on satellites",
      effects: { pol: -3, int: -8 },
      hiddenEffects: { missed_threats: 1, treaty_erosion: 1 },
    },
    down: {
      label: "Broker ceasefire for inspection access",
      effects: { pol: -5, int: -3 },
      disabled: state.resources.pol > 60,
    },
    weight: 2,
    color: "#ef4444",
  }];
});
