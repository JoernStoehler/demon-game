// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: literature/iabied-treaty.md (Article VI — on-site verification)
// Rationale: core enforcement scenario; degraded pair with rogue-lab-degraded
// Category: incident
const rogueLab: CardScript = (state) => {
  const highIntel = state.resources.intel >= 40;
  return [{
    id: highIntel ? "rogue-lab-normal" : "rogue-lab-degraded",
    speaker: highIntel ? "Intelligence Analyst" : "Junior Analyst",
    text: highIntel
      ? "Thermal anomaly near Shenzhen industrial zone. Signature consistent with an undeclared compute cluster running prohibited training."
      : "There are... rumors of unauthorized compute usage somewhere in East Asia. We can't pin it down with our current intelligence.",
    leftLabel: highIntel ? "Send inspectors" : "Expensive investigation",
    rightLabel: highIntel ? "Flag for next quarter" : "Ignore the rumors",
    leftEffects: highIntel ? { funding: -8, intel: 8, leverage: 5 } : { funding: -12, intel: 5 },
    rightEffects: highIntel ? { trust: -5, intel: -3 } : { trust: -3, intel: -6 },
    weight: 1.5,
  }];
};

// Source: literature/iabied-treaty.md (Article VII — supply chain monitoring)
// Rationale: physical enforcement dimension — chips are the bottleneck
// Category: incident
const chipSmuggling: CardScript = () => [{
  id: "chip-smuggling",
  speaker: "Customs Liaison",
  text: "Border agents intercepted a container with 48 H100 GPUs hidden inside networking equipment. Trail leads to a shell company.",
  leftLabel: "Full investigation",
  rightLabel: "Seize and move on",
  leftEffects: { funding: -8, intel: 6, trust: 4 },
  rightEffects: { intel: -4, leverage: 3 },
  weight: 1.5,
}];

// Source: literature/iabied-treaty.md (Article IX — researcher monitoring)
// Rationale: insider tips are key intel source; chain parent for fallout/coverup
// Category: incident (history chain parent)
const whistleblower: CardScript = () => [{
  id: "whistleblower",
  speaker: "Anonymous Source",
  text: "A researcher at a major lab claims they've been running prohibited capability evaluations in secret. They want protection.",
  leftLabel: "Protect and investigate",
  rightLabel: "Too risky, decline",
  leftEffects: { funding: -10, intel: 8, trust: 5 },
  rightEffects: { trust: -8, intel: -5 },
  weight: 1,
}];

// Source: original (throwaway)
// Rationale: low-trust degraded variant of media-interview — worse options
// Category: incident (degraded variant of media-interview)
const mediaInterviewHostile: CardScript = (state) => {
  if (state.resources.trust >= 30) return [];
  return [{
    id: "media-interview-hostile",
    speaker: "Press Secretary",
    text: "A major outlet is running an exposé with or without your comment. They've already talked to your critics.",
    leftLabel: "Face the interview",
    rightLabel: "No comment",
    leftEffects: { trust: 5, intel: -6 },
    rightEffects: { trust: -10 },
    weight: 2,
  }];
};

export const incidentScripts: CardScript[] = [
  rogueLab, chipSmuggling, whistleblower, mediaInterviewHostile,
];
