import type {
  ActiveCard,
  CardScript,
  ChoiceOption,
  ChoicePreview,
  DirectionSpec,
  Effects,
  GameState,
  ResourceKey,
} from "./types";
import { RESOURCE_KEYS } from "./types";
import { weightedPick } from "./rng";

const ANTI_REPEAT_WINDOW = 3;
const LARGE_THRESHOLD = 10;

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

/** Build a ChoiceOption from a DirectionSpec. */
function resolveDirection(spec: DirectionSpec): ChoiceOption {
  return {
    label: spec.label,
    disabled: spec.disabled ?? false,
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

/** Default disabled direction (for cards that omit `down`). */
const DISABLED_DIRECTION: DirectionSpec = {
  label: "",
  effects: {},
  disabled: true,
};

export function drawNextCard(
  state: GameState,
  scripts: CardScript[],
): GameState {
  const pool = scripts.flatMap((s) => s(state));

  const recentIds = new Set(
    state.history.slice(-ANTI_REPEAT_WINDOW).map((h) => h.cardId),
  );

  let eligible = pool.filter((e) => !recentIds.has(e.id) && e.weight > 0);

  if (eligible.length === 0) {
    eligible = pool.filter((e) => e.weight > 0);
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
  const picked = weightedPick(rng, eligible, weights);

  const activeCard: ActiveCard = {
    templateId: picked.id,
    speaker: picked.speaker,
    text: picked.text,
    left: resolveDirection(picked.left),
    right: resolveDirection(picked.right),
    down: resolveDirection(picked.down ?? DISABLED_DIRECTION),
    color: picked.color,
  };

  return {
    ...state,
    rngState: rng.rngState,
    activeCard,
  };
}
