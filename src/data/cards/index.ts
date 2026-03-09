// Side-effect imports — each file registers Card objects via register()
// To add a new card: add it to the appropriate grouped file, or create a new .ts file.

// Stub cards (placeholders while real cards are being written)
import "./routine";
import "./incidents";
import "./political";
import "./chains";
import "./crisis";
import "./late-game";

// Enforcement
import "./enforcement-detection";
import "./enforcement-supply-chain";
import "./enforcement-costs";
import "./enforcement-friction";
import "./enforcement-integrity";
import "./enforcement-monitoring";
import "./enforcement-ai-paradox";

// Intelligence & weight security
import "./intelligence-networks";
import "./weight-security";
import "./data-center-chain";
import "./rogue-lab-chain";

// International
import "./international-coalition";
import "./international-adversarial";
import "./military-escalation";

// Research & safety
import "./research-dual-use";
import "./research-scaling";
import "./research-safety-progress";
import "./safety-era-chain";

// Institutional
import "./institutional-internal";
import "./institutional-leadership";
import "./institutional-capture";

// Economic & corporate
import "./economic-costs";
import "./corporate-response";
import "./innovation-suppression";

// Political & opinion
import "./political-support";
import "./opinion-dynamics";
import "./opposition-legal";
import "./accelerationist-opposition";
import "./government-political";

// Capability & harms
import "./sub-asi-harms";
import "./algorithmic-threat";

// Win condition
import "./win-condition";

import type { Card } from "../../engine/types";
import { getCards } from "./registry";

export const ALL_CARDS: readonly Card[] = getCards();
