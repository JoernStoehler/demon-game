// Source: event-map #international--emperor-manifesto
// Rationale: teaches that ideological opposition can't be deterred the way profit
//   motivation can. The accelerationist opinion cluster is real and growing. "He's
//   selling hope, we're selling fear."
// Dynamic: 30 years of political noise; opinion clusters shift
// Category: history-triggered (consequence of emperor-billionaire)

import { register } from "./registry";

register((state) => {
  const trigger = state.history.find(
    (h) => h.cardId === "emperor-billionaire",
  );
  if (!trigger) return [];
  const delay = state.turn - trigger.turn;
  if (delay < 2 || delay > 5) return [];
  return [{
    id: "emperor-manifesto",
    speaker: "Communications Director",
    text: "Whether we stopped him or not, the billionaire's 80-page manifesto has gone viral. 'The Case for Cosmic Ambition' argues the pause condemns humanity to mediocrity. It's passionate, well-written, and wrong in ways that require technical expertise to rebut. Three bestselling authors endorsed it. University students are organizing 'Free the Future' rallies. The accelerationist cluster grew six points in two months. I'll be blunt: we can't out-argue a vision of the future with warnings about risk. He's selling hope. We're selling fear.",
    left: {
      label: "Public scientific rebuttal",
      effects: { pol: -5, saf: -3 },
      hiddenEffects: { narrative_damage: -1 },
    },
    right: {
      label: "Don't dignify it with a response",
      effects: { pol: -8 },
      hiddenEffects: { narrative_damage: 1 },
    },
    weight: 8,
  }];
});
