// Source: event-map #political--brain-drain
// Rationale: teaches that restricting research causes talent flight. The smartest
//   people go where they can work. Non-treaty nations benefit from our restrictions.
// Dynamic: economic cost of pause is real; talent follows opportunity
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "brain-drain",
    speaker: "Chief Scientist",
    text: "Fourteen top alignment researchers left treaty nations this quarter — eight to Singapore, six to the UAE. Both are non-party states. Our talent pool is shrinking while theirs grows. The researchers say they can't do meaningful work under our restrictions.",
    left: {
      label: "Offer research exemptions",
      effects: { saf: 5, pol: -8, alg: 3 },
    },
    right: {
      label: "Let them go",
      effects: { saf: -5, pol: 3 },
    },
    weight: 1.5,
  }];
});
