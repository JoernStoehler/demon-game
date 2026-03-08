export type ResourceKey = "trust" | "funding" | "intel" | "leverage";

export interface Resources {
  trust: number; // 0-100
  funding: number; // 0-100
  intel: number; // 0-100
  leverage: number; // 0-100
}

/** Resource deltas: { trust: 5, intel: -3 } means trust +5, intel -3. Omitted = no change. */
export type Effects = Partial<Record<ResourceKey, number>>;

/** Directional preview shown on tilt: small or large change */
export type PreviewSize = "small" | "large";

export interface ChoicePreview {
  resource: ResourceKey;
  direction: "up" | "down";
  size: PreviewSize;
}

/** A pool entry produced by a card script. Flat structure — no nesting. */
export interface PoolEntry {
  id: string;
  speaker: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  leftEffects: Effects;
  rightEffects: Effects;
  weight: number;
  color?: string;
}

/** A script that populates the card pool. Runs every turn. */
export type CardScript = (state: GameState) => PoolEntry[];

/** Resolved choice with apply function and previews — built by the engine from Effects. */
export interface ChoiceOption {
  label: string;
  /** Reducer: takes current state, returns new state with effects applied */
  apply: (state: GameState) => GameState;
  /** Visual-only directional previews shown on tilt (Reigns-style, no numbers) */
  previews: ChoicePreview[];
}

/** Active card ready for the UI — engine resolves PoolEntry into this. */
export interface ActiveCard {
  templateId: string;
  speaker: string;
  text: string;
  left: ChoiceOption;
  right: ChoiceOption;
  color?: string;
}

export interface HistoryEntry {
  turn: number;
  cardId: string;
  choice: "left" | "right";
}

export interface DeathInfo {
  resource: ResourceKey;
  extreme: "depleted" | "overloaded";
  message: string;
}

export type GamePhase = "title" | "tutorial" | "playing" | "dead";

export interface TutorialCard {
  id: string;
  speaker: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  /** When true, resource bar icons get a highlight glow */
  highlightResources?: boolean;
}

export interface GameState {
  phase: GamePhase;
  resources: Resources;
  turn: number;
  activeCard: ActiveCard | null;
  rngState: number;
  death: DeathInfo | null;
  history: HistoryEntry[];
}
