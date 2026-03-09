// STUB — placeholder cards so the game runs while real cards are being written.

import type { CardScript } from "../../engine/types";

const rogueLab: CardScript = (state) => {
  const highIntel = state.resources.int >= 40;
  return [{
    id: highIntel ? "rogue-lab-normal" : "rogue-lab-degraded",
    speaker: highIntel ? "Deputy Director" : "Deputy Director",
    text: highIntel
      ? "Thermal anomaly near Shenzhen industrial zone. Signature consistent with an undeclared compute cluster running prohibited training."
      : "There are... rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down with our current intelligence.",
    left: {
      label: highIntel ? "Send inspectors" : "Expensive investigation",
      effects: highIntel ? { pol: -3, int: 8 } : { pol: -5, int: 5 },
    },
    right: {
      label: highIntel ? "Flag for next quarter" : "Ignore the rumors",
      effects: highIntel ? { pol: -5, int: -3 } : { pol: -3, int: -6 },
    },
    weight: 1.5,
  }];
};

const chipSmuggling: CardScript = () => [{
  id: "chip-smuggling",
  speaker: "Deputy Director",
  text: "Border agents intercepted a container with 48 H100 GPUs hidden inside networking equipment. Trail leads to a shell company.",
  left: { label: "Full investigation", effects: { pol: 4, int: 6 } },
  right: { label: "Seize and move on", effects: { int: -4, pol: 3 } },
  weight: 1.5,
}];

const whistleblower: CardScript = () => [{
  id: "whistleblower",
  speaker: "Deputy Director",
  text: "A researcher at a major lab claims they've been running prohibited capability evaluations in secret. They want protection.",
  left: { label: "Protect and investigate", effects: { int: 8, pol: -5 } },
  right: { label: "Too risky, decline", effects: { pol: -8, int: -5 } },
  weight: 1,
}];

export const incidentScripts: CardScript[] = [rogueLab, chipSmuggling, whistleblower];
