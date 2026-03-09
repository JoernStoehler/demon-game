// STUB — placeholder cards so the game runs while real cards are being written.
// Will be replaced by individual card script files.

import { register } from "./registry";

register(
  {
    id: "budget-review",
    tags: ["institutional-integrity", "political-support"],
    speaker: "Deputy Director",
    text: "Quarterly budget review. Member states are asking where their money goes. Do we publish a full transparency report or keep operational details classified?",
    left: { label: "Full transparency", effects: { pol: 8, int: -5 } },
    right: { label: "Keep it classified", effects: { pol: -5, int: 6 } },
    poolWeight: () => 2,
  },
  {
    id: "lobby-meeting",
    tags: ["corporate-lobbying", "compute-monitoring"],
    speaker: "Deputy Director",
    text: "Tech industry lobbyists want a private meeting. They're offering 'cooperation' but probably want concessions on compute limits.",
    left: { label: "Take the meeting", effects: { pol: -8, int: 5 } },
    right: { label: "Decline politely", effects: { pol: 5, int: -3 } },
    poolWeight: () => 2,
  },
  {
    id: "coffee-chat",
    tags: ["institutional-integrity"],
    speaker: "Deputy Director",
    text: "Quiet day at ISIA. Your deputy suggests using the downtime for either staff morale events or catching up on intelligence briefings.",
    left: { label: "Staff morale day", effects: { pol: 3 } },
    right: { label: "Intelligence briefings", effects: { int: 3 } },
    poolWeight: () => 1.5,
  },
);
