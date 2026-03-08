import type { CardScript } from "../../engine/types";
import { routineScripts } from "./routine";
import { incidentScripts } from "./incidents";
import { politicalScripts } from "./political";
import { chainScripts } from "./chains";
import { crisisScripts } from "./crisis";
import { lateGameScripts } from "./late-game";

export const CARD_SCRIPTS: CardScript[] = [
  ...routineScripts,
  ...incidentScripts,
  ...politicalScripts,
  ...chainScripts,
  ...crisisScripts,
  ...lateGameScripts,
];
