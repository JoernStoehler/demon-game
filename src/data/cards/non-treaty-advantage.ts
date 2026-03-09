// Source: event-map #economic--non-treaty-advantage
// Rationale: teaches that the economic advantage of unrestricted AI is real and visible.
//   The only honest argument is "this real harm is better than extinction" — which
//   requires people to believe in an invisible threat that never materialized.
// Dynamic: economic cost is real; opponents aren't wrong about short-term economics
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 7) return [];
  return [{
    id: "non-treaty-advantage",
    speaker: "Political Advisor",
    text: "Vietnam, which never signed the treaty, hit 14% GDP growth for three consecutive years — unrestricted AI deployment in manufacturing, logistics, and finance. Vietnamese companies are outcompeting treaty-nation firms. Factory closures in our member states are directly attributed to Vietnamese competition. 'Made in Vietnam by AI' is a bitter slogan. Three small treaty nations are openly discussing withdrawal. The lobbying group's new ads — shuttered American factories, Vietnamese boom towns — are factually accurate.",
    left: {
      label: "Tighten non-party sanctions",
      effects: { pol: -8, int: -3 },
    },
    right: {
      label: "Accept the cost — focus on messaging",
      effects: { pol: -5, int: -3 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 1.5,
  }];
});
