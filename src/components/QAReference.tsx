/**
 * QA Reference page — accessible via #qa in the URL.
 * Shows numbered portraits and card content for feedback.
 */

import { SpeakerPortrait } from "./SpeakerPortrait";
import { CARD_SCRIPTS } from "../data/cards";
import { DEATH_MESSAGES } from "../data/deaths";
import { newGame } from "../engine/state";
import type { PoolEntry, ResourceKey } from "../engine/types";

const RESOURCE_LABELS: Record<ResourceKey, string> = {
  trust: "Trust",
  funding: "Funding",
  intel: "Intel",
  leverage: "Leverage",
};

const LARGE_THRESHOLD = 10;

/** All unique speakers in portrait-import order */
const SPEAKERS = [
  "Chief Financial Officer",
  "Communications Director",
  "Head of Human Resources",
  "Political Advisor",
  "Press Secretary",
  "Intelligence Analyst",
  "Junior Analyst",
  "Customs Liaison",
  "Anonymous Source",
  "Diplomatic Attaché",
  "Legal Counsel",
  "Civil Liberties Advocate",
  "UN Secretary-General",
  "Ethics Watchdog",
  "Finance Director",
  "Enforcement Chief",
  "Investigative Journalist",
  "NATO Liaison",
  "Chief Scientist",
  "Deputy Director",
  "Executive Assistant",
];

/** Collect all unique cards by running scripts with various states */
function collectAllCards(): PoolEntry[] {
  const base = newGame(1);
  const states = [
    base,
    { ...base, turn: 10 },
    { ...base, turn: 20 },
    { ...base, resources: { ...base.resources, trust: 15 } },
    { ...base, resources: { ...base.resources, funding: 15 } },
    { ...base, resources: { ...base.resources, intel: 15 } },
    { ...base, resources: { ...base.resources, leverage: 15 } },
    { ...base, resources: { ...base.resources, intel: 85 } },
    { ...base, resources: { ...base.resources, funding: 85 } },
    { ...base, resources: { ...base.resources, leverage: 85 } },
    { ...base, resources: { ...base.resources, trust: 85 } },
    // With some history for chain cards
    { ...base, turn: 5, history: [
      { turn: 2, cardId: "whistleblower", choice: "left" as const },
      { turn: 3, cardId: "lobby-meeting", choice: "left" as const },
    ]},
    { ...base, turn: 5, history: [
      { turn: 2, cardId: "whistleblower", choice: "right" as const },
    ]},
  ];
  const seen = new Set<string>();
  const cards: PoolEntry[] = [];
  for (const state of states) {
    for (const script of CARD_SCRIPTS) {
      for (const entry of script(state)) {
        if (!seen.has(entry.id)) {
          seen.add(entry.id);
          cards.push(entry);
        }
      }
    }
  }
  return cards;
}

const ALL_CARDS = collectAllCards();

function EffectBadges({ effects }: { effects: Partial<Record<ResourceKey, number>> }) {
  const entries = Object.entries(effects).filter(([, v]) => v !== 0) as [ResourceKey, number][];
  return (
    <span className="inline-flex gap-1 flex-wrap">
      {entries.map(([resource, value]) => (
        <span
          key={resource}
          className={`text-xs px-1.5 py-0.5 rounded ${
            value > 0 ? "bg-green-800 text-green-200" : "bg-red-800 text-red-200"
          }`}
        >
          {RESOURCE_LABELS[resource]} {value > 0 ? "↑" : "↓"}
          {Math.abs(value) >= LARGE_THRESHOLD ? (value > 0 ? "↑" : "↓") : ""}
        </span>
      ))}
    </span>
  );
}

export function QAReference() {
  return (
    <div className="min-h-dvh bg-neutral-900 text-neutral-200 p-4 font-mono text-sm max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-1">QA Reference</h1>
      <p className="text-neutral-400 mb-6">Use numbers to reference items in feedback.</p>

      {/* --- PORTRAITS --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Portraits</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
        {SPEAKERS.map((speaker, i) => (
          <div key={speaker} className="text-center">
            <div className="relative">
              <span className="absolute top-1 left-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-bold z-10">
                P{i + 1}
              </span>
              <div className="rounded overflow-hidden">
                <SpeakerPortrait speaker={speaker} />
              </div>
            </div>
            <p className="text-xs mt-1 text-neutral-300">{speaker}</p>
          </div>
        ))}
      </div>

      {/* --- CARDS --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Cards ({ALL_CARDS.length})</h2>
      <div className="space-y-4 mb-10">
        {ALL_CARDS.map((card, i) => (
          <div key={card.id} className="bg-neutral-800 rounded p-3">
            <div className="flex items-start gap-2 mb-2">
              <span className="bg-amber-700 text-white text-xs px-1.5 py-0.5 rounded font-bold shrink-0">
                C{i + 1}
              </span>
              <div>
                <span className="font-bold text-amber-300">{card.speaker}</span>
                <span className="text-neutral-500 ml-2 text-xs">({card.id})</span>
              </div>
            </div>
            <p className="text-neutral-300 mb-2 leading-relaxed">{card.text}</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-neutral-700/50 rounded p-2">
                <div className="text-blue-300 font-bold mb-1">← {card.leftLabel}</div>
                <EffectBadges effects={card.leftEffects} />
              </div>
              <div className="bg-neutral-700/50 rounded p-2">
                <div className="text-orange-300 font-bold mb-1">{card.rightLabel} →</div>
                <EffectBadges effects={card.rightEffects} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- DEATH MESSAGES --- */}
      <h2 className="text-xl font-bold mb-3 border-b border-neutral-700 pb-1">Death Messages</h2>
      <div className="space-y-4 mb-10">
        {(Object.entries(DEATH_MESSAGES) as [ResourceKey, { depleted: string[]; overloaded: string[] }][]).map(
          ([resource, msgs]) => (
            <div key={resource} className="bg-neutral-800 rounded p-3">
              <h3 className="font-bold text-amber-300 mb-2">{RESOURCE_LABELS[resource]}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div>
                  <div className="text-red-400 font-bold mb-1">At 0 (depleted)</div>
                  {msgs.depleted.map((m, i) => (
                    <p key={i} className="text-neutral-400 mb-1">
                      {i + 1}. {m}
                    </p>
                  ))}
                </div>
                <div>
                  <div className="text-red-400 font-bold mb-1">At 100 (overloaded)</div>
                  {msgs.overloaded.map((m, i) => (
                    <p key={i} className="text-neutral-400 mb-1">
                      {i + 1}. {m}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>

      <p className="text-neutral-500 text-xs text-center pb-4">
        Ref format: P1-P{SPEAKERS.length} for portraits, C1-C{ALL_CARDS.length} for cards
      </p>
    </div>
  );
}
