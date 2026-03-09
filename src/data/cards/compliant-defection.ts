// Source: event-map #corporate--compliant-defection
// Rationale: teaches that voluntary corporate compliance is unstable equilibrium.
//   Companies comply only when compliance is economically rational. Prisoner's dilemma
//   at industrial scale — one defection triggers cascade.
// Dynamic: economic cost is real and legitimate; compliance collapses when unrewarded
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 10) return [];
  return [{
    id: "compliant-defection",
    speaker: "Finance Director",
    text: "Helios Systems — the poster child of compliance — is relocating to Vietnam. Their CEO's letter: '$6B spent on compliance. Competitors in non-treaty nations spent zero. Our board answers to shareholders, not to you.' If Helios defects, other compliant companies follow within months.",
    left: {
      label: "Offer economic incentives",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Let them go",
      effects: { int: -8, pol: -3 },
    },
    down: {
      label: "Propose compliance tariff",
      effects: { pol: -12, int: 8 },
      disabled: state.resources.pol < 40,
    },
    weight: 2,
    color: "#f97316",
  }];
});
