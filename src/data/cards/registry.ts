import type { CardScript } from "../../engine/types";

const scripts: CardScript[] = [];

/** Register one or more card scripts. Called as side effect at module load. */
export function register(...fns: CardScript[]): void {
  scripts.push(...fns);
}

/** Return all registered scripts. Call after all card modules have been imported. */
export function getScripts(): readonly CardScript[] {
  return scripts;
}
