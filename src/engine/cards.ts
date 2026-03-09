import type {
  ActiveCard,
  Card,
  ChoiceOption,
  ChoicePreview,
  ChoiceSpec,
  Dynamic,
  Effects,
  GameState,
  ResourceKey,
} from "./types";
import { RESOURCE_KEYS } from "./types";
import { weightedPick } from "./rng";

const ANTI_REPEAT_WINDOW = 3;
const LARGE_THRESHOLD = 10;

/** Resolve a Dynamic value: if it's a function, call it; otherwise return as-is. */
function resolve<T>(value: Dynamic<T>, state: GameState): T {
  return typeof value === "function" ? (value as (s: GameState) => T)(state) : value;
}

function derivePreviews(effects: Effects): ChoicePreview[] {
  const previews: ChoicePreview[] = [];
  for (const [key, value] of Object.entries(effects)) {
    if (value === 0) continue;
    if (!RESOURCE_KEYS.includes(key as ResourceKey)) continue;
    previews.push({
      resource: key as ResourceKey,
      direction: value > 0 ? "up" : "down",
      size: Math.abs(value) >= LARGE_THRESHOLD ? "large" : "small",
    });
  }
  return previews;
}

/** Build a ChoiceOption from a ChoiceSpec. */
function resolveChoice(spec: ChoiceSpec, state: GameState): ChoiceOption {
  const enabled = spec.enabled === undefined ? true : resolve(spec.enabled, state);
  return {
    label: resolve(spec.label, state),
    disabled: !enabled,
    apply: (s) => {
      // Apply visible bar effects
      const resources = { ...s.resources };
      for (const [key, delta] of Object.entries(spec.effects)) {
        const k = key as ResourceKey;
        if (k in resources) {
          resources[k] = Math.max(0, Math.min(100, resources[k] + delta));
        }
      }
      // Apply hidden state effects
      let hidden = s.hidden;
      if (spec.hiddenEffects) {
        hidden = { ...hidden };
        for (const [key, delta] of Object.entries(spec.hiddenEffects)) {
          hidden[key] = (hidden[key] ?? 0) + delta;
        }
      }
      return { ...s, resources, hidden };
    },
    previews: derivePreviews(spec.effects),
  };
}

/** Default disabled choice (for cards that omit `down`). */
const DISABLED_CHOICE: ChoiceSpec = {
  label: "",
  effects: {},
  enabled: false,
};

export function drawNextCard(
  state: GameState,
  cards: readonly Card[],
): GameState {
  // Evaluate pool weights
  const pool: Array<{ card: Card; weight: number }> = [];
  for (const card of cards) {
    const w = card.poolWeight(state);
    if (w > 0) pool.push({ card, weight: w });
  }

  const recentIds = new Set(
    state.history.slice(-ANTI_REPEAT_WINDOW).map((h) => h.cardId),
  );

  let eligible = pool.filter((e) => !recentIds.has(e.card.id));

  if (eligible.length === 0) {
    eligible = pool;
  }

  if (eligible.length === 0) {
    return {
      ...state,
      phase: "dead",
      death: {
        resource: "int",
        extreme: "depleted",
        message:
          "The world fell silent. No reports, no events, no warnings. And then it was too late.",
      },
    };
  }

  const weights = eligible.map((e) => e.weight);
  const rng = { rngState: state.rngState };
  const picked = weightedPick(rng, eligible, weights).card;

  const activeCard: ActiveCard = {
    templateId: picked.id,
    speaker: resolve(picked.speaker, state),
    text: resolve(picked.text, state),
    left: resolveChoice(picked.left, state),
    right: resolveChoice(picked.right, state),
    down: resolveChoice(picked.down ?? DISABLED_CHOICE, state),
    color: picked.color,
  };

  return {
    ...state,
    rngState: rng.rngState,
    activeCard,
  };
}
