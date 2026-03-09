// Source: event-map #national-intelligence--data-center-attack
// Rationale: teaches that national intelligence agencies have their own agendas
//   and may not share priorities with ISIA. Monitoring gaps can be created by
//   external attacks. The DG depends on cooperation from actors who may not care.
// Dynamic: enforcement capability consumed; institutions rot from within
// Category: incident (turn-gated, 3-choice)

import { register } from "./registry";

register((state) => {
  if (state.turn < 5) return [];
  return [{
    id: "data-center-attack",
    speaker: "Intelligence Analyst",
    text: "The NSA director just forwarded a report — six months late. A US data center was attacked by a foreign actor. Our compute monitoring tools were disabled for roughly one week. It's possible a training run occurred during the gap. The NSA sat on this for months because they don't take ASI seriously enough to report promptly. It reached us only because the president's office intervened. We have no idea what happened during that week.",
    left: {
      label: "Demand full forensics from NSA",
      effects: { pol: -8, int: 3 },
    },
    right: {
      label: "Accept report, patch the monitoring gap",
      effects: { pol: -3, int: -5 },
      hiddenEffects: { missed_threats: 1 },
    },
    down: {
      label: "Cross-reference satellite data from that window",
      effects: { int: -3, pol: -3 },
      disabled: state.resources.int < 40,
    },
    weight: 1.5,
  }];
});
