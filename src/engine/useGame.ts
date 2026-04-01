import { useCallback, useState } from "react";
import type { ChoiceDirection, GameState } from "./types";
import { newGame, applyChoice, checkDeath } from "./state";
import { drawNextCard } from "./cards";
import { ALL_CARDS } from "../data/cards";
import { TUTORIAL_CARDS } from "../data/tutorial";
import { isTutorialCompleted, markTutorialCompleted } from "./tutorial";

const STORAGE_KEY = "demon-game-state";
// Bump this when the save format changes (e.g. new fields, restructured data).
// Any localStorage data with a different version is discarded.
const STORAGE_VERSION = 4;

function saveState(state: GameState): void {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ v: STORAGE_VERSION, state }),
    );
  } catch {
    // localStorage full or unavailable — ignore
  }
}

function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { v?: number; state?: GameState };
    // Discard saves from older (or missing) format versions
    if (parsed.v !== STORAGE_VERSION || !parsed.state) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    const state = parsed.state;
    // Rehydrate activeCard: JSON strips functions (apply).
    // Find the matching card declaration and rebuild apply/previews.
    if (state.activeCard) {
      const card = ALL_CARDS.find((c) => c.id === state.activeCard!.templateId);
      if (card) {
        const redrawn = drawNextCard(
          { ...state, activeCard: null },
          // Single-card array to force picking this specific card
          [{ ...card, poolWeight: () => 1 }],
        );
        state.activeCard = redrawn.activeCard;
      } else {
        state.activeCard = null;
      }
    }
    return state;
  } catch {
    return null;
  }
}

export function useGame() {
  const [state, setState] = useState<GameState>(() => {
    const saved = loadState();
    if (saved && saved.phase !== "title") return saved;
    return { ...newGame(), phase: "title" };
  });
  const [tutorialIndex, setTutorialIndex] = useState(0);

  const startGame = useCallback(() => {
    const s = newGame();
    if (!isTutorialCompleted()) {
      setState({ ...s, phase: "tutorial" });
      setTutorialIndex(0);
    } else {
      const withCard = drawNextCard(s, ALL_CARDS);
      setState(withCard);
      saveState(withCard);
    }
  }, []);

  const advanceTutorial = useCallback(() => {
    const nextIndex = tutorialIndex + 1;
    if (nextIndex >= TUTORIAL_CARDS.length) {
      markTutorialCompleted();
      const s = newGame();
      const withCard = drawNextCard(s, ALL_CARDS);
      setState(withCard);
      saveState(withCard);
    } else {
      setTutorialIndex(nextIndex);
    }
  }, [tutorialIndex]);

  const skipTutorial = useCallback(() => {
    markTutorialCompleted();
    const s = newGame();
    const withCard = drawNextCard(s, ALL_CARDS);
    setState(withCard);
    saveState(withCard);
  }, []);

  const choose = useCallback(
    (choice: ChoiceDirection) => {
      let s = applyChoice(state, choice);
      const death = checkDeath(s);
      if (death) {
        s = { ...s, phase: "dead", death };
      } else {
        s = drawNextCard(s, ALL_CARDS);
      }
      setState(s);
      saveState(s);
    },
    [state],
  );

  const restart = useCallback(() => {
    const s = newGame();
    const withCard = drawNextCard(s, ALL_CARDS);
    setState(withCard);
    saveState(withCard);
  }, []);

  return { state, startGame, choose, restart, tutorialIndex, advanceTutorial, skipTutorial };
}
