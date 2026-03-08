// PLACEHOLDER — all cards will be replaced in content overhaul. Do not polish.

import type { CardScript } from "../../engine/types";

// Source: original (throwaway)
// Rationale: consequence of protecting whistleblower — labs fight back legally
// Category: history-triggered (child of whistleblower→left)
const whistleblowerFallout: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "whistleblower" && h.choice === "left",
  );
  if (!trigger || state.turn - trigger.turn > 10) return [];
  return [{
    id: "whistleblower-fallout",
    speaker: "Legal Counsel",
    text: "The lab you investigated after the whistleblower tip is suing ISIA for overreach. This could set a dangerous precedent.",
    leftLabel: "Fight in court",
    rightLabel: "Settle quietly",
    leftEffects: { funding: -10, leverage: 8 },
    rightEffects: { trust: -8, funding: -5 },
    weight: 3,
  }];
};

// Source: original (throwaway)
// Rationale: consequence of refusing whistleblower — leak damages trust
// Category: history-triggered (child of whistleblower→right)
const coverupLeak: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "whistleblower" && h.choice === "right",
  );
  if (!trigger || state.turn - trigger.turn > 10) return [];
  return [{
    id: "coverup-leak",
    speaker: "Press Secretary",
    text: "Someone leaked that you declined to protect a whistleblower. The press is running with 'ISIA ignores insider tips.'",
    leftLabel: "Deny everything",
    rightLabel: "Full transparency",
    leftEffects: { trust: -8, leverage: 3 },
    rightEffects: { trust: -3, intel: -5 },
    weight: 3,
  }];
};

// Source: literature/political-statements-ai-risk.md (regulatory capture concerns)
// Rationale: consequence of taking lobbyist meeting — corruption accusation
// Category: history-triggered (child of lobby-meeting→left)
const regulatoryCapture: CardScript = (state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "lobby-meeting" && h.choice === "left",
  );
  if (!trigger || state.turn - trigger.turn > 8) return [];
  return [{
    id: "regulatory-capture",
    speaker: "Ethics Watchdog",
    text: "An investigative report alleges ISIA policies now mirror industry wish-lists. Your meeting with lobbyists is cited as Exhibit A.",
    leftLabel: "Launch internal review",
    rightLabel: "Dismiss the report",
    leftEffects: { trust: 5, funding: -8, leverage: -3 },
    rightEffects: { trust: -10, funding: 5 },
    weight: 3,
  }];
};

export const chainScripts: CardScript[] = [
  whistleblowerFallout, coverupLeak, regulatoryCapture,
];
