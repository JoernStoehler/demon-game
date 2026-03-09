// STUB — placeholder cards so the game runs while real cards are being written.
// Will be replaced by individual card script files.

import type { CardScript } from "../../engine/types";

const budgetReview: CardScript = () => [{
  id: "budget-review",
  speaker: "Deputy Director",
  text: "Quarterly budget review. Member states are asking where their money goes. Do we publish a full transparency report or keep operational details classified?",
  left: { label: "Full transparency", effects: { pol: 8, int: -5 } },
  right: { label: "Keep it classified", effects: { pol: -5, int: 6 } },
  weight: 2,
}];

const lobbyMeeting: CardScript = () => [{
  id: "lobby-meeting",
  speaker: "Deputy Director",
  text: "Tech industry lobbyists want a private meeting. They're offering 'cooperation' but probably want concessions on compute limits.",
  left: { label: "Take the meeting", effects: { pol: -8, int: 5 } },
  right: { label: "Decline politely", effects: { pol: 5, int: -3 } },
  weight: 2,
}];

const coffeeChat: CardScript = () => [{
  id: "coffee-chat",
  speaker: "Deputy Director",
  text: "Quiet day at ISIA. Your deputy suggests using the downtime for either staff morale events or catching up on intelligence briefings.",
  left: { label: "Staff morale day", effects: { pol: 3 } },
  right: { label: "Intelligence briefings", effects: { int: 3 } },
  weight: 1.5,
}];

export const routineScripts: CardScript[] = [budgetReview, lobbyMeeting, coffeeChat];
