// Source: event-map #enforcement--datacenter-inside-datacenter
// Rationale: teaches that adversaries hide inside legitimate infrastructure.
//   Evasion techniques exploit the gap between what monitoring checks and what
//   actually happens.
// Dynamic: attack surface includes things you're protecting; cat-and-mouse
// Category: crisis (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 6) return [];
  return [{
    id: "datacenter-hidden",
    speaker: "Intelligence Analyst",
    text: "Whistleblower at a cloud provider: a customer renting 'inference capacity' at an ISIA-monitored datacenter is actually running distributed training. Hidden inside thousands of independent inference jobs sharing gradients through an encrypted side channel. The training is happening inside our own monitored facility.",
    left: {
      label: "Raid the customer's VMs",
      effects: { int: 3, pol: -8 },
      hiddenEffects: { enforcement_visibility: 1 },
    },
    right: {
      label: "Work with provider quietly",
      effects: { int: 5, pol: -3 },
    },
    down: {
      label: "Crack the gradient protocol",
      effects: { int: 8, saf: 3 },
      disabled: state.resources.int < 50,
    },
    weight: 2,
  }];
});
