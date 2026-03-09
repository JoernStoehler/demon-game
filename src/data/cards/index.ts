// Side-effect imports — each file registers its scripts via register()
// To add a new card: create a .ts file, import { register } from "./registry", done.

// Stub scripts (placeholders while real cards are being written)
import "./routine";
import "./incidents";
import "./political";
import "./chains";
import "./crisis";
import "./late-game";

// Individual card scripts
import "./supreme-court-challenge";
import "./deepfake-director";
import "./megachurch-sermon";
import "./labor-union-split";
import "./algorithmic-shortcut";
import "./thermal-anomaly";
import "./chip-diversion";
import "./safety-dual-use";
import "./brain-drain";
import "./election-reversal";
import "./nvidia-threshold-lobby";
import "./withdrawal-threat";
import "./billionaire-island";
import "./success-narrative";
import "./internal-dissent";
import "./taiwan-crisis";
import "./ai-gdp-dependency";
import "./safety-stall";
import "./consumer-hw-threshold";
import "./pentagon-funding";
import "./rogue-lab-whistleblower";

import type { CardScript } from "../../engine/types";
import { getScripts } from "./registry";

export const CARD_SCRIPTS: CardScript[] = [...getScripts()];
