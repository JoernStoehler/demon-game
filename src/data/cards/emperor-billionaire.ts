// Source: event-map #enforcement--emperor-billionaire
// Rationale: teaches that ideologically motivated violators can't be negotiated with.
//   "The species that builds superintelligence first inherits the universe."
//   Enough personal wealth = sovereign-level capability.
// Dynamic: enforcement designed for institutions fails against individuals
// Category: crisis (late-game, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 12) return [];
  return [{
    id: "emperor-billionaire",
    speaker: "Enforcement Chief",
    text: "Tech billionaire — $140B net worth, three citizenships, private island in international waters. Publicly says 'the species that builds ASI first inherits the universe.' Intel tracked him acquiring 4,000 chips through shell companies. His island compound has its own power plant. He's not hiding — he's daring us.",
    left: {
      label: "Naval interdiction",
      effects: { pol: -12, int: 5 },
      hiddenEffects: { enforcement_visibility: 2 },
    },
    right: {
      label: "Build legal case first",
      effects: { pol: -3, alg: 5 },
    },
    down: {
      label: "Coordinate passport revocation",
      effects: { pol: -8, int: -5 },
      disabled: state.resources.pol < 40,
    },
    weight: 2.5,
    color: "#ef4444",
  }];
});
