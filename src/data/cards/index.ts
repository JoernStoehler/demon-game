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
import "./ai-self-improvement";
import "./whistleblower-dilemma";
import "./false-positive-cascade";
import "./power-grid-anomaly";
import "./corporate-lobbying";
import "./mole-discovery";
import "./election-year";
import "./dual-use-publication";
import "./sanctions-evasion";
import "./ai-refuses-order";
import "./safety-looks-solved";
import "./race-begins";
import "./pivotal-moment";
import "./compliant-defection";
import "./airstrike-debate";
import "./pharma-breakthrough";
import "./autonomous-vehicle-massacre";
import "./compliant-company-raid";
import "./cloud-provider-loophole";
import "./weight-theft";
import "./us-china-suspicion";
import "./vote-of-no-confidence";
import "./morale-crisis";
import "./saboteur-or-hero";
import "./media-waste-story";
import "./near-miss";
import "./unemployment-crisis";
import "./generational-shift";
import "./datacenter-hidden";
import "./surveillance-blind-spot";
import "./agency-trains-ai";
import "./success-trap";
import "./econ-boom-request";
import "./rogue-internal-experiment";
import "./old-chips-new-tricks";
import "./true-believer";
import "./leadership-purge";
import "./protest-that-helps";
import "./custom-asic-foundry";
import "./emperor-billionaire";
import "./disposal-bribery";
import "./budget-turf-war";
import "./deepfake-election";
import "./ai-assistant-incident";
import "./approval-dilemma";
import "./contradictory-reports";
import "./black-market-signal";

import type { CardScript } from "../../engine/types";
import { getScripts } from "./registry";

export const CARD_SCRIPTS: CardScript[] = [...getScripts()];
