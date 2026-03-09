import type {
  ChoiceDirection,
  DeathInfo,
  GameState,
} from "./types";
import { RESOURCE_KEYS } from "./types";
import { DEATH_MESSAGES } from "../data/deaths";

export function newGame(seed?: number): GameState {
  return {
    phase: "playing",
    resources: { pol: 50, int: 50, saf: 50, alg: 50 },
    hidden: {},
    turn: 0,
    activeCard: null,
    rngState: seed ?? Date.now(),
    death: null,
    history: [],
  };
}

export function applyChoice(
  state: GameState,
  choice: ChoiceDirection,
): GameState {
  if (!state.activeCard) return state;

  const option = state.activeCard[choice];
  if (option.disabled) return state;

  const applied = option.apply(state);

  const historyEntry = {
    turn: state.turn,
    cardId: state.activeCard.templateId,
    choice,
  };

  return {
    ...applied,
    turn: state.turn + 1,
    activeCard: null,
    history: [...state.history, historyEntry],
  };
}

export function checkDeath(state: GameState): DeathInfo | null {
  for (const key of RESOURCE_KEYS) {
    const value = state.resources[key];
    if (value <= 0) {
      const msgs = DEATH_MESSAGES[key]?.depleted;
      return {
        resource: key,
        extreme: "depleted",
        message: msgs?.[state.turn % msgs.length] ?? `${key} depleted.`,
      };
    }
    if (value >= 100) {
      const msgs = DEATH_MESSAGES[key]?.overloaded;
      return {
        resource: key,
        extreme: "overloaded",
        message: msgs?.[state.turn % msgs.length] ?? `${key} overloaded.`,
      };
    }
  }
  return null;
}
