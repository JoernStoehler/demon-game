// Source: event-map #civil--academic-freedom-revolt
// Rationale: teaches that research restrictions face principled opposition from
//   academia. The arguments aren't wrong — restricting knowledge is dangerous.
//   But so is unrestricted research.
// Dynamic: research suppression vs. innovation; principled opposition
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "academic-freedom-revolt",
    speaker: "Chief Scientist",
    text: "1,200 researchers across 40 countries signed 'The Right to Think: Against the Criminalization of Knowledge.' They argue our research restrictions violate academic freedom. They're not entirely wrong — some restrictions slow legitimate safety work too. But loosening them means dual-use research flows freely.",
    left: {
      label: "Create academic exemption track",
      effects: { saf: 5, alg: 5, pol: 3 },
    },
    right: {
      label: "Maintain restrictions",
      effects: { pol: -8, saf: -3 },
    },
    weight: 1.5,
  }];
});
