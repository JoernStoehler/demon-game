import type { ActiveCard, CardScript, ChoiceOption, ChoicePreview, Effects, GameState, ResourceKey } from "./types";
import { weightedPick } from "./rng";

const ANTI_REPEAT_WINDOW = 3;
const LARGE_THRESHOLD = 10;

function derivePreviews(effects: Effects): ChoicePreview[] {
  const previews: ChoicePreview[] = [];
  for (const [key, value] of Object.entries(effects)) {
    if (value === 0) continue;
    previews.push({
      resource: key as ResourceKey,
      direction: value > 0 ? "up" : "down",
      size: Math.abs(value) >= LARGE_THRESHOLD ? "large" : "small",
    });
  }
  return previews;
}

function resolveChoice(label: string, effects: Effects): ChoiceOption {
  return {
    label,
    apply: (s) => {
      const resources = { ...s.resources };
      for (const [key, delta] of Object.entries(effects)) {
        const k = key as ResourceKey;
        resources[k] = Math.max(0, Math.min(100, resources[k] + delta));
      }
      return { ...s, resources };
    },
    previews: derivePreviews(effects),
  };
}

export function drawNextCard(
  state: GameState,
  scripts: CardScript[],
): GameState {
  // Run all scripts to populate pool
  const pool = scripts.flatMap((s) => s(state));

  // Filter out recently-drawn cards
  const recentIds = new Set(
    state.history.slice(-ANTI_REPEAT_WINDOW).map((h) => h.cardId),
  );

  let eligible = pool.filter((e) => !recentIds.has(e.id) && e.weight > 0);

  if (eligible.length === 0) {
    // Fallback: ignore anti-repeat
    eligible = pool.filter((e) => e.weight > 0);
  }

  if (eligible.length === 0) {
    // Truly no cards available — force death
    return {
      ...state,
      phase: "dead",
      death: {
        resource: "intel",
        extreme: "depleted",
        message: "The world fell silent. No reports, no events, no warnings. And then it was too late.",
      },
    };
  }

  const weights = eligible.map((e) => e.weight);
  const rng = { rngState: state.rngState };
  const picked = weightedPick(rng, eligible, weights);

  const activeCard: ActiveCard = {
    templateId: picked.id,
    speaker: picked.speaker,
    text: picked.text,
    left: resolveChoice(picked.leftLabel, picked.leftEffects),
    right: resolveChoice(picked.rightLabel, picked.rightEffects),
    color: picked.color,
  };

  return {
    ...state,
    rngState: rng.rngState,
    activeCard,
  };
}
