// Source: event-map #safety--funding-deal-techbro
// Rationale: teaches that funding sources create subtle influence even without
//   explicit strings. The most dangerous conditions are the ones that aren't written down.
//   Regulatory capture by private actors, not just governments.
// Dynamic: institutions rot from within; independence vs. resources
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "funding-deal-techbro",
    speaker: "Chief Scientist",
    text: "A billionaire former lab CEO offers a $500M endowment for our safety research. No strings attached, he says. But intelligence flagged something: his family office holds $4B in AI investments that skyrocket if the pause ends. Three researchers he's recommending we hire are his former capability employees. Assessment: 60% genuine philanthropy, 40% long-term play to embed people who'll eventually argue alignment is 'close enough.'",
    left: {
      label: "Take money, decline his hires",
      effects: { saf: 5, pol: -5 },
    },
    right: {
      label: "Decline everything",
      effects: { saf: -5, pol: -3, int: 3 },
    },
    down: {
      label: "Accept but monitor his hires",
      effects: { saf: 8, int: -5 },
      disabled: state.resources.int < 50,
    },
    weight: 2,
  }];
});
