// --- Resource bars (visible to player) ---

// Working hypothesis — will change based on what cards actually need
export type ResourceKey = "pol" | "int" | "saf" | "alg";

export const RESOURCE_KEYS: ResourceKey[] = ["pol", "int", "saf", "alg"];

export interface Resources {
  pol: number; // Political power — mandate, budget, authority
  int: number; // Intelligence — monitoring, surveillance, information quality
  saf: number; // Safety progress — alignment research advancement
  alg: number; // Algorithmic progress — capability knowledge, shrinking lethal threshold
}

/** Resource deltas for visible bars. Omitted = no change. */
export type Effects = Partial<Record<ResourceKey, number>>;

// --- Hidden state (not visible to player, mediates card interactions) ---

/** Arbitrary key-value pairs that cards read and write.
 *  The medium through which cards interact without pairwise history checks. */
export type HiddenState = Record<string, number>;

// --- Directional previews (shown on tilt) ---

export type PreviewSize = "small" | "large";

export interface ChoicePreview {
  resource: ResourceKey;
  direction: "up" | "down";
  size: PreviewSize;
}

// --- Card pool entries (produced by CardScript functions) ---

/** One direction's spec in a pool entry. */
export interface DirectionSpec {
  label: string;
  effects: Effects;
  /** Changes to hidden state variables. */
  hiddenEffects?: Record<string, number>;
  /** When true, UX refuses swipe in this direction. */
  disabled?: boolean;
}

/** A pool entry produced by a card script. */
export interface PoolEntry {
  id: string;
  speaker: string;
  text: string;
  left: DirectionSpec;
  right: DirectionSpec;
  /** Third option (swipe down). Omit for standard 2-choice cards. */
  down?: DirectionSpec;
  weight: number;
  color?: string;
}

/** A script that populates the card pool. Runs every turn. */
export type CardScript = (state: GameState) => PoolEntry[];

// --- Resolved choices (built by engine from DirectionSpec) ---

/** Resolved choice with apply function and previews. */
export interface ChoiceOption {
  label: string;
  apply: (state: GameState) => GameState;
  previews: ChoicePreview[];
  disabled: boolean;
}

/** Active card ready for the UI. */
export interface ActiveCard {
  templateId: string;
  speaker: string;
  text: string;
  left: ChoiceOption;
  right: ChoiceOption;
  down: ChoiceOption;
  color?: string;
}

// --- Game state ---

export type ChoiceDirection = "left" | "right" | "down";

export interface HistoryEntry {
  turn: number;
  cardId: string;
  choice: ChoiceDirection;
}

export interface DeathInfo {
  resource: ResourceKey;
  extreme: "depleted" | "overloaded";
  message: string;
}

export type GamePhase = "title" | "tutorial" | "playing" | "dead" | "victory";

export interface TutorialCard {
  id: string;
  speaker: string;
  text: string;
  leftLabel: string;
  rightLabel: string;
  highlightResources?: boolean;
}

export interface GameState {
  phase: GamePhase;
  resources: Resources;
  hidden: HiddenState;
  turn: number;
  activeCard: ActiveCard | null;
  rngState: number;
  death: DeathInfo | null;
  history: HistoryEntry[];
}
