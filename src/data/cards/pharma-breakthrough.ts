// Source: event-map #corporate--pharma-ai-breakthrough
// Rationale: teaches that the compute threshold blocks beneficial uses too.
//   Real people die from diseases AI could cure. Opponents aren't wrong about costs.
// Dynamic: research suppression vs. innovation; economic cost is real
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "pharma-breakthrough",
    speaker: "Chief Scientist",
    text: "Novartis researchers need 2x the compute threshold for a cancer drug discovery model. Their projections: 40,000 lives saved per year if approved. The compute cap is the only barrier. 'You're killing people to prevent a hypothetical threat.' They're bringing families of terminal patients to the press conference.",
    left: {
      label: "Grant medical exemption",
      effects: { pol: 5, alg: 5, int: -5 },
    },
    right: {
      label: "Maintain threshold — no exceptions",
      effects: { pol: -10, saf: 3 },
    },
    weight: 1.5,
  }];
});
