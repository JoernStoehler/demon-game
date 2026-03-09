// Source: event-map #corporate--acquisition-consolidation
// Rationale: teaches that regulatory capture doesn't require corruption — market
//   dynamics produce it. The treaty's compliance costs favor big companies.
//   Big companies accumulate political leverage. Political leverage constrains enforcement.
// Dynamic: institutions rot from within; enforcement vs. backlash
// Category: political (turn-gated)

import { register } from "./registry";

register((state) => {
  if (state.turn < 8) return [];
  return [{
    id: "acquisition-consolidation",
    speaker: "Legal Counsel",
    text: "Apex AI — market cap $4.2 trillion, larger than most nations' GDP — is acquiring three mid-size compliance companies. Post-merger, they'd control 38% of all permitted AI compute in treaty nations. Their CEO's argument: 'We are the compliance layer the treaty needs. Small companies cut corners. We don't. Consolidation makes monitoring easier.' He's not wrong — monitoring 50 facilities IS easier than 5,000. But if Apex threatens non-cooperation, we lose access to a third of global AI infrastructure.",
    left: {
      label: "Block the acquisition",
      effects: { pol: -10, int: -3 },
    },
    right: {
      label: "Approve with enhanced monitoring conditions",
      effects: { pol: -3, int: 5 },
      hiddenEffects: { treaty_erosion: 1 },
    },
    weight: 1.5,
  }];
});
