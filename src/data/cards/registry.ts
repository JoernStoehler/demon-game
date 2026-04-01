// TODO: All 144 cards are placeholder from pause-game. Must be fully replaced for demon-game.
import type { Card } from "../../engine/types";

const cards: Card[] = [];

/** Register one or more card declarations. Called as side effect at module load. */
export function register(...defs: Card[]): void {
  cards.push(...defs);
}

/** Return all registered cards. Call after all card modules have been imported. */
export function getCards(): readonly Card[] {
  return cards;
}
