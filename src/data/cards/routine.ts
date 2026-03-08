// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: original (throwaway)
// Rationale: transparency vs secrecy tradeoff — Trust↔Intel baseline flow
// Category: routine
const budgetReview: CardScript = () => [{
  id: "budget-review",
  speaker: "Chief Financial Officer",
  text: "Quarterly budget review. Member states are asking where their money goes. Do we publish a full transparency report or keep operational details classified?",
  leftLabel: "Full transparency",
  rightLabel: "Keep it classified",
  leftEffects: { trust: 8, intel: -5 },
  rightEffects: { trust: -5, intel: 6 },
  weight: 2,
}];

// Source: original (throwaway)
// Rationale: overpromising builds Trust but sets up Trust-overloaded death
// Category: routine
const unSpeech: CardScript = () => [{
  id: "un-speech",
  speaker: "Communications Director",
  text: "The UN General Assembly wants you to give a keynote on AI safety progress. Big stage, big promises expected.",
  leftLabel: "Bold promises",
  rightLabel: "Cautious honesty",
  leftEffects: { trust: 12, leverage: 5 },
  rightEffects: { trust: -5, intel: 6 },
  weight: 1.5,
}];

// Source: literature/iabied-treaty.md (Article III — ISIA staffing)
// Rationale: verification requires inspectors; hiring costs money and looks aggressive
// Category: routine
const hiringSpree: CardScript = () => [{
  id: "hiring-spree",
  speaker: "Head of Human Resources",
  text: "We have openings for 200 new inspectors. Aggressive hiring would boost our capabilities but the cost is significant.",
  leftLabel: "Hire aggressively",
  rightLabel: "Hire conservatively",
  leftEffects: { funding: -10, intel: 8, trust: -4 },
  rightEffects: { funding: -3, trust: 5 },
  weight: 1.5,
}];

// Source: literature/political-statements-ai-risk.md (industry lobbying)
// Rationale: industry capture vs funding — Funding↔Leverage tension
// Category: routine
const lobbyMeeting: CardScript = () => [{
  id: "lobby-meeting",
  speaker: "Political Advisor",
  text: "Tech industry lobbyists want a private meeting. They're offering 'cooperation' but probably want concessions on compute limits.",
  leftLabel: "Take the meeting",
  rightLabel: "Decline politely",
  leftEffects: { funding: 10, leverage: -8 },
  rightEffects: { trust: 5, funding: -5 },
  weight: 2,
}];

// Source: original (throwaway)
// Rationale: media exposure trades Trust for Intel exposure risk
// Category: routine
const mediaInterview: CardScript = (state) => {
  if (state.resources.trust < 30) return [];
  return [{
    id: "media-interview",
    speaker: "Press Secretary",
    text: "A major outlet wants an exclusive interview about ISIA operations. Great exposure, but they'll ask tough questions.",
    leftLabel: "Do the interview",
    rightLabel: "No comment",
    leftEffects: { trust: 7, intel: -4 },
    rightEffects: { trust: -6, intel: 3 },
    weight: 2,
  }];
};

// Source: literature/iabied-treaty.md (Article III — ISIA funding)
// Rationale: funding source — tiered dues trade influence for money
// Category: routine
const memberStateDues: CardScript = () => [{
  id: "member-state-dues",
  speaker: "Finance Director",
  text: "Annual membership dues are coming in. Some nations want to pay more for influence. Others want to pay less for flexibility.",
  leftLabel: "Accept tiered dues",
  rightLabel: "Flat rate for all",
  leftEffects: { funding: 10, leverage: -5 },
  rightEffects: { funding: 5, trust: 3 },
  weight: 1.5,
}];

// Source: literature/iabied-treaty.md (Article V — chip centralization, seizure)
// Rationale: enforcement spoils — repurpose seized compute or sell it
// Category: routine
const assetSeizure: CardScript = (state) => {
  if (state.turn < 3) return [];
  return [{
    id: "asset-seizure",
    speaker: "Enforcement Chief",
    text: "We've confirmed illegal compute at a seized facility. The equipment is worth millions. Auction it off or repurpose for ISIA operations?",
    leftLabel: "Auction for funding",
    rightLabel: "Repurpose for ISIA",
    leftEffects: { funding: 12, intel: -5 },
    rightEffects: { intel: 8, trust: -5 },
    weight: 1,
  }];
};

// Source: literature/iabied-treaty.md (military exemption debate)
// Rationale: universality vs power — exemptions buy allies but weaken treaty
// Category: routine
const militaryAiRequest: CardScript = () => [{
  id: "military-ai-request",
  speaker: "NATO Liaison",
  text: "A major military alliance wants a defensive AI exemption. Granting it would gain powerful allies but weaken the treaty's universality.",
  leftLabel: "Grant exemption",
  rightLabel: "Deny exemption",
  leftEffects: { leverage: 10, trust: -8 },
  rightEffects: { trust: 5, leverage: -8 },
  weight: 1.5,
}];

// Source: original (throwaway)
// Rationale: low-stakes breather card — small Trust↔Intel tradeoff
// Category: filler
const coffeeChat: CardScript = () => [{
  id: "coffee-chat",
  speaker: "Deputy Director",
  text: "Quiet day at ISIA. Your deputy suggests using the downtime for either staff morale events or catching up on intelligence briefings.",
  leftLabel: "Staff morale day",
  rightLabel: "Intelligence briefings",
  leftEffects: { trust: 3, funding: -2 },
  rightEffects: { intel: 2, trust: -2 },
  weight: 1.5,
}];

// Source: original (throwaway)
// Rationale: networking vs credibility — attending WEF looks elitist
// Category: filler
const conferenceInvite: CardScript = () => [{
  id: "conference-invite",
  speaker: "Executive Assistant",
  text: "You've been invited to speak at the World Economic Forum. Good for visibility but uses political capital.",
  leftLabel: "Attend and network",
  rightLabel: "Send a deputy",
  leftEffects: { leverage: 6, funding: 5, trust: -3 },
  rightEffects: { trust: 3, leverage: -3 },
  weight: 1.5,
}];

export const routineScripts: CardScript[] = [
  budgetReview, unSpeech, hiringSpree, lobbyMeeting, mediaInterview,
  memberStateDues, assetSeizure, militaryAiRequest, coffeeChat, conferenceInvite,
];
